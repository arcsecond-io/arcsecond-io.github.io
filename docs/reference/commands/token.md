---
title: "arcsecond token"
visibility: public
audience: operator
tier: reference
source: generated
cli: "4.2.0"
---

# `arcsecond token`

```
arcsecond token [OPTIONS] [COMMAND] [ARGS]...
```

The access token Arcsecond gave your observatory.

It lets this machine download Arcsecond.local. `arcsecond setup` asks for
    it; these commands are for entering it again, or removing it.

```
arcsecond token          does this machine have one?
arcsecond token set      enter it (nothing is shown while you type)
arcsecond token forget   remove it from this machine
```

**Subcommands**

- [`arcsecond token forget`](#arcsecond-token-forget) — Remove the token from this machine.
- [`arcsecond token set`](#arcsecond-token-set) — Enter the token (nothing is shown while you type).

## `arcsecond token forget`

```
arcsecond token forget [OPTIONS]
```

**Options**

| Option | Description |
| --- | --- |
| `-v, --verbose` | Increases verbosity. |

## `arcsecond token set`

```
arcsecond token set [OPTIONS]
```

Enter the access token Arcsecond gave your observatory, once per machine.

Nothing is shown while you type or paste it. Docker keeps it, so
    `arcsecond start` and `arcsecond update` can download the images from
    then on.

**Options**

| Option | Description |
| --- | --- |
| `--stdin` | Read the token from standard input instead of asking — for scripts. There is no --token option on purpose: a token typed as an option lands in the shell history. |
| `-v, --verbose` | Increases verbosity. |
