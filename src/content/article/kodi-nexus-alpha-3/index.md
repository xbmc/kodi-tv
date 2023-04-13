---
title: Kodi "Nexus" Alpha 3
date: 2022-09-18T15:14:52.824Z
author: Team Kodi
tags:
  - Developer
  - Prerelease
featured_image:
  src: /images/blog/nexus-a1-splash.webp
  title: Kodi 20.x "Nexus" Alpha Splash Screen
  alt: Kodi 20.x "Nexus" Alpha Splash Screen
---
Time for another Alpha release for the upcoming Version 20 "Nexus" release of Kodi.

As always, thanks go out to all contributors for their work - not only those in Team Kodi, but also to all the third party users that choose to roll up their sleeves and fix an issue. Everyone appreciates you for making Kodi better!

### **Release notes**

**Addons**

* Some crashes in addon installation and repository checks have been corrected (**ksooo**, **howie-f**)
* **AlwinEsch** has implemented a large feature to allow multiple instances of the same binary addon.

  This allows, for example, two instances of a PVR addon (e.g. [PVR.HTS](https://github.com/kodi-pvr/pvr.hts/pull/591)) to run using different backend provider instances. The usage of this will require updates from the various binary addons that will start to happen, so if you are interested in helping your favourite PVR addon to implement this, check out the above PVR.HTS PR, as well as the following [PVR.Demo PR](https://github.com/kodi-pvr/pvr.demo/pull/123)

**Database**

* **ksooo** has been optimising various things in our db wrappers for better performance ([link](https://github.com/xbmc/xbmc/pull/21780))

**DVD**

* Fix DVD Menu indicators for DRMPrime ([link](https://github.com/xbmc/xbmc/pull/21655))

**Filesystem**

* Fix NFS for Windows platforms after some recent NFS updates
* Several NFS improvements/cleanups
* Initial NFS4 implementation ([link](https://github.com/xbmc/xbmc/pull/21659))

**Font/Glyh**

* Several improvements around our Font/Glyph Handling code from several team members (**ksooo,** **thexai,** **sarbes**) - improvements that should help low power machines in particular, but all platforms generally. 
* Harbuzz glyph caching improvements ([link](https://github.com/xbmc/xbmc/pull/21683))
* Fix some inconsistencies with RTL languages and certain skinning components ([link](https://github.com/xbmc/xbmc/pull/21746))

**Games**

* Improvements/cleanups regarding controllers ([link](https://github.com/xbmc/xbmc/pull/21695))
* Fix crash if controller info files don't have correct info ([link](https://github.com/xbmc/xbmc/pull/21713))

**General**

* **Rechi** has done a bunch of leg work implementing improvements from Static analysis tools like CPPCheck ([link](https://github.com/xbmc/xbmc/pull/21362)) and ClangTidy ([link](https://github.com/xbmc/xbmc/pull/21789))
* Remove obsolete addons from Core Kodi install ([link](https://github.com/xbmc/xbmc/pull/21793))
* Fix wrong player playlist type for STRM file playback ([link](https://github.com/xbmc/xbmc/pull/21667))

**Input**

* Fix using mouse to drag/drop some controls ([link](https://github.com/xbmc/xbmc/pull/21748))

**Platform Specific**

* **Linux GBM**

  * Ability to set HDR Output ([link](https://github.com/xbmc/xbmc/pull/20199))
* **MacOS**

  * Allow the OSX arm64 (Apple Silicon) build to correctly find appropriate binary addons from repositories.
* **Windows**

  * Fix incorrect window positioning when transitioning window to fullscreen and back ([link](https://github.com/xbmc/xbmc/pull/21802))

**PVR**

* **ksooo** continues updating/refining/fixing all things PVR related

**Skinning**

* **Estuary**

  * Show titles when "Flatten Hierarchy" setting enabled ([link](https://github.com/xbmc/xbmc/pull/21676))

**Subtitles**

* Further improvements/refinements to subtitles from **CastagnaIT** 

**Video**

* Fix for 3D MVC Playback ([link](https://github.com/xbmc/xbmc/pull/21702))

Once again, consider this an alpha release. Backup your configs before testing, and please let us know of any regressions or issues

If you want to take the plunge, you can get Alpha 3 from [here](https://kodi.tv/download). Select your platform of choice, and look in the "Prerelease" section. 

As usual - well, it is open source - you can see what's changed between v20 Alpha 2 and Alpha 3 [here](https://github.com/xbmc/xbmc/compare/20.0a2-Nexus...20.0a3-Nexus).
