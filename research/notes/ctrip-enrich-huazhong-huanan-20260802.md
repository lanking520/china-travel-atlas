# Ctrip-style enrich — 华中 + 华南 (`region: huazhong` | `huanan`)

Date: 2026-08-02  
Patch: `content/audit-patches/ctrip-enrich-huazhong-huanan-20260802.ts`（已注册 `content/audit-patches/index.ts`）  
Generator: `research/scripts/_gen_ctrip_huazhong_huanan.py`（可再跑；手改以 patch 为准）

## Scope

- **Exclusive** `region: huazhong` or `huanan`（leg / compose / base / longstay / frontier）
- **55** ids enriched：`introduction` + `seasonGuide` + `notices` + `practicalGuide`（detailPatches）+ `sources`（routeFieldPatches，按 URL 追加）
- **含郑州家** `fromZhengzhouHome` 河南圈：郑州 / 洛阳开封 / 洛阳县域 / 开封 / 安阳 / 焦作云台 / 武当 / 武汉
- 素材：携程游记/攻略骨架 + 携程景点页备份  
- **禁止整篇搬运**；改写为约 60 活跃退休节奏（半天一景、索道/观光车减步、清淡餐饮、错峰）

## Method

1. Inventory live catalog `routes.filter(r => r.region === 'huazhong' || r.region === 'huanan')`
2. Pull public Ctrip travelogue / sight URLs for pace / booking / cable-car / senior tips
3. Rewrite into atlas voice；compose cards stay thin（glue + pointer to legs）
4. `preferRicherText`：新 intro 约 ≥280 字，便于胜出既有 stub/character patch（已很长如 `huazhong-xian-slow` 仍以 notices/PG/sources 补强）
5. Sources：`kind: 'other'`；`index.ts` 按 URL 追加，不覆盖既有官网引用

## Sample sources（非穷尽）

| Topic | URL |
| --- | --- |
| 洛阳龙门 | https://you.ctrip.com/travels/luoyang198/4098046.html |
| 带爹妈襄阳洛阳郑州 | https://you.ctrip.com/travels/414/3975491.html |
| 郑州开封焦作 | https://you.ctrip.com/travels/zhengzhou157/3925581.html |
| 云台山两日 | https://you.ctrip.com/travels/yuntaishan120494/4011603.html |
| 带老人张家界 | https://you.ctrip.com/travels/zhangjiajie23/3956206.html |
| 张家界轻松玩法 | https://you.ctrip.com/travels/wulingyuan120559/3945160.html |
| 厦门带老人 | https://you.ctrip.com/travels/xiamen21/4114233.html |
| 阳朔带父母 | https://you.ctrip.com/travels/yangshuo702/4092823.html |
| 桂林阳朔爸妈线 | https://you.ctrip.com/travels/yangshuo702/4151225.html |
| 武汉慢游父母 | https://you.ctrip.com/travels/wuhan145/4102420.html |
| 西安带老人 | https://you.ctrip.com/travels/xian7/4090536.html |
| 潮汕漳厦 | https://you.ctrip.com/travels/jieyang835/4157438.html |

## Enriched count

**55**（华中+华南全量）

## Sample ids

`huazhong-henan-zhengzhou`, `huazhong-luoyang-kaifeng`, `huazhong-henan-jiaozuo`, `huazhong-zhangjiajie`, `huanan-guilin-yangshuo`, `huanan-xiamen-winter`, `compose-min-yue-coast`, `leg-sanya-beach`, `base-guilin`

## Notes for sibling agents

- 勿改其他大区 id；rebase 时只碰本 patch + `index.ts` 注册行 + 本笔记  
- `applyRouteFieldPatches` 已支持 sources URL 追加；其他 Ctrip enrich 可共用  
- 医院名沿用既有 PG / 高德核实口径；阳朔非长居降级勿弱化  
