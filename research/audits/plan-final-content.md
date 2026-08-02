# Plan 终验 · 内容覆盖（content）

**Plan:** `~/.cursor/plans/中国旅游地图网站_33daee57.plan.md`  
**对照:** `research/省级覆盖.md` · `research/audits/CHECKLIST.md` · `research/audits/PLAN-FINAL-CHECKLIST.md`  
**Repo:** `/Users/richpige/Documents/GitHub/china-travel-atlas`  
**Audited:** 2026-08-02  
**Method:** 只读核对 `content/regions.ts` / `provinces.ts` / `route-provinces.ts` / `index.ts` / patches / `routes.ts` + 运行时合并后的 `routes`（tsx）；未改代码、未提交。

**Corpus:** 8 regions · **31** provinces · **35** routes · `routeProvinces` 35 条全挂载

---

## Overall: **PARTIAL**

省级主归属、四季、北京短途、长线飞回/预算框架均到位；**华东区在审核把多日线改标 short 后已无 long**，与 Plan「每区长短齐全 / 两年骨架华东秋色」不符 → 整体 PARTIAL（非 FAIL：31 省 primary 无缺口）。

| # | Check | Verdict |
|---|--------|---------|
| 1 | 8 大区 | **PASS** |
| 2 | 31 省各 ≥1 条 primary（唯一归属） | **PASS** |
| 3 | 每区 long + short（及例外） | **PARTIAL** |
| 4 | 四季全局有路线 | **PASS** |
| 5 | fromHome 北京短途 | **PASS** |
| 6 | 长旅行 回京/飞（抽查 3） | **PASS** |
| 7 | 预算约 2 万 | **PASS** |

---

## 1. 八大区 — **PASS**

`content/regions.ts` 顺序齐全：

`huabei` · `dongbei` · `huadong` · `huazhong` · `huanan` · `xinan` · `xibei` · `qingzang`（count=8）

与 Plan「八大区」表一致；`content/index.ts` 导出 `regions`。

---

## 2. 大陆 31 省 primary 专属 — **PASS**

- `content/provinces.ts`：**31** 条（不含港澳台，符合 `research/省级覆盖.md`）。
- `content/route-provinces.ts`：每条路线一个 `primary`；**无** `also` 冒充主覆盖。
- 运行时：`provinces missing primary: []`；map key 与 `routes` id **双向对齐**（无孤儿 map、无无省份路线）。

| 省 id | primary 路线 |
|-------|----------------|
| beijing | mutianyu-day, gubei-overnight |
| tianjin | tianjin-day |
| hebei | chengde-2d |
| shanxi | huabei-shanxi-loop |
| neimenggu | huabei-neimeng-summer |
| shandong | huabei-shandong-coast |
| liaoning | dongbei-dalian-summer |
| jilin | dongbei-changbai-summer |
| heilongjiang | dongbei-harbin-snow-3d |
| shanghai | huadong-shanghai-short |
| jiangsu | huadong-suzhou-nanjing |
| zhejiang | huadong-hangzhou-suzhou |
| anhui | huadong-huangshan-hui |
| jiangxi | huadong-wuyuan-spring |
| henan | huazhong-luoyang-kaifeng |
| hubei | huazhong-wudang-3d |
| hunan | huazhong-zhangjiajie |
| shaanxi | huazhong-xian-slow |
| fujian | huanan-xiamen-winter |
| guangdong | huanan-guangzhou-chaoshan, huanan-zhuhai-3d |
| guangxi | huanan-guilin-yangshuo |
| hainan | huanan-sanya-winter |
| chongqing | xinan-chongqing-slow |
| sichuan | xinan-chengdu-slow, xinan-dujiangyan-2d |
| guizhou | xinan-guizhou-loop |
| yunnan | yunnan-dali-lijiang |
| gansu | xibei-dunhuang-zhangye |
| ningxia | xibei-ningxia-3d |
| xinjiang | xibei-xinjiang-north |
| qinghai | qingzang-qinghai-lake, qingzang-xining-3d |
| xizang | qingzang-lhasa-slow |

**唯一归属：** 一路线 → 一 `primary`；各省至少一条专属主线（多省可有多条主线，不冲突）。`research/省级覆盖.md` 31 行均 ✅，与上表 id 对齐。

**未改代码：** 无缺失省 primary。

---

## 3. 每区 long + short — **PARTIAL**

Plan seed：`8 大区种子路线覆盖…长短`；两年骨架含「华东秋色」长段。  
CHECKLIST：short≈1–3 天（审核放宽为多日「本趟」）、long≈多周慢住。

| Region | long | short | 备注 |
|--------|------|-------|------|
| huabei | 3 | 4 | 样板齐全 |
| dongbei | 2 | 1 | 有长短 |
| **huadong** | **0** | **5** | **缺 long** |
| huazhong | 1 | 3 | 有长短（张家界/武当等已标 short） |
| huanan | 4 | 1 | 有长短 |
| xinan | 4 | 1 | 有长短 |
| xibei | 2 | 1 | 有长短 |
| qingzang | 2 | 1 | 有长短（西宁 3 日 short 可接受） |

**例外 / 成因（非 Plan 明文豁免）：**

- `content/audit-patches/huadong-huazhong.ts` 将 `huadong-huangshan-hui`（及张家界等）从 `long` 改为 `short`，因天数 5–7 +「本趟约」不符「约 3 周–3 月」——分类正确，但**未补一条华东多周慢住 long**。
- 华东现全部为 3–7 天高铁线（`huadong-hangzhou-suzhou`、`shanghai-short`、`huangshan-hui`、`wuyuan-spring`、`suzhou-nanjing`），无「慢住基地 + 回京」长旅行。

**修复建议（未做）：** 新增一条华东 long（如杭州/苏南 2–3 周慢住，或黄山徽州扩成多周），`tripType: long` + `budgetLabel: 对照月预算约2万` + 结束回京文案；不必动现有 short 专线。

---

## 4. 四季全局 — **PASS**

合并后 `routes` 季节命中：

| Season | Count | 样例 |
|--------|------:|------|
| spring | 21 | yunnan-dali-lijiang, huadong-wuyuan-spring, … |
| summer | 11 | dongbei-changbai-summer, qingzang-qinghai-lake, … |
| autumn | 26 | xibei-dunhuang-zhangye, mutianyu-day, … |
| winter | 6 | huanan-sanya-winter, dongbei-harbin-snow-3d, … |

**注（非本条失败）：** 区×季矩阵仍稀（如东北无春/秋、华东无夏/冬挂载），与 `_plan-audit.md` 旧注一致；Plan 只要求四季「全局有路线」，已满足。

---

## 5. fromHome 北京短途 — **PASS**

`fromHome && tripType===short`（华北周边）：

| id | daysLabel |
|----|-----------|
| mutianyu-day | 1天 |
| tianjin-day | 1天 |
| chengde-2d | 2天1晚 |
| gubei-overnight | 1–2天 |

证据：`content/routes.ts` 开头华北块；与 Plan 例子「承德两日、天津一天、慕田峪当天」一致。  
另有近中程 long 标 `fromHome: true`（`huabei-shanxi-loop`、`huabei-shandong-coast`），符合「自驾/高铁出京」策略，不计入本条缺口。

---

## 6. 长旅行 回京 / 飞 — **PASS**（抽查 3）

CHECKLIST：「长旅行文案含回京/飞回北京」。抽查远途样板：

| Route | summary / transport | details |
|-------|---------------------|---------|
| **yunnan-dali-lijiang** | summary「结束后**飞回北京**休整」；transport「结束飞回北京」 | notices「结束后飞回北京休整」；introduction 写飞入大理 |
| **xibei-dunhuang-zhangye** | summary「结束后**飞回北京**休整」 | notices 同；intro 飞敦煌取车 |
| **qingzang-lhasa-slow** | summary/transport「结束后**飞回北京**」 | notices「**回京**后至少休整一周」 |

字面「回京」与「飞回北京」等效满足。其余 long 多数用「飞回北京」而非「回京」字符串，语义合格。

---

## 7. 预算约 2 万 — **PASS**

- UI：`components/BudgetBar.tsx`「约 **2 万元** / 月」。
- 全部 **18** 条 `tripType: long` 的 `budgetLabel` 含「对照月预算约2万」或「1.2–2万」（青海湖）。
- 短途统一「本趟约…」，无误标「对照月预算」。
- Plan 预算模型与首页预算条一致。

---

## 数据来源快照

| 层 | 路径 |
|----|------|
| 基线 | `content/routes.ts` |
| patches | `content/patches/routes-{north,northwest,east-central,south-southwest,plan-gaps,jiangsu}.ts` |
| 合并 | `content/index.ts` + `content/audit-patches/*` |
| 省份映射 | `content/route-provinces.ts` |
| 省级对照表 | `research/省级覆盖.md` |

---

## 修复建议汇总（只建议，未改代码）

1. **华东补 1 条 long**（优先）— 否则区级长短矩阵与两年「华东秋色」叙事断档。  
2. （可选）区×季空格补种子 — 不影响本审计 PASS 项。  
3. 无缺失省 primary — **无需**为覆盖率改 `route-provinces.ts`。

---

## Verdict summary

| PASS | PARTIAL | FAIL |
|------|---------|------|
| 8 区 · 31 省 primary · 四季 · 北京短途 · 长线飞回抽查 · 2 万预算 | 华东缺 long（审核纠分类后遗留） | — |

**Overall: PARTIAL**
