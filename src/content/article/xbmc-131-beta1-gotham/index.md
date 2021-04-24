---
title: "XBMC 13.1 beta1 Gotham"
date: 2014-05-11T04:00:00Z
tags:
  - Prerelease
author: Martijn Kaijser
featured_image:
  src: /images/blog/xbmc-gotham-13_1-beta.webp
  title: "xbmc-gotham-13_1-beta"
  alt: "xbmc-gotham-13_1-beta"
---

Only a week ago we released the stable version of 13.0 codename “Gotham”. So far, from the responses we have received, people are pretty excited about it and are happily using it. Now that more people are starting to use the stable release, several issues popped up, that we now hope to address with this 13.1 beta1 release. Do note that this release contain only fixes and no new features. So it should be safe to install on top of current 13.0 release. In due time we will of course release a 13.1 stable version after we are confident there are no regressions compared to 13.0 stable.

Fixes

- - Better recovery of VDPAU on errors.
- - Fixes for cropping of interlaced content using VDPAU.
- - Fix for FLAC tracks with large embedded images not playing.
- - Fix for crash if librtmp wasn’t available.
- - Fix for ffmpeg building on linux using later versions of librtmp.
- - Fix for broken m4a, mp4 playback with paplayer.
- - Fix for the hint text not being shown in editcontrols once unfocused.
- - Fix minor memory leak in PlayMedia builtin function.
- - Fix albumartist use in song smartplaylists.
- - Use unique client broadcast UID in the PVR api.

## Important notice

**Linux users** Ubuntu 12.10 and 13.10 have been deprecated by canonical/ubuntu. This means there will be no more XBMC builds available for those version. You will have to upgrade you Ubuntu to a newer version to receive XBMC updates again.

**Backup your data** Before upgrading we would recommend you create a backup of your current userdata folder which contains all your current settings and database files. In the unlikely case that something went wrong during your upgrade, a backup will ensure that you are still able to go back to the previous state. Where the userdata folder is located on your system can be found on our [userdata](https://kodi.wiki/view/Userdata) wiki page. Do note that when first upgrading from Frodo 12.x it may take some time until you see the familiar homescreen as several internal upgrades need to be performed.

**Add-ons** As mentioned in previous blog posts, due to changes related to our add-on system and skin improvement, certain plugins, scripts and skins may become incompatible when upgrading from Frodo to Gotham. Sadly this is part of the continuing process of development and improvement. We hope the impact of these changes will be limited but we feel a warning would be beneficial. If there are any addons you particularly depend on, we advise that you visit the forum thread of that addon to see if the author has ensured support in XBMC 13.

**Installing on OSX** As XBMC is an unsigned application on OSX, you may need to go through a slightly different process to start it the first time. After you have copied XBMC to the Applications folder, you will need to “right click” or “two finger click” XBMC from within the Applications folder and select “Open” and then accept the warning. You should only need to do this the first time you run XBMC.

**Code base** Since we have branched the XBMC core code for Gotham off from our main development master branch on Github it is important that you also build from the correct Github branch: <https://github.com/xbmc/xbmc/tree/Gotham>

## Conclusion

For the downloads go to:

- - [Windows](https://kodi.wiki/download/ "XBMC for Windows")
- - [OSX](https://kodi.wiki/download/ "XBMC for OSX") and [OSX-x86-64](https://kodi.wiki/download/ "XBMC for 64bit OSX")
- - [Android-ARM](https://kodi.wiki/download/ "XBMC for Android") and [Android-x86](https://kodi.wiki/download/ "XBMC for Android")
- - [Apple TV](https://kodi.wiki/view/HOW-TO:Install_XBMC_on_Apple_TV_2 "Apple TV instuctions") and [iOS](https://kodi.wiki/view/HOW-TO:Install_XBMC_on_iPad/iPhone/iPod_touch "iOS installation instructions") installation instructions
- - Ubuntu users, please point to the _“unstable PPA”_ as described in the [Linux instructions](https://kodi.wiki/view/HOW-TO:Install_XBMC_for_Linux "XBMC for Linux Install Instructions").
- - For [OpenELEC](https://openelec.tv/news/22-releases/122-beta-openelec-4-0-beta-7-released) releases visit their website

### How to Contribute

If you use these builds, we encourage you to submit bugs in Trac with sufficient information (following this guide: [How to submit a bug report](https://kodi.wiki/view/HOW-TO:Submit_a_bug_report)), provide support in our [Forums](https://forum.kodi.tv/ "XBMC Forums") where you can, or [donate](https://kodi.wiki/contribute/donate/ "XBMC Foundation Donations") to the Foundation if you like. For a current FAQ on XBMC 13, visit our [Gotham FAQ](<https://kodi.wiki/view/XBMC_v13_(Gotham)_FAQ> "XBMC 13 FAQ").
