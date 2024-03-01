---
title: Kodi 21.0 "Omega" Beta 3
date: 2024-03-01T09:39:24.149Z
author: Team Kodi
tags:
  - Prerelease
  - Developer
featured_image:
  src: /images/blog/kodi_splash_v21.0_omega_beta_1080p.webp
  title: Kodi 21 "Omega" Splash Screen
  alt: Kodi 21 "Omega" Splash Screen - the Kodi logo sits at the centre of a black
    screen, a stylised Greek letter "Omega" around it.
---

*Editorial note: this blog post has been delayed for technical reasons, so the release is already available.*

Time marches on for Kodi 21 "Omega", we are here with the third Beta release!

This is a major release, so, as you'd expect, it comes with many new features. However, with a core change to FFmpeg 6.0, there is a very good chance that some regressions may occur.  As such, please be aware that installing this will most likely break things, and we'd really like your help at that point to identify the problems and get them fixed. Please raise [Github issues](https://github.com/xbmc/xbmc/issues) with full debug logs to help us resolve any issues you wonderful testers come across.

First, we'd like to make a few targeted announcements.

**Android users**

Many users may still be on the Kodi testing track for their Android devices. It's far easier to leave the testing track from a 'phone-based device, but be aware that if your device is on the testing track, we will be continuing to deploy Beta 3 releases over the next week or so. If you wish to opt out of the testing group, one way you can is by visiting the following link [Google Play - Kodi testing track](https://play.google.com/apps/testing/org.xbmc.kodi). From here, you can opt out for your Google Play account. This is the best (and possibly only) way to opt out on many Android TV devices (e.g. Nvidia Shields).

With that said, for those adventurous types who would like to help us with testing, you can use the same link to opt in for a Google Play account.

**Skin Developers**

An API bump has been made for Kodi 21's testing cycle. See the following PRs for details:

https://github.com/xbmc/xbmc/pull/23926

https://github.com/xbmc/xbmc/pull/23862

This will require changes and submissions to the Omega branch for skins for those who submit to the Kodi repository. Reach out on the forums if you have any questions/concerns.

Please note, https://github.com/xbmc/xbmc/pull/23927 has been merged shortly after Beta 2, and all skins will need to update the GUI version number to be available in Omega repos for any builds (including nightlies) after Beta 2.

The following forum thread has the skinning change info for Omega: https://forum.kodi.tv/showthread.php?tid=372280&pid=3174566#pid3174566

And now, for the list of changes for Beta 3.

**Build/Dependencies**

* Support for building with `swig` 4.2.0

**General**

* The way in which buffer fill was handled was changed to care more for low-power CPU devices. Under certain circumstances, and with especially high manually-configured `readbuffer` factors, the buffer filling thread caused high CPU usage and introduced stutter by itself.
* Implemented new "Adaptive" setting in Services / Caching / Read Factor that allows a variable read factor based on cache level. This means that the cache fills faster, while at same time using a less aggressive read factor when it's already filled.
* Fixed media served through plugins not being accessible when a master lock is used.

**JSON-RPC**

* Add command to change playback speed (tempo).
* Add a command to activate screen saver.

**Music**

* Fix an issue with m3u playlists which didn't show art for the second and subsequent tracks: https://github.com/xbmc/xbmc/pull/24675.
* Allow navigation from artists directly to songs, missing out albums and discs.  This is more like how Spotify et al. navigate: https://github.com/xbmc/xbmc/pull/24649, forum thread https://forum.kodi.tv/showthread.php?tid=375313.
* Only drop music database triggers on clean if they exist, which fixes a problem that occurred if Kodi was closed/crashed whilst a clean was underway on the Music database.

**Platform Specifics**

* **Android**:

  * The audio changes for the Android ecosystem were documented in https://forum.kodi.tv/showthread.php?tid=376161.
  * Due to various firmware bugs on multiple devices we were forced to add some opt-in audio settings for (especially) the widely used FireTV Cube 3rd Gen, which were enabled by default until this beta, but sadly regressed on half-broken firmwares of other devices. It's not possible to maintain a deny list as available systems and versions change too quickly, plus Kodi release cycles can't be synchronised with every big vendor putting out fixes. As such, we decided to move this into an advanced setting, with more information available in the linked forum thread. Feel free to open new issues if you see regressions of some sort, but please don't forget your debug log, as help isn't possible otherwise due to the sheer variety of differently-broken boxes.
  * Another advanced setting now allows the output of high-precision 32-bit float from within Kodi for multi-channel PCM files. This is again an advanced setting because some devices fail silently when opening this combination. Float32 is the highest precision Android's Audiotrack Soundserver can handle. It was tested and is working on Shield and FireTV 4K 2nd Gen.
  * We received a whole lot of bug fixes from external contributors this time, with the focus on HDMI Hotplug after refresh rate changes and also Audio device enumeration. The long standing bug of losing Android IEC devices during IDLE is solved. We are very thankful for these contributions.
  * @quietvoid has implemented a new setting in Player / Processing that allows filter HDR dynamic metadata HDR10+ and/or Dolby Vision to improve compatibility in devices that has issues especially with hybrid videos that includes both types at same time.
* **iOS/tvOS**

  * Disable VTB (hardware decoding) for real-time interlaced videos.
* **Linux**:

  * Pipewire sink got a fixup for sample rate switching. With that updated code, the back-end server of Pipewire will switch the base sample rate whenever Kodi is run without additional other clients. This way, Kodi's audio will be output in the best possible and lossless way throughout the audio chain, including soundserver and audio device.
  * Adjust dependencies to build packages compatible with Ubuntu focal to noble for CPack building
  * @fightforlife has fixed an issue with RenderCapture used by things like Hyperion that fixes sporadic black screen captures
* **webOS**

  * Map info key on webos remotes.
  * Disable core dumps by default to reduce less storage being used on webOS TV's
  * Implement shutdown/reboot 
* **Windows**:

  * Improved chroma upscaling when are used Pixel Shaders or Software render methods and also DXVA only in specific cases: AMD + old drivers + 10-bit SDR.
  * Improved channel layout match in WASAPI when audio drivers not support same exact speakers’ layout. This is only relevant for PCM (not passthrough).
  * Increased the number of video surfaces in DXVA H.264 decoding to prevent video corruption in some rare H.264 streams.

**Pictures**

* Long time contributer @notspiff added avif image support.
* @enen92 fixed exif parsing regression that was introduced in Matrix (v19)

**Scraping**

* `.nomedia` files can now be used to exclude folders inside a TV show: https://github.com/xbmc/xbmc/pull/24330
* @78andyp fixed, what looks like has been broken for a long period, the ability to scrape episodes in Bluray folders (BDMV)

**Skinning**

* The estouchy skin has been retired from default installs. If anyone would like to continue working on the skin for future use/availability, you can find the new home for the skin at https://github.com/jjd-uk/skin.estouchy for now.
* Player control dialog for Estuary has been updated, along with other changes to bring the skin up to date for 5.17.0 API
* A fix for duplicate music flags was made by @jjd-uk 

**UPnP**

* @enen92 has once again made an assortment of fixes for UPNP such as fixed broadcasting of item updates and mark as watched state.
* An option was added to avoid volume synchronization to a UPNP target

**Known Issues**

You can see open issues on our tracker at https://github.com/xbmc/xbmc/issues. However, to call out a couple of specifics, please be aware of the following if you're planning on upgrading:

* There are seek issues with multi-part MP4 files on Android (https://github.com/xbmc/xbmc/issues/23673).
* We've had reports that the new splash screen looks like an OpenGL corruption; we know, it's not a problem, so don't panic. We'd be happy to have your artwork contributions if you'd like to work on an alternative. 
* If remote sources are unavailable at startup, users are seeing significant delays while waiting (https://github.com/xbmc/xbmc/issues/23958).

We continue to march forward to what we hope will be a successful v21 Omega release in the new year. 

If you love to live on the bleeding edge, you can get Beta 3 from [here](https://kodi.tv/download). Select your platform of choice, and look in the "Prerelease" section. Again, though, please: expect some breakage, don't use this as your daily installation unless you know how to get things working again, and please share your experiences back with us so we can really get going on those bugs.

There is always a great deal more changes/fixes/updates than what we can highlight in these reports, so as usual you can see a fuller list of what has been merged between v21 and v20 [here](https://github.com/xbmc/xbmc/compare/Nexus...xbmc:21.0b3-Omega). For a more targeted look at the changes made since v21 Beta 2, you can see those changes [here](https://github.com/xbmc/xbmc/compare/21.0b2-Omega...21.0b3-Omega).
