---
title: 'XBMC 12 Frodo - Beta 2 Now with Android!'
date: 2012-12-01T03:00:00Z
tags:
  - Prerelease
author: Nathan Betzen
---
We are excited to announce Beta 2 of XBMC 12 today, as it brings with it many fixes and one long awaited major update. As you know, XBMC currently supports OSX, Linux, Windows, iOS, and the ARM-based Raspberry Pi. That’s a great list, but anyone paying attention could tell you that a massive, critical platform is still missing. Well, Scott Davilla and Cory Fields (theuni) have been working tirelessly to bring one more platform to the fold. And we’re all excited to say that we are finally ready to release the very first beta of [**XBMC for Android**](https://kodi.wiki/view/XBMC_for_Android_specific_FAQ).

 To run this beta, you will need a fairly modern Android phone, tablet, or other device. We have determined that any Android device that doesn’t include the NEON extension is simply going to run too slowly to be useable. If you are uncertain whether your device is supported, feel free to visit the [XBMC for Android compatibility list](https://kodi.wiki/view/Android_hardware "XBMC for Android compatibility list").

 Alternatively, you can simply install the XBMC for Android apk. If your device is not supported, XBMC will post a warning when you try to launch the app and exit out. If it is, and it isn’t included on the compatibility list, feel free to add it.

 One Android issue worth mentioning: at present XBMC is likely to load fairly slowly on the first run as it unpacks itself. This is expected behavior. After first run, it should load quite a bit faster.

 **Update 2**: Users should be aware that an update to Android 4.2 appears to have temporarily broken XBMC support for all you Nexus and Cyanogenmod users (and anyone else running 4.2). Beta3 should be right around the corner, and we hope to have a fix in place by the time that rolls out.

 ### Controller Support

 Without a doubt, one of the most popular controllers for PC at present is the Xbox 360 Controller. It is invariably the most supported controller for all AAA title Windows games (along with numerous games being ported for Steam for Linux), so it was undoubtedly time for the controller to become fully plug and play compatible with XBMC. Thanks to the work of Shiretoko212, rowan.border, and all [those who contributed](https://forum.kodi.tv/showthread.php?tid=135871 "Xbox 360 Controller fix thread") in this thread, the previously outdated 360 keymap has been updated and dramatically improved so that now almost any 360 controller, regardless of version, should be immediately recognized by XBMC assuming a driver is in place. For those interested in using their 360 controller to control XBMC, check out this [360 button map](https://forum.kodi.tv/showthread.php?tid=135871&amp;amp;pid=1254007 "360 Controller button map") to show what all the buttons do in XBMC.

 ### Audio Fixes

 Easily the number one reported issue with Beta1 was a lack of sound in Windows. This issue was relatively simply resolved by switching from WASAPI to DirectSound as the default output. Users who prefer WASAPI can still easily switch back in System-\>Audio Output.

 ### Other Fixes

 Needless to say, there were numerous other fixes, including fixes to nodes and smartplaylists, the volume range of Airtunes in Windows, a speedup of EPG data importing, solving a minor files issue, and others. To see all the changes, feel free to refer to the [Beta2 Git Changelog](https://github.com/xbmc/xbmc/issues?milestone=10&page=1&state=closed "XBMC Frodo Beta 2 changelog"). Additionally, there are several other issues still being worked on, and more will likely crop up during Beta testing. If you would like to report an issue, please search for the issue in our [forums](https://forum.kodi.tv/ "XBMC Forums") first and report any verified bugs in [Trac](http://trac.xbmc.org/ "XBMC Issue Tracking System").

 ### Conclusion

 But enough of all that. Now is the time to get to [downloading](https://kodi.wiki/download/ "XBMC Download Page").

 Let us know what you think of the changes in the comments below, or, if you like, via the [donation button](https://kodi.wiki/contribute/donate/ "XBMC Donations") at the top of the page.

 And if you have any problems, don’t hesitate to post about them in our [forums](https://forum.kodi.tv/ "XBMC Forums") and report verified bugs in [Trac](http://trac.xbmc.org/ "XBMC Issue Tracking System").

 