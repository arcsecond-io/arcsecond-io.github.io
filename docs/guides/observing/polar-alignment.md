---
title: "Polar Alignment"
visibility: public
audience: astronomer
tier: guide
source: handwritten
---

# Polar Alignment

**Which knob to turn, by how much, and how sure we are.** The tool measures how far a mount's polar axis sits from the
celestial pole.

<ToolShot tool="polar-alignment" />

## How it measures

The telescope holds two or three pointings for several minutes each, with the mount tracking, and watches the field
drift by plate solving. The drift gives the altitude and azimuth errors of the axis, with their uncertainties.

## What it needs

- A mount that can slew and a camera on the telescope.
- Coordinates for the telescope or its site.
- A dark sky, and the plate solver reachable.

A telescope's card says what is missing when it cannot be measured.

## Measure

1. Click **Measure...** on the card of the telescope.
2. Pick the camera and read the plan: the pointings, the duration, and the accuracy to expect. Holding each pointing
   longer gives a better accuracy.
3. **Start Measurement**. A *dry run* does the same without recording the result as a measurement.
4. Turn the knobs as told, then measure again.

## Read the result

| Value | Meaning |
| --- | --- |
| **Guidance** | Raise or lower the axis, turn it east or west, or hold when within tolerance. In turns of the knob if you entered what one turn is worth |
| **Total error** | The distance of the axis to the pole |
| **Unguided exposure** | How long you can expose before stars trail by one pixel |
| **Poorly conditioned** | The pointings could not tell altitude from azimuth. Measure again with pointings spread wider |

## History

Every run of a mount is kept. An axis that moves between two runs by more than their uncertainty was adjusted, or has
moved on its own: worth checking.
