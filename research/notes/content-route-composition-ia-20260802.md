# Route composition IA · 20260802

Proposal for reorganizing china-travel-atlas materials so **长线 = 短线组合**, **长居 = hub + 辐射短线**, without duplicating attraction copy.

## Problem today

- `tripType: long | short` mixes *duration* with *product shape*.
- Long corridors (e.g. 南疆 2–3 周、川西慢走) often pad empty days or rewrite the same stops that already exist as shorter cards.
- Long-stay (`longstay-*`) feels like a third parallel universe instead of a **base** that points at nearby legs.
- Parents need: clear short trips (2–4 days, one job) **and** optional multi-week paths that are honest concatenations.

## Recommended kinds

| Kind | Chinese lens | What it is | Owns |
| --- | --- | --- | --- |
| **`leg`** | 短线 | Independent trip, usually 2–4 days (sometimes to ~7 for one famous scenic), one clear purpose | Stops, culture/food, PG, images |
| **`compose`** | 长线 | Ordered list of `leg` ids + glue (drive/rail times, overnight hubs, rest days) | Sequencing + logistics only |
| **`base`** | 长居 | Place-centered hub (weeks–months) | Housing/hospital rhythm + **radiating** `leg` / overnight suggestions |

Map onto today’s fields gradually:

- Keep `tripType` for filters if needed, but add `compositionKind?: 'leg' | 'compose' | 'base'` (or overload `tripType` later).
- `compose.legs: { id: string; glue?: string; nights?: number }[]`
- `base.nearbyLegs: string[]` (day-trips / 1–2 night)

## Content file shape (practical)

1. **Stop facts once** — `stops` / `place-images` / tips stay on the **leg** (or a shared stop registry later).
2. **Legs** — today’s short + famous + prefecture cards; enrich culture/food here.
3. **Compose** — thin record: title, season, budget band, ordered leg ids, glue copy (“库车→阿克苏 ≤5h，中间过夜”), rest-day policy. **No** re-pasted stop paragraphs.
4. **Base** — longstay intros stay; add “从这里可串” chip list of leg ids already in catalog.

Do **not** duplicate stop text inside every compose.

## Explore UX (content contract)

- Filters: **短线 / 长线 / 长居** (map to `leg` / `compose` / `base`).
- Compose detail: timeline of embedded legs (title + daysLabel + one-line glue); tap-through to full leg.
- Base detail: hub practical first; section “周边短线” / “可串成长线” from `nearbyLegs` / suggested composes.
- Search: legs remain primary hits; composes secondary (“含喀什老城短线”).

## Migration order

1. **Pilot corridor: 南疆 / 喀什周边** (sketch below) — split `xibei-xinjiang-south` + densify `xibei-xinjiang-kashi` as legs; compose = ordered legs.
2. Second pilot: **川西** or **河西敦煌–张掖** (already segmented feeling).
3. Only then national rewrite of remaining `long` stubs.
4. Wire `compositionKind` + Explore filters after one pilot ships in data (UI can lag one session).

## Pilot sketch — 南疆

### Legs (independent)

| id (proposed) | Role | Days |
| --- | --- | --- |
| `xibei-xinjiang-kashi` *(exists, densifying)* | 喀什老城 + 可选帕米尔一日 | ~4–6 |
| `leg-kuqa-canyon` *(extract from south)* | 库车天山神秘大峡谷 | ~2–3 |
| `leg-aksu-buffer` *(optional thin leg or glue-only overnight)* | 阿克苏缓冲过夜 | 1–2 |
| *(future)* `leg-hotan-carpet` etc. | only with multi-discovery evidence | — |

### Compose

| id | Legs order | Glue only |
| --- | --- | --- |
| `compose-nanjiang-kuqa-kashi` *(evolves today’s `xibei-xinjiang-south`)* | kuqa → aksu overnight → kashi | single-day drive ≤5h; no ring-Tarim; rest days between legs |

### Base (pilot)

| id | Radiates | Hub bar |
| --- | --- | --- |
| `base-kashi` | `xibei-xinjiang-kashi`, `leg-kuqa-canyon`, `compose-nanjiang-kuqa-kashi` | 机场+市区物资+本地三甲（地区一院）；专科下撤乌市 |

### Pilot status (20260802)

- Shipped: `leg-kuqa-canyon` + densified `xibei-xinjiang-kashi` as legs; `compose-nanjiang-kuqa-kashi` replaces `xibei-xinjiang-south` (legIds + glue; 阿克苏 overnight only).
- Shipped: `base-kashi` with `nearbyLegs`; detail page「周边短线」reads `nearbyLegs`.
- Schema: `compositionKind` / `legIds` / `glue` / `nearbyLegs` on `Route`.
- Still open: Explore compose timeline / compositionKind chips; national long→compose migration; second corridor pilot.

## Second corridor sketch (notes only — not migrated)

### Option A — 河西 `xibei-dunhuang-zhangye`（已分段感强，优先）

| Proposed leg | Role | Days |
| --- | --- | --- |
| `leg-dunhuang-mogao` *(extract)* | 莫高预约 + 鸣沙浅尝 | ~4–7 |
| `leg-jiayuguan-buffer` *(thin or glue)* | 嘉峪关过夜缓冲 | 1–2 |
| `leg-zhangye-danxia` *(extract)* | 七彩丹霞观光车 | ~2–3 |
| Compose `compose-hexi-dunhuang-zhangye` | ordered legs + glue（敦煌→嘉峪关→张掖，单日≤4–5h） | ~2–3周 |

### Option B — 川西 `xinan-chuanxi-slow`（高反诚实优先）

| Proposed leg | Role | Days |
| --- | --- | --- |
| `leg-chengdu-adapt` | 平原适应/回撤锚 | 2–3 |
| `leg-xinduqiao-view` | 新都桥观景浅停（约3300m） | ~2 |
| `leg-daocheng-optional` | 稻城/亚丁高可选·默认可删 | ~3 |
| Compose | 成都→新都桥→（可选亚丁）→下撤成都；glue=车程与高反政策 | 约10天–2周 |

Do **not** national-migrate until one of A/B ships like 南疆.

## What NOT to do

- National big-bang rename of all 160+ routes in one PR.
- Copy-paste 艾提尕尔 / 峡谷 paragraphs into every compose.
- Force every longstay to become a compose (bases stay place-first).
- Block image / culture / dining backlog on schema work.
- Ship new `base` / `longstay` that fails 交通/物资/三甲 without honesty caveats.

## Success criteria for pilot

- Parent can book **only 喀什 4–6 天** without reading a 2–3 week corridor.
- Parent who wants南疆走廊 sees the same喀什 leg embedded, not a second conflicting write-up.
- Parent who wants约一个月喀什慢居 finds `base-kashi` + nearbyLegs, not a padded long corridor.
- Catalog count may rise (more legs) while **unique stop prose** does not double.
