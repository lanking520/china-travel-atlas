# Content backlog · 2026-08-02

Durable checklist for china-travel-atlas content quality after wave 2 (`254c0f0` → UX `f4866a6`).  
Check items off as sessions complete them; keep unchecked work visible for the next agent.

IA proposal: [`content-route-composition-ia-20260802.md`](./content-route-composition-ia-20260802.md)  
Long-stay hubs: [`long-stay-cities-20260802.md`](./long-stay-cities-20260802.md)

## Standing criteria — 长居城市 (`longstay-*` / `base`)

Every long-stay / base hub must meet (document honesty if partial):

1. **交通便利** — reliable airport / HSR / highway access as relevant  
2. **生活物资丰富** — daily supplies & pharmacies for ~1 month stays  
3. **医疗资源丰富** — **本地三甲优先**；若仅二甲/县医院，须醒目写明并给出可下撤三甲  

Fail or weak → rethink queue (keep card only with prominent caveats, or demote).

## Open — product / composition IA

- [x] **长线 = 多条短线** — pilot: extracted `leg-kuqa-canyon`（全国其余 long 走廊待拆）
- [x] **长线选项仍保留** — pilot: `compose-nanjiang-kuqa-kashi` = ordered legIds + glue（阿克苏过夜）；不复述景点正文
- [x] **长居以地点为中心** — `base-kashi` + `nearbyLegs` → kashi leg / kuqa leg / nanjiang compose；门槛审计见上
- [x] **Pilot schema** — `compositionKind?: leg | compose | base` + `legIds` / `glue` / `nearbyLegs`；filter labels 短线/长线（长居仍用 theme）
- [x] **南疆 pilot migration** — `leg-kuqa-canyon` + densified `xibei-xinjiang-kashi`；`xibei-xinjiang-south` → `compose-nanjiang-kuqa-kashi`
- [ ] **Explore compose / base UX** — timeline of embedded legs； compositionKind chips（短线/长线/长居）；详情「周边短线」已接 `nearbyLegs`
- [ ] **Second corridor pilot** — 川西 or 河西敦煌–张掖（sketch only in IA note）
- [ ] **National long→compose migration** — after second pilot
- [ ] **Rethink weak longstay** — `longstay-zhenyuan`（无本地三甲）；`longstay-yangshuo`（桂林下撤）持续告警或降级

## Open — quality (prior)

- [ ] **Image query optimization** — better place-image matching; fix wrong / soft / 404; prefer verified Wikimedia Commons; improve lookup scripts/pipeline; no Unsplash-as-attraction for covers/stops
- [ ] **Regional / attraction character** — each route should convey 地区特色、文化、美食 beyond thin logistics stubs
- [ ] **Itinerary density honesty** — don’t pad empty days; expand worth-seeing stops **or** shorten duration (喀什 pattern)
- [ ] **逐条精细化补充** — route-by-route enrichment (stops, tips, culture, food, practical), priority famous → city → prefecture
- [ ] **Remaining THIN (~80–90 / ~164)** — coverage/prefecture fills, leftover famous-p stubs beyond wave-2 slice
- [ ] **Leftover one-line PG dining** — expand remaining short `dining` lines to 2–4 dishes + 清淡/适老

## Done this stream (2026-08-02)

- [x] **长居三门槛** — backlog + `long-stay-cities` audit；8 longstay PG 交通/物资/三甲加厚；`base-kashi` 对照门槛
- [x] **`base-kashi`** — nearbyLegs = `xibei-xinjiang-kashi`, `leg-kuqa-canyon`, `compose-nanjiang-kuqa-kashi`
- [x] **南疆 compose pilot** — `leg-kuqa-canyon` + `compose-nanjiang-kuqa-kashi`（legIds→库车/喀什；阿克苏 glue）；schema `compositionKind`/`legIds`/`glue`
- [x] Mid NCF deepen: **黄山** / **张家界** / **桂林阳朔**
- [x] Wave 2 prior: frontier six + prefecture-f + famous THIN slice
- [x] PG dining batch for many hubs (leftovers remain)
- [x] **喀什 densify (leg shape)** — `xibei-xinjiang-kashi` → ~4–6天
- [x] Composition IA note written；national split **not** started

## Notes

- Discovery gate remains multi-source (`research/notes/multi-discovery/`); XHS optional review only.
- Prefer richer patch intros over thin `route-details` stubs (runtime `preferRicherText`).
- Content agents avoid `ChinaMapExplorer` unless asked.
- Related: `research/audits/content-quality-screen-20260802.md`

## Suggested next session order

1. Second corridor pilot: 川西 or 河西敦煌–张掖（按 IA sketch 拆 leg + compose）
2. Explore compose UX chips / timeline polish
3. Decide zhenyuan / yangshuo rethink（告警保留 vs 降级短线）
4. Duration-honesty pass on other padded longs
5. Image 404 audit + famous THIN + leftover PG dining
