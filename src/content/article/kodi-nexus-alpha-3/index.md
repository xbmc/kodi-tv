---
title: Kodi "Nexus" Alpha 3
date: 2022-09-18T15:14:52.824Z
author: Team Kodi
featured_image:
  src: /images/blog/nexus-a1-splash.jpg
  title: Kodi 20.x "Nexus" Splash Screen
  alt: Kodi 20.x "Nexus" Splash Screen
---
Time for another Alpha release for the upcoming Version 20 Nexus release of Kodi.

As always, thanks go out to all contributors for their work. Both those in Team kodi, but also to all the 3rd party users that choose to roll up their sleeves and fix an issue. Everyone appreciates you for making Kodi better.

### **Release notes**

**Addons**

* Some crashes in addon installation and repository checks have been corrected (**ksooo**, **howie-f**)
* **AlwinEsch** has implemented a large feature to allow binary addons to have multiple instances of the same addon running

  This allows, for example, to have 2 instances of a PVR addon (e.g. pvr) to run using different backend provider instances. The usage of this will require updates from the various binary addons that will start to happen, so if you are interested in helping your favourite PVR addon to implement this, check out the above PVR.HTS PR, as well as the following PVR.Demo PR (https://github.com/kodi-pvr/pvr.demo/pull/123)

**Database**

* @ksooo has been optimising various things in our db wrappers for better performance (https://github.com/xbmc/xbmc/pull/21780)

**DVD**

* Fix DVD Menu indicators for DRMPrime (https://github.com/xbmc/xbmc/pull/21655)

**Filesystem**

* Fix NFS for windows platforms after some reason NFS updates
* several NFS improvements/cleanups
* Initial NFS4 implementation (https://github.com/xbmc/xbmc/pull/21659)

**Font/Glyh**

* Several improvements around our Font/Glyph Handling code from several team members (@ksooo @thexai @sarbes ). Improvements that should help low power machines in particular, but all platforms generally.
* Harbuzz glyph caching improvements (https://github.com/xbmc/xbmc/pull/21683)
* Fix some inconsistencies with RTL languages and certain skinning components (https://github.com/xbmc/xbmc/pull/21746)

**Games**

* Improvements/cleanups regarding controllers (https://github.com/xbmc/xbmc/pull/21695)
* Fix crash if controller info files dont have correct info (https://github.com/xbmc/xbmc/pull/21713)

**General**

* @Rechi has done a bunch of leg work implementing improvements from Static analysis tools like CPPCheck (https://github.com/xbmc/xbmc/pull/21362) and ClangTidy (https://github.com/xbmc/xbmc/pull/21789)
* Remove obsolete addons from Core Kodi install (https://github.com/xbmc/xbmc/pull/21793)

**Input**

* Fix using mouse to drag/drop some controls (https://github.com/xbmc/xbmc/pull/21748)

**Platform Specific**

* **Linux GBM**

  * Ability to set HDR Output (https://github.com/xbmc/xbmc/pull/20199)
* **MacOS**

  * Allow the OSX arm64 (Apple Silicon) build to correctly find appropriate binary addons from repositories.
* **Windows**

  * Fix incorrect window positioning when transitioning window to fullscreen and back (https://github.com/xbmc/xbmc/pull/21802)

**PVR**

* @ksooo continues updating/refining/fixing all things PVR related

**Skinning**

* **Estuary**

  * Show titles when "Flatten Hierarchy" setting enabled (https://github.com/xbmc/xbmc/pull/21676)

**Subtitles**

* Further improvements/refinements to subtitles from @CastagnaIT 

**Video**

* Fix for 3D MVC Playback (https://github.com/xbmc/xbmc/pull/21702)

Once again, consider this an alpha release. Backup your configs before testing, and please let us know of any regressions or issues

If you want to take the plunge, you can get Alpha 3 from [here](https://kodi.tv/download). Select your platform of choice, and look in the "Prerelease" section. 

As usual - well, it is open source - you can see what's changed between v20 Alpha 2 and Alpha 3 [here](https://github.com/xbmc/xbmc/compare/20.0a2-Nexus...20.0a3-Nexus).