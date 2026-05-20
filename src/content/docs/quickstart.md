---
title: "Quickstart"
collection: "Getting Started"
description: "Build, run, and schedule your first Savant workflow in under ten minutes."
order: 3
updated: "2026-05-12"
icon: "rocket"
---

# Quickstart

Use this quickstart guide to create your first Savant workflow, run it, review the results, and schedule it for recurring execution. This article is intended for new users who want to quickly understand the basic workflow creation process in Savant.

---

## Before you begin

Ensure that you have:

- A valid Savant account.
- Access to your organization’s Savant workspace.
- Permission to create and run workflows.
- Access to the required data source or sample data.
- The required destination or output location, if you want to export results.

---

## Procedure to create your first workflow

### Step 1: Access your workspace

1. Sign in to **Savant**.
2. Select your organization’s workspace from the workspace dropdown.
3. Confirm that you are in the correct workspace before creating the workflow.

---

### Step 2: Create a workflow

1. From the workspace, select **Create**.
2. Select **Workflow**.
3. Enter a clear workflow name.
4. Select **Create** to open the workflow canvas.

---

### Step 3: Add a data source

1. On the workflow canvas, select **Add source**.
2. Choose the required data source.
3. Connect to the source using the available connection options.
4. Select the table, file, or dataset you want to use.
5. Preview the data to confirm that the correct source is selected.

---

### Step 4: Prepare the data

1. Add the required preparation steps, such as:
    - Filtering rows.
    - Selecting columns.
    - Renaming fields.
    - Changing data types.
    - Removing duplicates.
    - Creating calculated fields.

2. Review the preview after each step to confirm that the data is transformed correctly.

---

### Step 5: Add an output

1. Select **Add destination** or **Output**.
2. Choose where the workflow results should be saved.
3. Configure the output settings, such as file name, table name, or destination folder.
4. Save the output configuration.

---

### Step 6: Run the workflow

1. Select **Run**.
2. Wait for the workflow execution to complete.
3. Review the run status.
4. Open the output or results preview to verify that the workflow generated the expected data.

---

### Step 7: Schedule the workflow

1. Select **Schedule**.
2. Choose how often the workflow should run.
3. Set the start date and time.
4. Confirm the schedule settings.
5. Save the schedule.

---

## Troubleshooting

| Issue | Possible resolution |
|------|---------------------|
| You cannot create a workflow | Confirm that you have permission to create workflows in the selected workspace. |
| You cannot connect to a data source | Verify that the connection is configured and that you have access to the source. |
| The data preview does not load | Refresh the source, check connection permissions, and try again. |
| The workflow run fails | Review the error message, check each workflow step, and rerun the workflow. |
| The output is missing | Confirm that the destination is configured correctly and that the workflow completed successfully. |
| The schedule does not run | Verify that the schedule is enabled and that the workflow has no unresolved errors. |

---

## Result

Your first Savant workflow is created, executed, and scheduled. You can now use the workflow to automate recurring data preparation, analysis, and reporting tasks.