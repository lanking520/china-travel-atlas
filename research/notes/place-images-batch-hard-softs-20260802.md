# Place-images batch 5/5 — hard leftovers — 2026-08-02

**Scope:** Hard scenic leftovers called out in `place-images-repair-20260802.md`, plus stubborn wrong-city softs that regional batches (1–4) left behind. Gen trio only if real place-accurate Commons exists.

**Baseline after regional races:** Soft **20** (corridor/gate buffers). Hard scenic IDs mostly already upgraded by batches 2–4.

## Fixed this batch (8) — leftover wrong-city / weak subject

| ID | Was (problem) | Commons file |
| --- | --- | --- |
| `xinghan-optional` | 兴汉胜境16 室内展厅 | `兴汉胜境05.jpg`（景区草坪外景） |
| `fz-sanfang` | **厦门** `Xiamen.jpg` 错城 | `福州三坊七巷南后街oeotwc_-_panoramio.jpg` |
| `nj-xuanwu-lake` | **苏州**拙政园错省 | `Xuanwu_Lake,_Nanjing.jpg` |
| `hf-swan-lake` | **屯溪**老街错城 | `安徽合肥天鹅湖.jpg` |
| `nc-tengwang` | **婺源**错城 | `南昌滕王阁.jpg` |
| `nc-qiushui` | **婺源**错城 | `南昌滕王阁.jpg`（秋水广场邻滕王阁同廊） |
| `gy-jiaxiu` | 泛贵阳 skyline | `甲秀楼_-_Jiaxiu_Pavilion_-_2015.07_-_panoramio.jpg` |
| `hrb-daoli-base` | 索菲亚（道里可用但非中央大街） | `哈尔滨中央大街西十一道街北.jpg` |

Pipeline `FILES` synced in `research/scripts/resolve-place-images.py`. Discovery: `research/raw/batch5-hard-softs-search-20260802.json`, `batch5-hard-softs-verified-20260802.json`.

## Hard leftovers — already fixed by regional batches (credit)

| ID | Batch note | Commons |
| --- | --- | --- |
| `bh-oldtown` | 华中/华南 | `北海市_百年老街_-_panoramio.jpg` |
| `hf-sanhe-optional` | 华东 | `三河古镇老街.jpg`（Feixi） |
| `hh-xilamuren-optional` | 华北/东北 | `希拉穆仁草原_保护区_-_panoramio.jpg` |
| `fj-jinding-optional` | 西南/西北 | `梵净山红云金顶_-_panoramio.jpg` |
| city hubs (`wh-wuchang-base`, `fz-gulou-base`, `gy-nanming-base`, `nj-xuanwu-base`, `sz-nanshan-base`, `ty-fenhe-optional`, `cz-yancheng`, `nt-museum`, `huz-feiying`, `gaozhuang`, `hk-volcano`, …) | regional | place-accurate; soft labels cleared |

## Still hard / intentional soft (honest misses)

### 示意生成图 (3) — **unchanged**

| ID | Why keep gen |
| --- | --- |
| `qiziwan-optional` | Commons/Openverse 无棋子湾适老风景；拒三亚/东线沙滩 |
| `ts-laoting-optional` | 无乐亭/月坨岸线风景；拒北戴河或青海金银滩 |
| `datong-zuoyun-optional` | 无左云县域风景；拒云冈/教堂废墟 |

### Remaining `PLACE_SOFT_IDS` (20) — intentional same-corridor / gate buffers

`zhuhai-optional`, `shapotou-optional`, `yzc-base`, `yzc-yizheng-optional`, `yzc-shaobo-optional`, `zj-base`, `yc-museum-optional`, `xc-base`, `qd-hangzhou-note`, `qufu-exit`, `fj-gate`, `cs-shantou`, `lz-buffer-optional`, `g318-exit`, `jn-hangzhou-gate`, `jn-exit`, `qzr-exit`, `g214s-exit`, `mengla-buffer-optional`, `sx-hangzhou-optional`.

These are same-corridor captions, not wrong-province stand-ins. Low visual priority; upgrade only when a dedicated Commons appears.

### Rejected this round

| Candidate | Why |
| --- | --- |
| `汾河湿地公园-2010` as Fenhe alt | Categories only “Fen River”; location ambiguous vs Taiyuan 汾河公园（already has dedicated `Fen_River_Park_Taiyuan_20110709.jpg`） |
| Xinghan interior / 门票点 | Prefer outdoor lawn over展厅/票亭 |
| Gen trio Openverse hits | Maps, satellite, wrong-subject only |

## Ops

- Sources: Openverse CC (`by,by-sa,cc0,pdm`, `source=wikimedia`) + sparse Commons `imageinfo` (bulk 429).
- Prefer leave soft / gen over wrong-city. No Unsplash-as-attraction.
- Rebased carefully after regional batches landed on `main` first.
