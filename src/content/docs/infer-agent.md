---
title: "Infer Agent"
collection: "Agents"
description: "Enrich, classify, and label data with AI – directly inside your analysis."
order: 1
updated: "2026-05-12"
icon: "sparkles"
---

# Infer Agent

Infer Agent brings generative AI into data preparation so users can enrich, classify, label, and standardize data directly inside an analysis. It helps convert raw or incomplete fields into structured, useful outputs that can support reporting, modeling, automation, and operational workflows.

Many datasets contain useful information but lack the context needed for analysis. For example, a job title may exist without seniority, a support ticket may describe an issue without a topic, or a customer comment may include feedback without a sentiment label. Infer Agent helps generate this missing context without requiring users to export data to a separate AI tool or wait for engineering support.

In Savant, Infer Agent uses a prompt-driven approach. Users select an LLM service, define a prompt, choose the fields to transform, and write the AI-generated output back to the dataset as a new AI Answer field.

---

## Features

- Enrich existing data with AI-generated context.
- Classify records by category, topic, entity type, or business dimension.
- Label customer feedback, support tickets, comments, and other text fields.
- Standardize messy or inconsistent free-text inputs.
- Generate structured outputs from existing data fields.
- Process rows using streaming or batch-based execution.
- Preview sampled AI results during development before running the full workflow.

---

## Common use cases

### Fill in missing attributes

Use Infer Agent to infer missing details from related fields and available record context.

For example, you can infer:

- Seniority from a job title.
- Country or region from a city.
- Department from a role description.
- Product category from a description.

### Classify records and topics

Use Infer Agent to assign categories, topics, entity types, or business labels to records.

For example, you can classify:

- Support tickets by issue type.
- Customer comments by topic.
- Accounts by industry.
- Leads by business segment.

### Standardize free-text inputs

Use Infer Agent to convert inconsistent text into cleaner and more structured outputs.

For example, you can standardize:

- Descriptions.
- Notes.
- Addresses.
- Customer-entered values.
- Free-text survey responses.

### Run sentiment analysis at scale

Use Infer Agent to tag feedback, comments, reviews, or support tickets with sentiment labels.

For example:

- Positive
- Negative
- Neutral

### Enrich data for downstream use

Use Infer Agent to generate additional context that improves dashboards, automations, and decision workflows.

For example, you can create:

- Summary fields.
- Risk labels.
- Priority labels.
- Business descriptions.
- Recommended next actions.

---

## How Infer Agent works

Infer Agent is prompt-driven. You define what you want the AI model to generate, select the input fields, and configure how the rows should be processed.

At a high level, the process includes:

1. Select an LLM service.
2. Write a prompt that explains the expected output.
3. Choose the field or fields to transform.
4. Configure the processing method.
5. Apply the configuration during development.
6. Review the generated AI Answer field.
7. Run the full workflow when the prompt output is acceptable.

The model output is written back to the dataset as a new **AI Answer** field.

---

## Model and processing options

Infer Agent is designed to support modern LLM workflows in a governed analytics environment.

Teams can use:

- Savant-managed LLM access for lightweight testing.
- Their own model configuration for broader production use.

Infer Agent also supports different processing approaches based on dataset size and workflow needs:

| Processing option | Description |
|------|-------------|
| Streaming | Processes smaller datasets and provides quicker feedback during development. |
| Batch processing | Processes larger datasets in batches for more scalable execution. |

---

## Development preview behavior

To help conserve LLM usage and make prompt testing easier, Infer Agent samples rows during development.

When you click **Apply** in development mode:

- Savant calculates 5 new records.
- Clicking **Apply** again calculates 5 additional records.
- This continues until the configured maximum is reached.
- When the full workflow runs, all eligible rows are processed.
- Up to 1000 records are visible in the development preview.

This behavior explains why users may not see the entire dataset refreshed immediately while testing or refining prompts.

---

## Prompting best practices

Infer Agent works best when prompts are specific, structured, and clear.

Use the following best practices when writing prompts:

- Clearly describe the task.
- Define the expected output format.
- Use a fixed set of labels when classification is required.
- Specify whether the answer should be short or detailed.
- Include rules for uncertain or missing information.
- Ask the model to return a blank value if the answer cannot be inferred.
- Avoid vague instructions that can produce inconsistent results.

### Example prompt for classification

```text
Classify the support ticket into one of the following categories:
Billing, Login issue, Data issue, Feature request, Other.

Return only the category name. If the category cannot be determined, return Other.
````

### Example prompt for sentiment analysis

```text
Classify the customer comment as Positive, Negative, or Neutral.

Return only one label. If the sentiment is unclear, return Neutral.
```

### Example prompt for enrichment

```text
Infer the likely seniority level from the job title.

Return one of the following values:
Entry level, Manager, Director, Executive, Unknown.

If the seniority cannot be inferred, return Unknown.
```

---

## What makes Infer Agent different

Infer Agent is designed for analytics workflows, not general conversation. The goal is to generate structured, repeatable, and governed outputs inside a dataset.

This makes it useful for analysts who want to use LLMs for data enrichment without leaving the Savant workflow environment.

---

## Best for

Infer Agent is best for teams that want to:

* Enrich incomplete datasets.
* Classify records at scale.
* Label text fields consistently.
* Standardize messy inputs.
* Generate structured AI outputs inside Savant.
* Prepare data for dashboards, automations, models, and operational workflows.

---

## Summary

Infer Agent helps users apply generative AI directly inside Savant analyses. By using prompts and selected input fields, users can generate new structured outputs, classify records, fill missing context, and standardize data without leaving the data preparation workflow.

---

## Where to go next

- [Transform Agent](/savant-kb/docs/transform-agent)
- [Functions reference](/savant-kb/docs/functions-reference)
