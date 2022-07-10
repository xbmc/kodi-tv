---
title: Kodi "Nexus" Alpha 2
date: 2022-07-10T09:18:22.184Z
author: Team Kodi
tags:
  - Developer
  - Prerelease
featured_image:
  src: /images/blog/nexus-a1-splash.jpg
  title: Kodi 20.x "Nexus" Splash Screen
  alt: Kodi 20.x "Nexus" Splash Screen
---
Slightly delayed Alpha 2, but here we go. We had a bit of a wild ride more due to behind the scenes update and changes - however, the good news is that it's given us more time for fixes and additions.

### **Release notes**

**Platform Specific**

* **Android**

  * Fix a stutter when the Kodi Android app was opened, closed and opened again. One of our team members (**@thexai**) noticed an issue with a recent PR that caused media stuttering to occur only after the app was opened and closed and reopened again without a force close. **@ksooo** has come up with a fix, so hopefully playback should be a better experience over Alpha 1.
  * Another TrueHD fix - buffers reduced to a specific level to optimise data throughput - [Android: Adjust buffer size/duration for TrueHD IEC](https://github.com/xbmc/xbmc/pull/21428).
  * More local app icons should render fully in Kodi - [Android: CFileAndroidApp::ReadIcon: Add support for icons provided a...](https://github.com/xbmc/xbmc/pull/21423).
  * Fix a packaging error for binary python modules (*pycryptodome*) - [Android: packaging: don't delete cryptodome libraries from depends i...](https://github.com/xbmc/xbmc/pull/21561).
* **XBox**

  * Fixes some specific H.265 video crashes - [XBox: DXVA2: Allows the use of more than 16 decoding surfaces for H265 Full HD or less](https://github.com/xbmc/xbmc/pull/21497).

**Python**

* Android and Apple systems have had their Python version bumped to 3.9.13 in accordance with the latest release of the CPython 3.9 series. Of note, there have been fixes by the CPython team specifically for issues raised by Kodi community members around some crashes. Thanks to those members raising the upstream issues, and the fantastic CPython team for fixing them.

  **Please note, this does not affect any of our Windows releases, or if you are using Linux.**

**Filesystems**

* Fix a regression that caused thumbnails to not appear when accessed from "remote" filesystems (e.g. WebDAV) - [fixed: URIUtils::IsInternetStream() didn't properly handle filesystem...](https://github.com/xbmc/xbmc/pull/21494).

**Closed Captions**

* Fix an instance of Closed Captions not working. A forum member was able to provide an extremely helpful sample that allowed **@enen92** to track down an issue with closed captions not working correctly. Incidentally, this also fixes Closed Captions for some *Inputstream.Adaptive* streams as confirmed by **@CastagnaIT**.

**Subtitles**

* Multiple WebVTT fixes

  * [Subtitles: WebVTT: Fix X-TIMESTAMP-MAP LOCAL parsing](https://github.com/xbmc/xbmc/pull/21457).
  * [Subtitles: WebVTT: Clear all overlays just before creating a new parser](https://github.com/xbmc/xbmc/pull/21650).
  * [Subtitles: WevVTT: Sync cue timestamps with period start](https://github.com/xbmc/xbmc/pull/21523).

**Bluray**

* Fix BluRay resume issues - [Discs: Fix resume of Blurays and BluRay ISOs (state serializer)](https://github.com/xbmc/xbmc/pull/21462).

**Thumbnail Images**

* Reduce "quality" of thumbnail creation - [FFmpegImage: Reduce quality a tiny bit](https://github.com/xbmc/xbmc/pull/21418)

  **NOTE**: An advanced setting is available for those users who wish to alter the default further. More information can be found [on the wiki](https://kodi.wiki/view/Advancedsettings.xml#Library_artwork).

**Skinning**

* A couple of skinning changes have been introduced. [gui: info: Add VideoPlayer.Art(type) and positional variants ](https://github.com/xbmc/xbmc/pull/21401) and [gui: info: Add Addon.Setting* infos](https://github.com/xbmc/xbmc/pull/21405).
* Skin timers - [skinning: Skin timer implementation](https://github.com/xbmc/xbmc/pull/21320).
* Removal of *player.DisplayAfterSeek* - [gui: info: Remove Player.DisplayAfterSeek](https://github.com/xbmc/xbmc/pull/21425).
* Skip border infill - [Adds GUI hint for skins to skip border infill](https://github.com/xbmc/xbmc/pull/20754).
* Moving speed - [gui: Implemented movingspeed to mover/resize controls](https://github.com/xbmc/xbmc/pull/21364).
* Diffuse fading animations - [Added diffuse fading animation effect ](https://github.com/xbmc/xbmc/pull/21400).
* *VideoPlayer.Art(type)* and positional variants - [gui: info: Add VideoPlayer.Art(type) and positional variants](https://github.com/xbmc/xbmc/pull/21401).

Skinners, have a look [on the forums](https://forum.kodi.tv/showthread.php?tid=363553) for more info.

Once again, consider this an alpha release. Backup your configs before testing, and please let us know of any regressions or issues

If you want to take the plunge, you can get Alpha 2 from [here](https://kodi.tv/download). Select your platform of choice, and look in the "Prerelease" section. 

As usual - well, it is open source - you can see what's changed between v20 Alpha 1 and Alpha 2 [here](https://github.com/xbmc/xbmc/compare/20.0a1-Nexus...20.0a2-Nexus).