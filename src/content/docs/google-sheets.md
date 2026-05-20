---
title: "Google Sheets"
collection: "Connectors & Files"
description: "Read and write live Google Sheets — by URL, with named ranges, and through service accounts."
order: 4
updated: "2026-04-25"
icon: "sheet"
---

# Google Sheets

The Google Sheets connector reads and writes live sheets. Most teams use it as a lightweight UI for non-technical reviewers.

## Authentication

Two options:

- **OAuth** — best for individual users; the connection acts as that user
- **Service account** — best for production; share each sheet with the service account's email

## Reading

Configure by URL or by spreadsheet ID + sheet name:

```yaml
spreadsheet:  https://docs.google.com/spreadsheets/d/1ABCxyz.../edit
sheet:        Reviewed Items
range:        A1:Z          # optional; defaults to full sheet
header_row:   1
```

## Writing

Three modes:

| Mode | Behavior |
|---|---|
| Overwrite | Clear sheet, write rows |
| Append | Add rows below existing data |
| Upsert | Update rows matching a key, append the rest |

## Patterns that work

- **Review queues** — write low-confidence rows to a sheet, let analysts edit, read them back on the next run.
- **Lookup tables** — let business users own dictionaries (account mappings, exclusion lists) without touching the workflow.
- **Status dashboards** — write a one-row summary on every run for finance to glance at.

!!! warning
    Google Sheets has hard limits (10M cells per spreadsheet, ~5M cell-edits/minute API). For datasets above a few hundred thousand rows, write to a warehouse instead and connect the sheet via Connected Sheets.

## Where to go next

- [Excel files](/savant-kb/docs/excel-files)
- [Snowflake connector](/savant-kb/docs/snowflake-connector)
