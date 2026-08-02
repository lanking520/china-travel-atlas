# 西北 + 青藏 审核（对照 CHECKLIST）

审核日期：2026-08-02  
范围：`xibei-dunhuang-zhangye` · `xibei-xinjiang-north` · `xibei-ningxia-3d` · `qingzang-lhasa-slow` · `qingzang-qinghai-lake` · `qingzang-xining-3d`  
补丁：`content/audit-patches/xibei-qingzang.ts`（未改 `route-details.ts` / `routes.ts`）

强调：青藏 → 海拔/适应；西北 → 干燥与长车程；长旅行 → 回京休整。

---

## xibei-dunhuang-zhangye — PARTIAL → patched

| 项 | 结论 |
|----|------|
| 字段 / 站点 / 地图 | PASS（敦煌基地→莫高→嘉峪关→丹霞有序） |
| 长短 / fromHome / 回京 | PASS（long、飞入、张掖还车飞回北京） |
| 季节 / 预算 | PASS（秋；对照月约 2 万） |
| 详情 | PARTIAL：干燥/长车程/每周休息日可再钉死 |

**改了什么：** 重写 introduction / seasonGuide / notices——单日车程 ≤4h、敦煌→张掖勿一日赶完、干燥补水与防尘、结束后回京休整。

---

## xibei-xinjiang-north — PARTIAL → patched

| 项 | 结论 |
|----|------|
| 字段 / 站点 | PASS（乌市→赛里木→伊犁→喀纳斯） |
| 长短 / 回京 | PASS（2–3 周；还车飞回北京） |
| 详情 | PARTIAL：长车程分段与干燥须再强调；可补新疆时差提示 |

**改了什么：** 详情强调单日 ≤5h、拆段走、每周休息日、干燥防晒与温差、对照月预算与回京；summary/transport 微调。

---

## xibei-ningxia-3d — PARTIAL → patched

| 项 | 结论 |
|----|------|
| 字段 / 短途 | PASS（3 天 2 晚；飞/高铁银川） |
| 干燥 | PARTIAL：塞上干燥与日晒未进须知主线 |
| 返京 | PARTIAL：summary 有、notices/introduction 弱 |

**改了什么：** introduction/notices 补干燥日晒、沙湖/影城二选一、明确返程日飞或高铁回京；budget 表述对齐「本趟约」。

---

## qingzang-lhasa-slow — PARTIAL → patched

| 项 | 结论 |
|----|------|
| 字段 / 站点 / 回京 | PASS（适应→布宫→纳木错一日；飞回北京休整一周） |
| 海拔适应 | PARTIAL：详情未钉死 3650m、前 3 日勿洗澡、感冒禁进藏、每日≤5h |

**改了什么：** introduction/notices 强化低氧适应节奏、供氧酒店、布宫与大昭寺分日、纳木错一日即返、回京至少休整一周；summary 略收紧。

---

## qingzang-qinghai-lake — PARTIAL → patched

| 项 | 结论 |
|----|------|
| 字段 / 站点 / 回京 | PASS（西宁适应→环湖→茶卡可选） |
| 海拔阶梯 | PARTIAL：须知可更明确 2260→3200、感冒勿上湖、不适下撤 |

**改了什么：** 详情钉死西宁先适应 2–3 日再上湖、包车优先、环湖拆段、紫外与薄羽绒、茶卡可跳、结束后飞回北京。

---

## qingzang-xining-3d — FAIL → patched

| 项 | 结论 |
|----|------|
| 站点 | FAIL：仅 1 站且 tips 过薄，难支撑 3–4 日节奏 |
| 海拔叙事 | PARTIAL：适应主题有，但缺分层活动与可选塔尔寺 |
| 详情 / gallery | PARTIAL：introduction 偏短；gallery 仅 1 站图 |

**改了什么：** routeFieldPatches 扩为三站（城区适应 / 东关+省博 / 塔尔寺可选），加粗 summary/transport；详情写清约 2200m 适应短住、不上青海湖、短住后飞回北京或接青海湖长线。

---

## 汇总

| ID | 原评 | 补丁 |
|----|------|------|
| xibei-dunhuang-zhangye | PARTIAL | detail + routeField |
| xibei-xinjiang-north | PARTIAL | detail + routeField |
| xibei-ningxia-3d | PARTIAL | detail + routeField |
| qingzang-lhasa-slow | PARTIAL | detail + routeField |
| qingzang-qinghai-lake | PARTIAL | detail + routeField |
| qingzang-xining-3d | FAIL | detail + routeField |

**patched count：6**（6 detailPatches + 6 routeFieldPatches）
