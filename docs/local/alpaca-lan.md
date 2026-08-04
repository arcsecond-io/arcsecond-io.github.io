# Alpaca Server on Another Windows Machine

Follow these steps when the Alpaca server (ASCOM Remote, Alpaca Simulators, or any
Alpaca-compatible server) runs on a **Windows machine different from the one running
Arcsecond.local**, both on the same local network.

Everything below is done through graphical interfaces. No terminal command is required.

Throughout this page:

- `192.168.1.42` stands for the IP address of the **Windows machine running the Alpaca server**.
- `11111` stands for the port of the Alpaca server (the ASCOM Remote default; Alpaca
  Simulators use `32323`).

Replace both with your own values.

## 1. Note the IP address of the Windows machine

On the **Windows machine running the Alpaca server**:

1. Open **Settings → Network & Internet**.
2. Click **Wi-Fi** or **Ethernet**, depending on how the machine is connected.
3. Click the name of the network, then scroll down to **IPv4 address**.
4. Write that address down (e.g. `192.168.1.42`).

## 2. Fix that IP address

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

1. Open **Settings → Network & Internet**.
2. Click **Wi-Fi** or **Ethernet**, then the network name.
3. Under **Network profile type**, select **Private network**.

## 4. Make the Alpaca server listen on the network

### ASCOM Remote

1. Start **ASCOM Remote Server**.
2. Click the **Setup** button.
3. Open the **Server Configuration** tab.
4. In **Server IP address**, select the address noted at step 1
   (`192.168.1.42`) — **not** `127.0.0.1` and **not** `localhost`.
5. Leave **Server IP Port** at `11111`.
6. Tick **Enable Alpaca Discovery and Management Interface**.
7. Click **OK**.
8. A dialog titled **"HTTP listen permissions required"** appears. Click **Yes**, then
   **Yes** again on the Windows permission prompt. The server restarts on its own.
9. Back in the main window, click **Start**: the status must read **Remote Server Up**.
   Click **Connect** to connect the devices.

### Alpaca Simulators

1. Start **ASCOM Alpaca Simulators**.
2. Open the web page it displays (by default `http://localhost:32323`).
3. Go to **Server Settings**.
4. Set the **Server IP Address** / binding to **All interfaces** (`0.0.0.0`), or to
   `192.168.1.42`.
5. Leave the port at `32323`, and tick the **Alpaca Discovery** option.
6. Click **Save**, then restart the application.

## 5. Open the port in the Windows firewall

When the Alpaca server starts for the first time, Windows may display a
**Windows Security Alert**. If it does:

1. Tick **Private networks**.
2. Click **Allow access**. You are done with this step.

If no such dialog appeared, or if you clicked *Cancel*, create the rule by hand:

1. Press the **Windows key**, type *firewall*, and open
   **Windows Defender Firewall with Advanced Security**.
2. In the left column, click **Inbound Rules**.
3. In the right column, click **New Rule…**.
4. Select **Port**, click **Next**.
5. Select **TCP**, then **Specific local ports**, and type `11111`. Click **Next**.
6. Select **Allow the connection**. Click **Next**.
7. Tick **Private** only (untick **Domain** and **Public**). Click **Next**.
8. **Name**: `Alpaca server (TCP 11111)`. Click **Finish**.

Repeat steps 3 to 8 a second time for Alpaca discovery, changing two values:

- At step 5, select **UDP** and type `32227`.
- At step 8, name the rule `Alpaca discovery (UDP 32227)`.

::: warning
If a third-party security suite is installed (Norton, Kaspersky, Bitdefender, ESET…),
it has its own firewall. Open its interface and allow the same ports there too.
:::

## 6. Check the connection

On the machine running **Arcsecond.local**, open a web browser and go to:

```
http://192.168.1.42:11111/management/apiversions
```

A short text response such as `{"Value":[1],...}` means the connection works.
If the page never loads, go back through steps 4 and 5.

## 7. Register the server in Arcsecond

1. Open Arcsecond.local and go to the **Control Room**.
2. Click **Start Registration…** (or open the device registration panel from the
   Equipments tool).
3. On the **Alpaca Server** step, in the field following `http://`, type:

   ```
   192.168.1.42:11111
   ```

4. Click **Check**. The server name, manufacturer and number of devices appear.
5. Click **Register Server**.
6. Click **Next** and continue with the **Alpaca Devices**, **Telescope & Mount**,
   **Other Equipments** and **Observing Setup** steps.

::: warning
Do not enter `localhost` or `127.0.0.1` in that field. Those addresses point to the
machine running Arcsecond.local, not to the Windows machine hosting the Alpaca server.
:::
