---
title: Kodi "Matrix" 19.4 Release
date: 2022-03-05T10:55:21.105Z
author: Prof Yaffle
tags:
  - Release
featured_image:
  src: /images/blog/kodi-19.4-splash.jpg
  title: Kodi 19.4 "Matrix" Splash Screen
  alt: Kodi 19.4 "Matrix" Splash Screen
---
Is it too late to say "Happy New Year"? Maybe, maybe not, but this is still the first release of 2022, so let's go with that anyway.

It's point release o'clock once more, so, without further fanfare, I give you Kodi "Matrix" 19.4: more bug fixes, some backports, no real new features. Full changelog since 19.3 on [Github](https://github.com/xbmc/xbmc/compare/19.3-Matrix...19.4-Matrix), as usual.

**Estuary**

* Fix: Home screen context menu fix for when there are more than 10 items in menu.
* Fix: Seekbar wouldn't disappear after 5 sec when using remote app e.g. Kore or JSON to pause Kodi.

**Input**

* Fix: English keyboard missing semi-colon.
* Fix: Chinese keyboard character now displaying correctly.

**Music**

* Fix: Artist discography export to NFO.

**PVR**

* New: Sort method for recordings based on season and episode.
* Fix: Crash when navigating an empty guide.
* Fix: Hiding/deleting channel group now working correctly.

**UI**

* Fix: Any Favourites for a restricted/locked media source are now hidden.
* Fix: Blu-ray ISO title and watched status now displayed correctly.
* Fix: Wrong language identified from subtitle name corrected.

**Video**

* Fix: EDL mute now working.
* Fix: ASS subtitles display now working correctly.

**Android specifics**

* Fix: Audio buffers adjusted.
* Fix: Various TrueHD stutter/dropout issues corrected.

**Linux specifics**

* Fix: Automatic play of DVDs.

**MacOS specifics**

* Fix: Mouse cursor positioning in full-screen.

**Windows specifics**

* Fix: Flickering with interlaced H.264 SD on  AMD GPUs.
* Fix: Crash on unexpected network configuration (e.g. no MAC address obtained).

**Xbox specifics**

* New: Passthrough audio via WASAPI.
* Fix: Permission error preventing installation of Python add-ons.

Thanks, as always, to everyone who has helped us track down and fix any issues.

As this is a point release, there are no major changes since the previous version, and you should be fine to install this straight over the top of any existing Kodi 19.x installation - indeed, this will happen automatically on many platforms. However, as for all software installations, back up your userdata beforehand if you've any doubts or have anything you can't afford to lose (and definitely do this if you're going for a major version upgrade).

If you're interested, you can read the merged PRs [here](https://github.com/xbmc/xbmc/pulls?q=is%3Apr+sort%3Aupdated-desc+milestone%3A%22Matrix+19.4%22+label%3A%22v19+Matrix%22+). If you want to read back on the full history of v19 itself, or of previous versions, you can find the corresponding articles in the relevant [blog posts](https://kodi.tv/blog/tag/release).

Application deployment on different platforms (notably the Microsoft Store) can vary considerably due to circumstances outside of our control, so just be patient, and the update will inevitably find its way through.

**Android Deployment**

Please note that we are currently unable to provide this update via the Play Store. An updated Google requirement demands that apps now target API level 30 (Android 11) as a minimum, while Kodi targets API level 29 (Android 10). 

As such, we're unable to upload 19.4 to the Google Play Store, although 19.3 will remain available. However, for those who want the new release, 19.4 can be downloaded from our servers and installed manually:

- 32-bit download: <http://mirrors.kodi.tv/releases/android/arm/kodi-19.4-Matrix-armeabi-v7a.apk>

- 64-bit download: <http://mirrors.kodi.tv/releases/android/arm64-v8a/kodi-19.4-Matrix-arm64-v8a.apk>