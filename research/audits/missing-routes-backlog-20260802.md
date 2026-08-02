# Missing / thin routes backlog · 2026-08-02（updated after prefecture-wave e）

> Catalog size: **159** route ids (`content/route-provinces.ts` ↔ patches, 1:1).  
> Was 148 (post prefecture-d / Explore IA)；**+11 new** this wave.  
> Legend: **M** = no dedicated route · **T** = thin · **C** = dedicated covered · **D** = discoverability fixed.

---

## Closed this wave（prefecture e）

| Item | Status | id |
|------|--------|-----|
| 忻州县域 | **C** | `huabei-shanxi-xinzhou-county` |
| 扬州县域 | **C** | `huadong-jiangsu-yangzhou-county` |
| 镇江三山 | **C** | `huadong-jiangsu-zhenjiang` |
| 阿尔山 | **C** | `huabei-neimeng-aershan` |
| 安阳殷墟 | **C** | `huazhong-henan-anyang` |
| 焦作云台山 | **C** | `huazhong-henan-jiaozuo` |
| 南通濠河 | **C** | `huadong-jiangsu-nantong` |
| 嘉兴南湖/西塘 | **C** | `huadong-zhejiang-jiaxing` |
| 湖州南浔 | **C** | `huadong-zhejiang-huzhou` |
| 岳阳楼 | **C** | `huazhong-hunan-yueyang` |
| 邯郸丛台 | **C**（图 soft） | `huabei-hebei-handan` |

---

## Still open（next）

- **图升**：邯郸丛台专用 Commons；南通濠河岸线风景（现公交廊 soft）  
- **地级再挖**：运城/临汾、潍坊、皖南宣城、湖北荆州等（见 `research/notes/prefecture-depth/backlog.md`）  
- **走廊浅段**：G210 非延安段（低优先）  
- shortlist 仍「待评估」且未立项：天津海河加深、阿尔山已 C、景德镇独立（刻意并入婺源廊）等  

---

## Intentional skip（不变）

港澳 · 阿里/珠峰 · G219 极限 · G214/G210/G318 全线贯通 · 稻城强制主线 · 独库特种兵 · 色达/泸沽偏好 skip

---

## Method notes

- Count = keys in `route-provinces.ts`（须与 routes merge 1:1）.  
- Visibility: run `node research/scripts/dead-lead-audit.mjs`  
- Prefecture notes: `research/notes/prefecture-depth/`  
