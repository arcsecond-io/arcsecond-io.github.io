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
- [pip](https://pip.pypa.io/en/stable/installation/) is available on your PC (you can open a Terminal and type
  `pip3 --version` to check first).
- Access to the Arcsecond Docker private registry, via the personal authentication
  token (PAT). [Contact us](mailto:team@arcsecond.io) to obtain yours.

::: tip You probably already have `pip`
`pip` is bundled with Python itself, and has been for many years. If you installed a recent Python (3.13, 3.14, or
any 3.x from python.org, from the macOS or Windows installers), `pip` came with it and there is **nothing more to
install**. Check with:

```bash
pip3 --version
```

or, equivalently and more reliably when several Pythons are installed:

```bash
python3 -m pip --version
```

If either prints a version, you are done. The only common case where `pip` is genuinely missing is a Linux
distribution that ships it as a separate package — on Debian/Ubuntu, `sudo apt install python3-pip`.

On Windows, use `python -m pip --version` instead, and see
[Installing on Windows](/cli/install-windows) if the command is not recognised.
:::

::: tip Docker needs no admin account, and no Docker account
Two frequent worries, both unfounded:

- **You do not need a superuser / administrator account** to get Docker Desktop onto the machine: it can be
  installed under a regular user account.
- **You do not need a Docker account** to run Arcsecond.local. Docker Desktop shows a sign-in screen on first
  launch — you can simply skip it. The only login involved is the one to the *Arcsecond* registry with your PAT,
  described below, which is unrelated to Docker Hub.
:::

## Installation

:::info
The installation of Arcsecond requires you to write some simple commands in the Terminal. On *nix machines, you can use
any shell.

On Windows, **PowerShell is enough** — it is installed by default, and every command below works in it.
The [WSL](https://learn.microsoft.com/en-us/windows/wsl/install) (Windows Subsystem for Linux) is **not mandatory**:
install it only if you specifically want a `bash` shell and a small Linux distribution ("Distro", typically Ubuntu).
:::

::: warning Do not use WSL for the Live-Image Proxy
If you plan to plug USB webcams or all-sky cameras into the Windows machine, the Arcsecond CLI **must** run natively
in PowerShell: WSL has no direct access to the host's USB devices. See the
[Live-Image Proxy](/local/webcam) page.
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

::: warn
By convention, the chevrons indicate placeholders in the documentation. Hence, you must also remove them when inserting
your PAT. For instance: `echo ghp_XXX... | docker login...` and not `echo <ghp_XXX...> | docker login...`
:::

### Windows: adding Python's `Scripts` folder to `PATH`

On Windows, `pip` installs the `arcsecond` command as `arcsecond.exe` inside the `Scripts\` folder of your Python
installation. If that folder is not listed in the `PATH` environment variable, the installation succeeds but the
command is not found:

```
arcsecond : The term 'arcsecond' is not recognized as the name of a cmdlet,
function, script file, or operable program.
```

The fix is to add that folder to `PATH`, once:

1. Find the exact folder. In PowerShell:

   ```powershell
   python -c "import sysconfig; print(sysconfig.get_path('scripts'))"
   ```

   It prints something like `C:\Users\<you>\AppData\Local\Programs\Python\Python314\Scripts`. Copy that line.

2. Open the Windows environment variables editor: press the **Windows key**, type *environment*, and choose
   **"Edit the system environment variables"** (or **"Edit environment variables for your account"**). Then click the
   **Environment Variables…** button.

3. In the **upper** list ("User variables for &lt;you&gt;"), select the `Path` line and click **Edit…**.

4. Click **New**, paste the folder copied at step 1, then click **OK** in each of the three open windows.

5. **Close PowerShell completely and open a new window** — already-open terminals keep the old `PATH`. Then check:

   ```powershell
   arcsecond --version
   ```

::: tip
The same thing can be done in one command, without leaving PowerShell:

```powershell
$scripts = python -c "import sysconfig; print(sysconfig.get_path('scripts'))"
$current = [Environment]::GetEnvironmentVariable("Path", "User")
[Environment]::SetEnvironmentVariable("Path", "$current;$scripts", "User")
```

Then open a fresh PowerShell window. More Windows-specific cases are covered in
[Installing on Windows](/cli/install-windows).
:::

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