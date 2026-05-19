---
title: "Connectors overview"
collection: "Connectors & Files"
description: "How Savant talks to databases, warehouses, SaaS apps, and file systems — securely."
order: 1
updated: "2025-04-18"
icon: "plug"
---

# Connectors overview

Savant ships with 70+ connectors covering databases, warehouses, SaaS apps, file systems, and message queues. Every connector follows the same model.

## The connector model

A connector has three parts:

1. **Connection** — credentials and configuration (stored encrypted, scoped to an environment)
2. **Source / Destination node** — placed on the canvas to read or write
3. **Capabilities** — what the connector supports (schema preview, incremental reads, upserts, etc.)

## Authentication

Connectors support, where the upstream system allows:

- **OAuth 2.0** with token rotation (HubSpot, Salesforce, Google, Microsoft)
- **Key + secret** (AWS, Snowflake, most databases)
- **Service account JSON** (Google Cloud, BigQuery)
- **Username + password** as a last resort

Credentials never appear in workflow definitions — only credential **references** do. This means workflows can move freely between environments.

## Incremental reads

Connectors that support cursors (timestamps, IDs, change tracking) can read **incrementally** — only new or changed rows since the last run. Enable it on the source node:

```yaml
mode: incremental
cursor: updated_at
```

## Writes: append, upsert, replace

| Mode | Behavior | When to use |
|---|---|---|
| Append | Insert new rows | Event logs, audit tables |
| Upsert | Insert or update by key | Mirroring an upstream system |
| Replace | Drop and recreate | Small lookup tables |

## Where to go next

- [Snowflake connector](/docs/snowflake-connector)
- [Excel files](/docs/excel-files)
- [S3 connector](/docs/s3-connector)
