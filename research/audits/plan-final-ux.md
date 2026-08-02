# Plan 终验 · UX / 信息架构

对照：`/Users/richpige/.cursor/plans/中国旅游地图网站_33daee57.plan.md`  
证据：`components/ChinaMapExplorer.tsx`、`RegionMap.tsx`、`ExploreClient.tsx`、`app/page.tsx`、`app/about/page.tsx`、`research/notes/_plan-playwright.md`、`research/scripts/ux-plan-verify.mjs`  
日期：2026-08-02 · **只读审计，未改产品代码**

## 总评

主探索路径已落地为 **地图钻取（全国→大区→省→路线→详情）+ 常驻季节大按钮**，Playwright 计划验证 **13/13 PASS**。与原 Plan「三组对等筛选条 + 即时列表」相比，**旅途长短（tripType）不再作为一级筛选项**（数据与徽章仍在）→ 整体 **PARTIAL**（map+season 合格，tripType 同级筛选缺席）。

## PASS / PARTIAL / FAIL

| # | 检查项 | 状态 | 证据 |
|---|--------|------|------|
| 1 | 全国→大区→省份→路线→详情 drill-down，且为主要探索 UX | **PASS** | `ChinaMapExplorer` 的 `MapLevel`：`china` → `region` → `province`；省页 Link → `/routes/{id}/`。`ExploreClient` 仅挂载该组件；`app/page.tsx` 首页主区即此。`about` 文案写明「地图点大区→省→路线」。Playwright P3–P5、P9、P12 PASS |
| 2 | 季节筛选（春夏秋冬）始终可用、大按钮 | **PASS** | `ChinaMapExplorer` 顶部「按季节看路线」区块不随层级隐藏；`SeasonChip` `min-h-[48px]` + `text-lg`；默认 `getCurrentSeason()`。P1、P6 PASS |
| 3 | 面包屑 / 返回上一级 | **PASS** | `aria-label="地图层级"`：全国 / 大区可点；另有「← 回全国地图」「← 回{大区}省份」。P7 PASS |
| 4 | 省份视图可进入路线详情 | **PASS** | 省层卡片 CTA「查看详细旅行攻略 →」→ `/routes/${route.id}/`；详情含介绍/季节/地图/景点/须知/预算（P5） |
| 5 | 适老：大触控目标；不依赖隐藏侧栏搜索 | **PASS** | 区按钮 `min-h-[64|72px]`、攻略 CTA `min-h-[52px]`、面包屑 `min-h-[44px]`；无 `search`/`sidebar`/`drawer`。Header 仅「探索 / 两年怎么走 / 说明」平铺链接 |
| 6 | tripType（长旅行/短途）与地区、季节同级筛选 | **PARTIAL** | 原 Plan 三大筛选项 peer。现 UX：**地图钻取 = 地区**，**季节常驻**；`tripType` 仅卡片徽章（`TRIP_TYPE_LABELS`）与数据字段，**无一级筛选**。`FilterBar.tsx` 仍含「旅途长短」但 **未被 `ExploreClient` 引用**（死代码） |

## 与原 Plan IA 的差异（说明）

| Plan 设想 | 当前实现 |
|-----------|----------|
| 固定筛选条：地区 + 季节 + 长短 → 下方列表即时更新 | 地图层级钻取为主路径；季节条常驻；长短不作筛选 |
| 快捷入口：「从北京家出发的短途」「现在当季推荐」 | **未做**首页一键预设（仅数据 `fromHome` / 默认当季） |
| 点地图 = 设地区筛选项（仍可看跨区列表） | 点地图 = **进入该大区层**（非 flat filter） |

判断：map-first + season 对父母更直观，故 #1/#2/#5 可 PASS；#6 按用户备注标 **PARTIAL**（非 FAIL）。

## 剩余缺口

1. **tripType 一级筛选缺席** — 无法「只看短途 / 只看长旅行」跨省浏览；若要恢复，可接回 `FilterBar` 的 tripType 段或在省层加长短芯片（勿再塞隐藏搜索）。
2. **快捷预设未落地** — Plan「从北京家出发的短途」「当季推荐」减少组合负担；首页无对应 CTA。
3. **`FilterBar` 死代码** — 含完整三组筛选但未挂载；易与真实 UX 混淆，后续要么接入要么删/归档。
4. **原「筛选条下方全量列表」模式已弃用** — 无筛选态的跨区路线总表；探索必须经大区→省（可接受的产品选择，但与书面 Plan 不完全一致）。
5. **SVG 区块在小屏** — 验证脚本偏爱文字大区按钮；`RegionMap` 路径可点（P12 桌面 PASS），移动端主靠下方大按钮兜底（已具备，非 blocker）。

## Playwright 摘要

见 `research/notes/_plan-playwright.md`：**13 PASS / 0 FAIL**（P0–P12），覆盖 drill、季节、面包屑、详情、about、西南长途飞/回京线索。

## 结论

| 维度 | 结论 |
|------|------|
| 主探索 drill-down | PASS |
| 季节大按钮常驻 | PASS |
| 面包屑返回 | PASS |
| 省→详情可达 | PASS |
| 适老（大目标、无侧栏搜索） | PASS |
| tripType 同级筛选 | **PARTIAL** |
| **本审计整体** | **PARTIAL**（map+season+适老合格；长短筛选与快捷入口为剩余 Plan 差距） |
