import type { RegionId } from './types';

/** 大陆省级行政区（港澳台暂未挂路线） */
export type ProvinceId =
  | 'beijing'
  | 'tianjin'
  | 'hebei'
  | 'shanxi'
  | 'neimenggu'
  | 'liaoning'
  | 'jilin'
  | 'heilongjiang'
  | 'shanghai'
  | 'jiangsu'
  | 'zhejiang'
  | 'anhui'
  | 'fujian'
  | 'jiangxi'
  | 'shandong'
  | 'henan'
  | 'hubei'
  | 'hunan'
  | 'guangdong'
  | 'guangxi'
  | 'hainan'
  | 'chongqing'
  | 'sichuan'
  | 'guizhou'
  | 'yunnan'
  | 'xizang'
  | 'shaanxi'
  | 'gansu'
  | 'qinghai'
  | 'ningxia'
  | 'xinjiang';

export interface Province {
  id: ProvinceId;
  name: string;
  region: RegionId;
  /** 在所属大区地图上的相对坐标 0–100 */
  x: number;
  y: number;
}

export const provinces: Province[] = [
  // 华北
  { id: 'beijing', name: '北京', region: 'huabei', x: 62, y: 42 },
  { id: 'tianjin', name: '天津', region: 'huabei', x: 72, y: 48 },
  { id: 'hebei', name: '河北', region: 'huabei', x: 55, y: 55 },
  { id: 'shanxi', name: '山西', region: 'huabei', x: 38, y: 58 },
  { id: 'neimenggu', name: '内蒙古', region: 'huabei', x: 45, y: 28 },
  { id: 'shandong', name: '山东', region: 'huabei', x: 78, y: 68 },
  // 东北
  { id: 'liaoning', name: '辽宁', region: 'dongbei', x: 35, y: 70 },
  { id: 'jilin', name: '吉林', region: 'dongbei', x: 55, y: 48 },
  { id: 'heilongjiang', name: '黑龙江', region: 'dongbei', x: 55, y: 28 },
  // 华东
  { id: 'shanghai', name: '上海', region: 'huadong', x: 78, y: 55 },
  { id: 'jiangsu', name: '江苏', region: 'huadong', x: 62, y: 42 },
  { id: 'zhejiang', name: '浙江', region: 'huadong', x: 68, y: 68 },
  { id: 'anhui', name: '安徽', region: 'huadong', x: 48, y: 48 },
  { id: 'jiangxi', name: '江西', region: 'huadong', x: 42, y: 72 },
  // 华中
  { id: 'henan', name: '河南', region: 'huazhong', x: 55, y: 35 },
  { id: 'hubei', name: '湖北', region: 'huazhong', x: 55, y: 55 },
  { id: 'hunan', name: '湖南', region: 'huazhong', x: 52, y: 75 },
  { id: 'shaanxi', name: '陕西', region: 'huazhong', x: 28, y: 40 },
  // 华南
  { id: 'fujian', name: '福建', region: 'huanan', x: 72, y: 35 },
  { id: 'guangdong', name: '广东', region: 'huanan', x: 55, y: 55 },
  { id: 'guangxi', name: '广西', region: 'huanan', x: 32, y: 58 },
  { id: 'hainan', name: '海南', region: 'huanan', x: 48, y: 85 },
  // 西南
  { id: 'chongqing', name: '重庆', region: 'xinan', x: 62, y: 42 },
  { id: 'sichuan', name: '四川', region: 'xinan', x: 42, y: 45 },
  { id: 'guizhou', name: '贵州', region: 'xinan', x: 58, y: 62 },
  { id: 'yunnan', name: '云南', region: 'xinan', x: 35, y: 75 },
  // 西北
  { id: 'gansu', name: '甘肃', region: 'xibei', x: 45, y: 55 },
  { id: 'ningxia', name: '宁夏', region: 'xibei', x: 62, y: 42 },
  { id: 'xinjiang', name: '新疆', region: 'xibei', x: 25, y: 40 },
  // 青藏（青海挂青藏，便于高原提示；也可从西北进入）
  { id: 'qinghai', name: '青海', region: 'qingzang', x: 55, y: 45 },
  { id: 'xizang', name: '西藏', region: 'qingzang', x: 35, y: 60 },
];

export function getProvinceById(id: ProvinceId): Province | undefined {
  return provinces.find((p) => p.id === id);
}

export function getProvincesByRegion(regionId: RegionId): Province[] {
  return provinces.filter((p) => p.region === regionId);
}
