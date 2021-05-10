---
title: Kodi "Matrix" 19.1 Release
date: 2021-05-09T19:35:04.019Z
author: Prof Yaffle
tags:
  - Release
featured_image:
  src: /images/blog/19.1-splash.jpg
  title: Kodi 19.1 "Matrix" Splash Screen
  alt: Kodi 19.1 "Matrix" Splash Screen
---
It is a truth universally acknowledged that, no matter how much testing you do before a major release, you'll never find and squash anything like all the bugs until you get a proper, large-scale, mass test of the code. In other words, it's time for a bugfix release on the Kodi 19 "Matrix" series, as - thanks to your feedback - we've managed to fix a whole batch of issues over the past few weeks.

In no particular order, this version includes fixes for the following:

As a bug fix release, don't bother going to look for new features; while there are some, that's not the main purpose of this version. Full details are on [GitHub](https://github.com/xbmc/xbmc/compare/19.0-Matrix...v19.1-Matrix), but here's the short form...

**Video**

* Fixed: HDR metadata is now detected in VP9 profile 2 streams and can be used on platforms that support HDR passthrough or tone mapped when playing this kind of videos.

**Discs**

* Fixed: playback of optical DVDs in Linux
* Fixed: BD-J Blu-ray chapter skipping via remotes/keyboard

**PVR**

* Fixed: context menu not accessible in PVR Guide window when using very basic remote to control Kodi
* Fixed: client channel name and number not persisted when changed
* Fixed: play count and resume position of recordings lost after Kodi restart
* Fixed: crash while browsing the EPG when MySQL is used as EPG database
* Fixed: next recording on ... label time is not localized in Estuary Timer/Timer rules window
* Fixed: channel manager does not rename backend channel
* Fixed: playing archived programme not selected when opening the Guide window
* Fixed: GUI not updated on removal/insert/hide/unhide of channel groups
* Updated: improved look of PVR windows in Estuary

**Music Library**

* Fixed: issue with music from cuesheets where only the first track was being added to the library on rescanning, with the rest being deleted

**JSON-RPC**

* Fixed: PVR - Reintroduced broadcast properties 'hastimer', 'hastimerrule', 'hasrecording', 'recording'
* Fixed: PVR - Reintroduced channel property 'isrecording'

**Subtitles**

* Fixed: detection of system fonts (directwrite) on windows for ASS subtitles
* Fixed: detection of user fonts (in userdata/fonts) for ASS subtitles
* Fixed: rendering of semi-transparent ASS subtitles on Wayland

**GUI/Interface**

* Fixed: media flagging for DVD/BluRay

**Web Interface**

* Updated: Chorus2 based on community contributions

**Filesystem**

* Updated: enable filecaching by default for network filesystems
* Updated: improve filecache error handling

**Network**

* Updated: improved reliability for HTTP and NFS network filesystems

**Windows specifics**

* Added: support for WS-Discovery protocol that enables locating SMB servers and browsing shared folders using SMBv3.
* Added: debug Info OSD Video. Extends current Debug Info Player (Ctrl+Shift+O) with new video-only info (Alt+O)
* Fixed: with some unusual streams, incorrect HDR metadata could be passed (HDR10 passthrough).
* Fixed: green screen on systems with old HW (DX feature level 9.1) playing 10-bit videos.
* Fixed: black screen with Software render method and with DXVA2 hardware acceleration disabled.
* Fixed: green screen when playing the menu of some DVDs (MPEG2 SD only).
* Fixed: credentials being requested for anonymous SMB shares
* Updated: VC runtimes included in the installer to add compatibility with VS2019 and VS2017 at the same time.

**Android specifics**

* Fixed: SMB shares mounted on system level not visible in Kodi
* Fixed: SMB shares labelled with cryptic numbers (UUID) instead of actual disk name

**Xbox specifics**

* This version also brings 19.1 to the Xbox - while 19.0 has been in the Microsoft Store since launch, this was Windows-only while we found a way to adequately test the new release on Xbox. We've fixed that now, so Xbox users will automatically upgrade from 18.9 to 19.1 if you've got auto-update enabled. It's worth mentioning that there's a known memory limitation - present in 18.x as well - that causes Xbox application crashes with 4k content, so please be aware.

***EDIT** Ah, so close. Sadly, this isn't going to happen - there's a new issue that's bubbled up on Xbox that means you can't download any addons, which is a touch... inconvenient. As such, we've had to pull Xbox 19.1 - sorry, folks. Let's see if we can resolve that for 19.2...*

\
Thanks to everyone who has helped by reporting, isolating or fixing issues.

As usual, there really should be no problems in installing this straight over the top of your existing Kodi version - indeed, this will happen automatically on many platforms - but, if you've any doubts, back up your userdata beforehand. Similarly, this is a minor version bump, so there's no change to database versions or anything else that's likely to break things.

If you're interested, you can read the merged PRs [here](https://github.com/xbmc/xbmc/pulls?q=is%3Apr+sort%3Aupdated-desc+milestone%3A%22Matrix+19.1%22+label%3A%22v19+Matrix%22+). If you want to read back on the full history of v19 itself, or of previous versions, you can find the corresponding articles in the relevant [blog posts](https://kodi.tv/tags/release-announcements).

Application deployment on different platforms (notably, Google Play and the Microsoft Store) can vary considerably due to circumstances outside of our control, so just be patient, and the update will inevitably find its way through.