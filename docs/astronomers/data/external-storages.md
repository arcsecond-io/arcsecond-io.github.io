# Arcsecond Cloud Storage vs External Storages

External Storages are existing data storages owned by an astronomer, or an Observatory Portal. Arcsecond allows to
attach them to the account or portal. There is no restrictions on the number of storages one can attach to an account or
portal. These are read-only storages and Arcsecond will not modify anything in them. Credentials will have to be
provided, and will be stored encrypted and securely sealed in Arcsecond ([read more](./credentials-security.md)).

Find tutorials on how to provide credentials for your external storages in:

* [Amazon AWS S3 buckets](./external-storage-aws.md)
* [Dropbox](./external-storage-dropbox.md)
* [Azure](./external-storage-dropbox.md) (`in preparation`)
* FTP
* SFTP
* Local disk (coming with self-hosted Arcsecond, `in preparation`)
* Archives (ESO, CADC, HST, etc – `in preparation`)

For each account or portal, based on the accessible storages, Arcsecond will be able to extract and organise information
about your nights and observed targets.

![Overview of Observations & Data](/images/observations-data-overview.png){data-zoomable}

Arcsecond will scan and parse content of external storages, identically to what it does on its
own [Cloud Storage](/observations/cloud-storage) when data is uploaded to it. This parsing allows to:

* Extract FITS- and XISF-files headers, for easy searching in a web interface,
* Create 2D-image and 1D-spectrum previews (stored in Arcsecond Cloud storage, within the 10GB limit, unless you unlock
  more),
* **Create your personal list of all your follow-up targets, associated with its data** (this will combine all cloud and
  external storages you have attached),
* Reconstruct your observing nights (when possible).

:::info
We are working on an option to restrict the parsing to specific (sub)folder(s).
:::

