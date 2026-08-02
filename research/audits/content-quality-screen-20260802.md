# Content quality screen — 2026-08-02

Clean-context audit of merged 攻略/路线 (routes + `route-details` + audit-patches + `practical-guides`). No ChinaMapExplorer. Sibling content patches left alone except two clear P0 fact fixes.

## Verdict

**Catalog is wide but shallow.** Runtime catalog = **159** routes (verify-loop still said 85). Coverage / famous / prefecture / long-stay waves added many searchable ids; most are **template-thin** on introduction, culture, and dining. A small classic core (audit-patched 华北/西北/华东 hubs) is parent-usable on pace and safety. **Food guidance is catalog-wide weak** (hand PG dining almost always ≤40 chars). **Hospitals:** ~148 ids have named hospital hints in `practical-guides.ts`; ~11 still hub-template (`fromTemplate`). Altitude honesty is uneven outside Lhasa/青海湖 classics.

**Overall: PARTIAL / weak for parent depth** — discoverability ↑, reading quality ↓ for 名景 & 长居.

## Summary counts (merged runtime)

| Tag | Count | Meaning |
| --- | ---: | --- |
| **PASS** | **7** | Multi-paragraph intro, ≥5 notices, place/pace usable; dining still short |
| **NEEDS_CULTURE_FOOD** | **40** | Structure or mid intro OK, but culture/food thin and/or altitude under-sold |
| **THIN** | **111** | Stub intro (&lt;~200字) / sparse notices / generator or overwrite stubs |
| **ERROR** | **2 found → fixed** | See P0 below (not left broken) |

Theme slice:

| Theme | n | PASS | NCF | THIN |
| --- | ---: | ---: | ---: | ---: |
| famous-scenic | 48 | 0 | 8 | 40 |
| long-stay | 8 | 0 | 0 | **8** |
| grand-loop | 3 | 0 | 2 | 1 |
| frontier | 6 | 0 | 0 | 6 |
| corridor | 13 | 0 | 8 | 5 |
| untagged | 83 | 6 | ~22 | ~55 |

Field signals (all 159):

| Signal | Approx |
| --- | --- |
| Intro &lt;100 字 | **105** |
| Intro ≥400 字 | **~7–10** (audit-enriched classics) |
| Hand PG dining &lt;40 字 | **152 / ~148 hand keys** |
| No `route-details` entry | **78** (mostly famous-p / prefecture / coverage) |
| Pure PG template hospitals | **11** |
| Altitude-relevant, weak merged altitude copy | **~15–20** (heuristic; Lhasa/青海湖 actually strong via audit patch) |

### Systemic causes (not single-route bugs)

1. **`route-details` / audit-patch overwrite** — `detail.introduction ?? route.introduction` means thin generated/stub details **clobber richer patch intros** (e.g. all `longstay-*`, pre-fix 泰山).
2. **Famous stitch / P1 / P2 / coverage waves** ship short intros + short dining on purpose for catalog fill; never backfilled to plan checklist (3–5段 intro, rich 美食/文化).
3. **Practical guides wave** scaled to ~148 ids with **named hospitals** (good) but **one-line dining** (fails「美食」bar).
4. **verify-loop-latest** still reports 85 routes / PG 85 — **stale vs disk 159**.

## PASS (7)

| id | Notes |
| --- | --- |
| `huabei-shanxi-loop` | Deepest intro; culture/geo strong |
| `tianjin-day` | Short-trip completeness |
| `gubei-overnight` | Practical + notices |
| `huadong-suzhou-nanjing` | Strong narrative |
| `xibei-dunhuang-zhangye` | Corridor character clear |
| `xibei-xinjiang-north` | Strong place framing |
| `qingzang-lhasa-slow` | Altitude/safety honesty via audit-patch (PASS despite short dining) |

*All PASS still need dining expansion (P2).*

## NEEDS_CULTURE_FOOD (priority slice)

Mid/classic depth but thin 美食/文化 or altitude packaging:

`chengde-2d`, `yunnan-dali-lijiang`, `dongbei-changbai-summer`, `huadong-hangzhou-suzhou`, `huanan-xiamen-winter`, `huazhong-wudang-3d`, `dongbei-harbin-snow-3d`, `huabei-neimeng-summer`, `huabei-shandong-coast`, `dongbei-dalian-summer`, `huazhong-xian-slow`, `qingzang-qinghai-lake`, `xibei-ningxia-3d`, `huadong-shanghai-short`, `huadong-huangshan-hui`, `huadong-wuyuan-spring`, `huazhong-luoyang-kaifeng`, `huazhong-zhangjiajie`, `huanan-guangzhou-chaoshan`, `huanan-guilin-yangshuo`, `xinan-guizhou-loop`, `qingzang-xining-3d`, `yunnan-hekou-sapa-corridor`, …

Plus altitude corridors (package 高反/海拔 in intro+notices, not only stop tips):  
`national-qinggan-slow`, `national-chuandian-slow`, `qingzang-railway-slow`, `qingzang-g318-lhasa-nyingchi`, `qingzang-nyingchi-slow`, `xinan-sichuan-g318-east`, `xinan-sichuan-g318-mid`, `yunnan-g214-shangri-la-taste`, `xinan-chuanxi-slow`, `xibei-lanzhou-xiahe`, …

## THIN — famous / 长居 / 边陲 (P1 targets)

### Famous-scenic stubs (40) — parent cannot “understand the place”

Highest-traffic stubs (intro often 36–123字; dining 5–22字):

| id | title-ish | Gaps |
| --- | --- | --- |
| `xinan-sichuan-jiuzhaigou` | 九寨沟 | Intro short; food generic; altitude in notices OK but culture/藏羌 thin |
| `xinan-guizhou-huangguoshu` | 黄果树 | Stub; dining 8字 |
| `xinan-sichuan-leshan-emei` | 乐山峨眉 | Stub; Buddhist/cultural one-liner only |
| `huazhong-hunan-fenghuang` | 凤凰 | Stub; Miao/Tuo culture thin |
| `huadong-jiangxi-lushan` | 庐山 | Stub |
| `huabei-shanxi-wutai` | 五台 | Stub; Buddhist context thin |
| `huanan-fujian-wuyi` | 武夷 | Stub; tea culture thin |
| `xinan-chongqing-wulong` | 武隆 | Stub |
| `xinan-guizhou-fanjing` | 梵净 | Stub; altitude/stairs honesty present in notices |
| `xinan-guizhou-libo` | 荔波 | Stub |
| `huazhong-hubei-shennongjia` / `enshi` | 神农架/恩施 | Stub |
| `huadong-zhejiang-putuo` / `qiandao` / `wenzhou` / `shaoxing` | 浙东名景 | Stub |
| `huanan-guangdong-*` (开平/丹霞/惠州/中山/潮汕) | 粤系 | Stub; Chaoshan food especially under-sold |
| `huabei-shanxi-xinzhou-county` + prefecture famous fills | 忻州等 | Template PG + stub intro |
| … | remaining famous-p2/stitch | Same pattern |

Full famous THIN list is the 40 ids tagged `famous-scenic` excluding the 8 NCF mid-tier (`huangshan`, `zhangjiajie`, `guilin`, `xiamen`, `wuyuan`, `taishan` post-fix, `lanzhou-huanghe`, `dali-daytrips`).

### Long-stay (8/8 THIN)

| id | Issue |
| --- | --- |
| `longstay-dali` | Patch intro rich; **`route-details` overwrites** to ~58字 + 2 notices |
| `longstay-kunming` | Same overwrite pattern |
| `longstay-yangshuo` / `weihai` / `hulunbuir` / `dujiangyan` / `zhenyuan` / `hainan-east` | Same: thin details win over patch |

**Fix pattern:** delete or replace stub `route-details` entries so patch intros surface; then deepen dining + local character.

### Frontier (6/6 THIN)

`frontier-dandong`, `dongxing`, `erlian`, `manzhouli`, `mohe`, `ruili` — notices≈2, intro≈40–50字, dining one-liners. Border honesty / hospital / food all thin.

### Grand-loop

| id | Tag | Note |
| --- | --- | --- |
| `national-qinggan-slow` | NCF | P0 typo fixed; still needs culture/food + altitude packaging in intro |
| `national-chuandian-slow` | NCF | Thin intro; altitude |
| `national-silkroad-slow` | THIN | Stub |

## ERROR (P0) — fixed this session

| id | Error | Fix |
| --- | --- | --- |
| `national-qinggan-slow` | Stop summary said「二郎剑/**洱海**一带」— **洱海 is Dali**, not Qinghai Lake | →「二郎剑等**青海湖岸**选段」in `routes-national-loops.ts` |
| `huabei-shandong-taishan` | `route-details` said「**勿再塞曲阜**」while famous-p1 **includes 曲阜三孔** stops | Synced intro/notices/gallery to 泰山+曲阜廊 in `route-details.ts` |

No other hard geography/danger ERRORS confirmed in this pass (九寨/拉萨/华山 safety language generally cautionary, not reckless). Spot-check only; not every coord verified.

## Hospitals & altitude honesty

- **Hospitals:** Hand guides usually list real 三甲/综合 names +「请用高德核实」— honesty OK for hubs. Thin routes still inherit hub heuristics when hospitals missing. Prefecture wave (~11) still `fromTemplate`.
- **Altitude:** Lhasa / 青海湖 audit text is strong. Weaker packaging on G318 / 香格里拉 / 川西 / 青甘 merged intros (rely on stop tips). `xibei-gansu-lanzhou-huanghe` false-flagged by id heuristic (Lanzhou ≠ high plateau) — ignore.

## Prioritized fix list

### P0 — factual / conflicting (done or immediate)

1. ~~青甘「洱海」误植~~ **done**
2. ~~泰山 details vs 曲阜 stops~~ **done**
3. Scan other `route-details` notices that **forbid** stops now present in famous overwrites (same class as 泰山)
4. Refresh `verify-loop-latest.md` catalog count (**159**)

### P1 — thin famous / 长居 (parent cannot choose confidently)

1. ~~**Un-clobber long-stay**~~ **done 2026-08-02 P1** — deleted thin `longstay-*` stubs from `route-details.ts`; enriched all 8 patch intros (≥3段) + notices≥5; dining expanded in `practical-guides`
2. ~~**九寨沟 / 黄果树 / 乐山峨眉 / 武隆 / 梵净 / 荔波**~~ **done** (+凤凰) — culture/altitude/dining deepened in famous-p1/p2/stitch patches + PG dining
3. **黄山 / 张家界 / 桂林阳朔** (already NCF mid) — deepen 徽菜/湘菜/桂菜 and cultural framing beyond cable-car logistics *(deferred)*
4. ~~**泰山曲阜**~~ **done** — P0 still good; 孔府文化段 + 鲁菜适老 dining expanded
5. ~~**青甘 / 川滇 / 丝路**~~ **done** — multi-paragraph intros + altitude ladder + segment food in `route-details` + PG dining
6. **Frontier six** — border practical + one cultural hook + hospital honesty each *(deferred)*

### Root-cause fix (merge order)

- `content/index.ts` now uses `preferRicherText` / `preferRicherNotices` so **longer patch copy wins** over thin `route-details` stubs (was `detail.introduction ?? route.introduction`).
- `generate-route-details.mjs` header warns: do not re-emit thin stubs for routes that already ship rich patch intros.
- Verified: all 8 `longstay-*` merged intros surface patch text; P0 青甘「青海湖岸」与泰山曲阜仍正确。

### P1 follow-up count (heuristic after deepen)

Catalog ~**164** routes. Rough re-score: deepish ~8–15, mid ~40+, **thinish ~100–115** (down slightly from audit 111 THIN; remaining mass is coverage/prefecture/frontier famous stubs). Long-stay 8/8 no longer stub-clobbered.

### P2 — polish

1. Expand **all** `practical-guides` dining from one-liners → 2–4 specific dishes + 清淡/适老 options (batch by hub city) — *PASS+NCF+P1 hubs done; rest still short*
2. Add culture paragraphs to coverage/prefecture stubs **or** demote from `famous-scenic` until filled
3. ~~Reconcile generator~~ **documented**; runtime prefer-richer already shipped
4. Soft leftover images (per prior verify-loop) — out of this audit scope

## Method notes

- Scored merged runtime fields (intro length, notices, dining length, culture keyword hits, altitude keywords, `fromTemplate`).
- Manually read famous-p1/p2/stitch, long-stay, national-loops, Lhasa, and `route-details` overwrite cases.
- P1 rewrite wave executed after audit (longstay un-clobber + famous deepen + dining + grand-loop + merge fix).
- Did **not** touch ChinaMapExplorer.

## Next tasks for parent agent

1. Frontier six deepen
2. Remaining famous THIN (庐山/五台/武夷/浙粤等) culture+dining
3. Broader PG dining wave for leftover one-liners
4. Refresh verify-loop catalog metrics to current count (~164)
5. Optional plan-verify Task against this audit
