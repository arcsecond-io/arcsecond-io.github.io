---
title: "arcsecond proxy"
visibility: public
audience: operator
tier: reference
source: generated
cli: "4.2.0"
---

# `arcsecond proxy`

```
arcsecond proxy [OPTIONS] COMMAND [ARGS]...
```

Start and inspect the proxy that serves your cameras.

**Subcommands**

- [`arcsecond proxy start`](#arcsecond-proxy-start) — Serve every registered camera — webcams, network cameras and all-sky cameras alike — over one proxy.
- [`arcsecond proxy status`](#arcsecond-proxy-status) — Say whether the proxy is running, and what it is serving.
- [`arcsecond proxy stop`](#arcsecond-proxy-stop) — Stop the running proxy.

## `arcsecond proxy start`

```
arcsecond proxy start [OPTIONS]
```

Serve every registered camera — webcams, network cameras and all-sky cameras alike — over one proxy.

Starts in the background and gives you your prompt back; stop it with `arcsecond proxy stop` from anywhere. Use --foreground to run it in this terminal and watch it instead.

Registers nothing: run `arcsecond webcam add` or `arcsecond allsky add` first. Cameras added while it runs are picked up without a restart.

Set LIVE_IMAGE_PROXY_URL=http://host.docker.internal:&lt;PORT&gt; in your .env so Arcsecond.local can reach the proxy.

**Options**

| Option | Description |
| --- | --- |
| `--port INTEGER` | TCP port to listen on.  [default: 8765] |
| `--host TEXT` | Interface to bind.  [default: 0.0.0.0] |
| `--log-level [debug|info|warning|error]` | Logging verbosity.  [default: INFO] |
| `--foreground` | Run in this terminal and keep it, printing as it goes, instead of starting in the background. Ctrl-C stops it. |
| `--no-autostart` | Do not register the proxy to start again when you log in. By default a background proxy comes back after a reboot until `arcsecond proxy stop` is run. |

## `arcsecond proxy status`

```
arcsecond proxy status [OPTIONS]
```

Say whether the proxy is running, and what it is serving.

## `arcsecond proxy stop`

```
arcsecond proxy stop [OPTIONS]
```

Stop the running proxy.

The mirror of `start`, and it works from any terminal — the proxy records where it is when it starts, so there is nothing to remember and no port to type. Registered cameras are untouched: this stops serving them, `forget` is what drops one.

**Options**

| Option | Description |
| --- | --- |
| `--timeout FLOAT` | Seconds to wait for it to shut down before insisting.  [default: 10.0] |
