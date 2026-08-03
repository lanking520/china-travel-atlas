# Ctrip enrich rollup · 2026-08-02

Clean verify after global fan-out on `main` (commits `1eb32c0` … `cc478af`).

## Patches registered

All five bundles import + merge in `content/audit-patches/index.ts` (`p10`–`p14`, `r8`–`r12`):

| Patch file | Commit (topic) |
| --- | --- |
| `ctrip-enrich-huabei-dongbei-20260802.ts` | `1eb32c0` 华北/东北 |
| `ctrip-enrich-xibei-qingzang-20260802.ts` | `400a57b` 西北/青藏 |
| `ctrip-enrich-xinan-20260802.ts` | `4c68af0` 西南 |
| `ctrip-enrich-huazhong-huanan-20260802.ts` | `ff0ff19` 华中/华南 |
| `ctrip-enrich-huadong-20260802.ts` | `cc478af` 华东 |

Per-batch notes: `research/notes/ctrip-enrich-*-20260802.md`.

## Totals by region (detail overlays)

Counts = unique route ids in each patch’s `detailPatches` with `practicalGuide` and/or `introduction`.

| Region batch | detail ids | practicalGuide | introduction | either | routeField sources |
| --- | ---: | ---: | ---: | ---: | ---: |
| 华北/东北 | 43 | 43 | 0 | 43 | 46 |
| 华东 | 30 | 30 | 30 | 30 | 30 |
| 西南 | 37 | 37 | 37 | 37 | 37 |
| 华中/华南 | 55 | 55 | 55 | 55 | 55 |
| 西北/青藏 | 32 | 0 | 32 | 32 | 32 |
| **Unique all** | **197** | **165** | **154** | **197** | **200** |

Catalog check (`lib/generated/explore-routes.json`): **197/201** routes have PG|intro from these patches. Remaining **4** are intentional 华北 skips (already-rich hand PG): `mutianyu-day`, `gubei-overnight`, `tianjin-day`, `huabei-shanxi-loop` — three still got Ctrip `sources` only; `mutianyu-day` already had Ctrip sources.

## Still thin

- **西北/青藏** — intro/notices only in this fan-out; **0** new `practicalGuide` overlays (rely on prior hand PG / earlier audits).
- **西南** — PG backfill done **6→37** (see region note); rollup table above updated.
- **华北/东北** — PG-only style (no introduction rewrite in batch); 4 short lines skipped by design.

华东 + 华中/华南 are the fullest (intro + PG on every patched id).

## Verify

| Check | Result |
| --- | --- |
| Patches on `main` + registered | PASS |
| `npx tsc --noEmit` | PASS |
| `npm run ux:plan` | skipped (no local preview on :3000) |
| Register/merge bugs | none found |

## Verdict

**PARTIAL** — fan-out registered and typechecks; catalog coverage of either-overlay is complete aside from 4 intentional 华北 skips. Residual thinness is **practicalGuide** on 西北/青藏 (none in ctrip batch), plus no UX lock this round. 西南 PG backfill **6→37** done.

### Next (optional)

1. Backfill `practicalGuide` for 西北/青藏 ctrip batch (or cite prior PG as sufficient).
2. Run `npm run preview` + `ux:plan` when convenient.
3. Optional intro pass for 华北/东北 if product wants parity with 华东 style.
