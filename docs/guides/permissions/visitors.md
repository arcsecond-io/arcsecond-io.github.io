---
title: "Visitors and their setups"
visibility: embedded
audience: admin
tier: guide
source: handwritten
---

# Visitors and their setups

A visitor observes on the setups assigned to them. A member hands a visitor
a setup for a range of observing nights, in the members drawer of
Observatory Headquarters ("Assign..." on the visitor's row). An observing
night runs from noon to noon at the site, in the site's own time: the night
of 12 October starts at noon on the 12th and ends at noon on the 13th. An
assignment may have no last night.

## What a visitor does with an assigned setup

| | At any date | During an assigned night | Holding the setup's control |
| --- | :---: | :---: | :---: |
| See the setup, its telescope, its equipment and their history | ✓ | ✓ | ✓ |
| Prepare observing sequences on it | ✓ | ✓ | ✓ |
| Pause, stop or abort their own sequences | ✓ | ✓ | ✓ |
| Watch its equipment live |  | ✓ | ✓ |
| Take control of it, or ask the holder for it |  | ✓ |  |
| Send commands from the Observer Console, run tasks and procedures |  |  | ✓ |
| Start or resume a sequence |  |  | ✓ |
| Press the Emergency Stop |  |  | ✓ |

A visitor holds a setup's control only during an assigned night, so the last
column is always within one. The Emergency Stop launches the site's
Fail-Safe Shutdown: park the mount, close the cover, close the dome.

Whatever their assignments, a visitor always sees the site itself (the
weather station, the safety monitors, the all-sky cameras and the webcams),
the safety conditions and decisions, the transient-alert feed, the
observatory schedule, and the sequence and calibration templates.

## When an assignment ends

At local noon after the last night, a visitor's control of the setup is
released. Nothing running is stopped: a sequence they started goes on to its
end, and their next command is refused. Editing or removing an assignment
releases the control the same way. The setup stays readable to them, with its
history, at any date.

## What a visitor reaches elsewhere

| | What a visitor sees | What a visitor changes |
| --- | --- | --- |
| Targets | Those in their lists, and those they observed | They add targets: an object the observatory already has is its existing target, put in their "My targets" list, never a copy. They edit none. |
| Target lists | Their own, "My targets" first | Their own |
| Night Explorer tree | Their own | Their own, naming the targets they reach |
| Night logs | Those of their assigned setup-nights, without the journal | None |
| Observations | Their own | Their own |
| Calibrations | Those of their assigned setup-nights, and their own | Their own |
| Night plans | None | None |
| Datasets | The public ones, their own, and the calibrations of their assigned setup-nights | None: they download them |
| Data packages | None: packages are shared with people on the cloud only | None |
| Members, activity, statistics | None | None |

## The messages a visitor may meet

| Message | Why |
| --- | --- |
| "This setup is not assigned to you for tonight." | The setup is theirs on other nights, or never was. |
| "This equipment is not part of a setup assigned to you tonight." | A command reached beyond their setups for tonight. |
| "Take control of this setup before sending it commands." | They drive a setup only while holding its control. |
| "Take control of this setup before starting a sequence on it." | The same, for the Night Scheduler. |
| "Take control of this setup to press its Emergency Stop." | The same, for the Emergency Stop. A member can always press it. |
