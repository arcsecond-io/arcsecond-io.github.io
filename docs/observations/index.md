Data & Observations
===

:::warning
Documentation for the coming Arcsecond V4
:::

Arcsecond aims at providing a consistent platform for astronomical observers, being single or grouped into an
organisation (such as an astronomy club, or an observatory - see [Observatory Portals](/portals/) made for that).

As such, Arcsecond offers solutions for astronomical data alone, for observations alone, and for the combination of
the two (where things become clearly more interesting).

Storing data isn't an easy task. Arcsecond provides its own cloud storage solution based on secured Amazon AWS S3
buckets. But because many astronomers *and observatories* have often already their own storages, Arcsecond
provides a solution to attach such so-called "external" storages to it.

These storages attachments were introduced in Arcsecond V4, and supports external AWS S3 buckets for now. But more
connectors will be added over time, such as Dropbox and Local Disks.

You will find in this documentation:

* tutorials on how to provide read-only credentials, for each storage solution,
* technical details on how Arcsecond store credentials

What Arcsecond infer from your data
---

Arcsecond will parse storage content, as it does on its own [Cloud Storage](/observations/cloud-storage) when data
is uploaded to it. This parsing allows to:

* Extract FITS- and XISF-files headers, for easy searching in web interface,
* Create 2D-image and 1D-spectrum previews,
* **Create your personal list of all your observed targets, associated with its data** (this will combine all cloud and
  external storages you have attached),
* Reconstruct your observing nights (when possible).

:::info
We are working on an option to restrict the parsing to specific (sub)folder(s).
:::
