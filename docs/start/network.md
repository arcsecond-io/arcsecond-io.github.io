---
title: "Access from Other Computers"
visibility: public
audience: operator
tier: start
source: handwritten
---

# Access from Other Computers

Arcsecond.local is multi-user by design, but a fresh installation is only reachable from
the machine it runs on, at `http://localhost:5555`. This page covers what to change so
that everyone in the observatory can open it from their own computer, over the local
network.

Everything below is done through graphical interfaces, except one line to add to a
configuration file. No new software is needed.

Throughout this page:

- `192.168.1.42` stands for the IP address of the **machine running Arcsecond.local**
  (the one running Docker).
- `5555` is the port Arcsecond.local is served on. Leave it as it is.

Replace the address with your own.

## What the other computers will use

Everyone opens the same page, at the address of the machine running Arcsecond.local:

```
http://192.168.1.42:5555
```

::: warning
`http://localhost:5555` only works on the machine running Arcsecond.local. On any other
computer, `localhost` means *that* computer, so the page never loads. This is the single
most common cause of "it works on the observatory PC but nowhere else".
:::

Only that one port has to be reachable. The API is served from the very same address,
under `/api/`, so there is no second port to open for the web interface.

## 1. Note the IP address of the machine

On the **machine running Arcsecond.local**:

1. Open **Settings → Network & Internet**.
2. Click **Wi-Fi** or **Ethernet**, depending on how the machine is connected.
3. Click the name of the network, then scroll down to **IPv4 address**.
4. Write that address down (e.g. `192.168.1.42`).

## 2. Fix that IP address

An address handed out by the router can change after a reboot, and everyone's bookmark
would break with it. Pin it:

1. On the same page, next to **IP assignment**, click **Edit**.
2. Choose **Manual** in the drop-down.
3. Turn **IPv4** on.
4. Fill in:
   - **IP address**: the address noted at step 1.
   - **Subnet mask**: `255.255.255.0`.
   - **Gateway**: your router's address (usually the same address ending in `.1`,
     e.g. `192.168.1.1`).
   - **Preferred DNS**: your router's address, or `1.1.1.1`.
5. Click **Save**.

::: tip
If your router offers a "DHCP reservation" page, reserving the address there works just
as well, and leaves the Windows settings untouched.
:::

## 3. Set the network profile to Private

Windows blocks incoming connections much more aggressively on networks marked *Public*.

1. Open **Settings → Network & Internet**.
2. Click **Wi-Fi** or **Ethernet**, then the network name.
3. Under **Network profile type**, select **Private network**.

## 4. Open the port in the Windows firewall

1. Press the **Windows key**, type *firewall*, and open
   **Windows Defender Firewall with Advanced Security**.
2. In the left column, click **Inbound Rules**.
3. In the right column, click **New Rule…**.
4. Select **Port**, click **Next**.
5. Select **TCP**, then **Specific local ports**, and type `5555`. Click **Next**.
6. Select **Allow the connection**. Click **Next**.
7. Tick **Private** only (untick **Domain** and **Public**). Click **Next**.
8. **Name**: `Arcsecond.local (TCP 5555)`. Click **Finish**.

::: tip
The same rule, in one PowerShell command run as Administrator:

```powershell
New-NetFirewallRule -DisplayName "Arcsecond.local (TCP 5555)" -Direction Inbound -Protocol TCP -LocalPort 5555 -Profile Private -Action Allow
```
:::

::: warning
If a third-party security suite is installed (Norton, Kaspersky, Bitdefender, ESET…),
it has its own firewall. Open its interface and allow the same port there too.
:::

## 5. Tell Arcsecond its own address

Browsing works after step 4. This step is about the links Arcsecond *writes* — the
invitation links you send to new members, and password-reset emails. Those are composed
by the server, which has no way of knowing which address people reach it at, so it has
to be told. Left unset, every one of those links says `localhost`, and lands whoever
clicks it on their own computer.

In the Arcsecond folder (or from anywhere, once `arcsecond setup` has run there), with your own address:

```bash
arcsecond setup --lan-host 192.168.1.42
arcsecond restart
```

The first line writes `HOSTED_FRONTEND_HOST=192.168.1.42:5555` into `.env` — the port defaults to 5555, name it
(`--lan-host 192.168.1.42:5556`) if you changed it. The second recreates the containers, which is what makes them read
the new value: a container keeps the environment it was created with, so a plain stop and start would not do.

::: info
Adding a member does not require email at all: in the invitations panel, the
**"Add member with password…"** button creates the account and lets you hand the
credentials over directly. Useful on an observatory network with no mail server.
:::

## 6. Check from another computer

On a **different computer on the same network**, open a browser and go to:

```
http://192.168.1.42:5555
```

The Arcsecond login page should appear, and you should be able to log in and use the
apps exactly as on the observatory machine.

If the page does not load at all, the request is not reaching the machine: go back
through steps 3 and 4. If the page loads but stays empty, or the interface appears and
then reports errors, see [Troubleshooting](#troubleshooting) below.

## Using a name instead of an address

Typing an IP address is unpleasant to share. Two options:

- **An mDNS name.** If the machine is named `arcsecond`, many networks resolve
  `http://arcsecond.local:5555` on their own, with nothing to configure. macOS and Linux
  handle it out of the box, and recent Windows versions usually do too. If a particular
  computer cannot resolve the name, installing Bonjour on it (it ships with iTunes)
  generally settles it — but test it before handing the name around, as support varies
  between machines and networks.
- **A DNS entry on your router.** Many routers let you map a name to a fixed address.
  This works for every device on the network with nothing to install.

Either way, declare the same name at step 5 (`arcsecond setup --lan-host arcsecond.local`, then
`arcsecond restart`) so that the links in emails use it too.

## Using the CLI or the API from another computer

The web interface only needs port `5555`. The [command-line interface](/reference/cli) and any
script talking to the API directly use port `8800` instead, which is **not** open by
default on the network.

If you need that, repeat step 4 for port `8800`, then, on the other computer, register your installation under a
name and point the CLI at it:

```bash
arcsecond api add local http://192.168.1.42:8800
arcsecond api use local
arcsecond login --username <you> --type access --key <access-key>
```

Every command from then on talks to your installation, until `arcsecond api use cloud` points it back. See
[Install & Login](/reference/cli-login).

Leave the port closed if nobody needs it — the web interface does not.

The database and Redis publish no port at all, not even on the machine itself (since CLI 3.20.0; earlier templates
bound them to `localhost`). They are reachable from the other containers only. Anything that needs the database, such
as [backups](/guides/operating/backups) or [rotating its password](/guides/operating/rotate-postgres-password), is done by the `arcsecond`
tool through the container, and needs no open port.

## If Arcsecond.local runs on macOS or Linux

The same five steps apply, with different tools:

- **Find the address**: `ipconfig getifaddr en0` on macOS, `ip -4 addr show` on Linux.
- **Fix the address**: easiest through a DHCP reservation on the router.
- **Firewall**: macOS does not block Docker's published ports by default. On Linux with
  `ufw` enabled: `sudo ufw allow from 192.168.1.0/24 to any port 5555 proto tcp`.
- Steps 5 and 6 are identical.

## Troubleshooting

**The page loads but stays blank, or the interface reports it cannot reach the server.**
Your installation predates the change that serves the API from the same address as the
web interface. Update it, and try again:

```bash
arcsecond update
```

**It works from the observatory machine but nowhere else.** Check that you are using the
IP address and not `localhost` on the other computer, then re-check the firewall rule
(step 4) and the network profile (step 3).

**It worked, and stopped after a reboot.** The machine's IP address most likely changed.
Redo step 2 to pin it.

**Invitation or password-reset links send people to a page that does not load.** The
address in `.env` is missing or wrong — see step 5. It must be exactly what people type
in their browser, port included.

## A note on security

This setup is meant for a **trusted local network**: an observatory LAN, behind a
router. Traffic is plain HTTP, not encrypted.

::: warning
Do not forward these ports on your router, and do not expose them to the internet. If
you need to reach your observatory from outside, use a VPN, or put a reverse proxy
terminating TLS in front of Arcsecond.local — in which case set both
`HOSTED_FRONTEND_HOST` (to the public name) and `HOSTED_FRONTEND_SCHEME=https` in
the `.env` file.
:::
