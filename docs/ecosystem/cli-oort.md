Command-Line Interface (CLI)
===

The Arcsecond CLI is a Python module that can be used in the terminal with the command `arcsecond.`
The full documentation is available [here](https://docs.arcsecond.io/cli).

Quick Start
---

* `pip install arcsecond`
* `arcsecond --help`

<br/>
<br/>
<br/>

Oort
===

Oort is our open-source uploader tool, written in Python, to make it easy for you to archive data in the Arcsecond
Cloud. The full documentation is available [here](https://docs.arcsecond.io/oort). Oort is heavily using the CLI module
to communicate with Arcsecond backend.

Quick Start
---

To quickly upload data to your Observatory Portal you need two things:

1. Your `subdomain`, which serves as an identifier.
2. The telescope UUID to which your data will be attached. If needed, create it in your portal (you mya need to
   associated your portal to an Observing Site first).

* `pip install oort-cloud` (see [here](https://pip.pypa.io/en/stable/installation/#python) for installing `pip` if you
  haven't done so)
* `oort login` and use your Arcsecond standard credentials (your Upload key will be stored locally).
* `oort upload -o <subdomain> -t <telescope UUID> <folder path>`
