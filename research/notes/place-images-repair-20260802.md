# Place-images repair — 2026-08-02

**Goal:** Reduce wrong-city / placeholder soft attraction photos with license-safe Commons (no Unsplash-as-attraction).

## Audit snapshot (pre → post this round)

| Metric | Before | After |
| --- | ---: | ---: |
| `PLACE_STOP_IMAGES` | 593 | 593 |
| `PLACE_ROUTE_COVERS` | 182 | 182 |
| `PLACE_SOFT_IDS` (同区示意 captions) | **131** | **97** |
| Soft after 华中/华南 batch (this note + `place-images-batch-huazhong-huanan-20260802.md`) | 97 | **78** |
| `PLACE_GENERATED_IDS` (示意生成图) | 3 | 3 |
| Wired `/generated/places/` stop srcs | 3 | 3 |
| Unsplash in place-images map | 0 | 0 |
| Stops on Great Wall `PLACE_IMAGE_FALLBACK` | 1 | 1 |

**Generated still live (no safe scenic Commons):**

- `qiziwan-optional` — 昌江棋子湾
- `ts-laoting-optional` — 乐亭岸线
- `datong-zuoyun-optional` — 左云县域

**Worst pre-round offenders (wrong city / wrong landmark soft):** Fuzhou West Lake←厦门、黔灵山←黄果树、安徽博物院←屯溪、峨眉←青城、南宁馆←德天、河南博物院←开封铁塔、南昌八一←婺源、深圳华侨城←广州塔、大梅沙←深圳湾桥、江汉路←黄鹤楼视角、等。

## This round — 34 soft → place-accurate Commons

Discovery: Wikipedia `pageimages` (zh/en) + Openverse (`license=by,by-sa,cc0,pdm`, `source=wikimedia`). Verify: Commons `imageinfo` thumburl (prefer over bulk upload HEAD — 429). Pipeline: `research/scripts/resolve-place-images.py` FILES synced; `content/place-images.ts` URLs + soft-set removals.

| ID | Commons file (summary) |
| --- | --- |
| `fz-west-lake-optional` | 福州西湖公園oeotwc_-_panoramio.jpg |
| `gy-qianling-optional` | 黔灵山.jpg |
| `hf-anhui-museum-optional` | 安徽博物院正面.jpg |
| `le-emei-optional` | EmeiShanTop.jpg |
| `nn-museum-optional` | Guangxi_Museum.jpg |
| `zz-henan-museum-optional` | 20210220_Henan_Museum_-_main_hall_01.jpg |
| `nc-bayi-optional` | Nanchang_Bayi_Guangchang_20120723-20.jpg |
| `sz-oct-optional` | 远看深圳华侨城_OCT,_Shenzhen_-_panoramio.jpg |
| `sz-dameisha-optional` | 深圳大梅沙.jpg |
| `wy-tianyuan-optional` | 福建省武夷山天游峰风景区景色_-_panoramio_(1).jpg |
| `pt-foding-optional` | 普陀山.佛顶山.慧济禅寺_-_panoramio_(1).jpg |
| `bh-weizhou-optional` | 北海_涠洲岛_月亮湾_-_panoramio.jpg |
| `jz-hongshi` | 河南_云台山_红石峡_标志景点_-_panoramio.jpg |
| `jz-quanpu-optional` | 云台山泉瀑峡_-_panoramio.jpg |
| `jz-zhuyu-optional` | 茱萸峰_-_panoramio_(2).jpg |
| `yy-dongting` | 洞庭湖大桥.jpg |
| `zj-beigu-optional` | 镇江北固山铁塔.jpg |
| `pingyao-wall-optional` | 平遥城墙-流浪的狗狗_-_panoramio_-_aisccd.jpg |
| `gy-museum-optional` | 贵州省博物馆_远.jpg |
| `nj-zijin-optional` | PurpleMountain01.JPG |
| `jn-quancheng-optional` | 济南大明湖牌匾夜景.jpg |
| `hrb-sun-island-optional` | 哈尔滨太阳岛_2.jpg |
| `wt-dailuoding-optional` | 从黛螺顶看五台山寺院.jpg |
| `wuyuan-huangling` | 婺源篁岭天街_3.jpg |
| `jz-shuzheng` | 四川.九寨沟._树正寨_-_panoramio.jpg |
| `manting-park` | 景洪_曼听公园之傣族风格跨河桥_01.jpg |
| `lz-museum-optional` | New_Exhibition_Building_of_the_Gansu_Provincial_Museum.jpg |
| `hz-sizhou-optional` | Huizhou_Sizhou_Ta_2013.09.21_08-26-23.jpg |
| `lz-yarlung-optional` | 雅鲁藏布江_yaluzangbu_river_-_panoramio.jpg |
| `km-xishan-optional` | Dianchi.jpg (reuse corridor-accurate) |
| `snj-scenic` | 神农架_神农顶景区之冰瀑.jpg |
| `es-dislot-optional` | 恩施大峡谷2_-_panoramio.jpg |
| `wh-jianghan-optional` | 江汉路步行街.jpg |
| `lb-daqikong-optional` | 荔波大七孔，202403_5.jpg |

Raw picks / applied map: `research/raw/soft-upgrade-candidates-20260802.json`, `soft-upgrade-final-20260802.json`, `soft-upgrade-applied-20260802.json`.

**Rejected this round (keep soft / skip):**

| ID | Why |
| --- | --- |
| `hf-sanhe-optional` | Openverse hit 阜阳颍州港 — wrong city |
| `bh-oldtown` | No safe dedicated 北海骑楼 scenic |
| `xinghan-optional` | Hit 兴隆洼玉器 — wrong subject |
| `ty-fenhe-optional` | Plant close-up only |
| `fj-jinding-optional` | Only parent 梵净图; no dedicated 金顶 |
| `lianfengshan-optional` / `shapotou-optional` / `zhuhai-optional` | Intentional same-scenic duplicate |
| Gen trio | Still no elder-safe scenic on Commons/Openverse |

## Remaining gaps (priority order)

1. **示意生成图 (3)** — 棋子湾 / 乐亭 / 左云 — re-search quarterly; keep gen over wrong beach/grotto.
2. **Wrong-ish soft bases** — city-hub stops still sharing parent scenic (`wh-wuchang-base`, `cs-xiangjiang-base`, `fz-gulou-base`, `gy-nanming-base`, `nj-xuanwu-base`, `ty-yingze-base`, …). Upgrade when a skyline/park Commons exists.
3. **Buffer / gate softs** — `*-gate`, `*-buffer`, `*-exit`, `g318*`, `g214*` — low visual priority; same-corridor OK.
4. **Hard scenic softs** — `bh-oldtown`, `hf-sanhe-optional`, `hh-xilamuren-optional`, `hk-volcano-optional`, `fj-jinding-optional`, `wy-tea-optional`, `xz-*`, `yzc-*` optionals.
5. **Shared-URL clusters** without soft label — e.g. longstay Kunming/Hulunbuir/Chengdu panda buffers; intentional corridor reuse, caption via soft set when user-facing stop is not the photo subject.

## Playbook (sources & ops)

```
Need place photo
  │
  ├─① Curated Commons filename → MD5 /1280px thumb
  │     research/scripts/resolve-place-images.py  (PLACE_VERIFY=0 offline)
  ├─② Wikipedia pageimages (zh then en) → pageimage filename
  ├─③ Openverse API  license=by,by-sa,cc0,pdm  source=wikimedia
  │     research/scripts/openverse-place-fallback.py
  ├─④ Commons API imageinfo (iiurlwidth=1280) to verify — prefer over bulk HEAD
  ├─⑤ Flickr CC via Openverse → download public/places/ long-term
  ├─⑥ Official tourism only with clear reuse / local mirror + attribution
  └─⑦ Labeled 示意生成图  public/generated/places/{id}.png
        NEVER Unsplash-as-named-attraction
```

**Ops rules**

- Wire URL in `PLACE_STOP_IMAGES` / `PLACE_ROUTE_COVERS`; remove id from `PLACE_SOFT_IDS` only when photo is place-accurate.
- Sync filename into `resolve-place-images.py` `FILES`.
- Sparse verify (≤1 req / 2–3s); on 429 switch to `imageinfo` / cached wiki thumb.
- Do **not** re-run `/places/` mutianyu stand-in regenerators.
- Do **not** block on XHS MCP.
- Wrong-province soft is a bug; same-corridor soft may remain with 「同区示意」.

## Next batch candidates (~20)

`hf-sanhe-optional`, `bh-oldtown`, `ty-fenhe-optional`, `fj-jinding-optional`, `hh-xilamuren-optional`, `wy-tea-optional`, `cz-yancheng-optional`, `nt-museum-optional`, `huz-feiying-optional`, `yc-museum-optional`, `wf-park-optional`, `zs-park-optional`, `gaozhuang-optional`, city bases (`wh-wuchang-base`, `fz-gulou-base`, `gy-nanming-base`, `nj-xuanwu-base`, `ty-yingze-base`, `sz-nanshan-base`, `hrb-daoli-base`).

## Related

- Strategy: `research/audits/image-source-strategy.md`
- Decision tree: `research/notes/image-sources-options.md`
- Session log: `research/audits/image-coverage-progress-20260802.md`
