/** Place-accurate images: Wikimedia Commons thumbs + local AI fallbacks.
 * Commons batch: research/scripts/resolve-place-images.py
 * Session overlays: research/audits/image-coverage-progress-20260802.md
 * AI fallbacks: public/generated/places/{id}.png (示意生成图)
 */

/** Local AI-generated covers (示意生成图). Paths are site-root; basePath applied in lib/place-images. */
export const PLACE_GENERATED_IDS = new Set<string>([
  // 昌江棋子湾：Commons 无可用西岸风景；保留示意生成图（勿用三亚/东线沙滩顶替）
  'qiziwan-optional',
]);

/**
 * Same-corridor / parent-scenic soft reuses — captions get 「同区示意」.
 * Prefer upgrading to place-accurate Commons when found; do not use wrong-province stand-ins.
 */
export const PLACE_SOFT_IDS = new Set<string>([
  'ts-laoting-optional', // 乐亭岸线无专用 Commons → 北戴河渤海湾同廊（勿用青海金银滩）
  'xinghan-optional', // 兴汉 ↔ 汉台城区同城
  'lianfengshan-optional', // 联峰山 ↔ 北戴河海滨同景区
  'pingyao-wall-optional', // 城墙选段 ↔ 平遥古城街景同城
  'zhuhai-optional', // 珠海可选 ↔ 珠海主图同城
  'shapotou-optional', // 沙坡头可选 ↔ 沙坡头主图同景区
  'datong-zuoyun-optional', // 左云无可用风景 Commons → 云冈同廊示意

  'wh-wuchang-base',
  'wh-jianghan-optional',
  'cs-xiangjiang-base',
  'cs-ningxiang-optional',
  'zz-jinshui-base',
  'zz-shaolin-optional',
  'zz-henan-museum-optional',
  'hf-baohe-base',
  'hf-sanhe-optional',
  'hf-anhui-museum-optional',
  'fz-gulou-base',
  'fz-west-lake-optional',
  'fz-rongcheng-optional',
  'nc-honggutan-base',
  'nc-bayi-optional',
  'ty-yingze-base',
  'ty-fenhe-optional',
  'sz-nanshan-base',
  'sz-oct-optional',
  'sz-dameisha-optional',
  'jn-lishi-base',
  'jn-quancheng-optional',
  'cc-chaoyang-base',
  'cc-cultural-optional',
  'nj-xuanwu-base',
  'nj-zijin-optional',
  'gy-nanming-base',
  'gy-qianling-optional',
  'gy-museum-optional',
  'nn-qingxiu-base',
  'nn-museum-optional',
  'hk-longhua-base',
  'hk-volcano-optional',
  'km-cuihu-base',
  'km-xishan-optional',
  'lz-bayi-base',
  'lz-yarlung-optional',
  'lz-buffer-optional',
  'g318-exit',
  'g318e-chengdu-buffer',
  'g318e-xinduqiao-optional',
  'jn-hangzhou-gate',
  'jn-xitang-optional',
  'jn-exit',
  'le-leshan-base',
  'le-emei-optional',
  'hrb-daoli-base',
  'hrb-sun-island-optional',
  'hh-city-base',
  'hh-xilamuren-optional',
  'hh-buffer-optional',
  // coverage wave 20260802b soft same-city / same-corridor
  // (可园/莞城/虎门馆/岭南天地=东华里/古运河/普达措/枣园/西宁适应/京沪出京 等已升专用 Commons)
  'wx-liangxi-base', // 梁溪慢住 ↔ 鼋头渚同城
  'nb-haishu-base', // 海曙慢住 ↔ 天一阁同城
  'fs-chancheng-base', // 禅城慢住 ↔ 祖庙同城
  'g214-gonghe-optional', // 共和缓冲 ↔ 青海湖同廊
  'g214-buffer-optional', // 西宁缓冲 ↔ 青海湖同廊
  'ya-baota-base', // 宝塔区慢住 ↔ 宝塔山同城
  'qzr-exit', // 段末出藏 ↔ 青藏列车同主题
  // coverage wave 20260802c soft
  'g214s-adapt', // 香格里拉适应 ↔ 独克宗同城
  'g214s-exit', // 飞撤 ↔ 独克宗同城
]);

export function generatedPlacePath(id: string): string {
  return `/generated/places/${id}.png`;
}

export const PLACE_ROUTE_COVERS: Record<string, string> = {
  'chengde-2d': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Chengde_Mountain_Resort_22944-Chengde_%2844830038471%29.jpg/1280px-Chengde_Mountain_Resort_22944-Chengde_%2844830038471%29.jpg',
  'dongbei-changbai-summer': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/%E4%BB%8E%E9%95%BF%E7%99%BD%E5%B1%B1%E8%A5%BF%E5%9D%A1%E7%9C%8B%E5%A4%A9%E6%B1%A0-2017-08-24_1.jpg/1280px-%E4%BB%8E%E9%95%BF%E7%99%BD%E5%B1%B1%E8%A5%BF%E5%9D%A1%E7%9C%8B%E5%A4%A9%E6%B1%A0-2017-08-24_1.jpg',
  'dongbei-dalian-summer': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Xinghai_Square.jpg/1280px-Xinghai_Square.jpg',
  'dongbei-harbin-snow-3d': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Harbin_International_Ice_and_Snow_Sculpture_Festival.jpg/1280px-Harbin_International_Ice_and_Snow_Sculpture_Festival.jpg',
  'dongbei-heilongjiang-wudalianchi': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Lava_Rock_Landscape_of_Wudalianchi.jpg/1280px-Lava_Rock_Landscape_of_Wudalianchi.jpg',
  'dongbei-jilin-yanbian': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Yanji.jpg/1280px-Yanji.jpg',
  'dongbei-liaoning-shenyang': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Mukden_Palace.jpg/1280px-Mukden_Palace.jpg',
  'frontier-dandong': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Yalu_River_Broken_Bridge.jpg/1280px-Yalu_River_Broken_Bridge.jpg',
  'frontier-dongxing': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Xinhua_Rd%2C_Dongxing_%2820240220152802%29.jpg/1280px-Xinhua_Rd%2C_Dongxing_%2820240220152802%29.jpg',
  'frontier-erlian': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Erenhot_port.jpg/1280px-Erenhot_port.jpg',
  'frontier-manzhouli': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Manzhouli.jpg/1280px-Manzhouli.jpg',
  'frontier-mohe': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Beijicun.jpg/1280px-Beijicun.jpg',
  'frontier-ruili': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Ruili.jpg/1280px-Ruili.jpg',
  'gubei-overnight': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Gubei_water_village_from_Simatai_Great_Wall_in_Beijing_-_panoramio.jpg/1280px-Gubei_water_village_from_Simatai_Great_Wall_in_Beijing_-_panoramio.jpg',
  'longstay-dali': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/%E5%A4%A7%E7%90%86%E5%8F%A4%E5%9F%8E%E5%8D%97%E9%97%A8-2064560.jpg/1280px-%E5%A4%A7%E7%90%86%E5%8F%A4%E5%9F%8E%E5%8D%97%E9%97%A8-2064560.jpg',
  'longstay-kunming': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Kunming.jpg/1280px-Kunming.jpg',
  'longstay-yangshuo': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Yangshuo.jpg/1280px-Yangshuo.jpg',
  'longstay-weihai': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Liugong_Island_Weihai.jpg/1280px-Liugong_Island_Weihai.jpg',
  'longstay-hulunbuir': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Hulunbuir.jpg/1280px-Hulunbuir.jpg',
  'longstay-dujiangyan': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/36661-Dujiangyan_%2844634340644%29.jpg/1280px-36661-Dujiangyan_%2844634340644%29.jpg',
  'longstay-zhenyuan': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Guizhou_Zhenyuan_Ancient_Town4_%28cropped%29.jpg/1280px-Guizhou_Zhenyuan_Ancient_Town4_%28cropped%29.jpg',
  'longstay-hainan-east': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Sanya_Bay_panorama.jpg/1280px-Sanya_Bay_panorama.jpg',
  'huabei-hebei-beidaihe': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Beidaihe_panorama_from_the_south.jpg/1280px-Beidaihe_panorama_from_the_south.jpg',
  'huabei-hebei-zhangjiakou': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Dajingmen_%2820171008104017%29.jpg/1280px-Dajingmen_%2820171008104017%29.jpg',
  'huabei-hebei-baoding': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/%E4%BF%9D%E5%AE%9A%E7%9B%B4%E9%9A%B6%E6%80%BB%E7%9D%A3%E7%BD%B2.jpg/1280px-%E4%BF%9D%E5%AE%9A%E7%9B%B4%E9%9A%B6%E6%80%BB%E7%9D%A3%E7%BD%B2.jpg',
  'huabei-hebei-tangshan': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Eastern_Qing_Tombs.jpg/1280px-Eastern_Qing_Tombs.jpg',
  'huabei-hebei-shijiazhuang':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Zhengding_Longxing_Si_2013.08.31_15-50-10.jpg/1280px-Zhengding_Longxing_Si_2013.08.31_15-50-10.jpg',
  'huabei-neimeng-hulunbuir': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Hulunbuir.jpg/1280px-Hulunbuir.jpg',
  'huabei-neimeng-summer': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Hulunbuir.jpg/1280px-Hulunbuir.jpg',
  'huabei-shandong-coast': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Qingdao_Harbour_51341-Qingdao_%2849055637186%29.jpg/1280px-Qingdao_Harbour_51341-Qingdao_%2849055637186%29.jpg',
  'huabei-shandong-taishan': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Mount_Tai.jpg/1280px-Mount_Tai.jpg',
  'huabei-shanxi-loop': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Yungang_Grottoes.jpg/1280px-Yungang_Grottoes.jpg',
  'huabei-shanxi-pingyao-deep': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Pingyao_40.JPG/1280px-Pingyao_40.JPG',
  'huadong-hangzhou-suzhou': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/West_Lake%2C_Hangzhou_2025.jpg/1280px-West_Lake%2C_Hangzhou_2025.jpg',
  'huadong-huangshan-hui': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Huangshan_pic_4.jpg/1280px-Huangshan_pic_4.jpg',
  'huadong-jiangsu-yangzhou': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Slender_West_Lake.jpg/1280px-Slender_West_Lake.jpg',
  'huadong-shanghai-short': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/The_Bund_2.jpg/1280px-The_Bund_2.jpg',
  'huadong-suhan-slow': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/West_Lake%2C_Hangzhou_2025.jpg/1280px-West_Lake%2C_Hangzhou_2025.jpg',
  'huadong-suzhou-nanjing': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Humble_Administrator%27s_Garden_2015.JPG/1280px-Humble_Administrator%27s_Garden_2015.JPG',
  'huadong-wuyuan-spring': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Wuyuan_Jiangxi.jpg/1280px-Wuyuan_Jiangxi.jpg',
  'huanan-fujian-quanzhou': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Kaiyuan_Temple_%28Quanzhou%29.jpg/1280px-Kaiyuan_Temple_%28Quanzhou%29.jpg',
  'huanan-guangxi-detian': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Detian_Falls.jpg/1280px-Detian_Falls.jpg',
  'huanan-guangzhou-chaoshan': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Canton_Tower_20241027.jpg/1280px-Canton_Tower_20241027.jpg',
  'huanan-guilin-yangshuo': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/87318-Li-River.jpg/1280px-87318-Li-River.jpg',
  'huanan-hainan-slow-west':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Chengmai_Laocheng_seashore_20220619.jpg/1280px-Chengmai_Laocheng_seashore_20220619.jpg',
  'huabei-shandong-yantai':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/%E7%85%99%E5%8F%B0%E5%B1%B1%E6%99%AF%E5%8D%80.jpg/1280px-%E7%85%99%E5%8F%B0%E5%B1%B1%E6%99%AF%E5%8D%80.jpg',
  'huanan-sanya-winter': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Sanya_Bay_panorama.jpg/1280px-Sanya_Bay_panorama.jpg',
  'huanan-xiamen-winter': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Xiamen.jpg/1280px-Xiamen.jpg',
  'huanan-zhuhai-3d': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Zhuhai.jpg/1280px-Zhuhai.jpg',
  'huazhong-hunan-changsha': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Yuelu_Academy.jpg/1280px-Yuelu_Academy.jpg',
  'huazhong-luoyang-kaifeng': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/27427-Luoyang_%2849067744628%29.jpg/1280px-27427-Luoyang_%2849067744628%29.jpg',
  'huazhong-shaanxi-hanzhong': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Hantai%2C_Hanzhong%2C_Shaanxi%2C_China_-_panoramio_%286%29.jpg/1280px-Hantai%2C_Hanzhong%2C_Shaanxi%2C_China_-_panoramio_%286%29.jpg',
  'huazhong-wudang-3d': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Wudangshan_pic_7.jpg/1280px-Wudangshan_pic_7.jpg',
  'huazhong-xian-slow': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Xi%27an_City_Wall.jpg/1280px-Xi%27an_City_Wall.jpg',
  'huazhong-yichang-three-gorges': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Three_Gorges_Dam.jpg/1280px-Three_Gorges_Dam.jpg',
  'huazhong-zhangjiajie': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/1_tianzishan_wulingyuan_zhangjiajie_2012.jpg/1280px-1_tianzishan_wulingyuan_zhangjiajie_2012.jpg',
  'mutianyu-day': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Great_Wall_of_China_July_2006.JPG/1280px-Great_Wall_of_China_July_2006.JPG',
  'national-chuandian-slow': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/%E5%A4%A7%E7%90%86%E5%8F%A4%E5%9F%8E%E5%8D%97%E9%97%A8-2064560.jpg/1280px-%E5%A4%A7%E7%90%86%E5%8F%A4%E5%9F%8E%E5%8D%97%E9%97%A8-2064560.jpg',
  'national-qinggan-slow': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Qinghai_Lake.jpg/1280px-Qinghai_Lake.jpg',
  'national-silkroad-slow': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/51714-Terracota-Army.jpg/1280px-51714-Terracota-Army.jpg',
  'qingzang-lhasa-slow': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Potala_Palace_HQ.jpg/1280px-Potala_Palace_HQ.jpg',
  'qingzang-qilian-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Menyuan_County.jpg/1280px-Menyuan_County.jpg',
  'qingzang-qinghai-lake': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Qinghai_Lake.jpg/1280px-Qinghai_Lake.jpg',
  'qingzang-shigatse-taste': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Tashilhunpo.jpg/1280px-Tashilhunpo.jpg',
  'qingzang-xining-3d': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Xining_-_Dongguan_mosque_Minaret_2024.jpg/1280px-Xining_-_Dongguan_mosque_Minaret_2024.jpg',
  'tianjin-day': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Tianjin_Eye_and_Tianjin.jpg/1280px-Tianjin_Eye_and_Tianjin.jpg',
  'xibei-dunhuang-zhangye': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Mogao_Caves_%2854376969262%29.jpg/1280px-Mogao_Caves_%2854376969262%29.jpg',
  'xibei-lanzhou-xiahe': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Labrang_Monastery.jpg/1280px-Labrang_Monastery.jpg',
  'xibei-ningxia-3d': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Western_Xia_tombs.jpg/1280px-Western_Xia_tombs.jpg',
  'xibei-ningxia-shapotou': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Shapotou.jpg/1280px-Shapotou.jpg',
  'xibei-xinjiang-duku': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Duku_Highway.jpg/1280px-Duku_Highway.jpg',
  'xibei-xinjiang-kashi': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Kashgar.jpg/1280px-Kashgar.jpg',
  'xibei-xinjiang-north': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Kanas.jpg/1280px-Kanas.jpg',
  'xibei-xinjiang-south': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Kashgar.jpg/1280px-Kashgar.jpg',
  'xibei-xinjiang-turpan': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Grape_Valley.jpg/1280px-Grape_Valley.jpg',
  'xibei-xinjiang-yili': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Narat_Grassland.jpg/1280px-Narat_Grassland.jpg',
  'xinan-chengdu-slow': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Shops_-_Kuanzhai_Alleys_-_Chengdu%2C_China_-_DSC05305.jpg/1280px-Shops_-_Kuanzhai_Alleys_-_Chengdu%2C_China_-_DSC05305.jpg',
  'xinan-chongqing-slow': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Chongqing.jpg/1280px-Chongqing.jpg',
  'xinan-chuanxi-slow': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Xinduqiao.jpg/1280px-Xinduqiao.jpg',
  'xinan-dujiangyan-2d': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/36661-Dujiangyan_%2844634340644%29.jpg/1280px-36661-Dujiangyan_%2844634340644%29.jpg',
  'xinan-guizhou-loop': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Huangguoshu_Waterfall.jpg/1280px-Huangguoshu_Waterfall.jpg',
  'xinan-guizhou-zhenyuan': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Guizhou_Zhenyuan_Ancient_Town4_%28cropped%29.jpg/1280px-Guizhou_Zhenyuan_Ancient_Town4_%28cropped%29.jpg',
  'yunnan-dali-lijiang': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/%E5%A4%A7%E7%90%86%E5%8F%A4%E5%9F%8E%E5%8D%97%E9%97%A8-2064560.jpg/1280px-%E5%A4%A7%E7%90%86%E5%8F%A4%E5%9F%8E%E5%8D%97%E9%97%A8-2064560.jpg',
  'yunnan-dianxi-tengchong': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Tengchong.jpg/1280px-Tengchong.jpg',
  'yunnan-xishuangbanna-winter': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Xishuangbanna.jpg/1280px-Xishuangbanna.jpg',
  // coverage wave 20260802
  'huazhong-hubei-wuhan':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Yellow_Crane_Tower_61469-Wuhan_%2849149984218%29.jpg/1280px-Yellow_Crane_Tower_61469-Wuhan_%2849149984218%29.jpg',
  'huazhong-henan-zhengzhou':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Shaolin_Monastery.jpg/1280px-Shaolin_Monastery.jpg',
  'huadong-anhui-hefei':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Tunxi_Old_Street.jpg/1280px-Tunxi_Old_Street.jpg',
  'huanan-fujian-fuzhou':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Kaiyuan_Temple_%28Quanzhou%29.jpg/1280px-Kaiyuan_Temple_%28Quanzhou%29.jpg',
  'huadong-jiangxi-nanchang':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Wuyuan_Jiangxi.jpg/1280px-Wuyuan_Jiangxi.jpg',
  'huabei-shanxi-taiyuan':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Taiyuan_Shanxi_China.jpg/1280px-Taiyuan_Shanxi_China.jpg',
  'huanan-guangdong-shenzhen':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Shenzhen_Bay_Bridge_To_HK_on_Shenzhen_Side.jpg/1280px-Shenzhen_Bay_Bridge_To_HK_on_Shenzhen_Side.jpg',
  'huabei-shandong-jinan':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Jinan_Baotu_Spring-20150519-RM-165055.jpg/1280px-Jinan_Baotu_Spring-20150519-RM-165055.jpg',
  'dongbei-jilin-changchun':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Yanji.jpg/1280px-Yanji.jpg',
  'huadong-jiangsu-nanjing':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Nanjing_Museum.jpg/1280px-Nanjing_Museum.jpg',
  'xinan-guizhou-guiyang':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Guiyang.jpg/1280px-Guiyang.jpg',
  'huanan-guangxi-nanning':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Nanning.jpg/1280px-Nanning.jpg',
  'huanan-hainan-haikou':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Sanya_Bay_panorama.jpg/1280px-Sanya_Bay_panorama.jpg',
  'xinan-yunnan-kunming-city':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Kunming.jpg/1280px-Kunming.jpg',
  'qingzang-nyingchi-slow':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Shergyla_Mountain%2C_Nyingchi%2C_Tibet_Banner.jpg/1280px-Shergyla_Mountain%2C_Nyingchi%2C_Tibet_Banner.jpg',
  'qingzang-g318-lhasa-nyingchi':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Potala_Palace_HQ.jpg/1280px-Potala_Palace_HQ.jpg',
  'xinan-sichuan-g318-east':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Xinduqiao.jpg/1280px-Xinduqiao.jpg',
  'huadong-jiangnan-water-towns':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/1_wuzhen_aerial_2023.jpg/1280px-1_wuzhen_aerial_2023.jpg',
  'xinan-sichuan-leshan-emei':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Leshan_Giant_Buddha%2C_20161102.jpg/1280px-Leshan_Giant_Buddha%2C_20161102.jpg',
  'dongbei-heilongjiang-harbin-summer':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Saint_Sophia_Cathedral_in_Harbin.jpg/1280px-Saint_Sophia_Cathedral_in_Harbin.jpg',
  'huabei-neimeng-hohhot':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Hulunbuir.jpg/1280px-Hulunbuir.jpg',
  // coverage wave 20260802b
  'huadong-jiangsu-wuxi':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/%E6%97%A0%E9%94%A1%E9%BC%8B%E5%A4%B4%E6%B8%9A%2C_2007-01-02.jpg/1280px-%E6%97%A0%E9%94%A1%E9%BC%8B%E5%A4%B4%E6%B8%9A%2C_2007-01-02.jpg',
  'huadong-zhejiang-ningbo':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Tianyi_Pavilion%2C_Ningbo.jpg/1280px-Tianyi_Pavilion%2C_Ningbo.jpg',
  'huanan-guangdong-dongguan':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/20160210_Keyuan%2C_Dongguan_01.jpg/1280px-20160210_Keyuan%2C_Dongguan_01.jpg',
  'huanan-guangdong-foshan':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Foshan_Ancestral_Temple_39539-Foshan_%2849042475643%29.jpg/1280px-Foshan_Ancestral_Temple_39539-Foshan_%2849042475643%29.jpg',
  'qingzang-g214-xining-taste':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Qinghai_Lake.jpg/1280px-Qinghai_Lake.jpg',
  'huazhong-shaanxi-g210-yanan':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Baota_Mountain.jpg/1280px-Baota_Mountain.jpg',
  'huabei-beijing-city-slow':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/%E5%8D%81%E4%B8%83%E5%AD%94%E6%A1%A5.JPG/1280px-%E5%8D%81%E4%B8%83%E5%AD%94%E6%A1%A5.JPG',
  'qingzang-railway-slow':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Qingzang_railway_Train_01.jpg/1280px-Qingzang_railway_Train_01.jpg',
  // coverage wave 20260802c
  'national-jinghu-coast-slow':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Qingdao_Harbour_51341-Qingdao_%2849055637186%29.jpg/1280px-Qingdao_Harbour_51341-Qingdao_%2849055637186%29.jpg',
  'yunnan-g214-shangri-la-taste':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Roofs_of_Shangri-La_Old_Town_1.JPG/1280px-Roofs_of_Shangri-La_Old_Town_1.JPG',
};

export const PLACE_STOP_IMAGES: Record<string, string> = {
  'aksu-rest': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Aksu_City.jpg/1280px-Aksu_City.jpg',
  'badaguan': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Badaguan.jpg/1280px-Badaguan.jpg',
  'baisha-lake': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Karakul_Lake_%28Xinjiang%29.jpg/1280px-Karakul_Lake_%28Xinjiang%29.jpg',
  'beidaihe-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Beidaihe_panorama_from_the_south.jpg/1280px-Beidaihe_panorama_from_the_south.jpg',
  'beiji-village': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Beijicun.jpg/1280px-Beijicun.jpg',
  'beiling-park': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Zhao_Mausoleum_%28Beiling_Park%29.jpg/1280px-Zhao_Mausoleum_%28Beiling_Park%29.jpg',
  'bingmayong-fast': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/51714-Terracota-Army.jpg/1280px-51714-Terracota-Army.jpg',
  'bishu-shanzhuang': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Chengde_Mountain_Resort_22944-Chengde_%2844830038471%29.jpg/1280px-Chengde_Mountain_Resort_22944-Chengde_%2844830038471%29.jpg',
  'chengde-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Chengde_Mountain_Resort_22944-Chengde_%2844830038471%29.jpg/1280px-Chengde_Mountain_Resort_22944-Chengde_%2844830038471%29.jpg',
  'changli-goldcoast': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Beidaihe_panorama_from_the_south.jpg/1280px-Beidaihe_panorama_from_the_south.jpg',
  'jimo-oldtown': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Qingdao_Harbour_51341-Qingdao_%2849055637186%29.jpg/1280px-Qingdao_Harbour_51341-Qingdao_%2849055637186%29.jpg',
  'laoshan-yangkou': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Qingdao_Harbour_51341-Qingdao_%2849055637186%29.jpg/1280px-Qingdao_Harbour_51341-Qingdao_%2849055637186%29.jpg',
  'ls-dali-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/%E5%A4%A7%E7%90%86%E5%8F%A4%E5%9F%8E%E5%8D%97%E9%97%A8-2064560.jpg/1280px-%E5%A4%A7%E7%90%86%E5%8F%A4%E5%9F%8E%E5%8D%97%E9%97%A8-2064560.jpg',
  'ls-erhai-days': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/%E5%A4%A7%E7%90%86%E5%8F%A4%E5%9F%8E%E5%8D%97%E9%97%A8-2064560.jpg/1280px-%E5%A4%A7%E7%90%86%E5%8F%A4%E5%9F%8E%E5%8D%97%E9%97%A8-2064560.jpg',
  'ls-cangshan-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/%E5%A4%A7%E7%90%86%E5%8F%A4%E5%9F%8E%E5%8D%97%E9%97%A8-2064560.jpg/1280px-%E5%A4%A7%E7%90%86%E5%8F%A4%E5%9F%8E%E5%8D%97%E9%97%A8-2064560.jpg',
  'ls-shaxi-weekend': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Shaxi_Yunnan.jpg/1280px-Shaxi_Yunnan.jpg',
  'ls-kunming-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Kunming.jpg/1280px-Kunming.jpg',
  'ls-dianchi-xishan': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Dianchi.jpg/1280px-Dianchi.jpg',
  'ls-shilin-day': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Shilin_Stone_Forest_01.JPG/1280px-Shilin_Stone_Forest_01.JPG',
  'ls-fuxian-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Dianchi.jpg/1280px-Dianchi.jpg',
  'ls-yangshuo-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Yangshuo.jpg/1280px-Yangshuo.jpg',
  'ls-lijiang-boat': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/87318-Li-River.jpg/1280px-87318-Li-River.jpg',
  'ls-yulong-raft': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Yangshuo.jpg/1280px-Yangshuo.jpg',
  'ls-xingping-day': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/87318-Li-River.jpg/1280px-87318-Li-River.jpg',
  'ls-weihai-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Liugong_Island_Weihai.jpg/1280px-Liugong_Island_Weihai.jpg',
  'ls-liugong-day': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Liugong_Island_Weihai.jpg/1280px-Liugong_Island_Weihai.jpg',
  'ls-chengshantou': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Liugong_Island_Weihai.jpg/1280px-Liugong_Island_Weihai.jpg',
  'ls-rushan-optional':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Rushan%2C_Weihai%2C_Shandong%2C_China_-_panoramio.jpg/1280px-Rushan%2C_Weihai%2C_Shandong%2C_China_-_panoramio.jpg',
  'ls-hailar-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Hulunbuir.jpg/1280px-Hulunbuir.jpg',
  'ls-chenbarhu-days': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Hulunbuir.jpg/1280px-Hulunbuir.jpg',
  'ls-manzhouli-taste': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Manzhouli.jpg/1280px-Manzhouli.jpg',
  'ls-erguna-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Erguna.jpg/1280px-Erguna.jpg',
  'ls-djy-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/36661-Dujiangyan_%2844634340644%29.jpg/1280px-36661-Dujiangyan_%2844634340644%29.jpg',
  'ls-djy-site': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/36661-Dujiangyan_%2844634340644%29.jpg/1280px-36661-Dujiangyan_%2844634340644%29.jpg',
  'ls-qingcheng-front': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Mount_Qingcheng.jpg/1280px-Mount_Qingcheng.jpg',
  'ls-chengdu-daytrips': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Giant_Panda_at_Chengdu.jpg/1280px-Giant_Panda_at_Chengdu.jpg',
  'ls-zhenyuan-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Guizhou_Zhenyuan_Ancient_Town4_%28cropped%29.jpg/1280px-Guizhou_Zhenyuan_Ancient_Town4_%28cropped%29.jpg',
  'ls-wuyang-boat': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Guizhou_Zhenyuan_Ancient_Town4_%28cropped%29.jpg/1280px-Guizhou_Zhenyuan_Ancient_Town4_%28cropped%29.jpg',
  'ls-qinglong-dong': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/%E8%B4%B5%E5%B7%9E-%E9%95%87%E8%BF%9C-%E9%9D%92%E9%BE%99%E6%B4%9E_-_panoramio.jpg/1280px-%E8%B4%B5%E5%B7%9E-%E9%95%87%E8%BF%9C-%E9%9D%92%E9%BE%99%E6%B4%9E_-_panoramio.jpg',
  'ls-qiandongnan-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Guizhou_Zhenyuan_Ancient_Town4_%28cropped%29.jpg/1280px-Guizhou_Zhenyuan_Ancient_Town4_%28cropped%29.jpg',
  'ls-qionghai-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Sanya_Bay_panorama.jpg/1280px-Sanya_Bay_panorama.jpg',
  'ls-boao-days': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Sanya_Bay_panorama.jpg/1280px-Sanya_Bay_panorama.jpg',
  'ls-shimei-bay': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Yalong_Bay.jpg/1280px-Yalong_Bay.jpg',
  'ls-xinglong-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Sanya_Bay_panorama.jpg/1280px-Sanya_Bay_panorama.jpg',
  'nandahe-funing': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Beidaihe_panorama_from_the_south.jpg/1280px-Beidaihe_panorama_from_the_south.jpg',
  'putuo-zongcheng': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Chengde_Mountain_Resort_22944-Chengde_%2844830038471%29.jpg/1280px-Chengde_Mountain_Resort_22944-Chengde_%2844830038471%29.jpg',
  'qingchui-peak': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Chengde_Mountain_Resort_22944-Chengde_%2844830038471%29.jpg/1280px-Chengde_Mountain_Resort_22944-Chengde_%2844830038471%29.jpg',
  'shanhaiguan-laolongtou': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Beidaihe_panorama_from_the_south.jpg/1280px-Beidaihe_panorama_from_the_south.jpg',
  'shuangluan-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Chengde_Mountain_Resort_22944-Chengde_%2844830038471%29.jpg/1280px-Chengde_Mountain_Resort_22944-Chengde_%2844830038471%29.jpg',
  'central-street': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/West_facade_of_St._Sophia_Cathedral%2C_Harbin_%2820230721150450%29.jpg/1280px-West_facade_of_St._Sophia_Cathedral%2C_Harbin_%2820230721150450%29.jpg',
  'chaka-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Chaka_Salt_Lake.jpg/1280px-Chaka_Salt_Lake.jpg',
  'changbai-north': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/%E4%BB%8E%E9%95%BF%E7%99%BD%E5%B1%B1%E8%A5%BF%E5%9D%A1%E7%9C%8B%E5%A4%A9%E6%B1%A0-2017-08-24_1.jpg/1280px-%E4%BB%8E%E9%95%BF%E7%99%BD%E5%B1%B1%E8%A5%BF%E5%9D%A1%E7%9C%8B%E5%A4%A9%E6%B1%A0-2017-08-24_1.jpg',
  'changbai-west': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/%E4%BB%8E%E9%95%BF%E7%99%BD%E5%B1%B1%E8%A5%BF%E5%9D%A1%E7%9C%8B%E5%A4%A9%E6%B1%A0-2017-08-24_1.jpg/1280px-%E4%BB%8E%E9%95%BF%E7%99%BD%E5%B1%B1%E8%A5%BF%E5%9D%A1%E7%9C%8B%E5%A4%A9%E6%B1%A0-2017-08-24_1.jpg',
  'chaoshan-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Paifangjie_%28cropped%29.jpg/1280px-Paifangjie_%28cropped%29.jpg',
  'chenbarag-grass': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Hulunbuir.jpg/1280px-Hulunbuir.jpg',
  'chengdu-adapt': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Shops_-_Kuanzhai_Alleys_-_Chengdu%2C_China_-_DSC05305.jpg/1280px-Shops_-_Kuanzhai_Alleys_-_Chengdu%2C_China_-_DSC05305.jpg',
  'chengdu-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Shops_-_Kuanzhai_Alleys_-_Chengdu%2C_China_-_DSC05305.jpg/1280px-Shops_-_Kuanzhai_Alleys_-_Chengdu%2C_China_-_DSC05305.jpg',
  'chengdu-loop-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Shops_-_Kuanzhai_Alleys_-_Chengdu%2C_China_-_DSC05305.jpg/1280px-Shops_-_Kuanzhai_Alleys_-_Chengdu%2C_China_-_DSC05305.jpg',
  'chongqing-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Chongqing.jpg/1280px-Chongqing.jpg',
  'chongwu-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Chongwu_Ancient_City.jpg/1280px-Chongwu_Ancient_City.jpg',
  'city-wall-museum': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Xi%27an_City_Wall.jpg/1280px-Xi%27an_City_Wall.jpg',
  'dali-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/%E5%A4%A7%E7%90%86%E5%8F%A4%E5%9F%8E%E5%8D%97%E9%97%A8-2064560.jpg/1280px-%E5%A4%A7%E7%90%86%E5%8F%A4%E5%9F%8E%E5%8D%97%E9%97%A8-2064560.jpg',
  'dali-loop-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/%E5%A4%A7%E7%90%86%E5%8F%A4%E5%9F%8E%E5%8D%97%E9%97%A8-2064560.jpg/1280px-%E5%A4%A7%E7%90%86%E5%8F%A4%E5%9F%8E%E5%8D%97%E9%97%A8-2064560.jpg',
  'dalian-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Xinghai_Square.jpg/1280px-Xinghai_Square.jpg',
  'dandong-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Yalu_River_Broken_Bridge.jpg/1280px-Yalu_River_Broken_Bridge.jpg',
  'danzhou-base':
    'https://upload.wikimedia.org/wikipedia/commons/f/f5/Yangpu_Ancient_Salt_Field_-_Hainan_-_01.jpg',
  'danzhou-coast':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Cape_Lingao.jpg/1280px-Cape_Lingao.jpg',
  'daocheng-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Yading.jpg/1280px-Yading.jpg',
  'datong-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Yungang_Grottoes.jpg/1280px-Yungang_Grottoes.jpg',
  'detian-falls': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Detian_Falls.jpg/1280px-Detian_Falls.jpg',
  'dongguan-street': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Ge_Yuan_%E4%B8%AA%E5%9B%AD_%285812003010%29.jpg/1280px-Ge_Yuan_%E4%B8%AA%E5%9B%AD_%285812003010%29.jpg',
  'dongxing-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Xinhua_Rd%2C_Dongxing_%2820240220152802%29.jpg/1280px-Xinhua_Rd%2C_Dongxing_%2820240220152802%29.jpg',
  'dujiangyan': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/36661-Dujiangyan_%2844634340644%29.jpg/1280px-36661-Dujiangyan_%2844634340644%29.jpg',
  'dujiangyan-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/36661-Dujiangyan_%2844634340644%29.jpg/1280px-36661-Dujiangyan_%2844634340644%29.jpg',
  'duku-view': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Duku_Highway.jpg/1280px-Duku_Highway.jpg',
  'dunhuang-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Mogao_Caves_%2854376969262%29.jpg/1280px-Mogao_Caves_%2854376969262%29.jpg',
  'dunhuang-mogao-loop': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Mogao_Caves_%2854376969262%29.jpg/1280px-Mogao_Caves_%2854376969262%29.jpg',
  'dunhuang-silk': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Mogao_Caves_%2854376969262%29.jpg/1280px-Mogao_Caves_%2854376969262%29.jpg',
  'dushanzi': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Duku_Highway.jpg/1280px-Duku_Highway.jpg',
  'erdos-baihe': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/%E4%BB%8E%E9%95%BF%E7%99%BD%E5%B1%B1%E8%A5%BF%E5%9D%A1%E7%9C%8B%E5%A4%A9%E6%B1%A0-2017-08-24_1.jpg/1280px-%E4%BB%8E%E9%95%BF%E7%99%BD%E5%B1%B1%E8%A5%BF%E5%9D%A1%E7%9C%8B%E5%A4%A9%E6%B1%A0-2017-08-24_1.jpg',
  'erguna-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Erguna.jpg/1280px-Erguna.jpg',
  'erguna-riverside': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Erguna.jpg/1280px-Erguna.jpg',
  'erlian-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Erenhot_port.jpg/1280px-Erenhot_port.jpg',
  'erlian-guomen': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Erenhot_port.jpg/1280px-Erenhot_port.jpg',
  'fenghuang-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Fenghuang_Ancient_City.jpg/1280px-Fenghuang_Ancient_City.jpg',
  'furong-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Furong_Zhen.jpg/1280px-Furong_Zhen.jpg',
  'grape-valley': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Grape_Valley.jpg/1280px-Grape_Valley.jpg',
  'guangzhou-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Canton_Tower_20241027.jpg/1280px-Canton_Tower_20241027.jpg',
  'gubei-water-town': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Gubei_water_village_from_Simatai_Great_Wall_in_Beijing_-_panoramio.jpg/1280px-Gubei_water_village_from_Simatai_Great_Wall_in_Beijing_-_panoramio.jpg',
  'guilin-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/87318-Li-River.jpg/1280px-87318-Li-River.jpg',
  'guiyang-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Guiyang.jpg/1280px-Guiyang.jpg',
  'gulangyu': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Gulangyu_Island.jpg/1280px-Gulangyu_Island.jpg',
  'guomen-square': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Manzhouli.jpg/1280px-Manzhouli.jpg',
  'haihe': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Tianjin_Eye_and_Tianjin.jpg/1280px-Tianjin_Eye_and_Tianjin.jpg',
  'hailar-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Hulunbuir.jpg/1280px-Hulunbuir.jpg',
  'hailar-slow': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Hulunbuir.jpg/1280px-Hulunbuir.jpg',
  'hanging-temple': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Xuankong_Temple.jpg/1280px-Xuankong_Temple.jpg',
  'hangzhou-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/West_Lake%2C_Hangzhou_2025.jpg/1280px-West_Lake%2C_Hangzhou_2025.jpg',
  'hangzhou-west-lake': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/West_Lake%2C_Hangzhou_2025.jpg/1280px-West_Lake%2C_Hangzhou_2025.jpg',
  'hanzhong-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Hantai%2C_Hanzhong%2C_Shaanxi%2C_China_-_panoramio_%286%29.jpg/1280px-Hantai%2C_Hanzhong%2C_Shaanxi%2C_China_-_panoramio_%286%29.jpg',
  'hanzhong-wuhou': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Hantai%2C_Hanzhong%2C_Shaanxi%2C_China_-_panoramio_%286%29.jpg/1280px-Hantai%2C_Hanzhong%2C_Shaanxi%2C_China_-_panoramio_%286%29.jpg',
  'harbin-buffer': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/West_facade_of_St._Sophia_Cathedral%2C_Harbin_%2820230721150450%29.jpg/1280px-West_facade_of_St._Sophia_Cathedral%2C_Harbin_%2820230721150450%29.jpg',
  'harbin-ice-festival': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Harbin_International_Ice_and_Snow_Sculpture_Festival.jpg/1280px-Harbin_International_Ice_and_Snow_Sculpture_Festival.jpg',
  'heshun-town': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Heshun_Town.jpg/1280px-Heshun_Town.jpg',
  'hongcun': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Hongcun_Village.jpg/1280px-Hongcun_Village.jpg',
  'huangguoshu': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Huangguoshu_Waterfall.jpg/1280px-Huangguoshu_Waterfall.jpg',
  'huangshan-cable': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Huangshan_pic_4.jpg/1280px-Huangshan_pic_4.jpg',
  'huangshan-hui-slow': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Huangshan_pic_4.jpg/1280px-Huangshan_pic_4.jpg',
  'huashan-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/1_mount_hua_shan_china_2011.jpg/1280px-1_mount_hua_shan_china_2011.jpg',
  'hulunbuir-grassland': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Hulunbuir.jpg/1280px-Hulunbuir.jpg',
  'hunan-museum': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Hunan_Provincial_Museum.jpg/1280px-Hunan_Provincial_Museum.jpg',
  'jiayuguan': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Jiayuguan_20151012.jpg/1280px-Jiayuguan_20151012.jpg',
  'jinbian-creek': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/1_tianzishan_wulingyuan_zhangjiajie_2012.jpg/1280px-1_tianzishan_wulingyuan_zhangjiajie_2012.jpg',
  'jinghong-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Xishuangbanna.jpg/1280px-Xishuangbanna.jpg',
  'kaifeng-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Iron_Pagoda.jpg/1280px-Iron_Pagoda.jpg',
  'kalajun': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Kalajun.jpg/1280px-Kalajun.jpg',
  'kanas': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Kanas.jpg/1280px-Kanas.jpg',
  'kashi-old': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Kashgar.jpg/1280px-Kashgar.jpg',
  'kashi-stay': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Kashgar.jpg/1280px-Kashgar.jpg',
  'kuitun-buffer': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Karamay.jpg/1280px-Karamay.jpg',
  'kunming-transfer': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Kunming.jpg/1280px-Kunming.jpg',
  'kuqa': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Kuqa.jpg/1280px-Kuqa.jpg',
  'kuqa-south': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Kuqa.jpg/1280px-Kuqa.jpg',
  'lanzhou-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Lanzhou.jpg/1280px-Lanzhou.jpg',
  'lanzhou-hub': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Lanzhou.jpg/1280px-Lanzhou.jpg',
  'lanzhou-silk': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Lanzhou.jpg/1280px-Lanzhou.jpg',
  'laohutan': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Tiger_Beach%2C_Dalian.jpg/1280px-Tiger_Beach%2C_Dalian.jpg',
  'lhasa-buffer': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Potala_palace23.jpg/1280px-Potala_palace23.jpg',
  'lhasa-rest': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Potala_palace23.jpg/1280px-Potala_palace23.jpg',
  'lianfengshan-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Beidaihe_panorama_from_the_south.jpg/1280px-Beidaihe_panorama_from_the_south.jpg',
  'lijiang-cruise': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/87318-Li-River.jpg/1280px-87318-Li-River.jpg',
  'lijiang-fast': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Jade_Dragon_Snow_Mountain.jpg/1280px-Jade_Dragon_Snow_Mountain.jpg',
  'lijiang-loop-taste': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Lijiang_Old_Town.jpg/1280px-Lijiang_Old_Town.jpg',
  'longmen-grottoes': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/27427-Luoyang_%2849067744628%29.jpg/1280px-27427-Luoyang_%2849067744628%29.jpg',
  'lushun-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/L%C3%BCshun.jpg/1280px-L%C3%BCshun.jpg',
  'manting-park': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Xishuangbanna.jpg/1280px-Xishuangbanna.jpg',
  'manzhouli-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Manzhouli.jpg/1280px-Manzhouli.jpg',
  'manzhouli-half': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Manzhouli.jpg/1280px-Manzhouli.jpg',
  'manzhouli-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Manzhouli.jpg/1280px-Manzhouli.jpg',
  'menyuan-flowers': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Menyuan_County.jpg/1280px-Menyuan_County.jpg',
  'mingshi-optional':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/%E6%B2%BF%E8%BE%B9%E5%85%AC%E8%B7%AF-X532%EF%BC%8C%E6%98%8E%E4%BB%95-%E5%BE%B7%E5%A4%A9%EF%BC%8C%E5%B9%BF%E8%A5%BF_Guangxi_03-10-13_-_panoramio.jpg/1280px-%E6%B2%BF%E8%BE%B9%E5%85%AC%E8%B7%AF-X532%EF%BC%8C%E6%98%8E%E4%BB%95-%E5%BE%B7%E5%A4%A9%EF%BC%8C%E5%B9%BF%E8%A5%BF_Guangxi_03-10-13_-_panoramio.jpg',
  'mogao': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Mogao_Caves_%2854376969262%29.jpg/1280px-Mogao_Caves_%2854376969262%29.jpg',
  'mohe-town': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Beijicun.jpg/1280px-Beijicun.jpg',
  'mutianyu': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Great_Wall_of_China_July_2006.JPG/1280px-Great_Wall_of_China_July_2006.JPG',
  'nalati': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Narat_Grassland.jpg/1280px-Narat_Grassland.jpg',
  'namtso-day': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Namtso.jpg/1280px-Namtso.jpg',
  'nanjing-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Nanjing_Museum.jpg/1280px-Nanjing_Museum.jpg',
  'nanjing-tulou': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Zhenchenglou.JPG/1280px-Zhenchenglou.JPG',
  'nanning-hub': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Nanning.jpg/1280px-Nanning.jpg',
  'nanshan-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Nanshan_Temple_of_Sanya.jpg/1280px-Nanshan_Temple_of_Sanya.jpg',
  'nanshan-view': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Chongqing_Nightscape.jpg/1280px-Chongqing_Nightscape.jpg',
  'orange-isle-oldstreet': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Orange_Isle.jpg/1280px-Orange_Isle.jpg',
  'panda-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Giant_Panda_at_Chengdu.jpg/1280px-Giant_Panda_at_Chengdu.jpg',
  'pingyao-deep': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Pingyao_40.JPG/1280px-Pingyao_40.JPG',
  'pingyao-side': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Pingyao_40.JPG/1280px-Pingyao_40.JPG',
  'pingyao-wall-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Pingyao_40.JPG/1280px-Pingyao_40.JPG',
  'potala': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Potala_Palace_HQ.jpg/1280px-Potala_Palace_HQ.jpg',
  'puning-temple': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/%E6%99%AE%E5%AE%81%E5%AF%BA%E5%A4%A7%E4%B9%98%E4%B9%8B%E9%98%812025.11.jpg/1280px-%E6%99%AE%E5%AE%81%E5%AF%BA%E5%A4%A7%E4%B9%98%E4%B9%8B%E9%98%812025.11.jpg',
  'qilian-town': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Qilian_Mountains.jpg/1280px-Qilian_Mountains.jpg',
  'qingcheng-front': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Mount_Qingcheng.jpg/1280px-Mount_Qingcheng.jpg',
  'qingdao-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Qingdao_Harbour_51341-Qingdao_%2849055637186%29.jpg/1280px-Qingdao_Harbour_51341-Qingdao_%2849055637186%29.jpg',
  'qinghai-lake-loop': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Qinghai_Lake.jpg/1280px-Qinghai_Lake.jpg',
  'qinghai-lake-segment': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Qinghai_Lake.jpg/1280px-Qinghai_Lake.jpg',
  'qinglong-dong-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/%E8%B4%B5%E5%B7%9E-%E9%95%87%E8%BF%9C-%E9%9D%92%E9%BE%99%E6%B4%9E_-_panoramio.jpg/1280px-%E8%B4%B5%E5%B7%9E-%E9%95%87%E8%BF%9C-%E9%9D%92%E9%BE%99%E6%B4%9E_-_panoramio.jpg',
  'qiziwan-optional': '/generated/places/huanan-hainan-slow-west.png',
  'quanzhou-qingjing': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Qingjing_Mosque.jpg/1280px-Qingjing_Mosque.jpg',
  'quanzhou-west-street': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Kaiyuan_Temple_%28Quanzhou%29.jpg/1280px-Kaiyuan_Temple_%28Quanzhou%29.jpg',
  'rehai-volcano': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Tengchong.jpg/1280px-Tengchong.jpg',
  'ruili-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Ruili.jpg/1280px-Ruili.jpg',
  'sangke-optional': 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Sangke_grassland.jpg',
  'sanya-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Sanya_Bay_panorama.jpg/1280px-Sanya_Bay_panorama.jpg',
  'sayram-lake': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/%E8%B5%9B%E9%87%8C%E6%9C%A8%E6%B9%96%E8%BF%9C%E6%99%AF%EF%BC%8C%E6%91%84%E4%BA%8E%E6%B9%96%E7%95%94%E5%B1%B1%E4%B8%98.jpg/1280px-%E8%B5%9B%E9%87%8C%E6%9C%A8%E6%B9%96%E8%BF%9C%E6%99%AF%EF%BC%8C%E6%91%84%E4%BA%8E%E6%B9%96%E7%95%94%E5%B1%B1%E4%B8%98.jpg',
  'sayram-yili': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/%E8%B5%9B%E9%87%8C%E6%9C%A8%E6%B9%96%E8%BF%9C%E6%99%AF%EF%BC%8C%E6%91%84%E4%BA%8E%E6%B9%96%E7%95%94%E5%B1%B1%E4%B8%98.jpg/1280px-%E8%B5%9B%E9%87%8C%E6%9C%A8%E6%B9%96%E8%BF%9C%E6%99%AF%EF%BC%8C%E6%91%84%E4%BA%8E%E6%B9%96%E7%95%94%E5%B1%B1%E4%B8%98.jpg',
  'shahu-or-zhenbeibu': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Sand_Lake_%28Ningxia%29.jpg/1280px-Sand_Lake_%28Ningxia%29.jpg',
  'shanghai-bund': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/The_Bund_2.jpg/1280px-The_Bund_2.jpg',
  'shanghai-museum': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Shanghai_Museum_20124-Shanghai_%2832824760281%29.jpg/1280px-Shanghai_Museum_20124-Shanghai_%2832824760281%29.jpg',
  'shaolin-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Shaolin_Monastery.jpg/1280px-Shaolin_Monastery.jpg',
  'shapotou-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Shapotou.jpg/1280px-Shapotou.jpg',
  'shapotou-scenic': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Shapotou.jpg/1280px-Shapotou.jpg',
  'shaxi': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Shaxi_Yunnan.jpg/1280px-Shaxi_Yunnan.jpg',
  'shenyang-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Mukden_Palace.jpg/1280px-Mukden_Palace.jpg',
  'shenyang-palace': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Mukden_Palace.jpg/1280px-Mukden_Palace.jpg',
  'shigatse-city': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Shigatse.jpg/1280px-Shigatse.jpg',
  'simatai': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Simatai_Great_Wall.JPG/1280px-Simatai_Great_Wall.JPG',
  'slender-west-lake': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Slender_West_Lake.jpg/1280px-Slender_West_Lake.jpg',
  'songhua-river': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Songhua_River.jpg/1280px-Songhua_River.jpg',
  'suzhou-second-garden': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Lingering_Garden.JPG/1280px-Lingering_Garden.JPG',
  'suzhou-slow': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Humble_Administrator%27s_Garden_2015.JPG/1280px-Humble_Administrator%27s_Garden_2015.JPG',
  'suzhou-zhuozheng': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Humble_Administrator%27s_Garden_2015.JPG/1280px-Humble_Administrator%27s_Garden_2015.JPG',
  'taian-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Mount_Tai.jpg/1280px-Mount_Tai.jpg',
  'taian-return': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Mount_Tai.jpg/1280px-Mount_Tai.jpg',
  'taishan-cable': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Mount_Tai.jpg/1280px-Mount_Tai.jpg',
  'taiyuan-hub': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Taiyuan_Shanxi_China.jpg/1280px-Taiyuan_Shanxi_China.jpg',
  'tashilhunpo': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Tashilhunpo.jpg/1280px-Tashilhunpo.jpg',
  'tengchong-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Tengchong.jpg/1280px-Tengchong.jpg',
  'terracotta': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/51714-Terracota-Army.jpg/1280px-51714-Terracota-Army.jpg',
  'three-gorges-boat': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Three_Gorges_Dam.jpg/1280px-Three_Gorges_Dam.jpg',
  'three-gorges-dam': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Three_Gorges_Dam.jpg/1280px-Three_Gorges_Dam.jpg',
  'tunxi-old-street': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Tunxi_Old_Street.jpg/1280px-Tunxi_Old_Street.jpg',
  'turpan-city': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Turpan.jpg/1280px-Turpan.jpg',
  'turpan-silk': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Grape_Valley.jpg/1280px-Grape_Valley.jpg',
  'urumqi-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/%C3%9Cr%C3%BCmqi.jpg/1280px-%C3%9Cr%C3%BCmqi.jpg',
  'wanding-bridge': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Ruili.jpg/1280px-Ruili.jpg',
  'wanwei-beach': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Xinhua_Rd%2C_Dongxing_%2820240220152802%29.jpg/1280px-Xinhua_Rd%2C_Dongxing_%2820240220152802%29.jpg',
  'weihai-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Liugong_Island_Weihai.jpg/1280px-Liugong_Island_Weihai.jpg',
  'wudadao': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Five_Great_Avenues_21393-Tianjin_%2849063741486%29.jpg/1280px-Five_Great_Avenues_21393-Tianjin_%2849063741486%29.jpg',
  'wudalianchi-town': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Lava_Rock_Landscape_of_Wudalianchi.jpg/1280px-Lava_Rock_Landscape_of_Wudalianchi.jpg',
  'wudalianchi-volcano': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Lava_Rock_Landscape_of_Wudalianchi.jpg/1280px-Lava_Rock_Landscape_of_Wudalianchi.jpg',
  'wudang-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Wudangshan_pic_7.jpg/1280px-Wudangshan_pic_7.jpg',
  'wudang-jinding': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Wudangshan_pic_7.jpg/1280px-Wudangshan_pic_7.jpg',
  'wulingyuan-cable': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/1_tianzishan_wulingyuan_zhangjiajie_2012.jpg/1280px-1_tianzishan_wulingyuan_zhangjiajie_2012.jpg',
  'wulong-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Wulong_Karst.jpg/1280px-Wulong_Karst.jpg',
  'wuyuan-huangling': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Wuyuan_Jiangxi.jpg/1280px-Wuyuan_Jiangxi.jpg',
  'wuyuan-jiangling': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Wuyuan_Jiangxi.jpg/1280px-Wuyuan_Jiangxi.jpg',
  'wuyuan-village': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Wuyuan_Jiangxi.jpg/1280px-Wuyuan_Jiangxi.jpg',
  'wuzhen-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/1_wuzhen_aerial_2023.jpg/1280px-1_wuzhen_aerial_2023.jpg',
  'xiahe-labrang': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Labrang_Monastery.jpg/1280px-Labrang_Monastery.jpg',
  'xiamen-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Xiamen.jpg/1280px-Xiamen.jpg',
  'xian-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Xi%27an_City_Wall.jpg/1280px-Xi%27an_City_Wall.jpg',
  'xian-silk-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Xi%27an_City_Wall.jpg/1280px-Xi%27an_City_Wall.jpg',
  'xinduqiao': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Xinduqiao.jpg/1280px-Xinduqiao.jpg',
  'xinghai-square': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Xinghai_Square.jpg/1280px-Xinghai_Square.jpg',
  'xinghan-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Hantai%2C_Hanzhong%2C_Shaanxi%2C_China_-_panoramio_%286%29.jpg/1280px-Hantai%2C_Hanzhong%2C_Shaanxi%2C_China_-_panoramio_%286%29.jpg',
  'xining-adapt': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Xining_-_Dongguan_mosque_Minaret_2024.jpg/1280px-Xining_-_Dongguan_mosque_Minaret_2024.jpg',
  'xining-city': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Xining_-_Dongguan_mosque_Minaret_2024.jpg/1280px-Xining_-_Dongguan_mosque_Minaret_2024.jpg',
  'xining-ladder': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Xining_-_Dongguan_mosque_Minaret_2024.jpg/1280px-Xining_-_Dongguan_mosque_Minaret_2024.jpg',
  'xixia-tombs': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Western_Xia_tombs.jpg/1280px-Western_Xia_tombs.jpg',
  'xtbg-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Tropical_Botanical_Garden%2C_Xishuangbanna_-_panoramio.jpg/1280px-Tropical_Botanical_Garden%2C_Xishuangbanna_-_panoramio.jpg',
  'yalong-bay': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Yalong_Bay.jpg/1280px-Yalong_Bay.jpg',
  'yalu-bridge': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Yalu_River_Broken_Bridge.jpg/1280px-Yalu_River_Broken_Bridge.jpg',
  'yangshuo-slow': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Yangshuo.jpg/1280px-Yangshuo.jpg',
  'yanji-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Yanji.jpg/1280px-Yanji.jpg',
  'yanji-maoershan': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Yanji.jpg/1280px-Yanji.jpg',
  'yantai-optional':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/%E7%85%99%E5%8F%B0%E5%B1%B1%E6%99%AF%E5%8D%80.jpg/1280px-%E7%85%99%E5%8F%B0%E5%B1%B1%E6%99%AF%E5%8D%80.jpg',
  'yt-zhifu-base':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/%E7%85%99%E5%8F%B0%E5%B1%B1%E6%99%AF%E5%8D%80.jpg/1280px-%E7%85%99%E5%8F%B0%E5%B1%B1%E6%99%AF%E5%8D%80.jpg',
  'yt-yantaishan':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Yantaishan_lighthouse_and_monument.jpg/1280px-Yantaishan_lighthouse_and_monument.jpg',
  'yt-penglai-optional':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/PenglaiPavilion.jpg/1280px-PenglaiPavilion.jpg',
  'yt-changdao-optional':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/%E7%83%9F%E5%8F%B0%E9%95%BF%E5%B2%9B-%E5%8D%97%E9%95%BF%E5%B1%B1%E5%B2%9B.JPG/1280px-%E7%83%9F%E5%8F%B0%E9%95%BF%E5%B2%9B-%E5%8D%97%E9%95%BF%E5%B1%B1%E5%B2%9B.JPG',
  'ls-rongcheng-day':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/%E6%88%90%E5%B1%B1%E5%A4%B4_-_panoramio.jpg/1280px-%E6%88%90%E5%B1%B1%E5%A4%B4_-_panoramio.jpg',
  'datong-zuoyun-optional':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Yungang_Grottoes.jpg/1280px-Yungang_Grottoes.jpg',
  'datong-lingqiu-optional':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/%E8%A7%89%E5%B1%B1%E5%AF%BA%E5%A1%94-1.jpg/1280px-%E8%A7%89%E5%B1%B1%E5%AF%BA%E5%A1%94-1.jpg',
  'sjz-changan-base':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/%E7%9F%B3%E5%AE%B6%E5%BA%84%E9%95%BF%E5%AE%89%E5%85%AC%E5%9B%AD.jpg/1280px-%E7%9F%B3%E5%AE%B6%E5%BA%84%E9%95%BF%E5%AE%89%E5%85%AC%E5%9B%AD.jpg',
  'sjz-longxing':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/%E6%AD%A3%E5%AE%9A%E9%9A%86%E5%85%B4%E5%AF%BA%E6%91%A9%E5%B0%BC%E6%AE%BF2026.3.jpg/1280px-%E6%AD%A3%E5%AE%9A%E9%9A%86%E5%85%B4%E5%AF%BA%E6%91%A9%E5%B0%BC%E6%AE%BF2026.3.jpg',
  'sjz-zhengding-towers':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Zhengding_3.jpg/1280px-Zhengding_3.jpg',
  'sjz-hebei-museum-optional':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/20250118_Hebei_Museum.jpg/1280px-20250118_Hebei_Museum.jpg',
  'sjz-zhaozhou-optional':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Anji_%28Zhaozhou%29_Bridge_2011.jpg/1280px-Anji_%28Zhaozhou%29_Bridge_2011.jpg',
  'yichang-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Three_Gorges_Dam.jpg/1280px-Three_Gorges_Dam.jpg',
  'yinchuan-evening': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Yinchuan.jpg/1280px-Yinchuan.jpg',
  'yingxian-pagoda': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Fogong_Temple_Pagoda.jpg/1280px-Fogong_Temple_Pagoda.jpg',
  'yining-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Yining.jpg/1280px-Yining.jpg',
  'yuelu-academy': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Yuelu_Academy.jpg/1280px-Yuelu_Academy.jpg',
  'yungang': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Yungang_Grottoes.jpg/1280px-Yungang_Grottoes.jpg',
  'zjk-qiaodong-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Dajingmen_%2820171008104017%29.jpg/1280px-Dajingmen_%2820171008104017%29.jpg',
  'zjk-dajingmen': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Dajingmen_%2820171008104017%29.jpg/1280px-Dajingmen_%2820171008104017%29.jpg',
  'zjk-chongli-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Golden_forests_at_Chongli_%E5%B4%87%E7%A4%BC%E9%87%91%E7%A7%8B_%288181833932%29.jpg/1280px-Golden_forests_at_Chongli_%E5%B4%87%E7%A4%BC%E9%87%91%E7%A7%8B_%288181833932%29.jpg',
  'zjk-zhangbei-optional':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Zhangbei_Grass_Skyline_from_the_ferris_wheel_%2820210731135013%29.jpg/1280px-Zhangbei_Grass_Skyline_from_the_ferris_wheel_%2820210731135013%29.jpg',
  'zjk-yuxian-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Zhangjiakou_Banner.jpg/1280px-Zhangjiakou_Banner.jpg',
  'bd-lianchi-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Baoding_001.jpg/1280px-Baoding_001.jpg',
  'bd-zhili-yamen': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/%E4%BF%9D%E5%AE%9A%E7%9B%B4%E9%9A%B6%E6%80%BB%E7%9D%A3%E7%BD%B2%E5%A4%A7%E5%A0%822019.jpg/1280px-%E4%BF%9D%E5%AE%9A%E7%9B%B4%E9%9A%B6%E6%80%BB%E7%9D%A3%E7%BD%B2%E5%A4%A7%E5%A0%822019.jpg',
  'bd-qingxiling': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Western_Qing_Tombs%2C_2016-09-07_03.jpg/1280px-Western_Qing_Tombs%2C_2016-09-07_03.jpg',
  'bd-baiyangdian-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Baiyangdian_Lake.JPG/1280px-Baiyangdian_Lake.JPG',
  'bd-yesanpo-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Yesanpo.jpg/1280px-Yesanpo.jpg',
  'ts-lunan-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/South_Lake_of_Tangshan_1.jpg/1280px-South_Lake_of_Tangshan_1.jpg',
  'ts-nanhu': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/South_Lake_of_Tangshan_1.jpg/1280px-South_Lake_of_Tangshan_1.jpg',
  'ts-qingdongling': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Eastern_Qing_Tombs.jpg/1280px-Eastern_Qing_Tombs.jpg',
  'ts-qianxi-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Xifengkou-Great-Wall-Qianxi-Tangshan-China.jpg/1280px-Xifengkou-Great-Wall-Qianxi-Tangshan-China.jpg',
  'ts-laoting-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Beidaihe_panorama_from_the_south.jpg/1280px-Beidaihe_panorama_from_the_south.jpg',
  'zhangye-danxia': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Zhangye_National_Geopark_5.jpg/1280px-Zhangye_National_Geopark_5.jpg',
  'zhangye-danxia-loop': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Zhangye_National_Geopark_5.jpg/1280px-Zhangye_National_Geopark_5.jpg',
  'zhenyuan-oldtown': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Guizhou_Zhenyuan_Ancient_Town4_%28cropped%29.jpg/1280px-Guizhou_Zhenyuan_Ancient_Town4_%28cropped%29.jpg',
  'zhenyuan-or-qiandongnan': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Guizhou_Zhenyuan_Ancient_Town4_%28cropped%29.jpg/1280px-Guizhou_Zhenyuan_Ancient_Town4_%28cropped%29.jpg',
  'zhongwei-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Shapotou.jpg/1280px-Shapotou.jpg',
  'zhuhai-lover-road': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Zhuhai.jpg/1280px-Zhuhai.jpg',
  'zhuhai-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Zhuhai.jpg/1280px-Zhuhai.jpg',
  'zhujiajiao-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Zhujiajiao_Town.jpg/1280px-Zhujiajiao_Town.jpg',
  // coverage wave 20260802
  'wh-wuchang-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Wuhan_from_Yellow_Crane_Tower.jpg/1280px-Wuhan_from_Yellow_Crane_Tower.jpg',
  'wh-yellow-crane': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Yellow_Crane_Tower_61469-Wuhan_%2849149984218%29.jpg/1280px-Yellow_Crane_Tower_61469-Wuhan_%2849149984218%29.jpg',
  'wh-east-lake': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Snake_Hill_in_Wuhan_%28Hubei%2C_China%29%2C_seen_from_the_west.jpg/1280px-Snake_Hill_in_Wuhan_%28Hubei%2C_China%29%2C_seen_from_the_west.jpg',
  'wh-hubei-museum': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Wuhan_from_Yellow_Crane_Tower.jpg/1280px-Wuhan_from_Yellow_Crane_Tower.jpg',
  'wh-jianghan-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Wuhan_from_Yellow_Crane_Tower.jpg/1280px-Wuhan_from_Yellow_Crane_Tower.jpg',
  'cs-xiangjiang-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Orange_Isle.jpg/1280px-Orange_Isle.jpg',
  'cs-ningxiang-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Yuelu_Academy.jpg/1280px-Yuelu_Academy.jpg',
  'zz-jinshui-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/27427-Luoyang_%2849067744628%29.jpg/1280px-27427-Luoyang_%2849067744628%29.jpg',
  'zz-yellow-river': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/27427-Luoyang_%2849067744628%29.jpg/1280px-27427-Luoyang_%2849067744628%29.jpg',
  'zz-shaolin-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Shaolin_Monastery.jpg/1280px-Shaolin_Monastery.jpg',
  'zz-henan-museum-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Iron_Pagoda.jpg/1280px-Iron_Pagoda.jpg',
  'hf-baohe-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Tunxi_Old_Street.jpg/1280px-Tunxi_Old_Street.jpg',
  'hf-swan-lake': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Tunxi_Old_Street.jpg/1280px-Tunxi_Old_Street.jpg',
  'hf-sanhe-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Huangshan_pic_4.jpg/1280px-Huangshan_pic_4.jpg',
  'hf-anhui-museum-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Tunxi_Old_Street.jpg/1280px-Tunxi_Old_Street.jpg',
  'fz-gulou-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Kaiyuan_Temple_%28Quanzhou%29.jpg/1280px-Kaiyuan_Temple_%28Quanzhou%29.jpg',
  'fz-sanfang': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Xiamen.jpg/1280px-Xiamen.jpg',
  'fz-west-lake-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Xiamen.jpg/1280px-Xiamen.jpg',
  'fz-rongcheng-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Kaiyuan_Temple_%28Quanzhou%29.jpg/1280px-Kaiyuan_Temple_%28Quanzhou%29.jpg',
  'nc-honggutan-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Wuyuan_Jiangxi.jpg/1280px-Wuyuan_Jiangxi.jpg',
  'nc-tengwang': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Wuyuan_Jiangxi.jpg/1280px-Wuyuan_Jiangxi.jpg',
  'nc-qiushui': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Wuyuan_Jiangxi.jpg/1280px-Wuyuan_Jiangxi.jpg',
  'nc-bayi-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Wuyuan_Jiangxi.jpg/1280px-Wuyuan_Jiangxi.jpg',
  'ty-yingze-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Taiyuan_Shanxi_China.jpg/1280px-Taiyuan_Shanxi_China.jpg',
  'ty-jinci': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Pingyao_40.JPG/1280px-Pingyao_40.JPG',
  'ty-shanxi-museum': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Taiyuan_Shanxi_China.jpg/1280px-Taiyuan_Shanxi_China.jpg',
  'ty-fenhe-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Taiyuan_Shanxi_China.jpg/1280px-Taiyuan_Shanxi_China.jpg',
  'sz-nanshan-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Shenzhen_Bay_Bridge_To_HK_on_Shenzhen_Side.jpg/1280px-Shenzhen_Bay_Bridge_To_HK_on_Shenzhen_Side.jpg',
  'sz-shenzhen-bay': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Shenzhen_Bay_Bridge_To_HK_on_Shenzhen_Side.jpg/1280px-Shenzhen_Bay_Bridge_To_HK_on_Shenzhen_Side.jpg',
  'sz-oct-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Canton_Tower_20241027.jpg/1280px-Canton_Tower_20241027.jpg',
  'sz-dameisha-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Shenzhen_Bay_Bridge_To_HK_on_Shenzhen_Side.jpg/1280px-Shenzhen_Bay_Bridge_To_HK_on_Shenzhen_Side.jpg',
  'jn-lishi-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Jinan_Baotu_Spring-20150519-RM-165055.jpg/1280px-Jinan_Baotu_Spring-20150519-RM-165055.jpg',
  'jn-baotu': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Jinan_Baotu_Spring-20150519-RM-165055.jpg/1280px-Jinan_Baotu_Spring-20150519-RM-165055.jpg',
  'jn-daming': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Jinan_Baotu_Spring-20150519-RM-165055.jpg/1280px-Jinan_Baotu_Spring-20150519-RM-165055.jpg',
  'jn-quancheng-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Jinan_Baotu_Spring-20150519-RM-165055.jpg/1280px-Jinan_Baotu_Spring-20150519-RM-165055.jpg',
  'cc-chaoyang-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Yanji.jpg/1280px-Yanji.jpg',
  'cc-puppet-palace': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Yanji.jpg/1280px-Yanji.jpg',
  'cc-nanhu': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/%E4%BB%8E%E9%95%BF%E7%99%BD%E5%B1%B1%E8%A5%BF%E5%9D%A1%E7%9C%8B%E5%A4%A9%E6%B1%A0-2017-08-24_1.jpg/1280px-%E4%BB%8E%E9%95%BF%E7%99%BD%E5%B1%B1%E8%A5%BF%E5%9D%A1%E7%9C%8B%E5%A4%A9%E6%B1%A0-2017-08-24_1.jpg',
  'cc-cultural-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Yanji.jpg/1280px-Yanji.jpg',
  'nj-xuanwu-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Nanjing_Museum.jpg/1280px-Nanjing_Museum.jpg',
  'nj-museum': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Nanjing_Museum.jpg/1280px-Nanjing_Museum.jpg',
  'nj-xuanwu-lake': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Humble_Administrator%27s_Garden_2015.JPG/1280px-Humble_Administrator%27s_Garden_2015.JPG',
  'nj-zijin-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Nanjing_Museum.jpg/1280px-Nanjing_Museum.jpg',
  'gy-nanming-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Guiyang.jpg/1280px-Guiyang.jpg',
  'gy-jiaxiu': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Guiyang.jpg/1280px-Guiyang.jpg',
  'gy-qianling-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Huangguoshu_Waterfall.jpg/1280px-Huangguoshu_Waterfall.jpg',
  'gy-museum-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Guiyang.jpg/1280px-Guiyang.jpg',
  'nn-qingxiu-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Nanning.jpg/1280px-Nanning.jpg',
  'nn-qingxiu-mountain': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Nanning.jpg/1280px-Nanning.jpg',
  'nn-yongjiang': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Nanning.jpg/1280px-Nanning.jpg',
  'nn-museum-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Detian_Falls.jpg/1280px-Detian_Falls.jpg',
  'hk-longhua-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Sanya_Bay_panorama.jpg/1280px-Sanya_Bay_panorama.jpg',
  'hk-qilou': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Sanya_Bay_panorama.jpg/1280px-Sanya_Bay_panorama.jpg',
  'hk-west-coast': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Sanya_Bay_panorama.jpg/1280px-Sanya_Bay_panorama.jpg',
  'hk-volcano-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Sanya_Bay_panorama.jpg/1280px-Sanya_Bay_panorama.jpg',
  'km-cuihu-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Kunming.jpg/1280px-Kunming.jpg',
  'km-cuihu': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Kunming.jpg/1280px-Kunming.jpg',
  'km-dianchi': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Kunming.jpg/1280px-Kunming.jpg',
  'km-xishan-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Kunming.jpg/1280px-Kunming.jpg',
  'lz-bayi-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Shergyla_Mountain%2C_Nyingchi%2C_Tibet_Banner.jpg/1280px-Shergyla_Mountain%2C_Nyingchi%2C_Tibet_Banner.jpg',
  'lz-lulang': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Shergyla_Mountain%2C_Nyingchi%2C_Tibet_Banner.jpg/1280px-Shergyla_Mountain%2C_Nyingchi%2C_Tibet_Banner.jpg',
  'lz-yarlung-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Shergyla_Mountain%2C_Nyingchi%2C_Tibet_Banner.jpg/1280px-Shergyla_Mountain%2C_Nyingchi%2C_Tibet_Banner.jpg',
  'lz-buffer-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Shergyla_Mountain%2C_Nyingchi%2C_Tibet_Banner.jpg/1280px-Shergyla_Mountain%2C_Nyingchi%2C_Tibet_Banner.jpg',
  'g318-lhasa-adapt': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Potala_palace23.jpg/1280px-Potala_palace23.jpg',
  'g318-road-day': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Shergyla_Mountain%2C_Nyingchi%2C_Tibet_Banner.jpg/1280px-Shergyla_Mountain%2C_Nyingchi%2C_Tibet_Banner.jpg',
  'g318-nyingchi-stay': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Shergyla_Mountain%2C_Nyingchi%2C_Tibet_Banner.jpg/1280px-Shergyla_Mountain%2C_Nyingchi%2C_Tibet_Banner.jpg',
  'g318-exit': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Potala_Palace_HQ.jpg/1280px-Potala_Palace_HQ.jpg',
  'g318e-chengdu-buffer': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Giant_Panda_at_Chengdu.jpg/1280px-Giant_Panda_at_Chengdu.jpg',
  'g318e-kangding': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Mount_Qingcheng.jpg/1280px-Mount_Qingcheng.jpg',
  'g318e-xinduqiao-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Xinduqiao.jpg/1280px-Xinduqiao.jpg',
  'g318e-descend': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Giant_Panda_at_Chengdu.jpg/1280px-Giant_Panda_at_Chengdu.jpg',
  'jn-hangzhou-gate': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/West_Lake%2C_Hangzhou_2025.jpg/1280px-West_Lake%2C_Hangzhou_2025.jpg',
  'jn-wuzhen': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/1_wuzhen_aerial_2023.jpg/1280px-1_wuzhen_aerial_2023.jpg',
  'jn-xitang-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Bridge_in_Wuzhen_03.JPG/1280px-Bridge_in_Wuzhen_03.JPG',
  'jn-exit': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/West_Lake%2C_Hangzhou_2025.jpg/1280px-West_Lake%2C_Hangzhou_2025.jpg',
  'le-leshan-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Leshan_Giant_Buddha%2C_20161102.jpg/1280px-Leshan_Giant_Buddha%2C_20161102.jpg',
  'le-giant-buddha': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Leshan_Giant_Buddha%2C_20161102.jpg/1280px-Leshan_Giant_Buddha%2C_20161102.jpg',
  'le-emei-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Mount_Qingcheng.jpg/1280px-Mount_Qingcheng.jpg',
  'le-back-chengdu': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Giant_Panda_at_Chengdu.jpg/1280px-Giant_Panda_at_Chengdu.jpg',
  'hrb-daoli-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Saint_Sophia_Cathedral_in_Harbin.jpg/1280px-Saint_Sophia_Cathedral_in_Harbin.jpg',
  'hrb-central-street': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Saint_Sophia_Cathedral_in_Harbin.jpg/1280px-Saint_Sophia_Cathedral_in_Harbin.jpg',
  'hrb-songhua': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Songhua_River.jpg/1280px-Songhua_River.jpg',
  'hrb-sun-island-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Songhua_River.jpg/1280px-Songhua_River.jpg',
  'hh-city-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Hulunbuir.jpg/1280px-Hulunbuir.jpg',
  'hh-museum': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Hulunbuir.jpg/1280px-Hulunbuir.jpg',
  'hh-xilamuren-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Hulunbuir.jpg/1280px-Hulunbuir.jpg',
  'hh-buffer-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Hulunbuir.jpg/1280px-Hulunbuir.jpg',
  // coverage wave 20260802b stops
  'wx-liangxi-base':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/%E6%97%A0%E9%94%A1%E9%BC%8B%E5%A4%B4%E6%B8%9A%2C_2007-01-02.jpg/1280px-%E6%97%A0%E9%94%A1%E9%BC%8B%E5%A4%B4%E6%B8%9A%2C_2007-01-02.jpg',
  'wx-yuantouzhu':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Turtle_Head_Park_%E9%BB%BF%E9%A0%AD%E8%AF%B8%E5%85%AC%E5%9C%92_-_panoramio.jpg/1280px-Turtle_Head_Park_%E9%BB%BF%E9%A0%AD%E8%AF%B8%E5%85%AC%E5%9C%92_-_panoramio.jpg',
  'wx-liyuan':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Liyuan_Garden%2C_Wuxi%286936570366%29.jpg/1280px-Liyuan_Garden%2C_Wuxi%286936570366%29.jpg',
  'wx-canal-optional':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/%E6%97%A0%E9%94%A1%E5%8F%A4%E8%BF%90%E6%B2%B3.jpg/1280px-%E6%97%A0%E9%94%A1%E5%8F%A4%E8%BF%90%E6%B2%B3.jpg',
  'nb-haishu-base':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Tianyi_Pavilion%2C_Ningbo.jpg/1280px-Tianyi_Pavilion%2C_Ningbo.jpg',
  'nb-tianyige':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Tianyi_Pavilion%2C_Ningbo.jpg/1280px-Tianyi_Pavilion%2C_Ningbo.jpg',
  'nb-old-bund':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Ningbo_Old_Bund_in_Daytime.JPG/1280px-Ningbo_Old_Bund_in_Daytime.JPG',
  'nb-dongqian-optional':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/%E4%B8%9C%E9%92%B1%E6%B9%9620211030_02.jpg/1280px-%E4%B8%9C%E9%92%B1%E6%B9%9620211030_02.jpg',
  'dg-guancheng-base':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Arcade-in-Guancheng-Subdistrict.jpg/1280px-Arcade-in-Guancheng-Subdistrict.jpg',
  'dg-keyuan':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/20160210_Keyuan%2C_Dongguan_01.jpg/1280px-20160210_Keyuan%2C_Dongguan_01.jpg',
  'dg-humen-museum':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Opium_War_Museum_11460-Humen_%2849021747137%29.jpg/1280px-Opium_War_Museum_11460-Humen_%2849021747137%29.jpg',
  'dg-songshan-optional':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/2025-12-02_Boxes_Art_Museum_of_Songshan_Lake_in_Dongguan.jpg/1280px-2025-12-02_Boxes_Art_Museum_of_Songshan_Lake_in_Dongguan.jpg',
  'fs-chancheng-base':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Foshan_Ancestral_Temple_39539-Foshan_%2849042475643%29.jpg/1280px-Foshan_Ancestral_Temple_39539-Foshan_%2849042475643%29.jpg',
  'fs-zumiao':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Foshan_Ancestral_Temple_39539-Foshan_%2849042475643%29.jpg/1280px-Foshan_Ancestral_Temple_39539-Foshan_%2849042475643%29.jpg',
  'fs-lingnan-tiandi':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/%E4%BD%9B%E5%B1%B1%E4%B8%9C%E5%8D%8E%E9%87%8C.JPG/1280px-%E4%BD%9B%E5%B1%B1%E4%B8%9C%E5%8D%8E%E9%87%8C.JPG',
  'fs-liangyuan-optional':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/%E4%BD%9B%E5%B1%B1%E6%A2%81%E5%9B%AD.JPG/1280px-%E4%BD%9B%E5%B1%B1%E6%A2%81%E5%9B%AD.JPG',
  'g214-xining-adapt':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Xining_-_Dongguan_mosque_Minaret_2024.jpg/1280px-Xining_-_Dongguan_mosque_Minaret_2024.jpg',
  'g214-xining-city':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Xining_-_Dongguan_mosque_Minaret_2024.jpg/1280px-Xining_-_Dongguan_mosque_Minaret_2024.jpg',
  'g214-gonghe-optional':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Qinghai_Lake.jpg/1280px-Qinghai_Lake.jpg',
  'g214-buffer-optional':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Qinghai_Lake.jpg/1280px-Qinghai_Lake.jpg',
  'ya-baota-base':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Baota_Mountain.jpg/1280px-Baota_Mountain.jpg',
  'ya-memorial':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/2023-10-09_%E5%BB%B6%E5%AE%89%E9%9D%A9%E5%91%BD%E7%BA%AA%E5%BF%B5%E9%A6%86_Yan%27an_Revolutionary_Memorial_Hall_01.jpg/1280px-2023-10-09_%E5%BB%B6%E5%AE%89%E9%9D%A9%E5%91%BD%E7%BA%AA%E5%BF%B5%E9%A6%86_Yan%27an_Revolutionary_Memorial_Hall_01.jpg',
  'ya-pagoda-hill':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Baota_Mountain.jpg/1280px-Baota_Mountain.jpg',
  'ya-zaoyuan-optional':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/2023-10-09_%E6%9E%A3%E5%9B%AD%E9%9D%A9%E5%91%BD%E6%97%A7%E5%9D%80%E6%9C%B1%E5%BE%B7%E6%97%A7%E5%B1%85_Former_Residence_of_Zhu_De%2C_Zaoyuan_01.jpg/1280px-2023-10-09_%E6%9E%A3%E5%9B%AD%E9%9D%A9%E5%91%BD%E6%97%A7%E5%9D%80%E6%9C%B1%E5%BE%B7%E6%97%A7%E5%B1%85_Former_Residence_of_Zhu_De%2C_Zaoyuan_01.jpg',
  'bj-yiheyuan-lake':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/%E5%8D%81%E4%B8%83%E5%AD%94%E6%A1%A5.JPG/1280px-%E5%8D%81%E4%B8%83%E5%AD%94%E6%A1%A5.JPG',
  'bj-yiheyuan-corridor':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/The_Long_Corridor%2C_Beijing_Summer_Palace_%2850600265678%29.jpg/1280px-The_Long_Corridor%2C_Beijing_Summer_Palace_%2850600265678%29.jpg',
  'bj-yuanmingyuan-optional':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Ruins_of_Old_Summer_Palace_%28Yuanmingyuan%29_-_2019_-_11.jpg/1280px-Ruins_of_Old_Summer_Palace_%28Yuanmingyuan%29_-_2019_-_11.jpg',
  'bj-beihai-optional':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Beihai_Park_Br%C3%BCcke-20110104-RM-110001.jpg/1280px-Beihai_Park_Br%C3%BCcke-20110104-RM-110001.jpg',
  'qzr-xining-adapt':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Xining_-_Dongguan_mosque_Minaret_2024.jpg/1280px-Xining_-_Dongguan_mosque_Minaret_2024.jpg',
  'qzr-train':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Qinghai%E2%80%93Tibet_Railway_%28Qingzang_Railway%29_%2837148422090%29.jpg/1280px-Qinghai%E2%80%93Tibet_Railway_%28Qingzang_Railway%29_%2837148422090%29.jpg',
  'qzr-lhasa-rest':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Potala_palace23.jpg/1280px-Potala_palace23.jpg',
  'qzr-lhasa-taste-optional':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Potala_Palace_HQ.jpg/1280px-Potala_Palace_HQ.jpg',
  'qzr-exit':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Qingzang_railway_Train_01.jpg/1280px-Qingzang_railway_Train_01.jpg',
  // coverage wave 20260802c stops
  'jhc-tianjin-haihe':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Tianjin_Eye_and_Tianjin.jpg/1280px-Tianjin_Eye_and_Tianjin.jpg',
  'jhc-qingdao-coast':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Qingdao_Harbour_51341-Qingdao_%2849055637186%29.jpg/1280px-Qingdao_Harbour_51341-Qingdao_%2849055637186%29.jpg',
  'jhc-suzhou-garden':
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Humble_Administrator%27s_Garden_2015.JPG/1280px-Humble_Administrator%27s_Garden_2015.JPG",
  'jhc-shanghai-bund':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/The_Bund_2.jpg/1280px-The_Bund_2.jpg',
  'jhc-exit-beijing':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/%E5%8D%81%E4%B8%83%E5%AD%94%E6%A1%A5.JPG/1280px-%E5%8D%81%E4%B8%83%E5%AD%94%E6%A1%A5.JPG',
  'g214s-adapt':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Roofs_of_Shangri-La_Old_Town_1.JPG/1280px-Roofs_of_Shangri-La_Old_Town_1.JPG',
  'g214s-dukezong':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Roofs_of_Shangri-La_Old_Town_1.JPG/1280px-Roofs_of_Shangri-La_Old_Town_1.JPG',
  'g214s-pudacuo-optional':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Bita_Lake%2C_Potatso_%28Pudacuo%29_National_Park%2C_Diqing_-_panoramio.jpg/1280px-Bita_Lake%2C_Potatso_%28Pudacuo%29_National_Park%2C_Diqing_-_panoramio.jpg',
  'g214s-exit':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Roofs_of_Shangri-La_Old_Town_1.JPG/1280px-Roofs_of_Shangri-La_Old_Town_1.JPG',
};

/** Neutral China fallback (Great Wall) — never foreign Unsplash scenery. */
export const PLACE_IMAGE_FALLBACK = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Great_Wall_of_China_July_2006.JPG/1280px-Great_Wall_of_China_July_2006.JPG';

