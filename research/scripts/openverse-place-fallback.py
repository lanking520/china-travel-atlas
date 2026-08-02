#!/usr/bin/env python3
"""Discover CC place photos via Openverse when Commons filename guessing fails.

Prefer source=wikimedia (same host as place-images). Optionally include Flickr.
Writes research/raw/openverse-candidates.json — does NOT auto-edit place-images.ts.

Usage:
  python3 research/scripts/openverse-place-fallback.py
  python3 research/scripts/openverse-place-fallback.py --query "Mutianyu Great Wall" --id mutianyu
"""
from __future__ import annotations

import argparse
import json
import time
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / "research/raw/openverse-candidates.json"
UA = "china-travel-atlas-openverse/1.0 (educational offline atlas)"

# Sparse seed queries for places that were hard under Commons 429 / bad filenames
DEFAULT_QUERIES: list[tuple[str, str]] = [
    ("gubei-overnight", "Gubei Water Town Simatai Beijing"),
    ("gubei-water-town", "Gubei water village Great Wall Beijing"),
    ("qingzang-xining-3d", "Xining Dongguan mosque Qinghai"),
    ("xining-city", "Xining China cityscape"),
    ("xinan-guizhou-zhenyuan", "Zhenyuan Guizhou ancient town"),
    ("dongbei-heilongjiang-wudalianchi", "Wudalianchi volcano Heilongjiang"),
    ("huanan-guangxi-detian", "Detian Falls Guangxi"),
    ("frontier-dongxing", "Dongxing Guangxi border"),
]


def openverse_search(
    q: str,
    *,
    source: str | None = "wikimedia",
    page_size: int = 5,
) -> list[dict]:
    params: dict[str, str] = {
        "q": q,
        "license": "by,by-sa,cc0,pdm",
        "page_size": str(page_size),
    }
    if source:
        params["source"] = source
    url = "https://api.openverse.org/v1/images/?" + urllib.parse.urlencode(params)
    req = urllib.request.Request(
        url,
        headers={"User-Agent": UA, "Accept": "application/json"},
    )
    with urllib.request.urlopen(req, timeout=40) as resp:
        data = json.loads(resp.read().decode())
    out = []
    for it in data.get("results") or []:
        out.append(
            {
                "title": it.get("title"),
                "url": it.get("url"),
                "thumbnail": it.get("thumbnail"),
                "license": it.get("license"),
                "license_version": it.get("license_version"),
                "license_url": it.get("license_url"),
                "attribution": it.get("attribution"),
                "creator": it.get("creator"),
                "source": it.get("source"),
                "foreign_landing_url": it.get("foreign_landing_url"),
            }
        )
    return out


def run_one(place_id: str, query: str) -> dict:
    row: dict = {"id": place_id, "query": query, "wikimedia": [], "flickr_or_all": []}
    try:
        row["wikimedia"] = openverse_search(query, source="wikimedia")
    except urllib.error.HTTPError as e:
        row["wikimedia_error"] = e.code
    except Exception as e:
        row["wikimedia_error"] = str(e)
    time.sleep(1.2)
    # If Commons-backed results empty, broaden (often Flickr)
    if not row["wikimedia"]:
        try:
            row["flickr_or_all"] = openverse_search(query, source=None)
        except Exception as e:
            row["all_error"] = str(e)
        time.sleep(1.2)
    return row


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--id", help="Single place id")
    ap.add_argument("--query", help="Single Openverse query")
    args = ap.parse_args()

    jobs = DEFAULT_QUERIES
    if args.id and args.query:
        jobs = [(args.id, args.query)]
    elif args.query:
        jobs = [("adhoc", args.query)]

    results = []
    for pid, q in jobs:
        print(f"… {pid}: {q}")
        results.append(run_one(pid, q))

    OUT.parent.mkdir(parents=True, exist_ok=True)
    payload = {
        "generated": time.strftime("%Y-%m-%d"),
        "note": "Review place accuracy before copying URLs into content/place-images.ts",
        "results": results,
    }
    OUT.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n")
    print(f"Wrote {OUT}")


if __name__ == "__main__":
    main()
