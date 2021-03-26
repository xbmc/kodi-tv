---
title: "Kodi v17.3: A minor bug fix and security release"
date: 2017-05-24T06:31:33Z
author: Martijn Kaijser
featured_image:
  src: /images/blog/risk-knob.webp
  title: "risk-knob"
  alt: "risk-knob"
---

Sorry for this quick bump to v17.3 however we deemed it necessary. In the previous v17.2 we had a slight issue due to packaging certain binary add-ons like PVR, visualisation and Inputstream. Sadly we only uncovered this too late after release. Additionally on the older distros like Ubuntu 14.04 in combination with the available GCC 4.8 compiler an issue surfaced which we had to fix as well. This v17.3 release fixed both these issues and should be completely working again including the missing add-ons.

#### Fixes done in this release:

- Fixed missing binary add-ons on release time
- Fixed crash on older distros like Ubuntu 14.04 with GCC 4.8 compiler

From previous v17.2 release:

- Fix selection after channelgroup switching in PVR guide window
- Fix handling of gaps that caused eradic behaviour in EPG grid
- Allow backing out of fullscreen pictures by mapping longpress guesture
- Quick fix for wake up command not being called in PVR power management
- Use alternative method to check if platform updates have been installed on Windows
- Set the minimum version in the code which is currently OSX 10.8
- Fix possible security flaw which could abused .zip files which try to traverse to a parent directory
- Use the correct ttc font from the video file for subtitles on Windows
- Detect and delete zero-byte database files which causes crashes

#### Security

You may have read in the news that [malicious subtitle zip files](https://blog.checkpoint.com/2017/05/23/hacked-in-translation/) could potentionally infect and harm your media player including Kodi. When Check Point researchers uncovered this flaw they contacted us up front to let us know about this flaw. Our developers fixed this secuity gap and have added the fix to this v17.2 release. As such we highly encourage all users to install this latest version! Any previous Kodi version will not get any security patch. We have began the roll out of this version and Android Play Store as well as Windows Store have this update pending and will roll out as soon as possible. Please be patient if you are using these store versions. Our official download page of course has the regular install files available for the supported platforms.

To be clear this possible vunrability is only present when you first enable a subtitle dowload add-on and then actually download zipped subtitles. Any subtitles that you already have as text file, are embedded in the video stream or are included with you DVD or Blurays are safe.

#### What else is new?

In the bugfix releases we never include any new features. They are as feature complete as the initial version with the diference is they contain stability and usability fixes. If you are curious you can read up on all the v17 changes here: [Kodi v17.0 “Krypton”](https://kodi.tv/kodi17)

#### Only get static noise on Android?

if you have a Android device that only outputs static noise during playback we'd urge you to contact the manufacturer of your device. Recently we saw that Samsung released their Android 7.0 Nougat update for certain phone range that basically has broken audio support. This is something we as Team Kodi are not going to fix as it's caused by a bug in their firmware. Only option you have is either stay at Kodi v16 or start contacting your device manufacturer and urge them to fix this issue.

#### Where can I download Kodi?

As alway you can find the official builds on our [download page](https://kodi.tv/download). Then click on the platform of choice and choose _release build_. You can install these build just on top of your current Kodi installation without doing a reinstall or cleanup as we do a full migration if needed. All you add-ons or installed skin will keep working.

##### Apparel, donations or getting involved

[![](https://xbmcfoundation.prod.dd:8083/sites/default/files/wysiwyg/uploads/darkshirt.webp)](https://teespring.com/stores/kodi-t-shirt-store)With Kodi 18 having a galaxy far away theme to it, we decided to take inspiration from the baddest of baddies with this shirt. Vader pioneered black on black. We figured we'd follow his lead. You of course also order other shirt in our [shop](https://kodi.tv/store). Getting involved is quite easy. We encourage you to report problems with these builds on our forum first and after that, if asked, submit bugs on Trac (following this guide: [How to submit a bug report](https://kodi.wiki/view/HOW-TO:Submit_a_bug_report)). Do note that we need detailed information so we can investigate the issue. We also appreciate providing support in our [Forums](https://forum.kodi.tv/ "Kodi Forums") where you can. You can of course also follow or help promote Kodi on all available social networks. Read more on the [get involved](https://kodi.tv/get-involved) page. We are always happy to receive a [donation](https://kodi.tv/contribute/donate "Donate") by which you show your support and appreciation, and t-shirts and Raspberry Pi cases may still be found on the sidebar for purchase. All donations and other income goes towards the XBMC foundation and are typically used for travel to attend conferences, any necessary paperwork and legal fees, purchasing necessary hardware and licenses for developers and hopefully the yearly XBMC Foundation Developers Conference.
