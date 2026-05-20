---
title: "Workflows overview"
collection: "Platform Concepts"
description: "Understand Savant's core abstraction: a directed graph of nodes with typed data flowing between them."
order: 1
updated: "2026-05-01"
icon: "workflow"
---

# Workflows overview

A workflow in Savant is a visual sequence of connected steps that moves data from a source, applies transformations or analysis, and sends the results to a destination. Workflows help teams automate repeatable data preparation, reporting, enrichment, and operational processes without manually rebuilding the same logic each time.

Instead of working with disconnected files, formulas, or manual exports, users can build a workflow once and run it whenever updated data is available. This helps reduce manual effort, improve consistency, and make data processes easier to review, reuse, and schedule.

A typical workflow includes:

- **Dataset**: Provides the source data used in the workflow.
- **Agent**: Performs an action on the data, such as transforming, filtering, joining, enriching, or analyzing records.
- **Destination**: Stores or publishes the final output.
- **Run**: Executes the workflow and processes the configured steps.
- **Schedule**: Runs the workflow automatically at a defined time or frequency.

---

## How workflows help teams

Savant workflows help teams:

- Automate recurring data preparation tasks.
- Standardize reporting and analysis processes.
- Reduce manual spreadsheet work.
- Combine data from multiple systems.
- Clean, format, and enrich data before reporting.
- Create repeatable outputs for dashboards, files, and downstream systems.
- Improve visibility into how data is processed from source to destination.

---

## Main workflow components

| Component | Description |
|------|-------------|
| Dataset | Adds source data to the workflow from files, databases, applications, or connected systems. |
| Agent | Applies processing logic to the data, such as transformation, filtering, joining, classification, or enrichment. |
| Canvas | Provides the visual workspace where datasets, agents, and destinations are connected. |
| Destination | Defines where the processed output should be written or published. |
| Run | Executes the workflow using the current configuration. |
| Schedule | Automates workflow execution based on a selected frequency. |
| Results preview | Displays processed data so users can validate the workflow output before publishing. |

---

## Common workflow actions

Users can perform the following actions in a Savant workflow:

- Add datasets from connected systems.
- Combine multiple datasets.
- Clean and format fields.
- Rename, hide, reorder, or transform columns.
- Add calculated fields.
- Filter records based on business rules.
- Enrich data using AI agents.
- Review results before publishing.
- Add destinations for output.
- Run workflows manually.
- Schedule workflows for recurring execution.

---

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

---

## Typical workflow lifecycle

1. **Add source data**  
   Select the dataset or connected system that provides the input data.

2. **Prepare the data**  
   Use agents to clean, format, calculate, filter, join, or enrich the data.

3. **Review the output**  
   Validate the results in the preview to confirm that the workflow produces the expected output.

4. **Add a destination**  
   Configure where the processed data should be saved, exported, or published.

5. **Run the workflow**  
   Execute the workflow to process the latest available data.

6. **Schedule the workflow**  
   Set a recurring schedule if the workflow needs to run automatically.

---

## Workflow canvas

The workflow canvas is the visual area where users build and manage the workflow. It shows how data moves from datasets through agents and into destinations.

On the canvas, users can:

- Add datasets.
- Add agents.
- Connect workflow steps.
- Review the sequence of processing.
- Add destinations.
- Open configuration panels.
- Run or schedule the workflow.

The canvas helps users understand the complete flow of data and makes it easier to identify where each transformation or output is configured.

---

## Agents in a workflow

Agents are processing steps that perform specific actions on the data. Each agent is added to the workflow canvas and configured based on the required task.

Examples of agents include:

- **Transform Agent**: Formats, arranges, calculates, and modifies data.
- **Infer Agent**: Uses AI to enrich, classify, label, or standardize data.
- **Join or combine agents**: Combine data from multiple sources.
- **Filter or rule-based agents**: Limit records based on defined conditions.

Agents help users build reusable data logic without writing code.

---

## Workflow outputs

A workflow output is the processed result generated after the workflow runs. Outputs can be reviewed in Savant or sent to a configured destination.

Common destinations include:

- Files.
- Databases.
- Cloud storage systems.
- Business applications.
- Reporting or downstream workflow systems.

Before publishing the output, users should review the results preview to confirm that the data is accurate and complete.

---

## Scheduling workflows

Scheduling allows users to run workflows automatically without manual execution. This is useful for recurring reports, daily data refreshes, periodic exports, or operational updates.

When scheduling a workflow, users typically define:

- Run frequency.
- Start date and time.
- Output destination.
- Notification or monitoring requirements, if available.

Scheduled workflows help ensure that data outputs stay current and reduce manual follow-up.

---

## Best practices

- Use clear workflow names that describe the business purpose.
- Confirm that the correct dataset is selected before adding agents.
- Review the preview after each major change.
- Keep transformation logic simple and easy to understand.
- Use calculated fields only when needed.
- Validate output before publishing or scheduling.
- Add destinations only after confirming the workflow results.
- Review scheduled workflows periodically to ensure they still meet business needs.

---

## Summary

Savant workflows provide a visual and repeatable way to move data from source to output. By combining datasets, agents, destinations, runs, and schedules, users can automate data preparation, enrichment, reporting, and publishing processes.

A well-designed workflow helps teams reduce manual work, improve consistency, and maintain reliable data outputs across business processes.

---

## Where to go next

- [Agents overview](/savant-kb/docs/agents-overview)
- [Governance & audit trail](/savant-kb/docs/governance-audit-trail)
