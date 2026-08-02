#!/usr/bin/env node
/** Status: multi-discovery digests vs 31 provinces */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const q = JSON.parse(fs.readFileSync(path.join(root, "research/queries-multi.json"), "utf8"));
const dig = path.join(root, "research/notes/multi-discovery");
fs.mkdirSync(dig, { recursive: true });
const out = path.join(root, "research/notes/multi-discovery-status.md");

const rows = [];
let have = 0;
for (const p of q.provinces) {
  const f = path.join(dig, `${p.id}.md`);
  const ok = fs.existsSync(f) && fs.statSync(f).size > 200;
  if (ok) have++;
  rows.push(`| ${p.name} | ${p.id} | ${ok ? "是" : "否"} |`);
}

const md = [
  "# 多源发现覆盖",
  "",
  `更新于 ${new Date().toISOString()}`,
  "",
  `- 省摘要：${have}/${q.provinces.length}`,
  `- 目录：\`research/notes/multi-discovery/\``,
  `- 主来源：Wikivoyage / 官网 / 游记聚合；小红书仅复核`,
  "",
  "| 省 | id | 有摘要 |",
  "| --- | --- | --- |",
  ...rows,
  "",
].join("\n");

fs.writeFileSync(out, md);
console.log(out, `${have}/${q.provinces.length}`);
