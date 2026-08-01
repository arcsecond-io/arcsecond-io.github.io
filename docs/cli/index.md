# Arcsecond CLI

The Arcsecond CLI is the open-source companion that connects to and interacts
with an Arcsecond API server — whether that is the cloud or your own
[Arcsecond.local](/local/) install. Its main purpose today is precisely this:
**to set up and run Arcsecond.local**.

It is a lightweight command-line tool *and* a Python module, giving you two
entry points:

- the `arcsecond` command-line tool for day-to-day operations
- the `arcsecond` Python module for automation and integration

The CLI works like a tool such as `git`: `arcsecond` is the main entry point,
followed by a command. Many commands map directly to Arcsecond resources.

## Quick Start

```bash
pip install arcsecond
arcsecond --help
```

## Setting up & running Arcsecond.local

The `arcsecond` command is how you install, operate and maintain a self-hosted
install. The core flow is documented in the
[Arcsecond.local](/local/) section:

- [Installation](/local/installation) — `arcsecond setup`, then `docker compose up -d`.
- [Updates](/local/updates) — keep your install current.
- [Live-Image Proxy](/local/webcam) — stream USB webcams, all-sky cameras and network cameras into Arcsecond.local.
- [Backups](/local/backups) — list, inspect, and restore the Postgres dumps.
- [Rotate Postgres Password](/local/rotate-postgres-password) — rotate the database password on an existing install.

## Connecting to a server

Whether you point it at the cloud or at your own install, the CLI uses the same
commands and credentials:

- [Install & Login](./install) — install the package and authenticate.
- [Installing on Windows](./install-windows) — Windows-specific setup and `PATH` troubleshooting.
- [Data Upload](./upload) — upload datasets and all-sky images from the CLI or Python.
- [Python API — Basics](./api-basics) — reuse your credentials in code (use `subdomain="local"` for a self-hosted install).
- [Python API — Resources](./resources) — generic CRUD helpers and target workflows.
