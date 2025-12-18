---
title: Kodi 22 "Piers" Alpha 2
date: 2025-12-18T18:54:51.117Z
author: Team Kodi
tags:
  - Prerelease
  - Developer
featured_image:
  title: Kodi 22.x "Piers" Alpha Splash Screen
  alt: A sea of shades of purple - text in the background, a solitary Kodi logo
    and the name "Piers" in the foreground. Look closer, and the text is a huge
    list of all of the contributors to Kodi over the years.
  src: /images/blog/kodi_splash_v22.0_piers_alpha_1080p.webp
---
It is the season for giving, so, for those who want the latest and greatest, this is for you: hot on the heels of Kodi 22 "Piers" Alpha 1 (and Kodi 23 "Omega" 22.3), we present the perhaps predictably-titled Alpha 2.

Usual words - the step from 21 to 22 is a major release, but it's also an Alpha at this stage, so you're going to get some bugs as well as funky new features. That is, of course, a major part of the point of early release software: please raise Github issues with full debug logs to help us resolve any regressions you wonderful testers come across.

Okay, what's new in this version?

### Video/audio

* Upgraded to FFmpeg 8
* Added HEIF/HEIC support
* Fixed playing streams with more than 256 audio+video+subtitles tracks
* Improved audio channel handling
* Improved subtitle selection for "forced_only" subtitles

### Library/Sources and Management

* Added Season Plot
* Added Movie/TV Show Original Language
* Fixed bug in Alpha 1 where scanning fails if local NFO files are present
* Improved Video Version importing

### PVR

* Fixed Daylight Saving Time switching issues

### Weather

* New Weather Skinning API
* Various fixes and improvements for the Home widget and Weather window

### Python

* Upgraded to Python 3.13.7
* Added ability to set available fanart

### Platforms

* Windows
  * Multiple Kodi instances can now be run simultaneously
* Android
  * New dialog explaining microphone permission
* macOS
  * Fixed high CPU usage in the background
* LG webOS
  * Improvements for new Media Pipeline
  * Fixed very bright subtitles and GUI when playing HDR / DolbyVision content
  * Fixed subtitles sometimes not displaying

If cutting-edge software is your thing, you can get Alpha 2 from [here](https://kodi.tv/download). Select your platform of choice, and look in the "Prerelease" section. Again, though, please: expect some breakage, don't use this as your daily installation unless you know how to get things working again, and please share your experiences back with us so we can really get going on those bugs. And take a backup first!

As usual, in the full spirit of open source, you can see what's changed since Alpha 1 [here](https://github.com/xbmc/xbmc/compare/22.0a1-Piers...xbmc:xbmc:22.0a2-Piers) and from v21.3 [here](https://github.com/xbmc/xbmc/compare/21.3-Omega...xbmc:xbmc:22.0a2-Piers). 