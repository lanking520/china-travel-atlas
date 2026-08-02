# 地级市深挖方法（可重复）

> 目标：每个地级市不只写「市区一两景点」，而要摸清下属**区/县/县级市**的适老向看点，再织进路线的 stops / 日归节奏。  
> **不要一次全国铺开**——按省或每批 4–6 市推进。

## 流程

```mermaid
flowchart LR
  pick[1 选题] --> note[2 写 prefecture note]
  note --> weave[3 织进路线]
  weave --> backlog[4 更新 backlog]
```

### 1. 选题

优先：

- 北京自驾/高铁友好（华北、山东半岛、晋冀）
- 目录里已有但 **stops ≤3 / summary 一句带过** 的线
- 经典慢游走廊（山庄海滨、半岛海岸、坝上另线等）

避免本批：高原强适应、边境证件复杂、纯游乐场县域。

### 2. 写笔记（门禁证据）

路径：`research/notes/prefecture-depth/<province>-<prefecture>.md`

最少结构：

| 段 | 内容 |
|----|------|
| 区划 | 市辖区 + 县/县级市名单（可引自 Wikivoyage/政府网） |
| 适老看点表 | 每区县 0–3 个点：名称、为何适老、体力、交通、默认去/可选/跳过 |
| 织线建议 | 锚点住宿、几天、哪些日归、明确不排什么 |
| 来源 | Wikivoyage、文旅/景区官网、游记标题级参考（禁止整篇搬运） |

**发现门禁**：多源（Wikivoyage + 官网/文旅）即可立项；小红书仅可选复核。

省层摘要仍可维护在 `research/notes/multi-discovery/<province>.md`；地级深挖用本目录，避免把省摘要撑爆。

### 3. 织进产品

- 优先 **enrich 已有 route id**（patch 覆盖同 id），必要时新 id
- stops 体现「市辖区锚点 + 县域日归」，`days`/`pace`/`tips` 写清可删段
- `route-provinces`、实用指南 `longStay`/`hospitals` 按需补
- 封面/站点图：能复用 `place-images` 则复用

### 4. Backlog

更新 [`backlog.md`](./backlog.md)：已完成 / 下一批 / 暂缓原因。  
**禁止**在进度里写「全国地级市已覆盖」。

## 验收（单市）

- [ ] 有 prefecture-depth 笔记且含县区表  
- [ ] 路线 stops ≥4 或同等信息密度（含可删可选）  
- [ ] 明确「不排」的远县/高强度点  
- [ ] Explore 可按省钻取或主题找到  
