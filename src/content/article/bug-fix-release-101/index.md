---
title: 'Bug-fix Release: 10.1'
date: 2011-03-09T03:00:00Z
author: Team XBMC
---
While we are moving quickly to get new features into 11.0, the time has come for a maintenance release for Dharma. We recommend that all users update to 10.1 as soon as possible to increase stability.

 The main focus of this release is to address a bug that could cause XBMC to freeze when updating a skin. We have held back skin updates from the main repository because of this, but now that it is fixed, they will begin rolling out in a few weeks.

 This is intended as a bug-fix release only, no new features have been introduced. Notable fixes include:

 
 * If an in-use skin was updated in Windows, XBMC would freeze
 * Some RTMP streams in Windows did not play
 * Included add-ons have been updated
 * The correct referrer is now used for downloading add-ons, improving dependency statistics
 * Crashes during playback on ATI hardware in some circumstances have been fixed
 * Hardware decoding improvements for OSX
 * Various small fixes
 
 In addition, XBMC Live has been updated with the most recent packages, one of which includes a fix for the annoying [SMB+Windows Live Essentials bug](https://bugs.launchpad.net/ubuntu/lucid/+source/samba/+bug/458637).

 Those interested may check out the [full changelog](https://github.com/xbmc/xbmc/compare/10.0-Dharma...10.1-Dharma).

 ### Updating

 Windows and OSX users should [download](https://kodi.wiki/download/) and install as usual, all user data will be kept intact.

 Ubuntu and XBMC Live users can use ‘apt-get update && apt-get install xbmc’ to update.

 