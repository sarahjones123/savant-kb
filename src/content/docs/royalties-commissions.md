---
title: "Royalties & commissions template"
collection: "Templates & Solutions"
description: "Tiered comp calculation with clawbacks, splits, and payout file export."
order: 4
updated: "2026-05-03"
icon: "money"
---

# Royalties & commissions

Sales comp is where spreadsheets go to die. This template models tiered plans, splits, accelerators, and clawbacks — and produces a payout file your payroll team can ingest.

## Inputs

- **Deals** — closed transactions with rep, amount, product, close date
- **Plans** — per-role plan definition (base, tiers, accelerators, caps)
- **Quotas** — per-rep, per-period
- **Adjustments** — manual overrides logged with reason

## The pipeline

1. **Allocate** each deal to one or more reps (splits, overlays)
2. **Score** each deal against the rep's plan
3. **Apply tiers and accelerators** at the period level
4. **Net clawbacks** (refunds, churn, returns)
5. **Produce** per-rep statements + a payroll-ready file

## Plan as data, not code

Plans are YAML you can read and review:

```yaml
role: AE
base:
  rate: 0.08
tiers:
  - up_to:   0.7 * quota,  multiplier: 1.0
  - up_to:   1.0 * quota,  multiplier: 1.2
  - up_to:   1.5 * quota,  multiplier: 1.6
  - up_to:   .inf,         multiplier: 2.0
accelerators:
  - product: enterprise,   bonus: 0.02
caps:
  per_deal: 50000
  per_period: 250000
```

## Statements

Each rep gets a one-page PDF with their deals, tier walk, accelerators applied, and net payout. Statements are deterministic — re-running the workflow against the same inputs produces a byte-identical PDF.

## Where to go next

- [Templates overview](/savant-kb/docs/templates-overview)
- [Governance & audit trail](/savant-kb/docs/governance-audit-trail)
