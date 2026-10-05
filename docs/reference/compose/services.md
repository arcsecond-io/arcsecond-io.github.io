---
title: "Services"
visibility: public
audience: operator
tier: reference
source: generated
cli: "4.3.3"
template: "7.4"
---



# Services

What `docker-compose.yml` version 7.4 starts, generated from the file itself — the comments below are the file's own. `arcsecond status` lists the same services with their state; `arcsecond logs <service>` shows one's log.

| Service | Container | Image | Ports on the machine | Depends on | Optional |
| --- | --- | --- | --- | --- | --- |
| `db` | `arcsecond-db` | `postgres:16` | none | — | no |
| `broker` | `arcsecond-broker` | `redis:7.4` | none | — | no |
| `backend` | `arcsecond-api` | `ghcr.io/arcsecond-io/arcsecond-api:latest` | `127.0.0.1:8800:8800` | `db`, `broker` | no |
| `worker` | `arcsecond-worker` | `ghcr.io/arcsecond-io/arcsecond-api:latest` | none | `backend` | no |
| `dataworker` | `arcsecond-dataworker` | `ghcr.io/arcsecond-io/arcsecond-api:latest` | none | `backend` | no |
| `beat` | `arcsecond-beat` | `ghcr.io/arcsecond-io/arcsecond-api:latest` | none | `backend` | no |
| `platesolver` | `arcsecond-platesolver` | `ghcr.io/arcsecond-io/arcsecond-service-platesolver-astrometry:latest` | none | — | no |
| `web` | `arcsecond-web` | `ghcr.io/arcsecond-io/arcsecond-web:latest` | `5555:5555` | `backend` | no |
| `alerts` | `arcsecond-alerts` | `ghcr.io/arcsecond-io/arcsecond-api:latest` | none | `backend` | yes (`alerts`) |

## `db`

Database (PostgresQL)

- **Container**: `arcsecond-db`
- **Image**: `postgres:16`
- **Ports published on the machine**: none — reachable from the other containers only
- **Restart policy**: `unless-stopped` — comes back with Docker after a reboot unless stopped on purpose
- **Storage**: `arcsecond_postgres_data:/var/lib/postgresql/data`

From the file:

> No host port. The backend reaches the DB over the internal Docker
> network (hostname `arcsecond-db`), and every CLI command that needs
> the DB (backups, restore, password rotation) goes through `docker exec`
> into this container. Publishing 5432 on the host bought nothing and
> failed the whole stack whenever another Postgres already held it.
> You must have a .env file with database credentials beside this yml file.

## `broker`

Broker (Redis) - Shared messaging service between different services.

- **Container**: `arcsecond-broker`
- **Image**: `redis:7.4`
- **Ports published on the machine**: none — reachable from the other containers only
- **Restart policy**: `unless-stopped` — comes back with Docker after a reboot unless stopped on purpose

From the file:

> No host port either: Redis with no auth must never be reachable from
> outside the stack, and the backend reaches it over the Docker network.

## `backend`

Arcsecond backend (REST APIs). Can be used for API calls and external pipelines, scripts etc.

- **Container**: `arcsecond-api`
- **Image**: `ghcr.io/arcsecond-io/arcsecond-api:latest`
- **Ports published on the machine**: `127.0.0.1:8800:8800`
- **Starts after**: `db`, `broker`
- **Restart policy**: `unless-stopped` — comes back with Docker after a reboot unless stopped on purpose
- **Healthcheck**: yes — `arcsecond start` waits for it
- **Time allowed to stop cleanly**: `60s`
- **Storage**: `${SHARED_DATA_PATH} → /data`
- **Reads from .env**: [`SHARED_DATA_PATH`](./environment#shared_data_path), [`ARCSECOND_BACKEND_MEMORY`](./environment#arcsecond_backend_memory)

From the file:

> This machine only. Browsers and other computers go through the webapp's
> port, which serves the very same API under /api/; 8800 is for the
> `arcsecond` command and scripts run on this computer. Published on every
> interface, it was a second, unneeded door onto the network.
> Allows the backend to reach the host machine via host.docker.internal.
> Required on Linux; Docker Desktop on Windows/macOS adds this automatically.
> You must have a .env file with secret keys beside this yml file.
> Leave /data as is, it's a path inside the container, not in the host machine.
> SHARED_DATA_PATH must be a path of your host machine, specified in the .env file.
> A ceiling, so no burst of work here can take the memory Postgres needs.
> Downloads no longer pass through these processes (the web container
> sends them), but rendering a large frame for review still does.

## `worker`

Arcsecond worker, for offloading background work: the Control Room's exposures and procedures, and everything else someone is waiting on.

- **Container**: `arcsecond-worker`
- **Image**: `ghcr.io/arcsecond-io/arcsecond-api:latest`
- **Ports published on the machine**: none — reachable from the other containers only
- **Starts after**: `backend`
- **Restart policy**: `unless-stopped` — comes back with Docker after a reboot unless stopped on purpose
- **Time allowed to stop cleanly**: `120s`
- **Storage**: `${SHARED_DATA_PATH} → /data`
- **Reads from .env**: [`SHARED_DATA_PATH`](./environment#shared_data_path), [`ARCSECOND_WORKER_MEMORY`](./environment#arcsecond_worker_memory)

From the file:

> The default queue only: the data worker below takes the rest.
> Leave /data as is, it's a path inside the container, not in the host machine.
> SHARED_DATA_PATH must be a path of your host machine, specified in the .env file.

## `dataworker`

Arcsecond data worker, for the background work nobody at the telescope is waiting on: zip archives, previews of uploaded files, pushes to your storages, database backups, keograms, catalogue refreshes. On its own queue, so a long zip can never hold up a frame the observer is waiting for.

- **Container**: `arcsecond-dataworker`
- **Image**: `ghcr.io/arcsecond-io/arcsecond-api:latest`
- **Ports published on the machine**: none — reachable from the other containers only
- **Starts after**: `backend`
- **Restart policy**: `unless-stopped` — comes back with Docker after a reboot unless stopped on purpose
- **Time allowed to stop cleanly**: `120s`
- **Storage**: `${SHARED_DATA_PATH} → /data`
- **Reads from .env**: [`ARCSECOND_DATA_WORKER_CONCURRENCY`](./environment#arcsecond_data_worker_concurrency), [`SHARED_DATA_PATH`](./environment#shared_data_path), [`ARCSECOND_DATA_WORKER_MEMORY`](./environment#arcsecond_data_worker_memory)

From the file:

> Few at a time: this work is heavy and none of it is urgent.
> Leave /data as is, it's a path inside the container, not in the host machine.
> SHARED_DATA_PATH must be a path of your host machine, specified in the .env file.

## `beat`

Arcsecond beat, to launch specific background tasks at specific times.

- **Container**: `arcsecond-beat`
- **Image**: `ghcr.io/arcsecond-io/arcsecond-api:latest`
- **Ports published on the machine**: none — reachable from the other containers only
- **Starts after**: `backend`
- **Restart policy**: `unless-stopped` — comes back with Docker after a reboot unless stopped on purpose
- **Time allowed to stop cleanly**: `30s`

## `platesolver`

Arcsecond plate solver service, for solving coordinates from raw images.

- **Container**: `arcsecond-platesolver`
- **Image**: `ghcr.io/arcsecond-io/arcsecond-service-platesolver-astrometry:latest`
- **Ports published on the machine**: none — reachable from the other containers only
- **Restart policy**: `unless-stopped` — comes back with Docker after a reboot unless stopped on purpose

From the file:

> No host port. Only the backend calls the solver, over the internal Docker
> network; it has no authentication and nothing outside the stack needs it.

## `web`

Arcsecond webapp. Served on 5555 only: a self-hosted install is organisation-based and therefore always a portal, so the second port that used to be here (5577) served the very same app.

- **Container**: `arcsecond-web`
- **Image**: `ghcr.io/arcsecond-io/arcsecond-web:latest`
- **Ports published on the machine**: `5555:5555`
- **Starts after**: `backend`
- **Restart policy**: `unless-stopped` — comes back with Docker after a reboot unless stopped on purpose
- **Storage**: `${SHARED_DATA_PATH} → /data`
- **Reads from .env**: [`ARCSECOND_DOWNLOADS_PER_CLIENT`](./environment#arcsecond_downloads_per_client), [`ARCSECOND_DOWNLOADS_TOTAL`](./environment#arcsecond_downloads_total), [`ARCSECOND_DOWNLOAD_RATE`](./environment#arcsecond_download_rate), [`SHARED_DATA_PATH`](./environment#shared_data_path)

From the file:

> Download limits: how many downloads one computer may have open at
> once, how many in total, and the speed of each (bytes per second,
> k and m allowed, 0 for none). They keep downloads from filling the
> link a remote observer drives the telescope through.
> The same folder, read-only: this container sends the stored files
> itself, once the backend has said who may read them.

## `alerts`

Arcsecond transient-alerts consumer (optional). Long-lived Kafka client for NASA GCN. Outbound TLS only — nothing listens: auth.gcn.nasa.gov on 443, then kafka, kafka1, kafka2 and kafka3.gcn.nasa.gov on 9092. Requires GCN_CONSUMER_CLIENT_ID / GCN_CONSUMER_CLIENT_SECRET in .env; idles harmlessly when they are absent. Single instance only — do not scale it.

- **Container**: `arcsecond-alerts`
- **Image**: `ghcr.io/arcsecond-io/arcsecond-api:latest`
- **Ports published on the machine**: none — reachable from the other containers only
- **Starts after**: `backend`
- **Restart policy**: `unless-stopped` — comes back with Docker after a reboot unless stopped on purpose
- **Time allowed to stop cleanly**: `30s`
- **Optional**: added with `arcsecond setup --with-alerts`, removed with `--without-alerts`
