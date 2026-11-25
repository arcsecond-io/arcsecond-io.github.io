---
title: "Control Room"
visibility: public
audience: astronomer
tier: guide
source: handwritten
---

# Control Room

> Automate your data acquisition, integrated with your data pipelines.

The **Control Room** drives your equipment and takes your data. It runs on your own infrastructure, talks directly to
the devices of your observatory, and files every frame in [Data Grand Central](/guides/data/).

<ToolShot tool="observer-console" no-caption />

## The seven tools

| I want to… | Tool |
| --- | --- |
| Register, connect, check or move a device | [Equipments Registry](./equipment-registry) |
| Observe by hand, now | [Observer Console](./observer-console) |
| Automate a whole night | [Night Scheduler](./night-scheduler) |
| React to gamma-ray bursts and other transients | [Targets of Opportunity](./too-policies) |
| Take biases, darks and dome flats | [Calibration Manager](./calibration-manager) |
| Close the observatory when conditions turn bad | [Safety Configuration](./safety-configuration) |
| Measure and correct a polar alignment | [Polar Alignment](./polar-alignment) |

## Before the first night

1. **Start an Alpaca server** on the machine your devices are plugged into. Arcsecond only needs its address. If it is
   not the machine running Arcsecond.local, see [Alpaca server on another machine](/guides/operating/alpaca-lan).
2. **Register the devices** in the [Equipments Registry](./equipment-registry).
3. **Define an observing setup**: a telescope, and the equipment used with it.
4. **Check the safety rules** in [Safety Configuration](./safety-configuration).
5. **Observe** from the [Observer Console](./observer-console). Once that works, automate with the
   [Night Scheduler](./night-scheduler).

## Equipment, device, setup

| Word | Meaning |
| --- | --- |
| **Device** | What an Alpaca server exposes: the driver Arcsecond connects to. |
| **Equipment** | The telescope, camera or dome itself, which observations and metadata are attached to. Its device can be replaced, and the equipment stays the same. |
| **Observing setup** | A telescope and the equipment used with it. The Observer Console and the Night Scheduler work on one setup. |

## The status bar

The bar at the bottom stays there in every tool. It holds:

- the **connection** to the server, and a check of all equipment at once;
- the **observing setup** in use;
- the **interrupts** switch, which allows [transient alerts](./too-policies) to take that setup;
- the **observer** in control. One person controls a setup at a time: take control, request it, hand it over or
  release it here;
- the **night log** and the **dataset** of the night;
- webcams, all-sky images and the live stream of operations.

## Where the data goes

Frames taken from the Observer Console and the Night Scheduler are saved in a dataset, and attached to the night log of
the telescope, which records the activity of the night. Both are one click away in the status bar. Frames taken from the
Equipments Registry are not filed: download them there.

Who may do what is on the [Roles and permissions](/reference/permissions) page.
