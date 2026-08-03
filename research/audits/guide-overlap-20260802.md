# Guide overlap audit — 2026-08-02

Scope: catalog routes (~201) via merged introductions + `practicalGuide.routeGuide` (audit / Ctrip patches + hand PG). Also compose vs embedded legs; summary vs introduction on one page.

Method: parse content sources in `audit-patches/index.ts` merge order; `preferRicherText` ≈ longer intro wins. Compare after stripping known intentional framing lines. Script: `research/scripts/guide-overlap-audit.mjs`.

## Verdict

| Bucket | Count (pre-fix) | Post-fix |
| --- | --- | --- |
| **HIGH** | **4** summary⊂intro + **~120** intra-intro exact paragraph spam (Ctrip/soft-short paste) | **0 remaining** (fixed) |
| **MED** | Cross-route shared framing sentences (character / soft-short closers) | Remains (intentional product voice; see below) |
| **LOW** | Compose「本卡嵌入…glue」meta line across ~15 compose cards | Remains (IA, not leg essay paste) |

**Not found:** near-duplicate *destination* essays across sibling ids; exact-duplicate `routeGuide` strings; compose glue/intro re-pasting leg stop essays (compose stays thin).

## HIGH (fixed)

### H1 — Intra-introduction exact paragraph duplication

**Severity:** HIGH  
**Evidence:** Same paragraph pasted 2–11× inside one `introduction` (blank-line separated), especially:

- `每天最多一主点，午后强制空白；腿脚紧再删一半也完全成立。` — soft-short / 西南
- `出行前复核票务预约、天气与身体信号；高原与干燥地区宁可少景，不可硬撑。` — 西北/青藏（个别 id 达 11×）
- `携程适老游记共性改写：半天一景…` — 华中华南
- `出行前再核票务、天气与交通；体力紧随时删点，完整比赶完重要。` — 华东（句级连贴）

**Fix:** Deduped consecutive / repeated paragraphs in:

- `ctrip-enrich-huazhong-huanan-20260802.ts`
- `ctrip-enrich-huabei-dongbei-20260802.ts`
- `ctrip-enrich-xibei-qingzang-20260802.ts`
- `ctrip-enrich-xinan-20260802.ts`
- `ctrip-enrich-huadong-20260802.ts`
- `soft-short-character-20260802.ts`

~369 paragraph collapses + follow-up string cleanup of residual double closers.

### H2 — Summary ⊂ introduction (same page twice)

**Severity:** HIGH  
**Id pairs (self):**

| id | Evidence |
| --- | --- |
| `gubei-overnight` | Card summary pasted as intro ¶1 in `route-details` |
| `tianjin-day` | Same |
| `huadong-wuyuan-spring` | Same (route-details beat shorter Ctrip intro) |
| `huadong-suzhou-nanjing` | Summary echoed route-details lead; Ctrip intro already richer |

**Fix (preferRicherText-safe):**

- New longer intros + tightened summaries: `gubei-overnight`, `tianjin-day` in `ctrip-enrich-huabei-dongbei-20260802.ts`
- Rewritten longer intro + short summary: `huadong-wuyuan-spring` / summary for `huadong-suzhou-nanjing` in `ctrip-enrich-huadong-20260802.ts`

Local stop tips retained; openings no longer paste the card summary verbatim.

## MED (remaining — easy ones touched only via H1)

### M1 — Shared framing closers across soft-short / character ids

**Severity:** MED  
**Evidence:** After strip, unique bodies differ, but closers match across many ids, e.g.

- `父母线成功标准是「看懂气质、吃得清淡、每天留白」，不是打卡清单刷完` (~15 soft-short / character)
- `文化看点优先室内馆与平缓外观，美食声明清淡，行程允许整段删除` (~8)
- `节奏以慢游为主，快览点单独穿插，每天留空白，不把日程排满` (~22 older route-details / Ctrip shells)

**Action this round:** Removed *intra*-card doubles only. Cross-route one-liner framing left as product voice (not destination copy-paste). Optional later: per-id closer variants or drop closer when body already states 留白.

### M2 — Ctrip “对照携程公开游记的适老节奏…” footer

**Severity:** MED  
**Evidence:** Same footer paragraph on many Ctrip enrich intros (once each after H1). Differentiates less than local tips above it.

**Action:** Left once-per-card; do not gut. Optional later: shorten to one shared UI note outside body copy.

## LOW (remaining)

### L1 — Compose meta glue line

**Severity:** LOW  
**Ids (examples):** `compose-xiangxi-changsha-fenghuang`, `compose-lu-taishan-qingdao`, `compose-ningxia-shapotou-lanzhou`, … (~15)

**Evidence:** Shared「本卡嵌入N条短线，此处只管 glue 与 honest 车程」— intentional IA, not leg essay paste.

### L2 — Compose vs legs

No HIGH/MED unique-body overlap after boiler strip. Glue/intro stay thin relative to leg intros / PG.

### L3 — practicalGuide.routeGuide siblings

No exact duplicate `routeGuide` strings across catalog ids in Ctrip PG companions / regional enrich files. Sibling sets (成都/都江堰、西宁/青海湖、兰银等) unique-body n-gram Jaccard ≪ 0.35.

## Files touched

| Path | Change |
| --- | --- |
| `research/audits/guide-overlap-20260802.md` | This report |
| `research/scripts/guide-overlap-audit.mjs` | Reusable scanner |
| `content/audit-patches/ctrip-enrich-*-20260802.ts` | Intra-dup cleanup; 华北 gubei/天津 intros; 华东婺源/苏州 |
| `content/audit-patches/soft-short-character-20260802.ts` | Double-closer cleanup |

Did **not** touch `RouteCard` / `ChinaMapExplorer` / `place-images`.

## Re-check

```bash
node research/scripts/guide-overlap-audit.mjs
```

Expect: no intra-field duplicate paragraphs in audited patch intros; summary⊂intro empty for the four HIGH ids above.
