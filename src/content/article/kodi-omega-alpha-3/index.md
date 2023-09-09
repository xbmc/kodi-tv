---
title: Kodi "Omega" Alpha 3
date: 2023-09-09T10:36:03.973Z
author: Team Kodi
tags:
  - Developer
  - Prerelease
featured_image:
  src: /images/blog/kodi_21_omega_alpha_splash.webp
  title: Kodi 21 "Omega" Splash Screen
  alt: Kodi 21 "Omega" Splash Screen - the Kodi logo sits at the centre of a black
    screen, a stylised Greek letter "Omega" around it.
---
Time for the next milestone release for Kodi 21 "Omega". Slightly delayed this time around compared to what we were striving for, however we are happy to announce Alpha 3.

This is a major release, so, as you'd expect, it comes with many new features. However, with a core change to FFmpeg 6.0, there is a very good chance that some regressions may occur.  As such, please be aware that installing this will most likely break things, and we'd really like your help at that point to identify the problems and get them fixed. Please raise [Github issues](https://github.com/xbmc/xbmc/issues) with full debug logs to help us resolve any issues you wonderful testers come across.

A further 176 Pull Requests have been merged since Alpha 2 - fixing issues, adding features, and improving Kodi.

So... what's actually changed?

**Estuary**

* A change to Estuary to indicate "*more...*" to size-limited lists has been made by **@ksooo**. The effect of this can be seen in homescreen widgets that have more than 15 items.
* A number of changes to support video information for Movie Sets and TV Seasons has been made.

**FFmpeg**

* **@popcornmix** has made several fixes to our FFmpeg library usage. This has gone through several iterations now, and affected seeking and playback to various degrees. Hopefully, the last of these regressions has been squashed now, but please do let us know if you experience any further regressions around playback using FFmpeg.

**Filesystem**

* **@thexai** has submitted a change that affects local media. The chunk size of data requests for local media has been increased to 64kb to improve the throughput of the data.

**Games**

* **@garbear** continues to improve the gaming interface of Kodi. Changes around player management/assignment have been made in https://github.com/xbmc/xbmc/pull/23548. Have a read of that PR for more details/info.

**General**

* **@ksooo** has continued his whack-a-mole approach with issues regarding menu usage across the Kodi codebase.  A fix for no information dialog for music videos, "Local art" missing for the art selection dialog, further art dialog selection issues amongst some of the latest fixes.
* TV Shows/Seasons/Movie sets/Recording folders now expose their 'in progress' state via `LISTITEM_IS_RESUMABLE`.
* The content of the refresh progress dialog has been improved a bit to be more informative for the user - for example, to display the current season and episode being refreshed.
* **@repojohnray** has had a (lingering) PR merged that fixes a memory leak in context menus.
* Some improvements and optimisations have been made by **@neo1973** . This affects several areas (database and curl usage), and every performance fix is greatly appreciated.
* **@rmrector** has been digging into the image usage of Kodi (caching, allow remote viewing of images without having been displayed in Kodi, preloading of images and general streamlining of the API), and has made several improvements leading to more hotly-anticipated changes to come in the future.

**Platform Specifics**

* **Android**:

  * **@quietvoid** has had a PR merged that enables the ability to convert some Dolby Vision media types to more common types to allow playback. A forum thread has been around for testing that can explain the benefits a little better than this blog editor, so head there for some info and any feedback/support around the feature: https://forum.kodi.tv/showthread.php?tid=371557.
  * **@fritsch** has once again delved into our Audio Engine to fix a regression for Amazon FireTV 4K users. https://github.com/xbmc/xbmc/pull/23687.
  * **@joseluismarti** has once again updated some Android dependencies and fixed/modernised areas of our Android API usage.
* **Linux**:

  * Support for `cpu_thermal hwmon` has been added. This enables devices like the Raspberry Pi to report CPU temperatures without the use of external scripts (as have been common in projects like LibreElec).
  * **@smp79** has submitted a fix for VAAPI VP9 Profile 2 playback.
* **macOS**:

  * **@kambala-decapitator** has fixed a crash in the SDL versions of Kodi when pressing the Caps-Lock key. This did not affect the "native windowing" version of Kodi we have migrated to for v21 nightlies, however if you are building for x86_64 intel Macs then this should make using that key less troublesome. 
  * **@enen92** continues his work on improving Kodi for macOS. Network System info has been tackled to improve its speed, and more accurately represent network information like DNS servers used.
  * macOS temperature information is currently not supported on Apple Silicon devices due to our usage of a library that does not support them. **@enen92** has made a change to report N/A instead of 0.0 for CPU/GPU temperatures.
  * Media keys are now supported on macOS.
  * Some improvements for moving the Kodi app window from hi-DPI screens with differing refresh rates.
  * macOS releases are now defaulting to the "native windowing" system.
* **webOS**

  * **@sundermann** has continued further improvements to the webOS port, most notably around passthrough and video decoding.
* **Windows**:

  * A PR intended to fix an issue around the Windows platform regularly losing track of the audio output device has been merged by **@thexai**. This hopefully makes Windows audio outputs more robust to situations where driver updates may change naming.
  * **@CrystalP** has been contributing a number of fixes/improvements particularly aimed at Windows. A fix for refresh rate switching for Intel and Nvidia graphics cards that was accidentally broken by a fix aimed at AMD cards.
  * More improvements to the recently add Video Super Resolution implementation have been made.

**PVR**

* A first time contributor **@ivanllc** has had a PR merged to add a "2 minute" option to the padding timer for PVR recordings.
* **@ksooo** continues to improve the Kodi PVR system. A number of changes were made, including fixes and tidy ups from static analysis tools (`cppcheck`/`clang-tidy`).
* Fixed a long-standing bug with subtitle selection not being preserved upon channel playback restart.

**Python**

* Changes made to support building Kodi when using Python 3.12. 
* Python invoker now passes `sys.argv` arguments in a logical order to Python addons thanks to **@scott967**.

**Skinning**

* a change by **@smfontes** to allow loading of font sets defined in a skins /Fonts folder. https://github.com/xbmc/xbmc/pull/22993.

**Subtitles**

* Support for *.ttc* font collections has been added.

**Video**

* TV show groups (seasons, movie sets, PVR recording folders) with at least one started element (episodes, movies, recordings) but no completely watched ones are now considered as 'in progress' and they, for example, now appear in the respective "In progress" GUI elements like widgets and video windows.
* Fixed *play counts* (watched state) and *last played date* of episodes and movies not being preserved on internet update.
* Default select action for videos fixed.

**VideoPlayer**

* **@alanswanson** has provided a change to use the FFmpeg software deinterlacer from *yadiff* to *bwdif.* This is said to have fairly significant performance improvements over the old interlacing method.

There are a lot more changes not mentioned, but we are grateful for all contributors that help make Kodi better.

If you love to live on the bleeding edge of new, you can get Alpha 3 from [here](https://kodi.tv/download). Select your platform of choice, and look in the "Prerelease" section. Again, though, please: expect some breakage, don't use this as your daily installation unless you know how to get things working again, and please share your experiences back with us so we can really get going on those bugs.

As usual - we are an open source project - you can see what's changed between v21 and v20 [here](https://github.com/xbmc/xbmc/compare/Nexus...xbmc:21.0a3-Omega).
For a more targeted look at the changes made since v21 Alpha 2, you can see those changes [here](https://github.com/xbmc/xbmc/compare/21.0a2-Omega...21.0a3-Omega).