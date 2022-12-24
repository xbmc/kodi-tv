---
title: Kodi "Matrix" 19.5 Release
date: 2022-12-24T13:19:47.351Z
author: Prof Yaffle
tags:
  - Release
featured_image:
  title: Kodi 19.5 "Matrix" Splash Screen
  alt: 'Kodi 19.5 "Matrix" Splash Screen - a blue Kodi logo sits in the centre,
    surrounded and overlaid with a cascade of random computer characters,
    falling like rain from the top of the screen. Below the image, in blue text:
    "Kodi 19.4 - Matrix".'
  src: /images/blog/kodi-19.5-splash.jpg
---
Happy Holidays, everyone! To celebrate, here we have release 19.5. This release caps off the v19 Matrix development cycle - we are not intending anything further now until 20.0 "Nexus".

Without further fanfare, then I give you Kodi "Matrix" 19.5: more bug fixes, some backports, no real new features. Full changelog since 19.4 on [Github](https://github.com/xbmc/xbmc/compare/19.4-Matrix...19.5-Matrix), as usual.

Thanks, as always, to everyone who has helped us track down and fix any issues.

As this is a point release, there are no major changes since the previous version, and you should be fine to install this straight over the top of any existing Kodi 19.x installation - indeed, this will happen automatically on many platforms. However, as for all software installations, back up your userdata beforehand if you've any doubts or have anything you can't afford to lose (and definitely do this if you're going for a major version upgrade).

If you're interested, you can read the merged PRs [here](https://github.com/xbmc/xbmc/pulls?q=is%3Apr+sort%3Aupdated-desc+milestone%3A%22Matrix+19.5%22+label%3A%22v19+Matrix%22+). If you want to read back on the full history of v19 itself, or of previous versions, you can find the corresponding articles in the relevant [blog posts](https://kodi.tv/blog/tag/release).

This release will NOT be released on either the Google Play store, or the Microsoft App store. With v20 "Nexus" Final extremely close, as well as difficulties with the Google Play store submission for v19, there is no possibility to do store submissions for 19.5. As always, we provide the packages for all platforms on the Kodi mirror website if you wish to install on your device.

**Android Deployment**

Please note that we are currently unable to provide this update via the Google Play Store. An updated Google requirement demands that apps now target API level 31 (Android 12) as a minimum, while Kodi v19 targets API level 29 (Android 10). 

As such, we're unable to upload 19.5 to the Play Store, although 19.3 will remain available until 20.0 is available for the masses. However, for those who want the new release, 19.5 can be downloaded from our servers and installed manually