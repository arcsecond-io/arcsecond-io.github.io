---
title: "Roles on this installation"
visibility: embedded
audience: admin
tier: guide
source: handwritten
---

# Roles on this installation

Everyone who signs in to this installation holds one of three roles:
`Visitor`, `Member` or `Admin`. Each role holds everything the role before it
holds; the installation's owners are admins (see [Owners](#owners) below).
The server decides every right, and the buttons of the apps follow what it
answers, so a button you cannot use is greyed out or absent rather than
refused after the click.

This section explains the rules. The complete list of rights, one table per
area of the observatory, is [All rights, by area](/reference/permissions).
Two pages go further where the rules need more than a table:
[Visitors and their setups](/guides/permissions/visitors) and
[Whose data it is](/guides/permissions/data).

## The roles

| Role | Who it is for | What it holds, beyond the role before |
| --- | --- | --- |
| Visitor | Guest observers: a student, a remote astronomer, a partner team | The setups assigned to them for a range of nights: they drive them, observe with their own sequences and keep what they take. They always see the site itself, and their own targets, lists, observations and data. |
| Member | The observatory's staff, who run it from night to night | Every setup and its equipment, and everything else: targets, night plans and night logs, all the data. Members define setups and equipment, drive any setup, assign setups to visitors, and launch safety procedures and calibration plans. |
| Admin | Engineers and those in charge | The critical changes: observing sites and telescopes, the observatory's settings, safety conditions and procedures, transient-alert policies and sources, data storages, the observatory map, the members and their roles, and the installation's settings such as its mail server. |

## Rules about roles

| Rule | What it means |
| --- | --- |
| Nobody grants a role above their own | A member gives no role; an admin makes visitors, members and admins. |
| Accounts with a password | Admins may create an account with a password for someone, with at most their own role. |
| A promotion lifts the visitor rules at once | A visitor made a member reaches everything immediately. Their setup assignments are kept, unused, and apply again if they become a visitor again. |

## Taking control of a setup

Holding a setup's control keeps everyone else from driving it. A visitor must
hold it to drive their setup; a member may drive a setup nobody holds without
taking it.

| You are | The setup is held by | What happens |
| --- | --- | --- |
| Anyone allowed to drive the setup | Nobody | You take it at once. |
| A member or an admin | Someone you outrank | You take it at once, and they are told. |
| Anyone | Someone of your rank, or above you | You ask them, and they accept or refuse. |
| A visitor | Anyone | You take or ask only during a night the setup is assigned to you. |

The control of a night ends at local noon at the site. A visitor's control
also ends when their assignment no longer covers the night. Nothing running
is stopped when a control moves or ends: a sequence goes on to its end, and
the next command of someone without the control is refused.

## Owners

The account that set the installation up is its first owner. An owner is an
admin in everything above, and three things still set owners apart: only an
owner activates the installation's license, only an owner makes someone an
owner, and an admin never changes or removes an owner. An installation always
keeps at least one owner.
