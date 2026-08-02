# Plan verify · QA / gap audit — 20260802

**Verifier:** clean-context subagent (audit only; no large features; no commit).  
**Time window:** 2026-08-02 (local)  
**Preview:** `http://127.0.0.1:3000`  
**Automated:** `npm run ux:plan` → **13/13 PASS**; `npm run research:multi-status` → **31/31**

---

## Overall verdict

**PARTIAL** (see *Clean-context gap scan — 2026-08-02 (late)* for current state)

Morning baseline below is historical. **Current:** longstay Unsplash fixed; PG hand **46/83**; Hebei 张家口/保定/唐山 woven (catalog **83**); gen + soft images + template PG + next prefecture cities remain. Product path PASS.

---

## Checklist

| # | Area | Verdict | Evidence |
|---|------|---------|----------|
| 1 | **Explore UX** | **PASS** | Entry: filters + map only (`ChinaMapExplorer` `resultsMode`; home HTML has `路线筛选`, no text 大区 chip grid of 华北/华东…). No home `每月预算` / BudgetBar (BudgetBar only `app/about/page.tsx`). Drill hides filters + sticky **返回** / province **上一级**. Per-route `大致金额` / `budgetLabel` on cards + detail. Themes include 全国大环线 / 边陲 / 长居. Mobile compact path covered in prior explore-ux verify. **`npm run ux:plan` 13/13 PASS** (P2 = per-route budget, not home BudgetBar; P7 = 返回). |
| 2 | **Maps** | **PASS** (minor polish left) | Deconfliction + compact province cards: `lib/map-projection.ts` (`deconflictStopLayout`, `compactSummary`). Road corridors schematic: `lib/route-road.ts` + `RouteOverviewMap` — live dunhuang page shows **示意公路**, corridor polylines, km chips (e.g. 约400公里). Spot-check dense pair 敦煌/莫高窟 uses orbit offsets. Not real routing (disclaimer present). |
| 3 | **Images** | **PARTIAL** | `PLACE_ROUTE_COVERS` **72** keys; wired catalog **80** routes → **8 longstay missing** from place-images. Live `/routes/longstay-dali/` still serves **Unsplash** cover/gallery (`images.unsplash.com/...`). Prior 72-route Commons audit OK; gen set `PLACE_GENERATED_IDS` (海南西线 cluster + `mingshi-optional`) captions **示意生成图**. Remaining: gen IDs + soft optional reuses (see `image-coverage-progress-20260802.md`). Unsplash still in source patches for many routes but **rewritten at merge** via `withPlaceImages` when mapped. |
| 4 | **Content depth** | **PARTIAL** | **长居 not missing:** 8 `longstay-*` routes in catalog + theme chip, HTTP 200, hand PG for all 8. **Prefecture-depth:** wave-1 enrich wired (`routes-prefecture-hebei-shandong` → 承德/秦皇岛/青岛); backlog nationwide unfinished (OK as known gap). **Practical guides:** hand map **27** ids in `practical-guides.ts`; **~53/80** still template/`buildPracticalGuide` (frontier etc. show 请用高德核实). `route-details.ts` has **72** keys — longstay intros live in patch file only (acceptable but uneven). |
| 5 | **Catalog integrity** | **PASS** (small alias note) | Route-like ids **80** ↔ `route-provinces` **80**, no orphans either way. Themes `grand-loop` / `frontier` / `long-stay` via home filters (no `/themes/*` pages — `/themes/grand-loop` **404** expected). Multi-discovery **31/31**. **Note:** `/explore` → `/explore/` **404** (nav「探索」points to `/`, so low user impact). |
| 6 | **Preview health** | **PASS** | `/` `/about/` `/overview/` `/routes/{mutianyu-day,longstay-dali,national-chuandian-slow,frontier-ruili,huadong-suhan-slow,xibei-xinjiang-north,huanan-hainan-slow-west}/` → **200**. No build 500 observed this round. |

---

## Spot notes

### Explore
- ux:plan selectors already match current product (filters hide on drill; P2 asserts per-route budget).
- Prior mobile QA + follow-ups (更多快捷, sticky 上一级, theme resultsMode) appear still in tree.

### Images — highest severity product gap
| Cluster | Status |
|---------|--------|
| Core 72 mapped routes | Commons thumbs; major attractions spot-checked in prior audit |
| `longstay-*` ×8 | **Unsplash still rendered** (coverImage fallback wins over missing PLACE map) |
| Gen | Hainan west + mingshi labeled 示意生成图 |
| Risk | `PLACE_IMAGE_FALLBACK` is Great Wall — only matters if coverImage stripped without PLACE entry |

### Content
- Deep examples (e.g. `xibei-dunhuang-zhangye`) show multi-paragraph intro + hand practical + Commons gallery.
- Frontier / many deepen routes: Commons OK, practical often template-flavored.

---

## Prioritized next tasks (7)

1. **Map Commons (or labeled gen) for all 8 `longstay-*` into `content/place-images.ts`** — kill live Unsplash on 长居详情; prefer reusing nearby verified covers (大理/昆明/阳朔/… already in map for trip routes) + stop ids.
2. **Practical-guide wave 2** — hand-write next ~15 high-traffic / frontier / national-loop ids still on template (keep hospital disclaimer).
3. **Prefecture-depth next batch** — backlog: 张家口 / 保定 / 唐山 (or 烟台拆线); notes under `research/notes/prefecture-depth/` before weaving.
4. **Replace remaining gen covers** — Hainan west cluster + `mingshi-optional` with Commons/Openverse or keep gen but ensure captions stay 示意生成图.
5. **Soft image QA** — optional same-area reuses called out in `image-coverage-progress-20260802.md` (沙坡头 optional, 平遥 wall, etc.); do not re-run stand-in regenerators.
6. **Optional:** add `route-details` entries for `longstay-*` for parity with the 72-key detail merge path (intros already in patch).
7. **Tiny DX:** redirect `/explore` → `/` (or add alias page) so bookmark/308 doesn’t 404.

---

## Explicit non-goals this round

- No large route rewrites / parallel content fights.
- No commit.
- Prefecture nationwide coverage not required for PASS.

---

## Progress update — 2026-08-02 (QA next-task execution)

**Executor:** follow-up agent after long-stay + prefecture wave-1 land.

| Priority | Status | Notes |
|----------|--------|-------|
| 1 Longstay Unsplash | **DONE** | All 8 `longstay-*` covers + **32/32** `ls-*` stops in `PLACE_*`. Live preview: unsplash=0 on all 8. Hardened `lib/place-images.ts` to reject Unsplash stock as cover/stop fallback. |
| 2 Practical-guide wave 2 | **DONE** (~14) | Hand map **29 → 44**. Added: silkroad, 4 frontier (dandong/manzhouli/ruili/dongxing), guilin-yangshuo, zhangjiajie, huangshan, chongqing, shanghai-short, xishuangbanna, yili, taishan, dujiangyan-2d, + zhangjiakou. Longstay already had hand PG. |
| 3 Prefecture next | **PARTIAL** | **张家口** note + new route `huabei-hebei-zhangjiakou` woven (Commons 大境门/崇礼金秋; 张北 soft-reuse Hulunbuir grassland). 保定/唐山 still open. Catalog **81** route-provinces. |
| 4 Gen → Commons | **OPEN** | Hainan west cluster + `mingshi-optional` still labeled 示意生成图 (no safe Commons quick win this round; 429 on probing). |
| 5 Soft image QA | **OPEN** | Known soft reuses unchanged; new soft: `zjk-zhangbei-optional`↔Hulunbuir. |
| 6–7 Optional DX | **OPEN** | `route-details` longstay parity; `/explore` alias. |

### Still open (next)

1. Prefecture: 保定 / 唐山 notes + weave  
2. Gen covers: Hainan west / mingshi when Commons or better east-coast files found  
3. Soft optional image polish  
4. Optional `/explore` → `/` redirect  

---

## Progress update — 2026-08-02 (保定/唐山 prefecture weave)

**Executor:** prefecture-depth follow-up after 张家口.

| Item | Status | Notes |
|------|--------|-------|
| 保定 | **DONE** | Note `hebei-baoding.md` + new `huabei-hebei-baoding` (5 stops; Commons 总督署/清西陵/白洋淀/野三坡). 涞源白石山默认跳过。 |
| 唐山 | **DONE** | Note `hebei-tangshan.md` + new `huabei-hebei-tangshan` (5 stops; Commons 南湖/清东陵/喜峰口). 乐亭 soft-reuse 北戴河同廊。 |
| Gen Commons | **OPEN** | Hainan west + `mingshi-optional` — no safe Commons quick win (儋州/棋子湾/明仕检索无可用风景图). |
| Catalog | **83** | route-provinces +2 Hebei; hand PG +2. |
| Multi-discovery | Brief | `hebei.md` 增补保定/唐山/张家口候选一行。 |

### Still open (next)

1. Gen covers: Hainan west / mingshi  
2. Soft optional image polish (`ts-laoting-optional`↔北戴河; prior softs)  
3. Prefecture next: 烟台 / 威海县域 / 大同  
4. Optional `/explore` → `/` redirect  

---

## Clean-context gap scan — 2026-08-02 (late)

**Verifier:** clean-context subagent (read disk; no content fight with 保定/唐山 weave; no commit).  
**Preview:** `http://127.0.0.1:3000`  
**Automated:** `npm run ux:plan` → **13/13 PASS**; `npm run research:multi-status` → **31/31**

### Overall verdict

**PARTIAL** (improved vs morning QA)

Product path and catalog integrity are solid. Longstay Unsplash is gone; Hebei prefecture trio (张家口/保定/唐山) is woven; hand practical guides **46/83**. Remaining thin spots: **示意生成图** (Hainan west cluster + `mingshi-optional`), **soft landmark reuses**, **~37 template PGs**, and **next prefecture cities** (烟台/威海/大同). Not FAIL.

### Live signals

| Check | Result |
|-------|--------|
| `/` `/about/` `/overview/` | **200** |
| `/explore` → `/explore/` | **308 → 200** (alias page added this round) |
| Catalog `route-provinces` | **83** (incl. baoding/tangshan/zhangjiakou) |
| `PLACE_ROUTE_COVERS` | **83** |
| Hand `practicalGuides` | **46** / 83 → **37** still `buildPracticalGuide` template |
| 8× `longstay-*` HTML | **200**, **unsplash=0** each |
| `huabei-hebei-baoding` / `tangshan` | **200**, Commons covers; unsplash=0 |
| `huanan-hainan-slow-west` | **200**, live `/generated/places/…` + 示意生成图 captions |
| `PLACE_GENERATED_IDS` | `mingshi-optional`, `huanan-hainan-slow-west`, `danzhou-base`, `danzhou-coast`, `qiziwan-optional` |

### Gap table

| Gap | Status | Notes |
|-----|--------|-------|
| Longstay Unsplash (8) | **FIXED** | Mapped + Unsplash rejected in `lib/place-images.ts` |
| Practical-guide wave 2 | **FIXED** | Was ~27 → now **46** hand ids |
| Prefecture 张家口 | **FIXED** | `huabei-hebei-zhangjiakou` |
| Prefecture 保定 | **FIXED** (this weave) | `huabei-hebei-baoding` + note + hand PG |
| Prefecture 唐山 | **FIXED** (this weave) | `huabei-hebei-tangshan` + note + hand PG |
| `/explore/` 404 | **FIXED** (this scan) | `app/explore/page.tsx` re-exports home |
| Hainan west + mingshi gen | **STILL OPEN** | 5 gen ids / 示意生成图; no safe Commons quick win |
| Soft optional reuses | **STILL OPEN** | e.g. `zjk-zhangbei`↔Hulunbuir; `ts-laoting`↔Beidaihe; prior list in image-coverage |
| Template practical guides | **STILL OPEN** | **37/83** (frontier-erlian/mohe, many 西北/青藏/东北/华中…) |
| Prefecture next batch | **STILL OPEN** | backlog: 烟台 / 威海县域 / 大同 (石家庄/正定 after) |
| `route-details` longstay parity | **STILL OPEN** (optional) | longstay intros live in patch only; `route-details` ~72–73 keys |
| Multi-discovery file-per-new-id | **SOFT** | No dedicated multi files for baoding/tangshan ids; `hebei.md` brief OK for weave — do not block |

### Quick win applied this round

- Added `app/explore/page.tsx` → re-export home. Preview: `/explore/` **200** with 路线筛选 / map CTA.

### Prioritized fixable next tasks (7)

1. **Replace gen covers** — find Commons/Openverse (or keep labeled gen) for Hainan west cluster (`huanan-hainan-slow-west` + `danzhou-*` + `qiziwan-optional`) and `mingshi-optional`. Prefer real west-coast / 明仕 photos; do **not** map generic `Hainan.jpg` / Li River stand-ins.
2. **Soft image polish** — upgrade or caption soft same-area reuses: `zjk-zhangbei-optional`↔Hulunbuir, `ts-laoting-optional`↔Beidaihe, plus prior (`xinghan-optional`, `pingyao-wall`, `shapotou-optional`, …). Optional nicer `Xiamen.jpg`.
3. **Prefecture-depth next** — notes + weave **烟台** (拆青岛慢住) and/or **威海县域** (cross `longstay-weihai`) and/or **大同** enrichment; follow `research/notes/prefecture-depth/backlog.md`.
4. **Practical-guide wave 3** — hand-write next ~10–15 high-traffic template ids (e.g. `huazhong-xian-slow`, `xibei-xinjiang-kashi`/`duku`, `dongbei-harbin-snow-3d`, `xinan-chuanxi-slow`, remaining frontier erlian/mohe). Keep hospital disclaimer.
5. **Optional:** `route-details` entries for 8 `longstay-*` for merge-path parity with the ~72-key detail file.
6. **Soft multi-discovery hygiene** — if new *standalone* cities beyond Hebei brief are added, drop a multi-discovery note under `research/notes/multi-discovery/` (gate for *new* ids); 保定/唐山 already landed — no rewrite needed.
7. **Do not** re-run local `/places/` stand-in regenerators or mass Unsplash/Commons overwrite scripts (see image-coverage conflict note).

### Explicit non-goals

- No large parallel content rewrites; no commit.
- Nationwide prefecture coverage not required for PASS.
- XHS MCP health not a gate.

---

## Progress update — 2026-08-02 (QA next tasks executed)

**Executor:** follow-up after Fresh QA gap scan. **tsc OK.** No commit.

| Priority | Status | Notes |
|----------|--------|-------|
| 1 Gen → Commons | **MOSTLY DONE** | West Hainan: cover=`Chengmai_Laocheng_seashore`；`danzhou-base`=洋浦古盐田；`danzhou-coast`=`Cape_Lingao`。`mingshi-optional`=明仕–德天沿边公路 panoramio。**Rejected** `Yangpu_Bay.jpeg`（卫星/海花岛俯瞰）。**Kept gen:** `qiziwan-optional` only（无棋子湾安全 Commons）。 |
| 2 Soft polish | **DONE** | `zjk-zhangbei`→张北 Grass Skyline（去掉呼伦贝尔）。`ts-laoting` 仍北戴河同廊 + `PLACE_SOFT_IDS`「同区示意」。`yantai-optional` 改为烟台山（原 `Yantai.jpg` 实为威海）。 |
| 3 Prefecture | **DONE** | 烟台 `huabei-shandong-yantai`；威海 enrich `longstay-weihai`；大同 enrich 左云/灵丘。Catalog **84**。 |
| 4 PG wave 3 | **DONE** (~15) | Hand **61/84**（~23 template left）。 |
| 5 Longstay route-details | **DONE** | 8× longstay + yantai 写入 `route-details.ts`。 |

### Still open

1. `qiziwan-optional` 示意生成图  
2. Soft same-corridor upgrades（乐亭/蓬莱/长岛/荣成/左云/灵丘）  
3. PG wave 4（~23）  
4. Prefecture：石家庄/正定  

---

## Progress update — 2026-08-02 (late QA remaining)

**Executor:** continue after QA next tasks. **tsc OK.** No commit. No `/places/` regenerators. No Unsplash.

| Priority | Status | Notes |
|----------|--------|-------|
| 1 `qiziwan-optional` | **KEPT GEN** | Re-searched Commons/Wiki：无棋子湾风景 pageimage；昌江仅 G225 道边/卫星/广播台等，**不适老封面**。保留 `PLACE_GENERATED_IDS` +「示意生成图」。 |
| 2 Soft upgrades | **MOSTLY DONE** | `yt-penglai`→`PenglaiPavilion.jpg`；`yt-changdao`→南长山岛；`ls-rongcheng`→成山头 panoramio；`datong-lingqiu`→觉山寺塔。**仍 soft：** `ts-laoting`（无乐亭岸线；拒青海金银滩）↔北戴河；`datong-zuoyun`（无可用风景）↔云冈。 |
| 3 PG wave 4 | **DONE** (19) | Hand **81/85**（余模板：`qingzang-qilian-optional`、`qingzang-shigatse-taste`、`xibei-xinjiang-south`、`xinan-guizhou-loop`）。 |
| 4 Prefecture 石家庄/正定 | **DONE** | Note `hebei-shijiazhuang.md`；新线 `huabei-hebei-shijiazhuang`（5 stops；Commons 隆兴寺/四塔/长安公园/博物院/赵州桥）；PG；backlog 更新。Catalog **85**。 |

### Still open

1. Soft leftovers：`ts-laoting-optional`、`datong-zuoyun-optional`（及既有同城 soft：兴汉/联峰山/平遥墙/珠海/沙坡头）  
2. PG 余 4 条高原/南疆/贵州大环线模板（低优先级）  
3. `qiziwan-optional` 待未来出现安全西岸风景 Commons  

---

## Progress update — 2026-08-02 (PG wave 4 finale)

**Executor:** finish last open easy wins from QA leftovers wave 4. **tsc OK.** No commit.

| Priority | Status | Notes |
|----------|--------|-------|
| 1 PG remaining 4 | **DONE** | Hand-wrote `qingzang-qilian-optional`、`qingzang-shigatse-taste`、`xibei-xinjiang-south`、`xinan-guizhou-loop`（routeGuide / timePlan / sightsTips / dining / longStay / hospitals）。**Hand 85/85**。 |
| 2 `qiziwan-optional` | **BLOCKED** | Re-search Commons/Wiki：无棋子湾风景；昌江 pageimage 仍为广播台；保留 gen + `PLACE_GENERATED_IDS`。 |
| 3 Soft leftovers | **BLOCKED** | `ts-laoting-optional`：乐亭/月坨/菩提岛无岸线风景（仅地图）。`datong-zuoyun-optional`：仅教堂/地图，无适老风景；拒错地标。仍 soft「同区示意」。 |

### Still open

1. Soft leftovers：`ts-laoting-optional`、`datong-zuoyun-optional`（及既有同城 soft：兴汉/联峰山/平遥墙/珠海/沙坡头）  
2. `qiziwan-optional` 待未来出现安全西岸风景 Commons  
