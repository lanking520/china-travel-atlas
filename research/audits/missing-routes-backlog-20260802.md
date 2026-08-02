# Missing / thin routes backlog · 2026-08-02（updated after prefecture-wave f）

> Catalog size: **164** route ids (`content/route-provinces.ts` ↔ patches, 1:1).  
> Was 159 (post prefecture-e)；**+5 new** this wave（+丛台/濠河图升）。  
> Legend: **M** = no dedicated route · **T** = thin · **C** = dedicated covered · **D** = discoverability fixed.

---

## Closed this wave（prefecture f）

| Item | Status | id |
|------|--------|-----|
| 运城盐湖/关帝庙 | **C** | `huabei-shanxi-yuncheng` |
| 临汾广胜/尧都 | **C** | `huabei-shanxi-linfen` |
| 潍坊 | **C** | `huabei-shandong-weifang` |
| 荆州古城 | **C** | `huazhong-hubei-jingzhou` |
| 宣城/泾县 | **C** | `huadong-anhui-xuancheng` |
| 邯郸丛台图升 | **D** | `huabei-hebei-handan`（专用 Commons） |
| 南通濠河图升 | **D** | `huadong-jiangsu-nantong`（岸线风景） |

---

## Still open（next）

- **走廊浅段**：G210 非延安段（低优先）  
- shortlist 仍「待评估」且未立项：天津海河加深、景德镇独立（刻意并入婺源廊）等  
- 地级再挖：见 `research/notes/prefecture-depth/backlog.md`（本批晋南/鲁中/荆州/宣城已关）  

---

## Intentional skip（不变）

港澳 · 阿里/珠峰 · G219 极限 · G214/G210/G318 全线贯通 · 稻城强制主线 · 独库特种兵 · 色达/泸沽偏好 skip

---

## Method notes

- Count = keys in `route-provinces.ts`（须与 routes merge 1:1）.  
- Visibility: run `node research/scripts/dead-lead-audit.mjs`  
- Prefecture notes: `research/notes/prefecture-depth/`  
