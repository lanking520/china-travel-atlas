# Mainland China mobile access · 2026-08-02

**Problem:** This atlas ships as a **Next.js static export** on GitHub Pages (`https://lanking520.github.io/china-travel-atlas/`). `*.github.io` is often **slow, flaky, or unreachable** on mainland China mobile networks (运营商跨境 / GFW throttling). Parents on WeChat/Safari/Chrome need a link that opens without VPN.

**Constraint:** Site is fully static (`out/`). No SSR. Low ops preferred. Private→public family atlas, not a commercial SaaS.

---

## Ranked options

### 1. Domestic CDN / static host (best reliability in 大陆)

| Host | Fit for static `out/` | Mainland UX | Ops / cost | Notes |
| --- | --- | --- | --- | --- |
| **阿里云 OSS + CDN** | Excellent (静态网站托管) | Best-in-class with 备案域名 | Low ¥; console + secrets | Need custom domain + **ICP** if Bucket in 内地 |
| **腾讯云 COS + CDN** | Excellent | Same class as Ali | Similar | Same ICP rule for mainland region |
| **又拍云 / 七牛** | Good | Strong domestic CDN | Similar | ICP if mainland edge |
| **Cloudflare** (Pages/CDN) | Easy dual with GH | **Partial** — HK/JP/SG edges; peak-hour flaky | Free tier | No mainland PoP unless Enterprise China Network |
| **Vercel** | Easy | Officially: **no CN infra**; `.vercel.app` often degraded/blocked | Free | Custom domain helps a bit; **not** a CN guarantee ([Vercel KB](https://vercel.com/guides/accessing-vercel-hosted-sites-from-mainland-china)) |
| **Netlify** | Easy | Same class as Vercel (offshore) | Free | Do not rely on for 大陆父母 |

**Verdict for parents:** Prefer **阿里云 OSS + CDN** (or 腾讯云 COS + CDN) behind a **备案自定义域名**. Keep GitHub Pages as the free global/dev mirror.

### 2. Custom domain + ICP备案

- Binding a **user domain** to a **中国内地** OSS/COS/CDN endpoint requires **ICP备案** (域名主体、备案载体、管局审核). Typical wall-clock **3–6 weeks**.
- Aliyun tip for no ECS: some teams use **函数计算资源包** only as 备案载体 (still real paperwork; not a loophole).
- Without ICP you may still use:
  - OSS **公网 Bucket 域名** — often forces **download** for HTML (bad for a website), or
  - **境外** Bucket / CDN (香港等) — no ICP, weaker/more variable 大陆 access than 内地 CDN.
- WeChat in-app browser is stricter about odd hosts; a short memorable `https://travel.example.cn/` beats `*.github.io/...`.

### 3. Mirror / dual-deploy strategies

Recommended pattern for this repo:

```text
git push main
    → GitHub Actions: one build (or two: pages basePath vs root)
        → Deploy A: GitHub Pages (/china-travel-atlas basePath)  [today]
        → Deploy B: ossutil sync out-cn/ → oss://… + CDN purge  [future]
DNS (optional later):
    境内线路 → 阿里云 CDN CNAME
    境外默认 → GitHub Pages / Cloudflare
```

**basePath caveat:** Pages build uses `GITHUB_PAGES=true` → assets under `/china-travel-atlas/`. A root-domain China mirror should build with **`GITHUB_PAGES` unset** (empty `basePath`) so `https://cn.example.com/` works. Same commit, two env builds — avoid shipping Pages-prefixed HTML to OSS root.

Keep **one content version** (same `main` SHA) on both hosts to prevent “父母看到旧攻略”.

### 4. No-ICP offshore options (honesty)

| Option | Sometimes works? | Reliability for 父母 |
| --- | --- | --- |
| Cloudflare Pages / Workers | Often yes off-peak; custom domain better than `pages.dev` | **Not guaranteed**; DNS poisoning / congestion common |
| CF Worker reverse-proxy in front of Pages/Vercel | Anecdotal help | Fragile; ops debt; still offshore |
| Vercel + custom domain | Better than `*.vercel.app` | Vercel: **cannot guarantee** CN access |
| BunnyCDN / other APAC CDN | Better Asia latency than pure US | Still not 内地合规节点 |
| Gitee Pages / Coding Pages | Domestic host | Product/policy churn; fine for experiment, weak as sole plan |

**Honest take:** Offshore-only = best-effort. Fine for the maintainer abroad; **not** enough as the only URL you send parents on WeChat.

### 5. Recommended path (this atlas)

**Phase A — now (already shipped):** GitHub Pages + offline zip Release (`offline-latest`). Tell parents: if link fails, use zip / 「添加到主屏幕」 after one successful open.

**Phase B — low ops, when ready to spend a weekend + 备案 wait:**

1. Buy/use a domain you control (`.com` or `.cn`).
2. Open 阿里云 account → OSS Bucket (**华东/华北**, 公共读) → enable 静态网站 (`index.html` / `404.html`).
3. Start **ICP备案**; meanwhile keep sharing GH Pages + offline zip.
4. After ICP: bind domain → CDN → HTTPS (免费 DV 证书).
5. Add GitHub Action job: build **without** `GITHUB_PAGES` → `ossutil` sync → CDN refresh.
6. Optional: 阿里云云解析 分线路（境内→CDN，境外→Pages）.

**Skip for now:** Vercel/Netlify as primary CN URL; CF Enterprise China Network (cost); full GeoDNS until dual deploy is boringly stable.

### 6. Concrete next steps

| Step | Action |
| --- | --- |
| 1 | Create 阿里云账号; enable OSS + CDN; create RAM user with OSS write only |
| 2 | Register/transfer domain; begin ICP if targeting 内地 CDN |
| 3 | Add GitHub secrets: `ALIYUN_ACCESS_KEY_ID`, `ALIYUN_ACCESS_KEY_SECRET`, `OSS_BUCKET`, `OSS_ENDPOINT` (never commit) |
| 4 | Copy `research/notes/deploy-china-oss.workflow.stub.yml` → `.github/workflows/deploy-china-oss.yml` once secrets exist |
| 5 | Build China artifact: `npm run build` (no `GITHUB_PAGES`) → sync `out/` to `oss://$BUCKET/` |
| 6 | Parents smoke: 电信/联通/移动 4G WeChat open custom domain; compare vs `*.github.io` |
| 7 | Update README「在线访问」with **主链接（国内）** + Pages 备用 + 离线 zip |

**Not done in this session:** live OSS account, ICP filing, or enabling the stub workflow (would fail without secrets).

---

## Dual-deploy sketch (Actions)

```yaml
# Concept only — see deploy-china-oss.workflow.stub.yml
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
      # optional: aliyun CDN RefreshObjectCaches
```

Keep existing `deploy-pages.yml` unchanged as Deploy A.

---

## References

- Aliyun OSS 静态网站托管: https://help.aliyun.com/zh/oss/user-guide/hosting-static-websites  
- Vercel mainland access KB: https://vercel.com/guides/accessing-vercel-hosted-sites-from-mainland-china  
- Example dual CDN write-ups (Hugo/OSS+CF patterns): community blogs 2025–2026  

*Research only · 2026-08-02 · no production China CDN wired yet.*
