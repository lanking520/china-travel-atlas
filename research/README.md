# 调研数据（仅供内容生成，不部署）

本目录给**写路线文案**用，不会打进 GitHub Pages / `out/`。

```
research/
  queries.json          # 每条路线的搜索词（可提交）
  notes/                # 人工整理后的要点（可提交）
  raw/                  # 原始抓取/导出（默认 gitignore，勿上传 Cookie）
  scripts/              # 本地辅助脚本
  templates/            # 笔记模板
```

## 原则

1. **先搜后写**：用小红书 / 知乎 / 官网搜到的信息，改写成适老短句写入 `content/routes.ts`。
2. **不进网页包**：原始帖文、导出 JSON、Cookie 一律放 `raw/`，站点构建不读这里。
3. **不整篇搬运**：平台原文只作素材；公开站只放我们改写后的内容 + 可选来源链接。
4. **合规**：用你自己登录态的官方客户端/浏览器或社区 CLI 做个人研究；勿把逆向爬虫接到 CI 或父母站点。

## 推荐采集方式

### A. 人工（最稳）

1. 打开 `queries.json`，按路线关键词搜索。
2. 把有用结论填进 `templates/note.md`，存到 `notes/<route-id>.md`。
3. 对照笔记改 `content/routes.ts` 的 `summary` / `tips` / `budgetLabel` / `sources`。

### B. 小红书（可选，扫码麻烦可跳过）

登录/Cookie/钥匙串很折腾时，**直接用下面 C/D，不必扫码**。

若以后仍想用 CLI：用 `research/raw/xhs-cookies.txt` + `npm run research:xhs`，不要跑会弹钥匙串的 `redbook whoami`。

### C. 你人肉浏览 + 我来改写（推荐替代小红书 API）

1. 你在已登录的 Chrome 里照常搜小红书。  
2. 把有用结论用三五行打在聊天里，或把笔记链接发我。  
3. 我改写成 `research/notes/` + `content/routes.ts`（不整篇搬运）。

### D. 不用登录的公开源（已在用）

| 来源 | 做法 |
|------|------|
| 景区/文旅官网 | 票务、缆车、摆渡、预约 |
| 携程/去哪儿问答与游记 | 适老经验（人工改写） |
| [Wikivoyage 中文](https://zh.wikivoyage.org) | MediaWiki API，CC 署名后改写 |
| 网页搜索「目的地 + 老人/适老」 | 快速补 tips |

**慕田峪已按 D 完成一轮补强**（见 `research/notes/mutianyu-day.md`）。

### E. 知乎

浏览器打开即可；把回答链接或要点贴给我，同样改写入库。

## 一键列出待搜词

```bash
npm run research:list
```

## 从笔记生成改写草稿（可选）

整理好 `notes/<id>.md` 后，可把要点贴给 AI，要求输出符合 `content/types.ts` 的字段补丁（中文适老、勿抄原文）。
