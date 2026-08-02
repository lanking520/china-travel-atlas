#!/usr/bin/env node
/**
 * Plan-aligned Playwright verification for china-travel-atlas.
 * Covers: 全部景点 default, map cover, drill-down, filters on results, search, detail.
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

async function openSeasonDim(page) {
  const btn = page.getByRole("button", { name: /季节·/ });
  if (!(await btn.count())) throw new Error("季节· trigger missing");
  if (!(await page.getByRole("button", { name: "全部季节" }).isVisible().catch(() => false))) {
    await btn.click();
    await page.getByRole("dialog", { name: "季节" }).waitFor({
      state: "visible",
      timeout: 8000,
    });
  }
  await page.waitForTimeout(150);
}

async function openTripDim(page) {
  const btn = page.getByRole("button", { name: /长短·/ });
  if (!(await btn.count())) throw new Error("长短· trigger missing");
  await btn.click();
  await page.getByRole("dialog", { name: "长短" }).waitFor({
    state: "visible",
    timeout: 8000,
  });
  await page.waitForTimeout(150);
}

async function openThemeDim(page) {
  const btn = page.getByRole("button", { name: /主题·/ });
  if (!(await btn.count())) throw new Error("主题· trigger missing");
  await btn.click();
  await page.getByRole("dialog", { name: "主题" }).waitFor({
    state: "visible",
    timeout: 8000,
  });
  await page.waitForTimeout(150);
}

async function goMapCover(page) {
  await page.getByRole("tab", { name: "地图选区" }).click();
  await page.waitForTimeout(400);
}

const browser = await chromium.launch({
  headless: true,
  // Prefer system Chrome when headless_shell SEGV on this host (arch/sandbox).
  ...(process.env.UX_PW_CHANNEL
    ? { channel: process.env.UX_PW_CHANNEL }
    : { channel: "chrome" }),
});
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

await check("P1 home: 全部景点 default + tabs (no cover filter pile)", async () => {
  await page.goto(base + "/", { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(800);
  const t = await page.locator("body").innerText();
  mustInclude(t, ["爸妈中国旅游地图"], "home brand");
  if (!(await page.getByRole("tab", { name: "全部景点" }).count())) {
    throw new Error("missing tab 全部景点");
  }
  if (!(await page.getByRole("tab", { name: "地图选区" }).count())) {
    throw new Error("missing tab 地图选区");
  }
  const allTab = page.getByRole("tab", { name: "全部景点" });
  if ((await allTab.getAttribute("aria-selected")) !== "true") {
    throw new Error("全部景点 should be default selected");
  }
  // Search must sit above tabs
  const orderOk = await page.evaluate(() => {
    const input = document.querySelector('input[placeholder="搜索城市、景点或路线"]');
    const tabs = document.querySelector('[role="tablist"][aria-label="探索方式"]');
    if (!input || !tabs) return false;
    const pos = input.compareDocumentPosition(tabs);
    return (pos & Node.DOCUMENT_POSITION_FOLLOWING) !== 0;
  });
  if (!orderOk) throw new Error("search box must be above 探索方式 tabs");
  // Default results: dual-col catalog + dim triggers (季节 shows calendar soft-default)
  const dims = page.locator('[aria-label="筛选维度"]');
  if (!(await dims.count())) throw new Error("筛选维度 row missing");
  if (!(await dims.getByRole("button", { name: /季节·/ }).count())) {
    throw new Error("missing 季节· dim trigger");
  }
  for (const re of [/长短·全部/, /主题·全部/]) {
    if (!(await dims.getByRole("button", { name: re }).count())) {
      throw new Error("missing default dim trigger " + re);
    }
  }
  // Season option chips must NOT be visible until 季节 sheet opens
  if (await page.getByRole("button", { name: "全部季节" }).count()) {
    throw new Error("season chips visible before opening 季节 sheet");
  }
  const grid = page.locator('[aria-label="全部景点路线"]');
  if (!(await grid.count())) throw new Error("全部景点 grid missing");
  if ((await grid.locator('a[href*="/routes/"]').count()) < 6) {
    throw new Error("全部景点 dual-col has too few cards");
  }
  // Soft calendar default + 名景 sort hint (no 从北京短途 / 当季 shortcut chips)
  if (!/已按当季|先名景|先显示名景/.test(t)) {
    throw new Error("missing calendar-season / 名景 catalog hint");
  }
  if (/从北京短途/.test(t)) {
    throw new Error("removed shortcut 从北京短途 should not appear");
  }
  // Clean catalog: no sticky 返回; soft calendar has no season identity chip
  if (await page.getByRole("button", { name: "返回" }).count()) {
    throw new Error("clean catalog should hide sticky 返回");
  }
  if (
    await page
      .getByRole("button", { name: /移除筛选 (春季|夏季|秋季|冬季)/ })
      .count()
  ) {
    throw new Error("soft calendar default should not show season identity chip");
  }
  await page.screenshot({ path: path.join(outDir, "01-home.png"), fullPage: true });
});

await check("P2 per-route budget estimate (not home BudgetBar)", async () => {
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

await check("P3 map drill: 地图选区 → 大区 → 省份", async () => {
  await goMapCover(page);
  const mapText = await page.locator("body").innerText();
  if (!/点地图选大区|点击中国地图选大区/.test(mapText)) {
    throw new Error("map cover missing CTA");
  }
  // Cover must NOT show 路线筛选 panel
  if (await page.getByLabel("路线筛选").count()) {
    throw new Error("filters panel on map cover");
  }
  await page.getByRole("button", { name: /^华北/ }).first().click();
  await page.waitForTimeout(600);
  const t = await page.locator("body").innerText();
  mustInclude(t, ["选择省份", "返回"], "region view");
  const provinceHit = await page
    .getByRole("button", { name: /条路线 · 点击进入/ })
    .count();
  if (!provinceHit) throw new Error("no province buttons");
  await page.screenshot({ path: path.join(outDir, "02-region.png"), fullPage: true });
});

await check("P4 map drill: 省份 → 路线列表", async () => {
  const beijingProv = page.getByRole("button", { name: /^北京/ });
  if ((await beijingProv.count()) > 0) {
    await beijingProv.first().click();
  } else {
    await page.getByRole("button", { name: /条路线 · 点击进入/ }).first().click();
  }
  await page.waitForTimeout(800);
  const t = await page.locator("body").innerText();
  mustInclude(t, ["选择路线"], "province view");
  const routeCards = page.locator('a[href*="/routes/"]');
  if ((await routeCards.count()) < 1) {
    throw new Error("province view missing dual-column route cards");
  }
  await page.screenshot({ path: path.join(outDir, "03-province.png"), fullPage: true });
});

await check("P5 click route → detail guide", async () => {
  const link = page.locator('a[href*="/routes/"]').first();
  await link.click();
  await page.waitForURL(/\/routes\//, { timeout: 15000 });
  await page.waitForTimeout(800);
  const t = await page.locator("body").innerText();
  mustInclude(
    t,
    ["详细介绍", "适合季节", "路线地图", "景点照片", "旅行须知", "预算参考"],
    "route detail",
  );
  await page.screenshot({
    path: path.join(outDir, "04-route-detail.png"),
    fullPage: true,
  });
});

await check("P6 season / trip dims on results", async () => {
  await page.goto(base + "/", { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(500);
  await openSeasonDim(page);
  const seasonSheet = page.getByRole("dialog", { name: "季节" });
  if (!(await seasonSheet.getByRole("button", { name: "全部季节" }).count())) {
    throw new Error("全部季节 chip missing after opening 季节");
  }
  if (await page.getByRole("button", { name: "从北京短途" }).count()) {
    throw new Error("从北京短途 shortcut should be removed");
  }
  if (await page.getByRole("button", { name: /^当季/ }).count()) {
    throw new Error("当季 shortcut chip should be removed");
  }
  await seasonSheet.getByRole("button", { name: "冬季", exact: true }).click();
  await page.waitForTimeout(300);
  const dims = page.locator('[aria-label="筛选维度"]');
  if (!(await dims.getByRole("button", { name: /季节·冬季/ }).count())) {
    throw new Error("winter should show on 季节· dim trigger");
  }
  if (await page.getByRole("button", { name: /移除筛选 冬季/ }).count()) {
    throw new Error("season identity chip should not appear (dim trigger suffices)");
  }
  // Trip dim has 短线 / 长线
  await openTripDim(page);
  const tripSheet = page.getByRole("dialog", { name: "长短" });
  if (!(await tripSheet.getByRole("button", { name: "短线", exact: true }).count())) {
    throw new Error("短线 chip missing");
  }
  if (!(await tripSheet.getByRole("button", { name: "长线", exact: true }).count())) {
    throw new Error("长线 chip missing");
  }
  if (!(await tripSheet.getByRole("button", { name: "重置" }).count())) {
    throw new Error("长短 sheet missing 重置");
  }
  await tripSheet.getByRole("button", { name: "完成" }).click();
  await page.waitForTimeout(150);
  // Clear season via 全部季节
  await openSeasonDim(page);
  await page.getByRole("dialog", { name: "季节" }).getByRole("button", { name: "全部季节" }).click();
  await page.waitForTimeout(200);
  if (!(await dims.getByRole("button", { name: /季节·全季节/ }).count())) {
    throw new Error("全部季节 should restore 季节·全季节 trigger");
  }
  // Map drill with season
  await goMapCover(page);
  await page.getByRole("button", { name: /^华北/ }).first().click();
  await page.waitForTimeout(500);
  await openSeasonDim(page);
  await page.getByRole("dialog", { name: "季节" }).getByRole("button", { name: "冬季", exact: true }).click();
  await page.waitForTimeout(400);
  const winterText = await page.locator("body").innerText();
  if (!/选择省份|没有匹配|返回|条路线/.test(winterText)) {
    throw new Error("season filter broke region view");
  }
});

await check("P7 返回 clears to 全部景点 catalog", async () => {
  if (!(await page.locator("body").innerText()).includes("选择省份")) {
    await page.goto(base + "/", { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(400);
    await goMapCover(page);
    await page.getByRole("button", { name: /^华北/ }).first().click();
    await page.waitForTimeout(500);
  }
  await page.getByRole("button", { name: "返回" }).click();
  await page.waitForTimeout(400);
  const allTab = page.getByRole("tab", { name: "全部景点" });
  if ((await allTab.getAttribute("aria-selected")) !== "true") {
    throw new Error("返回 should land on 全部景点");
  }
  if (!(await page.locator('[aria-label="全部景点路线"]').count())) {
    throw new Error("返回 missing 全部景点 grid");
  }
  // Clean: no season panel until 添加筛选
  if (await page.getByRole("button", { name: "全部季节" }).count()) {
    throw new Error("filters still expanded/visible after 返回");
  }
});

await check("P8 overview two-year page", async () => {
  const res = await page.goto(base + "/overview/", {
    waitUntil: "domcontentloaded",
  });
  if (!res?.ok()) throw new Error("status " + res?.status());
  const t = await page.locator("body").innerText();
  mustInclude(t, ["两年怎么走", "回京"], "overview");
});

await check("P9 about explains map UX", async () => {
  const res = await page.goto(base + "/about/", {
    waitUntil: "domcontentloaded",
  });
  if (!res?.ok()) throw new Error("status " + res?.status());
  const t = await page.locator("body").innerText();
  mustInclude(t, [/地图/, /省/], "about");
});

await check("P10 southwest long-trip detail has 回京/飞", async () => {
  const res = await page.goto(base + "/routes/compose-yunnan-dali-lijiang/", {
    waitUntil: "domcontentloaded",
  });
  if (!res?.ok()) throw new Error("status " + res?.status());
  const t = await page.locator("body").innerText();
  if (!/回京|飞回|飞昆明|飞/.test(t))
    throw new Error("long trip missing fly/return cue");
  mustInclude(t, ["详细介绍", "旅行须知"], "dali");
});

await check("P11 no page JS errors", async () => {
  if (pageErrors.length) throw new Error(pageErrors.slice(0, 3).join(" | "));
});

await check("P12 desktop: SVG region path clickable", async () => {
  const desk = await browser.newContext({
    viewport: { width: 1280, height: 800 },
  });
  const dpage = await desk.newPage();
  await dpage.goto(base + "/", { waitUntil: "domcontentloaded" });
  await dpage.waitForTimeout(500);
  await dpage.getByRole("tab", { name: "地图选区" }).click();
  await dpage.waitForTimeout(400);
  const pathEl = dpage
    .locator('svg[aria-label="中国地区示意图"] path')
    .first();
  await pathEl.click({ force: true });
  await dpage.waitForTimeout(600);
  const t = await dpage.locator("body").innerText();
  if (!/选择省份/.test(t)) throw new Error("SVG click did not enter region");
  await dpage.screenshot({ path: path.join(outDir, "05-desktop-region.png") });
  await desk.close();
});

await check("P13 search box finds 婺源", async () => {
  await page.goto(base + "/", { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(400);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(200);
  const input = page.getByPlaceholder("搜索城市、景点或路线");
  await input.first().waitFor({ state: "attached", timeout: 8000 });
  if (!(await input.count())) throw new Error("search box missing");
  await input.fill("婺源");
  await page.waitForTimeout(400);
  const results = page.locator('section[aria-label="搜索结果"]');
  await results.waitFor({ state: "visible", timeout: 8000 });
  const links = results.locator('a[href*="/routes/"]');
  if ((await links.count()) < 1) throw new Error("婺源 search returned 0 routes");
  const t = await results.innerText();
  if (!/婺源/.test(t)) throw new Error("婺源 search results missing 婺源 label");
  await page.screenshot({ path: path.join(outDir, "06-search-wuyuan.png") });
});

await check("P14 search box finds 九寨", async () => {
  const input = page.getByPlaceholder("搜索城市、景点或路线");
  await input.fill("九寨");
  await page.waitForTimeout(400);
  const results = page.locator('section[aria-label="搜索结果"]');
  await results.waitFor({ state: "visible", timeout: 8000 });
  if ((await results.locator('a[href*="/routes/"]').count()) < 1) {
    throw new Error("九寨 search returned 0 routes");
  }
  const t = await results.innerText();
  if (!/九寨/.test(t)) throw new Error("九寨 search results missing 九寨 label");
});

await check("P15 名景 via 主题· dim → dual-column RouteCards", async () => {
  await page.goto(base + "/", { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(400);
  await openThemeDim(page);
  const sheet = page.getByRole("dialog", { name: "主题" });
  await sheet.getByRole("button", { name: "名景", exact: true }).click();
  await page.waitForTimeout(600);
  const t = await page.locator("body").innerText();
  if (!/名景/.test(t)) throw new Error("名景 theme list missing title cue");
  if (!(await page.getByRole("button", { name: /主题·名景/ }).count())) {
    throw new Error("名景 should show on 主题· dim trigger");
  }
  if (await page.getByRole("button", { name: /移除筛选 名景/ }).count()) {
    throw new Error("名景 identity chip should not appear");
  }
  const mingGrid = page.locator('[aria-label*="名景"][class*="grid-cols-2"]');
  if (!(await mingGrid.count())) {
    const anyGrid = page.locator(".grid.grid-cols-2");
    if ((await anyGrid.count()) < 1)
      throw new Error("名景 list missing grid-cols-2");
    if ((await anyGrid.first().locator('a[href*="/routes/"]').count()) < 3) {
      throw new Error("名景 dual-col grid has too few route cards");
    }
  } else if ((await mingGrid.first().locator('a[href*="/routes/"]').count()) < 3) {
    throw new Error("名景 dual-col grid has too few route cards");
  }
  // Demoted yangshuo/zhenyuan must not appear under 长居推荐
  await openThemeDim(page);
  const sheet2 = page.getByRole("dialog", { name: "主题" });
  await sheet2.getByRole("button", { name: "长居", exact: true }).click();
  await page.waitForTimeout(400);
  const hrefs = await page.locator('a[href*="/routes/"]').evaluateAll((as) =>
    as.map((a) => a.getAttribute("href") || ""),
  );
  for (const bad of ["longstay-yangshuo", "longstay-zhenyuan"]) {
    if (hrefs.some((h) => h.includes(bad))) {
      throw new Error(`${bad} should not appear in 长居推荐`);
    }
  }
  await page.screenshot({ path: path.join(outDir, "07-mingjing-grid.png") });
});


await check("P16 detail sticky section rail", async () => {
  const res = await page.goto(base + "/routes/mutianyu-day/", {
    waitUntil: "domcontentloaded",
  });
  if (!res?.ok()) throw new Error("status " + res?.status());
  await page.waitForTimeout(500);
  const rail = page.locator('nav[aria-label="本页目录"]');
  if (!(await rail.count())) throw new Error("sticky 本页目录 rail missing");
  const pos = await rail.evaluate((el) => getComputedStyle(el).position);
  if (pos !== "sticky")
    throw new Error("本页目录 not position:sticky (got " + pos + ")");
  for (const label of ["怎么走", "时间", "景点", "吃住", "就医", "须知"]) {
    if (!(await rail.getByRole("link", { name: label, exact: true }).count())) {
      throw new Error("rail missing link: " + label);
    }
  }
  const guide = page.locator("#guide");
  if (!(await guide.count())) throw new Error("#guide missing");
  const guideText = await guide.innerText();
  if (!/路线指南/.test(guideText))
    throw new Error("路线指南 not visible by default");
  const time = page.locator("#time");
  if (!(await time.count()) || !(await time.innerText()).includes("时间规划")) {
    throw new Error("时间规划 not visible by default");
  }
  await page.screenshot({ path: path.join(outDir, "08-detail-rail.png") });
});

await check("P17 region-chip dismiss → clean 全部景点", async () => {
  await page.goto(base + "/", { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(400);
  await goMapCover(page);
  await page.getByRole("button", { name: /^华北/ }).first().click();
  await page.waitForTimeout(500);
  const beijingProv = page.getByRole("button", { name: /^北京/ });
  if ((await beijingProv.count()) > 0) {
    await beijingProv.first().click();
  } else {
    await page.getByRole("button", { name: /条路线 · 点击进入/ }).first().click();
  }
  await page.waitForTimeout(600);
  // Unhide sticky chrome (transform-hide ignores pointer events)
  await page.evaluate(() => {
    window.scrollTo(0, 80);
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(300);
  const dismissRegion = page.getByRole("button", { name: /移除筛选 华北/ });
  if (!(await dismissRegion.count())) {
    // Fallback: sticky 返回 also clears region → clean catalog
    const back = page.getByRole("button", { name: "返回" });
    if (!(await back.count())) {
      throw new Error("province view missing 移除筛选 华北 and 返回");
    }
    await page.evaluate(() => {
      const el = document.querySelector('[aria-label="返回"]');
      if (el instanceof HTMLElement) el.click();
    });
  } else {
    await page.evaluate(() => {
      const el = document.querySelector('[aria-label="移除筛选 华北"]');
      if (el instanceof HTMLElement) el.click();
    });
  }
  await page.waitForTimeout(400);
  const allTab = page.getByRole("tab", { name: "全部景点" });
  if ((await allTab.getAttribute("aria-selected")) !== "true") {
    throw new Error("region dismiss should land on 全部景点");
  }
  if (!(await page.locator('[aria-label="全部景点路线"]').count())) {
    throw new Error("region dismiss missing 全部景点 grid");
  }
  if (await page.getByRole("button", { name: /移除筛选 华北/ }).count()) {
    throw new Error("华北 chip still present after dismiss");
  }
  if (await page.getByRole("button", { name: "返回" }).count()) {
    throw new Error("clean catalog should hide sticky 返回");
  }
});

await check("P18 clean catalog hides sticky 返回", async () => {
  await page.goto(base + "/", { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(500);
  if (
    (await page.getByRole("tab", { name: "全部景点" }).getAttribute("aria-selected")) !==
    "true"
  ) {
    throw new Error("default tab should be 全部景点");
  }
  if (await page.getByRole("button", { name: "返回" }).count()) {
    throw new Error("unfiltered 全部景点 should not show sticky 返回");
  }
  if (!(await page.getByPlaceholder("搜索城市、景点或路线").count())) {
    throw new Error("sticky search should remain on clean catalog");
  }
});

await check("P19 map cover SVG ≥40% first viewport", async () => {
  await goMapCover(page);
  await page.waitForTimeout(700);
  const map = page.locator('svg[aria-label="中国地区示意图"]');
  await map.waitFor({ state: "visible", timeout: 10000 });
  const share = await page.evaluate(() => {
    const el = document.querySelector('svg[aria-label="中国地区示意图"]');
    if (!el) return 0;
    const r = el.getBoundingClientRect();
    const vh = window.innerHeight;
    const visible = Math.max(0, Math.min(vh, r.bottom) - Math.max(0, r.top));
    return visible / vh;
  });
  if (share < 0.4) {
    throw new Error(
      `map cover SVG share ${(share * 100).toFixed(1)}% < 40% on iPhone viewport`,
    );
  }
  await page.screenshot({
    path: path.join(outDir, "09-map-cover-viewport.png"),
  });
});

await check("P20 catalog paginates (lazy load-more)", async () => {
  await page.goto(base + "/", { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(500);
  const grid = page.locator('[aria-label="全部景点路线"]');
  const initial = await grid.locator('a[href*="/routes/"]').count();
  if (initial < 6) throw new Error("catalog too few initial cards");
  if (initial > 24) {
    throw new Error("catalog did not paginate (got " + initial + " cards)");
  }
  const sentinel = grid.getByText("加载更多");
  if (await sentinel.count()) {
    await sentinel.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    const after = await grid.locator('a[href*="/routes/"]').count();
    if (after <= initial) {
      throw new Error("scroll load-more did not reveal more cards");
    }
  }
});

await check("P21 compose sticky「组合」+ embedded legs", async () => {
  const res = await page.goto(
    base + "/routes/compose-hexi-dunhuang-zhangye/",
    { waitUntil: "domcontentloaded" },
  );
  if (!res?.ok()) throw new Error("status " + res?.status());
  await page.waitForTimeout(800);
  const rail = page.locator('nav[aria-label="本页目录"]');
  if (!(await rail.count())) throw new Error("compose missing 本页目录");
  const pos = await rail.evaluate((el) => getComputedStyle(el).position);
  if (pos !== "sticky") throw new Error("本页目录 not sticky");
  const railText = await rail.innerText();
  if (!/组合/.test(railText)) {
    throw new Error("compose rail missing sticky「组合」(got: " + railText.replace(/\s+/g, " ") + ")");
  }
  const legs = page.locator("#compose-legs");
  if (!(await legs.count())) throw new Error("#compose-legs missing");
  const t = await legs.innerText();
  if (!/嵌入短线|衔接/.test(t)) {
    throw new Error("compose legs block missing 嵌入短线/衔接");
  }
  if ((await legs.locator('a[href*="/routes/"]').count()) < 2) {
    throw new Error("compose should link ≥2 embedded legs");
  }
});

await check("P22 season via dim trigger + sheet 重置 (no identity chip)", async () => {
  await page.goto(base + "/", { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(500);
  const body = await page.locator("body").innerText();
  if (!/已按当季|先名景|先显示名景/.test(body)) {
    throw new Error("home missing catalog hint");
  }
  const dims = page.locator('[aria-label="筛选维度"]');
  if (!(await dims.getByRole("button", { name: /季节·全季节/ }).count())) {
    throw new Error("default should be 季节·全季节");
  }
  if (
    await page
      .getByRole("button", { name: /移除筛选 (春季|夏季|秋季|冬季)/ })
      .count()
  ) {
    throw new Error("clean catalog should not show season identity chip");
  }
  await openSeasonDim(page);
  const seasonSheet = page.getByRole("dialog", { name: "季节" });
  if (!(await seasonSheet.getByRole("button", { name: "全部季节" }).count())) {
    throw new Error("季节 sheet missing 全部季节");
  }
  if (!(await seasonSheet.getByRole("button", { name: "重置" }).count())) {
    throw new Error("季节 sheet missing 重置");
  }
  const winter = seasonSheet.getByRole("button", { name: "冬季", exact: true });
  if (!(await winter.count())) throw new Error("冬季 option missing");
  await winter.click();
  await page.waitForTimeout(350);
  if (!(await dims.getByRole("button", { name: /季节·冬季/ }).count())) {
    throw new Error("winter should show on 季节· dim trigger");
  }
  if (await page.getByRole("button", { name: /移除筛选 冬季/ }).count()) {
    throw new Error("winter should not show identity chip");
  }
  // Clear via sheet 重置
  await openSeasonDim(page);
  await page.getByRole("dialog", { name: "季节" }).getByRole("button", { name: "重置" }).click();
  await page.waitForTimeout(300);
  if (!(await dims.getByRole("button", { name: /季节·全季节/ }).count())) {
    throw new Error("重置 should restore 季节·全季节");
  }
  const after = await page.locator("body").innerText();
  if (!/全年未筛季节|先显示名景/.test(after)) {
    throw new Error("重置 should show year-round catalog hint");
  }
});

await check("P23 base 长居三门槛 + nearby 辐射", async () => {
  const res = await page.goto(base + "/routes/base-kashi/", {
    waitUntil: "domcontentloaded",
  });
  if (!res?.ok()) throw new Error("status " + res?.status());
  await page.waitForTimeout(500);
  const rail = page.locator('nav[aria-label="本页目录"]');
  if (!(await rail.getByRole("link", { name: "门槛", exact: true }).count())) {
    throw new Error("base rail missing「门槛」");
  }
  if (!(await rail.getByRole("link", { name: "辐射", exact: true }).count())) {
    throw new Error("base rail missing「辐射」");
  }
  const gates = page.locator("#gates");
  if (!(await gates.count())) throw new Error("#gates missing");
  const gt = await gates.innerText();
  if (!/长居三门槛|三门槛/.test(gt)) {
    throw new Error("gates section missing 长居三门槛 copy");
  }
  const nearby = page.locator("#nearby");
  if (!(await nearby.count())) throw new Error("#nearby missing");
  if ((await nearby.locator('a[href*="/routes/"]').count()) < 2) {
    throw new Error("base nearbyLegs should link ≥2 routes");
  }
});

await check("P24 mobile bottom nav + theme dim 长居", async () => {
  await page.goto(base + "/", { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(400);
  const bottom = page.locator('nav[aria-label="底部导航"]');
  if (!(await bottom.count())) throw new Error("底部导航 missing");
  for (const label of ["探索", "两年", "说明"]) {
    if (!(await bottom.getByRole("link", { name: label }).count())) {
      throw new Error(`bottom nav missing ${label}`);
    }
  }
  await openThemeDim(page);
  const themeSheet = page.getByRole("dialog", { name: "主题" });
  for (const label of ["名景", "长居", "走廊"]) {
    if (
      !(await themeSheet.getByRole("button", { name: label, exact: true }).count())
    ) {
      throw new Error(`主题 sheet missing ${label}`);
    }
  }
  await themeSheet.getByRole("button", { name: "长居", exact: true }).click();
  await page.waitForTimeout(400);
  if (!(await page.getByRole("button", { name: /主题·长居/ }).count())) {
    throw new Error("长居 should show on 主题· dim trigger");
  }
  if (await page.getByRole("button", { name: /移除筛选 长居/ }).count()) {
    throw new Error("长居 identity chip should not appear");
  }
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
  "- 搜索在 tabs 之上；默认「全部景点」dual-column；名景优先；分页懒加载",
  "- 「地图选区」cover：仅搜索 + 地图（iPhone 首屏 SVG ≥40%）；点大区 → 省份 → 路线",
  "- 结果页：大区/省/搜索 chips 可移除；省内「移除筛选 华北」→ 干净全部景点",
  "- 干净目录隐藏 sticky「返回」；有筛选/钻取时「返回」回全部景点",
  "- 搜索框：婺源 / 九寨可命中；名景经 主题· sheet → `grid-cols-2`",
  "- 旅行页：详细介绍 / 适合季节 / 路线地图 / 景点照片 / 旅行须知 / 预算",
  "- 详情 sticky「本页目录」；路线指南+时间规划默认展开",
  "- 长线组合：sticky「组合」→ #compose-legs 嵌入短线+衔接",
  "- 筛选维度：季节/长短/主题 sheets（trigger 显示当前值）；默认全季节/全部/全部主题；无 dim identity chips；清选用全部* 或 sheet「重置」",
  "- sticky hide-on-scroll: transform + hysteresis（防 flicker）",
  "- mobile bottom nav 探索/两年/说明",
  "- 长居枢纽：sticky「门槛」「辐射」；#gates 三门槛可见；nearbyLegs 可点",
  "- 两年总览含回京；长途含飞入/回京线索",
  "",
  `截图目录：\`${outDir}/\``,
  "",
];
fs.writeFileSync("research/notes/_plan-playwright.md", md.join("\n"));
console.log("\nWrote research/notes/_plan-playwright.md");
console.log(`SUMMARY ${pass} pass / ${fail} fail`);
process.exit(fail ? 1 : 0);
