---
title: "Calibration Manager"
visibility: public
audience: astronomer
tier: guide
source: handwritten
---

# Calibration Manager

**Calibrations that take themselves.** Describe biases and darks once, schedule them, and find them filed with your data.

<ToolShot tool="calibrations-manager" />

## Biases & Darks

They need nothing but the camera, and can run unattended. Three panels, from left to right:

1. **Templates** say what to take: the camera, biases or darks, exposure time, binning, number of frames, and
   optionally a cooling temperature to reach first.
2. **Plans** put templates in order, usually biases then darks.
3. **Schedules** launch a plan every day, or on chosen days of the week, at a local time of the observatory.

A plan can also be launched right away, by selecting it.

::: tip
An observing night runs from local noon to the next local noon. Calibrations taken in the afternoon belong to the night
that follows.
:::

## Dome Flat Fields

Dome flats are launched by hand and never scheduled: only you can tell that the screen is in place and lit. A template
holds:

- an optional slew to the screens, and an optional cooling temperature;
- one set of images per filter and binning;
- the exposure time of each set, or a target level for which the exposure is measured on the screens.

The frames appear as they are taken, with the log of the procedure.

## Browse Past

Every calibration series is kept with its frames, previews, night log and dataset.

<ToolShot tool="calibrations-manager" :index="1" />

## Other flats

Twilight sky flats are launched from the science camera, and flats on a panel from the cover calibrator, both in the
[Equipments Registry](./equipment-registry#drive-a-device).
