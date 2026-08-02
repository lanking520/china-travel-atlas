#!/usr/bin/env node
/**
 * Digest discovery XHS JSON → research/notes/xhs-discovery/<provinceOrNational>.md
 * Never copies full post bodies into the website.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const rawDir = path.join(root, "research", "raw", "xhs");
const outDir = path.join(root, "research", "notes", "xhs-discovery");
const queriesPath = path.join(root, "research", "queries-discovery.json");
fs.mkdirSync(outDir, { recursive: true });

/** Escape raw control chars that appear inside JSON string literals (common in MCP dumps). */
function repairJson(str) {
  let out = "";
  let inStr = false;
  let esc = false;
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    if (inStr) {
      if (esc) {
        out += ch;
        esc = false;
        continue;
      }
      if (ch === "\\") {
        out += ch;
        esc = true;
        continue;
      }
      if (ch === '"') {
        inStr = false;
        out += ch;
        continue;
      }
      if (ch === "\n") {
        out += "\\n";
        continue;
      }
      if (ch === "\r") {
        out += "\\r";
        continue;
      }
      if (ch === "\t") {
        out += "\\t";
        continue;
      }
      if (ch.charCodeAt(0) < 32) {
        out += " ";
        continue;
      }
      out += ch;
    } else {
      if (ch === '"') inStr = true;
      out += ch;
    }
  }
  return out;
}

function titlesFromRaw(text) {
  const titles = [
    ...String(text).matchAll(/displayTitle\\":\\s*\\"([^\\"]{4,120})/g),
    ...String(text).matchAll(/"displayTitle"\s*:\s*"([^"]{4,120})"/g),
  ].map((m) => m[1]);
  const ids = [
    ...String(text).matchAll(/\\"id\\":\\s*\\"([a-zA-Z0-9]+)\\"/g),
    ...String(text).matchAll(/"id"\s*:\s*"([a-zA-Z0-9]+)"/g),
  ].map((m) => m[1]);
  if (!titles.length) return null;
  return {
    feeds: titles.map((title, i) => ({
      id: ids[i] || "",
      noteCard: { displayTitle: title, interactInfo: {} },
    })),
  };
}

function parseRpc(text) {
  try {
    const rpc = JSON.parse(repairJson(text));
    const inner = rpc?.result?.content?.[0]?.text;
    if (typeof inner === "string") {
      try {
        return JSON.parse(repairJson(inner));
      } catch {
        return titlesFromRaw(inner) || { rawText: inner };
      }
    }
    return rpc;
  } catch {
    return titlesFromRaw(text);
  }
}

function feedsFrom(file) {
  const text = fs.readFileSync(file, "utf8");
  const data = parseRpc(text);
  if (!data) return [];
  const feeds = data.feeds || data.data?.feeds || [];
  return feeds.slice(0, 8).map((f) => {
    const card = f.noteCard || f;
    const title = card.displayTitle || card.title || card.desc || "";
    const desc = (card.desc || card.displayTitle || "").slice(0, 180);
    const id = f.id || card.noteId || "";
    const liked = card.interactInfo?.likedCount || card.likedCount || "";
    return { id, title: String(title).slice(0, 80), desc, liked };
  });
}

function queryHintFor(slug, index, meta) {
  if (slug === "national") {
    return meta.national?.[index] || `national[${index}]`;
  }
  const prov = (meta.provinces || []).find((p) => p.id === slug);
  const base = prov?.queries || [];
  if (index < base.length) return base[index];
  const extras = (meta.extras || []).filter((e) => e.id === slug).flatMap((e) => e.queries || []);
  const ei = index - base.length;
  return extras[ei] || `${slug}[${index}]`;
}

let meta = { national: [], provinces: [], extras: [] };
try {
  meta = JSON.parse(fs.readFileSync(queriesPath, "utf8"));
} catch {
  /* optional */
}

const nameBySlug = new Map([["national", "全国"]]);
for (const p of meta.provinces || []) {
  nameBySlug.set(p.id, p.name || p.id);
}

const bySlug = new Map();
if (fs.existsSync(rawDir)) {
  for (const name of fs.readdirSync(rawDir)) {
    const m = name.match(/^discover_(.+)_(\d+)\.json$/);
    if (!m) continue;
    const slug = m[1];
    const index = Number(m[2]);
    const feeds = feedsFrom(path.join(rawDir, name));
    if (!bySlug.has(slug)) bySlug.set(slug, []);
    bySlug.get(slug).push({
      file: name,
      index,
      feeds,
      query: queryHintFor(slug, index, meta),
    });
  }
}

let n = 0;
for (const [slug, chunks] of bySlug) {
  chunks.sort((a, b) => a.index - b.index);
  const label = nameBySlug.get(slug) || slug;
  const lines = [
    `# ${label}（${slug}）· 发现层小红书摘要`,
    "",
    `> 仅作 shortlist / 立项素材，勿整篇搬运。生成于 ${new Date().toISOString().slice(0, 10)}`,
    "",
  ];
  const seen = new Set();
  for (const ch of chunks) {
    lines.push(`## 查询 \`${ch.query}\` · \`${ch.file}\``);
    lines.push("");
    for (const f of ch.feeds) {
      const key = f.title + f.id;
      if (seen.has(key) || !f.title) continue;
      seen.add(key);
      lines.push(`- **${f.title}**${f.liked ? `（赞 ${f.liked}）` : ""}`);
      if (f.desc && f.desc !== f.title) lines.push(`  - ${f.desc.replace(/\n/g, " ")}`);
      if (f.id) lines.push(`  - https://www.xiaohongshu.com/explore/${f.id}`);
    }
    lines.push("");
  }
  lines.push("## 可写入 shortlist 的候选（待人工/Agent 提炼）");
  lines.push("");
  lines.push("- 候选路线名：");
  lines.push("- 受众拟合（日驾≤5h / 电梯房 / 非特种兵）：");
  lines.push("- 季节与天数：");
  lines.push("- 北京衔接（飞/高铁）与回京：");
  lines.push("");
  fs.writeFileSync(path.join(outDir, `${slug}.md`), lines.join("\n"));
  n++;
}
console.log("discovery digests", n, "→", outDir);
