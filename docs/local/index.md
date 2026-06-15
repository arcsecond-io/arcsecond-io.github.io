# Arcsecond.local

**Arcsecond.local is the full Arcsecond platform, self-hosted on your own
infrastructure.** It is the off-the-shelf, multi-user and multi-telescope,
industry-grade platform dedicated to astronomical observatories — the whole
system, running on your machines, under your control, with your data never
leaving them.

Everything lives in [four apps](/apps/):

- **[Night Studio](/apps/night-studio/)** — prepare your observations.
- **[Control Room](/apps/control-room/)** — acquire new data and automate your nights.
- **[Data Grand Central](/apps/data/)** — store, package and share your data.
- **[Observatory Headquarters](/apps/headquarters/)** — every install is
  **multi-user by design**, so running your observatory as a team comes built in.

Contact us at [team@arcsecond.io](mailto:team@arcsecond.io) to learn more about
Arcsecond.local and how to get started.

## Getting Started

A quick guide to getting up and running:

1. [Installation](installation.md): simple steps to install and run Arcsecond.local.
2. [Updates](updates.md): keep your installation up to date.
3. **Configuration**: set up member accounts, observing sites and data storage
   for your observatory's needs.
4. **First Observations**: run your nights with the
   [Control Room](/apps/control-room/). [IN PREP]
5. **Data Management**: store and manage your data with
   [Data Grand Central](/apps/data/).

[Troubleshooting](troubleshooting.md).

## Self-Hosting Guides

Operating Arcsecond.local is done through the `arcsecond` command-line tool (see the
[CLI documentation](/cli/)). The following guides cover the most common
self-hosting tasks:

- [Live-Image Proxy](webcam.md): stream USB webcams and all-sky cameras into Arcsecond.local.
- [Backups](backups.md): where the Postgres dumps live, and how to list, inspect, and restore them.
- [Rotate Postgres Password](rotate-postgres-password.md): rotate the database password on an existing install.