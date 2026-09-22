---
title: "Upgrading to CLI 4.0"
visibility: public
audience: operator
tier: guide
source: handwritten
---

# Upgrading to CLI 4.0

Version 4.0 of the `arcsecond` tool changes how an installation is *operated*. The installation itself — your folder,
`.env`, `docker-compose.yml`, the database, the data — needs no change and is not touched by the upgrade.

```bash
pip3 install --upgrade arcsecond
arcsecond setup       # once, in the Arcsecond folder: records its location, adds new .env keys
arcsecond update      # brings the installation to the latest release
```

## No more `docker` commands

Everything these pages used to ask for as a `docker compose …` line has an `arcsecond` command:

| Before 4.0 | Since 4.0 |
| --- | --- |
| `docker compose up -d` | `arcsecond start` — waits for the backend, prints the address |
| `docker compose stop` | `arcsecond stop` |
| `docker compose up -d --force-recreate backend worker beat` | `arcsecond restart backend worker beat` (or just `arcsecond restart`) |
| `docker compose ps`, `docker ps` | `arcsecond status` |
| `docker compose logs --tail 50 backend`, `docker logs -f arcsecond-alerts` | `arcsecond logs backend --tail 50`, `arcsecond logs alerts -f` |
| `arcsecond setup` + `docker compose pull` + `docker compose up -d` | `arcsecond update` |
| `docker compose up -d alerts` | `arcsecond restart alerts` |
| `echo <PAT> \| docker login ghcr.io …` | `arcsecond token set` (and `arcsecond setup` asks) |

These commands find the installation in the current folder, or in the folder `arcsecond setup` last ran in — so they
work from a PowerShell opened anywhere — or where `--dir` points. `arcsecond start` also explains the failures the
[Troubleshooting](/guides/operating/troubleshooting) page used to: a port already taken, a user not in the `docker` group, Docker
Desktop not running.

Since 4.2 there is no `docker` command left to type at all: `arcsecond setup` asks for the access token Arcsecond gave
your observatory, and `arcsecond token set` enters it again.

## The server is a pointer, not an option

`--api <name>` is gone from every command. The CLI points at one server, and every command follows that pointer:

```bash
arcsecond api            # list the servers, * marks the current one
arcsecond api use local  # every command now talks to your installation
arcsecond api use cloud  # …and back
```

`arcsecond setup` registers `local` for you. A server registered the old way (`arcsecond api <name> <address>`) is
still there and still registers; `arcsecond api add` is the new spelling. For scripts, `ARCSECOND_API=<name>` in the
environment selects a server for that process alone.

In Python, `ArcsecondConfig()` with no name follows the pointer too; `ArcsecondConfig(api_name="local")` behaves as
before.

## Renamed and removed

- `arcsecond upload-data` is `arcsecond upload`. The old name still works, hidden.
- `arcsecond me` is gone: `arcsecond login` tells you who you are logged in as, and where.
- `arcsecond netcam` is gone; a network camera is a webcam (`arcsecond webcam add rtsp://…`).
- Errors are sentences: a command that cannot do what it was asked says why and exits, instead of printing a
  traceback.

## The live-image proxy comes back after a reboot

A proxy started with `arcsecond proxy start` now registers itself to start again when you log in, and
`arcsecond proxy stop` cancels that. A proxy that was running when the machine went down comes back; one you stopped
stays stopped. `arcsecond proxy start --no-autostart` opts out. See [Live-Image Proxy](/guides/operating/live-image-proxy).

## Other computers on the network

`arcsecond setup --lan-host 192.168.1.42` writes the address other computers reach the installation at, which the
backend needs for the links in invitation and password-reset emails. Editing `.env` by hand still works. See
[Access from Other Computers](/start/network).
