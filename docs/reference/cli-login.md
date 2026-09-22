---
title: "Install & Login"
visibility: public
audience: developer
tier: reference
source: handwritten
---

# Install & Login

Simply issue the following in a Terminal:

```bash
pip install arcsecond
```

::: tip Windows users
Installing on Windows has a few extra steps (Python on `PATH`, the
`Scripts` directory on `PATH`, app-execution aliases). See the dedicated
[Installing on Windows](/start/windows-python) page if `pip` or `arcsecond`
are "not recognized" in PowerShell.
:::

To upgrade an existing Arcsecond installation:

```bash
pip install --upgrade arcsecond
```

The help is available like any other command-line tool:

```bash
arcsecond --help
```

For subcommands:

```bash
arcsecond <command> --help
```

The Arcsecond CLI works like a tool such as `git`: `arcsecond` is the main entry
point, followed by a command. Many commands directly map to Arcsecond resources.

## Which server

The CLI points at one API server at a time, and every command talks to that
one. By default it is the cloud, `api.arcsecond.io`. To work against your own
Arcsecond.local instead:

```bash
arcsecond api use local
```

`arcsecond setup` registers `local` for you (`http://localhost:8800`); from
another computer, register the machine's address first —
`arcsecond api add local http://192.168.1.42:8800` — see
[Access from Other Computers](/start/network). `arcsecond api` lists the
servers, the current one marked with `*`, and `arcsecond api use cloud` points
back. Credentials are kept per server, so log in once on each.

For a script or a scheduled job, `ARCSECOND_API=local` in the environment selects
a server for that process alone, without moving the pointer.

## Authentication

To use the CLI, you need an account on the server the CLI points at. In your
settings page — on [arcsecond.io](https://www.arcsecond.io), or on your own
Arcsecond.local — you will find two kinds of credentials:

- an Access Key for broad access to your resources
- an Upload Key for upload-only workflows

Use an Access Key only on trusted computers. If you only need to upload files,
prefer an Upload Key.

### Interactive login

Run:

```bash
arcsecond login
```

The CLI will prompt for:

- `username`
- `type` (`access` or `upload`)
- `key`

Your credential is stored locally in `~/.config/arcsecond/config.ini`.

### Non-interactive login

To skip prompts, pass all values explicitly:

```bash
arcsecond login --username <username> --type access --key <access-key>
```

or:

```bash
arcsecond login --username <username> --type upload --key <upload-key>
```

Logging in again overwrites the stored credential if the login succeeds.

If you think a key is compromised, regenerate it from your profile settings on
[arcsecond.io](https://www.arcsecond.io). The CLI cannot regenerate keys for you.
