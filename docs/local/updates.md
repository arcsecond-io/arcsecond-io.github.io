# Updates of Arcsecond.local

::: info
As of now, the installation of Arcsecond.local requires an individual authentication token, provided manually by
Arcsecond. In the future, the process will be streamlined and easier.
:::

Note that your existing installation can still be running, there is no need to stop it before updating. As usual, these
are commands to be executed in the Arcsecond folder (where the file `docker-compose.yml` file resides).

- Update your Docker images with the latest ones: `docker compose pull`
- Update your containers (it works for both a running or stopped installation): `docker compose up -d`

Note that it may take some time (1 min or so) for the containers to be recreated. Simply be patient. This is due to
the various timeout/starting time settings. 
