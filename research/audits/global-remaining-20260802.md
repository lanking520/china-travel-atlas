# Global remaining · 2026-08-02 (post-Ctrip)

Clean-context wrap-up after Explore 地区 dim / map-tab removal, detail map retire, photo upgrades, brand rename, Zhengzhou tags, compose→leg back-nav, and Ctrip enrich + PG fills.

**Sources:** `ux-backlog-20260802.md`, `content-backlog-20260802.md`, `plan-verify-round-20260802-post-ctrip.md`, `ctrip-enrich-rollup-20260802.md`, live Pages.

---

## Snapshot

| Item | Value |
|------|-------|
| Branch / HEAD | `main` @ `9478529` |
| Catalog | **~201** routes · **31** compose · **67** leg · **3** base |
| Brand | **中国旅游地图** |
| `fromZhengzhouHome` | **8** Henan-circle routes |
| Ctrip enrich | **197/201** PG\|intro; 4 intentional 华北 skips |
| `ux:plan` | Expect **25 / 25** after preview (P5 = 精细化路线介绍; no map cover) |
| Content backlog «Open — product» | **0** open |
| Content backlog «Open — polish» | optional only (长居 chip、soft residual、粤西/东北冬、华北 intro parity) |
| UX backlog open | density pass · virtualization · embla/motion/offline index |
| Mainland access | Research note + OSS dual-deploy **stub** (not enabled) |
| Detail maps | **Retired** — practical transport copy only |

---

## Shipped since FINAL verify

1. **Detail map retire** (`a4de5ae`) — `RouteOverviewMap` / `china-geo` / province geo removed;「精细化路线介绍」.
2. **Photos** — regional soft→Commons waves + leftover upgrades; soft ≈15 intentional; gen 3.
3. **Brand** — 爸妈中国旅游地图 → 中国旅游地图 (`c120ebc`).
4. **郑州家** — `fromZhengzhouHome` tags (`3866800`).
5. **Back-nav** — compose→leg Back returns to long-line (`61e8be5`).
6. **Ctrip enrich** — five regions + 西南/西北青藏 PG backfills (`1eb32c0`…`9478529`).

---

## Still optional

- UX: density pass after live feedback; virtualization if ≫~200 janks; P2 embla + motion; offline search index
- Content: 长居 chip / base polish; Soft→Commons residual buffers; 粤西 / 东北冬 only if product asks; optional 华北/东北 intro parity
- Ops: Aliyun OSS+CDN dual-deploy after ICP/domain (see mainland-access note)

---

## Intentionally out of scope

- 港澳 · 阿里/珠峰 · G219 极限 · G214/G210/G318 全线贯通
- Reintroducing map tab or detail overview maps / Leaflet
- Discovery gate = multi-source only; XHS optional review
- Enabling China OSS workflow without secrets/ICP

---

*Updated: 2026-08-02 post-Ctrip · verify `plan-verify-round-20260802-post-ctrip.md` (PASS).*
