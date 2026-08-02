# Plan final summary

Merged from plan-final audits + earlier plan compliance check. Updated 2026-08-02.

## Overall

| Area | Verdict | Report |
|------|---------|--------|
| Scaffold / seed / route-ui / fill / book scaffold | mostly **PASS** | `research/notes/_plan-audit.md` |
| UX map drill-down | **PARTIAL** | `research/audits/plan-final-ux.md` |
| Content coverage | **PARTIAL** | `research/audits/plan-final-content.md` |
| Route detail pages | **PASS** (map placement PARTIAL) | `research/audits/plan-final-details.md` |
| Deploy / PWA / offline | **PARTIAL** | `research/audits/plan-final-deploy.md` |

Regional content audits + patches are wired via `content/audit-patches/` → `content/index.ts`.

## Open gaps (actionable)

1. **华东缺 long**：审计把黄山等改成 short 后，华东 0 条 long — 需补一条多周华东慢住线。
2. **tripType 筛选**：数据有徽章，Explore 未挂 `FilterBar`（无「从北京短途 / 当季」快捷）。
3. **详情地图**：地图不在首屏；无「放大看全图」。
4. **Deploy**：私有仓库 Pages 未启用（404）；offline zip / Release / 真 SW 多在工作区未上 `main`。
5. **类型**：`gallery` 在详情层存在，早期审计称 types 无顶层 `gallery[]`（以 `route-details` 为准即可）。
6. **小红书**：7/35 路线已检索+改写；山西等在 MCP 超时后慢速续跑中。

## Not blocking product browse

- 31 省主路线齐全；8 大区；北京短途样板；青藏/西北审核补丁已合并路径。
- Playwright UX plan：13/13 PASS（见既有报告）。
