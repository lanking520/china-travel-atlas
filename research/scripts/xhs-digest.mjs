#!/usr/bin/env node
/**
 * Digest XHS search JSON → research/notes/xhs-digests/<routeId>.md
 * Never copies full post bodies into the website.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const rawDir = path.join(root, "research", "raw", "xhs");
const outDir = path.join(root, "research", "notes", "xhs-digests");
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
  // Escaped form inside outer JSON: displayTitle\": \"标题\"
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

const byRoute = new Map();
for (const name of fs.readdirSync(rawDir)) {
  if (!name.startsWith("search_") || !name.endsWith(".json")) continue;
  // search_<routeId>_<i>.json OR legacy Chinese names
  const m = name.match(/^search_(.+?)_(\d+)\.json$/);
  let routeId;
  let queryHint = name;
  if (m) {
    routeId = m[1];
  } else {
    // legacy mapping
    const legacy = {
      慕田峪: "mutianyu-day",
      承德: "chengde-2d",
      拉萨: "qingzang-lhasa-slow",
      敦煌: "xibei-dunhuang-zhangye",
      大理: "yunnan-dali-lijiang",
    };
    routeId = Object.entries(legacy).find(([k]) => name.includes(k))?.[1];
  }
  if (!routeId) continue;
  const feeds = feedsFrom(path.join(rawDir, name));
  if (!byRoute.has(routeId)) byRoute.set(routeId, []);
  byRoute.get(routeId).push({ file: name, feeds, queryHint });
}

let n = 0;
for (const [routeId, chunks] of byRoute) {
  const lines = [
    `# ${routeId} · 小红书检索摘要`,
    "",
    `> 仅作改写素材，勿整篇搬运。生成于 ${new Date().toISOString().slice(0, 10)}`,
    "",
  ];
  const seen = new Set();
  for (const ch of chunks) {
    lines.push(`## 来源文件 \`${ch.file}\``);
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
  lines.push("## 可改写入网站的要点（待人工/Agent 提炼）");
  lines.push("");
  lines.push("- 季节与避开时段：");
  lines.push("- 体力 / 交通 / 预约：");
  lines.push("- 预算与避坑：");
  lines.push("");
  fs.writeFileSync(path.join(outDir, `${routeId}.md`), lines.join("\n"));
  n++;
}
console.log("digests", n, "→", outDir);
