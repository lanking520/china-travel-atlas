# Plan 终验 · 旅行详情页 / 地图纵览 / 内容字段

对照：`/Users/richpige/.cursor/plans/中国旅游地图网站_33daee57.plan.md`（尤其「页面结构 · 旅行页」「地图路线纵览」「图文并茂」「每条路线数据」）  
证据：`app/routes/[id]/page.tsx`、`lib/route-detail.ts`、`content/route-details.ts`、`content/types.ts`、`content/index.ts`、`components/RouteOverviewMap.tsx`、`components/StopTimeline.tsx`、`lib/map-projection.ts`、`research/受众画像.md`  
方法：只读核对代码与内容语料（解析 35 条路线 + details）；**未跑浏览器**；**未改产品代码**  
日期：2026-08-02

## 总评

旅行详情页 **八大必备区块均由同一模板渲染**，35/35 路线在 `content/route-details.ts` 有完整 `introduction` / `seasonGuide` / `notices` / `gallery`，且 **103/103 站点均有 `lat`/`lng`/`pace`**。地图纵览（慢/快标记、短途家出发、点击滚到站、高德外链）与 gallery/notices **回退逻辑均已实现**。相对 Plan 的主要偏差是 **地图不在页顶第一眼**（封面+介绍+季节在前），以及可选的「放大看全图」未做。受众语气整体活跃退休；局部仍有「无障碍」来源注记与「腿脚不便者慎往」风险句，**不构成轮椅默认主叙事**。

语料快照：8 大区 · **35** 路线 · **103** 站 · slow 71 / fast 32 · `fromHome` 7（含 4 条京郊短途 + 3 条华北长线）

## PASS / PARTIAL / FAIL

| # | 检查项 | 状态 | 证据 |
|---|--------|------|------|
| 1 | 详情页结构含：详细介绍、适合季节、路线地图、景点照片、行程、旅行须知、交通、预算 | **PASS** | `app/routes/[id]/page.tsx` `<h2>` 顺序：`详细介绍` → `适合季节` → `路线地图` → `景点照片` → `行程与景点` → `旅行须知` → `交通方式` → `预算参考`（后两者标题略扩写，语义对齐）。另有条件块 `快览说明`、`参考来源与复核` |
| 2 | 模板对全部路线生效（非个别硬编码） | **PASS** | `generateStaticParams` = `routes.map`；`dynamicParams = false`。文案经 `buildIntroduction` / `buildSeasonGuide` / `buildNotices` / `buildGallery` + `StopTimeline` / `RouteOverviewMap` |
| 3 | 站点含 `lat` / `lng` / `pace` | **PASS** | `content/types.ts` `Stop` 必填三字段。解析 `routes.ts` + `patches/*`：**0** 条缺 lat/lng/pace；pace 仅 `slow`\|`fast` |
| 4 | 路线必备展示字段：天数、交通、预算、配图、有序站点 | **PASS** | 35 条均有 `daysLabel`、`transport`、`budgetLabel`、`coverImage`、非空 `stops[]`。预算区另写「家庭月旅行预算约 2 万元」 |
| 5 | `gallery[]` 模型 + 回退 | **PASS** | 类型 `GalleryImage`；`buildGallery`：自定义 gallery → 站 `image` → `coverImage`。现网 **35/35 自定义 gallery**（回退未触发但仍有代码路径）。`stopWithImage` 保证时间轴有图（现 103/103 站自带 `image`） |
| 6 | `notices` 回退 / 合并 | **PASS** | `buildNotices`：自定义 + 青藏/长途/`fromHome` extras + `DEFAULT_NOTICES`，再 `Set` 去重。现 **35/35 有自定义 notices**；缺省时仍保证 ≥4 条默认须知 |
| 7 | `introduction` / `seasonGuide` 回退 | **PASS** | 缺省时由 summary+站点 / 季节标签拼出可读文案。现 **35/35 均有自定义**（经 `route-details` merge） |
| 8 | 地图路线纵览：顺序连线、慢圆/快菱、点击滚到站 | **PASS** | `RouteOverviewMap` + `projectStops`/`polylinePoints`；慢=`circle` 绿、快=`rotate(45)` 橙菱；`scrollToStop` → `#stop-{id}`（`StopTimeline` 设 id） |
| 9 | 短途标「家 → 目的地」 | **PASS** | `fromHome && tripType === "short"` 时插入北京家方点（`39.9042,116.4074`）再画折线 |
| 10 | 示意地图、不接实时路况；外链高德 | **PASS** | 页脚文案「不提供实时路况」；`amapUrlForRoute` → `uri.amap.com/marker`（首站）；CTA「在高德地图打开」 |
| 11 | Plan：打开后**第一眼**是纵览图，再图文日程 | **PARTIAL** | Plan「页顶地图路线纵览」。实现：标题/摘要/标签/**封面大图** → 详细介绍 → 适合季节 → **才到路线地图**。功能齐全但位置偏中 |
| 12 | Plan 可选「放大看全图」 | **PARTIAL** | 未实现全屏/放大控件；SVG `viewBox` 自适应宽度，可 pinch 浏览器缩放，但无适老专用按钮 |
| 13 | 受众 ~60 活跃（非轮椅默认） | **PASS**（小瑕疵见下） | `research/受众画像.md` + about「不默认行动不便」。详情主文多见「体力好/脚力好/能走」。内容语料 **0×轮椅**；「无障碍」仅出现在少数 `sources` 注记（如杭苏）；「腿脚不便者慎往」限承德外庙台阶**风险提示**；「少走路」用于索道/观光车**选项句**，非全站主调 |

## 详情页区块 ↔ 代码映射

| 用户要求 | 页面标题 | 数据来源 |
|----------|----------|----------|
| 详细介绍 | 详细介绍 | `buildIntroduction(route)` ← `introduction` 或拼装 |
| 适合季节 | 适合季节 | `route.seasons` + `buildSeasonGuide` |
| 路线地图 | 路线地图 | `RouteOverviewMap` + 可选高德链 |
| 景点照片 | 景点照片 | `buildGallery` |
| 行程 | 行程与景点 | `StopTimeline`（`stopWithImage`） |
| 旅行须知 | 旅行须知 | `buildNotices` |
| 交通 | 交通方式 | `route.transport` + `fromHome`/`long` 补句 |
| 预算 | 预算参考 | `route.budgetLabel` + 月 2 万提示 |

样例抽查（12 ids：`mutianyu-day`、`tianjin-day`、`chengde-2d`、`huabei-shanxi-loop`、`yunnan-dali-lijiang`、`xibei-dunhuang-zhangye`、`qingzang-lhasa-slow`、`huadong-hangzhou-suzhou`、`huazhong-zhangjiajie`、`huanan-sanya-winter`、`xinan-chongqing-slow`、`dongbei-harbin-snow-3d`）：均有 detail 四字段、≥1 站、pace 集合合法、galleryLen ≥2。

## 地图纵览（Plan §地图路线纵览）细项

| Plan 要求 | 状态 | 说明 |
|-----------|------|------|
| 长/短途页均有纵览 | PASS | 同一组件，无 tripType 分支隐藏 |
| 站点顺序 + 连线 | PASS | 按 `stops` 数组顺序投影折线 |
| 慢住大圆 / 快看菱形 | PASS | 绿圆 / 橙菱 + 图例「慢游」「快览」 |
| 短途标家→目的地 | PASS | 仅 `fromHome` **短途**；长途 `fromHome`（如山西环线）不插家点 |
| 点击站点滚到说明 | PASS | `scroll-mt-24` + smooth scroll |
| 字号与点够大 | PASS | r=14 / 20×20；标签 `text-[14px]` |
| 不依赖双指复杂操作 | PASS | 单击即可；无双指专属手势 |
| 可选放大看全图 | PARTIAL | 缺专用控件 |
| 示意底图 SVG/Canvas | PASS | SVG；无 MapLibre |
| 开车外链高德 | PASS | 首站 marker URI |
| 成书复用纵览 | n/a 本期 | 二期；组件已可复用 |

## Gallery / Notices 回退验证（代码路径）

```64:75:lib/route-detail.ts
export function buildGallery(route: Route): GalleryImage[] {
  if (route.gallery && route.gallery.length > 0) return route.gallery;
  const fromStops = route.stops
    .filter((s) => s.image)
    .map((s) => ({
      url: s.image as string,
      caption: s.name,
      stopId: s.id,
    }));
  if (fromStops.length > 0) return fromStops;
  return [{ url: route.coverImage, caption: route.title }];
}
```

```48:62:lib/route-detail.ts
export function buildNotices(route: Route): string[] {
  const custom = route.notices?.filter(Boolean) ?? [];
  // ... region / long / fromHome extras ...
  const merged = [...custom, ...extras, ...DEFAULT_NOTICES];
  return [...new Set(merged)];
}
```

合并链路：`routeDetails` ← `audit-patches` `getMergedRouteDetails()` ← `content/index.ts` 写入每条 `Route`。缺 `route-details` 条目时仍靠 `build*` 回退保证页面非空——当前 **无缺条目**（details keys = route ids = 35）。

## 受众语气抽查

| 现象 | 出现面 | 判断 |
|------|--------|------|
| 「体力好 / 脚力好 / 腿脚好」等活跃表述 | route-details 多处（约 29 命中） | 符合画像 |
| 「轮椅」 | 内容 0 | 好 |
| 「无障碍」 | `routes.ts` sources 注记约 5 处（杭苏等） | 来源元数据偏旧；主介绍已改电瓶车/游船实用向（见区域 audit） |
| 「腿脚不便者慎往」 | 承德普宁寺/外庙 tips + details | 单点台阶风险，可保留；勿扩成默认人设 |
| 「少走路」 | 张家界/威海/南山等站 summary | 作索道/观光车选项，可接受；避免写成全线主口号 |

## 与旧笔记差异

`research/notes/_plan-audit.md` 曾记 **`gallery[]` 未建模** → **已过时**。现 `types.Route.gallery` + 全库填充 + 详情页「景点照片」区块均已落地。

## 剩余缺口（真实、非 blocker）

1. **地图位置**：若严格对齐 Plan「第一眼纵览」，可将 `RouteOverviewMap` 上移到封面后、介绍前（或替换封面为地图首屏）——属产品排序，非缺功能。  
2. **无「放大看全图」**：可选加全屏/新标签打开 SVG。  
3. **杭苏 sources 无障碍措辞**：建议改注记为「环湖电瓶车/游船」，与活跃退休主文一致（区域 audit 已提）。  
4. **回退路径无活数据覆盖**：建议日后加 1 条无 gallery/notices 的 fixture 单测，防止误删 `buildGallery`/`buildNotices`。

## Verdict summary

| PASS | PARTIAL | FAIL |
|------|---------|------|
| 八区块模板、全库 lat/lng/pace、gallery/notices/intro/season 回退与填充、地图交互与高德、受众主调 | 地图非页顶第一眼；无放大全图 | — |

**Overall：** 旅行详情 / 地图纵览内容要求 **可上线**；PARTIAL 为版式优先级与可选增强，**无 FAIL**。
