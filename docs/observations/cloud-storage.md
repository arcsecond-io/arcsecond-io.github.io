<script setup>
import {ref} from 'vue'
const collabMembers = ref(5)
const gigabytesVolume = ref(1000)
</script>

# Arcsecond Cloud Storage

Arcsecond Cloud Storage is an unlimited highly secured read-write storage based on Amazon AWS S3 bucket. Every account
or observatory portal is backed by this storage by default.

To upload data to it, you can use the web interfaces in https://www.arcsecond.io, in the portal(s) you are a member of,
or using [Oort](https://docs.arcsecond.io/oort), our open-source
uploader ([available on GitHub](https://github.com/arcsecond-io/oort)).

## How data volume is measured ?

We simply follow Amazon rules: every hour, we compute and save the total number of bytes stored by each observatory
individually. On the day of anniversary of the subscription, we compute the sum of all these byte-hours, then divide by
the number of hours in that month, and finally divide by 2<sup>30</sup> to obtain the number of Gibibytes for that
month.

We multiply that number of Gibibytes-month by the price per GB per month.

::: info
1 GB = 1 Gibibytes = 2<sup>30</sup> bytes = 1,073,741,824 bytes.
:::

## Are the first 50 GB(-month) free?

**Yes.**

But once you reach that point, you pay the full volume. We think this give you enough time and room to validate the
service. Note that 50GB in AWS costs about 1 (one) $US per month.

## Where is the data stored?

The data is stored in Amazon S3 in the US (where the servers are, as well as more than 50% of our users).
The data of a user X is stored in a dedicated folder. This folder contains only data user X has uploaded,
since data of Arcsecond.io itself is not stored in the same bucket.

Likewise, for observatory portals.

## How data download cost is computed?

For Observatory Portals that have no public-facing archive portal, the output
bandwidth is included in the fixed-fee part of the subscription.

In the case of a public archive portal, outbound bandwidth (which is not free on
Amazon) will be charged, at a reasonable rate to be discussed.

## Is output bandwidth taken into account?

No, even if AWS charges us for that. We think bandwidth will be covered by margins on subscriptions.

## Can I remove all my data from arcsecond.io?

**Of course.**

Deleting data on arcsecond.io will delete files on the Amazon S3 folder, then remove any associated
metadata we have on our database. Apart from some logfiles whose lifetime is limited, there is no
trace anymore of your data on our system.

## How can the members of the Observatory upload data?

The easiest answer is to use [Oort-Cloud](https://docs.arcsecond.io/oort), our open-source uploader tool. A detailed
help is also available with the tool, once it is installed.

Oort provides the necessary login/auth process, it can upload whole folders, associate data with a given telescope etc.

## Is Oort-Cloud a Python module too?

**Yes.** Similarly to the companion open-source tool, the Arcsecond
[CLI](https://docs.arcsecond.io/cli), Oort can be used inside Python code like
any other third-party lib.

Hence, your uploading can be integrated in a custom workflow easily.

## What are the technical specifications of Arcsecond Cloud storage?

**Backend:**

| Key                 | Value                                                                                                          |
|:--------------------|:---------------------------------------------------------------------------------------------------------------|
| Provider            | Amazon S3                                                                                                      |
| Bucket region       | `us-east-1` (USA).                                                                                             |
| Bucket properties   | Encrypted, private by default                                                                                  |
| File versioning     | Enabled (protection against software and manual deletion).                                                     |
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

## Arcsecond Cloud Storage vs Dropbox

If you have to choose where to store data, you may want to compare Arcsecond storage with Dropbox. Below, we provide
some hints to help you. 

If you have already a Dropbox account with data, there is no need to move them to Arcsecond. Simply 
[attach it to your Arcsecond account](./external-storage-dropbox.md) to enjoy Arcsecond features on it.

## Is Arcsecond really cheaper than Dropbox?

It depends. Honestly, the comparison is difficult, since we use different pricing models. Dropbox uses a
constant prices per month, and split features into different plans. We choose to offer a purely linear
pricing for storage, and the same features for everyone.

Arcsecond solution is dedicated to astronomical data, can be associated with real observations
and night logs, and you pay for what you store. Dropbox business is software-enhanced
*document* storage.

In other words, our storage has fewer features, but the ones available are made for astronomers.

## What are the key price differences with Dropbox?

**There is no upfront entry payment in Arcsecond.** You can start using and testing
the storage right away.

**For sharing data, Arcsecond is cheaper**, because it does not depend on the number of people. See simulation below.

For storing larger amounts of data alone or with 1 or 2 colleagues only, Arcsecond is more expensive, obviously (there
is no magic, Dropbox like Gmail long ago, relies on the fact that few people will actually fill their entire storage
space). See below for a simulation.

## Dropbox vs Arcsecond prices comparison

For instance: take a group of
<input type="number" :min="1" :max="1000" :step="1" v-model="collabMembers"
style="font-size: large; border: 1px solid lightgray; padding: 2px; border-radius: 5px;"
/>
people:

* The [Dropbox Standard team plan](https://www.dropbox.com/plans) costs US$ {{ collabMembers * 15 }} / month (or US$ {{
  collabMembers * 12.5 }} / year).
* Arcsecond's Data Central for an Observatory Portal is US$ 50 / month + storage, **whatever
  the number of people.**
