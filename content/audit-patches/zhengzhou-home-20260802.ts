import type { Route } from '../types';

/**
 * 岳父岳母家在郑州：中原高铁/城际可当日或过夜往返的线打上 fromZhengzhouHome。
 * 与 fromHome（北京家）正交，可同时为 true（如郑州本地线）。
 */
export const routeFieldPatches: Record<string, Partial<Route>> = {
  'huazhong-henan-zhengzhou': { fromZhengzhouHome: true },
  'huazhong-luoyang-kaifeng': { fromZhengzhouHome: true },
  'huazhong-henan-luoyang-county': { fromZhengzhouHome: true },
  'huazhong-henan-kaifeng': { fromZhengzhouHome: true },
  'huazhong-henan-anyang': { fromZhengzhouHome: true },
  'huazhong-henan-jiaozuo': { fromZhengzhouHome: true },
  // 郑武 / 郑十高铁可达的近邻短住
  'huazhong-wudang-3d': { fromZhengzhouHome: true },
  'huazhong-hubei-wuhan': { fromZhengzhouHome: true },
};
