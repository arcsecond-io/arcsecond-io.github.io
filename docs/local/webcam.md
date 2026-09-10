# Live-Image Proxy

The Arcsecond CLI ships a native live-image proxy that lets
[Arcsecond.local](/local/) — the self-hosted version of
Arcsecond — access **USB webcams**, **all-sky cameras** and **network
cameras**.

Docker Desktop on Windows and macOS does not forward USB devices into
containers, and may not have access to host filesystem paths where all-sky
software writes its images. The proxy solves both: it runs natively on the
host, where it has direct USB access and can read local files, and exposes
the feeds over HTTP and WebSocket. The Arcsecond backend container reaches
the proxy via `host.docker.internal`.

A camera with an address of its own goes through the same proxy without being
attached to the host at all: the proxy connects out to it over your network.
That covers network cameras, and all-sky cameras whose software runs on another
machine and publishes its image over HTTP. One proxy serves every camera it can
reach.

## Installation

The proxy requires extra dependencies (OpenCV and aiohttp) that are not
installed by default. Install them with the `webcam` extra:

```bash
pip install arcsecond[webcam]
```

The extra is named `webcam` for backward compatibility, but it covers
all-sky support too.

::: tip
If your shell treats square brackets specially (e.g. zsh), quote the package
name:

```bash
pip install 'arcsecond[webcam]'
```

:::

::: warning Windows users — use PowerShell, not WSL
On Windows, the Arcsecond CLI **must be installed and run natively using
PowerShell** (or the standard Windows Command Prompt). Do **not** use the Bash
shell that comes with WSL (Windows Subsystem for Linux).

WSL runs in a virtualised Linux environment that does not have direct access to
the host's USB devices. As a result, the webcam proxy cannot see cameras
attached to the Windows machine when launched from inside WSL.
:::

## How the commands fit together

Registering a camera and serving it are two separate jobs, and two separate
commands. `add` never starts a proxy, and `proxy start` never registers a
camera:

```bash
arcsecond webcam add 0                          # register: a USB webcam
arcsecond allsky add /srv/allsky/latest.jpg     # register: an all-sky camera
arcsecond proxy start                           # serve everything registered
```

There is one proxy, and it serves every kind of camera. Three things are worth
knowing before you start.

**Cameras are remembered.** They come back on their own the next time the proxy
starts, so a machine that reboots overnight comes back with its cameras. You do
not need to re-type anything.

**Order does not matter.** A camera added while the proxy is running is handed
to it straight away, so neither the proxy nor Arcsecond.local needs restarting.

**Nothing is lost by running a command twice.** Adding a camera that is already
registered simply hands back the id it already has.

### Ids

Every camera gets a three-character id — `k3f`, `r4t` — the moment it is
registered, and that id is the only handle you ever type afterwards. It is
derived from what identifies the camera, so registering the same one twice
gives the same id rather than a second entry, and it is not positional:
unplugging the first of three webcams does not renumber the other two.

The alphabet leaves out characters that get misread off a screen, so there is
no `0`/`O` or `1`/`l`/`I` to guess at.

## Webcams

`arcsecond webcam` covers every camera that is not an all-sky camera, whether
it is plugged in here over USB or reached over the network. Same list, same
`add`, same `forget` — the address is simply what you pass to `add` instead of
a device index.

### Seeing what is registered

```bash
arcsecond webcam
```

Prints what is registered and probes nothing, so it answers instantly. USB
cameras show the resolution and frame rate recorded when they were added.

### Seeing what is there

```bash
arcsecond webcam detect [--timeout 2.0] [--no-network]
```

Looks at the hardware and says how it lines up with what is registered: what is
newly detected, what is registered and present, what is registered and missing.
It registers nothing.

Network cameras cannot be discovered — there is no way to ask a network which
of it is a camera — so a registered one is confirmed by connecting to its
address instead. `--no-network` skips that and lists them without checking.

### Adding one

A webcam plugged into this machine is registered by the device index `detect`
printed:

```bash
arcsecond webcam add 0 --label "Guide cam"
```

The device is opened once while registering, both to tell you whether anything
is there and to record its resolution and frame rate, so that listing it later
never has to open it again. A camera registered while unplugged is registered
anyway — re-run the same command once it is plugged in to record its specs.

A camera on the network is registered by its address instead:

```bash
arcsecond webcam add rtsp://192.168.1.42:554/stream1 --label "Dome"
arcsecond webcam add http://192.168.1.50/snapshot.jpg
```

| Address starts with   | Typical camera                          |
|-----------------------|-----------------------------------------|
| `rtsp://`, `rtsps://` | IP and security cameras, video stream   |
| `http://`, `https://` | Cameras serving a still image or MJPEG  |

Your camera's manual gives the address to use.

### Testing one

```bash
arcsecond webcam test rtsp://192.168.1.42:554/stream1
arcsecond webcam test k3f
```

Pulls one image and reports what came back. It takes either an address you have
not registered yet, so you can check it before adding it, or the id of a
registered camera, so you can check that one without retyping its address.

### Removing one

```bash
arcsecond webcam forget k3f
```

Works for every kind of webcam, whether plugged in here or on the network. If
the proxy is running, it stops serving the camera straight away.

## All-sky cameras

An all-sky camera is registered by the JPEG its software keeps up to date. That
is either a **path**, when the software runs on this machine, or an **address**,
when it runs on another machine and publishes the image over HTTP. The two most
common stacks are auto-discovered when they write here:

- **Thomas Jacquin's allsky** ([github.com/AllskyTeam/allsky](https://github.com/AllskyTeam/allsky)),
  typically on a Raspberry Pi
- **indi-allsky** ([github.com/aaronwmorris/indi-allsky](https://github.com/aaronwmorris/indi-allsky)),
  INDI-based

### Seeing what is registered

```bash
arcsecond allsky
```

Prints the cameras you have registered, and probes nothing — so it answers
instantly, and gives the same answer every time. Each camera has a
three-character id, such as `r4t`. That id is the only handle you ever need,
and it does not change.

### Seeing what is there

```bash
arcsecond allsky detect
```

Looks at the well-known locations below and says how they line up with what is
registered: what is new, what is registered and present, what is registered and
missing. It registers nothing.

| Path                                     | Software                              |
|------------------------------------------|---------------------------------------|
| `~/allsky/tmp/image.jpg`                 | Jacquin allsky                        |
| `~/allsky/html/allsky/image.jpg`         | Jacquin allsky, local website         |
| `/var/www/html/allsky/image.jpg`         | Jacquin allsky, installs before 2023  |
| `/var/lib/indi-allsky/images/latest.jpg` | indi-allsky                           |
| `~/indi-allsky/latest.jpg`               | indi-allsky                           |

A camera you registered yourself is checked at its own path as well, so writing
to an unusual location never gets it reported as missing. One registered by
address has no path to look at, so it is confirmed by connecting to it, the way
a network camera is.

### Adding one by path

```bash
arcsecond allsky add /srv/allsky/latest.jpg --label "Roof"
```

The path may be a fixed file, a symlink, or a pattern — with a pattern, the
newest matching file wins:

```bash
arcsecond allsky add '/var/data/allsky/*.jpg'
```

The camera is registered whether or not the file is there yet. All-sky software
often writes its first image only at dusk, and refusing until then would just
mean coming back to retype the command.

### Adding one by address

When the all-sky software runs on another machine — a Raspberry Pi in the
garden, say — you do not need a second proxy over there. Register the address
of the image it publishes, and the proxy fetches it over your network:

```bash
arcsecond allsky add http://allsky.local/current/tmp/image.jpg --label "Roof"
```

::: tip Finding the address
Open your all-sky software's web interface, right-click the live image and copy
its address, dropping any `?_ts=...` at the end. For Thomas Jacquin's allsky it
is usually `http://<host>/current/tmp/image.jpg` — a web-server alias for the
image the capture loop rewrites every cycle, which is why there is no such
folder on the Pi itself.

Check it before registering, from the machine that will run the proxy:

```bash
curl -sSI http://allsky.local/current/tmp/image.jpg
```

You want `200` and `Content-Type: image/jpeg`.
:::

It remains an all-sky camera in every way that matters: it is listed by
`arcsecond allsky`, reported to Arcsecond.local as `allsky`, and polled at the
cadence of an all-sky camera rather than a webcam's. Only the transport
differs, and the proxy asks the server whether the picture has changed rather
than downloading it again, so the traffic between two real images is
negligible.

::: warning A video stream is not an all-sky camera
An `rtsp://` address is a camera sending video, which is a webcam — register it
with `arcsecond webcam add`. `arcsecond allsky add` takes the JPEG your all-sky
software publishes.
:::

### If the image needs a password

Most all-sky software serves its image without one, even when its web interface
asks you to log in. If yours does require a password, write it as `${VARIABLE}`
rather than in the clear, exactly as for a network camera:

```bash
export SKY_PASSWORD='mypassword'
arcsecond allsky add 'http://allsky:${SKY_PASSWORD}@10.0.0.9/current/tmp/image.jpg'
```

The same rules apply, including where the variable needs to be set — see
[Cameras that need a password](#cameras-that-need-a-password).

### Removing one

```bash
arcsecond allsky forget r4t
```

Give the id printed by `arcsecond allsky`. The camera stops being remembered,
and a running proxy stops serving it straight away.

## Cameras that need a password

Many network cameras require a username and password, written into the address
before the host:

```
rtsp://admin:mypassword@192.168.1.42:554/stream1
```

Typing the password directly would leave it in your shell history, and would
make it visible to anyone listing running processes on the machine. Write it
as `${VARIABLE}` instead, and put the password in that variable:

```bash
export DOME_CAM_PASSWORD='mypassword'
arcsecond webcam add 'rtsp://admin:${DOME_CAM_PASSWORD}@192.168.1.42:554/stream1'
```

::: tip Use single quotes
Single quotes around the address stop your shell from substituting the variable
itself. The CLI does the substitution, and reports a clear error if the
variable is not set — before anything is registered.
:::

Passwords are never shown again afterwards. They are replaced by `***` in the
proxy's output, in its logs, and in anything it reports to Arcsecond.local. The
remembered camera keeps the `${DOME_CAM_PASSWORD}`, so the password is never
written to disk.

::: warning Set the variable where the proxy starts
Because only the variable is remembered, the proxy needs to be able to read it
again the next time it starts. If you set it by hand in one terminal, it will
be gone after a reboot, and that camera will be skipped with a message naming
the variable while the others carry on. Set it where the proxy actually starts
— in your shell profile, or in the service that launches it — and it will
always be there.
:::

## Running the proxy

```bash
arcsecond proxy start
```

Serves every registered camera, of every kind, over one proxy. It starts in the
background and gives you your prompt back; add `--foreground` to run it in the
terminal and watch it instead, where `Ctrl-C` stops it.

```bash
arcsecond proxy start [--port 8765] [--host 0.0.0.0] [--log-level info] [--foreground]
```

Two commands go with it:

```bash
arcsecond proxy status
```

Says whether the proxy is running and what it is serving:

```
The proxy is running on port 8765  (http://127.0.0.1:8765/detect)

Serving 2 camera(s):

  ID   TRANSPORT  CAMERA                                     NAME
  5ak  usb        device index 0                             Guide cam
  m27  http       http://allsky.local/current/tmp/image.jpg  Roof
```

```bash
arcsecond proxy stop [--timeout 10.0]
```

Works from any terminal: the proxy records where it is when it starts, so there
is nothing to remember and no port to type. Your registered cameras are
untouched — this stops serving them, and `forget` is what drops one.

### Where its files are

| File                                          | What it is                      |
|-----------------------------------------------|---------------------------------|
| `~/.config/arcsecond/live-image-sources.json` | the cameras you registered      |
| `~/.config/arcsecond/live-image-proxy.json`   | where the running proxy is      |
| `~/.config/arcsecond/live-image-proxy.log`    | what a background proxy printed |

You should not need to touch any of them — `add` and `forget` write the first,
and the proxy writes the other two — but they are plain text, so you can always
look. `ARCSECOND_CONFIG_DIR` moves the whole directory elsewhere, and a proxy
started by the CLI inherits it.

## Connecting Arcsecond.local

No extra configuration is needed when the proxy runs on the same machine as
Arcsecond.local. The backend defaults to `http://host.docker.internal:8765`,
so it can reach the proxy out of the box.

The typical workflow is:

1. Register your cameras: `arcsecond webcam add ...`, `arcsecond allsky add ...`
2. Start the proxy on the host: `arcsecond proxy start`
3. Start Arcsecond.local: `docker compose up -d`

Cameras added later, with the proxy already running, appear without either the
proxy or Arcsecond.local being restarted.

### Remote proxy

::: tip A camera with an address does not need this
A camera reached by URL — a network camera, or an all-sky camera publishing its
image over HTTP — is contacted by the proxy over the network, wherever that
proxy runs. Register it on the proxy you already have; there is no need for a
second one. This section is only about cameras **physically plugged into**, or
writing to the disk of, another computer.
:::

If cameras are attached to a different machine on the same network (e.g.
a dome PC), start the proxy there and set `LIVE_IMAGE_PROXY_URL` in the
`.env` file used by `docker-compose.yml`:

```
LIVE_IMAGE_PROXY_URL=http://192.168.1.42:8765
```

Replace `192.168.1.42` with the actual IP address or hostname. When this
variable is not set, the backend falls back to
`http://host.docker.internal:8765` (the Docker way of saying
`http://localhost:8765` from within a container).

::: warning Changing this needs the container recreated
A container keeps the environment it was created with, so editing `.env` alone
changes nothing for a backend that is already running, and `docker compose
restart` reuses that same environment. Recreate it instead:

```bash
docker compose up -d --force-recreate backend
```

If the value has not changed, there is nothing to do. `docker exec arcsecond-api
printenv LIVE_IMAGE_PROXY_URL` says what the running container actually has.
:::

The previous variable name `WEBCAM_PROXY_URL` is still accepted as a
deprecated fallback.

## Endpoints

| Endpoint        | Method    | Description                                     |
|-----------------|-----------|-------------------------------------------------|
| `/health`       | GET       | Liveness check (`{"status": "ok"}`)             |
| `/detect`       | GET       | JSON list of available sources                  |
| `/stream/{id}`  | WebSocket | Continuous JPEG frame stream                    |
| `/sources`      | POST      | Add cameras to the running proxy                |
| `/sources/{id}` | DELETE    | Remove one                                      |

`{id}` is the camera's three-character id, exactly as `arcsecond webcam` and
`arcsecond allsky` print it. There is no second, prefixed form of it.

`/detect` lists what is registered without opening or contacting anything, so
one camera being switched off never holds the answer up for the others. Each
source reports a `kind` of `webcam` or `allsky` — what the camera *is* — and an
`extra.transport` of `usb`, `rtsp`, `http` or `file`, which is how it is
reached:

```json
{
  "id": "m27",
  "kind": "allsky",
  "label": "Roof",
  "extra": { "url": "http://allsky.local/current/tmp/image.jpg", "transport": "http" }
}
```

The last two endpoints are how `add` and `forget` reach a proxy that is already
running. They answer only to commands run **on the same machine as the proxy**,
so no one else on your network can change which cameras it serves. Reading —
detection and streaming — is unaffected.

## Stream protocol

Each frame is sent as a JSON message over the WebSocket connection:

```json
{
  "type": "frame",
  "format": "jpeg/base64",
  "data": "<base64-encoded JPEG>"
}
```

How often one arrives depends on the camera:

| Camera                          | Cadence                                       |
|---------------------------------|-----------------------------------------------|
| USB webcam, RTSP camera         | ~10 fps                                       |
| HTTP still-image camera         | checked every second, sent only when changed  |
| All-sky camera, file or HTTP    | checked every five seconds, sent only when changed |

An all-sky image typically changes every 30–120 seconds, depending on the
camera's exposure cadence. Nothing is sent in between: a file source watches
the file's modification time, and an HTTP source asks the server whether the
picture has changed rather than downloading it again.

If the source becomes unavailable (device unplugged, file removed, camera off)
the proxy sends an error message before closing the connection:

```json
{
  "type": "error",
  "message": "Cannot open webcam at device index 0."
}
```
