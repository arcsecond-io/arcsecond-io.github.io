# Control Room

> Automate your data acquisition, integrated with your data pipelines.

The **Control Room** is the app where Arcsecond.local acquires new data and
automates your observing nights. It sits between [Night Studio](/apps/night-studio/)
— where you prepare what to observe — and [Data Grand Central](/apps/data/) —
where the resulting data is stored and shared.

Because it runs on your own infrastructure, the Control Room talks directly to
the equipment on (or reachable from) the host, including live cameras through
the [Live-Image Proxy](/local/webcam).

:::info
The Control Room is the most recent of the four apps and is under active
development. Some of the tools below are already in use on real telescopes;
others are still maturing. [Contact us](mailto:team@arcsecond.io) if you'd like
to follow along or take part in early testing.
:::

## Equipment Registry

<ThemedImage prefix="platform62-controlroom-equipments" alt="Equipment Registry"/>

Register all your equipment for precise setup and configuration. Freely combine
any of them into custom setups.

## Observer Console

<ThemedImage prefix="platform63-controlroom-console" alt="Observer Console"/>

A packed and powerful frame dedicated to observing manually, with a 1-click
switch between telescopes and custom setups. Currently tested in various
locations.

## Night Scheduler

<ThemedImage prefix="platform62-controlroom-scheduler" alt="Night Scheduler"/>

Our main automation tool, currently under active development. Simply define a
sequence of targets, exposures, constraints, triggers and more, then press play!
Come back in the morning to harvest the night — Arcsecond has recorded
**everything**, every 5 seconds, for you to replay the night.

## Queue Mode

<ThemedImage prefix="platform62-controlroom-queuemode" alt="Queue Mode"/>

Automate your automatic nights! Define observation programs and let Arcsecond
optimise your observations depending on the live constraints on targets,
weather, safety, and more.

## Calibrations Manager

<ThemedImage prefix="platform63-controlroom-calibmanager" alt="Calibrations Manager"/>

Remove the hassle of calibrations with a dedicated manager. Define your needs
and the best schedule, and Arcsecond takes care of the rest, making dedicated
[datasets](/apps/data/datasets) for you.
