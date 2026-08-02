# Plan verify · soft-short character + duration batch 2 (2026-08-02)

Read-only verify against `research/notes/content-backlog-20260802.md` after commits `8dfb019` + `5c6ad29` (backlog duration batch 2 note also in follow-up `a8905ae`).

**Verdict: PASS**

| # | Check | Result | Evidence |
|---|--------|--------|----------|
| 1 | `soft-short-character-20260802.ts` wired as p9 (+ r5 `routeFieldPatches`) | **PASS** | `content/audit-patches/index.ts` imports `detailPatches as p9` and `routeFieldPatches as r5`; `detailPatchList` ends with p9; `routePatchList` = `[r1…r4, r5]`. |
| 2 | 49 detail patches; sample 5 intro≥200 & notices≥6 at runtime | **PASS** | **49** keys. Sample (`huanan-hainan-slow-west`, `huadong-jiangsu-yangzhou`, `huanan-guangdong-foshan`, `yunnan-xishuangbanna-winter`, `huabei-hebei-beidaihe`): runtime intro 204–218, notices **6**. All 49: merged fail **0**, runtime fail **0**. |
| 3 | Catalog intro&lt;200 == 0; strict THIN == 0 | **PASS** | Runtime catalog **182** routes → intro&lt;200 = **0**; STRICT_THIN (intro&lt;200 ∧ notices&lt;5) = **0**. |
| 4 | Duration honesty via r5 (广潮 / 琼西 / 版纳) | **PASS** | Base still leads with 2–3周 / 2–4周 blobs; r5 overwrites. Runtime: 广潮 `约7–10天（慢住可延至约2周）`; 琼西 `约10–14天（可压到一周）`; 版纳 `约10–14天（慢住可延至2–3周）`. None lead with 2–3周 / 2–4周. |
| 5 | Backlog honesty (wave 6 + duration batch 2) | **PASS** | Soft-short **49** + intro&lt;200 清零 checked; duration batch 2 labels match runtime; next-session drops the 2–3周续扫 item (`a8905ae`). Dining `&lt;35` still **0**. |
| 6 | No ChinaMapExplorer edits | **PASS** | `8dfb019`/`5c6ad29` touch only: `soft-short-character-20260802.ts`, `audit-patches/index.ts`, `content-backlog-20260802.md`. |

## Confirmed metrics

| Metric | Value |
|--------|-------|
| Soft-short deepen (p9) | **49** |
| Soft remaining (intro&lt;200) | **0** / 182 |
| Strict THIN | **0** |
| Hand PG dining &lt;35 | **0** |

## Duration labels confirmed (runtime)

| Route id | daysLabel |
|----------|-----------|
| `huanan-guangzhou-chaoshan` | 约7–10天（慢住可延至约2周） |
| `huanan-hainan-slow-west` | 约10–14天（可压到一周） |
| `yunnan-xishuangbanna-winter` | 约10–14天（慢住可延至2–3周） |

## Next tasks

1. **Image residuals** — keep 乐亭/左云 soft + qiziwan gen until safe Commons; optional 伪满馆 dedicated photo if available.
2. **逐条精细化** — stops/tips beyond character framing for high-traffic hubs (character intros are done).
3. **Optional Explore UX** — 长居 chip / base 详情 polish (compose timeline already PASS).
4. **Extreme alpine honesty** — keep 川藏东段等 warning cards; do not force compose splits.
5. **Optional duration spot-check** — other long cards still leading with multi-week blobs outside this batch of three (only if product wants another honesty pass).
