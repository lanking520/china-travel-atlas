# UX backlog — 2026-08-02

Durable checklist for Explore / Pages performance / modern feed polish.  
Later agents: tick items as done; do **not** fight content agents on `content/*`.  
**Catalog size note:** ~182 routes — lazy paginate required for 全部景点.

**Related:** `research/notes/ux-mobile-framework-proposal-20260802.md` · `research/audits/plan-verify-round-20260802-explore-ia.md` · `research/notes/content-route-composition-ia-20260802.md`

---

## Framework research status (summary)

Stay on **Next.js static export + Tailwind 4 + thin headless primitives** — no dashboard kit / Flutter rewrite. Audience is **modern XHS/Pinterest feed** (modest type, not 适老-bulky chrome). Explore IA: tabs + search + dual-column `RouteCard` + map cover purity + dimension filters (季节/长短/主题) + mobile **bottom nav**.

**GH Pages / static export constraints:** no SSR streaming. Catalog in slim `lib/generated/explore-routes.json`. Paginate/window cards; `loading="lazy"`; do **not** import all `route-details` into Explore.

---

## A — Layout / IA

- [x] **Search box above** tabs「全部景点 / 地图选区」
- [x] Explore IA: default **全部景点** catalog; **地图选区** = search + map only
- [x] Sticky **返回** → clean 全部景点 when scoped; **hidden** on clean catalog
- [x] Region-chip dismiss → clean 全部景点
- [x] Map cover: maximize SVG first-viewport share
- [x] Soften long catalog: 名景 / 从北京 sort + hint
- [x] **Compact filter chrome**: sticky transform-hide on scroll (not height-collapse thrash)
- [x] Dimension filters: 季节 / 长短 / 主题 triggers + sheet (replaces bulky chip pile + nested「添加筛选」)
- [x] Remove Explore shortcuts「从北京短途」+「当季」chip
- [x] **Calendar soft-default season**: `getSeasonNow()` applies filter; **no identity chip** while calendar-default (hint「已按当季」); clear via「全部季节」
- [x] Light **compositionKind** Explore support: 短线/长线
- [x] **Compose detail timeline** + sticky「组合」
- [x] **Compose intro → leg links**:「嵌入短线」under intro (`3930888`) — all 14 compose pages
- [x] Theme discoverability via 主题· dim (名景/长居/走廊/…)
- [ ] Optional density pass after live feedback

## B — Performance

- [x] Lazy catalog paginate + `loading="lazy"` + text-first cards
- [ ] True virtualization if catalog ≫ ~200 and jank persists
- [x] Slim Explore catalog JSON (no heavy guides in home chunk)
- [x] LQIP / cover prefetch (optional, shipped)

## C — Visual polish

- [x] Pinterest dual-column `RouteCard` with place images
- [x] Slightly larger card type; modern density (not 适老-bulky)
- [x] Detail hero / SoftDetails progressive disclosure
- [ ] P2: embla gallery; 2–3 intentional motions

## D — Verify / CI

- [x] `ux:plan` locks Explore IA + soft calendar + dims + bottom nav + compose legs
- [x] CI Pages smoke + live curl smoke job

## E — Framework modernization

- [x] P1 progressive disclosure (SoftDetails)
- [x] P1 filter sheet / dimension chooser
- [x] P1 mobile bottom nav (探索 / 两年 / 说明) + safe-area; header nav sm+
- [ ] P2 embla / offline search index

## F — Out of scope

- Content authorship (`content/*`)
- Senior-mode chrome / purple glass kits

---

### Remaining (open)

- [ ] Optional density pass after live feedback *(A)*
- [ ] True **virtualization** if ≫ ~200 *(B)*
- [ ] P2: embla gallery; light motion; offline search index *(E)*

### Reconcile notes (2026-08-02 evening)

**User overrides / leaked asks:**
- Nested「添加筛选」→ **3 direct buttons** 季节 / 长短 / 主题 (per-dim sheet). Defaults **全季节 / 全部 / 全部主题** (`undefined`). **Supersedes** earlier calendar soft-default season.
- Sticky **flicker** on scroll reverse: dual collapse + `max-h-0` changed document height → scrollY thrash. **Fixed:** single `chromeHidden`, rAF + hysteresis, hide via `-translate-y-full` only.
- Mobile bottom nav shipped; compose intro「嵌入短线」done in `3930888`.

*Updated: 2026-08-02 · DimensionFilters + 全季节 defaults + sticky flicker fix; ux:plan 25/25.*
