---
title: Kodi 21.0 "Omega" Alpha 2
date: 2023-06-18T13:12:18.123Z
author: Team Kodi
tags:
  - Prerelease
  - Developer
featured_image:
  src: /images/blog/kodi_21_omega_alpha_splash.webp
  title: Kodi 21 "Omega" Splash Screen
  alt: Kodi 21 "Omega" Splash Screen - the Kodi logo sits at the centre of a black
    screen, a stylised Greek letter "Omega" around it.
---
Time for the next milestone release for Kodi 21 "Omega". This is our second Alpha release for this cycle.

This is a major release, so, as you'd expect, it comes with many new features. However, with a core change to FFmpeg 6.0, there is a very good chance that some regressions may occur.  As such, please be aware that installing this will most likely break things, and we'd really like your help at that point to identify the problems and get them fixed. Please raise [Github issues](https://github.com/xbmc/xbmc/issues) with full debug logs to help us resolve any issues you wonderful testers come across.

Over the last couple of months we've merged 120 pull requests - fixing issues, adding features, and improving Kodi.

So... what's actually changed?

**Build/Dependencies**

* Apple platforms are now all built using newer version of Xcode (14.2) and the relevant SDKs. Thanks to a combination of a new M1 Mac mini hardware donation from long time supporter of the project, [MacMiniVault.com](https://www.macminivault.com/), and also the Kodi foundation purchasing a second M1 Mac mini, we have been able to decommission our ageing Intel Mac mini's that have been in use for a long time.
* Building on Windows now uses the system `curl` executable instead of our formerly bundled (ancient) `wget` executable.
* Improvements to dependency building have been made by **@lrusak** to make the downloading/hash checking more robust.

**Estuary**

* Improvements to the seek window timeouts have been made to more correctly disappear after appropriate timeouts.
* Fix visibility of 'next recording' label in `PVRTimers` was made by **@ksooo**. 

**FFmpeg**

* One of our newer team members, **@neo1973** , has made some cleanups and fixed some crashes in our ffmpeg side data usage, as well as other improvements with our ffmpeg API usage.

**General**

* Improvements made to handling of movement keys (e.g. PageUp, Down, Home, End) in certain lists such as Settings.
* **@rmrector** has been endeavouring to improve image cache handling for GUI items. We look forward to the further work he has in the pipeline to improve the cache handling.
* `Extraart` configurations in `advancedsettings.xml` for Kodi 18 will no longer be migrated to the new GUI settings when upgrading. If you had meaningful configuration there, check that the artwork settings in the GUI match your preferences.
* **@CrystalP** extended the navigation history to track the line number of the selected item so that it can be restored when the item disappears from the list, instead of resetting the selection to the top of the list (usually the `..`) after the end of playback or changing the watched status of an item.
* The generation of thumbnails was fixed for pictures in portrait orientation. The existing thumbnails in `KODI_HOME/userdata/Thumbnails/*` must be deleted in order to have new correct ones recreated.

**JSON-RPC**

* `VideoLibrary.GetEpisodeDetails` now returns "studio" and "genre" added by **@scott967**  in https://github.com/xbmc/xbmc/pull/23112.

**Platform Specifics**

* **Android**:

  * **@joseluismarti** has continued with more cleanups and improvements to the Android codebase. Each improvement makes things easier to manage, and is greatly appreciated.
  * **@fritsch** has been able to make further improvements to AudioTrack to handle hardware that has sinks that get "stuck". Its always a fine line making changes in the Android world, as the multitude of hardware vendors have widely varying implementation qualities of the standard Android APIs.
* **Linux**:

  * **@lrusak** has added the ability for users to select the audio backend with a command line switch when starting Kodi. This also allows seeing with which enabled audio backends Kodi was built. For more information check out the following [PR](https://github.com/xbmc/xbmc/pull/23148).
* **macOS**:

  * The minimum OS required for Kodi on macOS is now Mojave (10.14). This was done to allow the project to continue using more modern C++ 17 features. macOS Mojave was released on 24th September 2018 and hardware supported can be seen at [Apple.com](https://support.apple.com/kb/sp777?locale=en_US).
  * **@enen92** has continued to further improve what is known as "Native windowing" for our macOS codebase that will eventually lead to a formal Apple Silicon version. Improvements to window resizing, menu's, window blanking, improved multiple monitor handling and more.
  * For developers, Kodi can also now more easily be run from Xcode without having to alter schemes.
  * **@ksooo** has now correctly added Speechrecognition entitlements for Apple platforms (including iOS/tvOS) which fixes a crash when microphone usage was triggered.
  * Support for HiDPI resolutions, such as those marketed as Retina displays, has been introduced in the native windowing version. This enhancement allows Kodi's graphical user interface (GUI) to showcase higher pixel densities, resulting in a sleek and polished appearance on modern Macs.
* **webOS**

  * **@sundermann** and **@craigcarnell** have made further improvements to the new webOS platform. Screensaver support has been added, along with audio sink improvements and updates to codec hardware support.
* **Windows**:

  * Minimum Windows supported version has been raised to Windows 8.1.
  * **@CrystalP** and **@thexai** have made a number of improvements to windows HDR/SDR/HLG display including tonemapping and hardware DXVA support for a number of combinations of those media types.
  * **@thexai** implemented support for "Video Super Resolution" for Nvidia (RTX ) and Intel (ARC) compatible hardware. Please note, we obviously cant test all combinations of hardware, so don't expect this to work for every combination under the sun. Give it a try and report any issues WITH debug logs.
  * Bump to `libdav1d` to version 1.20 should improve AV1 playback support for windows platforms.

**Python**

* A fix for a regression was made by **@lrusak** that puts addon paths at the front of the system paths. This fixes addons using system modules instead of potentially customised Kodi modules of the same name. This mostly affects Linux based systems.

If you love to live on the bleeding edge of new, you can get Alpha 2 from [here](https://kodi.tv/download). Select your platform of choice, and look in the "Prerelease" section. Again, though, please: expect some breakage, don't use this as your daily installation unless you know how to get things working again, and please share your experiences back with us so we can really get going on those bugs.

As usual - well, it is open source - you can see what's changed between v21 and v20 [here](https://github.com/xbmc/xbmc/compare/Nexus...xbmc:21.0a2-Omega).


For a more targeted look at the changes made since v21 Alpha 1, you can see those changes [here](https://github.com/xbmc/xbmc/compare/21.0a1-Omega...21.0a2-Omega).