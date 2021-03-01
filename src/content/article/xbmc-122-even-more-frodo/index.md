---
title: 'XBMC 12.2 - Even More Frodo!'
date: 2013-05-02T04:00:00Z
author: Nathan Betzen
featured_image:
  src: /images/blog/zappy-frodo-background-680.jpg
  title: 'zappy-frodo-background-680'
  alt: 'zappy-frodo-background-680'
---
About a month and a half after the release of XBMC 12.1, we are happy to announce XBMC 12.2 with substantial fixes for 12.1 and 12.0 across all platforms. Fixes include:

 
 * Fixed infinite loop on addon dependencies, resolves crashing problem that arrose immediately post 12.1 launch
 * Numerous UPnP fixes
 * Memory leak fixed when XBMC is minimized
 * Various Raspberry Pi playback fixes and software codec support
 * Fixed OSX audio mixing
 * Fixed some audio-related crashes in Linux builds
 * AirPlay fixes
 * Bluray folder resume-bookmarks now work
 * Ability to scan for new content on file folders has been reimplemented
 * Language updates from Transifex
 
 Fixes from 12.1 included:

 
 * XBMC now supports using OSX’s default output device for audio as well as hardware decoding with Intel GPUs in OSX
 * XBMC no longer hogs audio for Linux and on resume audio will continue to work in Linux
 * Full iPhone 5 resolution is now enabled
 * Volume buttons on Android devices now control Android volume, rather than XBMC volume
 * Volume buttons on OSX devices once again control OSX volume, rather than XBMC volume
 * Player optimization on the Raspberry Pi, including more efficient playback, better subtitle support, and many crash fixes
 * iOS 6 support on the AppleTV 2.
 * XBMC does not crash when listed on the AppleTV top shelf
 * Added support for additional Xbox 360 controller types
 * Broader and more intelligent support for CEC devices
 * Fixed problems with several addons due to broken binary read/write in our python interface
 * Language fixes, including 7 new languages: Albanian, Burmese, Malay, Persian (Iran), Tamil (India), Uzbek, Vietnamese
 * AirPlay fixes, including making discovery of XBMC more reliable on OSX
 * Numerous crashing and stability fixes across all platforms
 
 For all users interested in maximum stability, we highly recommend that you update from 12.1 to 12.2. This is the XBMC you were looking for.

 ### Updating

 To update to XBMC 12.2, please visit our [download page](https://kodi.wiki/download/ "XBMC Download Page"), which includes downloads for Windows, OSX, and Android, and instructions for Linux, iOS, the Apple TV, and the Raspberry Pi. XBMCbuntu users can see [these instructions](https://kodi.wiki/view/XBMCbuntu "XBMCbuntu Upgrade") for upgrading to 12.2 using **ppa:team-xbmc/ppa**.

 If you have any problems read the [Frodo FAQ](https://kodi.wiki/view/XBMC_v12_%28Frodo%29_FAQ), the [Raspberry Pi FAQ](https://kodi.wiki/view/Raspberry_Pi_FAQ "Raspberry Pi FAQ"), or the [Android FAQ](https://kodi.wiki/view/Android_FAQ "Android FAQ"), depending on your version.

 ### How To Help

 If you would like to help with XBMC, we encourage you to submit bugs in Trac, provide support in our [Forums](https://forum.kodi.tv/ "XBMC Forums") where you can, or [donate](https://kodi.wiki/contribute/donate/ "XBMC Foundation Donations") to the Foundation if you like.

 For those of you who are tracking and submitting bugs: You may notice that Github has an “Issues” section. The Team would very much appreciate it if you did not submit bug reports through that section, but rather continued to use the forums and Trac. At the moment, the Team is using Issues as a concise means of grouping and identifying particular bugs that they gather from the forum and Trac sources. Thanks for your help!

 