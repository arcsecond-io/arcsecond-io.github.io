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

Network cameras go through the same proxy. They are not attached to the host
at all — the proxy connects out to them over your network, so a single proxy
can serve every camera it can reach.

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

There are two commands that start the proxy, one per kind of camera:

```bash
arcsecond webcam start     # USB webcams, and cameras on the network
```

```bash
arcsecond allsky start     # all-sky cameras
```

Three things are worth knowing before you use them.

**There is only one proxy.** Whichever command you run first starts it. If you
run the other one later — tomorrow, or after adding a camera — it hands its
cameras to the proxy that is already running and exits straight away. The
running proxy is never interrupted, and nothing streaming from it is disturbed.

**Cameras you add are remembered.** They come back on their own the next time
the proxy starts, so a machine that reboots overnight comes back with its
cameras. You do not need to re-type anything.

**Nothing is lost by running a command twice.** Adding a camera that is already
there simply replaces it.

So a typical evening looks like this, in any order and at any time:

```bash
arcsecond webcam start
```

```bash
arcsecond allsky start --allsky roof=/srv/allsky/latest.jpg
```

```bash
arcsecond webcam start --netcam dome=rtsp://192.168.1.42:554/stream1
```

The first command keeps running in its terminal. The other two print what they
registered and return to your prompt.

## USB webcams

USB webcams need no setting up. They are found automatically whenever the proxy
starts, so `arcsecond webcam start` on its own is enough.

### Seeing what is there

```bash
arcsecond webcam detect
```

This lists the webcams attached to this machine, along with any network cameras
that have been remembered.

### Starting the proxy

```bash
arcsecond webcam start [--port 8765] [--host 0.0.0.0] [--log-level INFO]
```

## All-sky cameras

The proxy supports all-sky cameras whose driver software writes JPEG images
to disk. The two most common stacks are auto-discovered:

- **Thomas Jacquin's allsky** ([github.com/AllskyTeam/allsky](https://github.com/AllskyTeam/allsky)),
  typically on a Raspberry Pi
- **indi-allsky** ([github.com/aaronwmorris/indi-allsky](https://github.com/aaronwmorris/indi-allsky)),
  INDI-based

### Seeing what is there

```bash
arcsecond allsky detect
```

This checks well-known paths, and lists any all-sky cameras you have added
yourself:

| Path                                                | Software       |
|-----------------------------------------------------|----------------|
| `~/allsky/tmp/image.jpg`                            | Jacquin allsky |
| `/var/www/html/allsky/current/tmp/image.jpg`        | Jacquin allsky |
| `/var/lib/indi-allsky/images/latest.jpg`            | indi-allsky    |
| `~/indi-allsky/latest.jpg`                          | indi-allsky    |

### Adding a camera at another path

If your software writes JPEGs somewhere else, add that path yourself.
`--allsky` can be repeated, and the value may be a single file or a pattern
(the newest matching file wins):

```bash
arcsecond allsky start \
  --allsky roof=/srv/allsky/latest.jpg \
  --allsky garden='/var/data/allsky/*.jpg'
```

You can run this whether or not the proxy is already running: if it is, the two
cameras are added to it and the command returns.

### Removing one

```bash
arcsecond allsky forget roof
```

The camera stops being remembered, and is removed from the running proxy too.

## Network cameras

Cameras with their own address on the network — IP cameras, RTSP cameras,
security cameras — are registered by URL. Your camera's manual gives the
address to use; it will start with one of:

| URL starts with       | Typical camera                          |
|-----------------------|-----------------------------------------|
| `rtsp://`, `rtsps://` | IP and security cameras, video stream   |
| `http://`, `https://` | Cameras serving a still image or MJPEG  |

### Checking a camera

Before registering a camera, check that the address works:

```bash
arcsecond netcam test rtsp://192.168.1.42:554/stream1
```

This connects once, reports whether an image arrived, and exits.

### Adding one

Network cameras belong to `arcsecond webcam start`. `--netcam` can be repeated,
once per camera:

```bash
arcsecond webcam start \
  --netcam dome=rtsp://192.168.1.42:554/stream1 \
  --netcam garden=http://192.168.1.50/snapshot.jpg
```

As with all-sky cameras, you can run this whether or not the proxy is already
running.

### Removing one

```bash
arcsecond webcam forget dome
```

### Cameras that need a password

Most cameras require a username and password, written into the URL before the
address:

```
rtsp://admin:mypassword@192.168.1.42:554/stream1
```

Typing the password directly would leave it in your shell history, and would
make it visible to anyone listing running processes on the machine. Write it
as `${VARIABLE}` instead, and put the password in that variable:

```bash
export DOME_CAM_PASSWORD='mypassword'
arcsecond webcam start --netcam dome='rtsp://admin:${DOME_CAM_PASSWORD}@192.168.1.42:554/stream1'
```

::: tip Use single quotes
Single quotes around the URL stop your shell from substituting the variable
itself. The CLI does the substitution, and reports a clear error if the
variable is not set.
:::

Passwords are never shown again afterwards — they are replaced by `***` in
the proxy's output, in its logs, and in anything it reports to
Arcsecond.local. The remembered camera keeps the `${DOME_CAM_PASSWORD}` too, so
the password is never written to disk.

::: warning Set the variable where the proxy starts
Because only the variable is remembered, the proxy needs to be able to read it
again the next time it starts. If you set it by hand in one terminal, it will
be gone after a reboot, and that camera will be skipped with a message naming
the variable. Set it where the proxy actually starts — in your shell profile,
or in the service that launches it — and it will always be there.
:::

## Where remembered cameras are kept

```
~/.config/arcsecond/live-image-sources.json
```

You should not need to touch this file — `start` writes to it and `forget`
removes from it — but it is plain text, so you can always look.

## Endpoints

| Endpoint        | Method    | Description                                     |
|-----------------|-----------|-------------------------------------------------|
| `/health`       | GET       | Liveness check (`{"status": "ok"}`)             |
| `/detect`       | GET       | JSON list of available sources                  |
| `/stream/{id}`  | WebSocket | Continuous JPEG frame stream                    |
| `/sources`      | POST      | Add cameras to the running proxy                |
| `/sources/{id}` | DELETE    | Remove one                                      |

Source ids look like `webcam:0`, `allsky:roof` or `netcam:dome`. Bare numeric
ids (`/stream/0`) are accepted for backward compatibility and treated as
`webcam:N`.

The last two are how `start` and `forget` reach a proxy that is already
running. They answer only to commands run **on the same machine as the proxy**,
so no one else on your network can change which cameras it serves. Reading —
detection and streaming — is unaffected.

Press `Ctrl-C` to stop the proxy.

## Connecting Arcsecond.local

No extra configuration is needed when the proxy runs on the same machine as
Arcsecond.local. The backend defaults to `http://host.docker.internal:8765`,
so it can reach the proxy out of the box.

The typical workflow is:

1. Start the proxy on the host: `arcsecond webcam start` (or `arcsecond allsky start`)
2. Start Arcsecond.local: `docker compose up -d`
3. The backend automatically detects and streams from the host sources.

Cameras added later, with the proxy already running, appear without either the
proxy or Arcsecond.local needing to be restarted.

### Remote proxy

::: tip A network camera does not need this
A camera with its own address on the network is reached by the proxy over the
network, wherever that proxy runs. Register it with `--netcam` on the proxy
you already have — there is no need for a second one. This section is only
about cameras **physically plugged into** another computer.
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

The previous variable name `WEBCAM_PROXY_URL` is still accepted as a
deprecated fallback.

## Stream protocol

Each frame is sent as a JSON message over the WebSocket connection:

```json
{
  "type": "frame",
  "format": "jpeg/base64",
  "data": "<base64-encoded JPEG>"
}
```

For webcams, frames arrive at ~10 fps. For all-sky sources, a frame is sent
only when the source file's mtime changes — typically every 30–120 seconds,
depending on the camera's exposure cadence. Network cameras streaming video
also arrive at ~10 fps; those serving a still image send a frame only when
the picture has changed.

If the source becomes unavailable (device unplugged, file removed) the proxy
sends an error message before closing the connection:

```json
{
  "type": "error",
  "message": "Cannot open webcam at device index 0."
}
```
