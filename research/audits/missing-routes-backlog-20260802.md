# Missing / thin routes backlog · 2026-08-02（updated after prefecture-wave d）

> Catalog size: **148** route ids (`content/route-provinces.ts` ↔ patches, 1:1).  
> Was 144 (post famous-P2 / dead-lead)；**+4 new** this wave.  
> Legend: **M** = no dedicated route · **T** = thin · **C** = dedicated covered · **D** = discoverability fixed.

---

## Closed this wave（prefecture d）

| Item | Status | id |
|------|--------|-----|
| 洛阳孟津/偃师 | **C** | `huazhong-henan-luoyang-county`（独立浅线） |
| 开封 | **C** | `huazhong-henan-kaifeng` |
| 苏州县域 | **C** | `huadong-jiangsu-suzhou-county` |
| 大理州表格式日归 | **C** | `xinan-yunnan-dali-daytrips`（非长居；与 `longstay-dali` 分卡） |

---

## Still open（next）

忻州县域表（五台减负已有） · 扬州县域补强 · 其余地级深挖见 prefecture backlog …

---

## Intentional skip（不变）

港澳 · 阿里/珠峰 · G219 极限 · G214/G210/G318 全线贯通 · 稻城强制主线 · 独库特种兵 · 色达/泸沽偏好 skip

---

## Method notes

- Count = keys in `route-provinces.ts`（须与 routes merge 1:1）.  
- Visibility: run `node research/scripts/dead-lead-audit.mjs`  
- Prefecture notes: `research/notes/prefecture-depth/`
