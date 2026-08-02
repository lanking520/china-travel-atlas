# Dead-lead visibility audit · 2026-08-02

> Catalog after P2 fill + visibility fixes: **144** route ids.  
> Script: `node research/scripts/dead-lead-audit.mjs` → `research/raw/dead-lead-audit-20260802.json`  
> Class of bug: route exists but Explore filters (season / theme / province / search haystack) hide it — e.g. 婺源 under「当季=夏」.

## Method

Common entry paths checked:

1. **名景 chip** — `themes` includes `famous-scenic` (Explore clears season on theme toggle)
2. **长居 / 走廊 chips** — `long-stay` / `corridor`
3. **地图 → 省** with season filter (春/夏/秋/冬) — `route.seasons` must include selected season
4. **搜索** Chinese place name — title / summary / stops / `researchKeywords`
5. **`route-provinces.ts`** 1:1 with catalog ids

## Fixed this wave

| Dead lead | Cause | Fix |
|-----------|--------|-----|
| 婺源 `huadong-wuyuan-spring` | 仅春/秋；省内+当季夏筛没 | +`summer`（seasonGuide 已写夏湿热） |
| 厦鼓 `huanan-xiamen-winter` | 仅冬/春；文案写夏却未入 seasons | +`autumn`,`summer` |
| 凤凰 / 绍兴 / 雁荡 | 仅春/秋 | +`summer` |
| 北海 / 开平 / 丹霞 / 潮汕 | 缺夏 | +`summer` |
| 惠州西湖 | 无 `famous-scenic`；缺夏 | +theme +`summer` |
| 中山故居 | 无 `famous-scenic`；缺夏 | +theme +`summer`（P2） |
| 晋中太谷/祁县/乔家 | 平遥线标题不含检索词 | P2 overwrite 标题+停靠+keywords |
| P2 新线 9 ids | 新建缺口 | 名景/走廊 theme + 多季 + provinces |

## New routes (findable)

| id | 名景 | 走廊 | 搜索词例 |
|----|------|------|----------|
| `xinan-guizhou-fanjing` | ✓ | | 梵净 |
| `xinan-guizhou-libo` | ✓ | | 荔波 小七孔 |
| `huazhong-hubei-shennongjia` | ✓ | | 神农架 |
| `huazhong-hubei-enshi` | ✓ | | 恩施 |
| `xinan-guizhou-dong-corridor` | ✓ | ✓ | 西江 肇兴 |
| `huanan-guangdong-zhongshan` | ✓ | | 中山 翠亨 |
| `xibei-gansu-lanzhou-huanghe` | ✓ | | 兰州 中山桥 |
| `huanan-guangdong-chaoshan` | ✓ | | 潮州 汕头 |
| `xinan-sichuan-g318-mid` | | ✓ | G318 泸定 雅安 |
| `huabei-shanxi-pingyao-deep`（overwrite） | ✓ | ✓ | 平遥 太谷 祁县 乔家 |

## Remaining（intentional / low priority）

| Item | Why left |
|------|----------|
| 12× season-only lines（哈尔滨雪、三亚暖冬、呼伦贝尔夏、敦煌秋等） | 产品诚实：真·单季；名景 chip 不受当季影响（toggle 清 season）；省地图+错季仍会藏 — 可接受 |
| `huadong-jiangxi-lushan` 仅夏秋 | 避暑定位；春冬非默认 |
| `huabei-shanxi-wutai` 仅夏秋 | 台怀季节窗口；春冬非默认 |
| G318 三段无 `famous-scenic` | 走廊主题；搜「G318」可命中；不全线贯通 |
| 南京线命中搜「中山」（中山陵） | 非死链；广东中山亦上名景 |

## Counts

| Metric | Value |
|--------|------:|
| Catalog | 144 |
| Missing `route-provinces` | 0 |
| Famous-scenic | 30 |
| Famous hidden if season=summer | **0**（fix后） |
| High-intent search misses (audit list) | 0 |

## Verdict

**PASS** for P2 new ids + classic 婺源/厦鼓 season dead leads.  
Residual season-only products documented as intentional.
