---
title: "Observatory Headquarters"
visibility: public
audience: admin
tier: guide
source: handwritten
---

# Observatory Headquarters

Every Arcsecond.local installation is **multi-user by design**. You do not opt
into a separate "organisation" or "portal" product — the moment you run
Arcsecond.local, you are running a shared space for your whole observatory,
science group, university, planetarium or astronomy club. **Observatory
Headquarters** is the app where that shared life is managed.

> "All astronomical observatories in the world have in common the needs to
> prepare and plan observations, organise and execute night operations, then
> store, package and distribute data."
>
> — Cédric Foellmi, Ph.D. (former
> [ESO Fellow in La Silla](https://www.eso.org/sci/publications/messenger/archive/no.121-sep05/messenger-no121-69-69.pdf),
> and Arcsecond Founder)

The other three apps — [Night Studio](/guides/observing/night-studio), the
[Control Room](/guides/observing/control-room) and [Data Grand Central](/guides/data/) — are
the same for **every member** of your install. Observatory Headquarters adds the
organisation-wide layer on top of them.

## What it gives you

- **A single home for the whole life of your observatory** — the history of all
  observations, observers, targets and observing nights, and a modern data
  archive built on the same APIs that power the rest of the platform, even for
  data located elsewhere (see [External Storages](/guides/data/external-storages)).
- **An unlimited number of members**, with four clear roles
  ([Permissions & Roles](./permissions)) to control who can do what and who can
  access what.
- **Sharing**, from a private dataset between two members up to a customizable
  public page exposing selected data to the world.
- **An observatory schedule, a map, storages and settings** shared by everyone,
  each with [its own tool](#the-tools).

## Members and roles

Membership and access are governed by four roles, `Visitor`, `Member`, `Admin`
and `Owner`, on top of what anyone may see in public. What each role is for is
on the [Permissions & Roles](./permissions) page, and the complete list of
rights, generated from the server, on the
[Roles and permissions](/reference/permissions) page.

## The tools

### Schedule

One calendar for the whole observatory. Nights fill in by themselves from your data, beside the events you add:
maintenance, meetings, visitors. Events can recur, and name telescopes, observers and night operators.

<ToolShot tool="observatory-schedule" />

### Map

A drawing of the observatory and of how it is linked: sites, domes, buildings, rooms, telescopes, equipment, computers,
software and network. It starts from your registry; admins arrange it. Members only.

<ToolShot tool="observatory-map" />

### Data Storages

Where the data lives, and how it gets there. Admins attach storages (SMB, S3, SFTP...) to which new data files and
database backups are pushed. See [External storages](/guides/data/external-storages).

<ToolShot tool="data-storages" />

### Settings

Activation, email, file naming, appearance and preferences. Admins only.

<ToolShot tool="observatory-settings" />

<ToolShot tool="observatory-settings" :index="1" />
