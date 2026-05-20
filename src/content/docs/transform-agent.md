---
title: "Transform Agent"
collection: "Agents"
description: "Reshape tables using natural-language instructions, compiled to deterministic SQL."
order: 2
updated: "2026-05-10"
icon: "wand"
---

# Transform Agent

Transform Agent helps users format, arrange, calculate, and modify data directly inside an analysis. It works like a spreadsheet-style data preparation tool, allowing users to clean, reshape, rename, reorder, calculate, and transform fields without writing code.

The Transform Agent is useful when users need to prepare data before analysis, reporting, automation, or downstream processing. It provides column management tools, calculated columns, expression-based transformations, data type conversion, and field organization options in one place.

---

## Features

- Format and arrange data.
- Rename columns.
- Hide or show fields.
- Reorder fields in the dataset.
- Convert field data types.
- Add calculated columns.
- Transform existing column values.
- Use expressions with Excel-like or SQL-like syntax.
- Use Savant Copilot to generate formulas from natural language.
- Review renamed columns and calculated column order of operations.

---

## Add a Transform Agent

1. Navigate to the required analysis.
2. Click the agent icon.
3. Select **Transform**.
4. Click **Edit in a tab** to open the Transform Agent in a separate tab for detailed analysis and configuration.

---

## Manage columns

The **Managed Columns** tab allows users to search, hide, show, rename, reorder, and transform columns in the dataset.

| Action | Description |
|------|-------------|
| Search columns | Use the search bar to quickly find specific fields or columns within the dataset. |
| Hide or show fields | Use the eye icon next to a field to hide or show it in the analysis. Hidden fields are not deleted; they are only removed from the current view. Click **Apply** to save the change. |
| Convert data types | Click the current data type icon, select the required data type, and click **Apply**. |
| Rename columns | Hover over the column name, click the pencil icon, enter the new column name, and click **Apply**. |
| Jump to column | Use the **Jump to Column** arrow icon to quickly navigate to a specific column in the dataset. |
| Reorder fields | Use the move icon to drag and drop a field to a different position in the table, then click **Apply**. |
| Apply bulk actions | Select the checkboxes next to multiple columns, open the **Actions** dropdown, select the required action, and click **Apply**. |

You can also use the dropdown menu in a column header to access additional options.

| Option | Description |
|------|-------------|
| Move Column | Move the selected column to a different position in the table. |
| Rename Column | Rename the selected column. |
| Transform Column | Apply a custom expression or use the expression builder to transform values in the selected column. |
| Hide Column | Hide the selected column from the analysis view. |
| Insert Column Left | Add a calculated column to the left of the selected column. |
| Insert Column Right | Add a calculated column to the right of the selected column. |

The **Move Column** option includes the following placement choices:

| Placement option | Description |
|------|-------------|
| Beginning | Move the selected column to the first position in the table. |
| End | Move the selected column to the last position in the table. |
| Left | Move the selected column left by the specified number of fields. |
| Right | Move the selected column right by the specified number of fields. |
| Before | Move the selected column before a selected field. |
| After | Move the selected column after a selected field. |

---

## Work with calculated and renamed columns

The **Calculated Columns** tab allows users to add and manage columns derived from existing data. The **Renamed Columns** tab displays columns renamed from the **Managed Columns** tab.

To add a calculated column:

1. From the **Managed Columns** tab, click **+ Column**.
2. In the **Expression Editor**, enter a field name in the **Field Name** box.
3. Build the required expression using Excel-like or SQL-like syntax.
4. Click **Apply**.

Use calculated columns to:

- Perform calculations.
- Combine fields.
- Format values.
- Apply conditional logic.
- Transform text or dates.

You can also use the search bar at the bottom of the **Expression Editor** to find available functions and fields.

To transform values in an existing column:

1. Open the dropdown from the column header.
2. Click **Transform**.
3. Edit the transformation expression.
4. Click **Apply**.

Savant Copilot can suggest usable formulas using natural language. This feature is available in beta.

Use the following icons to manage calculated columns:

| Icon | Description |
|------|-------------|
| Summation icon | Edit a calculated column. |
| Trash can icon | Delete a calculated column. |

The **Calculated Columns** tab also displays the order in which calculated columns are processed. Columns listed first are processed before columns listed later in the list. This order is important when one calculated column depends on the result of another calculated column.

The **Renamed Columns** tab helps users review renamed fields and confirm that the updated column names are correct.

---

## Summary

Transform Agent allows users to prepare and transform data directly inside Savant. Users can manage columns, rename fields, convert data types, create calculated columns, transform existing values, and control the order of calculations without writing code.

---

## Where to go next

- [Functions reference](/savant-kb/docs/functions-reference)
- [Infer Agent](/savant-kb/docs/infer-agent)
