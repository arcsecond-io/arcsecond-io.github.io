---
title: "arcsecond db"
visibility: public
audience: operator
tier: reference
source: generated
cli: "4.2.1"
---

# `arcsecond db`

```
arcsecond db [OPTIONS] COMMAND [ARGS]...
```

Manage the Arcsecond.local database.

**Subcommands**

- [`arcsecond db set-password`](#arcsecond-db-set-password) — Rotate the Postgres password, in the database and in .env together.

## `arcsecond db set-password`

```
arcsecond db set-password [OPTIONS]
```

Rotate the Postgres password, in the database and in .env together.

**Options**

| Option | Description |
| --- | --- |
| `--password TEXT` | Password to set. Omit to generate a strong random one (recommended). |
| `--show` | Print the new password instead of only writing it. |
| `--no-restart` | Do not recreate the app containers. They keep using the old password until you recreate them yourself. |
| `--dry-run` | Show what would happen, change nothing. |
| `-v, --verbose` | Increases verbosity. |
