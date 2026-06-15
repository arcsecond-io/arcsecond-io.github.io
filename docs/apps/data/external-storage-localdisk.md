# External Storage — Local Disk

Local disk is the most natural external storage for a self-hosted Arcsecond.local
install: you point the install at a directory (or a mounted volume) on the host,
and Arcsecond.local indexes the FITS/XISF files it finds there, read-only.

This is ideal when you already have years of data sitting on an observatory NAS
or an external drive and want it searchable and previewable without copying it
into Arcsecond.local's own [storage](./storage).

:::info
Detailed step-by-step configuration is being documented. In the meantime,
[contact us](mailto:team@arcsecond.io) and we'll help you map a local directory.
:::
