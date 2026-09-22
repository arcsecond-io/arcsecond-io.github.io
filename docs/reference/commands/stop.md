---
title: "arcsecond stop"
visibility: public
audience: operator
tier: reference
source: generated
cli: "4.1.0"
---

# `arcsecond stop`

```
arcsecond stop [OPTIONS]
```

Stop the containers. `arcsecond start` brings them back.

A stopped installation stays stopped across a reboot; one that was running
comes back on its own when Docker does.

**Options**

| Option | Description |
| --- | --- |
| `--dir FOLDER` | The Arcsecond.local folder (the one holding docker-compose.yml). Default: the current folder, else the one `arcsecond setup` last ran in. |
| `--down` | Also remove the stopped containers and the network. Your data (database, files) is never touched. |
| `-v, --verbose` | Increases verbosity. |
