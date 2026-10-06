---
title: "Updates of Arcsecond.local"
visibility: public
audience: operator
tier: guide
source: handwritten
---

# Updates of Arcsecond.local

::: info
As of now, the installation of Arcsecond.local requires an individual authentication token, provided manually by
Arcsecond. In the future, the process will be streamlined and easier.
:::

Your installation can keep running while it updates: there is no need to stop it first. Two commands, from any folder
once `arcsecond setup` has run on this machine:

```bash
pip3 install --upgrade arcsecond
arcsecond update
```

The first updates the `arcsecond` tool itself. The second updates the installation: it brings `docker-compose.yml` up to
date (see below), downloads the latest images, recreates the containers whose image changed, waits for the backend to
be ready again, and prints the address. Expect a minute or two while the containers come back; the tool waits for you.

`arcsecond status` says whether an installation is current: it compares the version of your `docker-compose.yml` with
the one the installed tool carries, and tells you to run `arcsecond update` when they differ.

## Why the compose file is refreshed

The `docker-compose.yml` file is not part of the Docker images: it is written by the `arcsecond` tool, and evolves with
it — which is why the tool is updated first. The file belongs to the tool: `arcsecond update` always leaves it exactly
as the installed tool writes it. When the file differed — an older template, or an edit by hand — the previous one is
kept beside it as `docker-compose.backup-<date>-<time>.yml`, so nothing is lost. Your `.env` file only gains keys it
lacks, and your data is never touched.

Changes of your own that must survive updates go in a `docker-compose.override.yml` beside it: compose applies that file
on top of `docker-compose.yml`, every `arcsecond` command passes it along, and the tool never touches it.

The latest change of this kind: since CLI 3.20.0 (template version 6.4), the database and Redis containers no longer
publish a port on the machine, not even on `localhost`. They are reachable from the other containers only, which is all
Arcsecond ever needed, and an installation can now start next to a PostgreSQL already running on the machine. An
installation that fails with *ports are not available* on `arcsecond start` is one that has not had this update; see
[Troubleshooting](/guides/operating/troubleshooting).

## Coming from a tool older than 4.0

Version 4.0 of the tool changed how an installation is operated — `arcsecond start` and friends replace the `docker
compose` commands these pages used to ask for. The installation itself needs no change. See
[Upgrading to 4.0](/guides/operating/upgrading-to-4).
