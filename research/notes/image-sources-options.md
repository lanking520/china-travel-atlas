# Image sources for china-travel-atlas

**Date:** 2026-08-02  
**Question:** Are there other sources for place photos? Can AI-generated images fill gaps?

## Why finding feels stuck

| Issue | What happens |
|---|---|
| **Wikimedia rate limits (429)** | Bulk HEAD/search against Commons trips 429 quickly; agents retry and look hung. |
| **Filename guessing** | Curated names 404 (e.g. `Gubei_Water_Town.jpg`) → wrong related landmark (司马台 for 古北). |
| **Wrong Unsplash history** | `route-details.ts` still has stock; runtime `withPlaceImages` overwrites — but discovery agents chase Unsplash/XHS. |
| **Not a license dead-end** | Bottleneck is discovery + rate limits, not “no legal photos.” |

**Dual track:** keep Wikimedia/Openverse as preferred; use **labeled AI gen** when research fails or only wrong stock exists.

## Decision tree

```
Need cover/stop image for place id
        │
        ▼
① Curated Commons filename → MD5 thumb (resolve-place-images.py)
        │ 404 / ugly / map-not-photo / montage
        ▼
② Openverse (prefer source=wikimedia) → paste URL into place-images.ts
        │ empty / weak place match
        ▼
③ Openverse Flickr CC → live.staticflickr.com OR download public/places/
        │ still fail OR only wrong Unsplash left
        ▼
④ AI-generated fallback → public/generated/places/{id}.png
        · Caption MUST say 「示意生成图」
        · Prefer labeled gen over Italian-lake Unsplash
        │
        ▼
⑤ SafeImage fallback = Great Wall Commons (last resort)
```

**Prefer gen over wrong photo?** Yes, when the alternative is clearly the wrong place (foreign lake, reused stock). A labeled 示意生成图 is more honest for elders than a convincing wrong landmark.

**Prefer real photo over gen?** Always, when the file actually depicts that place.

## Ranked real-photo sources

### 1. Wikimedia Commons / Wikipedia (primary)

- Curated filename → `upload.wikimedia.org` thumb @1280px.
- License: per-file CC/PD; attribute BY/BY-SA.
- Script: `research/scripts/resolve-place-images.py` (`PLACE_VERIFY=0` offline; sparse HEAD when verifying).

### 2. Openverse API (secondary discovery)

- `GET https://api.openverse.org/v1/images/?q=…&license=by,by-sa,cc0,pdm&source=wikimedia`
- Script: `research/scripts/openverse-place-fallback.py`
- Prefer Wikimedia-hosted results (same host already allowed).

### 3. Flickr CC (via Openverse)

- `next.config.ts` allows `live.staticflickr.com`.
- Long-term: download to `public/places/` to avoid hotlink rot.

### 4. Official tourism sites

- Only with clear reuse rights **or** after download + attribution. No blind hotlink.

### 5. Mapillary (niche)

- CC BY-SA + logo/attribution rules; street-level ≠ scenic cover. Optional later.

### Avoid as primary

- XHS / Weibo scrape · Unsplash-as-named-attraction · random CN CDNs

## AI-generated place imagery (fallback)

### What fits this static Next export repo

| Option | Fit | Notes |
|---|---|---|
| **Cursor `GenerateImage` tool** | Best for 1–20 covers | No API key in repo; agent/parent generates → copy into `public/generated/places/`. |
| **Local SD / Flux** | Good for bulk | Needs GPU/setup; export webp/png into same folder. |
| **DALL·E / Flux API** | Optional CI later | Needs secrets; overkill until coverage gaps are listed. |

Do **not** call paid image APIs from the static client. Ship files under `public/` so GitHub Pages stays fully static.

### Naming / storage / wiring

```
public/generated/places/{routeOrStopId}.png
content/place-images.ts  →  '/generated/places/{id}.png'
PLACE_GENERATED_IDS       →  captions get 「示意生成图」
lib/place-images.ts       →  withAssetBase() for GitHub Pages basePath
```

### Prompt pattern (China attractions)

```
{Place English + Chinese cue} scenic cover: {2–4 distinctive landmarks/landforms},
photorealistic travel photo look, recognizable {place} atmosphere in China,
NOT {common confusion: West Lake / Forbidden City / Alps / Kyoto / Iceland},
wide 16:9 landscape, natural daylight, no text, no watermarks, no logos.
```

Examples:

- 古北水镇: canals + grey-tile roofs + distant Great Wall ridge; not Hangzhou West Lake.
- 五大莲池: volcanic crater lakes + black lava + Heilongjiang forest; not Hawaii/Iceland.

### Attribution / disclaimer

- Gallery caption: `{name} · 示意生成图`
- Route gallery blurb notes that labeled tiles are not photos.
- No need to invent a photographer credit; do not present gen as Commons.

### When to use gen vs photo

| Situation | Choice |
|---|---|
| Verified Commons/Openverse match | Photo |
| Only related-nearby landmark (司马台 for 古北) | Prefer better photo or gen of the named place |
| Wrong Unsplash / foreign scenery | Gen (labeled) or fix photo — never keep wrong stock |
| Obscure place, Openverse empty | Gen |
| Legal/scenic accuracy critical (ticket page look) | Photo or skip image |

## Concrete pipelines

**Photo track**

```
FILES map → MD5 Commons → Openverse find filename → place-images.ts
```

**Gen track**

```
Cursor GenerateImage (or local Flux)
  → public/generated/places/{id}.png
  → PLACE_ROUTE_COVERS[id] = '/generated/places/{id}.png'
  → PLACE_GENERATED_IDS.add(id)
```

Parent command sketch (Cursor agent):

> Generate a 16:9 photorealistic cover for `{place}` … [prompt pattern]. Save as `{id}.png`, then copy to `public/generated/places/{id}.png` and register in `content/place-images.ts`.

## Prototyped this round

| ID | Track | Path / URL |
|---|---|---|
| `gubei-overnight` | **Photo** (upgraded from gen) | Commons `Gubei_water_village_from_Simatai_Great_Wall_in_Beijing_-_panoramio.jpg` |
| `dongbei-heilongjiang-wudalianchi` | **Photo** (upgraded from gen) | Commons `Lava_Rock_Landscape_of_Wudalianchi.jpg` |
| `wudadao` | **Photo** | Commons `Five_Great_Avenues_21393-Tianjin_(49063741486).jpg` |
| `puning-temple` | **AI gen** | `/generated/places/puning-temple.png` |
| `huanan-hainan-slow-west` (+ danzhou stops) | **AI gen** | `/generated/places/huanan-hainan-slow-west.png` |
| `dongguan-street` / `sangke-optional` / `mingshi-optional` | **AI gen** | `/generated/places/{id}.png` |
| `qingzang-xining-3d` (+ xining stops) | **Photo fix** | Commons `Xining_-_Dongguan_mosque_Minaret_2024.jpg` |

Progress log: `research/audits/image-coverage-progress-20260802.md`.

Also: Flickr host in `remotePatterns`; Openverse helper script; gallery copy mentions 示意生成图.

## Sample photo URLs that work

| Place | URL |
|---|---|
| 慕田峪 | `https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Great_Wall_of_China_July_2006.JPG/1280px-Great_Wall_of_China_July_2006.JPG` |
| 西湖 | `https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/West_Lake%2C_Hangzhou_2025.jpg/1280px-West_Lake%2C_Hangzhou_2025.jpg` |
| 布达拉宫 | `https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Potala_Palace_HQ.jpg/1280px-Potala_Palace_HQ.jpg` |
| 西宁东关清真大寺 | `https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Xining_-_Dongguan_mosque_Minaret_2024.jpg/1280px-Xining_-_Dongguan_mosque_Minaret_2024.jpg` |
| 德天瀑布 (Flickr CC) | `https://live.staticflickr.com/65535/49304427072_eeabb66181_b.jpg` |

## Next steps

1. Keep Commons as default; only gen for listed gaps.
2. Optional: download Commons covers into `public/places/` for offline CDN independence.
3. Add attribution fields for non-Commons CC photos.
4. Do not use XHS for images.
5. Batch-gen remaining weak covers after a short FAIL list from visual QA.
