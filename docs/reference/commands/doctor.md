---
title: "arcsecond doctor"
visibility: public
audience: operator
tier: reference
source: generated
cli: "4.3.3"
---

# `arcsecond doctor`

```
arcsecond doctor [OPTIONS]
```

Run every check an installation can run on itself: Docker, the
configuration files, the containers and what they are allowed to do, the
ports and what they are bound to, the address other computers use, disk
space, and on Windows the network profile and the firewall rule.

Then look outward: every destination Arcsecond.local may contact is
tested from this machine (name, connection, encryption, certificate),
and this machine's clock is compared with a reference. Nothing about your
observatory is sent. Each problem comes with its remedy, or with the
sentence to send to whoever runs your network.

Exit code 0 when everything required works, 1 when only an optional
outside destination is out of reach, 2 when something required fails.

`arcsecond check` is this same command, under its former name.

**Options**

| Option | Description |
| --- | --- |
| `--dir FOLDER` | The Arcsecond.local folder (the one holding docker-compose.yml). Default: the current folder, else the one `arcsecond setup` last ran in. |
| `--json` | Machine-readable output, for a support conversation. |
| `--fix` | Apply the remedies this command can apply itself (the Windows firewall rule, from an Administrator shell). The network profile is never changed. |
| `--local-only` | Skip the outside destinations: test this machine and nothing beyond it. |
| `--report DIRECTORY` | Also write the result to a dated file, in this folder (default: the current one), to attach to a ticket. Local addresses and this machine's name are left out. |
| `--show-local` | With --report: keep the local network's addresses and this machine's name in the file. |
| `-v, --verbose` | Increases verbosity. |
