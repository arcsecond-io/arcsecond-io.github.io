---
title: "arcsecond restart"
visibility: public
audience: operator
tier: reference
source: generated
cli: "4.1.0"
---

# `arcsecond restart`

```
arcsecond restart [OPTIONS] [SERVICES]...
```

Recreate the given services — or all of them — from their current
configuration.

This is what to run after editing .env: a plain stop/start would keep the
old values. Naming services limits it: `arcsecond restart backend worker`.

**Arguments**

- `[SERVICES]...` — optional

**Options**

| Option | Description |
| --- | --- |
| `--dir FOLDER` | The Arcsecond.local folder (the one holding docker-compose.yml). Default: the current folder, else the one `arcsecond setup` last ran in. |
| `-v, --verbose` | Increases verbosity. |
