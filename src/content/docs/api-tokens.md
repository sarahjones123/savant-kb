---
title: "API tokens"
collection: "Reference"
description: "Trigger workflows, fetch run results, and manage resources programmatically."
order: 3
updated: "2025-04-15"
icon: "key"
---

# API tokens

Most of Savant is usable over the public API: trigger workflows, fetch run results, list workspaces, manage connections. The API is REST + JSON.

## Create a token

**Settings → API tokens → New token**. Tokens are scoped to a workspace and a role. Treat them like passwords — they cannot be retrieved after creation.

```bash
export SAVANT_TOKEN=sk_live_...
export SAVANT_WORKSPACE=ws_abc123
```

## Trigger a workflow

```bash
curl -X POST https://api.savantlabs.io/v1/workflows/wf_orders/runs \
  -H "Authorization: Bearer $SAVANT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{ "params": { "as_of": "2025-05-12" } }'
```

Returns a `run_id` immediately. The run executes asynchronously.

## Poll a run

```bash
curl https://api.savantlabs.io/v1/runs/$RUN_ID \
  -H "Authorization: Bearer $SAVANT_TOKEN"
```

States: `queued`, `running`, `succeeded`, `failed`, `cancelled`.

## Webhooks instead of polling

Configure a webhook under **Settings → Webhooks** to receive POSTs on run state transitions. Payloads are HMAC-signed; verify with the secret shown when you created the hook.

## Rate limits

| Plan | Requests / minute | Concurrent runs |
|---|---|---|
| Starter | 60 | 5 |
| Business | 600 | 50 |
| Enterprise | Custom | Custom |

429 responses include a `Retry-After` header.

!!! warning
    Never embed tokens in client-side code. Tokens are server credentials. For browser-based integrations, proxy through your own backend.

## Where to go next

- [Governance & audit trail](/docs/governance-audit-trail)
- [Workspace setup](/docs/workspace-setup)
