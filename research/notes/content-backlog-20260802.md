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
- [x] **Second corridor sketch** — 河西优先 / 川西备选；见 IA note
- [x] **Second corridor pilot** — 河西：`leg-dunhuang-mogao` + `leg-zhangye-danxia` + `compose-hexi-dunhuang-zhangye`（嘉峪关 glue）；`xibei-dunhuang-zhangye` 已退役
- [x] **川西 B corridor** — `leg-chengdu-adapt` + reuse `xinan-sichuan-leshan-emei` / `xinan-sichuan-jiuzhaigou` + `compose-chuanxi-chengdu-leshan-jiuzhai`（成都 glue）；退役极端 `xinan-chuanxi-slow`（不强制四姑娘/新都桥/稻城）
- [x] **National long→compose migration（batch 1）** — 青甘 / 丝路 / 川滇 / 京沪 → compose + legs；`national-*` 四卡退役（dead-lead OK）
- [x] **National long→compose（batch 2）** — 北疆 / 苏杭徽 / 滇西大理丽江 reconcile / 胶东半岛 → compose + legs；旧 id 退役
- [ ] **National long→compose（remaining）** — 青藏铁路/林芝/拉萨海拔诚实；`yunnan-hekou-sapa-corridor` 若可拆腿再 compose
- [x] **Rethink weak longstay** — `longstay-yangshuo` / `longstay-zhenyuan` **降级**为名景短腿（theme 离 long-stay；枢纽桂林/贵阳）
- [x] **Optional hub bases** — `base-guilin` / `base-guiyang` 立项（三门槛 PASS；nearbyLegs→阳朔/漓江、镇远/黄果树/黔东南）

## Open — quality (prior)

- [ ] **Image query optimization** — better place-image matching; fix wrong / soft / 404; prefer verified Wikimedia Commons; improve lookup scripts/pipeline; no Unsplash-as-attraction for covers/stops
- [ ] **Regional / attraction character** — each route should convey 地区特色、文化、美食 beyond thin logistics stubs
- [ ] **Itinerary density honesty** — don’t pad empty days; expand worth-seeing stops **or** shorten duration (喀什 pattern)
- [ ] **逐条精细化补充** — route-by-route enrichment (stops, tips, culture, food, practical), priority famous → city → prefecture
- [ ] **Remaining THIN (~80–90 / ~164)** — coverage/prefecture fills, leftover famous-p stubs beyond wave-2 slice
- [ ] **Leftover one-line PG dining** — expand remaining short `dining` lines to 2–4 dishes + 清淡/适老

## Done this stream (2026-08-02)

- [x] **长居三门槛** — backlog + `long-stay-cities` audit；8 longstay PG 交通/物资/三甲加厚；`base-kashi` 对照门槛
- [x] **`base-kashi`** — nearbyLegs = `xibei-xinjiang-kashi`, `leg-kuqa-canyon`, `compose-nanjiang-kuqa-kashi`
- [x] **南疆 compose pilot** — `leg-kuqa-canyon` + `compose-nanjiang-kuqa-kashi`（legIds→库车/喀什；阿克苏 glue）；schema `compositionKind`/`legIds`/`glue`
- [x] **河西 compose pilot** — `leg-dunhuang-mogao` + `leg-zhangye-danxia` + `compose-hexi-dunhuang-zhangye`（嘉峪关 glue）；退役 `xibei-dunhuang-zhangye`
- [x] **川西 compose pilot** — `leg-chengdu-adapt` + `xinan-sichuan-leshan-emei` + `xinan-sichuan-jiuzhaigou` + `compose-chuanxi-chengdu-leshan-jiuzhai`（成都 glue）；退役 `xinan-chuanxi-slow`
- [x] **National batch 1** — `compose-qinggan-xining-hexi` / `compose-silkroad-xian-turpan` / `compose-chuandian-chengdu-dali-lijiang` / `compose-jinghu-coast` + extracted legs；退役四个 `national-*`
- [x] **National batch 2** — `compose-beijiang-sayram-kanas` / `compose-suhan-hangzhou-huangshan` / `compose-yunnan-dali-lijiang` / `compose-shandong-qingdao-yantai`；退役 `xibei-xinjiang-north` / `huadong-suhan-slow` / `yunnan-dali-lijiang` / `huabei-shandong-coast`；伊犁收为 leg
- [x] **弱长居降级** — yangshuo / zhenyuan 离 long-stay 芯片；名景短腿 + 桂林/贵阳枢纽叙事
- [x] **`base-guilin` / `base-guiyang`** — 三门槛 PASS；nearbyLegs 辐射 demoted legs + 漓江/黔东相关卡
- [x] Mid NCF deepen: **黄山** / **张家界** / **桂林阳朔**
- [x] Wave 2 prior: frontier six + prefecture-f + famous THIN slice
- [x] PG dining batch for many hubs (leftovers remain)
- [x] **喀什 densify (leg shape)** — `xibei-xinjiang-kashi` → ~4–6天
- [x] Composition IA note written；南疆/河西/川西 pilots + national batch 1–2 shipped；青藏铁路·林芝·拉萨与河口沙巴仍可能拆

## Notes

- Discovery gate remains multi-source (`research/notes/multi-discovery/`); XHS optional review only.
- Prefer richer patch intros over thin `route-details` stubs (runtime `preferRicherText`).
- Content agents avoid `ChinaMapExplorer` unless asked.
- Related: `research/audits/content-quality-screen-20260802.md`

## Suggested next session order

1. National long→compose 剩余（青藏铁路·林芝·拉萨海拔诚实；河口→沙巴若可拆腿）
2. Optional：Explore 长居 chip / base 详情 polish（短线/长线 + compose 时间线已上；UX clean-light PASS）
3. Duration-honesty pass on other padded longs
4. Image 404 audit + famous THIN + leftover PG dining
