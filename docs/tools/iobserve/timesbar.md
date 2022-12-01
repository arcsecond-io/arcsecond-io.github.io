# Times Bar & Location Selector

The Times Bar display the current time in various units, as well as a location selector. Time and location are the
essential ingredients for iObserve curves to be computed.

<ThemedImage prefix="./iobserve-timesbar" alt="iObserve Times Bar"/>

From left to right, the first three times are independent of the location:

* System Time "Now", i.e. the time of the computer
* UT Time, the Universal Time (also called [UTC](https://en.wikipedia.org/wiki/Coordinated_Universal_Time)).
* [Julian Day](https://en.wikipedia.org/wiki/Julian_day).

Next, comes the location-dependent times:

* Local, that is the current time at the chosen location. It is empty if no time zone is available (see below).
* LMST, the Local Mean Sidereal Time. The word "mean" here must be understood as opposed to "apparent" (see
  this [starting point](https://en.wikipedia.org/wiki/Synodic_day) for more information).

These two times are directly related to the chosen location, which can be set in different ways.

First the dropdown menu can be used to search in the Arcsecond Encyclopedia of Observing Sites. At the top of the list
will appear also Favorites Sites. These latter are sites defined by the user in his/her settings.

If a custom location is required, it can be determined using the complete Location Selector modal that opens up when
clicking the compass button.
