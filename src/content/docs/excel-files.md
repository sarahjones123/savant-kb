---
title: "Files overview"
collection: "Connectors & Files"
description: "Working with files in Savant."
order: 1
updated: "2026-04-28"
icon: "sheet"
---


# Files overview

Savant supports common file types and enterprise file systems used in data workflows. You can use files as input sources, process them in workflows, and write the results back to supported file destinations.

This article describes the file types supported in Savant, the read and write limits for each file type, and the file system connectors available for sourcing and storing files.

---

## Supported file types

Savant supports the following file types as input sources and output targets in workflows.

### Flat files

Flat files are plain-text tabular files where each row represents a record and each column represents a field.

Savant supports the following flat file formats:

- `.csv`: Comma-separated values.
- `.tsv`: Tab-separated values.
- `.txt`: Tab-separated values.

### Text blobs

A text blob is a plain-text file that Savant reads as a single block of content instead of reading it row by row.

Use text blobs when working with unstructured or semi-structured text, such as:

- Exported logs.
- Raw API responses.
- Large freeform documents.
- Text files that should not be treated as tables.

### Spreadsheets

Savant supports Microsoft Excel and Google Sheets formats.

Supported spreadsheet formats include:

- `.xlsx`: Microsoft Excel workbook.
- `.xls`: Legacy Microsoft Excel workbook.
- `.xlsm`: Microsoft Excel macro-enabled workbook.
- `.xlsb`: Microsoft Excel binary workbook.
- Google Sheets: Connected through the Google Drive file system or Google Sheets direct connector.

### PDF

Savant supports `.pdf` files for read and write operations.

PDF extraction capabilities depend on the structure of the document. For example, extraction behavior may vary depending on whether the PDF contains selectable text, scanned images, tables, or mixed content.

### Parquet

Savant supports `.parquet` files for columnar data workloads.

Parquet is recommended for large-scale dataset processing because it is optimized for efficient storage and analytical workloads.

---

## Read and write limits

The following table summarizes the read and write size limits by file type. Limits apply per file and per operation.

| Extension | Type | Read limit | Write limit |
|------|------|------------|-------------|
| `.csv` | Comma-separated flat file | 1 GB | 1 GB |
| `.tsv` | Tab-separated flat file | 1 GB | 1 GB |
| `.txt` | Flat file or text blob | 1 GB | 1 GB |
| `.xlsx` | Excel spreadsheet | 1 GB | 1 GB ¹ |
| `.xls` | Legacy Excel spreadsheet | 50 MB | N/A |
| `.xlsm` | Excel macro-enabled spreadsheet | 1 GB | 1 GB ¹ |
| `.xlsb` | Excel binary spreadsheet | 1 GB | N/A |
| `.gsheet` | Google Sheets | 1 GB | 1 GB ² |
| `.pdf` | PDF | 1 GB | 1 GB |
| `.parquet` | Parquet | 1 GB | 1 GB |

¹ When writing spreadsheets through the Microsoft OneDrive or SharePoint connectors, the write limit is **250 MB**. This limit is imposed by the Microsoft Graph API and applies regardless of file format.

² When writing spreadsheets through Google Drive, the worksheet is limited to **10 million cells**. This limit is imposed by Google Sheets and includes both empty and populated cells.

---

## File type guides

Each file type has its own configuration options, parsing behavior, and known limitations.

Select the appropriate guide based on the file type you want to use:

- Flat files and text blobs
- Spreadsheets, including Excel and Google Sheets
- PDF
- Parquet

---

## File system connectors

Savant integrates with common enterprise file systems. Each connector is configured separately and may have its own authentication method, path format, and performance considerations.

For setup instructions and connector-specific limits, refer to the individual connector guides:

- Microsoft OneDrive
- Microsoft SharePoint
- Google Drive
- Box
- Dropbox
- SFTP/FTP

---

## Summary

Savant provides native support for common enterprise file formats and file systems. You can read supported files into workflows, process the data, and write results back to supported destinations while following the file-specific size limits and connector-specific constraints.

---

## Where to go next

- [Google Sheets](/savant-kb/docs/google-sheets)
- [S3 connector](/savant-kb/docs/s3-connector)
