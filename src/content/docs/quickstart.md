---
title: "Quickstart"
collection: "Getting Started"
description: "Build, run, and schedule your first Savant workflow in under ten minutes."
order: 2
updated: "2025-05-12"
icon: "rocket"
---

# Quickstart

This walkthrough takes you from signup to a scheduled, governed workflow in under ten minutes. We'll load a sample CSV, clean it with the **Infer Agent**, and write the result to a destination of your choice.

## Prerequisites

- A Savant workspace (create one at [app.savantlabs.io](https://app.savantlabs.io))
- The sample file `customers_raw.csv` (download from the Quickstart panel inside the app)

## 1. Create a workflow

From the workspace home, click **New Workflow** → **Blank canvas**. Name it `Quickstart`.

## 2. Add a source

Drag a **File → CSV** node onto the canvas and upload `customers_raw.csv`. Click **Preview** to confirm the schema was detected:

```text
id (integer)        name (string)       country (string)      revenue (number?)
```

!!! note
    The `?` next to `revenue` means the column has missing values — perfect for the next step.

## 3. Clean with the Infer Agent

Add an **Infer Agent** node and connect it to the CSV. Configure it:

- **Target column:** `country`
- **Strategy:** Standardize to ISO 3166 country codes
- **Fill missing:** Yes, infer from `name` + free-text address fields

Click **Run step**. Savant will preview the cleaned data and show you exactly which rows changed.

## 4. Write to a destination

Drag a **Destination → Snowflake** node (or any connector you've configured). Map the columns, choose **Append**, and run the full workflow.

## 5. Schedule it

Open the **Schedule** tab and set a cron-like trigger:

```text
Every weekday at 06:00 America/New_York
```

That's it — your workflow now runs automatically every business morning, with every run logged in the audit trail.

!!! tip "Next: make it bulletproof"
    Read [Governance & audit trail](/docs/governance-audit-trail) to learn how to lock down who can edit and who can deploy.

## Where to go next

- [Workspace setup](/docs/workspace-setup)
- [Workflows overview](/docs/workflows-overview)
- [Infer Agent](/docs/infer-agent)
