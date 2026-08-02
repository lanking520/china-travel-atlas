# 华南 + 西南 路线审核（huanan-xinan）

对照 `research/audits/CHECKLIST.md` · 受众约 60 岁活跃退休 · 2026-08-02

**范围：** 10 条  
**产出：** `content/audit-patches/huanan-xinan.ts`  
**未改：** `content/route-details.ts` / `content/routes.ts`  
**参考：** `research/notes/*` + `research/notes/xhs-digests/yunnan-dali-lijiang.md`

---

## 汇总

| ID | 判定 | 主要问题 |
|----|------|----------|
| huanan-xiamen-winter | PARTIAL→patched | transport 缺飞回；notices 缺回京；summary「父母」语气 |
| huanan-sanya-winter | PARTIAL→patched | transport/summary 缺回京；seasons 仅 winter（seasonGuide 写冬春） |
| huanan-zhuhai-3d | PARTIAL→patched | 站点 tips 过薄；notices 可更具体 |
| huanan-guangzhou-chaoshan | PASS→patched | 结构已齐；补强 intro/notices 飞入飞出与节奏 |
| huanan-guilin-yangshuo | PASS→patched | 结构已齐；补强船票/行李/回京须知 |
| yunnan-dali-lijiang | PARTIAL→patched | transport 缺「结束飞回北京」；消化 XHS 试住要点 |
| xinan-chengdu-slow | PARTIAL→patched | transport/summary/notices 缺回京 |
| xinan-dujiangyan-2d | PARTIAL→patched | tips/notices 过薄 |
| xinan-chongqing-slow | PASS→patched | 结构已齐；补强雨天/火锅/回京须知 |
| xinan-guizhou-loop | PASS→patched | 结构已齐；补强安旅通/二选一/回京须知 |

**patched count：10**（`detailPatches` 10；`routeFieldPatches` 6）

---

## 分条

### huanan-xiamen-winter — PARTIAL
- **原状：** 字段齐；长旅行 intro 已有飞回；transport 仅「飞厦门」未写回京；notices 无回京句；summary 偏「父母」口吻。
- **改：** transport 写北京飞入+飞回；summary 改暖冬自游语气；detail 重写 notices（船票/植物园/土楼/回京）。

### huanan-sanya-winter — PARTIAL
- **原状：** intro/gallery 齐；transport/summary 无回京；seasons 仅 `winter`，与 seasonGuide「冬春」不一致。
- **改：** seasons→`winter,spring`；transport/summary 补飞入飞出；notices 加适应期、紫外线、回京。

### huanan-zhuhai-3d — PARTIAL
- **原状：** short、fromHome false、预算「本趟约」OK；stop tips 过短。
- **改：** 加厚 intro/notices（防晒防风、不必澳门、可衔接广州线）；summary 点明北京飞入飞回。

### huanan-guangzhou-chaoshan — PASS
- **原状：** 飞入飞出、潮汕/珠海二选一、预算分完整/短版均已到位。
- **改：** detail 略加医院选住与每日节奏；route 字段未改。

### huanan-guilin-yangshuo — PASS
- **原状：** 游船→阳朔慢住结构清晰，回京已写。
- **改：** notices 强化船票预约、行李先送、竹筏量力、回京。

### yunnan-dali-lijiang — PARTIAL
- **原状：** 详情与 XHS 试住要点已较强；transport 缺结束飞回。
- **改：** transport 补飞回北京；notices 收紧试住/索道/回京（消化 digest+笔记）。

### xinan-chengdu-slow — PARTIAL
- **原状：** intro 有回京；列表层 transport/summary/notices 无回京。
- **改：** transport/summary 补飞入飞出；notices 七条含回京。

### xinan-dujiangyan-2d — PARTIAL
- **原状：** short 可衔接成都；tips「舒适鞋」过简。
- **改：** intro/notices 加索道前山、防滑、预算与回成都/飞回北京；summary 补结束去向。

### xinan-chongqing-slow — PASS
- **原状：** 轨交拆段+武隆电梯可选已齐，transport 已飞回。
- **改：** notices 补雨天/火锅/武隆量力/回京（detail only）。

### xinan-guizhou-loop — PASS
- **原状：** 贵阳基地+安旅通+二选一已齐，transport 已飞回。
- **改：** notices 补预约/扶梯/辣度/回京（detail only）。

---

## 检查项速览（全 10 条）

| 项 | 结果 |
|----|------|
| 字段完整 | ✅ |
| 站点 lat/lng/pace/summary/tips/image | ✅ |
| 长短与回京文案 | ✅（经 patch） |
| fromHome | ✅ 全 false（远途） |
| seasons + seasonGuide | ✅（三亚补 spring） |
| intro 3–5 段 / notices 5–8 / gallery≥1 | ✅ |
| 预算短「本趟约」长「月约2万」 | ✅ |
| 无轮椅默认叙事 | ✅ |
