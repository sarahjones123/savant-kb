---
title: "ADP connector"
collection: "Connectors & Files"
description: "Guide to Connecting ADP to Savant."
order: 3
updated: "2026-04-20"
icon: "cloud"
---

# ADP connector setup

ADP is a workforce and payroll management platform. Connecting ADP to Savant allows users to sync workforce, payroll, time, and related HR data into Savant workflows for reporting, analysis, and automation.

This connector supports OAuth-based authentication and requires configuration in the ADP Developer Portal before the connection can be completed in Savant.

---

## Features

- Read data from an ADP account using prebuilt schemas and query options.
- Write data to ADP for select supported objects.

---

## Requirements

Before setting up the ADP connector, ensure that you have:

- An active ADP account, such as ADP Workforce Now.
- Access to the ADP Developer Portal.
- Administrative privileges to register and manage applications.
- Required ADP APIs provisioned for your account.
- Client ID and Client Secret generated from the ADP application.
- SSL client certificate and certificate password.
- Permission to authorize application access in ADP.

---

## Connection method

Savant supports OAuth authentication for ADP.

---

## Procedure to configure ADP OAuth connection

### Step 1: Register an application in the ADP Developer Portal

1. Log in to the **ADP Developer Portal**.
2. Go to **My Apps > Create App**.
3. Complete the application form.

    | Field | Description |
    |------|-------------|
    | App Name | Enter the application name, such as `Savant ADP Connector`. |
    | Redirect URI | Enter `https://app.savantlabs.io/api/callback`. |

4. Under **Product API Access**, select the required APIs based on your integration needs.

    - HR.v2
    - Workers API
    - Work Assignment API
    - Work Schedules API
    - Worker Management API
    - Applicant Onboard V2 API
    - Payroll Data Input API
    - Payroll Output API
    - Team Time Cards API
    - Time Cards API
    - Time Off Balances API
    - Time Off Request API
    - Validation Table Code List API

5. Click **Create App**.

6. After the application is created, copy and securely store the following credentials:

    - Client ID
    - Client Secret
    - SSL Client Certificate, such as `.pfx` or `.pem`
    - Certificate password

    !!! note "Note"

        Set a secure password when downloading the SSL client certificate. You need this password when configuring the ADP connector in Savant.

7. Confirm that your ADP account is provisioned for the selected APIs.

    If any required API is unavailable, contact your ADP representative to enable access.

---

### Step 2: Configure permissions and OAuth scopes

1. Ensure the required OAuth scopes are granted for the selected ADP APIs.

2. Use the following scope mapping as a reference.

    | API | Required OAuth Scopes |
    |------|-----------------------|
    | Workers API | `workers:read` |
    | Work Assignment API | `workAssignments:read:write` |
    | Work Schedules API | `workSchedules:read:write` |
    | Worker Management API | `workerManagement:read:write` |
    | Applicant Onboard V2 API | `applicantOnboard:read:write` |
    | Payroll Data Input API | `payrollDataInput:read:write` |
    | Payroll Output API | `payrollOutput:read` |
    | Team Time Cards API | `teamTimeCards:read` |
    | Time Cards API | `timeCards:read` |
    | Time Off Balances API | `timeOffBalances:read` |
    | Time Off Request API | `timeOffRequests:read` |
    | Validation Table Code List API | `validationTables:read` |
    | Organizations API, if used | `organizations:read` |

---

### Step 3: Connect ADP to Savant

1. In Savant, go to **Systems > Add System**.
2. Select the **ADP** connector.
3. Click **Next**.
4. Enter the required connection details.

    | Field | Description |
    |------|-------------|
    | Client ID | Enter the Client ID generated from the ADP application. |
    | Client Secret | Enter the Client Secret generated from the ADP application. |
    | Base URL | Enter the ADP API base URL. Usually, this is `https://api.adp.com`. |
    | SSL Client Certificate | Upload the SSL client certificate downloaded from ADP. |
    | Certificate Password | Enter the password created when downloading the certificate. |

5. Click **Authenticate** to start OAuth authentication.
6. Sign in to ADP when prompted.
7. Grant the required access.
8. After successful authorization, ADP redirects you back to Savant.
9. Click **Confirm** to complete the connector setup.

---

## Troubleshooting

| Issue | Possible resolution |
|------|---------------------|
| Authentication fails | Verify that the Client ID and Client Secret are correct. |
| Redirect error occurs | Ensure the redirect URI in ADP exactly matches `https://app.savantlabs.io/api/callback`. |
| Authorization fails | Confirm that your ADP user has permission to authorize application access. |
| API access is unavailable | Verify that the required API products are provisioned in the ADP Developer Portal. |
| Scope-related errors occur | Confirm that the selected APIs have the required OAuth scopes. |
| Large syncs fail or timeout | Use incremental syncs or contact support if you are ingesting large volumes. |
| Certificate authentication fails | Confirm that the uploaded certificate is valid and that the certificate password is correct. |

---

## Result

The ADP connector is configured in Savant using OAuth authentication. Savant can now read supported workforce, payroll, time, and HR data from ADP and write data to supported ADP objects based on the configured permissions.

---

## Where to go next

- [Connectors overview](/savant-kb/docs/connectors-overview)
- [Workflows overview](/savant-kb/docs/workflows-overview)
