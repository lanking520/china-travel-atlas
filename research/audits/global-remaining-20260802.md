# Global remaining · 2026-08-02 (wrap-up)

Clean-context wrap-up after Explore 地区 dim / map-tab removal, content close-out, dead-code hygiene, `AGENTS.md`, mainland-access research.

**Sources:** `ux-backlog-20260802.md`, `content-backlog-20260802.md`, `verify-loop-latest.md`, explore-ia / ux-clean verifies, live catalog JSON.

---

## Snapshot

| Item | Value |
|------|-------|
| Branch | `main` |
| Catalog | **~201** routes · **31** compose · **67** leg · **3** base |
| `ux:plan` | Expect **25 / 25** after preview (P19 no map cover) |
| Content backlog «Open — product» | **0** open |
| Content backlog «Open — polish» | optional only (长居 chip、stops/tips、soft→Commons、粤西/东北冬) |
| UX backlog open | density pass · virtualization · embla/motion/offline index |
| Mainland access | Research note + OSS dual-deploy **stub** (not enabled) |

---

## Shipped this wrap-up

1. **Dead-code hygiene** — removed unused Next boilerplate SVGs; dropped orphan audit patches for retired ids (`huabei-shandong-coast`, `yunnan-dali-lijiang`, `xibei-xinjiang-north`); Pages CI smoke rejects「地图选区」. Kept `lib/china-geo` / `RouteOverviewMap` (detail maps).
2. **`AGENTS.md`** — contributor pickup guide (audience, stack, content model, Explore IA, discovery, images, 三门槛, commands).
3. **China access research** — `research/notes/china-mainland-access-20260802.md` + `deploy-china-oss.workflow.stub.yml`.
4. **Backlog hygiene** — catalog ~201; UX RegionMap note corrected; content polish items listed as open optional (not falsely closed).

---

## Still optional

- UX: density pass after live feedback; virtualization if ≫~200 janks; P2 embla + motion; offline search index
- Content: 长居 chip / base polish; more high-traffic stops/tips; soft→Commons if scenic appears; 粤西 / 东北冬 only if product asks
- Ops: Aliyun OSS+CDN dual-deploy after ICP/domain (see mainland-access note)
- Low-priority corridor shallow (G210 非延安段); shortlist 天津海河加深、景德镇独立

---

## Intentionally out of scope

- 港澳 · 阿里/珠峰 · G219 极限 · G214/G210/G318 全线贯通
- Discovery gate = multi-source only; XHS optional review
- Enabling China OSS workflow without secrets/ICP

---

*Updated: 2026-08-02 evening · FINAL verify `plan-verify-round-20260802-final.md` (PASS; live about lags deploy).*
