---
title: "Equipments Registry"
visibility: public
audience: astronomer
tier: guide
source: handwritten
---

# Equipments Registry

**Everything you observe with, registered once.** Connect a device, read what it reports, and drive it directly.

<ToolShot tool="equipment-registry" />

## What it is for

- Register the devices of an Alpaca server, the webcams and the all-sky cameras.
- Group equipment into observing setups.
- Check that a device is connected and answers as it should.
- Move one device by hand, outside any observation.

To observe, use the [Observer Console](./observer-console): frames taken in the registry are not saved in a dataset.

## Register devices

Click **Register Devices...** and follow the four steps:

1. **Alpaca Server**: pick one already registered, or enter an address and click **Check**.
2. **Alpaca Devices**: choose which of its devices to register.
3. **Telescope & Mount**: say whether the telescope is one piece, or a tube on a separate mount. A tube can then change
   mount without losing its history.
4. **Other Equipments**: associate each remaining device with a piece of equipment.

The supported kinds are telescopes and mounts, cameras, filter wheels, focusers, rotators, enclosures, cover
calibrators, switches, safety monitors and weather stations.

## Define a setup

Click **Define a Setup...**, choose a telescope, then the equipment that works with it. The science camera and the
guiding camera must be different.

## Drive a device

Select it in the list, which can be arranged by setup or by telescope. The centre shows its state and its commands; the
right side, what the driver reports.

| Equipment | Besides the basic commands |
| --- | --- |
| **Telescope, mount** | Slew to a target, to coordinates or by hand, centre by plate solving, flip across the meridian, park, find home |
| **Camera** | Exposures with the last frame and its statistics, guiding with a dark library, twilight sky flats |
| **Focuser** | Autofocus, with its sweep, its curve and its settings |
| **Enclosure** | The opening and its slaving to the telescope |
| **Cover calibrator** | Opening, light level, and flat fields on the panel |

Settings saved here, such as those of the autofocus, plate solving or meridian flip, belong to the equipment: they apply
to everyone, and in every tool.

<ToolShot tool="equipment-registry" :index="1" />

## Webcams and all-sky cameras

These are not Alpaca devices. They come through the [live-image proxy](/guides/operating/live-image-proxy), which
streams USB webcams, network cameras and all-sky cameras. Add them to the proxy first, then detect and register them
from the Control Room.

<ToolShot tool="equipment-registry" :index="2" />
