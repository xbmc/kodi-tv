---
title: 'XBMC 11 Eden: RC1: UPDATE'
date: 2012-02-26T03:00:00Z
author: Team XBMC
featured_image: ""
---
[![rc_xbmc](/sites/default/files/uploads/rc_xbmc.jpg "rc_xbmc")](/sites/default/files/uploads/rc_xbmc.jpg)  
 XBMC 11 Eden: RC1, ready for take off.

  Today we are excited to announce Eden Release Candidate 1. It has been a productive few weeks since Beta 3, as we’ve ironed out numerous minor (and one or two major) bugs.

 In particular, we’ve:

 
 *  Given preference to external subtitles over internal subtitles
 * Updated a number of XBMC translations for final release
 * Resolved a number of outstanding Airplay issues
 * Allowed specified movie sets to be sorted by title, rather than year, without changing the default sort order on other sets.
 
 We’ve also added the useful feature of IP weather look up. Now, on a clean install of XBMC, users will no longer need to manually enter their weather location. Instead, XBMC will simply check the IP location of your box and auto-set the weather.

 For a complete rundown on changes made since February 9th, feel free to visit [here](https://github.com/xbmc/xbmc/commits/master "XBMC Eden Commit History").

 Now you all know what to do. Head on over to our [download](https://kodi.wiki/download/ "XBMC Downloads") page, pick your favorite version of XBMC, and let us know how the experience goes in the comments.

 One additional note: The new release of XBMCbuntu is currently delayed due to packaging issues. We will update this post with new info when it is ready.

 Update
------

 Unfortunately, it appears a major bug has snuck into RC1 resulting in video lag across all platforms under certain situations. To resolve this, users are encouraged to add an [advancedsettings.xml](https://kodi.wiki/view/Userdata/advancedsettings.xml "Advancedsettings.xml") to their [userdata](https://kodi.wiki/view/Userdata "Userdata Wiki") folder with code from [this thread](https://forum.kodi.tv/showthread.php?tid=124185 "RC1 AV Sync Fix"). The provided links should give you all the necessary instructions to add the xml. In the meantime, we are rebuilding a quick RC2 to resolve the issue, so you are alternatively welcome to wait a brief while until RC2 has been built.

 Feel free to disregard this message if you are not experiencing this issue.

 