---
title: 'Kodi 19.x "Matrix" - Alpha 1'
date: 2020-08-07T12:00:00Z
author: Prof Yaffle
tags:
  - Prerelease
featured_image:
  src: /images/blog/Kodi_Splash_v19.0_Matrix_Alpha_1080p.jpg
  title: 'Kodi 19.0 Alpha Splash Screen'
  alt: 'Kodi 19.0 Alpha Splash Screen'
---
So, here we go. Hot on the heels of what is intended to be the [final release in the 18.x "Leia" series](https://kodi.tv/article/kodi-leia-188-release), it's time to give you good people a taste of things to come. So, with no further ado, we'd like to present the first Alpha releases of Kodi 19.x "Matrix".

 This is a major release, so, as you'd expect, it comes with many new features. However, it will inevitably cause problems for some people, which is why we'll go through a more traditional Alpha/Beta/Release Candidate model. As such, then, please be aware that installing this will inevitably break things, and we'd really like your help at that point to identify the problems and get them fixed.

 So, all that aside... what's actually changed?

 **Audio/Music**

 
 * Improved handling of multi-disc CD sets and box sets
 * Additional metadata tags
 * Improved handling of album release dates
 * New setting to open music fullscreen/visualisation window automatically when playback is started
 * A new, Matrix-inspired music visualisation is now available to install - great care has been put into making this perform well on lower-end systems
 
 **Video**

 
 * Software decoding of the AV1 CODEC
 
 **Subtitles**

 
 * Subtitle opacity can now be changed
 * New dark grey colour for subtitles
 
 **Estuary Skin**

 
 * Redesign of the music fullscreen/visualisation window to match other fullscreen windows - allows fanart and visualisations to be shown without coloured overlays
 * Additional media info flags added to music fullscreen/visualisation window info display
 * The default Playlist view now uses the Widelist view format with options on the sideblade menu as in other areas of the skin
 * A new "Now Playing" view added for music playback, showing media details for both any selected song in the playlist and those for any currently playing song
 
 **Games**

 
 * iOS now supports game controllers (Xbox/PlayStation/other supported Bluetooth controllers)
 
 **Platform Specifics**

 
 * **Darwin (Apple) platforms:** 
	 + Objective-C code migrated from manual memory management to ARC 
 
 
 * **iOS:** 
	 + Added showing total/free space
	 + Kodi log can now be shared using native sharing sheet
	 + Kodi GUI is no longer obscured on devices with notch 
 
 
 * **macOS:** 
	 + Blank Other Displays setting no longer requires app restart
	 + "Toggle fullscreen" now uses default macOS shortcut 
 
 
 * **Android**: 
	 + Static HDR10 support for all source types (if supported by the device)
	 + Dynamic Dolby Vision HDR support for streaming services (if supported by the device) 
 
 
 * **Windows**: 
	 + Static HDR10 support for all source types (if supported by the GPU) 
 
 **Information Providers (scrapers)**

 
 * New python scrapers for music - available in repo as **Generic Album Scraper** and **Generic Artist Scraper**
 * New python scrapers for TV & movies - available in repo as **The Movie Database Python** and **The TVDB (new)**
 
 **PVR**

 
 * PVR reminders
 * TV and radio channel groups and Estuary home screen widgets
 * Group manager usability enhancements
 * Channel manager usability enhancements
 * Guide window navigation controls
 * Estuary PVR information dialog enhancements
 * Setting 'Switch to full screen' now supports channel types
 * Playlist context menu items for recordings
 * Dynamic PVR categories for Estuary home screen
 * Ability to sort channels and EPG by the backend order of channels
 * Support group specific channel numbering and option to start group number locally from 1
 * Support for starting EPG entries as live
 * Support displaying recording sizes and being able to sort by them
 * New, Live, Finale and Premiere for EPG, recordings and timers
 * Guide window performance improvements
 * Search window performance improvements
 * EPG performance and memory usage optimisations
 * C++ API for PVR Addon development
 
 **Network**

 
 * Improved information around the security implications of enabling external interfaces
 * Added default-on switch to require a password for the web interface
 
 **Addons**

 
 * Probably the biggest change: with this release, we move to Python 3 for addons (see note below).
 * Kodi will now enforce the origin of installed addons and their dependencies. This has been implemented to prevent third party repositories from overwriting code of unrelated add-ons, which was the cause of numerous error reports in the past.
 
 *Due to the discontinuation of Python 2, Kodi now utilises Python 3 for addons. Because of this change, this update might disable addons where a compatible version isn't available, although these will be reactivated as soon as their authors provide new versions. The list of Kodi Matrix compatible addons available from the official repository is growing by the week, but not everything has been ported over yet.*

 

  

 If you want to take the plunge, you can get Alpha 1 from [here](https://mirrors.kodi.tv/snapshots/). Again, though, please: expect some breakage, don't use this as your daily installation unless you know how to get things working again, and please share your experiences back with us so we can really get going on those bugs.

 As usual - well, it is open source - you can see what's changed between v18 and v19 [here](https://github.com/xbmc/xbmc/compare/Leia...19.0a1-Matrix). It's a long list...

 
