# Ctrip-style enrich — 西北 + 青藏（2026-08-02）

Batch scope: all live Explore catalog routes with `region: xibei` or `qingzang` (**32** ids). Rewrite from 携程游记/景点页 + official notices; **no wholesale copy**. Plateau honesty: adapt days, altitude ladders; **no 阿里 / 珠峰 invent**.

## Patch

- `content/audit-patches/ctrip-enrich-xibei-qingzang-20260802.ts` — `detailPatches` (introduction / seasonGuide / notices + **practicalGuide**) + `routeFieldPatches.sources`
- Companion: `content/audit-patches/ctrip-enrich-xibei-qingzang-pg-20260802.ts` — `practicalGuidePatches` merged into the same `detailPatches` export (**not** a second `index.ts` register)
- Registered once in `content/audit-patches/index.ts` so richer intros win via merge order; patch PG overlays beat hand `practicalGuides` for these ids

## Counts

| Field | Count |
| --- | ---: |
| detail ids | **32** |
| introduction | **32** |
| practicalGuide | **32** (backfilled same day; was 0 at first fan-out) |
| routeField sources | **32** |

## Enriched ids (32)

| Cluster | ids |
| --- | --- |
| 河西 | `leg-dunhuang-mogao`, `leg-zhangye-danxia`, `compose-hexi-dunhuang-zhangye` |
| 新疆 | `leg-kanas`, `leg-sayram-lake`, `leg-kuqa-canyon`, `xibei-xinjiang-yili`, `xibei-xinjiang-kashi`, `xibei-xinjiang-turpan`, `xibei-xinjiang-urumqi-city`, `xibei-xinjiang-duku`, `base-kashi`, `compose-beijiang-sayram-kanas`, `compose-nanjiang-kuqa-kashi`, `compose-silkroad-xian-turpan` |
| 宁甘 | `xibei-ningxia-3d`, `xibei-ningxia-shapotou`, `xibei-gansu-lanzhou-huanghe`, `xibei-lanzhou-xiahe`, `compose-ningxia-shapotou-lanzhou` |
| 青藏 | `qingzang-lhasa-slow`, `qingzang-qinghai-lake`, `qingzang-xining-3d`, `leg-xining-qinghai-lake`, `qingzang-nyingchi-slow`, `compose-qingzang-lhasa-nyingchi`, `qingzang-shigatse-taste`, `leg-qingzang-railway`, `compose-qingzang-railway-lhasa`, `qingzang-qilian-optional`, `qingzang-g214-xining-taste`, `compose-qinggan-xining-hexi` |

## Sample cue lines

- `leg-dunhuang-mogao` — 官方预约 + 数字中心先看片 + 摆渡进窟；拒第三方代抢
- `qingzang-lhasa-slow` — 适应 ≥3 日；布宫分日；纳木错一日即返；不排阿里/珠峰
- `compose-beijiang-sayram-kanas` — 单日车程 ≤4–5h；勿一日赛里木+禾木
- `xibei-ningxia-shapotou` — 沙河观景；拒飞索/冲浪/蹦极；三到四小时足够

## practicalGuide shape (backfill)

Each id: `routeGuide` / `timePlan` / `sightsTips` / `dining` / `longStay` / `hospitals`（医院名沿用既有 hand PG 可核实集合；`compose-ningxia-shapotou-lanzhou` 新建银川+中卫+兰州三甲提示）. Ctrip-style rewrite aligned to intro cues; plateau cards keep adapt / 下撤 / 不排阿里珠峰 language.

## Source URLs (cited in `sources`)

| Topic | URL |
| --- | --- |
| 莫高窟游记 | https://you.ctrip.com/travels/dunhuang8/4148458.html |
| 莫高窟官方开放 | https://www.dha.ac.cn/info/1019/5476.htm |
| 张掖丹霞 | https://you.ctrip.com/travels/zhangye283/4034471.html |
| 拉萨火车慢游 | https://you.ctrip.com/travels/36/4035655.html |
| 西藏高原初体验 | https://you.ctrip.com/travels/tibet100003/4170684.html |
| 带父母拉萨·林芝 | https://you.ctrip.com/travels/tibet100003/4102196.html |
| 林芝/拉林 | https://you.ctrip.com/travels/lhasa36/4097828.html |
| 青海湖避坑 | https://you.ctrip.com/travels/qinghai100032/4173292.html |
| 西宁慢慢游 | https://you.ctrip.com/travels/xining237/4107267.html |
| 喀纳斯北疆 | https://you.ctrip.com/travels/Kanas816/4106189.html |
| 伊犁赛里木 | https://you.ctrip.com/travels/xinjiang100008/4098630.html |
| 北疆串联 | https://you.ctrip.com/travels/yili115/4095908.html |
| 南疆喀什 | https://you.ctrip.com/travels/kashi124/4060948.html |
| 库车–喀什 | https://you.ctrip.com/travels/kuerle429/4138904.html |
| 疆内自驾 | https://you.ctrip.com/travels/yining2058/4108144.html |
| 沙坡头 | https://you.ctrip.com/travels/zhongwei1184/4141722.html |
| 沙坡头景点 | https://you.ctrip.com/sight/zhongwei1184/50442.html |
| 兰州 | https://you.ctrip.com/travels/lanzhou231/4075609.html |
| 拉卜楞寺 | https://you.ctrip.com/sight/xiahe2792/15540.html |

Note: `routeFieldPatches.sources` merge-append in `index.ts` (URL dedupe). Wikivoyage entries on the same ids remain if already present.

## Honesty locks

- No new 阿里 / 珠峰 / G219 极限 / full G214 贯通 product copy
- 日喀则 / 独库 / G214 / 帕米尔 clearly optional or demoted for ~60 parents
- 拉萨 / 西宁 / 青海湖 / 林芝 keep altitude + adapt / 下撤 language
