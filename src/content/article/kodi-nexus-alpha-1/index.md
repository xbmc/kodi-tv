---
title: Kodi "Nexus" Alpha 1
date: 2022-05-16T12:08:11.386Z
author: Team Kodi
tags:
  - Developer
  - Prerelease
featured_image:
  src: /images/blog/nexus-a1-splash.jpg
  title: Kodi "Nexus" Alpha 1 Splash Screen
  alt: Kodi "Nexus" Alpha 1 Splash Screen
---
So, here we go, with no further ado, we'd like to present the first Alpha releases of Kodi 20.x "Nexus".

This is a major release, so, as you'd expect, it comes with many new features. However, it will inevitably cause problems for some people, which is why we'll go through a more traditional Alpha/Beta/Release Candidate model. As such, then, please be aware that installing this will inevitably break things, and we'd really like your help at that point to identify the problems and get them fixed.

So, all that aside... what's actually changed?

**Video**

* AV1 hardware decoding for Android. [PR](https://github.com/xbmc/xbmc/pull/19810)
* AV1 hardware decoding for Linux via VAAPI [PR](https://github.com/xbmc/xbmc/pull/19661)
* Bump to FFMPEG 4.4 [PR](https://github.com/xbmc/xbmc/pull/19558)

**Subtitles**

* Add new font style settings such as border size/colour, background type/colour/opacity, shadow colour/opacity, and blur
* Add support to display subtitles with dynamic positions which make use of position tags
* Add underlined and strikethrough text style support
* Add a new wide colour palette in colour settings
* Add a new setting to change text alignment for closed caption subtitles for a better reading
* Add a new setting to override subtitles metadata like style and position
* Improved font size that now match the point/pixel proportion
* When Kodi is in windowed mode subtitles are now always displayed correctly
* Improved VPlayer for better reading of multiline text
* Improved SAMI format to better support multiple languages
* Improved TX3G format to support multiple styles, colours and alpha channel
* ASS/SSA subtitles are displayed without flickering
* Improved image-based subtitle rendering to keep a better aspect ratio
* Add support to the WebVTT subtitle format type
* Improved font list setting - the actual names of the fonts are now listed
* Add support to OpenType font type (OTF)
* Improved calibration window, so it's now possible to also reset the calibration settings
* Subtitle settings can now be changed while in playback without side effects

**Discs**

* Fix resume of Blu-Rays and DVD ISOs in file mode (not in library)
* Fix playback of some optical discs on Linux due the incorrect mapping of mountpoints
* On Linux optical media is now mounted by default (via udisks)
* Partial code cleanup and platform split of disc drive handling
* Skin cosmetics
* Fix duplicated context menu items

**EDL**

* Fix EDL mute sections and EDL cuts

**GUI**

* Fix wrap lists
* Fix hitrect on auto sized buttons
* Fix some context menu options not triggering the respective builtin action
* Independent volume setting for GUI sounds [PR](https://github.com/xbmc/xbmc/pull/21258)
* Password reveal button in keyboard dialog [PR](https://github.com/xbmc/xbmc/pull/20000)

**Input**

* Added Steam Deck built-in controller support

**Skinning**

* Add a new Colour Picker window dialog to allow display a colour list
* Improved image control to support read dynamic $INFO data to "colordiffuse" tag
* Improved Player Process Info window - new information has been added and grouped by context
* New media flags for HDR videos: detect, store and process the type of HDR in a video file [PR](https://github.com/xbmc/xbmc/pull/19983)
* Skinners can now define modal dialogs if its visibility depends on Boolean condition evaluation
* Deprecation of old infolabels with the introduction of new generic ones (e.g. Player.Editlist, Player.Cuts, etc)

**Estuary/Estouchy**

* Estuary PVR Home Screen: New widget for timers (replacing old current/next recording widget)
* Estuary PVR Home Screen: Add percentage played progress bars to Recent Channels and Recent Recordings widgets
* Estuary PVR Home Screen: Change default click action to open the Guide window
* Improve display of EDL markers on the default skin (EDL mutes are now shown, cut sections are also identified)

**Games**

* Savestate manager for Retroplayer with captions describing the state of the game provided by https://retroachievements.org/ [PR](https://github.com/xbmc/xbmc/pull/20913)
* In-game Port Setup dialog to change between game controllers [PR](https://github.com/xbmc/xbmc/pull/20505)

**Platform Specifics**

* **UNIX Family Platforms**:

  * Implement WS-Discovery (SMB discovery) for *ix platforms (Android/Linux/Apple) [PR](https://github.com/xbmc/xbmc/pull/19971)
* **iOS/TVOS**:

  * Improved Siri Remote handling [PR](https://github.com/xbmc/xbmc/pull/19744)
  * Improved "Now Playing" info [PR](https://github.com/xbmc/xbmc/pull/19602)
* **macOS**:

  * Initial support for M1 native including native windowing/input handling [PR](https://github.com/xbmc/xbmc/pull/20200)
    **NOTE**: We do not provide prebuilt M1 dmg's. Any devs willing to work on ironing out the many corner cases of the native windowing implementation, don't hesitate to ping @fuzzard on the forums if you have any questions.
  * Extend GameController support to OSX [PR](https://github.com/xbmc/xbmc/pull/18790)
  * Many code cleanups/refinements/refactors
* **Android**:

  * Update Android build to use Gradle for signing/aligning/packing [PR](https://github.com/xbmc/xbmc/pull/20599)
* **Linux**:

  * Add ACES/Hable Tonemapping for GLES [PR](https://github.com/xbmc/xbmc/pull/20157)
  * More BiCubic Shaders for GLES [PR](https://github.com/xbmc/xbmc/pull/20156)
  * Pipewire support [PR](https://github.com/xbmc/xbmc/pull/19533)
* **Windows**:

  * New setting to use 10 bit swapchain for SDR videos. Improves video quality and more precise colour conversions: YUV to RGB, limited to full range, shaders, etc. This is true even if video output is limited to 8 bit RGB by system or graphics driver. [PR](https://github.com/xbmc/xbmc/pull/20014)
  * Improved DXVA2 (HW video decoding) performance by sharing decoding and rendering surfaces. Avoids video copy operations and drastically reduces video memory usage on NVIDIA and AMD graphics using recent drivers. [PR](https://github.com/xbmc/xbmc/pull/20900)

**i8n support**

* Harfbuzz rendering for scripts with open type font shaping features [PR](https://github.com/xbmc/xbmc/pull/19765)

**PVR**

* Channels and Recordings can specify a provider [PR](https://github.com/xbmc/xbmc/pull/19395)
* Read-only recordings supported
* EPG Search: Add Saved Searches, incl. new Estuary PVR Home Screen widget
* Channel Manager: Add possibility to refresh all channel logos
* Settings: Add possibility to specify which data to delete when resetting PVR database
* Automatic cleanup of cached PVR images (texture.db and cached image files)
* Functional Improvements for multi PVR Add-on scenarios
* Performance improvements, esp. for large number of channels

**Build System/Dependencies**

* Most dependencies have been updated to latest, or close to, for Apple/Android platforms
* Many cmake updates to update build system

**Date/Time**

* Many many updates/changes to use std::chrono throughout the code base

**Addons**

* Colour Picker [PR](https://github.com/xbmc/xbmc/pull/20335)
* Colour button setting [PR](https://github.com/xbmc/xbmc/pull/20370)
* Add support to add video HDR type info to a video list item
* Function for removing orphaned dependencies recursively [PR](https://github.com/xbmc/xbmc/pull/19843) 

If you want to take the plunge, you can get Alpha 1 from [here](https://kodi.tv/download). Select your platform of choice, and look in the "Prerelease" section. Again, though, please: expect some breakage, don't use this as your daily installation unless you know how to get things working again, and please share your experiences back with us so we can really get going on those bugs.

As usual - well, it is open source - you can see what's changed between v20 and v19 [here](https://github.com/xbmc/xbmc/compare/Matrix...xbmc:20.0a1-Nexus). It's a long list...