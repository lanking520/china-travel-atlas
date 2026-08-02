# Content backlog · 2026-08-02

Durable checklist for china-travel-atlas content quality after wave 2 (`254c0f0` → UX `f4866a6`).  
Check items off as sessions complete them; keep unchecked work visible for the next agent.

IA proposal: [`content-route-composition-ia-20260802.md`](./content-route-composition-ia-20260802.md)

## Open — product / composition IA

- [x] **长线 = 多条短线** — pilot: extracted `leg-kuqa-canyon`（全国其余 long 走廊待拆）
- [x] **长线选项仍保留** — pilot: `compose-nanjiang-kuqa-kashi` = ordered legIds + glue（阿克苏过夜）；不复述景点正文
- [ ] **长居以地点为中心** — each `base` recommends nearby transit-friendly legs / overnight day-trips and optional composed loops（南疆无现成 longstay hub；未新建 base-kashi）
- [x] **Pilot schema** — `compositionKind?: leg | compose | base` + `legIds` / `glue` / `nearbyLegs`；filter labels 短线/长线（长居仍用 theme）
- [x] **南疆 pilot migration** — `leg-kuqa-canyon` + densified `xibei-xinjiang-kashi`；`xibei-xinjiang-south` → `compose-nanjiang-kuqa-kashi`

## Open — quality (prior)

- [ ] **Image query optimization** — better place-image matching; fix wrong / soft / 404; prefer verified Wikimedia Commons; improve lookup scripts/pipeline; no Unsplash-as-attraction for covers/stops
- [ ] **Regional / attraction character** — each route should convey 地区特色、文化、美食 beyond thin logistics stubs
- [ ] **Itinerary density honesty** — don’t pad empty days; expand worth-seeing stops **or** shorten duration (喀什 pattern)
- [ ] **逐条精细化补充** — route-by-route enrichment (stops, tips, culture, food, practical), priority famous → city → prefecture
- [ ] **Remaining THIN (~80–90 / ~164)** — coverage/prefecture fills, leftover famous-p stubs beyond wave-2 slice
- [ ] **Leftover one-line PG dining** — expand remaining short `dining` lines to 2–4 dishes + 清淡/适老

## Done this stream (2026-08-02)

- [x] **南疆 compose pilot** — `leg-kuqa-canyon` + `compose-nanjiang-kuqa-kashi`（legIds→库车/喀什；阿克苏 glue）；schema `compositionKind`/`legIds`/`glue`
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

1. Explore compose UX: timeline of embedded legs + tap-through；optional compositionKind chips（短线/长线/长居）
2. Second corridor pilot: 川西 or 河西敦煌–张掖
3. Duration-honesty pass on other padded longs
4. Image 404 audit in `place-images.ts` + Unsplash purge on touched routes
5. Famous THIN + leftover PG dining；optional `base-kashi` / longstay nearbyLegs if hub ships
