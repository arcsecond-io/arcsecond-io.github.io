# Cloud Storage

The way Arcsecond store data in the cloud.

::: info
Every portal opened for an organisation has a `subdomain` associated with it. It is used as an identifier throughout.
For instance, the OMA portal is accessible at `https://oma.arcsecond.io`.
:::

## Access

The human interfaces to manage data in the cloud are available at `https://www.arcsecond.io` for individual astronomers,
and `https://<subdomain>.arcsecond.io`. Technically, the data is available through REST API endpoints.

## How data volume is measured ?

We simply follow Amazon rules: every hour, we compute and save the total number of bytes stored by each observatory
individually. On the day of anniversary of the subscription, we compute the sum of all these byte-hours, then divide by
the number of hours in that month, and finally divide by 2<sup>30</sup> to obtain the number of Gibibytes for that
month.

We multiply that number of Gibibytes-month by the price per GB per month.

::: info
1 GB = 1 Gibibytes = 2<sup>30</sup> bytes = 1,073,741,824 bytes.
:::

## How data download cost is computed?

For Observatory Portals that have no public-facing archive portal, the output
bandwidth is included in the fixed-fee part of the subscription.

In the case of a public archive portal, outbound bandwidth (which is not free on
Amazon) will be charged, at a reasonable rate to be discussed.

## How can the members of the Observatory upload data?

The easiest answer is to use [Oort-Cloud](https://docs.arcsecond.io/oort), our open-source uploader tool. A detailed
help is also available with the tool, once it is installed.

Oort provides the necessary login/auth process, it can upload whole folders, associate data with a given telescope etc.

## Is Oort-Cloud a Python module too?

**Yes.** Similarly to the companion open-source tool, the Arcsecond
[CLI](https://docs.arcsecond.io/cli), Oort can be used inside Python code like
any other third-party lib.

Hence, your uploading can be integrated in a custom workflow easily.

## Can members of the Observatory do this all by themselves?

**Yes.** Use your Observatory dedicated API endpoints, starting with
```https://api.arcsecond.io/<subdomain>```

See [API Endpoints](/portals/endpoints).

## What are the technical specifications of Arcsecond Cloud storage?

**Backend:**

| Key                 | Value                                                                                                          |
|:--------------------|:---------------------------------------------------------------------------------------------------------------|
| Provider            | Amazon S3                                                                                                      |
| Bucket region       | `us-east-1` (USA). Other regions (not US) possible                                                             |
| Bucket properties   | Encrypted, private by default                                                                                  |
| File versionning    | Enabled (protection against software and manual deletion).                                                     |
| Replication         | Multi-devices, and multi facilities (See [Amazon S3 FAQ](https://www.amazonaws.cn/en/s3/faqs/)).               |
| Reliability         | 99.99999999999 % (according to Amazon documentation)                                                           |
| Storage class       | `STANDARD_IA` (Infrequent Access, to reduce cost, yet keep high availability). Optional: migrate to `GLACIER.` |
| Volume measurement  | Every hour                                                                                                     |
| Storage limitations | Unlimited volume (files from 1 byte to 5 terabytes).                                                           |

**Arcsecond Services on top of storage:**

| Key                  | Value                                                                                                                                                                   |
|:---------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| APIs                 | Data is accessible through RESTful APIs, which are easily accessible through an open-source CLI/Python module. See [Arcsecond CLI](https://github.io/arcsecond-io/cli). |
| Uploader             | An open-source uploader tool is also available. It can monitor data folders on site to upload automatically. See [Arcsecond Oort](https://github.io/arcsecond-io/oort). |
| Organisation         | Data is organised in datasets, which can be further grouped into packages for easier distribution.                                                                      |
| Tagging              | Unlimited tagging enabled, allowing custom search.                                                                                                                      |
| Permissions          | 5-levels of access permissions: `anonymous`, `guest`, `member`, `admin`, `superadmin`.                                                                                  | 
| Portal               | Powerful interface to browse, search and download datasets & files.                                                                                                     | 
| Previsualisation     | Available for every 2D and 1D FITS HDUs and XISF DataBlock                                                                                                              | 
| Search inside header | Available in portal interface (will be included in APIs in the future).                                                                                                 |
| Observed Targets     | Automatic grouping of observations by targets.                                                                                                                          |
| Night Reconstruction | Automatic reconstruction of individual observing nights, displaying calibration and observations on a night view.                                                       |
| Monitoring           | Available at https://status.arcsecond.io                                                                                                                                |
| Pricing model        | Follows Amazon: you pay for what you store (+ fixed fee). Measured every hour, for every individual organisation.                                                       |
