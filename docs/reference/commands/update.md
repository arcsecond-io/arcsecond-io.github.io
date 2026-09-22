---
title: "arcsecond update"
visibility: public
audience: operator
tier: reference
source: generated
cli: "4.2.0"
---

# `arcsecond update`

```
arcsecond update [OPTIONS]
```

Bring the installation up to date: refresh docker-compose.yml from this
    CLI, download the latest images, and restart what changed.

Update the CLI itself first, so that the compose file it writes is the
    newest one:  pip install --upgrade arcsecond

**Options**

| Option | Description |
| --- | --- |
| `--dir FOLDER` | The Arcsecond.local folder (the one holding docker-compose.yml). Default: the current folder, else the one `arcsecond setup` last ran in. |
| `-v, --verbose` | Increases verbosity. |
