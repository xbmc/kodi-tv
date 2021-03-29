---
title: "Kodi 14.0 Helix – Release candidate 3"
date: 2014-12-08T03:00:00Z
author: Martijn Kaijser
featured_image:
  src: /images/blog/Splash1.webp
  title: "Splash1"
  alt: "Splash1"
---

Although we announced our first release candidate not long ago, we’re proud to release our third one in the 14.0 Helix range. Some might find it odd that we do so many releases in this short period of time. We can assure you that this is by intention. By doing more rapid releases we get better feedback if changes done by our developers are actually effective and thus create a better final release.

This 14.0 release brings many updates and changes, not the least of which is the change to the software’s name and logo. The release candidate cycle will also be the first to include the official logo of Kodi! The ins and outs about the logo can be read [here](/article/introducing-kodi-logo) in case you are interested. A detailed changelog can be found under [milestones](https://github.com/xbmc/xbmc/milestones?state=closed) on our code repository, should you be interested. With that said, let’s take a look at some of the features that come with the 14.0 release candidate.

## Changes

Below we will give a snapshot of the most important fixes done since the first release candidate.

- - Bump FFmpeg to 2.4.4
- - Fix problem with setting content on new and existing video sources
- - Fix spinner in video settings for choosing hardware or software decoding
- - Fix recording history in PVR
- - Separate sort order in PVR window for each directory
- - Fix PVR preview video scaling for AMLCodec on Android
- - Fix restart option on Win 8.1
- - Fix crashes on certain Intel GPU when playing video
- - Fix crashes on certain videos on Android 5.0 devices (Nexus Player and ADT-1)
- - Fix LPCM (audio/L16) streaming via UPnP
- - Use correct art type when appending art to item lists
- - Fix python PIL package on Windows that caused crash on weather add-on
- - Updated GUI translation files

To not sum up every other changes we have done in this release, here’s a list of the past relevant news items:

- - [Release candidate arives](/article/kodi-140-helix-release-candidate-arrives)
- - [Beta Springs Forward](/article/kodi-140-helix-beta-springs-forward)
- - [Nearing beta release](/article/kodi-140-helix-nearing-beta-release)
- - [alpha 4](/article/kodi-140-helix-alpha-4)
- - [feature freeze](/article/kodi-140-code-name-helix-enters-feature-freeze)
- - [alpha 3](/article/kodi-140-helix-alpha-3)
- - [alpha 2](/article/kodi-140-helix-alpha-2)

## A Few Warnings and Notices

This release marks the switch to the new name Kodi. When you install this release candidate, your library and add-ons will be moved to Kodi, making reverting back to 13.2 fairly difficult. As such, it is recommended that you [back up your library](https://kodi.wiki/view/HOW-TO:Backup_the_library "How to backup the library") [as well as your settings](https://kodi.wiki/view/Backing_up_XBMC) before installing Kodi.

Also, as Kodi is an unsigned application on OSX, you may need to go through a slightly different process to start it the first time. After you have copied Kodi to the Applications folder, you will need to “right click” or “two finger click” Kodi from within the Applications folder and select “Open” and then accept the warning. You should only need to do this the first time you run Kodi.

## Download

The release can be found on our official download page as mentioned below. This page contains our release candidate builds and our nightly builds for the Helix release.

- - [Official Kodi 14.0 downloads](https://kodi.wiki/download/)

## The first ever Kodi T-Shirt

[![](/images/blog/kodishirt.webp)](https://teespring.com/kodiheroshirt2014)Because of your generosity in t-shirt sales, straight-up donations, and word-of-mouth evangelizing, this project has lasted for 12 years and through four different names, and with your help, we all believe it can last twice that long again. This is the very first t-shirt sale we’re doing with the new Kodi logo design. We’re mostly doing this sale because our developers wanted a cool new shirt, but we figured we probably weren’t the only ones. So if you’d like the very first official Kodi shirt, have at it. Just follow the [link](https://teespring.com/kodiheroshirt2014) to get it.

###

###

###

### How to Contribute

If you use these builds, we encourage you to report problems with these builds on our forum first and after if asked submit bugs on Trac (following this guide: [How to submit a bug report](https://kodi.wiki/view/HOW-TO:Submit_a_bug_report)). Do note that we need detailed information so we can investigate the issue. We also appreciate providing support in our [Forums](https://forum.kodi.tv/ "XBMC Forums") where you can, or [donate](https://kodi.wiki/contribute/donate/ "XBMC Foundation Donations") to the XBMC Foundation if you like. For a current FAQ on Kodi 14, visit our [Helix FAQ](<https://kodi.wiki/view/Kodi_v14_(Helix)_FAQ>). You can of course also follow or help promote Kodi on all available social networks.
