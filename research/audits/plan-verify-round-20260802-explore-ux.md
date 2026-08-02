# Plan verify · Explore UX — 2026-08-02

Clean-context verify + follow-up: hide filters in drill/results mode, 返回 to filters+map, mobile iPhone QA.

Evidence: `components/ChinaMapExplorer.tsx`, `components/RegionMap.tsx`, `components/Header.tsx`, `app/page.tsx`, `app/routes/[id]/page.tsx`, `research/scripts/ux-plan-verify.mjs`, `research/notes/_plan-playwright.md`, `research/raw/playwright-mobile-qa/`.

**Do not commit** (this round).

## Checklist

| # | Ask | Verdict | Notes |
|---|-----|---------|-------|
| 1 | Home/explore: **no** text 大区 button grid — only filters + map; selection results **below** map after click | **PASS** | China level: `RegionMap` only (no region chips). Region/province lists render below map. |
| 2 | Home: **no** BudgetBar / 每月预算参考 | **PASS** | `BudgetBar` only on `/about`. Home text check + ux:plan P2. |
| 3 | Each route shows rough amount (`budgetLabel` / 大致金额) on cards + detail | **PASS** | Theme list, province cards, detail hero + 预算参考 section. |
| 4 | Layout more compact / one-screen pick; typography hierarchy | **PARTIAL** | Compact filters, shorter mobile hero (brand in header), map peeks ~100px on iPhone 12. Still scroll to use full map; hierarchy via `font-display` + numbered ①②③. |
| 5 | 适老 tap targets; `npm run ux:plan` green | **PASS** | Chips/CTA ≥44–48px. **ux:plan 13/13 PASS** (P7 now = 返回). |

## Follow-up ask (this round)

| Ask | Verdict | Behavior |
|-----|---------|----------|
| Hide filters in drilled/results mode; show **返回** | **PASS** | `resultsMode = level.kind !== "china"`: sticky bar with `aria-label` 返回 + context; filters section unmounted. 返回 → `goChina()` (keeps filter state). Province also has 上一级（大区）. |
| Mobile iPhone QA | **PASS** (fixed) | See below. |

## Mobile findings (iPhone 12 / 390×664)

| Finding | Severity | Action |
|---------|----------|--------|
| Filters + duplicate hero title pushed map fully below fold | High | Hid h1 on mobile (header brand remains); compacted filter padding/copy; shortened map intro on sm. Map now peeks (~104px). |
| Season chip “全部季节” wrapping awkwardly | Low | Renamed to「全部」; tighter chip padding (`min-h-[44px]` mobile). |
| Header「两年怎么走」cramped vs brand | Med | Short label「两年」on mobile. |
| Region province chips uneven wrap | Low | `grid grid-cols-2` on mobile. |
| Route card CTA narrow on phone | Low | Full-width CTA on mobile; map preview `max-h-[160px]`. |
| Sticky 返回 covering content | None | Sticky ~67px; no double-sticky with Header (Header not sticky). |
| Horizontal overflow | None | scrollWidth checks OK on home/region/province. |
| Floating「N」overlay | Ignore | Devtools/Next overlay, not product UI. |

Screens: `research/raw/playwright-mobile-qa/` (`06-home-map-peek.png`, `02-region-viewport.png`, `03-province-viewport.png`).

## Playwright

`npm run ux:plan` → **13 PASS / 0 FAIL** (2026-08-02). Selector updates: P3 asserts filters hidden +「返回」; P6 applies season on entry then 返回; P7 restores `aria-label="路线筛选"`.

## Next tasks (3–5)

1. **Map first-screen share** — Further reduce filter chrome or collapse shortcuts behind「更多」so ≥40% of SVG is in first viewport without scroll.
2. **Province step-back UX** — Promote「上一级」to a second sticky button (适老) instead of inline underline text.
3. **Theme results mode** — Decide whether china-level theme lists should also hide filters + show 返回 (currently still entry chrome).
4. **FilterChip a11y** — Season「全部」vs tripType「全部」share name; use distinct labels or `aria-label` for Playwright/AT.
5. **Visual regression** — Keep `research/raw/playwright-mobile-qa/` in CI or a `ux:mobile` script alongside `ux:plan`.

---

## Follow-up execution · 2026-08-02 (parent executed next tasks)

**Do not commit.**

| Task | Status | What changed |
|------|--------|----------------|
| 1 More map in first viewport | **DONE** | Mobile: hide home hero copy; collapse 从北京短途/当季/主题 behind「更多快捷」; taller compact map `max-h-[min(52vh,360px)]`; hide map captions on xs. |
| 2 Sticky 适老「上一级」 | **DONE** | Province sticky bar: second 48px button「上一级」(aria `上一级，{大区}`) beside 返回. |
| 3 Theme lists hide filters | **DONE** | `resultsMode` includes `theme`; sticky 返回 clears theme at china level; map hidden while theme list shows. |
| 4 Distinct aria「全部」 | **DONE** | `aria-label`「全部季节」/「全部行程类型」; ux:plan P1/P6 updated. |
| 5 ux:mobile screenshots | **SKIPPED** | Per request. |

**Unblock note:** preview was 500 from missing `PLACE_GENERATED_IDS` in `content/place-images.ts` (empty `Set` added so `lib/place-images.ts` compiles).

`npm run ux:plan` → **13 PASS / 0 FAIL** (re-run after this round).
