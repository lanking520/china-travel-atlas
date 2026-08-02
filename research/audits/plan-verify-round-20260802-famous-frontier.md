# Plan verify · famous-frontier character (2026-08-02)

Read-only verify against `research/notes/content-backlog-20260802.md` after commit `70d7aa6`.

**Verdict: PASS**

| # | Check | Result | Evidence |
|---|--------|--------|----------|
| 1 | Patch file exists + wired as p8 | **PASS** | `content/audit-patches/famous-frontier-character-20260802.ts` present; `index.ts` imports `detailPatches as p8` and includes it in `detailPatchList` (commit adds only this wiring). |
| 2 | Patch count ≈58; sample 5 intro≥200 & notices≥6 at runtime | **PASS** | **58** keys. Sample (`baoding`, `putuo`, `frontier-dandong`, `pingyao-deep`, `wuyi`): merged + `routes` (preferRicherText / preferRicherNotices) all intro 215–235, notices **6**. All 58 keys: merged fail 0, runtime fail 0. |
| 3 | Catalog strict THIN (intro&lt;200 ∧ notices&lt;5) == 0 | **PASS** | Runtime catalog **182** routes → **STRICT_THIN = 0**. |
| 4 | Backlog honesty (wave 5 / soft-short / dining) | **PASS** | Wave 5 notes present (58 deepen, THIN 清零, images leave). Remaining intro&lt;200 = **49** (within ≈45–55 / ≈49). Dining `&lt;35` = **0**. Soft-short residual is city/coverage/longstay shallow intros, not this slice. |
| 5 | No ChinaMapExplorer edits in 70d7aa6 | **PASS** | Commit touches only: `famous-frontier-character-20260802.ts`, `audit-patches/index.ts`, `content-backlog-20260802.md`. |
| 6 | Images: 乐亭/左云/qiziwan left soft/gen | **PASS** | No place-image edits in commit. Still: `ts-laoting-optional` + `datong-zuoyun-optional` in `PLACE_SOFT_IDS`; `qiziwan-optional` gen PNG. Backlog wave 5: leave soft/gen. |

## Confirmed metrics

| Metric | Value |
|--------|-------|
| Deepened (famous-frontier patch) | **58** |
| Strict THIN remaining | **0** |
| Catalog intro&lt;200 (soft-short) | **49** / 182 |
| Hand PG dining &lt;35 | **0** |

## Next tasks

1. **Soft-short deepen (~49 intro&lt;200)** — prioritize prior city/coverage shallow patches (大连/洛汴/广潮/重庆/北戴河/长居等); notices already ≥5, only need intro≥200.
2. **Duration-honesty 续扫** — 广州潮汕、琼西、版纳等 still 2–3周 blobs (backlog suggested next).
3. **Image residuals** — keep 乐亭/左云 soft + qiziwan gen until safe Commons; optional 伪满馆 dedicated photo if available.
4. **Optional Explore UX** — 长居 chip / base 详情 polish (compose timeline already PASS).
5. **逐条精细化** — stops/tips beyond character framing for high-traffic famous-p after soft-short clears.
