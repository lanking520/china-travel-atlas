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
2. Second pilot: **河西敦煌–张掖** (shipped) → **川西浅廊** (shipped, age-friendlier legs).
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
| `base-guilin` | `longstay-yangshuo`, `huanan-guilin-yangshuo` | 两江+高铁+本地三甲（桂医附院）；阳朔不作月租主锚 |
| `base-guiyang` | `longstay-zhenyuan`, `xinan-guizhou-zhenyuan`, `xinan-guizhou-huangguoshu`, `xinan-guizhou-dong-corridor`, `xinan-guizhou-loop` | 龙洞堡+高铁+本地三甲（贵医/省医）；镇远不作月租主锚 |

### Pilot status (20260802)

- Shipped: `leg-kuqa-canyon` + densified `xibei-xinjiang-kashi` as legs; `compose-nanjiang-kuqa-kashi` replaces `xibei-xinjiang-south` (legIds + glue; 阿克苏 overnight only).
- Shipped: `base-kashi` with `nearbyLegs`; detail page「周边短线」reads `nearbyLegs`.
- Schema: `compositionKind` / `legIds` / `glue` / `nearbyLegs` on `Route`.
- Still open: national long→compose migration；Explore 长居 chip polish 可选。
- Shipped: `base-guilin` / `base-guiyang` with nearbyLegs（阳朔/漓江；镇远/黄果树/黔东南/loop）。
- Shipped UX: Explore 短线/长线 chips + compose detail **组合时间线** (legs + glue).

## Second corridor — 河西（shipped 20260802）

**Decision lean**：河西 A 优先于川西 B（海拔友好、适老摩擦更低）。川西后改用平原/乐山/九寨适老浅段，不强制新都桥/稻城。

### Option A — 河西（migrated）

退役：`xibei-dunhuang-zhangye`。不新建景点正文——从现卡抽出 stops。

| Leg / compose | Role | Days | Notes |
| --- | --- | --- | --- |
| `leg-dunhuang-mogao` | 莫高预约 + 鸣沙浅尝 | ~5–7 | 预约失败日改鸣沙/市区空白；已 densify（不垫十日） |
| *(glue)* 嘉峪关 | 关城半日+过夜缓冲 | 1–2 | glue-only stop on compose；不硬爬悬壁 |
| `leg-zhangye-danxia` | 七彩丹霞观光车 | ~2–3 | 台阶量力；一日足够可压天 |
| `compose-hexi-dunhuang-zhangye` | 敦煌 → 嘉峪关 → 张掖 | ~2–3周 | glue：单日车/铁 ≤4–5h；段间空白；不环线硬赶 |

可选 base（未立项）：兰州或张掖城住仅当日归辐射——须先过三甲/物资门槛再开 `base-*`。

### Option B — 川西浅廊（shipped 20260802）

退役极端卡：`xinan-chuanxi-slow`（新都桥/稻城）。平原回撤锚 = 成都（医疗 PASS）。**不强制**四姑娘/新都桥/稻城；G318 东段等短线仍可独立存在。

| Leg / compose | Role | Days | Notes |
| --- | --- | --- | --- |
| `leg-chengdu-adapt` | 平原适应/回撤锚 | 2–3 | 华西下撤；更长慢住仍用 `xinan-chengdu-slow` |
| `xinan-sichuan-leshan-emei` *(reuse)* | 大佛 + 金顶可选 | ~3–5 | 金顶可删 |
| *(glue)* 成都 | 缓冲过夜 + 回撤 | 1–2 | glue-only；不加点 |
| `xinan-sichuan-jiuzhaigou` *(reuse)* | 九寨栈道慢线（黄龙可删） | ~4–6 | ~2000–3000m 诚实评估；比若尔盖/四姑娘更适老 |
| `compose-chuanxi-chengdu-leshan-jiuzhai` | 成都 → 乐山 → 成都 → 九寨 | ~2–3周 | glue=车程/航班 + 高反回撤 |

Do **not** national-migrate remaining longs until ready; three corridor pilots (南疆/河西/川西) are the pattern.

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
