---
title: "arcsecond allsky"
visibility: public
audience: operator
tier: reference
source: generated
cli: "4.2.0"
---

# `arcsecond allsky`

```
arcsecond allsky [OPTIONS] [COMMAND] [ARGS]...
```

List your all-sky cameras.

With no sub-command, prints what is registered and probes nothing. Use `detect` to look at well-known locations, `add` to register a camera and `forget` to drop one.

**Subcommands**

- [`arcsecond allsky add`](#arcsecond-allsky-add) — Register an all-sky camera, so that the proxy serves it.
- [`arcsecond allsky detect`](#arcsecond-allsky-detect) — Look for all-sky cameras at well-known paths (Thomas Jacquin's allsky, indi-allsky) and report how they line up with...
- [`arcsecond allsky forget`](#arcsecond-allsky-forget) — Stop remembering an all-sky camera.

## `arcsecond allsky add`

```
arcsecond allsky add [OPTIONS] TARGET
```

Register an all-sky camera, so that the proxy serves it.

TARGET is the JPEG your all-sky software keeps up to date. Give a path when that software runs on this machine — a fixed file, a symlink, or a glob, in which case the newest matching file wins — or an `http://...` address when it runs on another machine and publishes the image. Write a password as ${VARIABLE} to keep it out of your shell history: only the variable name is written to disk.

Prints the camera's id. That id is the only handle you need afterwards, and it does not change.

**Arguments**

- `TARGET` — required

**Options**

| Option | Description |
| --- | --- |
| `--label TEXT` | A name for yourself, e.g. 'Roof'. |

## `arcsecond allsky detect`

```
arcsecond allsky detect [OPTIONS]
```

Look for all-sky cameras at well-known paths (Thomas Jacquin's allsky, indi-allsky) and report how they line up with what is registered.

Registers nothing. A registered camera writing somewhere else is confirmed by looking at its own path, so it is not reported missing merely for being somewhere unusual.

## `arcsecond allsky forget`

```
arcsecond allsky forget [OPTIONS] CAMERA_ID
```

Stop remembering an all-sky camera. Give the id printed by `arcsecond allsky`, e.g. `r4t`.

If the proxy is running, it stops serving the camera straight away.

**Arguments**

- `CAMERA_ID` — required
