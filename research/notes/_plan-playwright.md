# Plan × Playwright 验证报告

> 生成：2026-08-02T20:59:01.816Z
> Base：http://127.0.0.1:3000

**结果：17 PASS / 0 FAIL**（共 17 项）

| 项 | 状态 | 说明 |
|----|------|------|
| P0 preview reachable | PASS |  |
| P1 home shows brand + season filter + map CTA | PASS |  |
| P2 per-route budget estimate (not home BudgetBar) | PASS |  |
| P3 map drill: 大区地图 → 省份 | PASS |  |
| P4 map drill: 省份 → 路线列表 | PASS |  |
| P5 click route → detail guide | PASS |  |
| P6 season filter changes available provinces | PASS |  |
| P7 返回 to filters+map screen | PASS |  |
| P8 overview two-year page | PASS |  |
| P9 about explains map UX | PASS |  |
| P10 southwest long-trip detail has 回京/飞 | PASS |  |
| P11 no page JS errors | PASS |  |
| P12 desktop: SVG region path clickable | PASS |  |
| P13 search box finds 婺源 | PASS |  |
| P14 search box finds 九寨 | PASS |  |
| P15 名景 chip → dual-column RouteCards | PASS |  |
| P16 detail sticky section rail | PASS |  |

## 对照 Plan

- 探索：地图点选大区 → 省份 → 路线 → 攻略详情
- 季节筛选：春夏秋冬大按钮
- 搜索框：婺源 / 九寨可命中；名景 chip → `grid-cols-2` RouteCards
- 旅行页：详细介绍 / 适合季节 / 路线地图 / 景点照片 / 旅行须知 / 预算
- 详情 sticky「本页目录」；路线指南+时间规划默认展开
- 两年总览含回京；长途含飞入/回京线索
- 现代双列图卡 + 适度字号（非适老专用大按钮）

截图目录：`research/raw/playwright-plan/`
