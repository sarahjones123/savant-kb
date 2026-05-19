---
title: "Fuse Agent"
collection: "Agents"
description: "Probabilistic joins for entities that don't share a clean key."
order: 3
updated: "2025-05-09"
icon: "link"
---

# Fuse Agent

The **Fuse Agent** joins two tables when there's no clean shared key — for example, matching invoices in your AP system to vendor records that someone typed by hand.

## How it differs from a SQL JOIN

A SQL `JOIN` requires exact matches. Fuse uses a multi-signal scoring model:

- **Exact match** on any provided strong key (highest score)
- **Fuzzy string** similarity on name fields
- **Phonetic** match (Soundex / Metaphone) for typos
- **Domain knowledge** (email domain, address tokens, tax IDs)

Each candidate pair gets a score 0–1. You set the threshold; everything above auto-matches, everything below routes to review.

## Configuration

```yaml
left: ap_invoices
right: vendor_master
keys:
  - left: vendor_name,      right: name,        weight: 0.5, mode: fuzzy
  - left: tax_id,           right: ein,         weight: 0.4, mode: exact
  - left: invoice_address,  right: hq_address,  weight: 0.1, mode: fuzzy
threshold: 0.8
```

## Output

Fuse emits a join with extra columns:

| ... | _fuse_score | _fuse_explain |
|---|---|---|
| ... | 0.97 | exact tax_id, name fuzzy 0.94 |
| ... | 0.72 | name fuzzy 0.72, address mismatch |

The `_fuse_explain` column makes review fast — a human can read it and decide in seconds.

!!! tip
    Start with a high threshold (`0.9`) and lower it after seeing the review queue. Most teams settle around `0.82–0.85`.

## Where to go next

- [Match Agent](/docs/match-agent) — when you need transitive entity resolution
- [Financial reconciliation template](/docs/financial-reconciliation)
