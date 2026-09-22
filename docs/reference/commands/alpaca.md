---
title: "arcsecond alpaca"
visibility: public
audience: operator
tier: reference
source: generated
cli: "4.1.0"
---

# `arcsecond alpaca`

```
arcsecond alpaca [OPTIONS] COMMAND [ARGS]...
```

Diagnostics for local ASCOM Alpaca devices.

**Subcommands**

- [`arcsecond alpaca probe`](#arcsecond-alpaca-probe) — Inspect an Alpaca device read-only.

## `arcsecond alpaca probe`

```
arcsecond alpaca probe [OPTIONS] COMMAND [ARGS]...
```

Inspect an Alpaca device read-only.

**Subcommands**

- [`arcsecond alpaca probe dome`](#arcsecond-alpaca-probe-dome) — Probe a local Alpaca dome device read-only and write a JSON report.
- [`arcsecond alpaca probe telescope`](#arcsecond-alpaca-probe-telescope) — Probe a local Alpaca telescope (mount) device read-only and write a JSON report.

### `arcsecond alpaca probe dome`

```
arcsecond alpaca probe dome [OPTIONS]
```

Probe a local Alpaca dome device read-only and write a JSON report.

Captures device metadata, SupportedActions, and the behaviour of the legacy CommandString / CommandBool / CommandBlind passthroughs. Useful for figuring out whether a proprietary driver (e.g. TCSGalil) exposes any vendor-specific extension surface beyond the standard ASCOM IDome interface. Local host hints (open ports, COM ProgIDs) are added when HOST is this machine.

**Options**

| Option | Description |
| --- | --- |
| `--host HOST` | Alpaca server hostname or IP (without scheme).  [required] |
| `--port PORT` | Alpaca server TCP port (e.g. 11111).  [required] |
| `--device-number INTEGER` | Alpaca device number on the server.  [default: 0] |
| `--protocol [http|https]` | Protocol to reach the Alpaca server with.  [default: http] |
| `--allow-active` | Also send CommandBlind and active-class probes. OFF by default to keep the run safe on real hardware. |
| `--collect-host-info / --no-host-info` | Best-effort local OS hints (open ports, COM ProgIDs matching TCS/Galil), read-only. Collected automatically when HOST is this machine, the only case in which they describe the Alpaca server's host. --collect-host-info forces them for a remote HOST; --no-host-info skips them. |
| `--output FILE` | Where to write the JSON report. Defaults to cwd with a UTC timestamp. |

### `arcsecond alpaca probe telescope`

```
arcsecond alpaca probe telescope [OPTIONS]
```

Probe a local Alpaca telescope (mount) device read-only and write a JSON report.

Captures device metadata, optics, site, pointing and tracking state, capabilities, CanMoveAxis and AxisRates per movable axis, SupportedActions, and the behaviour of the legacy CommandString / CommandBool / CommandBlind passthroughs. Never moves the mount. Local host hints (open ports, COM ProgIDs) are added when HOST is this machine.

**Options**

| Option | Description |
| --- | --- |
| `--host HOST` | Alpaca server hostname or IP (without scheme).  [required] |
| `--port PORT` | Alpaca server TCP port (e.g. 11111).  [required] |
| `--device-number INTEGER` | Alpaca device number on the server.  [default: 0] |
| `--protocol [http|https]` | Protocol to reach the Alpaca server with.  [default: http] |
| `--allow-active` | Also send CommandBlind and active-class probes. OFF by default to keep the run safe on real hardware. |
| `--collect-host-info / --no-host-info` | Best-effort local OS hints (open ports, COM ProgIDs matching TCS/Galil), read-only. Collected automatically when HOST is this machine, the only case in which they describe the Alpaca server's host. --collect-host-info forces them for a remote HOST; --no-host-info skips them. |
| `--output FILE` | Where to write the JSON report. Defaults to cwd with a UTC timestamp. |
