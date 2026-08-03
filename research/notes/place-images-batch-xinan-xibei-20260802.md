# Place-images batch — 西南 + 西北 — 2026-08-02

**Scope:** soft attraction photos in 重庆/四川/贵州/云南/西藏/陕西/甘肃/青海/宁夏/新疆. Skip 左云（山西·华北）. Plateau/sensitive: prefer keep soft over wrong.

**Baseline:** soft ~97 after `3bd5aa9`; this batch ran after 华中/华南 + 华东 soft clears (`57d5e3a` / `4752e54`). Soft **57 → 29**.

**Fixed:** 28 soft → place-accurate Commons (Openverse `source=wikimedia` + MD5 thumbs; sparse verify).

| ID | Commons file | Notes |
| --- | --- | --- |
| `wl-cq-buffer` | Chongqing_Nightscape.jpg | Was 武隆三桥 — wrong city for 重庆缓冲 |
| `wl-town` | Wulong,_Chongqing.jpg | Wulong county town |
| `hg-guiyang-gate` | View_of_Guiyang,_Guizhou_from_Neighboring_Mountains.jpg | Was 黄果树 |
| `hg-anshun-rest` | A_tower_in_downtown_Anshun,_Guizhou,_China.jpg | Anshun downtown |
| `qd-kaili-gate` | Kaili_city,_guizhou,_china.JPG | Was 西江 |
| `gy-nanming-base` | Jiaxiu_building_and_Nanming_river_in_Guiyang.jpg | 甲秀楼 / 南明河 |
| `km-cuihu-base` | Southwest_part_of_Cuihu_Park,_Kunming_(20240214121712).jpg | 翠湖专用 |
| `lz-bayi-base` | Bayi,_Nyingchi,_Tibet,_China_-_panoramio_(1).jpg | 巴宜/八一镇 (was 色季拉) |
| `g318e-chengdu-buffer` | 雪山下的成都市天际线_Chengdu_skyline_with_snow_capped_mountains.jpg | Was panda |
| `g318m-chengdu` | （同上） | Was panda |
| `g318m-descend` | （同上） | Was panda |
| `le-leshan-base` | 凌云路江堤隔江看乐山城区_-_panoramio.jpg | 乐山城区 (was 大佛) |
| `g214-buffer-optional` | Xining_-_Dongguan_mosque_Minaret_2024.jpg | 西宁 (was 青海湖) |
| `g214-gonghe-optional` | Gonghe,_Hainan,_Qinghai,_China_-_panoramio_-_neverdance_(17).jpg | 共和（青海海南州） |
| `urumqi-museum` | 新疆博物馆_全景（2021）.jpg | Was skyline |
| `urumqi-bazaar-optional` | 新疆国际大巴扎是乌鲁木齐新十景.jpg | Was 红山入口 |
| `gaozhuang-optional` | 景洪_告庄西双景之街道与金塔同框_02.jpg | 告庄专用 |
| `fj-jinding-optional` | 梵净山红云金顶_-_panoramio.jpg | 红云金顶专用 |
| `xinghan-optional` | 兴汉胜境16.jpg | 兴汉胜境 (prior 兴隆洼拒绝) |
| `lb-base` | 荔波县城_-_panoramio.jpg | 荔波县城 (was 小七孔) |
| `hks-border-crossing` | Hekou-Kim_Thành_border_crossing_-_P1380333.JPG | 河口口岸 |
| `jz-airport-buffer` | Jiuzhaigou_Sichuan_China_Main-entrance-to-the-valleys-01.jpg | 沟口入口 |
| `menghai-day-optional` | 西双版纳勐海县打洛口岸_04.jpg | 勐海县域 (was 普洱茶特写) |
| `lz-huanghe-base` | *(soft remove only)* | 已有 Lanzhou skyline |
| `ya-baota-base` | *(soft remove only)* | 已有 Baota_Mountain |
| `g318e-xinduqiao-optional` | *(soft remove only)* | 已有 Xinduqiao |
| `hks-return-hekou` | *(soft remove only)* | 已有 Hekou,_Yunnan |
| `g214s-adapt` | *(soft remove only)* | 已有 独克宗屋顶 |

Raw: `research/raw/soft-upgrade-xinan-xibei-20260802.json`, `soft-upgrade-xinan-xibei-applied-20260802.json`.

## Remaining soft in 西南+西北 (7)

Intentional same-corridor / buffer / exit — no dedicated upgrade this round:

| ID | Why keep soft |
| --- | --- |
| `shapotou-optional` | Same Shapotou scenic duplicate |
| `fj-gate` | 铜仁缓冲 ↔ 梵净同廊 (no Tongren scenic) |
| `lz-buffer-optional` | 林芝空白休整 ↔ 色季拉同廊 |
| `g318-exit` | 出藏 ↔ 布达拉主题 |
| `qzr-exit` | 段末出藏 ↔ 青藏列车主题 |
| `g214s-exit` | 飞撤 ↔ 独克宗同城 |
| `mengla-buffer-optional` | 勐腊无县城风景 → 勐仑植物园同廊 |

Skipped / out of scope: `datong-zuoyun-optional` (山西).
