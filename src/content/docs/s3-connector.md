---
title: "Amazon S3 connector"
collection: "Connectors & Files"
description: "Read and write objects in S3 with prefix templates, partitioning, and IAM role auth."
order: 5
updated: "2025-04-20"
icon: "cloud"
---

# Amazon S3 connector

The S3 connector reads and writes objects of any format Savant supports — CSV, Parquet, JSON Lines, Avro, Excel, PDFs, images.

## Authentication

| Method | When to use |
|---|---|
| **IAM role assumption** | Recommended for production (cross-account) |
| **Access key + secret** | Quick start, dev workspaces |
| **Workload identity** | When Savant runs in your VPC |

## Prefix templates

Use templates to read time-partitioned drops:

```yaml
bucket: drops.acme.com
key:    orders/{yyyy}/{mm}/{dd}/orders.parquet
mode:   incremental_by_partition
```

The `{yyyy}/{mm}/{dd}` placeholders resolve from the run's logical date. Switch to `mode: glob` to read all matching keys instead.

## Writing partitioned output

```yaml
bucket:     analytics.acme.com
key:        orders_enriched/{yyyy}/{mm}/{dd}/part-{n}.parquet
format:     parquet
compression: zstd
partition_by: [country]
```

## Performance notes

- **Parquet** is the right default for analytical pipelines — 5–10x smaller than CSV, with predicate pushdown.
- For files larger than 1 GB, enable **multipart upload** (default for Parquet/Avro, opt-in for CSV).
- For very wide reads, use **glob mode with parallelism** (default 8 workers).

## Where to go next

- [Connectors overview](/docs/connectors-overview)
- [Workflows overview](/docs/workflows-overview)
