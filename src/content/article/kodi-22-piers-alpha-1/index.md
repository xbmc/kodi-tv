---
title: Kodi 22 "Piers" Alpha 1
date: 2025-08-29T16:01:49.149Z
author: Team Kodi
tags:
  - Prerelease
  - Developer
featured_image:
  src: /images/blog/kodi_splash_v22.0_piers_alpha_1080p.webp
  title: Kodi 22.x "Piers" Alpha Splash Screen
  alt: A sea of shades of purple - text in the background, a solitary Kodi logo
    and the name "Piers" in the foreground. Look closer, and the text is a huge
    list of all of the contributors to Kodi over the years.
---
So, here we go once again - development (and developers) never actually sleep, so we're pleased to present the first public preview of our next significant release: Kodi v22, "Piers". 

This is a major release, so, as you'd expect, it comes with many new features. However, it is also an Alpha release, so there's a very good chance that something won't work the way it's intended to. As such, please be aware that installing this will most likely break things, which is kind of the point of releasing it: please raise Github issues with full debug logs to help us resolve any regressions you wonderful testers come across.

So, all that aside... what's actually changed?

### Video/audio

* Upgraded to FFmpeg 7
* Audio book chapter support
* Movie Versions/Extras full redesign
* Movie Sets support setting info and artwork
* Better stream selection
* Automatic cleaning of cached images/artwork

### Blu-ray multi-episode support

* New Blu-ray episode selection menu
* Blu-ray episodes now have their own progress, media info and artwork
* Library import/export now handles Blu-ray episodes
* Episode ranges are now supported and shown in the library
* Movie Versions/Extras are now supported for Blu-ray discs

### PVR

* New Recently Added Channels (plus new widget)
* New Providers window (requires skin support)
* New Custom Timers
* Improved channel groups
* Improved saved searches
* Improved recording functionality
* Improved EPG search
* 1-minute EPG resolution (requires skin support)

### Games

* Shader support (from Google Summer of Code 2017/2019)
* Improved mouse and keyboard support
* New scaling methods, including integer scaling
* Fixed aspect ratio for some emulators
* Fixed some micro-stuttering issues

### GUI

* Reduced memory usage for single- and dual-channel textures
* Improved performance and memory usage on OpenGL and OpenGLES
* Improved large texture image quality with better performance on slow devices
* Implemented front-to-back rendering for better performance (OpenGL(ES) only)

### Network

* Improved SMB GUI settings
* Support for SMBv2.0 devices lacking SMBv2.1 features such as "large MTU"
* Fixed connecting to Windows SMB servers with no password
* Drastically improved performance at listing large SMB directories

### Platforms

* Windows/Xbox

  * Initial Windows ARM64 desktop support
  * Python 3.13 on Windows/Xbox
  * Enabled XAudio2 sink for Windows desktop (was previously only on Xbox)
  * Enhanced Video Super Resolution feature with 10-bit SDR support (Intel and Nvidia) and HDR10 (Nvidia)
* Android

  * Enabled file sharing to other apps and players
  * Improved channels on the home page
  * Upgraded to Android 15
  * Minimum Android version is now 7.0
  * Android support for 16KB page size
* LG webOS

  * New unified media pipeline
* Linux

  * HDR passthrough on OpenGL (was previously only on OpenGLES)
  * Support for the Wayland Color Management protocol, therefor supporting HDR on Wayland with compatible compositors
  * Make Kodi work on systems using a Turkish locale

### Peripherals

* Improved [OSMC Remote](https://osmc.tv/) support
* Improved [Pulse-Eight CEC Adapter](https://www.pulse-eight.com/) support
* Improved [Flirc](https://flirc.tv/) support

### Known issues

* Scanning for new content **will fail** if local NFO files are present (fixed for Alpha 2)
* Filesystems that use milliseconds can trigger a rescan

If you love life on the bleeding edge of new, you can get Alpha 1 from [here](https://kodi.tv/download). Select your platform of choice, and look in the "Prerelease" section. Again, though, please: expect some breakage, don't use this as your daily installation unless you know how to get things working again, and please share your experiences back with us so we can really get going on those bugs. And take a backup first!

As usual, in the full spirit of open source, you can see what's changed since v21.2 [here](https://github.com/xbmc/xbmc/compare/21.2-Omega...xbmc:xbmc:22.0a1-Piers).