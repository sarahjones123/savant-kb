---
title: "Governance & audit trail"
collection: "Platform Concepts"
description: "Every decision in Savant is logged, attributable, and reproducible — by design."
order: 3
updated: "2026-04-22"
icon: "shield"
---

# Governance & audit trail

Finance, audit, and regulated teams adopt Savant because **every output can be traced back to every input** — automatically, without you having to instrument anything.

## What gets logged

For every run, Savant records:

- The exact workflow version that ran (immutable hash)
- The model versions used by any agents
- The connector credentials used (by reference, never the secret)
- A sample of inputs and outputs at every edge
- Who triggered the run, and how (manual, scheduled, API)

## The lineage graph

Every output cell has a back-pointer to the source rows that produced it. Click a cell in the run inspector → **Trace lineage** to see:

```text
output[42].total ──► transform[3].sum ──► source[s3://drops/orders/2025-05-12.csv]:rows[11..18]
```

This is the single fastest way to answer the question *"where did this number come from?"*

## Approvals and locked versions

For sensitive workflows, enable **Require approval to deploy** in the workflow settings. The flow becomes:

1. A Builder edits and tests in the Development environment.
2. They open a **Promote to Production** request.
3. A Deployer reviews the diff (node-by-node) and approves or rejects.
4. The approved version is hashed and locked — any further edit creates a new version.

## Exporting the audit trail

For SOC 2 / SOX evidence, export runs as a signed JSON bundle:

```bash
savant audit export \
  --workflow orders-enrichment \
  --from 2025-01-01 --to 2025-03-31 \
  --out q1-evidence.json
```

The bundle includes a cryptographic manifest so auditors can verify nothing has been tampered with after export.

## Where to go next

- [Workspace setup](/savant-kb/docs/workspace-setup)
- [API tokens](/savant-kb/docs/api-tokens)
