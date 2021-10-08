---
title: Kodi "Matrix" 19.2 Release
date: 2021-10-08T16:34:21.686Z
author: Prof Yaffle
tags:
  - Release
featured_image:
  src: /images/blog/kodi_splash_v19.2_matrix_final_1080p.jpg
  title: Kodi 19.2 "Matrix" Splash Screen
  alt: Kodi 19.2 "Matrix" Splash Screen
---
It's been some time since we released 19.1, and numerous issues have revealed themselves and been resolved in the intervening months. As such, we're probably overdue a formal release of the updates, so, without further ado - here's the latest release in the "Matrix" series.

As with other point releases, don't go looking for new features, as that isn't really the purpose here. Full details are on [GitHub](https://github.com/xbmc/xbmc/compare/19.1-Matrix...v19.2-Matrix), but here's the short form...

**PVR**

- Fixed: crash when accessing invalid PVR channel from favourites
- Fixed: crash on startup while searching for missing channel icons
- Fixed: crash on startup caused by missing timer type
- Fixed: "Delete permanently" of recordings from trash
- Other, more minor bug fixes

**Video Library**

- Fixed a bug that deleted UniqueID's when scraping the library, which caused unexpected behaviour for addons relying on those ID's

**Games**

- Added translations for emulators and game controller add-ons

**JSON-RPC**

- Expose icon path of EPG tags as 'thumbnail' property
- Expose series number of EPG tags as 'seasonnum' property.

**Network**

- Websocket: handles partial messages

**Add-ons**

- Fixed: display logic for official and third-party modules

**Windows specifics**

- Fixed: possible crash when switching monitors due to adding/removing hardware.
- Fixed: audio passthrough not working (randomly) on some systems when display refresh rate match is enabled.
- Improved: flip discard swap chain is used on all Windows 10 systems even if graphics driver does not support latest DirectX feature levels.
- Improved: 10-bit swap chain is used by default on Windows 10 systems when HDR display is detected (for 8-bit SDR video sources too).
- Fixed: possible crash related to WS-Discovery when non-computer devices (e.g. IP cameras) are attached to the same network.
- Fixed: possible crash when HDR is toggled on/off externally from Windows 10 display settings.
- Fixed: no picture or wrong black level with some video drivers when limited range output is enabled in conjunction with hardware acceleration DXVA2 and HDR passthrough.

**Android specifics**

- Fixed: external storage volumes not visible on devices running old Android versions

**Xbox specifics**

We can finally make 19.x "Matrix" available on the Xbox - thanks for putting up with the delay while we fixed the blockers!

- Fixed: crash on playback of 4K HEVC videos due to out-of-memory condition.
- Fixed: GUI rendered at 1080 and upscaled to 4K instead of native 4K.
- Fixed: 4K resolution is incorrectly reported in logs as 1920x1080.
- Fixed: crash when "Switch display refresh rate at Start/Stop" is enabled with 4K resolution.
- Fixed: tone mapping not used by default at playback HDR videos.
- Fixed: missing display refresh rate info on Video Debug Info OSD (Alt+O).
- Fixed: Internet SSL connectivity not working due not usable path to built-in CA certs bundle.
- Improved: swap chain performance using DXGI_SWAP_EFFECT_FLIP_DISCARD.
- Improved: 10-bit swap chain surfaces are used if an HDR-capable TV is detected (even for 8-bit SDR videos).
- Improved: HEVC DXVA2 decoder performance using 128 byte aligned decoder surfaces.


Thanks, as always, to everyone who has helped by reporting, isolating or fixing issues.

You should be fine to install this straight over the top of your existing Kodi version - indeed, this will happen automatically on many platforms - but, if you've any doubts, back up your userdata beforehand. Similarly, this is a minor version bump, so there's no change to database versions or anything else that's likely to break things.

If you're interested, you can read the merged PRs [here](https://github.com/xbmc/xbmc/pulls?q=is%3Apr+sort%3Aupdated-desc+milestone%3A%22Matrix+19.2%22+label%3A%22v19+Matrix%22+). If you want to read back on the full history of v19 itself, or of previous versions, you can find the corresponding articles in the relevant [blog posts](https://kodi.tv/blog/tag/release).

Application deployment on different platforms (notably, Google Play and the Microsoft Store) can vary considerably due to circumstances outside of our control, so just be patient, and the update will inevitably find its way through.