---
title: Kodi 21.2 "Omega" - Release
date: 2025-01-16T15:03:29.354Z
author: Team Kodi
tags:
  - Release
featured_image:
  title: Kodi 21.2 "Omega" Splash Screen
  alt: Kodi 21.2 "Omega" Splash Screen - the Kodi logo sits at the centre of a
    black screen, a stylised Greek letter "Omega" wrapped around it.
  src: /images/blog/kodi_splash_v21.2_omega_final_1080p.webp
---
New Year, New Kodi? Not quite, but here we go with the next point release of the 21.x "Omega" series.

The usual story: bugfixes, not features. The full changelog can be found on [Github](https://github.com/xbmc/xbmc/compare/21.1-Omega...21.2-Omega), as usual.

### Release Summary

Major user-facing changes include:

**Library/Sources and Management**

- Fixed a bug that ignored images in the `...\season\.actors` folder. The `\season\.actors` folders have been deprecated and all actors are saved in the `\TV Show\.actors` folder. ([forum](https://forum.kodi.tv/showthread.php?tid=379965), [PR](https://github.com/xbmc/xbmc/pull/26154))
- Restore performance of movie addition to the library to v20 (Nexus) level ([PR](https://github.com/xbmc/xbmc/pull/25884))
 - Fixed/improved playback from some UPnP server software (at least UMS and Gerbera. Some NAS UPnP servers are based on UMS under the covers). Playback starts faster and multiple videos can be played consecutively. ([PR](https://github.com/xbmc/xbmc/pull/25830))  
- Preserve special characters in names of scanned or added movie extras ([PR](https://github.com/xbmc/xbmc/pull/25970))
- Replace context menu items 'Set actor/artist thumb' with 'Choose art' to make it possible again to add/and set other artwork, not only thumbnails ([PR](https://github.com/xbmc/xbmc/pull/25725)) 
- Fixed _mark watched/unwatched_ operations missing in certain context menus ([PR](url)) 
- Honour `importwatchedstate` and `importresumepoint` settings from advancedsettings.xml ([PR](https://github.com/xbmc/xbmc/pull/26177))

**Video**

- Fixed HDR passthrough on video sources with partial or missing display metadata (only GL/GLES platforms) ([PR](https://github.com/xbmc/xbmc/pull/26134))
- Fixed HDR to SDR tone mapping on video sources with partial or missing display metadata (only GL/GLES platforms) ([PR](https://github.com/xbmc/xbmc/pull/26144)) 
- Fixed possible incorrect picture metadata if playing different HDR videos without stopping the previous one and the videos had different HDR metadata (all platforms) ([PR](https://github.com/xbmc/xbmc/pull/26145)) 
- Fixed on Blu-Ray discs some BD-j menu items not displaying correctly due to multi-thread timing issues ([PR](https://github.com/xbmc/xbmc/pull/26267))
- Fixed deletion of bookmarks in video if the video has also chapters ([PR](https://github.com/xbmc/xbmc/pull/26078))


**Music**

- Fixed an issue with the last track duration of some albums stored in mka containers ([PR](https://github.com/xbmc/xbmc/pull/26282))  

**Plugins**

- Fixed missing context menu entries for plugin-provided items ([PR](url))

**Filesystem**

- Restored the ability of enter credentials when browsing SMB shares (only POSIX platforms) ([PR](https://github.com/xbmc/xbmc/pull/26179))
- Updated cURL to 8.10.0 to fix issues with FTP TLS sources ([PR](https://github.com/xbmc/xbmc/pull/25849))

**PVR**

- EPG search fixes ([PR](https://github.com/xbmc/xbmc/pull/25741)) 
- Fixed resume points for recordings not honoured ([PR](https://github.com/xbmc/xbmc/pull/25765)) 
- Fixed 'User has no access / server' error if broadcasts have been shifted ([PR](https://github.com/xbmc/xbmc/pull/25779)) 
- Fixed default select action 'show info' for PVR items ([PR](https://github.com/xbmc/xbmc/pull/26131)) 

**Skin/GUI**

- Added Donation tab in System Settings ([PR](https://github.com/xbmc/xbmc/pull/26094))

**Android**

- Greatly improved joystick support on Android ([PR](https://github.com/xbmc/xbmc/pull/25389)) 
- Fixed possible crash when `getInterfaceName` method returns null ([PR](https://github.com/xbmc/xbmc/pull/26151))
- Fixed resuming paused media playback not working via play/pause media key press ([PR](https://github.com/xbmc/xbmc/pull/25859)) 
- Fixed black screen when resuming app from minimised state ([PR](https://github.com/xbmc/xbmc/pull/26226))
- Fixed resuming paused media playback not working via play/pause media key press ([PR](https://github.com/xbmc/xbmc/pull/25859)) 

**Linux**

- Fixed memory corruption when high quality video scalers are used ([PR](https://github.com/xbmc/xbmc/pull/25093))
- Fixed possible infinite loop when using GBM and a _DRM Atomic Commit_ fails ([PR](https://github.com/xbmc/xbmc/pull/25588))
- Fixed windowed Kodi becoming larger on every start when running on Wayland with a scale factor ([PR](https://github.com/xbmc/xbmc/pull/25996))

**OSX**

- Fixed crash when trying to detect optical media ([PR](https://github.com/xbmc/xbmc/pull/25833))

**Windows**

- Fixed the crash issue that occurred when accessing the computer using Remote Desktop Protocol ([PR](https://github.com/xbmc/xbmc/pull/25660)) 
- Fixed the ability of the built-in WOL feature to wake up servers ([PR](https://github.com/xbmc/xbmc/pull/25707
))
- Fixed the potential crash occurred when the system contained environment variables name with a length of more than 64 characters ([PR](https://github.com/xbmc/xbmc/pull/25880)) 
- Fixed HDR feature did not work on Windows 11 24H2 under some circumstances ([PR](https://github.com/xbmc/xbmc/pull/26135)) 
- Improved support for WCG displays on Windows 11 24H2 ([PR](https://github.com/xbmc/xbmc/pull/26135)) 


We always want to thank everyone who has helped us track down and fix any issues. We endeavour to minimise the issues everyone experiences, but with such a large project, and the fact everyone contributing to Kodi is a volunteer, issues and bugs are a part of life. If you happen to experience any bugs/issues, don't hesitate to reach out on the forums, or raise an issue on Github.

As this is a point release, there are no major changes since the previous version, and you should be fine to install this straight over the top of any existing Kodi 21.x installation - indeed, this will happen automatically on many platforms. However, as for all software installations, back up your userdata beforehand if you've any doubts or have anything you can't afford to lose (and definitely do this if you're going for a major version upgrade).

A list of all changes for this version can be found at [GitHub](https://github.com/xbmc/xbmc/milestone/169?closed=1). If you want to read back on the full history of v21 itself, or of previous versions, you can find the corresponding articles in the relevant [blog posts](https://kodi.tv/blog/tag/release).

Application deployment on different platforms (notably the Microsoft Store) can vary considerably due to circumstances outside of our control, so just be patient, and the update will inevitably find its way through.

**Android Deployment**

We always do what's known as a "staged" deployment roll out for Android. So if you didn't  receive the update immediately, it should have come through over the following week or so, and rollout should now be complete. 