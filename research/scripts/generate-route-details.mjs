#!/usr/bin/env node
/**
 * Generate content/route-details.ts with introduction / seasonGuide / notices / gallery
 * for every route. Safe to re-run; hand-tuned fields in EXTRA below win.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "..");

function loadRoutes() {
  const files = [
    path.join(root, "content/routes.ts"),
    ...fs
      .readdirSync(path.join(root, "content/patches"))
      .filter((f) => f.endsWith(".ts"))
      .map((f) => path.join(root, "content/patches", f)),
  ];
  const map = new Map();
  for (const file of files) {
    const s = fs.readFileSync(file, "utf8");
    const chunks = s.split(/\n  \{\n    id: '/).slice(1);
    for (const c of chunks) {
      const id = c.match(/^([^']+)'/)?.[1];
      if (!id) continue;
      const title = c.match(/title:\s*'((?:\\'|[^'])*)'/)?.[1]?.replace(/\\'/g, "'");
      const region = c.match(/region:\s*'([^']+)'/)?.[1];
      const tripType = c.match(/tripType:\s*'([^']+)'/)?.[1];
      const fromHome = /fromHome:\s*true/.test(c.split(/stops:\s*\[/)[0]);
      const daysLabel = c.match(/daysLabel:\s*'((?:\\'|[^'])*)'/)?.[1]?.replace(/\\'/g, "'");
      const transport = c.match(/transport:\s*'((?:\\'|[^'])*)'/)?.[1]?.replace(/\\'/g, "'");
      const budgetLabel = c.match(/budgetLabel:\s*'((?:\\'|[^'])*)'/)?.[1]?.replace(/\\'/g, "'");
      const summary = c.match(/summary:\s*'((?:\\'|[^'])*)'/)?.[1]?.replace(/\\'/g, "'");
      const whyFast = c.match(/whyFast:\s*'((?:\\'|[^'])*)'/)?.[1]?.replace(/\\'/g, "'");
      const coverImage = c.match(/coverImage:\s*\n?\s*'([^']+)'/)?.[1];
      const seasons = [
        ...(c.match(/seasons:\s*\[([^\]]+)\]/)?.[1].matchAll(/'(\w+)'/g) || []),
      ].map((m) => m[1]);
      const stopBlock = c.split(/stops:\s*\[/)[1]?.split(/\n    \],/)[0] || "";
      const stops = [];
      for (const sc of stopBlock.split(/\n      \{\n/).slice(1)) {
        const sid = sc.match(/id:\s*'([^']+)'/)?.[1];
        const name = sc.match(/name:\s*'((?:\\'|[^'])*)'/)?.[1]?.replace(/\\'/g, "'");
        const stSummary = sc.match(/summary:\s*'((?:\\'|[^'])*)'/)?.[1]?.replace(/\\'/g, "'");
        const tips = sc.match(/tips:\s*'((?:\\'|[^'])*)'/)?.[1]?.replace(/\\'/g, "'");
        const image = sc.match(/image:\s*\n?\s*'([^']+)'/)?.[1];
        const days = Number(sc.match(/days:\s*(\d+)/)?.[1] || 0);
        const pace = sc.match(/pace:\s*'(\w+)'/)?.[1];
        if (sid && name) stops.push({ id: sid, name, summary: stSummary || "", tips, image, days, pace });
      }
      map.set(id, {
        id,
        title,
        region,
        tripType,
        fromHome,
        daysLabel,
        transport,
        budgetLabel,
        summary,
        whyFast,
        coverImage,
        seasons,
        stops,
      });
    }
  }
  return [...map.values()];
}

const SEASON = { spring: "春季", summer: "夏季", autumn: "秋季", winter: "冬季" };
const REGION_HINT = {
  huabei: "华北以北京为圆心，自驾友好，秋高气爽最舒服。",
  dongbei: "东北夏凉冬雪，注意保暖与路面防滑。",
  huadong: "华东高铁便捷，春秋最宜，避开梅雨与酷暑硬走。",
  huazhong: "中原春秋舒适，夏季闷热，博物馆与索道可作调节。",
  huanan: "华南冬春避寒舒适，夏季湿热宜缩短户外时段。",
  xinan: "西南多飞入慢住，注意海拔与紫外线。",
  xibei: "西北干燥日照强，补水防晒，长车程要分段。",
  qingzang: "高原必须留适应期，听从身体信号，不硬撑。",
};

/** Hand-tuned overrides (win over generated) — expand over time */
const EXTRA = {
  "mutianyu-day": {
    introduction: `慕田峪是北京周边长城里相对平缓、设施成熟的一段，人流通常少于八达岭，很适合从家里开车当天练手。

建议一早出发，北检票口进园，先坐摆渡再换乘厢式缆车到 14 号敌楼。上城后只走两三座敌楼就够看风景，不必跟风走完全程。恐高的人避开滑道，选厢式缆车双程最稳妥。

秋天银杏好看但周末人多，能错峰最好。山上厕所少，入口先解决。北京户籍常见门票优惠，缆车另计，以官网当日为准。午后下山返京，给自己留堵车余量。`,
    seasonGuide:
      "更适合春秋：气温宜人、能见度好。夏季午后暴晒与阵雨，尽量早晚登城；冬季路面可能结冰，防滑鞋必备，风大时缩短停留。",
    notices: [
      "北检票口 → 摆渡 → 厢式缆车双程，是省力主路线。",
      "只走 2–3 座敌楼即可，别跟风走完全程。",
      "门票优惠与缆车价格以慕田峪官网/现场为准。",
      "早出早归，预留返京堵车时间。",
    ],
  },
  "qingzang-lhasa-slow": {
    introduction: `拉萨是青藏线的「适应大本营」。飞抵后先把节奏放慢：前几天以城区慢走、喝酥油茶、看博物馆为主，别一落地就赶布达拉宫和纳木错。

布达拉宫需预约，台阶多，可与大昭寺错开日期。纳木错海拔更高，只建议在拉萨适应充分后做一日往返，绝不在湖边过夜硬撑。有心脏病、高血压、慢阻肺等基础病，出行前务必咨询医生。

全程以包车或正规一日游更省心。结束后飞回北京休整，再考虑下一段。`,
    seasonGuide:
      "主推夏秋窗口（约 6–9 月）：天气相对稳定、交通畅通。冬春干冷且部分路段受影响，不建议作为第一次高原尝试。",
    notices: [
      "抵达后至少休息适应数日，再安排高强度参观。",
      "布达拉宫提前预约；与大昭寺分日更好。",
      "纳木错一日即返，高反明显立即下撤。",
      "备常用药；遵医嘱，不盲目进补偏方。",
    ],
  },
};

function esc(s) {
  return String(s ?? "")
    .replace(/\\/g, "\\\\")
    .replace(/'/g, "\\'")
    .replace(/\n/g, "\\n");
}

function genIntro(r) {
  if (EXTRA[r.id]?.introduction) return EXTRA[r.id].introduction;
  const home = r.fromHome
    ? "从北京家出发，适合作为周末或节假日的轻松行程。"
    : "建议从北京飞或乘高铁抵达后当地活动；结束后回京休整再出发下一段。";
  const stopLines = r.stops
    .map(
      (s) =>
        `· ${s.name}（${s.pace === "slow" ? "慢游" : "快览"}，约 ${s.days} 天）：${s.summary}${s.tips ? " 须知：" + s.tips : ""}`,
    )
    .join("\n");
  return `${r.summary}

${home}${REGION_HINT[r.region] || ""}

本线大约 ${r.daysLabel}。交通安排：${r.transport}。预算参考：${r.budgetLabel}。节奏以慢游为主${r.whyFast ? "，快览点单独穿插" : ""}，每天留空白，不把日程排满。

主要停留与看点：
${stopLines}

出行前复核票务预约、天气与交通；英文不错的话可用英文界面 App 订票查地图。图片为公开图源示意，现场以实景为准。`;
}

function genSeason(r) {
  if (EXTRA[r.id]?.seasonGuide) return EXTRA[r.id].seasonGuide;
  const best = r.seasons.map((s) => SEASON[s]).join("、");
  const avoid = ["spring", "summer", "autumn", "winter"]
    .filter((s) => !r.seasons.includes(s))
    .map((s) => SEASON[s]);
  return `更适合：${best}。${avoid.length ? `相对不主推：${avoid.join("、")}（仍可去，但体验或体力负担可能更重）。` : "所列季节外也可按体力灵活安排。"}出发前查看当地气温、风雨与景区开放公告；极端天气果断改期或缩短户外。`;
}

function genNotices(r) {
  if (EXTRA[r.id]?.notices) return EXTRA[r.id].notices;
  const n = [
    `行程约 ${r.daysLabel}，按「慢游为主」安排，每天留空白。`,
    `交通：${r.transport}`,
    `预算：${r.budgetLabel}（家庭月旅行约 2 万可统筹）`,
  ];
  for (const s of r.stops) {
    if (s.tips) n.push(`${s.name}：${s.tips}`);
  }
  if (r.region === "qingzang" || /lhasa|qinghai|namtso|xining/.test(r.id)) {
    n.push("高原相关：先适应再出行，不适立即休息或下撤，遵医嘱。");
  }
  if (r.tripType === "long") n.push("长旅行结束后建议回北京休整几天。");
  if (r.fromHome) n.push("从家出发请早出，预留检票与路况时间。");
  n.push("票务与开放时间以景区官网/现场公告为准。");
  n.push("远途优先电梯房、好停车住处，少搬运行李。");
  return [...new Set(n)].slice(0, 10);
}

function genGallery(r) {
  const g = [];
  if (r.coverImage) g.push({ url: r.coverImage, caption: `${r.title} · 封面景色` });
  for (const s of r.stops) {
    if (s.image) g.push({ url: s.image, caption: s.name, stopId: s.id });
  }
  // dedupe by url
  const seen = new Set();
  return g.filter((x) => {
    if (seen.has(x.url)) return false;
    seen.add(x.url);
    return true;
  });
}

const routes = loadRoutes();
let out = `import type { GalleryImage, Route } from './types';\n\n`;
out += `export type RouteDetailFields = Pick<\n  Route,\n  'introduction' | 'seasonGuide' | 'notices' | 'gallery'\n>;\n\n`;
out += `/** Per-route detail copy & photo gallery (merged in content/index.ts) */\n`;
out += `export const routeDetails: Record<string, RouteDetailFields> = {\n`;

for (const r of routes) {
  const intro = genIntro(r);
  const season = genSeason(r);
  const notices = genNotices(r);
  const gallery = genGallery(r);
  out += `  '${r.id}': {\n`;
  out += `    introduction: '${esc(intro)}',\n`;
  out += `    seasonGuide: '${esc(season)}',\n`;
  out += `    notices: [\n${notices.map((x) => `      '${esc(x)}',`).join("\n")}\n    ],\n`;
  out += `    gallery: [\n`;
  for (const g of gallery) {
    out += `      { url: '${esc(g.url)}', caption: '${esc(g.caption)}'${g.stopId ? `, stopId: '${g.stopId}'` : ""} },\n`;
  }
  out += `    ],\n`;
  out += `  },\n`;
}
out += `};\n`;

const dest = path.join(root, "content/route-details.ts");
fs.writeFileSync(dest, out);
console.log("wrote", dest, "routes", routes.length);
