# Image completeness · Famous P1 wave · 2026-08-02

## Scope

Catalog after this wave: **135** route ids (`route-provinces.ts` ↔ patches).  
Check: every route cover + stop resolves via `place-images` / `withPlaceImages` (Unsplash rejected at merge).

## Fixes this wave

| Item | Action |
|------|--------|
| `Wulong_Karst.jpg` | **404** on Commons; replaced with `Wulongtianshengsanqiao.JPG` for `wulong-optional` + new武隆线 |
| New 12 routes + 泰山升级 stops | Wired `PLACE_ROUTE_COVERS` + `PLACE_STOP_IMAGES` with HEAD-checked Commons thumbs |
| Soft reuses | 涠洲/老街/缓冲站等标入 `PLACE_SOFT_IDS`（同廊示意，非跨省顶替） |

## Spot-check method

- Wikipedia `pageimages` + Commons `Special:FilePath` / upload thumb `HTTP 206` byte-range
- Verified OK examples: Peak_Yunu, BeiHaiYanTan, Putuoshan, Jinjiangli_0004, Danxiashan 39002, Jiuhuashan_yunhai, Thousand_Island_Lake, Wulongtianshengsanqiao, Huangguoshu, Tianning Pagoda, Yandang, Huizhou_West_Lake, 曲阜孔庙大成殿

## Counts (this wave)

| Metric | Count |
|--------|------:|
| New route covers added | 12 |
| Overwrite cover kept/updated | 1（泰山，已有 Mount_Tai） |
| New stop image keys | ~40 |
| Soft-labeled stops added | ~18 |
| Broken Commons fixed | 1（武隆旧文件名） |
| Routes still relying on Great Wall fallback cover | 0 among new ids |

## Residual / known soft

- 涠洲：无稳定专用风景照 → 银滩同廊 soft
- 双月湾、淹城、部分「缓冲站」：同城/同廊 soft（caption 同区示意）
- `resolve-place-images.py` 中武隆文件名已同步；全库 HEAD 扫未在本波重跑（API 429）

## Verdict

**PASS** for new/overwrite ids: covers + stops map to Commons (or labeled soft).  
Catalog-wide Unsplash-as-attraction remains blocked by `rejectStockFallback` in `lib/place-images.ts`.
