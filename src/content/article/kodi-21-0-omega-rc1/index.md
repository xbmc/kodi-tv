---
title: Kodi 21.0 "Omega" RC1
date: 2024-03-01T10:00:32.409Z
author: Team Kodi
tags:
  - Developer
  - Prerelease
featured_image:
  title: Kodi 21 "Omega" Splash Screen
  alt: Kodi 21 "Omega" Splash Screen - the Kodi logo sits at the centre of a black
    screen, a stylised Greek letter "Omega" around it.
  src: /images/blog/kodi_splash_v21.0_omega_rc_1080p.webp
---
Can you feel the excitement building in the air? Well, you should, as we are ready for our first Release Candidate for Kodi "Omega"!

This is a major release, so, as you'd expect, it comes with many new features. However, with a core change to FFmpeg 6.0, there is a very good chance that some regressions may occur.  As such, please be aware that installing this will most likely break things, and we'd really like your help at that point to identify the problems and get them fixed. Please raise [Github issues](https://github.com/xbmc/xbmc/issues) with full debug logs to help us resolve any issues you wonderful testers come across.

First, we'd like to make a few targeted announcements.

**Android users**

Many users may still be on the Kodi testing track for their Android devices. It's far easier to leave the testing track from a 'phone-based device, but be aware that if your device is on the testing track, we will be continuing to deploy Beta 3 releases over the next week or so. If you wish to opt out of the testing group, one way you can is by visiting the following link [Google Play - Kodi testing track](https://play.google.com/apps/testing/org.xbmc.kodi). From here, you can opt out for your Google Play account. This is the best (and possibly only) way to opt out on many Android TV devices (e.g. Nvidia Shields).

With that said, for those adventurous types who would like to help us with testing, you can use the same link to opt in for a Google Play account.

**Xbox users**

As we do not have a testing track available for Xbox users, we will continue our customary deployment of RC1+ of our major releases to the Microsoft App store. This means that Xbox users will start to see their Nexus deployments updated to Omega RC1.

If you do not wish to receive this update, the only option we are aware of is for you to disable auto updates for all apps/games on your Xbox

- You can disable auto updates to games and apps in the Microsoft Store through the Store's settings. 

  -  Select the `Start` screen, then select `Microsoft Store`.
  -  In `Microsoft Store` at the upper right, select the `account` menu (the three dots) and then select `Settings`.
  -  Under `App updates`, set `Update apps automatically` to `Off`.

**Skin Developers**

An API bump has been made for Kodi 21's testing cycle. See the following PRs for details:

https://github.com/xbmc/xbmc/pull/23926

https://github.com/xbmc/xbmc/pull/23862

This will require changes and submissions to the Omega branch for skins for those who submit to the Kodi Repository. Reach out on the forums if you have any questions/concerns.

Please note, https://github.com/xbmc/xbmc/pull/23927 has been merged shortly after Beta 2, and all skins will need to  update the GUI version number to be available in Omega repos for any builds (including nightlies) after Beta 2.

The following forum thread has the skinning change info for Omega: https://forum.kodi.tv/showthread.php?tid=372280&pid=3174566#pid3174566

And now, for the list of changes for RC 1.

**Estuary**
- A consistency fix was made by @Hitcher to make OSD controls for some buttons to just be disabled, rather than hidden, so the buttons stay shown in a consistent manner.

**Filesystem**
- A partial revert has been made that fixes some binary addons not being able to correctly parse some xml files.

**General**
- @ksooo continues to cleanup things related to the Video Version feature. This time he has fixed a label skinners would use to display a media name that would be blank under certain circumstances.

**Music**
- audiobooks were showing their last chapter with no duration; this has been fixed by @the-black-eagle.

**Platform Specifics**
- **Android**:
  - Cleanups to build/package files have been made by @joseluismarti. This helps get the codebase nice and clean for the newer Android SDKs leading into the future, meaning we can more easily backport to Omega when we are making changes for v22 "P" in the future. 

- **Linux**:
  - @fritsch, our resident audio expert, has submitted a change to allow Pipewire to properly identify HDMI for passthrough usage.
 
- **macOS**:
  - @enen92 has implemented Hotkeycontroller for Media keys on macOS. This allows Kodi to more accurately capture and handle media related keys and allow us to play nicer with other running apps on a system expecting to use the same media keys.

- **Windows**:
  - @thexai has submitted some colour accuracy changes for 10bit SDR/HDR colour mapping.

**VideoPlayer**
- @popcornmix has tracked down a variable init bug that helps to reduce video stalls under certain conditions.

**Known Issues**

You can see open issues on our tracker at https://github.com/xbmc/xbmc/issues. However, to call out a couple of specifics, please be aware of the following if you're planning on upgrading:

- There are seek issues with multi-part MP4 files on Android (https://github.com/xbmc/xbmc/issues/23673).
- We've had reports that the new splash screen looks like an OpenGL corruption; we know, it's not a problem, so don't panic. We'd be happy to have your artwork contributions if you'd like to work on an alternative. 
- If remote sources are unavailable at startup, users are seeing significant delays while waiting (https://github.com/xbmc/xbmc/issues/23958).

We continue to march forward to what we hope will be a successful v21 Omega release.

If you love to live on the bleeding edge, you can get RC 1 from [here](https://kodi.tv/download). Select your platform of choice, and look in the "Prerelease" section. Again, though, please: expect some breakage, don't use this as your daily installation unless you know how to get things working again, and please share your experiences back with us so we can really get going on those bugs.

There is always a great deal more changes/fixes/updates than what we can highlight in these reports, so as usual you can see a fuller list of what has been merged between v21 and v20 [here](https://github.com/xbmc/xbmc/compare/Nexus...xbmc:21.0rc1-Omega). For a more targeted look at the changes made since v21 Beta 3, you can see those changes [here](https://github.com/xbmc/xbmc/compare/21.0b3-Omega...21.0rc1-Omega).