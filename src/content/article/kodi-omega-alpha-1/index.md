---
title: Kodi "Omega" Alpha 1
date: 2023-04-17T10:26:21.120Z
author: Team Kodi
tags:
  - Prerelease
  - Developer
featured_image:
  src: /images/blog/blank-notepad-pexels-pixabay.webp
  title: Blank notepad because we don't have a logo yet...
  alt: A hand holds up a blank notepad for all the world to see, mostly because we
    haven't got a logo for this release yet...
---
*This release is so fresh that we don't yet even have an image... oops!*

It's been a hectic last coupe of months in the world of Kodi, but the wheels keep on turning. Without any further ado, we are happy to announce the first Alpha release for Kodi 21.x "Omega".

This is a major release, so, as you'd expect, it comes with many new features. However, with a core change to FFmpeg 6.0, there is a very good chance that some regressions may occur. As such, please be aware that installing this will most likely break things, and we'd really like your help at that point to identify the problems and get them fixed. Please raise Github issues with full debug logs to help us resolve any regressions you wonderful testers come across.

So, all that aside... what's actually changed?

**Video**

**Subtitles**

**Discs**

**EDL**

**GUI**

**Input**

**Skinning**

**Estuary/Estouchy**

**Games**

**Platform Specifics**

* **UNIX Family Platforms**:
* **iOS/TVOS**:
* **macOS**:
* **Android**:
* **Linux**:
* **Windows**:
* If they're available, use displays' friendly names in settings (e.g. “LG TV #1”).
* Added a setting to use the Windows "HDR/SDR brightness balance" setting for GUI and subtitles when the display is in HDR PQ mode, and also improved the curve of internal method "GUI SDR max peak luminance".
* Improved read performance over SMB in some special cases, e.g. playing full Blu-ray folders.
* Improved graphics compatibility and fallback to enable running in some limited VM hardware (Hyper-V) even without video decoding support.
* Various improvements in DXVA render method to avoid incompatibilities in old hardware or Windows 8, especially in the case of sources with BT.2020 colour space.
* Implemented support for DXVA2 AV1 hardware video decoding 8-bit and 10-bit.

**PVR**

**Build System/Dependencies**

**Date/Time**

**Addons**

If you love to live on the bleeding edge of new, you can get Alpha 1 from [here](https://kodi.tv/download). Select your platform of choice, and look in the "Prerelease" section. Again, though, please: expect some breakage, don't use this as your daily installation unless you know how to get things working again, and please share your experiences back with us so we can really get going on those bugs.

As usual - well, it is open source - you can see what's changed between v21 and v20 [here](https://github.com/xbmc/xbmc/compare/Matrix...xbmc:21.0a1-Omega). Even though its only been 3 months, it's a long list...