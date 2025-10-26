// tools/super-agent.mjs
// ESM script for GitHub Actions. Requires: jsdom, fast-glob, fs-extra, (optional) prettier
// Usage (example):
//   node tools/super-agent.mjs \
//     --files "comprehensive_site/sites/site2/*.html comprehensive_site/sites/site3/*.html" \
//     --ask "COPY_CARD_STACK from site2 hero to site3 hero (preserve animations)" \
//     --plan-json "{}" --dry   # (omit --dry to commit)

import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import fg from "fast-glob";
import { JSDOM } from "jsdom";
import fse from "fs-extra";

let prettier = null;
try {
  // optional
  ({ default: prettier } = await import("prettier"));
} catch (_) {}

/* ----------------------------- CLI PARSING ----------------------------- */

function parseArgs(argv) {
  const out = { files: "", ask: "", planJson: "", dry: false };
  const a = [...argv];
  for (let i = 0; i < a.length; i++) {
    const t = a[i];
    if (t === "--files") out.files = a[++i] ?? "";
    else if (t === "--ask") out.ask = a[++i] ?? "";
    else if (t === "--plan-json") out.planJson = a[++i] ?? "";
    else if (t === "--dry") out.dry = true;
  }
  return out;
}

function splitGlobsPreservingOrder(globs) {
  // Split on whitespace but keep quoted segments intact if any slipped in
  // We accept simply space-separated tokens for Actions usage.
  return globs
    .trim()
    .split(/\s+/)
    .filter(Boolean);
}

function expandGlobsInOrder(globTokens) {
  const hits = [];
  for (const token of globTokens) {
    const found = fg.sync(token, {
      onlyFiles: true,
      dot: true,
      unique: true,
      // keep natural order returned by fs for that token
    });
    for (const f of found) {
      if (/\.(html?)$/i.test(f) && !hits.includes(f)) hits.push(f);
    }
  }
  return hits;
}

/* --------------------------- DOM UTILITIES ----------------------------- */

async function loadHtml(filepath) {
  const html = await fs.readFile(filepath, "utf8");
  const dom = new JSDOM(html);
  return { filepath, html, dom, doc: dom.window.document };
}

async function writeHtml(filepath, html) {
  let out = html;
  if (prettier) {
    try {
      out = await prettier.format(html, { parser: "html" });
    } catch {
      // ignore formatting errors; still write
    }
  }
  await fs.writeFile(filepath, out, "utf8");
}

function findHero(doc) {
  const hero =
    doc.querySelector('section[id*="hero" i], section[class*="hero" i]') ||
    doc.querySelector('header[id*="hero" i], header[class*="hero" i]') ||
    doc.querySelector('[id*="hero" i], [class*="hero" i]') ||
    doc.querySelector("main") ||
    doc.body;
  return hero;
}

function hasManyCards(node) {
  if (!node) return false;
  const matches = node.querySelectorAll(
    '.card, [class*="card" i], [class*="tile" i], .tile, .panel, .item'
  );
  return matches.length >= 3;
}

function findCardStackInHero(hero) {
  if (!hero) return null;

  // Obvious candidates first
  let candidate =
    hero.querySelector(
      '[class*="card-stack" i], [data-stack], .card-stack, .cards, .stack, .cardgrid, .card-group'
    ) ||
    // Try container that *contains* many cards
    [...hero.querySelectorAll("*")].find((el) => hasManyCards(el));

  return candidate || null;
}

function uniquePush(arr, item) {
  if (!arr.includes(item)) arr.push(item);
}

function allClassAndIdTokens(rootEl) {
  const classes = new Set();
  const ids = new Set();
  const all = [rootEl, ...rootEl.querySelectorAll("*")];
  for (const el of all) {
    if (el.id) ids.add(`#${el.id}`);
    for (const cls of (el.className || "").toString().split(/\s+/).filter(Boolean)) {
      classes.add(`.${cls}`);
    }
  }
  return { classes: [...classes], ids: [...ids] };
}

function textContainsAny(text, needles) {
  const t = text || "";
  return needles.some((n) => t.includes(n));
}

function headAssetSignature(node) {
  if (!node) return "";
  if (node.tagName === "LINK") return `LINK::${node.getAttribute("href") || ""}`;
  if (node.tagName === "SCRIPT") return `SCRIPT::${node.getAttribute("src") || ""}::${(node.textContent || "").slice(0, 80)}`;
  if (node.tagName === "STYLE") return `STYLE::${(node.textContent || "").slice(0, 120)}`;
  return `${node.tagName}::${(node.outerHTML || "").slice(0, 120)}`;
}

function ensureHeadAssets(targetDoc, srcDoc, stackEl) {
  const added = { links: 0, scripts: 0, styles: 0 };
  const targetHead = targetDoc.querySelector("head") || targetDoc.body;
  const srcHead = srcDoc.querySelector("head");

  const { classes, ids } = allClassAndIdTokens(stackEl);
  const selectors = [...classes, ...ids];
  const keywords = [
    "card",
    "stack",
    "swiper",
    "gsap",
    "anime",
    "lenis",
    "motion",
    "scroll",
    "framer",
    "aos",
  ];

  const existingSigs = new Set(
    [...targetHead.querySelectorAll("link,script,style")].map(headAssetSignature)
  );

  // Copy external assets if they seem related
  for (const link of srcHead?.querySelectorAll('link[rel="stylesheet"]') || []) {
    const href = link.getAttribute("href") || "";
    if (!href) continue;
    const shouldCopy =
      keywords.some((k) => href.toLowerCase().includes(k)) ||
      textContainsAny(link.outerHTML, selectors);
    if (shouldCopy) {
      const sig = headAssetSignature(link);
      if (!existingSigs.has(sig)) {
        targetHead.appendChild(targetDoc.importNode(link, true));
        existingSigs.add(sig);
        added.links++;
      }
    }
  }

  for (const script of srcHead?.querySelectorAll("script") || []) {
    const src = script.getAttribute("src") || "";
    const payload = script.textContent || "";
    const shouldCopy =
      (src && keywords.some((k) => src.toLowerCase().includes(k))) ||
      textContainsAny(payload, selectors);
    if (shouldCopy) {
      const sig = headAssetSignature(script);
      if (!existingSigs.has(sig)) {
        targetHead.appendChild(targetDoc.importNode(script, true));
        existingSigs.add(sig);
        added.scripts++;
      }
    }
  }

  // Inline styles that reference stack selectors
  for (const style of srcHead?.querySelectorAll("style") || []) {
    const css = style.textContent || "";
    if (textContainsAny(css, selectors)) {
      const sig = headAssetSignature(style);
      if (!existingSigs.has(sig)) {
        targetHead.appendChild(targetDoc.importNode(style, true));
        existingSigs.add(sig);
        added.styles++;
      }
    }
  }

  return added;
}

function insertStackIntoTargetHero(targetHero, targetDoc, srcStack) {
  // If the target already has a stack-like element, replace it; else append.
  const existing =
    targetHero.querySelector(
      '[class*="card-stack" i], [data-stack], .card-stack, .cards, .stack, .cardgrid, .card-group'
    ) ||
    [...targetHero.querySelectorAll("*")].find((el) => hasManyCards(el));

  let placement = "append";
  const clone = targetDoc.importNode(srcStack, true);

  // Look for explicit placeholder first
  const placeholder = targetHero.querySelector("[data-card-stack-slot]");
  if (placeholder) {
    placeholder.replaceWith(clone);
    placement = "placeholder";
  } else if (existing) {
    existing.replaceWith(clone);
    placement = "replace-existing";
  } else {
    targetHero.appendChild(clone);
  }

  return { placement };
}

/* ------------------------------ MAIN ---------------------------------- */

function pickSourceAndTarget(expandedFiles, ask) {
  // If two ordered globs were passed, use [0] as source and [1] as target.
  if (expandedFiles.length >= 2) {
    return { fromFile: expandedFiles[0], toFile: expandedFiles[1] };
  }
  // Fallback: if one file only, treat it as both (no-op).
  if (expandedFiles.length === 1) {
    return { fromFile: expandedFiles[0], toFile: expandedFiles[0] };
  }
  return { fromFile: null, toFile: null };
}

function wantsCopyCardStack(ask, planJson) {
  const a = (ask || "").toLowerCase();
  if (/copy[_\s-]*card[_\s-]*stack/.test(a)) return true;
  try {
    if (planJson) {
      const plan = JSON.parse(planJson);
      if (typeof plan?.action === "string" && /copy[_-]?card[_-]?stack/i.test(plan.action))
        return true;
    }
  } catch {
    // ignore
  }
  return false;
}

async function copyCardStackWorkflow(fromFile, toFile, dry) {
  const src = await loadHtml(fromFile);
  const dst = await loadHtml(toFile);

  const srcHero = findHero(src.doc);
  const dstHero = findHero(dst.doc);

  let ok = true;
  let reason = "";
  let placement = "";
  let addedAssets = { links: 0, scripts: 0, styles: 0 };

  if (!srcHero) {
    ok = false;
    reason = "No hero section found in source.";
  }

  const stackEl = ok ? findCardStackInHero(srcHero) : null;
  if (ok && !stackEl) {
    ok = false;
    reason = "No card stack found in source hero.";
  }

  if (ok && !dstHero) {
    ok = false;
    reason = "No hero section found in target.";
  }

  if (ok) {
    // Ensure required head assets exist in target
    addedAssets = ensureHeadAssets(dst.doc, src.doc, stackEl);
    // Insert stack in target
    if (!dry) {
      const result = insertStackIntoTargetHero(dstHero, dst.doc, stackEl);
      placement = result.placement;

      // Write out
      await writeHtml(toFile, dst.dom.serialize());
    } else {
      placement = "dry-run";
    }
  }

  return {
    ok,
    reason,
    placement,
    addedAssets,
    fromFile,
    toFile,
  };
}

async function main() {
  const args = parseArgs(process.argv.slice(2));

  // Expand files in the order user provided globs
  const filesExpanded = expandGlobsInOrder(splitGlobsPreservingOrder(args.files));

  const summary = {
    inputs: {
      files
