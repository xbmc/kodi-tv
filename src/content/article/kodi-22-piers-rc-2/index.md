---
title: Kodi 22 "Piers" RC 2
date: 2026-11-12T15:11:00.000+00:00
author: Team Kodi
tags:
  - Prerelease
featured_image:
  src: /images/blog/kodi_splash_v22.0_piers_rc_1080p.webp
  title: Kodi 22.x "Piers" Release Candidate Splash Screen
  alt: A sea of shades of purple - text in the background, a solitary Kodi logo
    and the name "Piers" in the foreground. Look closer, and the text is a huge
    list of all of the contributors to Kodi over the years.
---
Announcing the second release candidate of Kodi 22 "Piers"!

With the major features in place for RC 1, the past month has focused on polishing them and fixing regressions. Over 200 pull requests have been merged, with particular attention to game emulation, RetroAchievements, Blu-ray playback, HDR, audio passthrough, and video library reliability.

We've also completed some platform-specific improvements, including HDR support on tvOS and expanded Dolby Vision support on Xbox. Alongside these changes are numerous stability and performance fixes across Kodi.

It's been over two years since the initial Kodi 21 "Omega" release, so for a refresh on the new features in v22, see the [RC 1 blog post](https://kodi.tv/article/kodi-22-piers-rc-1/).

For the finer details of fixes and improvements in RC 2, here's the changelog:

## Changes since v22 RC 1

### Video

* Added chapter, scene marker, and bookmark jumping using Up/Down during video playback
* Improved display mode selection for cropped video content
* Fixed 3D mode detection from filenames and persistence of the stereo inversion setting
* Fixed playback continuing after ejecting a disc
* Fixed handling of malformed HEVC metadata and stacked video files containing ISO images

### Blu-ray

* Improved Blu-ray movie and episode playlist selection, including multi-angle discs and alternate playlists
* Fixed Blu-ray menus disappearing or being hidden when changing subtitle streams
* Fixed possible crash when transitioning from a Blu-ray Java menu to the main feature
* Fixed playback of Blu-ray folder rips containing unrelated files in the playlist directory
* Fixed artwork locations and handling of multiple versions and episodes in Blu-ray folder rips

### HDR

* Added HDR10 and HLG playback on tvOS, including compatible Dolby Vision Profile 8 base-layer handling
* Added Dolby Vision Low Latency support on Xbox for profiles 5, 7, 8, and 10
* Fixed HDR color space detection and tagging on Android
* Fixed HDR videos displaying a black screen during slideshows on some Linux-based platforms
* Fixed SDR screenshots appearing too dark in some image viewers

### Audio

* Improved passthrough audio/video synchronization, particularly after seeking on Android
* Fixed brief audio muting or loss of audio during synchronization
* Fixed dropouts with high-bitrate 96 kHz TrueHD passthrough
* Fixed incorrect DTS-HD detection during playback
* Improved Windows XAudio2 handling of unsupported sample rates, including those used by some game emulators
* Fixed AAC playback on webOS when the input stream format is unknown

### Subtitles

* Fixed subtitles not reappearing after being hidden, especially with inputstream add-ons
* Improved subtitle positioning and matching of external subtitles for local `.strm` files
* Fixed local drives missing when browsing for external subtitles

### Games

* Reduced input lag, repeated frames, and audio skips by synchronizing game emulation with the display
* Improved video shader compatibility and added categorized browsing of video filters, including CRT, handheld, and NTSC effects
* Expanded RetroAchievements with achievement sets, missable achievements, game completion progress, and active achievement indicators
* Improved RetroAchievements Encore Mode to distinguish previously earned achievements
* Improved savestate thumbnails, including hardware-rendered games, and fixed restoring savestates with different memory sizes
* Improved organization of per-game saves and fixed incorrect disc selection when starting multi-disc games
* Added a game manual button to Estuary and improved error messages for missing BIOS files
* Added mouse support for emulated mouse controllers and improved rumble handling when controllers disconnect
* Added support for emulator-requested fast-forward, including tape loading

### Library

* Added "Refresh all content" to the video source context menu, with improvements to library refresh handling
* Fixed video scans stopping unexpectedly, losing TV shows or episodes, or failing to retry unsuccessful metadata lookups
* Fixed database upgrades from older Kodi versions that could leave the movie library empty
* Improved cleaning and removal of movie versions and extras
* Fixed unnecessary re-importing of existing movies during library updates
* Fixed loss or alteration of metadata when exporting and importing separate NFO files
* Fixed TV show library information when media files are moved
* Improved local artwork discovery and caching, including Blu-ray rips and archived media
* Fixed migration of the video version scanning preference during settings upgrades

### Music

* Fixed selecting a track from a cue sheet always starting playback at the first track
* Fixed several music tagging, artist refresh, and music box set issues

### Pictures

* Fixed incomplete decoding of large HEIF and AVIF photos, including tiled images
* Reduced memory usage when loading oversized JPEG images
* Fixed slideshows stalling on broken images or unplayable videos
* Fixed unwanted display mode changes during video slideshows

### UI / Skinning

* Added colored media flag icons in Estuary
* Improved movie version icons and labels in Estuary
* Fixed missing GUI updates and rendering glitches with smart redraw
* Fixed notifications being lost when another notification arrives during the closing animation

### PVR

* Improved EPG update performance and memory usage when clients repeatedly announce guide changes
* Fixed possible crash when accessing the selected item in the Guide window
* Fixed channel navigation after switching channel groups in the Channels OSD

### Network

* Fixed accessing SMB shares over IPv6 and browsing SMB servers without specifying a share
* Fixed UPnP file serving after security-related path handling changes
* Fixed buffer overflows in SMB discovery and closed-caption processing

### Android

* Fixed relaunching Kodi while a previous instance is still shutting down
* Fixed possible video playback issues caused by stale MediaCodec buffers after flushing
* Fixed CPU usage reporting in the debug overlay

### macOS

* Fixed possible startup hang when detecting certain USB devices

### Developers

* Upgraded Python to v3.14.10
* Upgraded TagLib to v2.3.2
* Improved compatibility with Xcode 27 and modern C23 compilers
* Enabled ccache support for Visual Studio builds on Windows

## Known issues

* Warning: GUI settings can get erased if _downgrading_ to v22 from a v23 nightly. Fix expected in next release.
* On Linux, HDR video playback may make some GUI/OSD elements too transparent, washed out, or fuzzy
* If Kodi is provided without TagLib 2.3.2, Matroska tagging is degraded back to v21

## Download link

If cutting-edge software is your thing, you can get RC 2 from [here](https://kodi.tv/download). Select your platform of choice, and look in the "Prerelease" section. Please share your experiences back with us so we can keep chipping away on any bugs. And take a backup first!
