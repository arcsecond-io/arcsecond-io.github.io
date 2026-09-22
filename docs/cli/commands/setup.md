---
title: "arcsecond setup"
visibility: public
audience: operator
tier: reference
source: generated
cli: "4.0.0"
---

# `arcsecond setup`

```
arcsecond setup [OPTIONS]
```

Write (or update) the two files an installation is made of, in the
current folder: .env, with this installation's secrets, and
docker-compose.yml. Then:  arcsecond start

Run it again after upgrading the CLI to bring docker-compose.yml up to
date; nothing of yours is overwritten.

**Options**

| Option | Description |
| --- | --- |
| `--with-alerts / --without-alerts` | Include (or remove) the optional transient-alerts (ToO) service in docker-compose.yml without prompting. |
| `--lan-host HOST[:PORT]` | The address other computers reach this machine at (e.g. 192.168.1.42 or arcsecond.local). Needed for invitation and password-reset links to work from other computers. Port defaults to 5555. |
| `-v, --verbose` | Increases verbosity. |
