---
title: 'XBMC 12.3 - Frodo fixes!'
date: 2013-12-23T03:00:00Z
author: Martijn Kaijser
featured_image:
  src: /images/blog/12_3-Frodo.png
  title: ''
  alt: ''
---
![zappy-santa](/sites/default/files/uploads/zappy-santa-290x300.png)

 First of all we want to wish happy holidays and a merry Christmas to all our users, developers, contributors and every one else. Thank you all for the support and help and for enjoying our software. Let’s hope the year 2014 will bring all of you health and happiness and of course make XBMC even more great than it already is.

 Now for the important news and Christmas surprise. It has been around seven months after the release of XBMC 12.2 and we are happy to announce XBMC 12.3 with fixes for bugs found in the 12.2 release. The list of fixes contain several bug fixes that are back-ported from the ongoing development from our 13.0 Gotham release. The list only contains fixes that are deemed critical and are relatively easy to apply to the Frodo 12.2 release without risking stability regressions. This means we are aware of several shortcomings of Frodo and trying to fix those would be to intrusive or risky to apply. This also means that 12.3 will be the last of the Frodo line and all future, major improvements will only be included in Gotham 13.0

 Without further ado here’s the list of fixes included:

 
 * OSX 10.9 Maverick fixes that appeared when it was release
 * update PVR addons
 * several PVR related bugs
 * memory leaks
 * audio channel mapping
 * possible crash on progress dialog
 * and more
 
 You can read the complete list of fixes [here](https://github.com/xbmc/xbmc/compare/65d92a7651...55ba63d3ed)

 ### Dealing with OSX 10.9

 As many of you may have experienced, 10.9 has caused a number of issues for our current releases. In addition to forcing us to release a 12.3 version, we’ve learned that 10.9 appears to have reset security settings. Now to install XBMC, you need to right click the application after it’s been installed and select “Open” from the list (this need only be done once).

 Alternatively, you can go to System Preferences -\> Security & Privacy -\> General. From there, unlock the lock at the bottom of the window and “Allow apps downloaded from: Anywhere.” This second method is the preferred method, as you will no longer be bothered for future XBMC updates.

  

 ### Previous releases

 As for the previous releases you can find the sum-up below.

 Fixes from 12.2 included:

 
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
 
 ### Updating

 To update to XBMC 12.3, please visit our [download page](https://kodi.wiki/download/ "XBMC Download Page"), which includes downloads for Windows, OSX, and Android, and instructions for Linux, iOS, the Apple TV, and the Raspberry Pi. XBMCbuntu users can see [these instructions](https://kodi.wiki/view/XBMCbuntu "XBMCbuntu Upgrade") for upgrading to 12.3 using **ppa:team-xbmc/ppa**.

 If you have any problems read the [Frodo FAQ](https://kodi.wiki/view/XBMC_v12_%28Frodo%29_FAQ), the [Raspberry Pi FAQ](https://kodi.wiki/view/Raspberry_Pi_FAQ "Raspberry Pi FAQ"), or the [Android FAQ](https://kodi.wiki/view/Android_FAQ "Android FAQ"), depending on your version.

 ### How To Help

 If you would like to help with XBMC, we encourage you to submit bugs in Trac, provide support in our [Forums](https://forum.kodi.tv/ "XBMC Forums") where you can, or [donate](https://kodi.wiki/contribute/donate/ "XBMC Foundation Donations") to the Foundation if you like.

 For those of you who are tracking and submitting bugs: You may notice that Github has an “Issues” section. The Team would very much appreciate it if you did not submit bug reports through that section, but rather continued to use the forums and Trac. At the moment, the Team is using Issues as a concise means of grouping and identifying particular bugs that they gather from the forum and Trac sources. Thanks for your help!

 