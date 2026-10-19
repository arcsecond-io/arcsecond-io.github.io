---
title: "Receiving transient alerts (NASA GCN and Fink)"
visibility: public
audience: operator
tier: guide
source: handwritten
---

# Receiving transient alerts (NASA GCN and Fink)

Your installation can listen to two streams of transient events:

- NASA's [General Coordinates Network](https://gcn.nasa.gov) (GCN), over which space observatories announce gamma-ray bursts (Swift, SVOM, Fermi), X-ray transients (Einstein Probe), neutrinos (IceCube) and gravitational waves (LIGO, Virgo, KAGRA). Alerts arrive as database rows within seconds of the downlink and feed the Target-of-Opportunity features.
- [Fink](https://fink-broker.org), an alert broker that sorts the nightly detections of the ZTF sky survey by science case. Your installation receives the selection made for small telescopes: see [Survey alerts from Fink](#fink).

Both run in the same optional service. GCN waits for credentials of your own; Fink needs none and starts with the service. If you skipped the service during `arcsecond setup`, re-run:

```bash
arcsecond setup --with-alerts
arcsecond start
```

## Network prerequisites

The consumer opens outbound, encrypted connections to five names, and listens on nothing:

| Name | Port | What for |
|---|---|---|
| `auth.gcn.nasa.gov` | 443 | signing in |
| `kafka.gcn.nasa.gov` | 9092 | the first contact, which hands out the three names below |
| `kafka1.gcn.nasa.gov`, `kafka2.gcn.nasa.gov`, `kafka3.gcn.nasa.gov` | 9092 | the alerts themselves |

That is the complete list to hand your IT department if the observatory network is restricted. Note the port:
`9092` is not a web port, and a network that only lets web traffic out blocks it. It cannot go through a web proxy.

## Get your GCN credentials (about two minutes, once per installation)

GCN identifies each consumer individually — there are no shared Arcsecond credentials. Your installation gets its own identity, its own quota, and its own revocation switch.

1. Sign in (or create an account) at <https://gcn.nasa.gov/quickstart>.
2. Follow the *Start streaming GCN Notices* flow to create **client credentials**. When asked for a scope, select **`gcn.nasa.gov/kafka-public-consumer`**.
3. Copy the **client ID** and **client secret** it shows you.

## Configure

Open the `.env` file in your Arcsecond folder and paste the two values:

```
GCN_CONSUMER_CLIENT_ID=your-client-id
GCN_CONSUMER_CLIENT_SECRET=your-client-secret
```

Then recreate just the alerts service, so it reads them:

```bash
arcsecond restart alerts
```

## Verify

```bash
arcsecond logs alerts -f
```

Within about a minute you should see:

```
GCN consumer started (group.id=io.arcsecond.local.…, 32 topics).
GCN connection established (heartbeat received).
```

The heartbeat line repeats at most once per hour — that is the liveness signal. Real alerts are rare; a quiet log between heartbeats is normal and correct. Ctrl-C leaves the log; the service keeps running.

## Troubleshooting

| Symptom | Meaning and next action |
| --- | --- |
| `arcsecond status` does not list `alerts` | The service is not in your `docker-compose.yml`. Run `arcsecond setup --with-alerts`, then `arcsecond start`. |
| Log says `GCN credentials not configured — transient alerts disabled` | The two `.env` keys are empty. Follow *Configure* above, then `arcsecond restart alerts`. |
| Repeated authentication/SASL errors in the log | GCN rejected your credentials. Re-create them at <https://gcn.nasa.gov/quickstart> (check the scope is `gcn.nasa.gov/kafka-public-consumer`), update `.env`, then `arcsecond restart alerts`. |
| Connected, but no heartbeat line | An outbound connection to the names above is likely blocked, most often port 9092. Test from the host: `curl -sI https://auth.gcn.nasa.gov`, then `curl -v telnet://kafka.gcn.nasa.gov:9092` (it must say *Connected*). |
| Log says `Installation not initialized` | The backend has not completed its first boot yet. Run `arcsecond start`, which waits for the backend to be ready, then `arcsecond restart alerts`. |

## Survey alerts from Fink {#fink}

Fink, run by the IJCLab in France, reads every alert of the Zwicky Transient Facility (ZTF) and publishes them by science case, one stream per selection. Your installation subscribes to the selections a small telescope can follow, a few hundred events a night: early type Ia supernova candidates, supernova candidates, fast risers, kilonova candidates, microlensing candidates, and ZTF objects already classified on the Transient Name Server.

Each object becomes one event named by its ZTF id (`ZTF26abzidlp`), with one entry per detection, its latest magnitude, and Fink's classification scores. You can turn any of them into a target. Observing policies do not take survey events yet; when they do, a policy will have to name the survey explicitly, so an existing policy never starts receiving them on its own.

Survey events are kept for 30 days after their last detection, then removed, unless a target names them or an alert refers to them. GCN events are never removed.

Rubin Observatory (LSST) alerts will follow the same path once Arcsecond reads them.

### Network prerequisites

The consumer opens outbound connections on port `24499`, and listens on nothing:

| Name | Port | What for |
|---|---|---|
| `kafka-ztf.fink-broker.org` | 24499 | the first contact, which hands out the addresses below |
| `157.136.249.242`, `157.136.252.46`, `157.136.252.125`, `157.136.252.183`, `157.136.253.223` | 24499 | the alerts themselves (addresses as of October 2026) |

These connections are not encrypted: the alerts are public data. As with GCN's port 9092, `24499` is not a web port, and it cannot go through a web proxy.

### Configure

Nothing to do: Fink's stream is open to read, and your installation names its own consumer after its machine, so that it never shares a stream with another installation. Two optional lines in `.env` change the defaults:

```
# Turn Fink off; GCN keeps running.
FINK_ENABLED=false
# Your own selection instead of the one above: Fink's topic names, comma-separated, each ending in _ztf.
FINK_TOPICS=fink_sn_candidates_ztf,fink_kn_candidates_ztf
```

After changing either, run `arcsecond restart alerts`.

### Verify

```bash
arcsecond logs alerts -f
```

Within about a minute you should see:

```
Fink ZTF consumer started (group.id=arcsecond-local-…, 8 topics).
Fink ZTF connection established (80 partitions assigned).
```

The group id is `arcsecond-local-` followed by your installation's machine fingerprint, which no other installation shares.

ZTF observes from California: alerts arrive during the night there, and an empty log during the European day is normal.

### Troubleshooting

| Symptom | Meaning and next action |
| --- | --- |
| Log says `turned off (FINK_ENABLED=false)` | Fink is off in `.env`. Remove the line, then `arcsecond restart alerts`. |
| Log says `no topic ends in '_ztf' in FINK_TOPICS` | `FINK_TOPICS` lists no ZTF topic. Fix the list, or remove the line to use the default selection, then `arcsecond restart alerts`. |
| Started, but never `connection established` | An outbound connection on port 24499 is likely blocked. Test from the host: `curl -v telnet://kafka-ztf.fink-broker.org:24499` (it must say *Connected*). |
| Log says `Fink ZTF refused access` | Fink has closed its stream to anonymous readers, which it reserves the right to do. Update Arcsecond: a release will follow. |
| Log says `Installation not initialized` | As for GCN: run `arcsecond start`, then `arcsecond restart alerts`. |

The alerts are Fink's work: credit [Fink](https://fink-broker.org) and ZTF when you use them.

## Turning it off

Remove the service from your installation; the next start takes its container down:

```bash
arcsecond setup --without-alerts
arcsecond start
```

Your GCN credentials stay in `.env`; delete the two lines (and revoke the credential on gcn.nasa.gov) if you want them gone for good. `arcsecond setup --with-alerts` brings the service back at any time.
