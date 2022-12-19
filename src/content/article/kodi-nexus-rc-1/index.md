---
title: Kodi Nexus RC 1
date: 2022-12-15T10:21:05.423Z
author: Team Kodi
tags:
  - Developer
  - Prerelease
featured_image:
  src: /images/blog/nexus-rc-splash.jpg
  title: Kodi 20.x "Nexus" RC Splash Screen
  alt: A blue Kodi logo sits in a circle, atop white text - "Kodi". Clock
    artefacts surround it all - a background of computer noise. At the bottom, a
    solitary purple section of the circle, "Kodi Nexus Release Candidate".
---
Here we go folks, ramping things up and we have the first Release Candidate (RC) for Kodi "Nexus".

As always, thanks go out to all contributors for their work. We are nearing 4,000 commits since v19 "Matrix" was first released on February 19th 2021. For everyone that has contributed, both those in Team Kodi and all other devs that choose to roll up their sleeves and fix an issue. Everyone appreciates you for making Kodi better.

We also want to thank all those users who provide endless support on the forums, we appreciate you, and all the support anyone provides to our users.

### **Addon Devs**

We'll put this at the top of this post, as there was an **API break** after Beta 1 was released. The details can be seen [on the forums](https://forum.kodi.tv/showthread.php?tid=370707) (and of course discussed if any assistance is required).

Essentially, if you use either the Python `InfoTagVideo` or `VideoStreamDetail` APIs, some functions had their variable names changed to bring consistency to the new set of APIs introduced earlier in Nexus.

We strongly advise users to always update to the latest test releases if you are on the bleeding edge, however if you are on older releases (e.g. Alphas or Beta 1), you may want to block updates on your addons as dev's update their addons to target RC and the final V20 release.

### **Release notes**

**Addons**

* A **BREAKING** API change was introduced for the `VideoStreamDetail` and `InfoTagVideo` Python APIs. This affects set APIs that were introduced in the v20 development cycle. We would not normally do such a change when we enter Beta phase, but we believe fixing this now would cause fewer issues for all the addon devs out there for v21 (supporting 2 different APIs for v20/v21). Details around what is affected can be seen [in the PR](https://github.com/xbmc/xbmc/pull/22192).
  In addition, further details can be seen and discussed [on the forums](https://forum.kodi.tv/showthread.php?tid=370707).
* A number of bundled addons have been updated. This should reduce the number of addons that immediately do updates on installation of RC1.

**Scrapers**

* Due to the above breaking API change, the TVDB TV Show scraper was updated to prevent breaking. The result is that the updated scraper will be broken on any Kodi v20 release prior to this RC1 release. If you are using an older v20 install, then you need to update for continued functioning of the TMDB TV Show scraper.
* In addition, we took this opportunity to fix a long outstanding issue with the Python TV Show scrapers described [here](https://github.com/xbmc/xbmc/issues/17341). The result is that if you are adding new episodes to existing TV shows in your library, you need to refresh the show to download the new episode guide. If you are using NFO files, the episode guide in those files needs updating also.
* TMDB TV Shows and TV Maze scrapers have been updated, with TVDB v4 to be updated in the near future.
  More details can be found [here](https://forum.kodi.tv/showthread.php?tid=370489).

**Games**

* **@lrusak** fixed a crash that was introduced into Beta1. Some Linux users were finding Kodi was crashing on startup ([link](https://github.com/xbmc/xbmc/pull/22185)).
* **@lrusak** again fixed a black screen issue with standalone games ([link](https://github.com/xbmc/xbmc/pull/22195)).

**General**

* Add support for action "play" to many more items such as widgets/favourites on the homescreen ([link](https://github.com/xbmc/xbmc/pull/22129)).
* Fix a regression with duplicate/incorrect context menu entries ([link](https://github.com/xbmc/xbmc/pull/22179)).
* **@ksooo** fixed another regression for addons that caused the "continue watching" context menu not to show the resume time ([link](https://github.com/xbmc/xbmc/pull/22166)).
* **@repojohnray** has been providing a number of fixes/cleanups lately that are targeting memory leaks. Subtitles and a number of Linux specific areas have had improvements made to them.
* A new contributer **@larrignon** has fixed a logging message that occurred when an empty directory was searched by scrapers ([link](https://github.com/xbmc/xbmc/pull/22173)).

**Music**

* Fix crash when queuing multichannel audio files. This fixes a regression introduced in Beta 1 ([link](https://github.com/xbmc/xbmc/pull/22130)).
* Fix default fallback image to be more relevant to a music item (CD Case instead of a Folder) ([link](https://github.com/xbmc/xbmc/pull/22133)).

**Platform Specific**

* **Android**

  * **@joseluismarti** has contributed a number of cleanups/fixes for Android.
  * **@a1rwulf** bumped our SDK target to 31. Along with a number of fixes **@joseluismarti** contributed over the past few months, this has allowed us to finally do a release to the Google Play Store. RC1 has been released to the Testing channel, and we'll ramp up deployment over the next week or so to more users in the Testing channel
* **macOS**

  * **@enen92** has made a number of fixes to what is know as the macOS native windowing implementation. This won't affect too many people right now, as the default release uses SDL windowing, however anyone building the native macOS ARM version (or using the test builds) should see a number of improvements around windowing.
  * Add speech to text service implementation (usable from keyboard dialog)
* **Windows and Xbox**

  * Kodi RC 1 has been submitted to the Microsoft Store as an update. Users should start receiving this shortly. Be aware that you may have to uninstall and reinstall your Xbox version, because the OS is not updating cleanly.

**Skinning**

* Fix a crash if an include has an empty condition. This was reported by **@jurialmunkey** and was an effect when a PARAM was used in the include condition that may have been empty ([link](https://github.com/xbmc/xbmc/pull/22146)).
* Fix a crash that could occur in the event of a textbox that was too small for a font used, and therefore the text would not fit ([link](https://github.com/xbmc/xbmc/pull/22151)).

  **Estuary Specifics**

  * Music: Extend context menu functionality, add ability to play albums directly from home screen
  * Video: Extend context menu functionality
  * PVR: New home screen widget for saved searches
  * PVR: Reworked home screen widget for timers
  * PVR: Some smaller visual changes to the OSD and the home screen widgets
  * Add possibility to use the play button (on remote, keyboard, ...) to start playback of many different items shown on the home screen (e.g. songs, movies, episodes, Live-TV channels, recordings, albums, TV shows, single seasons, movie sets - just try it out...)

**Subtitles**

* Fix a regex for Sami subtitles ([link](https://github.com/xbmc/xbmc/pull/22123)).

**Teletext**

* **@enen92** has made a few fixes for teletext usage. A crash and a usability issue were resolved ([link](https://github.com/xbmc/xbmc/pull/22161)).
* Another crash was resolved ([link](https://github.com/xbmc/xbmc/pull/22155)).
* Flashing teletext was blinking at an extremely fast pace. This fixes an regression introduced by a large core change regarding time related functions ([link](https://github.com/xbmc/xbmc/pull/22164)).

**UPNP**

* Fix some crashes occurring on startup if UPnP items were on homescreen widgets. Check the PR for gritty details ([link](https://github.com/xbmc/xbmc/pull/22154)).

**Video**

* A new feature has been introduced to allow the possibility of 'continue watching' (aka resume) for certain video folders from the context menu of several folder locations (eg Movie Sets, TV Shows including seasons, and more). The best way to see more info about this is to see [the PR](https://github.com/xbmc/xbmc/pull/22107).

**PVR**

* Multi-instance support for PVR client-addons (first implemented by `pvr.hts`, more to come)
* Persistent EPG searches
* Automatic cleanup of texture database and removal of related stale image files
* Add possibility to refresh channel logos in the Channel manager
* Selection of items to delete when resetting the PVR database
* Various performance optimisations, larger code refactoring

**Favourites**

* New favourites window, providing different views and other enhancements

Thank you once again to everyone who has contributed to this release.

This is the our first Release Candidate for Nexus, and we are quite confident in its stability - however, always backup your configs before testing, and please let us know of any regressions or issues you find.

If you want to take the plunge, you can get RC 1 from [here](https://kodi.tv/download). Select your platform of choice, and look in the "Prerelease" section. 

As usual - well, it is open source - you can see what's changed between v20 RC 1 and Beta 1 [here](https://github.com/xbmc/xbmc/compare/20.0b1-Nexus...20.0rc1-Nexus).
For further information on changes for the entire Nexus release so far, we have highlighted most of the major features/changes in the previous Alpha/Beta blogs, go to our website to catch up on them [here](https://kodi.tv/blog)