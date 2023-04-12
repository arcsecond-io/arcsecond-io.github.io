Data & Observations Overview
===

Arcsecond aims at providing a consistent platform for astronomical observers, being single or grouped into an
organisation (such as an astronomy club, or an observatory - see [Observatory Portals](/portals/) made for that).

As such, Arcsecond offers solutions for astronomical data alone, for observations alone, and for the combination of
the two (where things become clearly more interesting).

Arcsecond Cloud Storage vs External Storages
---

The principle is the following. With each personal account, and identically, with each Observatory Portal, comes the
[Arcsecond Cloud storage](./cloud-storage.md) by default. It is an unlimited read-write storage (you can upload, modify,
delete your files) based on secured Amazon AWS S3 buckets.

In addition to that, multiple External Storages can be attached to the above account or portal. There is no restrictions
on the number of storages one can attach to an account or portal. These are read-only storages and Arcsecond will not
modify anything in them. Credentials will have to be provided, and will be stored encrypted and securely sealed in
Arcsecond ([read more](./credentials-security.md)).

Find tutorials on how to provide credentials for your external storages in:

* [Amazon AWS S3 buckets](./external-storage-aws.md)
* [Dropbox](./external-storage-dropbox.md)
* FTP (coming soon)
* Local disk (coming with self-hosted Arcsecond, later in 2023)

For each account or portal, based on the accessible storages, Arcsecond will be able to extract and organise information
about your nights and observed targets.

![Overview of Observations & Data](/images/observations-data-overview.png){data-zoomable}

Arcsecond will parse content of external storages, identically to what it does on its
own [Cloud Storage](/observations/cloud-storage) when data is uploaded to it. This parsing allows to:

* Extract FITS- and XISF-files headers, for easy searching in a web interface,
* Create 2D-image and 1D-spectrum previews (stored in Arcsecond Cloud storage, within the 50GB limit, unless you unlock
  more),
* **Create your personal list of all your observed targets, associated with its data** (this will combine all cloud and
  external storages you have attached),
* Reconstruct your observing nights (when possible).

:::info
We are working on an option to restrict the parsing to specific (sub)folder(s).
:::

