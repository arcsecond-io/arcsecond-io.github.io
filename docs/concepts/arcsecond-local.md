---
title: "Arcsecond.local"
visibility: public
audience: astronomer
tier: concept
source: handwritten
---

# Arcsecond.local

**Arcsecond.local is the full Arcsecond platform, self-hosted on your own
infrastructure.** It is the off-the-shelf, multi-user and multi-telescope,
industry-grade platform dedicated to astronomical observatories — the whole
system, running on your machines, under your control, with your data never
leaving them.

Everything lives in [four apps](/concepts/apps):

- **[Night Studio](/guides/observing/night-studio)** — prepare your observations.
- **[Control Room](/guides/observing/control-room)** — acquire new data and automate your nights.
- **[Data Grand Central](/guides/data/)** — store, package and share your data.
- **[Observatory Headquarters](/guides/team/)** — every install is
  **multi-user by design**, so running your observatory as a team comes built in.

Contact us at [team@arcsecond.io](mailto:team@arcsecond.io) to learn more about
Arcsecond.local and how to get started.

## Getting Started

A quick guide to getting up and running:

1. [Installation](/start/): simple steps to install and run Arcsecond.local.
2. [Updates](/guides/operating/updates): keep your installation up to date.
   Coming from a tool older than 4.0? See [Upgrading to 4.0](/guides/operating/upgrading-to-4).
3. **Configuration**: set up member accounts, observing sites and data storage
   for your observatory's needs.
4. **First Observations**: run your nights with the
   [Control Room](/guides/observing/control-room). [IN PREP]
5. **Data Management**: store and manage your data with
   [Data Grand Central](/guides/data/).

[Troubleshooting](/guides/operating/troubleshooting).

## Self-Hosting Guides

Operating Arcsecond.local is done through the `arcsecond` command-line tool (see the
[CLI documentation](/reference/cli)). The following guides cover the most common
self-hosting tasks:

- [Alpaca Server on the LAN](/guides/operating/alpaca-lan): connect Arcsecond.local to an Alpaca server running on another Windows machine.
- [Live-Image Proxy](/guides/operating/live-image-proxy): stream USB webcams, all-sky cameras and network cameras into Arcsecond.local.
- [Backups](/guides/operating/backups): where the Postgres dumps live, and how to list, inspect, and restore them.
- [Rotate Postgres Password](/guides/operating/rotate-postgres-password): rotate the database password on an existing install.
- [Transient Alerts](/guides/operating/transient-alerts): how to setup transient alert service
