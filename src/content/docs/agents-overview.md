---
title: "Agents overview"
collection: "Platform Concepts"
description: "AI agents are the building blocks for inference, transformation, matching, and document extraction."
order: 2
updated: "2026-05-08"
icon: "sparkles"
---

# Agents overview

**Agents** are AI-powered nodes that handle the messy parts of data work — the parts that traditionally require either brittle regex or a human reviewer.

Every agent in Savant is:

- **Governed** — every decision is logged with the model used, the prompt, the inputs, and a confidence score
- **Deterministic where possible** — agents prefer rules and lookups, falling back to LLM calls only when needed
- **Reviewable** — low-confidence rows route to a queue, not a hallucination

## The agent family

| Agent | Purpose | Typical input | Typical output |
|---|---|---|---|
| [Infer](/savant-kb/docs/infer-agent) | Fill, classify, normalize | Sparse / dirty columns | Cleaned, typed columns |
| [Transform](/savant-kb/docs/transform-agent) | Reshape with natural language | Any table | Reshaped table |
| [Fuse](/savant-kb/docs/fuse-agent) | Probabilistic join / match | Two tables | Joined table with confidence |
| [Vision](/savant-kb/docs/vision-agent) | Extract from documents/images | PDFs, scans, images | Structured rows |
| [Match](/savant-kb/docs/match-agent) | Entity resolution | Two entity lists | Match groups |

## When to use an agent vs a function

Use a **function** when the rule is crisp: `upper()`, `coalesce()`, `date_diff()`.

Use an **agent** when the rule is fuzzy: "match these even when the names differ" or "extract the invoice number from this PDF."

!!! tip
    Always start with functions. Reach for an agent only when you'd otherwise need a human or a regex you'll regret.

## Cost and governance

Agents call models. Every call is metered and visible in **Settings → Usage**. You can:

- Set per-workflow budgets
- Choose the model tier (Fast / Balanced / Best)
- Pin a workflow to a specific model version for reproducibility

## Where to go next

- [Infer Agent](/savant-kb/docs/infer-agent)
- [Governance & audit trail](/savant-kb/docs/governance-audit-trail)
