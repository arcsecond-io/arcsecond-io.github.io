# Times Bar & Location Selector

The Times Bar display the current time in various units, as well as a location selector. Time and location are the
essential ingredients for iObserve curves to be computed.

<ThemedImage prefix="iobserve-timesbar" alt="iObserve Times Bar"/>

:::tip The right most button
It allows to hide the navigation bar of Arcsecond and expand to the maximum the browser surface used
by iObserve.

:::

## Times

From left to right, the first three times are independent of the location:

* `Now` is the system time, i.e. the time of the computer,
* `UT`, the Universal Time (also called [UTC](https://en.wikipedia.org/wiki/Coordinated_Universal_Time)).
* `JD` is the [Julian Day](https://en.wikipedia.org/wiki/Julian_day).

Next, comes the location-dependent times:

* `Local`, that is the current time at the chosen location. It is empty if no time zone is available (see below).
* `LMST`, the Local Mean Sidereal Time. The word "mean" here must be understood as opposed to "apparent" (see
  this [starting point](https://en.wikipedia.org/wiki/Synodic_day) for more information).

These two times are directly related to the chosen location.

## Location Selector

The Location Selector is composed of a quick search dropdown, and a "compass" button opening a complete selector modal.

The dropdown menu can be used to search in the Arcsecond Encyclopedia of Observing Sites. At the top of the list
will appear also Favorites Sites. These latter sites can be defined by the user in his/her settings, and are placed at
the top for a quick access.

If a custom location is required, it can be determined using the complete Location Selector modal that opens up when
clicking the compass button.
