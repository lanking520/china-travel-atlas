# Mainland China mobile access · 2026-08-02

**Status (2026-08-02 update):** **Cloudflare Pages interim mirror is live** — share with parents first when GitHub Pages is slow:

- **CF Pages (interim / 大陆优先试):** https://china-travel-atlas.pages.dev/
- **GitHub Pages (canonical / CI):** https://lanking520.github.io/china-travel-atlas/
- **Offline zip:** GitHub Releases `offline-latest`

**Do not build Aliyun OSS dual-deploy now.** CF already covers the CDN/interim-access need. **阿里云 OSS + CDN + ICP** stays an **optional later** path only if WeChat in-app / peak-hour reliability still needs a 备案内地 edge.

**Problem (unchanged):** Next.js static export on GitHub Pages (`*.github.io`) is often **slow, flaky, or unreachable** on mainland mobile networks. Parents on WeChat/Safari/Chrome need a link that opens without VPN.

**Constraint:** Site is fully static (`out/`). No SSR. Low ops preferred. Private→public family atlas, not a commercial SaaS.

---

## Current ops (shipped)

| Host | URL | Role |
| --- | --- | --- |
| **Cloudflare Pages** | https://china-travel-atlas.pages.dev/ | **Interim mainland-friendly mirror** — prefer this link for parents when GH Pages fails |
| **GitHub Pages** | https://lanking520.github.io/china-travel-atlas/ | Canonical CI deploy (`deploy-pages.yml`); `GITHUB_PAGES=true` basePath |
| **Offline zip** | Releases `offline-latest` | Fallback if both hosts fail / airplane mode after cache |

Honesty: CF is still **offshore** (no 内地 PoP unless Enterprise China Network). Better than `*.github.io` for many 大陆 networks; **not** a WeChat-max / 备案 guarantee. Offline zip remains the hard fallback.

---

## Ranked options (reference)

### 1. Domestic CDN / static host (best reliability in 大陆 — optional later)

| Host | Fit for static `out/` | Mainland UX | Ops / cost | Notes |
| --- | --- | --- | --- | --- |
| **阿里云 OSS + CDN** | Excellent (静态网站托管) | Best-in-class with 备案域名 | Low ¥; console + secrets | Need custom domain + **ICP** if Bucket in 内地 |
| **腾讯云 COS + CDN** | Excellent | Same class as Ali | Similar | Same ICP rule for mainland region |
| **又拍云 / 七牛** | Good | Strong domestic CDN | Similar | ICP if mainland edge |
| **Cloudflare** (Pages/CDN) | Easy dual with GH | **Partial** — HK/JP/SG edges; often OK; peak-hour variable | Free tier | **In use now** as interim mirror; no mainland PoP unless Enterprise China Network |
| **Vercel** | Easy | Officially: **no CN infra**; `.vercel.app` often degraded/blocked | Free | Custom domain helps a bit; **not** a CN guarantee ([Vercel KB](https://vercel.com/guides/accessing-vercel-hosted-sites-from-mainland-china)) |
| **Netlify** | Easy | Same class as Vercel (offshore) | Free | Do not rely on for 大陆父母 |

**Verdict for parents today:** Prefer **CF Pages** (`china-travel-atlas.pages.dev`) over GH Pages; keep zip ready. **Verdict for WeChat-max later (optional):** only then consider **阿里云 OSS + CDN** behind a **备案自定义域名**.

### 2. Custom domain + ICP备案 (optional later)

- Binding a **user domain** to a **中国内地** OSS/COS/CDN endpoint requires **ICP备案** (域名主体、备案载体、管局审核). Typical wall-clock **3–6 weeks**.
- Without ICP you may still use 境外 Bucket / CDN — weaker than 内地 CDN.
- WeChat in-app browser is stricter about odd hosts; a short memorable `https://travel.example.cn/` beats `*.github.io/...` and may beat `*.pages.dev` for trust — only worth the ICP wait if CF proves insufficient.

### 3. Mirror / dual-deploy strategies

**Today (do this):**

```text
git push main
    → GitHub Actions: Deploy A — GitHub Pages (/china-travel-atlas)
    → Cloudflare Pages: Deploy B — root basePath mirror (pages.dev)  [live]
Parents: try CF first if GH Pages fails; else offline zip.
```

**Optional later (Aliyun — do not enable stub until product asks + ICP ready):**

```text
        → Deploy C: ossutil sync out-cn/ → oss://… + CDN purge  [not built]
DNS (if ever):
    境内线路 → 阿里云 CDN CNAME
    境外默认 → GitHub Pages / Cloudflare
```

**basePath caveat:** Pages build uses `GITHUB_PAGES=true` → assets under `/china-travel-atlas/`. A root-domain China / CF mirror should build with **`GITHUB_PAGES` unset** (empty `basePath`). Same commit, two env builds — avoid shipping Pages-prefixed HTML to a root host.

Keep **one content version** (same `main` SHA) on live hosts to prevent “父母看到旧攻略”.

### 4. No-ICP offshore options (honesty)

| Option | Sometimes works? | Reliability for 父母 |
| --- | --- | --- |
| **Cloudflare Pages** (this atlas) | Often yes; live at `pages.dev` | **Interim solution — use it**; still not 内地合规节点 |
| CF Worker reverse-proxy | Anecdotal help | Fragile; ops debt; still offshore |
| Vercel + custom domain | Better than `*.vercel.app` | Vercel: **cannot guarantee** CN access |
| BunnyCDN / other APAC CDN | Better Asia latency than pure US | Still not 内地合规节点 |
| Gitee Pages / Coding Pages | Domestic host | Product/policy churn; fine for experiment, weak as sole plan |

### 5. Recommended path (this atlas)

**Phase A — now (shipped):** GitHub Pages + **Cloudflare Pages mirror** + offline zip. Share CF URL when GH Pages is flaky; zip / 「添加到主屏幕」 after one successful open.

**Phase B — optional later (WeChat-max only; do not start unless CF fails parents):**

1. Buy/use a domain you control (`.com` or `.cn`).
2. Open 阿里云 account → OSS Bucket → 静态网站 + **ICP备案**.
3. After ICP: bind domain → CDN → HTTPS; Action: build without `GITHUB_PAGES` → `ossutil` sync.
4. Copy stub workflow only when secrets exist — see `deploy-china-oss.workflow.stub.yml`.

**Skip for now:** Enabling the Aliyun stub workflow; Vercel/Netlify as primary CN URL; CF Enterprise China Network (cost).

### 6. Concrete next steps

| Step | Action | Status |
| --- | --- | --- |
| A | Keep CF Pages mirror green; share `https://china-travel-atlas.pages.dev/` with parents | **DONE / live** |
| B | Keep GH Pages CI + offline zip as canonical / fallback | **DONE** |
| C | Parents smoke: 电信/联通/移动 WeChat open CF vs `*.github.io` | Ongoing |
| D | Aliyun OSS+CDN + ICP + stub workflow | **Optional later — do not build now** |

---

## Dual-deploy sketch (Actions) — optional later only

```yaml
# Concept only — see deploy-china-oss.workflow.stub.yml
# Do NOT copy into .github/workflows/ until ICP/domain/secrets exist
# and product explicitly asks for WeChat-max beyond CF.
jobs:
  build-cn:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 22, cache: npm }
      - run: npm ci
      - run: npm run build   # GITHUB_PAGES unset → basePath ""
      - uses: manyuanrong/setup-ossutil@v3
        with:
          endpoint: ${{ secrets.OSS_ENDPOINT }}
          access-key-id: ${{ secrets.ALIYUN_ACCESS_KEY_ID }}
          access-key-secret: ${{ secrets.ALIYUN_ACCESS_KEY_SECRET }}
      - run: ossutil cp -rf out/ oss://${{ secrets.OSS_BUCKET }}/ --meta=Cache-Control:no-cache
```

Keep existing `deploy-pages.yml` unchanged as Deploy A.

---

## References

- Live CF mirror: https://china-travel-atlas.pages.dev/
- Live GH Pages: https://lanking520.github.io/china-travel-atlas/
- Aliyun OSS 静态网站托管: https://help.aliyun.com/zh/oss/user-guide/hosting-static-websites  
- Vercel mainland access KB: https://vercel.com/guides/accessing-vercel-hosted-sites-from-mainland-china  

*Updated 2026-08-02 · CF Pages interim CDN live · Aliyun dual-deploy not built (optional later).*
