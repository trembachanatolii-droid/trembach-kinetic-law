// tools/super-agent.mjs
import { createRequire } from 'module';
import path from 'path';
import fs from 'fs';
import url from 'url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);
const { JSDOM } = require('jsdom');
const prettier = require('prettier');
const fg = require('fast-glob');
const fse = require('fs-extra');

// ---- helpers ---------------------------------------------------------------
const log = (...a) => console.log(...a);

function parseInputs() {
  // GitHub Actions "workflow_dispatch" inputs land in env as INPUT_*
  const envFiles = process.env.INPUT_FILES || '';
  const envAsk = process.env.INPUT_ASK || '';
  const envPlan = process.env.INPUT_PLAN_JSON || '';
  const envDry = (process.env.INPUT_DRY_RUN || 'false').toLowerCase() === 'true';

  // Support comma or newline separated list, and keep spaces/() intact
  const files = envFiles
    .split(/\r?\n|,/)
    .map((s) => s.trim())
    .filter(Boolean);

  let plan = null;
  if (envPlan) {
    try {
      plan = JSON.parse(envPlan);
    } catch {}
  }

  return { files, ask: envAsk, plan, dry_run: envDry };
}

function loadHTML(p) {
  const html = fs.readFileSync(p, 'utf8');
  const dom = new JSDOM(html);
  return { dom, html };
}

function saveHTML(p, html) {
  const pretty = prettier.format(html, { parser: 'html' });
  fs.writeFileSync(p, pretty, 'utf8');
}

function findHero(doc) {
  // Try common hero hooks
  let el =
    doc.querySelector('#hero, .hero, [data-hero]') ||
    // Section with a large heading near top
    Array.from(doc.querySelectorAll('section, header')).find((s) => {
      const h1 = s.querySelector('h1');
      return h1 && s.getBoundingClientRect ? true : !!h1;
    }) ||
    doc.body;
  return el;
}

function findCardStack(root) {
  // broad net: look for anything that smells like a stack/slider/cards
  const sel =
    '.card-stack, .cards, .cardstack, .swiper, .swiper-container, .swiper-wrapper, .carousel, .slider, [data-cards], [data-card-stack]';
  const match = root.querySelector(sel);
  return match || null;
}

function ensureTarget(doc, target) {
  if (!target) return findHero(doc);
  if (typeof target === 'string' && target !== 'hero') {
    const explicit = doc.querySelector(target);
    if (explicit) return explicit;
  }
  // default: hero
  return findHero(doc);
}

function copyNodeInto(fromNode, targetNode, mode = 'append') {
  const doc = targetNode.ownerDocument;
  const clone = fromNode.cloneNode(true);
  if (mode === 'replace-hero') {
    targetNode.replaceWith(clone);
    return clone;
  }
  targetNode.appendChild(clone);
  return clone;
}

function collectInlineAssets(node) {
  const styles = Array.from(node.querySelectorAll('style'));
  const scripts = Array.from(node.querySelectorAll('script'));
  return { styles, scripts };
}

function dedupeHead(doc, assets) {
  const head = doc.querySelector('head') || doc.body;
  const existingSig = new Set();

  Array.from(head.querySelectorAll('style,script')).forEach((n) =>
    existingSig.add(n.textContent.trim())
  );

  for (const s of assets.styles) {
    const sig = s.textContent.trim();
    if (!existingSig.has(sig)) head.appendChild(doc.importNode(s, true));
  }
  for (const sc of assets.scripts) {
    // keep inline (no src) only; external <script src> can break cross-file
    if (!sc.src) {
      const sig = sc.textContent.trim();
      if (!existingSig.has(sig)) head.appendChild(doc.importNode(sc, true));
    }
  }
}

// ---- main op ---------------------------------------------------------------
async function main() {
  const inputs = parseInputs();
  log(JSON.stringify({ inputs }, null, 2));

  // Expand globs + keep explicit file paths
  const matched = new Set();
  for (const pat of inputs.files) {
    const expanded = fg.sync(pat, { dot: false });
    if (expanded.length) expanded.forEach((p) => matched.add(p));
    else if (fs.existsSync(pat)) matched.add(pat);
  }
  const files = Array.from(matched);

  if (!files.length) {
    console.log(JSON.stringify({ ok: false, error: 'No files matched.' }, null, 2));
    process.exitCode = 2;
    return;
  }

  const plan = inputs.plan || {};
  const mode = plan.mode || 'copy-card-stack';

  // Determine src/dst
  // If a plan is provided, prefer explicit file paths in plan
  const srcFile =
    plan.from?.file ||
    files.find((f) => /site2/i.test(f)) ||
    files[0];

  const dstFile =
    plan.to?.file ||
    files.find((f) => /site3/i.test(f) && f !== srcFile) ||
    files.find((f) => f !== srcFile) ||
    files[files.length - 1];

  if (!srcFile || !dstFile) {
    console.log(JSON.stringify({ ok: false, error: 'Need two files (source and destination).' }, null, 2));
    process.exitCode = 2;
    return;
  }

  const { dom: srcDom } = loadHTML(srcFile);
  const { dom: dstDom } = loadHTML(dstFile);

  // Locate source node
  let srcHero = findHero(srcDom.window.document);
  let fromNode = null;

  if (mode === 'copy-node' && plan.from?.selector) {
    fromNode = srcDom.window.document.querySelector(plan.from.selector);
  } else {
    fromNode = findCardStack(srcHero);
  }

  if (!fromNode) {
    console.log(JSON.stringify({ ok: false, reason: 'No card/stack/swiper/carousel element found in source hero.' }, null, 2));
    process.exitCode = 2;
    return;
  }

  // Locate destination target
  let dstTarget = null;
  if (mode === 'copy-node' && plan.to?.selector) {
    dstTarget = dstDom.window.document.querySelector(plan.to.selector);
  } else {
    // default: hero
    dstTarget = ensureTarget(dstDom.window.document, plan.to?.target || 'hero');
  }

  if (!dstTarget) {
    console.log(JSON.stringify({ ok: false, reason: 'Destination target not found.' }, null, 2));
    process.exitCode = 2;
    return;
  }

  // Copy + bring inline assets
  const inserted = copyNodeInto(fromNode, dstTarget, plan.to?.insert || 'append');
  const assets = collectInlineAssets(fromNode);
  dedupeHead(dstDom.window.document, assets);

  if (inputs.dry_run) {
    console.log(JSON.stringify({ ok: true, dryRun: true, srcFile, dstFile }, null, 2));
    return;
  }

  // Save destination HTML prettified
  const outHTML = dstDom.serialize();
  saveHTML(dstFile, outHTML);

  console.log(JSON.stringify({ ok: true, srcFile, dstFile }, null, 2));
}

main().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
