---
title: "arcsecond check"
visibility: public
audience: operator
tier: reference
source: generated
cli: "4.1.0"
---

# `arcsecond check`

```
arcsecond check [OPTIONS]
```

Run every check an installation can run on itself: Docker, the
configuration files, the containers, the ports and what they are bound
to, the address other computers use, and on Windows the network profile
and the firewall rule. Each problem comes with its remedy.

Exit code 1 when something fails, 0 otherwise — so it can gate a script.

**Options**

| Option | Description |
| --- | --- |
| `--dir FOLDER` | The Arcsecond.local folder (the one holding docker-compose.yml). Default: the current folder, else the one `arcsecond setup` last ran in. |
| `--json` | Machine-readable output, for a support conversation. |
| `--fix` | Apply the remedies this command can apply itself (the Windows firewall rule, from an Administrator shell). The network profile is never changed. |
| `-v, --verbose` | Increases verbosity. |
