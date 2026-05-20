---
title: "Amazon S3 connector"
collection: "Connectors & Files"
description: "Read and write objects in S3 with prefix templates, partitioning, and IAM role auth."
order: 3
updated: "2026-04-20"
icon: "cloud"
---

# AWS S3 connector setup

Amazon S3 is a cloud object storage service used to store and manage files. Connecting Amazon S3 to Savant allows users to read files from S3, use them as datasets in workflows, and publish processed data back to S3 as an output destination.

Savant connects to Amazon S3 using an **Access Key ID** and **Secret Access Key** generated from AWS Identity and Access Management (IAM). These credentials allow Savant to authenticate with AWS and access the selected S3 files or folders based on the permissions assigned to the IAM user.

---

## Features

- Read data from Amazon S3.
- Add S3 files as datasets in Savant workflows.
- Publish processed data back to Amazon S3.
- Configure file type, file path, folder path, and output file settings.

---

## Requirements

Before setting up the Amazon S3 connector, ensure that you have:

- An active AWS account.
- Access to the AWS IAM console.
- Permission to create or use an IAM access key.
- An Access Key ID and Secret Access Key for the IAM user.
- The AWS region associated with the S3 bucket.
- Access to the required S3 bucket, file, or folder.
- Required permissions to read from or write to the S3 location.

---

## Connection method

Savant connects to Amazon S3 using an **Access Key ID** and **Secret Access Key**.

---

## Procedure to configure Amazon S3 connection

### Step 1: Generate AWS access credentials

1. Log in to the AWS Management Console.
2. Open the **IAM** console.
3. Click your username in the upper-right corner.
4. Select **Security Credentials**.
5. Scroll to the **Access keys** section.
6. Click **Create access key**.
7. Copy and securely store the generated credentials:

    - Access Key ID
    - Secret Access Key

!!! tip "Note"
    The **Secret Access Key** can be viewed or downloaded only once. Save it in a secure location before closing the window.
    

---

### Step 2: Add Amazon S3 as a system in Savant

1. In Savant, go to **Data > Systems**.
2. Click **New System**.
3. Select **Amazon S3** from the available connector options.
4. Click **Next**.
5. Enter the required authentication details.

    | Field | Description |
    |------|-------------|
    | Access Key ID | Enter the Access Key ID generated from AWS IAM. |
    | Secret Access Key | Enter the Secret Access Key generated from AWS IAM. |
    | Region | Enter the AWS region associated with the S3 bucket. |

6. Click **Authenticate**.
7. Enter a system name and description.
8. Click **Next**.

---

### Step 3: Configure the S3 dataset

1. Select the required file type.
2. Enter the number of files to use.
3. Paste the S3 file URL in the required field.
4. Click **Next**.

The Amazon S3 system is authenticated and ready to be added as a dataset in Savant.

---

## Connect data from Amazon S3

Use this procedure to add the authenticated Amazon S3 system as a dataset in a Savant analysis.

### Step 1: Add the S3 dataset from the canvas

1. Open the required analysis.
2. On the canvas, click **Add Dataset**.
3. Select your Amazon S3 connection.
4. Click **Next**.
5. Configure the dataset details as required.
6. Add the dataset to the analysis.

### Step 2: Add the S3 dataset from the Data menu

If you are not currently in an analysis:

1. Go to **Data > New Dataset**.
2. Select the authenticated Amazon S3 system from the available options.
3. Click **Next**.
4. Configure the dataset details as required.

The Amazon S3 system is added as a dataset in Savant.

---

## Publish data to Amazon S3

Use this procedure to publish workflow output back to Amazon S3.

### Step 1: Add an S3 destination

1. Open the completed analysis.
2. On the left side of the canvas, click **Add Destination**.
3. Select your Amazon S3 destination.

    If you need to add a new S3 system, click **New System** and complete the authentication steps again.

4. Enter a destination name and description.
5. Click **Next**.

### Step 2: Configure the S3 destination

1. In the destination configuration window, select the required file type.
2. Enter the S3 folder link.
3. Configure the output file name.
4. If the output file type is Excel, configure the sheet or tab name.
5. Click **Apply**.

---

## Troubleshooting

| Issue | Possible resolution |
|------|---------------------|
| Authentication fails | Verify that the Access Key ID, Secret Access Key, and AWS region are correct. |
| Secret Access Key is unavailable | Create a new access key in AWS IAM because the Secret Access Key can be viewed only once. |
| S3 file cannot be accessed | Confirm that the IAM user has permission to read the selected S3 bucket or file. |
| S3 destination cannot be written | Confirm that the IAM user has write permission for the selected S3 folder. |
| Region error occurs | Verify that the selected region matches the region where the S3 bucket is hosted. |
| Dataset does not load | Confirm that the file URL, file type, and number of files are configured correctly. |
| Output file is not created | Verify the destination folder link, file name, and write permissions. |

---

## Result

The Amazon S3 connector is configured in Savant. You can now read files from Amazon S3, use them as datasets in Savant workflows, and publish processed workflow results back to Amazon S3.

---

## Where to go next

- [Connectors overview](/savant-kb/docs/connectors-overview)
- [Workflows overview](/savant-kb/docs/workflows-overview)
