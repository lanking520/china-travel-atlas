import type { Route } from '../types';

/**
 * Mark embedded corridor cards as legs so Explore 短线/长线 chips stay honest
 * when they appear inside compose timelines.
 */
export const routeFieldPatches: Record<string, Partial<Route>> = {
  'huadong-wuyuan-spring': { compositionKind: 'leg' },
  'huadong-jiangxi-lushan': { compositionKind: 'leg' },
  'huanan-xiamen-winter': { compositionKind: 'leg' },
  'huanan-fujian-quanzhou': { compositionKind: 'leg' },
  'huanan-guangzhou-chaoshan': { compositionKind: 'leg' },
  'huazhong-zhangjiajie': { compositionKind: 'leg' },
  'xinan-guizhou-huangguoshu': { compositionKind: 'leg' },
  'huabei-shanxi-pingyao-deep': { compositionKind: 'leg' },
  'huazhong-luoyang-kaifeng': { compositionKind: 'leg' },
  'dongbei-liaoning-shenyang': { compositionKind: 'leg' },
  'dongbei-dalian-summer': { compositionKind: 'leg' },
  'dongbei-heilongjiang-harbin-summer': { compositionKind: 'leg' },
  'dongbei-jilin-changchun': { compositionKind: 'leg' },
  'huabei-neimeng-hohhot': { compositionKind: 'leg' },
  'huabei-neimeng-aershan': { compositionKind: 'leg' },
  'huabei-neimeng-hulunbuir': { compositionKind: 'leg' },
  'huanan-hainan-haikou': { compositionKind: 'leg' },
  'huabei-beijing-city-slow': { compositionKind: 'leg' },
  'huabei-hebei-beidaihe': { compositionKind: 'leg' },
  'xinan-yunnan-kunming-city': { compositionKind: 'leg' },
  'xinan-chongqing-slow': { compositionKind: 'leg' },
  'huazhong-hunan-changsha': { compositionKind: 'leg' },
  'huazhong-hunan-fenghuang': { compositionKind: 'leg' },
  'huabei-shandong-taishan': { compositionKind: 'leg' },
  // Famous compose batch 5 embedded legs
  'huanan-guilin-yangshuo': { compositionKind: 'leg' },
  'huanan-guangxi-beihai': { compositionKind: 'leg' },
  'huanan-fujian-wuyi': { compositionKind: 'leg' },
  'huadong-anhui-jiuhua': { compositionKind: 'leg' },
  'huazhong-hubei-enshi': { compositionKind: 'leg' },
  'huazhong-yichang-three-gorges': { compositionKind: 'leg' },
  'xibei-ningxia-3d': { compositionKind: 'leg' },
  'xibei-ningxia-shapotou': { compositionKind: 'leg' },
  'xibei-gansu-lanzhou-huanghe': { compositionKind: 'leg' },
};
