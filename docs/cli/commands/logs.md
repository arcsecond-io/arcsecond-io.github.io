---
title: "arcsecond logs"
visibility: public
audience: operator
tier: reference
source: generated
cli: "4.0.0"
---

# `arcsecond logs`

```
arcsecond logs [OPTIONS] [SERVICE]
```

Show recent logs. Services are named as in `arcsecond status`:
backend, worker, beat, web, db, broker, platesolver, alerts.

**Arguments**

- `[SERVICE]` — optional

**Options**

| Option | Description |
| --- | --- |
| `--dir FOLDER` | The Arcsecond.local folder (the one holding docker-compose.yml). Default: the current folder, else the one `arcsecond setup` last ran in. |
| `-f, --follow` | Keep printing as new lines arrive. |
| `--tail TEXT` | How many recent lines to show ('all' for everything).  [default: 200] |
| `-v, --verbose` | Increases verbosity. |
