# UX backlog — 2026-08-02

Durable checklist for Explore / Pages performance / modern feed polish.  
Later agents: tick items as done; do **not** fight content agents on `content/*`.  
**Catalog size note:** ~164 routes on `f4b90a6` — lazy paginate is required for 全部景点.

**Related:** `research/notes/ux-mobile-framework-proposal-20260802.md` · `research/audits/plan-verify-round-20260802-explore-ia.md`

---

## Framework research status (summary)

Stay on **Next.js static export + Tailwind 4 + thin headless primitives** — no dashboard kit / Flutter rewrite. Audience is **modern XHS/Pinterest feed** (modest type, not 适老-bulky chrome). Recommended primitives: CSS tokens (`--tap-min` ~36px), optional **vaul** sheet for filters (P1), optional **Radix** later for a11y, optional **embla** for gallery (P2). Keep sky/emerald map language. Explore IA: tabs + search + dual-column `RouteCard` + map cover purity.

**GH Pages / static export constraints:** no SSR streaming. Catalog lives in client JS from `@/content` (metadata only on Explore — full guides are separate `/routes/[id]/` pages). Performance wins are **client**: paginate/window catalog cards, `loading="lazy"` / Intersection Observer for images, defer non-critical JS. Do **not** import all `route-details` into Explore.

---

## A — Layout / IA

- [x] **Search box above** tabs「全部景点 / 地图选区」(sticky search stays first)
- [x] Explore IA: default **全部景点** unfiltered catalog; **地图选区** = search + map only
- [x] Sticky **返回** → clean 全部景点 when scoped; **hidden** on already-clean catalog
- [x] Region-chip dismiss (省内「移除筛选 华北」) → clean 全部景点 (`goChina` + tab all)
- [x] Map cover: maximize SVG first-viewport share (cover sizing ≥~40% iPhone)
- [x] Soften long catalog: 名景 / 从北京 sort + hint

## B — Performance (Pages slow / text-first)

- [x] **Lazy catalog**: initial N `RouteCard`s + load-more on scroll (Intersection Observer); images `loading="lazy"`; text/meta always in card
- [ ] True **virtualization / windowing** if catalog ≫ ~200 and scroll jank persists
- [ ] Audit Explore bundle: ensure `route-details` / heavy guides **not** pulled into home chunk
- [ ] Optional: blur-up / LQIP placeholders for card images
- [ ] Optional: prefetch route detail on card hover/focus (Pages-friendly)

## C — Visual polish (Pinterest-like)

- [x] Noticeable modern polish on `RouteCard` (tighter type, softer badge, hover lift)
- [x] Slimmer filter / identity chips +「添加筛选」affordance
- [ ] Further chip density pass after live feedback
- [ ] Detail page hero / gallery polish (framework P1/P2)

## D — Verify / CI

- [x] `ux:plan` locks: region-chip dismiss, clean-catalog hides 返回, map cover share, catalog paginate
- [x] CI Pages smoke: built `out/index.html` asserts basePath `_next` + Explore labels
- [ ] Live Pages curl smoke post-deploy (optional workflow job)

## E — Framework modernization (carry from proposal)

- [ ] P1: detail progressive disclosure (collapse 参考来源 / 快览)
- [ ] P1: optional vaul sheet for 筛选 if chip row grows
- [ ] P1: mobile bottom nav (探索 / 两年 / 说明) + safe-area
- [ ] P2: embla gallery; light motion (2–3 intentional)
- [ ] P2: offline search index if catalog grows much further

## F — Explicitly out of scope here

- Content route authorship (`content/*`) — other agents
- Senior-mode / 适老专用 chrome
- Purple glass / dashboard UI kits

---

*Updated: 2026-08-02 · session: search-above-tabs + lazy catalog + card polish + Explore IA polish ship.*
