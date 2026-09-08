# Troubleshooting

## Windows + Docker Desktop: “/data is not writable” troubleshooting blurb (copy/paste)

- Check Docker Desktop is running (the whale icon should be active). If it isn’t, docker compose commands may hang or
  fail.
- Verify the host folder exists and is accessible: create the directory referenced by SHARED_DATA_PATH in File
  Explorer (and ensure you can create a file in it).
- Avoid network / cloud-synced paths at first (common culprits: UNC paths like \\server\share, mapped drives,
  OneDrive/SharePoint-synced folders). Prefer something simple like C:\Users\<name>\ArcsecondData.
- If you use another drive (D:\ / external drive): enable sharing in Docker Desktop. Go to Docker Desktop → Settings →
  Resources → File sharing (wording may vary) and add the drive/folder, then Apply & Restart.
- Confirm the mount from inside a container (quick sanity check): Run a one-off container that writes a test file to
  /data and confirm the file appears on the host. If it can’t write, it’s almost always a sharing/permissions/path
  issue.
  

## Linux: "permission denied while trying to connect to the docker API"

The full line is `permission denied while trying to connect to the docker API at unix:///var/run/docker.sock`, and it
shows up right after `docker compose up -d` on a Linux host running Docker Engine (not Docker Desktop). The daemon only
answers root and members of the `docker` group, and a fresh install does not put your user there. `docker login`
succeeds regardless, because it only writes a config file, which is why the failure looks sudden.

Add your user to the group once, then log out and back in (or `newgrp docker` in the current shell), and check with
`docker ps` before running `docker compose up -d` again:

```bash
sudo usermod -aG docker $USER
```

## "The 'xyz' variable is not set. Defaulting to a blank string."

Repeated `WARN[0000] The "..." variable is not set` lines on `docker compose up`, with names that look like random
fragments, come from a `$` inside one of the secret keys that `arcsecond setup` wrote to `.env`. Compose interpolates
`$name` in that file, so the `$` and the characters after it are dropped. Versions of the CLI up to 3.17.1 could
generate such keys; later versions do not.

The containers all see the same shortened value, so an installation that runs with these warnings is fine as it is.
On a **brand new** installation that has not started yet, the cleaner move is to open `.env` and remove every `$` from
`SECRET_KEY`, `AUTH_JWT_SIGNING_KEY` and `AGENT_JWT_SIGNING_KEY` (or delete `.env` and rerun `arcsecond setup` with an
up-to-date CLI). Do not touch these three keys on an installation that already has users: they sign every session
token, and changing them logs everyone out.

