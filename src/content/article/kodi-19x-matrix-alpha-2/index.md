---
title: 'Kodi 19.x "Matrix" - Alpha 2'
date: 2020-10-05T15:00:00Z
author: Prof Yaffle
featured_image:
  src: /images/blog/Kodi_Splash_v19.0_Matrix_Alpha_1080p.jpg
  title: ''
  alt: ''
---
It's been more than a month since our last "preview" release, so it's time we boxed up something new for everyone.

 The usual drill applies: this is an alpha, some things will be broken, your home is at risk if something goes wrong, it might run off with your partner, don't blame us if it eats your kittens. Otherwise, though, all should be fine.

 Latest changes:

 **Playback**

 
 * Music: Display album duration in info dialog. Album duration can be used in smart playlists in the same way as for songs
 * Music: Read tags and and album art from music files served from an http(s) server
 * Music: Fix list view of files containing multiple streams
 * Feature: Audio decoder addons can now pass more information on Kodi (album, year, notes ...) 
 * Audio decoder addons can now pass more information to Kodi (album, year, notes ...) 
 
 **Subtitles**

 
 * ASS: Fixed timestamp overlapping overlays
 
 **Skin/Look-and-Feel**

 
 * Improvements to both music and video library artwork 
	 + Better "out the box" behaviour, optionally use all image files found in media folders
	 + Artwork levels - max, basic, custom, none
	 + GUI settings for custom configuration of whitelists (replacing awkward editing of advancedsettings.xml) 
 * Redesigned SeekBar that will auto-hide when video playback is paused
 
 **Platform Specifics**

 
 * Apple TV 
	 + Fix Kodi crash on start after a manual install with dpkg -i command (jailbroken devices only)
	 + Fix TopShelf feature after a manual install with dpkg -i command (jailbroken devices only except *Unc0verTV* devices, needs investigation)
	 + Fix missing thumbs on TopShelf items 
 
 **Python/Addons**

 
 * Fix scripts/plugins not being notified of abortRequest intents on app close 
 * Deprecate xbmc.translatepath in favour of xbmcvfs.translatepath towards convergence with the binary addon API
 * Broken/deprecated add-ons are now highlighted in the add-on list, and you're now prompted when you try to activate one
 * Fix: Prevent VFS addon changes (update, disable and uninstall) if in use
 * Fix: VFS addon problem, where Kodi needed a restart before showing a newly-installed version
 * Binary addon system revised to ensure higher security in data exchange between addon and Kodi (only inputstream missing)
 * Revised binary add-on system documentation for outside developers (only inputstream missing)
 * Internal binary add-on settings dialogs cleaned up, plus updated help text (audioencoder.kodi.builtin.aac, audioencoder.kodi.builtin.wma, screensaver.xbmc.builtin.dim)
 
 If you're bold, brave (and possibly a wearing a red shirt), you can get Alpha 2 from [here](https://mirrors.kodi.tv/snapshots/). Again, though, please - and adopting a more serious note - expect some breakage, and don't use this as your daily installation unless you know how to get things working again. If you do make the move and install it, however, please do share your experiences back with us so we can really get going on those bugs.

 As usual - well, it is open source - you can see what's changed between v18 and this version [here](https://github.com/xbmc/xbmc/compare/Leia...19.0a2-Matrix), and changes since Alpha 1 [here](https://github.com/xbmc/xbmc/compare/19.0a1-Matrix...19.0a2-Matrix).

 Have fun!

 