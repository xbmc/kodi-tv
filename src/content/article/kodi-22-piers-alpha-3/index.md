---
title: Kodi 22 "Piers" Alpha 3
date: 2026-04-01T15:22:00.000+01:00
author: Team Kodi
tags:
  - Developer
  - Prerelease
featured_image:
  src: /images/blog/kodi_splash_v22.0_piers_alpha_1080p.webp
  title: Kodi 22.x "Piers" Alpha Splash Screen
  alt: A sea of shades of purple - text in the background, a solitary Kodi logo
    and the name "Piers" in the foreground. Look closer, and the text is a huge
    list of all of the contributors to Kodi over the years.
---
Announcing the release of Kodi 22 "Piers" Alpha 3!

Usual words - the step from 21 to 22 is a major release, but it's also an Alpha at this stage, so you're going to get some bugs as well as funky new features. That is, of course, a major part of the point of early release software: please raise Github issues with full debug logs to help us resolve any regressions you wonderful testers come across.

Okay, what's new in this version?

## Changelog

### Release highlights

* Added support for **taglines in TV shows**
* Added support for **H264 AVCC subtitles**
* Added support for **full IANA language tags**
* Added JSON RPC methods "**Player.GetChapters**" and "**Player.OnPropertyChanged**"
* Upgraded **FFmpeg to v8.0.1**
* Upgraded **Python to v3.14.3**
* Changed MySQL/MariaDB charset to **utf8mb4** and collation to **general_ci** (case insensitive)

### Video

* Improved Blu-ray support for both menus and playback
* Improved TV show episode handling for blu-ray
* Improved changing chapters in movies
* Improved seeking during tempo change

### Audio

* Changed default samplerate from 44.1kHz to 48kHz
* Fixed missing 200ms of audio at the start of video playback
* Fixed occasional missing audio when changing playback speed
* Fixed AC3 audio duration being incorrect for non-48KHz content
* Improved handling of low-latency audio

### Subtitles

* Fixed handling of WebVTT (ISOBMFF) subtitles
* Fixed PGS/VobSub subtitle selection for foreign audio tracks
* Fixed crash when handling some BCP47 language tags added in Alpha 2

### Library

* Improved tagline handling for movies and TV shows

### Games

* Added N64 support using software rendering
* Improved shader support
* Fixed Black screen for games with unaligned textures
* Fixed crash when changing resolution

### Streaming and network

* Fixed playback of tcp:// streams
* Fixed media info display for strm:// streams
* Fixed occasional errors resuming UPnP playback

### Stacks and compressed archives

* Added support for folder stacks, useful for DVD/Bluray folders
* Improved playback of folder stacks
* Improved handling media inside compressed archives
* Fixed handling of zip files greater than 4GB

### Profiles

* Improved creating profiles in custom folders
* Fixed deadlock when viewing Weather with multiple profiles
* Highlighted current profile in profile selection dialog

### Platforms

#### Android

* Fixed Auto Frame Rate (AFR) when resuming from standby
* Improved handling of Dolby Vision L5 metadata
* Improved handling of foreign subtitles


#### webOS Video

* General improvements for Dolby Vision support
* Improved handling of Dolby Vision L5 metadata
* Fixed tempo control

#### webOS Audio

* Improved audio passthrough support
* Improved volume handling in non-passthrough mode
* Improved Dolby Digital audio when using eARC
* Fixed AAC playback on some older versions of webOS

#### Windows

* Added front-to-back rendering
* Changed default audio output to XAUDIO and WASAPI
* Fixed Kodi unable to run on Windows 8.1

#### Linux

* Improved power management for systems without logind
* Extended range of keyboard keys and remote buttons
* Fixed long-pressing keyboard keys on Wayland

#### FreeBSD

* Extract to disk instead of RAM for large compressed archives

### A little love for developers and security researchers

* (For researchers) Dropped some unused code that kept tripping CVEs
* (For developers) New KodiAI app on GitHub
* (For developers) Added support for Visual Studio 2026
* (For developers) Improved compatibility with C++23
* (For developers) Added meson support for building dependencies

## Known Issues

* Kodi is incompatible with MySQL 9.6 ('sets' is now a reserved keyword). A fix will be devised for the next v22 prerelease.
* Blu-ray stream details aren't saved in the library

## Builds

If cutting-edge software is your thing, you can get Alpha 3 from [here](https://kodi.tv/download). Select your platform of choice, and look in the "Prerelease" section. Again, though, please: expect some breakage, don't use this as your daily installation unless you know how to get things working again, and please share your experiences back with us so we can really get going on those bugs. And take a backup first!

As usual, in the full spirit of open source, you can see what's changed since Alpha 2 [here](https://github.com/xbmc/xbmc/compare/22.0a2-Piers...xbmc:xbmc:22.0a3-Piers) and from v21.3 [here](https://github.com/xbmc/xbmc/compare/21.3-Omega...xbmc:xbmc:22.0a3-Piers). 
