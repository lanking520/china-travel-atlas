# 小红书 MCP（必要调研环境）

小红书覆盖全国城市攻略、图文与视频，是本项目**找更好路线**的必要信息源。  
用法：只服务内容生成 → 写入 `research/notes/` → 改写进 `content/routes.ts`。  
**绝不**把原始笔记批量搬进 GitHub Pages。

工具：[xpzouying/xiaohongshu-mcp](https://github.com/xpzouying/xiaohongshu-mcp)

## 一次性准备（Apple Silicon Mac）

二进制已可下载到：

`research/tools/xiaohongshu-mcp/`

若目录空，运行：

```bash
npm run research:xhs-mcp:fetch
```

### 1. 扫码登录（只做一次，比抠 Chrome Cookie 稳）

在**本机终端**执行（会开浏览器/出二维码，用小红书 App 扫）：

```bash
npm run research:xhs-mcp:login
```

登录成功后 cookie 保存在 `~/.xiaohongshu/cookies.json`（勿提交仓库）。

### 2. 启动 MCP 服务

另开一个终端：

```bash
npm run research:xhs-mcp:serve
```

默认：`http://localhost:18060/mcp`

### 3. 让 Cursor 连上

项目已配置 [`.cursor/mcp.json`](../../.cursor/mcp.json)。  
保存后**重开 Cursor 或 Reload MCP**，聊天里应出现小红书相关 Tools（如搜索、读详情）。

## 推荐调研话术（给 Agent）

> 用小红书搜索「慕田峪 老人 缆车」，读 3～5 条高赞笔记，只提取：季节、体力/缆车、预算、避坑。  
> 写成 `research/notes/mutianyu-day.md` 要点，再改写 `content/routes.ts`，附笔记链接到 sources。不要整篇复制。

按 `research/queries.json` 逐条路线做即可。

## 合规与边界

| 可以 | 不可以 |
|------|--------|
| 本机登录后搜索、读详情做摘要 | CI / Pages 构建时自动抓取 |
| 改写后的适老短句进网站 | 原笔记正文/图片视频直接上线 |
| sources 里放公开链接 | 把 cookies.json 提交 Git |

## 嫌二进制麻烦时

官方也推荐浏览器插件版：[xpzouying/x-mcp](https://github.com/xpzouying/x-mcp)（Chrome 装插件，零 Docker）。适合「人在浏览器里、AI 通过插件读页」。

## 与现有公开源的关系

小红书 = 找灵感与真实避坑；官网 / Wikivoyage = 核对票务与事实。两者一起用。
