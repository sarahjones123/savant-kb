---
title: "Infer Agent"
collection: "Agents"
description: "Use AI to fill missing values, standardize formats, and classify rows."
order: 1
updated: "2025-05-12"
icon: "sparkles"
---

# Infer Agent

The **Infer Agent** is the workhorse for cleaning data. It fills blanks, standardizes formats, and classifies rows — using rules first, models only when needed.

!!! tip "When to use"
    Reach for Infer when your data is mostly fine but has gaps, inconsistent capitalization, mixed country names ("USA" vs "United States"), or messy free-text categories.

## How it works

For each target column, Infer follows a three-stage strategy:

1. **Rule pass** — applies any deterministic rules you provide (regex, dictionaries, value maps).
2. **Lookup pass** — checks reference tables you've attached (e.g. an ISO country code table).
3. **Model pass** — only for the rows still unresolved, calls the chosen model with the row context.

Every output cell is tagged with the stage that produced it, so you can audit exactly how each value was derived.

## Configuration

| Field | Description |
|---|---|
| Target column | The column to clean or fill |
| Strategy | Standardize / Classify / Fill missing |
| Reference table | Optional lookup table for the lookup pass |
| Context columns | Other columns the agent can read for context |
| Confidence threshold | Rows below this go to the review queue |
| Model tier | Fast / Balanced / Best |

## Example: standardize country codes

```yaml
target: country
strategy: standardize
output_format: iso_3166_alpha_2
context: [name, billing_address, email]
threshold: 0.85
```

Input:

| name | country | billing_address |
|---|---|---|
| Acme GmbH | Germany | Berlin |
| Globex Co | | London, UK |
| Initech | usa | Austin, TX |

Output:

| country | _confidence | _stage |
|---|---|---|
| DE | 0.99 | rule |
| GB | 0.93 | model |
| US | 0.99 | rule |

## Cost & latency

Rows resolved by the rule and lookup passes are essentially free. Only the model pass costs tokens. Most production workflows resolve **70–95%** of rows before any model call.

## Where to go next

- [Transform Agent](/docs/transform-agent)
- [Functions reference](/docs/functions-reference)
