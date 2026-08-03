# Route overview maps — retired · 2026-08-02

**Decision:** Remove in-product **route overview / corridor schematic maps** from route detail. Prefer scannable **practical transport copy** (怎么去 / 段内交通 / 大致车程 / 节奏).

**Prior research:** `research/notes/route-overview-map-tools-20260802.md` (SVG province wash, marker deconfliction, schematic Bezier “roads”, optional tile/OSRM options). That note diagnosed why parents saw “没有底图” and overlapping markers; polish path still would not be turn-by-turn navigation.

**Why retire instead of polish**

1. Static SVG corridors were **示意 only** and competed with cover photos for first-viewport attention.
2. Honest parent UX is distance / 大交通 / 段内衔接 / pacing text already in `transport`, `glue`, `daysLabel`, stops, and practical guides — not another schematic layer.
3. Real navigation stays **高德 deep-link** (首站 marker) when coordinates exist.

**Removed from product**

- `components/RouteOverviewMap.tsx`, `components/RouteMapWithExpand.tsx`
- `lib/china-geo.ts`, `lib/map-projection.ts`, `lib/route-road.ts`
- `public/geo/china-provinces.json` (only used by the overview map)

Explore **map-tab / 地图选区** was already removed earlier; do **not** revive Leaflet/MapLibre/tiles.

**Shipped instead**

- Detail section「精细化路线介绍」(`#practical`) via `buildRoutePracticalBrief` in `lib/route-detail.ts`
- Sticky rail link「交通」; bottom duplicate「交通方式」folded into this block
- About / `AGENTS.md`: maps removed in favor of practical transport copy
