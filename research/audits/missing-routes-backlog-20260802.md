# Missing / thin routes backlog · 2026-08-02（updated after famous-stitch）

> Catalog size: **123** route ids (`content/route-provinces.ts` ↔ patches, 1:1).  
> Was 117 (post Banna+Hekou–Sapa); **+6 new** this wave (九寨/凤凰/乌市/庐山/绍兴/五台).  
> Overwrites (same id): 婺源串景德镇、厦鼓升土楼、乐山峨眉打名景。  
> Legend: **M** = no dedicated route · **T** = thin · **C** = dedicated covered · **D** = discoverability fixed (was C but hard to find).

---

## User-cited places (东南 + 乐山) — status after fix

| Place | Was | Now | How to find |
|-------|-----|-----|-------------|
| 婺源 | C but **hidden** (spring-only + default 当季夏) | **D** 标题「婺源景德镇」+ 名景 + 春秋 | Explore → 快捷「名景」或 华东→江西 |
| 景德镇 | **M** | **C**（串入婺源廊，非孤儿卡） | 同上；站名含陶瓷博物馆 |
| 福建土楼 | **T**（厦线可选） | **D/C** 标题「厦门鼓浪屿 · 土楼浅挂」 | 名景 / 华南→福建 |
| 厦门/鼓浪屿 | C 标题弱、仅冬 | **D** 标题含鼓浪屿；冬+春；名景 | 名景 / 福建 |
| 乐山、峨眉 | C 春秋、无主题 | **D** 名景；夏也可；标题已含两名 | 名景 / 西南→四川 |

**Root cause of「没有」:** Explore 默认启用「当季」季节筛，夏日把春/冬名景整表滤空；名景无独立快捷。

---

## P0 · Must-have

| Item | Status | id |
|------|--------|-----|
| 九寨沟（+黄龙可选） | **C** | `xinan-sichuan-jiuzhaigou` |
| 凤凰古城独立（+芙蓉挂） | **C** | `huazhong-hunan-fenghuang` |
| 乌鲁木齐市区慢住 | **C** | `xibei-xinjiang-urumqi-city` |

---

## P1 · Closed this wave

| Item | Status | id / note |
|------|--------|-----------|
| 庐山牯岭 | **C** | `huadong-jiangxi-lushan` |
| 景德镇 | **C** | stitched into `huadong-wuyuan-spring` |
| 绍兴古城 | **C** | `huadong-zhejiang-shaoxing` |
| 五台山适老减负 | **C** | `huabei-shanxi-wutai` |
| 土楼独立 | — | Prefer stitch on厦鼓；不另开孤儿 |

---

## P1 · Still open (high search)

武夷山风景区 · 北海银滩(+涠洲可删) · 普陀/舟山 · 曲阜三孔 · 开平碉楼 · 韶关丹霞 · 九华山 · 千岛湖 · 武隆独立 · 黄果树独立 · 梵净/荔波 · 神农架/恩施 · 西江/肇兴独立 · 常州 · 温州/雁荡 · 惠州 · 中山 · 兰州黄河独立 · 汕头潮州加深 · G318 川藏中段浅尝 …

---

## Intentional skip（不变）

港澳 · 阿里/珠峰 · G219 极限 · G214/G210/G318 全线贯通 · 稻城强制主线 · 独库特种兵 · 色达/泸沽偏好 skip

---

## Suggested next

1. 名景再补：武夷 / 曲阜 / 丹霞山 / 北海（串廊优先）  
2. Prefecture：晋中太谷祁县 ↔ 平遥  
3. Explore：可选搜索框（标题+站名）进一步降低钻取成本  

---

## Method notes

- Count = keys in `route-provinces.ts`（须与 routes merge 1:1）.  
- 西双版纳 enrich + 河口→沙巴已在 main，本波未重复立项。
