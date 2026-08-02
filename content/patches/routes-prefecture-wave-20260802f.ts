import type { Route } from '../types';

/**
 * Prefecture wave after catalog 159 (2026-08-02f).
 * 运城盐湖 · 临汾广胜 · 潍坊 · 荆州古城 · 宣城泾县。
 * Evidence: research/notes/prefecture-depth/ + multi-discovery/prefecture-wave-20260802f.md
 */
export const patchRoutes: Route[] = [
  // ── 运城盐湖 / 解州关帝庙 ────────────────────────────────
  {
    id: 'huabei-shanxi-yuncheng',
    title: '运城 · 盐湖关帝庙浅住',
    region: 'huabei',
    seasons: ['spring', 'autumn', 'summer'],
    tripType: 'short',
    fromHome: true,
    themes: ['famous-scenic'],
    daysLabel: '约3–5天',
    transport:
      '北京高铁至运城/运城北；市区或盐湖沿线电梯酒店。解州关帝庙城际或包车。结束后高铁返京。勿与临汾广胜寺同日特种兵连赶',
    budgetLabel: '本趟约1600–3200元（高铁+电梯酒店+门票包车；双人）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/%E8%BF%90%E5%9F%8E%E7%9B%90%E6%B9%96.jpg/1280px-%E8%BF%90%E5%9F%8E%E7%9B%90%E6%B9%96.jpg',
    summary:
      '晋南运城适老浅线：盐湖岸平走 + 解州关帝庙院落选段；市区缓冲。父母友好，夏午后晒强宜早出。临汾广胜另卡分次。',
    introduction:
      '搜「运城盐湖」「解州关帝庙」「运城」应命中本卡。主体是盐湖平路与关帝庙院落，不是晋南文物特种兵。\n\n盐湖防晒防滑；庙内台阶量力，外观与平院即可。与临汾分次出门。',
    seasonGuide:
      '春秋最舒适。夏湖面反光强，早出午歇。冬干冷缩短户外，可只关帝庙。',
    whyFast: '只盐湖或关帝庙半日也成立；市区缓冲可删。',
    notices: [
      '盐湖夏日防晒、防眩光；湿滑岸段量力。',
      '关帝庙登高台阶可删，以院落平走为主。',
      '勿与临汾广胜寺同日连赶。',
      '门票预约以景区官方为准。',
    ],
    researchKeywords: [
      '运城 盐湖 父母',
      '解州 关帝庙',
      '运城 高铁',
      '晋南 浅住',
    ],
    sources: [
      {
        title: 'Wikivoyage：山西',
        url: 'https://zh.wikivoyage.org/wiki/%E5%B1%B1%E8%A5%BF',
        kind: 'other',
        note: '晋南进出骨架，已改写适老',
      },
      {
        title: '地级笔记：运城',
        url: 'https://zh.wikivoyage.org/wiki/%E5%B1%B1%E8%A5%BF',
        kind: 'other',
        note: 'research/notes/prefecture-depth/shanxi-yuncheng.md',
      },
    ],
    stops: [
      {
        id: 'yc-base',
        name: '运城市区慢住',
        days: 1,
        pace: 'slow',
        lat: 35.03,
        lng: 111.01,
        summary: '高铁进出；电梯酒店连住，抵达歇脚。',
        tips: '也可近盐湖选店少通勤。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/%E8%BF%90%E5%9F%8E%E7%9B%90%E6%B9%96.jpg/1280px-%E8%BF%90%E5%9F%8E%E7%9B%90%E6%B9%96.jpg',
      },
      {
        id: 'yc-yanhu',
        name: '运城盐湖岸浅走',
        days: 1,
        pace: 'slow',
        lat: 34.98,
        lng: 111.0,
        summary: '湖岸平路选段；不排深水活动。',
        tips: '防晒墨镜；暑期缩短午后。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/%E8%BF%90%E5%9F%8E%E7%9B%90%E6%B9%96.jpg/1280px-%E8%BF%90%E5%9F%8E%E7%9B%90%E6%B9%96.jpg',
      },
      {
        id: 'yc-guandi',
        name: '解州 · 关帝庙院落',
        days: 1,
        pace: 'slow',
        lat: 34.92,
        lng: 110.85,
        summary: '平缓院落选段；登高可删。',
        tips: '包车或城际；人多宜早。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Guan_Di_Temple_Yuncheng_Shanxi.JPG/1280px-Guan_Di_Temple_Yuncheng_Shanxi.JPG',
      },
      {
        id: 'yc-museum-optional',
        name: '市区馆线（可选）',
        days: 0.5,
        pace: 'fast',
        lat: 35.03,
        lng: 111.0,
        summary: '室内空调友好；默认可删。',
        tips: '查闭馆日；与盐湖分日更松。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Guan_Di_Temple_Yuncheng_Shanxi.JPG/1280px-Guan_Di_Temple_Yuncheng_Shanxi.JPG',
      },
    ],
  },

  // ── 临汾 · 广胜寺 / 尧都缓冲 ──────────────────────────────
  {
    id: 'huabei-shanxi-linfen',
    title: '临汾 · 广胜寺尧都浅住',
    region: 'huabei',
    seasons: ['spring', 'autumn', 'summer'],
    tripType: 'short',
    fromHome: true,
    themes: ['famous-scenic'],
    daysLabel: '约3–5天',
    transport:
      '北京高铁至临汾西/临汾；尧都区电梯酒店。洪洞广胜寺包车日归。结束后高铁返京或转运城。勿与运城盐湖同日两城',
    budgetLabel: '本趟约1600–3200元（高铁+电梯酒店+门票包车；双人）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/%E5%B9%BF%E8%83%9C%E5%AF%BA_03.JPG/1280px-%E5%B9%BF%E8%83%9C%E5%AF%BA_03.JPG',
    summary:
      '晋南临汾适老浅线：市区博物馆/铁佛寺缓冲 + 洪洞广胜寺选段；华门外观可选。台阶量力，约60以馆线与外观为主。运城盐湖另卡。',
    introduction:
      '搜「临汾」「广胜寺」「尧庙」「洪洞」应命中本卡。主体是尧都缓冲与广胜寺浅览，不是晋南古建特种兵。\n\n广胜寺台阶与坡道多，默认可只下院/外观；尧庙/华门以平地外观为主。',
    seasonGuide:
      '春秋舒适。夏闷热改早晚与室内馆。冬干冷缩短户外。',
    whyFast: '只博物馆半日或广胜外观也成立；华门可删。',
    notices: [
      '广胜寺台阶多，约60默认可只外观/下院。',
      '勿与运城盐湖同日连赶。',
      '华门登高可删。',
      '门票与开放以官方为准。',
    ],
    researchKeywords: [
      '临汾 广胜寺 父母',
      '洪洞 广胜寺',
      '尧庙 临汾',
      '临汾 高铁',
    ],
    sources: [
      {
        title: 'Wikivoyage：山西',
        url: 'https://zh.wikivoyage.org/wiki/%E5%B1%B1%E8%A5%BF',
        kind: 'other',
        note: '临汾进出，已改写适老',
      },
      {
        title: '地级笔记：临汾',
        url: 'https://zh.wikivoyage.org/wiki/%E5%B1%B1%E8%A5%BF',
        kind: 'other',
        note: 'research/notes/prefecture-depth/shanxi-linfen.md',
      },
    ],
    stops: [
      {
        id: 'lf-base',
        name: '临汾尧都慢住',
        days: 1,
        pace: 'slow',
        lat: 36.08,
        lng: 111.52,
        summary: '高铁进出；电梯酒店。',
        tips: '抵达歇脚，次日再进洪洞。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/%E4%B8%B4%E6%B1%BE%E5%8D%9A%E7%89%A9%E9%A6%86%E5%A4%A7%E9%97%A8.JPG/1280px-%E4%B8%B4%E6%B1%BE%E5%8D%9A%E7%89%A9%E9%A6%86%E5%A4%A7%E9%97%A8.JPG',
      },
      {
        id: 'lf-museum',
        name: '临汾博物馆 / 铁佛寺',
        days: 1,
        pace: 'slow',
        lat: 36.08,
        lng: 111.52,
        summary: '室内展陈为主，空调友好。',
        tips: '少久站；查闭馆日。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/%E4%B8%B4%E6%B1%BE%E5%8D%9A%E7%89%A9%E9%A6%86%E5%A4%A7%E9%97%A8.JPG/1280px-%E4%B8%B4%E6%B1%BE%E5%8D%9A%E7%89%A9%E9%A6%86%E5%A4%A7%E9%97%A8.JPG',
      },
      {
        id: 'lf-guangsheng',
        name: '洪洞 · 广胜寺选段',
        days: 1,
        pace: 'slow',
        lat: 36.27,
        lng: 111.68,
        summary: '下院/外观优先；硬爬默认删。',
        tips: '包车日归；台阶量力。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/%E5%B9%BF%E8%83%9C%E5%AF%BA_03.JPG/1280px-%E5%B9%BF%E8%83%9C%E5%AF%BA_03.JPG',
      },
      {
        id: 'lf-huamen-optional',
        name: '华门 / 尧庙外观（可选）',
        days: 0.5,
        pace: 'fast',
        lat: 36.05,
        lng: 111.55,
        summary: '平地外观；登高默认可删。',
        tips: '与广胜分日或回程顺路。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/%E5%8D%8E%E9%97%A8.jpg/1280px-%E5%8D%8E%E9%97%A8.jpg',
      },
    ],
  },

  // ── 潍坊 · 十笏园 / 风筝馆 ────────────────────────────────
  {
    id: 'huabei-shandong-weifang',
    title: '潍坊 · 十笏园风筝浅住',
    region: 'huabei',
    seasons: ['spring', 'autumn', 'summer'],
    tripType: 'short',
    fromHome: true,
    themes: ['famous-scenic'],
    daysLabel: '约2–4天',
    transport:
      '北京高铁至潍坊/潍坊北；市区电梯酒店。十笏园与风筝博物馆步行或打车。结束后高铁返京。可作青岛/烟台缓冲，勿一日串半岛',
    budgetLabel: '本趟约1400–2800元（高铁+电梯酒店+门票；双人）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/%E5%8D%81%E7%AC%8F%E5%9B%AD%E9%97%A8%E5%8F%A3.jpg/1280px-%E5%8D%81%E7%AC%8F%E5%9B%AD%E9%97%A8%E5%8F%A3.jpg',
    summary:
      '鲁中潍坊城市补线：十笏园平缓园林 + 世界风筝博物馆室内；市区慢住。填青岛烟台之间高铁缺口，适合短假。',
    introduction:
      '搜「潍坊」「十笏园」「风筝博物馆」应命中本卡。主体平地园林与室内馆，不是风筝会人潮特种兵。\n\n与青岛海岸、烟台分次出门；风筝节期间人多宜错峰或改馆线。',
    seasonGuide:
      '春秋最宜。夏闷热改早晚与室内。冬可走馆线。风筝会高峰另议。',
    whyFast: '只十笏园或风筝馆半日也成立。',
    notices: [
      '风筝会期间人流大，可改室内馆。',
      '园林石板防滑。',
      '勿与青岛崂山同日连赶。',
    ],
    researchKeywords: [
      '潍坊 十笏园 父母',
      '潍坊 风筝博物馆',
      '潍坊 高铁',
    ],
    sources: [
      {
        title: 'Wikivoyage：山东',
        url: 'https://zh.wikivoyage.org/wiki/%E5%B1%B1%E4%B8%9C',
        kind: 'other',
        note: '鲁中进出，已改写适老',
      },
      {
        title: '地级笔记：潍坊',
        url: 'https://zh.wikivoyage.org/wiki/%E5%B1%B1%E4%B8%9C',
        kind: 'other',
        note: 'research/notes/prefecture-depth/shandong-weifang.md',
      },
    ],
    stops: [
      {
        id: 'wf-base',
        name: '潍坊市区慢住',
        days: 1,
        pace: 'slow',
        lat: 36.71,
        lng: 119.16,
        summary: '高铁进出；电梯酒店。',
        tips: '近十笏园选店少走路。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/%E5%8D%81%E7%AC%8F%E5%9B%AD%E9%97%A8%E5%8F%A3.jpg/1280px-%E5%8D%81%E7%AC%8F%E5%9B%AD%E9%97%A8%E5%8F%A3.jpg',
      },
      {
        id: 'wf-shihu',
        name: '十笏园',
        days: 1,
        pace: 'slow',
        lat: 36.71,
        lng: 119.15,
        summary: '平缓园林选段。',
        tips: '石板防滑；人少宜慢。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/%E5%8D%81%E7%AC%8F%E5%9B%AD%E9%97%A8%E5%8F%A3.jpg/1280px-%E5%8D%81%E7%AC%8F%E5%9B%AD%E9%97%A8%E5%8F%A3.jpg',
      },
      {
        id: 'wf-kite-museum',
        name: '世界风筝博物馆',
        days: 1,
        pace: 'slow',
        lat: 36.71,
        lng: 119.14,
        summary: '室内展陈；空调友好。',
        tips: '少久站；与园林可同廊分上下午。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Weifang_World_Kite_Museum.jpg/1280px-Weifang_World_Kite_Museum.jpg',
      },
      {
        id: 'wf-park-optional',
        name: '市区公园浅走（可选）',
        days: 0.5,
        pace: 'fast',
        lat: 36.72,
        lng: 119.16,
        summary: '平路散步；默认可删。',
        tips: '抵达日或回程。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Weifang_World_Kite_Museum.jpg/1280px-Weifang_World_Kite_Museum.jpg',
      },
    ],
  },

  // ── 荆州古城 ────────────────────────────────────────────
  {
    id: 'huazhong-hubei-jingzhou',
    title: '荆州 · 古城墙博物馆浅住',
    region: 'huazhong',
    seasons: ['spring', 'autumn', 'summer'],
    tripType: 'short',
    fromHome: false,
    themes: ['famous-scenic'],
    daysLabel: '约2–4天',
    transport:
      '北京高铁至荆州/荆州站；古城附近电梯酒店。城墙选段步行或观光车。结束后高铁返京或转宜昌/武汉。勿与三峡大坝同日特种兵',
    budgetLabel: '本趟约1500–3000元（高铁+电梯酒店+门票；双人）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/%E8%8D%86%E5%B7%9E%E4%B8%9C%E9%97%A8%E5%8F%A4%E5%9F%8E%E5%A2%99.jpg/1280px-%E8%8D%86%E5%B7%9E%E4%B8%9C%E9%97%A8%E5%8F%A4%E5%9F%8E%E5%A2%99.jpg',
    summary:
      '湖北荆州古城浅住：城墙平缓选段 + 荆州博物馆室内；登城量力可删。适合湘鄂短假，与武汉/宜昌分次出门。',
    introduction:
      '搜「荆州古城」「荆州博物馆」「荆州城墙」应命中本卡。主体是城墙外观/选段与馆线，不是环城硬走特种兵。\n\n爸妈优先博物馆+东门一带平地；完整环城默认删。',
    seasonGuide:
      '春秋最佳。夏湿热改早晚与室内。冬城墙风大备外套。',
    whyFast: '只博物馆或城墙外观半日也成立。',
    notices: [
      '登城台阶与环城量力，默认可只外观选段。',
      '城墙石面防滑。',
      '勿与三峡大坝同日连赶。',
      '门票预约以官方为准。',
    ],
    researchKeywords: [
      '荆州 古城 父母',
      '荆州博物馆',
      '荆州 城墙',
      '荆州 高铁',
    ],
    sources: [
      {
        title: 'Wikivoyage：湖北',
        url: 'https://zh.wikivoyage.org/wiki/%E6%B9%96%E5%8C%97',
        kind: 'other',
        note: '荆州骨架，已改写适老',
      },
      {
        title: '地级笔记：荆州',
        url: 'https://zh.wikivoyage.org/wiki/%E6%B9%96%E5%8C%97',
        kind: 'other',
        note: 'research/notes/prefecture-depth/hubei-jingzhou.md',
      },
    ],
    stops: [
      {
        id: 'jgz-base',
        name: '荆州古城慢住',
        days: 1,
        pace: 'slow',
        lat: 30.33,
        lng: 112.24,
        summary: '近古城电梯酒店。',
        tips: '抵达歇脚。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/%E8%8D%86%E5%B7%9E%E4%B8%9C%E9%97%A8%E5%8F%A4%E5%9F%8E%E5%A2%99.jpg/1280px-%E8%8D%86%E5%B7%9E%E4%B8%9C%E9%97%A8%E5%8F%A4%E5%9F%8E%E5%A2%99.jpg',
      },
      {
        id: 'jgz-wall',
        name: '古城墙选段（东门一带）',
        days: 1,
        pace: 'slow',
        lat: 30.35,
        lng: 112.26,
        summary: '外观与平缓段；环城默认删。',
        tips: '防晒；台阶量力。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/%E8%8D%86%E5%B7%9E%E4%B8%9C%E9%97%A8%E5%8F%A4%E5%9F%8E%E5%A2%99.jpg/1280px-%E8%8D%86%E5%B7%9E%E4%B8%9C%E9%97%A8%E5%8F%A4%E5%9F%8E%E5%A2%99.jpg',
      },
      {
        id: 'jgz-museum',
        name: '荆州博物馆',
        days: 1,
        pace: 'slow',
        lat: 30.35,
        lng: 112.24,
        summary: '室内展陈；空调友好。',
        tips: '少久站；预约以官方为准。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Jingzhou_Museum.jpg/1280px-Jingzhou_Museum.jpg',
      },
      {
        id: 'jgz-park-optional',
        name: '护城河岸浅走（可选）',
        days: 0.5,
        pace: 'fast',
        lat: 30.34,
        lng: 112.25,
        summary: '平路选段；默认可删。',
        tips: '与城墙同廊勿赶。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Jingzhou_Museum.jpg/1280px-Jingzhou_Museum.jpg',
      },
    ],
  },

  // ── 宣城 / 泾县（与黄山分周）────────────────────────────
  {
    id: 'huadong-anhui-xuancheng',
    title: '宣城 · 泾县查济浅住',
    region: 'huadong',
    seasons: ['spring', 'autumn', 'summer'],
    tripType: 'short',
    fromHome: false,
    themes: ['famous-scenic'],
    daysLabel: '约3–5天',
    transport:
      '北京高铁至宣城/泾县；宣城或泾县电梯酒店。查济/桃花潭包车或县域巴士。结束后高铁返京。黄山峰顶请走黄山徽州线，本线分周',
    budgetLabel: '本趟约1800–3500元（高铁+电梯酒店+包车门票；双人）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Jingxian_Zhaji_2017.08.19_17-24-24.jpg/1280px-Jingxian_Zhaji_2017.08.19_17-24-24.jpg',
    summary:
      '皖南宣城县域浅线：广教寺双塔外观 + 泾县查济古村选段；桃花潭可选。与黄山峰顶分周，石板防滑，适合父母慢住。',
    introduction:
      '搜「宣城」「泾县」「查济」「桃花潭」应命中本卡，而不是再被黄山索道清单淹没。\n\n查济石板多，选一两段慢走即可；桃花潭游船晕动可删。广教寺双塔以外观为主。',
    seasonGuide:
      '春秋最佳。夏湿热早出。梅雨石板更滑。冬可走双塔外观与短村段。',
    whyFast: '只查济一日或双塔外观也成立；桃花潭可删。',
    notices: [
      '黄山峰顶另卡分周，本线不排索道顶峰。',
      '查济石板防滑；雨后量力。',
      '桃花潭游船晕动可整段删。',
      '勿一日查济+桃花潭+黄山三线。',
    ],
    researchKeywords: [
      '宣城 泾县 父母',
      '查济 古村',
      '桃花潭 宣城',
      '广教寺 双塔',
    ],
    sources: [
      {
        title: 'Wikivoyage：安徽',
        url: 'https://zh.wikivoyage.org/wiki/%E5%AE%89%E5%BE%BD',
        kind: 'other',
        note: '皖南县域骨架，已改写适老',
      },
      {
        title: '地级笔记：宣城',
        url: 'https://zh.wikivoyage.org/wiki/%E5%AE%89%E5%BE%BD',
        kind: 'other',
        note: 'research/notes/prefecture-depth/anhui-xuancheng.md',
      },
    ],
    stops: [
      {
        id: 'xc-base',
        name: '宣城 / 泾县锚点',
        days: 1,
        pace: 'slow',
        lat: 30.94,
        lng: 118.76,
        summary: '高铁进出；电梯酒店连住。',
        tips: '也可直接住泾县少换乘。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Twin_Pagodas_of_Guangjiao_Temple_04_2021-03.jpg/1280px-Twin_Pagodas_of_Guangjiao_Temple_04_2021-03.jpg',
      },
      {
        id: 'xc-guangjiao',
        name: '广教寺双塔外观',
        days: 0.5,
        pace: 'slow',
        lat: 30.95,
        lng: 118.75,
        summary: '市区外观浅览；登塔默认删。',
        tips: '抵达日或回程顺路。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Twin_Pagodas_of_Guangjiao_Temple_04_2021-03.jpg/1280px-Twin_Pagodas_of_Guangjiao_Temple_04_2021-03.jpg',
      },
      {
        id: 'xc-zhaji',
        name: '泾县 · 查济古村选段',
        days: 1.5,
        pace: 'slow',
        lat: 30.55,
        lng: 118.25,
        summary: '古村一两段慢走；可连住一晚。',
        tips: '石板防滑；勿全村硬走。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Jingxian_Zhaji_2017.08.19_17-24-24.jpg/1280px-Jingxian_Zhaji_2017.08.19_17-24-24.jpg',
      },
      {
        id: 'xc-taohuatan-optional',
        name: '桃花潭（可选可删）',
        days: 1,
        pace: 'fast',
        lat: 30.6,
        lng: 118.0,
        summary: '湖岸/渡口选段；游船量力可删。',
        tips: '与查济分日；晕动整段删。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Jingxian_Taohuatan_2017.08.19_07-36-27.jpg/1280px-Jingxian_Taohuatan_2017.08.19_07-36-27.jpg',
      },
    ],
  },
];
