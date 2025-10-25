// tools/super-agent.mjs
// Combine multiple HTML files into one page, preserving head assets and
// embedding each source body in its own <section>. Output: public/combined/index.html
// Usage (the workflow calls it for you):
//   node tools/super-agent.mjs --files "a.html,b.html,c.html" [--dry true]

import fs from "fs-extra";
import path from "node:path";
import { JSDOM } from "jsdom";
import prettier from "prettier";

function parseArgs(argv) {
  const out = {};
  for (let i = 2; i < argv.length; i++) {
    const k = argv[i];
    if (k.startsWith("--")) {
      const key = k.slice(2);
      const val = argv[i + 1]?.startsWith("--") ? true : argv[i + 1];
      out[key] = val;
      if (val !== true) i++;
    }
  }
  return out;
}

function uniqPush(arr, value, seen) {
  if (value == null) return;
  const key = typeof value === "string" ? value : JSON.stringify(value);
  if (!seen.has(key)) {
    seen.add(key);
    arr.push(value);
  }
}

function extractAssets(document) {
  const head = document.querySelector("head");
  const assets = {
    links: [],
    scripts: [],
    styles: [],
    metas: [],
    titles: [],
  };
  if (!head) return assets;

  head.querySelectorAll('link[rel="stylesheet"][href]').forEach((el) => {
    assets.links.push({ href: el.getAttribute("href") });
  });

  head.querySelectorAll("script[src]").forEach((el) => {
    assets.scripts.push({ src: el.getAttribute("src"), type: el.getAttribute("type") || "" });
  });

  head.querySelectorAll("style").forEach((el) => {
    assets.styles.push({ text: el.textContent || "" });
  });

  head.querySelectorAll("meta").forEach((el) => {
    const name = el.getAttribute("name");
    const charset = el.getAttribute("charset");
    const content = el.getAttribute("content");
    const httpEquiv = el.getAttribute("http-equiv");
    assets.metas.push({ name, charset, content, httpEquiv });
  });

  head.querySelectorAll("title").forEach((el) => {
    assets.titles.push(el.textContent || "");
  });

  return assets;
}

function mergeAssets(list) {
  const links = [];
  const scripts = [];
  const styles = [];
  const metas = [];
  const titles = [];
  const seen = { link: new Set(), script: new Set(), style: new Set(), meta: new Set(), title: new Set() };

  for (const a of list) {
    for (const l of a.links) uniqPush(links, l.href, seen.link);
    for (const s of a.scripts) uniqPush(scripts, `${s.type}|${s.src}`, seen.script);
    for (const st of a.styles) uniqPush(styles, st.text.trim(), seen.style);
    for (const m of a.metas) uniqPush(metas, JSON.stringify(m), seen.meta);
    for (const t of a.titles) uniqPush(titles, t.trim(), seen.title);
  }

  return { links, scripts, styles, metas, titles };
}

function sectionIdFrom(file) {
  return path.basename(file).replace(/\.[^.]+$/, "").replace(/[^a-z0-9\-]+/gi, "-");
}

async function run() {
  const args = parseArgs(process.argv);
  const files = (args.files || "").split(",").map((s) => s.trim()).filter(Boolean);
  const dry = String(args.dry || "").toLowerCase() === "true";

  if (!files.length) {
    console.error("No --files provided.");
    process.exit(2);
  }

  // Load all docs
  const docs = [];
  const assetPacks = [];
  for (const f of files) {
    const abs = path.resolve(process.cwd(), f);
    if (!(await fs.pathExists(abs))) {
      console.error(`File not found: ${f}`);
      process.exit(2);
    }
    const html = await fs.readFile(abs, "utf8");
    const dom = new JSDOM(html);
    docs.push({ file: f, dom });
    assetPacks.push(extractAssets(dom.window.document));
  }

  // Create combined document
  const { window } = new JSDOM("<!doctype html><html><head></head><body></body></html>");
  const document = window.document;

  // Minimal metas
  const metaCharset = document.createElement("meta");
  metaCharset.setAttribute("charset", "utf-8");
  document.head.appendChild(metaCharset);

  const metaViewport = document.createElement("meta");
  metaViewport.setAttribute("name", "viewport");
  metaViewport.setAttribute("content", "width=device-width, initial-scale=1");
  document.head.appendChild(metaViewport);

  // Merge assets
  const merged = mergeAssets(assetPacks);

  merged.titles.length &&
    document.head.appendChild(document.createElement("title")).appendChild(document.createTextNode(merged.titles[0]));

  merged.metas.forEach((m) => {
    const meta = document.createElement("meta");
    if (m.charset) meta.setAttribute("charset", m.charset);
    if (m.name) meta.setAttribute("name", m.name);
    if (m["http-equiv"]) meta.setAttribute("http-equiv", m["http-equiv"]);
    if (m.content) meta.setAttribute("content", m.content);
    document.head.appendChild(meta);
  });

  merged.links.forEach((href) => {
    const link = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", href);
    document.head.appendChild(link);
  });

  merged.styles.forEach((text) => {
    if (!text) return;
    const style = document.createElement("style");
    style.appendChild(document.createTextNode(text));
    document.head.appendChild(style);
  });

  merged.scripts.forEach((key) => {
    const [type, src] = key.split("|");
    const script = document.createElement("script");
    if (type) script.setAttribute("type", type);
    script.setAttribute("src", src);
    document.head.appendChild(script);
  });

  // Body sections: put each original body into a <section id="filename">
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  nav.appendChild(ul);

  for (const { file, dom } of docs) {
    const id = sectionIdFrom(file);
    const sec = document.createElement("section");
    sec.setAttribute("id", id);

    // Heading for quick navigation
    const h = document.createElement("h2");
    h.appendChild(document.createTextNode(id));
    sec.appendChild(h);

    const srcBody = dom.window.document.body;
    // import child nodes
    Array.from(srcBody.childNodes).forEach((n) => sec.appendChild(document.importNode(n, true)));
    document.body.appendChild(sec);

    const li = document.createElement("li");
    const a = document.createElement("a");
    a.setAttribute("href", `#${id}`);
    a.appendChild(document.createTextNode(id));
    li.appendChild(a);
    ul.appendChild(li);
  }
  document.body.insertBefore(nav, document.body.firstChild);

  const outHtml = await prettier.format("<!doctype html>\n" + document.documentElement.outerHTML, { parser: "html" });

  const outDir = path.resolve(process.cwd(), "public/combined");
  const outFile = path.join(outDir, "index.html");
  if (dry) {
    console.log(`--dry run: would write ${outFile}`);
    console.log(`Files: ${files.join(", ")}`);
    return;
  }
  await fs.ensureDir(outDir);
  await fs.writeFile(outFile, outHtml, "utf8");
  console.log(`Wrote ${path.relative(process.cwd(), outFile)}`);
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
