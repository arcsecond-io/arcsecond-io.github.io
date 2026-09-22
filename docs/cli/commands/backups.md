---
title: "arcsecond backups"
visibility: public
audience: operator
tier: reference
source: generated
cli: "4.0.0"
---

# `arcsecond backups`

```
arcsecond backups [OPTIONS] COMMAND [ARGS]...
```

Browse and restore Arcsecond.local DB backups.

**Subcommands**

- [`arcsecond backups inspect`](#arcsecond-backups-inspect) — Show detailed info about a backup.
- [`arcsecond backups list`](#arcsecond-backups-list) — List available DB backups with compatibility status.
- [`arcsecond backups restore`](#arcsecond-backups-restore) — Restore a DB backup.

## `arcsecond backups inspect`

```
arcsecond backups inspect [OPTIONS] REF
```

Show detailed info about a backup.

**Arguments**

- `REF` — required

**Options**

| Option | Description |
| --- | --- |
| `-v, --verbose` | Increases verbosity. |

## `arcsecond backups list`

```
arcsecond backups list [OPTIONS]
```

List available DB backups with compatibility status.

**Options**

| Option | Description |
| --- | --- |
| `-v, --verbose` | Increases verbosity. |

## `arcsecond backups restore`

```
arcsecond backups restore [OPTIONS] [REF]
```

Restore a DB backup. Stops the backend, wipes the DB, pipes the dump back in, then restarts the backend.

**Arguments**

- `[REF]` — optional

**Options**

| Option | Description |
| --- | --- |
| `--force` | Bypass the incompatible-backup block. |
| `--dry-run` | Print every command that would run; do nothing. |
| `--no-safety-backup` | Skip the pre-restore safety snapshot. |
| `-v, --verbose` | Increases verbosity. |
