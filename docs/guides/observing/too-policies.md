---
title: "ToO Policies"
visibility: public
audience: astronomer
tier: guide
source: handwritten
---

# ToO Policies

**Decide in advance which transients are worth the telescope.** ToO (Target of Opportunity) policies judge each alert as
it arrives, and tell you about it or observe it at once.

<ToolShot tool="transient-alerts" />

## What it is for

- Be notified of the alerts your telescope can observe.
- Interrupt the night for the most important ones.
- Know afterwards what became of every alert, and why.

To browse the transient sky itself, use [Transient Sky](./night-studio#transient-sky).

## Before you start

The alerts come from an optional service, set up once by the operator: see
[Receiving transient alerts](/guides/operating/transient-alerts). The header of the tool says whether each feed is
listening.

## Policies and series

<ToolShot tool="transient-alerts" :index="1" />

A **policy** says which alerts matter, from which telescope:

| Part | What you set |
| --- | --- |
| **Which alerts** | The missions, the largest localization error, and a priority when several policies match. ZTF alerts are only taken by a policy that names them |
| **Observability** | The Sun below, the target above and the Moon at least at given angles. The telescope's horizon mask counts when there is one |
| **Action** | *Notify*, or *interrupt* with a given series |
| **Later** | Whether an alert that is not up yet may be observed later in the night, and for how long at least |

A **series** says what the telescope does when a policy interrupts: focus if the focus is stale, centre by plate solving,
then take the frames. It can run for a number of frames, for a duration, or for as long as possible. It always ends when
the target sets, the Sun rises, the Moon comes too close, safety says NOGO, or the event is retracted.

Without any policy, alerts are not evaluated.

## When a policy interrupts

1. A dialog announces it, with a 30-second countdown: **Interrupt now** or **Keep observing**. No answer means yes.
2. The frame in progress is read out, and what is running is stopped.
3. The series takes the telescope. A banner follows it, with a **Stop** button.
4. A Night Scheduler sequence that was running resumes when the series ends.

Interruptions only happen on a setup whose **Interrupts** switch, in the status bar, is on. It is on by
default. Switching it off refuses new runs; one already observing goes on.

## Verdicts & Runs

Every alert is listed with its verdict and the policy that gave it. From there, dismiss an alert, or press **Observe now**
to run the series yourself. Beside it, the runs: what was triggered, how many frames were taken, and how it ended.

## Custom sources

Feeds other than GCN can push their own alerts. Create a source, and hand its address and token to the relay that sends
the events. Only admins see the token, and only admins and owners edit policies.
