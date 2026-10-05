---
title: "Arcsecond.local on your network"
visibility: public
audience: admin
tier: reference
source: generated
---

# Arcsecond.local on your network

Arcsecond.local listens on one port of your local network (5555) and on nothing from the Internet side. Everything else is outbound. One destination is required: licensing.arcsecond.io on port 443. A default installation also looks up 10 public astronomy services, all on port 443, and runs without them. The rest exists only when you turn a feature on.

## What listens

- Port 5555, every interface: The application itself.
- Port 8800, this machine only: The programming interface, for the arcsecond command and scripts run on the machine itself.
- Port 8765, every interface: Relays webcam and all-sky camera images to the installation. Runs only when cameras are registered. Optional.

## What it contacts

**Required.** Outbound, encrypted.

| Destination | Port | What for |
| --- | --- | --- |
| licensing.arcsecond.io | 443 | Licence activation and daily check |

**Public catalogues and lookups.** Outbound, encrypted. The installation runs without them, with less to show.

| Destination | Port | What for |
| --- | --- | --- |
| exoplanetarchive.ipac.caltech.edu | 443 | Exoplanets and transits (NASA archive) |
| ogle.astrouw.edu.pl | 443 | Microlensing candidates (OGLE) |
| minorplanetcenter.net, cgi.minorplanetcenter.net | 443 | Near-Earth object candidates |
| celestrak.org | 443 | Satellite orbits |
| simbad.cds.unistra.fr | 443 | Object names and coordinates (SIMBAD) |
| timezonedb.com | 443 | Time-zone table refresh |
| statics.arcsecond.io | 443 | Sky darkness of a site |
| ssd.jpl.nasa.gov, ssd-api.jpl.nasa.gov | 443 | Comet and asteroid positions |
| skyview.gsfc.nasa.gov | 443 | Finding charts (NASA SkyView) |
| datacenter.iers.org, maia.usno.navy.mil, hpiers.obspm.fr, data.iana.org | 443 | Earth rotation tables |

**Only when you turn the feature on.** Outbound. Nothing here is contacted by a default installation.

| Destination | Port | What for |
| --- | --- | --- |
| scixplorer.org | 443 | Papers about a target |
| auth.gcn.nasa.gov | 443 | Transient alerts: sign-in |
| kafka, kafka1, kafka2, kafka3 .gcn.nasa.gov | 9092 | Transient alerts: the feed |
| api.tomorrow.io | 443 | Weather forecast |
| www.wis-tns.org | 443 | Transient Name Server lookups |
| a server you choose | 445, 22, 21 or 443 | Copies to a storage you attach |
| a server you choose | 587, 465 or 25 | Email through your mail server |

**To install and to update.** Outbound, encrypted. Not needed while running.

| Destination | Port | What for |
| --- | --- | --- |
| ghcr.io, pkg-containers.githubusercontent.com | 443 | Arcsecond.local itself |
| registry-1.docker.io, auth.docker.io, production.cloudflare.docker.com | 443 | Database and message broker |
| pypi.org, files.pythonhosted.org | 443 | The arcsecond command |

**From your users' browsers.** Outbound, encrypted, from their workstations, not from the installation.

| Destination | Port | What for |
| --- | --- | --- |
| server.arcgisonline.com, tile.openstreetmap.org, global.ssl.fastly.net, api.maptiler.com | 443 | Map backgrounds |
| alasky.cds.unistra.fr, alaskybis.cds.unistra.fr, alasky.unistra.fr, skyview.gsfc.nasa.gov | 443 | Sky survey pictures |
| statics.arcsecond.io | 443 | Light-pollution layer, illustrations |

**On your local network only.** Never leaves the site.

| Destination | Port | What for |
| --- | --- | --- |
| addresses you enter | set per device | Telescopes, domes, cameras, weather |
| a broadcast on your network | 32227 (datagram) | Finding instruments on the network |
| addresses you enter | 554, 80 or 443 | Webcams and all-sky cameras |

## What never leaves the site

- Images and data files
- Night logs, sessions and observing conditions
- Equipment configuration and instrument state
- Accounts, passwords and access keys of the installation's users
- Usage statistics, error reports or any other telemetry

## If the connection is cut

An activated installation keeps operating with no outside connection at all: instrument control and data recording are local. It only does without the lookups listed above.

## Check it yourself

- Run `arcsecond doctor` on the machine: it tests every destination above and sends nothing about your observatory. `arcsecond doctor --report` writes the result to a file for your records.
- This sheet is generated from the software's own network manifest (audited 2026-10-05); the current version is at docs.arcsecond.io/reference/network.
- Security questions: team@arcsecond.io

## To print, and to paste

- [The same sheet as a one-page PDF](/network/arcsecond-local-network-sheet.pdf).
- [The same sheet on one printable page](/network/network-sheet.html), to print from your browser.
- [The request to send to whoever runs your firewall](/network/firewall-request.txt), as plain text.
