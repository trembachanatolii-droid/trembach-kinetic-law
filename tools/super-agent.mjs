// tools/super-agent.mjs
// Node 18/20, ESM

import fs from "fs-extra";
import path from "node:path";
import fg from "fast-glob";
import { JSDOM } from "jsdom";

/* ----------------------- small arg parser ----------------------- */
function parseArgs(argv) {
  const out = { files: "", ask: "", planJsonFile: "", dry: false };
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--files") out.files = argv[++i] ?? "";
    else if (a === "--ask") out.ask = argv[++i] ?? "";
    else if (a === "--plan-json-file") out.planJsonFile = argv[++i] ?? "";
    else if (a === "--dry") out.dry = true;
  }
  return out;
}

/* ---------------------------- utils ----------------------------- */
const read = (p) => fs.readFile(p, "utf8");
const write = (p, s) => fs.writeFile(p, s, "utf8");

function normSpace(s) { return s.replace(/\s+/g, " ").trim(); }

function uniquePush(arr, item, byString = true) {
  if (byString ? !arr.some(x => String(x) === String(item)) : !arr.includes(item)) {
    arr.push(item);
  }
}

function prettyRel(from, to) {
  return path.posix.relative(path.posix.dirname(from), to) || ".";
}

/** Find the first matching element from a selector list */
function firstSel(doc, selectors) {
  for (const sel of selectors) {
    const el = doc.querySelector(sel);
    if (el) return el;
  }
  return null;
}

/** Select a likely hero container */
function findHero(doc) {
  return firstSel(doc, [
    "section.hero", "header.hero", ".homeHeader", ".hero", "#hero", "[data-hero]",
    ".homeHeader__content", ".homeHeader__container"
  ]) || doc.body; // fallback
}

/** Heuristically find a "card stack" container in source DOM */
function findCardStack(doc) {
  const candidates = [
    ".card-stack", ".cards", ".cards-stack", ".stack", ".swiper", ".swiper-container",
    ".homeHeader__mediaCard", ".homeHeader__media", ".media-cards", "[data-card-stack]"
  ];
  // Prefer deeper “media card” areas first
  for (const sel of candidates) {
    const el = doc.querySelector(sel);
    if (el) return el;
  }
  // As a last resort grab any element that contains a set of repeating cards
  const manyCards = [...doc.querySelectorAll("[class*='card']")]
    .map(el => el.closest("section,div,article"))
    .filter(Boolean);
  if (manyCards.length) return manyCards[0];
  return null;
}

/** Collect inline <style>/<script> that are likely needed for the copied widget */
function collectLocalAssets(container) {
  const need = { styles: [], scripts: [] };

  // 1) embedded within the container
  container.querySelectorAll("style").forEach(s => uniquePush(need.styles, s.textContent.trim()));
  container.querySelectorAll("script").forEach(s => uniquePush(need.scripts, s.textContent ?? ""));

  // 2) siblings very near container (often authors drop init scripts next to widgets)
  const parent = container.parentElement;
  if (parent) {
    const near = [...parent.querySelectorAll("style,script")].filter(el => {
      // skip duplicates we already took that are children of the container
      return !container.contains(el);
    });
    for (const el of near) {
      if (el.tagName === "STYLE") uniquePush(need.styles, el.textContent.trim());
      if (el.tagName === "SCRIPT") uniquePush(need.scripts, el.textContent ?? "");
    }
  }

  // De-duplicate by content
  need.styles = [...new Set(need.styles.filter(Boolean))];
  need.scripts = [...new Set(need.scripts.filter(Boolean))];

  return need;
}

/** Adjust relative URLs in <img>, <video>, <link>, etc., to remain valid in destination */
function rewriteRelativeAssets(fragmentDoc, fromFile, toFile) {
  const fromDir = path.posix.dirname(fromFile);
  const toDir = path.posix.dirname(toFile);

  const urlAttrs = [
    ["img", "src"], ["source", "src"], ["video", "poster"], ["video", "src"],
    ["link", "href"], ["script", "src"]
  ];

  for (const [tag, attr] of urlAttrs) {
    fragmentDoc.querySelectorAll(`${tag}[${attr}]`).forEach(el => {
      const val = el.getAttribute(attr);
      if (!val) return;
      // ignore data URIs and absolute http(s)
      if (/^(data:|https?:|\/\/)/i.test(val)) return;

      // compute absolute (posix) from src file
      const absFrom = path.posix.normalize(path.posix.join(fromDir, val));
      // rebase to destination directory
      const rebased = path.posix.relative(toDir, absFrom);
      el.setAttribute(attr, rebased || path.posix.basename(absFrom));
    });
  }
}

/** Create a minimal diff preview (string) */
function diffPreview(before, after, limit = 1200) {
  if (before === after) return "No changes.";
  const linesB = before.split(/\r?\n/);
  const linesA = after.split(/\r?\n/);
  const head = [];
  const n = Math.min(linesB.length, linesA.length);
  for (let i = 0; i < n; i++) {
    if (linesB[i] !== linesA[i]) {
      head.push(`- ${linesB[i]}`);
      head.push(`+ ${linesA[i]}`);
      if (head.join("\n").length > limit) break;
    }
  }
  return head.slice(0, 80).join("\n") || "(changed, but large; omitted preview)";
}

/* --------------------------- main logic -------------------------- */
async function main() {
  const args = parseArgs(process.argv);
  const result = { ok: false, actions: [], error: "" };

  // Resolve file list
  const pattern = (args.files && args.files.trim()) || "comprehensive_site/sites/**/*.html";
  const entries = await fg(pattern, { dot: false, posix: true, onlyFiles: true });

  if (!entries.length) {
    result.error = `No files matched: ${pattern}`;
    console.log(JSON.stringify(result, null, 2));
    process.exit(2);
  }

  // If the ask contains “copy card stack from site2 to site3” we’ll do that specific task.
  const ask = (args.ask || "").toLowerCase();
  const wantsCopyStack =
    /copy.+card\s+stack/.test(ask) &&
    /(site\s*2|site2)/.test(ask) &&
    /(site\s*3|site3)/.test(ask);

  if (!wantsCopyStack) {
    result.error = "This agent currently focuses on: copy card stack from site2 hero to site3 hero.";
    console.log(JSON.stringify(result, null, 2));
    process.exit(2);
  }

  // Pick the first html under site2 and site3
  const srcFile = entries.find(p => /\/site2\/.+\.html$/i.test(p));
  const dstFile = entries.find(p => /\/site3\/.+\.html$/i.test(p));

  if (!srcFile || !dstFile) {
    result.error = `Could not locate source/destination:
- src (site2): ${srcFile || "not found"}
- dst (site3): ${dstFile || "not found"}`;
    console.log(JSON.stringify(result, null, 2));
    process.exit(2);
  }

  const [srcHTML, dstHTML] = await Promise.all([read(srcFile), read(dstFile)]);

  const srcDOM = new JSDOM(srcHTML);
  const dstDOM = new JSDOM(dstHTML);

  const srcDoc = srcDOM.window.document;
  const dstDoc = dstDOM.window.document;

  // Find card stack in site2
  const srcStack = findCardStack(srcDoc);
  if (!srcStack) {
    result.error = "No card/stack/swiper/carousel element found in source hero.";
    console.log(JSON.stringify(result, null, 2));
    process.exit(2);
  }

  // Clone as a fragment (so we can rewrite asset paths)
  const tempDOM = new JSDOM("<!doctype html><body></body>");
  const fragDoc = tempDOM.window.document;
  const cloneWrapper = fragDoc.createElement("div");
  cloneWrapper.innerHTML = srcStack.outerHTML;
  fragDoc.body.appendChild(cloneWrapper);

  rewriteRelativeAssets(fragDoc, srcFile, dstFile);

  // Collect inline assets (styles/scripts) from around the source widget
  const { styles, scripts } = collectLocalAssets(srcStack);

  // Find hero (destination)
  const hero = findHero(dstDoc);
  if (!hero) {
    result.error = "Destination hero not found.";
    console.log(JSON.stringify(result, null, 2));
    process.exit(2);
  }

  // Prefer a media/right column in destination hero if present
  const rightSpot = firstSel(dstDoc, [
    ".homeHeader__mediaCard", ".homeHeader__media", ".hero__media",
    "[data-hero-media]", ".hero-right", ".hero__right"
  ]) || hero;

  // Insert cloned stack at the end of right spot
  const beforeHTML = dstDoc.documentElement.outerHTML;

  // Create a container so it’s easy to find/remove later
  const anchor = dstDoc.createElement("div");
  anchor.setAttribute("data-agent-insert", "hero-card-stack");
  anchor.innerHTML = cloneWrapper.innerHTML;
  rightSpot.appendChild(anchor);

  // Ensure styles exist in the <head>
  const head = dstDoc.querySelector("head") || dstDoc.body;
  for (const css of styles) {
    if (!dstDoc.documentElement.outerHTML.includes(css)) {
      const st = dstDoc.createElement("style");
      st.textContent = css;
      head.appendChild(st);
      result.actions.push("Added inline <style> for card stack.");
    }
  }

  // Ensure scripts are placed at end of body (keep order)
  const body = dstDoc.body || dstDoc.documentElement;
  for (const js of scripts) {
    if (!dstDoc.documentElement.outerHTML.includes(js)) {
      const sc = dstDoc.createElement("script");
      sc.textContent = js;
      body.appendChild(sc);
      result.actions.push("Added inline <script> for card stack.");
    }
  }

  const afterHTML = dstDoc.documentElement.outerHTML;

  if (args.dry) {
    result.ok = true;
    result.actions.unshift(
      `Plan: Insert card stack from ${prettyRel(dstFile, srcFile)} into hero of ${path.posix.basename(dstFile)}.`
    );
    result.diff = diffPreview(beforeHTML, afterHTML);
    console.log(JSON.stringify(result, null, 2));
    return;
  }

  // Write back
  await write(dstFile, afterHTML);
  result.ok = true;
  result.actions.unshift(
    `Inserted card stack from ${prettyRel(dstFile, srcFile)} into ${path.posix.basename(dstFile)}`
  );

  console.log(JSON.stringify(result, null, 2));
}

main().catch(err => {
  const out = { ok: false, error: err?.message || String(err) };
  console.log(JSON.stringify(out, null, 2));
  process.exit(1);
});
