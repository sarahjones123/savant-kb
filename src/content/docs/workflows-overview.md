---
title: "Workflows overview"
collection: "Platform Concepts"
description: "Understand Savant's core abstraction: a directed graph of nodes with typed data flowing between them."
order: 1
updated: "2025-05-01"
icon: "workflow"
---

# Workflows overview

A **workflow** is a directed acyclic graph of **nodes** with typed **streams** flowing between them. It is Savant's core abstraction — everything else (agents, connectors, templates) plugs into it.

## Anatomy of a workflow

```text
[ Source ] ──► [ Transform ] ──► [ Agent ] ──► [ Destination ]
                                   │
                                   └──► [ Branch ] ──► [ Slack ]
```

Each node has:

- **Inputs** — zero or more typed streams arriving from upstream
- **Configuration** — UI-driven settings, plus optional code
- **Outputs** — one or more typed streams, each with a schema

## Streams are typed and observable

When you connect two nodes, Savant infers and locks the schema at the seam. Downstream nodes get autocomplete on column names, and a schema drift in the source surfaces as a workflow-level warning before the run starts — never as a 3 a.m. failure.

You can click any edge to see:

- The schema at that point
- A live sample (first 100 rows)
- The number of rows that crossed it on the last run

## Execution model

Workflows run as **pipelines** — Savant streams data through nodes in parallel where possible. A single run produces:

| Artifact | Where it lives |
|---|---|
| Input snapshots | Run inspector (retention configurable) |
| Per-node outputs | Run inspector |
| Logs | Run inspector + your logging sink |
| Lineage graph | Governance tab |

## Workflows vs jobs vs runs

- **Workflow** — the design (the graph)
- **Run** — a single execution of a workflow
- **Job** — a scheduled or triggered series of runs

## Where to go next

- [Agents overview](/docs/agents-overview)
- [Governance & audit trail](/docs/governance-audit-trail)
