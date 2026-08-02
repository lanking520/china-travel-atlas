# Global remaining · 2026-08-02

Clean-context “what’s left” across content + UX after content-backlog close-out (`5466a52` / verify `84a3af6`) and UX clean-light PASS (`47a0e23`+`ae3bab8`).

**Sources:** `content-backlog-20260802.md`, `ux-backlog-20260802.md`, `verify-loop-latest.md`, `plan-verify-round-20260802-content-backlog.md`, `plan-verify-round-20260802-ux-clean.md`, `plan-verify-round-20260802-explore-ia.md`, `dead-lead-visibility-20260802f.md`, `content-quality-screen-20260802.md` (historical — THIN/dining counts **superseded**), `missing-routes-backlog-20260802.md`, `coverage-gap-matrix-20260802.md`, git + catalog + Pages smoke.

---

## Snapshot

| Item | Value |
|------|-------|
| Branch | `main` · **ahead of `origin/main` by 1** (`5466a52`) · **not behind** |
| Dirty (uncommitted) | `research/notes/ux-backlog-20260802.md`, `research/notes/_plan-playwright.md`, `research/audits/plan-verify-round-20260802-ux-clean.md` (UX verify artifacts) |
| Catalog | **182** routes (`lib/generated/explore-routes.json`) · compose **14** · leg **32** · base **3** |
| Content backlog open `[ ]` | **0** |
| UX backlog open | **4** polish items (none ship-blockers) |
| Verify loop | **PASS** (content close-out) · UX clean-light **PASS** (`ux:plan` 21/21) |
| Live Pages | **200** · `https://lanking520.github.io/china-travel-atlas/` · labels 全部景点 / 地图选区 / 添加筛选 / `_next` present · sample compose **200** · `Last-Modified` ~22:03Z (may lag local unpushed commit) |

---

## 1. Done recently

Composition IA shipped end-to-end (南疆/河西/川西 + national batches 1–3 → compose+legs; weak longstay demoted; `base-kashi`/`guilin`/`guiyang`). Character waves cleared strict THIN and intro&lt;200 across **182** routes; hand PG dining `&lt;35` **0**. Image leftovers (乐亭/左云/棋子湾) → labeled gen covers. Explore IA (全部景点 / 地图选区), slim catalog JSON, lazy paginate, compact sticky filters + season default, compose timeline + 短线/长线 chips — UX clean-light verify PASS. Dead-lead prefecture-f PASS at earlier 164; catalog since grew to 182 with migrations.

---

## 2. Open must-do

**None truly blocking.** Content checklist closed; UX remaining is polish/P2; no dead-lead or Pages basePath regression observed in this audit.

Ops hygiene (not product blockers):

- Local `main` is **1 commit ahead** of origin — push when ready so Pages picks up content close-out.
- Uncommitted UX verify notes (`ux-clean` audit + backlog tick + `_plan-playwright`) — commit/push separately so verify evidence is not lost.

---

## 3. Open should-do

From UX backlog unchecked + content “suggested next”:

| Priority | Item | Notes |
|----------|------|-------|
| S1 | Explore **长居 chip / base 详情 polish** | Short/long chips exist; base still theme-driven; polish after hubs stable |
| S2 | **逐条精细化** stops/tips for high-traffic hubs | Beyond character framing — 九寨/黄山/桂林等 depth |
| S3 | Auto-hide **chip strip on deep scroll** | If season+theme+region pile feels tall |
| S4 | Lock sticky-share + compose timeline into **`ux:plan`** (P21/P22) | Catch regressions early |
| S5 | **Live Pages smoke** after next deploy | Calendar season + sticky「组合」on compose |
| S6 | Mobile **bottom nav** (探索 / 两年 / 说明) + safe-area | UX P1 leftover |

---

## 4. Open nice-to-have

- True **virtualization** if catalog ≫ ~200 and scroll janks (now 182 — watch)
- P2: **embla** gallery + 2–3 intentional motions
- P2: offline search index if catalog grows further
- Intentional same-corridor **soft → Commons** only if dedicated scenic appears (乐亭-class already gen; remaining soft is intentional)
- Low-priority corridor shallow: G210 非延安段
- Optional prefecture discovery only if product asks (晋中-class largely done)
- Shortlist “待评估”: 天津海河加深、景德镇独立（刻意并入婺源廊）等

---

## 5. Intentionally out of scope

- 港澳 · 阿里/珠峰 · G219 极限 · G214/G210/G318 全线贯通
- 稻城强制主线 · 独库特种兵 · 色达/泸沽偏好 skip
- Extreme alpine forced compose splits (keep honesty warnings)
- Senior-mode / 适老专用 chrome · purple glass / dashboard kits
- Content agents editing `ChinaMapExplorer` / UX agents editing `content/*`
- Discovery gate = multi-source only; XHS optional review; do not block 立项 on XHS MCP

---

## 6. Next 5 tasks (parent)

1. **Commit + push hygiene** — land uncommitted UX verify artifacts; push `main` (+1) so Pages matches disk.
2. **Explore 长居 / base polish** — chip + base detail (optional but highest product polish left).
3. **High-traffic stops/tips deepen** — pick ~5–10 hubs; beyond intro/culture framing.
4. **ux:plan lock-ins** — sticky share + compose「组合」assertions; optional chip auto-hide if feedback says tall.
5. **Post-deploy Pages smoke** — season default + compose timeline on live GH Pages.

*Defer:* virtualization / embla / offline index / new prefectures / soft-image upgrades unless product asks.

---

*Auditor: clean-context subagent · 2026-08-02 · audit-only, no product code changes.*
