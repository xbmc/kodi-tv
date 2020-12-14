---
title: 'XBMC 12.0 Frodo - Beta 1'
date: 2012-11-14T03:00:00Z
author: Nathan Betzen
featured_image: ""
---
**Update:** There was a packaging issue with the Beta1 Windows build that caused some scrapers to not install correctly. This has since been resolved, any Windows Beta1 users should grab the repack available at the download page.

 It’s been a mere eight months since Team XBMC [released XBMC 11](https://kodi.wiki/natethomas/2012/03/24/xbmc-11-0-eden/ "XBMC 11: Eden"). If you’ve been following along with us in that time, you already know about most of the new features, changes, and updates that our entire team has been working tirelessly to put into place. But you also know that all those features have only been available in monthly alpha builds.

 Now we are excited to say that we are finally ready to roll out the very first beta of XBMC 12 Frodo.

 ### The Name

 In the past, we’ve traditionally named our releases after fantastical places like Camelot, Babylon, and Eden. This time around, on the release set to be titled with the letter ‘F’, we decided to take a slight break from that naming process to honor our roots. Ten years ago, an individual with the username Frodo joined the Xbox Media Player team, bringing along his open source software project called YAMP. With the addition of Frodo’s project the three founders, Frodo, d7o3g4q, and RUNTiME, released the first non-beta version of the Xbox Media Player – XBMP 2.0 – as open source software. Frodo then spearheaded the move from XBMP to the more feature rich XBMC, including acting as the primary author for the initial UI engine.

 Today, thanks to the three founders’ decision to release open source, hundreds, if not thousands of people have contributed to XBMC in the form of core code, addons, skins, scripts, hosting, evangelizing, and more. Due in part to its open nature, XBMC has been ported to every major viable operating system and architecture. Skilled skinners have succeeded in making skins that resemble almost every major 10′ UI released in the past ten years, along with dozens of completely unique looks seen nowhere else. XBMC can be had on devices as inexpensive as $25 and can be the primary UI for PCs a dozen times more powerful than the original Xbox was. And for all that, it feels like we’ve only scraped the surface of XBMC’s potential, all because three people decided the project would be better off if it were released as free software.

 For that reason – and for so many others – we choose to honor our founders and the past ten years by naming XBMC 12 after one of them. Thanks, Frodo. And thanks d7o3g4q and RUNTiME as well. It’s been a great ten years.

 ### The Features

 Thanks to an incredibly successful GSoC experience and numerous dedicated developers who have been working on many projects for years, XBMC 12 figures to be one of the most anticipated feature updates in a long time. Features include…

 
 * HD audio support, including DTS-MA and Dolby True-HD, via the new [XBMC AudioEngine](https://kodi.wiki/view/AudioEngine "XBMC AudioEngine")
 * Live TV and [PVR support](https://kodi.wiki/view/PVR "XBMC PVR Setup Guide")
 * h.264 10bit (aka [Hi10P](https://forum.kodi.tv/showthread.php?tid=106051 "10bit video decoding")) video software decoding for anime
 * 64bit support in OSX to match the 64bit support in Linux
 * Improved image support, allowing the database to accomodate numerous additional image types
 * Support for the Raspberry PI
 * Initial support for the Android platform
 * Improved Airplay support across all platforms
 * [Advanced Filtering](https://kodi.wiki/view/Advanced_Library_Filtering "Advanced Filtering") in the library
 * [Advanced UPnP](https://kodi.wiki/view/HOW-TO:Share_libraries_using_UPnP "How to share libraries using UPnP") sharing
 * Translations now [powered by Transifex](https://kodi.wiki/blittan/2012/10/30/dear-addon-and-skin-developers/ "Transifex Announcement")
 
 Of course, that is merely a small selection of the many changes from the past seven months. For a more in depth look, feel free to review the write-ups of the alphas for each month.

 
 * [October](https://kodi.wiki/natethomas/2012/11/03/frodo-feature-freeze-and-the-october-cycle/ "October Cycle")
 * [September](https://kodi.wiki/natethomas/2012/10/10/xbmc-september-cycle/ "September Cycle")
 * [August](https://kodi.wiki/natethomas/2012/09/06/xbmc-august-2012-cycle/ "August Cycle")
 * [July](https://kodi.wiki/natethomas/2012/08/14/xbmc-11-0-july-cycle/ "July Cycle")
 * [June](https://kodi.wiki/natethomas/2012/07/12/xbmc-11-0-june-cycle/ "June Cycle")
 * [May](https://kodi.wiki/natethomas/2012/06/05/xbmc-11-0-may-cycle/ "May Cycle")
 * [April](https://kodi.wiki/natethomas/2012/05/02/xbmc-11-0-april-cycle/ "April Cycle")
 
 ### A Few Issues

 Needless to say, this is beta software. You should absolutely expect problems to occasionally crop up. At present, we are anticipating a number of issues as we switch XBMC over from the Eden addon repository to a new Frodo repository, including partly broken skins and various scripting/scrapers errors. Please bear with us if these problems do crop up. Additionally, PVR users will not be able to switch channels via the channel up/down buttons using their remotes or CEC due to a slight change in the way PVR keymaps are being handled. We are [aware of this issue](https://forum.kodi.tv/showthread.php?tid=145145 "default PVR remote behavior") and should have it fixed by Beta2.

 Needless to say, there are several other issues still being worked on, and more will likely crop up during Beta testing. If you would like to report an issue, please search for the issue in our [forums](https://forum.kodi.tv/ "XBMC Forums") first and report any verified bugs in [Trac](http://trac.xbmc.org/ "XBMC Issue Tracking System").

 As always, if your goal is stability, we recommend that you avoid updating until we have gone gold. If you do decide to install this beta, it is highly recommended that you back up your [userdata folder](https://kodi.wiki/view/Userdata "XBMC userdata folder").

 ### Issue Update

 Some of you Windows users may have noticed that the scrapers on XBMC 12 for Windows Beta1 were returning an error. This appears to have been an error introduced during the packaging phase that we managed to miss during testing. It appears only to affect users who are doing a clean install and not upgrading.

 We are right now building a fix that should resolve this error within the next few hours. Check back on this page, as we will update here when the issue has been resolved.

 The fix is now live. Happy downloading!

 ### Conclusion

 But enough of all that. Now is the time to get to [downloading](https://kodi.wiki/download/ "XBMC Download Page"). Linux users, you in particular will be happy to discover that we’ve finally got our beta PPA up and running, thanks to a number of devs, including our newest team member, wsnipex, and we’ve got an XBMCbuntu iso thanks to the efforts of team member erhnam.

 Let us know what you think of the changes in the comments below, or, if you like, via the [donation button](https://kodi.wiki/contribute/donate/ "XBMC Donations") at the top of the page.

 And if you have any problems, don’t hesitate to post about them in our [forums](https://forum.kodi.tv/ "XBMC Forums") and report verified bugs in [Trac](http://trac.xbmc.org/ "XBMC Issue Tracking System").

 