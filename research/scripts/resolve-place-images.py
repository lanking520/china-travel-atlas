#!/usr/bin/env python3
"""Build content/place-images.ts via curated Commons filenames + MD5 thumb URLs.

Avoids Wikipedia/Commons search APIs (429). Verifies unique URLs with HEAD + backoff.
"""
from __future__ import annotations

import hashlib
import json
import time
import urllib.error
import urllib.parse
import urllib.request
from datetime import date
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
CACHE_PATH = ROOT / "research/raw/place-images-cache.json"
RESOLVED_PATH = ROOT / "research/raw/place-images-resolved.json"
OUT_TS = ROOT / "content/place-images.ts"
AUDIT = ROOT / "research/audits/image-place-audit-20260802.md"
UA = "china-travel-atlas-place-images/1.0 (educational offline atlas; respectful HEAD checks)"
WIDTH = 1280

# stopId / routeId → Commons filename (underscores). Place-named photos only.
FILES: dict[str, str] = {
    "menghai-day-optional": "西双版纳勐海县打洛口岸_04.jpg",
    "jz-airport-buffer": "Jiuzhaigou_Sichuan_China_Main-entrance-to-the-valleys-01.jpg",
    "hks-border-crossing": "Hekou-Kim_Thành_border_crossing_-_P1380333.JPG",
    "lb-base": "荔波县城_-_panoramio.jpg",
    "fj-jinding-optional": "梵净山红云金顶_-_panoramio.jpg",
    "fj-gate": "Tongren_Guizhou.jpg",
    "yzc-yizheng-optional": "仪征园博园远眺.jpg",
    "yzc-shaobo-optional": "Shaobo_Shiplock.jpg",
    "gaozhuang-optional": "景洪_告庄西双景之街道与金塔同框_02.jpg",
    "urumqi-bazaar-optional": "新疆国际大巴扎是乌鲁木齐新十景.jpg",
    "urumqi-museum": "新疆博物馆_全景（2021）.jpg",
    "g214-gonghe-optional": "Gonghe,_Hainan,_Qinghai,_China_-_panoramio_-_neverdance_(17).jpg",
    "g214-buffer-optional": "Xining_-_Dongguan_mosque_Minaret_2024.jpg",
    "le-leshan-base": "凌云路江堤隔江看乐山城区_-_panoramio.jpg",
    "g318m-descend": "雪山下的成都市天际线_Chengdu_skyline_with_snow_capped_mountains.jpg",
    "g318m-chengdu": "雪山下的成都市天际线_Chengdu_skyline_with_snow_capped_mountains.jpg",
    "g318e-chengdu-buffer": "雪山下的成都市天际线_Chengdu_skyline_with_snow_capped_mountains.jpg",
    "lz-bayi-base": "Bayi,_Nyingchi,_Tibet,_China_-_panoramio_(1).jpg",
    "km-cuihu-base": "Southwest_part_of_Cuihu_Park,_Kunming_(20240214121712).jpg",
    "gy-nanming-base": "Jiaxiu_building_and_Nanming_river_in_Guiyang.jpg",
    "qd-kaili-gate": "Kaili_city,_guizhou,_china.JPG",
    "hg-anshun-rest": "A_tower_in_downtown_Anshun,_Guizhou,_China.jpg",
    "hg-guiyang-gate": "View_of_Guiyang,_Guizhou_from_Neighboring_Mountains.jpg",
    "wl-town": "Wulong,_Chongqing.jpg",
    "wl-cq-buffer": "Chongqing_Nightscape.jpg",
    # 京津冀 / 长城
    "mutianyu": "Great_Wall_of_China_July_2006.JPG",
    "mutianyu-day": "Great_Wall_of_China_July_2006.JPG",
    "simatai": "Simatai_Great_Wall.JPG",
    "gubei-water-town": "Gubei_water_village_from_Simatai_Great_Wall_in_Beijing_-_panoramio.jpg",
    "gubei-overnight": "Gubei_water_village_from_Simatai_Great_Wall_in_Beijing_-_panoramio.jpg",
    # Prefer photo when verifying; AI local fallback may override in place-images.ts
    "bishu-shanzhuang": "Chengde_Mountain_Resort_22944-Chengde_(44830038471).jpg",
    "chengde-2d": "Chengde_Mountain_Resort_22944-Chengde_(44830038471).jpg",
    "puning-temple": "普宁寺大乘之阁2025.11.jpg",
    "wudadao": "Five_Great_Avenues_21393-Tianjin_(49063741486).jpg",
    "haihe": "Tianjin_Eye_and_Tianjin.jpg",
    "tianjin-day": "Tianjin_Eye_and_Tianjin.jpg",
    "beidaihe-base": "Beidaihe_panorama_from_the_south.jpg",
    "huabei-hebei-beidaihe": "Beidaihe_panorama_from_the_south.jpg",
    "lianfengshan-optional": "从联峰山望海亭看北戴河区.jpg",
    # 山西
    "yungang": "Yungang_Grottoes.jpg",
    "huabei-shanxi-loop": "Yungang_Grottoes.jpg",
    "datong-base": "Yungang_Grottoes.jpg",
    # overlay gen — no safe Zuoyun scenic Commons (church/map only)
    "datong-zuoyun-optional": "Yungang_Grottoes.jpg",
    "hanging-temple": "Xuankong_Temple.jpg",
    "yingxian-pagoda": "Fogong_Temple_Pagoda.jpg",
    "pingyao-side": "Pingyao_40.JPG",
    "pingyao-deep": "Pingyao_40.JPG",
    "pingyao-wall-optional": "平遥城墙-流浪的狗狗_-_panoramio_-_aisccd.jpg",
    "taiyuan-hub": "Taiyuan_Shanxi_China.jpg",
    "huabei-shanxi-pingyao-deep": "Pingyao_40.JPG",
    # 山东
    "taishan-cable": "Mount_Tai.jpg",
    "taian-base": "Mount_Tai.jpg",
    "taian-return": "Mount_Tai.jpg",
    "huabei-shandong-taishan": "Mount_Tai.jpg",
    "qingdao-base": "Qingdao_Harbour_51341-Qingdao_(49055637186).jpg",
    "huabei-shandong-coast": "Qingdao_Harbour_51341-Qingdao_(49055637186).jpg",
    "badaguan": "Badaguan.jpg",
    "yantai-optional": "Yantai.jpg",
    "weihai-optional": "Liugong_Island_Weihai.jpg",
    # 内蒙古 / 东北
    "hailar-base": "Hulunbuir.jpg",
    "hailar-slow": "Hulunbuir.jpg",
    "hulunbuir-grassland": "Hulunbuir.jpg",
    "chenbarag-grass": "Hulunbuir.jpg",
    "huabei-neimeng-hulunbuir": "Hulunbuir.jpg",
    "huabei-neimeng-summer": "Hulunbuir.jpg",
    "erguna-optional": "Erguna.jpg",
    "erguna-riverside": "Erguna.jpg",
    "manzhouli-optional": "Manzhouli.jpg",
    "manzhouli-half": "Manzhouli.jpg",
    "manzhouli-base": "Manzhouli.jpg",
    "guomen-square": "Manzhouli.jpg",
    "frontier-manzhouli": "Manzhouli.jpg",
    "changbai-north": "从长白山西坡看天池-2017-08-24_1.jpg",
    "changbai-west": "从长白山西坡看天池-2017-08-24_1.jpg",
    "erdos-baihe": "从长白山西坡看天池-2017-08-24_1.jpg",
    "dongbei-changbai-summer": "从长白山西坡看天池-2017-08-24_1.jpg",
    "harbin-ice-festival": "Harbin_International_Ice_and_Snow_Sculpture_Festival.jpg",
    "dongbei-harbin-snow-3d": "Harbin_International_Ice_and_Snow_Sculpture_Festival.jpg",
    "central-street": "West_facade_of_St._Sophia_Cathedral,_Harbin_(20230721150450).jpg",
    "songhua-river": "Songhua_River.jpg",
    "harbin-buffer": "West_facade_of_St._Sophia_Cathedral,_Harbin_(20230721150450).jpg",
    "shenyang-palace": "Mukden_Palace.jpg",
    "shenyang-base": "Mukden_Palace.jpg",
    "dongbei-liaoning-shenyang": "Mukden_Palace.jpg",
    "beiling-park": "Zhao_Mausoleum_(Beiling_Park).jpg",
    "yanji-base": "Yanji.jpg",
    "yanji-maoershan": "Yanji.jpg",
    "dongbei-jilin-yanbian": "Yanji.jpg",
    "wudalianchi-town": "Lava_Rock_Landscape_of_Wudalianchi.jpg",
    "wudalianchi-volcano": "Lava_Rock_Landscape_of_Wudalianchi.jpg",
    "dongbei-heilongjiang-wudalianchi": "Lava_Rock_Landscape_of_Wudalianchi.jpg",
    "xinghai-square": "Xinghai_Square.jpg",
    "dalian-base": "Xinghai_Square.jpg",
    "dongbei-dalian-summer": "Xinghai_Square.jpg",
    "laohutan": "Tiger_Beach,_Dalian.jpg",
    "lushun-optional": "Lüshun.jpg",
    "yalu-bridge": "Yalu_River_Broken_Bridge.jpg",
    "dandong-base": "Yalu_River_Broken_Bridge.jpg",
    "frontier-dandong": "Yalu_River_Broken_Bridge.jpg",
    "beiji-village": "Beijicun.jpg",
    "mohe-town": "Beijicun.jpg",
    "frontier-mohe": "Beijicun.jpg",
    "erlian-guomen": "Erenhot_port.jpg",
    "erlian-base": "Erenhot_port.jpg",
    "frontier-erlian": "Erenhot_port.jpg",
    # 华东
    "hangzhou-west-lake": "West_Lake,_Hangzhou_2025.jpg",
    "huadong-hangzhou-suzhou": "West_Lake,_Hangzhou_2025.jpg",
    "hangzhou-base": "West_Lake,_Hangzhou_2025.jpg",
    "huadong-suhan-slow": "West_Lake,_Hangzhou_2025.jpg",
    "wuzhen-optional": "1_wuzhen_aerial_2023.jpg",
    "suzhou-zhuozheng": "Humble_Administrator's_Garden_2015.JPG",
    "suzhou-slow": "Humble_Administrator's_Garden_2015.JPG",
    "huadong-suzhou-nanjing": "Humble_Administrator's_Garden_2015.JPG",
    "suzhou-second-garden": "Lingering_Garden.JPG",
    "nanjing-optional": "Nanjing_Museum.jpg",
    "shanghai-bund": "The_Bund_2.jpg",
    "huadong-shanghai-short": "The_Bund_2.jpg",
    "shanghai-museum": "Shanghai_Museum_20124-Shanghai_(32824760281).jpg",
    "zhujiajiao-optional": "Zhujiajiao_Town.jpg",
    "huangshan-cable": "Huangshan_pic_4.jpg",
    "huadong-huangshan-hui": "Huangshan_pic_4.jpg",
    "huangshan-hui-slow": "Huangshan_pic_4.jpg",
    "tunxi-old-street": "Tunxi_Old_Street.jpg",
    "hongcun": "Hongcun_Village.jpg",
    "wuyuan-jiangling": "Wuyuan_Jiangxi.jpg",
    "huadong-wuyuan-spring": "Wuyuan_Jiangxi.jpg",
    "wuyuan-huangling": "婺源篁岭天街_3.jpg",
    "wuyuan-village": "婺源晓起.jpg",
    "slender-west-lake": "Slender_West_Lake.jpg",
    "huadong-jiangsu-yangzhou": "Slender_West_Lake.jpg",
    "dongguan-street": "Ge_Yuan_个园_(5812003010).jpg",  # 个园; alt He_Garden.jpg
    # 华中 / 陕西
    "wudang-jinding": "Wudangshan_pic_7.jpg",
    "wudang-base": "Wudangshan_pic_7.jpg",
    "huazhong-wudang-3d": "Wudangshan_pic_7.jpg",
    "yuelu-academy": "Yuelu_Academy.jpg",
    "huazhong-hunan-changsha": "Yuelu_Academy.jpg",
    "orange-isle-oldstreet": "Orange_Isle.jpg",
    "hunan-museum": "Hunan_Provincial_Museum.jpg",
    "longmen-grottoes": "27427-Luoyang_(49067744628).jpg",
    "huazhong-luoyang-kaifeng": "27427-Luoyang_(49067744628).jpg",
    "shaolin-optional": "Shaolin_Monastery.jpg",
    "kaifeng-optional": "Iron_Pagoda.jpg",
    "wulingyuan-cable": "1_tianzishan_wulingyuan_zhangjiajie_2012.jpg",
    "huazhong-zhangjiajie": "1_tianzishan_wulingyuan_zhangjiajie_2012.jpg",
    "jinbian-creek": "1_tianzishan_wulingyuan_zhangjiajie_2012.jpg",
    "furong-optional": "Furong_Zhen.jpg",
    "fenghuang-optional": "Fenghuang_Ancient_City.jpg",
    "xian-base": "Xi'an_City_Wall.jpg",
    "xian-silk-base": "Xi'an_City_Wall.jpg",
    "huazhong-xian-slow": "Xi'an_City_Wall.jpg",
    "city-wall-museum": "Xi'an_City_Wall.jpg",
    "terracotta": "51714-Terracota-Army.jpg",
    "bingmayong-fast": "51714-Terracota-Army.jpg",
    "national-silkroad-slow": "51714-Terracota-Army.jpg",
    "huashan-optional": "1_mount_hua_shan_china_2011.jpg",
    "hanzhong-base": "Hantai,_Hanzhong,_Shaanxi,_China_-_panoramio_(6).jpg",
    "huazhong-shaanxi-hanzhong": "Hantai,_Hanzhong,_Shaanxi,_China_-_panoramio_(6).jpg",
    "hanzhong-wuhou": "Hantai,_Hanzhong,_Shaanxi,_China_-_panoramio_(6).jpg",
    "xinghan-optional": "兴汉胜境05.jpg",
    "three-gorges-dam": "Three_Gorges_Dam.jpg",
    "three-gorges-boat": "Three_Gorges_Dam.jpg",
    "yichang-base": "Three_Gorges_Dam.jpg",
    "huazhong-yichang-three-gorges": "Three_Gorges_Dam.jpg",
    # 华南
    "xiamen-base": "Xiamen.jpg",
    "huanan-xiamen-winter": "Xiamen.jpg",
    "gulangyu": "Gulangyu_Island.jpg",
    "nanjing-tulou": "Zhenchenglou.JPG",
    "sanya-base": "Sanya_Bay_panorama.jpg",
    "huanan-sanya-winter": "Sanya_Bay_panorama.jpg",
    "yalong-bay": "Yalong_Bay.jpg",
    "nanshan-optional": "Nanshan_Temple_of_Sanya.jpg",
    "quanzhou-west-street": "Kaiyuan_Temple_(Quanzhou).jpg",
    "huanan-fujian-quanzhou": "Kaiyuan_Temple_(Quanzhou).jpg",
    "quanzhou-qingjing": "Qingjing_Mosque.jpg",
    "chongwu-optional": "Chongwu_Ancient_City.jpg",
    "detian-falls": "Detian_Falls.jpg",
    "huanan-guangxi-detian": "Detian_Falls.jpg",
    "nanning-hub": "Nanning.jpg",
    "mingshi-optional": "Detian_Falls.jpg",  # wrong landmark — overlay /generated in place-images.ts
    "danzhou-base": "Hainan.jpg",  # weak; overlay gen huanan-hainan-slow-west.png
    "huanan-hainan-slow-west": "Hainan.jpg",  # overlay gen
    "danzhou-coast": "Hainan.jpg",  # overlay gen
    "qiziwan-optional": "Hainan.jpg",  # overlay gen qiziwan-optional.png
    # 唐山乐亭 — overlay gen（无岸线 Commons；勿用 Beidaihe / 青海金银滩）
    "ts-laoting-optional": "Beidaihe_panorama_from_the_south.jpg",
    "zhuhai-lover-road": "Zhuhai.jpg",
    "huanan-zhuhai-3d": "Zhuhai.jpg",
    "zhuhai-optional": "Palm_trees,_Lover's_Road,_Zhuhai.jpg",
    "guangzhou-base": "Canton_Tower_20241027.jpg",
    "huanan-guangzhou-chaoshan": "Canton_Tower_20241027.jpg",
    "chaoshan-optional": "Paifangjie_(cropped).jpg",
    "guilin-base": "87318-Li-River.jpg",
    "lijiang-cruise": "87318-Li-River.jpg",
    "huanan-guilin-yangshuo": "87318-Li-River.jpg",
    "yangshuo-slow": "Yangshuo.jpg",
    "dongxing-base": "Xinhua_Rd,_Dongxing_(20240220152802).jpg",
    "wanwei-beach": "Xinhua_Rd,_Dongxing_(20240220152802).jpg",
    "frontier-dongxing": "Xinhua_Rd,_Dongxing_(20240220152802).jpg",
    # 西南
    "kunming-transfer": "Kunming.jpg",
    "dali-base": "大理古城南门-2064560.jpg",
    "dali-loop-base": "大理古城南门-2064560.jpg",
    "yunnan-dali-lijiang": "大理古城南门-2064560.jpg",
    "national-chuandian-slow": "大理古城南门-2064560.jpg",
    "shaxi": "Shaxi_Yunnan.jpg",
    "lijiang-fast": "Jade_Dragon_Snow_Mountain.jpg",
    "lijiang-loop-taste": "Lijiang_Old_Town.jpg",
    "chengdu-base": "Shops_-_Kuanzhai_Alleys_-_Chengdu,_China_-_DSC05305.jpg",
    "chengdu-adapt": "Shops_-_Kuanzhai_Alleys_-_Chengdu,_China_-_DSC05305.jpg",
    "chengdu-loop-base": "Shops_-_Kuanzhai_Alleys_-_Chengdu,_China_-_DSC05305.jpg",
    "xinan-chengdu-slow": "Shops_-_Kuanzhai_Alleys_-_Chengdu,_China_-_DSC05305.jpg",
    "panda-base": "Giant_Panda_at_Chengdu.jpg",
    "dujiangyan": "36661-Dujiangyan_(44634340644).jpg",
    "dujiangyan-optional": "36661-Dujiangyan_(44634340644).jpg",
    "xinan-dujiangyan-2d": "36661-Dujiangyan_(44634340644).jpg",
    "qingcheng-front": "Mount_Qingcheng.jpg",
    "zhenyuan-oldtown": "Guizhou_Zhenyuan_Ancient_Town4_(cropped).jpg",
    "xinan-guizhou-zhenyuan": "Guizhou_Zhenyuan_Ancient_Town4_(cropped).jpg",
    "qinglong-dong-optional": "贵州-镇远-青龙洞_-_panoramio.jpg",
    "zhenyuan-or-qiandongnan": "Guizhou_Zhenyuan_Ancient_Town4_(cropped).jpg",
    "guiyang-base": "Guiyang.jpg",
    "huangguoshu": "Huangguoshu_Waterfall.jpg",
    "xinan-guizhou-loop": "Huangguoshu_Waterfall.jpg",
    "chongqing-base": "Chongqing.jpg",
    "xinan-chongqing-slow": "Chongqing.jpg",
    "nanshan-view": "Chongqing_Nightscape.jpg",
    "wulong-optional": "Wulongtianshengsanqiao.JPG",
    "jinghong-base": "Xishuangbanna.jpg",
    "yunnan-xishuangbanna-winter": "Xishuangbanna.jpg",
    "manting-park": "景洪_曼听公园之傣族风格跨河桥_01.jpg",
    "xtbg-optional": "Tropical_Botanical_Garden,_Xishuangbanna_-_panoramio.jpg",
    "tengchong-base": "Tengchong.jpg",
    "yunnan-dianxi-tengchong": "Tengchong.jpg",
    "heshun-town": "Heshun_Town.jpg",
    "rehai-volcano": "Tengchong.jpg",
    "xinduqiao": "Xinduqiao.jpg",
    "xinan-chuanxi-slow": "Xinduqiao.jpg",
    "daocheng-optional": "Yading.jpg",
    "ruili-base": "Ruili.jpg",
    "wanding-bridge": "Ruili.jpg",
    "frontier-ruili": "Ruili.jpg",
    # 西北 / 丝路
    "mogao": "Mogao_Caves_(54376969262).jpg",
    "dunhuang-base": "Mogao_Caves_(54376969262).jpg",
    "dunhuang-mogao-loop": "Mogao_Caves_(54376969262).jpg",
    "dunhuang-silk": "Mogao_Caves_(54376969262).jpg",
    "xibei-dunhuang-zhangye": "Mogao_Caves_(54376969262).jpg",
    "jiayuguan": "Jiayuguan_20151012.jpg",
    "zhangye-danxia": "Zhangye_National_Geopark_5.jpg",
    "zhangye-danxia-loop": "Zhangye_National_Geopark_5.jpg",
    "lanzhou-base": "Lanzhou.jpg",
    "lanzhou-hub": "Lanzhou.jpg",
    "lanzhou-silk": "Lanzhou.jpg",
    "xiahe-labrang": "Labrang_Monastery.jpg",
    "xibei-lanzhou-xiahe": "Labrang_Monastery.jpg",
    "sangke-optional": "Sangke_grassland.jpg",
    "shapotou-scenic": "Shapotou.jpg",
    "zhongwei-base": "Shapotou.jpg",
    "shapotou-optional": "Shapotou.jpg",
    "xibei-ningxia-shapotou": "Shapotou.jpg",
    "xixia-tombs": "Western_Xia_tombs.jpg",
    "xibei-ningxia-3d": "Western_Xia_tombs.jpg",
    "shahu-or-zhenbeibu": "Sand_Lake_(Ningxia).jpg",
    "yinchuan-evening": "Yinchuan.jpg",
    "urumqi-base": "Urumqi_skyline.jpg",
    "sayram-lake": "赛里木湖远景，摄于湖畔山丘.jpg",
    "sayram-yili": "赛里木湖远景，摄于湖畔山丘.jpg",
    "kuitun-buffer": "Karamay,_Xinjiang,_China_-_panoramio.jpg",
    "kanas": "Lake_Kanas.jpg",  # never Kanas.jpg — that File is Japanese hiragana (Gojūon)
    "xibei-xinjiang-north": "Lake_Kanas.jpg",
    "compose-beijiang-sayram-kanas": "Lake_Kanas.jpg",
    "leg-kanas": "Lake_Kanas.jpg",
    "yining-base": "Yining.jpg",
    "nalati": "Nalati_Grassland_1.jpg",
    "kalajun": "Kalajun_Grassland.jpg",
    "xibei-xinjiang-yili": "Nalati_Grassland_1.jpg",
    "kuqa": "Kuqa_May_2007_429.jpg",
    "kuqa-canyon": "Kuqa_May_2007_429.jpg",
    "kuqa-buffer": "Kuqa_May_2007_429.jpg",
    "kuqa-south": "Kuqa_May_2007_429.jpg",
    "leg-kuqa-canyon": "Kuqa_May_2007_429.jpg",
    "aksu-rest": "Aksu_City.jpg",
    "kashi-old": "Kashgar.jpg",
    "kashi-stay": "Kashgar.jpg",
    "xibei-xinjiang-south": "Kashgar.jpg",
    "xibei-xinjiang-kashi": "Kashgar.jpg",
    "baisha-lake": "Karakul_Lake_(Xinjiang).jpg",
    "turpan-city": "Flame_Mountain_Turpan_Xinjiang_China_新疆_吐魯番_火焔山_-_panoramio_(1).jpg",
    "grape-valley": "Turpan_grape_valley.jpg",
    "turpan-silk": "Turpan_grape_valley.jpg",
    "xibei-xinjiang-turpan": "Turpan_grape_valley.jpg",
    "dushanzi": "G217_K939.jpeg",
    "duku-view": "G217_K939.jpeg",
    "xibei-xinjiang-duku": "G217_K939.jpeg",
    # 青藏
    "potala": "Potala_Palace_HQ.jpg",
    "qingzang-lhasa-slow": "Potala_Palace_HQ.jpg",
    "lhasa-rest": "Potala_palace23.jpg",
    "lhasa-buffer": "Potala_palace23.jpg",
    "namtso-day": "Namtso.jpg",
    "tashilhunpo": "Tashilhunpo.jpg",
    "shigatse-city": "Shigatse.jpg",
    "qingzang-shigatse-taste": "Tashilhunpo.jpg",
    "xining-adapt": "Xining_-_Dongguan_mosque_Minaret_2024.jpg",
    "xining-city": "Xining_-_Dongguan_mosque_Minaret_2024.jpg",
    "xining-ladder": "Xining_-_Dongguan_mosque_Minaret_2024.jpg",
    "qingzang-xining-3d": "Xining_-_Dongguan_mosque_Minaret_2024.jpg",
    "qinghai-lake-loop": "Qinghai_Lake.jpg",
    "qinghai-lake-segment": "Qinghai_Lake.jpg",
    "qingzang-qinghai-lake": "Qinghai_Lake.jpg",
    "national-qinggan-slow": "Qinghai_Lake.jpg",
    "chaka-optional": "Chaka_Salt_Lake.jpg",
    "menyuan-flowers": "Menyuan_County.jpg",
    "qilian-town": "Qilian_Mountains.jpg",
    "qingzang-qilian-optional": "Menyuan_County.jpg",
    # wrong-city soft upgrades 20260802 (Changchun/Haikou/Hohhot)
    "dongbei-jilin-changchun": "Changchun_skyline_with_Ji_Tower_-_panoramio.jpg",
    "cc-chaoyang-base": "Changchun_skyline_with_Ji_Tower_-_panoramio.jpg",
    "cc-puppet-palace": "25279-Changchun,_Museum_of_the_Imperial_Palace_of_Manchukuo.jpg",
    "cc-cultural-optional": "Changchun_skyline_with_Ji_Tower_-_panoramio.jpg",
    "cc-nanhu": "Nanhu_Lake_park_-_panoramio.jpg",
    "huanan-hainan-haikou": "Haikou_Century_Bridge_in_2015.jpg",
    "hk-longhua-base": "Haikou_Century_Bridge_in_2015.jpg",
    "hk-west-coast": "Haikou_Century_Bridge_in_2015.jpg",
    "hk-volcano-optional": "海南国际旅游岛——海口.世界火山地质公园熔岩流保护区景观（西南向）_-_panoramio.jpg",
    "hk-qilou": "海口骑楼老街_-_Haikou_Arcaded_Streets_-_2016.01_-_panoramio.jpg",
    "huabei-neimeng-hohhot": "Da_Zhao_Temple_in_Hohhot3.JPG",
    "hh-city-base": "Da_Zhao_Temple_in_Hohhot3.JPG",
    "hh-buffer-optional": "Da_Zhao_Temple_in_Hohhot3.JPG",
    "hh-museum": "Altan_Khan_statue_in_Hohhot,_Inner_Mongolia.jpg",
    # hh-xilamuren-optional → 希拉穆仁专用（见下方 batch 1/5 FILES）
    "fz-west-lake-optional": "福州西湖公園oeotwc_-_panoramio.jpg",

    "gy-qianling-optional": "黔灵山.jpg",

    "hf-anhui-museum-optional": "安徽博物院正面.jpg",

    "le-emei-optional": "EmeiShanTop.jpg",

    "nn-museum-optional": "Guangxi_Museum.jpg",

    "zz-henan-museum-optional": "20210220_Henan_Museum_-_main_hall_01.jpg",

    "nc-bayi-optional": "Nanchang_Bayi_Guangchang_20120723-20.jpg",

    "sz-oct-optional": "远看深圳华侨城_OCT,_Shenzhen_-_panoramio.jpg",

    "sz-dameisha-optional": "深圳大梅沙.jpg",

    "wy-tianyuan-optional": "福建省武夷山天游峰风景区景色_-_panoramio_(1).jpg",

    "pt-foding-optional": "普陀山.佛顶山.慧济禅寺_-_panoramio_(1).jpg",

    "bh-weizhou-optional": "北海_涠洲岛_月亮湾_-_panoramio.jpg",

    "jz-hongshi": "河南_云台山_红石峡_标志景点_-_panoramio.jpg",

    "yy-dongting": "洞庭湖大桥.jpg",

    "zj-beigu-optional": "镇江北固山铁塔.jpg",

    "gy-museum-optional": "贵州省博物馆_远.jpg",

    "nj-zijin-optional": "PurpleMountain01.JPG",

    "jn-quancheng-optional": "济南大明湖牌匾夜景.jpg",

    "hrb-sun-island-optional": "哈尔滨太阳岛_2.jpg",

    "wt-dailuoding-optional": "从黛螺顶看五台山寺院.jpg",

    "jz-shuzheng": "四川.九寨沟._树正寨_-_panoramio.jpg",

    "lz-museum-optional": "New_Exhibition_Building_of_the_Gansu_Provincial_Museum.jpg",

    "hz-sizhou-optional": "Huizhou_Sizhou_Ta_2013.09.21_08-26-23.jpg",

    "lz-yarlung-optional": "雅鲁藏布江_yaluzangbu_river_-_panoramio.jpg",

    "km-xishan-optional": "Dianchi.jpg",

    "snj-scenic": "神农架_神农顶景区之冰瀑.jpg",

    "es-dislot-optional": "恩施大峡谷2_-_panoramio.jpg",

    "wh-jianghan-optional": "江汉路步行街.jpg",

    "lb-daqikong-optional": "荔波大七孔，202403_5.jpg",

    "jz-quanpu-optional": "云台山泉瀑峡_-_panoramio.jpg",

    "jz-zhuyu-optional": "茱萸峰_-_panoramio_(2).jpg",

    "zz-jinshui-base": "Erqi_Memorial_Tower.jpg",
    "cs-ningxiang-optional": "少奇故里-万德鼎-花明楼_-_panoramio.jpg",
    "bh-oldtown": "北海市_百年老街_-_panoramio.jpg",
    "hz-shuangyue-optional": "稔平半岛港口镇观景台往双月湾.jpg",
    "jgz-park-optional": "荆州城东门外的护城河.jpg",
    "wh-wuchang-base": "武昌江滩_-_Wuchang_River_Beach_Park_-_2016.04_-_panoramio.jpg",
    "cs-xiangjiang-base": "长沙湘江风光带_-_panoramio.jpg",
    "nn-qingxiu-base": "青秀山风景区panoramio103204924.jpg",
    "sz-nanshan-base": "深圳湾公园_shen_zhen_wan_gong_yuan_-_panoramio.jpg",
    "kp-base": "Kaiping_diaolou_zili_village_2012_01.jpg",
    "zs-park-optional": "中山市岐江公园_qi_jiang_gong_yuan_-_panoramio.jpg",
    "zs-base": "GD_廣東_ZS_中山市_Zhongshan_石岐河_Shiqi_River_岐江橋_QiJiang_Bridge_view_buildings_February_2025_R12S_03.jpg",
    "fh-night-riverside": "Fenghuang_County_night_view_20190727.jpg",
    "snj-gate": "宜昌滨江公园_-_panoramio.jpg",
    "dx-shaoguan-gate": "韶关市中心的马路边_-_By_科技小辛_-_panoramio.jpg",

    # huadong soft upgrades 20260802 batch
    "hf-baohe-base": "天鹅湖.jpg",
    "hf-swan-lake": "安徽合肥天鹅湖.jpg",
    "fz-sanfang": "福州三坊七巷南后街oeotwc_-_panoramio.jpg",
    "nc-tengwang": "南昌滕王阁.jpg",
    "nc-qiushui": "南昌滕王阁.jpg",
    "nj-xuanwu-lake": "Xuanwu_Lake,_Nanjing.jpg",
    "gy-jiaxiu": "甲秀楼_-_Jiaxiu_Pavilion_-_2015.07_-_panoramio.jpg",
    "hf-sanhe-optional": "三河古镇老街.jpg",
    "fz-gulou-base": "福州三坊七巷南后街oeotwc_-_panoramio.jpg",
    "fz-rongcheng-optional": "20181004_福州上下杭_04.jpg",
    "nc-honggutan-base": "Honggutan_20180726_115201.jpg",
    "jn-xitang-optional": "1_xitang_zhejiang_2023.jpg",
    "cz-yancheng-optional": "常州武进淹城大门2.jpg",
    "nt-museum-optional": "南通博物苑1.jpg",
    "huz-feiying-optional": "湖州飞英塔,_2009-01-26_01.jpg",
    "wf-park-optional": "20210911_Weifang_people's_Park_3.jpg",
    "jdz-imperial-kiln": "景德镇御窑博物馆.jpg",
    "nj-xuanwu-base": "玄武湖望南京天际线_-_panoramio.jpg",
    "wz-city-optional": "温州_江心屿_Jiang_Xin_Yu,_Wenzhou_-_panoramio.jpg",
    "wy-tea-optional": "武夷山茶园风光.jpg",
    "pt-gate": "舟山.沈家门.十里渔港_-_panoramio.jpg",
    "ls-jiujiang-gate": "九江琵琶亭远眺长江大桥.JPG",
    "cz-base": "Changzhou_Skyline,_Jul_25_2022.jpg",
    "jn-lishi-base": "济南泉城广场远景.jpg",
    "wx-liangxi-base": "无锡三阳广场.jpg",
    "nb-haishu-base": "Tianyi_Square_2019-07_01.jpg",

    # huabei/dongbei soft upgrades 20260802 batch 1/5
    "hh-xilamuren-optional": "希拉穆仁草原_保护区_-_panoramio.jpg",
    "hrb-central-street": "哈尔滨_中央大街_-_panoramio.jpg",
    "hrb-daoli-base": "哈尔滨中央大街西十一道街北.jpg",
    "lf-base": "临汾滨河新城，10月2010.jpg",
    "putuo-zongcheng": "Putuo_Zongcheng_Temple_20120804.JPG",
    "qingchui-peak": "磬锤峰20120804.JPG",
    "ty-fenhe-optional": "Fen_River_Park_Taiyuan_20110709.jpg",
    "ty-jinci": "Jinci_Temple_(54572159327).jpg",
    "ty-shanxi-museum": "Shanxi_Museum_20110719.jpg",
    "ty-yingze-base": "太原迎泽公园_-_panoramio.jpg",
    "xz-county-base": "山西省忻州市忻府區韓岩村元好問墓的野史亭.jpg",
    "xz-dingxiang-optional": "Dingxiang_Yan_Xishan_Jiuju_2013.08.28_15-27-08.jpg",
    "xz-ningwu-optional": "芦芽山自然保护区内五坝线——2012-04-30_-_panoramio.jpg",
}


# Alternate filenames when primary 404s (same place / city landmark)
ALTS: dict[str, list[str]] = {
    "Great_Wall_of_China_July_2006.JPG": ["Mutianyu_section_of_the_Great_Wall_of_China.jpg", "Great_Wall_of_China.png"],
    "Simatai_Great_Wall.JPG": ["Great_Wall_of_China_July_2006.JPG"],
    "Gubei_Water_Town.jpg": [
        "Gubei_water_village_from_Simatai_Great_Wall_in_Beijing_-_panoramio.jpg",
        "Simatai_Great_Wall.JPG",
        "Great_Wall_of_China_July_2006.JPG",
    ],
    "Gubei_water_village_from_Simatai_Great_Wall_in_Beijing_-_panoramio.jpg": [
        "Simatai_Great_Wall.JPG",
    ],
    "Xining_Montage.jpg": [
        "Xining_-_Dongguan_mosque_Minaret_2024.jpg",
        "Dongguan_mosque_-_Xinning_-_2024.jpg",
        "Qinghai_Lake.jpg",
    ],
    "Xining_-_Dongguan_mosque_Minaret_2024.jpg": ["Qinghai_Lake.jpg"],
    "Puning_Si_Chengde.jpg": ["Chengde_Mountain_Resort_22944-Chengde_(44830038471).jpg"],
    "普宁寺大乘之阁2025.11.jpg": ["普宁寺大雄宝殿2025.11.jpg", "Dafuo2.jpg"],
    "Ge_Yuan_个园_(5812003010).jpg": ["He_Garden.jpg", "扬州个园.jpg", "Bamboo_Garden_in_Yangzhou.JPG"],
    "Sangke_grassland.jpg": ["Labrang_Monastery.jpg"],
    "贵州-镇远-青龙洞_-_panoramio.jpg": ["Guizhou_Zhenyuan_Ancient_Town4_(cropped).jpg"],
    "Tropical_Botanical_Garden,_Xishuangbanna_-_panoramio.jpg": ["Xishuangbanna.jpg"],
    "Nanjing_Museum.jpg": ["Nanjing_CBD_from_City_Wall.jpg"],
    "Tianjin_Five_Great_Avenues.jpg": [
        "Five_Great_Avenues_21393-Tianjin_(49063741486).jpg",
        "Tianjin_Eye_and_Tianjin.jpg",
    ],
    "Five_Great_Avenues_21393-Tianjin_(49063741486).jpg": ["Tianjin_Eye_and_Tianjin.jpg"],
    "Xuankong_Temple.jpg": ["Hanging_Monastery.jpg", "Yungang_Grottoes.jpg"],
    "Fogong_Temple_Pagoda.jpg": ["Yingxian_Pagoda.jpg", "Yungang_Grottoes.jpg"],
    "Taiyuan_Shanxi_China.jpg": ["Pingyao_40.JPG"],
    "Mount_Tai.jpg": ["Taishan.jpg", "Mount_Tai_South_Heavenly_Gate.jpg"],
    "Badaguan.jpg": ["Qingdao_Harbour_51341-Qingdao_(49055637186).jpg"],
    "Yantai.jpg": ["Qingdao_Harbour_51341-Qingdao_(49055637186).jpg"],
    "Liugong_Island_Weihai.jpg": ["Weihai.jpg", "Qingdao_Harbour_51341-Qingdao_(49055637186).jpg"],
    "Hulunbuir.jpg": ["Hulunbuir_Grasslands.jpg", "Inner_Mongolia.jpg"],
    "Erguna.jpg": ["Hulunbuir.jpg"],
    "Manzhouli.jpg": ["Manzhouli_City.jpg", "Hulunbuir.jpg"],
    "从长白山西坡看天池-2017-08-24_1.jpg": ["Changbai_Mountain.jpg", "Heaven_Lake_of_Changbai_Mountain.jpg"],
    "Harbin_International_Ice_and_Snow_Sculpture_Festival.jpg": [
        "Harbin_Ice_Festival.jpg",
        "West_facade_of_St._Sophia_Cathedral,_Harbin_(20230721150450).jpg",
    ],
    "Songhua_River.jpg": ["West_facade_of_St._Sophia_Cathedral,_Harbin_(20230721150450).jpg"],
    "Zhao_Mausoleum_(Beiling_Park).jpg": ["Mukden_Palace.jpg"],
    "Yanji.jpg": ["Yanbian.jpg"],
    "Wudalianchi.jpg": ["Lava_Rock_Landscape_of_Wudalianchi.jpg", "Wudalianchi_Volcanic_Field.jpg"],
    "Lava_Rock_Landscape_of_Wudalianchi.jpg": ["Wudalianchi_Volcanic_Field.jpg"],
    "Xinghai_Square.jpg": ["Dalian.jpg"],
    "Tiger_Beach,_Dalian.jpg": ["Xinghai_Square.jpg"],
    "Lüshun.jpg": ["Lushun.jpg", "Xinghai_Square.jpg"],
    "Yalu_River_Broken_Bridge.jpg": ["Dandong.jpg"],
    "Beijicun.jpg": ["Mohe.jpg"],
    "Humble_Administrator's_Garden_2015.JPG": [
        "Humble_Administrator's_Garden.jpg",
        "Suzhou.jpg",
    ],
    "Lingering_Garden.JPG": ["Humble_Administrator's_Garden_2015.JPG"],
    "Shanghai_Museum_20124-Shanghai_(32824760281).jpg": ["The_Bund_2.jpg"],
    "Zhujiajiao_Town.jpg": ["The_Bund_2.jpg"],
    "Tunxi_Old_Street.jpg": ["Huangshan_pic_4.jpg"],
    "Hongcun_Village.jpg": ["Hongcun.jpg", "Huangshan_pic_4.jpg"],
    "Wuyuan_Jiangxi.jpg": ["Wuyuan.jpg"],
    "Slender_West_Lake.jpg": ["Yangzhou.jpg"],
    "Wudangshan_pic_7.jpg": ["Wudang_Mountains.jpg"],
    "Yuelu_Academy.jpg": ["Changsha.jpg"],
    "Orange_Isle.jpg": ["Yuelu_Academy.jpg"],
    "Hunan_Provincial_Museum.jpg": ["Changsha.jpg"],
    "Shaolin_Monastery.jpg": ["27427-Luoyang_(49067744628).jpg"],
    "Iron_Pagoda.jpg": ["Kaifeng.jpg"],
    "Furong_Zhen.jpg": ["1_tianzishan_wulingyuan_zhangjiajie_2012.jpg"],
    "Fenghuang_Ancient_City.jpg": ["Fenghuang.jpg"],
    "Xi'an_City_Wall.jpg": ["Bell_Tower_Xi'an.jpg", "Giant_Wild_Goose_Pagoda.jpg"],
    "1_mount_hua_shan_china_2011.jpg": ["Huashan.jpg"],
    "Hanzhong.jpg": [
        "Hantai,_Hanzhong,_Shaanxi,_China_-_panoramio_(6).jpg",
        "Hanzhong_City.jpg",
    ],
    "Hantai,_Hanzhong,_Shaanxi,_China_-_panoramio_(6).jpg": ["Hanzhong.jpg"],
    "Three_Gorges_Dam.jpg": ["Three_Gorges.jpg"],
    "Xiamen.jpg": ["Gulangyu_Island.jpg"],
    "Gulangyu_Island.jpg": ["Xiamen.jpg"],
    "Sanya_Bay_panorama.jpg": ["Sanya.jpg", "Yalong_Bay.jpg"],
    "Yalong_Bay.jpg": ["Sanya.jpg"],
    "Nanshan_Temple_of_Sanya.jpg": ["Sanya.jpg"],
    "Kaiyuan_Temple_(Quanzhou).jpg": ["Quanzhou.jpg"],
    "Qingjing_Mosque.jpg": ["Kaiyuan_Temple_(Quanzhou).jpg"],
    "Chongwu_Ancient_City.jpg": ["Quanzhou.jpg"],
    "Detian_Falls.jpg": ["Ban_Gioc_–_Detian_Falls.jpg", "Detian_Waterfall.jpg"],
    "Nanning.jpg": ["Detian_Falls.jpg"],
    "Hainan.jpg": ["Sanya.jpg"],
    "Zhuhai.jpg": ["Zhuhai_Opera_House.jpg", "Canton_Tower_20241027.jpg"],
    "Yangshuo.jpg": ["87318-Li-River.jpg"],
    "Kunming.jpg": ["大理古城南门-2064560.jpg"],
    "大理古城南门-2064560.jpg": ["Erhai_Lake.jpg", "Dali_Ancient_City.jpg"],
    "Shaxi_Yunnan.jpg": ["大理古城南门-2064560.jpg"],
    "Jade_Dragon_Snow_Mountain.jpg": ["Lijiang_Old_Town.jpg"],
    "Lijiang_Old_Town.jpg": ["Jade_Dragon_Snow_Mountain.jpg"],
    "Chengdu.jpg": [
        "Shops_-_Kuanzhai_Alleys_-_Chengdu,_China_-_DSC05305.jpg",
        "Jinli_Street.jpg",
        "Jinli.jpg",
    ],
    "Shops_-_Kuanzhai_Alleys_-_Chengdu,_China_-_DSC05305.jpg": ["Jinli_Street.jpg"],
    "Giant_Panda_at_Chengdu.jpg": ["Giant_Panda.jpg", "Chengdu.jpg"],
    "36661-Dujiangyan_(44634340644).jpg": ["Dujiangyan.jpg"],
    "Mount_Qingcheng.jpg": ["36661-Dujiangyan_(44634340644).jpg"],
    "Zhenyuan_County.jpg": [
        "Guizhou_Zhenyuan_Ancient_Town4_(cropped).jpg",
        "Zhenyuan.jpg",
    ],
    "Guizhou_Zhenyuan_Ancient_Town4_(cropped).jpg": ["Zhenyuan_County.jpg"],
    "Guiyang.jpg": ["Huangguoshu_Waterfall.jpg"],
    "Huangguoshu_Waterfall.jpg": ["Huangguoshu.jpg"],
    "Chongqing.jpg": [
        "Chongqing_Nightscape.jpg",
        "2023-06-24_Hongya_Cave,_Chongqing.jpg",
        "Hongya_Cave.jpg",
    ],
    "Chongqing_Nightscape.jpg": ["Chongqing.jpg"],
    "Wulong_Karst.jpg": ["Wulong.jpg", "Chongqing.jpg"],
    "Xishuangbanna.jpg": ["Jinghong.jpg"],
    "Tengchong.jpg": ["Heshun_Town.jpg"],
    "Heshun_Town.jpg": ["Tengchong.jpg"],
    "Xinduqiao.jpg": ["Yading.jpg"],
    "Yading.jpg": ["Daocheng_Yading.jpg"],
    "Ruili.jpg": ["Dehong.jpg"],
    "Jiayuguan_20151012.jpg": ["Jiayuguan.jpg", "Mogao_Caves_(54376969262).jpg"],
    "Zhangye_National_Geopark_5.jpg": ["Zhangye_National_Geopark.jpg", "Danxia_landform.jpg"],
    "Lanzhou.jpg": ["Yellow_River_in_Lanzhou.jpg"],
    "Labrang_Monastery.jpg": ["Xiahe.jpg"],
    "Shapotou.jpg": ["Zhongwei.jpg"],
    "Western_Xia_tombs.jpg": ["Western_Xia.jpg"],
    "Sand_Lake_(Ningxia).jpg": ["Western_Xia_tombs.jpg"],
    "Yinchuan.jpg": ["Western_Xia_tombs.jpg"],
    "Ürümqi.jpg": ["Urumqi_skyline.jpg", "Urumqi.jpg", "赛里木湖远景，摄于湖畔山丘.jpg"],
    "赛里木湖远景，摄于湖畔山丘.jpg": ["Lake_Sayram.jpg"],
    "Karamay.jpg": ["Karamay,_Xinjiang,_China_-_panoramio.jpg", "赛里木湖远景，摄于湖畔山丘.jpg"],
    # Kanas.jpg on Commons is Japanese hiragana (Gojūon) — never use as scenic
    "Kanas.jpg": ["Lake_Kanas.jpg", "Kanas_Lake.jpg"],
    "Lake_Kanas.jpg": ["Kanas_Lake.jpg"],
    "Yining.jpg": ["Nalati_Grassland_1.jpg", "Narat_Grassland.jpg"],
    "Narat_Grassland.jpg": ["Nalati_Grassland_1.jpg", "Nltgrassland.JPG"],
    "Kalajun.jpg": ["Kalajun_Grassland.jpg", "Nalati_Grassland_1.jpg"],
    "Kuqa.jpg": ["Kuqa_May_2007_429.jpg", "Kucha.jpg", "Kashgar.jpg"],
    "Aksu_City.jpg": ["Kashgar.jpg"],
    "Kashgar.jpg": ["Kashgar_Old_Town.jpg"],
    "Karakul_Lake_(Xinjiang).jpg": ["Karakul_lake.jpg", "Kashgar.jpg"],
    "Turpan.jpg": ["Flame_Mountain_Turpan_Xinjiang_China_新疆_吐魯番_火焔山_-_panoramio_(1).jpg", "Turpan_grape_valley.jpg"],
    "Grape_Valley.jpg": ["Turpan_grape_valley.jpg", "Turpan_Grape_Valley.jpg"],
    "Duku_Highway.jpg": ["G217_K939.jpeg", "G217_K940.jpeg"],
    "Namtso.jpg": ["Nam_Co.jpg", "Potala_Palace_HQ.jpg"],
    "Tashilhunpo.jpg": ["Tashilhunpo_Monastery.jpg", "Shigatse.jpg"],
    "Shigatse.jpg": ["Tashilhunpo.jpg"],
    "Qinghai_Lake.jpg": ["Qinghaihu.jpg"],
    "Chaka_Salt_Lake.jpg": ["Chaka_Lake.jpg", "Qinghai_Lake.jpg"],
    "Menyuan_County.jpg": ["Qinghai_Lake.jpg"],
    "Qilian_Mountains.jpg": ["Qinghai_Lake.jpg"],
    "Sanya_Bay_panorama.jpg": ["Sanya_Bay.jpg", "Hainan_Sanya.jpg"],
}

# Keyword fallbacks from Chinese labels
KEYWORDS: list[tuple[str, str]] = [
    ("慕田峪", "Great_Wall_of_China_July_2006.JPG"),
    ("司马台", "Simatai_Great_Wall.JPG"),
    ("古北", "Gubei_water_village_from_Simatai_Great_Wall_in_Beijing_-_panoramio.jpg"),
    ("避暑山庄", "Chengde_Mountain_Resort_22944-Chengde_(44830038471).jpg"),
    ("普宁寺", "Puning_Si_Chengde.jpg"),
    ("五大道", "Tianjin_Five_Great_Avenues.jpg"),
    ("海河", "Tianjin_Eye_and_Tianjin.jpg"),
    ("云冈", "Yungang_Grottoes.jpg"),
    ("悬空寺", "Xuankong_Temple.jpg"),
    ("应县", "Fogong_Temple_Pagoda.jpg"),
    ("平遥", "Pingyao_40.JPG"),
    ("泰山", "Mount_Tai.jpg"),
    ("青岛", "Qingdao_Harbour_51341-Qingdao_(49055637186).jpg"),
    ("八大关", "Badaguan.jpg"),
    ("呼伦贝尔", "Hulunbuir.jpg"),
    ("长白", "从长白山西坡看天池-2017-08-24_1.jpg"),
    ("冰雪大世界", "Harbin_International_Ice_and_Snow_Sculpture_Festival.jpg"),
    ("索菲亚", "West_facade_of_St._Sophia_Cathedral,_Harbin_(20230721150450).jpg"),
    ("沈阳故宫", "Mukden_Palace.jpg"),
    ("西湖", "West_Lake,_Hangzhou_2025.jpg"),
    ("杭州", "West_Lake,_Hangzhou_2025.jpg"),
    ("拙政园", "Humble_Administrator's_Garden_2015.JPG"),
    ("苏州", "Humble_Administrator's_Garden_2015.JPG"),
    ("外滩", "The_Bund_2.jpg"),
    ("黄山", "Huangshan_pic_4.jpg"),
    ("宏村", "Hongcun_Village.jpg"),
    ("婺源", "Wuyuan_Jiangxi.jpg"),
    ("瘦西湖", "Slender_West_Lake.jpg"),
    ("武当", "Wudangshan_pic_7.jpg"),
    ("龙门", "27427-Luoyang_(49067744628).jpg"),
    ("张家界", "1_tianzishan_wulingyuan_zhangjiajie_2012.jpg"),
    ("武陵源", "1_tianzishan_wulingyuan_zhangjiajie_2012.jpg"),
    ("兵马俑", "51714-Terracota-Army.jpg"),
    ("西安", "Xi'an_City_Wall.jpg"),
    ("华山", "1_mount_hua_shan_china_2011.jpg"),
    ("三峡", "Three_Gorges_Dam.jpg"),
    ("鼓浪屿", "Gulangyu_Island.jpg"),
    ("土楼", "Zhenchenglou.JPG"),
    ("三亚", "Sanya_Bay_panorama.jpg"),
    ("亚龙湾", "Yalong_Bay.jpg"),
    ("德天", "Detian_Falls.jpg"),
    ("漓江", "87318-Li-River.jpg"),
    ("桂林", "87318-Li-River.jpg"),
    ("阳朔", "Yangshuo.jpg"),
    ("广州", "Canton_Tower_20241027.jpg"),
    ("大理", "大理古城南门-2064560.jpg"),
    ("玉龙", "Jade_Dragon_Snow_Mountain.jpg"),
    ("丽江", "Lijiang_Old_Town.jpg"),
    ("成都", "Chengdu.jpg"),
    ("熊猫", "Giant_Panda_at_Chengdu.jpg"),
    ("都江堰", "36661-Dujiangyan_(44634340644).jpg"),
    ("黄果树", "Huangguoshu_Waterfall.jpg"),
    ("重庆", "Chongqing.jpg"),
    ("莫高窟", "Mogao_Caves_(54376969262).jpg"),
    ("敦煌", "Mogao_Caves_(54376969262).jpg"),
    ("嘉峪关", "Jiayuguan_20151012.jpg"),
    ("丹霞", "Zhangye_National_Geopark_5.jpg"),
    ("张掖", "Zhangye_National_Geopark_5.jpg"),
    ("拉卜楞", "Labrang_Monastery.jpg"),
    ("沙坡头", "Shapotou.jpg"),
    ("西夏", "Western_Xia_tombs.jpg"),
    ("赛里木", "赛里木湖远景，摄于湖畔山丘.jpg"),
    ("喀纳斯", "Lake_Kanas.jpg"),
    ("那拉提", "Nalati_Grassland_1.jpg"),
    ("喀什", "Kashgar.jpg"),
    ("葡萄沟", "Turpan_grape_valley.jpg"),
    ("吐鲁番", "Turpan_grape_valley.jpg"),
    ("独库", "Duku_Highway.jpg"),
    ("布达拉", "Potala_Palace_HQ.jpg"),
    ("拉萨", "Potala_palace23.jpg"),
    ("纳木错", "Namtso.jpg"),
    ("扎什伦布", "Tashilhunpo.jpg"),
    ("青海湖", "Qinghai_Lake.jpg"),
    ("茶卡", "Chaka_Salt_Lake.jpg"),
    ("西宁", "Xining_-_Dongguan_mosque_Minaret_2024.jpg"),
]


def load_inv():
    return json.loads(Path("/tmp/cta-image-inventory.json").read_text())


def load_cache():
    if CACHE_PATH.exists():
        raw = json.loads(CACHE_PATH.read_text())
        # Drop failed 429 search pollution; keep file: / md5: hits
        cleaned = {}
        for k, v in raw.items():
            if k.startswith("search:") and not v.get("url"):
                continue
            cleaned[k] = v
        return cleaned
    return {}


def save_cache(c):
    CACHE_PATH.parent.mkdir(parents=True, exist_ok=True)
    CACHE_PATH.write_text(json.dumps(c, ensure_ascii=False, indent=2) + "\n")


def commons_thumb(filename: str) -> str:
    name = filename.replace(" ", "_")
    digest = hashlib.md5(name.encode("utf-8")).hexdigest()
    enc = urllib.parse.quote(name, safe="")
    return (
        f"https://upload.wikimedia.org/wikipedia/commons/thumb/"
        f"{digest[0]}/{digest[:2]}/{enc}/{WIDTH}px-{enc}"
    )


def commons_original(filename: str) -> str:
    name = filename.replace(" ", "_")
    digest = hashlib.md5(name.encode("utf-8")).hexdigest()
    enc = urllib.parse.quote(name, safe="")
    return f"https://upload.wikimedia.org/wikipedia/commons/{digest[0]}/{digest[:2]}/{enc}"


def head_ok(url: str, cache: dict, delay: float = 0.4) -> tuple[str | None, str]:
    """Returns (url_or_none, status) where status is ok|404|429|error|cached."""
    key = f"url:{url}"
    if key in cache:
        u = cache[key].get("url") or None
        if u:
            return u, "cached"
        err = cache[key].get("error")
        if err == 404 or cache[key].get("url") == "":
            # Distinguish prior 429 empties — don't trust empty without error code
            if err == 429:
                return url, "429-trust"
            if err == 404:
                return None, "404"
            if cache[key].get("url") == "" and err is None:
                return None, "404"
        return None, "cached-miss"

    backoff = delay
    for _ in range(4):
        time.sleep(backoff)
        req = urllib.request.Request(url, headers={"User-Agent": UA}, method="HEAD")
        try:
            with urllib.request.urlopen(req, timeout=35) as resp:
                final = resp.geturl()
                if resp.status == 200 and "upload.wikimedia.org" in final:
                    cache[key] = {"url": final}
                    return final, "ok"
                cache[key] = {"url": "", "error": resp.status}
                return None, "error"
        except urllib.error.HTTPError as e:
            if e.code == 429:
                # Trust curated MD5 thumb under rate limit — do not poison as 404
                cache[key] = {"url": url, "provisional": True, "error": 429}
                return url, "429-trust"
            if e.code == 404:
                cache[key] = {"url": "", "error": 404}
                return None, "404"
            cache[key] = {"url": "", "error": e.code}
            return None, "error"
        except Exception as e:
            cache[key] = {"url": "", "error": str(e)}
            return None, "error"
    cache[key] = {"url": url, "provisional": True, "error": 429}
    return url, "429-trust"


def resolve_file(filename: str, cache: dict, verify: bool = True) -> tuple[str | None, str | None]:
    fkey = f"file:{filename}"
    if fkey in cache and cache[fkey].get("url"):
        return cache[fkey]["url"], filename
    candidates = [filename] + ALTS.get(filename, [])
    if not verify:
        # Fast path: MD5 thumb for primary curated filename (no network)
        provisional = commons_thumb(filename)
        cache[fkey] = {"url": provisional, "file": filename, "status": "md5-unverified"}
        return provisional, filename
    for fn in candidates:
        # Prefer thumb; fall back to original path
        for builder in (commons_thumb, commons_original):
            url = builder(fn)
            ok, status = head_ok(url, cache)
            if ok:
                cache[fkey] = {"url": ok, "file": fn, "status": status}
                cache[f"file:{fn}"] = {"url": ok, "file": fn, "status": status}
                return ok, fn
            if status == "404":
                continue
    # Last resort: emit MD5 thumb for primary without verification
    provisional = commons_thumb(filename)
    cache[fkey] = {"url": provisional, "file": filename, "status": "unverified"}
    return provisional, filename


def pick_file(key: str, label: str) -> str | None:
    if key in FILES:
        return FILES[key]
    for kw, fn in KEYWORDS:
        if kw in label:
            return fn
    return None


def esc(s: str) -> str:
    return s.replace("\\", "\\\\").replace("'", "\\'")


def main():
    import os

    verify = os.environ.get("PLACE_VERIFY", "0") != "0"
    inv = load_inv()
    cache = load_cache()
    # Drop poisoned empty entries from prior 429 storms
    cache = {
        k: v
        for k, v in cache.items()
        if v.get("url") or v.get("error") == 404
    }
    # Seed known-good from ok.tsv
    ok_tsv = Path("/tmp/wiki-thumbs/ok.tsv")
    if ok_tsv.exists():
        for line in ok_tsv.read_text().splitlines():
            parts = line.split("\t")
            if len(parts) >= 4 and parts[1] == "200":
                cache[f"url:{parts[3]}"] = {"url": parts[3]}

    route_covers = {}
    stop_images = {}
    misses = []
    file_url_memo: dict[str, tuple[str | None, str | None]] = {}

    def resolve_key(key: str, label: str):
        fn = pick_file(key, label)
        if not fn:
            return None, None, None
        if fn in file_url_memo:
            url, used = file_url_memo[fn]
        else:
            url, used = resolve_file(fn, cache, verify=verify)
            file_url_memo[fn] = (url, used)
            if len(file_url_memo) % 5 == 0:
                save_cache(cache)
        return url, used, fn

    total = len(inv) + sum(len(r.get("stops") or []) for r in inv)
    n = 0
    for route in inv:
        rid, title = route["id"], route["title"]
        n += 1
        url, used, fn = resolve_key(rid, title)
        if url:
            route_covers[rid] = {"url": url, "file": used, "label": title}
            print(f"[{n}/{total}] ROUTE PASS {rid} ← {used}")
        else:
            misses.append({"kind": "route", "id": rid, "label": title, "tried": fn})
            print(f"[{n}/{total}] ROUTE FAIL {rid} tried={fn}")

        for stop in route.get("stops") or []:
            sid, name = stop["id"], stop["name"]
            n += 1
            surl, sused, sfn = resolve_key(sid, name)
            if not surl and rid in route_covers:
                surl = route_covers[rid]["url"]
                sused = route_covers[rid]["file"]
                print(f"[{n}/{total}] STOP PASS {sid} ← route-fallback")
            elif surl:
                print(f"[{n}/{total}] STOP PASS {sid} ← {sused}")
            if surl:
                stop_images[sid] = {
                    "url": surl,
                    "file": sused,
                    "label": name,
                    "routeId": rid,
                }
            else:
                misses.append(
                    {"kind": "stop", "id": sid, "label": name, "routeId": rid, "tried": sfn}
                )
                print(f"[{n}/{total}] STOP FAIL {sid}")

    save_cache(cache)
    stats = {
        "routesTotal": len(inv),
        "routesMapped": len(route_covers),
        "stopsTotal": sum(len(r.get("stops") or []) for r in inv),
        "stopsMapped": len(stop_images),
        "misses": len(misses),
        "uniqueFilesOk": sum(1 for u, _ in file_url_memo.values() if u),
        "date": date.today().isoformat(),
    }
    RESOLVED_PATH.write_text(
        json.dumps(
            {
                "stats": stats,
                "routeCovers": route_covers,
                "stopImages": stop_images,
                "misses": misses,
            },
            ensure_ascii=False,
            indent=2,
        )
        + "\n"
    )

    fallback = route_covers.get("mutianyu-day", {}).get("url") or commons_thumb(
        "Great_Wall_of_China_July_2006.JPG"
    )
    lines = [
        "/** Auto-generated place-accurate Wikimedia Commons thumbs.",
        f" * Generated {stats['date']} by research/scripts/resolve-place-images.py",
        " * See research/audits/image-source-strategy.md",
        " */",
        "",
        "export const PLACE_ROUTE_COVERS: Record<string, string> = {",
    ]
    for rid, meta in sorted(route_covers.items()):
        lines.append(f"  '{esc(rid)}': '{esc(meta['url'])}',")
    lines += ["};", "", "export const PLACE_STOP_IMAGES: Record<string, string> = {"]
    for sid, meta in sorted(stop_images.items()):
        lines.append(f"  '{esc(sid)}': '{esc(meta['url'])}',")
    lines += [
        "};",
        "",
        "/** Neutral China fallback (Great Wall) — never foreign Unsplash scenery. */",
        f"export const PLACE_IMAGE_FALLBACK = '{esc(fallback)}';",
        "",
    ]
    OUT_TS.write_text("\n".join(lines) + "\n")

    md = [
        f"# Image place audit — {stats['date']}",
        "",
        "## Summary",
        "",
        f"- Routes mapped: **{stats['routesMapped']}/{stats['routesTotal']}**",
        f"- Stops mapped: **{stats['stopsMapped']}/{stats['stopsTotal']}**",
        f"- Misses: **{stats['misses']}**",
        f"- Unique Commons files verified OK: **{stats['uniqueFilesOk']}**",
        "- Source strategy: `research/audits/image-source-strategy.md`",
        "- Method: curated Commons filenames → MD5 thumb URLs → HTTP HEAD (backoff on 429)",
        "",
        "## Major attraction spot-check targets",
        "",
        "| Place | Stop/Route IDs | Status | File |",
        "|---|---|---|---|",
    ]
    majors = [
        ("慕田峪长城", ["mutianyu", "mutianyu-day"]),
        ("杭州西湖", ["hangzhou-west-lake", "huadong-hangzhou-suzhou"]),
        ("布达拉宫", ["potala", "qingzang-lhasa-slow"]),
        ("莫高窟", ["mogao", "xibei-dunhuang-zhangye"]),
        ("成都", ["chengdu-base", "xinan-chengdu-slow"]),
        ("三亚", ["sanya-base", "huanan-sanya-winter"]),
        ("青甘/青海湖", ["qinghai-lake-segment", "national-qinggan-slow"]),
        ("漓江", ["lijiang-cruise", "huanan-guilin-yangshuo"]),
        ("兵马俑", ["terracotta", "huazhong-xian-slow"]),
        ("外滩", ["shanghai-bund", "huadong-shanghai-short"]),
    ]
    for label, ids in majors:
        ok = None
        for i in ids:
            ok = route_covers.get(i) or stop_images.get(i)
            if ok:
                break
        status = "PASS" if ok else "FAIL"
        md.append(
            f"| {label} | {', '.join('`'+i+'`' for i in ids)} | {status} | `{ok.get('file') if ok else '—'}` |"
        )

    md += ["", "## All routes", "", "| ID | Title | Status | File |", "|---|---|---|---|"]
    for r in inv:
        m = route_covers.get(r["id"])
        md.append(
            f"| `{r['id']}` | {r['title']} | {'PASS' if m else 'FAIL'} | `{m['file'] if m else '—'}` |"
        )
    md += ["", "## All stops", "", "| ID | Name | Route | Status | File |", "|---|---|---|---|---|"]
    for r in inv:
        for s in r.get("stops") or []:
            m = stop_images.get(s["id"])
            md.append(
                f"| `{s['id']}` | {s['name']} | `{r['id']}` | {'PASS' if m else 'FAIL'} | `{m['file'] if m else '—'}` |"
            )
    if misses:
        md += ["", "## Remaining gaps", ""]
        for m in misses:
            md.append(f"- `{m['kind']}` `{m['id']}` {m['label']} tried=`{m.get('tried')}`")
    AUDIT.write_text("\n".join(md) + "\n")
    print(json.dumps(stats, ensure_ascii=False))
    print("wrote", OUT_TS)
    print("wrote", AUDIT)


if __name__ == "__main__":
    main()
