# Plan final audit — deploy / PWA / offline / book-ready

**Plan:** `~/.cursor/plans/中国旅游地图网站_33daee57.plan.md`  
（节：怎么给父母用：部署结论 · 技术实现范围 · 与「书」的关系 · todos `deploy-pack` / `book-ready` / scaffold PWA）  
**Repo:** `/Users/richpige/Documents/GitHub/china-travel-atlas` (`lanking520/china-travel-atlas`)  
**Audited:** 2026-08-02  
**Method:** Read listed files + `gh` CI/Pages/Release; compare working tree vs `HEAD`/`origin/main`. No code edits. No commit.

---

## Verdict summary

| Area | Workspace files | Shipped on `main` / live |
|------|-----------------|---------------------------|
| Static export + basePath | **PASS** | **PASS** |
| Pages workflow file | **PASS** | **PARTIAL** — deploy job 404, Pages not enabled |
| Offline zip + Release in Actions | **PASS** (WT) | **FAIL** — steps not on `origin/main`; no Release |
| PWA manifest + real SW cache | **PASS** (WT) | **PARTIAL** — HEAD `sw.js` still no-op |
| Offline docs | **PASS** | **PARTIAL** — docs exist; Release path unused live |
| Book-ready docs/scripts | **PASS** (WT) | **FAIL** — `成书导出说明` / `book-index` / script untracked |
| Private-repo Pages caveat | **PARTIAL** (expected) | Confirmed blocker |

**Plan todos**

| Todo | Verdict | Notes |
|------|---------|-------|
| **deploy-pack** | **PARTIAL** | Build + Pages workflow present; live Pages broken on private repo; offline zip/Release only in uncommitted WT |
| **book-ready** | **PARTIAL** | Docs + `export:book-index` ready in WT; not committed to `main` yet |

---

## Checklist (user verify list)

### 1. Static export configured — **PASS**

Evidence: `next.config.ts`

- `output: "export"`
- `GITHUB_PAGES === "true"` → `basePath` / `assetPrefix` = `/china-travel-atlas`
- `env.NEXT_PUBLIC_BASE_PATH` mirrors basePath (manifest + SW register)
- `images.unoptimized: true` (required for static export)
- `trailingSlash: true`

`package.json`: `"build:pages": "GITHUB_PAGES=true next build"` (committed).

---

### 2. GitHub Pages workflow exists — **PARTIAL**

Evidence: `.github/workflows/deploy-pages.yml` (on `main` and WT)

- Trigger: `push` → `main`
- Job `build`: `npm ci` → `npm run build:pages` → `actions/upload-pages-artifact@v3` (`path: out`)
- Job `deploy`: `actions/deploy-pages@v4` under `environment: github-pages`

**Live CI (2026-08-02):**

| Run | Result |
|-----|--------|
| `30736893691` (earlier) | success (build + deploy) |
| `30737404089` (latest on `main`) | **failure** — `Creating Pages deployment failed` / `HttpError: Not Found` — message: enable Pages at repo Settings → Pages |

`gh api .../pages` → **404**. Repo **`isPrivate: true`**. Private-repo GitHub Pages needs a paid plan (or public repo); docs already warn about this.

→ Workflow **exists** and builds; **public site URL is not reliably live** → PARTIAL.

---

### 3. Offline zip / Release steps in Actions — **PARTIAL** (WT PASS / shipped FAIL)

**Working tree** `.github/workflows/deploy-pages.yml` adds (uncommitted vs `HEAD`):

1. Pack `china-travel-atlas-offline.zip` from `out/` (+ copy `docs/离线打开说明.md`, `README.md`)
2. `actions/upload-artifact@v4` name `china-travel-atlas-offline`
3. `softprops/action-gh-release@v2` tag `offline-latest`, attaches zip
4. `permissions.contents: write` (needed for Release)

**`origin/main` / `HEAD`:** only Pages artifact upload — **no** zip, **no** Release step.

**Live:** `gh release list` empty; `offline-latest` not found. Artifacts seen: `github-pages` only.

Local script (WT only): `npm run pack:offline` in `package.json`.

→ Implementation ready locally; **not shipped / not producing Releases** → PARTIAL.

---

### 4. PWA manifest + SW caching (not no-op only) — **PARTIAL**

| Piece | Status |
|-------|--------|
| `app/manifest.ts` | **PASS** — name/short_name zh-CN, `start_url` with basePath, standalone, theme, SVG icons |
| Icons | **PASS** — `public/icon-192.svg`, `public/icon-512.svg` |
| `components/PwaRegister.tsx` | **PASS** — registers `${basePath}/sw.js` in production; used in `app/layout.tsx` |
| `public/sw.js` (WT) | **PASS** — precache shell (`./`, about, overview, manifest, icons); same-origin cache-first; skip cross-origin (Unsplash/maps); activate cleans old caches |
| `public/sw.js` (`HEAD`) | **FAIL vs plan intent** — comment “Minimal service worker”; install/`skipWaiting` only — **no-op caching** |

About page (`app/about/page.tsx`) documents PWA + offline zip.

→ Workspace meets “real caching”; **committed SW still no-op** until WT is merged → PARTIAL.

---

### 5. Offline docs usable — **PASS** (content) / **PARTIAL** (end-to-end)

Evidence: `docs/离线打开说明.md` (modified in WT)

- Online URL + add-to-home-screen (iOS/Android)
- Private Pages caveat called out
- Releases zip `china-travel-atlas-offline.zip` / tag `offline-latest`
- Avoid bare `file://`; recommend `npx serve` + `/china-travel-atlas/` path
- WeChat → open in system browser
- Local `npm run pack:offline`

README links the same docs and URL.

Caveat: parents cannot follow “download from Releases” until Release steps ship and succeed.

---

### 6. Book-ready docs/scripts — **PARTIAL**

| Asset | Workspace | Tracked on `main` |
|-------|-----------|-------------------|
| `docs/成书导出说明.md` | Present — 地区/季节分章、二期不做排版 | **Untracked** |
| `docs/book-index.md` | Present — 34 routes by region/season | **Untracked** |
| `research/scripts/export-book-index.mjs` | Present | **Untracked** |
| `package.json` `export:book-index` | Present in WT | **Not on HEAD** |

Plan: content = manuscript; export index only this phase — **satisfied in WT**.

---

### 7. Private-repo Pages caveat — **PARTIAL** (relevant)

- Repo visibility: **PRIVATE**
- Pages API: **404**; latest deploy: enable Pages
- Docs/README/workflow body already note private Pages / use offline zip
- Even after enabling: private Pages often needs GitHub Pro/Team; visitors need auth unless public

This alone keeps **deploy-pack** from full PASS until Pages works or repo is public / alternate host.

---

## File evidence map

| Path | Role | Notes |
|------|------|-------|
| `next.config.ts` | Static export + basePath | Committed |
| `.github/workflows/deploy-pages.yml` | Pages (+ WT: zip/Release) | Zip/Release **uncommitted** |
| `app/manifest.ts` | Web app manifest | Committed |
| `public/sw.js` | Cache-first SW | Real cache **uncommitted**; HEAD no-op |
| `components/PwaRegister.tsx` | SW registration | Committed |
| `docs/离线打开说明.md` | Offline UX | Modified WT |
| `docs/成书导出说明.md` | Book-ready | Untracked |
| `docs/book-index.md` | Generated index | Untracked |
| `package.json` | `build:pages`, `pack:offline`, `export:book-index` | Latter two **uncommitted** |
| `README.md` | Online URL + offline/book links | Modified WT |

---

## Gaps / fix suggestions (no code changed)

1. **Enable GitHub Pages** (Settings → Pages → GitHub Actions) **or** make repo public / use another static host — unblock `deploy-pages`.
2. **Commit & push** WT deploy pack: workflow zip/Release, `pack:offline`, real `sw.js`, offline/book docs, `export-book-index`.
3. Confirm first successful run creates Release `offline-latest` and artifact `china-travel-atlas-offline`.
4. Optional: drop stale comment in `PwaRegister.tsx` (“Full offline support planned…”) once SW+zip are shipped.
5. Note: `pack:offline` / CI build use `GITHUB_PAGES=true`, so unzipped site expects `/china-travel-atlas/` — already documented.

---

## Overall

Deploy/PWA/offline/book-ready are **largely implemented in the working tree** and match the plan’s technical list. **Live deliverables are incomplete:** private-repo Pages currently fails, offline Release pipeline is not on `main`, HEAD service worker is still a no-op, and book-export assets are untracked. Treat **deploy-pack** and **book-ready** as **PARTIAL** until those land and CI green-produces the Release + a reachable site (or explicit offline-only fallback).
