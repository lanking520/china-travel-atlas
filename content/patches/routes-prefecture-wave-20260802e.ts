import type { Route } from '../types';

/**
 * Prefecture / famous gap wave after catalog 148 (2026-08-02e).
 * 忻州县域 · 扬州县域 · 镇江 · 阿尔山 · 安阳殷墟 · 云台山 · 南通 · 嘉兴 · 湖州南浔 · 岳阳楼 · 邯郸。
 * Evidence: research/notes/prefecture-depth/ + multi-discovery/prefecture-wave-20260802e.md
 */
export const patchRoutes: Route[] = [
  // ── 忻州县域（五台减负另卡）────────────────────────────────
  {
    id: 'huabei-shanxi-xinzhou-county',
    title: '忻州县域 · 雁门关代县浅线',
    region: 'huabei',
    seasons: ['spring', 'autumn', 'summer'],
    tripType: 'short',
    fromHome: true,
    themes: ['famous-scenic'],
    daysLabel: '约3–5天',
    transport:
      '北京高铁至忻州西/原平西，包车或城际至代县；代县或忻州电梯酒店连住。结束后高铁返京。五台山台怀请走「五台山·台怀减负」，勿同短假硬串顶峰',
    budgetLabel: '本趟约1800–3500元（高铁+包车+电梯酒店+门票；双人）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Barbican_gate_of_Yanmen_Pass_%2820250712165843%29.jpg/1280px-Barbican_gate_of_Yanmen_Pass_%2820250712165843%29.jpg',
    summary:
      '忻州县域适老浅线：忻州/原平锚点 + 代县古城阿育王塔 + 雁门关关城外观浅览；定襄河边民俗可选。五台台怀另卡，本线不排顶峰徒步与芦芽山硬爬。',
    introduction:
      '搜「雁门关」「代县」「忻州县域」应对上本卡，而不是再被五台索道清单淹没。\n\n节奏：住忻州或代县电梯酒店，每天最多一处主点。雁门关以关城/瓮城外观与平缓段为主，山脊硬走默认删；定襄河边室内展陈适合空调日。',
    seasonGuide:
      '春秋最舒适。夏午后晒、山风大，宜早出。冬干冷缩短户外，雁门可只外观。',
    whyFast: '只代县+雁门关外观两日也成立；河边/宁武可删。',
    notices: [
      '雁门关台阶与坡道量力，默认可只关城外观。',
      '勿与五台台怀、大同云冈同短假特种兵连赶。',
      '芦芽山/宁武冰洞强度高，约60默认跳过或整段删。',
      '山路包车优于疲劳自驾；夜间少赶。',
      '门票预约以景区官方为准。',
    ],
    researchKeywords: [
      '忻州 雁门关 父母',
      '代县 阿育王塔',
      '定襄 河边 民俗',
      '忻州 县域 日归',
    ],
    sources: [
      {
        title: 'Wikivoyage：山西',
        url: 'https://zh.wikivoyage.org/wiki/%E5%B1%B1%E8%A5%BF',
        kind: 'other',
        note: '进出与县域骨架，已改写适老',
      },
      {
        title: '地级笔记：忻州县域',
        url: 'https://zh.wikivoyage.org/wiki/%E5%B1%B1%E8%A5%BF',
        kind: 'other',
        note: 'research/notes/prefecture-depth/shanxi-xinzhou.md',
      },
    ],
    stops: [
      {
        id: 'xz-county-base',
        name: '忻州 / 原平锚点',
        days: 1,
        pace: 'slow',
        lat: 38.42,
        lng: 112.73,
        summary: '高铁进出；电梯酒店连住，抵达日只歇脚。',
        tips: '也可直接住代县少换乘。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/%E4%BB%A3%E5%8E%BF%E9%98%BF%E8%82%B2%E7%8E%8B%E5%A1%94%E4%BE%A7%E9%9D%A2.jpg/1280px-%E4%BB%A3%E5%8E%BF%E9%98%BF%E8%82%B2%E7%8E%8B%E5%A1%94%E4%BE%A7%E9%9D%A2.jpg',
      },
      {
        id: 'xz-daixian',
        name: '代县 · 古城与阿育王塔',
        days: 1,
        pace: 'slow',
        lat: 39.07,
        lng: 112.96,
        summary: '古城平地浅逛；阿育王塔外观为主。',
        tips: '石板防滑；登塔台阶可删。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/%E4%BB%A3%E5%8E%BF%E9%98%BF%E8%82%B2%E7%8E%8B%E5%A1%94%E4%BE%A7%E9%9D%A2.jpg/1280px-%E4%BB%A3%E5%8E%BF%E9%98%BF%E8%82%B2%E7%8E%8B%E5%A1%94%E4%BE%A7%E9%9D%A2.jpg',
      },
      {
        id: 'xz-yanmen',
        name: '代县 · 雁门关关城浅览',
        days: 1,
        pace: 'slow',
        lat: 39.18,
        lng: 112.87,
        summary: '瓮城/关楼外观与平缓段；山脊硬走默认删。',
        tips: '另日或与代县同廊勿赶；风大备外套。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Barbican_gate_of_Yanmen_Pass_%2820250712165843%29.jpg/1280px-Barbican_gate_of_Yanmen_Pass_%2820250712165843%29.jpg',
      },
      {
        id: 'xz-dingxiang-optional',
        name: '定襄 · 河边民俗（可选）',
        days: 0.5,
        pace: 'fast',
        lat: 38.48,
        lng: 112.95,
        summary: '室内展陈为主，空调友好；默认可删。',
        tips: '查闭馆日；与雁门勿同日硬赶。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Yanmen_Pass_%2820250712164217%29.jpg/1280px-Yanmen_Pass_%2820250712164217%29.jpg',
      },
      {
        id: 'xz-ningwu-optional',
        name: '宁武芦芽山（可选可删）',
        days: 1,
        pace: 'fast',
        lat: 38.75,
        lng: 112.15,
        summary: '山线强度高；约60默认整段跳过。',
        tips: '默认可删；不排冰洞特种兵。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/North_watchtower_of_Yanmen_Pass_%2820250712155314%29.jpg/1280px-North_watchtower_of_Yanmen_Pass_%2820250712155314%29.jpg',
      },
    ],
  },

  // ── 扬州县域（瘦西湖另卡）────────────────────────────────
  {
    id: 'huadong-jiangsu-yangzhou-county',
    title: '扬州县域 · 高邮仪征浅线',
    region: 'huadong',
    seasons: ['spring', 'autumn', 'summer'],
    tripType: 'short',
    fromHome: false,
    themes: ['famous-scenic'],
    daysLabel: '约3–5天',
    transport:
      '北京高铁至扬州东，连住市区或高邮电梯酒店；高邮/仪征城际或包车日归。结束后经南京/扬州东返京。瘦西湖与个园请走「扬州·瘦西湖慢走」',
    budgetLabel: '本趟约2000–3800元（高铁+电梯酒店+门票包车；双人）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Yucheng_Postal_Stop_entrance.jpg/1280px-Yucheng_Postal_Stop_entrance.jpg',
    summary:
      '扬州县域补强：市区锚点 + 高邮盂城驿/运河浅逛 + 仪征平地可选；邵伯湖岸可选可删。瘦西湖园林专线另卡，本线不硬塞全湖船。',
    introduction:
      '搜「高邮」「盂城驿」「仪征」应对上县域卡，而不是再被瘦西湖二日淹没。\n\n运河边平路为主，适合爸妈；盂城驿与运河选一段即可，勿一日高邮+仪征+瘦西湖三线特种兵。',
    seasonGuide:
      '春秋最宜。夏湿热缩短午后，早出晚歇。冬可走馆线与运河浅段。',
    whyFast: '只高邮盂城驿+运河一日也成立；仪征/邵伯可删。',
    notices: [
      '瘦西湖/个园请走独立扬州城卡，本线不排全湖船。',
      '运河岸防滑；暑期防晒。',
      '高邮与仪征勿同日硬赶。',
      '邵伯湖游船晕动可整段删。',
      '门票与开放以官方为准。',
    ],
    researchKeywords: [
      '高邮 盂城驿 父母',
      '扬州 县域 运河',
      '仪征 日归',
      '邵伯 湖岸',
    ],
    sources: [
      {
        title: 'Wikivoyage：扬州',
        url: 'https://zh.wikivoyage.org/wiki/%E6%89%AC%E5%B7%9E',
        kind: 'other',
        note: '进出与县域，已改写适老',
      },
    ],
    stops: [
      {
        id: 'yzc-base',
        name: '扬州市区锚点',
        days: 1,
        pace: 'slow',
        lat: 32.39,
        lng: 119.42,
        summary: '电梯酒店连住；抵达休整，次日再进县域。',
        tips: '瘦西湖另日另卡，勿塞进本线。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Slender_West_Lake.jpg/1280px-Slender_West_Lake.jpg',
      },
      {
        id: 'yzc-gaoyou',
        name: '高邮 · 盂城驿与运河',
        days: 1.5,
        pace: 'slow',
        lat: 32.78,
        lng: 119.44,
        summary: '盂城驿平缓院落 + 运河选段；可连住一晚。',
        tips: '人少宜慢；湖景量力。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Yucheng_Postal_Stop_entrance.jpg/1280px-Yucheng_Postal_Stop_entrance.jpg',
      },
      {
        id: 'yzc-yizheng-optional',
        name: '仪征 · 城区浅逛（可选）',
        days: 1,
        pace: 'fast',
        lat: 32.27,
        lng: 119.18,
        summary: '平地街区/公园选段；默认可删。',
        tips: '另日；勿与高邮同日。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/%E4%BA%AC%E6%9D%AD%E8%BF%90%E6%B2%B3%E9%AB%98%E9%82%AE%E6%AE%B51437.jpg/1280px-%E4%BA%AC%E6%9D%AD%E8%BF%90%E6%B2%B3%E9%AB%98%E9%82%AE%E6%AE%B51437.jpg',
      },
      {
        id: 'yzc-shaobo-optional',
        name: '邵伯湖岸（可选可删）',
        days: 0.5,
        pace: 'fast',
        lat: 32.55,
        lng: 119.45,
        summary: '湖岸浅走；游船量力可删。',
        tips: '默认可删。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/%E9%AB%98%E9%82%AE%E6%B9%961144.jpg/1280px-%E9%AB%98%E9%82%AE%E6%B9%961144.jpg',
      },
    ],
  },

  // ── 镇江三山浅住 ────────────────────────────────────────
  {
    id: 'huadong-jiangsu-zhenjiang',
    title: '镇江 · 金山焦山浅住',
    region: 'huadong',
    seasons: ['spring', 'autumn', 'summer'],
    tripType: 'short',
    fromHome: false,
    themes: ['famous-scenic'],
    daysLabel: '约2–4天',
    transport:
      '北京沪宁高铁镇江站；市区电梯酒店。金山/焦山分日，结束后高铁回京或转扬州。勿与瘦西湖同日两城特种兵',
    budgetLabel: '本趟约1600–3200元（高铁+电梯酒店+门票；双人）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/%E9%95%87%E6%B1%9F%E9%87%91%E5%B1%B1%E5%AF%BA.jpg/1280px-%E9%95%87%E6%B1%9F%E9%87%91%E5%B1%B1%E5%AF%BA.jpg',
    summary:
      '镇江名景浅线：金山寺选段 + 焦山江景/碑林量力；北固山可选可删。台阶多，每天一山，坐船减步优先。',
    introduction:
      '搜「金山寺」「焦山」「镇江」应直达本卡。与扬州瘦西湖地理近但节奏不同：本卡山寺台阶多，务必分日、量力。\n\n爸妈选近大市口或金山方向电梯酒店；焦山可轮渡，晕船则改外观或删。',
    seasonGuide:
      '春秋最宜。夏闷热缩短午后登山。雨后石阶更滑。',
    whyFast: '只金山一日也成立；焦山/北固可删。',
    notices: [
      '金山与焦山勿同日特种兵。',
      '台阶多，穿防滑鞋，久站带折叠凳。',
      '北固山可整段删。',
      '轮渡晕动改岸上外观。',
      '勿与扬州瘦西湖同日连赶。',
    ],
    researchKeywords: [
      '镇江 金山寺 父母',
      '焦山 碑林',
      '北固山 可选',
      '镇江 高铁',
    ],
    sources: [
      {
        title: 'Wikivoyage：镇江',
        url: 'https://zh.wikivoyage.org/wiki/%E9%95%87%E6%B1%9F',
        kind: 'other',
        note: '三山骨架，已改写适老',
      },
    ],
    stops: [
      {
        id: 'zj-base',
        name: '镇江市区慢住',
        days: 1,
        pace: 'slow',
        lat: 32.19,
        lng: 119.45,
        summary: '高铁进出；电梯酒店，抵达只散步歇脚。',
        tips: '大市口一带交通方便。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/%E9%95%87%E6%B1%9F%E9%87%91%E5%B1%B1%E5%AF%BA.jpg/1280px-%E9%95%87%E6%B1%9F%E9%87%91%E5%B1%B1%E5%AF%BA.jpg',
      },
      {
        id: 'zj-jinshan',
        name: '金山寺选段',
        days: 1,
        pace: 'slow',
        lat: 32.21,
        lng: 119.42,
        summary: '殿宇选段浅逛；登高量力可删。',
        tips: '人多宜早；石阶防滑。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/%E9%95%87%E6%B1%9F%E9%87%91%E5%B1%B1%E5%AF%BA.jpg/1280px-%E9%95%87%E6%B1%9F%E9%87%91%E5%B1%B1%E5%AF%BA.jpg',
      },
      {
        id: 'zj-jiaoshan',
        name: '焦山江景 / 碑林',
        days: 1,
        pace: 'slow',
        lat: 32.24,
        lng: 119.47,
        summary: '轮渡入岛；碑林与江景平缓段优先。',
        tips: '晕船可删；与金山分日。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/%E9%95%87%E6%B1%9F%E7%84%A6%E5%B1%B1%E7%82%AE%E5%8F%B0.jpg/1280px-%E9%95%87%E6%B1%9F%E7%84%A6%E5%B1%B1%E7%82%AE%E5%8F%B0.jpg',
      },
      {
        id: 'zj-beigu-optional',
        name: '北固山（可选可删）',
        days: 0.5,
        pace: 'fast',
        lat: 32.22,
        lng: 119.45,
        summary: '台阶多；默认可整段跳过。',
        tips: '体力紧优先删。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/%E6%B1%9F%E8%8B%8F%E9%95%87%E6%B1%9F%E9%87%91%E5%B1%B1%E5%AF%BA_-_panoramio.jpg/1280px-%E6%B1%9F%E8%8B%8F%E9%95%87%E6%B1%9F%E9%87%91%E5%B1%B1%E5%AF%BA_-_panoramio.jpg',
      },
    ],
  },

  // ── 阿尔山森林温泉 ──────────────────────────────────────
  {
    id: 'huabei-neimeng-aershan',
    title: '阿尔山 · 林间温泉浅住',
    region: 'huabei',
    seasons: ['summer', 'autumn'],
    tripType: 'short',
    fromHome: false,
    themes: ['famous-scenic'],
    daysLabel: '约4–6天',
    transport:
      '北京飞乌兰浩特或海拉尔转汽车/包车至阿尔山；或暑期航班直达（以当季为准）。市区/温泉镇电梯酒店连住。结束后原路返京。勿与呼伦贝尔大环线同短假硬串',
    budgetLabel: '本趟约2800–5200元（机票中转+包车+温泉酒店；双人）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/%E9%98%BF%E5%B0%94%E5%B1%B1%E5%A4%A9%E6%B1%A0_%E5%85%A8%E6%99%AF.jpg/1280px-%E9%98%BF%E5%B0%94%E5%B1%B1%E5%A4%A9%E6%B1%A0_%E5%85%A8%E6%99%AF.jpg',
    summary:
      '阿尔山林间适老线：温泉镇慢住 + 国家森林公园观光车选段 + 天池/火山口外观量力；五里泉浅走。不排长徒步穿越与冬季极寒硬访。',
    introduction:
      '搜「阿尔山」「天池」「五里泉」应命中本卡。海拔与昼夜温差明显，先适应再进景区。\n\n爸妈以观光车+短栈道为主；天池观景台选一两处即可。泡汤遵医嘱，高血压等量力。',
    seasonGuide:
      '夏秋最佳（林海与凉爽）。冬极寒本产品默认不排。春秋肩季备厚外套。',
    whyFast: '只温泉镇+公园一日观光车也成立；天池可删。',
    notices: [
      '昼夜温差大，分层穿衣。',
      '森林公园以观光车减步；长徒步默认删。',
      '泡汤基础病遵医嘱。',
      '勿与呼伦贝尔呼和浩特同短假连轴。',
      '山路夜间少赶。',
    ],
    researchKeywords: [
      '阿尔山 温泉 父母',
      '阿尔山天池 观光车',
      '五里泉 慢游',
      '阿尔山 森林公园',
    ],
    sources: [
      {
        title: 'Wikivoyage：内蒙古',
        url: 'https://zh.wikivoyage.org/wiki/%E5%86%85%E8%92%99%E5%8F%A4',
        kind: 'other',
        note: '进出骨架，已改写适老',
      },
    ],
    stops: [
      {
        id: 'aes-base',
        name: '阿尔山温泉镇慢住',
        days: 1.5,
        pace: 'slow',
        lat: 47.18,
        lng: 119.94,
        summary: '电梯/温泉酒店；抵达适应温差。',
        tips: '少搬行李；泡汤量力。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/%E9%98%BF%E5%B0%94%E5%B1%B1_%E4%BA%94%E9%87%8C%E6%B3%89.jpg/1280px-%E9%98%BF%E5%B0%94%E5%B1%B1_%E4%BA%94%E9%87%8C%E6%B3%89.jpg',
      },
      {
        id: 'aes-park',
        name: '国家森林公园观光车选段',
        days: 1.5,
        pace: 'slow',
        lat: 47.2,
        lng: 120.05,
        summary: '观光车串点；短栈道一两处即可。',
        tips: '预约景区交通；勿徒步穿越。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Arxan.jpg/1280px-Arxan.jpg',
      },
      {
        id: 'aes-tianchi',
        name: '阿尔山天池 / 火山口外观',
        days: 1,
        pace: 'slow',
        lat: 47.35,
        lng: 120.12,
        summary: '观景台选段；硬爬默认删。',
        tips: '风大备外套；与公园分日更稳。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/%E9%98%BF%E5%B0%94%E5%B1%B1%E5%A4%A9%E6%B1%A0_%E5%85%A8%E6%99%AF.jpg/1280px-%E9%98%BF%E5%B0%94%E5%B1%B1%E5%A4%A9%E6%B1%A0_%E5%85%A8%E6%99%AF.jpg',
      },
      {
        id: 'aes-wuliquan-optional',
        name: '五里泉浅走（可选）',
        days: 0.5,
        pace: 'fast',
        lat: 47.17,
        lng: 119.93,
        summary: '平地泉边；默认可删或并入住地日。',
        tips: '勿久站。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/%E9%98%BF%E5%B0%94%E5%B1%B1_%E4%BA%94%E9%87%8C%E6%B3%89.jpg/1280px-%E9%98%BF%E5%B0%94%E5%B1%B1_%E4%BA%94%E9%87%8C%E6%B3%89.jpg',
      },
    ],
  },

  // ── 安阳殷墟 ────────────────────────────────────────────
  {
    id: 'huazhong-henan-anyang',
    title: '安阳 · 殷墟博物院浅住',
    region: 'huazhong',
    seasons: ['spring', 'autumn', 'summer'],
    tripType: 'short',
    fromHome: false,
    themes: ['famous-scenic'],
    daysLabel: '约2–3天',
    transport:
      '北京高铁至安阳站/安阳东；市区电梯酒店。殷墟以室内展+遗址平缓段为主。结束后高铁返京。勿与洛阳龙门同日两城',
    budgetLabel: '本趟约1400–2800元（高铁+电梯酒店+门票；双人）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Exterior%2C_Yinxu_Museum_20241002-A.jpg/1280px-Exterior%2C_Yinxu_Museum_20241002-A.jpg',
    summary:
      '安阳甲骨文名景：殷墟博物馆室内空调日 + 遗址公园选段；文峰塔外观可选。适合爸妈文物向短假，少户外暴晒。',
    introduction:
      '搜「殷墟」「安阳」「甲骨文」应直达本卡。新馆室内展陈友好，遗址区选平缓段，勿一日刷完全园。\n\n与洛阳/开封分次出门；本线不排红旗渠特种兵。',
    seasonGuide:
      '春秋舒适。夏改早出+室内馆；冬干冷缩短户外遗址。',
    whyFast: '只博物院一日也成立；文峰塔可删。',
    notices: [
      '闭馆日与预约以官方为准。',
      '遗址日晒大，备帽与水。',
      '红旗渠等远线本卡不排。',
      '勿与洛阳龙门同日连赶。',
    ],
    researchKeywords: [
      '安阳 殷墟 父母',
      '殷墟博物馆 甲骨文',
      '安阳 文峰塔',
      '安阳 高铁',
    ],
    sources: [
      {
        title: 'Wikivoyage：安阳',
        url: 'https://zh.wikivoyage.org/wiki/%E5%AE%89%E9%98%B3',
        kind: 'other',
        note: '殷墟与进出，已改写适老',
      },
    ],
    stops: [
      {
        id: 'ay-base',
        name: '安阳市区慢住',
        days: 1,
        pace: 'slow',
        lat: 36.1,
        lng: 114.39,
        summary: '近高铁电梯酒店；抵达歇脚。',
        tips: '博物馆日可作空白缓冲。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Exterior%2C_Yinxu_Museum_20241002-A.jpg/1280px-Exterior%2C_Yinxu_Museum_20241002-A.jpg',
      },
      {
        id: 'ay-yinxu-museum',
        name: '殷墟博物馆',
        days: 1,
        pace: 'slow',
        lat: 36.12,
        lng: 114.32,
        summary: '室内展陈为主，空调友好。',
        tips: '查闭馆；少久站。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Exterior%2C_Yinxu_Museum_20241002-A.jpg/1280px-Exterior%2C_Yinxu_Museum_20241002-A.jpg',
      },
      {
        id: 'ay-yinxu-site',
        name: '殷墟遗址公园选段',
        days: 0.5,
        pace: 'slow',
        lat: 36.13,
        lng: 114.31,
        summary: '平缓选段；与博物馆可同廊但勿赶。',
        tips: '防晒；体力紧可删。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Yinxu_Royal_Tombs_%2853565246028%29.jpg/1280px-Yinxu_Royal_Tombs_%2853565246028%29.jpg',
      },
      {
        id: 'ay-wenfeng-optional',
        name: '文峰塔外观（可选）',
        days: 0.5,
        pace: 'fast',
        lat: 36.09,
        lng: 114.35,
        summary: '外观即可；登塔可删。',
        tips: '默认可删。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/26120-Anyang_%2849086436522%29.jpg/1280px-26120-Anyang_%2849086436522%29.jpg',
      },
    ],
  },

  // ── 焦作云台山 ──────────────────────────────────────────
  {
    id: 'huazhong-henan-jiaozuo',
    title: '焦作 · 云台山观光车浅览',
    region: 'huazhong',
    seasons: ['spring', 'autumn', 'summer'],
    tripType: 'short',
    fromHome: false,
    themes: ['famous-scenic'],
    daysLabel: '约2–4天',
    transport:
      '北京高铁经郑州/新乡至焦作或直达修武云台山站（以车次为准）；景区门口电梯酒店。观光车减步，结束后返京。勿与太行长穿同线',
    budgetLabel: '本趟约1800–3600元（高铁+景区住宿+门票观光车；双人）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/%E6%B2%B3%E5%8D%97%E7%84%A6%E4%BD%9C%E4%BA%91%E5%8F%B0%E5%B1%B1_-_panoramio.jpg/1280px-%E6%B2%B3%E5%8D%97%E7%84%A6%E4%BD%9C%E4%BA%91%E5%8F%B0%E5%B1%B1_-_panoramio.jpg',
    summary:
      '云台山适老减负：修武锚点 + 红石峡/泉瀑峡二选一观光车浅览；茱萸峰索道量力可删。不排全线特种兵与雨后湿滑硬爬。',
    introduction:
      '搜「云台山」「焦作」「红石峡」应命中本卡。景区大，爸妈只选一条峡谷+观光车，另一条整段删。\n\n住景区口或修武电梯酒店，早进午休；台阶多处量力折返。',
    seasonGuide:
      '春秋最佳。夏人多湿热宜早。雨后栈道湿滑可改室内休整日。',
    whyFast: '只红石峡半日也成立；茱萸峰可删。',
    notices: [
      '红石峡与泉瀑峡二选一，勿同日两峡。',
      '观光车优先；长台阶量力折返。',
      '茱萸峰索道可整段删。',
      '雨后防滑；预约门票观光车。',
    ],
    researchKeywords: [
      '云台山 父母 观光车',
      '焦作 红石峡',
      '云台山 修武',
      '茱萸峰 索道',
    ],
    sources: [
      {
        title: 'Wikivoyage：焦作',
        url: 'https://zh.wikivoyage.org/wiki/%E7%84%A6%E4%BD%9C',
        kind: 'other',
        note: '云台山进出，已改写适老',
      },
    ],
    stops: [
      {
        id: 'jz-base',
        name: '修武 / 景区口慢住',
        days: 1,
        pace: 'slow',
        lat: 35.24,
        lng: 113.4,
        summary: '电梯酒店；抵达歇脚，次日早进山。',
        tips: '少换店。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/%E6%B2%B3%E5%8D%97%E7%84%A6%E4%BD%9C%E4%BA%91%E5%8F%B0%E5%B1%B1_-_panoramio.jpg/1280px-%E6%B2%B3%E5%8D%97%E7%84%A6%E4%BD%9C%E4%BA%91%E5%8F%B0%E5%B1%B1_-_panoramio.jpg',
      },
      {
        id: 'jz-hongshi',
        name: '红石峡（峡谷二选一）',
        days: 1,
        pace: 'slow',
        lat: 35.42,
        lng: 113.37,
        summary: '观光车+短段栈道；累了折返。',
        tips: '与泉瀑峡二选一。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/%E6%B2%B3%E5%8D%97%E7%84%A6%E4%BD%9C%E4%BA%91%E5%8F%B0%E5%B1%B1_-_panoramio.jpg/1280px-%E6%B2%B3%E5%8D%97%E7%84%A6%E4%BD%9C%E4%BA%91%E5%8F%B0%E5%B1%B1_-_panoramio.jpg',
      },
      {
        id: 'jz-quanpu-optional',
        name: '泉瀑峡（峡谷二选一）',
        days: 1,
        pace: 'slow',
        lat: 35.44,
        lng: 113.35,
        summary: '瀑布段；体力紧改红石峡。',
        tips: '勿与红石同日。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/%E7%84%A6%E4%BD%9C%E4%BA%91%E5%8F%B0%E5%B1%B1%E4%B9%8B%E5%B7%85_-_panoramio.jpg/1280px-%E7%84%A6%E4%BD%9C%E4%BA%91%E5%8F%B0%E5%B1%B1%E4%B9%8B%E5%B7%85_-_panoramio.jpg',
      },
      {
        id: 'jz-zhuyu-optional',
        name: '茱萸峰索道（可选可删）',
        days: 0.5,
        pace: 'fast',
        lat: 35.43,
        lng: 113.33,
        summary: '索道减负仍有高差；默认可删。',
        tips: '恐高/风大停运即删。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/%E7%84%A6%E4%BD%9C%E4%BA%91%E5%8F%B0%E5%B1%B1%E4%B9%8B%E5%B7%85_-_panoramio.jpg/1280px-%E7%84%A6%E4%BD%9C%E4%BA%91%E5%8F%B0%E5%B1%B1%E4%B9%8B%E5%B7%85_-_panoramio.jpg',
      },
    ],
  },

  // ── 南通濠河 ────────────────────────────────────────────
  {
    id: 'huadong-jiangsu-nantong',
    title: '南通 · 濠河狼山浅住',
    region: 'huadong',
    seasons: ['spring', 'autumn', 'summer'],
    tripType: 'short',
    fromHome: false,
    themes: ['famous-scenic'],
    daysLabel: '约2–4天',
    transport:
      '北京高铁至南通/南通西；濠河沿线电梯酒店。结束后高铁返京。可作苏北缓冲，勿与上海同日特种兵',
    budgetLabel: '本趟约1500–3000元（高铁+电梯酒店+门票；双人）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Nantong_skyline_flanking_the_Hao_River.jpg/1280px-Nantong_skyline_flanking_the_Hao_River.jpg',
    summary:
      '南通补线：濠河环城平路慢走 + 狼山寺观选段；博物苑室内可选。台阶量力，适合苏北短假。',
    introduction:
      '搜「南通」「濠河」「狼山」应命中本卡。濠河适合坐船或平路散步减步；狼山台阶多，只选一段。\n\n填苏北城市缺口，与扬州/镇江分次出门。',
    seasonGuide:
      '春秋舒适。夏湿热改早晚与室内。冬可走濠河。',
    whyFast: '只濠河半日也成立；狼山可删。',
    notices: [
      '狼山台阶量力，默认可只山门外观。',
      '濠河游船可选。',
      '勿与上海外滩同日连赶。',
    ],
    researchKeywords: [
      '南通 濠河 父母',
      '狼山 南通',
      '南通 高铁 慢游',
    ],
    sources: [
      {
        title: 'Wikivoyage：南通',
        url: 'https://zh.wikivoyage.org/wiki/%E5%8D%97%E9%80%9A',
        kind: 'other',
        note: '濠河狼山，已改写适老',
      },
    ],
    stops: [
      {
        id: 'nt-base',
        name: '濠河沿线慢住',
        days: 1.5,
        pace: 'slow',
        lat: 32.01,
        lng: 120.86,
        summary: '环濠河电梯酒店；平路散步。',
        tips: '游船减步可选。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Nantong_skyline_flanking_the_Hao_River.jpg/1280px-Nantong_skyline_flanking_the_Hao_River.jpg',
      },
      {
        id: 'nt-haohe',
        name: '濠河环城浅走',
        days: 1,
        pace: 'slow',
        lat: 32.02,
        lng: 120.85,
        summary: '选一段岸线；勿强求环城。',
        tips: '防晒；长椅多歇。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/City_of_Nantong_and_the_River_Hao.jpg/1280px-City_of_Nantong_and_the_River_Hao.jpg',
      },
      {
        id: 'nt-langshan',
        name: '狼山寺观选段',
        days: 1,
        pace: 'slow',
        lat: 31.95,
        lng: 120.88,
        summary: '山门与平缓段；登高可删。',
        tips: '石阶防滑。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Buddhist_temple_on_Wolf_Hill.JPG/1280px-Buddhist_temple_on_Wolf_Hill.JPG',
      },
      {
        id: 'nt-museum-optional',
        name: '南通博物苑（可选）',
        days: 0.5,
        pace: 'fast',
        lat: 32.01,
        lng: 120.86,
        summary: '室内展；空调日友好。',
        tips: '默认可删。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Buddhist_temple_on_Wolf_Hill.JPG/1280px-Buddhist_temple_on_Wolf_Hill.JPG',
      },
    ],
  },

  // ── 嘉兴南湖 / 西塘可选 ──────────────────────────────────
  {
    id: 'huadong-zhejiang-jiaxing',
    title: '嘉兴 · 南湖与西塘浅住',
    region: 'huadong',
    seasons: ['spring', 'autumn', 'summer'],
    tripType: 'short',
    fromHome: false,
    themes: ['famous-scenic'],
    daysLabel: '约2–4天',
    transport:
      '北京高铁至嘉兴/嘉兴南；市区或西塘电梯酒店。西塘与乌镇二选一加深（乌镇亦见江南水乡廊）。结束后高铁返京',
    budgetLabel: '本趟约1600–3200元（高铁+水乡住宿+门票；双人）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/%E5%98%89%E5%85%B4%E5%8D%97%E6%B9%96%2C_2021-10-30_03.jpg/1280px-%E5%98%89%E5%85%B4%E5%8D%97%E6%B9%96%2C_2021-10-30_03.jpg',
    summary:
      '嘉兴补线：南湖湖岸平走 + 西塘水巷二选一加深；勿与乌镇同日两镇。石板防滑，适合浙北短假。',
    introduction:
      '搜「嘉兴南湖」「西塘」应命中本卡。南湖以纪念馆+湖岸为主；西塘连住一晚比一日特种兵友好。\n\n与湖州南浔、苏州水乡分次出门，勿一日三镇。',
    seasonGuide:
      '春秋最宜。夏湿热缩短午后。梅雨石板更滑。',
    whyFast: '只南湖一日也成立；西塘可删。',
    notices: [
      '西塘与乌镇勿同日。',
      '石板防滑鞋。',
      '南湖游船量力。',
    ],
    researchKeywords: [
      '嘉兴 南湖 父母',
      '西塘 慢住',
      '嘉兴 高铁',
    ],
    sources: [
      {
        title: 'Wikivoyage：嘉兴',
        url: 'https://zh.wikivoyage.org/wiki/%E5%98%89%E5%85%B4',
        kind: 'other',
        note: '南湖西塘，已改写适老',
      },
    ],
    stops: [
      {
        id: 'jx-base',
        name: '嘉兴市区慢住',
        days: 1,
        pace: 'slow',
        lat: 30.75,
        lng: 120.75,
        summary: '高铁进出；电梯酒店。',
        tips: '也可直接住西塘。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/%E5%98%89%E5%85%B4%E5%8D%97%E6%B9%96.jpg/1280px-%E5%98%89%E5%85%B4%E5%8D%97%E6%B9%96.jpg',
      },
      {
        id: 'jx-nanhu',
        name: '南湖湖岸 / 纪念馆',
        days: 1,
        pace: 'slow',
        lat: 30.75,
        lng: 120.76,
        summary: '湖岸平走+室内馆；游船可选。',
        tips: '防晒；馆内少久站。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/%E5%98%89%E5%85%B4%E5%8D%97%E6%B9%96%2C_2021-10-30_03.jpg/1280px-%E5%98%89%E5%85%B4%E5%8D%97%E6%B9%96%2C_2021-10-30_03.jpg',
      },
      {
        id: 'jx-xitang',
        name: '西塘水巷（可选加深）',
        days: 1.5,
        pace: 'slow',
        lat: 30.95,
        lng: 120.89,
        summary: '选一两段水巷；可连住一晚。',
        tips: '勿与乌镇同日；人多宜早。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/1_xitang_zhejiang_2023.jpg/1280px-1_xitang_zhejiang_2023.jpg',
      },
    ],
  },

  // ── 湖州南浔 ────────────────────────────────────────────
  {
    id: 'huadong-zhejiang-huzhou',
    title: '湖州 · 南浔古镇浅住',
    region: 'huadong',
    seasons: ['spring', 'autumn', 'summer'],
    tripType: 'short',
    fromHome: false,
    themes: ['famous-scenic'],
    daysLabel: '约2–4天',
    transport:
      '北京高铁至湖州/湖州东，转巴士或包车南浔；古镇外电梯酒店。结束后高铁返京。勿与西塘乌镇同日三镇',
    budgetLabel: '本趟约1600–3200元（高铁+古镇住宿+门票；双人）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/%E5%8D%97%E6%B5%94%E5%8F%A4%E9%95%87%E5%B0%8F%E8%8E%B2%E5%BA%84.jpg/1280px-%E5%8D%97%E6%B5%94%E5%8F%A4%E9%95%87%E5%B0%8F%E8%8E%B2%E5%BA%84.jpg',
    summary:
      '湖州南浔适老水乡：小莲庄/嘉业堂选段 + 百间楼水巷浅逛；市区飞英塔可选。与嘉兴西塘分卡，勿一日两镇。',
    introduction:
      '搜「南浔」「小莲庄」「湖州」应命中本卡。南浔相对安静，适合爸妈连住一晚慢慢走。\n\n石板防滑；园林选一处加深即可。',
    seasonGuide:
      '春秋最佳。夏湿热早出。梅雨防滑。',
    whyFast: '只南浔一日也成立；飞英塔可删。',
    notices: [
      '勿与西塘/乌镇同日。',
      '石板防滑。',
      '园林二选一加深。',
    ],
    researchKeywords: [
      '南浔 古镇 父母',
      '小莲庄 湖州',
      '湖州 南浔 高铁',
    ],
    sources: [
      {
        title: 'Wikivoyage：湖州',
        url: 'https://zh.wikivoyage.org/wiki/%E6%B9%96%E5%B7%9E',
        kind: 'other',
        note: '南浔骨架，已改写适老',
      },
    ],
    stops: [
      {
        id: 'huz-nanxun-base',
        name: '南浔古镇外慢住',
        days: 1,
        pace: 'slow',
        lat: 30.88,
        lng: 120.42,
        summary: '电梯酒店；少进核心石板区住店。',
        tips: '抵达日只浅逛。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/%E5%8D%97%E6%B5%94%E5%8F%A4%E9%95%87%E5%BB%8A%E6%A1%A5.jpg/1280px-%E5%8D%97%E6%B5%94%E5%8F%A4%E9%95%87%E5%BB%8A%E6%A1%A5.jpg',
      },
      {
        id: 'huz-xiaolianzhuang',
        name: '小莲庄 / 嘉业堂选段',
        days: 1,
        pace: 'slow',
        lat: 30.87,
        lng: 120.43,
        summary: '园林平缓段；二选一加深。',
        tips: '人多宜早。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/%E5%8D%97%E6%B5%94%E5%8F%A4%E9%95%87%E5%B0%8F%E8%8E%B2%E5%BA%84.jpg/1280px-%E5%8D%97%E6%B5%94%E5%8F%A4%E9%95%87%E5%B0%8F%E8%8E%B2%E5%BA%84.jpg',
      },
      {
        id: 'huz-baijianlou',
        name: '百间楼水巷',
        days: 1,
        pace: 'slow',
        lat: 30.88,
        lng: 120.43,
        summary: '水巷选段慢走。',
        tips: '石板防滑。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Nanxun_-_Ancient_water_town_-_0081.jpg/1280px-Nanxun_-_Ancient_water_town_-_0081.jpg',
      },
      {
        id: 'huz-feiying-optional',
        name: '湖州飞英塔（可选）',
        days: 0.5,
        pace: 'fast',
        lat: 30.87,
        lng: 120.1,
        summary: '市区回程顺路；默认可删。',
        tips: '与南浔分日或回程。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/%E6%B9%96%E5%B7%9E%E5%8D%97%E6%B5%94%E5%8F%A4%E9%95%87%E5%BB%8A%E6%A1%A5.jpg/1280px-%E6%B9%96%E5%B7%9E%E5%8D%97%E6%B5%94%E5%8F%A4%E9%95%87%E5%BB%8A%E6%A1%A5.jpg',
      },
    ],
  },

  // ── 岳阳楼 ──────────────────────────────────────────────
  {
    id: 'huazhong-hunan-yueyang',
    title: '岳阳 · 岳阳楼洞庭浅住',
    region: 'huazhong',
    seasons: ['spring', 'autumn', 'summer'],
    tripType: 'short',
    fromHome: false,
    themes: ['famous-scenic'],
    daysLabel: '约2–3天',
    transport:
      '北京高铁至岳阳东；近岳阳楼电梯酒店。楼观选段+洞庭湖岸。结束后高铁返京或转长沙。勿与张家界同短假硬串盘山',
    budgetLabel: '本趟约1400–2800元（高铁+电梯酒店+门票；双人）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/1/1b/Frontal_view_of_Yueyang_Tower%2C_Hunan%2C_China1.jpg',
    summary:
      '岳阳楼名景浅线：楼观外观/选段 + 洞庭湖岸平走；登楼台阶量力可删。适合湘北短假，与长沙/张家界分次出门。',
    introduction:
      '搜「岳阳楼」「洞庭湖」应直达本卡。主体是楼与湖，不是特种兵赶长沙橘子洲。\n\n爸妈优先外观+园区平地；登楼台阶多，腿脚不稳只外观。',
    seasonGuide:
      '春秋最佳。夏湿热早出。冬湖风大备外套。',
    whyFast: '只岳阳楼外观半日也成立。',
    notices: [
      '登楼台阶量力，默认可外观。',
      '湖岸风大。',
      '勿与张家界同短假连轴。',
    ],
    researchKeywords: [
      '岳阳楼 父母',
      '洞庭湖 岳阳',
      '岳阳 高铁',
    ],
    sources: [
      {
        title: 'Wikivoyage：岳阳',
        url: 'https://zh.wikivoyage.org/wiki/%E5%B2%B3%E9%98%B3',
        kind: 'other',
        note: '岳阳楼骨架，已改写适老',
      },
    ],
    stops: [
      {
        id: 'yy-base',
        name: '岳阳市区慢住',
        days: 1,
        pace: 'slow',
        lat: 29.37,
        lng: 113.13,
        summary: '近楼景区电梯酒店。',
        tips: '抵达歇脚。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/1/1b/Frontal_view_of_Yueyang_Tower%2C_Hunan%2C_China1.jpg',
      },
      {
        id: 'yy-yueyanglou',
        name: '岳阳楼选段',
        days: 1,
        pace: 'slow',
        lat: 29.38,
        lng: 113.09,
        summary: '园区平地+楼观；登楼可删。',
        tips: '预约以官方为准。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/1/1b/Frontal_view_of_Yueyang_Tower%2C_Hunan%2C_China1.jpg',
      },
      {
        id: 'yy-dongting',
        name: '洞庭湖岸浅走',
        days: 0.5,
        pace: 'slow',
        lat: 29.38,
        lng: 113.08,
        summary: '湖岸选段；游船量力可删。',
        tips: '风大备外套。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/1/1b/Frontal_view_of_Yueyang_Tower%2C_Hunan%2C_China1.jpg',
      },
    ],
  },

  // ── 邯郸丛台 ────────────────────────────────────────────
  {
    id: 'huabei-hebei-handan',
    title: '邯郸 · 丛台古城浅住',
    region: 'huabei',
    seasons: ['spring', 'autumn', 'summer'],
    tripType: 'short',
    fromHome: true,
    themes: ['famous-scenic'],
    daysLabel: '约2–4天',
    transport:
      '北京高铁至邯郸/邯郸东；丛台附近电梯酒店。结束后高铁返京。响堂山日归可选可删，勿与正定同日两城',
    budgetLabel: '本趟约1400–2800元（高铁+电梯酒店+门票；双人）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/%E6%AD%A6%E7%81%B5%E4%B8%9B%E5%8F%B0_1.jpg/1280px-%E6%AD%A6%E7%81%B5%E4%B8%9B%E5%8F%B0_1.jpg',
    summary:
      '邯郸冀南补线：丛台公园平地 + 古城街区浅逛；响堂山石窟日归量力可删。填河北南部高铁缺口。',
    introduction:
      '搜「邯郸」「丛台」应命中本卡。主体平地公园与街区；响堂山台阶多，默认可删。\n\n与石家庄正定分次出门。',
    seasonGuide:
      '春秋舒适。夏闷热改早晚。冬干冷缩短户外。',
    whyFast: '只丛台半日也成立；响堂可删。',
    notices: [
      '响堂山台阶多，约60默认可删。',
      '勿与正定隆兴寺同日连赶。',
    ],
    researchKeywords: [
      '邯郸 丛台 父母',
      '响堂山 可选',
      '邯郸 高铁',
    ],
    sources: [
      {
        title: 'Wikivoyage：河北',
        url: 'https://zh.wikivoyage.org/wiki/%E6%B2%B3%E5%8C%97',
        kind: 'other',
        note: '邯郸进出骨架，已改写适老',
      },
    ],
    stops: [
      {
        id: 'hd-base',
        name: '邯郸市区慢住',
        days: 1,
        pace: 'slow',
        lat: 36.63,
        lng: 114.49,
        summary: '近丛台电梯酒店。',
        tips: '抵达歇脚。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/%E9%82%AF%E9%83%B8%E4%B8%9B%E5%8F%B0%E5%85%AC%E5%9B%AD_1.jpg/1280px-%E9%82%AF%E9%83%B8%E4%B8%9B%E5%8F%B0%E5%85%AC%E5%9B%AD_1.jpg',
      },
      {
        id: 'hd-congtai',
        name: '丛台公园',
        days: 1,
        pace: 'slow',
        lat: 36.62,
        lng: 114.5,
        summary: '公园平地浅逛；登台量力。',
        tips: '防晒；久站带凳。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/%E6%AD%A6%E7%81%B5%E4%B8%9B%E5%8F%B0_1.jpg/1280px-%E6%AD%A6%E7%81%B5%E4%B8%9B%E5%8F%B0_1.jpg',
      },
      {
        id: 'hd-xiangtang-optional',
        name: '响堂山石窟（可选可删）',
        days: 1,
        pace: 'fast',
        lat: 36.55,
        lng: 114.15,
        summary: '日归；台阶多默认跳过。',
        tips: '默认可删。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Xiangtangshan_Southern_Grottoes_17.jpg/1280px-Xiangtangshan_Southern_Grottoes_17.jpg',
      },
    ],
  },
];
