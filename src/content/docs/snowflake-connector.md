---
title: "Snowflake connector"
collection: "Connectors & Files"
description: "Read from and write to Snowflake — including key-pair auth, RBAC, and warehouse sizing."
order: 2
updated: "2025-05-02"
icon: "snowflake"
---

# Snowflake connector

Savant connects to Snowflake via the standard Snowflake driver. Both reads and writes are supported, including bulk loads via internal stages.

## Create a connection

```yaml
account:    xy12345.us-east-1
warehouse:  SAVANT_WH
database:   ANALYTICS
schema:     PUBLIC
role:       SAVANT_ROLE
auth:       key_pair        # or password
```

!!! tip "Use key-pair auth"
    Snowflake key-pair auth is more secure than password auth and is required by most enterprise security policies. Upload your private key PEM under **Settings → Secrets**.

## Recommended RBAC

Create a dedicated role for Savant:

```sql
CREATE ROLE SAVANT_ROLE;
GRANT USAGE ON WAREHOUSE SAVANT_WH TO ROLE SAVANT_ROLE;
GRANT USAGE ON DATABASE ANALYTICS TO ROLE SAVANT_ROLE;
GRANT USAGE ON SCHEMA ANALYTICS.PUBLIC TO ROLE SAVANT_ROLE;
GRANT SELECT ON ALL TABLES IN SCHEMA ANALYTICS.PUBLIC TO ROLE SAVANT_ROLE;
GRANT INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA ANALYTICS.STAGING TO ROLE SAVANT_ROLE;
```

## Reading

| Mode | Notes |
|---|---|
| Full table | Use for small dimension tables |
| Custom SQL | Any SELECT; schema is inferred from the result |
| Incremental | Provide a monotonically increasing cursor column |

## Writing

Savant bulk-loads via an internal stage by default — much faster than `INSERT` statements for anything over ~10k rows. For upserts, Savant emits a `MERGE` against your key columns.

## Warehouse sizing tips

For most pipelines, an X-Small warehouse with **auto-suspend at 60s** is the right default. Bump up only for one-shot historical loads.

## Where to go next

- [Connectors overview](/docs/connectors-overview)
- [Workflows overview](/docs/workflows-overview)
