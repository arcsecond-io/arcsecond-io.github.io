---
title: "Whose data it is"
visibility: embedded
audience: admin
tier: guide
source: handwritten
---

# Whose data it is

Everything the observatory takes belongs to the observatory: it is its archive. Each frame
also records who took it, so a visitor leaves with what they observed, and
members see who observed what.

## Frames are filed under whoever launched the work

| The work | Launched by | Its frames go to | Its night log | Observations and calibrations name |
| --- | --- | --- | --- | --- |
| An exposure, or an exposure sequence, from the Observer Console | The person who sent it | Their own observations folder for that setup and night | The observatory's night log of the telescope and night | Them |
| A sequence from the Night Scheduler | The person the sequence is attached to, whoever starts it | That person's observations folder | The same night log | That person |
| A sequence attached to nobody | Nobody | The observatory's own observations folder | The same night log | Nobody |
| Sky flats, dome flats or a flat field launched from the console | The person who launched it | The observatory's calibration folder for that setup and night | The same night log | Them |
| A calibration plan from the Calibration Manager | Its schedule | The plan's folder for the night | The observatory's calibration night log | Nobody |
| A transient-alert run | The alert | The observatory's own observations folder | The same night log | Nobody |
| An upload or a storage scan | The upload | The folder it names, or the observatory's own | The observatory's night log for that source | The folder's observer, if it has one |

A setup therefore has, for one night, one observations folder per person who
observed, one for work nobody launched, and one calibration folder. The server
decides the folder of every frame, whatever the console showed.

## The rules behind the table

| Rule | What it means |
| --- | --- |
| The files follow whoever launched the work, not the holder of the control | Taking a setup over moves the control, not the frames already on their way: an exposure or a sequence started before ends in its own folder. |
| One night log per night, telescope and source | The night log is the observatory's record of the night. It never splits by person; its list of observers fills itself, and each observation in it names its observer. |
| Calibration folders are the observatory's | Calibrations serve everyone who observes on the setup that night, so every visitor assigned the setup for the night reads them. |
| A visitor writes into no folder but their own | A member may choose a folder made by hand at the console; a visitor's frames always go to their own folder. |
| The personal space stays personal | A visitor's frames never appear in a personal space of their own, nor count against their own storage. |
| Older data records no observer | Datasets and observations recorded before this release name nobody: members see them, visitors do not. |

## Who reads what in Data Grand Central

| | Visitor | Member, Admin |
| --- | --- | --- |
| Datasets and their files | The public ones, their own, and the calibrations of their assigned setup-nights | Every dataset, with its observer |
| Zip downloads | Of the datasets they see | Of every dataset |
| Data packages | None: packages are shared with people on the cloud only | Every package |
| Creating, editing and deleting datasets and files | No | Yes |
| The virtual file system | No: it covers the whole archive | Yes |
