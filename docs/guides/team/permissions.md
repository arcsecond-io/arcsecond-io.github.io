---
title: "Permissions & Roles"
visibility: public
audience: admin
tier: guide
source: handwritten
---

# Permissions & Roles

Everyone who signs in to Arcsecond.local holds one of three roles: `Visitor`,
`Member` or `Admin`. Each role holds everything the role before it holds. The
installation's owners are admins, with the few differences told below.

**Members** run the observatory from day to day. They see all of it and work
with all of it: the observing setups and their equipment, the targets, the
night plans and night logs, the data. They define setups and equipment, they
take control of a setup to observe with it, and they assign setups to
visitors. **Visitors** observe on the setups assigned to them: a member hands
a visitor a setup for a range of observing nights, and during those nights the
visitor takes control of it, drives its equipment and runs their own observing
sequences on it. They must hold the setup's control to send it commands or to
start a sequence on it, so only one visitor drives a setup at a time. They
prepare their sequences whenever they like, and may pause or stop them at any
time. At any time they read those setups, their telescopes and their
equipment, and they always see the site itself: its weather, its safety
status, its all-sky cameras. They keep their own target lists, and add
targets: a target the observatory already has is found, never copied, so the
observatory keeps one list of targets whoever added them. They see the targets
of their lists and those they observed. The observatory keeps one night log
per night and telescope, whoever observed, and each observation in it names
its observer: a visitor sees the night logs of their setups' nights without
the journal, which stays the members', their own observations in them, and
the calibrations of those nights. In Data Grand Central, the frames a visitor
takes are filed under their name, in a folder of their own for each setup and
night; they see and download those, the calibrations of their setups' nights,
and the public datasets, but edit or delete none of them, since the frames are
the observatory's archive.

**Admins** make the critical changes: the observing sites and telescopes, the
observatory's settings, the safety conditions and procedures, the
transient-alert policies, the data storages, and the members and their roles.
Engineers are usually admins. An admin never grants a role above their own.
**Owners**, the account that set the installation up and those an owner
made owners, are admins in everything else, with three differences: only an owner activates the
installation's license, only an owner makes someone an owner, and an admin
never changes or removes an owner. An installation always keeps at least one
owner.

The complete list of what each role may do is generated from the server
itself, so that it never drifts from what the server does:
[Roles and permissions](/reference/permissions). The copy of this
documentation that ships inside an installation also lists the rights of the
Control Room, of safety and of the installation, and explains visitors and
their data in more detail.
