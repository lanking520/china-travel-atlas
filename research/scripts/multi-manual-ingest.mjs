#!/usr/bin/env node
/**
 * Ingest manual multi-source notes from research/raw/multi-manual/*.md
 * into research/notes/multi-discovery/<id>.md (copy/append with stamp).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const srcDir = path.join(root, "research/raw/multi-manual");
const outDir = path.join(root, "research/notes/multi-discovery");
fs.mkdirSync(srcDir, { recursive: true });
fs.mkdirSync(outDir, { recursive: true });

const q = JSON.parse(fs.readFileSync(path.join(root, "research/queries-multi.json"), "utf8"));
const byName = new Map(q.provinces.map((p) => [p.name, p.id]));
const byId = new Map(q.provinces.map((p) => [p.id, p]));

let n = 0;
for (const name of fs.readdirSync(srcDir)) {
  if (!name.endsWith(".md") && !name.endsWith(".txt")) continue;
  const base = name.replace(/\.(md|txt)$/i, "");
  const id = byId.has(base) ? base : byName.get(base);
  if (!id) {
    console.warn("skip unknown", name);
    continue;
  }
  const body = fs.readFileSync(path.join(srcDir, name), "utf8");
  const header = `# ${byId.get(id).name} · 多源发现摘要\n\n> 手工/导入 · ${new Date().toISOString().slice(0, 10)} · 禁止整篇搬运\n\n`;
  fs.writeFileSync(path.join(outDir, `${id}.md`), header + body.trim() + "\n");
  n++;
  console.log("ingested", id);
}
console.log("done", n);
