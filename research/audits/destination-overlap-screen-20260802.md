# Destination / product IA overlap screen — 2026-08-02

Script: `research/scripts/destination-overlap-screen.mjs`  
Raw: `research/audits/_destination-overlap-raw.json`  
Catalog scope: `lib/generated/explore-routes.json` (~201)

## Why text-paste audits miss this

`guide-overlap-audit.mjs` looks for **string equality / containment** (intra-intro paragraph spam, summary⊂intro, compose↔leg near-duplicate essays after boiler strip). Sibling destination cards that **share a place token and user intent** but use rewritten copy — e.g. `leg-sapa-vietnam` vs `compose-yunnan-hekou-sapa` both ranking for「沙巴」— never trip those gates. Product IA overlap is about **Explore search / title-head peers**, not Jaccard of paragraphs.

## Method

1. Curated landmark tokens in titles (沙巴 / 平遥 / 西湖 / 稻城 / …)
2. Compose titles whose place tokens heavily mirror embedded `legIds` titles
3. Short/leg + compose pairs sharing a landmark (embedded vs not)
4. Same title-head near-dup pairs among non-compose cards
5. Retired corridor / monolith ids still live in catalog

Severity (conservative):

| Sev | Rule |
| --- | --- |
| **HIGH** | Peer destination cards (same title head / Sapa-pattern arrow compose branding a live leg’s place) |
| **MED** | Intentional leg↔compose listing the same place; duration variants with clear lens words |
| **LOW** | Homonyms / different places (瘦西湖≠西湖); compose listing places with「组合/慢廊」lens |

## Verdict (post-screen, pre-fix → post-fix)

| Bucket | Notable |
| --- | --- |
| **HIGH** | 沙巴/河口 arrow compose; 呼伦贝尔 twin longs; 青海湖 twin「西宁·青海湖*」; plus crowded peers (三亚/成都/西安/阳朔/镇远/…) — see lists |
| **MED** | Normal compose↔leg (敦煌/赛里木/泰山/…) — **keep intentional** |
| **LOW / clean** | Retired corridor ids **not** in catalog; G318 corridor ids are honest short legs, not orphans |

## HIGH — product overlaps

### H1 — 沙巴 / 河口（Sapa pattern） · **fixed this round**

| id | Was | Role |
| --- | --- | --- |
| `leg-sapa-vietnam` | 沙巴 · 镇区慢住（越南·跨境） | Destination leg |
| `leg-hekou-border` | 河口 · 口岸边贸浅住 | China-side leg |
| `compose-yunnan-hekou-sapa` | ~~河口→沙巴 · 中越慢廊（跨境）~~ → **中越慢廊 · 长线组合卡** | Glue-only compose |

Sibling commit `4d8c489` already split intros/covers/summary. Residual HIGH: compose **title** still title-matched「沙巴」「河口」as a peer destination guide.

**Action taken:** retitle compose; demote `compositionKind: compose` in `lib/route-search.ts` (−35) so legs win same-keyword search; leave content (no delete).

### H2 — 呼伦贝尔 twin longs · **fixed**

| id | Was → Now |
| --- | --- |
| `huabei-neimeng-summer` | 呼伦贝尔 · 草原慢住 → **呼伦贝尔 · 草原慢住两周** |
| `huabei-neimeng-hulunbuir` | 呼伦贝尔 · 夏季慢游 → **海拉尔 · 草原一周浅线** |
| `longstay-hulunbuir` | 呼伦贝尔 · 夏季草原慢居 | **keep** (month product; MED vs shorts) |

### H3 — 青海湖 twin · **fixed**

| id | Was → Now |
| --- | --- |
| `qingzang-qinghai-lake` | 西宁 · 青海湖环线慢游 → **青海湖 · 西宁适应加环线** |
| `leg-xining-qinghai-lake` | 西宁 · 青海湖浅段 → **青海湖 · 二郎剑浅段** |

### H4 — Remaining HIGH (not auto-fixed; recommend)

| Cluster | Cards | Recommended action |
| --- | --- | --- |
| 三亚 | `huanan-sanya-winter` + `leg-sanya-beach` (+ compose 海南) | **differentiate** further or accept duration split (两周 vs 浅住) — MED-leaning |
| 成都 | `xinan-chengdu-slow` + `leg-chengdu-adapt` + 4 composes | **keep intentional** adapt leg; optional retitle slow card |
| 西安 | `huazhong-xian-slow` + `leg-xian-terracotta` + composes | **differentiate** slow vs 兵马俑浅尝 titles more |
| 阳朔/桂林 | week leg + demoted longstay + base + composes | **keep intentional** (base hub IA) |
| 镇远 | `xinan-guizhou-zhenyuan` + `longstay-zhenyuan` | **keep** demotion copy; optional hide longstay from Explore later |
| 都江堰 | 2d + longstay | **keep intentional** (day vs month) |
| 青岛 | 崂山腿 + 滨海腿 | **keep intentional** (two jobs) |
| 哈尔滨 | 冬雪 vs 夏大街 | **keep intentional** (season split) |
| 苏州 | 园林 vs 县域 | **keep intentional** |
| 洛阳 | 龙门廊 vs 县域 | **keep intentional** |
| 西湖 token | 杭州西湖 + 惠州西湖 + compose | **LOW false-ish** — different lakes; compose listing OK |
| 西宁 hub | many title hits | **MED** hub gravity; not all peers |

## MED — intentional compose↔leg (sample)

Keep unless titles lack「组合/慢廊/慢串」lens:

- 敦煌 / 张掖 / 赛里木 / 喀纳斯 / 泰山 / 沙坡头 / 海口 / 黄山 / 婺源 / 张家界 / 平遥 / …
- Dual composes sharing legs (川滇 vs 滇西; 胶东 vs 齐鲁泰青) — different corridors, **keep**

## LOW / retired

- Retired ids (`yunnan-hekou-sapa-corridor`, `qingzang-railway-slow`, `national-*`, …): **none live**
- Monolith-ish ids still catalogued as honest shorts: `xinan-sichuan-g318-east`, `xinan-sichuan-g318-mid`, `xinan-guizhou-dong-corridor` — **keep** (not orphan duplicates of a compose)

## Fixes shipped this round

1. Screen script + this audit + raw JSON
2. HIGH title/summary differentiation: Sapa compose, 呼伦贝尔 pair, 青海湖 pair
3. Explore search: compose **title** hits score −35 (`lib/route-search.ts`); keyword-only compose hits unchanged
4. Cross-ref pointers in hekou/sapa patches + sibling fix note

```bash
node research/scripts/destination-overlap-screen.mjs
npm run gen:explore-catalog
```
