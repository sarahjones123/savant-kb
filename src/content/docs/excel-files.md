---
title: "Excel files"
collection: "Connectors & Files"
description: "Read multi-sheet workbooks, named ranges, and pivot-style headers from .xlsx files."
order: 3
updated: "2025-04-28"
icon: "sheet"
---

# Excel files

Savant reads `.xlsx` and `.xls` files natively, including multi-sheet workbooks, named ranges, and the awkward report formats real businesses actually produce.

## Sources

| Source | Use when |
|---|---|
| **Upload** | Ad-hoc / quickstart |
| **Email inbox** | Vendor sends weekly attachment |
| **SharePoint / OneDrive** | Internal finance / ops files |
| **S3 / GCS / Azure Blob** | Programmatic drops |

## Sheet selection

Configure which sheets to read:

```yaml
sheets: all                    # or [Sheet1, Q1 2025, Q2 2025]
add_sheet_column: true         # adds a _sheet column to the output
```

## Awkward headers

Real Excel files often have:

- A title row
- A blank row
- Merged header cells spanning two rows
- A "Total" row at the bottom

Configure all of this without writing code:

```yaml
header_rows:  [4, 5]      # 1-indexed; merges them
skip_top:     3
skip_bottom:  1
```

!!! tip
    Click **Preview** after every change — Savant shows you exactly what it parsed against the raw file side-by-side.

## Type inference

By default, Savant infers types per column. You can override:

```yaml
columns:
  invoice_date: { type: date,   format: "MM/DD/YYYY" }
  amount:      { type: number, currency: USD }
```

## Where to go next

- [Google Sheets](/docs/google-sheets)
- [S3 connector](/docs/s3-connector)
