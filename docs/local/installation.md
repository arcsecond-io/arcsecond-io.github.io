# Installation of Arcsecond.local

::: info
As of now, the installation of Arcsecond.local requires an individual authentication token, provided manually by
Arcsecond. In the future, the process will be streamlined and easier.
:::

## Prerequisites

Before proceeding with the installation, ensure that you have the following prerequisites met:

- A PC with sufficient resources (CPU, RAM, disk space) to run Arcsecond.local. The recommended settings are a recent
  CPU, 2GB+ of RAM (depending on number of potential users). Moreover, for normal operations, outside any
  consideration of long-term data storage, Arcsecond requires at least 50GB of disk storage to operate. It is used for
  database backups, astrometry cache, temporary images data etc.
- [Docker](https://docker.io) is installed on your PC.
- [pip](https://pip.pypa.io/en/stable/installation/) is installed on your PC (you can open a Terminal and type `pip3` to
  check first).
- Access to the Arcsecond Docker private registry, via the personal authentication
  token (PAT). [Contact us](mailto:team@arcsecond.io) to obtain yours.

## Installation

:::info
The installation of Arcsecond requires you to write some simple commands in the Terminal. On *nix machines, you can use
any shell. On Windows, you should use the bash terminal coming with the installation of
the [WSL](https://learn.microsoft.com/en-us/windows/wsl/install).
:::

- Open the Terminal.
- Install the Arcsecond CLI: `pip3 install arcsecond`.
- Verify the installation was successful by running `arcsecond --version`.
- Create a directory where everything related to Arcsecond will be stored, and go inside it, with the terminal.
- Run the basic setup: `arcsecond setup`.
- You can check that you have a new `.env` file in the current directory, containing some secret keys.
- You should also have a file named `docker-compose.yml` with the Arcsecond system configuration.
- Have your PAT with you, and login once in the Arcsecond Docker registry (replace `<PAT>` with your PAT):
  `echo <PAT> | docker login ghcr.io -u arcsecond-io --password-stdin`
- You can now start Arcsecond.local with the command: `docker compose up -d`. **The first time, Docker will download all
  the required images. It may take some time.**

## First steps

- Arcsecond.local is now accessible at the following address: [http://localhost:5555](http://localhost:5555)
- You can login as `admin` / `admin`. We recommend that you change this password as soon as possible, by opening your
  "Account" panel, from the bottom-left menu.
- Before exploring the Arcsecond interface, you may want to create your first observing site, by clicking on the
  "Attach a Site" button, in the the top-right of the Times bar.

:::warning
In the first moments of Arcsecond.local, various things are being loaded and integrated into the database (timezones,
exoplanets, etc). You may need to wait a bit before creating your first observing site.
:::

- On the left-hand side, you have the Sidebar, with an access to the 3 Arcsecond "apps": "Night Studio", "Control Room"
  and "Data Grand Central".
- You may want to customise your sidebar and the associated tools by opening your "Settings" panel from the bottom-left
  menu. 