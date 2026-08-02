# Plan verify — UX clean-light (`47a0e23` + `ae3bab8`)

> 2026-08-02 · clean-context verify after compact filters + calendar season + compose timeline polish.  
> Scope: Explore chrome / compose detail only — no `content/*` edits.

## Verdict: **PASS**

| # | Check | Result | Evidence |
|---|--------|--------|----------|
| 1 | Calendar season default ≠ massive dead-leads | **PASS** | Summer default ~105 / 168 routes; hint「已按当季」; dismissible「夏季 ×」chip;「全部季节」→ 168; search 婺源/九寨/黄山 hit without clearing season |
| 2 | Compact sticky ≠ half viewport | **PASS** | iPhone 12: sticky ~22.6% at rest (~150px); after scroll-collapse ~7.2% (~48px chip strip) |
| 3 | Compose timeline 河西 / 南疆 | **PASS** | `/routes/compose-hexi-dunhuang-zhangye/` + `compose-nanjiang-kuqa-kashi/`: 组合时间线, sticky「组合」, sky chrome, interleaved「衔接」glue |
| 4 | `npm run ux:plan` | **PASS** | **21 / 21** (see `research/notes/_plan-playwright.md`) |
| 5 | UX backlog tick + remaining | **PASS** | Shipped items already `[x]` in `ux-backlog-20260802.md`; remaining noted below |

## Fixes

None — no code changes this round.

## Remaining (from UX backlog)

- Auto-hide chip strip on deep scroll if many chips still feel tall
- True virtualization if catalog ≫ ~200 and scroll janks
- Mobile bottom nav (探索 / 两年 / 说明) + safe-area
- P2: embla gallery + light motion; offline search index if catalog grows

## Next tasks (parent)

1. Optional: lock sticky-share + compose timeline into `ux:plan` (P21/P22) so regressions catch early.
2. Live Pages smoke after next deploy (calendar season + compose sticky「组合」).
3. Leave national long→compose / 川西 content to content agents — do not touch `content/*` from UX stream.
4. If chip pile grows (season + theme + region), prioritize auto-hide strip on deep scroll.
5. Revisit Explore「长居」chip / `base` detail polish only after content hubs stabilize.
