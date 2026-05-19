---
title: "Functions reference"
collection: "Reference"
description: "Every built-in function — string, date, math, array, conditional — with examples."
order: 1
updated: "2025-05-12"
icon: "function"
---

# Functions reference

Functions are the deterministic building blocks used in expression fields, Transform nodes, and filters. They mirror SQL semantics but are case-insensitive and null-safe.

## String

| Function | Description | Example |
|---|---|---|
| `UPPER(s)` | Uppercase | `UPPER("acme") → "ACME"` |
| `LOWER(s)` | Lowercase | `LOWER("ACME") → "acme"` |
| `TRIM(s)` | Strip surrounding whitespace | `TRIM("  a  ") → "a"` |
| `SUBSTR(s, start, len?)` | Substring | `SUBSTR("abcdef", 2, 3) → "bcd"` |
| `REGEXP_EXTRACT(s, pattern)` | First match group | `REGEXP_EXTRACT("inv-42", "(\\d+)") → "42"` |
| `SPLIT(s, sep)` | Split into array | `SPLIT("a,b,c", ",") → ["a","b","c"]` |

## Date

| Function | Description |
|---|---|
| `DATE(s)` | Parse a date string |
| `NOW()` | Current UTC timestamp |
| `TODAY()` | Today's date in workspace TZ |
| `DATE_ADD(d, n, unit)` | Add (`day`, `month`, `year`) |
| `DATE_DIFF(a, b, unit)` | Difference |
| `DATE_TRUNC(d, unit)` | Truncate to start of unit |

## Math

`ABS`, `ROUND(x, n)`, `FLOOR`, `CEIL`, `SIGN`, `SQRT`, `POW(x, n)`, `MOD(x, n)`, `RANDOM()`.

## Conditional

```text
IF(cond, then, else)
CASE WHEN c1 THEN v1 WHEN c2 THEN v2 ELSE v3 END
COALESCE(a, b, c, ...)
NULLIF(a, b)         -- null when a = b
```

## Array

| Function | Description |
|---|---|
| `ARRAY_LENGTH(a)` | Length |
| `ARRAY_CONTAINS(a, x)` | Membership |
| `ARRAY_JOIN(a, sep)` | Join to string |
| `ARRAY_DISTINCT(a)` | Dedup |
| `ARRAY_SORT(a)` | Sort ascending |

## Run context

Available in any expression:

| Variable | Description |
|---|---|
| `run.id` | Unique run identifier |
| `run.date` | Logical run date |
| `run.triggered_by` | `schedule`, `manual`, `api`, `webhook` |
| `run.workflow_version` | Immutable workflow hash |

## Where to go next

- [Keyboard shortcuts](/docs/keyboard-shortcuts)
- [Transform Agent](/docs/transform-agent)
