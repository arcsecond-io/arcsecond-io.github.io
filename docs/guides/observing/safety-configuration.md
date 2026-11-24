---
title: "Safety Configuration"
visibility: public
audience: astronomer
tier: guide
source: handwritten
---

# Safety Configuration

**Know when to stop, and stop by itself.** Conditions are evaluated continuously while observing, and a procedure makes
the observatory safe when they fail.

<ToolShot tool="safety-configuration" />

## Condition sets

A **condition set** watches a site, a telescope or a target, and gives a verdict: **GO** or **NOGO**. It is NOGO when any
of its conditions matches, or only when all do, as you choose.

Arcsecond.local starts with these:

| Set | For each | What it guards |
| --- | --- | --- |
| **Weather Safety** | Site | Wind, humidity, clouds, rain, and the safety monitor where there is one |
| **Night Bounds** | Site | Daylight: the night ends at dawn |
| **Mount Limits** | Telescope | The lowest altitude, and the telescope's horizon mask |
| **Sun Avoidance** | Telescope | The distance to the Sun. Mandatory: it cannot be disabled or deleted, and its separation can only be raised |

Review their thresholds for your own site before relying on them.

A disabled set is still evaluated and logged, but nothing acts on its verdict.

## Procedures

A **procedure** is what a set runs on NOGO: steps run one after the other, and the tasks of a step in sequence or
together. For each task, choose whether a failure aborts the procedure or is ignored. A procedure always starts by
aborting what is running, so that nothing keeps commanding the devices it is closing.

Each site starts with two:

- **Fail-Safe Shutdown** parks the mount, and closes the cover and the dome. It is also what **Emergency Stop** launches
  in the [Observer Console](./observer-console#safety).
- **Reopen** does the opposite, and is only ever launched by hand.

::: warning Safety never reopens
Nothing runs when conditions return to GO. Once closed, the observatory stays closed until someone reopens it.
:::

::: danger
Check that every procedure names the right devices, and test it while you are at the telescope. Arcsecond's safety does
not replace hardware protections, such as limit switches and a rain sensor wired to the dome.
:::

## Decisions Log

Every change between GO and NOGO is kept with the conditions that caused it and the procedure that ran.

<ToolShot tool="safety-configuration" :index="1" />

Only admins and owners edit conditions and procedures. Everyone else can read them, and the log.
