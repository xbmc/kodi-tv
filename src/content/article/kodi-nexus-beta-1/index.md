---
title: Kodi "Nexus" Beta 1
date: 2022-11-14T11:42:10.052Z
author: Team Kodi
tags:
  - Developer
  - Prerelease
featured_image:
  src: /images/blog/nexus-beta-splash.webp
  title: Kodi 20.x "Nexus" Beta Splash Screen
  alt: Kodi 20.x "Nexus" Beta Splash Screen
---
Here we go folks: ramping things up, so we now have the first Beta for Kodi v20, "Nexus".

As always, thanks go out to all contributors for their work. We are nearing 4,000 commits since v19 "Matrix" was first released on February 19th 2021.  For everyone that has contributed, both those in Team Kodi, and all other developers that choose to roll up their sleeves and fix an issue - thank you. Everyone appreciates you for making Kodi better.

We also want to thank all those users who provide endless support on the forums, we appreciate you, and all the support anyone provides to our users.

### **Release notes**

**Addons**

* Assorted binary addon fixes/updates - imagedecoder, screensaver, vis. Thanks to **@AlwinEsch** as always for the huge amount of work supporting Kodi's addon interfaces.
* Fix/refactor "multi instance" GUI settings for addons. This work carries on from the PVR binary addons being able to have multiple backend instances ([link](https://github.com/xbmc/xbmc/pull/21890)).
* New id3 tag metadata stream support for PVR Radio addons ([link](https://github.com/xbmc/xbmc/pull/21424)).
* Add new `SetVideoResolution` with max resolution ([link](https://github.com/xbmc/xbmc/pull/21319)).

**Database**

* Clean DB was previously broken in earlier Nexus builds. This has now been fixed by **@enen92** ([link](https://github.com/xbmc/xbmc/pull/21980)).

**Disc**

* Update libbluray to 1.3.2 for all platforms ([link](https://github.com/xbmc/xbmc/pull/21809)).
* Fix a "double free" issue when ejecting a disk ([link](https://github.com/xbmc/xbmc/pull/21903)) - *Sidenote: thank you **@prahal** for your first contribution to Kodi core.*
* Handle `BD_EVENT_DISCONTINUITY` ([link](https://github.com/xbmc/xbmc/pull/21918)).

**Filesystem**

* UPNP fixes for picture handling ([link](https://github.com/xbmc/xbmc/pull/21823)).
* First time contributor **@ihipop** improved support for subtitle formats when accessed via UPNP DLNA ([link](https://github.com/xbmc/xbmc/pull/22038)).

**General**

* Fix bookmark resume for .strm files ([link](https://github.com/xbmc/xbmc/pull/21830)).
* Fix `jsonrpc Player.GetProperties` response when playback from a widget is done ([link](https://github.com/xbmc/xbmc/pull/21829)).
* Fix race condition in `CJobmanager` causing crashes ([link](https://github.com/xbmc/xbmc/pull/21841)) - *Sidenote: **@neo1973** is our newest team member, welcome to the team!*
* Application refactors. A large effort by **@notspiff** refactoring some very old code into more manageable chunks.
* Assorted improvements found by static analysis tools. Thanks **@Rechi**.
* Write correct duration to tracks in M3U playlists ([link](https://github.com/xbmc/xbmc/pull/21940)).
* Improvements to the header inclusions for a lot of areas of Kodi. This is a step to improve build times in general that mostly aims to reduce the number of components rebuilt when changes were made in a few extremely common objects. Thanks **@notspiff**, **@ksooo**.
* **@rubpa** has diagnosed and fixed a race condition in picture thumbnail loading ([link](https://github.com/xbmc/xbmc/pull/22082)).

**Input**

* Mouse cleanup ([link](https://github.com/xbmc/xbmc/pull/21876)).

**network**

* Another first time contributor **@jjlin** added support for HTTPS proxies ([link](https://github.com/xbmc/xbmc/pull/21966)).

**Platform Specific**

* **Unix based platforms**

  * Android and Apple platforms now ship with Python 3.11 built in. Python 3.11 is a very notable release due to considerable improvements in CPython regarding speed. Checkout the [python release notes](https://docs.python.org/3/whatsnew/3.11.html) for more info.
* **Android**

  * Android builds will now be built as `RelwithDebinfo` by default for our Jenkins builds. This means nightlies and most other Android builds built by PRs will be with the more optimised `RelwithDebinfo` instead of `Debug`. This was done as some issues being investigated by devs was found to be purely cause by the slower Debug build types.
  * A number of improvements by **@joseluismarti.**
  * More class parameters have been added to allow more corner cases for starting android apps ([link](https://github.com/xbmc/xbmc/pull/21922)).
* **macOS**

  * Prevent crash on exit ([link](https://github.com/xbmc/xbmc/pull/21853)).
* **TVOS**

  * Sensitivity on the Remote has been reduced, and the tooltip and setting has been made more intuitive by **@sy6sy2.**
* **Windows**

  * Remember window position of Kodi when run in windowed mode ([link](https://github.com/xbmc/xbmc/pull/21820)).
  * First time contributor **@sryze** fixed a cmake warning for windows building ([link](https://github.com/xbmc/xbmc/pull/22026)).
  * A new setting to allow setting the peak luminance for a display ([link](https://github.com/xbmc/xbmc/pull/21973)).
  * Fixes to slow python usage on UWP platforms (eg Xbox) ([link](https://github.com/xbmc/xbmc/pull/21997)).

**PVR**

* Assorted EPG search fixes.
* Added possibility to browse available PVR client add-ons from PVR settings.
* Channels and Recordings now can be sorted by provider.
* Various fixes and performance improvements.
* Large refactoring improvements.

**Favourites**

* Replace favourites dialog with new favourites window, providing different views and other enhancements.

**Skinning**

* Added a new infobool `System.Setting(hideunwatchedepisodethumbs)` ([link](https://github.com/xbmc/xbmc/pull/21874)).
* **Estuary specifics**

  * PVR Channel Manager redesign.
  * Click on PVR Home screen section icon now opens Channels window again.
  * Some smaller changes to the PVR OSD.
  * Extend music context menu functionality, add ability to play albums directly from home screen.
  * Extend video context menu functionality.

**Subtitles**

* Fix for 3D MVC subtitles not appearing correct when frame packed ([link](https://github.com/xbmc/xbmc/pull/17317)).

**Video**

* Inputstream support for AV1 codec ([link](https://github.com/xbmc/xbmc/pull/21390)).
* Don't attempt to use hardware AV1 decode if forcing software decoding. This fixes AV1 thumbnail generation on devices that don't support AV1 hardware decoding ([link](https://github.com/xbmc/xbmc/pull/21834)).

Thank you once again to everyone who has contributed to this release.

This is the first Beta release of Nexus, and we are quite confident in its stability, however always backup your configs before testing, and please let us know of any regressions or issues you find.

If you want to take the plunge, you can get Beta 1 from [here](https://kodi.tv/download). Select your platform of choice, and look in the "Prerelease" section. 

As usual - well, it is open source - you can see what's changed between v20 Alpha 3 and Beta 1 [here](https://github.com/xbmc/xbmc/compare/20.0a3-Nexus...20.0b1-Nexus).
For further information on changes for the entire Nexus release so far, we have highlighted most of the major features/changes in the previous Alpha blogs, go to our website to catch up on them [here](https://kodi.tv/blog).
