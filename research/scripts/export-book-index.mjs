#!/usr/bin/env node
/** Generate docs/book-index.md from content patches + base routes */
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
      const title = c.match(/title:\s*'([^']+)'/)?.[1];
      const region = c.match(/region:\s*'([^']+)'/)?.[1];
      const tripType = c.match(/tripType:\s*'([^']+)'/)?.[1];
      const seasons = [
        ...(c.match(/seasons:\s*\[([^\]]+)\]/)?.[1].matchAll(/'(\w+)'/g) || []),
      ].map((m) => m[1]);
      if (id && title && region) map.set(id, { id, title, region, tripType, seasons });
    }
  }
  return [...map.values()];
}

const regionNames = {
  huabei: "京畿华北",
  dongbei: "东北林海",
  huadong: "华东水乡",
  huazhong: "中原华中",
  huanan: "华南岭南",
  xinan: "西南秘境",
  xibei: "西北丝路",
  qingzang: "青藏高地",
};
const seasonNames = { spring: "春", summer: "夏", autumn: "秋", winter: "冬" };

const routes = loadRoutes();
let md = `# 成书路线索引\n\n> 由 \`npm run export:book-index\` 生成，勿手改。共 ${routes.length} 条。\n\n`;
md += `## 按地区\n\n`;
for (const [rid, name] of Object.entries(regionNames)) {
  md += `### ${name}\n\n`;
  for (const r of routes.filter((x) => x.region === rid)) {
    md += `- **${r.title}** (\`${r.id}\`) · ${r.tripType === "long" ? "长旅行" : "短途"} · ${r.seasons.map((s) => seasonNames[s] || s).join("/")}\n`;
  }
  md += `\n`;
}
md += `## 按季节\n\n`;
for (const [sid, name] of Object.entries(seasonNames)) {
  md += `### ${name}\n\n`;
  for (const r of routes.filter((x) => x.seasons.includes(sid))) {
    md += `- ${r.title} (\`${r.id}\`) · ${regionNames[r.region] || r.region}\n`;
  }
  md += `\n`;
}
fs.writeFileSync(path.join(root, "docs/book-index.md"), md);
console.log("wrote docs/book-index.md", routes.length);
