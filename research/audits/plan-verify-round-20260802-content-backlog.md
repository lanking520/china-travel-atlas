# Plan verify — content backlog wave (`2af19ee`)

Against `research/notes/content-backlog-20260802.md`. Read-only check 2026-08-02.

## Verdict: PASS (after follow-up)

| Check | Result | Notes |
|-------|--------|-------|
| 1. Wrong-city images + soft + qiziwan | **PASS** | Covers/stops: 长春≠Yanji, 海口≠Sanya Bay, 呼市≠Hulunbuir (Commons HEAD 200). Soft removed for upgraded cc/hk-longhua/hh-city+buffer; `hk-volcano` / `hh-xilamuren` still soft by design. `qiziwan-optional` still in `PLACE_GENERATED_IDS` → gen PNG. Pipeline FILES synced. |
| 2. City-character deepen | **PASS** | `city-character-20260802` in `audit-patches/index` as p5. Sample 5 ids: patch intros ≫ coverage stubs; runtime merge via `preferRicherText`. **26** keys. |
| 3. PG dining expand | **PASS** | Diff **+41** dining; prior short&lt;35 was **93** → now **52** (182 total). |
| 4. Backlog honesty | **PASS** | Follow-up: Done/open notes corrected **25→26**. Dining 41/52 OK; THIN ~55–70/182 plausible. |
| 5. ChinaMapExplorer | **PASS** | Not in `2af19ee` file list. |

## Next tasks (parent)

1. ~~Fix backlog count 25→26~~ **done**
2. Continue leftover PG dining (`&lt;35` ≈52), prioritize coverage/prefecture stubs.
3. Image residuals: 乐亭/左云 soft; optional dedicated 伪满馆 photo; keep qiziwan gen until safe Commons.
4. Duration-honesty续扫: 广州潮汕、琼西、版纳等 2–3周 blob.
5. Remaining famous/coverage THIN beyond city-character batch.
