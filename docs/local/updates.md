# Updates of Arcsecond.local

::: info
As of now, the installation of Arcsecond.local requires an individual authentication token, provided manually by
Arcsecond. In the future, the process will be streamlined and easier.
:::

Note that your existing installation can still be running, there is no need to stop it before updating. As usual, these
are commands to be executed in the Arcsecond folder (where the file `docker-compose.yml` file resides).

- Update the Arcsecond CLI: `pip3 install --upgrade arcsecond`
- Let it bring `docker-compose.yml` up to date: `arcsecond setup`
- Update your Docker images with the latest ones: `docker compose pull`
- Update your containers (it works for both a running or stopped installation): `docker compose up -d`

Note that it may take some time (1 min or so) for the containers to be recreated. Simply be patient. This is due to
the various timeout/starting time settings.

## Why run `arcsecond setup` again

The `docker-compose.yml` file is not part of the Docker images: it is written by the CLI, and evolves with it. Running
`arcsecond setup` after updating the CLI rewrites the file in place when it has not been edited by hand. If it has, the
file is left alone and the packaged version is written beside it as `docker-compose.latest.yml`, for you to compare and
merge. Your `.env` file only gains keys it lacks, and your data is never touched.

The latest change of this kind: since CLI 3.20.0 (template version 6.4), the database and Redis containers no longer
publish a port on the machine, not even on `localhost`. They are reachable from the other containers only, which is all
Arcsecond ever needed, and an installation can now start next to a PostgreSQL already running on the machine. An
installation that fails with *ports are not available* on `docker compose up -d` is one that has not had this update;
see [Troubleshooting](/local/troubleshooting).
