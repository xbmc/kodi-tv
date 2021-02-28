---
title: 'Kodi 19.x "Matrix" - Alpha 3'
date: 2020-11-01T02:00:00Z
author: Prof Yaffle
featured_image:
  src: /images/blog/Kodi_Splash_v19.0_Matrix_Alpha_1080p.jpg
  title: 'Kodi_Splash_v19.0_Matrix_Alpha_1080p'
  alt: 'Kodi_Splash_v19.0_Matrix_Alpha_1080p'
---
So... drum roll...hot on the heels of 19.x "Matrix" Alpha 2, and after a quick detour for an unexpected 18.9 "Leia" release, we bring you the stunningly-named 19.x "Matrix" Alpha 3. This will hopefully be the last of our alpha releases, before we move into beta and onto formal release (but no promises, obviously).

 Usual caveats: while we're approaching beta, this is still an alpha, and some things will be broken. That is, basically, the whole point of releasing it, after all: find the problems, and fix them before final release.

 Here's a non-exhaustive list of the major feature changes since the last release, although there have also been many more improvements and "behind the curtains" fixes:

 **Music Library**

 
 * Small fixes to album duration for music in unusual folder layouts, and triggering rescraping of a single artist or album.
 
 **Music Videos**

 
 * Fetch related album and artist info (including art, bio, review etc) from the music library where appropriate
 * Display all music videos for an artist, not just the ones related to an album when navigating by artist
 * Searching from the info dialog for an artist now includes all of related library albums as well as any videos
 * Possibility to use .nfo files so that the artist list can now show all performers from music videos, not just the main artist
 * Info dialogs will display data from the music library where there's a corresponding artist and/or album
 * Fix the *same director* search for music videos
 
 **Playback**

 
 * Correct the colour mapping of HLG HDR playback in SDR mode on Windows 10
 * Add HLG HDR playback as HDR10 on Windows 10 (as Windows does not support passthrough of HLG)
 * Added support for more OpenGL bicubic scalers
 
 **Skin/Look-and-Feel**

 
 * [Estuary] Add chapter info from music videos to OSD
 * [Estuary] Improve the *next item in playlist* info for music videos by adding artist/album details if available
 * [Estuary] Improve the *Now Playing* info for music videos when not in full-screen video by adding artist/album details if available
 * [Estuary] Optional poster for music videos
 * Behaviour changes to DialogAddonInfo buttons (e.g. contextual focus defaults to install, update, configure, etc.)
 * Add PVR.TimeShiftSeekbar infolabel to expose seekbar outside of the SeekBar dialog
 
 **Games**

 
 * Implement integer scaling support to improve the viewing quality of Pixel Art games
 
 **Information Providers/Scrapers**

 
 * New default Python metadata scrapers for movies and TV shows (replacing old XML scrapers)
 
 **API/JSON-RPC**

 
 * Add ability to apply a new subtitle URI to the player, e.g. URL, local file, etc.
 * Updates to allow VideoLibrary.Clean by directory
 * Improvements and fixes around PVR handling via the API
 
 **PVR**

 
 * Remember *last opened* (vs current *last played*) TV/Radio group across restarts
 
 **Platform-specific**

 
 * Linux: move to a single binary for multiple windowing systems (X11, Wayland, and GBM) versus the previous three. Users and package maintainers will no longer have to select a different binary based on the target environment.  
 
 
 If you're willing to help find some bugs, you can get Alpha 3 from [here](https://mirrors.kodi.tv/snapshots/). Again, though, please: expect some breakage, and don't use this as your daily installation unless you know how to get things working again. If you do make the move and install it, however, please share your experience so we can really get going on those bugs.

 As usual, you can see changes since Alpha 2 [here](https://github.com/xbmc/xbmc/compare/19.0a2-Matrix...19.0a3-Matrix), or browse the merged PRs [here](https://github.com/xbmc/xbmc/pulls?q=is%3Apr+sort%3Aupdated-desc+milestone%3A%22Matrix+19.0-alpha+3%22+is%3Aclosed).

 Over to you.

 