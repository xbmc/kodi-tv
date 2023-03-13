---
title: Kodi 20.1 "Nexus" - Release
date: 2023-03-13T10:43:40.751Z
author: Team Kodi
tags:
  - Release
featured_image:
  title: Kodi 20.0 "Nexus" Splash Screen
  src: /images/blog/kodi-20.1-nexus-splash.jpg
  alt: Kodi 20.1 "Nexus" Splash Screen - a blue Kodi logo sits in the centre of a
    black page, around it, a dial - a gauge or chronograph, perhaps.
---
As is always inevitable in software, we are back with a new release of Kodi 20.x "Nexus".

An assortment of bug fixes, some backports, no real new features. Full changelog since 20.0 on [Github](https://github.com/xbmc/xbmc/compare/20.0-Nexus...20.1-Nexus), as usual.

### **Release notes**

**Audio**

* **@fritsch** has been working feverishly on Android-related audio issues over the past couple of months, and in combination with **@thexai** has introduced an algorithm to look to overcome some audio issues particularly aimed at Android devices. A summary is:

  * Algorithm runs for 30 seconds to learn what is going on: during this time no corrections are done, but the internal `m_disconAdjustTimeMs` is updated to a new value whenever when the sync error is found to increase. After 30 seconds the learning stops and the final `m_disconAdjustTimeMs` is set as: `m_disconAdjustTimeMs * 1.15 + 5.0`.

  With firmware specialities for AudioTrack Write behaviour now kind of "well known" the systematic issue can be worked around easily. This helps users on affected system to not have to create an `advancedsettings.xml` for a manual fix.

**DVD**

* Playback of DVD folder structures over network sources (e.g. SMB/NFS/HTTP, etc.) has been fixed.

**Filesystems**

* A fix in Samba was made that "corrected" a long-standing assumption - it turns out that documentation doesn't always match code implementation. We now handle both the old Samba implementation and the new "correct" implementation.
* Further improvements to the new NFS4 implementation have been made by **@thexai** . This fixes stalls/errors and brings some performance improvements to our NFS implementation.

**Game/Retroplayer**

* Assorted fixes to the new Savestate Manager to improve usability. Thanks to **@KOPRajs** for reporting, and also providing the PR to fix the issues found.
* An assortment of OSD improvements by **@garbear** resolving further issues reported by **@KOPRajs**.
* A number of performance improvements (memory reads, faster dialogs/savestates).
* Input fixes have been made that allow resetting multitap controller inputs, as well as fixing an issue around "ignored" input buttons not being saved.
* Sync of some of the common controller types has been made

  * `game.controller.default`
  * `game.controller.keyboard`
  * `game.controller.mouse`
  * `game.controller.snes`

**General**

* Fixes various overflows when using new chrono infrastructure. This fixes "keep audio device alive" when passthrough is used with an AVR.
* A number of fixes by **@ksooo** that aim to fix regressions regarding context menu items/behaviour.
* A fix for an issue on 32-bit systems that affected the sorting of items. Thanks **@vpeter4**.
* Fixes regarding the rework of the Favourites window have been addressed. This returns behaviour found in v19 for the following:

  * support actions `up`/`down` plus key mapping for `u` and `d` keys.
  * support action delete plus key mapping for `delete` key.
  * change keymaps to open the Favourites Browser window instead of the Favourites dialog as currently.
* A fix by a returning team member (**@CrystalP**) that resolves crashes due to Unicode characters.

**Platform Specific**

* Android

  * Fix packaging regression that affected some parts of the Python `PyCryptodome` module.
* Windows

  * A fix was made to address an issue where some less-than-usual dimension videos were causing AMD systems to fallback to software decoding instead of using DXVA.
  * A packaging issues on Windows platforms meant that Chorus was unable to be used. A fix was found by **@CrystalP**, so users wanting to access Chorus from a Windows host can now rejoice.

**PVR**

* A fix to resolve PVR Channel Groups to correctly show channels ordered as provided by a PVR backend.

**Python**

* A bump of cPython to 3.11.2 was made to fix an upstream issue with the `ElementTree` binary module. This fixes crashes on Android when an installed addon uses the common `ElementTree` Python module.

**Subtitles**

* A regression was fixed regarding Right to Left language subtitles placing punctuation incorrectly. It turns out that **@CastagnaIT**'s implementation was too correct, and an informal standard adopted by subtitle creators to place punctuation in Left to Right positions in Right to Left subtitles was worked around.
* A couple of fixes for WebVTT subtitles were made to resolve overlapping of segments.
* Line spacing has been altered in our use of `libass` to avoid overlapping of text boxes.

**UPnP**

* **@enen92** has made a number of improvements and fixes when Kodi is being used as a UPnP server. He has fixed a number of regressions around listings and artwork.

Thanks, as always, to everyone who has helped us track down and fix any issues. We endeavour to minimise the issues everyone experiences, but with such a large project, and the fact everyone contributing to Kodi is a volunteer, issues and bugs are a part of life. if you happen to experience any bugs/issues, don't hesitate to reach out on the forums, or raise an issue on Github.

As this is a point release, there are no major changes since the previous version, and you should be fine to install this straight over the top of any existing Kodi 20.x installation - indeed, this will happen automatically on many platforms. However, as for all software installations, back up your userdata beforehand if you've any doubts or have anything you can't afford to lose (and definitely do this if you're going for a major version upgrade).

A list of all changes for this version can be found at [GitHub](https://github.com/xbmc/xbmc/milestone/154?closed=1). If you want to read back on the full history of v20 itself, or of previous versions, you can find the corresponding articles in the relevant [blog posts](https://kodi.tv/blog/tag/release).

Application deployment on different platforms (notably the Microsoft Store) can vary considerably due to circumstances outside of our control, so just be patient, and the update will inevitably find its way through.

**Android Deployment**

We always do whats known as a "staged" deployment roll out for Android. So if you don't receive the update immediately, be patient, as it will come through over the next week.