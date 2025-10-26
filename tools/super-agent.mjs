// tools/super-agent.mjs
// Node 20 ESM. Minimal deps installed into tools/node_modules by the workflow.
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import fg from "fast-glob";
import { JSDOM } from "jsdom";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** -------- arg parsing -------- */
function parseArgs() {
  const args = process.argv.slice(2);
  const out = { files: "", ask: "", plan: null, dry_run: false, inputs_file: "" };
  for (let i = 0; i < args.length; i++) {
    const a = args[i];
    if (a === "--inputs-file") out.inputs_file = args[++i] || "";
    else if (a === "--files") out.files = args[++i] || "";
    else if (a === "--ask") out.ask = args[++i] || "";
    else if (a === "--plan-json") {
      try { out.plan = JSON.parse(args[++i] || "null"); } catch { out.plan = null; }
    }
    else if (a === "--dry") out.dry_run = true;
  }
  return out;
}

async function loadInputs() {
  const cli = parseArgs();
  if (cli.inputs_file) {
    const txt = await fs.readFile(cli.inputs_file, "utf8");
    const json = JSON.parse(txt);
    // Allow either array or string for files
    const files = Array.isArray(json.files) ? json.files.join(",") : (json.files || "");
    return {
      files,
      ask: json.ask || "",
      plan: json.plan ?? null,
      dry_run: !!json.dry_run
    };
  }
  return cli;
}

/** -------- small helpers -------- */
const readHTML = async (p) => new JSDOM(await fs.readFile(p, "utf8"));
const saveHTML = async (p, dom) => fs.writeFile(p, dom.serialize(), "utf8");

function uniqueId(prefix) {
  return prefix + "-" + Math.random().toString(36).slice(2, 9);
}

function findHero(dom) {
  // Heuristics: first <section> with a big heading or a media container
  const doc = dom.window.document;
  const candidates = [
    "section[id*=hero i]",
    "header[id*=hero i]",
    "section[class*=hero]",
    ".homeHeader, .home-header, .header, .hero",
    "main section"
  ];
  for (const sel of candidates) {
    const el = doc.querySelector(sel);
    if (el) return el;
  }
  return doc.body; // fallback
}

function findCardStackContainer(dom) {
  const doc = dom.window.document;

  // Signals observed in your source:
  // - cards wrapped in a media container with “media” or “card” in class
  // - inline script with id="unify-card-labels-script"
  // - card titles like “Mesothelioma”, “Dog Bites”, etc.

  // 1) script anchor
  const byScript = doc.getElementById("unify-card-labels-script");
  if (byScript) {
    // go up a bit to get the visual container
    const parent = byScript.closest(".homeHeader__media, .homeHeader__mediaCard, .media, [class*=media], [class*=card]");
    if (parent) return parent;
  }

  // 2) obvious containers
  const obvious = doc.querySelector(".homeHeader__mediaCard, .homeHeader__media, [class*=mediaCard], [class*=card-stack], [class*=card] .cards, [class*=cards]");
  if (obvious) return obvious;

  // 3) textual signal (labels)
  const labels = ["Mesothelioma","Dog Bites","Slip and Fall","Car Accident","See All Practice Areas"];
  const textHit = labels.map(l => `:is(div,section,article,aside,main) :is(*):contains('${l}')`).join(",");
  // jsdom doesn't support :contains — scan manually:
  let best = null, walk = doc.querySelectorAll("div,section,article,aside,main");
  for (const el of walk) {
    const t = el.textContent || "";
    if (labels.some(l => t.includes(l))) {
      // choose the smallest container that still looks like a media block
      if (!best || el.outerHTML.length < best.outerHTML.length) best = el;
    }
  }
  if (best) return best.closest(".homeHeader__media, [class*=media], [class*=card]") || best;

  return null;
}

function ensureAssetBlocks(sourceHero, targetDoc) {
  // copy inline <style> or <script> that card stack uses
  const srcDoc = sourceHero.ownerDocument;

  const styles = Array.from(sourceHero.querySelectorAll("style"));
  for (const st of styles) {
    const id = st.id || uniqueId("copied-style");
    if (!targetDoc.getElementById(id)) {
      const clone = targetDoc.createElement("style");
      clone.id = id;
      clone.textContent = st.textContent;
      targetDoc.head ? targetDoc.head.appendChild(clone) : targetDoc.body.appendChild(clone);
    }
  }

  const scripts = Array.from(sourceHero.querySelectorAll("script"));
  for (const sc of scripts) {
    const id = sc.id || uniqueId("copied-script");
    if (!targetDoc.getElementById(id)) {
      const clone = targetDoc.createElement("script");
      if (sc.id) clone.id = sc.id;
      // keep inline JS
      clone.textContent = sc.textContent || "";
      targetDoc.body.appendChild(clone);
    }
  }
}

/** -------- main -------- */
(async () => {
  const inputs = await loadInputs();
  const fileGlobs = (inputs.files || "").split(",").map(s => s.trim()).filter(Boolean);

  if (!fileGlobs.length) {
    console.log(JSON.stringify({ ok: false, error: "No file globs provided." }));
    process.exit(2);
  }

  const matches = await fg(fileGlobs, { dot: false });
  if (matches.length < 2) {
    console.log(JSON.stringify({ ok: false, error: "No files matched.", globs: fileGlobs }));
    process.exit(2);
  }

  // Heuristic: take the site2 file as "source" (contains the card stack), and the site3 file as "target".
  const sourcePath = matches.find(p => /\/site2\//.test(p)) || matches[0];
  const targetPath = matches.find(p => /\/site3\//.test(p)) || matches[matches.length - 1];

  const srcDom = await readHTML(sourcePath);
  const tgtDom = await readHTML(targetPath);

  const srcHero = findHero(srcDom);
  const stack = findCardStackContainer(srcDom) || srcHero;
  if (!stack) {
    console.log(JSON.stringify({ ok: false, error: "Could not locate card stack container in source." }));
    process.exit(2);
  }

  const tgtHero = findHero(tgtDom);

  // Insert on the right side: make a wrapper with two columns if needed
  const tdoc = tgtDom.window.document;
  let rightSlot = tgtHero.querySelector("[data-right], .hero__media, .media, [class*=right]");
  if (!rightSlot) {
    // build a simple two-column grid and move existing content to the left
    const wrapper = tdoc.createElement("div");
    wrapper.style.display = "grid";
    wrapper.style.gridTemplateColumns = "1fr 1fr";
    wrapper.style.gap = "2rem";

    // move original hero children into left column
    const left = tdoc.createElement("div");
    while (tgtHero.firstChild) left.appendChild(tgtHero.firstChild);
    const right = tdoc.createElement("div");
    right.setAttribute("data-right", "true");

    wrapper.appendChild(left);
    wrapper.appendChild(right);
    tgtHero.appendChild(wrapper);
    rightSlot = right;
  }

  // Copy the visual stack node
  const cloned = stack.cloneNode(true);
  rightSlot.innerHTML = ""; // replace what's there
  rightSlot.appendChild(cloned);

  // Ensure any inline assets required by the cards exist
  ensureAssetBlocks(stack, tdoc);

  if (inputs.dry_run) {
    console.log(JSON.stringify({
      ok: true,
      dry_run: true,
      files: { source: sourcePath, target: targetPath }
    }, null, 2));
    return;
  }

  await saveHTML(targetPath, tgtDom);

  console.log(JSON.stringify({
    ok: true,
    message: "Card stack copied",
    files: { source: sourcePath, target: targetPath }
  }, null, 2));
})().catch(err => {
  console.error(err);
  console.log(JSON.stringify({ ok: false, error: String(err && err.message || err) }));
  process.exit(1);
});
