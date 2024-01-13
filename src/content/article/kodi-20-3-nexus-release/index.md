---
title: Kodi 20.3 "Nexus" - Release
date: 2024-01-10T09:24:41.684Z
author: Team Kodi
tags:
  - Release
featured_image:
  src: /images/blog/kodi-20.3-nexus-splash.webp
  title: Kodi 20.3 "Nexus" Splash Screen
  alt: Kodi 20.3 "Nexus" Splash Screen - a blue Kodi logo sits in the centre of a
    black page, around it, a dial - a gauge or chronograph, perhaps.
---
A new year dawns, and brings with it one last hurrah for the Kodi "Nexus" release line.

An assortment of bug fixes, some backports, no real new features. Full changelog since 20.2 on [Github](https://github.com/xbmc/xbmc/compare/20.2-Nexus...20.3-Nexus), as usual.

### **Release notes**

**Estuary**

* An assortment of fixes for Estuary, including home categories' focus position, alignment of counter labels and Shift view for collections.
* Fixes to the weather layout when busy.

**Game/Retroplayer**

* Fixed controllers not assigned to game ports correctly on Android.
* Fixed blue/pink washed out colours on Windows with 10-bit displays.
* Fixed possible crash in Port dialogue box.
* Fixed typo for the mouse middle button in Controller dialogue box.

**General**

* A DVD playback fix that resolves unmounted drives not being playable.
* A fix for infinite loops in `CPluginFile` that occurred when using scrapers.
* A fix for a crash that occurred due to Addon settings being destructed in an incorrect order.
* Redact some information from Toast notifications (user/passwords incorrectly being shown).
* A memory leak in context menus was resolved.
* Image cache handling was fixed to correctly regenerate when cached files for JSON API consumers.

**Music**

* Music Library: now able to automatically recover if library cleaning was interrupted previously for some reason.

**Platform Specific**

* Android

  * Fixed (workaround implemented) possible audio out-of-sync in recent AMLogic BSP devices: FireTV Cube 3rd Gen, Homatics Box R 4K Plus, …
* Linux

  * VP9 Profile 2 playback failure was fixed. 
  * A fix for a leak of `EGLFences` in the DRM Prime renderer.
* macOS/iOS

  * Fix a crash on Apple Silicon based Macs when pressing the Caps Lock key.
* tvOS

  * Fixed: Not persistent binary addons (PVR) settings.
* Windows

  * Fixed: 24 Hz refresh rate related to HDR in specific use cases only (when Windows HDR auto-switch is not used).
  * Fixed: audio device "WASAPI:default" was listed multiple times in audio device list.
  * Fixed: fractional refresh rates 119.88 Hz and higher they were not displayed correctly.

**Pictures**

* An exif parsing regression from v19 was resolved.

**PVR**

* Fix TV channel subtitles not displayed on playback start, even when activated in subtitle settings.
* Fix recordings with a path containing a colon (':') not being displayed in recordings window.

**UPNP**

* A fix for a crash that occurred when a user added a UPNP source without having UPNP enabled.
* Playback from remote sources (ftp, http, etc.) has been fixed.

**Video**

* A fix to the default Select action on certain movie-related windows.

Thanks, as always, to everyone who has helped us track down and fix any issues. We endeavour to minimise the issues everyone experiences, but with such a large project, and the fact everyone contributing to Kodi is a volunteer, issues and bugs are a part of life. if you happen to experience any bugs/issues, don't hesitate to reach out on the forums, or raise an issue on Github.

As this is a point release, there are no major changes since the previous version, and you should be fine to install this straight over the top of any existing Kodi 20.x installation - indeed, this will happen automatically on many platforms. However, as for all software installations, back up your userdata beforehand if you've any doubts or have anything you can't afford to lose (and definitely do this if you're going for a major version upgrade).

A list of all changes for this version can be found at [GitHub](https://github.com/xbmc/xbmc/milestone/159?closed=1). If you want to read back on the full history of v20 itself, or of previous versions, you can find the corresponding articles in the relevant [blog posts](https://kodi.tv/blog/tag/release).

Application deployment on different platforms (notably the Microsoft Store) can vary considerably due to circumstances outside of our control, so just be patient, and the update will inevitably find its way through.

**Android Deployment**

13th January, 10:00 UTC: After the initial problems with 20.3 on Google Play ("Cannot download OBB"), **@fuzzard** has done a sterling job and has now released an updated version into the wild. Testing suggests that it's installing correctly now, and so will be available to all Android users imminently.

Thanks for bearing with us on this. Apologies again for any inconvenience, and, please, let us know if you have any problems (or, indeed, if you're an Android developer who might want to give us some help...).