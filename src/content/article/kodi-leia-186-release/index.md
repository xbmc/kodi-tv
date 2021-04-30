---
title: 'Kodi "Leia" 18.6 Release'
date: 2020-03-02T23:00:00Z
tags:
  - Release
author: Prof Yaffle
featured_image:
  src: /images/blog/Kodi_Splash_v18.6_Leia_Final_1080p.webp
  title: "Kodi 18.6 Splash Screen"
  alt: "Kodi 18.6 Splash Screen"
---

And.... here we are again. The latest Kodi release in the 18.x "Leia" cycle, with more (count them!) and better (measure them!) bug fixes for your various delight, delectation, and delirious... discussion?

18.6 is here. More nasty (and not-so-nasty) problems fixed, more bugs squashed, more happiness and love for all. This release is all about backports: where practical, we've brought bug fixes forwards from the forthcoming 19.x release, so you get the benefit sooner rather than later.

As usual, you can find full details of closed pull requests [on GitHub](https://github.com/xbmc/xbmc/pulls?page=1&q=is%3Apr+sort%3Aupdated-desc+milestone%3A%22Leia+18.6%22+label%3A%22v18+Leia%22), so explore that if you want the details, but the summary would be...

**Audio**

- Fixes around visualisations
- Fixes around pause/resume
- Fixes around TrueHD crashes
- Workaround firmware bug (AMLogic v23) (_sidenote: there are many more Android audio fixes that can't be merged into 18.x "Leia" because of old AMLogic workarounds_)  
  Fix to correctly resume audio-only MPEG-TS streams
- Correct headphone enumeration (Android)

**Build System**

- Updates for missing includes
- Updates for Cmake (Windows)
- Updates for device handling and packaging (macOS)

**Games**

- Fixes for launching disc images and .zip files
- Fixes for black screen for RGB emulators (Rpi)

**Interface/Look-and-feel**

- Fixes around TextureCache
- Fixes for windowing, refresh rate, mode change and others (Android)
- Fixes for floating/split keyboard (iOS)
- Fix for artist slideshow (Estuary)
- Fix media view from addon given content

**Playback/Display**

- Fixed race condition for OnPlaybackStarted
- Fixes for MIME type (Android)
- Support for DolbyVision streams via addons
- Fixes for maximum width and height/vertical-shift (Android)
- Fix for scanning in sub-directories
- Fix size of EAGL layer on external screen (iOS)
- Fix for glTexImage3D (Linux)
- Fix for seeking issues
- Reset playlist on new file playback

**PVR**

- Fix for multiline episode names

**Other/General**

- Fixed incorrectly formatted region time
- Pass JSON serialised path settings to python scrapers
- Fix file access on auto-mounted sources
- Fix seeking with FileCache lockup
- Fix passthrough on USB devices (Android)
- Fix crash if profile.xml gets broken
- Fix cache forward size on EOF

The nature of point releases is that most of these changes won't be visible to most people unless they address a specific problem you've stumbled across. That said, they're all real bugs, and real fixes, so thanks as always to all who found a bug, took the time to report it and, in some cases, provided a fix.

The full v18.6 changelog can be found in our GitHub [milestone](https://github.com/xbmc/xbmc/compare/18.5-Leia...18.6-Leia). If you want to read back on what was actually changed in v18 itself, you can find the corresponding articles in the blog posts - [Kodi 18](https://kodi.tv/article/kodi-180), [Kodi 18.1](https://kodi.tv/article/kodi-v181-leia-rc1), [Kodi 18.2](https://kodi.tv/article/kodi-leia-182-release), [Kodi 18.3](https://kodi.tv/article/kodi-leia-183-release), [Kodi 18.4](https://kodi.tv/article/kodi-leia-184-release) and [Kodi 18.5](https://kodi.tv/article/kodi-leia-185-release).

Application deployment on different platforms (notably, Google Play and the Microsoft Store) varies due to circumstances outside of our control. It may thus take a few more days to appear everywhere, so just stay tuned.
