import type { Route, RouteSource } from '../types';
import type { RouteDetailFields } from '../route-details';

/**
 * Ctrip-referenced enrich for 华北+东北 (2026-08-02).
 * Rewrites practical tips (节奏/索道预约/清淡餐饮/体力/错峰); NOT wholesale copy.
 * Sources note: 改写参考，非官方.
 */

const ctrip = (title: string, url: string): RouteSource => ({
  title,
  url,
  kind: 'other',
  note: '改写参考，非官方',
});

export const detailPatches: Record<string, Partial<RouteDetailFields>> = {
  'chengde-2d': {
    practicalGuide: {
      routeGuide:
        '京承自驾或高铁承德南入城；住丽正门/山庄东路电梯酒店。山庄分两日：一日宫殿+湖区，一日环山车（旺季）—别硬爬山区。普宁寺另半天；普陀宗乘台阶多可只外观。磬锤峰索道可选可删。\n\n可跳过：普陀宗乘内部、磬锤峰、塞罕坝一日达。',
      timePlan: [
      'D1：抵达双桥歇脚',
      'D2：山庄宫殿+湖区（早入园）',
      'D3：环山车或湖区补漏',
      'D4：普宁寺上午+午休',
      'D5：磬锤峰量力或博物馆空白',
      'D6：返京，预留京承堵车',
      ],
      sightsTips:
        '· 山庄：京津户籍60+门票优惠常见，观光车/环山车另计；11–4月山区常关闭。\n· 外庙勿一天两座；台阶多随时歇。\n· 错峰工作日更舒服。',
      dining:
        '承德适老：清汤炖菜、小米粥、清炒时蔬、蒸蛋；少油炸「宫廷套餐」。酒店早餐吃好再出门。',
      longStay:
        '双桥区电梯酒店连住，少换店。四到六天比两天硬赶更稳。',
      hospitals: [
      { name: '承德医学院附属医院', level: '三甲', area: '承德市区', note: '请用高德核实' },
      { name: '承德市中心医院', level: '三甲', area: '承德市区', note: '请用高德核实' },
      ],
    },
  },

  'huabei-neimeng-summer': {
    practicalGuide: {
      routeGuide:
        '北京直飞海拉尔作基地；前两三日只城区适应，再包车陈巴尔虎一带看草浪。单日车程控制，骑马只短段系头盔；不想骑只坐车观景也够。额尔古纳/满洲里可选，勿天天换酒店。\n\n可跳过：深层林区颠簸路、满洲里硬刷购物。',
      timePlan: [
      'D1–3：海拉尔安顿+城区空白',
      'D4–6：草原包车日归（隔日歇）',
      '可选：额尔古纳过夜或满洲里国门预约',
      '段末海拉尔/满洲里飞回北京',
      ],
      sightsTips:
        '· 紫外线强+早晚凉：防晒帽+薄羽绒；驱蚊必备。\n· 国门须预约时段；草原防火公告出行前核。\n· 头痛呕吐立即回城歇，勿硬撑骑马。',
      dining:
        '清炖牛羊肉、奶茶浅尝、清汤面粥保底；少油炸烧烤烈酒。肠胃弱声明少盐。',
      longStay:
        '海拉尔近超市/医院电梯酒店连住；每周留2–3空白日。',
      hospitals: [
      { name: '内蒙古林业总医院', level: '三甲', area: '牙克石/呼伦贝尔', note: '请用高德核实' },
      { name: '呼伦贝尔市人民医院', level: '三甲', area: '海拉尔', note: '请用高德核实' },
      ],
    },
  },

  'dongbei-changbai-summer': {
    practicalGuide: {
      routeGuide:
        '飞长春或延吉→二道白河温泉酒店连住。北坡为主：环保大巴串联，天池倒站车减步；西坡1442级台阶默认删。提前7日公众号预约；天池天气关闭即改看瀑布/地下森林，勿空跑失望。\n\n可跳过：西坡、南坡边境硬线、与延吉同日特种兵。',
      timePlan: [
      'D1：入镇安顿，不进山',
      'D2：北坡早批（瀑布+倒站车看天池若开放）',
      'D3：地下森林/温泉休整',
      'D4：空白或浅段',
      '飞长春/延吉回京',
      ],
      sightsTips:
        '· 65+门票优惠常见，环保大巴与倒站车仍须购。\n· 山顶镇里温差大备薄羽绒；13:30前后常停检。\n· 心肺不适勿强求天池。',
      dining:
        '温泉酒店清淡餐、东北炖菜分餐少油；少冷饮。自带肠胃药。',
      longStay:
        '二道白河电梯/温泉酒店四五天；复杂就医下撤延吉/长春。',
      hospitals: [
      { name: '延边大学附属医院', level: '三甲', area: '延吉', note: '请用高德核实' },
      { name: '吉林大学第一医院', level: '三甲', area: '长春', note: '下撤；请用高德核实' },
      ],
    },
  },

  'dongbei-harbin-snow-3d': {
    practicalGuide: {
      routeGuide:
        '飞哈尔滨；冰雪大世界夜景分段看、多进暖房取暖。65+须官方预约免费观光份额。另留半天中央大街+索菲亚：石板防滑，累了进店。松花江风大勿擅自上冰。\n\n可跳过：极寒日硬逛全园、江面娱乐。',
      timePlan: [
      'D1：抵达+中央大街浅走取暖',
      'D2：冰雪大世界夜场分段',
      'D3：索菲亚/空白→飞回北京',
      ],
      sightsTips:
        '· 防滑保暖鞋+暖宝宝；地面湿滑慢走。\n· 约-25℃以下再缩短户外。\n· 马迭尔冰棍可尝别贪凉。',
      dining:
        '清炖菜、热汤面、俄式简餐浅尝；少生冷油炸。室内多温水。',
      longStay:
        '道里近中央大街电梯酒店；极寒可改室内馆。',
      hospitals: [
      { name: '哈尔滨医科大学附属第一医院', level: '三甲', area: '哈尔滨', note: '请用高德核实' },
      { name: '哈尔滨医科大学附属第二医院', level: '三甲', area: '哈尔滨', note: '请用高德核实' },
      ],
    },
  },

  'dongbei-dalian-summer': {
    practicalGuide: {
      routeGuide:
        '直飞大连；中山/沙河口电梯酒店连住。星海广场早晚走；滨海路包车分段停，别一天走完。老虎滩栈道走一段即返，极地馆可选空调室内；旅顺炮台阶多默认可外观或删。\n\n可跳过：旅顺硬爬、游乐项目刷完。',
      timePlan: [
      'D1：抵达安顿',
      'D2：星海广场+岸线浅段',
      'D3：老虎滩量力（或只海边）',
      'D4：旅顺可选或空白',
      'D5–7：空白/岸线补漏→飞回',
      ],
      sightsTips:
        '· 海雾/风大备薄外套；台风预警减海边。\n· 海鲜码头控盐，少生冷。\n· 与长白山分次出门。',
      dining:
        '清蒸海鲜、海鲜粥、蛤蜊豆腐汤；辣炒浅尝。少刺身生冷。',
      longStay:
        '近海电梯酒店7–10天；少换店。',
      hospitals: [
      { name: '大连医科大学附属第一医院', level: '三甲', area: '大连', note: '请用高德核实' },
      { name: '大连市中心医院', level: '三甲', area: '大连', note: '请用高德核实' },
      ],
    },
  },

  'dongbei-heilongjiang-harbin-summer': {
    practicalGuide: {
      routeGuide:
        '飞/高铁入哈；住道里近中央大街。夏日主线是方石街+索菲亚外观+松花江岸平走，不是冰雪大世界。石板雨天防滑；大街分段走，累了进店。太阳岛量力可删。\n\n可跳过：太阳岛、江上船硬排、与漠河同短假。',
      timePlan: [
      'D1：抵达歇脚',
      'D2：中央大街上午浅走+索菲亚',
      'D3：江岸或空白',
      'D4：可选太阳岛或返程',
      ],
      sightsTips:
        '· 中央大街北端近防洪纪念塔，可折返勿走穿。\n· 江风备薄外套；雷阵雨改室内。\n· 马迭尔冰棍浅尝即可。',
      dining:
        '红肠浅尝、锅包肉少油、酸菜炖菜分餐、清汤面粥保底。',
      longStay:
        '道里电梯酒店；可作五大莲池进出缓冲。',
      hospitals: [
      { name: '哈尔滨医科大学附属第一医院', level: '三甲', area: '哈尔滨', note: '请用高德核实' },
      { name: '哈尔滨医科大学附属第二医院', level: '三甲', area: '哈尔滨', note: '请用高德核实' },
      ],
    },
  },

  'dongbei-heilongjiang-wudalianchi': {
    practicalGuide: {
      routeGuide:
        '哈尔滨缓冲后包车/火车入池；住景区口电梯酒店。火山口观景台浅走，矿泉区散步为主，不硬爬熔岩台地。单日一个主点，午后歇。\n\n可跳过：长距离熔岩徒步、与漠河连赶。',
      timePlan: [
      'D1：入池安顿',
      'D2：一处火山观景台',
      'D3：矿泉/空白',
      '返哈尔滨或飞回',
      ],
      sightsTips:
        '· 紫外线与温差备帽外套。\n· 台阶多随时停；头晕回酒店。\n· 票务以景区当日为准。',
      dining:
        '清淡炖菜、清汤面；矿泉饮品浅尝，肠胃弱少冰。',
      longStay:
        '景区口或池镇电梯酒店两三晚。',
      hospitals: [
      { name: '哈尔滨医科大学附属第一医院', level: '三甲', area: '哈尔滨', note: '请用高德核实' },
      { name: '哈尔滨医科大学附属第二医院', level: '三甲', area: '哈尔滨', note: '请用高德核实' },
      ],
    },
  },

  'dongbei-jilin-changchun': {
    practicalGuide: {
      routeGuide:
        '高铁/飞机入长；朝阳区电梯酒店。伪满皇宫室内半日足够；南湖公园平路补绿。文化广场可删。作长白进出缓冲时抵达日只安顿。\n\n可跳过：多馆连刷、净月潭硬徒步。',
      timePlan: [
      'D1：抵达',
      'D2：伪满皇宫',
      'D3：南湖或空白',
      '转长白或返京',
      ],
      sightsTips:
        '· 伪满预约/闭馆日行前核。\n· 南湖风大备外套。\n· 与延吉/长白分日衔接。',
      dining:
        '东北炖菜分餐少油、清汤面粥；少油炸连吃。',
      longStay:
        '朝阳近地铁电梯酒店。',
      hospitals: [
      { name: '吉林大学第一医院', level: '三甲', area: '长春', note: '请用高德核实' },
      { name: '吉林省人民医院', level: '三甲', area: '长春', note: '请用高德核实' },
      ],
    },
  },

  'dongbei-jilin-yanbian': {
    practicalGuide: {
      routeGuide:
        '高铁/飞机入延吉；市区电梯酒店。看朝鲜族市井与河岸平走；帽儿山量力。冷面少冰。作长白缓冲时先歇再进山，勿抵达日赶天池。\n\n可跳过：边境硬线、与长春同日特种兵。',
      timePlan: [
      'D1：抵达歇脚',
      'D2：市区市井+简餐',
      'D3：河岸或浅山',
      '接长白或返程',
      ],
      sightsTips:
        '· 冷面声明少冰少辣。\n· 出入境相关区域遵守警示。\n· 长白另日另票。',
      dining:
        '冷面少冰、米肠浅尝、清汤面粥保底；少生冷过辣。',
      longStay:
        '延吉市区电梯酒店。',
      hospitals: [
      { name: '延边大学附属医院', level: '三甲', area: '延吉', note: '请用高德核实' },
      { name: '吉林大学第一医院', level: '三甲', area: '长春', note: '下撤；请用高德核实' },
      ],
    },
  },

  'dongbei-liaoning-shenyang': {
    practicalGuide: {
      routeGuide:
        '高铁/飞机入沈；和平/沈河电梯酒店。沈阳故宫东中西路择一至两路慢看（约半日），勿三小时特种兵刷完；北陵公园平路+可选电瓶车另日。中街浅逛即可。\n\n可跳过：张氏帅府硬排、与丹东同日。',
      timePlan: [
      'D1：抵达',
      'D2：故宫半日',
      'D3：北陵',
      '缓冲或返京',
      ],
      sightsTips:
        '· 故宫门槛台阶慢走；预约以当日为准。\n· 北陵电瓶车减步。\n· 冬严寒改室内缩短户外。',
      dining:
        '锅包肉浅尝、鸡架适量、清汤面粥；少油炸连吃。',
      longStay:
        '近地铁电梯酒店；可作丹东/大连缓冲。',
      hospitals: [
      { name: '中国医科大学附属第一医院', level: '三甲', area: '沈阳', note: '请用高德核实' },
      { name: '辽宁省人民医院', level: '三甲', area: '沈阳', note: '请用高德核实' },
      ],
    },
  },

  'frontier-dandong': {
    practicalGuide: {
      routeGuide:
        '沈阳高铁入丹；住近鸭绿江公园电梯酒店。断桥外观+滨江平走为主；虎山长城台阶多默认可删或短段。不安排跨境。\n\n可跳过：虎山硬爬、一日多点。',
      timePlan: [
      'D1：抵达+江边浅走',
      'D2：断桥/公园',
      'D3：虎山量力或返沈',
      ],
      sightsTips:
        '· 边境拍照遵守警示。\n· 江风备外套。\n· 复杂就医回撤沈阳。',
      dining:
        '清淡海鲜粥、炖菜少油；少生冷。',
      longStay:
        '近江电梯酒店两三晚。',
      hospitals: [
      { name: '中国医科大学附属第一医院', level: '三甲', area: '沈阳', note: '请用高德核实' },
      { name: '辽宁省人民医院', level: '三甲', area: '沈阳', note: '请用高德核实' },
      ],
    },
  },

  'frontier-mohe': {
    practicalGuide: {
      routeGuide:
        '暑期浅住为主；飞漠河或经哈尔滨中转。北极村平路浅走，不硬赶午夜阳光时点。早晚凉备羽绒；单日车程控制。\n\n可跳过：深林颠簸点、与五大连池同短假硬并。',
      timePlan: [
      'D1：抵达歇脚',
      'D2：北极村浅走',
      'D3：空白或返程',
      ],
      sightsTips:
        '· 夏季仍可能低温；防蚊。\n· 体力紧只村口外观。\n· 医疗服务有限，备常用药。',
      dining:
        '清汤面、炖菜少油；少生冷。',
      longStay:
        '漠河或北极村电梯/一楼住宿。',
      hospitals: [
      { name: '漠河市人民医院', level: '综合', area: '漠河', note: '就近；复杂下撤哈尔滨' },
      { name: '哈尔滨医科大学附属第一医院', level: '三甲', area: '哈尔滨', note: '下撤；请用高德核实' },
      ],
    },
  },

  'frontier-erlian': {
    practicalGuide: {
      routeGuide:
        '呼市或集宁方向入二连；国门外观预约核实。城区短住，不跨境。风沙大备口罩墨镜。\n\n可跳过：长时间国门排队暴晒。',
      timePlan: [
      'D1：抵达',
      'D2：国门浅访',
      '返呼市或回京',
      ],
      sightsTips:
        '· 国门规则以当日边检/景区为准。\n· 紫外线强午休。\n· 医疗资源有限，备常用药。',
      dining:
        '清汤面、牛羊肉清炖浅尝；少油炸。',
      longStay:
        '城区电梯酒店一两晚。',
      hospitals: [
      { name: '内蒙古医科大学附属医院', level: '三甲', area: '呼和浩特', note: '请用高德核实' },
      { name: '内蒙古自治区人民医院', level: '三甲', area: '呼和浩特', note: '请用高德核实' },
      ],
    },
  },

  'frontier-manzhouli': {
    practicalGuide: {
      routeGuide:
        '海拉尔包车或火车入满；国门须预约。俄式街区平地快览，勿排满购物。与呼伦贝尔草原线衔接时单列一日。\n\n可跳过：套娃广场久站、硬刷免税店。',
      timePlan: [
      'D1：入满+歇脚',
      'D2：国门预约时段+街区浅走',
      '返海拉尔或飞回',
      ],
      sightsTips:
        '· 预约时段严格；证件带齐。\n· 风大防晒。\n· 购物理性，不跟低价团。',
      dining:
        '清淡简餐、奶茶浅尝；少油炸。',
      longStay:
        '近广场电梯酒店。',
      hospitals: [
      { name: '内蒙古林业总医院', level: '三甲', area: '牙克石/呼伦贝尔', note: '请用高德核实' },
      { name: '呼伦贝尔市人民医院', level: '三甲', area: '海拉尔', note: '请用高德核实' },
      ],
    },
  },

  'huabei-beijing-city-slow': {
    practicalGuide: {
      routeGuide:
        '家门口慢线：颐和园东宫门/北宫门择一，优先坐船或东堤平路，佛香阁台阶量大可只远眺。故宫/天坛另日另线，勿一日两园。地铁+公交，少自驾寻位。\n\n可跳过：佛香阁登高、昆明湖环湖硬走完。',
      timePlan: [
      '上午：入园平区/坐船',
      '午休：园内长廊或出园简餐',
      '下午：短段补漏或直接回家',
      ],
      sightsTips:
        '· 工作日错峰；暑热早晚入园。\n· 60+票务以公园当日规则为准。\n· 防滑鞋，石板湿滑慢走。',
      dining:
        '园外清淡面食/炒青菜；少油腻烤串。自带温水。',
      longStay:
        '当天往返；累了可海淀电梯酒店歇一晚。',
      hospitals: [
      { name: '北京协和医院', level: '三甲', area: '东单', note: '请用高德核实' },
      { name: '北京医院', level: '三甲', area: '东单', note: '请用高德核实' },
      ],
    },
  },

  'huabei-hebei-baoding': {
    practicalGuide: {
      routeGuide:
        '高铁保定；直隶总督署室内半日，清西陵另日包车浅访（台阶/石道量力）。勿一日署+陵特种兵。\n\n可跳过：清西陵多陵硬走、满城硬线。',
      timePlan: [
      'D1：抵达+总督署',
      'D2：清西陵量力或市区空白',
      '返京',
      ],
      sightsTips:
        '· 陵区石道防滑；人少错峰。\n· 暑热午休强制。\n· 复杂就医看保定或回京。',
      dining:
        '面食清汤、炒青菜；少油炸。',
      longStay:
        '近高铁电梯酒店。',
      hospitals: [
      { name: '保定市第一中心医院', level: '三甲', area: '保定', note: '请用高德核实' },
      { name: '北京大学人民医院', level: '三甲', area: '北京', note: '回京下撤' },
      ],
    },
  },

  'huabei-hebei-beidaihe': {
    practicalGuide: {
      routeGuide:
        '高铁/自驾入秦；北戴河近海电梯酒店连住。老虎石/鸽子窝/联峰山三选一二，分日早晚走；山海关老龙头另日。南戴河/昌黎滑沙游乐默认可删。台风天改室内或回京。\n\n可跳过：南戴河、昌黎游乐、一日多浴场。',
      timePlan: [
      'D1–3：北戴河岸线+空白',
      'D4：鸽子窝或联峰山',
      'D5：山海关+老龙头',
      'D6：可选昌黎日归或返京',
      ],
      sightsTips:
        '· 浴场坡缓适合浅走；礁石区防滑。\n· 老龙头海风大台阶量力。\n· 暑期提前订房。',
      dining:
        '清蒸黄花鱼/加吉鱼、蛤蜊豆腐汤、海鲜粥；辣炒浅尝。少生冷刺身，控盐。',
      longStay:
        '北戴河近海电梯酒店；就医可转秦皇岛市区。',
      hospitals: [
      { name: '秦皇岛市第一医院', level: '三甲', area: '海港区', note: '请用高德核实' },
      { name: '北戴河医院', level: '综合医院', area: '北戴河', note: '就近；请用高德核实' },
      ],
    },
  },

  'huabei-hebei-handan': {
    practicalGuide: {
      routeGuide:
        '高铁邯郸；丛台公园平路浅走，古城肌理外观为主。不作长线枢纽硬排。\n\n可跳过：多馆连刷、太行深沟。',
      timePlan: [
      'D1：抵达',
      'D2：丛台/市区',
      '返程',
      ],
      sightsTips:
        '· 暑热早晚出门。\n· 石阶量力。\n· 复杂就医看邯郸或回石家庄。',
      dining:
        '面食清汤、炒青菜；少油辣。',
      longStay:
        '近站电梯酒店一两晚。',
      hospitals: [
      { name: '邯郸市中心医院', level: '三甲', area: '邯郸', note: '请用高德核实' },
      { name: '河北医科大学第二医院', level: '三甲', area: '石家庄', note: '下撤' },
      ],
    },
  },

  'huabei-hebei-shijiazhuang': {
    practicalGuide: {
      routeGuide:
        '高铁石家庄；正定古城另半日到一日，城墙选段可删。省会作进出缓冲时抵达日空白。\n\n可跳过：正定多寺硬刷、抱犊寨索道恐高可删。',
      timePlan: [
      'D1：抵达',
      'D2：正定浅走',
      'D3：空白或返京',
      ],
      sightsTips:
        '· 正定石板防滑；错峰早到。\n· 与西柏坡分次。\n· 就医方便，作河北枢纽。',
      dining:
        '面食清汤、炖菜少油；少炸串。',
      longStay:
        '近高铁/地铁电梯酒店。',
      hospitals: [
      { name: '河北医科大学第二医院', level: '三甲', area: '石家庄', note: '请用高德核实' },
      { name: '河北省人民医院', level: '三甲', area: '石家庄', note: '请用高德核实' },
      ],
    },
  },

  'huabei-hebei-tangshan': {
    practicalGuide: {
      routeGuide:
        '高铁唐山；南湖公园平路，清东陵另日包车（石道台阶量力，可只一处）。勿南湖+东陵同日。\n\n可跳过：东陵多陵、工业遗迹硬线。',
      timePlan: [
      'D1：抵达+南湖',
      'D2：清东陵量力或空白',
      '返京',
      ],
      sightsTips:
        '· 陵区防滑鞋；暑热缩短。\n· 南湖风大备外套。',
      dining:
        '清淡炖菜、面食；少油炸。',
      longStay:
        '近南湖或高铁电梯酒店。',
      hospitals: [
      { name: '唐山市工人医院', level: '三甲', area: '唐山', note: '请用高德核实' },
      { name: '北京大学人民医院', level: '三甲', area: '北京', note: '回京下撤' },
      ],
    },
  },

  'huabei-hebei-zhangjiakou': {
    practicalGuide: {
      routeGuide:
        '高铁张家口；大境门外观+短段长城即可，仿古街浅逛，勿硬爬烽火台全程。坝上另季另线，本卡不作一日达。风大备外套。\n\n可跳过：坝上、长城长段。',
      timePlan: [
      'D1：抵达',
      'D2：大境门浅访',
      'D3：市区空白或返京',
      ],
      sightsTips:
        '· 门楣「大好河山」外观足够。\n· 冬干冷缩短户外。\n· 与大同/草原线分次。',
      dining:
        '面食清汤、莜面浅尝；少油炸。',
      longStay:
        '近站电梯酒店。',
      hospitals: [
      { name: '张家口市第一医院', level: '三甲', area: '张家口', note: '请用高德核实' },
      { name: '河北北方学院附属第一医院', level: '三甲', area: '张家口', note: '请用高德核实' },
      ],
    },
  },

  'huabei-neimeng-aershan': {
    practicalGuide: {
      routeGuide:
        '呼市或乌兰浩特进出；林间温泉酒店连住。森林公园观光车/观景台为主，不硬徒步峡谷。温泉后勿暴起暴走。\n\n可跳过：长线徒步、与呼伦贝尔同日贯通。',
      timePlan: [
      'D1：入镇安顿',
      'D2：森林公园观景台',
      'D3：温泉休整',
      '接呼伦贝尔或返呼市',
      ],
      sightsTips:
        '· 早晚凉备薄羽绒。\n· 林区防滑；雨天缩短。\n· 医疗有限，备常用药。',
      dining:
        '清淡炖菜、清汤面；少冷饮。',
      longStay:
        '温泉电梯酒店三四晚。',
      hospitals: [
      { name: '内蒙古医科大学附属医院', level: '三甲', area: '呼和浩特', note: '请用高德核实' },
      { name: '内蒙古自治区人民医院', level: '三甲', area: '呼和浩特', note: '请用高德核实' },
      ],
    },
  },

  'huabei-neimeng-hohhot': {
    practicalGuide: {
      routeGuide:
        '飞/高铁入呼；玉泉/回民区电梯酒店。大召+塞上老街半日，昭君博物院量力另日。作草原线门户，抵达先歇。\n\n可跳过：一日多召、与阿尔山同日。',
      timePlan: [
      'D1：抵达',
      'D2：大召+老街',
      'D3：昭君或空白',
      '接阿尔山/草原',
      ],
      sightsTips:
        '· 寺庙着装得体；石板防滑。\n· 紫外线防晒。\n· 羊肉声明少油少膻。',
      dining:
        '羊肉烧麦浅尝、清汤面、奶茶少糖；少油炸烧烤。',
      longStay:
        '近地铁电梯酒店。',
      hospitals: [
      { name: '内蒙古医科大学附属医院', level: '三甲', area: '呼和浩特', note: '请用高德核实' },
      { name: '内蒙古自治区人民医院', level: '三甲', area: '呼和浩特', note: '请用高德核实' },
      ],
    },
  },

  'huabei-neimeng-hulunbuir': {
    practicalGuide: {
      routeGuide:
        '飞海拉尔；节奏同草原慢住卡但天数可压到一周。每天最多一处草原点，下午回城。满洲里可选另日。\n\n可跳过：满洲里、深层林区。',
      timePlan: [
      'D1–2：海拉尔适应',
      'D3–5：草原包车隔日歇',
      '可选满洲里',
      '飞回',
      ],
      sightsTips:
        '· 防晒驱蚊；骑马短段。\n· 单日车程勿过长。\n· 长居见 longstay-hulunbuir。',
      dining:
        '清炖牛羊肉、奶食浅尝、清汤面保底。',
      longStay:
        '海拉尔电梯酒店连住。',
      hospitals: [
      { name: '内蒙古林业总医院', level: '三甲', area: '牙克石/呼伦贝尔', note: '请用高德核实' },
      { name: '呼伦贝尔市人民医院', level: '三甲', area: '海拉尔', note: '请用高德核实' },
      ],
    },
  },

  'huabei-shandong-jinan': {
    practicalGuide: {
      routeGuide:
        '高铁济南西/东；历下近泉城广场电梯酒店。趵突泉与大明湖分日：泉区石板防滑早到错峰；大明湖可环湖车减步。千佛山台阶多默认删。勿与泰山同日。\n\n可跳过：千佛山、黑虎泉硬走完。',
      timePlan: [
      'D1：抵达+趵突泉半日',
      'D2：大明湖',
      'D3：空白或转泰安/青岛',
      ],
      sightsTips:
        '· 60+票务以公园当日为准。\n· 暑热强制午休。\n· 甜沫肠胃弱可改清汤。',
      dining:
        '鲁菜少油、甜沫浅尝、把子肉适量、清汤面青菜保底；少油炸冷饮。',
      longStay:
        '泉城广场附近电梯酒店。',
      hospitals: [
      { name: '山东大学齐鲁医院', level: '三甲', area: '济南', note: '请用高德核实' },
      { name: '山东省立医院', level: '三甲', area: '济南', note: '请用高德核实' },
      ],
    },
  },

  'huabei-shandong-taishan': {
    practicalGuide: {
      routeGuide:
        '济南缓冲后高铁泰安。父母线优先天外村：景交车→中天门→索道→南天门，不走红门长距徒步。玉皇顶台阶量力，达南天门/天街即可返。曲阜三孔另日，孔庙平地为主。门票预约公众号；索道末班核当日。\n\n可跳过：十八盘徒步、夜爬、曲阜当日连赶。',
      timePlan: [
      'D1：泰安安顿',
      'D2：天外村+索道上山浅段（早）',
      'D3：曲阜半日或空白',
      '返济南/北京',
      ],
      sightsTips:
        '· 60+门票常免，景交/索道多为半价或另计，窗口核证件。\n· 大风雷电索道可能停运。\n· 下山预留索道排队，勿卡末班。',
      dining:
        '泰安煎饼配清粥青菜；少油炸登山餐。曲阜孔府菜浅尝控油。',
      longStay:
        '泰安市区近天外村方向电梯酒店。',
      hospitals: [
      { name: '泰安市中心医院', level: '三甲', area: '泰安', note: '请用高德核实' },
      { name: '山东大学齐鲁医院', level: '三甲', area: '济南', note: '下撤；请用高德核实' },
      ],
    },
  },

  'huabei-shandong-weifang': {
    practicalGuide: {
      routeGuide:
        '高铁潍坊；十笏园半日，风筝博物馆量力。作胶东进出浅停，勿排满。\n\n可跳过：多园连刷。',
      timePlan: [
      'D1：抵达+十笏园',
      'D2：空白或续青岛/烟台',
      ],
      sightsTips:
        '· 园林石径防滑。\n· 暑热缩短户外。',
      dining:
        '面食清汤、炒青菜；少油炸。',
      longStay:
        '近站电梯酒店。',
      hospitals: [
      { name: '青岛大学附属医院', level: '三甲', area: '青岛', note: '请用高德核实' },
      { name: '青岛市市立医院', level: '三甲', area: '青岛', note: '请用高德核实' },
      ],
    },
  },

  'huabei-shandong-yantai': {
    practicalGuide: {
      routeGuide:
        '高铁/飞机入烟；芝罘近海电梯酒店。滨海路早晚走；蓬莱阁另日，索道/台阶量力，体力紧可只蓬莱水城外观。勿与青岛崂山同日。\n\n可跳过：蓬莱硬爬、养马岛游乐。',
      timePlan: [
      'D1–2：芝罘岸线+空白',
      'D3：蓬莱量力',
      'D4：空白或接威海',
      ],
      sightsTips:
        '· 海风备外套防晒。\n· 蓬莱人挤即撤。\n· 长居见威海卡。',
      dining:
        '清蒸黄花鱼、面条粥、海鲜粥；烤鱿鱼浅尝。少生冷。',
      longStay:
        '芝罘近海电梯酒店。',
      hospitals: [
      { name: '烟台毓璜顶医院', level: '三甲', area: '烟台', note: '请用高德核实' },
      { name: '烟台山医院', level: '三甲', area: '烟台', note: '请用高德核实' },
      ],
    },
  },

  'huabei-shanxi-linfen': {
    practicalGuide: {
      routeGuide:
        '高铁临汾；广胜寺量力（台阶），尧庙浅访。作运城/吉县壶口另线缓冲，本卡不硬并壶口。\n\n可跳过：壶口同日、广胜寺登高。',
      timePlan: [
      'D1：抵达',
      'D2：一寺或尧庙',
      '返程',
      ],
      sightsTips:
        '· 寺内石阶慢走。\n· 与壶口分次。',
      dining:
        '面食清汤、炒青菜；少油辣。',
      longStay:
        '近站电梯酒店。',
      hospitals: [
      { name: '山西医科大学第一医院', level: '三甲', area: '太原', note: '请用高德核实' },
      { name: '山西省人民医院', level: '三甲', area: '太原', note: '请用高德核实' },
      ],
    },
  },

  'huabei-shanxi-pingyao-deep': {
    practicalGuide: {
      routeGuide:
        '太原高铁枢纽歇一夜再入平遥。古城免票可逛街；通票按体力选日升昌+县衙等1–2处，勿刷22景。城墙选段可删。石板防滑；观光车减步。乔家/太谷另日一处可删。住近城门有电梯或一楼客栈。\n\n可跳过：城墙全程、乔家、又见平遥夜场若过晚。',
      timePlan: [
      'D1–2：太原缓冲',
      'D3：入平遥安顿+夜街浅走',
      'D4–5：票号/县衙择一+空白',
      'D6：城墙量力或返太原',
      ],
      sightsTips:
        '· 60+通票景点常免，以当日规则核证件。\n· 进古城免费；通票非必须。\n· 拒绝黑导游/低价拉客车。',
      dining:
        '面食清汤、莜面配清酱、小米粥青菜；平遥牛肉浅尝。声明少油少辣。',
      longStay:
        '平遥近城门电梯/一楼客栈；太原迎泽电梯酒店进出。',
      hospitals: [
      { name: '晋中市人民医院', level: '三甲', area: '榆次', note: '请用高德核实' },
      { name: '山西医科大学第一医院', level: '三甲', area: '太原', note: '下撤；请用高德核实' },
      ],
    },
  },

  'huabei-shanxi-taiyuan': {
    practicalGuide: {
      routeGuide:
        '高铁太原南；迎泽电梯酒店。晋祠与省博分日：晋祠石径防滑选段，省博空调日。汾河岸可选。作平遥/五台门户，勿抵达日连赶晋祠再夜抵平遥。\n\n可跳过：天龙山硬爬、汾河夜跑。',
      timePlan: [
      'D1：抵达歇脚',
      'D2：晋祠',
      'D3：省博',
      '转平遥或返京',
      ],
      sightsTips:
        '· 省博预约/周一闭馆常见。\n· 晋祠殿阁台阶量力。\n· 雾霾天改室内。',
      dining:
        '刀削面清汤、莜面适量、青菜豆腐、小米粥；少过油肉。',
      longStay:
        '迎泽/小店近地铁电梯酒店。',
      hospitals: [
      { name: '山西医科大学第一医院', level: '三甲', area: '太原', note: '请用高德核实' },
      { name: '山西省人民医院', level: '三甲', area: '太原', note: '请用高德核实' },
      ],
    },
  },

  'huabei-shanxi-wutai': {
    practicalGuide: {
      routeGuide:
        '太原或忻州进出；台怀镇电梯/低层酒店。只走台怀核心：塔院寺大白塔、显通寺、殊像寺等平缓寺庙，黛螺顶1080阶默认删；大朝台包车五台顶默认删。进山票公众号预约；早晚凉备羽绒。\n\n可跳过：黛螺顶、大朝台、梵仙山硬爬。',
      timePlan: [
      'D1：入台怀歇脚',
      'D2：塔院+显通+五爷庙浅拜（错峰早）',
      'D3：殊像或其他一寺+空白',
      '返忻州/太原',
      ],
      sightsTips:
        '· 海拔较高温差大；6–8月外常需厚外套。\n· 寺庙顺时针缓行，不硬攀。\n· 素斋清淡，少油。',
      dining:
        '台怀素斋/清汤面为主；少油腻荤腥。杨柏峪一带选择多。',
      longStay:
        '台怀镇中心区住宿，减少车程。',
      hospitals: [
      { name: '忻州市人民医院', level: '三甲', area: '忻州', note: '请用高德核实' },
      { name: '山西医科大学第一医院', level: '三甲', area: '太原', note: '下撤；请用高德核实' },
      ],
    },
  },

  'huabei-shanxi-xinzhou-county': {
    practicalGuide: {
      routeGuide:
        '忻州枢纽；雁门关/代县选一处浅访，关城台阶量力。不作五台替代日。\n\n可跳过：雁门长距徒步、与五台同日。',
      timePlan: [
      'D1：抵达忻州',
      'D2：雁门或代县浅段',
      '返或接五台另日',
      ],
      sightsTips:
        '· 关城风大防滑。\n· 与五台分次预约。',
      dining:
        '面食清汤；少油炸。',
      longStay:
        '忻州电梯酒店。',
      hospitals: [
      { name: '忻州市人民医院', level: '三甲', area: '忻州', note: '请用高德核实' },
      { name: '山西医科大学第一医院', level: '三甲', area: '太原', note: '下撤；请用高德核实' },
      ],
    },
  },

  'huabei-shanxi-yuncheng': {
    practicalGuide: {
      routeGuide:
        '高铁运城；盐湖观景平台浅走（防晒），关帝庙另日。暑热缩短户外。\n\n可跳过：盐湖项目游乐、与临汾同日。',
      timePlan: [
      'D1：抵达',
      'D2：盐湖或关帝庙',
      '返程',
      ],
      sightsTips:
        '· 盐湖反光强墨镜+帽。\n· 关帝庙石板防滑。',
      dining:
        '面食清汤、炒青菜；少油辣。',
      longStay:
        '近站电梯酒店。',
      hospitals: [
      { name: '山西医科大学第一医院', level: '三甲', area: '太原', note: '请用高德核实' },
      { name: '山西省人民医院', level: '三甲', area: '太原', note: '请用高德核实' },
      ],
    },
  },

  'leg-qingdao-coast': {
    practicalGuide: {
      routeGuide:
        '高铁青岛；市南近海/火车站一带电梯酒店（核实电梯）。栈桥清晨人少平走，回澜阁台阶可只桥面观景；八大关另日早晚。勿与崂山同日。地铁60+优惠以当日规则核。\n\n可跳过：回澜阁登阁、啤酒博物馆若久站累。',
      timePlan: [
      'D1：抵达安顿',
      'D2：栈桥清晨+岸线',
      'D3：八大关',
      'D4：空白或接崂山另卡',
      ],
      sightsTips:
        '· 栈桥免费；海风备外套。\n· 石板/岸滩防滑。\n· 台风预警减海边。',
      dining:
        '清蒸加吉鱼、蛤蜊豆腐汤、海鲜粥；辣炒蛤蜊浅尝。少生冷刺身，控盐。',
      longStay:
        '市南近海电梯酒店连住。',
      hospitals: [
      { name: '青岛大学附属医院', level: '三甲', area: '青岛', note: '请用高德核实' },
      { name: '青岛市市立医院', level: '三甲', area: '青岛', note: '请用高德核实' },
      ],
    },
  },

  'leg-qingdao-laoshan': {
    practicalGuide: {
      routeGuide:
        '市南缓冲后再崂山。仰口或太清选一线：观光车+短段步道，不硬登巨峰。即墨古城另日浅逛。65+缆车/交通优惠窗口核。\n\n可跳过：巨峰、九水长徒步。',
      timePlan: [
      'D1：崂山一线早进早出',
      'D2：即墨或空白',
      '回市南或续烟台',
      ],
      sightsTips:
        '· 山海温差备外套。\n· 索道/缆车恐高可删只岸线。\n· 人挤改短期日出入口。',
      dining:
        '山脚清淡面食；少油腻农家宴。回城再吃海鲜清蒸。',
      longStay:
        '可仍住市南，当日往返崂山减搬行李。',
      hospitals: [
      { name: '青岛大学附属医院', level: '三甲', area: '青岛', note: '请用高德核实' },
      { name: '青岛市市立医院', level: '三甲', area: '青岛', note: '请用高德核实' },
      ],
    },
  },

  'longstay-hulunbuir': {
    practicalGuide: {
      routeGuide:
        '海拉尔电梯短租/酒店作月居锚点。每周2–3个草原日归，其余买菜休整。三门槛：机场+超市药店+市人民医院体系；复杂病例预留北京下撤。\n\n可跳过：每周硬排满洲里。',
      timePlan: [
      '周节奏：2–3个外出日+空白买菜',
      '月末评估是否续住或飞回',
      ],
      sightsTips:
        '· 驱蚊防晒常备。\n· 租车正规公司；勿夜路。\n· 血压药按医嘱备足。',
      dining:
        '自炊清淡为主；外出清炖少油。少连续宴请酒。',
      longStay:
        '近医院与超市的电梯房；先试住再月租。',
      hospitals: [
      { name: '内蒙古林业总医院', level: '三甲', area: '牙克石/呼伦贝尔', note: '请用高德核实' },
      { name: '呼伦贝尔市人民医院', level: '三甲', area: '海拉尔', note: '请用高德核实' },
      ],
    },
  },

  'longstay-weihai': {
    practicalGuide: {
      routeGuide:
        '高铁/飞机入威；环翠近海电梯短租。每日早晚岸线一段，正午强制休息。刘公岛另日轮渡，风浪大可删。三门槛：机场/高铁+物资+市立医院；对照月预算。\n\n可跳过：刘公岛、养马岛游乐。',
      timePlan: [
      '周节奏：岸线散步日+空白日',
      '刘公岛最多半天',
      ],
      sightsTips:
        '· 海风湿冷备外套。\n· 台风季关注预警。\n· 海鲜控盐少生冷。',
      dining:
        '自炊青菜粥面；外出清蒸海鲜控盐。',
      longStay:
        '近超市医院电梯房连住约一个月量级。',
      hospitals: [
      { name: '威海市立医院', level: '三甲', area: '威海', note: '请用高德核实' },
      { name: '威海市中心医院', level: '三甲', area: '文登', note: '请用高德核实' },
      ],
    },
  },

  'compose-shandong-qingdao-yantai': {
    practicalGuide: {
      routeGuide:
        '长线组合：青岛滨海 → 崂山即墨 → 烟台；威海可选 glue。本卡只管高铁/住宿衔接与节奏，景点细节见各短线。段间留空白日，勿一日栈桥+崂山。\n\n可跳过：崂山、烟台或威海整段。',
      timePlan: [
      '段1：青岛滨海约4天',
      '段2：崂山即墨约3–4天',
      '段3：烟台约5–7天',
      '可选威海',
      '高铁/飞机回京',
      ],
      sightsTips:
        '· 各短线 PG 为准。\n· 半岛海风防晒统一备薄外套。\n· 任一段不适即终止回青岛枢纽。',
      dining:
        '分段适老：青岛清蒸海鲜粥；烟台面条粥/清蒸鱼；少生冷油炸。',
      longStay:
        '青岛与烟台分段电梯酒店；少连续换城。',
      hospitals: [
      { name: '青岛大学附属医院', level: '三甲', area: '青岛', note: '请用高德核实' },
      { name: '青岛市市立医院', level: '三甲', area: '青岛', note: '请用高德核实' },
      ],
    },
  },

  'compose-dongbei-loop': {
    practicalGuide: {
      routeGuide:
        '长线组合：哈尔滨夏 → 长春 → 沈阳 → 大连。高铁串珠，一日只换一城；段间空白。不排雪乡与长白硬线（另卡）。景点正文只在各短线。\n\n可跳过：长春或沈阳整段，只留哈+连也成立。',
      timePlan: [
      '段1：哈尔滨3–5天',
      '段2：长春2–3天',
      '段3：沈阳2–3天',
      '段4：大连5–7天',
      '大连/沈阳飞回北京',
      ],
      sightsTips:
        '· 江边/海边风大备外套。\n· 冬寒勿与本夏环混排。\n· 故宫/中央大街等见短线 PG。',
      dining:
        '各城清淡炖菜与清汤面；大连段海鲜清蒸控盐。',
      longStay:
        '每城电梯酒店连住；行李少折腾。',
      hospitals: [
      { name: '哈尔滨医科大学附属第一医院', level: '三甲', area: '哈尔滨', note: '请用高德核实' },
      { name: '哈尔滨医科大学附属第二医院', level: '三甲', area: '哈尔滨', note: '请用高德核实' },
      ],
    },
  },

  'compose-neimeng-grassland': {
    practicalGuide: {
      routeGuide:
        '长线组合：呼和浩特 → 阿尔山 → 呼伦贝尔。飞/铁换住，单日车程控制，不硬草原自驾环。骑马短段；段末海拉尔或呼市飞回。\n\n可跳过：阿尔山或呼伦贝尔整段。',
      timePlan: [
      '段1：呼市2–3天',
      '段2：阿尔山3–4天',
      '段3：呼伦贝尔5–7天',
      '飞回北京',
      ],
      sightsTips:
        '· 紫外线+温差：防晒帽薄羽绒。\n· 国门/林区规则见各短线。\n· 头痛即回城，勿硬骑马。',
      dining:
        '清炖牛羊肉、奶茶浅尝、清汤面保底；少烧烤烈酒。',
      longStay:
        '呼市与海拉尔电梯酒店为锚；阿尔山温泉店。',
      hospitals: [
      { name: '内蒙古医科大学附属医院', level: '三甲', area: '呼和浩特', note: '请用高德核实' },
      { name: '内蒙古自治区人民医院', level: '三甲', area: '呼和浩特', note: '请用高德核实' },
      ],
    },
  },

  'compose-jingjinji-jin': {
    practicalGuide: {
      routeGuide:
        '长线组合：京津冀晋浅串——京北戴河等短线与平遥等晋中线按季节分次嵌入。本卡 glue 只管城际/高铁衔接；不把山庄、长城、平遥排进同一短假特种兵。\n\n可跳过：任一段；只订北戴河或只订平遥也成立。',
      timePlan: [
      '可选块A：慕田峪/古北/承德/北戴河（从北京家）',
      '可选块B：太原缓冲+平遥',
      '块间回京休整再出发',
      ],
      sightsTips:
        '· 从北京家出发短线优先自驾/高铁当日或过夜。\n· 平遥石板与承德环山车见各短线。\n· 地图总览已退休，以实用交通文案为准。',
      dining:
        '各段清淡本地餐；北戴河海鲜控盐，平遥面食清汤。',
      longStay:
        '北京家为总基地；外地段电梯酒店。',
      hospitals: [
      { name: '北京协和医院', level: '三甲', area: '东单', note: '请用高德核实' },
      { name: '北京医院', level: '三甲', area: '东单', note: '请用高德核实' },
      ],
    },
  },

  'compose-lu-taishan-qingdao': {
    practicalGuide: {
      routeGuide:
        '长线组合：济南泉城 → 泰山曲阜 → 青岛滨海/崂山。高铁串联；泰山用天外村+索道减负，不与泉城同日。青岛段见半岛短线。\n\n可跳过：泰山或曲阜；只留济南+青岛也成立。',
      timePlan: [
      '段1：济南3–4天',
      '段2：泰安/曲阜2–3天',
      '段3：青岛4–6天',
      '回京',
      ],
      sightsTips:
        '· 泰山索道末班与预约见短线。\n· 勿一日泉+山+孔府。\n· 半岛海鲜控盐。',
      dining:
        '济南清汤面；泰安煎饼配粥；青岛清蒸海鲜。',
      longStay:
        '分段电梯酒店；济南与青岛为双锚。',
      hospitals: [
      { name: '山东大学齐鲁医院', level: '三甲', area: '济南', note: '请用高德核实' },
      { name: '山东省立医院', level: '三甲', area: '济南', note: '请用高德核实' },
      ],
    },
  },

};

/** Append-only Ctrip sources (merged by URL in audit-patches/index). */
export const routeFieldPatches: Record<string, Partial<Route>> = {
  'chengde-2d': { sources: [ctrip('携程游记：承德参考', 'https://you.ctrip.com/travels/chengde213/3998001.html')] },
  'huabei-neimeng-summer': { sources: [ctrip('携程游记：呼伦贝尔参考', 'https://you.ctrip.com/travels/hulunbeier458/4140958.html')] },
  'dongbei-changbai-summer': { sources: [ctrip('携程游记：带老人长白山参考', 'https://you.ctrip.com/travels/changbaishan268/4148374.html')] },
  'dongbei-harbin-snow-3d': { sources: [ctrip('携程攻略：哈尔滨中央大街', 'https://you.ctrip.com/sight/harbin151/7712.html')] },
  'dongbei-dalian-summer': { sources: [ctrip('携程攻略：大连老虎滩参考', 'https://you.ctrip.com/sight/dalian4/1097.html')] },
  'dongbei-heilongjiang-harbin-summer': { sources: [ctrip('携程攻略：哈尔滨中央大街', 'https://you.ctrip.com/sight/harbin151/7712.html')] },
  'dongbei-heilongjiang-wudalianchi': { sources: [ctrip('携程游记：东北两极含五大连池参考', 'https://you.ctrip.com/travels/hulunbeier458/4140958.html')] },
  'dongbei-jilin-changchun': { sources: [ctrip('携程游记：东北城市浅串参考', 'https://you.ctrip.com/travels/hulunbeier458/4140958.html')] },
  'dongbei-jilin-yanbian': { sources: [ctrip('携程游记：延吉长白参考', 'https://you.ctrip.com/travels/yanji475/4105047.html')] },
  'dongbei-liaoning-shenyang': { sources: [ctrip('携程游记：沈阳故宫参考', 'https://you.ctrip.com/travels/shenyang155/3945550.html')] },
  'frontier-dandong': { sources: [ctrip('携程游记：东北边境浅串参考', 'https://you.ctrip.com/travels/hulunbeier458/4140958.html')] },
  'frontier-mohe': { sources: [ctrip('携程游记：漠河/东北两极参考', 'https://you.ctrip.com/travels/hulunbeier458/4140958.html')] },
  'frontier-erlian': { sources: [ctrip('携程游记：蒙晋线门户参考', 'https://you.ctrip.com/travels/huhehaote156/4171197.html')] },
  'frontier-manzhouli': { sources: [ctrip('携程游记：满洲里/呼伦贝尔参考', 'https://you.ctrip.com/travels/hulunbeier458/4140958.html')] },
  'huabei-beijing-city-slow': { sources: [ctrip('携程攻略：颐和园', 'https://you.ctrip.com/sight/beijing1/229.html')] },
  'huabei-hebei-baoding': { sources: [ctrip('携程游记：京津冀周边参考', 'https://you.ctrip.com/travels/zhangjiakou497/4146858.html')] },
  'huabei-hebei-beidaihe': { sources: [ctrip('携程攻略：北戴河老虎石参考', 'https://you.ctrip.com/sight/qinhuangdao132/78427.html')] },
  'huabei-hebei-handan': { sources: [ctrip('携程游记：蒙晋鲁线参考', 'https://you.ctrip.com/travels/huhehaote156/4171197.html')] },
  'huabei-hebei-shijiazhuang': { sources: [ctrip('携程游记：河北周边参考', 'https://you.ctrip.com/travels/zhangjiakou497/4146858.html')] },
  'huabei-hebei-tangshan': { sources: [ctrip('携程攻略：北戴河/秦皇岛廊参考', 'https://you.ctrip.com/sight/qinhuangdao132/78427.html')] },
  'huabei-hebei-zhangjiakou': { sources: [ctrip('携程游记：张家口大境门参考', 'https://you.ctrip.com/travels/zhangjiakou497/4146858.html')] },
  'huabei-neimeng-aershan': { sources: [ctrip('携程游记：阿尔山/呼伦贝尔参考', 'https://you.ctrip.com/travels/hulunbeier458/4140958.html')] },
  'huabei-neimeng-hohhot': { sources: [ctrip('携程游记：呼和浩特参考', 'https://you.ctrip.com/travels/huhehaote156/4171197.html')] },
  'huabei-neimeng-hulunbuir': { sources: [ctrip('携程游记：呼伦贝尔参考', 'https://you.ctrip.com/travels/hulunbeier458/4140958.html')] },
  'huabei-shandong-jinan': { sources: [ctrip('携程游记：济南趵突泉/泰山参考', 'https://you.ctrip.com/travels/shandong100039/4096309.html')] },
  'huabei-shandong-taishan': { sources: [ctrip('携程游记：泰山天外村省力线参考', 'https://you.ctrip.com/travels/taian746/4060070.html')] },
  'huabei-shandong-weifang': { sources: [ctrip('携程游记：齐鲁半岛参考', 'https://you.ctrip.com/travels/shandong100039/4096309.html')] },
  'huabei-shandong-yantai': { sources: [ctrip('携程游记：烟台自驾参考', 'https://you.ctrip.com/travels/yantai170/4143434.html')] },
  'huabei-shanxi-linfen': { sources: [ctrip('携程游记：蒙晋鲁含临汾参考', 'https://you.ctrip.com/travels/huhehaote156/4171197.html')] },
  'huabei-shanxi-pingyao-deep': { sources: [ctrip('携程游记：陪父母平遥参考', 'https://you.ctrip.com/travels/365/4044174.html')] },
  'huabei-shanxi-taiyuan': { sources: [ctrip('携程游记：蒙晋鲁含太原参考', 'https://you.ctrip.com/travels/huhehaote156/4171197.html')] },
  'huabei-shanxi-wutai': { sources: [ctrip('携程游记：五台山台怀减负参考', 'https://you.ctrip.com/travels/wutaishan184/4100348.html')] },
  'huabei-shanxi-xinzhou-county': { sources: [ctrip('携程游记：五台山交通/忻州参考', 'https://you.ctrip.com/travels/wutaishan184/4100997.html')] },
  'huabei-shanxi-yuncheng': { sources: [ctrip('携程游记：山西线参考', 'https://you.ctrip.com/travels/shanxi100056/4150363.html')] },
  'leg-qingdao-coast': { sources: [ctrip('携程攻略：青岛栈桥', 'https://you.ctrip.com/sight/qingdao5/1265.html')] },
  'leg-qingdao-laoshan': { sources: [ctrip('携程游记：青岛六天参考', 'https://you.ctrip.com/travels/Qingdao5/4078612.html')] },
  'longstay-hulunbuir': { sources: [ctrip('携程游记：呼伦贝尔慢住参考', 'https://you.ctrip.com/travels/hulunbeier458/4140958.html')] },
  'longstay-weihai': { sources: [ctrip('携程游记：威海自驾参考', 'https://you.ctrip.com/travels/169/4021430.html')] },
  'compose-shandong-qingdao-yantai': { sources: [ctrip('携程游记：青岛半岛参考', 'https://you.ctrip.com/travels/Qingdao5/4078612.html')] },
  'compose-dongbei-loop': { sources: [ctrip('携程攻略：哈尔滨中央大街（东北浅环）', 'https://you.ctrip.com/sight/harbin151/7712.html')] },
  'compose-neimeng-grassland': { sources: [ctrip('携程游记：呼和浩特（草原线）', 'https://you.ctrip.com/travels/huhehaote156/4171197.html')] },
  'compose-jingjinji-jin': { sources: [ctrip('携程攻略：北戴河（京津冀参考）', 'https://you.ctrip.com/sight/qinhuangdao132/78427.html')] },
  'compose-lu-taishan-qingdao': { sources: [ctrip('携程游记：齐鲁泰青参考', 'https://you.ctrip.com/travels/shandong100039/4096309.html')] },
  'gubei-overnight': { sources: [ctrip('携程攻略：慕田峪省力线（京北长城参考）', 'https://you.ctrip.com/travels/beijing1/4101428.html')] },
  'tianjin-day': { sources: [ctrip('携程攻略：天津五大道参考', 'https://you.ctrip.com/travels/tianjin154/')] },
  'huabei-shanxi-loop': { sources: [ctrip('携程游记：大同自驾参考', 'https://you.ctrip.com/travels/datong275/4148385.html')] },
};
