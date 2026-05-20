---
title: "Your first workflow"
collection: "Getting Started"
description: "A guided build of a realistic three-step workflow with branching and notifications."
order: 4
updated: "2026-05-05"
icon: "workflow"
---

# Your first workflow

The [Quickstart](/savant-kb/docs/quickstart) got you running in ten minutes. This guide goes one step deeper: a realistic three-step workflow with branching, error handling, and a Slack notification.

## The scenario

You receive a daily **orders.csv** drop in S3. You need to:

1. Validate the file (reject and notify if it's empty or malformed).
2. Enrich each order with the customer's tier from your CRM.
3. Append to a Snowflake table and post a summary to Slack.

## Step 1 — Read with validation

Add an **S3** source pointing at `s3://drops/orders/{date}.csv`. In the node's **Validation** tab, add:

```yaml
required_columns: [order_id, customer_id, amount, currency]
min_rows: 1
on_failure: branch
```

A red **failure** port appears on the node. Drag it to a **Slack** node configured to ping #ops with the validation error.

## Step 2 — Enrich from CRM

Add a **HubSpot** source (or your CRM of choice) and join it to the orders stream using a **Fuse Agent**:

- Left key: `customer_id`
- Right key: `hubspot_contact_id`
- Strategy: exact match, fall back to fuzzy on email if not found

The Fuse Agent emits a confidence score per row. Add a **Filter** node downstream that routes rows below `0.8` to a manual-review table.

## Step 3 — Land and announce

Append the enriched stream to `analytics.orders_enriched` in Snowflake. Then add a final **Slack** node:

```text
:white_check_mark: Orders for {{run.date}} processed
- {{count.rows}} rows landed
- {{count.review}} flagged for review
```

!!! tip
    Variables like `{{run.date}}` and `{{count.rows}}` come from Savant's run context — see [Functions reference](/docs/functions-reference).

## Where to go next

- [Workflows overview](/savant-kb/docs/workflows-overview)
- [Fuse Agent](/savant-kb/docs/fuse-agent)
- [S3 connector](/savant-kb/docs/s3-connector)
