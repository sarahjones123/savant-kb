---
title: "Functions reference"
collection: "Reference"
description: "Every built-in function — string, date, math, array, conditional — with examples."
order: 1
updated: "2026-05-12"
icon: "function"
---

# Functions reference

Savant functions help users transform, format, calculate, classify, and enrich data inside workflows. Functions can be used in calculated columns, transformations, and expression-based logic to prepare data for analysis, reporting, and automation.

---

## Date and DateTime

| Name | Description | Syntax |
|------|-------------|--------|
| DATETIME | Creates a datetime based on the provided year, month, day, hour, minute, and second values. | `DATETIME(year, month, day, hour, minute, second)` |
| DATE | Creates a date based on the provided year, month, and day values. | `DATE(year, month, day)` |
| DATE_ADD | Adds a specified offset of time to a date or datetime. | `DATE_ADD(date, offset, "second/minute/hour/day/month/year")` |
| DATE_DIFF | Calculates the difference between two dates. | `DATE_DIFF(end_date, start_date, "second/minute/hour/day/week/month/quarter/year")` |
| DAY | Retrieves the day of the month from a date or datetime. | `DAY(date)` |
| DAY_OF_WEEK | Determines the day of the week for a date or datetime. | `DAY_OF_WEEK(date, ["monday/tuesday/wednesday/thursday/friday/saturday/sunday"])` |
| DAY_OF_YEAR | Calculates the day of the year for a date or datetime. | `DAY_OF_YEAR(date)` |
| DAYS_IN_MONTH | Calculates the number of days in the month for a date or datetime. | `DAYS_IN_MONTH(date)` |
| DAYS_IN_YEAR | Calculates the number of days in a year, including leap years. | `DAYS_IN_YEAR(date)` |
| HOUR | Extracts the hour from a datetime. | `HOUR(datetime)` |
| INTERVAL (Date) | Adds days, weeks, months, quarters, or years to a date. | `date + INTERVAL number DAY/MONTH/YEAR` |
| INTERVAL (DateTime) | Adds seconds, minutes, or hours to a datetime. | `datetime + INTERVAL number SECOND/MINUTE/HOUR` |
| LIST_TO_TEXT | Concatenates inputs from a list variable into text. | `LIST_TO_TEXT(list)` |
| MINUTE | Extracts the minute from a datetime. | `MINUTE(datetime)` |
| MONTH | Retrieves the month from a date. | `MONTH(date)` |
| NOW | Retrieves the current date and time. | `NOW()` |
| QUARTER | Retrieves the quarter of the year from a date or datetime. | `QUARTER(date)` |
| SECOND | Extracts the second from a datetime. | `SECOND(datetime)` |
| TIME_PERIOD | Returns a standard time period for a date or datetime field. | `TIME_PERIOD(date, "day"/"week"/"month"/"quarter"/"year")` |
| TIME_PERIOD_OFFSET | Calculates the number of time periods between a date and the current period. | `TIME_PERIOD_OFFSET(date, "day"/"week"/"month"/"quarter"/"year"/"decade")` |
| TODAY | Retrieves the current date. | `TODAY()` |
| WEEK / WEEK_OF_YEAR | Determines the week number of the year for a date or datetime. | `WEEK(date)` |
| YEAR | Retrieves the year from a date or datetime. | `YEAR(date)` |

---

## Formatting

| Name | Description | Syntax |
|------|-------------|--------|
| TO_BOOLEAN | Converts a value to a boolean format. | `TO_BOOLEAN(value)` |
| TO_DATETIME | Converts text to datetime format. | `TO_DATETIME(text)` |
| TO_DATE | Converts text to date format. | `TO_DATE(text)` |
| TO_INTEGER | Converts a value to an integer. | `TO_INTEGER(value)` |
| TO_NUMBER | Converts a value to number format. | `TO_NUMBER(value)` |
| TO_TEXT | Converts a value to text format. | `TO_TEXT(value)` or `TO_TEXT(datetime, "[format]")` |

---

## Geospatial

| Name | Description | Syntax |
|------|-------------|--------|
| GEO_AREA | Calculates the area of a polygon in square miles or square kilometers. | `GEO_AREA(geometry, [unit])` |
| GEO_BUFFER | Creates a buffer polygon around a geometry at a specified distance. | `GEO_BUFFER(geometry, distance, [unit])` |
| GEO_CENTROID | Returns the geometric center point of a polygon or multi-geometry. | `GEO_CENTROID(geometry)` |
| GEO_DIFFERENCE | Returns the portion of the first geometry that does not overlap with the second geometry. | `GEO_DIFFERENCE(geometry1, geometry2)` |
| GEO_INTERSECTION | Returns the overlapping portion of two geometries. | `GEO_INTERSECTION(geometry1, geometry2)` |
| GEO_ISVALID | Validates whether a geometry is topologically valid. | `GEO_ISVALID(geometry)` |
| GEO_PERIMETER | Calculates the perimeter length of a polygon in miles or kilometers. | `GEO_PERIMETER(geometry, [unit])` |
| GEO_POINT | Creates a point geometry from longitude and latitude coordinates. | `GEO_POINT(longitude, latitude)` |
| GEO_SPATIAL_DISTANCE | Calculates the distance between two geometries. | `GEO_SPATIAL_DISTANCE(geometry1, geometry2, [unit])` |
| GEO_TRADE_AREA | Creates a radius-based trade area polygon around a point. | `GEO_TRADE_AREA(point, radius, [unit])` |
| GEO_TYPE | Returns the geometry type, such as Point, Polygon, or LineString. | `GEO_TYPE(geometry)` |
| GEO_UNION | Combines two geometries into a single geometry. | `GEO_UNION(geometry1, geometry2)` |

---

## Keywords

| Name | Description | Syntax |
|------|-------------|--------|
| CASE...WHEN... | Evaluates conditions and returns a value based on the first true condition. | `CASE WHEN condition1 THEN result1 WHEN condition2 THEN result2 ELSE default_result END` |
| IN | Checks if a value exists within a specified set of values. | `IN (..., ...)` |

---

## Logical

| Name | Description | Syntax |
|------|-------------|--------|
| IFS | Returns a value corresponding to the first true condition. | `IFS(condition1, value1, condition2, value2, ...)` |
| IF | Returns one value if a condition is true and another value if false. | `IF(condition, value when true, value when false)` |

---

## Math

| Name | Description | Syntax |
|------|-------------|--------|
| ABS | Returns the absolute value of a number. | `ABS(number)` |
| CEIL | Rounds a number up to the nearest integer. | `CEIL(number)` |
| FLOOR | Rounds a number down to the nearest integer. | `FLOOR(number)` |
| GEO_DISTANCE | Calculates the distance between two points. | `GEO_DISTANCE(lat1, long1, lat2, long2, [unit])` |
| GREATEST | Returns the greatest value among the given arguments. | `GREATEST(arg1, arg2, ...)` |
| LEAST | Returns the smallest value among the given arguments. | `LEAST(arg1, arg2, ...)` |
| LOG | Calculates the logarithm of a number to a specified base. | `LOG(number, base)` |
| MOD | Returns the remainder of a division operation. | `MOD(dividend, divisor)` |
| POWER | Raises a number to the power of another number. | `POWER(number, exponent)` |
| RANDOM | Generates a random decimal value between 0 and 1. | `RANDOM()` |
| ROUNDDOWN | Rounds a number down to the nearest integer. | `ROUNDDOWN(number)` |
| ROUNDUP | Rounds a number up to the nearest integer. | `ROUNDUP(number)` |
| ROUND | Rounds a number to a specified number of decimal places. | `ROUND(number, [decimals])` |

---

## Multi-row aggregation and windowing

| Name | Description | Syntax |
|------|-------------|--------|
| AVG | Calculates the average value of numbers. | `AVG(number)` |
| CONCAT | Combines all text values. | `CONCAT(text)` |
| CONCAT_DISTINCT | Combines unique text values. | `CONCAT_DISTINCT(text)` |
| COUNT | Counts the number of values. | `COUNT(arg)` |
| COUNT_DISTINCT | Counts the distinct number of values. | `COUNT_DISTINCT(arg)` |
| CUMULATIVE_SUM | Calculates the running sum. | `CUMULATIVE_SUM(number)` |
| FILL | Populates missing values using values above or below the row. | `FILL(arg)` |
| FIRST | Returns the first-row value. | `FIRST(arg)` |
| LAG | Returns the previous-row value. | `LAG(arg)` |
| LAST | Returns the last-row value. | `LAST(arg)` |
| LEAD | Returns the next-row value. | `LEAD(arg)` |
| MAX | Returns the maximum value. | `MAX(arg)` |
| MEDIAN | Returns the median value. | `MEDIAN(number)` |
| MIN | Returns the minimum value. | `MIN(arg)` |
| NTILE | Assigns a bucket number based on the number of tiles requested. | `NTILE(arg)` |
| RANK | Assigns a rank to each row, with ties receiving the same rank. | `RANK()` |
| ROW_NUM | Assigns a row number to each row, with ties receiving different values. | `ROW_NUM()` |
| STDDEV | Calculates the standard deviation of numbers. | `STDDEV(number)` |
| SUM | Calculates the sum of numbers. | `SUM(number)` |
| VAR | Calculates the variance of numbers. | `VAR(number)` |

---

## Text

| Name | Description | Syntax |
|------|-------------|--------|
| COALESCE | Returns the first non-null value from a list of options. | `COALESCE(option1, option2, ...)` |
| CONCAT | Concatenates multiple text values into a single text value. | `CONCAT(text1, text2, ...)` |
| CONTAINS | Determines whether a specified subtext exists within text. | `CONTAINS(text, subtext)` |
| FIRST_NOT_EMPTY | Returns the first non-empty value from a list of options. | `FIRST_NOT_EMPTY(option1, option2, ...)` |
| HASH | Computes the hash value of text using MD5 or SHA-1. | `HASH("md5"/"sha1", text)` |
| HTML_ESCAPE | Escapes HTML special characters in text. | `ESCAPE_HTML(text)` |
| IS_EMPTY | Checks if a value or field is empty. | `IS_EMPTY(arg)` |
| JSON_FIELD | Extracts a specific field from JSON data. | `JSON_FIELD(json, json_path)` |
| JSON_SET | Sets a value for a specific field in JSON data. | `JSON_SET(json, json_path, value)` |
| JWT_ENCODE | Encodes a JSON Web Token using an algorithm, key, payload, and optional header. | `JWT_ENCODE(algorithm, key, payload_json_text, [header_json_text])` |
| LEFT_PART | Retrieves the leftmost characters from text. | `LEFT_PART(text, number)` |
| LENGTH | Computes the number of characters in text. | `LENGTH(text)` |
| LEVENSHTEIN | Measures the edit distance between two text values. | `LEVENSHTEIN(text1, text2)` |
| LOWER | Converts text to lowercase. | `LOWER(text)` |
| MID | Extracts a portion of text from a specified position. | `MID(text, start, [length])` |
| PAD_LEFT | Adds padding characters to the left side of text. | `PAD_LEFT(text, length, character)` |
| PAD_RIGHT | Adds padding characters to the right side of text. | `PAD_RIGHT(text, length, character)` |
| PROPER | Capitalizes the first letter of each word in text. | `PROPER(text)` |
| REGEX_EXTRACT | Extracts text that matches a regular expression pattern. | `REGEX_EXTRACT(text, "pattern", [offset])` |
| REGEX_MATCH | Checks if text matches a regular expression pattern. | `REGEX_MATCH(text, "pattern")` |
| REGEX_REPLACE | Replaces text that matches a regular expression pattern. | `REGEX_REPLACE(text, "pattern", replacement)` |
| REGEX_SEARCH | Returns the index of the first matching subtext based on a regular expression pattern. | `REGEX_SEARCH(text, "pattern", [offset])` |
| REPEAT | Repeats text a specified number of times. | `REPEAT(text, number)` |
| REPLACE | Replaces all occurrences of search text with replacement text. | `REPLACE(text, search, replace)` |
| REVERSE | Reverses the order of characters in text. | `REVERSE(text)` |
| RIGHT_PART | Extracts the rightmost characters from text. | `RIGHT_PART(text, number)` |
| SEARCH | Searches for subtext and returns the index of the first occurrence. | `SEARCH(text, search)` |
| SOUNDEX | Converts text to a SOUNDEX code for phonetic matching. | `SOUNDEX(text)` |
| SPLIT_PART | Extracts a specific part of text using a delimiter. | `SPLIT_PART(text, delimiter, part)` |
| TRIM | Removes leading and trailing spaces. | `TRIM(text)` |
| UNESCAPE_HTML | Converts HTML escape sequences back to original characters. | `UNESCAPE_HTML(text)` |
| UPPER | Converts text to uppercase. | `UPPER(text)` |

---

## Where to go next

- [Keyboard shortcuts](/savant-kb/docs/keyboard-shortcuts)
- [Transform Agent](/savant-kb/docs/transform-agent)
