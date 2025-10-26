#!/usr/bin/env node
/**
 * tools/super-agent.mjs
 *
 * Usage example (from CI or locally):
 *   node tools/super-agent.mjs \
 *     --files "comprehensive_site/sites/site2/*.html comprehensive_site/sites/site3/*.html" \
 *     --ask "Copy card stack from site2 hero into site3 hero."
 *
 * Behavior:
 * - If --ask contains "copy card stack" (or the token COPY_CARD_STACK), the script:
 *     1) Picks the site2 HTML as source and site3 HTML as target from the expanded --files list.
 *     2) Finds a "hero" container in both pages.
 *     3) Finds a card/stack/swiper/carousel-like element in the source hero.
 *     4) Inserts that element into the target hero (after the first heading if present).
 *     5) Copies over likely CSS/JS <link>/<script> tags referenced by the stack (if missing).
 * - Writes changes back to the target HTML unless --dry is provided.
 *
 * Exit codes:
 *   0 = success
 *   2 = usage or content error (missing files, missing stack, etc.)
 */

import fs from "fs";
import fg from "fast-glob";
import { JSDOM } from "jsdom";

/* -------------------------- arg parsing helpers -------------------------- */

const argv = process.argv.slice(2);
function getArg(name, def = "") {
  const i = argv.findIndex((a) => a === `--${name}`);
  if (i >= 0) {
    const val = argv[i + 1];
    if (val && !val.startsWith("--")) return val;
    return ""; // flag present but no value
  }
  return def;
}
function hasFlag(name) {
  return argv.includes(`--${name}`);
}

const filesArg = getArg("files", "").trim();
const ask = getArg("ask", "").trim();
const dry = hasFlag("dry");

/* ------------------------------ validations ------------------------------ */

if (!filesArg) {
  console.error("ERR: --files is required (provide one or more space-separated globs).");
  process.exit(2);
}

// Expand multiple globs separated by whitespace (avoid quotes around globs with spaces)
const patterns = filesArg.split(/\s+/).filter(Boolean);
const files = fg.sync(patterns, { onlyFiles: true, unique: true, dot: false });

if (files.length === 0) {
  console.error(`ERR: --files matched no files. Patterns: ${patterns.join(" | ")}`);
  process.exit(2);
}

/* -------------------------- DOM helper functions ------------------------- */

const HERO_HINT = /(hero|masthead|banner|above-the-fold|landing)/i;
const CARD_HINT = /(card|cards|stack|swiper|carousel|slider)/i;

/**
 * Heuristic: find a "hero" section.
 * Preference: #hero, header[role=banner], then any element whose id/class matches hero-ish words,
 * then a section/header/div containing an H1/H2, then fall back to body.
 */
function findHero(doc) {
  const explicit =
    doc.querySelector("#hero") || doc.querySelector("header[role='banner']");
  if (explicit) return explicit;

  const heroByClass = [...doc.querySelectorAll("section,header,div")].find((el) =>
    HERO_HINT.test(`${el.id || ""} ${el.className || ""}`)
  );
  if (heroByClass) return heroByClass;

  const withHeading = [...doc.querySelectorAll("section,header,div")].find((el) =>
    el.querySelector("h1,h2")
  );
  if (withHeading) return withHeading;

  return doc.body;
}

/**
 * Find an element in the hero that looks like a card stack / slider / swiper.
 * Score by number of "card-like" children and pick the highest.
 */
function findCardStack(root) {
  const candidates = [...root.querySelectorAll("[class]")].filter((el) =>
    CARD_HINT.test(el.className || "")
  );
  if (candidates.length === 0) return null;

  const score = (el) => el.querySelectorAll(".card,li,article,div").length;
  candidates.sort((a, b) => score(b) - score(a));
  return candidates[0];
}

/**
 * Collect CSS/JS tags that likely belong to the stack.
 * We’re conservative: only href/src that look "card/stack/swiper/carousel/slider"-ish.
 */
function collectStackAssets(doc) {
  const tags = [];
  for (const el of doc.querySelectorAll('link[rel="stylesheet"][href], script[src]')) {
    const ref = el.getAttribute("href") || el.getAttribute("src") || "";
    if (CARD_HINT.test(ref)) tags.push(el.outerHTML);
  }
  return [...new Set(tags)];
}

function addAssetsIfMissing(doc, assets) {
  const head = doc.querySelector("head") || doc.body;
  const existing = new Set(
    [...doc.querySelectorAll("link[href],script[src]")].map((n) => n.outerHTML)
  );
  for (const html of assets) {
    if (!existing.has(html)) head.insertAdjacentHTML("beforeend", `\n${html}\n`);
  }
}

/* --------------------------- core transformation -------------------------- */

function copyCardStack(fromHtml, toHtml, dryRun = false) {
  const src = fs.readFileSync(fromHtml, "utf8");
  const dst = fs.readFileSync(toHtml, "utf8");

  const srcDoc = new JSDOM(src).window.document;
  const dstDom = new JSDOM(dst);
  const dstDoc = dstDom.window.document;

  const srcHero = findHero(srcDoc);
  const dstHero = findHero(dstDoc);

  const stack = findCardStack(srcHero);
  if (!stack) {
    return { ok: false, reason: "No card/stack/swiper/carousel element found in source hero." };
  }

  // Bring over likely stack assets
  const assets = collectStackAssets(srcDoc);
  addAssetsIfMissing(dstDoc, assets);

  // Insert after first heading in target hero (if present), else append to hero
  const after = dstHero.querySelector("h1,h2");
  if (after) {
    after.insertAdjacentHTML("afterend", `\n${stack.outerHTML}\n`);
  } else {
    dstHero.insertAdjacentHTML("beforeend", `\n${stack.outerHTML}\n`);
  }

  const out = dstDom.serialize();
  if (!dryRun) fs.writeFileSync(toHtml, out, "utf8");

  return { ok: true, from: fromHtml, to: toHtml, assetsAdded: assets.length, dryRun };
}

/* ------------------------------- main logic ------------------------------- */

const summary = {
  files,
  ask,
  dry,
  mode: "noop",
};

function pickSourceAndTarget(filesList) {
  // Prefer a site2 file for source, site3 for target; otherwise first two files.
  const fromFile =
    filesList.find((p) => /\/site2\//.test(p)) || filesList[0];
  const toFile =
    filesList.find((p) => /\/site3\//.test(p)) || filesList[1];

  return { fromFile, toFile };
}

const wantsCopy =
  /copy\s*card\s*stack/i.test(ask) || /COPY_CARD_STACK/.test(ask);

if (wantsCopy) {
  const { fromFile, toFile } = pickSourceAndTarget(files);

  if (!fromFile || !toFile || fromFile === toFile) {
    console.error(
      "ERR: Need two HTML files (source and target). Provide globs for site2 and site3, e.g.\n" +
        '  --files "comprehensive_site/sites/site2/*.html comprehensive_site/sites/site3/*.html"'
    );
    process.exit(2);
  }

  summary.mode = "copy-card-stack";
  const result = copyCardStack(fromFile, toFile, dry);
  summary.result = result;
  console.log(JSON.stringify(summary, null, 2));
  if (!result.ok) process.exit(2);
  process.exit(0);
}

// No recognized instruction — just report which files we would consider.
console.log(JS
::contentReference[oaicite:0]{index=0}
