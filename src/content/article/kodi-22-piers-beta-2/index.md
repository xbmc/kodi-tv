---
title: Kodi 22 "Piers" Beta 2
date: 2026-09-05T17:01:00.000+01:00
author: Team Kodi
tags:
  - Prerelease
featured_image:
  src: /images/blog/kodi_splash_v22.0_piers_beta_1080p.webp
  title: Kodi 22.x "Piers" Beta Splash Screen
  alt: A sea of shades of purple - text in the background, a solitary Kodi logo
    and the name "Piers" in the foreground. Look closer, and the text is a huge
    list of all of the contributors to Kodi over the years.
---
Announcing the second Beta release of Kodi 22 "Piers"!

A lot of polish has come together for the features added in Beta 1. HDR support is drastically improved, including HDR screenshots. International language support is also improved, especially for JSON-RPC consumers. And if you have a Pulse-Eight CEC adapter, you'll find expanded media center device handling.

If you want the latest and greatest, this release is for you. Beta 2 merges over a cumulative 100 fixes on top of Beta 1. That said, being a Beta release, there is still the probability of bugs left to fix before the final v22 release. Please raise GitHub issues with full debug logs to help us resolve any faults.

Okay, what's new in this version?

## Changelog

### Video

* Upgraded FFmpeg to v9.0.1
* Fixed pixel format detection for AV1 content
* Fixed fullscreen playback dimensions on 50 Hz TVs
* Fixed FPS detection of MPEG Transport Streams (.ts / .m2ts)
* Fixed loss of the HDMI video signal when playing certain content
* Fixed skip accuracy when paused
* Fixed playback when moving Kodi between screens on Windows
* Fixed resuming MPEG Transport Streams with H.264 video on Android
* Fixed VC-1 regression causing heavy stuttering on Android TV
* Fixed "sync playback to display" setting for some embedded (GBM) platforms
* Fixed crash when using add-on video codecs with some embedded (DRMPRIME) platforms
* Fixed possible memory leak with video codec binary add-ons

### Blu-ray

* Upgraded Libbluray to v1.5.0
* Improved Blu-ray episode handling
* Improved Blu-ray movie playlist selection
* Improved speed of Blu-ray disc detection
* Fixed possible crash when selecting "Blu-ray menu" while choosing a Blu-ray playlist
* Fixed stale metadata on playlist item transition

### HDR

* Enabled screenshots for HDR content
* Fixed tonemapped (HDR->SDR) colorimetry
* Fixed stale HDR metadata shown for video info
* Fixed Dolby Vision playback on Android with PGS subtitles
* Fixed HDR transfer PQ logic on webOS
* Fixed playback of HDR10 HEVC Main 10 content on macOS
* Fixed playback of sources with bad HDR light metadata

### Bookmarks / Chapters

* Fixed bookmark not cleared when playback finished
* Fixed chapter skipping during DVD playback
* Fixed displayed time and chapter after a chapter jump
* Fixed two chapters being created in the first 1 second

### 3D

* Fixed delayed switch when changing 3D mode

### Audio

* Change ReplayGain PreAmp settings to be centered at 0 dB instead of 89 dB
* Fixed errors in M2TS parser for DTS/TrueHD and LPCM content
* Fixed MPEG-TS fast probe breaking DTS/DTS-HD audio metadata
* Fixed possible loss of audio when playing HDR with passthrough audio
* Fixed distorted sound on webOS
* Fixed skipping first track after playing last track with "repeat all" enabled

### Subtitles

* Improved automatic selection of different languages
* Fixed possible desync of external subtitles when seeking
* Fixed issue with external subtitle searching and HTTP:// paths
* Fixed subtitles not appearing after backward chapter or large seek
* Fixed system-level crash on LG webOS when subtitles are displayed
* Fixed removal of subtitles with URL-encoded paths

### PVR

* Fixed "smart select" in Guide window
* Fixed possible loss of video when switching PVR channels on embedded platforms
* Fixed wrong reminder types displayed in timer settings dialog
* Fixed resolution of items only carrying item path, no tag

### Games

* Added full RetroAchievements support
* Added ability to remember which emulators are used per-game and per-folder
* Added error message when compressed savestates from v23 are loaded in v22
* Added Fairchild Channel F emulation
* Improved RetroAchievement support
* Fixed broken audio with some emulators
* Fixed discarding audio frames at the beginning of a stream
* Fixed in-game rumble not working
* Fixed torn frames on some Linux-based platforms
* Fixed emulators using the previous emulator's system/save directories
* Fixed possible crash when connecting/disconnecting controllers
* Fixed analog triggers in Dreamcast emulators

### Library

* Added advanced setting to ignore folder names within archives
* Improved video version functionality
* Improved crossfading of images
* Fixed showing artwork for movie series
* Fixed crash when exiting while a directory is still loading
* Fixed outdated watched/in progress status of movies/TV shows
* Fixed TV show details being lost after a metadata refresh
* Fixed sorting library items with Nordic (æ/ø/å/ä/ö) accents
* Fixed display of empty TV shows
* Fixed incomplete removal of movies when setting source content to "None"
* Fixed scraping items with a `{tvdb}` tag in the filename
* Fixed several bugs for .rar archive handling
* Fixed sort order of movies with versions
* Fixed slow scanning for imports/exports of actor thumb and TV show art
* Fixed incorrect name and information shown for BDMV files
* Fixed inability to play trailers when a Blu-ray ISO has been played at least once

### UI

* Added SVG image support
* Fixed jerky vertical scrolling of long text
* Fixed swizzle detection on some OpenGL platforms
* Fixed deadlock on shutdown when the PlayerProcess dialog is open
* Fixed resolution changing for some embedded platforms
* Fixed monitor selection hidden on some multi-monitor systems
* Fixed showing CPU/GPU temperature on M5 systems

### Skinning

* Added `$MAP[]` XML syntax for key/value lookup tables
* Added `Control.ResetGrouplist()` to reset the last focused item in a grouplist
* Fixed unmatched `[TABS]` handling
* Fixed overshooting items in fixed lists by one item
* Fixed possible error loading TTF fonts
* Fixed using custom fonts without a "family_name" field
* Fixed several glitches in font rendering on Windows
* Fixed screensaver bug when updating the active skin
* Fixed error logging when loading a skin
* Fixed stale images after weather update

### Peripherals

* Enhanced CEC support, especially for Pulse-Eight CEC adapters
* Upgraded libcec to v8.1.6
* Changed controller handling from the Linux Joystick API to Udev
* Fixed memory leak when unplugging devices
* Fixed sorting of keyboard layouts
* Fixed handling of "guide" button on some remotes
* Fixed unconfirmed changing of peripheral settings

### Network

* Upgraded Samba to v4.24.4
* Improved SMB stability over poor connections
* Fixed crash when scanning NFS folders with # or ; in the directory name
* Fixed loss of network/database services when logging off the master profile
* Fixed browsing files via HTTP, HTTPS, and WebDAV if the server requires authorization
* Fixed handling of spaces in WebDAV paths
* Fixed sorting UPnP items by date
* Fixed MySQL escaping for strings with %

### JSON-RPC

* Added `Database.GetDatabaseName` method and `Database.Type` enum
* Added `VideoLibrary.SetSourceContent` method
* Added `PVR.GetPlayableBroadcasts` method
* Added `GUI.OnSkinUnloading`, `GUI.OnSkinLoaded` and `GUI.OnSkinLoadFailed` notifications
* Added ability to set TV show trailer
* Added ability to get game sources via `Files.GetSources`
* Extended full BCP 47 language support over JSON-RPC
* Improved JSON-RPC error reporting
* Fixed missing "status" field in `Video.Fields.TVShow`
* Fixed consistency bug for versions returned by `Files.GetDirectory`
* Fixed live stream metadata when playing a PVR radio channel

### Python

* Upgraded Python to v3.14.7
* Upgraded Pillow to v12.3.0
* Added `xbmc.getDevicePowerStatus()`
* Added `xbmc.getCecAdapterNames()`
* Added `xbmc.getDatabaseName()`
* Added `xbmcgui.ControlVideoWindow`
* Fixed `xbmcgui.ControlButton.setLabel()` having no effect on the item's font

### Profiles

* Fixed database stability and add-on enable/disable after profile switch
* Fixed deleting the currently active profile

### Android

* Fixed possible crash on exit
* Fixed asking for local network access permission
* Fixed launching playlists with Android intents

### Developers

* Dropped p8-platform dependency
* Raised minimum macOS deployment target to 10.15
* Improved running Kodi in iOS and tvOS simulators
* Fixed building with GCC 15
* Fixed building with generators other than Visual Studio
* Fixed documentation glitches and broken dark mode

## Known issues

* If Kodi is provided without our patched TagLib 2.3.1, Matroska tagging is degraded back to v21

## Download link

If cutting-edge software is your thing, you can get Beta 2 from [here](https://kodi.tv/download). Select your platform of choice, and look in the "Prerelease" section. Please share your experiences back with us so we can really get going on those bugs. And take a backup first!
