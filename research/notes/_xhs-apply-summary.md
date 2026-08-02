# XHS 调研应用摘要

> 生成时间：2026-08-02  
> 原始数据：`research/raw/xhs/`（gitignored，未提交）  
> 解析方式：Python `json.loads(..., strict=False)`

## 处理的 raw 文件

| 文件 | 对应路线 |
|------|----------|
| `search_慕田峪_老人_缆车.json` | mutianyu-day |
| `search_承德避暑山庄_电瓶车_适老.json` + `detail_chengde.json` | chengde-2d |
| `search_拉萨_适应_老人.json` + `detail_lhasa.json` | qingzang-lhasa-slow |
| `search_敦煌_莫高窟_预约_老人.json` | xibei-dunhuang-zhangye |
| `search_大理_长住_短租_老人.json` | yunnan-dali-lijiang |

## 更新的路线（5）

### mutianyu-day
- **notes**：新增「## 小红书补充」——北口+摆渡+厢式缆车至14号敌楼、索道慎选、早场等
- **routes.ts**：`stop.tips` 细化省力路线；`researchKeywords` 加检索词；`sources` 加 1 条 xiaohongshu（亲测带爷爷奶奶帖）

### chengde-2d
- **notes**：景交按需单买、湖区门槛、小布达拉宫慎往、博物馆无障碍
- **routes.ts**：避暑山庄 `tips` 补景交套票与石路提醒；普宁寺 `tips` 补外庙台阶；`sources` 加 xiaohongshu（无障碍详帖）

### qingzang-lhasa-slow
- **notes**：防风帽、红景天提前两周、布宫大昭寺分日、75–80岁案例节奏
- **routes.ts**：适应期 `tips` 补防风帽/红景天/首日节奏；布宫 `tips` 补与大昭寺分日；`sources` 加 xiaohongshu（带高龄爸妈帖）

### xibei-dunhuang-zhangye
- **notes**：放票时段、应急票、别信代抢
- **routes.ts**：莫高窟 `tips` 补放票刷新、应急票、防代抢；`researchKeywords` 加检索词（无 xiaohongshu source——帖多为抢票技巧，以官方预约为准）

### yunnan-dali-lijiang
- **notes**：才村/龙龛短租、先周租试住、电梯就医
- **routes.ts**：大理慢住 `tips` 补短租节奏；`sources` 加 xiaohongshu（带爸妈旅居帖）；`researchKeywords` 加检索词

## 其他变更

- `.gitignore`：显式加入 `research/raw/xhs/**`（`cookies.json` 已在列）

## 未提交

- `cookies.json`
- `research/raw/xhs/**` 全部 JSON

## 统计

- **路线 notes 更新：5**
- **routes.ts 路线更新：5**
- **新增 xiaohongshu sources：4**（敦煌仅 researchKeywords，无 note URL 作官方替代来源）
