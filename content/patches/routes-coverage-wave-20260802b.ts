import type { Route } from '../types';

/**
 * Coverage wave 2026-08-02b: tier-2 cities + G214/G210 + 北京市区 + 青藏铁路.
 * Evidence: research/notes/multi-discovery/* + coverage-gap-matrix-20260802.md
 */
export const patchRoutes: Route[] = [
  {
    id: 'huadong-jiangsu-wuxi',
    title: '无锡 · 太湖鼋头渚慢游',
    region: 'huadong',
    seasons: ['spring', 'autumn', 'summer'],
    tripType: 'short',
    fromHome: false,
    daysLabel: '约3–5天',
    transport:
      '北京南/北京站高铁经上海或南京至无锡站/无锡东约5–6小时；市内地铁+打车；鼋头渚观光车。结束后高铁回北京',
    budgetLabel: '本趟约2200–4000元（高铁+电梯酒店；双人）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/%E6%97%A0%E9%94%A1%E9%BC%8B%E5%A4%B4%E6%B8%9A%2C_2007-01-02.jpg/1280px-%E6%97%A0%E9%94%A1%E9%BC%8B%E5%A4%B4%E6%B8%9A%2C_2007-01-02.jpg',
    summary:
      '强二线江南补线：鼋头渚电瓶车/船看太湖，蠡园或寄畅园平缓园林分日；三阳广场地铁沿线歇住。勿与苏杭同趟特种兵连轴。',
    introduction:
      '无锡市辖滨湖/梁溪等区。爸妈优先近地铁电梯酒店，鼋头渚与园林分日；园区大靠观光车减步，勿硬爬充山全顶。\n\n可与苏州/上海换乘，但本线独立成团即可。石板与湖风注意防滑防寒。',
    seasonGuide:
      '春秋最佳。春樱可赏但人多错峰；夏湿热改早晚与室内；冬湿冷缩短湖边停留。',
    whyFast: '寄畅园/古运河可删；主体鼋头渚+一处园林。',
    notices: [
      '鼋头渚园区大，优先观光车/电瓶车；台阶段量力。',
      '湖风大备薄外套；雨后石板防滑。',
      '园林勿一日多园；60+优惠与预约以景区当日为准。',
      '不与苏州拙政园、杭州西湖同日硬赶。',
    ],
    researchKeywords: ['无锡 鼋头渚 父母', '蠡园 寄畅园 慢游', '无锡 太湖 观光车'],
    sources: [
      {
        title: 'Wikivoyage：无锡',
        url: 'https://zh.wikivoyage.org/wiki/%E6%97%A0%E9%94%A1',
        kind: 'other',
        note: '城区与太湖概览，已改写',
      },
      {
        title: '无锡太湖鼋头渚风景区',
        url: 'http://www.ytz.com.cn/',
        kind: 'official',
        note: '票务与交通以官网为准',
      },
    ],
    stops: [
      {
        id: 'wx-liangxi-base',
        name: '梁溪/三阳慢住',
        days: 2,
        pace: 'slow',
        lat: 31.57,
        lng: 120.3,
        summary: '近地铁电梯酒店；抵达日只散步歇脚。',
        tips: '无锡东或无锡站打车；备薄外套。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/%E6%97%A0%E9%94%A1%E9%BC%8B%E5%A4%B4%E6%B8%9A%2C_2007-01-02.jpg/1280px-%E6%97%A0%E9%94%A1%E9%BC%8B%E5%A4%B4%E6%B8%9A%2C_2007-01-02.jpg',
      },
      {
        id: 'wx-yuantouzhu',
        name: '鼋头渚（观光车）',
        days: 1,
        pace: 'slow',
        lat: 31.52,
        lng: 120.22,
        summary: '电瓶车/船看太湖；充山登顶可删。',
        tips: '早到人少；防晒防滑。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Turtle_Head_Park_%E9%BB%BF%E9%A0%AD%E8%AF%B8%E5%85%AC%E5%9C%92_-_panoramio.jpg/1280px-Turtle_Head_Park_%E9%BB%BF%E9%A0%AD%E8%AF%B8%E5%85%AC%E5%9C%92_-_panoramio.jpg',
      },
      {
        id: 'wx-liyuan',
        name: '蠡园/寄畅园（二选一）',
        days: 1,
        pace: 'slow',
        lat: 31.53,
        lng: 120.25,
        summary: '平缓江南园林半日；勿两园连轴。',
        tips: '石径防滑；茶歇留空白。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/%E6%97%A0%E9%94%A1%E9%BC%8B%E5%A4%B4%E6%B8%9A%2C_2007-01-02.jpg/1280px-%E6%97%A0%E9%94%A1%E9%BC%8B%E5%A4%B4%E6%B8%9A%2C_2007-01-02.jpg',
      },
      {
        id: 'wx-canal-optional',
        name: '古运河/南长街浅逛（可选）',
        days: 1,
        pace: 'fast',
        lat: 31.56,
        lng: 120.29,
        summary: '平地短走；可整段删。',
        tips: '暑热改晚上短走。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/%E6%97%A0%E9%94%A1%E9%BC%8B%E5%A4%B4%E6%B8%9A%2C_2007-01-02.jpg/1280px-%E6%97%A0%E9%94%A1%E9%BC%8B%E5%A4%B4%E6%B8%9A%2C_2007-01-02.jpg',
      },
    ],
  },
  {
    id: 'huadong-zhejiang-ningbo',
    title: '宁波 · 天一阁与老外滩',
    region: 'huadong',
    seasons: ['spring', 'autumn', 'winter'],
    tripType: 'short',
    fromHome: false,
    daysLabel: '约3–5天',
    transport:
      '北京南高铁经杭州至宁波约6–7小时，或飞栎社；市区地铁/打车。结束后高铁或飞回北京',
    budgetLabel: '本趟约2300–4200元（高铁/机票+电梯酒店；双人）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Tianyi_Pavilion%2C_Ningbo.jpg/1280px-Tianyi_Pavilion%2C_Ningbo.jpg',
    summary:
      '强二线浙东补线：天一阁庭院平缓看展，老外滩江边散步；东钱湖可选日归观光车。互补杭州，勿同趟硬赶普陀山船渡。',
    introduction:
      '宁波市辖海曙/鄞州等。爸妈住天一阁或地铁沿线电梯酒店；阁内少台阶急段，可坐歇。\n\n东钱湖大可删。普陀山另线且含船渡，本线不排。',
    seasonGuide: '春秋舒适。夏湿热台风关注预警；冬湿冷缩短江边。',
    whyFast: '东钱湖可删；主体天一阁+老外滩。',
    notices: [
      '天一阁预约以馆方为准；庭院石板防滑。',
      '海鲜少生冷；肠胃弱点清淡。',
      '不排普陀山船渡连轴。',
    ],
    researchKeywords: ['宁波 天一阁 父母', '宁波 老外滩', '东钱湖 观光车'],
    sources: [
      {
        title: 'Wikivoyage：宁波',
        url: 'https://zh.wikivoyage.org/wiki/%E5%AE%81%E6%B3%A2',
        kind: 'other',
        note: '城区概览，已改写',
      },
      {
        title: '天一阁博物院',
        url: 'https://www.tianyige.com.cn/',
        kind: 'official',
        note: '预约与开放以官网为准',
      },
    ],
    stops: [
      {
        id: 'nb-haishu-base',
        name: '海曙慢住',
        days: 2,
        pace: 'slow',
        lat: 29.87,
        lng: 121.54,
        summary: '近天一阁或地铁电梯酒店；抵达歇脚。',
        tips: '栎社机场或宁波站打车。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Tianyi_Pavilion%2C_Ningbo.jpg/1280px-Tianyi_Pavilion%2C_Ningbo.jpg',
      },
      {
        id: 'nb-tianyige',
        name: '天一阁',
        days: 1,
        pace: 'slow',
        lat: 29.873,
        lng: 121.536,
        summary: '庭院与藏书楼浅逛；半日至一日。',
        tips: '早到人少；石板防滑。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Tianyi_Pavilion%2C_Ningbo.jpg/1280px-Tianyi_Pavilion%2C_Ningbo.jpg',
      },
      {
        id: 'nb-old-bund',
        name: '老外滩/江厦',
        days: 1,
        pace: 'slow',
        lat: 29.875,
        lng: 121.56,
        summary: '江边平地散步；半日。',
        tips: '风大备外套。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Tianyi_Pavilion%2C_Ningbo.jpg/1280px-Tianyi_Pavilion%2C_Ningbo.jpg',
      },
      {
        id: 'nb-dongqian-optional',
        name: '东钱湖浅段（可选）',
        days: 1,
        pace: 'fast',
        lat: 29.78,
        lng: 121.62,
        summary: '观光车/岸线短停；可删。',
        tips: '勿环湖暴走。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Tianyi_Pavilion%2C_Ningbo.jpg/1280px-Tianyi_Pavilion%2C_Ningbo.jpg',
      },
    ],
  },
  {
    id: 'huanan-guangdong-dongguan',
    title: '东莞 · 可园与虎门浅游',
    region: 'huanan',
    seasons: ['autumn', 'winter', 'spring'],
    tripType: 'short',
    fromHome: false,
    daysLabel: '约3–4天',
    transport:
      '北京飞广州/深圳再城际或打车入莞，或高铁至东莞/虎门站；市内打车。结束后经广深飞回北京',
    budgetLabel: '本趟约2500–4500元（机票+城际+住宿；双人）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Humen_Bridge.jpg/1280px-Humen_Bridge.jpg',
    summary:
      '珠三角强二线补线：可园岭南庭院平缓，虎门海战博物馆室内为主；松山湖岸线可选。秋冬避暑热；可作广深缓冲日。',
    introduction:
      '东莞市辖莞城/虎门等。爸妈住莞城或近可园电梯酒店；虎门博物馆空调日，室外炮台台阶量力。\n\n不排主题乐园连轴与虎门大桥徒步观光。',
    seasonGuide: '秋冬春适宜北方人。夏湿热难耐；台风季关注预警。',
    whyFast: '松山湖可删；主体可园+虎门室内。',
    notices: [
      '夏湿热改室内；多补水。',
      '虎门炮台台阶可外观。',
      '粤式点心少油；少生冷海鲜。',
    ],
    researchKeywords: ['东莞 可园 父母', '虎门 海战博物馆', '东莞 松山湖'],
    sources: [
      {
        title: 'Wikivoyage：东莞',
        url: 'https://zh.wikivoyage.org/wiki/%E4%B8%9C%E8%8E%9E',
        kind: 'other',
        note: '城区概览，已改写',
      },
      {
        title: '东莞可园博物馆',
        url: 'http://dgky.dg.gov.cn/',
        kind: 'official',
        note: '开放信息以官网为准',
      },
    ],
    stops: [
      {
        id: 'dg-guancheng-base',
        name: '莞城慢住',
        days: 1,
        pace: 'slow',
        lat: 23.05,
        lng: 113.75,
        summary: '近可园电梯酒店；抵达适应湿热。',
        tips: '高铁虎门/东莞站打车。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Humen_Bridge.jpg/1280px-Humen_Bridge.jpg',
      },
      {
        id: 'dg-keyuan',
        name: '可园',
        days: 1,
        pace: 'slow',
        lat: 23.043,
        lng: 113.763,
        summary: '岭南庭院平缓浅逛；半日。',
        tips: '石径防滑；暑热缩短。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Humen_Bridge.jpg/1280px-Humen_Bridge.jpg',
      },
      {
        id: 'dg-humen-museum',
        name: '虎门海战博物馆',
        days: 1,
        pace: 'slow',
        lat: 22.82,
        lng: 113.67,
        summary: '室内展为主；炮台外观量力。',
        tips: '空调日；台阶可跳过。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Humen_Bridge.jpg/1280px-Humen_Bridge.jpg',
      },
      {
        id: 'dg-songshan-optional',
        name: '松山湖岸线（可选）',
        days: 1,
        pace: 'fast',
        lat: 22.92,
        lng: 113.88,
        summary: '平路短走或坐车览；可删。',
        tips: '防晒；勿暴走环湖。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Humen_Bridge.jpg/1280px-Humen_Bridge.jpg',
      },
    ],
  },
  {
    id: 'huanan-guangdong-foshan',
    title: '佛山 · 祖庙与岭南慢逛',
    region: 'huanan',
    seasons: ['autumn', 'winter', 'spring'],
    tripType: 'short',
    fromHome: false,
    daysLabel: '约3–4天',
    transport:
      '北京飞广州再地铁/城际至佛山，或高铁至佛山西；禅城打车。结束后经广州飞回北京',
    budgetLabel: '本趟约2400–4300元（机票+城际+住宿；双人）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Foshan_Ancestral_Temple_39539-Foshan_%2849042475643%29.jpg/1280px-Foshan_Ancestral_Temple_39539-Foshan_%2849042475643%29.jpg',
    summary:
      '珠三角强二线补线：祖庙平缓看岭南建筑与武术展，岭南天地石板浅逛；梁园可选。秋冬友好；可作广州前后缓冲。',
    introduction:
      '佛山市禅城区。爸妈住祖庙或岭南天地附近电梯酒店；祖庙园区可坐歇，勿一日塞顺德硬赶。\n\n醒狮表演人多即撤。',
    seasonGuide: '秋冬春适宜。夏湿热改室内；台风关注预警。',
    whyFast: '梁园/顺德可删；主体祖庙+岭南天地。',
    notices: [
      '祖庙石板防滑；暑热缩短户外。',
      '粤菜清淡点蒸鱼白粥；少油炸。',
      '不与广州长隆等同趟特种兵。',
    ],
    researchKeywords: ['佛山 祖庙 父母', '岭南天地 慢逛', '佛山 梁园'],
    sources: [
      {
        title: 'Wikivoyage：佛山',
        url: 'https://zh.wikivoyage.org/wiki/%E4%BD%9B%E5%B1%B1',
        kind: 'other',
        note: '城区概览，已改写',
      },
      {
        title: '佛山祖庙博物馆',
        url: 'https://www.foshanmuseum.com/',
        kind: 'official',
        note: '开放与活动以官网为准',
      },
    ],
    stops: [
      {
        id: 'fs-chancheng-base',
        name: '禅城慢住',
        days: 1,
        pace: 'slow',
        lat: 23.03,
        lng: 113.12,
        summary: '祖庙附近电梯酒店；抵达歇脚。',
        tips: '广州南或佛山西换乘。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Foshan_Ancestral_Temple_39539-Foshan_%2849042475643%29.jpg/1280px-Foshan_Ancestral_Temple_39539-Foshan_%2849042475643%29.jpg',
      },
      {
        id: 'fs-zumiao',
        name: '佛山祖庙',
        days: 1,
        pace: 'slow',
        lat: 23.027,
        lng: 113.115,
        summary: '岭南古建筑平缓参观；半日。',
        tips: '表演场人多早撤。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Foshan_Ancestral_Temple_39539-Foshan_%2849042475643%29.jpg/1280px-Foshan_Ancestral_Temple_39539-Foshan_%2849042475643%29.jpg',
      },
      {
        id: 'fs-lingnan-tiandi',
        name: '岭南天地浅逛',
        days: 1,
        pace: 'slow',
        lat: 23.03,
        lng: 113.12,
        summary: '石板街区短走；茶歇。',
        tips: '防滑鞋；午休回酒店。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Foshan_Ancestral_Temple_39539-Foshan_%2849042475643%29.jpg/1280px-Foshan_Ancestral_Temple_39539-Foshan_%2849042475643%29.jpg',
      },
      {
        id: 'fs-liangyuan-optional',
        name: '梁园（可选）',
        days: 1,
        pace: 'fast',
        lat: 23.04,
        lng: 113.1,
        summary: '岭南园林半日；可删。',
        tips: '与祖庙分日。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Foshan_Ancestral_Temple_39539-Foshan_%2849042475643%29.jpg/1280px-Foshan_Ancestral_Temple_39539-Foshan_%2849042475643%29.jpg',
      },
    ],
  },
  {
    id: 'qingzang-g214-xining-taste',
    title: 'G214 · 西宁入口浅段',
    region: 'qingzang',
    seasons: ['summer', 'autumn'],
    tripType: 'short',
    fromHome: false,
    themes: ['corridor'],
    daysLabel: '约4–6天',
    transport:
      '北京飞西宁曹家堡；市区打车；往共和/湖区方向短段包车（非自驾强制）。结束后飞回北京。禁止连续南下玉树—昌都—香格里拉作适老贯通',
    budgetLabel: '本趟约3500–6500元（机票+包车短段+住宿；双人）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Qinghai_Lake.jpg/1280px-Qinghai_Lake.jpg',
    summary:
      'G214 适老浅尝：只走西宁适应 + 共和/湖区观景台短停量级。诚实难度——G214 南段玉树起海拔与车程陡增，不排父母连续公路贯通；可改青藏铁路主题进藏。',
    introduction:
      'G214 自西宁南下经共和、玉树远至滇西北，全线对腿脚与心肺要求高。本产品只立项「西宁入口浅段」：先西宁城区适应，再视身体包车短停湖区/共和方向观景台，当日或次日回撤西宁。\n\n玉树、囊谦、昌都、香格里拉连续驾驶不在适老默认范围。高反、头痛呕吐立即停游就医。',
    seasonGuide: '夏秋适宜。冬春路况与极寒另评估；湖区风大紫外强。',
    whyFast: '湖区/共和短停可整段删；只留西宁休整也成立。',
    notices: [
      '西宁海拔约2200米，仍须缓行；有基础病遵医嘱。',
      '不贯通 G214 南段（玉树及以南）；难度与海拔远超本线。',
      '湖区风大备帽墨镜；勿第一天直奔茶卡再赶夜路。',
      '非自驾强制：包车/专线即可；子女可轮换驾驶但非必需。',
    ],
    researchKeywords: ['G214 西宁 父母', '共和 青海湖 浅尝', 'G214 玉树 高反'],
    sources: [
      {
        title: 'Wikivoyage：西宁',
        url: 'https://zh.wikivoyage.org/wiki/%E8%A5%BF%E5%AE%81',
        kind: 'other',
        note: '进出与海拔概览，已改写',
      },
      {
        title: 'Wikivoyage：青海湖',
        url: 'https://zh.wikivoyage.org/wiki/%E9%9D%92%E6%B5%B7%E6%B9%96',
        kind: 'other',
        note: '湖区提示，已改写',
      },
    ],
    stops: [
      {
        id: 'g214-xining-adapt',
        name: '西宁适应慢住',
        days: 2,
        pace: 'slow',
        lat: 36.62,
        lng: 101.78,
        summary: '电梯酒店；前两日少活动多饮水。',
        tips: '近医院；备血氧仪更安心。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Qinghai_Lake.jpg/1280px-Qinghai_Lake.jpg',
      },
      {
        id: 'g214-xining-city',
        name: '西宁城区浅逛',
        days: 1,
        pace: 'slow',
        lat: 36.62,
        lng: 101.78,
        summary: '博物馆或东关周边短走；可改空白日。',
        tips: '动作慢；勿酗酒。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Qinghai_Lake.jpg/1280px-Qinghai_Lake.jpg',
      },
      {
        id: 'g214-gonghe-optional',
        name: '共和/湖区观景台短停（可选）',
        days: 1,
        pace: 'fast',
        lat: 36.28,
        lng: 100.62,
        summary: '包车观景台为主；不适即回撤西宁，可删。',
        tips: '单日往返；勿夜赶山路。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Qinghai_Lake.jpg/1280px-Qinghai_Lake.jpg',
      },
      {
        id: 'g214-buffer-optional',
        name: '空白休整（可选）',
        days: 1,
        pace: 'fast',
        lat: 36.62,
        lng: 101.78,
        summary: '只散步超市；巩固适应后飞京。',
        tips: '可多留。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Qinghai_Lake.jpg/1280px-Qinghai_Lake.jpg',
      },
    ],
  },
  {
    id: 'huazhong-shaanxi-g210-yanan',
    title: 'G210 · 延安红色浅段',
    region: 'huazhong',
    seasons: ['spring', 'autumn'],
    tripType: 'short',
    fromHome: false,
    themes: ['corridor'],
    daysLabel: '约3–5天',
    transport:
      '北京西高铁至延安约5–7小时，或经西安北换乘；市区打车。结束后高铁回北京或经西安转。非自驾强制',
    budgetLabel: '本趟约2200–4000元（高铁+住宿；双人）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Baota_Mountain.jpg/1280px-Baota_Mountain.jpg',
    summary:
      'G210 适老浅段：延安纪念馆室内为主，宝塔山缆车/外观量力；枣园坡地可删。诚实难度——陕北沟壑多坡，勿一日多点硬爬；不南下重庆山路贯通。',
    introduction:
      'G210 纵贯陕北至西南，全线山路与坡地对父母不友好。本线只取延安城区文化浅段：住宝塔区电梯酒店，纪念馆分日空调看展，宝塔山优先缆车或远观。\n\n不排壶口瀑布一日达特种兵，不连续自驾进川渝。',
    seasonGuide: '春秋最佳。夏晒冬寒；沙尘天改室内。',
    whyFast: '枣园/杨家岭可删；主体纪念馆+宝塔山外观。',
    notices: [
      '宝塔山台阶多，优先缆车或外观。',
      '革命旧址多坡地，腿脚紧只留一座。',
      '陕北菜偏油盐，点清淡。',
      'G210 南段山路不贯通作适老默认。',
    ],
    researchKeywords: ['延安 宝塔山 父母', '延安 纪念馆', 'G210 陕北'],
    sources: [
      {
        title: 'Wikivoyage：延安',
        url: 'https://zh.wikivoyage.org/wiki/%E5%BB%B6%E5%AE%89',
        kind: 'other',
        note: '城区与旧址概览，已改写',
      },
      {
        title: '延安市文化和旅游局',
        url: 'http://wlgj.yanan.gov.cn/',
        kind: 'official',
        note: '文旅提示参考',
      },
    ],
    stops: [
      {
        id: 'ya-baota-base',
        name: '宝塔区慢住',
        days: 2,
        pace: 'slow',
        lat: 36.59,
        lng: 109.49,
        summary: '电梯酒店；抵达日歇脚。',
        tips: '延安站打车。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Baota_Mountain.jpg/1280px-Baota_Mountain.jpg',
      },
      {
        id: 'ya-memorial',
        name: '革命纪念馆（室内）',
        days: 1,
        pace: 'slow',
        lat: 36.6,
        lng: 109.48,
        summary: '空调看展半日；少站立。',
        tips: '预约以馆方为准。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Baota_Mountain.jpg/1280px-Baota_Mountain.jpg',
      },
      {
        id: 'ya-pagoda-hill',
        name: '宝塔山（缆车/外观）',
        days: 1,
        pace: 'slow',
        lat: 36.595,
        lng: 109.5,
        summary: '缆车减负或山下远观；硬爬可删。',
        tips: '风大备外套。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Baota_Mountain.jpg/1280px-Baota_Mountain.jpg',
      },
      {
        id: 'ya-zaoyuan-optional',
        name: '枣园旧址（可选）',
        days: 1,
        pace: 'fast',
        lat: 36.62,
        lng: 109.43,
        summary: '坡地量力；可整段删。',
        tips: '与纪念馆分日。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Baota_Mountain.jpg/1280px-Baota_Mountain.jpg',
      },
    ],
  },
  {
    id: 'huabei-beijing-city-slow',
    title: '北京市区 · 颐和园慢游',
    region: 'huabei',
    seasons: ['spring', 'autumn', 'summer'],
    tripType: 'short',
    fromHome: true,
    daysLabel: '约2–4天（本地休整）',
    transport:
      '本市地铁/公交/打车；颐和园西北门或东宫门就近；园内电瓶车与昆明湖船。无需出京，回家即休整',
    budgetLabel: '本趟约400–1200元（门票+市内交通+简餐；双人；不含住宿）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/%E5%8D%81%E4%B8%83%E5%AD%94%E6%A1%A5.JPG/1280px-%E5%8D%81%E4%B8%83%E5%AD%94%E6%A1%A5.JPG',
    summary:
      '补北京市区慢游：颐和园分段坐船/电瓶车，万寿山登顶可删；圆明园或北海可选分日。本地休整首选，互补慕田峪/古北出城线。',
    introduction:
      '北京海淀/西城园林。爸妈分两日走颐和园：一日昆明湖岸线+船，一日长廊浅段；佛香阁台阶多可外观。\n\n圆明园遗址公园与北海另日。暑期午后少户外；黄金周核心区慎入。',
    seasonGuide:
      '春秋最佳。夏避暴晒与午后雷雨；冬冰面谨慎，缩短停留。含夏季以便 Explore 当季可见。',
    whyFast: '圆明园/北海可删；只留颐和园两日也成立。',
    notices: [
      '颐和园需预约；60+优惠以公园当日为准。',
      '园内优先电瓶车与游船；万寿山硬爬可删。',
      '石板雨后防滑；备水与遮阳帽。',
      '勿与慕田峪同日连轴。',
    ],
    researchKeywords: ['颐和园 电瓶车 父母', '圆明园 慢游', '北海公园 半日'],
    sources: [
      {
        title: 'Wikivoyage：北京',
        url: 'https://zh.wikivoyage.org/wiki/%E5%8C%97%E4%BA%AC',
        kind: 'other',
        note: '市区园林概览，已改写',
      },
      {
        title: '颐和园官方',
        url: 'https://www.summerpalace-china.com/',
        kind: 'official',
        note: '预约与交通以官网为准',
      },
    ],
    stops: [
      {
        id: 'bj-yiheyuan-lake',
        name: '颐和园 · 昆明湖段',
        days: 1,
        pace: 'slow',
        lat: 39.999,
        lng: 116.275,
        summary: '电瓶车/船环湖；十七孔桥浅段。',
        tips: '早场人少；风大备外套。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/%E5%8D%81%E4%B8%83%E5%AD%94%E6%A1%A5.JPG/1280px-%E5%8D%81%E4%B8%83%E5%AD%94%E6%A1%A5.JPG',
      },
      {
        id: 'bj-yiheyuan-corridor',
        name: '颐和园 · 长廊浅段',
        days: 1,
        pace: 'slow',
        lat: 39.9995,
        lng: 116.273,
        summary: '长廊平缓散步；佛香阁外观即可。',
        tips: '登顶台阶量大可删。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/%E5%8D%81%E4%B8%83%E5%AD%94%E6%A1%A5.JPG/1280px-%E5%8D%81%E4%B8%83%E5%AD%94%E6%A1%A5.JPG',
      },
      {
        id: 'bj-yuanmingyuan-optional',
        name: '圆明园（可选）',
        days: 1,
        pace: 'fast',
        lat: 40.007,
        lng: 116.298,
        summary: '遗址园区电瓶车；可删。',
        tips: '与颐和园分日。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/%E5%8D%81%E4%B8%83%E5%AD%94%E6%A1%A5.JPG/1280px-%E5%8D%81%E4%B8%83%E5%AD%94%E6%A1%A5.JPG',
      },
      {
        id: 'bj-beihai-optional',
        name: '北海公园（可选）',
        days: 1,
        pace: 'fast',
        lat: 39.925,
        lng: 116.389,
        summary: '湖岸短走或船；白塔台阶量力，可删。',
        tips: '周末人多早撤。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/%E5%8D%81%E4%B8%83%E5%AD%94%E6%A1%A5.JPG/1280px-%E5%8D%81%E4%B8%83%E5%AD%94%E6%A1%A5.JPG',
      },
    ],
  },
  // qingzang-railway-slow 已迁至 patches/routes-compose-qingzang-20260802：
  // leg-qingzang-railway + compose-qingzang-railway-lhasa（reuse 西宁/拉萨短线）
];
