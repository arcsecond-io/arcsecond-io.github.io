# Data Grand Central

> Organize, browse, preview, and share privately your data products.

**Data Grand Central** is the app where Arcsecond.local stores, organises,
packages and shares all of your observatory's data — the data you acquire with
the [Control Room](/apps/control-room/), data you upload from the
[CLI](/cli/), and data you already keep elsewhere and simply
[attach](./external-storages).

Because Arcsecond.local is self-hosted, **your data stays on your own
infrastructure**. There is no cloud tier, no per-gigabyte pricing and no storage
cap — the limit is the disk you give the install.

## What it manages

- **[Storage](./storage)** — where your data lives on the host, and how
  Arcsecond.local indexes it.
- **[Datasets](./datasets)** — virtual folders that group data files sharing a
  common source or interest, for easy browsing and download.
- **[External Storages](./external-storages)** — existing storages you own
  (S3, Dropbox, FTP/SFTP, local disk, observatory archives), attached read-only
  so Arcsecond.local can index them alongside the data it holds itself.
- **[Data Packages](./datapackages)** — curated packages of datasets to share
  with other members, with visiting observers, or publicly.
- **[File Browser](./filebrowser)** — browse every data file known to the
  install, whether stored locally or on an attached external storage.
- **[Credentials & Security](./credentials-security)** — how the credentials of
  your attached storages are encrypted and protected.

## A tour of the tools

### Data Browser

<ThemedImage prefix="platform62-dgc-databrowser" alt="Data Browser"/>

The most straightforward way to [browse your data](./filebrowser): access
FITS/XISF headers, 1D and 2D previews, and organise it all — whether it is
stored on your install or reached through an
[attached external storage](./external-storages).

### Virtual Filesystem

<ThemedImage prefix="platform62-dgc-virtualfs" alt="Virtual Filesystem"/>

A tool for everyone uploading data with the [CLI / Python module](/cli/upload).
It reproduces your local filesystem structure on the server, so you recover your
familiar organisation inside Arcsecond.

### Target Follow-up

<ThemedImage prefix="platform62-dgc-targetfollowup" alt="Target Follow-up"/>

An automatic way to keep track of all your observed targets. As soon as you
upload or attach data, Arcsecond.local performs smart scans of the FITS/XISF
headers, reconstructs your observing nights, and builds your
[Follow-Up Targets](/apps/followup/) table.

### Data Distribution & Sharing

<ThemedImage prefix="platform62-dgc-datasharing" alt="Data Distribution & Sharing"/>

Organise datasets into [data packages](./datapackages) and share them privately
with people inside or outside your organisation.

### Observations Browser

<ThemedImage prefix="platform62-dgc-observationsbrowser" alt="Observations Browser"/>

Follow the addition of observations night by night, for each telescope and
observing site.
