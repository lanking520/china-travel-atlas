#!/usr/bin/env node
/**
 * Apply XHS digests into content (rewritten, never paste full posts).
 * - Adds/updates 1–3 sources (kind: xiaohongshu) on Route in patches/routes
 * - Appends community-derived notices into route-details
 * - Stamps research/notes/xhs-applied.json
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const digDir = path.join(root, "research/notes/xhs-digests");
const stampPath = path.join(root, "research/notes/xhs-applied.json");
const detailsPath = path.join(root, "content/route-details.ts");
const queries = JSON.parse(fs.readFileSync(path.join(root, "research/queries.json"), "utf8"));

const FORCE = process.env.XHS_APPLY_FORCE === "1";

function parseDigest(md) {
  const titles = [];
  const links = [];
  for (const line of md.split("\n")) {
    const tm = line.match(/^- \*\*(.+?)\*\*/);
    if (tm) {
      const clean = tm[1]
        .replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/gu, "")
        .replace(/[^\u4e00-\u9fff\w\s\-·｜|，。、：:;（）()]/gu, "")
        .replace(/\s+/g, " ")
        .trim();
      if (clean.length >= 4) titles.push(clean);
    }
    const lm = line.match(/https:\/\/www\.xiaohongshu\.com\/explore\/[a-zA-Z0-9]+/);
    if (lm) links.push(lm[0]);
  }
  const tips = inferTips(titles);
  return { titles, links: [...new Set(links)].slice(0, 3), tips };
}

function inferTips(titles) {
  const blob = titles.join(" · ");
  const tips = [];
  if (/缆车|索道|厢式|滑道/.test(blob)) {
    tips.push("社区常见建议：登高优先厢式缆车/索道双程，恐高避开滑道；只走短段敌楼即可。");
  }
  if (/预约|预约难|提前/.test(blob)) {
    tips.push("社区高频提醒：旺季门票/洞窟/索道务必提前预约，以官方渠道为准。");
  }
  if (/自驾|停车|停车场/.test(blob)) {
    tips.push("自驾党注意：高峰停车位紧张，尽量早到；跟官方停车场指引，勿占应急通道。");
  }
  if (/带父母|爸妈|老人|适老|无痛|轻松|不费腿/.test(blob)) {
    tips.push("带父母节奏：半天一景、午休必留；台阶多的点位可改坐车/缆车或只看平地区。");
  }
  if (/避暑|环山|电瓶|景交|观光车/.test(blob)) {
    tips.push("园林山区：优先环山车/电瓶车，别硬爬；景交可按需单买，慎购高价全包套票；淡季部分车线可能停运。");
  }
  if (/高原|高反|吸氧|适应/.test(blob)) {
    tips.push("高原线：头两天少动多休息，有不适即停；勿隐瞒病史，遵医嘱。");
  }
  if (/莫高|洞窟/.test(blob)) {
    tips.push("莫高窟：预约时段准时入场；洞窟内禁闪拍照，听从讲解节奏。");
  }
  if (/错峰|周末人多|人多/.test(blob)) {
    tips.push("尽量错峰：周末/节假日人流大，工作日或一早入园体验更好。");
  }
  if (tips.length === 0 && titles.length) {
    tips.push(`社区检索主题参考：${titles.slice(0, 3).join("；")}（已改写，非原文）。`);
  }
  tips.push("以上要点来自小红书公开笔记标题归纳改写，非官方政策，出行前请复核。");
  return [...new Set(tips)].slice(0, 5);
}

function upsertNoticeBlock(detailsSrc, routeId, tips) {
  const stamp = `【小红书调研】${tips[0]}`;
  const re = new RegExp(`('${routeId}':\\s*\\{[\\s\\S]*?notices:\\s*\\[)([\\s\\S]*?)(\\],\\s*\\n\\s*gallery:)`);
  const m = detailsSrc.match(re);
  if (!m) {
    console.warn("no notices block for", routeId);
    return detailsSrc;
  }
  let body = m[2];
  // remove prior auto-injected XHS tip lines
  body = body.replace(
    /\s*'(?:【小红书调研】|社区常见建议：|社区高频提醒：|自驾党注意：|带父母节奏：|园林山区：|高原线：|莫高窟：|尽量错峰：|社区检索主题参考：|以上要点来自小红书)[^']*',?\n?/g,
    "\n",
  );
  const inject = tips
    .map((t) => (t.startsWith("【小红书调研】") ? t : `【小红书调研】${t}`))
    .map((t) => `      '${t.replace(/'/g, "\\'")}',`)
    .join("\n");
  // put community tips near end, before closing
  const trimmed = body.replace(/\s*$/, "\n");
  const next = `${m[1]}${trimmed}${inject}\n    ${m[3]}`;
  return detailsSrc.replace(re, next);
}

/** Find which content file owns sources for routeId */
function findRouteFile(routeId) {
  const candidates = [
    path.join(root, "content/routes.ts"),
    ...fs
      .readdirSync(path.join(root, "content/patches"))
      .filter((f) => f.endsWith(".ts"))
      .map((f) => path.join(root, "content/patches", f)),
    ...fs
      .readdirSync(path.join(root, "content/audit-patches"))
      .filter((f) => f.endsWith(".ts"))
      .map((f) => path.join(root, "content/audit-patches", f)),
  ];
  for (const file of candidates) {
    const s = fs.readFileSync(file, "utf8");
    if (new RegExp(`id:\\s*'${routeId}'`).test(s)) return file;
  }
  return null;
}

function upsertSources(file, routeId, links, titles) {
  let src = fs.readFileSync(file, "utf8");
  const blockRe = new RegExp(
    `(id:\\s*'${routeId}'[\\s\\S]*?sources:\\s*\\[)([\\s\\S]*?)(\\],\\s*\\n\\s*(?:stops|researchQueries))`,
  );
  const m = src.match(blockRe);
  if (!m) {
    console.warn("no sources for", routeId, "in", path.basename(file));
    return false;
  }
  let body = m[2];
  // drop prior auto xhs sources we injected
  body = body.replace(
    /\s*\{\s*title:\s*'小红书社区检索[^']*'[\s\S]*?kind:\s*'xiaohongshu'[\s\S]*?\},?/g,
    "",
  );
  const entries = links.slice(0, 2).map((url, i) => {
    const label = (titles[i] || "带父母慢游参考").slice(0, 28);
    return `      {
        title: '小红书社区检索：${label.replace(/'/g, "")}（改写参考）',
        url: '${url}',
        kind: 'xiaohongshu',
        note: '公开笔记标题归纳，非官方政策；请自行打开复核',
      },`;
  });
  if (!entries.length) return false;
  const next = `${m[1]}${body.replace(/\s*$/, "\n")}${entries.join("\n")}\n    ${m[3]}`;
  src = src.replace(blockRe, next);
  fs.writeFileSync(file, src);
  return true;
}

const stamp = fs.existsSync(stampPath)
  ? JSON.parse(fs.readFileSync(stampPath, "utf8"))
  : { routes: {} };

let details = fs.readFileSync(detailsPath, "utf8");
let applied = 0;
let skipped = 0;

for (const r of queries.routes) {
  const digFile = path.join(digDir, `${r.id}.md`);
  if (!fs.existsSync(digFile)) {
    skipped++;
    continue;
  }
  if (!FORCE && stamp.routes[r.id]?.at) {
    skipped++;
    continue;
  }
  const parsed = parseDigest(fs.readFileSync(digFile, "utf8"));
  if (!parsed.links.length && !parsed.tips.length) {
    skipped++;
    continue;
  }
  details = upsertNoticeBlock(details, r.id, parsed.tips);
  const routeFile = findRouteFile(r.id);
  if (routeFile && parsed.links.length) {
    upsertSources(routeFile, r.id, parsed.links, parsed.titles);
  }
  stamp.routes[r.id] = {
    at: new Date().toISOString(),
    links: parsed.links.length,
    tips: parsed.tips.length,
  };
  applied++;
  console.log("applied", r.id, `tips=${parsed.tips.length} links=${parsed.links.length}`);
}

fs.writeFileSync(detailsPath, details);
fs.mkdirSync(path.dirname(stampPath), { recursive: true });
fs.writeFileSync(stampPath, JSON.stringify(stamp, null, 2));
console.log({ applied, skipped, stampPath });
