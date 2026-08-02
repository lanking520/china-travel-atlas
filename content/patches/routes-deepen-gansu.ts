import type { Route } from '../types';

/**
 * 甘肃：兰州·夏河短住 + 河西 compose pilot
 * （原 `xibei-dunhuang-zhangye` → legs + compose-hexi-dunhuang-zhangye）
 */
export const patchRoutes: Route[] = [
  {
    id: 'xibei-lanzhou-xiahe',
    title: '甘肃 · 兰州夏河短住',
    region: 'xibei',
    seasons: ['summer', 'autumn'],
    tripType: 'short',
    compositionKind: 'leg',
    fromHome: false,
    daysLabel: '约5–8天',
    transport:
      '北京飞兰州中川，市区休整后包车或大巴至夏河（约3.5–4.5小时）；结束后返兰州飞回北京',
    budgetLabel: '本趟约4000–7000元（含机票与夏河住宿）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Labrang_Monastery.jpg/1280px-Labrang_Monastery.jpg',
    summary:
      '河西敦煌线之外的甘肃短住：兰州黄河边慢走适应，再赴夏河拉卜楞寺浅访。夏河海拔约2900米，先兰州再上高；不适则取消夏河、只留兰州后飞京。不与敦煌张掖硬拼一条长线。',
    whyFast:
      '拉卜楞外围与部分经堂量力参观即可；桑科草原可选半日，行程紧删除。',
    researchKeywords: [
      '兰州 夏河 攻略 父母',
      '拉卜楞寺 参观 注意事项',
      '夏河 高反 住宿',
    ],
    sources: [
      {
        title: 'Wikivoyage：兰州',
        url: 'https://zh.wikivoyage.org/wiki/%E5%85%B0%E5%B7%9E',
        kind: 'other',
        note: '进出枢纽与市内概览，已改写',
      },
      {
        title: 'Wikivoyage：夏河',
        url: 'https://zh.wikivoyage.org/wiki/%E5%A4%8F%E6%B2%B3',
        kind: 'other',
        note: '拉卜楞与海拔提示，已改写',
      },
      {
        title: '甘肃省文化和旅游厅',
        url: 'https://wlt.gansu.gov.cn/',
        kind: 'official',
        note: '景区开放与天气以官方公告为准',
      },
    ],
    stops: [
      {
        id: 'lanzhou-base',
        name: '兰州（进出与适应）',
        days: 2,
        pace: 'slow',
        lat: 36.061,
        lng: 103.834,
        summary:
          '黄河风情线平地慢走、牛肉面清淡尝；近医院电梯房，为夏河留体力。',
        tips:
          '兰州海拔约1500米，多数人轻松。夏河不适者可取消上山，多住一日后飞京。备薄外套与润唇膏。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Labrang_Monastery.jpg/1280px-Labrang_Monastery.jpg',
      },
      {
        id: 'xiahe-labrang',
        name: '夏河 · 拉卜楞寺',
        days: 3,
        pace: 'slow',
        lat: 35.202,
        lng: 102.522,
        summary:
          '约2900米，先歇再浅访寺院外围；尊重摄影与着装规定，台阶多处可跳过。',
        tips:
          '包车往返最省心，勿夜路。头痛胸闷减活动或下撤兰州。门票与开放院落以现场为准；转经道量力。饮食清淡，少饮酒。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Labrang_Monastery.jpg/1280px-Labrang_Monastery.jpg',
      },
      {
        id: 'sangke-optional',
        name: '桑科草原（可选）',
        days: 1,
        pace: 'fast',
        lat: 35.15,
        lng: 102.4,
        summary:
          '包车半日看草原；海拔与日晒仍在，不适整段跳过。',
        tips:
          '紫外线强备帽；勿长时间骑马。行程紧直接返兰州飞北京。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Labrang_Monastery.jpg/1280px-Labrang_Monastery.jpg',
      },
    ],
  },

  {
    id: 'leg-dunhuang-mogao',
    title: '敦煌 · 莫高窟与鸣沙浅尝',
    region: 'xibei',
    seasons: ['autumn'],
    tripType: 'short',
    compositionKind: 'leg',
    fromHome: false,
    daysLabel: '约5–7天',
    transport:
      '飞敦煌机场（约13公里，建议酒店接送）；市区打车/包车。可单飞往返，也可作为河西走廊长线第一段后东行嘉峪关。',
    budgetLabel: '本趟约3500–7000元（机票浮动大；含莫高预约）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Mogao_Caves_%2854376969262%29.jpg/1280px-Mogao_Caves_%2854376969262%29.jpg',
    summary:
      '独立短线：莫高窟官方预约分次入场，鸣沙山骑骆驼或观光车浅尝；市区电梯酒店连住，每周留空白。不垫十日空转。可单飞往返，也可接河西组合长线东行。',
    whyFast: '鸣沙不必爬沙；预约失败日改市区空白。悬壁长城不在本短线。',
    researchKeywords: [
      '敦煌 莫高窟 预约',
      '敦煌 鸣沙山 攻略',
      '敦煌 老年 旅行',
    ],
    sources: [
      {
        title: '敦煌研究院：莫高窟票务服务',
        url: 'http://www.dha.ac.cn/skxl/mgk.htm',
        kind: 'official',
        note: '60–69优惠票、70+特优票政策',
      },
      {
        title: 'Wikivoyage：敦煌',
        url: 'https://zh.wikivoyage.org/wiki/%E6%95%A6%E7%85%8C',
        kind: 'other',
        note: 'CC 署名，已改写',
      },
    ],
    stops: [
      {
        id: 'dunhuang-base',
        name: '敦煌市区慢住',
        days: 2,
        pace: 'slow',
        lat: 40.142,
        lng: 94.662,
        summary:
          '电梯酒店安顿、适应干燥；夜市浅逛即可，勿连轴转。近敦煌市医院更安心。',
        tips:
          '干燥多饮水，备润唇膏和防尘口罩。机场预约接送；每周留1–2空白日。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Mogao_Caves_%2854376969262%29.jpg/1280px-Mogao_Caves_%2854376969262%29.jpg',
      },
      {
        id: 'mogao',
        name: '莫高窟',
        days: 2,
        pace: 'slow',
        lat: 40.037,
        lng: 94.809,
        summary:
          '数字展示中心观影+实体洞窟；建议分两日各看一次，上午光线更好。',
        tips:
          '唯一官方预约：「莫高窟参观预约网」微信小程序或 www.mgk.org.cn，可约30天内；旺季常早7点放票，多刷新。时段前30分钟到数字中心。60–69优惠票、70+特优票须网上预订后窗口取。应急票看窟少仍须陪同。别信第三方代抢。咨询4008-333-715（仅咨询）。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Mogao_Caves_%2854376969262%29.jpg/1280px-Mogao_Caves_%2854376969262%29.jpg',
      },
      {
        id: 'mingsha-optional',
        name: '鸣沙山 · 月牙泉（浅尝）',
        days: 1,
        pace: 'fast',
        lat: 40.092,
        lng: 94.669,
        summary: '傍晚骑骆驼或乘观光车；不必爬沙。预约失败日可改此段或市区空白。',
        tips: '风沙大备口罩与墨镜；别太晚，保证睡眠。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Mogao_Caves_%2854376969262%29.jpg/1280px-Mogao_Caves_%2854376969262%29.jpg',
      },
      {
        id: 'dunhuang-buffer',
        name: '敦煌空白/东行缓冲',
        days: 1.5,
        pace: 'slow',
        lat: 40.142,
        lng: 94.662,
        summary: '休息补水；若接河西长线，次日东行嘉峪关方向（单日≤4–5小时）。',
        tips: '疲劳多留一日；复杂就医预留转兰州方案。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Mogao_Caves_%2854376969262%29.jpg/1280px-Mogao_Caves_%2854376969262%29.jpg',
      },
    ],
  },

  {
    id: 'leg-zhangye-danxia',
    title: '张掖 · 七彩丹霞快览',
    region: 'xibei',
    seasons: ['autumn'],
    tripType: 'short',
    compositionKind: 'leg',
    fromHome: false,
    daysLabel: '约2–3天',
    transport:
      '飞张掖或兰州转张掖；市区包车/打车往返丹霞。可单飞往返，也可作为河西走廊长线末段（敦煌侧租车可在此还车）。',
    budgetLabel: '本趟约2000–4500元（机票浮动大）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Zhangye_National_Geopark_5.jpg/1280px-Zhangye_National_Geopark_5.jpg',
    summary:
      '独立短线：七彩丹霞乘区间车串观景台，下午入园等日落最艳；市区电梯酒店歇脚。半日–一日足够，不硬爬台阶。可单订，也可作河西组合末段。',
    whyFast: '观景台间风大备外套；台阶量力，一日足够可压天。',
    researchKeywords: [
      '张掖丹霞 观光车 日落',
      '张掖 两日 攻略',
      '张掖 老年 旅行',
    ],
    sources: [
      {
        title: 'Wikivoyage：张掖',
        url: 'https://zh.wikivoyage.org/wiki/%E5%BC%A0%E6%8E%96',
        kind: 'other',
        note: 'CC 署名，已改写',
      },
    ],
    stops: [
      {
        id: 'zhangye-base',
        name: '张掖市区',
        days: 1,
        pace: 'slow',
        lat: 38.925,
        lng: 100.45,
        summary: '电梯酒店安顿；近张掖市人民医院更安心。傍晚平地散步即可。',
        tips: '干燥补水；若河西租车至此可还车后飞返。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Zhangye_National_Geopark_5.jpg/1280px-Zhangye_National_Geopark_5.jpg',
      },
      {
        id: 'zhangye-danxia',
        name: '张掖七彩丹霞',
        days: 1,
        pace: 'fast',
        lat: 38.93,
        lng: 100.088,
        summary:
          '乘区间车串联各观景台，日落时分色彩最艳。全程少步行，半日足够。',
        tips:
          '秋季晴天最佳，建议下午4点后入园等日落。备防风外套，观景台间风大。65+凭身份证通常有门票优惠。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Zhangye_National_Geopark_5.jpg/1280px-Zhangye_National_Geopark_5.jpg',
      },
      {
        id: 'zhangye-buffer',
        name: '张掖空白/返程',
        days: 0.5,
        pace: 'slow',
        lat: 38.925,
        lng: 100.45,
        summary: '休息或飞兰州/京；河西长线至此收尾。',
        tips: '勿赶夜路还车；机票提前定。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Zhangye_National_Geopark_5.jpg/1280px-Zhangye_National_Geopark_5.jpg',
      },
    ],
  },

  {
    id: 'compose-hexi-dunhuang-zhangye',
    title: '河西走廊 · 敦煌张掖租车',
    region: 'xibei',
    seasons: ['autumn'],
    tripType: 'long',
    compositionKind: 'compose',
    themes: ['corridor'],
    fromHome: false,
    daysLabel: '约2–3周',
    // 长线=短线串：正文在 leg；嘉峪关仅 glue 过夜
    legIds: ['leg-dunhuang-mogao', 'leg-zhangye-danxia'],
    glue: [
      '敦煌→嘉峪关单日车/铁 ≤4–5小时；嘉峪关关城半日+电梯酒店缓冲过夜（1–2晚，不硬爬悬壁长城），再 ≤4–5小时到张掖。两腿之间可留空白休息日。勿一日赶完敦煌→张掖，不环线硬赶。',
    ],
    transport:
      '飞敦煌进、张掖还车或出（或对调）。走廊按短线顺序：敦煌莫高短线 → 嘉峪关缓冲过夜 → 张掖丹霞短线。每日车程控制在3–4小时内；租车可机场取、张掖还。',
    budgetLabel: '对照月预算约2万（含租车+机票分摊）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Mogao_Caves_%2854376969262%29.jpg/1280px-Mogao_Caves_%2854376969262%29.jpg',
    summary:
      '长线组合卡：嵌入「敦煌·莫高窟与鸣沙」与「张掖·七彩丹霞」两条短线，中间嘉峪关只作过夜衔接。景点正文见各短线，此处不复述。河西干燥多饮水；秋最稳。',
    whyFast: '可只订敦煌或只订张掖短线；走廊整段可删悬壁长城与夜赶路。',
    researchKeywords: [
      '敦煌 张掖 租车 自驾',
      '莫高窟 预约 攻略',
      '张掖丹霞 观光车 日落',
    ],
    sources: [
      {
        title: '敦煌研究院：莫高窟票务服务',
        url: 'http://www.dha.ac.cn/skxl/mgk.htm',
        kind: 'official',
        note: '票务以官方为准；细节见敦煌短线',
      },
      {
        title: 'Wikivoyage：敦煌',
        url: 'https://zh.wikivoyage.org/wiki/%E6%95%A6%E7%85%8C',
        kind: 'other',
        note: 'CC 署名，已改写',
      },
      {
        title: 'Wikivoyage：张掖',
        url: 'https://zh.wikivoyage.org/wiki/%E5%BC%A0%E6%8E%96',
        kind: 'other',
        note: 'CC 署名，已改写',
      },
    ],
    // 仅保留衔接枢纽；敦煌/张掖景点文案在各自 leg
    stops: [
      {
        id: 'jiayuguan',
        name: '嘉峪关（走廊缓冲过夜）',
        days: 1.5,
        pace: 'slow',
        lat: 39.773,
        lng: 98.289,
        summary:
          '两短线之间的关城半日+电梯酒店缓冲；休息补水，不硬加悬壁长城。',
        tips:
          '关城景区平坦；悬壁长城台阶多，登一段或远观即走。疲劳多留一晚。西行/东行均单日≤4–5小时。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Jiayuguan_20151012.jpg/1280px-Jiayuguan_20151012.jpg',
      },
    ],
  },
];
