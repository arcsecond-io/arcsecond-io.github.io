---
title: "Roles and permissions"
visibility: public
audience: admin
tier: reference
source: generated
backend: "7.2.22"
---

# Roles and permissions

What each role may do in a portal. A role holds everything the roles to its left hold. This page is generated from the backend; do not edit it by hand.

## Portal and members

| | Anonymous | Visitor | Member | Admin | Owner |
| --- | :---: | :---: | :---: | :---: | :---: |
| See the portal and its public information | ✓ | ✓ | ✓ | ✓ | ✓ |
| Edit the portal's information and settings |  |  |  | ✓ | ✓ |
| Sign in to the portal from the command-line tool or from another app |  |  | ✓ | ✓ | ✓ |
| See the members, their e-mail addresses and the invitations |  |  | ✓ | ✓ | ✓ |
| Invite members, change their roles and remove them |  |  |  | ✓ | ✓ |
| Create an account with a password |  |  |  | ✓ | ✓ |
| Read the portal's activity feed |  |  | ✓ | ✓ | ✓ |
| See the portal's statistics |  |  | ✓ | ✓ | ✓ |
| Record and read one's own use of the portal's tools |  | Their own | ✓ | ✓ | ✓ |
| Close the organisation |  |  |  |  | ✓ |

- **Invite members, change their roles and remove them.** Nobody changes or removes a member whose role is above their own, or grants a role above their own.
- **Create an account with a password.** The new account gets at most the role of the person who creates it.
- **Record and read one's own use of the portal's tools.** Everyone reaches their own records only.
- **Close the organisation.** Cloud portals only.

## Billing and license

| | Anonymous | Visitor | Member | Admin | Owner |
| --- | :---: | :---: | :---: | :---: | :---: |
| Choose the account that pays for the portal |  |  |  |  | ✓ |
| Open the portal's billing page and read its subscriptions |  |  |  | ✓ | ✓ |
| See the portal's plan in one's own profile |  |  | ✓ | ✓ | ✓ |

- **Choose the account that pays for the portal.** The payer must be an owner or an admin.

## Sites and equipment

| | Anonymous | Visitor | Member | Admin | Owner |
| --- | :---: | :---: | :---: | :---: | :---: |
| See the observing sites |  | ✓ | ✓ | ✓ | ✓ |
| Create and edit observing sites |  |  |  | ✓ | ✓ |
| See the telescopes |  | Assigned setups | ✓ | ✓ | ✓ |
| Create, edit and delete telescopes |  |  |  | ✓ | ✓ |
| Add images to observing sites and telescopes |  |  | ✓ | ✓ | ✓ |
| See the instruments |  | Assigned setups | ✓ | ✓ | ✓ |
| Edit instruments |  |  | ✓ | ✓ | ✓ |
| See the horizon masks |  | Assigned setups | ✓ | ✓ | ✓ |
| Upload horizon masks |  |  | ✓ | ✓ | ✓ |
| See the observatory map and its inventory |  |  | ✓ | ✓ | ✓ |
| Edit the observatory map and its inventory |  |  |  | ✓ | ✓ |
| See the observing setups |  | Assigned setups | ✓ | ✓ | ✓ |
| Create, edit and delete observing setups |  |  | ✓ | ✓ | ✓ |
| Assign setups to visitors for a range of observing nights |  |  | ✓ | ✓ | ✓ |
| See the equipment, its Alpaca servers and devices |  | Assigned setups, and the site context | ✓ | ✓ | ✓ |
| Create, edit and delete equipment, Alpaca servers and devices |  |  | ✓ | ✓ | ✓ |
| See the all-sky cameras' frames and night products |  | ✓ | ✓ | ✓ | ✓ |
| Upload all-sky camera frames |  |  | ✓ | ✓ | ✓ |

- **Assign setups to visitors for a range of observing nights.** A visitor operates an assigned setup during the nights of the assignment, and reads it, its telescope and its equipment at any time.
- **See the equipment, its Alpaca servers and devices.** The site context is the weather station, the safety monitors, the all-sky cameras and the webcams: every visitor sees them.

## Sequences and scheduling

| | Anonymous | Visitor | Member | Admin | Owner |
| --- | :---: | :---: | :---: | :---: | :---: |
| See observing sequences and their triggers |  | Their own, on assigned setups | ✓ | ✓ | ✓ |
| Create, edit, run and delete observing sequences and their triggers |  | Their own, on assigned setups | ✓ | ✓ | ✓ |
| See sequence step and task templates |  | ✓ | ✓ | ✓ | ✓ |
| Create, edit and delete sequence step and task templates |  | ✓ | ✓ | ✓ | ✓ |
| See the night plans |  |  | ✓ | ✓ | ✓ |
| Create, edit and delete night plans |  |  | ✓ | ✓ | ✓ |
| See the observatory schedule |  | ✓ | ✓ | ✓ | ✓ |
| Create, edit and delete observatory schedule events |  |  |  | ✓ | ✓ |

- **Create, edit, run and delete observing sequences and their triggers.** A visitor prepares their sequences at any time, starts them only during the nights of the assignment, and may pause or stop them at any time.

## Safety and transient alerts

| | Anonymous | Visitor | Member | Admin | Owner |
| --- | :---: | :---: | :---: | :---: | :---: |
| See the transient-alert feed, policies, sources and runs |  | ✓ | ✓ | ✓ | ✓ |
| Create, edit and delete transient-alert policies |  |  |  | ✓ | ✓ |
| Dismiss, observe or stop a transient alert, and answer an interruption |  |  | ✓ | ✓ | ✓ |
| Allow or refuse transient-alert interruptions on a setup |  |  | ✓ | ✓ | ✓ |
| Manage custom transient-alert sources and their secrets |  |  |  | ✓ | ✓ |

## Targets and night logs

| | Anonymous | Visitor | Member | Admin | Owner |
| --- | :---: | :---: | :---: | :---: | :---: |
| See the targets |  | Those in their lists or observed by them | ✓ | ✓ | ✓ |
| Add targets |  | ✓ | ✓ | ✓ | ✓ |
| Edit and delete targets |  |  | ✓ | ✓ | ✓ |
| Compute the current positions of targets |  |  | ✓ | ✓ | ✓ |
| See the target lists |  | Their own | ✓ | ✓ | ✓ |
| Create, edit and delete target lists |  | Their own | ✓ | ✓ | ✓ |
| Send a target list to a Virtual Observatory tool |  |  | ✓ | ✓ | ✓ |
| See the night logs |  | Their own | ✓ | ✓ | ✓ |
| Create, edit and delete night logs |  |  | ✓ | ✓ | ✓ |
| See observations and calibrations |  | Their own; calibrations of assigned setup-nights | ✓ | ✓ | ✓ |
| Create and edit observations and calibrations |  | ✓ | ✓ | ✓ | ✓ |
| See how many observations and calibrations each night holds |  |  | ✓ | ✓ | ✓ |
| Use satellite tracks and small-body ephemerides |  |  | ✓ | ✓ | ✓ |
| Keep a personal Night Explorer tree |  |  | ✓ | ✓ | ✓ |

- **Add targets.** Adds the observatory's existing target when the object is already known; never a copy.
- **Keep a personal Night Explorer tree.** Each tree is its owner's alone.

## Data

| | Anonymous | Visitor | Member | Admin | Owner |
| --- | :---: | :---: | :---: | :---: | :---: |
| See the public datasets and their data files | ✓ | Public ones, their own, and the calibrations of their assigned setup-nights | ✓ | ✓ | ✓ |
| See every dataset and data file of the portal |  |  | ✓ | ✓ | ✓ |
| Create datasets, upload data files and edit them |  |  | ✓ | ✓ | ✓ |
| Delete datasets and data files |  |  | ✓ | ✓ | ✓ |
| Download a dataset as a zip file |  | Those they can see | ✓ | ✓ | ✓ |
| See the zip files prepared for datasets and data packages |  | Those of the datasets they see and of the packages shared with them | ✓ | ✓ | ✓ |
| Browse the data packages | ✓ | Those shared with them | ✓ | ✓ | ✓ |
| See a data package |  | Those shared with them | ✓ | ✓ | ✓ |
| See every data package and the datasets it holds |  |  | ✓ | ✓ | ✓ |
| Create, edit and delete data packages |  |  | ✓ | ✓ | ✓ |
| Download a data package as a zip file |  | Those shared with them | ✓ | ✓ | ✓ |
| Share data packages with people outside the portal |  |  | ✓ | ✓ | ✓ |
| See the portal's data storages |  | ✓ | ✓ | ✓ | ✓ |
| Create, edit and delete data storages, and read their connection details |  |  |  | ✓ | ✓ |
| Follow a data storage's scans, pushes and volume |  |  | ✓ | ✓ | ✓ |
| Scan a data storage for new files |  |  | ✓ | ✓ | ✓ |
| Push the pending files to a data storage now |  |  |  | ✓ | ✓ |
| See one's own upload keys |  |  | ✓ | ✓ | ✓ |

- **See the public datasets and their data files.** A portal's frames are filed per observer since the release after 7.2.22: a visitor's own are those they took; older portal datasets record no observer and stay members'.
- **Browse the data packages.** Anyone sees the public packages; a member sees every package.
- **See one's own upload keys.** Everyone sees their own keys only.

## Not governed by role

- **Reading and answering an invitation.** The invitation decides: whoever holds its link reads it, and the person invited answers it.
