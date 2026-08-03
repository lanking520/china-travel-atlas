# Ctrip-style enrich — 华东 (`region: huadong`)

Date: 2026-08-02  
Patch: `content/audit-patches/ctrip-enrich-huadong-20260802.ts`（已注册 `content/audit-patches/index.ts`）

## Scope

- **Exclusive** `region: huadong` route ids only（腿 / 组合；本区无 `base`）
- **30** ids enriched：`introduction` + `practicalGuide`（detailPatches）+ `sources`（routeFieldPatches）
- 素材：携程游记/攻略骨架 + 官网 / Wikivoyage / 12306 等备份链接  
- **禁止整篇搬运**；改写为北京出发、约 60 活跃退休节奏（半天一景、索道/游船减步、清淡餐饮）

## Method

1. Inventory live catalog `routes.filter(r => r.region === 'huadong')`
2. Pull public Ctrip travelogue URLs（`you.ctrip.com/travels/...`）for pace / booking / cable-car / water-town tips
3. Rewrite into atlas voice；compose cards stay thin（glue + pointer to legs）
4. `preferRicherText`：新 intro 长于既有 stub/character patch，便于胜出
5. Sources：`kind: 'other'` for 携程；`official` for 景区/铁路官网

## Sample sources（非穷尽）

| Topic | URL |
| --- | --- |
| 杭州家庭两日 | https://you.ctrip.com/travels/hangzhou14/4160650.html |
| 带父母黄山宏村西湖 | https://you.ctrip.com/travels/2026903/4024512.html |
| 黄山带着老人 | https://you.ctrip.com/travels/huangshan19/4110889.html |
| 上海外滩夜景 | https://you.ctrip.com/travels/shanghai2/4155391.html |
| 苏州全攻略 | https://you.ctrip.com/travels/11/4127251.html |
| 扬州瘦西湖 | https://you.ctrip.com/travels/yangzhou12/4098589.html |
| 婺源油菜花 | https://you.ctrip.com/travels/Wuyuan446/3941461.html |
| 南京南博三日 | https://you.ctrip.com/travels/nanjing9/4116842.html |
| 九华山 | https://you.ctrip.com/travels/jiuhuashan182/3963749.html |
| 千岛湖浙西 | https://you.ctrip.com/travels/chunan2249/4001722.html |
| 黄山官网 | https://www.huangshan.com.cn/ |

## Enriched ids（30）

`huadong-hangzhou-suzhou`, `huadong-shanghai-short`, `huadong-huangshan-hui`, `huadong-wuyuan-spring`, `huadong-suzhou-nanjing`, `compose-suhan-hangzhou-huangshan`, `huadong-jiangsu-yangzhou`, `huadong-anhui-hefei`, `huadong-jiangxi-nanchang`, `huadong-jiangsu-nanjing`, `huadong-jiangnan-water-towns`, `huadong-jiangsu-wuxi`, `huadong-zhejiang-ningbo`, `compose-jinghu-coast`, `huadong-jiangxi-lushan`, `huadong-zhejiang-shaoxing`, `huadong-zhejiang-putuo`, `huadong-anhui-jiuhua`, `huadong-zhejiang-qiandao`, `huadong-jiangsu-changzhou`, `huadong-zhejiang-wenzhou`, `huadong-jiangsu-suzhou-county`, `huadong-jiangsu-yangzhou-county`, `huadong-jiangsu-zhenjiang`, `huadong-jiangsu-nantong`, `huadong-zhejiang-jiaxing`, `huadong-zhejiang-huzhou`, `huadong-anhui-xuancheng`, `compose-jiangnan-zhegan-lushan`, `compose-wantan-jiuhua`

## Notes for sibling agents

- 勿改其他大区 id；rebase 时只碰本 patch + `index.ts` + 本笔记  
- 医院名沿用既有 PG / 高德核实口径；急重症县域写明转诊三甲  
