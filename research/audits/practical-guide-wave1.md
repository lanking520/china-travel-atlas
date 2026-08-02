# Practical guide wave 1

Date: 2026-08-02

## Goal

Enrich route detail pages with structured 适老 practical guides (路线指南 / 时间规划 / 景点提示 / 餐饮 / 长居 / 附近医院) for ~60 healthy Beijing parents. Hospitals are well-known real names only; disclaimer required.

## Schema

- `PracticalGuide` + `HospitalHint` on `Route` (`content/types.ts`)
- Hand-written maps in `content/practical-guides.ts`, merged via `content/audit-patches/index.ts`
- Fallback: `buildPracticalGuide()` in `lib/route-detail.ts` (hub-city heuristics; template hospitals marked 请用高德核实)
- UI: `app/routes/[id]/page.tsx` sections after 详细介绍

## Hand-written (19)

| id | hub focus |
| --- | --- |
| mutianyu-day | 怀柔/北京 |
| gubei-overnight | 密云/北京 |
| chengde-2d | 承德 |
| tianjin-day | 天津 |
| huabei-shanxi-loop | 大同→太原转诊 |
| huabei-shanxi-pingyao-deep | 太原/晋中 |
| huabei-neimeng-summer | 海拉尔→哈尔滨转诊 |
| xinan-chengdu-slow | 成都华西 |
| yunnan-dali-lijiang | 大理/丽江 |
| qingzang-lhasa-slow | 拉萨 |
| qingzang-qinghai-lake | 西宁 |
| xibei-dunhuang-zhangye | 敦煌市医院 + 兰州三甲 |
| xibei-xinjiang-north | 乌鲁木齐 |
| huanan-sanya-winter | 三亚/海口 |
| huanan-xiamen-winter | 厦门 |
| huadong-hangzhou-suzhou | 杭州 |
| huadong-suhan-slow | 杭/苏/黄山 |
| national-qinggan-slow | 西宁/兰州/敦煌 |
| national-chuandian-slow | 成都/大理/丽江 |

## Template / fallback

All other route ids: no entry in `practicalGuides` → `buildPracticalGuide` fills every section from stops + `resolveHub()` hospital/dining tables. UI shows amber note when `fromTemplate` is true.

## Preview

Open `/routes/mutianyu-day` or `/routes/xinan-chengdu-slow`.

## Notes

- Not medical advice; verify on 官网/高德.
- No commit in this wave.
- XHS not required for this content pass.
