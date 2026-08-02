#!/usr/bin/env node
/**
 * Refresh route-shortlist.md "发现依据" columns from xhs-discovery digests.
 * Does not invent new route ids — only annotates existing shortlist + lists provinces with digests.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const digDir = path.join(root, "research/notes/xhs-discovery");
const q = JSON.parse(fs.readFileSync(path.join(root, "research/queries-discovery.json"), "utf8"));
const out = path.join(root, "research/notes/route-shortlist-discovery.md");

const digests = fs.existsSync(digDir)
  ? fs.readdirSync(digDir).filter((f) => f.endsWith(".md"))
  : [];

const lines = [
  "# 发现层进度（自动生成）",
  "",
  `生成于 ${new Date().toISOString()}`,
  "",
  `摘要文件：${digests.length}（含 national）`,
  "",
  "| slug | 有摘要 | 标题样例 |",
  "| --- | --- | --- |",
];

function sampleTitles(md) {
  return [...md.matchAll(/^- \*\*(.+?)\*\*/g)]
    .map((m) => m[1].replace(/[`]/g, "").slice(0, 40))
    .slice(0, 3)
    .join("；");
}

const bySlug = new Map();
for (const f of digests) {
  const slug = f.replace(/\.md$/, "");
  const md = fs.readFileSync(path.join(digDir, f), "utf8");
  bySlug.set(slug, sampleTitles(md) || "（有文件）");
}

lines.push(
  `| national | ${bySlug.has("national") ? "是" : "否"} | ${bySlug.get("national") || ""} |`,
);
for (const p of q.provinces || []) {
  lines.push(
    `| ${p.id}（${p.name}） | ${bySlug.has(p.id) ? "是" : "否"} | ${bySlug.get(p.id) || ""} |`,
  );
}

const missing = (q.provinces || []).filter((p) => !bySlug.has(p.id)).map((p) => p.name);
lines.push("", "## 尚无省摘要", "", missing.length ? missing.join("、") : "无", "");
lines.push(
  "> 正式立项仍以 `route-shortlist.md` 为准；本表只反映发现完成度。已上线但无摘要的线标记为「已立项·待发现复核」。",
  "",
);

fs.writeFileSync(out, lines.join("\n"));
console.log(out, "digests", digests.length, "missingProvinces", missing.length);
