# 河口–沙巴 overlap fix · 2026-08-02

User report: **云南沙巴** looks like **two (overlapping) guides**. Audit of all Hekou–Sapa / 沙巴 / Sa Pa related product cards.

## Live cards (retired id gone)

| id | Title | Kind | Role |
| --- | --- | --- | --- |
| `leg-hekou-border` | 河口 · 口岸边贸浅住 | leg | **中国境内侧**口岸县城 |
| `leg-sapa-vietnam` | 沙巴 · 镇区慢住（越南·跨境） | leg | **越南侧目的地** + 证件诚实正文 |
| `compose-yunnan-hekou-sapa` | 中越慢廊 · 长线组合卡 | compose | **串线 glue only** |
| `yunnan-hekou-sapa-corridor` | — | retired | Not in catalog |

## Overlap evidence (before)

Product IA, not only paragraph paste:

1. **Same destination signal in Explore** — `compose-yunnan-hekou-sapa` and `leg-sapa-vietnam` shared the Sa Pa rice-terrace **cover**; both titles/summaries shouted 沙巴 + 护照/签证, so search「沙巴」felt like two destination guides.
2. **Compose re-hosted leg essays** — Ctrip/character compose intro pasted both legs’ **character + dining** (河口米线 / 沙巴热汤面粥 / 赫蒙村寨 / 1500m) plus a full passport block, then repeated “可只订河口段 / 正式口岸” again in a closing ¶.
3. **Triple passport block** — hekou intro, sapa intro, and compose intro each carried near-complete「护照+合法入境许可+只走正式口岸」essays (honest intent, product noise).
4. **Hekou drifted into corridor essay** — China-side leg listed 通关日背包 / 签证自查 as primary body instead of pointing to the Sapa leg.

Quoted overlapping threads (pre-fix, shortened):

- Compose ¶1 ≈ legs’ character paste: 「河口是边贸烟火…；沙巴是越北约1500m 高原梯田云雾与赫蒙村寨…」
- Compose ¶2 ≈ dining merge: 「河口米线清汤/青菜豆腐；越境后热汤面粥…」
- Compose closing ≈ sapa notices: 「证件：护照与合法签证，只走正式口岸，禁止非正式通道。」

## Product intent (decision)

| Card | Owns | Must not own |
| --- | --- | --- |
| Hekou leg | 口岸县城节奏、湿热、中国段餐饮/医院 | 签证通关细则正文、沙巴镇区游记 |
| Sapa leg | 越南侧镇区/缆车、**canonical 护照签证诚实**、通关站 | 河口边贸散文复写 |
| Compose | 顺序、白昼通关 glue、可只订河口段 | 第三份沙巴游记 / 合并菜单 |

Passport honesty stays on **all three** as one-liners or pointers; **full** policy/self-check essay lives on **`leg-sapa-vietnam`**.

## What changed

- Differentiated intros / notices / PG in `ctrip-enrich-xinan-20260802.ts` (winning detail patch) + aligned `leg-compose-character-20260802.ts`, `routes-yunnan-hekou-sapa.ts`, `route-details.ts`, `practical-guides.ts`.
- Compose Explore summary → explicit「串线组合卡（非沙巴游记）」(`explore-catalog-fields.ts`).
- Compose cover → 河口—老街口岸图（不再与沙巴腿同图）(`place-images.ts` + route patch).
- Compose title →「中越慢廊 · 长线组合卡」（不再与沙巴腿 title-head 同抢「沙巴」搜索）；`route-search` demotes compose vs legs.
- Regen explore catalog.

## 为何上次没查出来

Prior audit: `research/audits/guide-overlap-20260802.md` + `research/scripts/guide-overlap-audit.mjs`.

**Pattern: text-similarity ≠ product-duplicate.**

- **Scoped to paste bugs** — intra-intro repeated paragraphs, summary⊂intro on the *same* id, compose↔leg *near-identical essay* / Jaccard after boiler strip. Hekou–Sapa failed none of those HIGH gates: unique bodies differed enough after strip; compose was “thin relative to legs” by n-gram, so L2 logged clean.
- **No destination / sibling product check** — script never asked “do two catalog cards share cover + 沙巴 keyword + passport framing so parents see *two Sapa guides*?” Same cover on compose+leg is IA overlap, not string equality.
- **Intentional framing ≠ false negative only** — shared「只走正式口岸 / 护照签证」lines were treated like soft-short closers (MED/LOW voice). For *corridor siblings*, repeating the full honesty essay on leg+leg+compose is product triple-speak, not a benign closer.
- **Compose dining paste was paraphrased** — 「河口米线…越境后热汤面粥」≠ exact copy of either leg dining string → no exact-duplicate `routeGuide` / intro paragraph hit.
- **Miss lesson** — keep the paste scanner; add a **sibling product IA** check for compose↔embedded legs (and same-destination title/cover/summary clusters): same cover, overlapping destination tokens in title+summary, or compose intro that re-hosts leg character/dining blocks even when wording is rewritten.

## Verify

```bash
npm run gen:explore-catalog
# spot-check titles/summaries/covers for the three ids
```
