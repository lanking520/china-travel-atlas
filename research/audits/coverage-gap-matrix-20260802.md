# Coverage gap matrix · 2026-08-02

> Pre-wave catalog: **85** → after wave-a: **106** → after wave-b: **114** → after wave-c: **116**.  
> Legend: **C** = dedicated/named covered · **T** = thin / only as stop or longstay · **M** = missing.

## Headline

| Bucket | Pre-wave | Post wave-a | Post wave-b | Post wave-c |
|--------|----------|-------------|-------------|-------------|
| Catalog size | 85 | 106 | 114 | **116** |
| 无锡/宁波/东莞/佛山 | 4 M | 4 M | **C** | **C** |
| G214 / G210 | M | M | **C** (西宁+延安浅段) | **C** (+滇西北浅住) |
| 北京市区慢游 | M/T | M/T | **C** | **C** |
| 青藏铁路主题 | M | M | **C**（非自驾） | **C** |
| 京沪沿海主题串 | T | T | T | **C** |
| 阿里 / 珠峰 | — | skip | **仍不立项** | **仍不立项** |

Casual spot-checks（无锡、颐和园、G214/G210、青藏铁路、京沪沿海廊）应能在省/主题 `corridor` 下找到。

---

## A. 省/自治区/直辖市

All 31 provinces still have ≥1 primary route. Wave-c adds：京沪沿海跨津鲁苏沪主题廊、云南香格里拉（G214 南端浅住）。

---

## B. 一二线 / 新一线城市矩阵

| 城市 | 状态 | id |
|------|------|-----|
| 北上广深 | C | 北京城区 `huabei-beijing-city-slow`；深圳见 wave-a |
| 成渝杭武西苏津 | C | — |
| 南京长沙郑州青沈合福厦 | C | — |
| 济哈大连石太昌昆贵邕春海呼 | C | — |
| 无锡 / 宁波 / 东莞 / 佛山 | **C** | `huadong-jiangsu-wuxi`, `huadong-zhejiang-ningbo`, `huanan-guangdong-dongguan`, `huanan-guangdong-foshan` |

---

## C. Famous corridors

| 走廊 | 状态 | id |
|------|------|-----|
| G318 拉萨–林芝 | C | `qingzang-g318-lhasa-nyingchi` |
| 林芝河谷 | C | `qingzang-nyingchi-slow` |
| G318 川藏东段浅尝 | C | `xinan-sichuan-g318-east` |
| 江南水乡 | C | `huadong-jiangnan-water-towns` |
| 丝绸之路 | C | `national-silkroad-slow` |
| G214 西宁入口浅段 | **C** | `qingzang-g214-xining-taste`（不南下玉树贯通） |
| G214 滇西北香格里拉浅住 | **C** | `yunnan-g214-shangri-la-taste`（飞入；不公路贯通） |
| G210 延安浅段 | **C** | `huazhong-shaanxi-g210-yanan` |
| 青藏铁路体验 | **C** | `qingzang-railway-slow` |
| 京沪沿海主题串 | **C** | `national-jinghu-coast-slow` |
| 港澳 | M | 产品范围外 |

---

## D. Wave-c delivered (2 ids)

**New (2):**  
`national-jinghu-coast-slow`, `yunnan-g214-shangri-la-taste`

**Commons polish (wave-b/c soft upgrades):**  
可园、圆明园、北海、颐和园长廊、蠡园、梁园、宁波老外滩/东钱湖、延安纪念馆、西宁东关等升专用 Commons。  
后补：莞城骑楼、虎门鸦片战争博物馆、岭南天地（东华里）、无锡古运河、普达措碧塔海、枣园、青藏铁路西宁适应、京沪廊出京（十七孔桥）——已出 `PLACE_SOFT_IDS`。  
仍 soft（同城/同廊示意，非错省）：梁溪/海曙/禅城 base、G214 共和/缓冲、宝塔区 base、香格里拉适应/飞撤、青藏出藏等。

Evidence: `research/notes/multi-discovery/coverage-wave-20260802c.md`

---

## E. Biggest remaining holes

1. **港澳** — 产品范围外  
2. **阿里 / 珠峰** — 适老默认 **不立项**  
3. G210 其他浅段（非延安）— 低优先  
4. 更早 wave-a 省会同城 soft（武汉江汉、福州西湖等同城示意）— 低优先再配图  

