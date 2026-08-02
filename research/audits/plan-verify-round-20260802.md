# Plan verify round — 20260802

**Plan:** 全国深挖与地图 (`新疆扩线与地图_065545d1.plan.md`)  
**Verifier:** clean-context (read-only product/plan; this report only)  
**Notes skimmed:** `research/notes/plan-final-summary.md`, `research/notes/全国深挖进度.md`  
**Preview:** `http://127.0.0.1:3000` (already running; HTTP 200)

## Verdict

**PARTIAL**

Product UX + China map + 华东 long + 新疆 6 线 + playbook scaffolding are largely in place, and `npm run ux:plan` is **13/13 PASS**. National discovery, XHS rewrite coverage, and “调研驱动再立项” discipline are **not** at plan acceptance: discovery digests **4 / 31+national**, both XHS loops **DEAD**, shortlist still sparse / many “待XHS” while deepen routes already shipped, and XHS 覆盖表 still frames **35** routes against a **53**-route catalog.

Plan todo checkboxes in Cursor are marked completed; this audit treats **acceptance criteria**, not checkbox status.

---

## Checklist table

| Item | Verdict | Evidence |
|------|---------|----------|
| **P0.1 华东 long** | **PASS** | `content/patches/routes-huadong-long.ts` → `huadong-suhan-slow` (`tripType: 'long'`, 约2–3周). Wired in `content/index.ts` + `route-provinces` (`primary: zhejiang`, also 苏/皖). Preview `GET /routes/huadong-suhan-slow/` → **200**, title「苏杭徽 · 水乡慢住两三周」, badge「长旅行」. Audit still forces `huadong-huangshan-hui` → short (`content/audit-patches/huadong-huazhong.ts`). |
| **P0.2 Explore tripType + 从北京短途/当季** | **PASS** (等价控件) | `components/ChinaMapExplorer.tsx` has tripType chips + `从北京短途` + `当季（…）` (lines ~170–203). Home HTML includes those strings. `FilterBar.tsx` exists but is **not imported** anywhere else — plan允许「FilterBar 或等价」. |
| **P0.3 详情地图首屏 + 放大看全图** | **PARTIAL** | `RouteMapWithExpand` +「放大看全图」on detail (`app/routes/[id]/page.tsx` after cover). Preview confirms button. Map is **below** full-bleed cover → not reliably first-viewport on mobile; closer to prior “map placement PARTIAL”. |
| **P0.4 Deploy doc / 工作区能力** | **PASS** (doc+WT) | `docs/部署与私有仓库说明.md` documents private Pages limits, offline zip, SW. `.github/workflows/deploy-pages.yml`, `public/sw.js` (cache-first, `caches` present), `npm run pack:offline`. Live Pages/Release still out of scope for “勿擅自改可见性”. |
| **P0.5 既有线 XHS 慢速 loop** | **FAIL / stalled** | `research/raw/xhs/loop.pid` **DEAD**; `pgrep` no `xhs-slow-loop`. Log ends pending **104/112**, stuck on `huabei-shanxi-loop`. `XHS覆盖状态.md` (15:45Z): **7/35** 至少1次检索+改写; 未覆盖新加深线（表仍「路线数：35」；`huadong-suhan-slow` absent; `xibei-xinjiang-north` 0/2 待检索）. |
| **P1 queries-discovery.json** | **PASS** (scaffold) | File present: **3** national + **31** provinces (`python` count). |
| **P1 discovery scripts** | **PASS** (scaffold) | `research/scripts/xhs-discovery-batch.mjs`, `xhs-discover-digest.mjs`; npm `research:xhs-discover` / `research:xhs-discover-digest`. |
| **P1 digests vs 31 省** | **FAIL** | Digests: **4** files — `national.md`, `beijing.md`, `tianjin.md`, `hebei.md`. Raw `discover_*.json` size≥1000: **4**. Plan acceptance: 31 省均有发现摘要. |
| **P1 shortlist 全表可追溯** | **PARTIAL** | `research/notes/route-shortlist.md` exists (~95 lines). Many province rows empty; filled rows often「首轮深挖，待XHS发现复核」or「已立项深挖」— **立项先于全国发现完成**, vs plan「立项必须以 shortlist 为准，禁止未检索先堆 id」. |
| **P1 discover loop running** | **FAIL** | `discover-loop.pid` **DEAD**; last tick searched `shanxi[0]` then stopped. Progress note claims background loop; process not alive at verify time. |
| **P2 geojson** | **PASS** | `public/geo/china-provinces.json` — FeatureCollection **35** features (~475KB). |
| **P2 RegionMap 真轮廓** | **PASS** | `RegionMap.tsx` loads via `loadChinaProvinceFeatures` / `geometryToPath`; copy「中国地图示意（非实时路况）」. Home shows「中国地图示意」. |
| **P2 RouteOverviewMap 走廊底图** | **PASS** (minor gap) | Basemap paths + thick translucent corridor polyline (`RouteOverviewMap.tsx` ~158–188). Disclaimer string on overview map **not** found (only RegionMap); still clearly not white-only dashed polyline. |
| **P3 新疆 ≥6** | **PASS** | `route-provinces`: 6 primary → `xibei-xinjiang-{north,yili,south,kashi,turpan,duku}`. Patch `routes-xinjiang.ts` + north in `routes-northwest.ts`. All 6 have `route-details` keys. Preview **200** for each id. |
| **P3 其他大区多线** | **PARTIAL** | Catalog **53** routes / **31** primary provinces. ≥2 primary: **15** provinces (新6; 川/滇/青3; …). Still **1** primary: 蒙/黔/闽/苏/皖/湘/豫/鲁/宁/渝/沪/津 + 东北三省等 — 旅游大省目标「通常 ≥3–6」未齐. Deepen patches exist (`routes-deepen-*.ts`). |
| **P3 波浪均调研驱动** | **FAIL** | Discovery only 4 digests; shortlist acknowledges「待XHS」while routes already in product. |
| **P4 调研流程.md** | **PASS** | `research/notes/调研流程.md` — 发现→shortlist→立项→精准→二次XHS→入库 + fanout file rules. |
| **P4 XHS覆盖状态 + shortlist** | **PARTIAL** | Both files exist; status **stale** (35 vs 53; no suhan; xinjiang-north still 待检索). Progress board incomplete vs plan. |
| **Fanout 纪律** | **PARTIAL** (observable) | Regional split patches (`routes-xinjiang`, `routes-huadong-long`, `routes-deepen-*`); 调研流程 notes MCP 单进程 + 总表串行. No live fanout ops log this round; artifact shape matches discipline. |
| **`npm run ux:plan`** | **PASS** | Preview :3000 up. After `PLAYWRIGHT_BROWSERS_PATH=0 npx playwright install chromium`, run → **SUMMARY 13 pass / 0 fail** (`research/notes/_plan-playwright.md` refreshed). |
| **Spot: xinjiang 6 ids** | **PASS** | See P3; HTTP 200 ×6. |
| **Spot: huadong long** | **PASS** | `huadong-suhan-slow` long; HTTP 200. |

---

## Gaps vs plan (priority order)

1. **全国发现层远未完成** — digests **4/31** (+national); raw discover **4**; loops dead mid-`shanxi`. Acceptance「31 省均有发现摘要」 unmet.  
2. **立项/深挖领先于发现** — shortlist empty or「待XHS」while 53-route deepen already shipped; violates research-first rule.  
3. **XHS 改写闭环滞后且状态表过期** — ~7/35 old routes done; new 新疆/华东 long/deepen mostly unsearched; status still「路线数：35」. Both slow loops not running.  
4. **旅游大省多线深度不均** — 新疆达标；云/川/青等有多线；蒙/黔/闽/苏/皖等仍单 primary，未达「大省 ≥3–6」意图.  
5. **详情地图「首屏」偏弱** — cover first, map second; expand OK.  
6. **RouteOverviewMap** missing explicit「中国地图示意（非实时路况）」copy (RegionMap has it).

---

## Recommended next 3–5 concrete tasks (implementing agent)

1. **Restart & babysit discovery loop only** (`XHS_MAX=1`, single process): drain `research:xhs-discover` → digest until **≥31 province** `research/notes/xhs-discovery/*.md` (+national). Do not start route-loop in parallel until MCP stable.  
2. **Rewrite `route-shortlist.md` from digests** — fill empty provinces with evidence links; mark rows that were pre-shipped as「已立项·待发现复核」or cut empty shells that lack sources.  
3. **Regenerate `XHS覆盖状态.md` for all ~53 catalog ids** (include `huadong-suhan-slow` + 5 new xinjiang ids); resume `research:xhs-loop` breadth-first until each route ≥1 search→digest→apply.  
4. **Deepen gap provinces from shortlist only** (priority: 内蒙古 / 贵州 / 福建 / 江苏·安徽补线) — no new ids without digest-backed shortlist rows.  
5. **Small UX polish:** move `RouteMapWithExpand` above cover (or collapse cover) for true first-viewport map; add overview-map disclaimer string to match RegionMap.

---

## Commands run (this verify)

```text
curl -s -o /dev/null -w "%{http_code}" http://127.0.0.1:3000/   # 200
# counts: queries-discovery, digests, discover_*.json, route-provinces, geojson features
ls research/notes/xhs-discovery/   # 4 md
# pid check: discover-loop.pid / loop.pid → DEAD
PLAYWRIGHT_BROWSERS_PATH=0 npx playwright install chromium
PLAYWRIGHT_BROWSERS_PATH=0 npm run ux:plan   # 13 pass / 0 fail
curl …/routes/{huadong-suhan-slow,xibei-xinjiang-*}/   # all 200
```

## Related prior notes

- `research/notes/全国深挖进度.md` claims delivered map/Explore/华东 long/新疆6 + ux 13/13 — **product side matches**; its「后台进行中」loops were **not alive** at verify.  
- `research/notes/plan-final-summary.md` (earlier) still listed 华东 long / FilterBar / 详情地图 as open — **those product gaps are largely closed**; discovery/XHS remain the main PARTIAL drivers.
