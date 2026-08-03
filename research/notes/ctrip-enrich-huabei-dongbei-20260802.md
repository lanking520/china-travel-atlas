# Ctrip enrich · 华北+东北 · 2026-08-02

Batch scope: `region` **huabei** + **dongbei** only (47 catalog routes).  
Rewrite reference: 携程游记/攻略（`kind: 'other'`，note「改写参考，非官方」）— **no wholesale copy**.

## Files

- `content/audit-patches/ctrip-enrich-huabei-dongbei-20260802.ts` — `detailPatches` (practicalGuide) + `routeFieldPatches` (sources append)
- Registered last in `content/audit-patches/index.ts` (PG overlay wins; sources merged by URL)

## Counts

| | n |
| --- | ---: |
| Catalog in scope | 47 |
| **Enriched practicalGuide** | **43** |
| **Skipped PG** (already rich hand guides) | **4** |
| Ctrip `sources` appended | 46 (incl. 3 skip-PG + shanxi-loop; mutianyu already had Ctrip) |

### Skipped (PG already rich)

- `mutianyu-day` — hand PG + existing Ctrip sources
- `gubei-overnight`
- `tianjin-day` — sources only
- `huabei-shanxi-loop` — sources only

### Enriched (practicalGuide overlay)

**Compose:** `compose-dongbei-loop`, `compose-neimeng-grassland`, `compose-jingjinji-jin`, `compose-lu-taishan-qingdao`, `compose-shandong-qingdao-yantai`

**北京/冀短线:** `chengde-2d`, `huabei-beijing-city-slow`, `huabei-hebei-beidaihe`, `huabei-hebei-baoding`, `huabei-hebei-shijiazhuang`, `huabei-hebei-tangshan`, `huabei-hebei-zhangjiakou`, `huabei-hebei-handan`

**晋鲁名景:** `huabei-shanxi-pingyao-deep`, `huabei-shanxi-taiyuan`, `huabei-shanxi-wutai`, `huabei-shanxi-xinzhou-county`, `huabei-shanxi-linfen`, `huabei-shanxi-yuncheng`, `huabei-shandong-jinan`, `huabei-shandong-taishan`, `huabei-shandong-yantai`, `huabei-shandong-weifang`, `leg-qingdao-coast`, `leg-qingdao-laoshan`

**内蒙:** `huabei-neimeng-summer`, `huabei-neimeng-hohhot`, `huabei-neimeng-aershan`, `huabei-neimeng-hulunbuir`, `longstay-hulunbuir`, `frontier-manzhouli`, `frontier-erlian`

**东北:** `dongbei-changbai-summer`, `dongbei-harbin-snow-3d`, `dongbei-dalian-summer`, `dongbei-heilongjiang-harbin-summer`, `dongbei-heilongjiang-wudalianchi`, `dongbei-jilin-changchun`, `dongbei-jilin-yanbian`, `dongbei-liaoning-shenyang`, `frontier-dandong`, `frontier-mohe`, `longstay-weihai`

## Sample before → after cues

| id | before (routeGuide cue) | after |
| --- | --- | --- |
| `leg-qingdao-coast` | 「高铁入青→市南…八大关/栈道分日」~51字 | 栈桥清晨错峰、回澜阁可只桥面、地铁60+核、电梯核实 |
| `huabei-shandong-taishan` | 「泰山曲阜…」短骨架 ~78字 | 天外村→中天门→索道减负；勿红门长距；索道末班 |
| `huabei-shanxi-pingyao-deep` | 「高铁太原→平遥…」~65字 | 古城免票逛街；通票1–2处；拒黑导；城墙可删 |
| `compose-dongbei-loop` | （无 hand PG） | 哈→长→沈→连高铁串珠；一日一城；不排雪乡长白 |

## Representative source URLs (curl 2xx this session)

- https://you.ctrip.com/travels/365/4044174.html — 平遥陪父母
- https://you.ctrip.com/travels/taian746/4060070.html — 泰山天外村
- https://you.ctrip.com/sight/qingdao5/1265.html — 栈桥
- https://you.ctrip.com/travels/changbaishan268/4148374.html — 带老人长白山
- https://you.ctrip.com/sight/harbin151/7712.html — 中央大街
- https://you.ctrip.com/travels/wutaishan184/4100348.html — 五台台怀
- https://you.ctrip.com/sight/qinhuangdao132/78427.html — 北戴河老虎石

Some secondary destinations share a corridor travel URL when a dedicated short guide was not independently cited; note still「改写参考，非官方」. Intro culture blocks from prior character waves left intact (prefer richer intros; this batch targets thin PGs).
