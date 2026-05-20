---
title: "Vision Agent"
collection: "Agents"
description: "Extract structured data from PDFs, scanned documents, and images."
order: 4
updated: "2026-05-06"
icon: "eye"
---

# Vision Agent

The **Vision Agent** turns documents into rows. Point it at a stream of PDFs, scans, or images and a target schema, and it returns structured data — page-by-page, field-by-field, with a confidence per field.

## Supported document types

- **Invoices, bills, receipts** — out-of-the-box schema
- **Bank statements, brokerage statements** — out-of-the-box schema
- **Contracts, NDAs, MSAs** — clause-level extraction
- **Custom forms** — define your own schema in the UI

## Configuration

Point at a source (S3 bucket, SharePoint folder, email inbox) and choose a schema:

```yaml
source: s3://docs/invoices/
schema: invoice
output:
  - vendor_name
  - invoice_number
  - invoice_date
  - line_items[]: { description, qty, unit_price, total }
  - subtotal
  - tax
  - total
```

## Per-field confidence

Vision returns a confidence score for every extracted field, not just per document. This matters: a vendor name might be 0.99 while a hand-written total is 0.62.

Use a **Filter** node downstream to route low-confidence fields to a review queue while letting the rest flow through.

## Cost

Vision is priced per page, not per call. Multi-page documents (e.g. 30-page contracts) are billed for the pages actually processed.

## Where to go next

- [Connectors overview](/savant-kb/docs/connectors-overview)
- [S3 connector](/savant-kb/docs/s3-connector)
