# 路线对照 Plan 审核清单

对照 `/Users/richpige/.cursor/plans/中国旅游地图网站_33daee57.plan.md`。

## 受众
- 约 60 岁、腿脚好、身体健康；北京有家；月旅行约 2 万
- 文案：活跃退休、实用；可提缆车/高原为选项与风险；不默认行动不便

## 每条路线必须满足
1. **字段完整**：region / seasons[] / tripType / fromHome / daysLabel / transport / budgetLabel / coverImage / summary / stops[]
2. **站点**：有序；每站 lat/lng、pace(slow|fast)、summary、tips、image
3. **长短**：short=当天或1–3天；long=约3周–3月或明确多日慢住；长旅行文案含回京/飞回北京
4. **fromHome**：北京周边短途应为 true；远途 false，并写飞/高铁抵达
5. **季节**：seasons 合理；seasonGuide 说明为何适合、避开什么
6. **详情**：introduction 3–5 段；notices 5–8 条具体须知；gallery ≥1
7. **地图**：站点坐标可信，可供 RouteOverviewMap
8. **预算**：短途「本趟约」；长旅行对照月约 2 万
9. **语气**：不用轮椅/无障碍当默认主叙事

## 输出（禁止直接改 content/route-details.ts 与 content/routes.ts）
写到：
- `research/audits/<bundle-id>.md` — 每条 PASS/FAIL/PARTIAL + 改了什么
- `content/audit-patches/<bundle-id>.ts` — `export const detailPatches` + 可选 `export const routeFieldPatches`

```ts
import type { Route } from '../types';
import type { RouteDetailFields } from '../route-details';

export const detailPatches: Record<string, Partial<RouteDetailFields>> = { /* id → fields */ };
/** 仅覆盖需要改的顶层字段，如 summary/transport/budgetLabel/fromHome */
export const routeFieldPatches: Record<string, Partial<Route>> = { /* id → partial */ };
```
