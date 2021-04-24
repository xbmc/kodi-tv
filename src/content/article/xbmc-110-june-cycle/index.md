---
title: "XBMC 11.0 - June Cycle"
date: 2012-06-11T04:00:00Z
tags:
  - Prerelease
author: Nathan Betzen
---

As [mentioned previously](https://kodi.wiki/theuni/2012/04/25/update-grab-bag/ "XBMC April Grab Bag"), we have now moved into a monthly development cycle, in which we merge new features at the beginning of the month and then perform bug fixes through the rest of the month. This means, at the end of every month, developers, bug-reporters, and those willing to deal with potentially highly unstable builds can try a snapshot from the current development cycle, and the organization, in turn, will have a more stable and predictable development process. For those of you who would prefer a stable version of XBMC, we will always recommend the most recent stable release (XBMC 11.0), but for the brave, you are welcome to try the end of the month build. To give an idea of just how unstable/alpha these builds can be, there will almost certainly be months in which some platforms won’t actually have usable builds. As always, we recommend you backup your userdata folder before upgrading.

With that said, let’s review some of the more notable changes in the [June Changelog](https://github.com/xbmc/xbmc/issues?milestone=3&state=closed "XBMC June Changelog").

## Airplay Updates

Two major updates have occurred on the Airplay side. First, AirTunes have finally been implemented on the Windows side. This means you can send both music and video from your iOS and iTunes devices to XBMC for Windows.

Second, when sending AirPlay music to XBMC, XBMC can now read the metadata sent in the stream and display the music information (e.g. title, author, coverart, etc.) on the screen. Unfortunately, this is only possible when sending audio from iTunes. iOS devices use FairPlay encryption, which XBMC is not totally compatible with at this time.

## GSOC Updates

The efforts of our GSOC students are beginning to come to fruition. Montellese has been working over time to make the XBMC library faster and smarter. This month he has managed to push two fixes/updates to the library. First, movie sets now sort in a manner that better fit the rest of the library. In the past, movie sets were simply listed at the front of the movie library, like folders in front of files. Now, they are sorted based on the category. For example, the average rating of the movies inside the set would determine where the set would reside in a “sort by rating.”

A second new GSOC feature by Montellese should drastically speed up movie listings over JSON-RPC, which will greatly benefit mobile remote users and anyone else accessing the library from non-local devices. In the past, every call to XBMC’s movie library required spitting out every item in that library, even if the remote device was only looking for a few items. Now, a device can just pull those items it needs at any given point, for a massive time saving.

## Conclusion

That covers some of the more notable and easily visible changes in this cycle. For a full list of all the June changes, feel free to take a look at our list of [June milestones](https://github.com/xbmc/xbmc/issues?milestone=3&state=closed "June Changelog"). Also, keep an eye out for the July Cycle. Or, if you are feeling a bit brave and a bit lucky, just start downloading [here for Windows](http://mirrors.xbmc.org/snapshots/ "XBMC snapshots for Windows and OSX") (OSX should be available within 24 hours)! Look here for [Apple TV](https://kodi.wiki/view/HOW-TO:Install_XBMC_on_Apple_TV_2 "Apple TV instuctions") and [iOS](https://kodi.wiki/view/HOW-TO:Install_XBMC_on_iPad/iPhone/iPod_touch "iOS installation instructions") installation instructions.. Given the additional complexities of distribution, builds for Linux are not yet available at XBMC.org.

Also, as you no doubt may notice, there are fewer big features this month as more man hours are spent continuing to improve the features already recently added to XBMC (e.g. AudioEngine) and performing work to get XBMC ready on all platforms. As such, it is likely that we may begin intentionally winding down adding on additional new features in an attempt to get Frodo out sooner than later. When a roadmap has been established, we will, of course, update everyone.

## Update

[OSX is now available!](http://mirrors.xbmc.org/snapshots/osx/ "XBMC for OSX June Snapshot")

[…](/images/blog/zappy.webp "...")
