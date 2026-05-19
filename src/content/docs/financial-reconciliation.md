---
title: "Financial reconciliation template"
collection: "Templates & Solutions"
description: "Match transactions between your bank statement and general ledger, surface breaks, and produce auditor-ready evidence."
order: 2
updated: "2025-05-10"
icon: "balance"
---

# Financial reconciliation

This template reconciles transactions between a bank statement (or any external source of truth) and a general ledger. It produces three outputs:

1. **Matched** — rows that tie, with the matching rule recorded
2. **Breaks** — rows on one side without a partner, grouped by reason
3. **Evidence pack** — signed PDF for your auditor

## The pipeline

```text
[Bank file] ─┐
             ├─► [Normalize] ─► [Fuse: amount+date±2d, memo fuzzy] ─► [Classify breaks] ─► [Outputs]
[GL extract]─┘
```

## What you customize

- **Sources** — point at your bank file (CSV / OFX) and your GL extract (Snowflake / NetSuite / SAP)
- **Match tolerances** — the date window and amount tolerance (default ±2 days, ±$0.01)
- **Break categorization rules** — timing, in-transit, FX, duplicate, missing
- **Reviewer assignment** — who gets each break category in Slack/email

## Break categorization

The template classifies every break:

| Category | Rule |
|---|---|
| Timing | Match exists in the next period |
| In transit | Wire or ACH note in memo, no GL entry yet |
| FX | Match within 1% if rate adjusted |
| Duplicate | More than one candidate match |
| Unknown | Routed to a human |

## Audit evidence

On every run, the template assembles a PDF including:

- The matched/break counts and dollar totals
- A sample of each break category
- The exact workflow version hash and run ID
- A cryptographic signature of the inputs

Drop it directly into your audit folder.

## Where to go next

- [Fuse Agent](/docs/fuse-agent)
- [Governance & audit trail](/docs/governance-audit-trail)
