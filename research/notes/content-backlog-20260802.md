# Content backlog · 2026-08-02

Durable checklist for china-travel-atlas content quality after wave 2 (`254c0f0` → UX `f4866a6`).  
Check items off as sessions complete them; keep unchecked work visible for the next agent.

IA proposal: [`content-route-composition-ia-20260802.md`](./content-route-composition-ia-20260802.md)

## Open — product / composition IA

- [ ] **长线 = 多条短线** — split overlong / hollow `long` corridors into independent **短线** (`leg`, ~2–4 days, one clear purpose)
- [ ] **长线选项仍保留** — compose corridors by geography: ordered `leg` ids + glue (drive times, overnight hubs); do **not** duplicate stop essays
- [ ] **长居以地点为中心** — each `base` recommends nearby transit-friendly legs / overnight day-trips and optional composed loops
- [ ] **Pilot schema** — add `compositionKind: leg | compose | base` (or equivalent) after 南疆 pilot copy is stable; Explore filters 短线/长线/长居
- [ ] **南疆 pilot migration** — extract `leg-kuqa-canyon` (+ aksu glue); evolve `xibei-xinjiang-south` → compose referencing `xibei-xinjiang-kashi` (see IA note)

## Open — quality (prior)

- [ ] **Image query optimization** — better place-image matching; fix wrong / soft / 404; prefer verified Wikimedia Commons; improve lookup scripts/pipeline; no Unsplash-as-attraction for covers/stops
- [ ] **Regional / attraction character** — each route should convey 地区特色、文化、美食 beyond thin logistics stubs
- [ ] **Itinerary density honesty** — don’t pad empty days; expand worth-seeing stops **or** shorten duration (喀什 pattern)
- [ ] **逐条精细化补充** — route-by-route enrichment (stops, tips, culture, food, practical), priority famous → city → prefecture
- [ ] **Remaining THIN (~80–90 / ~164)** — coverage/prefecture fills, leftover famous-p stubs beyond wave-2 slice
- [ ] **Leftover one-line PG dining** — expand remaining short `dining` lines to 2–4 dishes + 清淡/适老

## Done this stream (2026-08-02)

- [x] Mid NCF deepen: **黄山** (`huadong-huangshan-hui`) — 徽州气场 + 徽菜 + notices/dining
- [x] Mid NCF deepen: **张家界** (`huazhong-zhangjiajie`) — 土家/湘西 + 湘菜适老 + notices/dining
- [x] Mid NCF deepen: **桂林/阳朔** (`huanan-guilin-yangshuo`) — 喀斯特/壮瑶 + 桂菜 + notices/dining
- [x] Wave 2 prior: frontier six + prefecture-f + famous THIN slice
- [x] PG dining batch for many hubs (leftovers remain)
- [x] **喀什 densify (leg shape)** — `xibei-xinjiang-kashi` → ~4–6天 with 艾提尕尔/老扎/香妃墓 stops; south corridor kashi stop 4→2 days; Commons covers; PG + detail aligned
- [x] Composition IA note written (`content-route-composition-ia-20260802.md`); national split **not** started

## Notes

- Discovery gate remains multi-source (`research/notes/multi-discovery/`); XHS optional review only.
- Prefer richer patch intros over thin `route-details` stubs (runtime `preferRicherText`).
- Content agents avoid `ChinaMapExplorer` unless asked.
- Related: `research/audits/content-quality-screen-20260802.md`

## Suggested next session order

1. Finish 南疆 pilot: extract kuqa leg + mark south as compose-shaped (schema optional if copy-first)
2. Duration-honesty pass on other padded longs
3. Image 404 audit in `place-images.ts` + Unsplash purge on touched routes
4. Famous THIN + leftover PG dining
5. Explore filters for leg/compose/base after data pilot
