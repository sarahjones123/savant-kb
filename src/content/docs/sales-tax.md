---
title: "Sales & use tax template"
collection: "Templates & Solutions"
description: "Aggregate sales by jurisdiction, apply nexus rules, and produce return-ready filings."
order: 3
updated: "2026-05-07"
icon: "percent"
---

# Sales & use tax

A template that takes raw transaction data and produces return-ready filings for every jurisdiction where you have nexus.

## Inputs

- **Transactions** — order ID, ship-to address, line items, tax collected
- **Nexus matrix** — your jurisdictions and effective dates
- **Rate file** — current rates (Savant ships a maintained version, or bring your own)

## The pipeline

1. **Geocode** ship-to addresses to jurisdictions (state, county, city, special districts).
2. **Apply nexus** — drop transactions outside your jurisdictions, flag new ones.
3. **Compute tax due** vs **tax collected** per jurisdiction.
4. **Aggregate** to filing periods (monthly / quarterly / annual per jurisdiction).
5. **Export** in the format each jurisdiction's portal expects.

## What you get

For every filing period:

- A summary report (PDF) with totals, variances, and exception notes
- A jurisdiction-by-jurisdiction CSV ready for upload
- A reconciliation back to your GL revenue accounts

## Variance handling

When tax collected ≠ tax due:

| Reason | Default action |
|---|---|
| Rate change mid-period | Auto-prorated |
| Exempt customer not flagged | Flagged for review |
| Returned order | Netted in next period |
| Rounding | Tolerated up to $0.05 per transaction |

!!! warning
    This template gives you the calculation. It does not file on your behalf — wire the output CSVs to your filing process or filing partner.

## Where to go next

- [Templates overview](/savant-kb/docs/templates-overview)
- [Functions reference](/savant-kb/docs/functions-reference)
