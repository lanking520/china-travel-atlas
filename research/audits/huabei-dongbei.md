# 华北 + 东北 路线审核

对照 `research/audits/CHECKLIST.md` 与 plan。受众：约 60 岁、腿脚好；北京有家。长旅行须含回京；北京周边短途 `fromHome: true`。

未直接改 `content/route-details.ts` / `content/routes.ts`；改动在 `content/audit-patches/huabei-dongbei.ts`。

---

## mutianyu-day — PASS

| 项 | 结论 |
|----|------|
| 字段 / 站点 / 坐标 | 完整；单站坐标可信 |
| 长短 / fromHome | short · fromHome true |
| 季节 / 详情 / 预算 | 春秋主推合理；intro 4 段、notices 7、gallery≥1；本趟预算 |

**Issues：** 无硬伤。小红书素材（缆车/摆渡/带父母）已写入。

**Fixes applied：** 无（已达标）。

---

## tianjin-day — PASS

| 项 | 结论 |
|----|------|
| 字段 / 站点 | 五大道+海河完整 |
| 长短 / fromHome | short · fromHome true；城际写清 |
| 详情 / 预算 | intro/notices/gallery 达标；本趟预算；当晚返京 |

**Issues：** 无。

**Fixes applied：** 无。

---

## chengde-2d — PARTIAL

| 项 | 结论 |
|----|------|
| 字段 / fromHome | short · fromHome true；交通合理 |
| 详情 | intro/notices/gallery 达标 |
| 摘要 | summary 写「两晚更轻松」，与 `daysLabel`「2天1晚」不符 |

**Issues：**
1. summary 与天数标签不一致。
2. 站点 tips 仍有「腿脚不便者慎往」（基线 routes，未整表覆盖 stops）。

**Fixes applied：**
- `routeFieldPatches`：改 summary，对齐 2 天 1 晚并强调结束后返京。
- `detailPatches`：略加强 intro 第四段（午休节奏 / 返京堵车）。

---

## gubei-overnight — PASS

| 项 | 结论 |
|----|------|
| 长短 / fromHome | short · fromHome true |
| 季节 | 秋叶冬灯合理 |
| 详情 | intro 3 段、notices 7、司马台时限清楚；本趟预算 |

**Issues：** 无硬伤。

**Fixes applied：** 无。

---

## huabei-shanxi-loop — PASS

| 项 | 结论 |
|----|------|
| 长短 / fromHome | long · fromHome true（京藏自驾近中程，符合 plan） |
| 回京 | summary / intro / notices 均含回京 |
| 预算 | 对照月约 2 万 |

**Issues：** 无。

**Fixes applied：** 无。

---

## huabei-neimeng-summer — FAIL

| 项 | 结论 |
|----|------|
| fromHome | **错误为 true**——主体为飞海拉尔远途，应为 false |
| 回京 / 预算 | 有飞回北京；月预算 OK |
| 详情 | 达标但可再强调飞入飞出与回京休整 |

**Issues：**
1. `fromHome` 应为 false（远途飞入）。
2. intro 可更明确「非北京周边当日往返」。

**Fixes applied：**
- `routeFieldPatches`：`fromHome: false`；summary 开篇点明飞海拉尔。
- `detailPatches`：加强 introduction / seasonGuide / notices（飞入、包车、回京休整）。

---

## huabei-shandong-coast — PARTIAL

| 项 | 结论 |
|----|------|
| 长短 / fromHome | long · fromHome true（高铁近中程，可接受） |
| 回京 / 预算 | 有回京；月预算 OK |
| 详情 | 达标；空白日与海鲜提示可更醒目 |

**Issues：** intro/notices 略平，回京休整可再强调。

**Fixes applied：**
- `detailPatches`：加强 introduction（午睡节奏、烟威可选、回京）；notices 补空白日与回京。
- `routeFieldPatches`：summary 补「回京休整」。

---

## dongbei-changbai-summer — FAIL

| 项 | 结论 |
|----|------|
| 长短 | long（一周慢住基地）可成立 |
| 预算 | **本趟约…** 与 long 要求「对照月约 2 万」不符 |
| 回京 | intro 有飞回北京；summary/notices 偏弱 |
| fromHome | false ✓；飞长春/延吉 ✓ |

**Issues：**
1. budgetLabel 应用月预算口径。
2. summary 未写回京；notices 未单列飞回北京。
3. transport 可写明结束后飞回。

**Fixes applied：**
- `routeFieldPatches`：budgetLabel → 对照月预算；summary/transport 补飞回北京。
- `detailPatches`：加强 intro/seasonGuide/notices（预约、天池关闭预案、回京）。

---

## dongbei-harbin-snow-3d — PARTIAL

| 项 | 结论 |
|----|------|
| 长短 / fromHome | short · fromHome false；飞哈尔滨 ✓ |
| 预算 | 本趟约 ✓ |
| 回京 | intro 有；notices 未写飞回北京 |

**Issues：** notices 缺回京；极寒取暖可再写清。

**Fixes applied：**
- `detailPatches`：intro/notices 补飞回北京与暖房分段看。
- `routeFieldPatches`：summary 补结束后飞回北京。

---

## dongbei-dalian-summer — FAIL

| 项 | 结论 |
|----|------|
| 长短 | **tripType short 与「约7–10天」冲突**——应为 long（多日慢住） |
| 预算 | 本趟口径与 long 不符 → 对照月约 2 万 |
| 回京 / fromHome | 有飞回；fromHome false ✓ |

**Issues：** tripType / budgetLabel 错位。

**Fixes applied：**
- `routeFieldPatches`：`tripType: 'long'`；budgetLabel 改月预算；summary 点明慢住一周后飞回。
- `detailPatches`：加强 intro/seasonGuide/notices（分段滨海、空白日、飞回北京）。

---

## 汇总

| ID | 结果 | 是否写入 patch |
|----|------|----------------|
| mutianyu-day | PASS | 否 |
| tianjin-day | PASS | 否 |
| chengde-2d | PARTIAL | 是 |
| gubei-overnight | PASS | 否 |
| huabei-shanxi-loop | PASS | 否 |
| huabei-neimeng-summer | FAIL | 是 |
| huabei-shandong-coast | PARTIAL | 是 |
| dongbei-changbai-summer | FAIL | 是 |
| dongbei-harbin-snow-3d | PARTIAL | 是 |
| dongbei-dalian-summer | FAIL | 是 |

**Routes patched: 6**
