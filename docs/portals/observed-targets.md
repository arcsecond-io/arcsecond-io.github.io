# Observed Targets

The module "Observations Central" of Observatory Portals aims to provide a unique and centralized place to managed
targets and observing nights.

When data is uploaded to Arcsecond, or if an External Data Storage is attached to the portal, Arcsecond will read all
files metadata. And *in the case of FITS and XISF files only*, we will extract headers to make them browsable, and
create image previews of 1D and 2D data. The results can be found in the "Datasets Table" and the "Data Explorer" pages.

But thanks to the data files headers, we will be able to build an up-to-date list of all the observed targets attached
to the portal, wherever the associated data is located. This list can be searched, sorted, filtered etc. making
extremely easy to explore all the observations.

Moreover, thanks to the various time fields of data file headers, we will attempt to reconstruct as much as we can
your [Observing Nights](./observations.md).
