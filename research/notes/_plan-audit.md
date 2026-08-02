# Plan audit — 中国旅游地图网站

**Plan:** `~/.cursor/plans/中国旅游地图网站_33daee57.plan.md`  
**Repo:** `/Users/richpige/Documents/GitHub/china-travel-atlas`  
**Audited:** 2026-08-02  
**Method:** Read files / run coverage script; no assumptions. No code edits (no build-breaking bugs found).

**Corpus snapshot:** 8 regions · **34** routes · seasons overall spring 19 / summer 11 / autumn 25 / winter 6 · `fromHome` shorts: 4

---

## Checklist (plan todos)

| Todo | Verdict | Evidence |
|------|---------|----------|
| **scaffold** — 静态导出 + PWA 骨架 + 适老壳与筛选条 | **PASS** | `next.config.ts` (`output: "export"`, `basePath`/`assetPrefix`); `components/FilterBar.tsx` (三组大按钮 `min-h-[48px]` `text-lg`); `app/globals.css` (`html { font-size: 18px }`); `app/manifest.ts` + `public/sw.js` + `components/PwaRegister.tsx`; icons `public/icon-192.svg`, `icon-512.svg` |
| **content-model** — region / seasons / tripType / pace / 坐标 | **PARTIAL** | `content/types.ts`: `Route` has `region`, `seasons[]`, `tripType`, `fromHome`, `daysLabel`, `transport`, `budgetLabel`, `coverImage`, `stops[]`; `Stop` has `lat`/`lng`/`pace`. Filter intersection in `content/index.ts` `filterRoutes`. **Gap:** plan 写的 `gallery[]` 未建模（全库无 `gallery`） |
| **seed-routes** — 8 大区 · 四季与长短 · 华北/西南/西北样板 | **PASS** | `content/regions.ts` 八区齐全; 每区均有 long+short（见下表）; 四季均有路线; 华北短途+长线在 `content/routes.ts` / `patches/routes-north.ts`; 西南/西北长线在 `routes.ts` + `patches/routes-south-southwest.ts` / `routes-northwest.ts` |
| **route-ui** — 筛选列表、地图纵览、预算; 手机/离线 | **PASS** | `components/ExploreClient.tsx` (FilterBar + RegionMap + 快捷「从北京家出发的短途」/当季); `app/routes/[id]/page.tsx` 顶栏 `RouteOverviewMap` + 预算区; `components/BudgetBar.tsx` 在首页/about; `npm run ux:smoke` → `research/scripts/ux-smoke.mjs` (iPhone 视口冒烟) |
| **fill-regions** — 各区长短、配图、两年总览 | **PASS** | 34 条见 `docs/book-index.md`; `app/overview/page.tsx` 两年节奏+回京月; 省级对照 `research/省级覆盖.md`（大陆 31 省市区均 ✅） |
| **deploy-pack** — Pages + Releases 离线 zip | **PASS** | `.github/workflows/deploy-pages.yml`: `build:pages` → upload Pages artifact → `deploy-pages`; zip + `softprops/action-gh-release` tag `offline-latest`; `docs/离线打开说明.md`; `package.json` `pack:offline` |
| **book-ready** — content 可导出; 成书二期 | **PASS** | `docs/成书导出说明.md`; `npm run export:book-index` → `research/scripts/export-book-index.mjs` → `docs/book-index.md`（按地区/季节索引） |

### Extra checks (user audit list)

| Check | Verdict | Evidence |
|-------|---------|----------|
| 省级覆盖 `research/省级覆盖.md` | **PASS** | 31 行均 ✅，与 patch 路线 id 对齐 |
| Audience ~60 活跃健康（非 frail-only） | **PASS** | `app/page.tsx`「身体好、走得动」; `app/about/page.tsx`「腿脚没问题、身体健康…不默认你们行动不便」; `research/受众画像.md` 明确活跃退休。首页/about 无 frail-only 主调 |

### Per-region long / short (verified 2026-08-02)

| Region | long | short | seasons present |
|--------|------|-------|-----------------|
| huabei | 3 | 4 | spring/summer/autumn/winter |
| dongbei | 1 | 2 | summer/winter |
| huadong | 1 | 3 | spring/autumn |
| huazhong | 2 | 2 | spring/autumn |
| huanan | 4 | 1 | spring/autumn/winter |
| xinan | 4 | 1 | spring/autumn |
| xibei | 2 | 1 | spring/summer/autumn |
| qingzang | 2 | 1 | summer/autumn |

`fromHome` shorts: `mutianyu-day`, `tianjin-day`, `chengde-2d`, `gubei-overnight`.

---

## Remaining gaps (real only)

1. **`gallery[]` 未实现** — plan「图文」节要求线/站 `coverImage` + `gallery[]`；现状仅 `coverImage`（站可选 `image`）。成书/多图画廊需补模型与 UI。
2. **区×季矩阵偏稀** — 符合四季主推倾向（如冬偏华南），但东北无春秋、华东/华中/西南无夏冬挂载；若要「筛到该区+该季」总有结果，需再补种子。

---

## Verdict summary

| PASS | PARTIAL | FAIL |
|------|---------|------|
| scaffold, seed-routes, route-ui, fill-regions, deploy-pack, book-ready, 省级覆盖, audience | content-model (`gallery[]`) | — |

**Overall:** Plan 一期可上线范围基本落地；唯一明确的内容模型缺口是 `gallery[]`。未改代码。
