---
title: "XBMC 11.0 - July Cycle"
date: 2012-08-13T04:00:00Z
tags:
  - Prerelease
author: Nathan Betzen
---

[![](/images/blog/xbmc_tags_feature-300x150.webp "xbmc tags feature")](/images/blog/xbmc_tags_feature.webp)As [mentioned previously](https://kodi.wiki/theuni/2012/04/25/update-grab-bag/ "XBMC April Grab Bag"), we have now moved into a monthly development cycle, in which we merge new features at the beginning of the month and then perform bug fixes through the rest of the month. This means, at the end of every month, developers, bug-reporters, and those willing to deal with potentially highly unstable builds can try a snapshot from the current development cycle, and the organization, in turn, will have a more stable and predictable development process. For those of you who would prefer a stable version of XBMC, we will always recommend the most recent stable release (XBMC 11.0), but for the brave, you are welcome to try the end of the month build. To give an idea of just how unstable/alpha these builds can be, there will almost certainly be months in which some platforms won’t actually have usable builds. As always, we recommend you backup your userdata folder before upgrading.

With that said, let’s review some of the more notable changes in the [July Changelog](https://github.com/xbmc/xbmc/issues?milestone=4&state=closed "XBMC July Changelog").

## Embedded Fixes

As is to be expected, now that AudioEngine has been rolled into XBMC proper, other developers are beginning to wrap their heads around how AE affects various components of the XBMC experience and are providing fixes to streamline the process. One of the first major fixes is Dirty Audio, which works quite a lot like Dirty Video. In the past, AE was “always on,” which resulted in the loss of many CPU cycles on embedded devices like the Apple TV and Android. Now, AE is a little smarter and stops doing its conversion work when no sound is output.

Additionally, up to now, XBMC has been running a huge number of SQL queries at startup. These queries haven’t been a big problem for powerful x86 processors, because the queries have not be overly intensive on CPU cycles. The same is not necessarily true on embedded systems. After an extensive round of [SQL query optimization](https://github.com/xbmc/xbmc/pull/1085 "Database Optimizations"), the amount of queries at startup have been cut by 70%, which could have a powerful effect on iOS and Android boot times.

## Google Summer of… Database Improvement – Tags

The work being done by devs JMarshall and Montellese as sponsored by GSoC has resulted in a stream of new updates and features this month. In particular, because scraped moviesets are intentionally limited to one per movie for clarity by TheMovieDb, movies (and potentially other media in the future) can now be tagged with additional info by the user with Tags. Think of Tags as personal moviesets that the user can create in the XBMC interface. At the moment, tags are limited to movies, but can be extended to tv shows and music videos in the future. Below is a quick video of how Tags work.

## Audio Database Improvements

Newest team member night199uk has provided fixes to the music library that make it smarter at handling multiple artists and albums with the additional benefit of allowing XBMC to better scrape the [MusicBrainz](http://musicbrainz.org/ "MusicBrainz - the open music encyclopedia") encyclopedia.

## CEC updates

New fixes for the CEC Adapter have been introduced to the code that introduce wake over CEC and numerous other fixes and features. For a list of the changes, [see here](https://github.com/xbmc/xbmc/pull/887 "libCEC 1.7 update").

## Conclusion

As always, this is merely a sample of the many changes this cycle. For a full list of all the July changes, feel free to take a look at our list of [July milestones](https://github.com/xbmc/xbmc/issues?milestone=4&state=closed "July Changelog"). Also, keep an eye out for the August Cycle. Or, if you are feeling a bit brave and a bit lucky, just start downloading.

- [Windows and OSX](http://mirrors.xbmc.org/snapshots/ "XBMC snapshots for Windows and OSX") (64bit OSX will be available in the morning US time)
- [Apple TV](https://kodi.wiki/view/HOW-TO:Install_XBMC_on_Apple_TV_2 "Apple TV instuctions") and [iOS](https://kodi.wiki/view/HOW-TO:Install_XBMC_on_iPad/iPhone/iPod_touch "iOS installation instructions") installation instructions (also available in the morning US time).
- Given the additional complexities of distribution, builds for Linux are not yet available at XBMC.org.
