---
title: "Transform Agent"
collection: "Agents"
description: "Reshape tables using natural-language instructions, compiled to deterministic SQL."
order: 2
updated: "2025-05-10"
icon: "wand"
---

# Transform Agent

The **Transform Agent** lets you reshape data with a natural-language instruction. Under the hood, it compiles your instruction into deterministic SQL or DataFrame code — which you can review and pin.

## The pattern

You give Transform:

- An input table (with schema)
- A goal in plain English
- Optional examples (input row → expected output row)

It returns:

- A proposed transformation (SQL or Python)
- A preview against your sample
- A confidence assessment

You approve it once. After that, the **code** runs — not the LLM.

!!! warning
    Always review and pin a Transform Agent before deploying to production. Re-prompting on every run is non-deterministic and unnecessarily expensive.

## Example

**Input:** `orders` — one row per line item

| order_id | sku | qty | unit_price |
|---|---|---|---|
| 1001 | A | 2 | 10.00 |
| 1001 | B | 1 | 25.00 |
| 1002 | A | 3 | 10.00 |

**Instruction:**

> Roll up to one row per order with total quantity, total amount, and a comma-separated list of SKUs.

**Generated SQL:**

```sql
SELECT
  order_id,
  SUM(qty)               AS total_qty,
  SUM(qty * unit_price)  AS total_amount,
  STRING_AGG(sku, ',')   AS skus
FROM orders
GROUP BY order_id
```

Click **Pin** and Transform stops calling the model — it runs the SQL on every subsequent execution.

## When to use Transform vs writing SQL yourself

Use Transform when:

- The reshape is obvious to a human but tedious to type
- You want a fast first draft to refine
- Non-engineers need to express the requirement

Write SQL directly when:

- The logic is genuinely complex and you want full control
- You already have the query

## Where to go next

- [Functions reference](/docs/functions-reference)
- [Infer Agent](/docs/infer-agent)
