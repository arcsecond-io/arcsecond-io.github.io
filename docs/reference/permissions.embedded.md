---
title: "Roles and permissions"
visibility: embedded
audience: admin
tier: reference
source: generated
backend: "7.2.22"
---

# Roles and permissions

What each role may do on Arcsecond.local. A role holds everything the roles to its left hold. This page is generated from the backend; do not edit it by hand.

## Observatory and members

| | Visitor | Member | Admin |
| --- | :---: | :---: | :---: |
| See the observatory and its public information | ✓ | ✓ | ✓ |
| Edit the observatory's information and settings |  |  | ✓ |
| Sign in from the command-line tool or from another app |  | ✓ | ✓ |
| See the members, their e-mail addresses and the invitations |  | ✓ | ✓ |
| Invite members, change their roles and remove them |  |  | ✓ |
| Create an account with a password |  |  | ✓ |
| Read the activity feed |  | ✓ | ✓ |
| See the observatory's statistics |  | ✓ | ✓ |
| Record and read one's own use of the tools | Their own | ✓ | ✓ |
| Edit the installation's settings, such as its mail server |  |  | ✓ |

- **Invite members, change their roles and remove them.** Nobody changes or removes a member whose role is above their own, or grants a role above their own.
- **Create an account with a password.** The new account gets at most the role of the person who creates it.
- **Record and read one's own use of the tools.** Everyone reaches their own records only.
- **Edit the installation's settings, such as its mail server.** Self-hosted installations.

## License

| | Visitor | Member | Admin |
| --- | :---: | :---: | :---: |
| Activate the installation's license and validate a license key |  |  | Owners only |

- **Activate the installation's license and validate a license key.** Self-hosted installations.

## Sites and equipment

| | Visitor | Member | Admin |
| --- | :---: | :---: | :---: |
| See the observing sites | ✓ | ✓ | ✓ |
| Create and edit observing sites |  |  | ✓ |
| See the telescopes | Assigned setups | ✓ | ✓ |
| Create, edit and delete telescopes |  |  | ✓ |
| Add images to observing sites and telescopes |  | ✓ | ✓ |
| See the instruments | Assigned setups | ✓ | ✓ |
| Edit instruments |  | ✓ | ✓ |
| See the horizon masks | Assigned setups | ✓ | ✓ |
| Upload horizon masks |  | ✓ | ✓ |
| See the observatory map and its inventory |  | ✓ | ✓ |
| Edit the observatory map and its inventory |  |  | ✓ |
| See the observing setups | Assigned setups | ✓ | ✓ |
| Create, edit and delete observing setups |  | ✓ | ✓ |
| Assign setups to visitors for a range of observing nights |  | ✓ | ✓ |
| See the equipment, its Alpaca servers and devices | Assigned setups, and the site context | ✓ | ✓ |
| Create, edit and delete equipment, Alpaca servers and devices |  | ✓ | ✓ |
| See the all-sky cameras' frames and night products | ✓ | ✓ | ✓ |
| Upload all-sky camera frames |  | ✓ | ✓ |

- **Assign setups to visitors for a range of observing nights.** A visitor operates an assigned setup during the nights of the assignment, and reads it, its telescope and its equipment at any time.
- **See the equipment, its Alpaca servers and devices.** The site context is the weather station, the safety monitors, the all-sky cameras and the webcams: every visitor sees them.

## Control room

| | Visitor | Member | Admin |
| --- | :---: | :---: | :---: |
| Watch the equipment live | Assigned setups, during the assignment; the site context always | ✓ | ✓ |
| Send commands to the equipment and run tasks | Assigned setups, during the assignment, while holding their control | ✓ | ✓ |
| Force the release of a device whose holder has stopped reporting |  | ✓ | ✓ |
| Settle one's own setups when signing out | ✓ | ✓ | ✓ |
| See who controls each setup, and the requests to take it over | Assigned setups | ✓ | ✓ |
| Take control of a setup | Assigned setups, during the assignment | ✓ | ✓ |
| Release a setup one controls, and answer the requests to take it over | ✓ | ✓ | ✓ |
| Read the history of procedures and runs | Assigned setups | ✓ | ✓ |

- **Send commands to the equipment and run tasks.** Only on equipment nobody else holds, or on a setup one controls. A visitor always holds the control of the setup they drive.
- **Settle one's own setups when signing out.** Stopping what runs needs the right to operate; a fail-safe shutdown needs the right to launch a safety procedure.
- **Take control of a setup.** Someone who outranks the holder takes over at once, anyone else asks; at the telescope an owner ranks as an admin.
- **Release a setup one controls, and answer the requests to take it over.** Only the current holder.

## Sequences and scheduling

| | Visitor | Member | Admin |
| --- | :---: | :---: | :---: |
| See observing sequences and their triggers | Their own, on assigned setups | ✓ | ✓ |
| Create, edit, run and delete observing sequences and their triggers | Their own, on assigned setups | ✓ | ✓ |
| See sequence step and task templates | ✓ | ✓ | ✓ |
| Create, edit and delete sequence step and task templates | ✓ | ✓ | ✓ |
| See the night plans |  | ✓ | ✓ |
| Create, edit and delete night plans |  | ✓ | ✓ |
| See calibration templates, plans and schedules | ✓ | ✓ | ✓ |
| Create, edit and delete calibration templates, plans and schedules |  | ✓ | ✓ |
| Launch a calibration plan by hand |  | ✓ | ✓ |
| See the observatory schedule | ✓ | ✓ | ✓ |
| Create, edit and delete observatory schedule events |  |  | ✓ |

- **Create, edit, run and delete observing sequences and their triggers.** A visitor prepares their sequences at any time, starts or resumes them only during the nights of the assignment and while holding the setup's control, and may pause or stop them at any time.

## Safety and transient alerts

| | Visitor | Member | Admin |
| --- | :---: | :---: | :---: |
| See the safety conditions, procedures and decisions | ✓ | ✓ | ✓ |
| Create, edit and delete safety conditions and procedures |  |  | ✓ |
| Launch a safety procedure by hand |  | ✓ | ✓ |
| Press the Emergency Stop of a setup | The setup whose control they hold | ✓ | ✓ |
| See the transient-alert feed, policies, sources and runs | ✓ | ✓ | ✓ |
| Create, edit and delete transient-alert policies |  |  | ✓ |
| Dismiss, observe or stop a transient alert, and answer an interruption |  | ✓ | ✓ |
| Allow or refuse transient-alert interruptions on a setup |  | ✓ | ✓ |
| Manage custom transient-alert sources and their secrets |  |  | ✓ |

- **Press the Emergency Stop of a setup.** It launches the Fail-Safe Shutdown of the setup's site.

## Targets and night logs

| | Visitor | Member | Admin |
| --- | :---: | :---: | :---: |
| See the targets | Those in their lists or observed by them | ✓ | ✓ |
| Add targets | ✓ | ✓ | ✓ |
| Edit and delete targets |  | ✓ | ✓ |
| Compute the current positions of targets |  | ✓ | ✓ |
| See the target lists | Their own | ✓ | ✓ |
| Create, edit and delete target lists | Their own | ✓ | ✓ |
| Send a target list to a Virtual Observatory tool |  | ✓ | ✓ |
| See the night logs | Those of their assigned setup-nights, without the journal | ✓ | ✓ |
| Create, edit and delete night logs |  | ✓ | ✓ |
| See observations and calibrations | Their own; calibrations of assigned setup-nights | ✓ | ✓ |
| Create and edit observations and calibrations | Their own | ✓ | ✓ |
| See how many observations and calibrations each night holds |  | ✓ | ✓ |
| Use satellite tracks and small-body ephemerides |  | ✓ | ✓ |
| Keep a personal Night Explorer tree | Their own, of the targets they reach | ✓ | ✓ |

- **Add targets.** Adds the observatory's existing target when the object is already known; never a copy.
- **Keep a personal Night Explorer tree.** Each tree is its owner's alone. A tree changes a target's colour and notes only for those who may edit targets.

## Data

| | Visitor | Member | Admin |
| --- | :---: | :---: | :---: |
| See the public datasets and their data files | Public ones, their own, and the calibrations of their assigned setup-nights | ✓ | ✓ |
| See every dataset and data file |  | ✓ | ✓ |
| Create datasets, upload data files and edit them |  | ✓ | ✓ |
| Delete datasets and data files |  | ✓ | ✓ |
| Download a dataset as a zip file | Those they can see | ✓ | ✓ |
| See the zip files prepared for datasets and data packages | Those of the datasets they see | ✓ | ✓ |
| Browse the data packages |  | ✓ | ✓ |
| See a data package |  | ✓ | ✓ |
| See every data package and the datasets it holds |  | ✓ | ✓ |
| Create, edit and delete data packages |  | ✓ | ✓ |
| Download a data package as a zip file |  | ✓ | ✓ |
| See the data storages | ✓ | ✓ | ✓ |
| Create, edit and delete data storages, and read their connection details |  |  | ✓ |
| Follow a data storage's scans, pushes and volume |  | ✓ | ✓ |
| Scan a data storage for new files |  | ✓ | ✓ |
| Push the pending files to a data storage now |  |  | ✓ |
| See one's own upload keys |  | ✓ | ✓ |

- **See the public datasets and their data files.** Frames are filed per observer since the release after 7.2.22: a visitor's own are those they took; older datasets record no observer and stay members'.
- **Browse the data packages.** A member sees every package. Packages are shared with people on the cloud only, so a visitor of an installation sees none.
- **See one's own upload keys.** Everyone sees their own keys only.

## Not governed by role

- **Reading and answering an invitation.** The invitation decides: whoever holds its link reads it, and the person invited answers it.
