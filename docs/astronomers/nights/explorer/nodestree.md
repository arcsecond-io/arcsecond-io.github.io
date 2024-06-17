# Nodes Tree & Object Imports

:::warning
Many screenshots are still those of V4, until we take new ones from production site.
:::

<ThemedImage prefix="iobserve-nodes-tree" alt="The tree of nodes of iObserve" maxWidth="15rem" float="right"/>

The Nodes Tree is a key component of iObserve, as it holds the organisation of targets into folders.

Note that public & free access to iObserve has a restricted number of nodes, and no folders. Visit
the [Pricing](https://www.arcsecond.io/pricing#iobserve) page for subscribing. **Students get 50% off.**

Each non-folder node has a target associated to it. It can be of type:

* Astronomical Object
* Exoplanet
* Small Body (Asteroid or Comet)
* Solar System Planet

Apart from the planets of our Solar System (whose properties are directly computed by the web app), all other types of
objects are imported by requesting https://api.arcsecond.io which in turn request professional
sources: [SIMBAD](http://simbad.cds.unistra.fr/simbad/) of the [CDS](https://cds.u-strasbg.fr) (Strasbourg, France),
[NASA Exoplanet Archive](https://exoplanetarchive.ipac.caltech.edu/index.html) (IPAC, Caltech, USA)
and [SSD](https://ssd-api.jpl.nasa.gov) from the [JPL](https://www.jpl.nasa.gov) (USA).

<div style="clear: right;"></div>

## Action Buttons

<ThemedImage prefix="iobserve-nodes-tree-action-buttons" alt="The tree of nodes of iObserve" maxWidth="15rem" float="right"/>

The first two action buttons allow to import targets & create folders. See [Global Layout & Options](./layoutoptions.md)
about the last two buttons.

:::info
The little "link" icon to the right of the "Targets" title indicates whether the nodes tree is in sync with its remote.
See [Nodes Tree Sync](#nodes-tree-sync) below.
:::

## Object Import & Nodes

To import an object, press the "+" button. It will open a modal, starting with the "Aladin" tab selected.

:::warning
Because of packaging issues, Aladin cannot be embedded into the desktop app of Arcsecond. It works only in the standard
web inside a navigator. Unfortunately, it is not an easy task to update this packaging to adopt modern tools.
:::

## Folder Nodes

To create a folder node, somply press the "folder" button. It will immediately create a folder node (without any modal).
If an object node is selected, the folder will be created just after it. If a folder node is currently selected, the new
folder will be created inside it. If no node is selected, the folder is created at the end of the nodes tree, at the
root level.

## The Options Menu

## Nodes Tree Sync
