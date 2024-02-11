---
title: Kodi 20.4 "Nexus" - Release
date: 2024-02-11T14:22:31.657Z
author: Team Kodi
tags:
  - Release
featured_image:
  title: Kodi 20.4 "Nexus" Splash Screen
  alt: Kodi 20.4 "Nexus" Splash Screen - a blue Kodi logo sits in the centre of a
    black page, around it, a dial - a gauge or chronograph, perhaps.
  src: /images/blog/kodi-20.4-nexus-splash.webp
---
It looks like one last hurrah was premature for the "Nexus" line: once more we are back with a new 20.4 release.

An assortment of bug fixes, some backports, no real new features. Full changelog since 20.3 on [Github](https://github.com/xbmc/xbmc/compare/20.3-Nexus...20.4-Nexus), as usual.

### **Release notes**

**Build**
- A backport aimed at fixing the failure rate of binary addon builds has been merged by @garbear. 

**Input**
* Update to the controller addons.

**Platform Specific**
- Android
  - Several fixes have been backported from master to fix deployment on the Google Play. Thanks to @joseluismarti for working with us on these.
  - A number of fixes to resolve input issues (remote/controllers) for Android have been backported.

- iOS/tvOS
  - A long-time-coming fix to reduce black screen playback when interlaced content is played on iOS/tvOS. Users should no longer have to specifically disable VTB Hardware playback for most interlaced content. Please keep in mind some methods of content playback (HTTP URLs provided in .strm files) will still be affected.
  - A memory leak with game controllers on iOS/tvOS has been made by @kambala-decapitator.

- tvOS
  - @kambala-decapitator fixed what seems to be a long standing bug regarding framework `plist` metadata for shared library frameworks.

- Windows
  - A fix for `AESinkWASAPI` to improve fallback when the exact output channel layout is not supported by driver/hardware.

Thanks, as always, to everyone who has helped us track down and fix any issues. We endeavour to minimise the issues everyone experiences, but with such a large project, and the fact everyone contributing to Kodi is a volunteer, issues and bugs are a part of life. if you happen to experience any bugs/issues, don't hesitate to reach out on the forums, or raise an issue on Github.

As this is a point release, there are no major changes since the previous version, and you should be fine to install this straight over the top of any existing Kodi 20.x installation - indeed, this will happen automatically on many platforms. However, as for all software installations, back up your userdata beforehand if you've any doubts or have anything you can't afford to lose (and definitely do this if you're going for a major version upgrade).

A list of all changes for this version can be found at [GitHub](https://github.com/xbmc/xbmc/milestone/163?closed=1). If you want to read back on the full history of v20 itself, or of previous versions, you can find the corresponding articles in the relevant [blog posts](https://kodi.tv/blog/tag/release).

Application deployment on different platforms (notably the Microsoft Store) can vary considerably due to circumstances outside of our control, so just be patient, and the update will inevitably find its way through.

**Android Deployment**

We always do what's known as a "staged" deployment roll out for Android. So if you don't receive the update immediately, be patient, as it will come through over the next week. As the majority of fixes are related to Android Playstore deployment, we will be cautious with the deployment time. If you do receive 20.4 and have any issues with the Playstore deployment, please let us know as soon as possible.