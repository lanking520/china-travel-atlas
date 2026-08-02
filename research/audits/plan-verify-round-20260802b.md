# Plan verify round — 20260802b

**Plan:** 全国深挖与地图 (`新疆扩线与地图_065545d1.plan.md`)  
**Prior:** [`plan-verify-round-20260802.md`](plan-verify-round-20260802.md)  
**Verifier:** clean-context after agent follow-ups (read-only product; this report only)  
**Preview:** `http://127.0.0.1:3000` HTTP **200**

## Verdict

**PARTIAL**

Follow-ups closed several prior gaps (详情地图顺序、RouteOverviewMap 示意文案、XHS 覆盖表 53 线、`route-shortlist-discovery.md`、verify 规则、`ux:plan` 仍绿). **Discovery-only keepalive is still not ALIVE** — pid file stale / process dead; digests remain **4 / 31** provinces (+national). Plan acceptance on research-first / 31 省发现摘要 remains unmet → cannot PASS.

---

## Checklist (requested items only)

| # | Item | Verdict | Evidence |
|---|------|---------|----------|
| 1 | discovery-only keepalive ALIVE? | **FAIL** | `research/raw/xhs/discover-loop.pid` present (was `5323`, later rewritten `6085`). `ps` / `kill -0` → **no live process**. `pgrep` no `xhs-discover-only-keepalive` / `xhs-discovery-batch`. Log ends with `timeout: command not found` then `province_digests_missing=28 rc=127` (macOS lacks GNU `timeout`). |
| 2 | `XHS_PASS1_ONLY` / discover log progress | **PARTIAL** | Script defaults `XHS_PASS1_ONLY=1`; log: `PASS1=1`, `PASS1_ONLY: scheduling query[0] only per slug`. Progress: national/beijing/tianjin/hebei done; **stuck on `search shanxi[0]`** twice with **no** `discover_shanxi_*.json`. Digests still **4** (`national`,`beijing`,`tianjin`,`hebei`). Batch never advanced past Shanxi; keepalive then died on missing `timeout`. |
| 3 | `XHS覆盖状态.md` route count ~53? | **PASS** | Updated `2026-08-02T16:38:08Z`: **路线数：53**; 至少1次检索 **7/53**; includes `huadong-suhan-slow` + xinjiang ids. (Body table has **54** `| id |` rows vs header 53 — minor count drift, still ~53 catalog framing.) |
| 4 | `route-shortlist-discovery.md` exists? missing provinces? | **PASS** (file) / **FAIL** (coverage) | File exists (`生成于 2026-08-02T16:38:08Z`). 摘要 **4**（含 national）. **尚无省摘要：28 省**（山西→新疆全列）. Have digests: 京/津/冀 only. |
| 5 | Detail: `RouteMapWithExpand` before cover? | **PASS** | `app/routes/[id]/page.tsx`: map block ~L87–94, cover `Image` ~L96–104. |
| 6 | `RouteOverviewMap` has「中国地图示意」? | **PASS** | `components/RouteOverviewMap.tsx` ~L269–270: `中国地图示意（非实时路况）…` (prior round gap closed). |
| 7 | `.cursor/rules/plan-verify-after-task.mdc`? | **PASS** | Present; alwaysApply; requires clean-context verify + act on next tasks; XHS one-process / discovery-first until ≥31 digests. |
| 8 | `npm run ux:plan` if :3000 up | **PASS** | :3000 up. `PLAYWRIGHT_BROWSERS_PATH=0 npm run ux:plan` → **SUMMARY 13 pass / 0 fail**. |

---

## Delta vs 20260802 prior

| Prior gap | This round |
|-----------|------------|
| Map below cover | **Fixed** — map before cover |
| RouteOverviewMap missing 示意文案 | **Fixed** |
| XHS 覆盖「路线数：35」 | **Fixed** → 53 |
| No `route-shortlist-discovery.md` | **Added** (shows 28 missing) |
| No plan-verify rule | **Added** |
| Discover loop DEAD | **Still DEAD** (new failure mode: `timeout` not found) |
| Digests 4/31 | **Unchanged** |
| `ux:plan` 13/13 | **Still PASS** |

---

## Gaps (priority)

1. **Keepalive not running** — pid stale; last tick `rc=127` because `timeout` is not on macOS PATH; Shanxi search never completed (no raw JSON).  
2. **National discovery far from acceptance** — 3/31 province digests (+national); 28 provinces listed missing in shortlist-discovery.  
3. **XHS rewrite still ~7/53** — status table refreshed to 53 but progress unchanged; route loop must stay off until discovery drain per rule.  
4. **Minor:** coverage header 53 vs 54 table rows — regenerate count consistently.

---

## Next 3 concrete tasks

1. **Fix + restart discovery-only keepalive on macOS** — replace GNU `timeout` with portable ceiling (`gtimeout` if coreutils, or `perl`/`python` alarm / `node` child with kill); clear stale pid; start **one** `xhs-discover-only-keepalive.sh`; confirm `ps` ALIVE and log advances past Shanxi (or softens/skips stuck query) within one tick.  
2. **Babysit PASS1 until ≥31 province digests** — digests in `research/notes/xhs-discovery/*.md`; refresh `route-shortlist-discovery.md`; do **not** start route `xhs-loop` in parallel.  
3. **After digests ≥31:** rewrite `route-shortlist.md` from digests (mark pre-shipped lines 「已立项·待发现复核」), then breadth-first resume route XHS for remaining ~46/53 ids and keep `XHS覆盖状态.md` in sync.

---

## Commands run

```text
cat/ps discover-loop.pid          # 5323 then 6085 — both dead
tail discover-keepalive.log       # PASS1=1; shanxi stuck; timeout: command not found; rc=127
ls research/notes/xhs-discovery/  # 4 md
# route-shortlist-discovery: 28 missing provinces
# XHS覆盖状态: 路线数：53
# page.tsx map before cover; RouteOverviewMap 示意 string
curl :3000 → 200
npm run ux:plan → 13 pass / 0 fail
```
