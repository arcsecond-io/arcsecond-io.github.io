# REST APIs

Every Arcsecond server — the cloud at `api.arcsecond.io` or your own
[Arcsecond.local](/local/) install — exposes the same **RESTful** API. The
easiest way to talk to it is the [CLI / Python module](/cli/api-basics), but the
endpoints are plain HTTP and fully browseable.

## API base URL

The base URL depends on which server you target:

- **Arcsecond.local**: your install's own API server (the host and port you
  configured during `arcsecond setup`).
- **Cloud**: `https://api.arcsecond.io`, where each observatory is addressed by
  its **subdomain** — `https://api.arcsecond.io/<subdomain>/…`.

The resource paths are identical in both cases:

| Resources       | Endpoint                              |
|-----------------|---------------------------------------|
| Observing Sites | `…/observingsites/[<uuid:uuid>/]`     |
| Telescopes      | `…/telescopes/[<uuid:uuid>/]`         |
| Night Logs      | `…/nightlogs/[<uuid:uuid>/]`          |
| Data Packages   | `…/datapackages/[<uuid:uuid>/]`       |
| Datasets        | `…/datasets/[<uuid:uuid>/]`           |
| Data Files      | `…/datafiles/[<int:pk>/]`             |

Apart from Data Files (see accepted formats below), all detail endpoints use
(v4) UUIDs as identifiers.

## RESTful and browseable

All endpoints are **RESTful** and browseable — purely resource-centric,
stateless endpoints with 1 URL = 1 resource, using HTTP verbs to convey meaning
(note the trailing slash):

| HTTP Verb | Payload?           | Endpoint                  | Result(s)                                                                          |
|-----------|--------------------|---------------------------|-----------------------------------------------------------------------------------|
| `GET`     |                    | `…/observingsites/`       | List all observing sites, including the UUIDs of associated Telescopes            |
| `GET`     |                    | `…/telescopes/<uuid>/`    | Get the details of a given telescope                                              |
| `POST`    | :heavy_check_mark: | `…/datasets/`             | Create a new dataset (`PUT`/`PATCH` are not allowed on list endpoints)            |
| `PATCH`   | :heavy_check_mark: | `…/datapackages/<uuid>/`  | Partially update a given data package                                            |

## Authentication

Authenticate with one of your two **personal keys**, never with the session
token you obtain at login (if that token leaks, you would no longer be able to
log in to fix anything):

- `api_key` — full access to your account,
- `upload_key` — a restricted scope, just enough to upload data.

Both are available on your Profile page. Include one in a custom header on every
request:

- `'X-Arcsecond-API-Authorization' = 'Key <api_key>'`, or
- `'X-Arcsecond-API-Authorization' = 'Key <upload_key>'`

The [CLI](/cli/api-basics) handles all of this for you once you have logged in.

## How data is organised

Data files live inside **[Datasets](/apps/data/datasets)**, which are simply
containers of files. When you [upload from the CLI](/cli/upload), the files you
send land in the dataset you target.

To each FITS or XISF data file, an Observation or a Calibration is attached.
Depending on the observation date, those are grouped into **Night Logs**, which
run from local noon to the next local noon.

## Accepted file formats

Compressed files ending in `.zip`, `.gzip` and `.bzip2` are supported.

Any file (compressed or not) whose inferred content type is `FITS image data`
or `xisf`, or whose inferred MIME type is `image/fits`, is treated as FITS
(respectively XISF) and has its headers parsed. In practice you can upload files
with the known FITS extensions
`fits, fit, fts, ft, mt, imfits, imfit, uvfits, uvfit, pha, rmf, arf, rsp, pi`.
