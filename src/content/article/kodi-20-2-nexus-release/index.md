---
title: Kodi 20.2 "Nexus" - Release
date: 2023-07-02T09:59:41.428Z
author: Team Kodi
tags:
  - Release
featured_image:
  src: /images/blog/kodi-20.2-nexus-splash.webp
  alt: Kodi 20.2 "Nexus" Splash Screen - a blue Kodi logo sits in the centre of a
    black page, around it, a dial - a gauge or chronograph, perhaps.
  title: Kodi 20.2 "Nexus" Splash Screen
---
As is always inevitable in software, we are back with a new release of Kodi "Nexus".

An assortment of bug fixes, some backports, no real new features. Full changelog since 20.1 on [Github](https://github.com/xbmc/xbmc/compare/20.1-Nexus...20.2-Nexus), as usual.

### **Release notes**

**Audio**

* An assortment of E-AC3 related fixes were backported.

**Estuary**

* A fix to the Music Viz screen has been made by @enen92 in an endeavour to chase that elusive target of perfection
* Fixes to the seekbar timer when seeking.

**Game/Retroplayer**

* A fix to a crash by memory exhaustion when some emulators are used.

**General**

* A whole assortment of fixes were made to fix building Kodi with GCC13.

**Platform Specific**

* Android

  * A fix for a crash that occurred when >100 jobs where scheduled for the Android TV recommendation channels.
  * For some old Android devices that had both MediaTek and Google decoders for some media, a preference to using the Google decoder was put in as the MediaTek decoders fail to play back audio in encrypted streams.
* Linux

  * A PR was reverted that fixes some Linux setups to use the more generic library (GL) rather than the specific GLX library.
* macOS/iOS

  * Fix speech recognition not working (https://github.com/xbmc/xbmc/pull/23341).
* Windows

  * Fixes to HDR playback when windows was already in HDR mode.
  * A backported fix for a potential deadlock for Xbox users when using pixel shaders and SW decoding.

**PVR**

* Fix crash on saved search (https://github.com/xbmc/xbmc/pull/23195).
* Fix last opened group not always restored on Kodi startup (https://github.com/xbmc/xbmc/pull/23165).

**Python**

* @garbear has backported a fix for setting Picture and Game info via infotags.
* GameInfo has been added to the Player class to allow get/set GameInfoTag data.
* A fix was backported that mainly affected Linux platforms: the path used when searching for modules was appending Kodi script paths at the end of the list, and therefore could potentially find system Python scripts/modules instead of Kodi-specific scripts/modules

**Video**

* Fix watched/unwatched status not taken into account for items not added to video library when creating playlists (https://github.com/xbmc/xbmc/pull/23398).
* Fix missing watched/unwatched status in Playlist window (https://github.com/xbmc/xbmc/pull/23013).

Thanks, as always, to everyone who has helped us track down and fix any issues. We endeavour to minimise the issues everyone experiences, but with such a large project, and the fact everyone contributing to Kodi is a volunteer, issues and bugs are a part of life. if you happen to experience any bugs/issues, don't hesitate to reach out on the forums, or raise an issue on Github.

As this is a point release, there are no major changes since the previous version, and you should be fine to install this straight over the top of any existing Kodi 20.x installation - indeed, this will happen automatically on many platforms. However, as for all software installations, back up your userdata beforehand if you've any doubts or have anything you can't afford to lose (and definitely do this if you're going for a major version upgrade).

A list of all changes for this version can be found at [GitHub](https://github.com/xbmc/xbmc/milestone/155?closed=1). If you want to read back on the full history of v20 itself, or of previous versions, you can find the corresponding articles in the relevant [blog posts](https://kodi.tv/blog/tag/release).

Application deployment on different platforms (notably the Microsoft Store) can vary considerably due to circumstances outside of our control, so just be patient, and the update will inevitably find its way through.

**Android Deployment**

We always do what's known as a "staged" deployment roll out for Android. So if you don't receive the update immediately, be patient, as it will come through over the next week.