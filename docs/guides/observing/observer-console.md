---
title: "Observer Console"
visibility: public
audience: astronomer
tier: guide
source: handwritten
---

# Observer Console

**A whole night by hand, in one frame.** Point, focus, guide, expose and review without changing screen.

<ToolShot tool="observer-console" />

## What it is for

- Observe manually with one setup.
- Take a queue of exposures, or a mosaic, on the current target.
- Inspect frames as they land, with guiding and sky conditions in view.

For a night that runs on its own, use the [Night Scheduler](./night-scheduler).

## Reading the console

From top to bottom:

| Area | What it shows |
| --- | --- |
| **Night** | The airmass curve of the target with the time and the hourly weather, the sky as the telescope sees it, its coordinates and the state of the dome |
| **Session controls** | Target, telescope, camera, filter wheel, rotator, focuser and dome, each with its commands |
| **Safety line** | The current GO or NOGO, and the **Emergency Stop** |
| **Preview** | The **Queue** and **Review** tabs, above a gallery of the night's frames |
| **Side panels** | Guiding, sky conditions and equipment parameters, opened as needed |

## A typical observation

1. Choose the observing setup in the status bar and take control of it.
2. Pick a **target**, enter coordinates, or take one from a [target list](./night-studio#target-lists).
3. **Slew**, then **Center...** to refine the pointing by plate solving.
4. Choose a filter, and run **Find Focus...**.
5. Start guiding from the Guiding panel.
6. Set the exposure time and count, then **Start**.

## What is checked before an exposure

The console stops and asks rather than take a frame that would be lost:

| It finds that… | It proposes to… |
| --- | --- |
| The telescope is off target | Slew first, then start, or start anyway |
| A moving target will trail during the exposure | Shorten it, or expose anyway. Non-sidereal tracking makes the mount follow the target |
| The exposure would cross the meridian | Flip, then start |
| The sequence will reach the meridian | Flip automatically when it is due, and carry on |

## Queue and mosaics

In the **Queue** tab, each row is a series of exposures with its filter and rotator angle. **Run queue** takes them in
order. The field is shown beside the queue, on your finding charts or on Aladin.

**Add a mosaic** lays out a grid of tiles on the field: choose the grid, the overlap, the scan order and the filters.
Each tile becomes a row, and what is drawn is exactly what is shot.

<ToolShot tool="observer-console" :index="1" />

## Review

The **Review** tab opens a frame as soon as it arrives: scale, colour map, background, noise, saturation, number of
stars, HFR and FWHM, a close-up, and the full FITS header. The gallery is filtered by kind: science, calibration,
autofocus, plate solving.

## Safety

The safety line shows the verdict of each condition set (see [Safety Configuration](./safety-configuration)).
**Emergency Stop** launches the site's Fail-Safe Shutdown. When the line says the verdict is unknown, nothing has been
evaluated in the last hour: it does not mean that all is well.
