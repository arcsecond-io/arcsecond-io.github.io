# External Storages

**External Storages** are existing data storages you already own — as an
individual astronomer or as an organisation running Arcsecond.local. You attach
them to your install so their content is indexed alongside the data Arcsecond.local
holds itself. There is no limit on the number of storages you can attach.

Attached storages are **read-only**: Arcsecond.local never modifies anything in
them. Credentials are provided once, then stored encrypted and securely sealed
(read more in [Credentials & Security](./credentials-security)).

Find tutorials on how to provide credentials for your external storages in:

* [Amazon AWS S3 buckets](./external-storage-aws.md)
* [Dropbox](./external-storage-dropbox.md)
* [Local disk](./external-storage-localdisk.md)
* [FTP](./external-storage-ftp.md)
* [SFTP](./external-storage-sftp.md)
* [Azure](./external-storage-azure.md) (`in preparation`)
* [Archives](./external-storage-archives.md) (ESO, CADC, HST, etc — `in preparation`)

Based on the storages it can reach, Arcsecond.local extracts and organises
information about your nights and observed targets.

![Overview of Observations & Data](/images/observations-data-overview.png){data-zoomable}

Arcsecond.local scans and parses the content of external storages, exactly as it
does for the data [stored on the install itself](./storage). This parsing lets
it:

* extract FITS- and XISF-file headers, for easy searching in the web interface,
* create 2D-image and 1D-spectrum previews,
* **build your personal list of all your follow-up targets, associated with
  their data** — combining everything the install holds and every external
  storage you have attached,
* reconstruct your observing nights (when possible).

:::info
We are working on an option to restrict the parsing to specific (sub)folder(s).
:::
