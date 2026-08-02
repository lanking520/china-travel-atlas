# Plan × Playwright 验证报告

> 生成：2026-08-02T21:04:52.350Z
> Base：http://127.0.0.1:3000

**结果：17 PASS / 0 FAIL**（共 17 项）

| 项 | 状态 | 说明 |
|----|------|------|
| P0 preview reachable | PASS |  |
| P1 home: 全部景点 default + tabs (no cover filter pile) | PASS |  |
| P2 per-route budget estimate (not home BudgetBar) | PASS |  |
| P3 map drill: 地图选区 → 大区 → 省份 | PASS |  |
| P4 map drill: 省份 → 路线列表 | PASS |  |
| P5 click route → detail guide | PASS |  |
| P6 season filter via 添加筛选 on results | PASS |  |
| P7 返回 clears to 全部景点 catalog | PASS |  |
| P8 overview two-year page | PASS |  |
| P9 about explains map UX | PASS |  |
| P10 southwest long-trip detail has 回京/飞 | PASS |  |
| P11 no page JS errors | PASS |  |
| P12 desktop: SVG region path clickable | PASS |  |
| P13 search box finds 婺源 | PASS |  |
| P14 search box finds 九寨 | PASS |  |
| P15 名景 via 添加筛选 → dual-column RouteCards | PASS |  |
| P16 detail sticky section rail | PASS |  |

## 对照 Plan

- 默认「全部景点」：无筛选 dual-column 目录；「添加筛选」展开季节/行程/主题
- 「地图选区」cover：仅搜索 + 地图；点大区 → 省份 → 路线
- 结果页 identity chips 可移除；sticky「返回」回全部景点
- 搜索框：婺源 / 九寨可命中；名景经添加筛选 → `grid-cols-2`
- 旅行页：详细介绍 / 适合季节 / 路线地图 / 景点照片 / 旅行须知 / 预算
- 详情 sticky「本页目录」；路线指南+时间规划默认展开
- 两年总览含回京；长途含飞入/回京线索

截图目录：`research/raw/playwright-plan/`
