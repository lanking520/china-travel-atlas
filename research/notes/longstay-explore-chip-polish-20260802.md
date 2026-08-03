# Explore 长居 chip / base detail polish (2026-08-02)

Optional backlog item closed.

## Explore card

- `RouteCard`: teal **长居** chip when `themes` includes `long-stay` **or** `compositionKind === "base"`.
- Chip stays visible alongside 从北京 / 从郑州 (no longer hidden behind home tags).
- Other themes keep amber hint; kind line still shows 短线 / 长线 / **长居枢纽**.

## Base / long-stay detail

- Sticky「门槛」「辐射」use teal highlight so hub jumps read first.
- `#gates` + `#nearby` move **above**「精细化路线介绍」, matching sticky order.
- Gates: scannable triad — 交通便利 / 生活物资 / 医疗资源 — plus existing `longStay` prose.
- Nearby: sky chrome (distinct from teal gates); copy tightened.

## Verify

- `ux-plan` P23 asserts triad labels + sticky 门槛/辐射 + nearby links.
- Filter 主题·长居 unchanged; demoted yangshuo/zhenyuan still off long-stay.
