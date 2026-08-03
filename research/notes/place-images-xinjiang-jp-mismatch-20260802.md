# Place-images — Xinjiang JP / hiragana mismatch — 2026-08-02

**Trigger:** User saw Japanese hiragana on 新疆 attraction photos (wrong Commons filename match).

**Baseline:** After `4dd8733` (西南/西北 soft batch) — `urumqi-museum` / `urumqi-bazaar-optional` already place-accurate; remaining Xinjiang covers still used several dead or wrong filenames.

## Confirmed bad → good

| IDs (covers / stops) | Was | Problem | Now |
| --- | --- | --- | --- |
| `kanas`, `leg-kanas`, `compose-beijiang-sayram-kanas` (+ NW patch/detail embeds) | `Kanas.jpg` (`0/03/…`) | **JP mismatch:** Commons file is Gojūon hiragana chart («japonské abecedy») | `Lake_Kanas.jpg` (Lake Kanas, Xinjiang) |
| `grape-valley`, `turpan-silk`, `xibei-xinjiang-turpan` | `Grape_Valley.jpg` | Commons **missing** (stale thumb) | `Turpan_grape_valley.jpg` |
| `turpan-city` | `Turpan.jpg` | Commons **missing** | `Flame_Mountain_Turpan_Xinjiang_China_新疆_吐魯番_火焔山_-_panoramio_(1).jpg` |
| `nalati`, `xibei-xinjiang-yili` (+ Yili patch embeds) | `Narat_Grassland.jpg` | Commons **missing** | `Nalati_Grassland_1.jpg` |
| `kuqa*`, `leg-kuqa-canyon`, related embeds | `Kuqa.jpg` | Commons **missing** | `Kuqa_May_2007_429.jpg` (Tianshan road Kuqa–Kizil) |
| `duku-view`, `dushanzi`, `xibei-xinjiang-duku` | `Duku_Highway.jpg` | Commons **missing** | `G217_K939.jpeg` (G217 独库 K939) |
| `kalajun` | `Kalajun.jpg` | Commons **missing** | `Kalajun_Grassland.jpg` |
| `kuitun-buffer` | `Karamay.jpg` | Commons **missing** | `Karamay,_Xinjiang,_China_-_panoramio.jpg` |
| `urumqi-base` | `Ürümqi.jpg` | Commons **missing** | `Urumqi_skyline.jpg` (same as city cover) |

## Verified OK (no change)

| File / id | Notes |
| --- | --- |
| `Kashgar.jpg` / kashi covers | Livestock market — Xinjiang geography OK |
| `Id_Kah_Mosque_Kashgar.jpg` | Kashgar mosque |
| `赛里木湖远景…` / sayram* | Sayram Lake |
| `Mt_Kongur_Lake_Karakul_Xinjiang_China.jpg` / baisha-lake | Karakul / Pamir |
| `Urumqi_skyline.jpg`, Hongshan glance | Urumqi |
| `新疆博物馆_全景（2021）.jpg`, `新疆国际大巴扎…` | Fixed in `4dd8733` |
| `Yining.jpg` | Yining town square — Xinjiang OK |

## Pipeline guard

`research/scripts/resolve-place-images.py`: FILES remapped; `Kanas.jpg` FALLBACK forced to `Lake_Kanas.jpg` / `Kanas_Lake.jpg` with comment that Commons `Kanas.jpg` is hiragana — do not reintroduce.

## Rejected near-misses

- `Nalati.jpg` — Haiti Wiki Loves Earth, not 那拉提
- Soft「同区示意」not needed where a dedicated Commons file exists
