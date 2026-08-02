# Image source strategy — china-travel-atlas

**Date:** 2026-08-02  
**Goal:** Every route cover, stop image, and gallery tile must depict (or clearly represent) that named place in China — never Italian lakes, Japanese temples, or reused generic Unsplash scenery.

## Preferred sources (in order)

1. **Local Commons mirrors** — `public/places/{slug}.jpg` downloaded from verified Wikimedia Commons thumbs (preferred at runtime; avoids 429).

2. **Wikimedia Commons remote thumbs** — curated place-named filenames → `upload.wikimedia.org` @1280px when no local mirror yet.

3. **Wikipedia (zh then en) page images** — when Commons search is rate-limited, use known article lead images already on Commons.

4. **Official tourism bureau / scenic-area sites** — only if license allows hotlinking **or** we download into `public/places/` with attribution.

5. **AI-generated local fallback** — `public/generated/places/{id}.png`, captions labeled **示意生成图**. Prefer over wrong Unsplash; do not abandon Commons.

## Explicitly rejected

- **Unsplash / generic stock** as if it were a named Chinese attraction (e.g. alpine lakes labeled 慕田峪).  
- Reusing one working Unsplash ID across unrelated cities after 404 fixes.  
- Foreign landmarks (Venice, Kyoto temples, Alps) for China itineraries.
- Presenting AI gen as a real photo (must label 示意生成图).

## Runtime wiring

| Layer | Behavior |
|---|---|
| `content/place-images.ts` | `routeId` / `stopId` → `/places/…` or verified Commons URL |
| `lib/place-images.ts` `withPlaceImages` | Applied in `content/index.ts` — **overwrites** Unsplash galleries from `route-details.ts` |
| `lib/route-detail.ts` | `buildGallery` / `stopWithImage` prefer place map |
| `components/SafeImage` | Fallback = `/places/mutianyu.jpg` (长城), never foreign lake |
| `next.config.ts` | Allows `upload.wikimedia.org` (+ legacy Unsplash host) |

## Rate limits & cache

- Wikipedia/Commons **API search** hits 429 quickly — avoid for bulk runs.  
- Prefer **curated filenames + MD5 thumb URLs** + sparse HEAD checks with backoff (2–8s on 429).  
- Reuse `/tmp/wiki-thumbs/ok.tsv` and `research/raw/place-images-cache.json`.  
- Regenerator: `research/scripts/resolve-place-images.py`.

## Audit

- Checklist: `research/audits/image-place-audit-20260802.md` (PASS/FAIL per route/stop).  
- Spot-check in preview: mutianyu, hangzhou, lhasa, dunhuang, chengdu, sanya, qinggan loop.
