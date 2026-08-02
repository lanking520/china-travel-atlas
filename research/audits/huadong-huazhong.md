# 华东 + 华中 路线审核

对照 `research/audits/CHECKLIST.md` 与 plan。受众：约 60 岁、腿脚好、活跃退休；北京有家；月旅行约 2 万。无 XHS digests。

| id | 判定 | 摘要 |
|----|------|------|
| huadong-hangzhou-suzhou | PARTIAL | 字段与站点完整；sources/笔记偏无障碍主叙事；intro 偏短 |
| huadong-shanghai-short | PARTIAL | 主线扎实；gallery 缺朱家角；须知可再具体 |
| huadong-huangshan-hui | FAIL | tripType=long 但仅 5–7 天且预算「本趟约」——应改 short |
| huadong-wuyuan-spring | PARTIAL | 春花线清楚；intro 缺明确返京；notices 偏少 |
| huazhong-wudang-3d | PARTIAL | 索道/预约写得好；intro 可补一段山下节奏；须知补优待票 |
| huazhong-luoyang-kaifeng | PARTIAL | 二选一逻辑对；须知偏少；intro 可再具体 |
| huazhong-zhangjiajie | FAIL | 同黄山：long +「本趟约」冲突，改 short |
| huazhong-xian-slow | PARTIAL | 长旅行字段基本合规；华山 tips 含 markdown；再压轮椅式措辞 |

---

## huadong-hangzhou-suzhou · PARTIAL

**已有**：region/seasons/short/fromHome=false、高铁抵达、预算「本趟约」、3 站坐标可信、gallery≥1。

**问题**
- sources 与调研笔记以「无障碍专线/推轮椅」为主，不符「不默认行动不便」；活跃退休应写电瓶车/游船省腿、苏堤选段。
- introduction 仅约 3 短段，缺住宿与返京节奏。
- notices 可补梅雨湿滑、园林预约。

**改动（patch）**
- detail：重写 intro 4 段、seasonGuide、8 条 notices；gallery 保留。
- routeField：summary 去无障碍腔；sources 注记改为环湖电瓶车/游船实用信息。

---

## huadong-shanghai-short · PARTIAL

**已有**：短途字段完整、高铁、3 站含朱家角可选、预算格式对。

**问题**
- gallery 未挂朱家角图。
- intro/notices 可再写清每天一点、馆闭馆日、傍晚外滩。

**改动（patch）**
- detail：充实 intro、seasonGuide、8 notices；gallery 补朱家角。
- routeField：summary 微调活跃语气。

---

## huadong-huangshan-hui · FAIL

**已有**：索道优先、预约、宏村慢走、返京句、站点坐标 OK。

**问题**
- `tripType: long` 与 plan「长旅行≈3 周–3 月」不符；同区杭苏 5 天已是 short。
- 预算已是「本趟约」——与 long 冲突。应改为 **short**。

**改动（patch）**
- routeField：`tripType: 'short'`；summary/transport 强调索道选项与高铁返京。
- detail：intro 4 段（索道为选项非勉强）、8 notices、seasonGuide。

---

## huadong-wuyuan-spring · PARTIAL

**已有**：seasons=[spring]、花期、观景台+缆车选项、预算「本趟约」。

**问题**
- intro 未写结束后高铁返京（或接黄山后再返）。
- notices 仅 6 条，缺花期核对、防滑、返京。

**改动（patch）**
- detail：补返京与挂接黄山说明；7–8 notices；gallery 保留。
- routeField：summary 点明观景台为主、不必爬满山。

---

## huazhong-wudang-3d · PARTIAL

**已有**：短途、索道价与金顶分时、两站坐标、预算格式对。

**问题**
- intro 偏压缩；60+ 优待票未进 notices。
- 金顶台阶应作风险提示，不写成行动不便主叙事。

**改动（patch）**
- detail：4 段 intro、8 notices（含优待与返京）、seasonGuide。
- routeField：summary 微调「问道+索道」活跃语气。

---

## huazhong-luoyang-kaifeng · PARTIAL

**已有**：短途、龙门预约免票、少林/开封二选一、坐标 OK。

**问题**
- notices 偏少；intro 可写清高铁抵达与返京、折叠凳/防滑为舒适选项。

**改动（patch）**
- detail：充实 intro、8 notices、seasonGuide。
- routeField：summary 强调二选一、勿同日连赶。

---

## huazhong-zhangjiajie · FAIL

**已有**：三索一梯、金鞭溪浅走、芙蓉/凤凰二选一、返京句。

**问题**
- `tripType: long` + 5–7 天 +「本趟约」——同黄山，改为 **short**。

**改动（patch）**
- routeField：`tripType: 'short'`；summary 强调索道选项。
- detail：intro/notices/seasonGuide 对齐活跃退休与早出早歇。

---

## huazhong-xian-slow · PARTIAL

**已有**：long、2–3 周、对照月约 2 万、飞/高铁抵达与回京、华山仅缆车可选——大体 PASS。

**问题**
- 华山 stop tips 含 `**` markdown。
- intro 可再拆清慢住 vs 兵马俑/华山快看；notices 补满 8 条。

**改动（patch）**
- detail：润色 intro 4–5 段、8 notices、seasonGuide。
- routeField：去掉华山 tips 星号；summary 保持慢住主叙事。

---

## 汇总

| 指标 | 数量 |
|------|------|
| 审核路线 | 8 |
| detailPatches | 8 |
| routeFieldPatches | 8 |
| tripType 修正 | 2（huangshan、zhangjiajie → short） |
