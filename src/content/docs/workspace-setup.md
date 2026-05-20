---
title: "Workspace setup"
collection: "Getting Started"
description: "Invite teammates, configure roles, and set up environments for safe collaboration."
order: 3
updated: "2026-04-30"
icon: "users"
---

# Workspace setup

A Savant workspace is the boundary for **people, projects, secrets, and audit logs**. Most organizations operate one production workspace and a separate sandbox workspace for experimentation.

## Invite teammates

Go to **Settings → Members** and click **Invite**. Each invitee receives an email and is assigned a role at the workspace level. Roles can be overridden per project.

| Role | Can edit workflows | Can run workflows | Can deploy | Can manage members |
|---|---|---|---|---|
| **Viewer** | No | No | No | No |
| **Runner** | No | Yes | No | No |
| **Builder** | Yes | Yes | No | No |
| **Deployer** | Yes | Yes | Yes | No |
| **Admin** | Yes | Yes | Yes | Yes |

!!! warning
    Only Admins should hold the **Deployer** role in production workspaces. Grant Builders deploy rights only in sandboxes.

## Configure environments

Each workspace ships with **Development** and **Production** environments. Environments isolate:

- Connector credentials
- Secrets (API keys, tokens)
- Schedules

Use the environment switcher in the top bar to move between them. A workflow's logic is the same across environments — only its bindings change.

## Set workspace defaults

Under **Settings → Defaults**, configure:

- Default timezone for schedules
- Default notification channel (Slack, email, webhook)
- Data retention for run history (30 / 90 / 365 days)

## Where to go next

- [Your first workflow](/savant-kb/docs/your-first-workflow)
- [Governance & audit trail](/savant-kb/docs/governance-audit-trail)
