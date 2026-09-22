---
title: "arcsecond api"
visibility: public
audience: operator
tier: reference
source: generated
cli: "4.2.0"
---

# `arcsecond api`

```
arcsecond api [OPTIONS] [COMMAND] [ARGS]...
```

The API server the CLI talks to.

Every command uses one server: the "cloud" (api.arcsecond.io) by
default, or any server registered here — typically your own
Arcsecond.local. Point the CLI at one and it stays pointed there:

```
arcsecond api                          list the servers, * marks the current one
arcsecond api add local http://localhost:8800
arcsecond api use local                every command now talks to it
arcsecond api remove local
```

Credentials are kept per server, so `arcsecond login` after `api use`
logs you in on that server only.

For a script or a cron job, set ARCSECOND_API=&lt;name&gt; instead: it applies to
that process alone and leaves the pointer untouched.

**Subcommands**

- [`arcsecond api add`](#arcsecond-api-add) — Register a server under a name.
- [`arcsecond api remove`](#arcsecond-api-remove) — Forget a registered server and its credentials.
- [`arcsecond api use`](#arcsecond-api-use) — Point every following command at this server (it must answer).

## `arcsecond api add`

```
arcsecond api add [OPTIONS] NAME ADDRESS
```

Register a server under a name.

**Arguments**

- `NAME` — required
- `ADDRESS` — required

## `arcsecond api remove`

```
arcsecond api remove [OPTIONS] NAME
```

Forget a registered server and its credentials.

**Arguments**

- `NAME` — required

## `arcsecond api use`

```
arcsecond api use [OPTIONS] NAME
```

Point every following command at this server (it must answer).

**Arguments**

- `NAME` — required
