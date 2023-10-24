---
title: Kodi 21.0 "Omega" Beta 1
date: 2023-10-24T10:39:36.343Z
author: Team Kodi
tags:
  - Developer
  - Prerelease
featured_image:
  src: /images/blog/kodi_splash_v21.0_omega_beta_1080p.webp
  title: Kodi 21 "Omega" Splash Screen
  alt: Kodi 21 "Omega" Splash Screen - the Kodi logo sits at the centre of a black
    screen, a stylised Greek letter "Omega" around it.'
---
Things are beginning to heat up for Kodi 21 "Omega" with the first Beta release!

This is a major release, so, as you'd expect, it comes with many new features. However, with a core change to FFmpeg 6.0, there is a very good chance that some regressions may occur.  As such, please be aware that installing this will most likely break things, and we'd really like your help at that point to identify the problems and get them fixed. Please raise [Github issues](https://github.com/xbmc/xbmc/issues) with full debug logs to help us resolve any issues you wonderful testers come across.

First, we would like to make a few targeted announcements.

**Android users**

Many users may still be on the Kodi testing track for their Android devices. It's far easier to leave the testing track from a 'phone-based device, but be aware that if your device is on the testing track, we will be starting to deploy the Beta 1 release over the next week or so. If you wish to opt out of the testing group, one way you can is by visiting the following link [Google Play - Kodi testing track](https://play.google.com/apps/testing/org.xbmc.kodi). From there, you can opt out for your Google Play account. This is the best (and possibly only) way to opt out on many Android TV devices (e.g. Nvidia Shields).

With that said, for those adventurous types who would like to help us with testing, you can use the same link to opt in for a Google Play account.

**Skin Developers**

An API bump will be made with the next release of Kodi 21's testing cycle. See the following PR's for details

https://github.com/xbmc/xbmc/pull/23926

https://github.com/xbmc/xbmc/pull/23927

https://github.com/xbmc/xbmc/pull/23862

This will require changes and submissions to the Omega branch for skins for those who submit to the Kodi Repository. Reach out on the forums if you have any questions/concerns.

And now, for the list of changes for Beta 1.

**Build/Dependencies**

* A number of changes to the `cmake` build system have been made. These will be mostly invisible to users, but the intention is to modernise our `cmake` usage to prepare us for the future more easily.
* The `cmake` build system, when targeting Multi Config Generators (VS/Xcode), will now create a full complete build directory to allow a Kodi executable to be run immediately without the direct use of an IDE like VS. This is also the start to allow us to build dependencies for Windows for shared libraries, and be able to package them correctly.
* A number of fixes to allow building with GCC13 have been made. This mostly involved the transitive inclusion of headers in system headers being removed/changed. The fixes have been to explicitly include those headers in our code.

**Estuary, Estouchy**

* Retire Favourites dialog, use Favourites window instead (https://github.com/xbmc/xbmc/pull/23861).

**Favourites**

* Add selected items of the target to favourite's context menu (https://github.com/xbmc/xbmc/pull/23895).
* Fix crash on moving items in favourites widget and favourites window (https://github.com/xbmc/xbmc/pull/23946).

**General**

* A bug was recently introduced that led to external subtitle entries becoming unavailable on streamdetails. This was fixed in https://github.com/xbmc/xbmc/pull/23835.
* A fix to allow `.strm` files to properly use resume points was made by **@Acidzero2020**.
* An improvement to the Event Log "toast" notifications has been made by **@DaVukovic** to provide more meaningful information when an item fails to scrape TV Shows.

**Input**

* A fix to allow Python addons to correctly handle custom controller button inputs was made by **@icr8ions**. This allows addons like the Keymap Editor to correctly recognise and handle actions from custom controllers (https://github.com/xbmc/xbmc/pull/23789).

**Music**

* A PR that extends the Python 'generic artist' scraper to fetch the associated YouTube video links for an artist from theaudiodb, and then match them up to songs already scanned into the user's music library. This allows skins to then display links to the corresponding song video. More information can be see in the PR from **@the-black-eagle**  (https://github.com/xbmc/xbmc/pull/22654).

**Player**

* Updated some internal constants to handle better very high bit rate streams (maximums of UHD Blu-Ray at least - 144 Mbit/s) (https://github.com/xbmc/xbmc/pull/23883).

**Platform Specifics**

* **Android**:

  * A fix to actually package themes for skins like Estuary/Estouchy was made. This was found by accident, and dates way back to the implementation of our Android platform (https://github.com/xbmc/xbmc/pull/23782).
  * **@joseluismarti** continues his improvement of our Android code. This time he has updated some code to use Android-provided values rather than a manually-curated list of values. (https://github.com/xbmc/xbmc/pull/23769).
  * A workaround for an Amlogic BSP audio bug that affects many platforms, even modern Google devices (more information [here](https://forum.kodi.tv/showthread.php?tid=371883&pid=3169260#pid3169260), fixed in https://github.com/xbmc/xbmc/commit/be049ba900df39b9f2cef820a19088f8aa1ba7d2).
* **FreeBSD**

  * We don't have too many improvements to our FreeBSD port, however **@lrusak** has brought FreeBSD in line with Linux with its usage of the command line argument `--audio-backend` (https://github.com/xbmc/xbmc/pull/23886).
* **Linux**:

  * A fix for a crash with Pipewire was contributed by **@dobo90.**
  * **@lrusak** has implemented a command line switch (`--gl-interface=<interface>`) to replace the old environment variable usage of `KODI_GL_INTERFACE` (https://github.com/xbmc/xbmc/pull/23907).
  * Kodi's usage of the system ping utility has been replaced with an internal implementation (https://github.com/xbmc/xbmc/pull/23870).
  * DRMPrime has had a check based on pitch value removed as it was causing failures with some formats, like single plane and/or compressed ones, where the pitch can be 0 and therefore it has no meaning. Thanks **@jernejsk** (https://github.com/xbmc/xbmc/pull/23889).
* **macOS**:

  * SDL windowing while not enabled by default since Alpha1 (in favour of native windowing) was still a possible build compile switch. It has finally been removed in Beta 1 (https://github.com/xbmc/xbmc/pull/22990).
  * Kodi now relies on an external library, `smctemp`, to display the CPU and GPU sensor values - this being valid for either x86 or Apple Silicon (https://github.com/xbmc/xbmc/pull/23770).
  * Network info subsystem was improved avoiding the execution of external commands to obtain the current gateway and DNS server list (https://github.com/xbmc/xbmc/pull/23724).
  * Improvements to input, e.g. the enter keyboard key was not being recognised (only key return)  (https://github.com/xbmc/xbmc/pull/23860).
* **webOS**

  * **@quietvoid** has contributed a fix to allow webOS to play back AV1 DolbyVision files on supported devices (https://github.com/xbmc/xbmc/pull/23771).
  * Support to allow webOS to to suspend to background rather than exit was made by **@sundermann** (https://github.com/xbmc/xbmc/pull/23684).
  * With the support to suspend/minimise for webOS, behaviour to pause/resume media playback when Kodi is minimised/restored has been implemented by **@sundermann**.
  * Initial support for webOS 4 devices has been implemented by **@mariotaku.**
* **Windows**:

  * Fixed Windows 11 refresh rate switching (https://github.com/xbmc/xbmc/pull/23766).
  * Improved the vsync detection used by "Sync playback to display" mode (https://github.com/xbmc/xbmc/pull/23893). Breaks compatibility with Windows 7 (which is not supported in v21).

**PVR**

* Fix 'switch to previous channel' not working if it is in another group than the currently playing channel (https://github.com/xbmc/xbmc/pull/23932).
* Fix Live TV - Randomly spinner stays forever although channel is playing fine (https://github.com/xbmc/xbmc/pull/23844).

**Skinning**

* **@DeltaMikeCharlie** has provided a way for skinners to use a `ParentalRatingCode` info label (https://github.com/xbmc/xbmc/pull/23586).
* Infolabels for video width and height have been added by **@graham8** (https://github.com/xbmc/xbmc/pull/23850).

**Videos**

* Respect default select action setting at more places - Home screen widgets, PVR recordings window, Favourites window (https://github.com/xbmc/xbmc/pull/23848 , https://github.com/xbmc/xbmc/pull/23857).
* Add default play action setting to control resume behaviour when starting playback of videos (xhttps://github.com/xbmc/xbmc/pull/23863).
* Fix play/resume of BD and DVD disc images not working from Home screen widgets (https://github.com/xbmc/xbmc/pull/23905).
* Automatic video rotation from metadata was fixed (https://github.com/xbmc/xbmc/pull/23832).
* Teletext language codes sometimes were not persisted correctly in the teletext browser (https://github.com/xbmc/xbmc/pull/23890).
* Improvements to the teletext browser window (https://github.com/xbmc/xbmc/pull/23896).
* EDL files are now valid even if they are not on the same subnet of the Kodi host - valid across all private subnet ranges (https://github.com/xbmc/xbmc/pull/23836).
* **@joseluismarti** also contributed outside of his usual Android improvements with a fix for a crash when scan to library on a directory contained new movies (https://github.com/xbmc/xbmc/pull/23767).

**Known Issues**

You can see open issues on our tracker at https://github.com/xbmc/xbmc/issues. However, to call out a couple of specifics, please be aware of the following if you're planning on upgrading:

* There are seek issues with multi-part MP4 files on Android (https://github.com/xbmc/xbmc/issues/23673).
* There is an upstream FFmpeg issue that means that OGG music playback does not work. This will be rectified upstream to Kodi. (https://github.com/xbmc/xbmc/issues/23198).
* We've had reports that the new splash screen looks like an OpenGL corruption; we know, it's not a problem, so don't panic. We'd be happy to have your artwork contributions if you'd like to work on an alternative. 

If you love to live on the bleeding edge of new, you can get Beta 1 from [here](https://kodi.tv/download). Select your platform of choice, and look in the "Prerelease" section. Again, though, please: expect some breakage, don't use this as your daily installation unless you know how to get things working again, and please share your experiences back with us so we can really get going on those bugs.

As usual - well, it is open source - you can see what's changed between v21 and v20 [here](https://github.com/xbmc/xbmc/compare/Nexus...xbmc:21.0b1-Omega).
For a more targeted look at the changes made since v21 Alpha 3, you can see those changes [here](https://github.com/xbmc/xbmc/compare/21.0a3-Omega...21.0b1-Omega).