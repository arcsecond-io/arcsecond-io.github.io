---
title: "arcsecond start"
visibility: public
audience: operator
tier: reference
source: generated
cli: "4.2.1"
---

# `arcsecond start`

```
arcsecond start [OPTIONS]
```

Start Arcsecond.local, or bring a running one in line with its files.

Safe to run again at any time: containers already running and up to date
are left alone. The first start downloads the Docker images, which takes
a while.

**Options**

| Option | Description |
| --- | --- |
| `--dir FOLDER` | The Arcsecond.local folder (the one holding docker-compose.yml). Default: the current folder, else the one `arcsecond setup` last ran in. |
| `--pull` | Download newer images first. |
| `--recreate` | Recreate every container, so that changes to .env are picked up. |
| `--no-wait` | Return as soon as the containers are started, without waiting for the backend to be ready. |
| `-v, --verbose` | Increases verbosity. |
