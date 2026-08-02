import type { Route } from '../types';

/**
 * 青藏 national long→compose（batch 3）：铁路进藏 / 拉萨→林芝。
 * 退役 qingzang-railway-slow、qingzang-g318-lhasa-nyingchi。
 * 拉萨主卡 qingzang-lhasa-slow 收为 densified leg（海拔诚实，非极端高山）。
 * 复用 qingzang-xining-3d、qingzang-nyingchi-slow。
 */
export const patchRoutes: Route[] = [
  // ── 青藏铁路 · 列车腿 ──────────────────────────────────────
  {
    id: 'leg-qingzang-railway',
    title: '青藏铁路 · 西宁至拉萨列车段',
    region: 'qingzang',
    seasons: ['summer', 'autumn'],
    tripType: 'short',
    compositionKind: 'leg',
    themes: ['corridor'],
    fromHome: false,
    daysLabel: '约2–3天（含上车日）',
    transport:
      '须已在西宁适应稳定后再乘青藏铁路旅客列车（优先软卧、供氧车厢）至拉萨。票务以 12306 为准。非自驾；禁止未评估硬座过夜。可单订作「只坐火车」体验，也可作铁路组合中段。',
    budgetLabel: '本趟约1500–3500元（软卧浮动大；不含西宁/拉萨住宿大头）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Qingzang_railway_Train_01.jpg/1280px-Qingzang_railway_Train_01.jpg',
    summary:
      '独立短线：以列车代步体验青藏线，非公路自驾。车厢供氧≠无高反；少走动多饮水，不适可在格尔木等站下撤。可单订（须自备西宁适应），也可嵌入铁路进藏组合。不接阿里/珠峰。',
    whyFast: '只完成上车观景+到站即歇也成立；下站不排高强度。',
    introduction:
      '青藏铁路是「坐着进藏」的主题段，但仍有高原风险。爸妈优先软卧，行前体检，西宁先住稳再上车。\n\n列车上少走动；头痛呕吐加重听从乘务/医护安排，必要时格尔木下撤。绝不接阿里/珠峰公路。到拉萨后仍须静养——完整城区适应请走「拉萨·高原慢适应」短线。',
    seasonGuide: '夏秋车次与天气相对稳定。冬春极寒与供暖需额外评估。',
    notices: [
      '行前必须健康评估；心脑血管等高风险者不宜。',
      '优先软卧；备血氧仪与医生建议下的药物/氧气方案。',
      '非自驾强制；公路 G109 连续驾驶不在本腿。',
      '车厢供氧不等于无高反；不适可中止折返。不排阿里/珠峰。',
    ],
    researchKeywords: ['青藏铁路 软卧 父母', '西宁 拉萨 火车 高反', '格尔木 下撤'],
    sources: [
      {
        title: 'Wikivoyage：青藏铁路',
        url: 'https://zh.wikivoyage.org/wiki/%E9%9D%92%E8%97%8F%E9%93%81%E8%B7%AF',
        kind: 'other',
        note: '车次与海拔提示，已改写',
      },
      {
        title: '中国铁路客户服务中心',
        url: 'https://www.12306.cn/',
        kind: 'official',
        note: '票务以 12306 为准',
      },
      {
        title: '西藏文旅厅',
        url: 'https://wlt.xizang.gov.cn/',
        kind: 'official',
        note: '进藏与健康提示以官方为准',
      },
    ],
    stops: [
      {
        id: 'qzr-train',
        name: '青藏铁路列车段',
        days: 2,
        pace: 'slow',
        lat: 35.5,
        lng: 95.0,
        summary:
          '软卧观景；海拔阶梯抬升。少走动多饮水；不适可格尔木下撤。',
        tips:
          '票务 12306；备常用药与血氧仪。车厢供氧≠无高反。勿饮酒、少走动。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Qinghai%E2%80%93Tibet_Railway_%28Qingzang_Railway%29_%2837148422090%29.jpg/1280px-Qinghai%E2%80%93Tibet_Railway_%28Qingzang_Railway%29_%2837148422090%29.jpg',
      },
      {
        id: 'qzr-arrive-buffer',
        name: '拉萨到站缓冲',
        days: 1,
        pace: 'slow',
        lat: 29.65,
        lng: 91.1,
        summary: '到站只入住歇脚；勿当日登布宫。接完整拉萨短线再排城区。',
        tips: '近自治区人民医院选供氧电梯酒店；血氧自测。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Potala_palace23.jpg/1280px-Potala_palace23.jpg',
      },
    ],
  },

  // ── 青藏铁路 compose ───────────────────────────────────────
  {
    id: 'compose-qingzang-railway-lhasa',
    title: '青藏铁路慢进藏 · 西宁到拉萨',
    region: 'qingzang',
    seasons: ['summer', 'autumn'],
    tripType: 'long',
    compositionKind: 'compose',
    themes: ['corridor'],
    fromHome: false,
    daysLabel: '约10–14天（含西宁适应与拉萨静养）',
    legIds: [
      'qingzang-xining-3d',
      'leg-qingzang-railway',
      'qingzang-lhasa-slow',
    ],
    glue: [
      '西宁适应稳定后再上车；感冒未愈、血氧持续偏低勿硬上列车。茶卡/青海湖本廊不排（见青海湖专线）。',
      '列车段到站后至少静养再进入拉萨短线景点；勿下站次日硬登布宫或赶纳木错。可中止于西宁或格尔木折返。',
    ],
    transport:
      '北京飞西宁→西宁适应短线→青藏铁路软卧至拉萨→拉萨慢适应短线→飞回北京（常经成都）。全程非自驾强制。',
    budgetLabel: '本趟约7000–13000元（机票+软卧+供氧住宿；双人；浮动大）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Qingzang_railway_Train_01.jpg/1280px-Qingzang_railway_Train_01.jpg',
    summary:
      '长线组合卡：嵌入西宁适应、青藏铁路列车、拉萨慢适应三条短线。车厢供氧≠无高反；拉萨仍约3650米，只城区慢走，纳木错一日可删。不接阿里/珠峰，非极端高山廊。景点正文见各短线。',
    whyFast:
      '可只订西宁或列车或拉萨其中一段；走廊可删纳木错与布宫上楼，只静养也成立。',
    researchKeywords: [
      '青藏铁路 软卧 父母',
      '西宁 拉萨 火车 高反',
      '拉萨 适应 父母',
    ],
    sources: [
      {
        title: 'Wikivoyage：青藏铁路',
        url: 'https://zh.wikivoyage.org/wiki/%E9%9D%92%E8%97%8F%E9%93%81%E8%B7%AF',
        kind: 'other',
        note: '细节见列车短线',
      },
      {
        title: '中国铁路客户服务中心',
        url: 'https://www.12306.cn/',
        kind: 'official',
        note: '票务以 12306 为准',
      },
      {
        title: '西藏文旅厅',
        url: 'https://wlt.xizang.gov.cn/',
        kind: 'official',
        note: '进藏与健康提示以官方为准',
      },
    ],
    stops: [
      {
        id: 'qz-rail-compose-note',
        name: '高原诚实提示（组合）',
        days: 0.5,
        pace: 'slow',
        lat: 36.62,
        lng: 101.78,
        summary:
          '本廊不是「坐火车就没事」：西宁约2200m→列车抬升→拉萨约3650m。爸妈须行前体检；不适随时中止。',
        tips:
          '血氧仪每日测；高反加重就医或下撤成都/回京。纳木错约4718m 默认可删。不排阿里/珠峰。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Qingzang_railway_Train_01.jpg/1280px-Qingzang_railway_Train_01.jpg',
      },
    ],
  },

  // ── 拉萨→林芝 compose ─────────────────────────────────────
  {
    id: 'compose-qingzang-lhasa-nyingchi',
    title: '拉萨到林芝 · 河谷浅廊',
    region: 'qingzang',
    seasons: ['summer', 'autumn'],
    tripType: 'long',
    compositionKind: 'compose',
    themes: ['corridor'],
    fromHome: false,
    daysLabel: '约12–18天（含拉萨适应）',
    legIds: ['qingzang-lhasa-slow', 'qingzang-nyingchi-slow'],
    glue: [
      '拉萨适应充分、血氧与症状稳定后再东行。优先拉林高铁；若包车沿 G318 则单日短段+观景短停，勿夜赶山路、勿一日赶完全段。雨季关注塌方管制。',
      '林芝巴宜海拔约3000m 出头，整体低于拉萨，仍属高原。色季拉等高山口可删。不西行日喀则以西/阿里/珠峰。段末林芝或返拉萨飞成都回京，京休整≥1周。',
    ],
    transport:
      '飞拉萨→拉萨慢适应短线→拉林高铁或短段包车东行→林芝河谷短线→飞返（林芝或拉萨）经成都回北京。禁止未适应西行阿里/珠峰。',
    budgetLabel: '对照约1.2–2万（含机票、供氧住宿与包车；双人）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Shergyla_Mountain%2C_Nyingchi%2C_Tibet_Banner.jpg/1280px-Shergyla_Mountain%2C_Nyingchi%2C_Tibet_Banner.jpg',
    summary:
      '长线组合卡：嵌入拉萨慢适应与林芝河谷两条短线；拉林/G318 只作衔接。只做「拉萨枢纽→林芝河谷」适老浅段，不走川藏全线，不碰珠峰阿里。景点正文见各短线。',
    whyFast:
      '可只订其中一条短线；公路观光日可删，改高铁直达或直飞林芝。纳木错与色季拉默认可删。',
    researchKeywords: [
      '拉林高铁 父母',
      'G318 拉萨 林芝 高反',
      '林芝 海拔 父母',
    ],
    sources: [
      {
        title: 'Wikivoyage：拉萨',
        url: 'https://zh.wikivoyage.org/wiki/%E6%8B%89%E8%90%A8',
        kind: 'other',
        note: '适应节奏见拉萨短线',
      },
      {
        title: 'Wikivoyage：林芝',
        url: 'https://zh.wikivoyage.org/wiki/%E6%9E%97%E8%8A%9D',
        kind: 'other',
        note: '细节见林芝短线',
      },
      {
        title: '西藏文旅厅',
        url: 'https://wlt.xizang.gov.cn/',
        kind: 'official',
        note: '官方公告为准',
      },
    ],
    stops: [
      {
        id: 'g318-rail-glue',
        name: '拉林/G318 东行衔接',
        days: 1,
        pace: 'slow',
        lat: 29.7,
        lng: 92.5,
        summary: '高铁优先；包车则短段观景，不适立即折返拉萨。',
        tips: '单日车程严控；勿夜赶。感冒未愈勿上公路段。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Shergyla_Mountain%2C_Nyingchi%2C_Tibet_Banner.jpg/1280px-Shergyla_Mountain%2C_Nyingchi%2C_Tibet_Banner.jpg',
      },
    ],
  },
];
