# Ctrip enrich rollup · 2026-08-02

Clean verify after global fan-out on `main` (commits `1eb32c0` … `cc478af`), plus regional PG backfills.  
**Pinned HEAD:** `9478529` (西北/青藏 PG companion) — rollup still accurate; no new regional batches after tip.

## Patches registered

All five bundles import + merge in `content/audit-patches/index.ts` (`p10`–`p14`, `r8`–`r12`):

| Patch file | Commit (topic) |
| --- | --- |
| `ctrip-enrich-huabei-dongbei-20260802.ts` | `1eb32c0` 华北/东北 |
| `ctrip-enrich-xibei-qingzang-20260802.ts` | `400a57b` 西北/青藏 (+ PG companion backfill) |
| `ctrip-enrich-xinan-20260802.ts` | `4c68af0` 西南 |
| `ctrip-enrich-huazhong-huanan-20260802.ts` | `ff0ff19` 华中/华南 |
| `ctrip-enrich-huadong-20260802.ts` | `cc478af` 华东 |

Per-batch notes: `research/notes/ctrip-enrich-*-20260802.md`.

## Totals by region (detail overlays)

Counts = unique route ids in each patch’s `detailPatches` with `practicalGuide` and/or `introduction`.

| Region batch | detail ids | practicalGuide | introduction | either | routeField sources |
| --- | ---: | ---: | ---: | ---: | ---: |
| 华北/东北 | 44 | 43 | 44 | 44 | 46 |
| 华东 | 30 | 30 | 30 | 30 | 30 |
| 西南 | 37 | 37 | 37 | 37 | 37 |
| 华中/华南 | 55 | 55 | 55 | 55 | 55 |
| 西北/青藏 | 32 | 32 | 32 | 32 | 32 |
| **Unique all** | **198** | **197** | **198** | **198** | **200** |

Catalog check: **198/201** routes have PG|intro from these patches. Remaining **3** intentional skips (strong hand intros, no intro rewrite): `gubei-overnight`, `tianjin-day`, `huabei-shanxi-loop`. `mutianyu-day` got intro parity (PG still hand).

## Regional residuals

- **西北/青藏** — **done**: intro + **32/32** `practicalGuide` (companion `ctrip-enrich-xibei-qingzang-pg-20260802.ts`, same register).
- **西南** — PG backfill done **6→37** (see region note).
- **华北/东北** — **done**: introduction parity **44** (PG 43 + thin `mutianyu-day` intro); 3 strong-intro skips.

## Verify

| Check | Result |
| --- | --- |
| Patches on `main` + registered | PASS |
| `npx tsc --noEmit` | PASS |
| 西北/青藏 PG backfill (32) | PASS |
| `npm run ux:plan` | skipped (no local preview on :3000) |
| Register/merge bugs | none found |

## Verdict

**PASS** on regional PG|intro coverage for the five Ctrip batches (198 either-overlays; 3 intentional 华北 intro skips). 华北/东北 introduction parity **done (44)**. Post-Ctrip plan verify: `research/audits/plan-verify-round-20260802-post-ctrip.md`.

### Next (optional)

1. ~~Backfill `practicalGuide` for 西北/青藏 ctrip batch~~ **done (32)**.
2. ~~Backfill 西南 PG 6→37~~ **done**.
3. ~~Optional intro pass for 华北/东北~~ **done (44)**.
4. Run `npm run preview` + `ux:plan` when convenient.
