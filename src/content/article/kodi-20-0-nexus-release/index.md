---
title: Kodi 20.0 "Nexus" - Release
date: 2023-01-15T13:15:23.909Z
author: Team Kodi
tags:
  - Release
featured_image:
  src: /images/blog/kodi-20-nexus-splash.jpg
  title: Kodi 20.0 "Nexus" Splash Screen
  alt: Kodi 20.0 "Nexus" Splash Screen - a blue Kodi logo sits in the centre of a
    black page, around it, a dial - a gauge or chronograph, perhaps.
---
**It's Time!** We are pleased to present the latest release of Kodi, v20 "Nexus".

With over 4,600 commits since v19 "Matrix" was released on February 19th, 2021, this has been a huge effort. Thanks go out to our team members, and everyone in our community who sent a pull request, tested and gave feedback, or provided support to users on the forum. We appreciate your contribution to making Kodi better.

Let's review some of the changes you can expect:

## **Major Features**

### Multiple Instances of Binary Add-ons

This allows Kodi to load multiple instances of a binary add-on. For example: TVHeadend users can now run more than one instance of the add-on to connect to multiple back-end TVHeadend servers, with individual settings like channel groups and hidden channels maintained per add-on instance. **@AlwinEsch** was the developer behind a lot of this, with support from **@ksooo**. Your favourite binary add-on may not support this capability yet, but we hope add-on developers introduce this into their projects soon.

### AV1 Video Support

Several Kodi platforms now allow hardware decoding of AV1 media. The Inputstream API has been updated to support AV1 and this allows add-ons using `inputsream.adaptive` to play AV1 streams.

### Subtitles Rework

Massive rework of the subtitle system was undertaken by **@CastagnaIT** making subtitle formats more consistent for development and maintenance, and enabling features that were previously not possible. Kodi now supports dynamic positioning of fonts, changing of border and background colours, subtitle positioning, improved multi-language support, and more. If you are a regular user of subtitles, jump on in and check it all out.

### Game (libretro) Savestate Support

The GSOC 2020 project of **@NikosSiak** received some polishing touches before finally (!) being merged. With mentoring from **@VelocityRa** and **@gusandrianos**, and the assistance of **@garbear**, this has been a long time coming. This feature allows you to save game state at any time, even if games do not provide native savestate features themselves. Great for gamers, and times when you aren't watching Videos with Kodi ;)

### Windows HDR Support

Full HDR support for the Windows Desktop platform has been implemented by **@thexai** along with many improvements throughout the Windows (DXVA/2) video pipeline. HDR is not available on non-Desktop, i.e. UWP Store (Xbox) versions. Improvements to allow more accurate ACES Filmic and HABLE tonemapping make even SDR video look better, and these capabilities are implemented for both UWP and Desktop versions of Kodi.

### NFSv4 Support

Changes to allow NFSv4 support were implemented by **@lrusak** as previously we only supported NFSv3. There are some caveats with this (you must explicitly select either NFSv4 or NFSv3 for a source). Give it a try!

### Context Menu Consistency

Improvements to right-click/long-press context menu handling were made by **@ksooo** in numerous areas. This makes the function of the context menu much more consistent over different windows, and enabled some new capabilities like the playback of albums directly from widgets, series resume, etc. to be added.

### Behind The Scenes

The majority of changes are "under the hood" and invisible to users but improve the stability, performance, and safety of Kodi. API changes have been made to evolve Python and Binary add-ons and bring new skinning features. There are updates to Kodi dependencies on most if not all Kodi platforms. Fixes from regular use of code static-analysis tools. Database migration fixes for a smoother update ... and lots more.

There are too many individual changes to detail everything. If you would like to know more, please look back through the Nexus Alpha to RC2 [release announcements](https://kodi.tv/blog/tag/release) and review the GitHub changelog [here](https://github.com/xbmc/xbmc/compare/19.0-Matrix...20.0-Nexus).

Time does not stand still. Branches are forked and development on Kodi v21 (codename: "Omega") is already underway. Thank you again for your continued support as we continue to make Kodi great!

### Help Wanted!

If you experience any issues or find any remaining bugs, please post in the [General Support](https://forum.kodi.tv/forumdisplay.php?fid=111) section of our forum. If you have fixes for issues please submit a pull request with your changes to our [master branch on GitHub](https://github.com/xbmc/xbmc). We also welcome users who want to help answer questions in the forum or write articles for the wiki.

### Donate

To show support and appreciation for Kodi, please consider [making a donation](https://kodi.tv/contribute/donate) or [purchasing merchandise](https://kodi.tv/store) such as a T-shirt or Raspberry Pi case (Nexus items will be available soon). Your donations help us operate, covering operating expenses, hardware and software licences for developers, and legal fees, as well as paying for team members to attend industry/FLOSS events and our annual conference.

### Availability

Kodi 20.0 "Nexus" is being pushed to the usual channels right now, both our own [download](https://kodi.tv/download) pages and various app stores/repositories, so should be with your devices shortly. It's worth noting that, for the first time in a while, we've cleared all known blockers, so all supported platforms will be updated just as soon as the various app stores process things.