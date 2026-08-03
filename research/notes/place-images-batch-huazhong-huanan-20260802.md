# Place-images batch — 华中 + 华南 — 2026-08-02

**Scope:** 河南 / 湖北 / 湖南 / 广东 / 广西 / 海南 softs only. No 华东 / 西南 / 西北 / 华北. `qiziwan-optional` gen left untouched (no dedicated Commons).

**Baseline:** Soft **97** after `3bd5aa9` → this batch soft **78** (−19).

## Fixed (19)

### URL upgrades (16) — place-accurate Commons

| ID | Was (problem) | Commons file |
| --- | --- | --- |
| `zz-jinshui-base` | 洛阳龙门错城 | `Erqi_Memorial_Tower.jpg` |
| `cs-ningxiang-optional` | 岳麓书院错点 | `少奇故里-万德鼎-花明楼_-_panoramio.jpg` |
| `hk-volcano-optional` | 世纪桥同城示意 | `海南国际旅游岛——海口.世界火山地质公园熔岩流保护区景观（西南向）_-_panoramio.jpg` |
| `bh-oldtown` | 银滩顶替老街 | `北海市_百年老街_-_panoramio.jpg` |
| `hz-shuangyue-optional` | 惠州西湖顶替双月湾 | `稔平半岛港口镇观景台往双月湾.jpg` |
| `jgz-park-optional` | 博物馆顶替护城河 | `荆州城东门外的护城河.jpg` |
| `wh-wuchang-base` | 黄鹤楼视角 | `武昌江滩_-_Wuchang_River_Beach_Park_-_2016.04_-_panoramio.jpg` |
| `cs-xiangjiang-base` | 橘子洲同廊 | `长沙湘江风光带_-_panoramio.jpg` |
| `nn-qingxiu-base` | 泛南宁图 | `青秀山风景区panoramio103204924.jpg` |
| `sz-nanshan-base` | 深圳湾大桥 | `深圳湾公园_shen_zhen_wan_gong_yuan_-_panoramio.jpg` |
| `kp-base` | 锦江里共用 | `Kaiping_diaolou_zili_village_2012_01.jpg` |
| `zs-base` | 翠亨故居共用 | `GD_…_QiJiang_Bridge_view_buildings_…_R12S_03.jpg` |
| `zs-park-optional` | 故居顶替公园 | `中山市岐江公园_qi_jiang_gong_yuan_-_panoramio.jpg` |
| `fh-night-riverside` | 日景顶替夜景 | `Fenghuang_County_night_view_20190727.jpg` |
| `snj-gate` | 木鱼同廊 | `宜昌滨江公园_-_panoramio.jpg` |
| `dx-shaoguan-gate` | 丹霞同廊 | `韶关市中心的马路边_-_By_科技小辛_-_panoramio.jpg` |

### Soft-caption only (3) — URL already place-accurate

| ID | Why drop soft |
| --- | --- |
| `zz-shaolin-optional` | Already `Shaolin_Monastery.jpg` |
| `kp-jinjiang-optional` | Already `Jinjiangli_0004.jpg` |
| `fs-chancheng-base` | Already 祖庙（禅城区内地标） |

## Remaining in scope (华中/华南 soft / gen)

| ID | Note |
| --- | --- |
| `zhuhai-optional` | Intentional same-file as 珠海主图 |
| `cs-shantou` | 小公园骑楼 — Openverse 无稳专用；港湾图仍同廊 soft |
| `qiziwan-optional` | **示意生成图** — Commons/Openverse 仍无棋子湾专用风景 |

Discovery raw: `research/raw/soft-upgrade-huazhong-huanan-*.json`. Pipeline FILES synced in `research/scripts/resolve-place-images.py`.

## Ops

- Sources: Openverse (`license=by,by-sa,cc0,pdm`, `source=wikimedia`) + MD5 1280px thumbs (Commons API 429).
- No Unsplash. Wrong-province soft treated as bug (`zz-jinshui-base` was Luoyang).
