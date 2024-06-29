# App Mode

In V5, we introduced the new `App Mode` preference. It allows to reduce the perimeter of the Arcsecond webapp to 3
different levels:

- **Full Arcsecond** (default). This is the full Arcsecond site, with all its pages.
- **Night Explorer** This mode focuses Arcsecond to Night Explorer (a.k.a. iObserve) only.
  It basically transforms Arcsecond into Night Explorer app. It will re-route the homepage to Night Explorer, remove
  most of the standard app routes, and leave the Night Explorer app only (with the few necessary auxiliary pages).
  Perfect when combined with a standalone installation!
- **All Nights** This mode is intermediate between the two others. It focuses Arcsecond to only the Nights domain: Night
  Explorer, Night Plans, Rule Sets & Night Logs. It will hide the Targets and Data domains.

For the last two modes, some auxiliary pages (such as the Observing Sites encyclopedia) remain nonetheless visible.
Below is a screenshot of the "Preferences" section of your Settings page (`arcsecond.io/@<username>`).

<ThemedImage prefix="astronomers-nights-explorer-appmode" alt="App Mode"/>

