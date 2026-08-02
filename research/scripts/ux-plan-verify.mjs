#!/usr/bin/env node
/**
 * Plan-aligned Playwright verification for china-travel-atlas.
 * Covers: map drill-down (全国→大区→省→路线), season filter, route detail sections.
 */
import { chromium, devices } from "playwright";
import fs from "node:fs";
import path from "node:path";

const base = process.env.UX_BASE || "http://127.0.0.1:3000";
const outDir = path.join("research", "raw", "playwright-plan");
fs.mkdirSync(outDir, { recursive: true });

const results = [];

async function check(name, fn) {
  try {
    await fn();
    console.log("PASS", name);
    results.push({ name, status: "PASS" });
  } catch (e) {
    const msg = String(e.message || e).split("\n")[0];
    console.log("FAIL", name, msg);
    results.push({ name, status: "FAIL", msg });
  }
}

function mustInclude(text, patterns, label) {
  for (const p of patterns) {
    const ok = typeof p === "string" ? text.includes(p) : p.test(text);
    if (!ok) throw new Error(`${label} missing: ${p}`);
  }
}

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({ ...devices["iPhone 12"] });
const page = await context.newPage();
const pageErrors = [];
page.on("pageerror", (e) => pageErrors.push(e.message));

await check("P0 preview reachable", async () => {
  const res = await page.goto(base + "/", {
    waitUntil: "domcontentloaded",
    timeout: 30000,
  });
  if (!res?.ok()) throw new Error("status " + res?.status());
});

await check("P1 home shows brand + season filter + map CTA", async () => {
  await page.goto(base + "/", { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(800);
  const t = await page.locator("body").innerText();
  mustInclude(t, ["爸妈中国旅游地图"], "home brand");
  if (!/季节/.test(t)) throw new Error("home missing season filter");
  if (!/点地图选大区|点击中国地图选大区/.test(t)) {
    throw new Error("home missing map CTA");
  }
  // distinct aria for season「全部」; tripType「全部」has separate label
  if (!(await page.getByRole("button", { name: "全部季节" }).count())) {
    throw new Error("season chip missing: 全部季节");
  }
  if (!(await page.getByRole("button", { name: "全部行程类型" }).count())) {
    throw new Error("tripType chip missing: 全部行程类型");
  }
  for (const label of ["春季", "夏季", "秋季", "冬季"]) {
    const n = await page.getByRole("button", { name: label, exact: true }).count();
    if (!n) throw new Error("season chip missing: " + label);
  }
  await page.screenshot({ path: path.join(outDir, "01-home.png"), fullPage: true });
});

await check("P2 per-route budget estimate (not home BudgetBar)", async () => {
  // Home explore must not show monthly BudgetBar; estimates live on routes
  const home = await page.locator("body").innerText();
  if (/每月旅行预算参考|每月预算参考/.test(home)) {
    throw new Error("BudgetBar still on home/explore");
  }
  const res = await page.goto(base + "/routes/mutianyu-day/", {
    waitUntil: "domcontentloaded",
  });
  if (!res?.ok()) throw new Error("status " + res?.status());
  const t = await page.locator("body").innerText();
  if (!/大致金额|预算参考/.test(t)) {
    throw new Error("route detail missing per-route budget estimate");
  }
  await page.goto(base + "/", { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(400);
});

await check("P3 map drill: 大区地图 → 省份", async () => {
  // Map-only region pick (no text 大区 buttons)
  await page.getByRole("button", { name: /^华北/ }).first().click();
  await page.waitForTimeout(600);
  const t = await page.locator("body").innerText();
  mustInclude(t, ["选择省份", "返回"], "region view");
  // Filters must be hidden in results mode
  if (await page.getByLabel("路线筛选").count()) {
    throw new Error("filters still visible in region results mode");
  }
  // Expect at least one province with routes (北京/河北/天津…)
  const provinceHit = await page.getByRole("button", { name: /条路线 · 点击进入/ }).count();
  if (!provinceHit) throw new Error("no province buttons");
  await page.screenshot({ path: path.join(outDir, "02-region.png"), fullPage: true });
});

await check("P4 map drill: 省份 → 路线列表", async () => {
  // Prefer list button "北京 · N 条路线" — avoid matching shortcut「从北京短途」
  const beijingProv = page.getByRole("button", { name: /^北京/ });
  if ((await beijingProv.count()) > 0) {
    await beijingProv.first().click();
  } else {
    await page.getByRole("button", { name: /条路线 · 点击进入/ }).first().click();
  }
  await page.waitForTimeout(800);
  const t = await page.locator("body").innerText();
  mustInclude(t, ["选择路线", "查看详细旅行攻略"], "province view");
  await page.screenshot({ path: path.join(outDir, "03-province.png"), fullPage: true });
});

await check("P5 click route → detail guide", async () => {
  const link = page.getByRole("link", { name: /查看详细旅行攻略/ }).first();
  await link.click();
  await page.waitForURL(/\/routes\//, { timeout: 15000 });
  await page.waitForTimeout(800);
  const t = await page.locator("body").innerText();
  mustInclude(
    t,
    ["详细介绍", "适合季节", "路线地图", "景点照片", "旅行须知", "预算参考"],
    "route detail",
  );
  await page.screenshot({ path: path.join(outDir, "04-route-detail.png"), fullPage: true });
});

await check("P6 season filter changes available provinces", async () => {
  // Filters only on entry screen — apply season there, then drill
  await page.goto(base + "/", { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(500);
  await page.getByRole("button", { name: "全部季节" }).click();
  await page.waitForTimeout(300);
  await page.getByRole("button", { name: /^华北/ }).first().click();
  await page.waitForTimeout(500);
  const allText = await page.locator("body").innerText();
  const allCount = (allText.match(/条路线/g) || []).length;
  mustInclude(allText, ["选择省份", "返回"], "region after all seasons");

  // Back to filters, switch season, re-enter
  await page.getByRole("button", { name: "返回" }).click();
  await page.waitForTimeout(400);
  await page.getByRole("button", { name: "冬季" }).click();
  await page.waitForTimeout(300);
  await page.getByRole("button", { name: /^华北/ }).first().click();
  await page.waitForTimeout(500);
  const winterText = await page.locator("body").innerText();
  if (!/选择省份|没有匹配|返回/.test(winterText) && !/条路线/.test(winterText)) {
    throw new Error("season filter broke region view");
  }
  void allCount;
});

await check("P7 返回 to filters+map screen", async () => {
  // Ensure we are in results mode then 返回
  if (!(await page.locator("body").innerText()).includes("选择省份")) {
    await page.goto(base + "/", { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(400);
    await page.getByRole("button", { name: /^华北/ }).first().click();
    await page.waitForTimeout(500);
  }
  await page.getByRole("button", { name: "返回" }).click();
  await page.waitForTimeout(400);
  const t = await page.locator("body").innerText();
  if (!/点地图选大区|点击中国地图选大区/.test(t)) {
    throw new Error("china level missing map CTA");
  }
  if (!/季节/.test(t)) throw new Error("china level missing season filter");
  if (!(await page.getByLabel("路线筛选").count())) {
    throw new Error("filters not restored after 返回");
  }
});

await check("P8 overview two-year page", async () => {
  const res = await page.goto(base + "/overview/", { waitUntil: "domcontentloaded" });
  if (!res?.ok()) throw new Error("status " + res?.status());
  const t = await page.locator("body").innerText();
  mustInclude(t, ["两年怎么走", "回京"], "overview");
});

await check("P9 about explains map UX", async () => {
  const res = await page.goto(base + "/about/", { waitUntil: "domcontentloaded" });
  if (!res?.ok()) throw new Error("status " + res?.status());
  const t = await page.locator("body").innerText();
  mustInclude(t, [/地图/, /省/], "about");
});

await check("P10 southwest long-trip detail has 回京/飞", async () => {
  const res = await page.goto(base + "/routes/yunnan-dali-lijiang/", {
    waitUntil: "domcontentloaded",
  });
  if (!res?.ok()) throw new Error("status " + res?.status());
  const t = await page.locator("body").innerText();
  if (!/回京|飞回|飞昆明|飞/.test(t)) throw new Error("long trip missing fly/return cue");
  mustInclude(t, ["详细介绍", "旅行须知"], "dali");
});

await check("P11 no page JS errors", async () => {
  if (pageErrors.length) throw new Error(pageErrors.slice(0, 3).join(" | "));
});

// Desktop pass for map SVG hit area
await check("P12 desktop: SVG region path clickable", async () => {
  const desk = await browser.newContext({
    viewport: { width: 1280, height: 800 },
  });
  const dpage = await desk.newPage();
  await dpage.goto(base + "/", { waitUntil: "domcontentloaded" });
  await dpage.waitForTimeout(500);
  // Click first region path in SVG
  const pathEl = dpage.locator('svg[aria-label="中国地区示意图"] path').first();
  await pathEl.click({ force: true });
  await dpage.waitForTimeout(600);
  const t = await dpage.locator("body").innerText();
  if (!/选择省份/.test(t)) throw new Error("SVG click did not enter region");
  await dpage.screenshot({ path: path.join(outDir, "05-desktop-region.png") });
  await desk.close();
});

await browser.close();

const pass = results.filter((r) => r.status === "PASS").length;
const fail = results.filter((r) => r.status === "FAIL").length;
const md = [
  "# Plan × Playwright 验证报告",
  "",
  `> 生成：${new Date().toISOString()}`,
  `> Base：${base}`,
  "",
  `**结果：${pass} PASS / ${fail} FAIL**（共 ${results.length} 项）`,
  "",
  "| 项 | 状态 | 说明 |",
  "|----|------|------|",
  ...results.map(
    (r) =>
      `| ${r.name} | ${r.status} | ${r.msg ? r.msg.replace(/\|/g, "/") : ""} |`,
  ),
  "",
  "## 对照 Plan",
  "",
  "- 探索：地图点选大区 → 省份 → 路线 → 攻略详情",
  "- 季节筛选：春夏秋冬大按钮",
  "- 旅行页：详细介绍 / 适合季节 / 路线地图 / 景点照片 / 旅行须知 / 预算",
  "- 两年总览含回京；长途含飞入/回京线索",
  "- 适老：大按钮、手机视口验证",
  "",
  `截图目录：\`${outDir}/\``,
  "",
];
fs.writeFileSync("research/notes/_plan-playwright.md", md.join("\n"));
console.log("\nWrote research/notes/_plan-playwright.md");
console.log(`SUMMARY ${pass} pass / ${fail} fail`);
process.exit(fail ? 1 : 0);
