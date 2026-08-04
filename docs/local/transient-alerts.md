# Receiving transient alerts (NASA GCN)

*Arcsecond.local only. Suggested location: `docs.arcsecond.io/local/transient-alerts` — the CLI, the `.env` comment and the alerts container's log line all point at this URL.*

Your installation can listen to NASA's [General Coordinates Network](https://gcn.nasa.gov) (GCN), the stream over which space observatories announce transient events — gamma-ray bursts from Swift and SVOM, X-ray transients from Einstein Probe. Alerts arrive as database rows within seconds of the satellite's downlink and feed the Target-of-Opportunity features as they land in upcoming releases.

The service is optional. If you skipped it during `arcsecond setup`, re-run:

```bash
arcsecond setup --with-alerts
```

## Network prerequisites

The consumer opens outbound TLS (port 443) connections to exactly two hosts, and listens on nothing:

- `kafka.gcn.nasa.gov`
- `auth.gcn.nasa.gov`

That is the complete list to hand your IT department if the observatory network is restricted.

## Get your GCN credentials (about two minutes, once per installation)

GCN identifies each consumer individually — there are no shared Arcsecond credentials. Your installation gets its own identity, its own quota, and its own revocation switch.

1. Sign in (or create an account) at <https://gcn.nasa.gov/quickstart>.
2. Follow the *Start streaming GCN Notices* flow to create **client credentials**. When asked for a scope, select **`gcn.nasa.gov/kafka-public-consumer`**.
3. Copy the **client ID** and **client secret** it shows you.

## Configure

Open the `.env` file beside your `docker-compose.yml` and paste the two values:

```
GCN_CONSUMER_CLIENT_ID=your-client-id
GCN_CONSUMER_CLIENT_SECRET=your-client-secret
```

Then start (or restart) just the alerts service:

```bash
docker compose up -d alerts
```

## Verify

```bash
docker logs -f arcsecond-alerts
```

Within about a minute you should see:

```
GCN consumer started (group.id=io.arcsecond.local.…, 32 topics).
GCN connection established (heartbeat received).
```

The heartbeat line repeats at most once per hour — that is the liveness signal. Real alerts are rare; a quiet log between heartbeats is normal and correct.

## Troubleshooting

| Symptom | Meaning and next action |
| --- | --- |
| `docker logs arcsecond-alerts` says *no such container* | The service is not in your `docker-compose.yml`. Run `arcsecond setup --with-alerts`. If you have customized your compose file, the packaged version lands in `docker-compose.latest.yml` — merge the `# >>> arcsecond:alerts` block from there by hand. |
| Log says `GCN credentials not configured — transient alerts disabled` | The two `.env` keys are empty. Follow *Configure* above and restart: `docker compose up -d alerts`. |
| Repeated authentication/SASL errors in the log | GCN rejected your credentials. Re-create them at <https://gcn.nasa.gov/quickstart> (check the scope is `gcn.nasa.gov/kafka-public-consumer`), update `.env`, restart the service. |
| Connected, but no heartbeat line | Outbound 443 to the two hosts above is likely blocked. Test from the host: `curl -sI https://auth.gcn.nasa.gov`. |
| Log says `Installation not initialized` | The backend has not completed its first boot yet. Start the full stack (`docker compose up -d`), let the `backend` container become healthy, then run `docker compose restart alerts`. |

## Turning it off

Stop it temporarily:

```bash
docker compose stop alerts
```

Or remove it from your compose file entirely:

```bash
arcsecond setup --without-alerts
```

Your GCN credentials stay in `.env` either way; delete the two lines (and revoke the credential on gcn.nasa.gov) if you want them gone for good.
