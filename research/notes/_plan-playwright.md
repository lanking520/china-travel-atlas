# Plan × Playwright 验证报告

> 生成：2026-08-02T23:41:40.847Z
> Base：http://127.0.0.1:3000

**结果：25 PASS / 0 FAIL**（共 25 项）

| 项 | 状态 | 说明 |
|----|------|------|
| P0 preview reachable | PASS |  |
| P1 home: catalog + 4 dim filters (no map tab) | PASS |  |
| P2 per-route budget estimate (not home BudgetBar) | PASS |  |
| P3 地区 sheet: 大区 → 可选省份 | PASS |  |
| P4 地区 sheet: 省份 → 路线列表 | PASS |  |
| P5 click route → detail guide | PASS |  |
| P6 season / trip dims on results | PASS |  |
| P7 返回 clears to 全部景点 catalog | PASS |  |
| P8 overview two-year page | PASS |  |
| P9 about explains region filter UX | PASS |  |
| P10 southwest long-trip detail has 回京/飞 | PASS |  |
| P11 no page JS errors | PASS |  |
| P12 desktop: 地区 sheet 华东 → 浙江 | PASS |  |
| P13 search box finds 婺源 | PASS |  |
| P14 search box finds 九寨 | PASS |  |
| P15 名景 via 主题· dim → dual-column RouteCards | PASS |  |
| P16 detail sticky section rail | PASS |  |
| P17 全部地区 clears region → clean catalog | PASS |  |
| P18 clean catalog hides sticky 返回 | PASS |  |
| P19 地区 sheet: 大区 optional, no map cover | PASS |  |
| P20 catalog paginates (lazy load-more) | PASS |  |
| P21 compose sticky「组合」+ embedded legs | PASS |  |
| P22 season via dim trigger + sheet 重置 (no identity chip) | PASS |  |
| P23 base 长居三门槛 + nearby 辐射 | PASS |  |
| P24 mobile bottom nav + theme dim 长居 | PASS |  |

## 对照 Plan

- 搜索在 筛选维度 之上；单目录「全部景点」dual-column；名景优先；分页懒加载
- 无「地图选区」tab / map cover；地区为第四维：大区必选路径 → 省份可选
- 地区 trigger：`地区·全部` / `地区·华东` / `地区·浙江`；无 region identity chips；清选用「全部地区」或重置
- 干净目录隐藏 sticky「返回」；有筛选时「返回」回全部景点
- 搜索框：婺源 / 九寨可命中；名景经 主题· sheet → `grid-cols-2`
- 旅行页：详细介绍 / 适合季节 / 路线地图 / 景点照片 / 旅行须知 / 预算
- 详情 sticky「本页目录」；路线指南+时间规划默认展开
- 长线组合：sticky「组合」→ #compose-legs 嵌入短线+衔接
- 筛选维度：季节/长短/主题/地区 sheets；默认全季节/全部/全部主题/全部地区；无 dim identity chips
- sticky hide-on-scroll: transform + hysteresis（防 flicker）
- mobile bottom nav 探索/两年/说明
- 长居枢纽：sticky「门槛」「辐射」；#gates 三门槛可见；nearbyLegs 可点
- 两年总览含回京；长途含飞入/回京线索

截图目录：`research/raw/playwright-plan/`
