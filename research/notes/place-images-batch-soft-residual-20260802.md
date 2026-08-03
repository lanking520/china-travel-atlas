# Place-images · soft residual → Commons · 2026-08-02

**Scope:** Remaining ~15 intentional `PLACE_SOFT_IDS` corridor/gate buffers. Upgrade only when place-accurate Commons exists; leave same-corridor soft if no dedicated file. Gen trio only if real Commons found.

## Fixed this round (14)

| ID | Was | Commons file | Soft? |
| --- | --- | --- | --- |
| `yzc-base` | 瘦西湖同城 | `扬州文昌阁.jpg` | out |
| `zj-base` | 金山同城 | `西津渡历史文化街区 - Xijin Ferry Historic Area - 2015.04 - panoramio.jpg` | out |
| `xc-base` | 广教寺双塔同市 | `Xuancheng City Skyline.JPG` | out |
| `qufu-exit` | 孔庙同城 | `Qufudong Railway Station 2015.08.16 12-24-12.jpg` | out |
| `mengla-buffer-optional` | 勐仑植物园同廊 | `Mengla intersection.JPG` | out |
| `shapotou-optional` | 沙坡头主图同景区 | `沙坡头黄河大转弯 - panoramio.jpg`（黄河边散步） | out |
| `g318-exit` | 布达拉主题 | `Lhasa Gonggar Airport Terminal 3 (54760927444).jpg` | out |
| `qzr-exit` | 青藏列车主题 | `拉萨火车站.jpg` | out |
| `g214s-exit` | 独克宗同城 | `Shangri-la airport (DIG), Yunnan, China.JPG` | out |
| `lz-buffer-optional` | 色季拉同廊 | `Nyingchi city June 2019.jpg` | out |
| `jn-hangzhou-gate` | 西湖复用 | `Hangzhou East Railway Station.jpg` | out |
| `jn-exit` | 西湖复用 | `20151226杭州东站西广场全景.jpg` | out |
| `qd-hangzhou-note` | 西湖（文案禁当日塞湖） | `West façade of Hangzhou East Railway Station (20190807173604).jpg` | out |
| `sx-hangzhou-optional` | already 西湖 | keep `West_Lake,_Hangzhou_2025.jpg`（停点=西湖半日，地点正确） | out |

## Still soft (1)

`yc-museum-optional` — Commons/Openverse 仍无运城博物馆馆外景；关帝庙同廊示意保留。

## Gen trio — unchanged

| ID | Why keep gen |
| --- | --- |
| `qiziwan-optional` | 无棋子湾适老风景；拒三亚/东线沙滩 |
| `ts-laoting-optional` | 无乐亭/月坨岸线；拒北戴河 |
| `datong-zuoyun-optional` | 仅教堂废墟/地图；拒云冈顶替 |

## Ops

- Discovery: Commons `list=search` + sparse `imageinfo` (429-aware); raw `research/raw/soft-residual-*.json`
- `content/place-images.ts` URLs + `PLACE_SOFT_IDS` → **1**
- `research/scripts/resolve-place-images.py` FILES synced for the 13 URL upgrades (+ `sx` soft-only clear)
- No Unsplash-as-attraction
