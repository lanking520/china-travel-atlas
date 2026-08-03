/** Place-accurate images: Wikimedia Commons thumbs + local AI fallbacks.
 * Commons batch: research/scripts/resolve-place-images.py
 * Session overlays: research/audits/image-coverage-progress-20260802.md
 * AI fallbacks: public/generated/places/{id}.png (示意生成图)
 */

/** Local AI-generated covers (示意生成图). Paths are site-root; basePath applied in lib/place-images. */
export const PLACE_GENERATED_IDS = new Set<string>([
  // Commons/Openverse 无适老可用风景 → 示意生成图（优于错地标 soft reuse）
  'qiziwan-optional', // 昌江棋子湾；勿用三亚/东线沙滩顶替
  'ts-laoting-optional', // 乐亭岸线；勿用北戴河实拍或青海金银滩
  'datong-zuoyun-optional', // 左云县域；勿用云冈/教堂废墟顶替
]);

/**
 * Same-corridor / parent-scenic soft reuses — captions get 「同区示意」.
 * Prefer upgrading to place-accurate Commons when found; do not use wrong-province stand-ins.
 */
export const PLACE_SOFT_IDS = new Set<string>([
  // Residual soft→Commons 20260802: 14 upgraded to dedicated place-accurate files.
  // Gen trio (棋子湾/乐亭/左云) still PLACE_GENERATED_IDS — no scenic Commons.
  'yc-museum-optional', // 运城馆线 ↔ 关帝庙同廊（Commons 仍无馆外景）
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
  'compose-shandong-qingdao-yantai': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Qingdao_Harbour_51341-Qingdao_%2849055637186%29.jpg/1280px-Qingdao_Harbour_51341-Qingdao_%2849055637186%29.jpg',
  'huabei-shandong-taishan': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Mount_Tai.jpg/1280px-Mount_Tai.jpg',
  'huabei-shanxi-loop': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Yungang_Grottoes.jpg/1280px-Yungang_Grottoes.jpg',
  'huabei-shanxi-pingyao-deep': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Pingyao_40.JPG/1280px-Pingyao_40.JPG',
  'huadong-hangzhou-suzhou': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/West_Lake%2C_Hangzhou_2025.jpg/1280px-West_Lake%2C_Hangzhou_2025.jpg',
  'huadong-huangshan-hui': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Huangshan_pic_4.jpg/1280px-Huangshan_pic_4.jpg',
  'huadong-jiangsu-yangzhou': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Slender_West_Lake.jpg/1280px-Slender_West_Lake.jpg',
  'huadong-shanghai-short': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/The_Bund_2.jpg/1280px-The_Bund_2.jpg',
  'compose-suhan-hangzhou-huangshan': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/West_Lake%2C_Hangzhou_2025.jpg/1280px-West_Lake%2C_Hangzhou_2025.jpg',
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
  'huanan-xiamen-winter': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Gulangyu_Island.jpg/1280px-Gulangyu_Island.jpg',
  'huanan-zhuhai-3d': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Zhuhai.jpg/1280px-Zhuhai.jpg',
  'huazhong-hunan-changsha': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Yuelu_Academy.jpg/1280px-Yuelu_Academy.jpg',
  'huazhong-luoyang-kaifeng': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/27427-Luoyang_%2849067744628%29.jpg/1280px-27427-Luoyang_%2849067744628%29.jpg',
  'huazhong-henan-luoyang-county':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/27495-Luoyang%2C_White_Horse_Temple.jpg/1280px-27495-Luoyang%2C_White_Horse_Temple.jpg',
  'huazhong-henan-kaifeng':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/%E5%BC%80%E5%B0%81%E9%93%81%E5%A1%94.jpg/1280px-%E5%BC%80%E5%B0%81%E9%93%81%E5%A1%94.jpg',
  'huadong-jiangsu-suzhou-county':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Zhouzhuang_water_town.jpg/1280px-Zhouzhuang_water_town.jpg',
  'xinan-yunnan-dali-daytrips':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/%E5%89%91%E5%B7%9D%E6%B2%99%E6%BA%AA%E5%8F%A4%E9%95%87.jpg/1280px-%E5%89%91%E5%B7%9D%E6%B2%99%E6%BA%AA%E5%8F%A4%E9%95%87.jpg',
  // prefecture wave 20260802e covers
  'huabei-shanxi-xinzhou-county':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Barbican_gate_of_Yanmen_Pass_%2820250712165843%29.jpg/1280px-Barbican_gate_of_Yanmen_Pass_%2820250712165843%29.jpg',
  'huadong-jiangsu-yangzhou-county':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Yucheng_Postal_Stop_entrance.jpg/1280px-Yucheng_Postal_Stop_entrance.jpg',
  'huadong-jiangsu-zhenjiang':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/%E9%95%87%E6%B1%9F%E9%87%91%E5%B1%B1%E5%AF%BA.jpg/1280px-%E9%95%87%E6%B1%9F%E9%87%91%E5%B1%B1%E5%AF%BA.jpg',
  'huabei-neimeng-aershan':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/%E9%98%BF%E5%B0%94%E5%B1%B1%E5%A4%A9%E6%B1%A0_%E5%85%A8%E6%99%AF.jpg/1280px-%E9%98%BF%E5%B0%94%E5%B1%B1%E5%A4%A9%E6%B1%A0_%E5%85%A8%E6%99%AF.jpg',
  'huazhong-henan-anyang':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Exterior%2C_Yinxu_Museum_20241002-A.jpg/1280px-Exterior%2C_Yinxu_Museum_20241002-A.jpg',
  'huazhong-henan-jiaozuo':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/%E6%B2%B3%E5%8D%97%E7%84%A6%E4%BD%9C%E4%BA%91%E5%8F%B0%E5%B1%B1_-_panoramio.jpg/1280px-%E6%B2%B3%E5%8D%97%E7%84%A6%E4%BD%9C%E4%BA%91%E5%8F%B0%E5%B1%B1_-_panoramio.jpg',
  'huadong-jiangsu-nantong':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Nantong_skyline_flanking_the_Hao_River.jpg/1280px-Nantong_skyline_flanking_the_Hao_River.jpg',
  'huadong-zhejiang-jiaxing':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/%E5%98%89%E5%85%B4%E5%8D%97%E6%B9%96%2C_2021-10-30_03.jpg/1280px-%E5%98%89%E5%85%B4%E5%8D%97%E6%B9%96%2C_2021-10-30_03.jpg',
  'huadong-zhejiang-huzhou':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/%E5%8D%97%E6%B5%94%E5%8F%A4%E9%95%87%E5%B0%8F%E8%8E%B2%E5%BA%84.jpg/1280px-%E5%8D%97%E6%B5%94%E5%8F%A4%E9%95%87%E5%B0%8F%E8%8E%B2%E5%BA%84.jpg',
  'huazhong-hunan-yueyang':
    'https://upload.wikimedia.org/wikipedia/commons/1/1b/Frontal_view_of_Yueyang_Tower%2C_Hunan%2C_China1.jpg',
  'huabei-hebei-handan':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/%E6%AD%A6%E7%81%B5%E4%B8%9B%E5%8F%B0_1.jpg/1280px-%E6%AD%A6%E7%81%B5%E4%B8%9B%E5%8F%B0_1.jpg',
  // prefecture wave 20260802f covers
  'huabei-shanxi-yuncheng':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/%E8%BF%90%E5%9F%8E%E7%9B%90%E6%B9%96.jpg/1280px-%E8%BF%90%E5%9F%8E%E7%9B%90%E6%B9%96.jpg',
  'huabei-shanxi-linfen':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/%E5%B9%BF%E8%83%9C%E5%AF%BA_03.JPG/1280px-%E5%B9%BF%E8%83%9C%E5%AF%BA_03.JPG',
  'huabei-shandong-weifang':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/%E5%8D%81%E7%AC%8F%E5%9B%AD%E9%97%A8%E5%8F%A3.jpg/1280px-%E5%8D%81%E7%AC%8F%E5%9B%AD%E9%97%A8%E5%8F%A3.jpg',
  'huazhong-hubei-jingzhou':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/%E8%8D%86%E5%B7%9E%E4%B8%9C%E9%97%A8%E5%8F%A4%E5%9F%8E%E5%A2%99.jpg/1280px-%E8%8D%86%E5%B7%9E%E4%B8%9C%E9%97%A8%E5%8F%A4%E5%9F%8E%E5%A2%99.jpg',
  'huadong-anhui-xuancheng':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Jingxian_Zhaji_2017.08.19_17-24-24.jpg/1280px-Jingxian_Zhaji_2017.08.19_17-24-24.jpg',
  'huazhong-shaanxi-hanzhong': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Hantai%2C_Hanzhong%2C_Shaanxi%2C_China_-_panoramio_%286%29.jpg/1280px-Hantai%2C_Hanzhong%2C_Shaanxi%2C_China_-_panoramio_%286%29.jpg',
  'huazhong-wudang-3d': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Wudangshan_pic_7.jpg/1280px-Wudangshan_pic_7.jpg',
  'huazhong-xian-slow': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Xi%27an_City_Wall.jpg/1280px-Xi%27an_City_Wall.jpg',
  'huazhong-yichang-three-gorges': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Three_Gorges_Dam.jpg/1280px-Three_Gorges_Dam.jpg',
  'huazhong-zhangjiajie': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/1_tianzishan_wulingyuan_zhangjiajie_2012.jpg/1280px-1_tianzishan_wulingyuan_zhangjiajie_2012.jpg',
  'mutianyu-day': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Great_Wall_of_China_July_2006.JPG/1280px-Great_Wall_of_China_July_2006.JPG',
  'compose-chuandian-chengdu-dali-lijiang': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/%E5%A4%A7%E7%90%86%E5%8F%A4%E5%9F%8E%E5%8D%97%E9%97%A8-2064560.jpg/1280px-%E5%A4%A7%E7%90%86%E5%8F%A4%E5%9F%8E%E5%8D%97%E9%97%A8-2064560.jpg',
  'leg-dali-erhai': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/%E5%A4%A7%E7%90%86%E5%8F%A4%E5%9F%8E%E5%8D%97%E9%97%A8-2064560.jpg/1280px-%E5%A4%A7%E7%90%86%E5%8F%A4%E5%9F%8E%E5%8D%97%E9%97%A8-2064560.jpg',
  'leg-lijiang-taste': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Lijiang_Old_Town.jpg/1280px-Lijiang_Old_Town.jpg',
  'compose-qinggan-xining-hexi': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Qinghai_Lake.jpg/1280px-Qinghai_Lake.jpg',
  'leg-xining-qinghai-lake': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Qinghai_Lake.jpg/1280px-Qinghai_Lake.jpg',
  'compose-silkroad-xian-turpan': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/51714-Terracota-Army.jpg/1280px-51714-Terracota-Army.jpg',
  'leg-xian-terracotta': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/51714-Terracota-Army.jpg/1280px-51714-Terracota-Army.jpg',
  'qingzang-lhasa-slow': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Potala_Palace_HQ.jpg/1280px-Potala_Palace_HQ.jpg',
  'qingzang-qilian-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Menyuan_County.jpg/1280px-Menyuan_County.jpg',
  'qingzang-qinghai-lake': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Qinghai_Lake.jpg/1280px-Qinghai_Lake.jpg',
  'qingzang-shigatse-taste': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Tashilhunpo.jpg/1280px-Tashilhunpo.jpg',
  'qingzang-xining-3d': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Xining_-_Dongguan_mosque_Minaret_2024.jpg/1280px-Xining_-_Dongguan_mosque_Minaret_2024.jpg',
  'tianjin-day': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Tianjin_Eye_and_Tianjin.jpg/1280px-Tianjin_Eye_and_Tianjin.jpg',
  'compose-hexi-dunhuang-zhangye':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Mogao_Caves_%2854376969262%29.jpg/1280px-Mogao_Caves_%2854376969262%29.jpg',
  'leg-dunhuang-mogao':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Mogao_Caves_%2854376969262%29.jpg/1280px-Mogao_Caves_%2854376969262%29.jpg',
  'leg-zhangye-danxia':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Zhangye_National_Geopark_5.jpg/1280px-Zhangye_National_Geopark_5.jpg',
  'xibei-lanzhou-xiahe': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Labrang_Monastery.jpg/1280px-Labrang_Monastery.jpg',
  'xibei-ningxia-3d': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Western_Xia_tombs.jpg/1280px-Western_Xia_tombs.jpg',
  'xibei-ningxia-shapotou': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Shapotou.jpg/1280px-Shapotou.jpg',
  'xibei-xinjiang-duku': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/G217_K939.jpeg/1280px-G217_K939.jpeg',
  'xibei-xinjiang-kashi': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Kashgar.jpg/1280px-Kashgar.jpg',
  'compose-beijiang-sayram-kanas': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Lake_Kanas.jpg/1280px-Lake_Kanas.jpg',
  'leg-kanas': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Lake_Kanas.jpg/1280px-Lake_Kanas.jpg',
  'leg-sayram-lake': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/%E8%B5%9B%E9%87%8C%E6%9C%A8%E6%B9%96%E8%BF%9C%E6%99%AF%EF%BC%8C%E6%91%84%E4%BA%8E%E6%B9%96%E7%95%94%E5%B1%B1%E4%B8%98.jpg/1280px-%E8%B5%9B%E9%87%8C%E6%9C%A8%E6%B9%96%E8%BF%9C%E6%99%AF%EF%BC%8C%E6%91%84%E4%BA%8E%E6%B9%96%E7%95%94%E5%B1%B1%E4%B8%98.jpg',
  'compose-nanjiang-kuqa-kashi':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Kashgar.jpg/1280px-Kashgar.jpg',
  'base-kashi':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Kashgar.jpg/1280px-Kashgar.jpg',
  'base-guilin':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/87318-Li-River.jpg/1280px-87318-Li-River.jpg',
  'base-guiyang':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Guiyang.jpg/1280px-Guiyang.jpg',
  'leg-kuqa-canyon':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Kuqa_May_2007_429.jpg/1280px-Kuqa_May_2007_429.jpg',
  'xibei-xinjiang-turpan': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Turpan_grape_valley.jpg/1280px-Turpan_grape_valley.jpg',
  'xibei-xinjiang-yili': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Nalati_Grassland_1.jpg/1280px-Nalati_Grassland_1.jpg',
  'xinan-chengdu-slow': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Shops_-_Kuanzhai_Alleys_-_Chengdu%2C_China_-_DSC05305.jpg/1280px-Shops_-_Kuanzhai_Alleys_-_Chengdu%2C_China_-_DSC05305.jpg',
  'xinan-chongqing-slow': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Chongqing.jpg/1280px-Chongqing.jpg',
  'leg-chengdu-adapt':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Giant_Panda_at_Chengdu.jpg/1280px-Giant_Panda_at_Chengdu.jpg',
  'compose-chuanxi-chengdu-leshan-jiuzhai':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/1_jiuzhaigou_valley_wu_hua_hai_2011b.jpg/1280px-1_jiuzhaigou_valley_wu_hua_hai_2011b.jpg',
  'xinan-dujiangyan-2d': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/36661-Dujiangyan_%2844634340644%29.jpg/1280px-36661-Dujiangyan_%2844634340644%29.jpg',
  'xinan-guizhou-loop': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Huangguoshu_Waterfall.jpg/1280px-Huangguoshu_Waterfall.jpg',
  'xinan-guizhou-zhenyuan': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Guizhou_Zhenyuan_Ancient_Town4_%28cropped%29.jpg/1280px-Guizhou_Zhenyuan_Ancient_Town4_%28cropped%29.jpg',
  'compose-yunnan-dali-lijiang': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/%E5%A4%A7%E7%90%86%E5%8F%A4%E5%9F%8E%E5%8D%97%E9%97%A8-2064560.jpg/1280px-%E5%A4%A7%E7%90%86%E5%8F%A4%E5%9F%8E%E5%8D%97%E9%97%A8-2064560.jpg',
  'yunnan-dianxi-tengchong': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Tengchong.jpg/1280px-Tengchong.jpg',
  'yunnan-xishuangbanna-winter':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/City_of_Jinghong%2C_Yunnan%2C_China_in_2015.JPG/1280px-City_of_Jinghong%2C_Yunnan%2C_China_in_2015.JPG',
  'leg-hekou-border':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Hekou%2C_Yunnan%2C_China.jpg/1280px-Hekou%2C_Yunnan%2C_China.jpg',
  'leg-sapa-vietnam':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Sa_Pa_Rice_Terrace_I.jpg/1280px-Sa_Pa_Rice_Terrace_I.jpg',
  'compose-yunnan-hekou-sapa':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Sa_Pa_Rice_Terrace_I.jpg/1280px-Sa_Pa_Rice_Terrace_I.jpg',
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
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Changchun_skyline_with_Ji_Tower_-_panoramio.jpg/1280px-Changchun_skyline_with_Ji_Tower_-_panoramio.jpg',
  'huadong-jiangsu-nanjing':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Nanjing_Museum.jpg/1280px-Nanjing_Museum.jpg',
  'xinan-guizhou-guiyang':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Guiyang.jpg/1280px-Guiyang.jpg',
  'huanan-guangxi-nanning':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Nanning.jpg/1280px-Nanning.jpg',
  'huanan-hainan-haikou':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Haikou_Century_Bridge_in_2015.jpg/1280px-Haikou_Century_Bridge_in_2015.jpg',
  'xinan-yunnan-kunming-city':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Kunming.jpg/1280px-Kunming.jpg',
  'qingzang-nyingchi-slow':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Shergyla_Mountain%2C_Nyingchi%2C_Tibet_Banner.jpg/1280px-Shergyla_Mountain%2C_Nyingchi%2C_Tibet_Banner.jpg',
  'compose-qingzang-lhasa-nyingchi':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Shergyla_Mountain%2C_Nyingchi%2C_Tibet_Banner.jpg/1280px-Shergyla_Mountain%2C_Nyingchi%2C_Tibet_Banner.jpg',
  'xinan-sichuan-g318-east':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Xinduqiao.jpg/1280px-Xinduqiao.jpg',
  'huadong-jiangnan-water-towns':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/1_wuzhen_aerial_2023.jpg/1280px-1_wuzhen_aerial_2023.jpg',
  'xinan-sichuan-leshan-emei':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Leshan_Giant_Buddha%2C_20161102.jpg/1280px-Leshan_Giant_Buddha%2C_20161102.jpg',
  'dongbei-heilongjiang-harbin-summer':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Saint_Sophia_Cathedral_in_Harbin.jpg/1280px-Saint_Sophia_Cathedral_in_Harbin.jpg',
  'huabei-neimeng-hohhot':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Da_Zhao_Temple_in_Hohhot3.JPG/1280px-Da_Zhao_Temple_in_Hohhot3.JPG',
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
  'leg-qingzang-railway':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Qingzang_railway_Train_01.jpg/1280px-Qingzang_railway_Train_01.jpg',
  'compose-qingzang-railway-lhasa':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Qingzang_railway_Train_01.jpg/1280px-Qingzang_railway_Train_01.jpg',
  // coverage wave 20260802c
  'compose-jinghu-coast':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Qingdao_Harbour_51341-Qingdao_%2849055637186%29.jpg/1280px-Qingdao_Harbour_51341-Qingdao_%2849055637186%29.jpg',
  'leg-qingdao-coast':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Qingdao_Harbour_51341-Qingdao_%2849055637186%29.jpg/1280px-Qingdao_Harbour_51341-Qingdao_%2849055637186%29.jpg',
  'leg-qingdao-laoshan':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Laoshan_rocky_beach_near_taiqing_gong.jpg/1280px-Laoshan_rocky_beach_near_taiqing_gong.jpg',
  'yunnan-g214-shangri-la-taste':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Roofs_of_Shangri-La_Old_Town_1.JPG/1280px-Roofs_of_Shangri-La_Old_Town_1.JPG',
  // famous stitch 20260802 (new ids)
  'xinan-sichuan-jiuzhaigou':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/1_jiuzhaigou_valley_wu_hua_hai_2011b.jpg/1280px-1_jiuzhaigou_valley_wu_hua_hai_2011b.jpg',
  'huazhong-hunan-fenghuang':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Hunan_Fenghuang_County_ancient_town.jpg/1280px-Hunan_Fenghuang_County_ancient_town.jpg',
  'xibei-xinjiang-urumqi-city':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Urumqi_skyline.jpg/1280px-Urumqi_skyline.jpg',
  'huadong-jiangxi-lushan':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Mount_Lu.jpg/1280px-Mount_Lu.jpg',
  'huadong-zhejiang-shaoxing':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Shaoxing_Cityscape.jpg/1280px-Shaoxing_Cityscape.jpg',
  'huabei-shanxi-wutai':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Wutai_shan_temples.jpg/1280px-Wutai_shan_temples.jpg',
  // famous P1 20260802
  'huanan-fujian-wuyi':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Peak_Yunu.jpg/1280px-Peak_Yunu.jpg',
  'huanan-guangxi-beihai':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/BeiHaiYanTan.jpg/1280px-BeiHaiYanTan.jpg',
  'huadong-zhejiang-putuo':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Putuoshan.jpg/1280px-Putuoshan.jpg',
  'huanan-guangdong-kaiping':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Jinjiangli_0004.jpg/1280px-Jinjiangli_0004.jpg',
  'huanan-guangdong-danxia':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/39002-Danxiashan_%2848989060302%29.jpg/1280px-39002-Danxiashan_%2848989060302%29.jpg',
  'huadong-anhui-jiuhua':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Jiuhuashan_yunhai.JPG/1280px-Jiuhuashan_yunhai.JPG',
  'huadong-zhejiang-qiandao':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Thousand_Island_Lake.JPG/1280px-Thousand_Island_Lake.JPG',
  'xinan-chongqing-wulong':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Wulongtianshengsanqiao.JPG/1280px-Wulongtianshengsanqiao.JPG',
  'xinan-guizhou-huangguoshu':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Huangguoshu_Waterfall.jpg/1280px-Huangguoshu_Waterfall.jpg',
  'huadong-jiangsu-changzhou':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Tianning_Temple_with_Tianning_Pagoda.jpg/1280px-Tianning_Temple_with_Tianning_Pagoda.jpg',
  'huadong-zhejiang-wenzhou':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/China2011_Zhejiang_YandangShan.jpg/1280px-China2011_Zhejiang_YandangShan.jpg',
  'huanan-guangdong-huizhou':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Huizhou_West_Lake.jpg/1280px-Huizhou_West_Lake.jpg',
  // famous P2 20260802
  'xinan-guizhou-fanjing':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Fanjingshan-new.jpg/1280px-Fanjingshan-new.jpg',
  'xinan-guizhou-libo':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Xiaoqikong.JPG/1280px-Xiaoqikong.JPG',
  'huazhong-hubei-shennongjia':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/VM_5318_Muyu_Town.jpg/1280px-VM_5318_Muyu_Town.jpg',
  'huazhong-hubei-enshi':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Enshi_grand_canyon.jpg/1280px-Enshi_grand_canyon.jpg',
  'xinan-guizhou-dong-corridor':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Xijiang_Miao_Village.jpg/1280px-Xijiang_Miao_Village.jpg',
  'huanan-guangdong-zhongshan':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Former_Residence_of_Mr._Sun_Yat-sen.jpg/1280px-Former_Residence_of_Mr._Sun_Yat-sen.jpg',
  'xibei-gansu-lanzhou-huanghe':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Lanzhou_Zhongshan_Qiao_2013.12.28_17-26-24.jpg/1280px-Lanzhou_Zhongshan_Qiao_2013.12.28_17-26-24.jpg',
  'huanan-guangdong-chaoshan':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Paifangjie_%28cropped%29.jpg/1280px-Paifangjie_%28cropped%29.jpg',
  'xinan-sichuan-g318-mid':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Luding_Bridge_June_07_350D_127.jpg/1280px-Luding_Bridge_June_07_350D_127.jpg',
};

export const PLACE_STOP_IMAGES: Record<string, string> = {
  'aksu-rest': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Aksu_City.jpg/1280px-Aksu_City.jpg',
  'badaguan': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Badaguan.jpg/1280px-Badaguan.jpg',
  'baisha-lake': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Mt_Kongur_Lake_Karakul_Xinjiang_China.jpg/1280px-Mt_Kongur_Lake_Karakul_Xinjiang_China.jpg',
  'beidaihe-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Beidaihe_panorama_from_the_south.jpg/1280px-Beidaihe_panorama_from_the_south.jpg',
  'beiji-village': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Beijicun.jpg/1280px-Beijicun.jpg',
  'beiling-park': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Zhao_Mausoleum_%28Beiling_Park%29.jpg/1280px-Zhao_Mausoleum_%28Beiling_Park%29.jpg',
  'bingmayong-fast': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/51714-Terracota-Army.jpg/1280px-51714-Terracota-Army.jpg',
  'bishu-shanzhuang': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Chengde_Mountain_Resort_22944-Chengde_%2844830038471%29.jpg/1280px-Chengde_Mountain_Resort_22944-Chengde_%2844830038471%29.jpg',
  'chengde-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Chengde_Mountain_Resort_22944-Chengde_%2844830038471%29.jpg/1280px-Chengde_Mountain_Resort_22944-Chengde_%2844830038471%29.jpg',
  'changli-goldcoast': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Beidaihe_panorama_from_the_south.jpg/1280px-Beidaihe_panorama_from_the_south.jpg',
  'jimo-oldtown': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Qingdao_Harbour_51341-Qingdao_%2849055637186%29.jpg/1280px-Qingdao_Harbour_51341-Qingdao_%2849055637186%29.jpg',
  'laoshan-yangkou': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Laoshan_rocky_beach_near_taiqing_gong.jpg/1280px-Laoshan_rocky_beach_near_taiqing_gong.jpg',
  'ls-dali-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/%E5%A4%A7%E7%90%86%E5%8F%A4%E5%9F%8E%E5%8D%97%E9%97%A8-2064560.jpg/1280px-%E5%A4%A7%E7%90%86%E5%8F%A4%E5%9F%8E%E5%8D%97%E9%97%A8-2064560.jpg',
  'ls-erhai-days': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/%E5%A4%A7%E7%90%86%E5%8F%A4%E5%9F%8E%E5%8D%97%E9%97%A8-2064560.jpg/1280px-%E5%A4%A7%E7%90%86%E5%8F%A4%E5%9F%8E%E5%8D%97%E9%97%A8-2064560.jpg',
  'ls-cangshan-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/%E5%A4%A7%E7%90%86%E5%8F%A4%E5%9F%8E%E5%8D%97%E9%97%A8-2064560.jpg/1280px-%E5%A4%A7%E7%90%86%E5%8F%A4%E5%9F%8E%E5%8D%97%E9%97%A8-2064560.jpg',
  'ls-shaxi-weekend': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Shaxi_Yunnan.jpg/1280px-Shaxi_Yunnan.jpg',
  'ls-kunming-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Kunming.jpg/1280px-Kunming.jpg',
  'ls-dianchi-xishan': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Dianchi.jpg/1280px-Dianchi.jpg',
  'ls-shilin-day': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Shilin_Stone_Forest_01.JPG/1280px-Shilin_Stone_Forest_01.JPG',
  'ls-fuxian-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Dianchi.jpg/1280px-Dianchi.jpg',
  'ls-guilin-hub':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/87318-Li-River.jpg/1280px-87318-Li-River.jpg',
  'ls-guilin-city-days':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/87318-Li-River.jpg/1280px-87318-Li-River.jpg',
  'ls-guilin-yangshuo-radiate':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Yangshuo.jpg/1280px-Yangshuo.jpg',
  'ls-guiyang-hub':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Guiyang.jpg/1280px-Guiyang.jpg',
  'ls-guiyang-city-days':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Guiyang.jpg/1280px-Guiyang.jpg',
  'ls-guiyang-radiate':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Huangguoshu_Waterfall.jpg/1280px-Huangguoshu_Waterfall.jpg',
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
  'putuo-zongcheng': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Putuo_Zongcheng_Temple_20120804.JPG/1280px-Putuo_Zongcheng_Temple_20120804.JPG',
  'qingchui-peak': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/%E7%A3%AC%E9%94%A4%E5%B3%B020120804.JPG/1280px-%E7%A3%AC%E9%94%A4%E5%B3%B020120804.JPG',
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
  'duku-view': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/G217_K939.jpeg/1280px-G217_K939.jpeg',
  'dunhuang-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Mogao_Caves_%2854376969262%29.jpg/1280px-Mogao_Caves_%2854376969262%29.jpg',
  'dunhuang-mogao-loop': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Mogao_Caves_%2854376969262%29.jpg/1280px-Mogao_Caves_%2854376969262%29.jpg',
  'dunhuang-silk': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Mogao_Caves_%2854376969262%29.jpg/1280px-Mogao_Caves_%2854376969262%29.jpg',
  'dushanzi': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/G217_K939.jpeg/1280px-G217_K939.jpeg',
  'erdos-baihe': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/%E4%BB%8E%E9%95%BF%E7%99%BD%E5%B1%B1%E8%A5%BF%E5%9D%A1%E7%9C%8B%E5%A4%A9%E6%B1%A0-2017-08-24_1.jpg/1280px-%E4%BB%8E%E9%95%BF%E7%99%BD%E5%B1%B1%E8%A5%BF%E5%9D%A1%E7%9C%8B%E5%A4%A9%E6%B1%A0-2017-08-24_1.jpg',
  'erguna-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Erguna.jpg/1280px-Erguna.jpg',
  'erguna-riverside': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Erguna.jpg/1280px-Erguna.jpg',
  'erlian-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Erenhot_port.jpg/1280px-Erenhot_port.jpg',
  'erlian-guomen': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Erenhot_port.jpg/1280px-Erenhot_port.jpg',
  'fenghuang-optional':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Hunan_Fenghuang_County_ancient_town.jpg/1280px-Hunan_Fenghuang_County_ancient_town.jpg',
  'furong-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Furong_Zhen.jpg/1280px-Furong_Zhen.jpg',
  'grape-valley': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Turpan_grape_valley.jpg/1280px-Turpan_grape_valley.jpg',
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
  'jinghong-base':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/City_of_Jinghong%2C_Yunnan%2C_China_in_2015.JPG/1280px-City_of_Jinghong%2C_Yunnan%2C_China_in_2015.JPG',
  'gaozhuang-optional':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/%E6%99%AF%E6%B4%AA_%E5%91%8A%E5%BA%84%E8%A5%BF%E5%8F%8C%E6%99%AF%E4%B9%8B%E8%A1%97%E9%81%93%E4%B8%8E%E9%87%91%E5%A1%94%E5%90%8C%E6%A1%86_02.jpg/1280px-%E6%99%AF%E6%B4%AA_%E5%91%8A%E5%BA%84%E8%A5%BF%E5%8F%8C%E6%99%AF%E4%B9%8B%E8%A1%97%E9%81%93%E4%B8%8E%E9%87%91%E5%A1%94%E5%90%8C%E6%A1%86_02.jpg',
  'manting-park':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/%E6%99%AF%E6%B4%AA_%E6%9B%BC%E5%90%AC%E5%85%AC%E5%9B%AD%E4%B9%8B%E5%82%A3%E6%97%8F%E9%A3%8E%E6%A0%BC%E8%B7%A8%E6%B2%B3%E6%A1%A5_01.jpg/1280px-%E6%99%AF%E6%B4%AA_%E6%9B%BC%E5%90%AC%E5%85%AC%E5%9B%AD%E4%B9%8B%E5%82%A3%E6%97%8F%E9%A3%8E%E6%A0%BC%E8%B7%A8%E6%B2%B3%E6%A1%A5_01.jpg',
  'menghai-day-optional':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/%E8%A5%BF%E5%8F%8C%E7%89%88%E7%BA%B3%E5%8B%90%E6%B5%B7%E5%8E%BF%E6%89%93%E6%B4%9B%E5%8F%A3%E5%B2%B8_04.jpg/1280px-%E8%A5%BF%E5%8F%8C%E7%89%88%E7%BA%B3%E5%8B%90%E6%B5%B7%E5%8E%BF%E6%89%93%E6%B4%9B%E5%8F%A3%E5%B2%B8_04.jpg',
  'wild-elephant-optional':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Elephantvalley-elephants.jpg/1280px-Elephantvalley-elephants.jpg',
  'mengla-buffer-optional':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Mengla_intersection.JPG/1280px-Mengla_intersection.JPG',
  'hks-kunming-buffer':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Kunming.jpg/1280px-Kunming.jpg',
  'hks-hekou-base':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Hekou%2C_Yunnan%2C_China.jpg/1280px-Hekou%2C_Yunnan%2C_China.jpg',
  'hks-hekou-wharf':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/2025-02-09_Old_Hekou_Wharf_%E6%B2%B3%E5%8F%A3%E8%80%81%E7%A2%BC%E9%A0%AD_03.jpg/1280px-2025-02-09_Old_Hekou_Wharf_%E6%B2%B3%E5%8F%A3%E8%80%81%E7%A2%BC%E9%A0%AD_03.jpg',
  'hks-border-crossing':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Hekou-Kim_Th%C3%A0nh_border_crossing_-_P1380333.JPG/1280px-Hekou-Kim_Th%C3%A0nh_border_crossing_-_P1380333.JPG',
  'hks-laocai-buffer':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Sapa_Mountains_Lao_Cai_Vietnam_%2856123%29.jpg/1280px-Sapa_Mountains_Lao_Cai_Vietnam_%2856123%29.jpg',
  'hks-sapa-slow':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Sa_Pa_Rice_Terrace_I.jpg/1280px-Sa_Pa_Rice_Terrace_I.jpg',
  'hks-fansipan-optional':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Fansipan.jpg/1280px-Fansipan.jpg',
  'hks-return-hekou':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Hekou%2C_Yunnan%2C_China.jpg/1280px-Hekou%2C_Yunnan%2C_China.jpg',
  'kaifeng-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Iron_Pagoda.jpg/1280px-Iron_Pagoda.jpg',
  'kalajun': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Kalajun_Grassland.jpg/1280px-Kalajun_Grassland.jpg',
  'kanas': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Lake_Kanas.jpg/1280px-Lake_Kanas.jpg',
  'kashi-old': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Kashgar.jpg/1280px-Kashgar.jpg',
  'kashi-stay': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Kashgar.jpg/1280px-Kashgar.jpg',
  'kashi-idkah':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Id_Kah_Mosque_Kashgar.jpg/1280px-Id_Kah_Mosque_Kashgar.jpg',
  'kashi-bazaar-xiangfei':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Kashgar.jpg/1280px-Kashgar.jpg',
  'kuitun-buffer': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Karamay%2C_Xinjiang%2C_China_-_panoramio.jpg/1280px-Karamay%2C_Xinjiang%2C_China_-_panoramio.jpg',
  'kunming-transfer': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Kunming.jpg/1280px-Kunming.jpg',
  'kuqa': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Kuqa_May_2007_429.jpg/1280px-Kuqa_May_2007_429.jpg',
  'kuqa-canyon':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Kuqa_May_2007_429.jpg/1280px-Kuqa_May_2007_429.jpg',
  'kuqa-buffer':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Kuqa_May_2007_429.jpg/1280px-Kuqa_May_2007_429.jpg',
  'kuqa-south': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Kuqa_May_2007_429.jpg/1280px-Kuqa_May_2007_429.jpg',
  'lanzhou-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Lanzhou.jpg/1280px-Lanzhou.jpg',
  'lanzhou-hub': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Lanzhou.jpg/1280px-Lanzhou.jpg',
  'lanzhou-silk': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Lanzhou.jpg/1280px-Lanzhou.jpg',
  'laohutan': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Tiger_Beach%2C_Dalian.jpg/1280px-Tiger_Beach%2C_Dalian.jpg',
  'lhasa-buffer': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Potala_palace23.jpg/1280px-Potala_palace23.jpg',
  'lhasa-rest': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Potala_palace23.jpg/1280px-Potala_palace23.jpg',
  'lianfengshan-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/%E4%BB%8E%E8%81%94%E5%B3%B0%E5%B1%B1%E6%9C%9B%E6%B5%B7%E4%BA%AD%E7%9C%8B%E5%8C%97%E6%88%B4%E6%B2%B3%E5%8C%BA.jpg/1280px-%E4%BB%8E%E8%81%94%E5%B3%B0%E5%B1%B1%E6%9C%9B%E6%B5%B7%E4%BA%AD%E7%9C%8B%E5%8C%97%E6%88%B4%E6%B2%B3%E5%8C%BA.jpg',
  'lijiang-cruise': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/87318-Li-River.jpg/1280px-87318-Li-River.jpg',
  'lijiang-fast': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Jade_Dragon_Snow_Mountain.jpg/1280px-Jade_Dragon_Snow_Mountain.jpg',
  'lijiang-loop-taste': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Lijiang_Old_Town.jpg/1280px-Lijiang_Old_Town.jpg',
  'longmen-grottoes': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/27427-Luoyang_%2849067744628%29.jpg/1280px-27427-Luoyang_%2849067744628%29.jpg',
  'lushun-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/L%C3%BCshun.jpg/1280px-L%C3%BCshun.jpg',
  'manzhouli-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Manzhouli.jpg/1280px-Manzhouli.jpg',
  'manzhouli-half': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Manzhouli.jpg/1280px-Manzhouli.jpg',
  'manzhouli-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Manzhouli.jpg/1280px-Manzhouli.jpg',
  'menyuan-flowers': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Menyuan_County.jpg/1280px-Menyuan_County.jpg',
  'mingshi-optional':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/%E6%B2%BF%E8%BE%B9%E5%85%AC%E8%B7%AF-X532%EF%BC%8C%E6%98%8E%E4%BB%95-%E5%BE%B7%E5%A4%A9%EF%BC%8C%E5%B9%BF%E8%A5%BF_Guangxi_03-10-13_-_panoramio.jpg/1280px-%E6%B2%BF%E8%BE%B9%E5%85%AC%E8%B7%AF-X532%EF%BC%8C%E6%98%8E%E4%BB%95-%E5%BE%B7%E5%A4%A9%EF%BC%8C%E5%B9%BF%E8%A5%BF_Guangxi_03-10-13_-_panoramio.jpg',
  'mogao': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Mogao_Caves_%2854376969262%29.jpg/1280px-Mogao_Caves_%2854376969262%29.jpg',
  'mohe-town': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Beijicun.jpg/1280px-Beijicun.jpg',
  'mutianyu': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Great_Wall_of_China_July_2006.JPG/1280px-Great_Wall_of_China_July_2006.JPG',
  'nalati': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Nalati_Grassland_1.jpg/1280px-Nalati_Grassland_1.jpg',
  'namtso-day': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Namtso.jpg/1280px-Namtso.jpg',
  'nanjing-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Nanjing_Museum.jpg/1280px-Nanjing_Museum.jpg',
  'nanjing-tulou':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Nanjing_Tianluokeng_Tulou_cluster_20140829.JPG/1280px-Nanjing_Tianluokeng_Tulou_cluster_20140829.JPG',
  'nanning-hub': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Nanning.jpg/1280px-Nanning.jpg',
  'nanshan-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Nanshan_Temple_of_Sanya.jpg/1280px-Nanshan_Temple_of_Sanya.jpg',
  'nanshan-view': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Chongqing_Nightscape.jpg/1280px-Chongqing_Nightscape.jpg',
  'orange-isle-oldstreet': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Orange_Isle.jpg/1280px-Orange_Isle.jpg',
  'panda-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Giant_Panda_at_Chengdu.jpg/1280px-Giant_Panda_at_Chengdu.jpg',
  'pingyao-deep': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Pingyao_40.JPG/1280px-Pingyao_40.JPG',
  'pingyao-side': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Pingyao_40.JPG/1280px-Pingyao_40.JPG',
  'pingyao-wall-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/%E5%B9%B3%E9%81%A5%E5%9F%8E%E5%A2%99-%E6%B5%81%E6%B5%AA%E7%9A%84%E7%8B%97%E7%8B%97_-_panoramio_-_aisccd.jpg/1280px-%E5%B9%B3%E9%81%A5%E5%9F%8E%E5%A2%99-%E6%B5%81%E6%B5%AA%E7%9A%84%E7%8B%97%E7%8B%97_-_panoramio_-_aisccd.jpg',
  'potala': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Potala_Palace_HQ.jpg/1280px-Potala_Palace_HQ.jpg',
  'puning-temple': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/%E6%99%AE%E5%AE%81%E5%AF%BA%E5%A4%A7%E4%B9%98%E4%B9%8B%E9%98%812025.11.jpg/1280px-%E6%99%AE%E5%AE%81%E5%AF%BA%E5%A4%A7%E4%B9%98%E4%B9%8B%E9%98%812025.11.jpg',
  'qilian-town': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Qilian_Mountains.jpg/1280px-Qilian_Mountains.jpg',
  'qingcheng-front': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Mount_Qingcheng.jpg/1280px-Mount_Qingcheng.jpg',
  'qingdao-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Qingdao_Harbour_51341-Qingdao_%2849055637186%29.jpg/1280px-Qingdao_Harbour_51341-Qingdao_%2849055637186%29.jpg',
  'qinghai-lake-loop': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Qinghai_Lake.jpg/1280px-Qinghai_Lake.jpg',
  'qinghai-lake-segment': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Qinghai_Lake.jpg/1280px-Qinghai_Lake.jpg',
  'qinglong-dong-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/%E8%B4%B5%E5%B7%9E-%E9%95%87%E8%BF%9C-%E9%9D%92%E9%BE%99%E6%B4%9E_-_panoramio.jpg/1280px-%E8%B4%B5%E5%B7%9E-%E9%95%87%E8%BF%9C-%E9%9D%92%E9%BE%99%E6%B4%9E_-_panoramio.jpg',
  'qiziwan-optional': '/generated/places/qiziwan-optional.png',
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
  'shapotou-optional':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/%E6%B2%99%E5%9D%A1%E5%A4%B4%E9%BB%84%E6%B2%B3%E5%A4%A7%E8%BD%AC%E5%BC%AF_-_panoramio.jpg/1280px-%E6%B2%99%E5%9D%A1%E5%A4%B4%E9%BB%84%E6%B2%B3%E5%A4%A7%E8%BD%AC%E5%BC%AF_-_panoramio.jpg',
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
  'turpan-city': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Flame_Mountain_Turpan_Xinjiang_China_%E6%96%B0%E7%96%86_%E5%90%90%E9%AD%AF%E7%95%AA_%E7%81%AB%E7%84%94%E5%B1%B1_-_panoramio_%281%29.jpg/1280px-Flame_Mountain_Turpan_Xinjiang_China_%E6%96%B0%E7%96%86_%E5%90%90%E9%AD%AF%E7%95%AA_%E7%81%AB%E7%84%94%E5%B1%B1_-_panoramio_%281%29.jpg',
  'turpan-silk': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Turpan_grape_valley.jpg/1280px-Turpan_grape_valley.jpg',
  'urumqi-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Urumqi_skyline.jpg/1280px-Urumqi_skyline.jpg',
  'wanding-bridge': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Ruili.jpg/1280px-Ruili.jpg',
  'wanwei-beach': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Xinhua_Rd%2C_Dongxing_%2820240220152802%29.jpg/1280px-Xinhua_Rd%2C_Dongxing_%2820240220152802%29.jpg',
  'weihai-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Liugong_Island_Weihai.jpg/1280px-Liugong_Island_Weihai.jpg',
  'wudadao': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Five_Great_Avenues_21393-Tianjin_%2849063741486%29.jpg/1280px-Five_Great_Avenues_21393-Tianjin_%2849063741486%29.jpg',
  'wudalianchi-town': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Lava_Rock_Landscape_of_Wudalianchi.jpg/1280px-Lava_Rock_Landscape_of_Wudalianchi.jpg',
  'wudalianchi-volcano': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Lava_Rock_Landscape_of_Wudalianchi.jpg/1280px-Lava_Rock_Landscape_of_Wudalianchi.jpg',
  'wudang-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Wudangshan_pic_7.jpg/1280px-Wudangshan_pic_7.jpg',
  'wudang-jinding': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Wudangshan_pic_7.jpg/1280px-Wudangshan_pic_7.jpg',
  'wulingyuan-cable': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/1_tianzishan_wulingyuan_zhangjiajie_2012.jpg/1280px-1_tianzishan_wulingyuan_zhangjiajie_2012.jpg',
  // Wulong_Karst.jpg 已 404；改用天生三桥实拍
  'wulong-optional':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Wulongtianshengsanqiao.JPG/1280px-Wulongtianshengsanqiao.JPG',
  'wuyuan-huangling': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/%E5%A9%BA%E6%BA%90%E7%AF%81%E5%B2%AD%E5%A4%A9%E8%A1%97_3.jpg/1280px-%E5%A9%BA%E6%BA%90%E7%AF%81%E5%B2%AD%E5%A4%A9%E8%A1%97_3.jpg',
  'wuyuan-jiangling': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Wuyuan_Jiangxi.jpg/1280px-Wuyuan_Jiangxi.jpg',
  'wuyuan-village': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/%E5%A9%BA%E6%BA%90%E6%99%93%E8%B5%B7.jpg/1280px-%E5%A9%BA%E6%BA%90%E6%99%93%E8%B5%B7.jpg',
  'wuzhen-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/1_wuzhen_aerial_2023.jpg/1280px-1_wuzhen_aerial_2023.jpg',
  'xiahe-labrang': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Labrang_Monastery.jpg/1280px-Labrang_Monastery.jpg',
  'xiamen-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Xiamen.jpg/1280px-Xiamen.jpg',
  'xian-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Xi%27an_City_Wall.jpg/1280px-Xi%27an_City_Wall.jpg',
  'xian-silk-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Xi%27an_City_Wall.jpg/1280px-Xi%27an_City_Wall.jpg',
  'xinduqiao': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Xinduqiao.jpg/1280px-Xinduqiao.jpg',
  'xinghai-square': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Xinghai_Square.jpg/1280px-Xinghai_Square.jpg',
  'xinghan-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/%E5%85%B4%E6%B1%89%E8%83%9C%E5%A2%8305.jpg/1280px-%E5%85%B4%E6%B1%89%E8%83%9C%E5%A2%8305.jpg',
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
  'datong-zuoyun-optional': '/generated/places/datong-zuoyun-optional.png',
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
  'ts-laoting-optional': '/generated/places/ts-laoting-optional.png',
  'zhangye-danxia': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Zhangye_National_Geopark_5.jpg/1280px-Zhangye_National_Geopark_5.jpg',
  'zhangye-danxia-loop': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Zhangye_National_Geopark_5.jpg/1280px-Zhangye_National_Geopark_5.jpg',
  'zhenyuan-oldtown': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Guizhou_Zhenyuan_Ancient_Town4_%28cropped%29.jpg/1280px-Guizhou_Zhenyuan_Ancient_Town4_%28cropped%29.jpg',
  'zhenyuan-or-qiandongnan': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Guizhou_Zhenyuan_Ancient_Town4_%28cropped%29.jpg/1280px-Guizhou_Zhenyuan_Ancient_Town4_%28cropped%29.jpg',
  'zhongwei-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Shapotou.jpg/1280px-Shapotou.jpg',
  'zhuhai-lover-road': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Zhuhai.jpg/1280px-Zhuhai.jpg',
  'zhuhai-optional':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Palm_trees%2C_Lover%27s_Road%2C_Zhuhai.jpg/1280px-Palm_trees%2C_Lover%27s_Road%2C_Zhuhai.jpg',
  'zhujiajiao-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Zhujiajiao_Town.jpg/1280px-Zhujiajiao_Town.jpg',
  // coverage wave 20260802
  'wh-wuchang-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/%E6%AD%A6%E6%98%8C%E6%B1%9F%E6%BB%A9_-_Wuchang_River_Beach_Park_-_2016.04_-_panoramio.jpg/1280px-%E6%AD%A6%E6%98%8C%E6%B1%9F%E6%BB%A9_-_Wuchang_River_Beach_Park_-_2016.04_-_panoramio.jpg',
  'wh-yellow-crane': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Yellow_Crane_Tower_61469-Wuhan_%2849149984218%29.jpg/1280px-Yellow_Crane_Tower_61469-Wuhan_%2849149984218%29.jpg',
  'wh-east-lake': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Snake_Hill_in_Wuhan_%28Hubei%2C_China%29%2C_seen_from_the_west.jpg/1280px-Snake_Hill_in_Wuhan_%28Hubei%2C_China%29%2C_seen_from_the_west.jpg',
  'wh-hubei-museum': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Wuhan_from_Yellow_Crane_Tower.jpg/1280px-Wuhan_from_Yellow_Crane_Tower.jpg',
  'wh-jianghan-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/%E6%B1%9F%E6%B1%89%E8%B7%AF%E6%AD%A5%E8%A1%8C%E8%A1%97.jpg/1280px-%E6%B1%9F%E6%B1%89%E8%B7%AF%E6%AD%A5%E8%A1%8C%E8%A1%97.jpg',
  'cs-xiangjiang-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/%E9%95%BF%E6%B2%99%E6%B9%98%E6%B1%9F%E9%A3%8E%E5%85%89%E5%B8%A6_-_panoramio.jpg/1280px-%E9%95%BF%E6%B2%99%E6%B9%98%E6%B1%9F%E9%A3%8E%E5%85%89%E5%B8%A6_-_panoramio.jpg',
  'cs-ningxiang-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/%E5%B0%91%E5%A5%87%E6%95%85%E9%87%8C-%E4%B8%87%E5%BE%B7%E9%BC%8E-%E8%8A%B1%E6%98%8E%E6%A5%BC_-_panoramio.jpg/1280px-%E5%B0%91%E5%A5%87%E6%95%85%E9%87%8C-%E4%B8%87%E5%BE%B7%E9%BC%8E-%E8%8A%B1%E6%98%8E%E6%A5%BC_-_panoramio.jpg',
  'zz-jinshui-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Erqi_Memorial_Tower.jpg/1280px-Erqi_Memorial_Tower.jpg',
  'zz-yellow-river': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/27427-Luoyang_%2849067744628%29.jpg/1280px-27427-Luoyang_%2849067744628%29.jpg',
  'zz-shaolin-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Shaolin_Monastery.jpg/1280px-Shaolin_Monastery.jpg',
  'zz-henan-museum-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/20210220_Henan_Museum_-_main_hall_01.jpg/1280px-20210220_Henan_Museum_-_main_hall_01.jpg',
  'hf-baohe-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/%E5%A4%A9%E9%B9%85%E6%B9%96.jpg/1280px-%E5%A4%A9%E9%B9%85%E6%B9%96.jpg',
  'hf-swan-lake': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/%E5%AE%89%E5%BE%BD%E5%90%88%E8%82%A5%E5%A4%A9%E9%B9%85%E6%B9%96.jpg/1280px-%E5%AE%89%E5%BE%BD%E5%90%88%E8%82%A5%E5%A4%A9%E9%B9%85%E6%B9%96.jpg',
  'hf-sanhe-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/%E4%B8%89%E6%B2%B3%E5%8F%A4%E9%95%87%E8%80%81%E8%A1%97.jpg/1280px-%E4%B8%89%E6%B2%B3%E5%8F%A4%E9%95%87%E8%80%81%E8%A1%97.jpg',
  'hf-anhui-museum-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/%E5%AE%89%E5%BE%BD%E5%8D%9A%E7%89%A9%E9%99%A2%E6%AD%A3%E9%9D%A2.jpg/1280px-%E5%AE%89%E5%BE%BD%E5%8D%9A%E7%89%A9%E9%99%A2%E6%AD%A3%E9%9D%A2.jpg',
  'fz-gulou-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/%E7%A6%8F%E5%B7%9E%E4%B8%89%E5%9D%8A%E4%B8%83%E5%B7%B7%E5%8D%97%E5%90%8E%E8%A1%97oeotwc_-_panoramio.jpg/1280px-%E7%A6%8F%E5%B7%9E%E4%B8%89%E5%9D%8A%E4%B8%83%E5%B7%B7%E5%8D%97%E5%90%8E%E8%A1%97oeotwc_-_panoramio.jpg',
  'fz-sanfang': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/%E7%A6%8F%E5%B7%9E%E4%B8%89%E5%9D%8A%E4%B8%83%E5%B7%B7%E5%8D%97%E5%90%8E%E8%A1%97oeotwc_-_panoramio.jpg/1280px-%E7%A6%8F%E5%B7%9E%E4%B8%89%E5%9D%8A%E4%B8%83%E5%B7%B7%E5%8D%97%E5%90%8E%E8%A1%97oeotwc_-_panoramio.jpg',
  'fz-west-lake-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/%E7%A6%8F%E5%B7%9E%E8%A5%BF%E6%B9%96%E5%85%AC%E5%9C%92oeotwc_-_panoramio.jpg/1280px-%E7%A6%8F%E5%B7%9E%E8%A5%BF%E6%B9%96%E5%85%AC%E5%9C%92oeotwc_-_panoramio.jpg',
  'fz-rongcheng-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/20181004_%E7%A6%8F%E5%B7%9E%E4%B8%8A%E4%B8%8B%E6%9D%AD_04.jpg/1280px-20181004_%E7%A6%8F%E5%B7%9E%E4%B8%8A%E4%B8%8B%E6%9D%AD_04.jpg',
  'nc-honggutan-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Honggutan_20180726_115201.jpg/1280px-Honggutan_20180726_115201.jpg',
  'nc-tengwang': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/%E5%8D%97%E6%98%8C%E6%BB%95%E7%8E%8B%E9%98%81.jpg/1280px-%E5%8D%97%E6%98%8C%E6%BB%95%E7%8E%8B%E9%98%81.jpg',
  'nc-qiushui': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/%E5%8D%97%E6%98%8C%E6%BB%95%E7%8E%8B%E9%98%81.jpg/1280px-%E5%8D%97%E6%98%8C%E6%BB%95%E7%8E%8B%E9%98%81.jpg',
  'nc-bayi-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Nanchang_Bayi_Guangchang_20120723-20.jpg/1280px-Nanchang_Bayi_Guangchang_20120723-20.jpg',
  'ty-yingze-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/%E5%A4%AA%E5%8E%9F%E8%BF%8E%E6%B3%BD%E5%85%AC%E5%9B%AD_-_panoramio.jpg/1280px-%E5%A4%AA%E5%8E%9F%E8%BF%8E%E6%B3%BD%E5%85%AC%E5%9B%AD_-_panoramio.jpg',
  'ty-jinci': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Jinci_Temple_%2854572159327%29.jpg/1280px-Jinci_Temple_%2854572159327%29.jpg',
  'ty-shanxi-museum': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Shanxi_Museum_20110719.jpg/1280px-Shanxi_Museum_20110719.jpg',
  'ty-fenhe-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Fen_River_Park_Taiyuan_20110709.jpg/1280px-Fen_River_Park_Taiyuan_20110709.jpg',
  'sz-nanshan-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/%E6%B7%B1%E5%9C%B3%E6%B9%BE%E5%85%AC%E5%9B%AD_shen_zhen_wan_gong_yuan_-_panoramio.jpg/1280px-%E6%B7%B1%E5%9C%B3%E6%B9%BE%E5%85%AC%E5%9B%AD_shen_zhen_wan_gong_yuan_-_panoramio.jpg',
  'sz-shenzhen-bay': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Shenzhen_Bay_Bridge_To_HK_on_Shenzhen_Side.jpg/1280px-Shenzhen_Bay_Bridge_To_HK_on_Shenzhen_Side.jpg',
  'sz-oct-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/%E8%BF%9C%E7%9C%8B%E6%B7%B1%E5%9C%B3%E5%8D%8E%E4%BE%A8%E5%9F%8E_OCT%2C_Shenzhen_-_panoramio.jpg/1280px-%E8%BF%9C%E7%9C%8B%E6%B7%B1%E5%9C%B3%E5%8D%8E%E4%BE%A8%E5%9F%8E_OCT%2C_Shenzhen_-_panoramio.jpg',
  'sz-dameisha-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/%E6%B7%B1%E5%9C%B3%E5%A4%A7%E6%A2%85%E6%B2%99.jpg/1280px-%E6%B7%B1%E5%9C%B3%E5%A4%A7%E6%A2%85%E6%B2%99.jpg',
  'jn-lishi-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/%E6%B5%8E%E5%8D%97%E6%B3%89%E5%9F%8E%E5%B9%BF%E5%9C%BA%E8%BF%9C%E6%99%AF.jpg/1280px-%E6%B5%8E%E5%8D%97%E6%B3%89%E5%9F%8E%E5%B9%BF%E5%9C%BA%E8%BF%9C%E6%99%AF.jpg',
  'jn-baotu': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Jinan_Baotu_Spring-20150519-RM-165055.jpg/1280px-Jinan_Baotu_Spring-20150519-RM-165055.jpg',
  'jn-daming': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Jinan_Baotu_Spring-20150519-RM-165055.jpg/1280px-Jinan_Baotu_Spring-20150519-RM-165055.jpg',
  'jn-quancheng-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/%E6%B5%8E%E5%8D%97%E5%A4%A7%E6%98%8E%E6%B9%96%E7%89%8C%E5%8C%BE%E5%A4%9C%E6%99%AF.jpg/1280px-%E6%B5%8E%E5%8D%97%E5%A4%A7%E6%98%8E%E6%B9%96%E7%89%8C%E5%8C%BE%E5%A4%9C%E6%99%AF.jpg',
  'cc-chaoyang-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Changchun_skyline_with_Ji_Tower_-_panoramio.jpg/1280px-Changchun_skyline_with_Ji_Tower_-_panoramio.jpg',
  'cc-puppet-palace': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/25279-Changchun%2C_Museum_of_the_Imperial_Palace_of_Manchukuo.jpg/1280px-25279-Changchun%2C_Museum_of_the_Imperial_Palace_of_Manchukuo.jpg',
  'cc-nanhu': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Nanhu_Lake_park_-_panoramio.jpg/1280px-Nanhu_Lake_park_-_panoramio.jpg',
  'cc-cultural-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Changchun_skyline_with_Ji_Tower_-_panoramio.jpg/1280px-Changchun_skyline_with_Ji_Tower_-_panoramio.jpg',
  'nj-xuanwu-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/%E7%8E%84%E6%AD%A6%E6%B9%96%E6%9C%9B%E5%8D%97%E4%BA%AC%E5%A4%A9%E9%99%85%E7%BA%BF_-_panoramio.jpg/1280px-%E7%8E%84%E6%AD%A6%E6%B9%96%E6%9C%9B%E5%8D%97%E4%BA%AC%E5%A4%A9%E9%99%85%E7%BA%BF_-_panoramio.jpg',
  'nj-museum': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Nanjing_Museum.jpg/1280px-Nanjing_Museum.jpg',
  'nj-xuanwu-lake': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Xuanwu_Lake%2C_Nanjing.jpg/1280px-Xuanwu_Lake%2C_Nanjing.jpg',
  'nj-zijin-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/PurpleMountain01.JPG/1280px-PurpleMountain01.JPG',
  'gy-nanming-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Jiaxiu_building_and_Nanming_river_in_Guiyang.jpg/1280px-Jiaxiu_building_and_Nanming_river_in_Guiyang.jpg',
  'gy-jiaxiu': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/%E7%94%B2%E7%A7%80%E6%A5%BC_-_Jiaxiu_Pavilion_-_2015.07_-_panoramio.jpg/1280px-%E7%94%B2%E7%A7%80%E6%A5%BC_-_Jiaxiu_Pavilion_-_2015.07_-_panoramio.jpg',
  'gy-qianling-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/%E9%BB%94%E7%81%B5%E5%B1%B1.jpg/1280px-%E9%BB%94%E7%81%B5%E5%B1%B1.jpg',
  'gy-museum-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/%E8%B4%B5%E5%B7%9E%E7%9C%81%E5%8D%9A%E7%89%A9%E9%A6%86_%E8%BF%9C.jpg/1280px-%E8%B4%B5%E5%B7%9E%E7%9C%81%E5%8D%9A%E7%89%A9%E9%A6%86_%E8%BF%9C.jpg',
  'nn-qingxiu-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/%E9%9D%92%E7%A7%80%E5%B1%B1%E9%A3%8E%E6%99%AF%E5%8C%BApanoramio103204924.jpg/1280px-%E9%9D%92%E7%A7%80%E5%B1%B1%E9%A3%8E%E6%99%AF%E5%8C%BApanoramio103204924.jpg',
  'nn-qingxiu-mountain': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Nanning.jpg/1280px-Nanning.jpg',
  'nn-yongjiang': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Nanning.jpg/1280px-Nanning.jpg',
  'nn-museum-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Guangxi_Museum.jpg/1280px-Guangxi_Museum.jpg',
  'hk-longhua-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Haikou_Century_Bridge_in_2015.jpg/1280px-Haikou_Century_Bridge_in_2015.jpg',
  'hk-qilou': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/%E6%B5%B7%E5%8F%A3%E9%AA%91%E6%A5%BC%E8%80%81%E8%A1%97_-_Haikou_Arcaded_Streets_-_2016.01_-_panoramio.jpg/1280px-%E6%B5%B7%E5%8F%A3%E9%AA%91%E6%A5%BC%E8%80%81%E8%A1%97_-_Haikou_Arcaded_Streets_-_2016.01_-_panoramio.jpg',
  'hk-west-coast': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Haikou_Century_Bridge_in_2015.jpg/1280px-Haikou_Century_Bridge_in_2015.jpg',
  'hk-volcano-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/%E6%B5%B7%E5%8D%97%E5%9B%BD%E9%99%85%E6%97%85%E6%B8%B8%E5%B2%9B%E2%80%94%E2%80%94%E6%B5%B7%E5%8F%A3.%E4%B8%96%E7%95%8C%E7%81%AB%E5%B1%B1%E5%9C%B0%E8%B4%A8%E5%85%AC%E5%9B%AD%E7%86%94%E5%B2%A9%E6%B5%81%E4%BF%9D%E6%8A%A4%E5%8C%BA%E6%99%AF%E8%A7%82%EF%BC%88%E8%A5%BF%E5%8D%97%E5%90%91%EF%BC%89_-_panoramio.jpg/1280px-%E6%B5%B7%E5%8D%97%E5%9B%BD%E9%99%85%E6%97%85%E6%B8%B8%E5%B2%9B%E2%80%94%E2%80%94%E6%B5%B7%E5%8F%A3.%E4%B8%96%E7%95%8C%E7%81%AB%E5%B1%B1%E5%9C%B0%E8%B4%A8%E5%85%AC%E5%9B%AD%E7%86%94%E5%B2%A9%E6%B5%81%E4%BF%9D%E6%8A%A4%E5%8C%BA%E6%99%AF%E8%A7%82%EF%BC%88%E8%A5%BF%E5%8D%97%E5%90%91%EF%BC%89_-_panoramio.jpg',
  'km-cuihu-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Southwest_part_of_Cuihu_Park%2C_Kunming_%2820240214121712%29.jpg/1280px-Southwest_part_of_Cuihu_Park%2C_Kunming_%2820240214121712%29.jpg',
  'km-cuihu': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Kunming.jpg/1280px-Kunming.jpg',
  'km-dianchi': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Kunming.jpg/1280px-Kunming.jpg',
  'km-xishan-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Dianchi.jpg/1280px-Dianchi.jpg',
  'lz-bayi-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Bayi%2C_Nyingchi%2C_Tibet%2C_China_-_panoramio_%281%29.jpg/1280px-Bayi%2C_Nyingchi%2C_Tibet%2C_China_-_panoramio_%281%29.jpg',
  'lz-lulang': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Shergyla_Mountain%2C_Nyingchi%2C_Tibet_Banner.jpg/1280px-Shergyla_Mountain%2C_Nyingchi%2C_Tibet_Banner.jpg',
  'lz-yarlung-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/%E9%9B%85%E9%B2%81%E8%97%8F%E5%B8%83%E6%B1%9F_yaluzangbu_river_-_panoramio.jpg/1280px-%E9%9B%85%E9%B2%81%E8%97%8F%E5%B8%83%E6%B1%9F_yaluzangbu_river_-_panoramio.jpg',
  'lz-buffer-optional':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Nyingchi_city_June_2019.jpg/1280px-Nyingchi_city_June_2019.jpg',
  'g318-lhasa-adapt': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Potala_palace23.jpg/1280px-Potala_palace23.jpg',
  'g318-road-day': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Shergyla_Mountain%2C_Nyingchi%2C_Tibet_Banner.jpg/1280px-Shergyla_Mountain%2C_Nyingchi%2C_Tibet_Banner.jpg',
  'g318-nyingchi-stay': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Shergyla_Mountain%2C_Nyingchi%2C_Tibet_Banner.jpg/1280px-Shergyla_Mountain%2C_Nyingchi%2C_Tibet_Banner.jpg',
  'g318-exit':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Lhasa_Gonggar_Airport_Terminal_3_%2854760927444%29.jpg/1280px-Lhasa_Gonggar_Airport_Terminal_3_%2854760927444%29.jpg',
  'g318e-chengdu-buffer': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/%E9%9B%AA%E5%B1%B1%E4%B8%8B%E7%9A%84%E6%88%90%E9%83%BD%E5%B8%82%E5%A4%A9%E9%99%85%E7%BA%BF_Chengdu_skyline_with_snow_capped_mountains.jpg/1280px-%E9%9B%AA%E5%B1%B1%E4%B8%8B%E7%9A%84%E6%88%90%E9%83%BD%E5%B8%82%E5%A4%A9%E9%99%85%E7%BA%BF_Chengdu_skyline_with_snow_capped_mountains.jpg',
  'g318e-kangding': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Mount_Qingcheng.jpg/1280px-Mount_Qingcheng.jpg',
  'g318e-xinduqiao-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Xinduqiao.jpg/1280px-Xinduqiao.jpg',
  'g318e-descend': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Giant_Panda_at_Chengdu.jpg/1280px-Giant_Panda_at_Chengdu.jpg',
  'jn-hangzhou-gate':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Hangzhou_East_Railway_Station.jpg/1280px-Hangzhou_East_Railway_Station.jpg',
  'jn-wuzhen': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/1_wuzhen_aerial_2023.jpg/1280px-1_wuzhen_aerial_2023.jpg',
  'jn-xitang-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/1_xitang_zhejiang_2023.jpg/1280px-1_xitang_zhejiang_2023.jpg',
  'jn-exit':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/20151226%E6%9D%AD%E5%B7%9E%E4%B8%9C%E7%AB%99%E8%A5%BF%E5%B9%BF%E5%9C%BA%E5%85%A8%E6%99%AF.jpg/1280px-20151226%E6%9D%AD%E5%B7%9E%E4%B8%9C%E7%AB%99%E8%A5%BF%E5%B9%BF%E5%9C%BA%E5%85%A8%E6%99%AF.jpg',
  'le-leshan-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/%E5%87%8C%E4%BA%91%E8%B7%AF%E6%B1%9F%E5%A0%A4%E9%9A%94%E6%B1%9F%E7%9C%8B%E4%B9%90%E5%B1%B1%E5%9F%8E%E5%8C%BA_-_panoramio.jpg/1280px-%E5%87%8C%E4%BA%91%E8%B7%AF%E6%B1%9F%E5%A0%A4%E9%9A%94%E6%B1%9F%E7%9C%8B%E4%B9%90%E5%B1%B1%E5%9F%8E%E5%8C%BA_-_panoramio.jpg',
  'le-giant-buddha': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Leshan_Giant_Buddha%2C_20161102.jpg/1280px-Leshan_Giant_Buddha%2C_20161102.jpg',
  'le-emei-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/EmeiShanTop.jpg/1280px-EmeiShanTop.jpg',
  'le-back-chengdu': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Giant_Panda_at_Chengdu.jpg/1280px-Giant_Panda_at_Chengdu.jpg',
  'hrb-daoli-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/%E5%93%88%E5%B0%94%E6%BB%A8%E4%B8%AD%E5%A4%AE%E5%A4%A7%E8%A1%97%E8%A5%BF%E5%8D%81%E4%B8%80%E9%81%93%E8%A1%97%E5%8C%97.jpg/1280px-%E5%93%88%E5%B0%94%E6%BB%A8%E4%B8%AD%E5%A4%AE%E5%A4%A7%E8%A1%97%E8%A5%BF%E5%8D%81%E4%B8%80%E9%81%93%E8%A1%97%E5%8C%97.jpg',
  'hrb-central-street': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/%E5%93%88%E5%B0%94%E6%BB%A8_%E4%B8%AD%E5%A4%AE%E5%A4%A7%E8%A1%97_-_panoramio.jpg/1280px-%E5%93%88%E5%B0%94%E6%BB%A8_%E4%B8%AD%E5%A4%AE%E5%A4%A7%E8%A1%97_-_panoramio.jpg',
  'hrb-songhua': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Songhua_River.jpg/1280px-Songhua_River.jpg',
  'hrb-sun-island-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/%E5%93%88%E5%B0%94%E6%BB%A8%E5%A4%AA%E9%98%B3%E5%B2%9B_2.jpg/1280px-%E5%93%88%E5%B0%94%E6%BB%A8%E5%A4%AA%E9%98%B3%E5%B2%9B_2.jpg',
  'hh-city-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Da_Zhao_Temple_in_Hohhot3.JPG/1280px-Da_Zhao_Temple_in_Hohhot3.JPG',
  'hh-museum': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Altan_Khan_statue_in_Hohhot%2C_Inner_Mongolia.jpg/1280px-Altan_Khan_statue_in_Hohhot%2C_Inner_Mongolia.jpg',
  'hh-xilamuren-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/%E5%B8%8C%E6%8B%89%E7%A9%86%E4%BB%81%E8%8D%89%E5%8E%9F_%E4%BF%9D%E6%8A%A4%E5%8C%BA_-_panoramio.jpg/1280px-%E5%B8%8C%E6%8B%89%E7%A9%86%E4%BB%81%E8%8D%89%E5%8E%9F_%E4%BF%9D%E6%8A%A4%E5%8C%BA_-_panoramio.jpg',
  'hh-buffer-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Da_Zhao_Temple_in_Hohhot3.JPG/1280px-Da_Zhao_Temple_in_Hohhot3.JPG',
  // coverage wave 20260802b stops
  'wx-liangxi-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/%E6%97%A0%E9%94%A1%E4%B8%89%E9%98%B3%E5%B9%BF%E5%9C%BA.jpg/1280px-%E6%97%A0%E9%94%A1%E4%B8%89%E9%98%B3%E5%B9%BF%E5%9C%BA.jpg',
  'wx-yuantouzhu':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Turtle_Head_Park_%E9%BB%BF%E9%A0%AD%E8%AF%B8%E5%85%AC%E5%9C%92_-_panoramio.jpg/1280px-Turtle_Head_Park_%E9%BB%BF%E9%A0%AD%E8%AF%B8%E5%85%AC%E5%9C%92_-_panoramio.jpg',
  'wx-liyuan':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Liyuan_Garden%2C_Wuxi%286936570366%29.jpg/1280px-Liyuan_Garden%2C_Wuxi%286936570366%29.jpg',
  'wx-canal-optional':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/%E6%97%A0%E9%94%A1%E5%8F%A4%E8%BF%90%E6%B2%B3.jpg/1280px-%E6%97%A0%E9%94%A1%E5%8F%A4%E8%BF%90%E6%B2%B3.jpg',
  'nb-haishu-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Tianyi_Square_2019-07_01.jpg/1280px-Tianyi_Square_2019-07_01.jpg',
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
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Gonghe%2C_Hainan%2C_Qinghai%2C_China_-_panoramio_-_neverdance_%2817%29.jpg/1280px-Gonghe%2C_Hainan%2C_Qinghai%2C_China_-_panoramio_-_neverdance_%2817%29.jpg',
  'g214-buffer-optional':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Xining_-_Dongguan_mosque_Minaret_2024.jpg/1280px-Xining_-_Dongguan_mosque_Minaret_2024.jpg',
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
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/%E6%8B%89%E8%90%A8%E7%81%AB%E8%BD%A6%E7%AB%99.jpg/1280px-%E6%8B%89%E8%90%A8%E7%81%AB%E8%BD%A6%E7%AB%99.jpg',
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
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Shangri-la_airport_%28DIG%29%2C_Yunnan%2C_China.JPG/1280px-Shangri-la_airport_%28DIG%29%2C_Yunnan%2C_China.JPG',
  // famous stitch stops
  'jdz-ceramic-museum':
    'https://upload.wikimedia.org/wikipedia/commons/3/37/Porcelain_Workshop%2C_Jingdezhen%2C_Jiangxi%2C_China.jpg',
  'jdz-imperial-kiln': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/%E6%99%AF%E5%BE%B7%E9%95%87%E5%BE%A1%E7%AA%91%E5%8D%9A%E7%89%A9%E9%A6%86.jpg/1280px-%E6%99%AF%E5%BE%B7%E9%95%87%E5%BE%A1%E7%AA%91%E5%8D%9A%E7%89%A9%E9%A6%86.jpg',
  'jz-airport-buffer':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Jiuzhaigou_Sichuan_China_Main-entrance-to-the-valleys-01.jpg/1280px-Jiuzhaigou_Sichuan_China_Main-entrance-to-the-valleys-01.jpg',
  'jz-rize-boardwalk':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/1_jiuzhaigou_valley_wu_hua_hai_2011b.jpg/1280px-1_jiuzhaigou_valley_wu_hua_hai_2011b.jpg',
  'jz-shuzheng':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/%E5%9B%9B%E5%B7%9D.%E4%B9%9D%E5%AF%A8%E6%B2%9F._%E6%A0%91%E6%AD%A3%E5%AF%A8_-_panoramio.jpg/1280px-%E5%9B%9B%E5%B7%9D.%E4%B9%9D%E5%AF%A8%E6%B2%9F._%E6%A0%91%E6%AD%A3%E5%AF%A8_-_panoramio.jpg',
  'jz-huanglong-optional':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Huanglong_Sichuan_China_Multicolored-ponds-02.jpg/1280px-Huanglong_Sichuan_China_Multicolored-ponds-02.jpg',
  'fh-tuojiang-base':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Hunan_Fenghuang_County_ancient_town.jpg/1280px-Hunan_Fenghuang_County_ancient_town.jpg',
  'fh-night-riverside':
    
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Fenghuang_County_night_view_20190727.jpg/1280px-Fenghuang_County_night_view_20190727.jpg',
  'fh-furong-optional':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Furong_Zhen.jpg/1280px-Furong_Zhen.jpg',
  'urumqi-city-base':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Urumqi_skyline.jpg/1280px-Urumqi_skyline.jpg',
  'urumqi-hongshan':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/A_glance_at_Urumqi_from_Hongshan_Park.jpg/1280px-A_glance_at_Urumqi_from_Hongshan_Park.jpg',
  'urumqi-museum':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/%E6%96%B0%E7%96%86%E5%8D%9A%E7%89%A9%E9%A6%86_%E5%85%A8%E6%99%AF%EF%BC%882021%EF%BC%89.jpg/1280px-%E6%96%B0%E7%96%86%E5%8D%9A%E7%89%A9%E9%A6%86_%E5%85%A8%E6%99%AF%EF%BC%882021%EF%BC%89.jpg',
  'urumqi-bazaar-optional':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/%E6%96%B0%E7%96%86%E5%9B%BD%E9%99%85%E5%A4%A7%E5%B7%B4%E6%89%8E%E6%98%AF%E4%B9%8C%E9%B2%81%E6%9C%A8%E9%BD%90%E6%96%B0%E5%8D%81%E6%99%AF.jpg/1280px-%E6%96%B0%E7%96%86%E5%9B%BD%E9%99%85%E5%A4%A7%E5%B7%B4%E6%89%8E%E6%98%AF%E4%B9%8C%E9%B2%81%E6%9C%A8%E9%BD%90%E6%96%B0%E5%8D%81%E6%99%AF.jpg',
  'ls-jiujiang-gate': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/%E4%B9%9D%E6%B1%9F%E7%90%B5%E7%90%B6%E4%BA%AD%E8%BF%9C%E7%9C%BA%E9%95%BF%E6%B1%9F%E5%A4%A7%E6%A1%A5.JPG/1280px-%E4%B9%9D%E6%B1%9F%E7%90%B5%E7%90%B6%E4%BA%AD%E8%BF%9C%E7%9C%BA%E9%95%BF%E6%B1%9F%E5%A4%A7%E6%A1%A5.JPG',
  'ls-guling-base':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Mount_Lu_16147-Lushan_%2849052568127%29.jpg/1280px-Mount_Lu_16147-Lushan_%2849052568127%29.jpg',
  'ls-viewpoint':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Mount_Lu_16158-Lushan_%2849052568687%29.jpg/1280px-Mount_Lu_16158-Lushan_%2849052568687%29.jpg',
  'sx-city-base':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Shaoxing_Cityscape.jpg/1280px-Shaoxing_Cityscape.jpg',
  'sx-luxun':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Ke_Bridge_in_Shaoxing_01_2017-08.jpg/1280px-Ke_Bridge_in_Shaoxing_01_2017-08.jpg',
  'sx-hangzhou-optional':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/West_Lake%2C_Hangzhou_2025.jpg/1280px-West_Lake%2C_Hangzhou_2025.jpg',
  'wt-taihuai-base':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Wutai_shan_temples.jpg/1280px-Wutai_shan_temples.jpg',
  'wt-xiantong':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Wutai_2009_431.jpg/1280px-Wutai_2009_431.jpg',
  'wt-dailuoding-optional':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/%E4%BB%8E%E9%BB%9B%E8%9E%BA%E9%A1%B6%E7%9C%8B%E4%BA%94%E5%8F%B0%E5%B1%B1%E5%AF%BA%E9%99%A2.jpg/1280px-%E4%BB%8E%E9%BB%9B%E8%9E%BA%E9%A1%B6%E7%9C%8B%E4%BA%94%E5%8F%B0%E5%B1%B1%E5%AF%BA%E9%99%A2.jpg',
  // famous P1 stops
  'wy-base':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Jiuqu_Brook_in_Wuyi_Mountains.jpg/1280px-Jiuqu_Brook_in_Wuyi_Mountains.jpg',
  'wy-jiuqu-raft':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Peak_Yunu.jpg/1280px-Peak_Yunu.jpg',
  'wy-tea-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/%E6%AD%A6%E5%A4%B7%E5%B1%B1%E8%8C%B6%E5%9B%AD%E9%A3%8E%E5%85%89.jpg/1280px-%E6%AD%A6%E5%A4%B7%E5%B1%B1%E8%8C%B6%E5%9B%AD%E9%A3%8E%E5%85%89.jpg',
  'wy-tianyuan-optional':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/%E7%A6%8F%E5%BB%BA%E7%9C%81%E6%AD%A6%E5%A4%B7%E5%B1%B1%E5%A4%A9%E6%B8%B8%E5%B3%B0%E9%A3%8E%E6%99%AF%E5%8C%BA%E6%99%AF%E8%89%B2_-_panoramio_%281%29.jpg/1280px-%E7%A6%8F%E5%BB%BA%E7%9C%81%E6%AD%A6%E5%A4%B7%E5%B1%B1%E5%A4%A9%E6%B8%B8%E5%B3%B0%E9%A3%8E%E6%99%AF%E5%8C%BA%E6%99%AF%E8%89%B2_-_panoramio_%281%29.jpg',
  'bh-yintan-base':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/BeiHaiYanTan.jpg/1280px-BeiHaiYanTan.jpg',
  'bh-oldtown':
    
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/%E5%8C%97%E6%B5%B7%E5%B8%82_%E7%99%BE%E5%B9%B4%E8%80%81%E8%A1%97_-_panoramio.jpg/1280px-%E5%8C%97%E6%B5%B7%E5%B8%82_%E7%99%BE%E5%B9%B4%E8%80%81%E8%A1%97_-_panoramio.jpg',
  'bh-weizhou-optional':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/%E5%8C%97%E6%B5%B7_%E6%B6%A0%E6%B4%B2%E5%B2%9B_%E6%9C%88%E4%BA%AE%E6%B9%BE_-_panoramio.jpg/1280px-%E5%8C%97%E6%B5%B7_%E6%B6%A0%E6%B4%B2%E5%B2%9B_%E6%9C%88%E4%BA%AE%E6%B9%BE_-_panoramio.jpg',
  'pt-gate': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/%E8%88%9F%E5%B1%B1.%E6%B2%88%E5%AE%B6%E9%97%A8.%E5%8D%81%E9%87%8C%E6%B8%94%E6%B8%AF_-_panoramio.jpg/1280px-%E8%88%9F%E5%B1%B1.%E6%B2%88%E5%AE%B6%E9%97%A8.%E5%8D%81%E9%87%8C%E6%B8%94%E6%B8%AF_-_panoramio.jpg',
  'pt-island-base':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Putuo_Shan_2006_3.JPG/1280px-Putuo_Shan_2006_3.JPG',
  'pt-foding-optional':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/%E6%99%AE%E9%99%80%E5%B1%B1.%E4%BD%9B%E9%A1%B6%E5%B1%B1.%E6%85%A7%E6%B5%8E%E7%A6%85%E5%AF%BA_-_panoramio_%281%29.jpg/1280px-%E6%99%AE%E9%99%80%E5%B1%B1.%E4%BD%9B%E9%A1%B6%E5%B1%B1.%E6%85%A7%E6%B5%8E%E7%A6%85%E5%AF%BA_-_panoramio_%281%29.jpg',
  'qufu-sankong':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/%E6%9B%B2%E9%98%9C%E5%AD%94%E5%BA%99%E5%A4%A7%E6%88%90%E6%AE%BF.jpg/1280px-%E6%9B%B2%E9%98%9C%E5%AD%94%E5%BA%99%E5%A4%A7%E6%88%90%E6%AE%BF.jpg',
  'qufu-exit':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Qufudong_Railway_Station_2015.08.16_12-24-12.jpg/1280px-Qufudong_Railway_Station_2015.08.16_12-24-12.jpg',
  'kp-base':
    
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Kaiping_diaolou_zili_village_2012_01.jpg/1280px-Kaiping_diaolou_zili_village_2012_01.jpg',
  'kp-zili':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Jinjiangli_0004.jpg/1280px-Jinjiangli_0004.jpg',
  'kp-jinjiang-optional':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Jinjiangli_0004.jpg/1280px-Jinjiangli_0004.jpg',
  'dx-shaoguan-gate':
    
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/%E9%9F%B6%E5%85%B3%E5%B8%82%E4%B8%AD%E5%BF%83%E7%9A%84%E9%A9%AC%E8%B7%AF%E8%BE%B9_-_By_%E7%A7%91%E6%8A%80%E5%B0%8F%E8%BE%9B_-_panoramio.jpg/1280px-%E9%9F%B6%E5%85%B3%E5%B8%82%E4%B8%AD%E5%BF%83%E7%9A%84%E9%A9%AC%E8%B7%AF%E8%BE%B9_-_By_%E7%A7%91%E6%8A%80%E5%B0%8F%E8%BE%9B_-_panoramio.jpg',
  'dx-scenic':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/39002-Danxiashan_%2848989060302%29.jpg/1280px-39002-Danxiashan_%2848989060302%29.jpg',
  'jh-base':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Jiuhuashan_yunhai.JPG/1280px-Jiuhuashan_yunhai.JPG',
  'jh-cable-core':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Jiuhuashan_yunhai.JPG/1280px-Jiuhuashan_yunhai.JPG',
  'qd-chunan-base':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Thousand_Island_Lake.JPG/1280px-Thousand_Island_Lake.JPG',
  'qd-cruise':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/%E5%8D%83%E5%B2%9B%E6%B9%96.jpg/1280px-%E5%8D%83%E5%B2%9B%E6%B9%96.jpg',
  'qd-hangzhou-note':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/West_fa%C3%A7ade_of_Hangzhou_East_Railway_Station_%2820190807173604%29.jpg/1280px-West_fa%C3%A7ade_of_Hangzhou_East_Railway_Station_%2820190807173604%29.jpg',
  'wl-cq-buffer':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Chongqing_Nightscape.jpg/1280px-Chongqing_Nightscape.jpg',
  'wl-three-bridges':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Wulongtianshengsanqiao.JPG/1280px-Wulongtianshengsanqiao.JPG',
  'wl-town':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Wulong%2C_Chongqing.jpg/1280px-Wulong%2C_Chongqing.jpg',
  'hg-guiyang-gate':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/View_of_Guiyang%2C_Guizhou_from_Neighboring_Mountains.jpg/1280px-View_of_Guiyang%2C_Guizhou_from_Neighboring_Mountains.jpg',
  'hg-waterfall':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Huangguoshu_Waterfall.jpg/1280px-Huangguoshu_Waterfall.jpg',
  'hg-anshun-rest':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/A_tower_in_downtown_Anshun%2C_Guizhou%2C_China.jpg/1280px-A_tower_in_downtown_Anshun%2C_Guizhou%2C_China.jpg',
  'cz-base': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Changzhou_Skyline%2C_Jul_25_2022.jpg/1280px-Changzhou_Skyline%2C_Jul_25_2022.jpg',
  'cz-tianning':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Tianning_Temple_with_Tianning_Pagoda.jpg/1280px-Tianning_Temple_with_Tianning_Pagoda.jpg',
  'cz-yancheng-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/%E5%B8%B8%E5%B7%9E%E6%AD%A6%E8%BF%9B%E6%B7%B9%E5%9F%8E%E5%A4%A7%E9%97%A82.jpg/1280px-%E5%B8%B8%E5%B7%9E%E6%AD%A6%E8%BF%9B%E6%B7%B9%E5%9F%8E%E5%A4%A7%E9%97%A82.jpg',
  'wz-city-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/%E6%B8%A9%E5%B7%9E_%E6%B1%9F%E5%BF%83%E5%B1%BF_Jiang_Xin_Yu%2C_Wenzhou_-_panoramio.jpg/1280px-%E6%B8%A9%E5%B7%9E_%E6%B1%9F%E5%BF%83%E5%B1%BF_Jiang_Xin_Yu%2C_Wenzhou_-_panoramio.jpg',
  'wz-yandang-lingfeng':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/China2011_Zhejiang_YandangShan.jpg/1280px-China2011_Zhejiang_YandangShan.jpg',
  'hz-xihu-base':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Huizhou_West_Lake.jpg/1280px-Huizhou_West_Lake.jpg',
  'hz-sizhou-optional':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Huizhou_Sizhou_Ta_2013.09.21_08-26-23.jpg/1280px-Huizhou_Sizhou_Ta_2013.09.21_08-26-23.jpg',
  'hz-shuangyue-optional':
    
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/%E7%A8%94%E5%B9%B3%E5%8D%8A%E5%B2%9B%E6%B8%AF%E5%8F%A3%E9%95%87%E8%A7%82%E6%99%AF%E5%8F%B0%E5%BE%80%E5%8F%8C%E6%9C%88%E6%B9%BE.jpg/1280px-%E7%A8%94%E5%B9%B3%E5%8D%8A%E5%B2%9B%E6%B8%AF%E5%8F%A3%E9%95%87%E8%A7%82%E6%99%AF%E5%8F%B0%E5%BE%80%E5%8F%8C%E6%9C%88%E6%B9%BE.jpg',
  // famous P2 20260802 stops
  'fj-gate':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Tongren_Guizhou.jpg/1280px-Tongren_Guizhou.jpg',
  'fj-cable':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Fanjingshan-new.jpg/1280px-Fanjingshan-new.jpg',
  'fj-jinding-optional':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/%E6%A2%B5%E5%87%80%E5%B1%B1%E7%BA%A2%E4%BA%91%E9%87%91%E9%A1%B6_-_panoramio.jpg/1280px-%E6%A2%B5%E5%87%80%E5%B1%B1%E7%BA%A2%E4%BA%91%E9%87%91%E9%A1%B6_-_panoramio.jpg',
  'lb-base':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/%E8%8D%94%E6%B3%A2%E5%8E%BF%E5%9F%8E_-_panoramio.jpg/1280px-%E8%8D%94%E6%B3%A2%E5%8E%BF%E5%9F%8E_-_panoramio.jpg',
  'lb-xiaoqikong':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Xiaoqikong.JPG/1280px-Xiaoqikong.JPG',
  'lb-daqikong-optional':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/%E8%8D%94%E6%B3%A2%E5%A4%A7%E4%B8%83%E5%AD%94%EF%BC%8C202403_5.jpg/1280px-%E8%8D%94%E6%B3%A2%E5%A4%A7%E4%B8%83%E5%AD%94%EF%BC%8C202403_5.jpg',
  'snj-gate':
    
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/%E5%AE%9C%E6%98%8C%E6%BB%A8%E6%B1%9F%E5%85%AC%E5%9B%AD_-_panoramio.jpg/1280px-%E5%AE%9C%E6%98%8C%E6%BB%A8%E6%B1%9F%E5%85%AC%E5%9B%AD_-_panoramio.jpg',
  'snj-muyu':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/VM_5318_Muyu_Town.jpg/1280px-VM_5318_Muyu_Town.jpg',
  'snj-scenic':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/%E7%A5%9E%E5%86%9C%E6%9E%B6_%E7%A5%9E%E5%86%9C%E9%A1%B6%E6%99%AF%E5%8C%BA%E4%B9%8B%E5%86%B0%E7%80%91.jpg/1280px-%E7%A5%9E%E5%86%9C%E6%9E%B6_%E7%A5%9E%E5%86%9C%E9%A1%B6%E6%99%AF%E5%8C%BA%E4%B9%8B%E5%86%B0%E7%80%91.jpg',
  'es-city':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/202309_Enshi_City%2C_Hubei_at_Night.jpg/1280px-202309_Enshi_City%2C_Hubei_at_Night.jpg',
  'es-canyon':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Enshi_grand_canyon.jpg/1280px-Enshi_grand_canyon.jpg',
  'es-dislot-optional':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/%E6%81%A9%E6%96%BD%E5%A4%A7%E5%B3%A1%E8%B0%B72_-_panoramio.jpg/1280px-%E6%81%A9%E6%96%BD%E5%A4%A7%E5%B3%A1%E8%B0%B72_-_panoramio.jpg',
  'qd-kaili-gate':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Kaili_city%2C_guizhou%2C_china.JPG/1280px-Kaili_city%2C_guizhou%2C_china.JPG',
  'qd-xijiang':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Xijiang_Miao_Village.jpg/1280px-Xijiang_Miao_Village.jpg',
  'qd-zhaoxing':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/1_zhaoxing_2015.jpg/1280px-1_zhaoxing_2015.jpg',
  'zs-base':
    
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/GD_%E5%BB%A3%E6%9D%B1_ZS_%E4%B8%AD%E5%B1%B1%E5%B8%82_Zhongshan_%E7%9F%B3%E5%B2%90%E6%B2%B3_Shiqi_River_%E5%B2%90%E6%B1%9F%E6%A9%8B_QiJiang_Bridge_view_buildings_February_2025_R12S_03.jpg/1280px-GD_%E5%BB%A3%E6%9D%B1_ZS_%E4%B8%AD%E5%B1%B1%E5%B8%82_Zhongshan_%E7%9F%B3%E5%B2%90%E6%B2%B3_Shiqi_River_%E5%B2%90%E6%B1%9F%E6%A9%8B_QiJiang_Bridge_view_buildings_February_2025_R12S_03.jpg',
  'zs-cuiheng':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Former_Residence_of_Mr._Sun_Yat-sen.jpg/1280px-Former_Residence_of_Mr._Sun_Yat-sen.jpg',
  'zs-park-optional':
    
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/%E4%B8%AD%E5%B1%B1%E5%B8%82%E5%B2%90%E6%B1%9F%E5%85%AC%E5%9B%AD_qi_jiang_gong_yuan_-_panoramio.jpg/1280px-%E4%B8%AD%E5%B1%B1%E5%B8%82%E5%B2%90%E6%B1%9F%E5%85%AC%E5%9B%AD_qi_jiang_gong_yuan_-_panoramio.jpg',
  'lz-huanghe-base':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Skyline_Lanzhou_August_2025.jpg/1280px-Skyline_Lanzhou_August_2025.jpg',
  'lz-zhongshan-qiao':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Lanzhou_Zhongshan_Qiao_2013.12.28_17-26-24.jpg/1280px-Lanzhou_Zhongshan_Qiao_2013.12.28_17-26-24.jpg',
  'lz-museum-optional':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/New_Exhibition_Building_of_the_Gansu_Provincial_Museum.jpg/1280px-New_Exhibition_Building_of_the_Gansu_Provincial_Museum.jpg',
  'cs-chaozhou-base':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Paifangjie_%28cropped%29.jpg/1280px-Paifangjie_%28cropped%29.jpg',
  'cs-guangji':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Paifangjie_%28cropped%29.jpg/1280px-Paifangjie_%28cropped%29.jpg',
  'cs-shantou':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Shantou_harbour_and_skyline_viewed_from_Double_Island_June_2022.jpg/1280px-Shantou_harbour_and_skyline_viewed_from_Double_Island_June_2022.jpg',
  'g318m-chengdu':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/%E9%9B%AA%E5%B1%B1%E4%B8%8B%E7%9A%84%E6%88%90%E9%83%BD%E5%B8%82%E5%A4%A9%E9%99%85%E7%BA%BF_Chengdu_skyline_with_snow_capped_mountains.jpg/1280px-%E9%9B%AA%E5%B1%B1%E4%B8%8B%E7%9A%84%E6%88%90%E9%83%BD%E5%B8%82%E5%A4%A9%E9%99%85%E7%BA%BF_Chengdu_skyline_with_snow_capped_mountains.jpg',
  'g318m-yaan':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Ya%27an%2C_August_2020.jpg/1280px-Ya%27an%2C_August_2020.jpg',
  'g318m-luding':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Luding_Bridge_June_07_350D_127.jpg/1280px-Luding_Bridge_June_07_350D_127.jpg',
  'g318m-descend':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/%E9%9B%AA%E5%B1%B1%E4%B8%8B%E7%9A%84%E6%88%90%E9%83%BD%E5%B8%82%E5%A4%A9%E9%99%85%E7%BA%BF_Chengdu_skyline_with_snow_capped_mountains.jpg/1280px-%E9%9B%AA%E5%B1%B1%E4%B8%8B%E7%9A%84%E6%88%90%E9%83%BD%E5%B8%82%E5%A4%A9%E9%99%85%E7%BA%BF_Chengdu_skyline_with_snow_capped_mountains.jpg',
  'qixian-qiao-optional':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Qiao_Family_Compound%2C_Jinyiyuan.JPG/1280px-Qiao_Family_Compound%2C_Jinyiyuan.JPG',
  // prefecture wave 20260802d stops
  'ly-county-base':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/27427-Luoyang_%2849067744628%29.jpg/1280px-27427-Luoyang_%2849067744628%29.jpg',
  'ly-baimasi':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/27495-Luoyang%2C_White_Horse_Temple.jpg/1280px-27495-Luoyang%2C_White_Horse_Temple.jpg',
  'ly-erlitou':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/20240815_Erlitou_Xia_Capital_Site_Museum_01.jpg/1280px-20240815_Erlitou_Xia_Capital_Site_Museum_01.jpg',
  'ly-xiaolangdi-optional':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Xiaolangdi_Dam_Scenic_Area_-_10323808574.jpg/1280px-Xiaolangdi_Dam_Scenic_Area_-_10323808574.jpg',
  'ly-weipo-optional':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Xiaolangdi_Dam_Scenic_Area_-_10323808574.jpg/1280px-Xiaolangdi_Dam_Scenic_Area_-_10323808574.jpg',
  'kf-gulou-base':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/%E5%BC%80%E5%B0%81%E9%BE%99%E4%BA%AD.JPG/1280px-%E5%BC%80%E5%B0%81%E9%BE%99%E4%BA%AD.JPG',
  'kf-qingming':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Millennium_City_Park_02.jpg/1280px-Millennium_City_Park_02.jpg',
  'kf-iron-pagoda':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/%E5%BC%80%E5%B0%81%E9%93%81%E5%A1%94.jpg/1280px-%E5%BC%80%E5%B0%81%E9%93%81%E5%A1%94.jpg',
  'kf-wall-optional':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/%E5%BC%80%E5%B0%81%E9%BE%99%E4%BA%AD.JPG/1280px-%E5%BC%80%E5%B0%81%E9%BE%99%E4%BA%AD.JPG',
  'szc-base':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Humble_Administrator%27s_Garden_2015.JPG/1280px-Humble_Administrator%27s_Garden_2015.JPG',
  'szc-zhouzhuang':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Zhouzhuang_water_town.jpg/1280px-Zhouzhuang_water_town.jpg',
  'szc-tongli':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Tongli_Town.jpg/1280px-Tongli_Town.jpg',
  'szc-changshu-optional':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/%E5%B8%B8%E7%86%9F%E5%AE%8B%E5%B4%87%E6%95%99%E5%85%B4%E7%A6%8F%E5%AF%BA%E6%96%B9%E5%A1%94.jpg/1280px-%E5%B8%B8%E7%86%9F%E5%AE%8B%E5%B4%87%E6%95%99%E5%85%B4%E7%A6%8F%E5%AF%BA%E6%96%B9%E5%A1%94.jpg',
  'dl-dt-base':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/%E5%A4%A7%E7%90%86%E5%8F%A4%E5%9F%8E%E5%8D%97%E9%97%A8-2064560.jpg/1280px-%E5%A4%A7%E7%90%86%E5%8F%A4%E5%9F%8E%E5%8D%97%E9%97%A8-2064560.jpg',
  'dl-dt-xizhou':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/%E5%96%9C%E6%B4%B2%E5%8F%A4%E9%95%87%E7%AE%80%E4%BB%8B.jpg/1280px-%E5%96%9C%E6%B4%B2%E5%8F%A4%E9%95%87%E7%AE%80%E4%BB%8B.jpg',
  'dl-dt-eryuan':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Cibi_Lake_viewed_form_north_shore.JPG/1280px-Cibi_Lake_viewed_form_north_shore.JPG',
  'dl-dt-shaxi':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/%E5%89%91%E5%B7%9D%E6%B2%99%E6%BA%AA%E5%8F%A4%E9%95%87.jpg/1280px-%E5%89%91%E5%B7%9D%E6%B2%99%E6%BA%AA%E5%8F%A4%E9%95%87.jpg',
  'dl-dt-hotspring-optional':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/%E6%B4%B1%E6%BA%90%E5%A4%A7%E7%90%86%E5%9C%B0%E7%83%AD%E5%9B%BD%E6%99%AF%E5%8C%BA%E5%86%85%E7%9A%84%E5%A4%A7%E6%BB%9A%E9%94%85.jpg/1280px-%E6%B4%B1%E6%BA%90%E5%A4%A7%E7%90%86%E5%9C%B0%E7%83%AD%E5%9B%BD%E6%99%AF%E5%8C%BA%E5%86%85%E7%9A%84%E5%A4%A7%E6%BB%9A%E9%94%85.jpg',
  // prefecture wave 20260802e stops
  'xz-county-base':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/%E5%B1%B1%E8%A5%BF%E7%9C%81%E5%BF%BB%E5%B7%9E%E5%B8%82%E5%BF%BB%E5%BA%9C%E5%8D%80%E9%9F%93%E5%B2%A9%E6%9D%91%E5%85%83%E5%A5%BD%E5%95%8F%E5%A2%93%E7%9A%84%E9%87%8E%E5%8F%B2%E4%BA%AD.jpg/1280px-%E5%B1%B1%E8%A5%BF%E7%9C%81%E5%BF%BB%E5%B7%9E%E5%B8%82%E5%BF%BB%E5%BA%9C%E5%8D%80%E9%9F%93%E5%B2%A9%E6%9D%91%E5%85%83%E5%A5%BD%E5%95%8F%E5%A2%93%E7%9A%84%E9%87%8E%E5%8F%B2%E4%BA%AD.jpg',
  'xz-daixian':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/%E4%BB%A3%E5%8E%BF%E9%98%BF%E8%82%B2%E7%8E%8B%E5%A1%94%E4%BE%A7%E9%9D%A2.jpg/1280px-%E4%BB%A3%E5%8E%BF%E9%98%BF%E8%82%B2%E7%8E%8B%E5%A1%94%E4%BE%A7%E9%9D%A2.jpg',
  'xz-yanmen':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Barbican_gate_of_Yanmen_Pass_%2820250712165843%29.jpg/1280px-Barbican_gate_of_Yanmen_Pass_%2820250712165843%29.jpg',
  'xz-dingxiang-optional':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Dingxiang_Yan_Xishan_Jiuju_2013.08.28_15-27-08.jpg/1280px-Dingxiang_Yan_Xishan_Jiuju_2013.08.28_15-27-08.jpg',
  'xz-ningwu-optional':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/%E8%8A%A6%E8%8A%BD%E5%B1%B1%E8%87%AA%E7%84%B6%E4%BF%9D%E6%8A%A4%E5%8C%BA%E5%86%85%E4%BA%94%E5%9D%9D%E7%BA%BF%E2%80%94%E2%80%942012-04-30_-_panoramio.jpg/1280px-%E8%8A%A6%E8%8A%BD%E5%B1%B1%E8%87%AA%E7%84%B6%E4%BF%9D%E6%8A%A4%E5%8C%BA%E5%86%85%E4%BA%94%E5%9D%9D%E7%BA%BF%E2%80%94%E2%80%942012-04-30_-_panoramio.jpg',
  'yzc-base':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/%E6%89%AC%E5%B7%9E%E6%96%87%E6%98%8C%E9%98%81.jpg/1280px-%E6%89%AC%E5%B7%9E%E6%96%87%E6%98%8C%E9%98%81.jpg',
  'yzc-gaoyou':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Yucheng_Postal_Stop_entrance.jpg/1280px-Yucheng_Postal_Stop_entrance.jpg',
  'yzc-yizheng-optional':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/%E4%BB%AA%E5%BE%81%E5%9B%AD%E5%8D%9A%E5%9B%AD%E8%BF%9C%E7%9C%BA.jpg/1280px-%E4%BB%AA%E5%BE%81%E5%9B%AD%E5%8D%9A%E5%9B%AD%E8%BF%9C%E7%9C%BA.jpg',
  'yzc-shaobo-optional':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Shaobo_Shiplock.jpg/1280px-Shaobo_Shiplock.jpg',
  'zj-base':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/%E8%A5%BF%E6%B4%A5%E6%B8%A1%E5%8E%86%E5%8F%B2%E6%96%87%E5%8C%96%E8%A1%97%E5%8C%BA_-_Xijin_Ferry_Historic_Area_-_2015.04_-_panoramio.jpg/1280px-%E8%A5%BF%E6%B4%A5%E6%B8%A1%E5%8E%86%E5%8F%B2%E6%96%87%E5%8C%96%E8%A1%97%E5%8C%BA_-_Xijin_Ferry_Historic_Area_-_2015.04_-_panoramio.jpg',
  'zj-jinshan':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/%E9%95%87%E6%B1%9F%E9%87%91%E5%B1%B1%E5%AF%BA.jpg/1280px-%E9%95%87%E6%B1%9F%E9%87%91%E5%B1%B1%E5%AF%BA.jpg',
  'zj-jiaoshan':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/%E9%95%87%E6%B1%9F%E7%84%A6%E5%B1%B1%E7%82%AE%E5%8F%B0.jpg/1280px-%E9%95%87%E6%B1%9F%E7%84%A6%E5%B1%B1%E7%82%AE%E5%8F%B0.jpg',
  'zj-beigu-optional':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/%E9%95%87%E6%B1%9F%E5%8C%97%E5%9B%BA%E5%B1%B1%E9%93%81%E5%A1%94.jpg/1280px-%E9%95%87%E6%B1%9F%E5%8C%97%E5%9B%BA%E5%B1%B1%E9%93%81%E5%A1%94.jpg',
  'aes-base':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/%E9%98%BF%E5%B0%94%E5%B1%B1_%E4%BA%94%E9%87%8C%E6%B3%89.jpg/1280px-%E9%98%BF%E5%B0%94%E5%B1%B1_%E4%BA%94%E9%87%8C%E6%B3%89.jpg',
  'aes-park':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Arxan.jpg/1280px-Arxan.jpg',
  'aes-tianchi':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/%E9%98%BF%E5%B0%94%E5%B1%B1%E5%A4%A9%E6%B1%A0_%E5%85%A8%E6%99%AF.jpg/1280px-%E9%98%BF%E5%B0%94%E5%B1%B1%E5%A4%A9%E6%B1%A0_%E5%85%A8%E6%99%AF.jpg',
  'aes-wuliquan-optional':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/%E9%98%BF%E5%B0%94%E5%B1%B1_%E4%BA%94%E9%87%8C%E6%B3%89.jpg/1280px-%E9%98%BF%E5%B0%94%E5%B1%B1_%E4%BA%94%E9%87%8C%E6%B3%89.jpg',
  'ay-base':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Exterior%2C_Yinxu_Museum_20241002-A.jpg/1280px-Exterior%2C_Yinxu_Museum_20241002-A.jpg',
  'ay-yinxu-museum':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Exterior%2C_Yinxu_Museum_20241002-A.jpg/1280px-Exterior%2C_Yinxu_Museum_20241002-A.jpg',
  'ay-yinxu-site':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Yinxu_Royal_Tombs_%2853565246028%29.jpg/1280px-Yinxu_Royal_Tombs_%2853565246028%29.jpg',
  'ay-wenfeng-optional':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/26120-Anyang_%2849086436522%29.jpg/1280px-26120-Anyang_%2849086436522%29.jpg',
  'jz-base':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/%E6%B2%B3%E5%8D%97%E7%84%A6%E4%BD%9C%E4%BA%91%E5%8F%B0%E5%B1%B1_-_panoramio.jpg/1280px-%E6%B2%B3%E5%8D%97%E7%84%A6%E4%BD%9C%E4%BA%91%E5%8F%B0%E5%B1%B1_-_panoramio.jpg',
  'jz-hongshi':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/%E6%B2%B3%E5%8D%97_%E4%BA%91%E5%8F%B0%E5%B1%B1_%E7%BA%A2%E7%9F%B3%E5%B3%A1_%E6%A0%87%E5%BF%97%E6%99%AF%E7%82%B9_-_panoramio.jpg/1280px-%E6%B2%B3%E5%8D%97_%E4%BA%91%E5%8F%B0%E5%B1%B1_%E7%BA%A2%E7%9F%B3%E5%B3%A1_%E6%A0%87%E5%BF%97%E6%99%AF%E7%82%B9_-_panoramio.jpg',
  'jz-quanpu-optional':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/%E4%BA%91%E5%8F%B0%E5%B1%B1%E6%B3%89%E7%80%91%E5%B3%A1_-_panoramio.jpg/1280px-%E4%BA%91%E5%8F%B0%E5%B1%B1%E6%B3%89%E7%80%91%E5%B3%A1_-_panoramio.jpg',
  'jz-zhuyu-optional':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/%E8%8C%B1%E8%90%B8%E5%B3%B0_-_panoramio_%282%29.jpg/1280px-%E8%8C%B1%E8%90%B8%E5%B3%B0_-_panoramio_%282%29.jpg',
  'nt-base':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Nantong_skyline_flanking_the_Hao_River.jpg/1280px-Nantong_skyline_flanking_the_Hao_River.jpg',
  'nt-haohe':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/City_of_Nantong_and_the_River_Hao.jpg/1280px-City_of_Nantong_and_the_River_Hao.jpg',
  'nt-langshan':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Buddhist_temple_on_Wolf_Hill.JPG/1280px-Buddhist_temple_on_Wolf_Hill.JPG',
  'nt-museum-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/%E5%8D%97%E9%80%9A%E5%8D%9A%E7%89%A9%E8%8B%911.jpg/1280px-%E5%8D%97%E9%80%9A%E5%8D%9A%E7%89%A9%E8%8B%911.jpg',
  'jx-base':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/%E5%98%89%E5%85%B4%E5%8D%97%E6%B9%96.jpg/1280px-%E5%98%89%E5%85%B4%E5%8D%97%E6%B9%96.jpg',
  'jx-nanhu':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/%E5%98%89%E5%85%B4%E5%8D%97%E6%B9%96%2C_2021-10-30_03.jpg/1280px-%E5%98%89%E5%85%B4%E5%8D%97%E6%B9%96%2C_2021-10-30_03.jpg',
  'jx-xitang':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/1_xitang_zhejiang_2023.jpg/1280px-1_xitang_zhejiang_2023.jpg',
  'huz-nanxun-base':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/%E5%8D%97%E6%B5%94%E5%8F%A4%E9%95%87%E5%BB%8A%E6%A1%A5.jpg/1280px-%E5%8D%97%E6%B5%94%E5%8F%A4%E9%95%87%E5%BB%8A%E6%A1%A5.jpg',
  'huz-xiaolianzhuang':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/%E5%8D%97%E6%B5%94%E5%8F%A4%E9%95%87%E5%B0%8F%E8%8E%B2%E5%BA%84.jpg/1280px-%E5%8D%97%E6%B5%94%E5%8F%A4%E9%95%87%E5%B0%8F%E8%8E%B2%E5%BA%84.jpg',
  'huz-baijianlou':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Nanxun_-_Ancient_water_town_-_0081.jpg/1280px-Nanxun_-_Ancient_water_town_-_0081.jpg',
  'huz-feiying-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/%E6%B9%96%E5%B7%9E%E9%A3%9E%E8%8B%B1%E5%A1%94%2C_2009-01-26_01.jpg/1280px-%E6%B9%96%E5%B7%9E%E9%A3%9E%E8%8B%B1%E5%A1%94%2C_2009-01-26_01.jpg',
  'yy-base':
    'https://upload.wikimedia.org/wikipedia/commons/1/1b/Frontal_view_of_Yueyang_Tower%2C_Hunan%2C_China1.jpg',
  'yy-yueyanglou':
    'https://upload.wikimedia.org/wikipedia/commons/1/1b/Frontal_view_of_Yueyang_Tower%2C_Hunan%2C_China1.jpg',
  'yy-dongting':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/%E6%B4%9E%E5%BA%AD%E6%B9%96%E5%A4%A7%E6%A1%A5.jpg/1280px-%E6%B4%9E%E5%BA%AD%E6%B9%96%E5%A4%A7%E6%A1%A5.jpg',
  'hd-base':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/%E9%82%AF%E9%83%B8%E4%B8%9B%E5%8F%B0%E5%85%AC%E5%9B%AD_1.jpg/1280px-%E9%82%AF%E9%83%B8%E4%B8%9B%E5%8F%B0%E5%85%AC%E5%9B%AD_1.jpg',
  'hd-congtai':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/%E6%AD%A6%E7%81%B5%E4%B8%9B%E5%8F%B0_1.jpg/1280px-%E6%AD%A6%E7%81%B5%E4%B8%9B%E5%8F%B0_1.jpg',
  'hd-xiangtang-optional':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Xiangtangshan_Southern_Grottoes_17.jpg/1280px-Xiangtangshan_Southern_Grottoes_17.jpg',
  // prefecture wave 20260802f stops
  'yc-base':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/%E8%BF%90%E5%9F%8E%E7%9B%90%E6%B9%96.jpg/1280px-%E8%BF%90%E5%9F%8E%E7%9B%90%E6%B9%96.jpg',
  'yc-yanhu':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/%E8%BF%90%E5%9F%8E%E7%9B%90%E6%B9%96.jpg/1280px-%E8%BF%90%E5%9F%8E%E7%9B%90%E6%B9%96.jpg',
  'yc-guandi':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Guan_Di_Temple_Yuncheng_Shanxi.JPG/1280px-Guan_Di_Temple_Yuncheng_Shanxi.JPG',
  'yc-museum-optional':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Guan_Di_Temple_Yuncheng_Shanxi.JPG/1280px-Guan_Di_Temple_Yuncheng_Shanxi.JPG',
  'lf-base':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/%E4%B8%B4%E6%B1%BE%E6%BB%A8%E6%B2%B3%E6%96%B0%E5%9F%8E%EF%BC%8C10%E6%9C%882010.jpg/1280px-%E4%B8%B4%E6%B1%BE%E6%BB%A8%E6%B2%B3%E6%96%B0%E5%9F%8E%EF%BC%8C10%E6%9C%882010.jpg',
  'lf-museum':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/%E4%B8%B4%E6%B1%BE%E5%8D%9A%E7%89%A9%E9%A6%86%E5%A4%A7%E9%97%A8.JPG/1280px-%E4%B8%B4%E6%B1%BE%E5%8D%9A%E7%89%A9%E9%A6%86%E5%A4%A7%E9%97%A8.JPG',
  'lf-guangsheng':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/%E5%B9%BF%E8%83%9C%E5%AF%BA_03.JPG/1280px-%E5%B9%BF%E8%83%9C%E5%AF%BA_03.JPG',
  'lf-huamen-optional':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/%E5%8D%8E%E9%97%A8.jpg/1280px-%E5%8D%8E%E9%97%A8.jpg',
  'wf-base':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/%E5%8D%81%E7%AC%8F%E5%9B%AD%E9%97%A8%E5%8F%A3.jpg/1280px-%E5%8D%81%E7%AC%8F%E5%9B%AD%E9%97%A8%E5%8F%A3.jpg',
  'wf-shihu':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/%E5%8D%81%E7%AC%8F%E5%9B%AD%E9%97%A8%E5%8F%A3.jpg/1280px-%E5%8D%81%E7%AC%8F%E5%9B%AD%E9%97%A8%E5%8F%A3.jpg',
  'wf-kite-museum':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Weifang_World_Kite_Museum.jpg/1280px-Weifang_World_Kite_Museum.jpg',
  'wf-park-optional': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/20210911_Weifang_people%27s_Park_3.jpg/1280px-20210911_Weifang_people%27s_Park_3.jpg',
  'jgz-base':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/%E8%8D%86%E5%B7%9E%E4%B8%9C%E9%97%A8%E5%8F%A4%E5%9F%8E%E5%A2%99.jpg/1280px-%E8%8D%86%E5%B7%9E%E4%B8%9C%E9%97%A8%E5%8F%A4%E5%9F%8E%E5%A2%99.jpg',
  'jgz-wall':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/%E8%8D%86%E5%B7%9E%E4%B8%9C%E9%97%A8%E5%8F%A4%E5%9F%8E%E5%A2%99.jpg/1280px-%E8%8D%86%E5%B7%9E%E4%B8%9C%E9%97%A8%E5%8F%A4%E5%9F%8E%E5%A2%99.jpg',
  'jgz-museum':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Jingzhou_Museum.jpg/1280px-Jingzhou_Museum.jpg',
  'jgz-park-optional':
    
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/%E8%8D%86%E5%B7%9E%E5%9F%8E%E4%B8%9C%E9%97%A8%E5%A4%96%E7%9A%84%E6%8A%A4%E5%9F%8E%E6%B2%B3.jpg/1280px-%E8%8D%86%E5%B7%9E%E5%9F%8E%E4%B8%9C%E9%97%A8%E5%A4%96%E7%9A%84%E6%8A%A4%E5%9F%8E%E6%B2%B3.jpg',
  'xc-base':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Xuancheng_City_Skyline.JPG/1280px-Xuancheng_City_Skyline.JPG',
  'xc-guangjiao':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Twin_Pagodas_of_Guangjiao_Temple_04_2021-03.jpg/1280px-Twin_Pagodas_of_Guangjiao_Temple_04_2021-03.jpg',
  'xc-zhaji':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Jingxian_Zhaji_2017.08.19_17-24-24.jpg/1280px-Jingxian_Zhaji_2017.08.19_17-24-24.jpg',
  'xc-taohuatan-optional':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Jingxian_Taohuatan_2017.08.19_07-36-27.jpg/1280px-Jingxian_Taohuatan_2017.08.19_07-36-27.jpg',
};

/** Neutral China fallback (Great Wall) — never foreign Unsplash scenery. */
export const PLACE_IMAGE_FALLBACK = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Great_Wall_of_China_July_2006.JPG/1280px-Great_Wall_of_China_July_2006.JPG';

