---
title: Kodi 20.5 "Nexus" - Release
date: 2024-03-03T10:05:10.317Z
author: Team Kodi
tags:
  - Release
featured_image:
  src: /images/blog/kodi-20.5-nexus-splash.webp
  title: Kodi 20.5 "Nexus" Splash Screen
  alt: Kodi 20.5 "Nexus" Splash Screen - a blue Kodi logo sits in the centre of a
    black page, around it, a dial - a gauge or chronograph, perhaps.
---
Nexus just won't end, it seems: we're back already, this time what we hope will be the final release for the Nexus line. Welcome to 20.5!

An assortment of bug fixes, some backports, no real new features. Full changelog since 20.4 on [Github](https://github.com/xbmc/xbmc/compare/20.4-Nexus...20.5-Nexus), as usual.

### **Release notes**

**Input**

* Reverted a number of controller changes that caused massive failures on Android devices. Input handling will now be the same as what was available in 20.3.

**Platform Specific**

* Android

  * Some great detective work was done by **@spdfrk** for a fix that meant Kodi would close the app during potential colour mode changes.
  * A backport by **@fritsch** that intends to bring Nexus inline with Omega behaviour for AudioTrack on Android. This means that some device users will need to add an extra setting to their `AdvancedSettings.xml` file. Details can be seen at https://github.com/xbmc/xbmc/pull/24729.
* Linux

  * Branding colours have been added to the metainfo file so that they can be used by things like the Flathub store. Info about this can be seen at the Flathub blog post https://docs.flathub.org/blog/introducing-app-brand-colors/.
* iOS/tvOS

  * A change that wasn't actually in Kodi's codebase, but a fix nonetheless, means that the `inputstream.ffmpegdirect` addon is now available to the iOS/tvOS release debs.

... plus, of course, some behind-the-scenes fixes and updates for e.g. library versions.

Thanks, as always, to everyone who has helped us track down and fix any issues. We endeavour to minimise the issues everyone experiences, but with such a large project, and the fact everyone contributing to Kodi is a volunteer, issues and bugs are a part of life. if you happen to experience any bugs/issues, don't hesitate to reach out on the forums, or raise an issue on Github.

As this is a point release, there are no major changes since the previous version, and you should be fine to install this straight over the top of any existing Kodi 20.x installation - indeed, this will happen automatically on many platforms. However, as for all software installations, back up your userdata beforehand if you've any doubts or have anything you can't afford to lose (and definitely do this if you're going for a major version upgrade).

A list of all changes for this version can be found at [GitHub](https://github.com/xbmc/xbmc/milestone/165?closed=1). If you want to read back on the full history of v20 itself, or of previous versions, you can find the corresponding articles in the relevant [blog posts](https://kodi.tv/blog/tag/release).

Application deployment on different platforms (notably the Microsoft Store) can vary considerably due to circumstances outside of our control, so just be patient, and the update will inevitably find its way through.

**Android Deployment**

We always do what's known as a "staged" deployment roll out for Android. So if you don't receive the update immediately, be patient, as it will come through over the next week. As the majority of fixes are related to Android Playstore deployment, we will be cautious with the deployment time. If you do receive 20.5 and have any issues with the Playstore deployment, please let us know as soon as possible.