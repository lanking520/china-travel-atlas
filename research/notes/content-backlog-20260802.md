# Content backlog · 2026-08-02

Durable checklist for china-travel-atlas content quality after wave 2 (`254c0f0` → UX `f4866a6`).  
Check items off as sessions complete them; keep unchecked work visible for the next agent.

IA proposal: [`content-route-composition-ia-20260802.md`](./content-route-composition-ia-20260802.md)  
Long-stay hubs: [`long-stay-cities-20260802.md`](./long-stay-cities-20260802.md)

## Standing criteria — 长居城市 (`longstay-*` / `base`)

Every long-stay / base hub must meet (document honesty if partial):

1. **交通便利** — reliable airport / HSR / highway access as relevant  
2. **生活物资丰富** — daily supplies & pharmacies for ~1 month stays  
3. **医疗资源丰富** — **本地三甲优先**；若仅二甲/县医院，须醒目写明并给出可下撤三甲  

Fail or weak → rethink queue (keep card only with prominent caveats, or demote).

## Open — product / composition IA

- [x] **长线 = 多条短线** — pilots + national batch 1 legs（库车/敦煌/张掖/成都/西宁/西安/大理/丽江/青岛…）
- [x] **长线选项仍保留** — 南疆/河西/川西 + 青甘/丝路/川滇/京沪 compose = ordered legIds + glue；不复述景点正文
- [x] **长居以地点为中心** — `base-kashi` + `nearbyLegs` → kashi leg / kuqa leg / nanjiang compose；门槛审计见上
- [x] **Pilot schema** — `compositionKind?: leg | compose | base` + `legIds` / `glue` / `nearbyLegs`；filter labels 短线/长线（长居仍用 theme）
- [x] **南疆 pilot migration** — `leg-kuqa-canyon` + densified `xibei-xinjiang-kashi`；`xibei-xinjiang-south` → `compose-nanjiang-kuqa-kashi`
- [x] **Explore compose / base UX** — timeline + sticky「组合」+ sky chrome（河西/南疆 verify PASS）；短线/长线 chips 已有；长居仍靠 theme；base 详情 polish 可选
- [x] **Compose intro → leg links** — 全部 compose 页 intro 下「嵌入短线」可点进各 leg（`3930888`）
- [x] **Second corridor sketch** — 河西优先 / 川西备选；见 IA note
- [x] **Second corridor pilot** — 河西：`leg-dunhuang-mogao` + `leg-zhangye-danxia` + `compose-hexi-dunhuang-zhangye`（嘉峪关 glue）；`xibei-dunhuang-zhangye` 已退役
- [x] **川西 B corridor** — `leg-chengdu-adapt` + reuse `xinan-sichuan-leshan-emei` / `xinan-sichuan-jiuzhaigou` + `compose-chuanxi-chengdu-leshan-jiuzhai`（成都 glue）；退役极端 `xinan-chuanxi-slow`（不强制四姑娘/新都桥/稻城）
- [x] **National long→compose migration（batch 1）** — 青甘 / 丝路 / 川滇 / 京沪 → compose + legs；`national-*` 四卡退役（dead-lead OK）
- [x] **National long→compose（batch 2）** — 北疆 / 苏杭徽 / 滇西大理丽江 reconcile / 胶东半岛 → compose + legs；旧 id 退役
- [x] **National long→compose（batch 3 · 青藏/河口）** — 青藏铁路 / 拉萨→林芝 / 河口→沙巴 → compose + legs；`qingzang-lhasa-slow` 收为 densified leg（海拔诚实）；旧 id 退役
- [x] **Rethink weak longstay** — `longstay-yangshuo` / `longstay-zhenyuan` **降级**为名景短腿（theme 离 long-stay；枢纽桂林/贵阳）
- [x] **Optional hub bases** — `base-guilin` / `base-guiyang` 立项（三门槛 PASS；nearbyLegs→阳朔/漓江、镇远/黄果树/黔东南）

## Open — quality (prior)

- [x] **Image query optimization** — better place-image matching; fix wrong / soft / 404; prefer verified Wikimedia Commons; improve lookup scripts/pipeline; no Unsplash-as-attraction for covers/stops
  - *2026-08-02 wave:* 长春/海口/呼市 **错城 soft 已纠**（延吉/三亚湾/呼伦贝尔 → 长春天际线+南湖 / 世纪桥+骑楼 / 大召）；`PLACE_SOFT_IDS` 收缩；`resolve-place-images.py` FILES 同步。仍 open：乐亭/左云 blocked、qiziwan gen、其余同廊 soft
  - *2026-08-02 re-search:* Commons 仍无适老可用风景（乐亭/月坨/菩提仅地图文书；左云仅教堂/地图；棋子湾无风景）→ **keep soft/gen**
  - *2026-08-02 wave 4:* 乐亭/左云/qiziwan 再确认无安全 Commons → **leave**（不换图）
  - *2026-08-02 wave 5:* Commons API 403 / 仍无适老风景 → **leave** soft/gen
  - *2026-08-02 wave 6:* 乐亭/左云/qiziwan 仍无安全 Commons → **leave**（不换图）
  - *2026-08-02 wave 7 (done leftovers):* Commons+Openverse 再搜仍无安全风景 → **示意生成图** 优于错地标 soft：`ts-laoting-optional` / `datong-zuoyun-optional` / `qiziwan-optional` → `public/generated/places/{id}.png` + `PLACE_GENERATED_IDS`；自 `PLACE_SOFT_IDS` 移除乐亭/左云。残余 soft = 有意同城/同廊示意（兴汉/联峰山/平遥墙/珠海/沙坡头及 famous-P1 缓冲等），非错省顶替。高流量 HEAD 本波 Wikimedia 429，未发现新 404 证据。
- [x] **Regional / attraction character** — each route should convey 地区特色、文化、美食 beyond thin logistics stubs
  - *2026-08-02 wave:* **26** city/famous THIN → `city-character-20260802` detailPatches（文化+饮食 framing；preferRicherText）
  - *2026-08-02 wave 3:* **30** coverage/prefecture THIN → `coverage-character-20260802`（省会/地市廊：南宁贵阳济南昆明太原等；文化+饮食+notices≥5）
  - *2026-08-02 wave 4:* **39** leg/compose + **5** plateau touch → `leg-compose-character-20260802`（文化+饮食+notices≥5；leg/compose THIN **清零**）
  - *2026-08-02 wave 5:* **58** famous-p / 县域 / frontier → `famous-frontier-character-20260802`（文化+饮食+notices≥6；intro≥200；strict THIN **清零**）
  - *2026-08-02 wave 6:* **49** soft-short city/coverage leftovers → `soft-short-character-20260802`（文化+饮食+地方气质；intro 200–280；catalog intro&lt;200 **清零**）
- [x] **Itinerary density honesty（batch）** — 日喀则浅尝缩短；青海湖/成都 densify-or-shorten；渝桂黔腾冲内蒙厦西安标签与基地天数对齐（喀什 pattern）；华南广州等仍待扫
  - *2026-08-02 wave 6:* 广潮 → 约7–10天（可延2周）；琼西 → 约10–14天；版纳 → 约10–14天（可延2–3周）
- [x] **逐条精细化补充** — route-by-route enrichment (stops, tips, culture, food, practical), priority famous → city → prefecture
  - *done wave 6:* city 26 + coverage 30 + leg/compose 39(+5) + famous-frontier 58 + soft-short **49**；catalog intro&lt;200 **0**
- [x] **Remaining soft-short intros (~45–55 / ~182)** — strict THIN（intro&lt;200 ∧ notices&lt;5）**已清零**；wave 6 加厚 **49** → catalog intro&lt;200 **0**
- [x] **Leftover one-line PG dining** — expand remaining short `dining` lines to 2–4 dishes + 清淡/适老
  - *2026-08-02 wave 3:* 清零 `<35`（原 ≈52 → **0**）；全量 hand PG dining ≥35 字
  - *2026-08-02 wave 4–5 verify:* dining `<35` 仍为 **0**

## Done this stream (2026-08-02)

- [x] **长居三门槛** — backlog + `long-stay-cities` audit；8 longstay PG 交通/物资/三甲加厚；`base-kashi` 对照门槛
- [x] **`base-kashi`** — nearbyLegs = `xibei-xinjiang-kashi`, `leg-kuqa-canyon`, `compose-nanjiang-kuqa-kashi`
- [x] **南疆 compose pilot** — `leg-kuqa-canyon` + `compose-nanjiang-kuqa-kashi`（legIds→库车/喀什；阿克苏 glue）；schema `compositionKind`/`legIds`/`glue`
- [x] **河西 compose pilot** — `leg-dunhuang-mogao` + `leg-zhangye-danxia` + `compose-hexi-dunhuang-zhangye`（嘉峪关 glue）；退役 `xibei-dunhuang-zhangye`
- [x] **川西 compose pilot** — `leg-chengdu-adapt` + `xinan-sichuan-leshan-emei` + `xinan-sichuan-jiuzhaigou` + `compose-chuanxi-chengdu-leshan-jiuzhai`（成都 glue）；退役 `xinan-chuanxi-slow`
- [x] **National batch 1** — `compose-qinggan-xining-hexi` / `compose-silkroad-xian-turpan` / `compose-chuandian-chengdu-dali-lijiang` / `compose-jinghu-coast` + extracted legs；退役四个 `national-*`
- [x] **National batch 2** — `compose-beijiang-sayram-kanas` / `compose-suhan-hangzhou-huangshan` / `compose-yunnan-dali-lijiang` / `compose-shandong-qingdao-yantai`；退役 `xibei-xinjiang-north` / `huadong-suhan-slow` / `yunnan-dali-lijiang` / `huabei-shandong-coast`；伊犁收为 leg
- [x] **National batch 3** — `compose-qingzang-railway-lhasa` / `compose-qingzang-lhasa-nyingchi` / `compose-yunnan-hekou-sapa` + `leg-qingzang-railway` / `leg-hekou-border` / `leg-sapa-vietnam`；`qingzang-lhasa-slow` densify 为 leg；退役 `qingzang-railway-slow` / `qingzang-g318-lhasa-nyingchi` / `yunnan-hekou-sapa-corridor`
- [x] **弱长居降级** — yangshuo / zhenyuan 离 long-stay 芯片；名景短腿 + 桂林/贵阳枢纽叙事
- [x] **`base-guilin` / `base-guiyang`** — 三门槛 PASS；nearbyLegs 辐射 demoted legs + 漓江/黔东相关卡
- [x] Mid NCF deepen: **黄山** / **张家界** / **桂林阳朔**
- [x] Wave 2 prior: frontier six + prefecture-f + famous THIN slice
- [x] PG dining batch for many hubs（`<35` 已清零于 batch 3）
- [x] **喀什 densify (leg shape)** — `xibei-xinjiang-kashi` → ~4–6天
- [x] Composition IA note written；南疆/河西/川西 pilots + national batch 1–3 shipped（青藏铁路·林芝·拉萨海拔诚实 + 河口沙巴拆腿）
- [x] **Duration honesty batch** — `qingzang-shigatse-taste`→约3–4天；`qingzang-qinghai-lake`→约6–8天；`xinan-chengdu-slow` densify→约10–12天；渝/桂/黔/腾冲/内蒙夏/厦/西安 shorten
- [x] **Image fixes (touched/high-traffic)** — `leg-sayram-lake` 去错用喀纳斯；崂山盖/仰口→太清附近 Commons；`hks-kunming-buffer`→Kunming.jpg
- [x] **PG dining expand batch** — ~22 compose/leg/hub one-liners → 2–4 dishes + 清淡/适老
- [x] **Wrong-city image fixes** — 长春≠延吉、海口≠三亚湾、呼市≠呼伦贝尔；南湖/骑楼/大召 Commons HEAD 200；pipeline FILES 同步
- [x] **City-character deepen (26)** — 长春/海口/呼市/武汉/长沙/南京/重庆/京城/北戴河/大连/沈阳/福州/泉州/无锡/水乡/版纳/腾冲/呼伦贝尔/伊犁/洛汴/广潮/深圳/兰夏/婺源/宜昌/镇远
- [x] **PG dining expand batch 2** — +41 coverage/city one-liners → 2–4 dishes + 适老
- [x] **Coverage-character deepen (30)** — 南宁/贵阳/济南/昆明/太原/哈尔滨夏/常州/南昌/合肥/邯郸/佛山/九华/湖州/宁波/东莞/岳阳/南通/嘉兴/郑州/安阳/北海/焦作/兰州黄河/乌市/侗廊/阿尔山/烟台/苏州县域/镇江/扬州
- [x] **PG dining expand batch 3** — 清零 `<35`（52→0）
- [x] **Leg/compose-character deepen (39+5)** — 全部 leg/compose 浅 intro → `leg-compose-character-20260802`；顺手日喀则/祁连/G318东中/G214西宁入口；乐亭/左云/qiziwan 无安全 Commons 未换图
- [x] **Famous-p / 县域 / frontier deepen (58)** — `famous-frontier-character-20260802`；含河北四市、浙闽粤鄂晋名景、frontier 六卡、县域廊续批；strict THIN 清零；乐亭/左云/qiziwan Commons 仍不可用（API 403 / 无适老风景）未换图
- [x] **Soft-short deepen (49)** — `soft-short-character-20260802`；先前 city/coverage 浅 intro 全部加厚至 200–280；catalog intro&lt;200 清零；乐亭/左云/qiziwan 仍无安全 Commons 未换图
- [x] **Duration honesty batch 2** — 广潮 → 约7–10天（可延2周）；琼西 → 约10–14天；版纳 → 约10–14天（可延2–3周）
- [x] **Image leftovers (乐亭/左云/棋子湾)** — Commons+Openverse 空 → 专用示意生成图；出 soft、入 `PLACE_GENERATED_IDS`；pipeline FILES 注释同步

## Notes

- Discovery gate remains multi-source (`research/notes/multi-discovery/`); XHS optional review only.
- Prefer richer patch intros over thin `route-details` stubs (runtime `preferRicherText`).
- Content agents avoid `ChinaMapExplorer` unless asked.
- Related: `research/audits/content-quality-screen-20260802.md`

## Suggested next session order

1. Optional：Explore 长居 chip / base 详情 polish（短线/长线 + compose 时间线已上；UX clean-light PASS）
2. 逐条精细化 — stops/tips beyond character framing for high-traffic hubs
3. Extreme alpine cards（如川藏东段康定新都桥）保持诚实警告，不强制拆 compose
4. 有意同廊 soft：若日后出现专用 Commons，可升出 `PLACE_SOFT_IDS`（非错城；优先级低于产品 polish）
