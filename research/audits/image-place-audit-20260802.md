# Image place audit — 2026-08-02

## Summary

- Routes mapped: **72/72**
- Stops mapped: **207/210**
- Misses: **0**
- Unique Commons files verified OK: **139**
- Source strategy: `research/audits/image-source-strategy.md`
- Method: curated Commons filenames → MD5 thumb URLs → HTTP HEAD (backoff on 429)

## Major attraction spot-check targets

| Place | Stop/Route IDs | Status | File |
|---|---|---|---|
| 慕田峪长城 | `mutianyu`, `mutianyu-day` | PASS | `Great_Wall_of_China_July_2006.JPG` |
| 杭州西湖 | `hangzhou-west-lake`, `huadong-hangzhou-suzhou` | PASS | `West_Lake,_Hangzhou_2025.jpg` |
| 布达拉宫 | `potala`, `qingzang-lhasa-slow` | PASS | `Potala_Palace_HQ.jpg` |
| 莫高窟 | `mogao`, `xibei-dunhuang-zhangye` | PASS | `Mogao_Caves_(54376969262).jpg` |
| 成都 | `chengdu-base`, `xinan-chengdu-slow` | PASS | `Shops_-_Kuanzhai_Alleys_-_Chengdu,_China_-_DSC05305.jpg` |
| 三亚 | `sanya-base`, `huanan-sanya-winter` | PASS | `Sanya_Bay_panorama.jpg` |
| 青甘/青海湖 | `qinghai-lake-segment`, `national-qinggan-slow` | PASS | `Qinghai_Lake.jpg` |
| 漓江 | `lijiang-cruise`, `huanan-guilin-yangshuo` | PASS | `87318-Li-River.jpg` |
| 兵马俑 | `terracotta`, `huazhong-xian-slow` | PASS | `51714-Terracota-Army.jpg` |
| 外滩 | `shanghai-bund`, `huadong-shanghai-short` | PASS | `The_Bund_2.jpg` |

## All routes

| ID | Title | Status | File |
|---|---|---|---|
| `mutianyu-day` | 慕田峪长城 · 当天往返 | PASS | `Great_Wall_of_China_July_2006.JPG` |
| `tianjin-day` | 天津 · 海河漫步一日 | PASS | `Tianjin_Eye_and_Tianjin.jpg` |
| `chengde-2d` | 承德 · 避暑山庄两日 | PASS | `Chengde_Mountain_Resort_22944-Chengde_(44830038471).jpg` |
| `gubei-overnight` | 古北水镇 · 司马台可选过夜 | PASS | `Gubei_water_village_from_Simatai_Great_Wall_in_Beijing_-_panoramio.jpg` |
| `huabei-shanxi-loop` | 晋北古建 · 大同慢住三周 | PASS | `Yungang_Grottoes.jpg` |
| `yunnan-dali-lijiang` | 云南 · 大理慢住丽江快览 | PASS | `Dali,_Yunnan.jpg` |
| `xibei-dunhuang-zhangye` | 河西走廊 · 敦煌张掖租车 | PASS | `Mogao_Caves_(54376969262).jpg` |
| `dongbei-changbai-summer` | 长白山 · 林海避暑一周 | PASS | `Heaven_Lake.jpg` |
| `huadong-hangzhou-suzhou` | 杭州西湖 · 浙江五日 | PASS | `West_Lake,_Hangzhou_2025.jpg` |
| `huanan-xiamen-winter` | 厦门 · 冬日暖海十日 | PASS | `Xiamen.jpg` |
| `huazhong-wudang-3d` | 武当山 · 问道三日 | PASS | `Wudangshan.jpg` |
| `qingzang-lhasa-slow` | 拉萨 · 高原慢适应两周 | PASS | `Potala_Palace_HQ.jpg` |
| `dongbei-harbin-snow-3d` | 哈尔滨 · 看雪三日 | PASS | `Harbin_International_Ice_and_Snow_Sculpture_Festival.jpg` |
| `huanan-sanya-winter` | 三亚 · 暖冬慢住两周 | PASS | `Sanya_Bay_panorama.jpg` |
| `xinan-chengdu-slow` | 成都 · 平原慢住两周 | PASS | `Shops_-_Kuanzhai_Alleys_-_Chengdu,_China_-_DSC05305.jpg` |
| `xibei-lanzhou-xiahe` | 甘肃 · 兰州夏河短住 | PASS | `Labrang_Monastery.jpg` |
| `huabei-neimeng-hulunbuir` | 呼伦贝尔 · 夏季慢游 | PASS | `Hulunbuir.jpg` |
| `huanan-fujian-quanzhou` | 泉州 · 古城宗教史迹 | PASS | `Kaiyuan_Temple_(Quanzhou).jpg` |
| `xinan-guizhou-zhenyuan` | 镇远 · 舞阳河古城 | PASS | `Guizhou_Zhenyuan_Ancient_Town4_(cropped).jpg` |
| `huazhong-hunan-changsha` | 长沙 · 岳麓与老街慢游 | PASS | `Yuelu_Academy.jpg` |
| `huadong-jiangsu-yangzhou` | 扬州 · 瘦西湖慢走 | PASS | `Slender_West_Lake.jpg` |
| `xibei-ningxia-shapotou` | 中卫 · 沙坡头黄河浅游 | PASS | `Shapotou.jpg` |
| `huabei-shandong-taishan` | 泰安 · 泰山缆车浅尝 | PASS | `Mount_Tai.jpg` |
| `dongbei-liaoning-shenyang` | 沈阳 · 故宫与北陵短住 | PASS | `Mukden_Palace.jpg` |
| `dongbei-jilin-yanbian` | 延吉 · 朝鲜族风情轻线 | PASS | `Yanji.jpg` |
| `dongbei-heilongjiang-wudalianchi` | 五大莲池 · 火山矿泉夏短住 | PASS | `Lava_Rock_Landscape_of_Wudalianchi.jpg` |
| `huabei-shanxi-pingyao-deep` | 晋中 · 平遥太原慢住 | PASS | `Pingyao_40.JPG` |
| `huabei-hebei-beidaihe` | 河北 · 北戴河夏日浅住 | PASS | `Beidaihe_panorama_from_Lianfeng_Mountain.jpg` |
| `qingzang-shigatse-taste` | 日喀则 · 浅尝短住 | PASS | `Tashilhunpo.jpg` |
| `qingzang-qilian-optional` | 祁连 · 门源夏花浅游 | PASS | `Menyuan_County.jpg` |
| `huazhong-shaanxi-hanzhong` | 陕南 · 汉中慢住 | PASS | `Hantai,_Hanzhong,_Shaanxi,_China_-_panoramio_(6).jpg` |
| `huazhong-yichang-three-gorges` | 宜昌 · 三峡观光短住 | PASS | `Three_Gorges_Dam.jpg` |
| `huanan-guangxi-detian` | 广西 · 德天瀑布浅游 | PASS | `Detian_Falls.jpg` |
| `huanan-hainan-slow-west` | 海南西线 · 儋州慢住 | PASS | `Hainan.jpg` |
| `yunnan-xishuangbanna-winter` | 西双版纳 · 冬避寒慢住 | PASS | `Xishuangbanna.jpg` |
| `yunnan-dianxi-tengchong` | 滇西 · 腾冲慢住 | PASS | `Tengchong.jpg` |
| `xinan-chuanxi-slow` | 川西 · 新都桥稻城慎行 | PASS | `Xinduqiao.jpg` |
| `huadong-shanghai-short` | 上海 · 外滩与博物馆慢走 | PASS | `The_Bund_2.jpg` |
| `huadong-huangshan-hui` | 黄山 · 索道上山与徽州慢走 | PASS | `Huangshan_pic_4.jpg` |
| `huadong-wuyuan-spring` | 婺源 · 春日油菜花 | PASS | `Wuyuan_Jiangxi.jpg` |
| `huazhong-luoyang-kaifeng` | 洛阳龙门 · 少林或开封 | PASS | `27427-Luoyang_(49067744628).jpg` |
| `huazhong-zhangjiajie` | 张家界 · 索道看峰林 | PASS | `1_tianzishan_wulingyuan_zhangjiajie_2012.jpg` |
| `frontier-dandong` | 丹东 · 鸭绿江边境浅游 | PASS | `Yalu_River_Broken_Bridge.jpg` |
| `frontier-manzhouli` | 满洲里 · 国门广场浅住 | PASS | `Manzhouli.jpg` |
| `frontier-mohe` | 漠河 · 北极村夏日浅住 | PASS | `Beijicun.jpg` |
| `frontier-erlian` | 二连浩特 · 国门短住 | PASS | `Erenhot_port.jpg` |
| `frontier-dongxing` | 东兴 · 中越边境浅游 | PASS | `Xinhua_Rd,_Dongxing_(20240220152802).jpg` |
| `frontier-ruili` | 瑞丽 · 畹町边境浅住 | PASS | `Ruili.jpg` |
| `huadong-suhan-slow` | 苏杭徽 · 水乡慢住两三周 | PASS | `West_Lake,_Hangzhou_2025.jpg` |
| `huadong-suzhou-nanjing` | 苏州园林 · 南京可选 | PASS | `Humble_Administrator's_Garden_2015.JPG` |
| `national-qinggan-slow` | 青甘慢环 · 湖光丹霞两三周 | PASS | `Qinghai_Lake.jpg` |
| `national-silkroad-slow` | 丝路慢段 · 西安到吐鲁番 | PASS | `51714-Terracota-Army.jpg` |
| `national-chuandian-slow` | 川滇慢环 · 成都大理丽江 | PASS | `Dali,_Yunnan.jpg` |
| `huabei-neimeng-summer` | 呼伦贝尔 · 草原慢住两周 | PASS | `Hulunbuir.jpg` |
| `huabei-shandong-coast` | 青岛慢住 · 烟威可选 | PASS | `Qingdao_Harbour_51341-Qingdao_(49055637186).jpg` |
| `dongbei-dalian-summer` | 大连 · 滨海慢走一周 | PASS | `Xinghai_Square.jpg` |
| `huazhong-xian-slow` | 西安 · 慢住两周 | PASS | `Xi'an_City_Wall.jpg` |
| `xibei-xinjiang-north` | 北疆 · 赛里木喀纳斯租车 | PASS | `Kanas_Lake.jpg` |
| `qingzang-qinghai-lake` | 西宁 · 青海湖环线慢游 | PASS | `Qinghai_Lake.jpg` |
| `xibei-ningxia-3d` | 银川 · 西夏陵与沙湖三日 | PASS | `Western_Xia_tombs.jpg` |
| `huanan-zhuhai-3d` | 珠海滨海 · 两三天 | PASS | `Zhuhai.jpg` |
| `xinan-dujiangyan-2d` | 都江堰 · 青城山两日 | PASS | `36661-Dujiangyan_(440).jpg` |
| `qingzang-xining-3d` | 西宁城区 · 高原适应短住 | PASS | `Xining_-_Dongguan_mosque_Minaret_2024.jpg` |
| `huanan-guangzhou-chaoshan` | 广州慢住 · 潮汕或珠海可选 | PASS | `Canton_Tower_20241027.jpg` |
| `huanan-guilin-yangshuo` | 桂林阳朔 · 漓江慢住 | PASS | `87318-Li-River.jpg` |
| `xinan-chongqing-slow` | 重庆 · 山城慢走 | PASS | `Chongqing.jpg` |
| `xinan-guizhou-loop` | 贵阳基地 · 黄果树与黔东可选 | PASS | `Huangguoshu_Waterfall.jpg` |
| `xibei-xinjiang-yili` | 伊犁 · 河谷草原慢住 | PASS | `Narat_Grassland.jpg` |
| `xibei-xinjiang-south` | 南疆 · 库车喀什人文走廊 | PASS | `Kashgar.jpg` |
| `xibei-xinjiang-kashi` | 喀什 · 帕米尔浅尝 | PASS | `Kashgar.jpg` |
| `xibei-xinjiang-turpan` | 吐鲁番 · 火焰山葡萄沟短住 | PASS | `Grape_Valley.jpg` |
| `xibei-xinjiang-duku` | 独库公路 · 季节窗浅尝 | PASS | `Duku_Highway.jpg` |

## All stops

| ID | Name | Route | Status | File |
|---|---|---|---|---|
| `mutianyu` | 慕田峪长城 | `mutianyu-day` | PASS | `Great_Wall_of_China_July_2006.JPG` |
| `wudadao` | 五大道 | `tianjin-day` | PASS | `Five_Great_Avenues_21393-Tianjin_(49063741486).jpg` |
| `haihe` | 海河沿线 | `tianjin-day` | PASS | `Tianjin_Eye_and_Tianjin.jpg` |
| `bishu-shanzhuang` | 避暑山庄 | `chengde-2d` | PASS | `Chengde_Mountain_Resort_22944-Chengde_(44830038471).jpg` |
| `puning-temple` | 普宁寺 | `chengde-2d` | PASS | `普宁寺大乘之阁2025.11.jpg` |
| `gubei-water-town` | 古北水镇 | `gubei-overnight` | PASS | `Gubei_water_village_from_Simatai_Great_Wall_in_Beijing_-_panoramio.jpg` |
| `simatai` | 司马台长城（可选） | `gubei-overnight` | PASS | `Simatai_Great_Wall.JPG` |
| `datong-base` | 大同（慢游基地） | `huabei-shanxi-loop` | PASS | `Yungang_Grottoes.jpg` |
| `yungang` | 云冈石窟 | `huabei-shanxi-loop` | PASS | `Yungang_Grottoes.jpg` |
| `hanging-temple` | 悬空寺 + 恒山 | `huabei-shanxi-loop` | PASS | `Xuankong_Temple.jpg` |
| `yingxian-pagoda` | 应县木塔 | `huabei-shanxi-loop` | PASS | `Fogong_Temple_Pagoda.jpg` |
| `pingyao-side` | 平遥古城（可选3日） | `huabei-shanxi-loop` | PASS | `Pingyao_40.JPG` |
| `kunming-transfer` | 昆明（中转） | `yunnan-dali-lijiang` | PASS | `Kunming.jpg` |
| `dali-base` | 大理（慢游基地） | `yunnan-dali-lijiang` | PASS | `Dali,_Yunnan.jpg` |
| `shaxi` | 沙溪古镇（可选） | `yunnan-dali-lijiang` | PASS | `Shaxi_Yunnan.jpg` |
| `lijiang-fast` | 丽江 · 玉龙雪山快览 | `yunnan-dali-lijiang` | PASS | `Jade_Dragon_Snow_Mountain.jpg` |
| `dunhuang-base` | 敦煌（慢游基地） | `xibei-dunhuang-zhangye` | PASS | `Mogao_Caves_(54376969262).jpg` |
| `mogao` | 莫高窟 | `xibei-dunhuang-zhangye` | PASS | `Mogao_Caves_(54376969262).jpg` |
| `jiayuguan` | 嘉峪关 | `xibei-dunhuang-zhangye` | PASS | `Jiayuguan_Pass.jpg` |
| `zhangye-danxia` | 张掖七彩丹霞 | `xibei-dunhuang-zhangye` | PASS | `Zhangye_Danxia.jpg` |
| `erdos-baihe` | 二道白河（基地） | `dongbei-changbai-summer` | PASS | `Heaven_Lake.jpg` |
| `changbai-north` | 长白山北坡 | `dongbei-changbai-summer` | PASS | `Heaven_Lake.jpg` |
| `changbai-west` | 长白山西坡（可选） | `dongbei-changbai-summer` | PASS | `Heaven_Lake.jpg` |
| `hangzhou-west-lake` | 杭州西湖 | `huadong-hangzhou-suzhou` | PASS | `West_Lake,_Hangzhou_2025.jpg` |
| `wuzhen-optional` | 乌镇（可选） | `huadong-hangzhou-suzhou` | PASS | `1_wuzhen_aerial_2023.jpg` |
| `xiamen-base` | 厦门市区（基地） | `huanan-xiamen-winter` | PASS | `Xiamen.jpg` |
| `gulangyu` | 鼓浪屿 | `huanan-xiamen-winter` | PASS | `Gulangyu_Island.jpg` |
| `nanjing-tulou` | 南靖土楼（可选2日） | `huanan-xiamen-winter` | PASS | `Zhenchenglou.JPG` |
| `wudang-base` | 武当山镇 | `huazhong-wudang-3d` | PASS | `Wudangshan.jpg` |
| `wudang-jinding` | 金顶 | `huazhong-wudang-3d` | PASS | `Wudangshan.jpg` |
| `lhasa-rest` | 拉萨（适应期） | `qingzang-lhasa-slow` | PASS | `Potala_palace23.jpg` |
| `potala` | 布达拉宫 | `qingzang-lhasa-slow` | PASS | `Potala_Palace_HQ.jpg` |
| `namtso-day` | 纳木错（一日） | `qingzang-lhasa-slow` | PASS | `Namtso.jpg` |
| `harbin-ice-festival` | 哈尔滨冰雪大世界 | `dongbei-harbin-snow-3d` | PASS | `Harbin_International_Ice_and_Snow_Sculpture_Festival.jpg` |
| `central-street` | 中央大街 + 索菲亚教堂 | `dongbei-harbin-snow-3d` | PASS | `Saint_Sophia_Cathedral_in_Harbin.jpg` |
| `songhua-river` | 松花江 Stalin 公园（可选） | `dongbei-harbin-snow-3d` | PASS | `Songhua_River.jpg` |
| `sanya-base` | 三亚湾/大东海（慢住基地） | `huanan-sanya-winter` | PASS | `Sanya_Bay_panorama.jpg` |
| `yalong-bay` | 亚龙湾 · 滨海慢走 | `huanan-sanya-winter` | PASS | `Yalong_Bay.jpg` |
| `nanshan-optional` | 南山文化旅游区（可选1日） | `huanan-sanya-winter` | PASS | `Nanshan_Temple_of_Sanya.jpg` |
| `chengdu-base` | 成都市区（慢游基地） | `xinan-chengdu-slow` | PASS | `Shops_-_Kuanzhai_Alleys_-_Chengdu,_China_-_DSC05305.jpg` |
| `panda-base` | 大熊猫繁育研究基地 | `xinan-chengdu-slow` | PASS | `Giant_Panda_at_Chengdu.jpg` |
| `dujiangyan-optional` | 都江堰（可选1日） | `xinan-chengdu-slow` | PASS | `36661-Dujiangyan_(440).jpg` |
| `lanzhou-base` | 兰州（进出与适应） | `xibei-lanzhou-xiahe` | PASS | `Lanzhou.jpg` |
| `xiahe-labrang` | 夏河 · 拉卜楞寺 | `xibei-lanzhou-xiahe` | PASS | `Labrang_Monastery.jpg` |
| `sangke-optional` | 桑科草原（可选） | `xibei-lanzhou-xiahe` | PASS | `Sangke_grassland.jpg` |
| `hailar-slow` | 海拉尔（慢住） | `huabei-neimeng-hulunbuir` | PASS | `Hulunbuir.jpg` |
| `chenbarag-grass` | 陈巴尔虎草原 | `huabei-neimeng-hulunbuir` | PASS | `Hulunbuir.jpg` |
| `erguna-riverside` | 额尔古纳河岸（可选） | `huabei-neimeng-hulunbuir` | PASS | `Erguna.jpg` |
| `manzhouli-half` | 满洲里口岸（可选半日） | `huabei-neimeng-hulunbuir` | PASS | `Manzhouli.jpg` |
| `quanzhou-west-street` | 西街 · 开元寺 | `huanan-fujian-quanzhou` | PASS | `Kaiyuan_Temple_(Quanzhou).jpg` |
| `quanzhou-qingjing` | 清净寺 · 涂门街一带 | `huanan-fujian-quanzhou` | PASS | `Qingjing_Mosque.jpg` |
| `chongwu-optional` | 崇武古城（可选） | `huanan-fujian-quanzhou` | PASS | `Chongwu_Ancient_City.jpg` |
| `zhenyuan-oldtown` | 镇远古城沿江 | `xinan-guizhou-zhenyuan` | PASS | `Guizhou_Zhenyuan_Ancient_Town4_(cropped).jpg` |
| `qinglong-dong-optional` | 青龙洞（量力） | `xinan-guizhou-zhenyuan` | PASS | `贵州-镇远-青龙洞_-_panoramio.jpg` |
| `yuelu-academy` | 岳麓书院 · 山脚段 | `huazhong-hunan-changsha` | PASS | `Yuelu_Academy.jpg` |
| `orange-isle-oldstreet` | 橘子洲 · 老街浅逛 | `huazhong-hunan-changsha` | PASS | `Orange_Isle.jpg` |
| `hunan-museum` | 湖南省博物馆（可选） | `huazhong-hunan-changsha` | PASS | `Hunan_Provincial_Museum.jpg` |
| `slender-west-lake` | 瘦西湖 | `huadong-jiangsu-yangzhou` | PASS | `Slender_West_Lake.jpg` |
| `dongguan-street` | 东关街 · 园林可选 | `huadong-jiangsu-yangzhou` | PASS | `Ge_Yuan_个园_(5812003010).jpg` |
| `zhongwei-base` | 中卫市区（进出休整） | `xibei-ningxia-shapotou` | PASS | `Shapotou.jpg` |
| `shapotou-scenic` | 沙坡头（观光浅游） | `xibei-ningxia-shapotou` | PASS | `Shapotou.jpg` |
| `shapotou-optional` | 黄河边散步或返银缓冲（可选） | `xibei-ningxia-shapotou` | PASS | `Shapotou.jpg` |
| `taian-base` | 泰安市区（高铁进出） | `huabei-shandong-taishan` | PASS | `Mount_Tai.jpg` |
| `taishan-cable` | 泰山（缆车浅尝） | `huabei-shandong-taishan` | PASS | `Mount_Tai.jpg` |
| `taian-return` | 泰安缓冲 / 高铁回京 | `huabei-shandong-taishan` | PASS | `Mount_Tai.jpg` |
| `shenyang-base` | 沈阳市区（进出休整） | `dongbei-liaoning-shenyang` | PASS | `Mukden_Palace.jpg` |
| `shenyang-palace` | 沈阳故宫 | `dongbei-liaoning-shenyang` | PASS | `Mukden_Palace.jpg` |
| `beiling-park` | 北陵（昭陵）公园 | `dongbei-liaoning-shenyang` | PASS | `Zhao_Mausoleum_(Beiling_Park).jpg` |
| `yanji-base` | 延吉市区（慢住） | `dongbei-jilin-yanbian` | PASS | `Yanji.jpg` |
| `yanji-maoershan` | 帽儿山或河畔（二选一） | `dongbei-jilin-yanbian` | PASS | `Yanji.jpg` |
| `harbin-buffer` | 哈尔滨（进出缓冲） | `dongbei-heilongjiang-wudalianchi` | PASS | `Saint_Sophia_Cathedral_in_Harbin.jpg` |
| `wudalianchi-town` | 五大莲池镇（慢住） | `dongbei-heilongjiang-wudalianchi` | PASS | `Lava_Rock_Landscape_of_Wudalianchi.jpg` |
| `wudalianchi-volcano` | 北饮泉 + 老黑山（量力） | `dongbei-heilongjiang-wudalianchi` | PASS | `Lava_Rock_Landscape_of_Wudalianchi.jpg` |
| `taiyuan-hub` | 太原（枢纽休整） | `huabei-shanxi-pingyao-deep` | PASS | `Taiyuan_Shanxi_China.jpg` |
| `pingyao-deep` | 平遥古城（慢住） | `huabei-shanxi-pingyao-deep` | PASS | `Pingyao_40.JPG` |
| `pingyao-wall-optional` | 城墙选段（可选） | `huabei-shanxi-pingyao-deep` | PASS | `Pingyao_40.JPG` |
| `beidaihe-base` | 北戴河（海滨慢住） | `huabei-hebei-beidaihe` | PASS | `Beidaihe_panorama_from_Lianfeng_Mountain.jpg` |
| `lianfengshan-optional` | 联峰山或鸽子窝（二选一） | `huabei-hebei-beidaihe` | PASS | `Beidaihe_panorama_from_Lianfeng_Mountain.jpg` |
| `lhasa-buffer` | 拉萨（缓冲与回撤） | `qingzang-shigatse-taste` | PASS | `Potala_palace23.jpg` |
| `shigatse-city` | 日喀则市区（浅住） | `qingzang-shigatse-taste` | PASS | `Shigatse.jpg` |
| `tashilhunpo` | 扎什伦布寺（量力） | `qingzang-shigatse-taste` | PASS | `Tashilhunpo.jpg` |
| `xining-ladder` | 西宁（海拔阶梯起点） | `qingzang-qilian-optional` | PASS | `Xining_-_Dongguan_mosque_Minaret_2024.jpg` |
| `menyuan-flowers` | 门源油菜花（观景浅看） | `qingzang-qilian-optional` | PASS | `Menyuan_County.jpg` |
| `qilian-town` | 祁连县城（可选歇脚） | `qingzang-qilian-optional` | PASS | `Qilian_Mountains.jpg` |
| `hanzhong-base` | 汉中市区（慢住） | `huazhong-shaanxi-hanzhong` | PASS | `Hantai,_Hanzhong,_Shaanxi,_China_-_panoramio_(6).jpg` |
| `hanzhong-wuhou` | 武侯祠 · 古汉台一带 | `huazhong-shaanxi-hanzhong` | PASS | `Hantai,_Hanzhong,_Shaanxi,_China_-_panoramio_(6).jpg` |
| `xinghan-optional` | 兴汉胜境或朱鹮（可选） | `huazhong-shaanxi-hanzhong` | PASS | `Hantai,_Hanzhong,_Shaanxi,_China_-_panoramio_(6).jpg` |
| `yichang-base` | 宜昌市区（进出休整） | `huazhong-yichang-three-gorges` | PASS | `Three_Gorges_Dam.jpg` |
| `three-gorges-boat` | 三峡观光船 / 两坝一峡 | `huazhong-yichang-three-gorges` | PASS | `Three_Gorges_Dam.jpg` |
| `three-gorges-dam` | 三峡大坝观景（可选） | `huazhong-yichang-three-gorges` | PASS | `Three_Gorges_Dam.jpg` |
| `nanning-hub` | 南宁（进出枢纽） | `huanan-guangxi-detian` | PASS | `Nanning.jpg` |
| `detian-falls` | 德天瀑布 · 观景浅游 | `huanan-guangxi-detian` | PASS | `Detian_Falls.jpg` |
| `mingshi-optional` | 明仕田园（可选） | `huanan-guangxi-detian` | PASS | `Detian_Falls.jpg` |
| `danzhou-base` | 儋州（西线慢住基地） | `huanan-hainan-slow-west` | PASS | `Hainan.jpg` |
| `danzhou-coast` | 西线滨海散步 | `huanan-hainan-slow-west` | PASS | `Hainan.jpg` |
| `qiziwan-optional` | 昌江棋子湾（可选） | `huanan-hainan-slow-west` | PASS | `Hainan.jpg` |
| `jinghong-base` | 景洪（慢住基地） | `yunnan-xishuangbanna-winter` | PASS | `Xishuangbanna.jpg` |
| `manting-park` | 曼听公园 · 傣式慢走 | `yunnan-xishuangbanna-winter` | PASS | `Xishuangbanna.jpg` |
| `xtbg-optional` | 中科院热带植物园（可选） | `yunnan-xishuangbanna-winter` | PASS | `Tropical_Botanical_Garden,_Xishuangbanna_-_panoramio.jpg` |
| `tengchong-base` | 腾冲市区（慢住基地） | `yunnan-dianxi-tengchong` | PASS | `Tengchong.jpg` |
| `heshun-town` | 和顺古镇 | `yunnan-dianxi-tengchong` | PASS | `Heshun_Town.jpg` |
| `rehai-volcano` | 热海 · 火山地质公园（可选） | `yunnan-dianxi-tengchong` | PASS | `Tengchong.jpg` |
| `chengdu-adapt` | 成都（适应与回撤基地） | `xinan-chuanxi-slow` | PASS | `Shops_-_Kuanzhai_Alleys_-_Chengdu,_China_-_DSC05305.jpg` |
| `xinduqiao` | 新都桥（观景浅停） | `xinan-chuanxi-slow` | PASS | `Xinduqiao.jpg` |
| `daocheng-optional` | 稻城 / 亚丁（高可选·可整段跳过） | `xinan-chuanxi-slow` | PASS | `Yading.jpg` |
| `shanghai-bund` | 外滩滨江 | `huadong-shanghai-short` | PASS | `The_Bund_2.jpg` |
| `shanghai-museum` | 上海博物馆 | `huadong-shanghai-short` | PASS | `Shanghai_Museum_20124-Shanghai_(32824760281).jpg` |
| `zhujiajiao-optional` | 朱家角古镇（可选） | `huadong-shanghai-short` | PASS | `Zhujiajiao_Town.jpg` |
| `huangshan-cable` | 黄山风景区（索道） | `huadong-huangshan-hui` | PASS | `Huangshan_pic_4.jpg` |
| `tunxi-old-street` | 屯溪老街 | `huadong-huangshan-hui` | PASS | `Tunxi_Old_Street.jpg` |
| `hongcun` | 宏村 | `huadong-huangshan-hui` | PASS | `Hongcun_Village.jpg` |
| `wuyuan-jiangling` | 江岭梯田花海 | `huadong-wuyuan-spring` | PASS | `Wuyuan_Jiangxi.jpg` |
| `wuyuan-huangling` | 篁岭（可选） | `huadong-wuyuan-spring` | PASS | `Wuyuan_Jiangxi.jpg` |
| `wuyuan-village` | 思溪延村/晓起（浅逛） | `huadong-wuyuan-spring` | PASS | `Wuyuan_Jiangxi.jpg` |
| `longmen-grottoes` | 龙门石窟 | `huazhong-luoyang-kaifeng` | PASS | `27427-Luoyang_(49067744628).jpg` |
| `shaolin-optional` | 少林寺（二选一） | `huazhong-luoyang-kaifeng` | PASS | `Shaolin_Monastery.jpg` |
| `kaifeng-optional` | 开封宋韵（二选一） | `huazhong-luoyang-kaifeng` | PASS | `Iron_Pagoda.jpg` |
| `wulingyuan-cable` | 武陵源核心景区 | `huazhong-zhangjiajie` | PASS | `1_tianzishan_wulingyuan_zhangjiajie_2012.jpg` |
| `jinbian-creek` | 金鞭溪精华段 | `huazhong-zhangjiajie` | PASS | `1_tianzishan_wulingyuan_zhangjiajie_2012.jpg` |
| `furong-optional` | 芙蓉镇（可选） | `huazhong-zhangjiajie` | PASS | `Furong_Zhen.jpg` |
| `fenghuang-optional` | 凤凰古城（可选） | `huazhong-zhangjiajie` | PASS | `Fenghuang_Ancient_City.jpg` |
| `dandong-base` | 丹东市区（沿江） | `frontier-dandong` | PASS | `Yalu_River_Broken_Bridge.jpg` |
| `yalu-bridge` | 鸭绿江断桥 | `frontier-dandong` | PASS | `Yalu_River_Broken_Bridge.jpg` |
| `manzhouli-base` | 满洲里市区 | `frontier-manzhouli` | PASS | `Manzhouli.jpg` |
| `guomen-square` | 国门景区 | `frontier-manzhouli` | PASS | `Manzhouli.jpg` |
| `mohe-town` | 漠河县城 | `frontier-mohe` | PASS | `Beijicun.jpg` |
| `beiji-village` | 北极村 | `frontier-mohe` | PASS | `Beijicun.jpg` |
| `erlian-base` | 二连浩特市区 | `frontier-erlian` | PASS | `Erenhot_port.jpg` |
| `erlian-guomen` | 国门景区 | `frontier-erlian` | PASS | `Erenhot_port.jpg` |
| `dongxing-base` | 东兴市区 | `frontier-dongxing` | PASS | `Xinhua_Rd,_Dongxing_(20240220152802).jpg` |
| `wanwei-beach` | 万尾金滩（京族） | `frontier-dongxing` | PASS | `Xinhua_Rd,_Dongxing_(20240220152802).jpg` |
| `ruili-base` | 瑞丽市区 | `frontier-ruili` | PASS | `Ruili.jpg` |
| `wanding-bridge` | 畹町桥（外观） | `frontier-ruili` | PASS | `Ruili.jpg` |
| `hangzhou-base` | 杭州（慢住基地） | `huadong-suhan-slow` | PASS | `West_Lake,_Hangzhou_2025.jpg` |
| `suzhou-slow` | 苏州园林 · 平江路 | `huadong-suhan-slow` | PASS | `Humble_Administrator's_Garden_2015.JPG` |
| `huangshan-hui-slow` | 黄山索道 · 徽州村落 | `huadong-suhan-slow` | PASS | `Huangshan_pic_4.jpg` |
| `wuzhen-optional` | 乌镇或同里（可选） | `huadong-suhan-slow` | PASS | `1_wuzhen_aerial_2023.jpg` |
| `suzhou-zhuozheng` | 拙政园与平江路 | `huadong-suzhou-nanjing` | PASS | `Humble_Administrator's_Garden_2015.JPG` |
| `suzhou-second-garden` | 留园或沧浪亭（可选） | `huadong-suzhou-nanjing` | PASS | `Lingering_Garden.JPG` |
| `nanjing-optional` | 南京博物院（可选） | `huadong-suzhou-nanjing` | PASS | `Nanjing_Museum.jpg` |
| `xining-adapt` | 西宁（适应基地） | `national-qinggan-slow` | PASS | `Xining_-_Dongguan_mosque_Minaret_2024.jpg` |
| `qinghai-lake-segment` | 青海湖选段 | `national-qinggan-slow` | PASS | `Qinghai_Lake.jpg` |
| `chaka-optional` | 茶卡盐湖（可选） | `national-qinggan-slow` | PASS | `Chaka_Salt_Lake.jpg` |
| `lanzhou-hub` | 兰州（中转歇脚） | `national-qinggan-slow` | PASS | `Lanzhou.jpg` |
| `zhangye-danxia-loop` | 张掖七彩丹霞 | `national-qinggan-slow` | PASS | `Zhangye_Danxia.jpg` |
| `dunhuang-mogao-loop` | 敦煌莫高窟慢读 | `national-qinggan-slow` | PASS | `Mogao_Caves_(54376969262).jpg` |
| `xian-silk-base` | 西安（慢住） | `national-silkroad-slow` | PASS | `Xi'an_City_Wall.jpg` |
| `bingmayong-fast` | 兵马俑（快览） | `national-silkroad-slow` | PASS | `51714-Terracota-Army.jpg` |
| `lanzhou-silk` | 兰州歇脚 | `national-silkroad-slow` | PASS | `Lanzhou.jpg` |
| `dunhuang-silk` | 敦煌慢读 | `national-silkroad-slow` | PASS | `Mogao_Caves_(54376969262).jpg` |
| `turpan-silk` | 吐鲁番葡萄沟 | `national-silkroad-slow` | PASS | `Grape_Valley.jpg` |
| `chengdu-loop-base` | 成都（平原基地） | `national-chuandian-slow` | PASS | `Shops_-_Kuanzhai_Alleys_-_Chengdu,_China_-_DSC05305.jpg` |
| `dali-loop-base` | 大理（慢住） | `national-chuandian-slow` | PASS | `Dali,_Yunnan.jpg` |
| `lijiang-loop-taste` | 丽江浅住 | `national-chuandian-slow` | PASS | `Lijiang_Old_Town.jpg` |
| `hailar-base` | 海拉尔（慢住基地） | `huabei-neimeng-summer` | PASS | `Hulunbuir.jpg` |
| `hulunbuir-grassland` | 呼伦贝尔草原（陈巴尔虎一带） | `huabei-neimeng-summer` | PASS | `Hulunbuir.jpg` |
| `erguna-optional` | 额尔古纳 / 莫尔道嘎（可选） | `huabei-neimeng-summer` | PASS | `Erguna.jpg` |
| `manzhouli-optional` | 满洲里口岸（可选1日） | `huabei-neimeng-summer` | PASS | `Manzhouli.jpg` |
| `qingdao-base` | 青岛市区（慢住基地） | `huabei-shandong-coast` | PASS | `Qingdao_Harbour_51341-Qingdao_(49055637186).jpg` |
| `badaguan` | 八大关 + 汇泉湾栈道 | `huabei-shandong-coast` | PASS | `Badaguan.jpg` |
| `yantai-optional` | 烟台（可选2日） | `huabei-shandong-coast` | PASS | `Yantai.jpg` |
| `weihai-optional` | 威海 / 刘公岛（可选1–2日） | `huabei-shandong-coast` | PASS | `Liugong_Island_Weihai.jpg` |
| `dalian-base` | 大连市区（基地） | `dongbei-dalian-summer` | PASS | `Xinghai_Square.jpg` |
| `xinghai-square` | 星海广场 + 滨海路东段 | `dongbei-dalian-summer` | PASS | `Xinghai_Square.jpg` |
| `laohutan` | 老虎滩 / 滨海路中段 | `dongbei-dalian-summer` | PASS | `Tiger_Beach,_Dalian.jpg` |
| `lushun-optional` | 旅顺口（可选半日） | `dongbei-dalian-summer` | PASS | `Lüshun.jpg` |
| `xian-base` | 西安市区（慢住基地） | `huazhong-xian-slow` | PASS | `Xi'an_City_Wall.jpg` |
| `city-wall-museum` | 城墙 + 陕历博 | `huazhong-xian-slow` | PASS | `Xi'an_City_Wall.jpg` |
| `terracotta` | 兵马俑（一日快看） | `huazhong-xian-slow` | PASS | `51714-Terracota-Army.jpg` |
| `huashan-optional` | 华山缆车（可选1日） | `huazhong-xian-slow` | PASS | `Mount_Hua.jpg` |
| `urumqi-base` | 乌鲁木齐（进出枢纽） | `xibei-xinjiang-north` | PASS | `Ürümqi.jpg` |
| `sayram-lake` | 赛里木湖 | `xibei-xinjiang-north` | PASS | `Sayram_Lake.jpg` |
| `kuitun-buffer` | 奎屯/克拉玛依（北线缓冲） | `xibei-xinjiang-north` | PASS | `Karamay.jpg` |
| `kanas` | 喀纳斯（贾登峪/布尔津） | `xibei-xinjiang-north` | PASS | `Kanas_Lake.jpg` |
| `xining-adapt` | 西宁（适应期） | `qingzang-qinghai-lake` | PASS | `Xining_-_Dongguan_mosque_Minaret_2024.jpg` |
| `qinghai-lake-loop` | 青海湖环线（二郎剑/黑马河） | `qingzang-qinghai-lake` | PASS | `Qinghai_Lake.jpg` |
| `chaka-optional` | 茶卡盐湖（可选） | `qingzang-qinghai-lake` | PASS | `Chaka_Salt_Lake.jpg` |
| `xixia-tombs` | 西夏陵 | `xibei-ningxia-3d` | PASS | `Western_Xia_tombs.jpg` |
| `shahu-or-zhenbeibu` | 沙湖 或 镇北堡西部影城 | `xibei-ningxia-3d` | PASS | `Sand_Lake_(Ningxia).jpg` |
| `yinchuan-evening` | 银川市区（返程日） | `xibei-ningxia-3d` | PASS | `Yinchuan.jpg` |
| `zhuhai-lover-road` | 情侣路与海岸 | `huanan-zhuhai-3d` | PASS | `Zhuhai.jpg` |
| `dujiangyan` | 都江堰 | `xinan-dujiangyan-2d` | PASS | `36661-Dujiangyan_(440).jpg` |
| `qingcheng-front` | 青城前山 | `xinan-dujiangyan-2d` | PASS | `Mount_Qingcheng.jpg` |
| `xining-city` | 西宁城区 | `qingzang-xining-3d` | PASS | `Xining_-_Dongguan_mosque_Minaret_2024.jpg` |
| `guangzhou-base` | 广州市区（慢住基地） | `huanan-guangzhou-chaoshan` | PASS | `Canton_Tower_20241027.jpg` |
| `chaoshan-optional` | 潮州 / 汕头（可选） | `huanan-guangzhou-chaoshan` | PASS | `Paifangjie_(cropped).jpg` |
| `zhuhai-optional` | 珠海情侣路（可选） | `huanan-guangzhou-chaoshan` | PASS | `Zhuhai.jpg` |
| `guilin-base` | 桂林市区 | `huanan-guilin-yangshuo` | PASS | `87318-Li-River.jpg` |
| `lijiang-cruise` | 漓江游船（桂林→阳朔） | `huanan-guilin-yangshuo` | PASS | `87318-Li-River.jpg` |
| `yangshuo-slow` | 阳朔（慢住） | `huanan-guilin-yangshuo` | PASS | `Yangshuo.jpg` |
| `chongqing-base` | 重庆主城（慢走基地） | `xinan-chongqing-slow` | PASS | `Chongqing.jpg` |
| `nanshan-view` | 南山 / 一棵树观景 | `xinan-chongqing-slow` | PASS | `Chongqing_Nightscape.jpg` |
| `wulong-optional` | 武隆天生三桥（可选） | `xinan-chongqing-slow` | PASS | `Wulong_Karst.jpg` |
| `guiyang-base` | 贵阳（慢住基地） | `xinan-guizhou-loop` | PASS | `Guiyang.jpg` |
| `huangguoshu` | 黄果树大瀑布 | `xinan-guizhou-loop` | PASS | `Huangguoshu_Waterfall.jpg` |
| `zhenyuan-or-qiandongnan` | 镇远古城或黔东南（二选一） | `xinan-guizhou-loop` | PASS | `Guizhou_Zhenyuan_Ancient_Town4_(cropped).jpg` |
| `yining-base` | 伊宁（河谷基地） | `xibei-xinjiang-yili` | PASS | `Yining.jpg` |
| `sayram-yili` | 赛里木湖 | `xibei-xinjiang-yili` | PASS | `Sayram_Lake.jpg` |
| `nalati` | 那拉提草原 | `xibei-xinjiang-yili` | PASS | `Narat_Grassland.jpg` |
| `kalajun` | 喀拉峻（可选） | `xibei-xinjiang-yili` | PASS | `Kalajun.jpg` |
| `kuqa` | 库车 | `xibei-xinjiang-south` | PASS | `Kuqa.jpg` |
| `aksu-rest` | 阿克苏（缓冲） | `xibei-xinjiang-south` | PASS | `Aksu_City.jpg` |
| `kashi-old` | 喀什古城 | `xibei-xinjiang-south` | PASS | `Kashgar.jpg` |
| `kashi-stay` | 喀什市区 | `xibei-xinjiang-kashi` | PASS | `Kashgar.jpg` |
| `baisha-lake` | 白沙湖/卡拉库里（可选） | `xibei-xinjiang-kashi` | PASS | `Karakul_Lake_(Xinjiang).jpg` |
| `turpan-city` | 吐鲁番市区 | `xibei-xinjiang-turpan` | PASS | `Turpan.jpg` |
| `grape-valley` | 葡萄沟 / 坎儿井 | `xibei-xinjiang-turpan` | PASS | `Grape_Valley.jpg` |
| `dushanzi` | 独山子（北口） | `xibei-xinjiang-duku` | PASS | `Duku_Highway.jpg` |
| `duku-view` | 独库观景段 | `xibei-xinjiang-duku` | PASS | `Duku_Highway.jpg` |
| `kuqa-south` | 库车（南口休整） | `xibei-xinjiang-duku` | PASS | `Kuqa.jpg` |
