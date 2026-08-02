# 长居城市推荐 · 2026-08-02

> 面向北京约60父母、私家车、月预算心态约2万、慢居后回京。  
> 筛选：**空气相对清新** + **周边自然/日归丰富**；避开雾霾核心作主基地。  
> **站立门槛（所有 `longstay-*` / `compositionKind: base` 必须对照）**：  
> 1. **交通便利** — 机场 / 高铁 / 高速等进出可靠  
> 2. **生活物资丰富** — 约一个月日常采购与药店可本地解决  
> 3. **医疗资源丰富** — **优先本地三甲**；仅有二甲/县医院须诚实写明并给出可下撤三甲  
> 证据：`multi-discovery/*` + Wikivoyage/文旅；非 XHS 门禁。

## 门槛审计（20260802）

| id | 交通 | 物资 | 三甲 | 总评 |
|----|------|------|------|------|
| `longstay-kunming` | 长水+地铁 | 省会级 | 本地多所三甲 | **PASS**（最强） |
| `longstay-dali` | 机场/高铁 | 州市级够用 | 州内两所三甲 | **PASS** |
| `longstay-weihai` | 机场+高铁 | 地级市够用 | 市立三甲；青岛可下撤 | **PASS** |
| `longstay-dujiangyan` | 借成都机场+城际 | 县城够日常 | 本地三甲；华西专科下撤 | **PASS** |
| `longstay-hulunbuir` | 海拉尔机场 | 城住够；草原无 | 市人民医院三甲 | **PASS**（仅夏；须城住） |
| `longstay-hainan-east` | 环岛高铁+两端机场 | 琼海/万宁够 | **优先琼海三甲**；海口专科 | **PASS**（锚琼海） |
| `base-kashi` | 机场（无高铁） | 地州首府够一月 | 地区一院三甲；乌市专科 | **PASS + caveat**（专科/气候/距京） |
| `longstay-yangshuo` | 经桂林进出 | 镇区中等 | **本地无三甲**→桂林 | **DEMOTED** → 名景短腿 |
| `longstay-zhenyuan` | 高铁便利 | 县城偏薄 | **本地无三甲**→贵阳 | **DEMOTED** → 名景短腿 |

### 降级决定（20260802 follow-up）

诚实优先：不过三甲/物资门槛的卡，不继续与昆明级并列「长居推荐」。

| id | 决定 | 现产品形 | 推荐枢纽 / 替代 |
|----|------|----------|-----------------|
| `longstay-yangshuo` | **(a) 降级** | `tripType: short` + `compositionKind: leg` + theme=`famous-scenic`；约5–7天 | 医疗/物资：**桂林**；更长漓江：`huanan-guilin-yangshuo`；月租：**昆明/大理** |
| `longstay-zhenyuan` | **(a) 降级** | 同上；约4–6天（略松于三天卡） | 医疗/物资：**贵阳**；紧凑：`xinan-guizhou-zhenyuan`；贵阳锚：`xinan-guizhou-loop`；月租：**昆明/大理** |

id 保留以免断链；Explore「长居推荐」芯片与 overview 列表已去掉二者。

## 入选（6 longstay + 1 base；2 demoted legs）

| id | 基地 | 空气/自然理由 | 季节 | 月预算粗估（双人） |
|----|------|---------------|------|-------------------|
| `longstay-dali` | 大理 | 苍洱廊道，明显好于华北城区；沙溪日归 | 春秋 | 1.5–2万 |
| `longstay-kunming` | 昆明 | 春城温差友好、医疗全；石林/抚仙湖日归 | 春秋冬 | 1.4–1.9万 |
| `longstay-weihai` | 威海 | 胶东空气口碑海岸；刘公岛/成山头日归 | 夏秋 | 1.3–1.8万 |
| `longstay-hulunbuir` | 海拉尔锚 | 盛夏通透草原；城住+日归 | 仅夏 | 1.8–2.2万 |
| `longstay-dujiangyan` | 都江堰 | 成都平原**西缘**相对清新；青城前山/熊猫日归 | 春秋 | 1.4–1.9万 |
| `longstay-hainan-east` | 琼海/万宁 | 非暑期湿润海岸；人少于三亚核心 | 冬春秋 | 1.5–2万 |
| `base-kashi` | 喀什 | 丝路西端气质；`nearbyLegs` 辐射库车/南疆组合 | 春秋 | 1.5–2.5万 |

### 降级后仍保留的短腿（非长居芯片）

| id | 角色 | 天数 |
|----|------|------|
| `longstay-yangshuo` | 阳朔山水短住（非月租） | 约5–7天 |
| `longstay-zhenyuan` | 镇远江城短住（非月租） | 约4–6天 |

## 评估后未作主推

- **丽江主居**：海拔约2400m，一月长住风险高于大理  
- **成都主城**：静稳雾霾季不宜作「清新」主基地 → 改都江堰边缘  
- **西安+秦岭**：城区雾霾季与秦岭体力门槛 → 暂缓长居主题  
- **张家口/承德长居一月**：承德更适合 4–6 日深挖短线；坝上另题  
- **厦门鼓浪屿核心**：商旅嘈杂；长居让位威海/海南东线  
- **阳朔镇区月租** / **镇远县城月租**：已降级（见上）  
- **桂林 / 贵阳作新 `longstay-*`**：尚未立项；目前作下撤枢纽叙事 + 既有短线/长线卡，不急于扩长居名单  

## UI

Explore 首页快捷芯片 **「长居推荐」**（theme=`long-stay`）；详情页青绿标签同名。  
`base` 详情：实用指南优先 +「周边短线」自 `nearbyLegs`。  
降级卡走 **名景** 主题，不再进长居芯片。

## 产品文件

- `content/patches/routes-long-stay.ts`  
- `content/patches/routes-xinjiang.ts`（`base-kashi`）  
- `content/route-provinces.ts` / `content/practical-guides.ts`  
- IA：`content-route-composition-ia-20260802.md`  
