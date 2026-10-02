---
title: "Permissions & Roles"
visibility: public
audience: admin
tier: guide
source: handwritten
---

# Permissions & Roles

Every member of an Arcsecond portal holds one of four roles: `Visitor`,
`Member`, `Admin` or `Owner`. Each role holds everything the role before it
holds. Anyone else, signed in or not, sees only what the portal makes public.

**Members** run the observatory from day to day. They see the whole portal and
work with all of it: the observing setups and their equipment, the targets,
the night plans and night logs, the data. They define setups and equipment,
and they take control of a setup to observe with it, and they assign setups to
visitors. **Visitors** observe on the setups assigned to them: a member hands
a visitor a setup for a range of observing nights, and during those nights the
visitor takes control of it, drives its equipment and runs their own observing
sequences on it. They prepare those sequences whenever they like, and may
pause or stop them at any time. At any time they read those setups, their
telescopes and their equipment, and they always see the site itself: its
weather, its safety status, its all-sky cameras. They also receive the data
packages shared with them.

**Admins** make the critical changes: the observing sites and telescopes, the
portal's settings, the safety conditions and procedures, the transient-alert
policies, and the members and their roles. Engineers are usually admins. An
admin never changes or removes an owner, and never grants a role above their
own. **Owners** are the portal's accountable accounts. On top of everything an
admin does, exactly three things are theirs alone: closing the organisation on
the cloud, choosing the account that pays (an owner or an admin), and
activating the license of a self-hosted installation. A portal always keeps at
least one owner. An owner's role is administrative, not operational: at the
telescope, an owner counts as an admin.

The complete list of what each role may do is generated from the server
itself, so that it never drifts from what the server does:
[Roles and permissions](/reference/permissions). The copy of this documentation
that ships inside a self-hosted installation also lists the rights of the
Control Room, of safety and of the installation.
