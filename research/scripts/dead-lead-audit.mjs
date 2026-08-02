#!/usr/bin/env node
/**
 * Dead-lead visibility audit: routes in catalog but hard to find via Explore
 * filters (theme / season / province / search keywords).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "..");

function parseArrayField(chunk, field) {
  const m = chunk.match(new RegExp(`${field}:\\s*\\[([^\\]]*)\\]`));
  if (!m) return [];
  return [...m[1].matchAll(/['"]([^'"]+)['"]/g)].map((x) => x[1]);
}

function loadRoutes() {
  const files = [
    path.join(root, "content/routes.ts"),
    ...fs
      .readdirSync(path.join(root, "content/patches"))
      .filter((f) => f.endsWith(".ts"))
      .map((f) => path.join(root, "content/patches", f)),
  ];
  // Later files overwrite earlier (same merge order as content/index for patches after base)
  const map = new Map();
  for (const file of files) {
    const s = fs.readFileSync(file, "utf8");
    const chunks = s.split(/\n  \{\n    id: ['"]/).slice(1);
    for (const c of chunks) {
      const id = c.match(/^([^'"]+)['"]/)?.[1];
      if (!id) continue;
      const title = c.match(/title:\s*['"]([^'"]+)['"]/)?.[1];
      const region = c.match(/region:\s*['"]([^'"]+)['"]/)?.[1];
      const tripType = c.match(/tripType:\s*['"]([^'"]+)['"]/)?.[1];
      const seasons = parseArrayField(c, "seasons");
      const themes = parseArrayField(c, "themes");
      const summary = c.match(/summary:\s*\n?\s*['"]([^'"]+)['"]/)?.[1] ?? "";
      const keywords = parseArrayField(c, "researchKeywords");
      const stopNames = [...c.matchAll(/name:\s*['"]([^'"]+)['"]/g)].map((m) => m[1]);
      if (id && title && region) {
        map.set(id, {
          id,
          title,
          region,
          tripType,
          seasons,
          themes,
          summary,
          keywords,
          stopNames,
          file: path.relative(root, file),
        });
      }
    }
  }
  return map;
}

function loadProvinces() {
  const s = fs.readFileSync(path.join(root, "content/route-provinces.ts"), "utf8");
  const keys = [...s.matchAll(/^\s*['"]([^'"]+)['"]:\s*\{/gm)].map((m) => m[1]);
  return new Set(keys);
}

function searchableHay(r) {
  return [r.id, r.title, r.summary, ...r.keywords, ...r.stopNames].join(" ").toLowerCase();
}

function search(routes, q) {
  const n = q.toLowerCase().replace(/\s+/g, "");
  return routes.filter((r) => searchableHay(r).replace(/\s+/g, "").includes(n));
}

const routeMap = loadRoutes();
const routes = [...routeMap.values()];
const prov = loadProvinces();

const missingProv = routes.filter((r) => !prov.has(r.id)).map((r) => r.id);
const orphanProv = [...prov].filter((id) => !routeMap.has(id));

const famous = routes.filter((r) => r.themes.includes("famous-scenic"));
const longStay = routes.filter((r) => r.themes.includes("long-stay"));
const corridor = routes.filter((r) => r.themes.includes("corridor"));

const seasonOnly = routes.filter((r) => r.seasons.length === 1);
const famousNarrowSeason = famous.filter((r) => r.seasons.length < 2);
const famousNoSpringAutumn = famous.filter(
  (r) => !r.seasons.includes("spring") && !r.seasons.includes("autumn"),
);
const famousHiddenIfSummer = famous.filter((r) => !r.seasons.includes("summer"));
const famousHiddenIfWinter = famous.filter((r) => !r.seasons.includes("winter"));

// High-intent place names that should hit search + preferably 名景
const expectSearch = [
  "婺源",
  "梵净",
  "荔波",
  "神农架",
  "恩施",
  "西江",
  "肇兴",
  "中山",
  "兰州",
  "潮州",
  "汕头",
  "平遥",
  "乔家",
  "黄果树",
  "武夷",
  "千岛湖",
  "泸定",
  "G318",
  "太谷",
  "祁县",
  "北海",
  "普陀",
  "开平",
  "九华",
  "武隆",
  "孟津",
  "偃师",
  "白马寺",
  "二里头",
  "开封",
  "清明上河",
  "周庄",
  "同里",
  "常熟",
  "洱源",
  "剑川",
  "沙溪",
  "雁门关",
  "代县",
  "高邮",
  "盂城驿",
  "金山寺",
  "焦山",
  "阿尔山",
  "殷墟",
  "云台山",
  "南通",
  "濠河",
  "嘉兴南湖",
  "西塘",
  "南浔",
  "岳阳楼",
  "邯郸",
  "运城",
  "盐湖",
  "关帝庙",
  "临汾",
  "广胜寺",
  "尧庙",
  "潍坊",
  "十笏园",
  "荆州",
  "查济",
  "泾县",
  "宣城",
];

const searchReport = {};
for (const q of expectSearch) {
  const hits = search(routes, q);
  searchReport[q] = {
    count: hits.length,
    ids: hits.slice(0, 6).map((r) => r.id),
    onFamousChip: hits.filter((r) => r.themes.includes("famous-scenic")).map((r) => r.id),
  };
}

const searchMiss = expectSearch.filter((q) => searchReport[q].count === 0);
const searchNotOnFamous = expectSearch.filter((q) => {
  const r = searchReport[q];
  return r.count > 0 && r.onFamousChip.length === 0 && ["梵净","荔波","神农架","恩施","西江","肇兴","潮州","平遥","黄果树","武夷","千岛湖","婺源","北海","普陀","开平","九华","武隆","乔家","开封","周庄","沙溪","白马寺","雁门关","高邮","金山寺","阿尔山","殷墟","云台山","南浔","岳阳楼","运城","广胜寺","十笏园","荆州","查济"].includes(q);
});

const out = {
  catalog: routes.length,
  missingProv,
  orphanProv,
  themeCounts: {
    famous: famous.length,
    longStay: longStay.length,
    corridor: corridor.length,
  },
  seasonOnly: seasonOnly.map((r) => ({
    id: r.id,
    title: r.title,
    seasons: r.seasons,
    themes: r.themes,
  })),
  famousNarrowSeason: famousNarrowSeason.map((r) => ({
    id: r.id,
    title: r.title,
    seasons: r.seasons,
  })),
  famousHiddenIfSummer: famousHiddenIfSummer.map((r) => ({
    id: r.id,
    title: r.title,
    seasons: r.seasons,
  })),
  famousNoSpringAutumn: famousNoSpringAutumn.map((r) => ({
    id: r.id,
    title: r.title,
    seasons: r.seasons,
  })),
  searchMiss,
  searchNotOnFamous,
  searchReport,
};

const outPath = path.join(root, "research/raw/dead-lead-audit-20260802.json");
fs.writeFileSync(outPath, JSON.stringify(out, null, 2));
console.log(JSON.stringify({
  catalog: out.catalog,
  missingProv: out.missingProv,
  orphanProvCount: out.orphanProv.length,
  themeCounts: out.themeCounts,
  seasonOnlyCount: out.seasonOnly.length,
  famousNarrowSeason: out.famousNarrowSeason,
  famousHiddenIfSummerCount: out.famousHiddenIfSummer.length,
  famousHiddenIfSummer: out.famousHiddenIfSummer,
  searchMiss: out.searchMiss,
  searchNotOnFamous: out.searchNotOnFamous,
  sampleSearch: Object.fromEntries(
    ["运城","广胜寺","十笏园","荆州","查济","丛台","濠河"].map((q) => [q, out.searchReport[q]]),
  ),
}, null, 2));
console.error(`Wrote ${outPath}`);
