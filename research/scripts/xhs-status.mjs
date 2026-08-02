#!/usr/bin/env node
/**
 * Write research/notes/XHS覆盖状态.md — search / digest / content stamp coverage.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const queries = JSON.parse(fs.readFileSync(path.join(root, "research/queries.json"), "utf8"));
const rawDir = path.join(root, "research/raw/xhs");
const digDir = path.join(root, "research/notes/xhs-digests");
const stampPath = path.join(root, "research/notes/xhs-applied.json");
const outPath = path.join(root, "research/notes/XHS覆盖状态.md");

const applied = fs.existsSync(stampPath)
  ? JSON.parse(fs.readFileSync(stampPath, "utf8"))
  : { routes: {} };

function hasSearch(routeId, i) {
  const f = path.join(rawDir, `search_${routeId}_${i}.json`);
  return fs.existsSync(f) && fs.statSync(f).size > 1000;
}

const rows = [];
let qDone = 0;
let qTotal = 0;
let pass1 = 0;
let digests = 0;
let appliedN = 0;

for (const r of queries.routes) {
  qTotal += r.queries.length;
  const doneIdx = r.queries.map((_, i) => hasSearch(r.id, i));
  const doneN = doneIdx.filter(Boolean).length;
  qDone += doneN;
  if (doneN > 0) pass1++;
  const dig = fs.existsSync(path.join(digDir, `${r.id}.md`));
  if (dig) digests++;
  const app = Boolean(applied.routes?.[r.id]?.at);
  if (app) appliedN++;
  const status =
    app && dig && doneN >= 1
      ? "✅ 已检索+摘要+改写"
      : dig && doneN >= 1
        ? "🟡 已检索+摘要待改写"
        : doneN >= 1
          ? "🟠 已检索待摘要"
          : "⚪ 待检索";
  rows.push(
    `| ${r.id} | ${doneN}/${r.queries.length} | ${dig ? "是" : "否"} | ${app ? "是" : "否"} | ${status} |`,
  );
}

const lines = [
  "# 小红书调研覆盖状态",
  "",
  `更新于 ${new Date().toISOString()}`,
  "",
  "## 总览",
  "",
  `- 路线数：${queries.routes.length}`,
  `- 检索进度：${qDone}/${qTotal} 次查询`,
  `- 至少 1 次检索：${pass1}/${queries.routes.length}`,
  `- 摘要文件：${digests}/${queries.routes.length}`,
  `- 已改写入内容：${appliedN}/${queries.routes.length}`,
  "",
  "## 分路线",
  "",
  "| 路线 | 检索 | 摘要 | 改写 | 状态 |",
  "| --- | --- | --- | --- | --- |",
  ...rows,
  "",
  "## 说明",
  "",
  "- 检索：`research/raw/xhs/search_<id>_<i>.json`（gitignore）",
  "- 摘要：`research/notes/xhs-digests/<id>.md`",
  "- 改写：写入 `content/` 后登记 `research/notes/xhs-applied.json`",
  "- 慢速循环：`XHS_MAX=2 npm run research:xhs-loop`",
  "",
];

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, lines.join("\n"));
console.log(outPath);
console.log({ qDone, qTotal, pass1, digests, appliedN, routes: queries.routes.length });
