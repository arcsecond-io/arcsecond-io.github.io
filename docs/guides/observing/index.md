---
title: "The four apps"
visibility: public
audience: astronomer
tier: guide
source: handwritten
---

# The four apps

Arcsecond.local covers the whole life of an observatory, from choosing a target to sharing its data. Its tools are
grouped in four apps: the first three follow an observation, the fourth runs the observatory around it.

| | App | Its tools |
| --- | --- | --- |
| Prepare | [Night Studio](./night-studio) | [Night Explorer](./night-studio#night-explorer), [Transit Browser](./night-studio#transit-browser), [Target Lists](./night-studio#target-lists), [Transient Sky](./night-studio#transient-sky), [Finding Chart Editor](./night-studio#finding-chart-editor) |
| Observe | [Control Room](./control-room) | [Equipments Registry](./equipment-registry), [Observer Console](./observer-console), [Night Scheduler](./night-scheduler), [ToO Policies](./too-policies), [Calibration Manager](./calibration-manager), [Safety Configuration](./safety-configuration), [Polar Alignment](./polar-alignment) |
| Keep and share | [Data Grand Central](/guides/data/) | [Data Browser](/guides/data/#data-browser), [Observations Browser](/guides/data/#observations-browser), [Data Viewer](/guides/data/#data-viewer), [Virtual File System](/guides/data/#virtual-file-system), [Data Distribution & Sharing](/guides/data/#data-distribution-sharing) |
| Run the observatory | [Observatory Headquarters](/guides/team/) | [Schedule](/guides/team/#schedule), [Map](/guides/team/#map), [Data Storages](/guides/team/#data-storages), [Settings](/guides/team/#settings) |

## Night Studio

**What to observe, when, and from where.** Compare targets over a night or a year, find the transits and transients
you can reach, and prepare the target lists and finding charts you observe with.
[The tools of Night Studio](./night-studio)

<ToolShot tool="night-explorer" no-caption />

## Control Room

**The telescope, by hand or on its own.** Register the equipment, observe from the console or let a sequence run the
whole night, chase transients, take calibrations, and keep it all safe. [The tools of the Control Room](./control-room)

<ToolShot tool="observer-console" no-caption />

## Data Grand Central

**Every frame, found again.** Browse datasets and observations, inspect FITS and XISF files in the browser, and share
packages of data. [The tools of Data Grand Central](/guides/data/)

<ToolShot tool="data-browser" no-caption />

## Observatory Headquarters

**The observatory as a team.** Its calendar, its map, its storages, its members and its settings.
[The tools of Observatory Headquarters](/guides/team/)

<ToolShot tool="observatory-schedule" no-caption />

## How they work together

1. Targets imported in Night Studio are the ones the Control Room points at: a target list or a finding chart made in
   the afternoon is there in the console at night.
2. Frames taken in the Control Room are filed in a dataset and attached to the night log, without anyone doing it.
3. Data Grand Central reads them, along with the data you [upload](/reference/upload) or
   [attach](/guides/data/external-storages), and keeps the observations of every target up to date.
4. Those nights appear in the schedule of Observatory Headquarters, beside maintenance and visitors.
