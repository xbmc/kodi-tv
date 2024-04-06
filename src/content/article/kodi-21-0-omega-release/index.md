---
title: Kodi 21.0 "Omega" - Release
date: 2024-04-06T16:13:41.657Z
author: Team Kodi
tags:
  - Release
featured_image:
  title: Kodi 21 "Omega" Splash Screen
  alt: Kodi 21 "Omega" Splash Screen - the Kodi logo sits at the centre of a black
    screen, a stylised Greek letter "Omega" around it.
  src: /images/blog/kodi_21.0_omega_splash.webp
---
**It's time!** We are very pleased to present the latest and greatest release of Kodi, v21.0 "Omega".

With this release we have seen over 3,750 commits since v20.0 "Nexus" was available to the world on January 15th, 2023. As always, this has been a huge effort from many contributors, testers and supporters. Thanks go out to our team members, plus everyone in our community who sent in a pull request, tested and gave feedback, or provided support to users on the forum. We always appreciate your contribution to making Kodi better.

Let's review some of the changes you can expect:

### Major Features

**FFmpeg 6**

Kodi relies significantly on FFmpeg to do a lot of heavy lifting for us. Many developers have contributed to upgrading the project to make use the the newer FFmpeg releases over the past 15 months, initially starting with targeting FFmpeg 5, but later updating to FFmpeg 6. We are always greatly appreciative of the work of all of the Open Source software projects that we rely on on our journey to bring you Kodi.

**DolbyVision On-the-Fly Profile Conversion**

For our Android users, a fantastic contribution from **quietvoid** allows users to convert some less-well supported DV profile types to more well-supported profiles.

**macOS Now Uses "Native" Windowing**

Another change that has been years in the making. This was started by some amazing developers many years ago, and we have now been able to finally remove the last remnants of SDL library usage in Kodi. We now use native implementations for window displays on the Apple macOS platform.

**A New Platform: webOS** 

A new platform can now run Kodi natively: a port to LG webOS TVs has been worked out by some amazing developers who have reverse engineered huge amounts of the webOS media pipelines. One of our newest team members, **sundermann**, has helped shepherd our newest supported platform, to extend the reach of Kodi to even more devices.

**In-game Player Viewer**

Controller configuration for games gets a little better in v21: a window has been added in-game to view which game port each player's controller is currently connected to.

**Behind the Scenes**

A large majority of changes are "under the hood" and invisible to users but improve the stability, performance, and safety of Kodi: API changes have been made to evolve Python and binary add-ons and bring new skinning features; there are updates to Kodi dependencies on most if not all Kodi platforms; fixes from regular use of code static-analysis tools, database migration fixes for a smoother update ... and lots more.

There are too many individual changes to detail everything. If you would like to know more, please look back through the Omega Alpha to RC2 [release announcements](https://kodi.tv/blog/tag/release) and review the GitHub changelog [here](https://github.com/xbmc/xbmc/compare/20.0-Nexus...21.0-Omega).

Time doesn't stand still, and we have already branched Kodi v22 "P*" for development. Thank you again for your continued support as we continue to make Kodi great!

**Help Wanted!**

If you experience any issues or find any remaining bugs, please post in the [General Support](https://forum.kodi.tv/forumdisplay.php?fid=111) section of our forum. If you have fixes for issues please submit a pull request with your changes to our [master branch on GitHub](https://github.com/xbmc/xbmc). We also welcome users who want to help answer questions in the forum or write articles for the wiki.

**Donate**

To show support and appreciation for Kodi, please consider [making a donation](https://kodi.tv/contribute/donate) or [purchasing merchandise](https://kodi.tv/store) such as a T-shirt or Raspberry Pi case. Your donations are greatly appreciated and help us to function, covering operating expenses, hardware and software licences for developers, and legal fees, as well as paying for team members to attend industry/FLOSS events and our annual conference.

**Availability**

Kodi 21.0 "Omega" is being pushed to the usual channels right now, both our own [download](https://kodi.tv/download) pages and various app stores/repositories, so should be with your devices shortly. It's worth noting that, for the first time in a while, we've cleared all known blockers, so all supported platforms will be updated just as soon as the various app stores process things.

If you are an Android user and wish to update to Kodi 21.0 as soon as possible, you can either sideload, or join the [Google Play - Kodi testing track](https://play.google.com/apps/testing/org.xbmc.kodi) which will get the release submitted more quickly. The "open" release will be promoted from the testing track in a week or two. We strongly advise Android users who use alternative skins to follow up with their skin developer, or to disable auto update before this time period, as not every skin will yet have been updated.