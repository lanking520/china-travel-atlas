# Mobile UX framework proposal — travel atlas

**Date:** 2026-08-02  
**Stack:** Next.js App Router (static export + GitHub Pages `basePath`) · Tailwind CSS 4 · React 19  
**Audience:** Beijing-home travelers (incl. parents ~60) who already use **小红书 / Pinterest-style** apps. **适老 is not mandatory** — do not ship giant 48px senior-mode chrome or simplified “适老专用” aesthetics. Prefer a **modern dense-but-scannable feed**; modestly bumped type (root ~17px, titles one step up) is enough.

---

## 0. Audience note (2026-08-02 clarification)

| Do | Don't |
|----|--------|
| Image-forward dual-column picks (XHS/Pinterest) | Huge elderly tap targets fighting feed density |
| Slightly larger readable type | Redesign as 适老专用 / simplified chrome |
| Sticky compact back + section jump | Bottom-sheet overkill for every filter |
| Keep sky/emerald map language | Purple glass / dashboard kits |

Content may still say “适老节奏” (trip pacing); **UI chrome is modern mobile**, not senior-mode.

---

## 1. Audit — current mobile pain

### Explore (`ChinaMapExplorer` + home)

| Area | Observation | Pain |
|------|-------------|------|
| **Hierarchy** | Home hides brand/hero on phone; first paint = filters + map. Functional but scaffold-like. | Weak brand + weak “what do I do?” signal |
| **Density** | Season + tripType always on; primary themes now promoted (名景/长居/走廊); extras under「更多」 | Was: theme chips buried — fixed as P0 |
| **Navigation** | Map drill 全国→大区→省→路线 is solid; sticky 返回 works | Three taps before a route if they already know the name |
| **Map + list** | Map then province buttons then **dual-column image cards** | Image cards match modern feed expectation |
| **Typography** | Root ~17px + Noto Sans/Serif | Keep modest; avoid bloating chips to `text-lg` on phone |
| **Search** | Keyword entry shipped | Famous places no longer require map geography |

### Route detail (`app/routes/[id]/page.tsx`)

| Area | Observation | Pain |
|------|-------------|------|
| **Hierarchy** | Long vertical stack of sections | Sticky horizontal section rail (怎么走/时间/景点/…) mitigates |
| **Progressive disclosure** | Almost everything expanded | P1: collapse 参考来源 / 快览 |
| **Images** | Cover after map; gallery mid-page | Hero not full-bleed (P1 polish) |
| **Nav** | Top Header +「← 返回探索」+ section rail | Optional bottom tabs later |

**Verdict:** Interaction model (map drill + filters + search) is correct; presentation leans **modern feed**, not senior scaffold.

---

## 2. Recommended approach (keep React/Next + Tailwind)

### Core recommendation

**Stay on Tailwind + thin headless primitives.** Do **not** adopt a dashboard kit or Flutter rewrite.

| Layer | Choice | Why |
|-------|--------|-----|
| Styling | **Tailwind 4** + CSS variables in `globals.css` | Already shipping; static export friendly |
| Type scale | Tokenized `--text-body` / `--text-title` / `--tap-min` (~36px, not 48) | Consistency without senior-mode |
| Overlays | Custom dialog (exists) · **vaul** optional P1 | Bottom sheet only if chip row grows |
| Accessible primitives | **Radix** optional later | Only if custom a11y gets costly |
| Carousel | **embla** optional P2 | Gallery swipe |
| Nav pattern | Sticky top toolbar + section rail · optional bottom tabs later | Thumb reach without bulk |

### Aesthetic direction (anti-slop)

- Keep **sky / emerald / amber** travel map language — refine tokens, don’t purple-wash.
- Display serif for titles; body Noto Sans SC.
- Soft paper/sky gradient background; reduce ring/card chrome on pick tiles.
- Explore first viewport: **全部景点 tab → search → dual-column catalog** (not season/theme chip clutter on cover).

---

## 3. Mobile information architecture

### 3.1 Home / Explore (approved IA · 2026-08-02)

```
┌─────────────────────────────────────┐
│ Brand · 探索 | 两年 | 说明          │
├─────────────────────────────────────┤
│ 🔍 搜索（在 tabs 之上）             │
│ [全部景点]  [地图选区]   ← tabs     │
├─────────────────────────────────────┤
│ 全部景点 (default):                 │
│   sticky ←返回(仅有筛选时) · title  │
│   identity chips ·「添加筛选」      │
│   dual-column RouteCards (paginate) │
├─────────────────────────────────────┤
│ 地图选区 (cover): map ONLY below    │
│   tap 大区 → results + region chip  │
└─────────────────────────────────────┘
```

**Entry paths:**

1. **全部景点** — default unfiltered catalog (results mode, zero chips)  
2. **Search** — keyword → results + chip  
3. **地图选区** — cover search+map; region pick → results + region chip  
4. **添加筛选** — season / trip / 名景·长居·走廊… only on results, not cover  


### 3.2 Route detail

```
┌─────────────────────────────────────┐
│ ← 探索 · 路线标题                   │
│ Hero / summary / badges             │
│ Sticky: 怎么走 | 时间 | 景点 | …    │
│ Sections with scroll-mt anchors     │
└─────────────────────────────────────┘
```

---

## 4. Search (shipped)

- Large-enough `type="search"`; placeholder「搜索城市、景点或路线」.
- Client-side over `@/content` catalog; debounce ~180ms; title matches ranked higher.
- Active search replaces map/filters; **清除** / **返回** exit.
- Links use Next `Link` → GitHub Pages `basePath`.

**Files:** `lib/route-search.ts`, `components/ChinaMapExplorer.tsx`

---

## 5. Priority phases

### P0 — ship now / next sprint

1. **Search box + catalog filter** (done)
2. **Dual-column place-image route cards** (done; tightened for modern density)
3. Surface **名景 / 长居 / 走廊** on mobile always-visible row (done —「更多」for 当季/大环线/边陲)
4. Route detail: **sticky horizontal section jump** (done — anchors + `scroll-mt`)
5. Token pass: `--tap-min: 36px` (not 48), `--text-body` / `--text-title` in `globals.css` (done)

### P1

1. Detail progressive disclosure: default-expand 路线指南 + 时间规划; collapse 参考来源 / 快览说明
2. Mobile bottom nav (探索 / 两年 / 说明) with safe-area padding
3. Explore first viewport polish: one composition — search + chips + map
4. Optional **vaul** sheet for “筛选” if chip row grows further

### P2

1. Embla gallery on detail
2. Radix Tabs only if section rail needs keyboard a11y beyond anchors
3. Offline search index prebuild if catalog ≫ current size
4. Light motion (map select, sheet open) — 2–3 intentional transitions

---

## 6. What NOT to adopt

- Full **dashboard / admin UI kits**
- **Purple / glow / glassmorphism** AI-default look
- **Flutter / React Native** rewrite
- **Sidebar + hidden search**
- Replacing map drill with search-only
- Fighting content agents on `content/*` for UI work
- **Senior-mode / 适老专用** chrome (48px+ taps, simplified aesthetics) that fights the dual-column feed

---

## 7. Top 5 UX changes (executive)

1. **Keyword search on Explore**  
2. **Dual-column place-image route cards** (小红书-style)  
3. **Promote theme chips** (名景/长居/走廊) to always-visible mobile row  
4. **Detail section rail** — jump without endless scroll  
5. **Modern density + modest type** — not senior-mode tokens / bottom nav later  

---

## 7b. Dual-column route pick cards (Pinterest / 小红书) — shipped

**Where:** province 选路线 · theme lists · search hits  
**Not:** province picker buttons or the China map.

**Layout:** `grid-cols-2` · `md:grid-cols-3` · alternating aspect tiles.

**Card anatomy:** full-bleed photo · sky-ink scrim · title · days · budget · optional chip · entire card is one `<Link>`.

**Image source:** `cardImageForRoute` in `lib/place-images.ts` (catalog only).

**Components:** `RouteCard` + `RouteCardGrid`

---

## 8. Wireframe ASCII — Explore (phone)

```
╔══════════════════════════╗
║ 爸妈中国旅游地图  探索… ║
╠══════════════════════════╣
║ 🔍 搜索                  ║
║ [全部景点] [地图选区]    ║
║ title · chips · 添加筛选 ║
║ ┌──────┐ ┌──────┐        ║
║ │ 图+字│ │ 图+字│  2列  ║
║ └──────┘ └──────┘ (+lazy)║
╠══ 地图选区 cover ════════╣
║ 🔍 搜索 · tabs           ║
║     【 中国地图 SVG 】   ║
╚══════════════════════════╝
```

---

## 9. Implementation notes

- Prefer **CSS + existing components** before adding dependencies.
- Compatible with `output: "export"` and `basePath`.
- `npm run ux:plan` clicks dual-column route cards (not legacy「查看详细旅行攻略」text links).
- Visual taste: modern feed density; readable type; no senior-mode bloat.
