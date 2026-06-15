# Storage

On a self-hosted Arcsecond.local install, **your data lives on your own
infrastructure**. There is no cloud bucket, no per-gigabyte billing and no
storage quota — the only limit is the disk you give the install.

## Where data is stored

When you run `arcsecond setup`, you choose a host directory as the
`SHARED_DATA_PATH`. Everything Arcsecond.local persists lives under it:

- uploaded datasets and data files,
- generated 2D-image and 1D-spectrum previews,
- the astrometry cache and temporary working files,
- the hourly database backups (see [Backups](/local/backups)).

Because it is a plain directory on your machine, you back it up, snapshot it and
size it with your own operational practice. The [Backups](/local/backups) and
[disaster-recovery](/local/backups#what-else-to-back-up-off-host) guides cover
what to copy off-host.

## How data is organised

Data files are grouped into **[Datasets](./datasets)** — virtual folders that
collect files sharing a common source or interest, so they can be browsed and
downloaded together. FITS and XISF files are parsed on ingestion: their headers
are extracted for searching, and previews are generated.

## Bringing in data you already have

You rarely start from a blank slate. Arcsecond.local can index data that already
lives elsewhere — on an S3 bucket, a Dropbox, an FTP/SFTP server, another local
disk, or an observatory archive — by attaching it as an
**[External Storage](./external-storages)**. Attached storages are read-only:
Arcsecond.local scans and parses them exactly as it does its own data, never
modifying anything.
