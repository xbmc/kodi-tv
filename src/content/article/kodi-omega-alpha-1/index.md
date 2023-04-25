---
title: Kodi "Omega" Alpha 1
date: 2023-04-17T10:26:21.120Z
author: Team Kodi
tags:
  - Prerelease
  - Developer
featured_image:
  src: /images/blog/blank-notepad-pexels-pixabay.webp
  title: Blank notepad because we don't have a logo yet...
  alt: A hand holds up a blank notepad for all the world to see, mostly because we
    haven't got a logo for this release yet...
---
*This release is so fresh that we don't yet even have an image... oops!*

It's been a hectic last couple of months in the world of Kodi, but the wheels keep on turning. Without any further ado, we are happy to announce the first Alpha release for Kodi 21.x "Omega".

This is a major release, so, as you'd expect, it comes with many new features. However, with a core change to FFmpeg 6.0, there is a very good chance that some regressions may occur. As such, please be aware that installing this will most likely break things, and we'd really like your help at that point to identify the problems and get them fixed. Please raise Github issues with full debug logs to help us resolve any regressions you wonderful testers come across.

So, all that aside... what's actually changed?

**Build/Dependencies**

* Build support for GCC13 has been fixed by some users. This allows Kodi to be built on newer toolchains that refactored some header inclusions.
* Some general version bumps have been made for an assortment of dependencies for Android/Apple/CI platforms. Thanks **@craigcarnell**, **@fuzzard**.
* **@lrusak** has endeavoured to improve the way some of the Android/Apple/CI dependency systems work and handle different states.
* **@Rechi** has fixed a few *cmake* deprecations and *pkgconfig* detection issues.

**Documentation**

* Some new contributors noted some of our contributing guideline documentation was lacking. A few people have helped contribute to hopefully make them more helpful/informative.
* **@fixthething** has updated some of the Ubuntu build documentation to reflect some modern package names used in more recent Ubuntu versions.

**FFmpeg**

* Use upstream FFmpeg. This is a big achievement and allows easier FFmpeg updates in the future.
* Update to version 6.0. This puts us inline with the latest FFmpeg release. Compatibility with 5.1.x has been retained for Linux distro support.

**Filesystem**

* With the introduction of NFSv4 support, a number of issues were quickly discovered by users. **@thexai** has fixed a many of these, such as timeouts/chunk size defaults for NFSv4. 

**General**

* **@repojonray** has provided a number of general fixes/improvements to various areas to address e.g. memory leaks and performance improvements.
* Modernisation of several areas of Kodi have been undertaken by a number of developers. A lot of this work will go unseen by users, however it's helping to make Kodi's huge amount of code more maintainable for the future. **@lrusak**, **@neo1973** , **@repojohnray**, **@enen92**, **@Rechi** .
* Add setting to disable screensaver while playing audio.
* **@DeltaMikeCharlie** has contributed some improvements to the UX regarding date format options.

**Games**

* Improvements are continually being made to the Retroplayer ecoystem by several devs/users. Thanks to **@KOPRajs**, **@garbear** .

**JSON-RPC**

* *genre* has been added to the `Video.Fields.Episodes` field.

**Music**

* Add support for reading (and writing) M3U8 playlist files. This provides support for non-ASCII characters in the playlist files (UTF-8 character support).

**Platform Specifics**

* **Android**:

  * Improved Dolby Vision detection and compatibility: implemented support of DV in MKV containers, better handling of different DV profiles with fallback to HDR10 when is possible and display is not DV capable. For some devices, we can now also support hardware tone mapping DV profiles 4, 5 to SDR. Supported profiles vary on different Android devices: for example, the 2019 Shield supports profiles 4, 5, 7, 8 in DV and fallback to HDR10 (profiles 7, 8) but not HW tone mapping to SDR. Similarly, the Fire TV Stick doesn't supports profile 7 although it does support HW tone mapping of profile 5 to SDR (profiles 4, 5, 8 are supported with DV display).
  * Implemented minimise shutdown function in Power Saving settings.
  * Multiple small internal improvements and use of newer Android APIs to replace deprecated ones.
  * **@joseluismarti** is slowly improving/updating a number of Android-specific features that enable the project to stay up to date with Google Play Store submission requirements.
* **iOS/TVOS**:

  * Support for Channel Up/Down keys when using the iPhone Apple TV Remote app connected to an Apple TV has been added
* **Linux**:

  * Pipewire:

    * Fix implementation to work properly with AudioEngine.
    * Add support for passthrough formats. This includes HD audio formats like DTS-HD and TrueHD.
  * GBM:

    * Add support for [libdisplay-info](https://gitlab.freedesktop.org/emersion/libdisplay-info) to help parse EDID information and determine display capabilities.
* **macOS**:

  * **@enen92** has been slowly but surely improving lots of the macOS native windowing implementation (mouse, resizing, menu bar, shortcut key handling, etc.) that was introduced in Nexus. The official macOS builds do not use this functionality at this point, but with enen92's work, we are inching closer to using it as our default for v21.
  * macOS CD/DVD drive handling has been fixed. This also allows M1-based machines to read disks correctly.
* **Windows**:

  * Minimum Windows supported version has been raised to Windows 8.1.
  * If they're available, we will now use displays' friendly names in settings (e.g. `"LG TV #1"`).
  * Added a setting to use the Windows "HDR/SDR brightness balance" setting for GUI and subtitles when the display is in HDR PQ mode, and also improved the curve of internal method "GUI SDR max peak luminance".
  * Improved read performance over SMB in some special cases, e.g. playing full Blu-ray folders.
  * Improved graphics compatibility and fallback to enable running in some limited VM hardware (Hyper-V) even without video decoding support.
  * Various improvements in DXVA render method to avoid incompatibilities in old hardware or Windows 8, especially in the case of sources with BT.2020 colour space.
  * Implemented support for DXVA2 AV1 hardware video decoding 8-bit and 10-bit.
  * Specific SDK requirements for building UWP packages have been removed to allow the use of newer SDK's from Visual Studio.

**Picture**

* Fix security issues discovered regarding image EXIF metadata. Further fixes were also backported from the upstream EXIF data parsing library that is in use in Kodi.

**PVR**

* Add possibility to sort channel groups to your liking.

**Settings**

* Some fixes to regressions in Settings visibility have been made.

**Subtitles:**

* The display of MKV files containing text subtitle entries without the duration set on the Matroska block were fixed, retaining Kodi v19 behaviour. This includes the teletext autoconversion to srt done in PVR backends (e.g. tvheadend).
* Fixed setting of subtitle offset when auto-close video OSD is set.
* **@CastagnaIT** has continued to support/fix issues with the new subtitle system as they are reported.

**UPnP:**

* Improved compatibility with official smart TV applications when displaying and browsing served UPnP Kodi libraries.
* Fix artwork when playing/refreshing UPnP items.

As this blog is, let's say, *slightly delayed* from when the actual Alpha 1 downloads were available, there are already a number of fixes that have been made to issues found in this release. If you come across any issues, it may be worthwhile testing a newer nightly of your desired platform, otherwise, please do log any issues so we can continue improving for Omega v21.

If you love to live on the bleeding edge of new, you can get Alpha 1 from [here](https://kodi.tv/download). Select your platform of choice, and look in the "Prerelease" section. Again, though, please: expect some breakage, don't use this as your daily installation unless you know how to get things working again, and please share your experiences back with us so we can really get going on those bugs.

As usual - well, it is open source - you can see what's changed between v21 and v20 [here](https://github.com/xbmc/xbmc/compare/Nexus...xbmc:21.0a1-Omega). Even though its only been 3 months, it's a long list...