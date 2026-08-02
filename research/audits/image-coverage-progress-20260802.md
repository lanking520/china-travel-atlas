# Image coverage progress — 2026-08-02 (session)

Decision tree: `research/notes/image-sources-options.md`

## This session filled

### Photo upgrades (verified Commons / Openverse → MD5 thumb)

| ID | Was | Now |
|---|---|---|
| `gubei-overnight`, `gubei-water-town` | AI gen / bad filename | `Gubei_water_village_from_Simatai_Great_Wall_in_Beijing_-_panoramio.jpg` |
| `dongbei-heilongjiang-wudalianchi`, `wudalianchi-*` | `Wudalianchi.jpg` 404 / gen | `Lava_Rock_Landscape_of_Wudalianchi.jpg` |
| `wudadao` | `Tianjin_Five_Great_Avenues.jpg` 404 → Eye | `Five_Great_Avenues_21393-Tianjin_(49063741486).jpg` |
| `xinan-chengdu-slow`, `chengdu-*` | `Chengdu.jpg` 404 → Jinli | Kuanzhai Alleys Commons |
| `huazhong-shaanxi-hanzhong`, `hanzhong-*` | generic `Hanzhong.jpg` | Hantai panoramio |
| `xinan-guizhou-zhenyuan`, `zhenyuan-*` | `Zhenyuan_County.jpg` | `Guizhou_Zhenyuan_Ancient_Town4_(cropped).jpg` |
| `nanshan-view` | generic `Chongqing.jpg` | `Chongqing_Nightscape.jpg` |
| `dongguan-street` | West Lake reuse / gen | Commons `Ge_Yuan_个园_(5812003010).jpg` (He_Garden.jpg verified as alt) |
| `puning-temple` | labeled gen | Commons `普宁寺大乘之阁2025.11.jpg` (exterior; HEAD 200) |
| `sangke-optional` | Labrang / gen | Commons `Sangke_grassland.jpg` (original path; small square) |
| `qinglong-dong-optional` | Zhenyuan town reuse | Commons `贵州-镇远-青龙洞 - panoramio.jpg` |
| `xtbg-optional` | generic `Xishuangbanna.jpg` | `Tropical_Botanical_Garden,_Xishuangbanna_-_panoramio.jpg` |
| `nanjing-optional` | Nanjing CBD skyline | Commons `Nanjing_Museum.jpg` |

**Photo count this session:** ~22 ids (~13 unique Commons files).

### AI gen (示意生成图) — `public/generated/places/`

| File | Wired IDs |
|---|---|
| ~~`puning-temple.png`~~ | upgraded to Commons exterior |
| `huanan-hainan-slow-west.png` | route + `danzhou-base`, `danzhou-coast`, `qiziwan-optional` |
| ~~`dongguan-street.png`~~ | upgraded to Commons 个园 |
| ~~`sangke-optional.png`~~ | upgraded to Commons grassland |
| `mingshi-optional.png` | `mingshi-optional` (Openverse/Commons empty for 明仕田园) |

**Gen still live:** 1 unique file / 4 ids (Hainan west cluster) + `mingshi-optional`.  
(Unused gen PNGs kept on disk as backups: puning, sangke, dongguan, gubei, wudalianchi.)

## Wiring / recovery

- `content/place-images.ts` — Commons map regenerated via `PLACE_VERIFY=0 resolve-place-images.py`, then session overlays + `PLACE_GENERATED_IDS`
- **Note:** a parallel local `/places/*.jpg` stand-in regenerator briefly overwrote the map (many `mutianyu.jpg` reuses). Restored from FILES; **do not re-run** that stand-in path.
- `lib/place-images.ts` — captions 示意生成图 for `PLACE_GENERATED_IDS`
- `research/scripts/resolve-place-images.py` — FILES/ALTS updated (Puning exterior, Ge/He, Sangke, Qinglong, XTBG, Nanjing Museum)

## Visual QA (this round)

localhost `:3000` spot-check (cover src):

| Route | Cover |
|---|---|
| `huanan-sanya-winter` | `Sanya_Bay_panorama.jpg` |
| `huanan-xiamen-winter` | `Xiamen.jpg` |
| `huanan-guangxi-detian` | `Detian_Falls.jpg` (not Li River) |
| `xibei-lanzhou-xiahe` | `Labrang_Monastery.jpg` |
| `xibei-xinjiang-north` | `Kanas_Lake.jpg` |
| `xibei-xinjiang-kashi` | `Kashgar.jpg` |
| `xibei-xinjiang-duku` | `Duku_Highway.jpg` |
| `chengde-2d` | Mountain Resort + stop Commons 普宁寺大乘之阁 |
| `huadong-jiangsu-yangzhou` | Slender West Lake + Ge Yuan on `dongguan-street` |
| `huanan-hainan-slow-west` | labeled gen PNG |

Sparse HEAD: Puning / Ge Yuan / Nanjing Museum → 200; Sangke original briefly 429 (API imageinfo OK earlier).

## Remaining gaps (high priority)

1. **`mingshi-optional`** — still labeled gen; no CC photo found (Openverse 0 / Commons miss).
2. **Hainan west cluster** — still gen (`Hainan.jpg` too generic / wrong-east risk).
3. **Soft optional reuses** (same-area OK, not wrong landmark): `xinghan-optional`↔Hantai city; `pingyao-wall` / `shapotou-optional` / `lianfengshan` / `zhuhai-optional` share parent scenic; **`zjk-zhangbei-optional`↔Hulunbuir** (坝上草浪示意); **`ts-laoting-optional`↔Beidaihe** (渤海湾同廊示意).
4. **`Xiamen.jpg`** — thin panoramic strip; nicer Gulangyu/cover upgrade later.
5. **Do not re-run** local `/places/` stand-in regenerators or Li-River→Hainan mappers.

### QA follow-up (same day)

- Longstay: 8 covers + 32 stops Commons-mapped; Unsplash rejected in `placeImage*` fallbacks.
- New: `huabei-hebei-zhangjiakou` → `Dajingmen_(20171008104017).jpg` + Chongli golden forests.
- New: `huabei-hebei-baoding` → 直隶总督署 + 清西陵 + 白洋淀 + 野三坡; `huabei-hebei-tangshan` → 清东陵 + 南湖 + 喜峰口; soft: `ts-laoting-optional`↔北戴河。
- Gen still: Hainan west cluster + `mingshi-optional`（无快速 Commons 替换）。

## Sample IDs to preview

- Photo: `puning-temple`, `dongguan-street`, `sangke-optional`, `qinglong-dong-optional`, `xtbg-optional`, `nanjing-optional`, `gubei-overnight`
- Gen: `huanan-hainan-slow-west`, `mingshi-optional`

---

## Conflict resolve — 2026-08-02 (midday)

**Conflict:** pass A wanted offline `public/places/*.jpg` mirrors; pass B restored a Commons-URL catalog after a bad regenerator mass-wired `/places/mutianyu.jpg` stand-ins.

**Resolution (accuracy > offline mirroring):**

1. **Did not** re-run `/places/` stand-in regenerators; catalog stays **Commons-URL primary** (`0` wired `'/places/…'` in `place-images.ts`; 275 Commons + 7 gen paths).
2. **No mutianyu stand-in copies** found among local JPGs (unique MD5s); leftover `public/places/*.jpg` treated as optional offline cache only.
3. Named-gap Commons filenames that **404** (deleted/wrong names) were **replaced with Wikipedia pageimage–verified thumbs** (GET 200):
   - 都江堰 → `36661-Dujiangyan_(44634340644).jpg`
   - 北戴河 → `Beidaihe_panorama_from_the_south.jpg`
   - 张掖丹霞 → `Zhangye_National_Geopark_5.jpg`
   - 嘉峪关 → `Jiayuguan_20151012.jpg`
   - 赛里木 → `赛里木湖远景，摄于湖畔山丘.jpg`
   - 喀纳斯 → `Kanas.jpg`
   - 长白山天池 → `从长白山西坡看天池-2017-08-24_1.jpg`
   - 沈阳故宫 → kept working `Mukden_Palace.jpg`
   - 索菲亚 → `West_facade_of_St._Sophia_Cathedral,_Harbin_(20230721150450).jpg`
   - 武当 → `Wudangshan_pic_7.jpg`
   - 华山 → `1_mount_hua_shan_china_2011.jpg`
   - 大理古城 → `大理古城南门-2064560.jpg`
4. Matching **correct** local mirrors saved under `public/places/{dujiangyan,beidaihe,zhangye-danxia,jiayuguan,sayram,kanas,changbai-tianchi,shenyang-palace,sophia,wudang,huashan,dali}.jpg` — **not wired** into the map (avoids stand-in conflict; ready if offline preferred later).
5. Gen left live: `mingshi-optional` + Hainan west cluster.
6. Preview `:3000` spot-check OK for dali / dujiangyan / changbai / kanas / wudang / shenyang / harbin / hainan-west.

**Still soft gaps:** `qiziwan-optional` gen; soft optionals with 同区示意 captions; nicer `Xiamen.jpg` later. Do **not** mass-replace Commons with generic `/places/mutianyu`.

---

## QA next-task image pass — 2026-08-02 (evening)

| ID | Was | Now |
|----|-----|-----|
| `huanan-hainan-slow-west` | gen PNG | Commons `Chengmai_Laocheng_seashore_20220619.jpg`（西/北岸日落，非三亚） |
| `danzhou-base` | gen | Commons `Yangpu_Ancient_Salt_Field_-_Hainan_-_01.jpg`（儋州洋浦古盐田） |
| `danzhou-coast` | gen | Commons `Cape_Lingao.jpg`（临高角西岸） |
| `mingshi-optional` | gen | Commons 明仕–德天沿边公路 panoramio |
| `qiziwan-optional` | gen | **仍 gen**（无棋子湾安全图；文档保留） |
| `zjk-zhangbei-optional` | Hulunbuir 错省 | `Zhangbei_Grass_Skyline_…` |
| `yantai-optional` | `Yantai.jpg`（实为威海） | `煙台山景區.jpg` |
| Soft captions | none | `PLACE_SOFT_IDS` → 字幕「同区示意」 |

**Rejected:** `Yangpu_Bay.jpeg`（海花岛卫星俯瞰，不适老封面）。未重跑 `/places/` stand-in regenerators。

---

## Late QA remaining — 2026-08-02

| ID | Was | Now |
|----|-----|-----|
| `qiziwan-optional` | gen | **仍 gen** — 无棋子湾风景 Commons；拒昌江道边/卫星/广播台 |
| `yt-penglai-optional` | 烟台山同市 soft | Commons `PenglaiPavilion.jpg`（出 soft） |
| `yt-changdao-optional` | 烟台灯塔 soft | Commons `烟台长岛-南长山岛.JPG`（出 soft） |
| `ls-rongcheng-day` | 刘公岛同市 soft | Commons `成山头 - panoramio.jpg`（出 soft） |
| `datong-lingqiu-optional` | 应县木塔 soft | Commons `觉山寺塔-1.jpg`（出 soft） |
| `datong-zuoyun-optional` | 云冈 soft | **仍 soft**（无左云风景；教堂废墟不适老封面） |
| `ts-laoting-optional` | 北戴河 soft | **仍 soft**（无乐亭岸线；拒青海金银滩同名误配） |
| `huabei-hebei-shijiazhuang` | — | 新建线；Commons 隆兴寺封面 + 五站实景 |

**PLACE_SOFT_IDS now:** `ts-laoting-optional`, `xinghan-optional`, `lianfengshan-optional`, `pingyao-wall-optional`, `zhuhai-optional`, `shapotou-optional`, `datong-zuoyun-optional`.

未重跑 `/places/` stand-in regenerators；未引入 Unsplash。

---

## Wrong-city soft upgrades — 2026-08-02 (post-ac819a0)

| ID | Was (wrong city) | Now (HEAD 200 Commons) |
|----|------------------|------------------------|
| `dongbei-jilin-changchun` + `cc-*` | `Yanji.jpg` | `Changchun_skyline_with_Ji_Tower_-_panoramio.jpg`；`cc-nanhu`→`Nanhu_Lake_park_-_panoramio.jpg` |
| `huanan-hainan-haikou` + `hk-*` | `Sanya_Bay_panorama.jpg` | `Haikou_Century_Bridge_in_2015.jpg`；`hk-qilou`→骑楼老街 panoramio |
| `huabei-neimeng-hohhot` + `hh-city/museum/buffer` | `Hulunbuir.jpg` | `Da_Zhao_Temple_in_Hohhot3.JPG`；馆线 `Altan_Khan_statue…` |
| `hh-xilamuren-optional` | Hulunbuir | **仍 soft** 草浪同廊（拒大召顶替草原） |
| `hk-volcano-optional` | Sanya | 世纪桥同城 soft（无火山专用风景） |

Pipeline: `research/scripts/resolve-place-images.py` FILES 同步上述文件名。出 soft：`cc-chaoyang/cultural`、`hk-longhua`、`hh-city/buffer`。
