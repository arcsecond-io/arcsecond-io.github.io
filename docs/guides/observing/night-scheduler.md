---
title: "Night Scheduler"
visibility: public
audience: astronomer
tier: guide
source: handwritten
---

# Night Scheduler

**Describe the night, press Run, read it in the morning.** The Night Scheduler runs a sequence of steps, from opening the
dome to closing it.

<ToolShot tool="night-scheduler" />

## What it is for

- Automate an entire night on one setup.
- See the night before it happens: which target when, how high, and how much of the dark time is used.
- Follow the night live, and step in when needed.

## Sequences, steps, tasks

A **sequence** is one night of one setup. It is made of **steps**, and each step of **tasks** that run one after the
other or in parallel. An observation step starts with a pointing, followed by filters and their exposures: one step can
go through L, R, G and B on the same target.

## Build a night

1. **Create** tonight's sequence, plan another night, or duplicate a sequence onto a new night.
2. **Open and close**: drag **Start of Night** and **End of Night** from the Templates tab. Templates name kinds of
   equipment, and are bound to those of your setup when dropped.
3. **Add targets**: drag them from the Targets tab, for **One pass** or **Until dawn**.
4. **Edit the steps**: pointing by plain slew or by plate solving, filters, exposures, and what to do on error.
5. **Set the start**: astronomical or nautical dusk, sunset, or a fixed time, with an offset.
6. **Check the plan** on the night view: the steps are drawn over the airmass curves.

### Repeating a step

A step can loop until dawn, until a given time, or for a number of passes. Each pass repeats everything but the
pointing. With several conditions, the loop goes on while all of them hold.

### Focus and dithering

In the Configuration tab, set the autofocus and dither rules for the setup or for this sequence only. Autofocus runs
when the temperature has drifted or enough time has passed; dithering, after a number of light frames. Each firing is
recorded with its reason.

## Run it

| Button | What it does |
| --- | --- |
| **Run...** | Starts the sequence |
| **Pause** | Pauses once the current task is over. Resume goes on from the next one |
| **Stop** | Stops now, cancelling the current task. Edit the steps not reached yet, then Resume from where it stopped |
| **Abort...** | Ends the sequence for good |

The Activity tab follows the night: safety, meridian flips, and the autofocus and dither triggers.

## When something interrupts

- **Conditions turn bad.** The sequence is interrupted and the safety procedure runs. The observatory stays closed until
  you reopen it: safety never reopens on its own. See [Safety Configuration](./safety-configuration).
- **A transient takes the telescope.** The sequence stops for the observation series and resumes on its own afterwards.
  If it cannot, the reason is shown. See [ToO Policies](./too-policies).

## Afterwards

A sequence that ran is a record and becomes read-only: duplicate it to run it again. Its header links to the night log
and the dataset. A past sequence that never ran is still editable.
