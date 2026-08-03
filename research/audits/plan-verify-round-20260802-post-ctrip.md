# Plan verify · post-Ctrip remaining · 2026-08-02

Clean-context backlog + plan remaining check (fresh agent; no chat memory).  
**HEAD:** `9478529` (西北/青藏 Ctrip PG backfill) · branch `main` · Pages deploy **green**.

**Sources:** `AGENTS.md`, `ux-backlog-20260802.md`, `content-backlog-20260802.md`, `global-remaining-20260802.md`, `plan-verify-round-20260802-final.md`, `ctrip-enrich-rollup-20260802.md`, live Pages, catalog JSON, git history since FINAL.

---

## Verdict: **PASS**

Core Explore IA + composition model + discovery gate match shipped product. Post-FINAL waves (map retire, photos, brand, Zhengzhou tags, compose→leg back-nav, Ctrip enrich + PG fills) are on `main` and live. Remaining checklist items are **intentional optional** polish/ops — not product blockers.

| # | Checklist | Result | Evidence |
|---|-----------|--------|----------|
| 1 | **Explore IA** | **PASS** | Live home: `中国旅游地图` · 全部景点 · 筛选维度 · 地区; **no** `地图选区`. Sticky 返回 scoped-only; 4 dims; bottom nav. |
| 2 | **Detail maps retired** | **PASS** | `RouteOverviewMap` / `china-geo` / province geo **gone** (`a4de5ae`). Detail uses「精细化路线介绍」; `ux:plan` P5 locks that string. Live about mentions 精细化路线. |
| 3 | **Composition / catalog** | **PASS** | Catalog **201** · compose **31** · leg **67** · base **3**. Compose intro→legs + sticky「组合」; compose→leg Back fixed (`61e8be5`). |
| 4 | **Ctrip enrich + PG** | **PASS** | Five regional patches registered; **197/201** PG\|intro overlays; 4 intentional 华北 skips. 西南 PG 6→37; 西北/青藏 PG **32/32** (`9478529`). Rollup current. |
| 5 | **Brand / ZZ / photos** | **PASS** | Brand → `中国旅游地图` (`c120ebc`). `fromZhengzhouHome` **8** Henan-circle routes. Soft→Commons waves; `PLACE_SOFT_IDS` **15** intentional same-corridor; gen **3** leftovers. |
| 6 | **Backlog hygiene** | **PASS** | Product open = **0**. Polish/ops opens intentional. Corrected falsely stale map-detail notes; closed content「逐条精细化」polish after Ctrip+tips. Discovery gate = multi-source. |

---

## Still open (only)

| Area | Item | Status | Notes |
|------|------|--------|-------|
| **UX** | Optional density pass after live feedback | open | Wait for parent feedback |
| **UX** | True virtualization if catalog ≫~200 janks | open | Do not preemptive; ~201 cards + paginate already |
| **UX** | P2 embla gallery / light motion / offline search index | open | Nice-to-have |
| **Content** | Explore 长居 chip / base 详情 polish | open | Optional discoverability |
| **Content** | Soft→Commons **residual** buffers only if dedicated scenic appears | open | Mass soft→Commons **done**; 15 intentional soft + 3 gen remain |
| **Content** | Optional corridors: 粤西开平–湛江、东北冬冰雪 | open | Only if product asks |
| **Content** | Extreme alpine honesty (no forced compose) | standing | Non-goal reminder, not a build ticket |
| **Content** | Optional 华北/东北 Ctrip **introduction** parity | open | PG done; intros still light by design (rollup) |
| **Ops** | Aliyun OSS+CDN dual-deploy | deferred | Optional later (WeChat-max); **do not build now** — CF Pages covers interim CDN |
| **Polish** | — | — | — |

### DONE / retired (do not re-open)

| Item | Status |
|------|--------|
| 「地图选区」tab / Explore map cover | **DONE / retired** |
| Detail `RouteOverviewMap` / corridor schematic maps | **DONE / retired** (`a4de5ae`) |
| `RegionMap` / FilterBar dual-tab chrome | **DONE / retired** |
| National `national-*` monoliths | **retired** (compose+legs) |
| Content product / quality open sections | **closed** (composition IA, THIN, dining&lt;35, character waves) |
| Ctrip regional PG backfills (西南 / 西北青藏) | **DONE** |
| High-traffic stop tip overlays + Ctrip route enrich | **DONE** (was polish「逐条精细化」) |
| Brand rename 爸妈… → 中国旅游地图 | **DONE** |
| 从郑州家出发 tags | **DONE** (8 routes) |
| Compose→leg Back → long-line detail | **DONE** |
| Ops mainland CDN interim (Cloudflare Pages) | **DONE** — live https://china-travel-atlas.pages.dev/ (Aliyun+ICP optional later only) |

Historical verifies (`*-explore-ia.md`, early `*-ux-clean.md`, FINAL “detail maps kept”) describing map-tab or detail maps as current — **obsolete**.

---

## Spot checks

| Check | Result |
|-------|--------|
| Live home | Brand + 全部景点 + 地区; no 地图选区 |
| Live about | 四个维度 + 精细化路线; no 地图选区 |
| Pages CI | Latest run success on `9478529` |
| Catalog | 201 / 31 compose / 67 leg / 3 base |
| Ctrip rollup | 197 either-overlays; 4 华北 skips |
| Soft / gen | soft **15** intentional; gen **3** (乐亭/左云/棋子湾) |

---

## Hygiene this round

1. New audit: this file.
2. Tick content polish「逐条精细化」`[x]` (Ctrip + high-traffic tips).
3. Refresh UX reconcile note (detail maps retired, not “geo kept”).
4. Refresh `global-remaining` + `verify-loop-latest` post-Ctrip snapshot.
5. Light pin on `ctrip-enrich-rollup` HEAD.

---

## 5 next tasks (ranked by value)

1. **Content — optional 华北/东北 intro rewrite** for parity with 华东-style Ctrip intros (PG already present; 4 short lines stay skipped).
2. **UX/content — Explore 长居 chip / base detail polish** if hubs feel hard to find via 主题·长居 alone.
3. **Images — Soft→Commons residual** only when dedicated scenic appears for the ~15 intentional same-corridor buffers (gen leftovers stay unless Commons appears).
4. **UX — density / virtualization / embla** only after live parent feedback or proven mid-phone jank — do not preempt.
5. **Ops — Aliyun OSS+CDN+ICP** only if CF Pages proves insufficient for WeChat parents (`china-mainland-access-20260802.md`). Do **not** enable stub early.

**Do not:** reintroduce map tab or detail overview maps; resurrect `national-*`; block new ids on XHS MCP health (multi-discovery remains the gate).
