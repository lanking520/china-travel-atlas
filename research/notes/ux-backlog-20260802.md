# UX backlog — 2026-08-02

Durable checklist for Explore / Pages performance / modern feed polish.  
Later agents: tick items as done; do **not** fight content agents on `content/*`.  
**Catalog size note:** ~182 routes — lazy paginate required for 全部景点.

**Related:** `research/notes/ux-mobile-framework-proposal-20260802.md` · `research/audits/plan-verify-round-20260802-explore-ia.md` · `research/notes/content-route-composition-ia-20260802.md`

---

## Framework research status (summary)

Stay on **Next.js static export + Tailwind 4 + thin headless primitives** — no dashboard kit / Flutter rewrite. Audience is **modern XHS/Pinterest feed** (modest type, not 适老-bulky chrome). Explore IA: **single catalog** + search + dual-column `RouteCard` + four dimension filters (季节/长短/主题/**地区**) + mobile **bottom nav**. Map is **not** an Explore entry (RegionMap may remain unused).

**GH Pages / static export constraints:** no SSR streaming. Catalog in slim `lib/generated/explore-routes.json`. Paginate/window cards; `loading="lazy"`; do **not** import all `route-details` into Explore.

---

## A — Layout / IA

- [x] **Search box above** filter dims (no dual-tab chrome)
- [x] Explore IA: **single catalog**「全部景点」; **removed「地图选区」** tab / map cover
- [x] **地区** fourth dim: sheet 大区 → optional 省份; default **全部地区**; trigger `地区·全部` / `地区·华东` / `地区·浙江`
- [x] Sticky **返回** → clean catalog when scoped; **hidden** on clean catalog
- [x] Soften long catalog: 名景 / 从北京 sort + hint
- [x] **Compact filter chrome**: sticky transform-hide on scroll (not height-collapse thrash)
- [x] Dimension filters: 季节 / 长短 / 主题 / 地区 triggers + sheet
- [x] Remove Explore shortcuts「从北京短途」+「当季」chip
- [x] **No dim identity chips**: dims shown only on triggers; clear via 全部* / 全部地区 / sheet「重置」。Search keyword chip only.
- [x] Defaults **全季节 / 全部 / 全部主题 / 全部地区** (`undefined`)
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

- [x] `ux:plan` locks Explore IA + dims (incl. 地区) + bottom nav + compose legs
- [x] CI Pages smoke + live curl smoke job (strings: 全部景点|筛选维度|地区)

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
- Nested「添加筛选」→ **4 direct buttons** 季节 / 长短 / 主题 / **地区** (per-dim sheet). Defaults **全季节 / 全部 / 全部主题 / 全部地区**.
- **Removed「地图选区」** tab and Explore map cover; region pick is sheet-only (大区 first, province optional).
- Sticky **flicker** on scroll reverse: dual collapse + `max-h-0` changed document height → scrollY thrash. **Fixed:** single `chromeHidden`, rAF + hysteresis, hide via `-translate-y-full` only.
- Mobile bottom nav shipped; compose intro「嵌入短线」done in `3930888`.
- **Redundant dim identity chips** removed (incl. region/province). Clear via 全部* / 全部地区 or sheet「重置」. Search keyword chip only.

*Updated: 2026-08-02 · Region as 4th dim; drop map tab; ux:plan + Pages smoke updated.*
