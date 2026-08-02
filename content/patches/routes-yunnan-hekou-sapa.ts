import type { Route } from '../types';

/**
 * 河口→沙巴：边贸短线 + 沙巴跨境短线 + compose。
 * 退役单体 yunnan-hekou-sapa-corridor。
 * Evidence: research/notes/multi-discovery/yunnan-hekou-sapa-20260802.md
 */
export const patchRoutes: Route[] = [
  // ── 河口边贸腿 ─────────────────────────────────────────────
  {
    id: 'leg-hekou-border',
    title: '河口 · 口岸边贸浅住',
    region: 'xinan',
    seasons: ['autumn', 'winter', 'spring'],
    tripType: 'short',
    compositionKind: 'leg',
    themes: ['corridor'],
    fromHome: false,
    daysLabel: '约3–4天（含昆明缓冲可选）',
    transport:
      '北京飞昆明→高铁/大巴至河口瑶族自治县。可单订作边境县城慢住；若接沙巴组合，通关日另见组合 glue。本腿止于中国境内侧。',
    budgetLabel: '本趟约2000–4500元（机票浮动大；含河口电梯酒店）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Hekou%2C_Yunnan%2C_China.jpg/1280px-Hekou%2C_Yunnan%2C_China.jpg',
    summary:
      '河口中国段短线，常作「河口→沙巴（Sa Pa，越南）」廊道第一段：口岸县城慢住、老码头浅逛。本腿不越境；接沙巴见跨境短线/中越组合，只走正式口岸。',
    whyFast: '昆明缓冲与老码头可删；只河口歇两晚也成立。',
    introduction:
      '河口是中越边境口岸县城，本短线写的是廊道中国段——常接越北高原小镇沙巴（Sa Pa，越南）。电梯酒店连住、老码头浅逛、先熟悉口岸动线；不越境、不提供非正式通道建议。\n\n若继续去沙巴：须护照与合法越南入境许可，见「沙巴·镇区慢住」短线，或串线卡「河口→沙巴 · 中越慢廊」。只走河口—老街正式口岸。',
    seasonGuide:
      '秋冬春相对适宜。暑期湿热；台风/强降雨预警期减少户外。',
    notices: [
      '本腿止于中国境内侧；不越境、不旁路。',
      '若计划出境沙巴：行前自查护照与越南入境政策（领事服务网+越方公告）。',
      '确认口岸开放时段；防滑防晒。',
    ],
    researchKeywords: [
      '河口口岸 父母',
      '河口 沙巴 Sapa',
      '昆明 河口 火车',
      '河口 老码头',
    ],
    sources: [
      {
        title: '云南红河州人民政府 / 口岸相关公开信息',
        url: 'https://www.hh.gov.cn/',
        kind: 'official',
        note: '河口口岸开放与交通公告以当地最新为准',
      },
      {
        title: 'Wikivoyage：Hekou',
        url: 'https://en.wikivoyage.org/wiki/Hekou',
        kind: 'other',
        note: '河口口岸城市概览，已改写',
      },
    ],
    stops: [
      {
        id: 'hks-kunming-buffer',
        name: '昆明缓冲（证件与行李）',
        days: 1,
        pace: 'slow',
        lat: 25.04,
        lng: 102.72,
        summary: '飞抵昆明歇一夜；核对证件打印件、保险与常用药，次日去河口。',
        tips: '可删若直达河口车次合适；高龄优先留缓冲。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Hekou%2C_Yunnan%2C_China.jpg/1280px-Hekou%2C_Yunnan%2C_China.jpg',
      },
      {
        id: 'hks-hekou-base',
        name: '河口慢住（中国段）',
        days: 2,
        pace: 'slow',
        lat: 22.53,
        lng: 103.95,
        summary: '口岸县城电梯酒店；红河沿岸浅逛，先适应再决定是否通关。',
        tips: '确认口岸当日开放时段；换钱与通信方案提前想好。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Hekou%2C_Yunnan%2C_China.jpg/1280px-Hekou%2C_Yunnan%2C_China.jpg',
      },
      {
        id: 'hks-hekou-wharf',
        name: '河口老码头浅逛',
        days: 1,
        pace: 'slow',
        lat: 22.52,
        lng: 103.96,
        summary: '平缓观景与休息；了解口岸动线，不靠近警戒区域。',
        tips: '可与慢住日合并；防滑防晒。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/2025-02-09_Old_Hekou_Wharf_%E6%B2%B3%E5%8F%A3%E8%80%81%E7%A2%BC%E9%A0%AD_03.jpg/1280px-2025-02-09_Old_Hekou_Wharf_%E6%B2%B3%E5%8F%A3%E8%80%81%E7%A2%BC%E9%A0%AD_03.jpg',
      },
    ],
  },

  // ── 沙巴跨境腿 ─────────────────────────────────────────────
  {
    id: 'leg-sapa-vietnam',
    title: '沙巴 · 镇区慢住（越南·跨境）',
    region: 'xinan',
    seasons: ['autumn', 'winter', 'spring'],
    tripType: 'short',
    compositionKind: 'leg',
    themes: ['corridor'],
    fromHome: false,
    daysLabel: '约5–7天（含通关与老街衔接）',
    transport:
      '须经河口—老街正式口岸通关后，正规客运/包车至沙巴（Sa Pa）。禁止非正式通道。可单订（自备口岸衔接），也可作中越组合越段。原路正式口岸返回。',
    budgetLabel:
      '本趟约4000–9000元（含国际段交通、签证/保险、沙巴电梯酒店；汇率与政策变动大）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Sa_Pa_Rice_Terrace_I.jpg/1280px-Sa_Pa_Rice_Terrace_I.jpg',
    summary:
      '跨境短线：沙巴（Sa Pa）在越南——须护照与合法签证/入境许可。镇区电梯酒店慢住，梯田观景为主；Fansipan 仅缆车量力可选。常接河口中国段；禁止非正式通道。',
    whyFast: 'Fansipan 与长距村寨徒步可删；最短：正式通关→沙巴慢住→原路返回。',
    introduction:
      '沙巴（Sa Pa）是越南北部高原小镇（约1500m 级，比河口凉），不是中国国内游。本短线从河口—老街正式通关写起：镇区电梯慢住看梯田云雾，Fansipan 仅正规缆车量力可选——气质是跨境高原小镇，不是越南全境特种兵。\n\n行前必须自行核实：中国公民护照有效期、越南签证/电子签/免签政策（中国领事服务网与越南主管机关最新公告）。只走正式口岸。语言、货币、通信与境外医疗保险与国内不同；重症计划经正式口岸撤回昆明三甲。可单订，或接「河口·口岸边贸」短线 / 「河口→沙巴」组合卡。',
    seasonGuide:
      '秋冬春相对适宜。沙巴海拔约1500m 级，备薄羽绒。雨季梯田路滑雾大；暑期湿热与山洪风险升高。',
    notices: [
      '跨境事实：沙巴在越南社会主义共和国境内，不是中国国内游。',
      '证件：有效护照 + 符合当期政策的越南入境许可；本页不替代领事意见。',
      '口岸：只走河口口岸↔老街口岸正式通道；禁止旁路/便道/「包过关」。',
      '适老：镇区与观景台为主；长距徒步与 Fansipan 徒步登顶默认可删。',
      '建议含境外医疗转运的旅行保险；备常用药与病历摘要。',
    ],
    researchKeywords: [
      '沙巴 Sapa 父母 慢游',
      '越南签证 中国公民',
      '河口口岸 老街 通关',
    ],
    sources: [
      {
        title: '中国领事服务网',
        url: 'https://cs.mfa.gov.cn/',
        kind: 'official',
        note: '出境提醒与领事保护；签证政策以官方为准',
      },
      {
        title: 'Wikivoyage：Sa Pa',
        url: 'https://en.wikivoyage.org/wiki/Sa_Pa',
        kind: 'other',
        note: '沙巴镇区与交通骨架，已改写为适老节奏',
      },
    ],
    stops: [
      {
        id: 'hks-border-crossing',
        name: '河口→老街正式通关',
        days: 1,
        pace: 'fast',
        lat: 22.505,
        lng: 103.96,
        summary:
          '携带护照与入境许可，经河口口岸完成中国出境与越南入境边检。',
        tips: '预留排队时间；证件复印件备份；不帮陌生人带行李。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/2025-02-09_Old_Hekou_Wharf_%E6%B2%B3%E5%8F%A3%E8%80%81%E7%A2%BC%E9%A0%AD_03.jpg/1280px-2025-02-09_Old_Hekou_Wharf_%E6%B2%B3%E5%8F%A3%E8%80%81%E7%A2%BC%E9%A0%AD_03.jpg',
      },
      {
        id: 'hks-laocai-buffer',
        name: '老街缓冲（越南）',
        days: 1,
        pace: 'fast',
        lat: 22.48,
        lng: 103.97,
        summary: '换钱、买票/包车去沙巴，不排满观光。',
        tips: '可与通关日合并；确认下一程白昼发车。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Sapa_Mountains_Lao_Cai_Vietnam_%2856123%29.jpg/1280px-Sapa_Mountains_Lao_Cai_Vietnam_%2856123%29.jpg',
      },
      {
        id: 'hks-sapa-slow',
        name: '沙巴镇区慢住（越南）',
        days: 4,
        pace: 'slow',
        lat: 22.34,
        lng: 103.84,
        summary:
          '镇区电梯/少台阶酒店连住；教堂广场与近处观景台平缓散步，梯田以观景为主。',
        tips:
          '海拔与温差明显，备外套。石板潮湿防滑。长距村寨徒步默认可删。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Sa_Pa_Rice_Terrace_I.jpg/1280px-Sa_Pa_Rice_Terrace_I.jpg',
      },
      {
        id: 'hks-fansipan-optional',
        name: '番西邦缆车（可选）',
        days: 1,
        pace: 'fast',
        lat: 22.3,
        lng: 103.78,
        summary:
          '正规缆车企业运营段；顶站海拔高、风大低温，血压/心肺不佳整段删，不徒步登顶。',
        tips: '恐高、关节不适勿强求；听景区限流与天气关闭通知。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Fansipan.jpg/1280px-Fansipan.jpg',
      },
      {
        id: 'hks-return-hekou',
        name: '原路正式口岸返回河口',
        days: 1,
        pace: 'fast',
        lat: 22.53,
        lng: 103.95,
        summary: '沙巴→老街→河口口岸完成越南出境与中国入境。',
        tips: '预留边检与误点缓冲；入境中国遵守海关申报。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Hekou%2C_Yunnan%2C_China.jpg/1280px-Hekou%2C_Yunnan%2C_China.jpg',
      },
    ],
  },

  // ── 中越 compose ───────────────────────────────────────────
  {
    id: 'compose-yunnan-hekou-sapa',
    title: '河口→沙巴 · 中越慢廊（跨境）',
    region: 'xinan',
    seasons: ['autumn', 'winter', 'spring'],
    tripType: 'long',
    compositionKind: 'compose',
    themes: ['corridor'],
    fromHome: false,
    daysLabel: '约8–12天（含昆明缓冲）',
    legIds: ['leg-hekou-border', 'leg-sapa-vietnam'],
    glue: [
      '河口慢住熟悉口岸后，择白昼经河口—老街正式口岸通关，再衔接老街→沙巴正规客运/包车。禁止非正式通道或「带路」越境。山路不赶夜路。',
    ],
    transport:
      '北京飞昆明→河口边贸短线→正式口岸通关→沙巴跨境短线→原路返回→昆明飞京。',
    budgetLabel:
      '对照约1.2–2.2万（含国际段交通、签证/保险、双人电梯酒店；汇率与政策变动大）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Sa_Pa_Rice_Terrace_I.jpg/1280px-Sa_Pa_Rice_Terrace_I.jpg',
    summary:
      '长线组合：嵌入河口（中国）边贸短线 + 沙巴（Sa Pa，越南）跨境短线。须护照与合法签证；只走正式口岸。景点正文见各短线。',
    whyFast:
      '可只订河口短线（不出境）；跨境段可删 Fansipan 与老街过夜。',
    introduction:
      '本卡串两条短线：① 河口（中国）口岸边贸浅住 → ② 正式口岸通关 glue → ③ 沙巴（Sa Pa，越南）镇区慢住。河口是边贸烟火与亚热带湿热；沙巴是越北约1500m 高原梯田云雾——跨境须护照与合法越南入境许可，只走河口—老街正式口岸。\n\n景点正文只在各短线；本卡管衔接与诚实证件提示。可只订河口段不出境。Fansipan 徒步默认可删。',
    researchKeywords: [
      '河口口岸 老街 通关',
      '沙巴 Sapa 父母 慢游',
      '河口 沙巴 中越',
      '越南签证 中国公民',
    ],
    sources: [
      {
        title: '中国领事服务网',
        url: 'https://cs.mfa.gov.cn/',
        kind: 'official',
        note: '细节见沙巴短线',
      },
      {
        title: '云南红河州人民政府 / 口岸相关公开信息',
        url: 'https://www.hh.gov.cn/',
        kind: 'official',
        note: '细节见河口短线',
      },
    ],
    stops: [
      {
        id: 'hks-compose-border-glue',
        name: '正式口岸衔接（组合）',
        days: 0.5,
        pace: 'fast',
        lat: 22.505,
        lng: 103.96,
        summary: '两腿之间只写通关诚实：护照+合法入境许可；只走正式口岸。',
        tips: '政策以窗口当日为准；不帮带行李。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/2025-02-09_Old_Hekou_Wharf_%E6%B2%B3%E5%8F%A3%E8%80%81%E7%A2%BC%E9%A0%AD_03.jpg/1280px-2025-02-09_Old_Hekou_Wharf_%E6%B2%B3%E5%8F%A3%E8%80%81%E7%A2%BC%E9%A0%AD_03.jpg',
      },
    ],
  },
];
