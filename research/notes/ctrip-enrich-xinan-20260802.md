# 携程改写丰富 · 西南（xinan）2026-08-02

## Scope

- **Region:** `xinan` only（川 / 渝 / 黔 / 滇 + 河口–沙巴跨境廊道）
- **Patch:** `content/audit-patches/ctrip-enrich-xinan-20260802.ts`
- **Register:** `detailPatches` p12 + `routeFieldPatches` r10 in `content/audit-patches/index.ts`
- **Enriched count:** **37** route ids（当时全量 xinan catalog）

## Method

- 参考携程目的地页 / 游记的**节奏与减负点**（预约、观光车/索道/扶梯、一天一片区、清淡饮食）
- **改写进产品文案**，不整篇搬运
- `sources` 附真实 URL；`kind: 'other'`，note 标明「改写参考，非官方」
- 河口–沙巴：**加强通关排队、白昼赴山、换钱通信、镇区慢住**等实用，**不削弱**护照/签证/正式口岸警告；官方源（领事服务网、红河州政府）保留

## Overlay totals

| Field | Count |
| --- | ---: |
| detail ids | 37 |
| introduction | 37 |
| practicalGuide | **37**（初版 6 → 补全后 37） |
| routeField sources | 37 |

初版 fan-out 仅 6 条 compose/跨境腿带 `practicalGuide`；2026-08-02 跟进把其余 **31** 条短线/长居/compose 补齐（医院名沿用手写 PG，文案按携程节奏改写，非原文搬运）。河口–沙巴三卡 PG 未改弱证件诚实。

## Sample ids

| id | 改写重点 |
| --- | --- |
| `xinan-chengdu-slow` | 茶馆/博物馆节奏、熊猫观光车、清汤火锅 |
| `xinan-sichuan-jiuzhaigou` | 官方预约+观光车、高反、黄龙可删 |
| `compose-chuanyu-chengdu-chongqing` | 薄 compose 补 intro/PG/sources |
| `compose-yun-gui-chuan-shallow` | 同上 |
| `leg-hekou-border` / `leg-sapa-vietnam` / `compose-yunnan-hekou-sapa` | 跨境诚实 + 实用衔接 |

## Source URL examples（HEAD 200）

- https://you.ctrip.com/place/chengdu104.html
- https://you.ctrip.com/travels/Sichuan100009/4166812.html
- https://you.ctrip.com/place/jiuzhaigou25.html
- https://you.ctrip.com/travels/aba744/4171464.html
- https://you.ctrip.com/sight/zhenning2356/17681.html
- https://you.ctrip.com/place/dali33.html
- https://you.ctrip.com/travels/yunnan100007/3967930.html
- https://you.ctrip.com/place/sapa1455.html
- https://cs.mfa.gov.cn/（官方，沙巴腿）

## Non-goals

- 未改 `ChinaMapExplorer` / 未恢复 overview map
- 未新立项 route id
- 未使用小红书 MCP
