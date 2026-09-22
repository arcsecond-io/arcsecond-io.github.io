---
title: "Rotating the Postgres password on an existing self-hosted install"
visibility: public
audience: operator
tier: guide
source: handwritten
---

# Rotating the Postgres password on an existing self-hosted install

Until version 3.10, `arcsecond setup` wrote a default Postgres password (`arcsecond_docker`) into `.env`. New installs
generate a per-install random password automatically, but **existing installs keep the original weak password until you
rotate it** — Postgres only reads `POSTGRES_PASSWORD` at first container boot to bootstrap the role, so changing the
value in `.env` after the fact does nothing on its own.

One command rotates it in the three places that must agree: the live database role, the `.env` file, and the running
containers. Run it in the Arcsecond folder (or from anywhere, once `arcsecond setup` has run on this machine), with the
installation running:

```bash
arcsecond db set-password
```

It generates a strong random password, checks that the current credentials in `.env` work before touching anything,
backs `.env` up beside itself, changes the role's password in the database, rewrites `POSTGRES_PASSWORD`, verifies the
new password against the database, and recreates the `backend`, `worker` and `beat` containers (and `alerts` if you
have it) so they pick it up. The `db` container is left alone: its password lives in the volume, and recreating it
would be downtime for nothing.

If the new password does not verify, the command puts the database and `.env` back the way they were, and says so.

## Options

| | |
| --- | --- |
| `--show` | print the new password, instead of only writing it to `.env` |
| `--password <value>` | set this password rather than a generated one — letters, digits and `. _ ~ -` only, 16 characters minimum |
| `--no-restart` | change the database and `.env` but leave the containers running with the old password until you run `arcsecond restart` yourself |
| `--dry-run` | show what would happen, change nothing |

## Verify

```bash
arcsecond status
arcsecond logs backend --tail 50
```

A backend that is `running` and `healthy` in `arcsecond status`, with no authentication error in its last lines, is
done. Delete the `.env.bak-…` file once you have confirmed the stack is healthy — it still holds the old password.

## File permissions

While you're at it, lock `.env` down so other local users can't read it:

```bash
chmod 600 .env
```

The file holds the Postgres password, the Django `SECRET_KEY`, the field encryption key, and the JWT signing keys. None
of them are useful to an attacker on their own, but defense in depth is cheap.
