---
title: "arcsecond webcam"
visibility: public
audience: operator
tier: reference
source: generated
cli: "4.1.0"
---

# `arcsecond webcam`

```
arcsecond webcam [OPTIONS] [COMMAND] [ARGS]...
```

List your webcams — plugged into this machine, or reached over the network.

With no sub-command, prints what is registered and probes nothing. Use `detect` to look at the hardware, `add` to register a camera and `forget` to drop one.

**Subcommands**

- [`arcsecond webcam add`](#arcsecond-webcam-add) — Register a webcam, so that the proxy serves it.
- [`arcsecond webcam detect`](#arcsecond-webcam-detect) — Look for webcams and report how they line up with what is registered: newly detected, registered and present,...
- [`arcsecond webcam forget`](#arcsecond-webcam-forget) — Stop remembering a webcam.
- [`arcsecond webcam test`](#arcsecond-webcam-test) — Pull one image from a camera and report what came back.

## `arcsecond webcam add`

```
arcsecond webcam add [OPTIONS] CAMERA
```

Register a webcam, so that the proxy serves it.

CAMERA is either a device index for a webcam plugged into this machine (`0`, as printed by `detect`), or the address of a camera on the network (`rtsp://...`, `http://.../snapshot.jpg`). Write a password as ${VARIABLE} to keep it out of your shell history — only the variable name is written to disk.

Prints the camera's id. That id is the only handle you need afterwards, and it does not change.

**Arguments**

- `CAMERA` — required

**Options**

| Option | Description |
| --- | --- |
| `--label TEXT` | A name for yourself, e.g. 'Dome cam'. |

## `arcsecond webcam detect`

```
arcsecond webcam detect [OPTIONS]
```

Look for webcams and report how they line up with what is registered: newly detected, registered and present, registered but not found.

Registers nothing. Network cameras cannot be discovered — there is no way to ask a network which of it is a camera — so a registered one is confirmed by connecting to its address instead.

**Options**

| Option | Description |
| --- | --- |
| `--timeout FLOAT` | Seconds to wait for a network camera to answer.  [default: 2.0] |
| `--no-network` | Do not contact network cameras; list them without checking. |

## `arcsecond webcam forget`

```
arcsecond webcam forget [OPTIONS] CAMERA_ID
```

Stop remembering a webcam. Give the id printed by `arcsecond webcam`, e.g. `k3f`.

Works for every kind of webcam, whether it is plugged in here or reached over the network. If the proxy is running, it stops serving the camera straight away.

**Arguments**

- `CAMERA_ID` — required

## `arcsecond webcam test`

```
arcsecond webcam test [OPTIONS] CAMERA
```

Pull one image from a camera and report what came back.

CAMERA is the id of a registered camera, or an address you have not registered yet — so an address can be checked before it is added, and a registered camera can be checked without retyping its address.

**Arguments**

- `CAMERA` — required

**Options**

| Option | Description |
| --- | --- |
| `--timeout FLOAT` | Seconds to wait for a first image.  [default: 15.0] |
