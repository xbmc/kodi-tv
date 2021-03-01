---
title: 'Kodi "Leia" 18.5 Release'
date: 2019-11-17T06:02:31Z
author: Prof Yaffle
featured_image:
  src: /images/blog/18-5 Splash Screen.jpg
  title: 'Kodi 18.5 Splash Screen'
  alt: 'Kodi 18.5 Splash Screen'
---
In our ongoing mission to bring you the very greatest (and most reliable) media centre software in the world, it's time to let another point release escape into the wild. Usual rules apply: this isn't about features, it's about stability and usability.

 As usual, you can find a full summary of closed pull requests [on GitHub](https://github.com/xbmc/xbmc/pulls?page=1&q=is%3Apr+sort%3Aupdated-desc+milestone%3A%22Leia+18.5%22+label%3A%22v18+Leia%22), but the summary would be...

 **Interface/Look-and-Feel**

 
 * Estuary and GUI info fixes, including scrollbar behaviour, icon names, label changes
 * Add dual support for Artist Slideshow 2.x and 3.x
 * Fix to always allow 'Black' screen saver
 * Fix wrong sort order list for music playlists node
 
 **Playback/Display**

 
 * Fixes to external subtitle playback
 * Fixes to support for archives over UPnP
 * Fixes to "queue item" and "play next" for STRM files with Plugin URL
 * Fixes to "hide watched" status for videos
 * Fixes to resume handling when marking a file as unwatched
 
 **PVR**

 
 * Fixes to EPG database storage, start/stop of PVR service
 * Fix handling of open modal dialogs
 * Fixes to commercial skip (EDL) processing 
 
 **Other/General Fixes**

 
 * Multiple Android changes around windowing, secure decoder and SDK versions
 * Multiple iOS changes, including support for iPhone 11 and 7th generation iPad, plus fixes for touch input, overlapping drawing surfaces, sandbox checks, notch support.
 * MacOS fixes around windowing, where only a portion of the screen was correctly rendered
 * Log files improvements around verbosity and security
 * Shoutcast improvements
 * Various fixes and improvements to add-on settings, package build documentation, build system, *advancedsettings.xml*, skin/profile changes and many other subsystems
 
  

 The nature of point releases is that most of these changes won't be visible to most people unless they address a specific problem you've stumbled across. That said, they're all real bugs, and real fixes, so thanks as always to all who found a bug, took the time to report it and, in some cases, provided a fix.

 The full v18.5 changelog can be found in our GitHub [milestone](https://github.com/xbmc/xbmc/compare/18.4-Leia...18.5-Leia). If you want to read back on what was actually changed in v18 itself, you can find the corresponding articles in the blog posts - [Kodi 18](https://kodi.tv/article/kodi-180), [Kodi 18.1](https://kodi.tv/article/kodi-v181-leia-rc1), [Kodi 18.2](https://kodi.tv/article/kodi-leia-182-release), [Kodi 18.3](https://kodi.tv/article/kodi-leia-183-release) and [Kodi 18.4](https://kodi.tv/article/kodi-leia-184-release).

 Application deployment on different platforms (notably, Google Play and the Microsoft Store) varies due to circumstances outside of our control. It may thus take a few more days to appear everywhere, so just stay tuned.

 
