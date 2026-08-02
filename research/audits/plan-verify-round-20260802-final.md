# Plan verify · FINAL · 2026-08-02

Clean-context final verification (fresh agent; no chat memory).  
**HEAD at write:** `dd65880` + local doc/about lock fixes (this round).  
**Pulled latest `main` mid-run** — parallel landed: filter whitespace (`dd65880`), 两年/说明 copy (`a2f1c49`).

**Sources:** `AGENTS.md`, `ux-backlog-20260802.md`, `content-backlog-20260802.md`, `global-remaining-20260802.md`, prior `plan-verify-round-20260802*.md`, `verify-loop-latest.md`, live Pages, `tsc`, `npm run ux:plan`.

---

## Verdict: **PASS** (with minor PARTIAL on live Pages lag)

| # | Checklist | Result | Evidence |
|---|-----------|--------|----------|
| 1 | **Plan / backlog hygiene** | **PASS** | Durable UX/content/`global-remaining` match shipped IA. Product open = **0**; polish opens remain intentional. Discovery gate = multi-source (`research/notes/multi-discovery/`), XHS optional. Corrected: earlier `verify-loop-latest` / content-backlog verify claimed **0** unchecked while polish `[ ]` later reappeared — treat **content-backlog Open—polish** as source of truth. Historical explores (`*-explore-ia.md`, `*-ux-clean.md`) still describe map-tab era — **do not treat as current PASS**. |
| 2 | **Dead code** | **PASS** | `FilterBar.tsx` / `RegionMap.tsx` **gone**. No map-tab/`coverMode` leftovers in components. `/app/explore` is intentional alias → `/`. Detail `RouteOverviewMap` + `lib/china-geo` + `public/geo/china-provinces.json` **kept**. `npx tsc --noEmit` **0**. `npm run ux:plan` **25/25** (P9 fixed by rephrasing about away from literal `地图选区`). |
| 3 | **Docs** | **PASS** | `AGENTS.md` matches 4 dims + no map tab + bottom nav; `CLAUDE.md` → `@AGENTS.md`. Mainland-access note + OSS stub present. README one-liner updated to 4 dims. About/overview refreshed (`a2f1c49`); about no longer contains string `地图选区` (P9 lock). |
| 4 | **Live consistency** | **PARTIAL→PASS pending deploy** | Live home (`lanking520.github.io/china-travel-atlas/`): **全部景点** + 季节/长短/主题/地区 + 筛选维度; **no** `地图选区`. 河口–沙巴 compose live: explicit **沙巴/Sapa/越南/护照/签证/口岸**. Live about still old copy until Pages rebuild after this push — expected lag. |

---

## Spot checks

| Check | Result |
|-------|--------|
| Catalog `explore-routes.json` | **201** routes · **31** compose · **67** leg · **3** base |
| Multi-discovery gate (河口) | `research/notes/multi-discovery/yunnan-hekou-sapa-20260802.md` present |
| Hekou–Sapa honesty (repo) | Compose + legs name Sa Pa / Vietnam; passport+visa; formal 河口–老街 only |
| CI Pages smoke | Rejects `地图选区` in `out/index.html` only (home) |
| UX backlog open | density · virtualization · embla/motion/offline index |
| Content backlog open | polish only (长居 chip、stops/tips、soft→Commons、粤西/东北冬 optional) |

---

## Fixes this round

1. `app/about/page.tsx` — rephrase so P9 does not trip on literal `地图选区` while keeping “no map picker” meaning.
2. `README.md` — align blurb with 4 filter dims (no map picker tab).
3. This audit file; refresh `verify-loop-latest.md` + light `global-remaining` note.

---

## False / stale claims called out (do not re-open as product work)

- `plan-verify-round-20260802-explore-ia.md` / `*-explore-ux.md` / early `*-ux-clean.md` “Remaining” still list map tab / bottom nav as open or map cover PASS — **obsolete**.
- Mid-day content verify “0 open checkboxes / 182 routes” — catalog now **~201**; polish section has intentional `[ ]`.

---

## Next tasks (actionable)

1. **After this push:** wait for Pages green; curl live `/about/` for 四个维度 / 无地图点选 wording; confirm home still free of `地图选区`.
2. **Ops (when ready):** Aliyun OSS+CDN dual-deploy per `china-mainland-access-20260802.md` (ICP/domain + secrets) — do **not** enable stub workflow early.
3. **UX optional:** density pass after parent feedback; true virtualization only if ~200+ catalog janks on mid phones.
4. **Content optional:** high-traffic stops/tips beyond character framing; Explore 长居 chip / base detail polish if product wants.
5. **Do not:** reintroduce map tab, `national-*` monoliths, or block new ids on XHS MCP health — multi-discovery notes remain the gate.
