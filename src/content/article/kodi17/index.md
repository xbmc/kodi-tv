---
title: "Kodi 17.0"
date: 2017-02-04T03:00:00Z
author: Kib
featured_image:
  src: /images/blog/Kodi171.webp
  title: "Kodi171"
  alt: "Kodi171"
---

Team Kodi are very happy to announce the immediate availability of Kodi 17.0 (Krypton) for Windows, Android, MacOS and iOS. Krypton brings updated default user interfaces, better organisation of settings, and many under-the-hood changes on VideoPlayer, Music Library, PVR, audio on Android, and thousands of small bugfixes and improvements to stability. Note: Kodi 17 downloads will be available in [our Ubuntu PPA](https://launchpad.net/~team-xbmc/+archive/ubuntu/ppa "Kodi Stable PPA") soon, so stay tuned for updates!

### New look

Kodi’s user interfaces receive a major revision in Kodi 17.0. The new default skin [Estuary](/article/kodi-v17-krypton-default-skin-next-gen "Estuary") has been specially designed as a [10-foot interface](https://en.wikipedia.org/wiki/10-foot_user_interface "10-foot interface"), while touchscreen devices have a new touch-enabled skin called [Estouchy](/article/kodi-v17-krypton-default-skin-next-gen "Estuary"). To complete the overhaul we are now shipping [Chorus2](/article/new-webinterface-called-chorus2 "Chorus2") as the default web interface.

[gallery:1]

### Audio and Video

Our video engine is undergoing a multi-phase rewrite and Kodi 17.0 delivers the next wave of changes with improvements to stability, audio/video synchronisation, refresh rate switching and decoding/encoding of video on all platforms. New inputstream add-ons extend support for streaming protocols like RTMP, MPEG-DASH, SmoothStream and NXMSL. Other new additions include hardware-accelerated DVD playback and OpenGL dithering when performing colour conversion, and Kodi on Linux can now use 3DLUT and simple ICC profiles to colour-correct displays. Audio sinks on most platforms have also been refined.

### Music

Changes to the music library bring improved performance for tag scraping, support for mood and artist role tags, and increased browsing speed for larger libraries.

### Live TV and PVR

Kodi 17.0 has numerous improvements to Live TV and PVR functionality. Changes start in the user interface with widgets for _Recent Recordings_ and *Last Played Channel*s on the home screen, and the ability to choose showing the PVR guide or Channel window when Kodi starts. The PVR user interface has seen much love. Channels can be sorted by Last Played. TV and Radio recordings are now shown in separate windows. There is a huge performance increase when browsing the guide window. Scheduling of recordings had a complete rewrite with both timers and timer rules now displayed in separate windows, and instant recording options can be customised. There are now 15+ PVR add-ons and most have been updated, including _VDR VNSI_, _Tvheadend_, _HDHomeRun_, _Enigma2_ and _MythTV_. Kodi now comes with support in the back-end for _Digital Devices Octopus Net_ and asynchronous connections to back-ends which helps with connection stability.

### Android

Kodi 17.0 is now standards-compliant with Android’s official Audio API and requires Android 5.0 or higher as the minimum version. DTS-HD, DTS-X, Dolby TrueHD, and Dolby ATMOS passthrough are now supported on devices that implement AudioTrack v23 or higher. Devices with firmware that does not follow this standard will not support passthrough. Support for 4K video and output and improvements to refresh rate switching and HEVC, VC-1 / WMV 9, and VP9 playback on supported hardware are the icing on the cake.

### Windows

Kodi 17.0 is the first version [available through the Windows Store](/article/kodi-goes-windows-store "Kodi 17 in Windows Store") and is now one of the most popular downloads in the store. The version in the Store wraps our normal x86 application in a UWP wrapper for installing on Windows 10. The normal installer from the download section of the website can be used on Windows 7 and 8 (and 10).

### Changelog

The [Kodi 17 changelog](<https://kodi.wiki/view/Kodi_v17_(Krypton)_changelog> "Kodi 17 changelog") page in the wiki hosts a human-readable list of changes in Kodi 17.0 while those seeking a more technical listing can view the [merged pull requests](https://github.com/xbmc/xbmc/pulls?page=1&q=label%3A%22v17+Krypton%22+is%3Aclosed "merged pull requests") on our project’s GitHub repository.

### Thanks

Thanks go out to all the developers who submitted code; whether thousands of lines to add new features or a couple of lines to fix a small bug. Thanks go out to the ecosystem of add-on and skin developers who updated or created new add-ons to use new functionality in Kodi 17.0. Thanks go out to the many beta and release candidate testers who took time to file bug reports, test fixes and assist the team with resolving issues. Finally.. Special thanks go our to our tireless team of forum moderators, and all those who spend time in our forum and enjoy being part of our community to share tips and tricks and help others.

### Help!

If you experience issues please post in the [General Support section](https://forum.kodi.tv/forumdisplay.php?fid=111 "General support") of our forum. (Please be mindful of our forum rules when posting!). If you have fixes for issues please submit a pull-request with your changes to our master branch on GitHub. We also welcome users who want to help answer questions in the forum or write articles for the wiki.

### Donate

To show support and appreciation for Kodi please consider [making a donation](/contribute/donate "Donate to Kodi") or purchasing t-shirts and Raspberry Pi Flirc cases. All donations or profits go to the XBMC Foundation and are typically used for team travel to attend conferences, operating expenses, hardware and software licenses for developers, legal fees, and the annual developer conference.

### Comment

Comments have been disabled to make sure the site can handle the traffic. If you’d like to comment, feel free to do so in our [forum release announcement thread](https://forum.kodi.tv/showthread.php?tid=306030 "Kodi 17 Released").
