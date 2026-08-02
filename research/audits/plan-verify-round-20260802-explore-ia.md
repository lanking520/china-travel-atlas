# Plan verify · Explore IA — 2026-08-02

Clean-context verify after commit `d39a6af` (*Ship Explore IA: 全部景点 default, map cover, results filter chips*).

Evidence: `components/ChinaMapExplorer.tsx`, `components/RouteCard.tsx`, `app/page.tsx`, `next.config.ts`, `research/scripts/ux-plan-verify.mjs`, `research/notes/_plan-playwright.md`, live Pages HTML.

**Content (`content/*`)**: not touched (content agent owns that surface).

**Tiny fix this round:** province-level「移除筛选 {大区}」now calls `goChina()` (was `goRegion`, so the region chip never left). Re-verified + `ux:plan` still green.

## Verdict: **PASS**

| # | Ask | Verdict | Notes |
|---|-----|---------|-------|
| 1 | Default tab **全部景点** → unfiltered dual-column catalog; no filter pile; can「添加筛选」 | **PASS** | `useState("all")`; `RouteCardGrid` `grid-cols-2`; season chips hidden until「添加筛选」opens (`aria-expanded`). |
| 2 | **地图选区** → cover = search + map ONLY (no season/theme chip pile) | **PASS** | `coverMode = tab===map && !search && !drill && !filtersDirty`; `selectTab("map")` clears scope; no `路线筛选` /「添加筛选」on cover. |
| 3 | Search / map drill / theme → results with dismissible chips +「添加筛选」 | **PASS** | `ActiveFilterChips` + `AddFiltersPanel`; P13–P15 cover search + 名景. Region-chip dismiss fixed (→ clean china / catalog). |
| 4 | Sticky **返回** → clean 全部景点 | **PASS** | `exitToAll()` clears search/filters/drill, `setTab("all")`, closes add-filters. P7 green. |
| 5 | Modern app, dual-column cards, basePath on Pages | **PASS** | Live `https://lanking520.github.io/china-travel-atlas/` (last-mod after ship) serves `/china-travel-atlas/_next…`, tabs「全部景点」「地图选区」,「添加筛选」. Cards are image-led dual-col. |
| 6 | `npm run ux:plan` green | **PASS** | **17 PASS / 0 FAIL** (local preview + post-fix re-run). |

## Evidence summary

- **Code IA:** tabs `all` \| `map`; `resultsMode` drives sticky chrome / chips / add-filters; `coverMode` mounts map-only section.
- **Playwright:** P1 default catalog; P3 cover purity + drill; P6 filters via「添加筛选」; P7 返回; P13/P14 search; P15 名景 dual-col.
- **Pages:** HTML includes `aria-label="探索方式"`, both tabs, `全部景点路线`, basePath-prefixed assets.

## Next tasks (3–5)

1. **ux:plan: region-chip dismiss** — Add assertion: province →「移除筛选 华北」lands on clean「全部景点」catalog (locks the tiny fix).
2. **Clean-catalog 返回 affordance** — On already-unfiltered 全部景点, sticky「返回」is a no-op reset; consider dimming/hiding until `hasIdentityChips` (keep sticky search).
3. **Map cover first viewport** — On 地图选区, maximize SVG share above the fold (compact copy already; verify iPhone 12 peek ≥~40%).
4. **Catalog length UX** — Default 全部景点 lists all routes; optional light sort (当季 / 从北京) or virtualize if card count grows painfully.
5. **Pages smoke in CI** — After deploy, curl/HTML assert tabs + `/china-travel-atlas/_next` so basePath regressions fail the workflow.

---

*Verifier: clean-context subagent · 2026-08-02 · post-`d39a6af`.*
