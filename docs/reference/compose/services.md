---
title: "Services"
visibility: public
audience: operator
tier: reference
source: generated
cli: "4.2.0"
template: "6.4"
---



# Services

What `docker-compose.yml` version 6.4 starts, generated from the file itself — the comments below are the file's own. `arcsecond status` lists the same services with their state; `arcsecond logs <service>` shows one's log.

| Service | Container | Image | Ports on the machine | Depends on | Optional |
| --- | --- | --- | --- | --- | --- |
| `db` | `arcsecond-db` | `postgres:16` | none | — | no |
| `broker` | `arcsecond-broker` | `redis:7.4` | none | — | no |
| `backend` | `arcsecond-api` | `ghcr.io/arcsecond-io/arcsecond-api:latest` | `8800:8800` | `db`, `broker` | no |
| `worker` | `arcsecond-worker` | `ghcr.io/arcsecond-io/arcsecond-api:latest` | none | `backend` | no |
| `beat` | `arcsecond-beat` | `ghcr.io/arcsecond-io/arcsecond-api:latest` | none | `backend` | no |
| `platesolver` | `arcsecond-platesolver` | `ghcr.io/arcsecond-io/arcsecond-service-platesolver-astrometry:latest` | `8900:8900` | — | no |
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
- **Ports published on the machine**: `8800:8800`
- **Starts after**: `db`, `broker`
- **Restart policy**: `unless-stopped` — comes back with Docker after a reboot unless stopped on purpose
- **Healthcheck**: yes — `arcsecond start` waits for it
- **Time allowed to stop cleanly**: `60s`
- **Storage**: `${SHARED_DATA_PATH} → /data`
- **Reads from .env**: [`SHARED_DATA_PATH`](./environment#shared_data_path)

From the file:

> Allows the backend to reach the host machine via host.docker.internal.
> Required on Linux; Docker Desktop on Windows/macOS adds this automatically.
> You must have a .env file with secret keys beside this yml file.
> Leave /data as is, it's a path inside the container, not in the host machine.
> SHARED_DATA_PATH must be a path of your host machine, specified in the .env file.

## `worker`

Arcsecond worker, for offloading background work.

- **Container**: `arcsecond-worker`
- **Image**: `ghcr.io/arcsecond-io/arcsecond-api:latest`
- **Ports published on the machine**: none — reachable from the other containers only
- **Starts after**: `backend`
- **Restart policy**: `unless-stopped` — comes back with Docker after a reboot unless stopped on purpose
- **Time allowed to stop cleanly**: `120s`
- **Storage**: `${SHARED_DATA_PATH} → /data`
- **Reads from .env**: [`SHARED_DATA_PATH`](./environment#shared_data_path)

From the file:

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
- **Ports published on the machine**: `8900:8900`
- **Restart policy**: `unless-stopped` — comes back with Docker after a reboot unless stopped on purpose

## `web`

Arcsecond webapp. Served on 5555 only: a self-hosted install is organisation-based and therefore always a portal, so the second port that used to be here (5577) served the very same app.

- **Container**: `arcsecond-web`
- **Image**: `ghcr.io/arcsecond-io/arcsecond-web:latest`
- **Ports published on the machine**: `5555:5555`
- **Starts after**: `backend`
- **Restart policy**: `unless-stopped` — comes back with Docker after a reboot unless stopped on purpose

## `alerts`

Arcsecond transient-alerts consumer (optional). Long-lived Kafka client for NASA GCN. Outbound TLS to kafka.gcn.nasa.gov and auth.gcn.nasa.gov only — nothing listens. Requires GCN_CONSUMER_CLIENT_ID / GCN_CONSUMER_CLIENT_SECRET in .env; idles harmlessly when they are absent. Single instance only — do not scale it.

- **Container**: `arcsecond-alerts`
- **Image**: `ghcr.io/arcsecond-io/arcsecond-api:latest`
- **Ports published on the machine**: none — reachable from the other containers only
- **Starts after**: `backend`
- **Restart policy**: `unless-stopped` — comes back with Docker after a reboot unless stopped on purpose
- **Time allowed to stop cleanly**: `30s`
- **Optional**: added with `arcsecond setup --with-alerts`, removed with `--without-alerts`
