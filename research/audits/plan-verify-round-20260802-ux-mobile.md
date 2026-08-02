# Plan verify · UX mobile framework — 2026-08-02

Clean-context UI/UX verification against `research/notes/ux-mobile-framework-proposal-20260802.md`.  
Did not trust prior agent claims; re-checked code, local preview, live Pages, and `npm run ux:plan`.

**Overall: PASS** (P0 proposal items ship and work; follow-ups from this round executed below)

Evidence: commits `fa1d06f` / `ae95b2d` / `f30c500` (+ UX P1 follow-up), `components/ChinaMapExplorer.tsx`, `components/RouteCard.tsx`, `components/SoftDetails.tsx`, `lib/route-search.ts`, `app/routes/[id]/page.tsx`, `app/globals.css`, Playwright `research/raw/playwright-ux-verify-20260802/`, `research/notes/_plan-playwright.md`.

Audience note confirmed: UI is modern feed density (`html` 17px, `--tap-min: 36px`, chips ~38px) — **not** 适老专用 / 48px senior chrome.

---

## Checklist

| # | Ask | Verdict | Evidence |
|---|-----|---------|----------|
| 1 | Search box: present; finds city/attraction/keyword; clear/empty | **PASS** | Placeholder「搜索城市、景点或路线」; debounce ~180ms; 婺源→3 / 厦鼓→1 / 乐山→1 / 九寨→1 (local+live); empty「没有找到…」; 清除 restores map |
| 2 | Route pick lists: dual-column image cards + scrim | **PASS** | `RouteCardGrid` `grid-cols-2 md:grid-cols-3`; full-bleed `SafeImage` + sky scrim; used in search / 名景 / province; screenshots `02-search-wuyuan-dualcol.png`, `03-mingjing-grid.png` |
| 3 | 名景 / 长居 / 走廊 discoverable; season not hiding 名景 by default | **PASS** | Always-visible primary chips; 当季/大环线/边陲 under「更多」; season default `undefined` →「全部」`aria-pressed=true`; default+名景 includes 婺源/厦鼓/九寨 |
| 4 | Mobile density: modern, readable, not bulky senior-mode | **PASS** | `globals.css` `--text-body`/`--text-title`/`--tap-min:36px`; chip height ~38px; home screenshot matches proposal wireframe (search → chips → map) |
| 5 | Detail sticky section rail usable on mobile | **PASS** | `nav[aria-label=本页目录]` `position:sticky`; labels 怎么走/时间/景点/吃住/就医/须知; sections use `scroll-mt-14`; screenshot `04-detail-rail.png` |
| 6 | basePath links work on GitHub Pages | **PASS** | Live search hrefs `/china-travel-atlas/routes/…`; header `/china-travel-atlas/`, `/overview/`, `/about/`; no root-absolute `/routes` leaks; detail URL includes basePath |
| 7 | Dead-lead: 婺源、厦鼓、乐山峨眉、九寨 via 名景 or search | **PASS** | Search hits on local+live; 名景 list text includes all samples. Catalog **144** on `f30c500` |
| 8 | `npm run ux:plan` | **PASS** | **17 PASS / 0 FAIL** (2026-08-02 follow-up; was 13; +P13–P16 search/名景/grid/rail) |

---

## Gap notes (not FAIL)

| Note | Severity | Detail |
|------|----------|--------|
| Live catalog behind local | Low → **done** | Content `f30c500` (catalog 144) + UX `2b2d3f7` Pages deploy **success** ([run 30766854141](https://github.com/lanking520/china-travel-atlas/actions/runs/30766854141)). |
| `ux:plan` coverage lag | Med → **done** | Extended: P13 婺源 search, P14 九寨 search, P15 名景→`grid-cols-2`, P16 sticky「本页目录」+ guide/time open. **17 PASS**. |
| P1 progressive disclosure | — → **done** | `SoftDetails`: 路线指南+时间规划 stay open; 长居建议 / 快览说明 / 参考来源 collapsed by default. |
| Explore first-viewport | — → **done (light)** | Search + primary chips (名景/长居/走廊) one band; season/长短 below; tighter rhythm. |
| Optional rail scrollspy | — | Skipped (non-trivial). |

No tiny broken UI found this follow-up beyond locator strict-mode in new ux:plan checks (fixed).

---

## Next tasks (3–5) — prior round status

1. **Extend `ux:plan`** — **DONE** (17 PASS).
2. **Redeploy GitHub Pages** — **DONE** (`2b2d3f7` deploy success).
3. **P1 progressive disclosure** — **DONE** (`SoftDetails` on detail).
4. **P1 explore first-viewport polish** — **DONE** (light).
5. **Optional rail scrollspy** — skipped.

### Remaining / later

1. Live smoke after Pages: 名景 card count ≈ local.
2. Optional sticky-rail scrollspy (mobile IA).
3. P1 bottom nav (探索 / 两年 / 说明) if still desired.

---

## Sources re-checked

- Proposal: `research/notes/ux-mobile-framework-proposal-20260802.md`
- Live: https://lanking520.github.io/china-travel-atlas/
- Local: http://127.0.0.1:3000/
- Screens: `research/raw/playwright-ux-verify-20260802/` + `research/raw/playwright-plan/`
