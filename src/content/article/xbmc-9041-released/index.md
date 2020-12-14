---
title: 'XBMC 9.04.1 Released'
date: 2009-05-26T04:00:00Z
author: Team XBMC
featured_image: ""
---
A few bugs managed to slip into the XBMC Media Center 9.04 (Babylon) final release, so we decided to do a quick update. This maintenance release addresses those glaring Babylon issues as well as some other things that we have fixed since. No new features are present here, this is strictly a bug fix release. As always, you can [grab the latest version here](https://kodi.wiki/download/) or from the PPAs. Note: We had a bit of a problem upon initial this release, so some builds have been repacked as a result.

 For those interested, here is a brief changelog:

 
 * Updated the web scrapers
 * Fixed segfault when clicking on either a Video or Music source which contains a malformed .pls file
 * Shoutcast had two “..” paths
 * Typo caused VobSub subtitles to render at incorrect timestamps (and possibly crash XBMC)
 * Diffuse texture used the wrong coordinates for orientation when scalediffuse=”false” was specified
 * Reset LCD dim after resuming from suspend
 * HDHomeRun was crashing when browsing tuners
 * Main title DVD/ISO rips did not return to GUI when playback finished
 * XBMC would suspend directly after resume when suspend time \> shutdown time
 * Speed up RAW image loading and handle more file extensions
 * Better WAV handling on 64-bit operating-systems
 * Metadata from NFO files not used unless default scraper is the same as the URL in the NFO
 * H.264 video and AAC audio streamed over RTMP memory leak and video FPS problem
 * [OSX] EventServer could be started multiple times on Mac and Apple TV
 * [LINUX] RAW image loading was broken
 * [LINUX] Startup.xml was not loaded
 * [LINUX] Some plugins were crashing on 64bit
 * [WIN32] Updated: ImageLib.dll
 * [WIN32] Fixed raw image loading
 * [WIN32] XBMC crashed on playing media or no sound with MP3 and video files
 * [WIN32] XBMC would crash before the OpenGL warning pop-up message was shown
 
 #### While you are brimming with XBMC Media Center love and excitement, show your appreciation by nominating us for the SourceForge 2009 Community Choice Awards, it only takes a minute, and we really appriciate everyone who participates.

 