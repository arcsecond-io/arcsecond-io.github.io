---
title: "Night Studio"
visibility: public
audience: astronomer
tier: guide
source: handwritten
---

# Night Studio

> Powerful visualisations to prepare your observations.

**Night Studio** is where you prepare your observations: decide what to observe, when and from where, for any type of
target, moving or not, and build the target lists and finding charts you take to the [Control Room](./control-room).

## Night Explorer

Decide what to observe tonight, or find the best night of the year for a target. The Night Explorer (also known as
iObserve) puts up to six panes side by side, all on the same targets, site and night.

<ToolShot tool="night-explorer" />

- **Views**: airmass and altitude curves, star tracks, sky maps, finding charts, and annual charts. Each pane shows the
  one you choose.
- **Curves**: besides airmass, the parallactic angle, the azimuth and the distance to the Moon.
- **Targets**: deep-sky objects, exoplanets, planets, asteroids and comets, near-Earth object candidates, microlensing
  events and transients. Import them by name, from a catalogue, a file, a target list or an Aladin view.
- **Your own tree**: targets are arranged in folders that are yours alone. The targets themselves are shared with the
  members of your observatory.
- **Output**: print or export the plots.

## Transit Browser

Find the exoplanet transits you can observe from your site on a given night.

<ToolShot tool="transit-browser" />

- **Known planets** come from the NASA Exoplanet Archive. Filter them by period, depth, duration, radius and more, then
  jump to the next night with a transit.
- **Your own targets** can be shown with their next transits, ten per target.
- **Custom transits** can be attached to any target, exoplanet or not, by giving a midpoint, a duration and,
  optionally, a period and a depth.
- Each transit is drawn over the airmass curves of its night, to see at once whether it happens high enough in the dark.

## Target Lists

Group targets by interest or programme, and find them again in the other tools.

<ToolShot tool="target-lists" />

Lists are read by the Night Explorer, the [Observer Console](./observer-console) and the
[Night Scheduler](./night-scheduler). Import targets into a list, export it, or fill it from a script with the
[Python module](/reference/python-resources#target-lists). One list is the default: the targets you add go there.

## Transient Sky

See what is changing in the sky now, and whether you can observe it.

<ToolShot tool="transient-sky" />

- **Feeds**: gamma-ray bursts, neutrinos and gravitational waves from NASA's GCN, supernovae reported to the TNS and,
  on request, the ZTF stream through Fink.
- **Verdict**: each event is judged for the night, either against your [ToO policies](./too-policies) or simply from the
  selected site. It is up now, observable later, too close to the Moon, or never up from here.
- **Sort**: choose the time window, show or hide missions, and apply a saved filter.
- **Act**: open an event for its details, import it as a target, or open its finding chart.

Transient Sky is for browsing. What makes a telescope react by itself is in [ToO Policies](./too-policies).

## Finding Chart Editor

Prepare the chart you will recognise the field with, as your own instrument sees it.

<ToolShot tool="fdc-editor" />

- **Background**: any Aladin survey, with its colour map, grid and reticle.
- **Overlays**: the field of view of your own instruments, computed from the equipment you registered, of large
  professional instruments, or one you draw: frame, circle or mosaic.
- **Starlink**: indicative tracks crossing the field on a given night. They are never included in saved charts.
- **Save**: a chart is attached to its target, and shows up in the Night Explorer and the Observer Console.
