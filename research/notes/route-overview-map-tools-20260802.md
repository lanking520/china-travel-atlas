# Route overview maps — tools & rethink · 2026-08-02

**Audience:** Beijing-based parents (~60), mobile-first, mainland access flaky for GH Pages.  
**Stack constraint:** Next.js `output: "export"` → GitHub Pages (+ optional CF Pages / future 阿里云 OSS). No SSR runtime. Prefer low ops, no secret keys in the static bundle if avoidable.  
**Product honesty:** In-app maps are **示意** (order + pace), not turn-by-turn. Real navigation stays **高德 deep-link** (already shipped).

---

## 1. Current-state diagnosis

### Architecture (what ships today)

| Layer | Role |
| --- | --- |
| `components/RouteMapWithExpand.tsx` | Detail section shell: inline map + modal enlarge + 高德 CTA |
| `components/RouteOverviewMap.tsx` | Client SVG: flat sky rect → optional province fills → schematic cubic “roads” → markers/labels |
| `lib/china-geo.ts` | Equirectangular project; load `public/geo/china-provinces.json` (~464 KB, 35 features) via `fetch(`${NEXT_PUBLIC_BASE_PATH}/geo/...`)` |
| `lib/map-projection.ts` | Bbox padding; **orbit** clusters; label nudges; **numbered packs** + legend when dense |
| `lib/route-road.ts` | Haversine×1.35 km chips; cubic Bezier corridor (**not** road network) |
| `lib/route-detail.ts` → `amapUrlForRoute` | Single-stop 高德 URI (not a multi-stop route plan) |

```text
stops (WGS-ish lon/lat in content)
  → bbox + equirectangular fit into fixed viewBox (640×360 / compact 520×300)
  → project true points
  → deconflict: orbit markers → nudge CJK labels → maybe number+legend
  → draw bezier between *true* points (roads ignore orbit)
  → async overlay province polygons intersecting bbox
```

No MapLibre/Leaflet/Mapbox, no turf, no polyline codecs, no tile layer. Explore map-tab was removed; **detail corridor maps are the only product map surface**.

### Root causes — “no map background”

This is **not** missing GeoJSON in the repo. It is a **perception + loading + content** failure that hits almost every route:

1. **Basemap is optional and late.** Provinces load in `useEffect` + `fetch`. Until then (and on any fetch failure — catch swallows) the SVG is only `#e0f2fe` + roads/markers. Offline zip / flaky GH Pages / wrong `basePath` → silent empty ground.
2. **Contrast is near-zero.** Fill `#bae6fd` on `#e0f2fe`, stroke `#7dd3fc` — on mobile it reads as “blank sky card,” not a map.
3. **Province polygons ≠ a map.** No rivers, highways, city names, or relief. A tight day-trip bbox often fills with a **solid pastel slab** (one clipped province) — users correctly report “没有底图.”
4. **No build-time bake.** Everything is client-projected; first paint never includes geography. Static export could embed clipped paths per route but does not.

### Root causes — “markers overlap on essentially every route”

Deconfliction exists and helps pairs, but the **geometry of the product** fights it:

1. **Screen collapse is structural.** Many routes have stops within &lt;0.15° of each other (city loops, 敦煌市区/莫高/月牙泉, 承德外八庙…). Catalog scan: dozens of routes with multiple near-pairs. Fixed ~360px-tall viewBox cannot separate CJK labels at 适老 sizes.
2. **`fromHome` + long corridor worsens local clusters.** Injecting 北京家 expands the bbox; local pairs (古北/司马台, 承德景点) collapse to a few pixels while the map spends space on empty highway air. Orbit then fans markers off the road with dashed leaders → still looks stacked.
3. **Numbered packs are too shy on full maps.** Full overview only switches to numbers when **≥4** stops share a dense neighborhood. Triples and close pairs keep fighting for text labels. Compact cards are stricter; detail maps are not.
4. **Duplicate / near-duplicate coordinates.** e.g. `leg-dunhuang-mogao` has 敦煌市区 and 空白缓冲 at the **same** lat/lng → true zero-distance collapse (orbit still piles icons).
5. **Ink budget.** Thick translucent corridor (stroke 16–20), km chips, pace sublabels, orbit leaders, and markers compete in the same small frame.

**Verdict:** Failures are systemic to the SVG schematic approach *as currently drawn*, not one bad route. A tile basemap would fix “empty ground” but **not** stop collision without better labeling / insets / numbering.

---

## 2. Ranked options (static-friendly first)

Fit scores: **Fit** for this repo (parents + CN access + static export + low ops + 示意 honesty).

### A. Keep SVG schematic — improve basemap + labels (**recommended near-term**)

**What:** Stay on custom SVG. Raise basemap contrast; add lightweight corridor context (major rivers / simplified prefecture or highway spines as static GeoJSON); bake clipped paths at `build`/`gen:` time; lower density threshold for numbered packs; optional **inset** for dense clusters when `fromHome` or span is large; drop duplicate-stop plotting.

| | |
| --- | --- |
| **Pros** | Zero API keys; works offline/zip; CN-safe (no tile ToS); matches 示意 product; tiny runtime; already wired into detail UX |
| **Cons** | Never looks like Gaode; corridor curves stay schematic unless we pre-generate polylines |
| **Fit** | ★★★★★ |

### B. Pregenerated corridor GeoJSON + SVG/canvas overlay (**recommended medium**)

**What:** Offline pipeline (OSRM public demo / self-host Valhalla / manual corridor sketches) → `public/geo/corridors/{routeId}.json` or encoded polylines. Build embeds or fetches same-origin. Still SVG or MapLibre **without** remote tiles (vector only).

| | |
| --- | --- |
| **Pros** | Road-following 示意 looks “real”; still static; turf.js for simplify/bbox; no runtime routing |
| **Cons** | Pipeline + storage; OSRM demos are best-effort / ToS-sensitive — prefer **build-time only**, cache results in repo; still not navigation |
| **Fit** | ★★★★☆ |

Tools worth using in a pipeline (not in the browser on every page load):

- **@mapbox/polyline** / Google polyline encoding — compact storage
- **@turf/turf** — simplify, length, buffer, bbox
- **OSRM** `route/v1/driving/{lon},{lat};...` demos — generate once, commit GeoJSON
- **Valhalla** public instances — same idea; do not call from parents’ phones
- Great-circle vs road: keep **road-ish polylines** for land corridors; great-circle only for rare long air legs (and label 飞行示意)

### C. Leaflet / MapLibre + China-legal tiles (Gaode / 天地图)

**What:** `react-leaflet` or `maplibre-gl` + `react-map-gl` work with static export **if** all JS is client-only (`"use client"`). Tiles still need a **provider**.

| Provider | Mainland access | Keys / ops | Legal honesty |
| --- | --- | --- | --- |
| **高德 JS API / 自定义地图** | Excellent | Key + domain whitelist; 审图号 / 合规文案; quota | Commercial ToS; 测绘合规 on developer |
| **天地图 WMTS** | Excellent | `tk=` key; domain/IP rules; quota | Official state platform; still key + 审图号 display norms |
| **OSM / MapTiler / free vector** | Poor on CN mobile; GFW | Often none | **Not** a compliant public China basemap for territory depiction; avoid as primary |
| **Mapbox tiles / Static Images** | Often blocked / unsupported for CN users | Token | Bad fit for 父母; Mapbox.cn discontinued |

| | |
| --- | --- |
| **Pros** | Real basemap; pinch-zoom helps overlap; familiar mental model |
| **Cons** | Keys in or proxied for static site; quota; WebGL weight on old phones; dual-host domain whitelist (Pages + CF + future OSS); **still** need deconfliction or clustering; product shifts toward “navigation map” expectations we do not meet |
| **Fit** | ★★☆☆☆ for default; ★★★☆☆ as optional “打开互动地图” behind 高德/天地图 **if** keys + ICP mirror exist |

### D. Static map image APIs (Mapbox Static, Locize-class, Gaode static)

| | |
| --- | --- |
| **Pros** | Simple `<img>`; good for OG/print |
| **Cons** | Mapbox Static **unreliable in 大陆**; build-time generation needs tokens in CI; runtime URLs expose keys; regenerating 200 routes on every content edit is ops; Gaode static still key+合规 |
| **Fit** | ★☆☆☆☆ as default detail map; optional build-time PNG for 成书/分享 later |

### E. Heavy interactive rewrite (full MapLibre + live routing)

Reject as default. Conflicts with static export ethos, mainland tile legality, monthly ¥ budget mindset, and “示意 not 导航” copy. Keep 高德 for driving.

---

## 3. China tile / coordinate honesty (short)

- Mainland commercial maps use **GCJ-02** (“火星”). Content stops are treated as approximate WGS-style pins for schematic SVG — fine for 示意; **do not** claim meter-accurate alignment with Gaode without conversion.
- Publishing **OSM/Mapbox** as the live basemap for a China travel product aimed at mainland parents is a **network + compliance** liability (access + 公开地图表示). Prefer self-drawn schematic geography or 高德/天地图 with proper keys/审图号.
- Deep-link out (`uri.amap.com`) remains the correct place for **精确导航**.

---

## 4. Recommended path

### Near-term (1–2 engineering sessions) — **Option A polish**

Goal: every detail map reads as “有底图、站能分清,” still zero keys.

1. **Visual basemap** — darker land / lighter water or hatched provinces; optional major river layer from a small static GeoJSON; always show at least one labeled province name in-frame.
2. **Bake or inline** clipped province paths (or a simplified China outline + corridor mask) at catalog gen time so first paint ≠ blank; keep fetch as progressive enhancement only.
3. **Label policy** — on full maps, number when any cluster ≥**3** or any pair &lt; ~40px after project; prefer legend over overlapping CJK; hide pace sublabels when ink is tight (already partly done).
4. **Inset / dual-frame** when `fromHome` or bbox span ≫ local cluster span: small China/context frame + zoomed destination inset (fixes 北京家→密集聚堆).
5. **Data hygiene** — skip plotting stops that share identical lon/lat (merge into one marker + multi-name legend); audit near-duplicates.

### Medium (when maps are “good enough” but corridors look fake) — **Option B**

6. Build script: for each route with ≥2 stops, fetch OSRM (or hand-authored) geometry once → `public/geo/corridors/{id}.json` + commit. `route-road.ts` draws real-ish polylines; keep 「示意公路（非实时导航）」.
7. Optionally upgrade `amapUrlForRoute` to multi-stop 高德 URI / route plan when available.

### Explicit non-goals (now)

- Do **not** ship Mapbox/MapLibre+OSM as the default detail basemap.
- Do **not** block content 立项 on interactive maps.
- Do **not** pretend SVG corridors are GPS tracks.

---

## 5. Concrete next engineering tasks

| # | Task | Owner surface | Done when |
| --- | --- | --- | --- |
| 1 | **Basemap contrast + province name chip** in `RouteOverviewMap` (CSS/SVG only) | `components/RouteOverviewMap.tsx` | Spot-check 3 short + 3 long routes: land ≠ sky wash |
| 2 | **Stricter numbering** (≥3 dense / &lt;40px pairs) + drop identical-coord duplicates | `lib/map-projection.ts`, map component | `chengde-2d`, `leg-dunhuang-mogao`, `gubei-overnight` readable on iPhone width |
| 3 | **fromHome inset**: context strip + destination zoom | `RouteOverviewMap` + projection helpers | 北京家 day-trips no longer crush local stops |
| 4 | **Build-time clip** of province (or river) paths into slim per-route or shared JSON under `lib/generated/` or `public/geo/clipped/` | `research/scripts/*`, `gen:explore-catalog` hook | First paint shows geography without waiting on 464 KB full China fetch |
| 5 | **Corridor GeoJSON pipeline spike** (one compose, e.g. 河西) via OSRM → committed polyline → SVG stroke | `lib/route-road.ts` + `public/geo/corridors/` | One route looks road-following; disclaimer unchanged; no runtime API |

Verify: visual QA on live Pages + `npm run ux:plan` if detail selectors change; keep「示意」copy; do not add tile keys to the public repo.

---

## 6. Lib / stack cheat-sheet (if we grow past SVG)

| Need | Static-export friendly choice |
| --- | --- |
| React map shell | `react-leaflet` (lighter) or `react-map-gl` + MapLibre (heavier) — client components only |
| Geometry | `@turf/turf` in **Node build scripts**; avoid shipping full turf to every detail page |
| Polyline storage | `@mapbox/polyline` encode in pipeline |
| Routing generate | OSRM/Valhalla **at build**, never on phone |
| Real nav CTA | Keep / extend 高德 URI (already in UX) |
| CN tiles (optional later) | 天地图 or 高德 with keys + 审图号 — not Mapbox |

---

## 7. One-line summary

**Keep the SVG schematic, make the basemap actually visible and the label policy aggressive (numbers + insets); add pregenerated corridor polylines next; treat Gaode/Tianditu tiles as a keyed optional upgrade, not the default for this static atlas.**
