---
title: "arcsecond login"
visibility: public
audience: operator
tier: reference
source: generated
cli: "4.0.0"
---

# `arcsecond login`

```
arcsecond login [OPTIONS]
```

Login to your Arcsecond account, on the API server the CLI points at.

You must provide either your Access Key, or your Upload Key.
By doing so, you choose the level of access you want to store
on this computer. The Access Key give a full API access to your
data. The Upload Key gives just enough permissions to upload data.

Both keys can be retrieved from your personal Settings page on
https://www.arcsecond.io (or on your own Arcsecond.local).

Beware that the Key you provide will be stored locally on the file:
~/.config/arcsecond/config.ini

**Options**

| Option | Description |
| --- | --- |
| `--username TEXT` | Account username (without @). Primary email address is also allowed.  [required] |
| `--type [access|upload]` | Your access key (a.k.a. API key). Visit your settings page to copy and paste it here. One of Access or Upload key must be provided.  [required] |
| `--key TEXT` | Your upload key. Visit your settings page to copy and paste it here. One of Access or Upload key must be provided.  [required] |
| `-v, --verbose` | Increases verbosity. |
