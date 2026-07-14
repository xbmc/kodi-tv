---
title: Kodi 22 "Piers" Beta 1
date: 2026-06-28T16:47:00.000+01:00
author: Team Kodi
tags:
  - Prerelease
featured_image:
  src: /images/blog/kodi_splash_v22.0_piers_beta_1080p.webp
  title: Kodi 22.x "Piers" Beta Splash Screen
  alt: A sea of shades of purple - text in the background, a solitary Kodi logo
    and the name "Piers" in the foreground. Look closer, and the text is a huge
    list of all of the contributors to Kodi over the years.
---
Announcing the first Beta release of Kodi 22 "Piers"!

As we move from the Alpha to the Beta stage of the release cycle, the team is happy with the significant number of features and improvements that have come together for v22. Now, the focus becomes stability and performance, leading us to the final v22 release.

If you want the latest and greatest, this release is for you. Being a beta release, there's some possibility of rough edges, and things that previously worked and now stubbornly don't. But fear not, you're part of a relentless community that now has our Beta 1 release to play with. Please raise Github issues with full debug logs to help us resolve any faults.

Okay, what's new in this version?

## Changelog

### Video

* Upgraded to FFmpeg 8.1.2
* Added live bitrate infolabels
* Improved accuracy for chapter changes
* Improved handling of chapters read by FFmpeg
* Improved tempo settings
* Integrated bookmarks into forward/backward skip
* Fixed seeking during 1.6x tempo
* Fixed AV1 playback with keyframe-filtering=2
* Fixed broken OSD for DVDs after Alpha 3

### Audio

* Fixed possible crash during DTS-HD audio playback
* Fixed audio delay for live TV with AC3/EAC3 passthrough

### Subtitles

* Subtitle visibility improvements
* Subtitle timing improvements
* Fixed handling of ASS/SSA script headers
* Shows the playing video's current subtitle CODEC

### Library

* Added "Media Details" dialog
* Added audio language to media item badges
* Added additional HDR formats to the UI
* Fixed duplicate taglines in the library view
* Fixed various stream detail issues
* Improved Blu-ray handling for .nfo files
* Improved Blu-ray playcount handling
* Improved stacking for movie/folder path names with Roman numerals
* Fixed handling of more complex episode ranges
* Improved Movie Version scanning behaviour
* Improved media badges

### Music

* Fixed several issues for CUE sheets
* Fixed several audiobook issues
* Fixed rescanning music items

### PVR

* Improved daily wake-up timer

### Games

* Added new Disc Manager
* Fixed possible crash when changing resolution
* Fixed M3U handling for multi-disc games
* Fixed transparency when choosing video filters
* Added ability for Amiga controllers to autoconnect
* Added "Select" button for Amiga controllers

### Network

* Fixed NFSv4 file creation with atomic O_EXCL flag
* Fixed possible crash when a JSON-RPC TCP client disconnects
* Fixed parsing NFS URL options
* Fixed reading DVD folders on NFS
* Fixed SMB session exhaustion (Windows desktop is limited to 20 connections)
* Extended the JSON-RPC method `Textures.GetTextures` to report texture status
* Fixed potential XSS and open redirects in the web UI

### Databases

* Fixed incompatibility with MySQL 9.6 and above
* Fixed incompatibility with MariaDB 10.x remote databases
* Fixed possible crash when MySQL server is temporarily unavailable
* Added new `advancedsettings.xml` MySQL/MariaDB timeout element - `<connecttimeout>`, default 5s

element for MySQL/MariaDB video and music databases (defaults to 5 seconds)



### Inputstream add-ons

* Added HDR, colour metadata, 10-bit and 12-bit to Inputstream add-ons
* Fixed non-encrypted streams in Inputstream add-ons

### Peripherals

* Improved CEC handling (product of DevCon 2026 outside Barcelona)
* Fixed crash when rapidly hotplugging Linux joysticks

### Profiles

* Fixed possible crash switching to a profile that has never been used before
* Fixed migrations across different profiles

### Skinning

* Blocked clicks on disabled buttons
* Small tweaks to default Estuary skin
* Fixed nested label formatting
* Fixed scrolling text speed scaling with display resolution
* Fixes for skin reloading for skin developers
* Improved HDR profile support
* Added skin setting for showing original/localised movie titles

### Python

* Upgraded to Python 3.14.6
* Fixed `addVideoStream()`, `addAudioStream()` and `addSubtileStream()`

### Platforms

#### Android

* Fixed crash when using voice recognition
* Fixed general app failures due to JNI exception
* Fixed crash when starting Zeroconf browser
* Fixed error when running "Library > Clean library" in settings

#### Linux (general)

* Increased support for remote keys

#### Embedded Linux (DRM, GBM, and GLES)

* Substantial rewrite of Linux rendering
* Brings GLES to feature parity with GL
* Added full HDR end-to-end support (decode, colorimetry, tonemapped GUI, and 10-bit output)
* Added 12-bit decoding support
* Added dithering and HQ scalers for GLES
* Added "auto" dithering mode (GLES-only)
* Added YUV 4:2:2 and 4:4:4 support
* Added VAAPI hardware decoding of HEVC 4:2:2 and 4:4:4 (GLES-only)
* Improved video performance
* Improved GUI appearance in HDR mode
* Expanded hardware support, especially for ARM devices
* Fixed BT.2020 colorimetry signalling for DP-HDMI dongles
* Fixed numerous "limited-range" video black-level issues

#### webOS

* Fixed screensaver enabling during playback on webOS 4
* Fixed playback on webOS 26
* Fixed forced aspect ratio playback

#### tvOS

* Improved Siri Remote playback controls

### Developers

* Fixed build failure with Visual Studio 2026 18.6.0 (May 2026 Update)
* Change minimum required FFmpeg version from 8.1.0 to 8.1.1
* Warning for case-sensitive filesystem users: a filename was corrected, and may cause git errors

## Known issues

* On some GBM/GLES platforms, fullscreen video may show stale or flickering overlay graphics

## Download link

If cutting-edge software is your thing, you can get Beta 1 from [here](https://kodi.tv/download). Select your platform of choice, and look in the "Prerelease" section. Please share your experiences back with us so we can really get going on those bugs. And take a backup first!
