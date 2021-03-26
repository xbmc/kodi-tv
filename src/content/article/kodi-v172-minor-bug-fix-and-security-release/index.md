---
title: "Kodi v17.2: A minor bug fix and security release"
date: 2017-05-20T21:02:42Z
author: Martijn Kaijser
featured_image:
  src: /images/blog/risk-knob.webp
  title: "risk-knob"
  alt: "risk-knob"
---

Update: We have now released v17.3 to solve the problems mentioned below: [v17.3 announcement](https://kodi.tv/article/kodi-v173-minor-bug-fix-and-security-release)

**Update:** Due to packaging issue after release some add-ons like PVR, visualisation and Inputstream are missing. Also on Ubuntu 14.04 an issue came to light. We will release v17.3 as soon as we can to solve this problem.

We're happy to present you this small bugfix release for the v17 “Krypton” range which contains our continuous effort to further improve the v17 range. This release consist of several fixes on top of the v17 and v17.1 release to further improve stability and usablity. Additionally this also inclused a security patch regarding subtitle zip files. We sure would like to thank every one involved with either development, testing or simply helping out others with answering their questions.

#### Fixes done in this release:

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

#### What else is new?

In the bugfix releases we never include any new features. They are as feature complete as the initial version with the diference is they contain stability and usability fixes. If you are curious you can read up on all the v17 changes here: [Kodi v17.0 “Krypton”](https://kodi.tv/kodi17)

#### Where can I download Kodi?

As alway you can find the official builds on our [download page](https://kodi.tv/download). Then click on the platform of choice and choose _release build_. You can install these build just on top of your current Kodi installation without doing a reinstall or cleanup as we do a full migration if needed. All you add-ons or installed skin will keep working.

##### Apparel, donations or getting involved

[![](https://kodi.tv/sites/default/files/wysiwyg/uploads/kodi-black-on-black.webp)](https://kodi.tv/product/kodi-apparel)With Kodi 18 having a galaxy far away theme to it, we decided to take inspiration from the baddest of baddies with this shirt. Vader pioneered black on black. We figured we'd follow his lead. You of course also order other shirt in our [shop](https://kodi.tv/store).

Getting involved is quite easy. We encourage you to report problems with these builds on our forum first and after that, if asked, submit bugs on Trac (following this guide: [How to submit a bug report](https://kodi.wiki/view/HOW-TO:Submit_a_bug_report)). Do note that we need detailed information so we can investigate the issue. We also appreciate providing support in our [Forums](https://forum.kodi.tv/ "Kodi Forums") where you can. You can of course also follow or help promote Kodi on all available social networks. Read more on the [get involved](https://kodi.tv/get-involved) page. We are always happy to receive a [donation](https://kodi.tv/contribute/donate "Donate") by which you show your support and appreciation, and t-shirts and Raspberry Pi cases may still be found on the sidebar for purchase. All donations and other income goes towards the XBMC foundation and are typically used for travel to attend conferences, any necessary paperwork and legal fees, purchasing necessary hardware and licenses for developers and hopefully the yearly XBMC Foundation Developers Conference.
