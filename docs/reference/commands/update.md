---
title: "arcsecond update"
visibility: public
audience: operator
tier: reference
source: generated
cli: "4.3.3"
---

# `arcsecond update`

```
arcsecond update [OPTIONS]
```

Bring the installation up to date: rewrite docker-compose.yml from this
CLI, add what .env lacks, download the latest images, and restart what
changed. A docker-compose.yml that differed is kept aside as a backup;
local changes belong in docker-compose.override.yml, which is left alone.

Update the CLI itself first, so that the compose file it writes is the
newest one:  pip install --upgrade arcsecond

**Options**

| Option | Description |
| --- | --- |
| `--dir FOLDER` | The Arcsecond.local folder (the one holding docker-compose.yml). Default: the current folder, else the one `arcsecond setup` last ran in. |
| `-v, --verbose` | Increases verbosity. |
