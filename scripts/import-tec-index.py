"""Convert a TEC Concursos index spreadsheet into browser-ready data."""

import json
import sys
from pathlib import Path

import pandas as pd


def build_index(source: Path) -> dict:
    frame = pd.read_excel(source)
    frame.columns = ["hierarchy", "name", "count", "percentage"]
    areas: list[dict] = []
    current_area: dict | None = None
    lookup: dict[str, dict] = {}

    for _, row in frame.iterrows():
        hierarchy = None if pd.isna(row.hierarchy) else str(row.hierarchy)
        item = {
            "code": hierarchy or "",
            "name": str(row["name"]),
            "count": int(row["count"]),
            "percentage": float(str(row["percentage"]).rstrip("%")),
            "children": [],
        }
        if hierarchy is None:
            current_area = item
            areas.append(item)
            lookup = {}
            continue

        if current_area is None:
            raise ValueError("A planilha deve iniciar cada grupo com uma area.")
        parent_code = ".".join(hierarchy.split(".")[:-1])
        parent = lookup[parent_code] if parent_code else current_area
        parent["children"].append(item)
        lookup[hierarchy] = item

    return {
        "sourceUrl": "https://www.tecconcursos.com.br/questoes/cadernos/106372942",
        "sourceLabel": "Indice do Caderno exportado pelo TEC Concursos",
        "totalQuestions": sum(area["count"] for area in areas),
        "areas": areas,
    }


def main() -> None:
    if len(sys.argv) != 3:
        raise SystemExit("Uso: import-tec-index.py entrada.xlsx saida.js")
    source = Path(sys.argv[1])
    destination = Path(sys.argv[2])
    payload = build_index(source)
    destination.write_text(
        "'use strict';\nwindow.TEC_INDEX_DATA="
        + json.dumps(payload, ensure_ascii=False, separators=(",", ":"))
        + ";\n",
        encoding="utf-8",
    )
    print(f"{len(payload['areas'])} areas; {payload['totalQuestions']} questoes; {destination}")


if __name__ == "__main__":
    main()
