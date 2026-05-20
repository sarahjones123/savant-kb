---
title: "Match Agent"
collection: "Agents"
description: "Entity resolution across two or more lists — find the same thing under different names."
order: 5
updated: "2026-05-04"
icon: "merge"
---

# Match Agent

The **Match Agent** answers a different question than Fuse: *"which of these rows describe the same real-world thing?"* It clusters entities **within** and **across** tables.

## When to use Match

- Deduplicating a customer list where the same customer appears as "Acme", "Acme Inc.", and "Acme, Incorporated"
- Resolving people across HR, payroll, and Active Directory
- Building a unified product catalog from multiple supplier feeds

## How it works

Match builds a graph: each row is a node, each high-confidence similarity is an edge. Connected components become **match groups**.

It also handles **transitive** matches: if A matches B (0.9) and B matches C (0.9), A and C are placed in the same group even if their direct similarity is only 0.6.

## Configuration

```yaml
inputs: [customers_us, customers_eu, salesforce_accounts]
keys:
  - field: name,    mode: fuzzy,    weight: 0.6
  - field: domain,  mode: exact,    weight: 0.3
  - field: country, mode: exact,    weight: 0.1
threshold: 0.82
output: match_group_id
```

## Output

Each input row gets a `match_group_id`. Rows in the same group are the same entity. Use a downstream **Aggregate** node to merge them into a golden record.

!!! tip
    For your first run, set `output_review: true`. Match will produce an HTML review file you can scan in minutes to validate the threshold before turning it loose.

## Where to go next

- [Fuse Agent](/savant-kb/docs/fuse-agent)
- [Templates overview](/savant-kb/docs/templates-overview)
