# REST API Endpoints

## What are the API endpoints for an Observatory?

Every observatory has a **subdomain** that serves as identifier. Then, the API
endpoints simply follows:

| Resources | Endpoint                                                             |
| ---- |----------------------------------------------------------------------|
| Observing Sites | `https://api.arcsecond.io/<subdomain>/observingsites/[<uuid:uuid>/]` |
| Telescopes | `https://api.arcsecond.io/<subdomain>/telescopes/[<uuid:uuid>/]`         |
| Night Logs | `https://api.arcsecond.io/<subdomain>/nightlogs/[<uuid:uuid>/]`          |
| Data Packages | `https://api.arcsecond.io/<subdomain>/datapackages/[<uuid:uuid>/]`       |
| Datasets | `https://api.arcsecond.io/<subdomain>/datasets/[<uuid:uuid>/]`           |
| Data Files | `https://api.arcsecond.io/<subdomain>/datafiles/[<int:pk>/]`             |

Apart from the Data files (see below for accepted formats), all details
endpoints are using (v4) UUIDs as identifiers.

RESTful ?
---

All our endpoints are **RESTful** and browseable (in one word, these are purely
resource-centric stateless endpoints with 1 URL = 1 resource, and using HTTP
verbs to convey action meaning).

In action, it means, for instance (note the presence of the trailing slash):

| HTTP Verb | Payload ?           | Endpoint                     | Result(s)              |
| --- |---------------------|------------------------------|---------------------------------------------------------------------------------------------------|
| `GET` |                     | `/<subdomain>/observingsites/` | Get the list of all observing sites for that Observatory, including UUIDs of associated Telescopes |
| `GET` |                     | `/<subdomain>/telescopes/<uuid>/` | Get the details of that given telescope.                               |
| `POST` | :heavy_check_mark:  | `/<subdomain>/datasets/`     | Create a new dataset (`PUT` and `PATCH` not allowed on List endpoints) |
| `PATCH` | :heavy_check_mark:|  `/<subdomain>/datapackages/<uuid>/` | Partially update that given datapackage with new information |

etc.

Should I use authentication to interact with endpoints?
---

**Yes, but not your auth token** obtained upon login. For a simple reason: if
your token is compromised or has leaked, you won't be able to login anymore to
correct anything. **Use one of your two personal keys:** `api_key` or 
`upload_key`.

The first one gives a **full access to your account**, while the second key has
a restricted scope just enough to perform an upload of data.

They are both available in your Profile's Page.

Then, include it into every HTTPS request you make with Arcsecond, in a custom
header:

* `'X-Arcsecond-API-Authorization' = 'Key <api_key>'` or,
* `'X-Arcsecond-API-Authorization' = 'Key <upload_key>'`

How is data organised?
---

Data files are put inside Datasets, which are simply containers of files. When
uploading with the Oort uploader tool, every local folder on disk that is being
watched is transformed into a dataset in the cloud.

To each data files of FITS or XISF format, an Observation or a Calibration will
be attached. Then, depending on the observation date, these observations dans
calibrations are put inside Night Logs, which run from local noon to the next
local noon.


Can the files be compressed ? Are all FITS variants accepted ?
---

Yes and yes. We support compressed files ending in `.zip`, `.gzip` and `.bzip2`.

Are all FITS variants accepted? Are XISF files supported?
---

Yes and yes. Any file (compressed or not) whose inferred content 
type is `FITS image data` or `xisf` or its inferred MIME type is `image/fits`, will be
considered as FITS, respectively XISF, and its headers will be parsed.

It means you can technically upload files with the following known 'FITS' extensions:
`fits, fit, fts, ft, mt, imfits, imfit, uvfits, uvfit, pha, rmf, arf, rsp, pi`, and
