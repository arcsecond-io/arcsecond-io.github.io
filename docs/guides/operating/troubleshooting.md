---
title: "Troubleshooting"
visibility: public
audience: operator
tier: guide
source: handwritten
---

# Troubleshooting

## Windows + Docker Desktop: “/data is not writable” troubleshooting blurb (copy/paste)

- Check Docker Desktop is running (the whale icon should be active). If it isn’t, `arcsecond start` waits a few
  seconds for Docker and then says so, rather than hanging.
- Verify the host folder exists and is accessible: create the directory referenced by SHARED_DATA_PATH in File
  Explorer (and ensure you can create a file in it).
- Avoid network / cloud-synced paths at first (common culprits: UNC paths like \\server\share, mapped drives,
  OneDrive/SharePoint-synced folders). Prefer something simple like C:\Users\<name>\ArcsecondData.
- If you use another drive (D:\ / external drive): enable sharing in Docker Desktop. Go to Docker Desktop → Settings →
  Resources → File sharing (wording may vary) and add the drive/folder, then Apply & Restart.
- Confirm the mount from inside a container (quick sanity check): Run a one-off container that writes a test file to
  /data and confirm the file appears on the host. If it can’t write, it’s almost always a sharing/permissions/path
  issue.
  

## "ports are not available: exposing port TCP 127.0.0.1:5432"

The full line, shown by `arcsecond start` after `docker compose up` failed, is `Error response from daemon: ports are not available: exposing port TCP
127.0.0.1:5432 -> 127.0.0.1:0: listen tcp4 127.0.0.1:5432: bind: Only one usage of each socket address
(protocol/network address/port) is normally permitted` on Windows, or ends with `bind: address already in use` on macOS
and Linux. The `arcsecond-db` container does not start, and neither does anything that depends on it.

Another program on the machine already listens on port 5432 — usually a PostgreSQL server installed directly on the
machine, sometimes a container from another project. The `docker-compose.yml` written by CLI versions up to 3.19 asked
Docker to publish the database on that same port of the machine (and Redis on 6379), so the two could not coexist.
Nothing in Arcsecond ever used that port: every container reaches the database over Docker's internal network, and every
CLI command that needs it ([backups](/guides/operating/backups), [password rotation](/guides/operating/rotate-postgres-password)) reaches it
through the container.

Since CLI 3.20.0, the template (version 6.4) publishes neither port. Update the CLI, then the installation:

```bash
pip3 install --upgrade arcsecond
arcsecond update
```

`arcsecond update` rewrites `docker-compose.yml` in place when it has not been edited by hand. If it has, the file is
left alone and the packaged version lands beside it as `docker-compose.latest.yml`: remove the `ports:` block of the
`db` and `broker` services from your file (or merge the two files by hand), then run `arcsecond start`.

There is no need to stop or remove the other PostgreSQL. If you would rather know what holds the port anyway:
`netstat -ano | findstr :5432` in PowerShell prints the process id in the last column, and `tasklist /FI "PID eq <pid>"`
names it. On macOS and Linux, `lsof -i :5432` does both.

## Linux: "permission denied while trying to connect to the docker API"

`arcsecond start` says that this user is not allowed to talk to Docker; the underlying line is `permission denied
while trying to connect to the docker API at unix:///var/run/docker.sock`, on a Linux host running Docker Engine (not
Docker Desktop). The daemon only
answers root and members of the `docker` group, and a fresh install does not put your user there. `docker login`
succeeds regardless, because it only writes a config file, which is why the failure looks sudden.

Add your user to the group once, then log out and back in (or `newgrp docker` in the current shell), and check with
`arcsecond status` before running `arcsecond start` again:

```bash
sudo usermod -aG docker $USER
```

## "The 'xyz' variable is not set. Defaulting to a blank string."

Repeated `WARN[0000] The "..." variable is not set` lines in the progress `arcsecond start` shows, with names that look like random
fragments, come from a `$` inside one of the secret keys that `arcsecond setup` wrote to `.env`. Compose interpolates
`$name` in that file, so the `$` and the characters after it are dropped. Versions of the CLI up to 3.17.1 could
generate such keys; later versions do not.

The containers all see the same shortened value, so an installation that runs with these warnings is fine as it is.
On a **brand new** installation that has not started yet, the cleaner move is to open `.env` and remove every `$` from
`SECRET_KEY`, `AUTH_JWT_SIGNING_KEY` and `AGENT_JWT_SIGNING_KEY` (or delete `.env` and rerun `arcsecond setup` with an
up-to-date CLI). Do not touch these three keys on an installation that already has users: they sign every session
token, and changing them logs everyone out.


## "Could not find an Arcsecond.local installation"

Every `arcsecond` command that operates the installation (`start`, `stop`, `status`, `logs`, `update`, `restart`,
`backups`, `db`) looks for it in the current folder, then in the folder `arcsecond setup` last ran in. The message
lists both places it looked. Either open a terminal in the Arcsecond folder, or name it: `arcsecond start --dir
C:\Users\<name>\Arcsecond`. If `setup` has never run on this machine — say, the installation was copied over from
another one — run `arcsecond setup` once in that folder: it changes nothing in existing files and records the location.

## "The container name … is already in use"

Shown by `arcsecond start` when a container named `arcsecond-db`, `arcsecond-api`… already exists on the machine but
belongs to another installation: an older folder you set up once and forgot, or a development checkout. Docker allows
one container per name. Either start *that* installation from its own folder, or remove the leftover container with
the name Docker printed: `docker rm -f arcsecond-db`. Removing a container never touches the database volume.
