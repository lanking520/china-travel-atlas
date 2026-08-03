<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# China Travel Atlas — agent / contributor guide

Private→public static atlas for **Beijing-based parents (~60, active retirement)** planning mainland China trips over ~2 years. Home bases: **北京家** (`fromHome`) and **郑州家 / 岳父岳母** (`fromZhengzhouHome`). Mix of private-car short trips and fly+local-drive long trips. Monthly travel budget mindset ≈ **¥20k**.

Live Pages: https://lanking520.github.io/china-travel-atlas/  
Deploy: push `main` → `.github/workflows/deploy-pages.yml` (must stay green).

## Audience & non-goals

**In scope:** Mainland China routes parents can actually walk/drive; honest altitude, heat, stairs, booking, hospital notes; modern mobile feed UX (not “适老 bulky” chrome).

**Out of scope (do not invent cards):**

- 港澳台 as product destinations
- Extreme alpine / 阿里·珠峰 / G219 极限 / full G214·G210·G318 end-to-end “贯通”
- Senior-mode purple-glass kits, dashboard rewrites, Flutter ports
- Copying XHS/Zhihu posts wholesale

## Stack

| Piece | Notes |
| --- | --- |
| Next.js **static export** (`output: "export"`) | No SSR streaming; all pages prebuilt into `out/` |
| GitHub Pages | `GITHUB_PAGES=true` → `basePath` / `assetPrefix` = `/china-travel-atlas` |
| Tailwind **4** | App shell in `app/`, client Explore in `components/` |
| React 19 | Prefer repo patterns; don’t add memo/callback by default |
| PWA | `public/sw.js` + `PwaRegister`; same-origin shell only |

Config: `next.config.ts`. Deploy notes: `docs/部署与私有仓库说明.md`.

Mainland phone access (GH Pages flaky): see `research/notes/china-mainland-access-20260802.md`.

## Content model

Three product shapes (`compositionKind` in `content/types.ts`):

| Kind | Lens | Owns |
| --- | --- | --- |
| `leg` | 短线 | Stops, culture/food, practical guide, images |
| `compose` | 长线 | Ordered `legIds` + `glue` only — **no** pasted stop essays |
| `base` | 长居枢纽 | Housing/hospital rhythm + `nearbyLegs` |

`tripType` (`short`/`long`) remains for filters; prefer `compositionKind` when present (Explore maps leg→短线, compose/base→长线; 长居 still via **主题·长居**).

### Where files live

| Path | Role |
| --- | --- |
| `content/routes.ts` + `content/patches/*.ts` | Route records (merged in `content/index.ts`) |
| `content/route-details.ts` | Base detail fields |
| `content/audit-patches/*.ts` | Detail/route field overlays (`preferRicherText`) |
| `content/practical-guides.ts` | Hand PG (dining, hospitals, …) |
| `content/place-images.ts` | Cover / stop image URLs |
| `public/places/`, `public/generated/places/` | Local / 示意生成 covers |
| `lib/generated/explore-routes.json` | Slim Explore catalog (regen on build) |
| `research/notes/multi-discovery/` | **Discovery gate** evidence for *new* ids |

IA write-up: `research/notes/content-route-composition-ia-20260802.md`.

## Explore UX IA (shipped)

Home = **single catalog**「全部景点」(dual-column `RouteCard`).

- Search **above** filter dims
- Four dims: **季节 / 长短 / 主题 / 地区** (大区 → optional 省份). Defaults: 全季节 / 全部 / 全部主题 / 全部地区
- **No**「地图选区」tab / map cover (removed). Region pick is sheet-only
- Sticky「返回」only when scoped; hidden on clean catalog
- Mobile **bottom nav**: 探索 / 两年 / 说明
- Compose detail: sticky「组合」+ embedded leg links under intro
- Base detail: sticky「门槛」「辐射」+ `#gates` 三门槛

Implementation note: Explore UI still lives in `components/ChinaMapExplorer.tsx` (historical name; **not** a map-tab entry). Detail **route overview maps are removed** — use「精细化路线介绍」practical transport copy (`buildRoutePracticalBrief`); see `research/notes/route-overview-map-retired-20260802.md`. Do not reintroduce Leaflet/MapLibre.

Locks: `npm run ux:plan` → `research/scripts/ux-plan-verify.mjs`.

## Discovery gate

- **Multi-source** notes under `research/notes/multi-discovery/` are the gate for **new** route ids when practical
- Xiaohongshu digests / MCP are **optional review only** — do not block 立项 on XHS MCP health
- If using XHS MCP: **one** search process at a time
- Scripts: `research:multi-status`, `research:multi-ingest`, various `research:xhs-*`

## Image rules

- Prefer **Wikimedia Commons** (HEAD-check); keep pipeline/`PLACE_*` sets in sync
- **No Unsplash-as-attraction** for covers/stops (generic stock ≠ place)
- If no safe scenic Commons: **示意生成图** (`public/generated/places/{id}.png` + `PLACE_GENERATED_IDS`) beats wrong-city soft
- Intentional same-corridor soft may remain; wrong-province soft is a bug
- Strategy notes: `research/audits/image-source-strategy.md`

## Longstay 三门槛

Every `longstay-*` / `compositionKind: base` must document:

1. **交通便利** — airport / HSR / highway as relevant  
2. **生活物资丰富** — ~1 month daily supplies & pharmacy  
3. **医疗资源丰富** — prefer local 三甲; if only 二甲/县医院, say so prominently + give a fallback 三甲  

Fail/weak → demote or caveat (see `research/notes/long-stay-cities-20260802.md`). Yangshuo / Zhenyuan already demoted off long-stay.

## Commands

```bash
npm install
npm run preview          # http://127.0.0.1:3000
npm run ux:plan          # Playwright Explore/detail locks (needs preview)
npm run build:pages      # GITHUB_PAGES=true static export → out/
npm run gen:explore-catalog
npm run pack:offline     # offline zip for parents
npm run research:multi-status
npm run research:verify-loop
```

CI also curls live Pages after deploy (strings: 全部景点|筛选维度|地区; must **not** contain 地图选区).

## How to add a route / compose / images

1. **Evidence** — multi-discovery note (or cite existing) for *new* ids.  
2. **Route** — add in `content/patches/` (prefer patch over editing huge `routes.ts`); set `id`, region, seasons, `tripType`, `compositionKind`, stops, etc. Wire `content/index.ts` if new patch file.  
3. **Compose** — thin: `legIds` + `glue`; reuse existing legs; don’t duplicate stop prose.  
4. **Base** — `nearbyLegs` + PG hospitals; pass 三门槛.  
5. **Details / PG** — `route-details` and/or `audit-patches` + `practical-guides` (dining 2–4 dishes + 清淡/适老).  
6. **Images** — Commons URL in `place-images` or local/generated file; never wrong-city soft.  
7. **Provinces** — `content/route-provinces.ts` for Explore 地区.  
8. **Verify** — `npm run gen:explore-catalog` (or `build`), spot-check detail URL, `ux:plan` if Explore IA touched.  
9. **Backlog** — tick `research/notes/content-backlog-20260802.md` / UX backlog as appropriate.

Retired ids stay **gone** from the live catalog (dead-lead OK). Don’t reintroduce `national-*` monoliths; use compose+legs.

## Coordination & hygiene

- Content agents: prefer `content/*`; avoid drive-by Explore rewrites unless asked  
- UX agents: prefer `components/*`, `app/*`, `research/scripts/ux-*`; don’t fight content on copy  
- After meaningful plan chunks: clean-context verify → `research/audits/plan-verify-round-*.md`  
- Durable checklists:  
  - `research/notes/ux-backlog-20260802.md`  
  - `research/notes/content-backlog-20260802.md`  
  - `research/audits/global-remaining-20260802.md`  
  - `research/audits/verify-loop-latest.md`

## Secrets & CI

- **Do not commit** `.env`, cookies, XHS tokens, cloud AccessKeys, private keys  
- Pages workflow must stay green (`build:pages` smoke + live curl)  
- Optional China CDN dual-deploy: research note + stub only until secrets/ICP are ready — see `research/notes/china-mainland-access-20260802.md` and `research/notes/deploy-china-oss.workflow.stub.yml` (copy into `.github/workflows/` only when ready)
