import type { ProvinceId } from './provinces';

/**
 * 每省一条（或以上）独立主路线：primary 必须互不抢唯一归属。
 * also 仅表示途经，不能代替该省自己的 primary。
 */
export const routeProvinces: Record<
  string,
  { primary: ProvinceId; also?: ProvinceId[] }
> = {
  // 华北
  'mutianyu-day': { primary: 'beijing' },
  'gubei-overnight': { primary: 'beijing' },
  'tianjin-day': { primary: 'tianjin' },
  'chengde-2d': { primary: 'hebei' },
  'huabei-hebei-beidaihe': { primary: 'hebei' },
  'huabei-hebei-zhangjiakou': { primary: 'hebei' },
  'huabei-hebei-baoding': { primary: 'hebei' },
  'huabei-hebei-tangshan': { primary: 'hebei' },
  'huabei-hebei-shijiazhuang': { primary: 'hebei' },
  'huabei-shanxi-loop': { primary: 'shanxi' },
  'huabei-shanxi-pingyao-deep': { primary: 'shanxi' },
  'huabei-neimeng-summer': { primary: 'neimenggu' },
  'huabei-neimeng-hulunbuir': { primary: 'neimenggu' },
  'huabei-shandong-coast': { primary: 'shandong' },
  'huabei-shandong-yantai': { primary: 'shandong' },
  'huabei-shandong-taishan': { primary: 'shandong' },
  // 东北
  'dongbei-dalian-summer': { primary: 'liaoning' },
  'dongbei-liaoning-shenyang': { primary: 'liaoning' },
  'dongbei-changbai-summer': { primary: 'jilin' },
  'dongbei-jilin-yanbian': { primary: 'jilin' },
  'dongbei-harbin-snow-3d': { primary: 'heilongjiang' },
  'dongbei-heilongjiang-wudalianchi': { primary: 'heilongjiang' },
  // 华东
  'huadong-shanghai-short': { primary: 'shanghai' },
  'huadong-suzhou-nanjing': { primary: 'jiangsu' },
  'huadong-jiangsu-yangzhou': { primary: 'jiangsu' },
  'huadong-hangzhou-suzhou': { primary: 'zhejiang' },
  'huadong-suhan-slow': {
    primary: 'zhejiang',
    also: ['jiangsu', 'anhui'],
  },
  'huadong-huangshan-hui': { primary: 'anhui' },
  'huadong-wuyuan-spring': { primary: 'jiangxi' },
  // 华中
  'huazhong-luoyang-kaifeng': { primary: 'henan' },
  'huazhong-wudang-3d': { primary: 'hubei' },
  'huazhong-yichang-three-gorges': { primary: 'hubei' },
  'huazhong-zhangjiajie': { primary: 'hunan' },
  'huazhong-hunan-changsha': { primary: 'hunan' },
  'huazhong-xian-slow': { primary: 'shaanxi' },
  'huazhong-shaanxi-hanzhong': { primary: 'shaanxi' },
  // 华南
  'huanan-xiamen-winter': { primary: 'fujian' },
  'huanan-fujian-quanzhou': { primary: 'fujian' },
  'huanan-guangzhou-chaoshan': { primary: 'guangdong' },
  'huanan-zhuhai-3d': { primary: 'guangdong' },
  'huanan-guilin-yangshuo': { primary: 'guangxi' },
  'huanan-guangxi-detian': { primary: 'guangxi' },
  'huanan-sanya-winter': { primary: 'hainan' },
  'huanan-hainan-slow-west': { primary: 'hainan' },
  // 西南
  'xinan-chongqing-slow': { primary: 'chongqing' },
  'xinan-chengdu-slow': { primary: 'sichuan' },
  'xinan-dujiangyan-2d': { primary: 'sichuan' },
  'xinan-chuanxi-slow': { primary: 'sichuan' },
  'xinan-guizhou-loop': { primary: 'guizhou' },
  'xinan-guizhou-zhenyuan': { primary: 'guizhou' },
  'yunnan-dali-lijiang': { primary: 'yunnan' },
  'yunnan-xishuangbanna-winter': { primary: 'yunnan' },
  'yunnan-dianxi-tengchong': { primary: 'yunnan' },
  // 西北 / 青藏
  'xibei-dunhuang-zhangye': { primary: 'gansu' },
  'xibei-lanzhou-xiahe': { primary: 'gansu' },
  'xibei-ningxia-3d': { primary: 'ningxia' },
  'xibei-ningxia-shapotou': { primary: 'ningxia' },
  'xibei-xinjiang-north': { primary: 'xinjiang' },
  'xibei-xinjiang-yili': { primary: 'xinjiang' },
  'xibei-xinjiang-south': { primary: 'xinjiang' },
  'xibei-xinjiang-kashi': { primary: 'xinjiang' },
  'xibei-xinjiang-turpan': { primary: 'xinjiang' },
  'xibei-xinjiang-duku': { primary: 'xinjiang' },
  'qingzang-qinghai-lake': { primary: 'qinghai' },
  'qingzang-xining-3d': { primary: 'qinghai' },
  'qingzang-qilian-optional': { primary: 'qinghai' },
  'qingzang-lhasa-slow': { primary: 'xizang' },
  'qingzang-shigatse-taste': { primary: 'xizang' },
  // 全国大环线（跨省；primary 为枢纽省，also 途经）
  'national-qinggan-slow': {
    primary: 'qinghai',
    also: ['gansu'],
  },
  'national-silkroad-slow': {
    primary: 'gansu',
    also: ['shaanxi', 'xinjiang'],
  },
  'national-chuandian-slow': {
    primary: 'yunnan',
    also: ['sichuan'],
  },
  // 边陲城市
  'frontier-dandong': { primary: 'liaoning' },
  'frontier-manzhouli': { primary: 'neimenggu' },
  'frontier-mohe': { primary: 'heilongjiang' },
  'frontier-erlian': { primary: 'neimenggu' },
  'frontier-dongxing': { primary: 'guangxi' },
  'frontier-ruili': { primary: 'yunnan' },
  // 长居推荐（城市基地）
  'longstay-dali': { primary: 'yunnan' },
  'longstay-kunming': { primary: 'yunnan' },
  'longstay-yangshuo': { primary: 'guangxi' },
  'longstay-weihai': { primary: 'shandong' },
  'longstay-hulunbuir': { primary: 'neimenggu' },
  'longstay-dujiangyan': { primary: 'sichuan' },
  'longstay-zhenyuan': { primary: 'guizhou' },
  'longstay-hainan-east': { primary: 'hainan' },
};
