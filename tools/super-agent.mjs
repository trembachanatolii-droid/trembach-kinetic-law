// tools/super-agent.mjs  (v2)
// Minimal HTML agent used by GitHub Actions to apply safe edits.
// Deps: jsdom, prettier (optional), fs-extra, fast-glob

import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import fg from "fast-glob";
import { JSDOM } from "jsdom";

let prettier = null;
try { prettier = await import("prettier"); } catch (_) {}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function parseArgs(argv = process.argv.slice(2)) {
  const out = {};
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a.startsWith("--")) {
      const k = a.slice(2).replace(/-+/g, "_");
      const v = argv[i + 1] && !argv[i + 1].startsWith("--") ? argv[++i] : "true";
      out[k] = v;
    } else (out._ ??= []).push(a);
  }
  if (out.dry == null && process.env.DRY_RUN) out.dry = String(process.env.DRY_RUN);
  return out;
}
const toBool = (v) => /^(1|true|yes|on)$/i.test(String(v ?? "").trim());
const normList = (s) => (Array.isArray(s) ? s : String(s ?? "").split(",")).map(x=>x.trim()).filter(Boolean);

async function expandFiles(patterns) {
  const list = await fg(patterns, { dot:false, onlyFiles:true, unique:true, absolute:false });
  list.sort(); return list;
}

const looksSite2 = (p)=>/(^|\/)site2(\/|$)/i.test(p);
const looksSite3 = (p)=>/(^|\/)site3(\/|$)/i.test(p);

function pickSourceAndTarget(files) {
  const s2 = files.find(looksSite2);
  const s3 = files.find(looksSite3);
  if (s2 && s3) return { fromFile:s2, toFile:s3 };
  if (files.length >= 2) return { fromFile:files[0], toFile:files[1] };
  return { fromFile: files[0] ?? null, toFile:null };
}

async function readHTML(file){ const html = await fs.readFile(file,"utf8"); return { dom:new JSDOM(html), html }; }
async function writeHTML(file, html){
  if (prettier?.format) { try { html = await prettier.format(html, { parser:"html" }); } catch(_){} }
  await fs.writeFile(file, html, "utf8");
}

function findFirst(document, selectorsList) {
  for (const sel of selectorsList) {
    const hit = document.querySelector(sel);
    if (hit) return hit;
  }
  return null;
}

function findHero(document, overrideSelectors) {
  const defaults = ["#hero","section.hero","header.hero","main .hero","section[id*='hero' i]","header"];
  return findFirst(document, overrideSelectors?.length ? overrideSelectors : defaults) || document.body;
}

function findCardStack(root, overrideSelectors) {
  if (overrideSelectors?.length) {
    const el = findFirst(root, overrideSelectors);
    if (el) return el;
  }

  // 1) common names
  const common = [
    ".card-stack",".cards-stack",".cards",".cardGrid",".cards-grid",".stack",".deck",
    ".ui-cards",".swiper",".swiper-container",".carousel",".slider",".slides",".slide-track",
    ".case-cards",".projects-cards",".work-cards",".gallery",".grid.cards",".grid .card"
  ];
  let el = findFirst(root, common);
  if (el) return el;

  // 2) generic container with many "card-like" descendants
  const token = /(card|tile|item|panel|work|project|case|slide|swiper|carousel|stack|grid|gallery)/i;
  const candidates = Array.from(root.querySelectorAll("*")).filter(n=>{
    const cls = n.className?.toString() ?? "";
    if (!token.test(cls)) return false;
    const kids = n.querySelectorAll(
      ".card,[class*='card-'],.tile,.item,.panel,.work,.project,.case,li,article,.slide,.swiper-slide"
    );
    return kids.length >= 3;
  });
  candidates.sort((a,b)=>{
    const ac = a.querySelectorAll(".card,[class*='card-'],.tile,.item,.panel,.work,.project,.case,li,article,.slide,.swiper-slide").length;
    const bc = b.querySelectorAll(".card,[class*='card-'],.tile,.item,.panel,.work,.project,.case,li,article,.slide,.swiper-slide").length;
    return bc - ac;
  });
  return candidates[0] || null;
}

function ensureHeadIncludes(document, { cssHrefs=[], jsSrcs=[], inlineScripts=[] }) {
  const head = document.querySelector("head") || document.documentElement;
  const hasLink = (href)=>!!document.querySelector(`link[rel="stylesheet"][href="${href}"]`) || !!document.querySelector(`link[rel="stylesheet"][href$="${path.basename(href)}"]`);
  const hasScript = (src)=>!!document.querySelector(`script[src="${src}"]`) || !!document.querySelector(`script[src$="${path.basename(src)}"]`);

  for (const href of cssHrefs) if (href && !hasLink(href)) {
    const link=document.createElement("link"); link.rel="stylesheet"; link.href=href; head.appendChild(link);
  }
  for (const src of jsSrcs) if (src && !hasScript(src)) {
    const s=document.createElement("script"); s.src=src; s.defer=true; head.appendChild(s);
  }

  const existingInline = Array.from(document.querySelectorAll("script:not([src])")).map(s=>(s.textContent||"").trim());
  for (const code of inlineScripts) {
    const norm=(code||"").trim(); if(!norm) continue;
    if (!existingInline.some(t=>t.includes(norm.slice(0,40)))) {
      const s=document.createElement("script"); s.textContent="\n"+code+"\n"; head.appendChild(s);
    }
  }
}

function collectDependencies(document,{scopeNode}={}) {
  const head=document.querySelector("head"); if(!head) return {cssHrefs:[],jsSrcs:[],inlineScripts:[]};
  const hints=["card","stack","deck","swiper","slide","carousel","gsap","anime","motion"];
  const looks=(v)=>String(v||"").toLowerCase() && hints.some(h=>String(v).toLowerCase().includes(h));
  const cssHrefs=Array.from(head.querySelectorAll("link[rel='stylesheet'][href]")).map(l=>l.getAttribute("href")).filter(looks);
  const jsSrcs=Array.from(head.querySelectorAll("script[src]")).map(s=>s.getAttribute("src")).filter(looks);

  const inlineScripts=[];
  const scopeHTML=(scopeNode?.outerHTML||"").toLowerCase();
  if(scopeHTML){
    for(const s of head.querySelectorAll("script:not([src])")){
      const t=(s.textContent||"").toLowerCase();
      if(/\b(card|stack|swiper|slide|carousel|gsap|anime|motion)\b/.test(t)) inlineScripts.push(s.textContent||"");
    }
  }
  return { cssHrefs, jsSrcs, inlineScripts };
}

function insertOrReplace(targetHero, incomingNode){
  const existing = findCardStack(targetHero);
  if (existing){ existing.replaceWith(incomingNode); return "replaced"; }
  targetHero.appendChild(incomingNode); return "appended";
}

function parseAskMode(ask){
  if (/COPY_CARD_STACK/i.test(ask)) return "copy-card-stack";
  if (/PROBE|INSPECT/i.test(ask)) return "probe";
  return "inspect";
}

async function copyCardStack(fromFile, toFile, dry, opts={}){
  const { srcSelectorList=[], dstSelectorList=[] } = opts;
  const src=await readHTML(fromFile); const dst=await readHTML(toFile);
  const srcDoc=src.dom.window.document; const dstDoc=dst.dom.window.document;

  const srcHero = findHero(srcDoc, dstSelectorList.length?null:[]); // let auto for src
  const dstHero = findHero(dstDoc, dstSelectorList);

  const stack = findCardStack(srcHero, srcSelectorList);
  if (!stack) return { ok:false, reason:"No card/stack/swiper/carousel element found in source hero." };

  const imported = dstDoc.importNode(stack, true);
  const deps = collectDependencies(srcDoc,{scopeNode:stack});
  ensureHeadIncludes(dstDoc, deps);

  const action = insertOrReplace(dstHero, imported);
  const resultHTML = dst.dom.serialize();
  if (!dry) await writeHTML(toFile, resultHTML);

  return { ok:true, action, from:fromFile, to:toFile, deps_added:deps };
}

async function probe(file){
  const { dom } = await readHTML(file);
  const doc = dom.window.document;
  const hero = findHero(doc);
  const classes = new Map();
  hero.querySelectorAll("*").forEach(n=>{
    const cls=(n.className?.toString()||"").trim();
    if(!cls) return;
    cls.split(/\s+/).forEach(c=>classes.set(c,(classes.get(c)||0)+1));
  });
  const top = [...classes.entries()].sort((a,b)=>b[1]-a[1]).slice(0,30);
  return { heroFound: !!hero, topClasses: top };
}

async function main(){
  const args = parseArgs();
  const patterns = String(args.files||args.file||"").split(/\s+/).map(s=>s.trim()).filter(Boolean);
  const files = patterns.length ? await expandFiles(patterns) : [];
  let plan = null;
  if (args.plan_json) { try { plan = JSON.parse(args.plan_json); } catch(_){} }
  if (plan?.files?.length) files.splice(0, files.length, ...plan.files);

  const ask = args.ask || plan?.ask || "";
  const dry = toBool(args.dry ?? plan?.dry);

  const mode = parseAskMode(ask);
  const summary = { mode, inputs:{ files, ask, dry_run:dry } };

  if (!files.length){ summary.error="No files matched."; console.log(JSON.stringify(summary,null,2)); process.exit(2); }

  if (mode === "probe"){
    const file = files[0];
    const out = await probe(file);
    summary.result = out;
    console.log(JSON.stringify(summary,null,2)); process.exit(0);
  }

  if (mode === "copy-card-stack"){
    const { fromFile, toFile } = pickSourceAndTarget(files);
    if (!fromFile || !toFile || fromFile === toFile){
      summary.error="Need two distinct HTML files (source + target)."; console.log(JSON.stringify(summary,null,2)); process.exit(2);
    }
    const srcSelectorList = normList(plan?.src_selector || args.src_selector || "");
    const dstSelectorList = normList(plan?.dst_selector || args.dst_selector || "");
    try {
      const result = await copyCardStack(fromFile, toFile, dry, { srcSelectorList, dstSelectorList });
      summary.result = result;
      console.log(JSON.stringify(summary,null,2));
      process.exit(result.ok ? 0 : 2);
    } catch (e) {
      summary.error=String(e?.stack||e?.message||e); console.log(JSON.stringify(summary,null,2)); process.exit(1);
    }
  }

  // default: inspect
  console.log(JSON.stringify(summary,null,2)); process.exit(0);
}

main().catch(e=>{ console.log(JSON.stringify({error:String(e?.stack||e?.message||e)},null,2)); process.exit(1); });
