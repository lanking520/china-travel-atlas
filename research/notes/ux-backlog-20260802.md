# UX backlog — 2026-08-02

Durable checklist for Explore / Pages performance / modern feed polish.  
Later agents: tick items as done; do **not** fight content agents on `content/*`.  
**Catalog size note:** ~165+ routes (compose pilot on `637d294`) — lazy paginate required for 全部景点.

**Related:** `research/notes/ux-mobile-framework-proposal-20260802.md` · `research/audits/plan-verify-round-20260802-explore-ia.md` · `research/notes/content-route-composition-ia-20260802.md`

---

## Framework research status (summary)

Stay on **Next.js static export + Tailwind 4 + thin headless primitives** — no dashboard kit / Flutter rewrite. Audience is **modern XHS/Pinterest feed** (modest type, not 适老-bulky chrome). Recommended primitives: CSS tokens (`--tap-min` ~36px), optional **vaul** sheet for filters (P1), optional **Radix** later for a11y, optional **embla** for gallery (P2). Keep sky/emerald map language. Explore IA: tabs + search + dual-column `RouteCard` + map cover purity.

**GH Pages / static export constraints:** no SSR streaming. Catalog lives in client JS from slim `lib/generated/explore-routes.json` (metadata only on Explore — full guides are separate `/routes/[id]/` pages). Performance wins are **client**: paginate/window catalog cards, `loading="lazy"` / Intersection Observer for images, defer non-critical JS. Do **not** import all `route-details` into Explore.

---

## A — Layout / IA

- [x] **Search box above** tabs「全部景点 / 地图选区」(sticky search stays first)
- [x] Explore IA: default **全部景点** catalog; **地图选区** = search + map only
- [x] Sticky **返回** → clean 全部景点 when scoped; **hidden** on already-clean catalog
- [x] Region-chip dismiss (省内「移除筛选 华北」) → clean 全部景点 (`goChina` + tab all)
- [x] Map cover: maximize SVG first-viewport share (cover sizing ≥~40% iPhone)
- [x] Soften long catalog: 名景 / 从北京 sort + hint
- [x] **Compact filter chrome on results**: sticky ≠ half viewport
- [x] Sticky minimal strip: active chips +「添加筛选」; heavy filters in **vaul** sheet; title/hint scroll away
- [x] Hide search+tabs on scroll-down / show on scroll-up (results mode) — maximize RouteCard viewport on mobile
- [x] Remove Explore shortcuts「从北京短途」+「当季」chip
- [x] **Calendar default season**: `getSeasonNow()` sets initial 季节 filter; clear via season chip dismiss or「全部季节」
- [x] Light **compositionKind** Explore support: 短线/长线 chips resolve `leg`/`compose`/`base` (+ legacy `tripType`)
- [x] **Compose detail timeline**: ordered legs + interleaved glue; sticky「组合」jump; sky (not indigo) chrome
- [ ] Further: auto-hide chip strip itself on deep scroll if still too tall with many chips

## B — Performance (Pages slow / text-first)

- [x] **Lazy catalog**: initial N `RouteCard`s + load-more on scroll (Intersection Observer); images `loading="lazy"`; text/meta always in card
- [ ] True **virtualization / windowing** if catalog ≫ ~200 and scroll jank persists
- [x] Audit Explore bundle: ensure `route-details` / heavy guides **not** pulled into home chunk (`lib/explore-catalog` for Explore)
- [x] **Slim Explore intros**: codegen `lib/generated/explore-routes.json` (no `introduction` / notices / sources / stop images in home JS); `npm run gen:explore-catalog`
- [x] Optional: blur-up / LQIP placeholders for card images
- [x] Optional: low-priority cover prefetch on card hover/focus (Pages-friendly)

## C — Visual polish (Pinterest-like)

- [x] Noticeable modern polish on `RouteCard` (tighter type, softer badge, hover lift)
- [x] Slimmer filter / identity chips +「添加筛选」affordance
- [x] Further chip density pass after live feedback
- [x] Detail page hero / gallery polish (edge-bleed hero + strip; embla still P2)

## D — Verify / CI

- [x] `ux:plan` locks: region-chip dismiss, clean-catalog hides 返回, map cover share, catalog paginate
- [x] CI Pages smoke: built `out/index.html` asserts basePath `_next` + Explore labels
- [x] Live Pages curl smoke post-deploy (optional workflow job)

## E — Framework modernization (carry from proposal)

- [x] P1: detail progressive disclosure (collapse 参考来源 / 快览 via SoftDetails)
- [x] P1: bottom sheet for 筛选 (compact sticky strip + overlay sheet; vaul dropped for click reliability)
- [ ] P1: mobile bottom nav (探索 / 两年 / 说明) + safe-area
- [ ] P2: embla gallery; light motion (2–3 intentional)
- [ ] P2: offline search index if catalog grows much further

## F — Explicitly out of scope here

- Content route authorship (`content/*`) — other agents
- Senior-mode / 适老专用 chrome
- Purple glass / dashboard UI kits

---

*Updated: 2026-08-02 · session: compact sticky + filter sheet + calendar season + compositionKind chips; compose detail timeline for 河西/南疆 pilots.*
