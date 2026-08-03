# Place-images batch — 华北 + 东北 — 2026-08-02

**Scope:** soft / wrong-landmark stops in 北京·天津·河北·山西·内蒙古·辽宁·吉林·黑龙江. Gen trio（棋子湾/乐亭/左云）untouched. No Shandong / other-region softs.

**Method:** Openverse (`license=by,by-sa,cc0,pdm`, `source=wikimedia`) → Commons path / 1280px thumb. Sparse Range-GET verify (Wikimedia 429 heavy; MD5 thumbs trusted when source URL came from live Openverse). Pipeline: `resolve-place-images.py` `FILES` synced.

## Fixed (16)

| ID | Was | Now (Commons) |
| --- | --- | --- |
| `lianfengshan-optional` | 北戴河全景 soft | `从联峰山望海亭看北戴河区.jpg` |
| `xz-ningwu-optional` | 雁门敌楼 soft | `芦芽山自然保护区内五坝线——2012-04-30_-_panoramio.jpg` |
| `xz-dingxiang-optional` | 雁门 soft | `Dingxiang_Yan_Xishan_Jiuju_2013.08.28_15-27-08.jpg`（河边） |
| `xz-county-base` | 代县阿育王塔 soft | `…元好問墓的野史亭.jpg`（忻府） |
| `ty-yingze-base` | 太原 skyline soft | `太原迎泽公园_-_panoramio.jpg` |
| `ty-fenhe-optional` | 太原 skyline soft | `Fen_River_Park_Taiyuan_20110709.jpg` |
| `taiyuan-hub` | soft 标签 | 保留 `Taiyuan_Shanxi_China.jpg`；仅出 soft |
| `hrb-daoli-base` | soft 标签 | 保留索菲亚（道里区）；仅出 soft |
| `hh-xilamuren-optional` | 呼伦贝尔草浪 soft | `希拉穆仁草原_保护区_-_panoramio.jpg` |
| `hrb-central-street` | 索菲亚共用 | `哈尔滨_中央大街_-_panoramio.jpg` |
| `putuo-zongcheng` | 避暑山庄错标 | `Putuo_Zongcheng_Temple_20120804.JPG` |
| `qingchui-peak` | 避暑山庄错标 | `磬锤峰20120804.JPG` |
| `ty-jinci` | **平遥**错城 | `Jinci_Temple_(54572159327).jpg` |
| `ty-shanxi-museum` | 太原 skyline | `Shanxi_Museum_20110719.jpg` |
| `cc-puppet-palace` | 长春 skyline | `25279-Changchun,_Museum_of_the_Imperial_Palace_of_Manchukuo.jpg` |
| `lf-base` | 临汾博物馆门共用 | `临汾滨河新城，10月2010.jpg` |

出 soft：上表 9 个原 `PLACE_SOFT_IDS`（不含运城馆）。

## Still soft in region

| ID | Why |
| --- | --- |
| `yc-museum-optional` | 无稳定运城博物馆外立面；Openverse 易串国家馆/他省器物；仍关帝庙同廊示意 |

Gen trio：未动。

## Raw

- `research/raw/soft-upgrade-huabei-dongbei-20260802.json`
- `research/raw/soft-upgrade-huabei-dongbei-applied-20260802.json`
