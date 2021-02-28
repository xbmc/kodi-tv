---
title: 'XBMC 13 -Gotham - June and July Cycles'
date: 2013-08-04T04:00:00Z
author: Nathan Betzen
featured_image:
  src: /images/blog/settings_descriptions.jpg
  title: 'settings_descriptions'
  alt: 'settings_descriptions'
---
As has been the case for a few months now, for those who just can’t wait for a write-up about the newest alpha but tend to steer clear of the bleeding edge of nightlies, the new build should typically be available on the 1st of the month at [mirrors.xbmc.org/snapshots](http://mirrors.xbmc.org:8989/snapshots/).

 With that said, we’ve now completed months #5 and #6 of our monthly development cycle, and there’s much to talk about.

 System-Wide
-----------

 These past two months have primarily seen the growth and refinement of already existing system-wide features. A few more notable of those features include:

 Ripped CDs are now automatically added the the music library, and ripping support has been extended to allow for encoding into AAC and WMA, in addition to the currently supported codecs.

 One of the first big benefits of the settings refactor has been the inclusion of new settings descriptions. Now, when you highlight a setting that previously made next to no sense, a small description will pop up clarifying what the setting actually accomplishes, as can be seen near the bottom of the below image.

 [![settings_descriptions](/sites/default/files/uploads/settings_descriptions-300x187.jpg)](/sites/default/files/uploads/settings_descriptions.jpg)

 Those familiar with Github are encouraged to consider [adding more settings descriptions](https://forum.kodi.tv/showthread.php?tid=170528&amp;amp;pid=1476835 "Help adding settings descriptions").

 Additionally, profiles can now have their settings levels locked, so if your kids have their own profile, they can’t accidentally switch to more advanced settings, causing major problems throughout XBMC.

 The default Wunderground addon has been updated to work with recent builds of XBMC. This primarily results in fixes for previous alphas, but also adds support for 5 locations, and allows for more appropriate labels in certain cases. Backwards compatibility was removed with this update, so users of this addon who are still running Eden may find weather no longer works. Those users are encouraged to switch to the Yahoo weather addon or update to XBMC 12.2.

 For those users who experience exceptional lag over their local network, a new [Advanced Setting](https://kodi.wiki/view/Advancedsettings.xml "Advanced Settings Wiki") has been included that allows significant cacheing over the network. In most modern networks, this setting should not be necessary, but it is useful in some edge cases.

 Finally, recent work has been done to speed up the pace at which XBMC loads thumbnails for videos without any attached artwork. The speed of thumbnail loading had regressed since XBMC 11. This work returned some of that speed.

 OS-specific Updates
-------------------

 Both XBMC for Windows and OSX now support their respective copy/paste functions (either ctrl+v or CMD+v).

 XBMC for Android has finally be updated to match the other platforms with Zeroconf support. In particular, this means it can act as an Airplay receiver. Additionally, XBMC can now act as a default player of video, audio, and image files when launched from an Android file browser.



 Conclusion
----------

 Of course, as always, this is merely a very small sample of the many changes in these two cycles. Now, if you are feeling a bit brave and a bit lucky, it’s time to start downloading. Be aware though, that this is very alpha software with potentially numerous bugs. There is a good chance that this alpha will break on you.

 Should want to download and install XBMC, please visit our download page.


 * * [Official XBMC downloads](https://kodi.wiki/download/)

 ### How to Contribute

 If you use this cycle’s build, we encourage you to submit bugs in Trac, provide support in our [Forums](https://forum.kodi.tv/ "XBMC Forums") where you can, or [donate](https://kodi.wiki/contribute/donate/ "XBMC Foundation Donations") to the Foundation if you like.

