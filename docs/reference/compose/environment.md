---
title: "Environment (.env)"
visibility: public
audience: operator
tier: reference
source: generated
cli: "4.3.3"
template: "7.4"
---



# Environment (.env)

Every key the `.env` file next to `docker-compose.yml` can hold: the ones `arcsecond setup` writes, the ones you fill in, and the ones only the backend reads. Compose reads this file and hands the values to the containers; a container keeps the values it was created with, so after editing it run `arcsecond restart`.

::: warning
A `$` in a value is interpolated by compose. Quotes, backslashes and `#` break the parse. Keep values plain.
:::

| Key | Who sets it | What it is for |
| --- | --- | --- |
| `SECRET_KEY` | written by `arcsecond setup` | Django's secret key: signs sessions and tokens. Generated once; changing it logs everyone out. |
| `AUTH_JWT_SIGNING_KEY` | written by `arcsecond setup` | Signs the access tokens of the web interface and the CLI. Changing it logs everyone out. |
| `AGENT_JWT_SIGNING_KEY` | written by `arcsecond setup` | Signs the tokens of the equipment agents talking to the Control Room. |
| `FIELD_ENCRYPTION_KEY` | written by `arcsecond setup` | Encrypts sensitive fields in the database — external-storage credentials among them. Losing it makes those fields unreadable. |
| `SHARED_DATA_PATH` | written by `arcsecond setup` | The folder on this machine where the installation keeps everything it persists: data files, previews, caches, database backups. Mounted as /data inside the containers. Asked at setup. |
| `POSTGRES_USER` | written by `arcsecond setup` | The database role. Stable across installs. |
| `POSTGRES_PASSWORD` | written by `arcsecond setup` | The role's password, generated per install. Only read by Postgres on the very first boot; rotate it with `arcsecond db set-password`, never by editing this line alone. |
| `POSTGRES_DB` | written by `arcsecond setup` | The database name. |
| `GCN_CONSUMER_CLIENT_ID` | set by the operator | NASA GCN client credentials for the optional transient-alerts service. Empty until you paste yours. |
| `GCN_CONSUMER_CLIENT_SECRET` | set by the operator | See GCN_CONSUMER_CLIENT_ID. |
| `HOSTED_FRONTEND_HOST` | set by the operator | The address other computers reach the installation at, port included (e.g. 192.168.1.42:5555). The backend builds invitation and password-reset links from it. Empty means localhost:5555. Set with `arcsecond setup --lan-host`. |
| `ARCSECOND_OPTIONAL_SERVICES` | written by `arcsecond setup` | The operator's yes/no answers about optional services (e.g. `alerts:yes`), so setup does not ask again. |
| `HOSTED_FRONTEND_SCHEME` | read by the backend | `http` (default) or `https`, when a TLS-terminating reverse proxy of your own sits in front of the installation. |
| `HOSTED_EXTRA_TRUSTED_ORIGINS` | read by the backend | Comma-separated origins, scheme included, to trust besides private-network addresses — a public domain, a Tailscale name. Not needed for a LAN address. |
| `SKY_BRIGHTNESS_GEOTIFF_PATH` | written by `arcsecond setup` | Where the backend finds the sky-brightness map kept on this machine (a path under `/data`). Empty: the map is looked up on statics.arcsecond.io instead. Change the answer with `arcsecond setup --with-sky-map` or `--without-sky-map`. |
| `LIVE_IMAGE_PROXY_URL` | read by the backend | Where the backend reaches the live-image proxy for cameras. Default http://host.docker.internal:8765; change it only for a proxy on another machine, then `arcsecond restart backend`. |
| `LOCAL_EMAIL_VERIFICATION_GRACE_HOURS` | read by the backend | How long a new member may use the installation before verifying their email, on an installation with no mail server. |
| `ARCSECOND_DOWNLOADS_PER_CLIENT` | set by the operator | How many downloads one computer may have open at once; past it, the next one is refused with a 429 until one finishes. Default 6. Then `arcsecond restart web`. |
| `ARCSECOND_DOWNLOADS_TOTAL` | set by the operator | How many downloads the installation serves at once, all computers together. Default 24. |
| `ARCSECOND_DOWNLOAD_RATE` | set by the operator | The speed of each download, in bytes per second, `k` and `m` allowed; `0` for no limit. Default `20m`. Lower it when the observers work remotely over a link the downloads would otherwise fill. |
| `ARCSECOND_BACKEND_MEMORY` | set by the operator | The most memory the backend container may use, e.g. `6g` (the default). Past it, Docker restarts the busiest of its processes rather than letting the machine take memory from the database. |
| `ARCSECOND_WORKER_MEMORY` | set by the operator | The same ceiling for the worker, which runs the exposures and procedures. Default `6g`. |
| `ARCSECOND_DATA_WORKER_MEMORY` | set by the operator | The same ceiling for the data worker: zip archives, previews, storage pushes, backups. Default `3g`. |
| `ARCSECOND_DATA_WORKER_CONCURRENCY` | set by the operator | How many jobs the data worker runs at once. Default 2; each can hold a few hundred MB. |

## `SECRET_KEY` {#secret_key}

*Written by `arcsecond setup`.* Django's secret key: signs sessions and tokens. Generated once; changing it logs everyone out.

## `AUTH_JWT_SIGNING_KEY` {#auth_jwt_signing_key}

*Written by `arcsecond setup`.* Signs the access tokens of the web interface and the CLI. Changing it logs everyone out.

## `AGENT_JWT_SIGNING_KEY` {#agent_jwt_signing_key}

*Written by `arcsecond setup`.* Signs the tokens of the equipment agents talking to the Control Room.

## `FIELD_ENCRYPTION_KEY` {#field_encryption_key}

*Written by `arcsecond setup`.* Encrypts sensitive fields in the database — external-storage credentials among them. Losing it makes those fields unreadable.

## `SHARED_DATA_PATH` {#shared_data_path}

*Written by `arcsecond setup`.* The folder on this machine where the installation keeps everything it persists: data files, previews, caches, database backups. Mounted as /data inside the containers. Asked at setup.

## `POSTGRES_USER` {#postgres_user}

*Written by `arcsecond setup`.* The database role. Stable across installs.

## `POSTGRES_PASSWORD` {#postgres_password}

*Written by `arcsecond setup`.* The role's password, generated per install. Only read by Postgres on the very first boot; rotate it with `arcsecond db set-password`, never by editing this line alone.

## `POSTGRES_DB` {#postgres_db}

*Written by `arcsecond setup`.* The database name.

## `GCN_CONSUMER_CLIENT_ID` {#gcn_consumer_client_id}

*Set by the operator.* NASA GCN client credentials for the optional transient-alerts service. Empty until you paste yours.

## `GCN_CONSUMER_CLIENT_SECRET` {#gcn_consumer_client_secret}

*Set by the operator.* See GCN_CONSUMER_CLIENT_ID.

## `HOSTED_FRONTEND_HOST` {#hosted_frontend_host}

*Set by the operator.* The address other computers reach the installation at, port included (e.g. 192.168.1.42:5555). The backend builds invitation and password-reset links from it. Empty means localhost:5555. Set with `arcsecond setup --lan-host`.

## `ARCSECOND_OPTIONAL_SERVICES` {#arcsecond_optional_services}

*Written by `arcsecond setup`.* The operator's yes/no answers about optional services (e.g. `alerts:yes`), so setup does not ask again.

## `HOSTED_FRONTEND_SCHEME` {#hosted_frontend_scheme}

*Read by the backend.* `http` (default) or `https`, when a TLS-terminating reverse proxy of your own sits in front of the installation.

## `HOSTED_EXTRA_TRUSTED_ORIGINS` {#hosted_extra_trusted_origins}

*Read by the backend.* Comma-separated origins, scheme included, to trust besides private-network addresses — a public domain, a Tailscale name. Not needed for a LAN address.

## `SKY_BRIGHTNESS_GEOTIFF_PATH` {#sky_brightness_geotiff_path}

*Written by `arcsecond setup`.* Where the backend finds the sky-brightness map kept on this machine (a path under `/data`). Empty: the map is looked up on statics.arcsecond.io instead. Change the answer with `arcsecond setup --with-sky-map` or `--without-sky-map`.

## `LIVE_IMAGE_PROXY_URL` {#live_image_proxy_url}

*Read by the backend.* Where the backend reaches the live-image proxy for cameras. Default http://host.docker.internal:8765; change it only for a proxy on another machine, then `arcsecond restart backend`.

## `LOCAL_EMAIL_VERIFICATION_GRACE_HOURS` {#local_email_verification_grace_hours}

*Read by the backend.* How long a new member may use the installation before verifying their email, on an installation with no mail server.

## `ARCSECOND_DOWNLOADS_PER_CLIENT` {#arcsecond_downloads_per_client}

*Set by the operator.* How many downloads one computer may have open at once; past it, the next one is refused with a 429 until one finishes. Default 6. Then `arcsecond restart web`.

## `ARCSECOND_DOWNLOADS_TOTAL` {#arcsecond_downloads_total}

*Set by the operator.* How many downloads the installation serves at once, all computers together. Default 24.

## `ARCSECOND_DOWNLOAD_RATE` {#arcsecond_download_rate}

*Set by the operator.* The speed of each download, in bytes per second, `k` and `m` allowed; `0` for no limit. Default `20m`. Lower it when the observers work remotely over a link the downloads would otherwise fill.

## `ARCSECOND_BACKEND_MEMORY` {#arcsecond_backend_memory}

*Set by the operator.* The most memory the backend container may use, e.g. `6g` (the default). Past it, Docker restarts the busiest of its processes rather than letting the machine take memory from the database.

## `ARCSECOND_WORKER_MEMORY` {#arcsecond_worker_memory}

*Set by the operator.* The same ceiling for the worker, which runs the exposures and procedures. Default `6g`.

## `ARCSECOND_DATA_WORKER_MEMORY` {#arcsecond_data_worker_memory}

*Set by the operator.* The same ceiling for the data worker: zip archives, previews, storage pushes, backups. Default `3g`.

## `ARCSECOND_DATA_WORKER_CONCURRENCY` {#arcsecond_data_worker_concurrency}

*Set by the operator.* How many jobs the data worker runs at once. Default 2; each can hold a few hundred MB.
