# Place-images · soft leftovers upgrade · 2026-08-02

Continue after regional batches 1–5 + Xinjiang hiragana fix. Target: remaining intentional `PLACE_SOFT_IDS` (~20).

## Upgraded this round (5)

| ID | Was | Now | Soft? |
| --- | --- | --- | --- |
| `yzc-yizheng-optional` | 高邮运河同廊 | `仪征园博园远眺.jpg` | out |
| `yzc-shaobo-optional` | 高邮湖同廊 | `Shaobo_Shiplock.jpg` | out |
| `fj-gate` | 梵净山同廊 | `Tongren_Guizhou.jpg`（铜仁城） | out |
| `zhuhai-optional` | 与主图同 `Zhuhai.jpg` | `Palm_trees,_Lover's_Road,_Zhuhai.jpg` | out |
| `cs-shantou` | already 汕头港天际线 | keep URL | out（本就地点正确） |

## Still soft (~15) — intentional buffers

`shapotou-optional`, `yzc-base`, `zj-base`, `yc-museum-optional`（无馆外景）, `xc-base`, Hangzhou corridor notes (`qd-hangzhou-note`, `jn-hangzhou-gate`, `jn-exit`, `sx-hangzhou-optional`), `qufu-exit`, `lz-buffer-optional`, `g318-exit`, `qzr-exit`, `g214s-exit`, `mengla-buffer-optional`.

Gen trio unchanged: 棋子湾 / 乐亭 / 左云.

## Ops

- Commons search + `imageinfo` (rate-limit aware).
- `resolve-place-images.py` FILES synced for 仪征/邵伯/铜仁/珠海情侣路.
