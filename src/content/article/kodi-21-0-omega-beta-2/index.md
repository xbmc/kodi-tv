---
title: Kodi 21.0 "Omega" Beta 2
date: 2023-12-20T11:04:29.952Z
author: Team Kodi
tags:
  - Developer
  - Prerelease
featured_image:
  src: /images/blog/kodi_splash_v21.0_omega_beta_1080p.webp
  title: Kodi 21 "Omega" Splash Screen
  alt: Kodi 21 "Omega" Splash Screen - the Kodi logo sits at the centre of a black
    screen, a stylised Greek letter "Omega" around it.
---
We are keeping things ticking over with Kodi 21 "Omega" with the second Beta release!

This is a major release, so, as you'd expect, it comes with many new features. However, with a core change to FFmpeg 6.0, there is a very good chance that some regressions may occur.  As such, please be aware that installing this will most likely break things, and we'd really like your help at that point to identify the problems and get them fixed. Please raise [Github issues](https://github.com/xbmc/xbmc/issues) with full debug logs to help us resolve any issues you wonderful testers come across.

First, we'd like to make a few targeted announcements.

**Android users**

Many users may still be on the Kodi testing track for their Android devices. It's far easier to leave the testing track from a 'phone-based device, but be aware that if your device is on the testing track, we will be continuing to deploy Beta 2 releases over the next week or so. If you wish to opt out of the testing group, one way you can is by visiting the following link [Google Play - Kodi testing track](https://play.google.com/apps/testing/org.xbmc.kodi). From here, you can opt out for your Google Play account. This is the best (and possibly only) way to opt out on many Android TV devices (e.g. Nvidia Shields).

With that said, for those adventurous types who would like to help us with testing, you can use the same link to opt in for a Google Play account.

**Skin Developers**

An API bump will be made with the next release of Kodi 21's testing cycle. See the following PRs for details:

https://github.com/xbmc/xbmc/pull/23926

https://github.com/xbmc/xbmc/pull/23862

This will require changes and submissions to the Omega branch for skins for those who submit to the Kodi Repository. Reach out on the forums if you have any questions/concerns.

Please note, https://github.com/xbmc/xbmc/pull/23927 has been merged shortly after Beta 2, and all skins will need to update the GUI version number to be available in Omega repos for any builds (including nightlies) after Beta 2.

The following forum thread has the skinning change info for Omega: https://forum.kodi.tv/showthread.php?tid=372280&pid=3174566#pid3174566

And now, for the list of changes for Beta 2.

**Build/Dependencies**

* A few dependencies have been bumped (`openssl`, `python`) as part of the normal update process.

**Estuary, Estouchy**

* **@jjd-uk** has made a fix for Shift view overlays (https://github.com/xbmc/xbmc/pull/24168).
* Media flags for music have been added to Estuary by **@jjd-uk** as well (https://github.com/xbmc/xbmc/pull/24162).

**General**

* A change was made by **@CastagnaIT** that narrows the scope of the optional track title providing language specific audio track data. Information regarding this advanced setting can be found on the wiki at https://kodi.wiki/view/Advancedsettings.xml#languagecodes.
* **@rschupp** has contributed to the removal of Kodi's use of the library `pcrecpp`. The use of this was changed to use C++ standard library capabilities.
* A fix has been made for when some XML files written by Kodi would add a trailing null character,  therefore making the XML invalid.
* Several users contributed to compiler warning fixes affecting multiple platforms. Thanks to **@CrystalP**, **@fuzzard**, **@thexai**.
* **@Rechi** has made further fixes to satisfy more static analysis based fixes/warnings.
* The FFmpeg library has been updated to 6.0.1 for all platforms that don't use a system-provided FFmpeg version.
* **@rmrector** continues to improve artwork cache handling. PVR images are now handled like most other image types for the caching system.
* **@ksooo** has been fixing further context menu fallout as he endeavours to improve the maintainability and consistency across Kodi's context menus.

**Network**

* A couple of fixes to IPv6 usage by **@joseluismarti**.

**Platform Specifics**

* **Android**:

  * More Dolby Vison updates have been submitted by **@quietvoid**. The latest fixes playback when some data is not provided by the FFmpeg library, and we would incorrectly categorise it as a different Dolby Vision profile (https://github.com/xbmc/xbmc/pull/24172).
* **Linux**:

  * **@smp79** has submitted a fix to VDPAU HQ scalers. 
* **macOS**:

  * **@kambala-decapitator** has updated our macOS signing tools to use Apple's newer `notarytool`. The previous usage of `altool` was deprecated/shutdown by Apple in November.
* **Windows**:

  * The much-awaited HDR10 support was added for Xbox (**@thexai** https://github.com/xbmc/xbmc/pull/24083).
  * The crash with VC-1 and some MPEG-2 videos when using DXVA decoding was corrected (**@thexai** https://github.com/xbmc/xbmc/pull/24085).
  * A crash when closing Kodi on Xbox has been fixed by **@thexai**.

**PVR**

* **@ksooo** continues to fix/improve Kodi's PVR system. Multiple fixes for different race conditions were merged for Beta2.
* Fix recordings with a path containing a ':' not displayed in recordings window.

**Python**

* **@the-black-eagle** has added `songVideoURL` to the `InfoTagMusic` interface.

**Skinning**

* `xbmc.gui` version has been bumped to 5.17 (https://github.com/xbmc/xbmc/pull/23926).
* **@DeltaMikeCharlie** has added infolabels for locale based information (https://github.com/xbmc/xbmc/pull/24028).

**UPnP**

* **@enen92** has continued making improvements in the long neglected UPnP feature of Kodi. The ability to serve smartlists via UPnP was added in https://github.com/xbmc/xbmc/pull/24008, as well as a fix to the case where sometimes some UPnP usage to stop before it was started (https://github.com/xbmc/xbmc/pull/24201).

**Videos**

* **@thexai** has upgraded what was traditionally an advanced setting regarding *Caching* to a category in *Settings > Services*, containing the buffering fine-tuning settings. If you previously used these advanced settings, you will need to make the changes in the normal settings windows to make use of them now. The settings made in `advancedsettings.xml` are no longer handled (https://github.com/xbmc/xbmc/pull/24049, https://github.com/xbmc/xbmc/pull/24117).
* More settings were added to control the NFS and SMB chunk size (**@thexai** https://github.com/xbmc/xbmc/pull/24019).
* The setting *Player > Videos > Use Display HDR capabilities* was renamed to *Adjust display HDR mode* and moved next to *Adjust refresh rate* (**@crystalp** https://github.com/xbmc/xbmc/pull/24100).
* After playing more than 5 seconds in a chapter, the *Previous chapter* action rewinds to the beginning of the chapter for a more intuitive behaviour (**@crystalp** https://github.com/xbmc/xbmc/pull/24066).

**Known Issues**

You can see open issues on our tracker at https://github.com/xbmc/xbmc/issues. However, to call out a couple of specifics, please be aware of the following if you're planning on upgrading:

* There are seek issues with multi-part MP4 files on Android (https://github.com/xbmc/xbmc/issues/23673).
* We've had reports that the new splash screen looks like an OpenGL corruption; we know, it's not a problem, so don't panic. We'd be happy to have your artwork contributions if you'd like to work on an alternative. 
* If remote sources are unavailable at startup, users are seeing large delays of startup (https://github.com/xbmc/xbmc/issues/23958).

We continue to march forward to what we hope will be a successful v21 Omega release in the new year. 

If you love to live on the bleeding edge, you can get Beta 2 from [here](https://kodi.tv/download). Select your platform of choice, and look in the "Prerelease" section. Again, though, please: expect some breakage, don't use this as your daily installation unless you know how to get things working again, and please share your experiences back with us so we can really get going on those bugs.

There is always a great deal more changes/fixes/updates than what we can highlight in these reports, so as usual you can see a fuller list of what has been merged between v21 and v20 [here](https://github.com/xbmc/xbmc/compare/Nexus...xbmc:21.0b2-Omega). For a more targeted look at the changes made since v21 Beta 1, you can see those changes [here](https://github.com/xbmc/xbmc/compare/21.0b1-Omega...21.0b2-Omega).