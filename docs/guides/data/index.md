---
title: "Data Grand Central"
visibility: public
audience: astronomer
tier: guide
source: handwritten
---

# Data Grand Central

> Organize, browse, preview, and share privately your data products.

**Data Grand Central** is the app where Arcsecond.local stores, organises,
packages and shares all of your observatory's data — the data you acquire with
the [Control Room](/guides/observing/control-room), data you upload from the
[CLI](/reference/cli), and data you already keep elsewhere and simply
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

## The tools

### Data Browser

Browse every dataset and file, wherever it is stored: names, observers, telescopes, FITS and XISF headers, and
previews. See [File browser](./filebrowser).

<ToolShot tool="data-browser" no-caption />

### Observations Browser

Search past observations, recorded by the Control Room or extracted from your data.

<ToolShot tool="observations-browser" />

**Per Night** groups them by night log. **Per Target** follows every target you have observed: how often, with
which telescope, and for how long. Arcsecond.local keeps that list up to date by itself, from the night logs of the
[Control Room](/guides/observing/control-room) and from those it reconstructs out of the data you upload or
[attach](./external-storages).

<ToolShot tool="observations-browser" :index="1" />

### Data Viewer

Open a FITS or XISF file of a dataset, or one dropped from your computer, which is not stored until you decide. Adjust
the scale and the colours, and read the statistics, the value profiles, a close-up under the cursor and the header.

<ToolShot tool="data-viewer" />

### Virtual File System

Browse uploaded data as if it were on a disk. It shows again the folders you had on your computer when you uploaded
with the [CLI / Python module](/reference/upload).

<ToolShot tool="virtual-filesystem" no-caption />

### Data Distribution & Sharing

Group datasets into [data packages](./datapackages) and share them by email. A package is dynamic: receivers always
download its latest content.

<ToolShot tool="data-sharing" no-caption />
