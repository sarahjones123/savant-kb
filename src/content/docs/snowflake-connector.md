---
title: "Snowflake connector"
collection: "Connectors & Files"
description: "Read from and write to Snowflake"
order: 2
updated: "2026-05-02"
icon: "snowflake"
---

# Snowflake connector setup

Snowflake is an elastically scalable cloud data warehouse. Connecting Savant to Snowflake requires configuration in both Snowflake and Savant.

Before configuring the Savant connector, create a service account or role in Snowflake with the required permissions to access the warehouses, databases, schemas, tables, and views that Savant needs.

---

## Features

- Read data from Snowflake.
- Write data to Snowflake.

---

## Requirements

Before setting up the Snowflake connector, ensure that you have:

- A Snowflake account with permission to create users, roles, warehouses, and security integrations.
- A Savant role with the required permissions to access Snowflake warehouses, databases, schemas, tables, and views.
- Savant IP addresses whitelisted, if your Snowflake account uses a network policy.
- The required Snowflake warehouse, database, and schema details.

---

## Connection method

Savant supports OAuth-based authentication for Snowflake.

---

## Procedure to configure Snowflake OAuth connection

### Step 1: Create a Savant role in Snowflake

1. Log in to Snowflake as `ACCOUNTADMIN`.

2. Run the following SQL statement to create a Savant role and grant the required permissions.

    ```sql
    CREATE ROLE IF NOT EXISTS savant_role COMMENT = 'Access to selected tables for Savant';

    GRANT ROLE savant_role TO ROLE SYSADMIN;

    GRANT USAGE ON WAREHOUSE "<warehouse>" TO ROLE savant_role;

    GRANT USAGE ON DATABASE "<database>" TO ROLE savant_role;

    GRANT USAGE ON SCHEMA "<database>"."<schema>"
    TO ROLE savant_role;

    GRANT SELECT ON ALL TABLES IN SCHEMA "<database>"."<schema>"
    TO ROLE savant_role;

    GRANT SELECT ON FUTURE TABLES IN SCHEMA "<database>"."<schema>"
    TO ROLE savant_role;

    GRANT SELECT ON ALL VIEWS IN SCHEMA "<database>"."<schema>"
    TO ROLE savant_role;

    GRANT SELECT ON FUTURE VIEWS IN SCHEMA "<database>"."<schema>"
    TO ROLE savant_role;
    ```

---

### Step 2: Create an OAuth security integration

1. Update the `OAUTH_REDIRECT_URI` value based on your Savant region.

    - For the default region, use:

        ```text
        https://app.savantlabs.io/api/callback
        ```

    - For the EU region, use:

        ```text
        https://app-eu.savantlabs.io/api/callback
        ```

2. If your Snowflake network policy blocks public IP addresses, whitelist Savant IP addresses and update the `<network policy>` value.

    If you do not use a network policy, remove the `NETWORK_POLICY` line from the SQL statement.

3. Run the following SQL statement to create the OAuth security integration.

    ```sql
    CREATE SECURITY INTEGRATION SAVANT_CLIENT
    TYPE = OAUTH
    ENABLED = TRUE
    OAUTH_CLIENT = CUSTOM
    OAUTH_CLIENT_TYPE = 'CONFIDENTIAL'
    OAUTH_REDIRECT_URI = 'https://app.savantlabs.io/api/callback'
    OAUTH_ISSUE_REFRESH_TOKENS = TRUE
    OAUTH_REFRESH_TOKEN_VALIDITY = 7776000
    NETWORK_POLICY = '<network policy>';
    ```

---

### Step 3: Retrieve the OAuth client credentials

1. Run the following SQL statement to retrieve the client ID and client secrets.

    ```sql
    SELECT SYSTEM$SHOW_OAUTH_CLIENT_SECRETS('SAVANT_CLIENT');
    ```

2. Copy the following values from the JSON response:

    - Client ID
    - One client secret

    You need these values when configuring the Snowflake connector in Savant.

---

### Step 4: Configure the Snowflake connection in Savant

1. In Savant, open the Snowflake connector setup.
2. Select the **OAuth** connection option.
3. Enter the Snowflake server URL.

    Example:

    ```text
    https://123.us-region1/gcp.snowflakecomputing.com
    ```

4. Enter the **Client ID** retrieved from Snowflake.
5. Enter the **Client Secret** retrieved from Snowflake.
6. Enter `savant_role` in the **Role** field.
7. Enter the Snowflake **Warehouse** and **Database** details.

    You can leave these fields blank if you want to use the Snowflake defaults.

8. Click **Authenticate**.

---

## SSH tunnel

Additional properties are displayed when the **SSH Tunnel** checkbox is selected.

Use this option only if your organization requires Savant to connect to Snowflake through an SSH tunnel.

---

## Troubleshooting

| Issue | Possible resolution |
|------|---------------------|
| OAuth authentication fails | Verify that the `CREATE SECURITY INTEGRATION` statement has no typos and that the `OAUTH_REDIRECT_URI` exactly matches the Savant callback URL. |
| Client secret is rejected | Rerun `SELECT SYSTEM$SHOW_OAUTH_CLIENT_SECRETS('SAVANT_CLIENT');`, copy one secret exactly, and re-enter it in Savant. |
| Permission error occurs | Confirm that `savant_role` has `USAGE` permissions on the warehouse, database, and schema, and `SELECT` permissions on current and future tables and views. |
| Connection times out | Verify that Savant IP addresses are whitelisted in the Snowflake network policy. |
| Query or login errors occur | Review `LOGIN_HISTORY` and `QUERY_HISTORY` in Snowflake. In Savant, enable debug logging to capture HTTP response codes such as `401`, `403`, or `504`. |

---

## Result

The Snowflake connector is configured in Savant using OAuth authentication. Savant can now connect to Snowflake to read and write data based on the permissions granted to `savant_role`.

---

## Where to go next

- [Connectors overview](/savant-kb/docs/connectors-overview)
- [Workflows overview](/savant-kb/docs/workflows-overview)
