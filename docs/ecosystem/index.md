# APIs & Ecosystem

Arcsecond.io is a software *system*. Behind the webapp available on any navigator, there are various other
associated services and projects.

* [APIs](./apis.md) - our backend RESTful APIs.
* [aa-js](./aa-js.md) - our open-source library of astronomical algorithms in Typescript.
* [CLI](./coming-soon.md) - our open-source Command-Line Interface (a.k.a. the `arcsecond` terminal command).
* [Oort](./oort.md) - our open-source data uploader.

## Support services & repositories

In addition to that, we've put in place an external [Status Page](https://status.arcsecond.io) which monitor the
availability of the various parts of our system, and send us alerts when something becomes unreachable.

On GitHub we also published a [repository](https://github.com/arcsecond-io/standard-stars-catalogues) where 17
catalogues of standard stars were formatted and unified. These are
catalogues found in the various pages of the websites of
[ESO](https://www.eso.org/sci/observing/tools/standards.html),
[Keck](https://www2.keck.hawaii.edu/inst/common/landolt_stds.html),
[UKIRT](http://www.ukirt.hawaii.edu/astronomy/),
[Gemini](https://www.gemini.edu/sciops/instruments/gmos/calibration/photometric-stds),
[IAC](http://catserver.ing.iac.es/landscape/index.php) and the
[NOT](http://www.not.iac.es/observing/forms/landscape/v1.4/www/).

There's also a public issues repository (but it isn't much used, people prefer to reach us directly).

## Reachability

And finally, we are reachable for any question, suggestions or bug reports in multiple ways:

* Our email is [team@arcsecond.io](mailto:team@arcsecond.io)
* We have a [Slack](https://join.slack.com/t/arcsecond-io/shared_invite/zt-yvsehzjl-jExYLVWzwuslMJum7r2GiA) (open and
  free)
* And a Twitter account [@arcsecond_io](https://twitter.com/arcsecond_io)

## Technology Stack

For the tech-savvy users, here is the main elements of ou technology stack:

* The backend is written with Django 4 and the Django Rest Framework, with pytest as a test library.
* The frontend webapp is developed with Vue.js 3, and written in typescript, with vitest as a test library, and vite.js
  for the bundler.
* The data is stored on Amazon Web Service (AWS) S3, using secured buckets. We have two AWS Lambda functions for zipping
  datasets before downloads.
* Our servers (web server, background workers, static frontend etc) are deployed with Render.com
* The documentation pages are hosted by the "Pages" services of GitHub.
* We heavily use the professional edition of PyCharm on macOS and test our interface using Safari, Firefox and the Brave
  browser.
* The desktop app is built with Electron.js.
