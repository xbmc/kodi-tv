---
title: "Kodi v17.4 RC1: Just a bunch of fixes"
date: 2017-08-10T22:41:08Z
tags:
  - Prerelease
author: Martijn Kaijser
featured_image:
  src: /images/blog/o-CAT-LAPTOP-facebook.webp
  title: "o-CAT-LAPTOP-facebook"
  alt: "o-CAT-LAPTOP-facebook"
---

It has been a while since we released 17.3 release where we fixed several issues. Now the time has come to do another where we tackled several more issues that were identified. Although we already moved on with development towards v18 we do take the time to fix issues for the current release when we can. To give these fixes a proper test run before we call it final we first want to make this release candidate available for the wider audience who might be facing some of these issues we have fixed. Just browse the list below and give it a try.

#### Fixes done in this release:

- Potentially fix crashing on Windows due to an issue in Python
- Potentially fix crashing on Windows when enabling zeroconf
- Fix sporadic crash on Windows when installing or updating add-ons
- Fix issue for users with reverse proxies attempting to forward websockets.
- Fix possible issue if Linux distro uses system ffmpeg and cause black screen with 10-bit H.265
- Properly throttlescraping music information online to prevent overloading the provider
- Fix native keyboard on iOS 11
- Fix potential crash on Android O loading App icons
- Fix non showing Kodi banner on Android O
- Fix potential crash on Android with certain keymaps
- Fix wrong detection of VP6 and VP8 videocodec on Android
- Update FFmpeg to 3.1.9
- Set hard requirement to use FFmpeg 3.1.x only
- Fix for Hangup when viewing recording and pressing next/previous
- Fix merged scraped album type and label correctly with that derived from tags from music files

#### What else is new?

In the bugfix releases we never include any new features. They are as feature complete as the initial version with the difference is they contain stability and usability fixes. If you are curious you can read up on all the v17 changes here: [Kodi v17.0 “Krypton”](https://kodi.tv/kodi17)

#### Where can I download Kodi?

As alway you can find the official builds on our [download page](https://kodi.tv/download). Then click on the platform of choice and choose _pre release build_. You can install these build just on top of your current Kodi installation without doing a reinstall or cleanup as we do a full migration if needed. All you add-ons or installed skin will keep working.

##### Apparel, donations or getting involved

Getting involved is quite easy. We encourage you to report problems with these builds on our forum first and after that, if asked, submit bugs on Trac (following this guide: [How to submit a bug report](https://kodi.wiki/view/HOW-TO:Submit_a_bug_report)). Do note that we need detailed information so we can investigate the issue. We also appreciate providing support in our [Forums](https://forum.kodi.tv/ "Kodi Forums") where you can. You can of course also follow or help promote Kodi on all available social networks. Read more on the [get involved](https://kodi.tv/get-involved) page. We are always happy to receive a [donation](https://kodi.tv/contribute/donate "Donate") by which you show your support and appreciation, and t-shirts and Raspberry Pi cases may still be found on the sidebar for purchase. All donations and other income goes towards the XBMC foundation and are typically used for travel to attend conferences, any necessary paperwork and legal fees, purchasing necessary hardware and licenses for developers and hopefully the yearly XBMC Foundation Developers Conference.
