import type { Route } from '../types';

/**
 * 云南锚定跨境廊道：河口口岸 → 越南老街 → 沙巴（Sapa）。
 * 诚实跨境：护照/签证以官方为准；只走正式口岸；沙巴在越南境内。
 * Evidence: research/notes/multi-discovery/yunnan-hekou-sapa-20260802.md
 */
export const patchRoutes: Route[] = [
  {
    id: 'yunnan-hekou-sapa-corridor',
    title: '河口→沙巴 · 中越慢廊（跨境）',
    region: 'xinan',
    seasons: ['autumn', 'winter', 'spring'],
    tripType: 'long',
    fromHome: false,
    themes: ['corridor'],
    daysLabel: '约8–12天（含昆明缓冲）',
    transport:
      '北京飞昆明→高铁/大巴至河口瑶族自治县→经河口口岸正式通关至越南老街（Lào Cai）→公路至沙巴（Sa Pa）慢住→原路正式口岸返回河口→昆明飞京。禁止任何非正式通道或「带路」越境',
    budgetLabel:
      '对照约1.2–2.2万（含国际段交通、签证/保险、双人电梯酒店；汇率与政策变动大）',
    coverImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Sa_Pa_Rice_Terrace_I.jpg/1280px-Sa_Pa_Rice_Terrace_I.jpg',
    summary:
      '云南锚定的中越慢廊：河口歇住后，经正式口岸进入越南老街，再上沙巴梯田慢走。沙巴在越南境内——须护照与合法签证安排；不提供偷渡/抄近路建议。爸妈以公路观景与镇区平缓散步为主，Fansipan 仅缆车量力可选。',
    introduction:
      '本线是跨境主题廊，不是「云南县域一日游」。中国段止于河口口岸；通关后进入越南老街省，沙巴（Sa Pa）为越南北部高原小镇，梯田与镇区为适老主体。\n\n行前必须自行核实：中国公民护照有效期、越南签证/电子签/免签政策是否适用于你的证件与行程日期（以中国领事服务网与越南主管机关最新公告为准）。通关只走河口—老街正式口岸，听从边检指令，不携带违禁品，不听信「包过关」。\n\n语言、货币（越南盾）、通信与境外医疗保险与国内不同；身体不适优先评估是否能继续，重症计划经正式口岸撤回昆明三甲。不排夜间山路、徒步穿越边境、未登记民宿偏远村寨强行过夜。',
    seasonGuide:
      '秋冬春相对适宜。沙巴海拔约1500m 级，比河口凉，备薄羽绒/外套。雨季梯田路滑、雾大；暑期湿热与山洪风险升高。台风/强降雨预警期减少山路。',
    whyFast:
      'Fansipan 缆车与老街镇停留可删；最短成立路径是河口缓冲→正式通关→沙巴慢住→原路返回。',
    notices: [
      '跨境事实：沙巴在越南社会主义共和国境内，不是中国国内游；行程含出境与入境两段边检。',
      '证件：有效护照 + 符合当期政策的越南入境许可（签证/电子签/免签等）。具体天数、费用、材料以官方最新为准，行前复查，本页不替代领事意见。',
      '口岸：只走河口口岸↔老街口岸正式通道；禁止旁路、便道、河道或任何协助偷渡的提议。',
      '交通：昆明—河口以火车/大巴为主；老街—沙巴走正规客运/包车，山路弯多，择白昼、不赶夜路。',
      '适老边界：沙巴镇区与观景台为主；长距梯田徒步、摩托车后座长途、Fansipan 徒步登顶默认可删；缆车亦须评估血压与恐高。',
      '医疗与保险：建议含境外医疗转运的旅行保险；河口/红河州医院与昆明三甲为中方下撤点；越方急症沟通可能不便，备常用药与病历摘要。',
      '合规：尊重两国出入境、外汇与海关规定；不买卖不明边境商品；政策与口岸开放状态可能调整，出发前再查。',
    ],
    researchKeywords: [
      '河口口岸 老街 通关',
      '沙巴 Sapa 父母 慢游',
      '越南签证 中国公民',
      '昆明 河口 火车',
    ],
    sources: [
      {
        title: '中国领事服务网',
        url: 'https://cs.mfa.gov.cn/',
        kind: 'official',
        note: '出境提醒与领事保护；签证政策以官方为准',
      },
      {
        title: '云南红河州人民政府 / 口岸相关公开信息',
        url: 'https://www.hh.gov.cn/',
        kind: 'official',
        note: '河口口岸开放与交通公告以当地最新为准',
      },
      {
        title: 'Wikivoyage：Sa Pa',
        url: 'https://en.wikivoyage.org/wiki/Sa_Pa',
        kind: 'other',
        note: '沙巴镇区与交通骨架，已改写为适老节奏',
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
        summary: '飞抵昆明歇一夜；核对护照/签证打印件、保险与常用药，次日去河口。',
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
        summary: '口岸县城电梯酒店；红河沿岸与老码头浅逛，先适应再通关。',
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
        summary: '平缓观景与休息；了解口岸动线，不尝试靠近警戒区域。',
        tips: '可与慢住日合并；防滑防晒。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/2025-02-09_Old_Hekou_Wharf_%E6%B2%B3%E5%8F%A3%E8%80%81%E7%A2%BC%E9%A0%AD_03.jpg/1280px-2025-02-09_Old_Hekou_Wharf_%E6%B2%B3%E5%8F%A3%E8%80%81%E7%A2%BC%E9%A0%AD_03.jpg',
      },
      {
        id: 'hks-border-crossing',
        name: '河口→老街正式通关',
        days: 1,
        pace: 'fast',
        lat: 22.505,
        lng: 103.96,
        summary:
          '携带护照与入境许可，经河口口岸完成中国出境与越南入境边检；过关后至老街市区衔接去沙巴交通。',
        tips:
          '预留排队时间；证件复印件备份；不帮陌生人带行李。政策以窗口当日为准。',
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
        summary: '越南老街省城短暂衔接：换钱、买票/包车去沙巴，不排满观光。',
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
        summary: '沙巴→老街→河口口岸完成越南出境与中国入境；河口或昆明再飞京。',
        tips: '预留边检与误点缓冲；入境中国遵守海关申报。',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Hekou%2C_Yunnan%2C_China.jpg/1280px-Hekou%2C_Yunnan%2C_China.jpg',
      },
    ],
  },
];
