---
title: 'Coming soon'
date: 2010-02-05T03:00:00Z
author: Team XBMC
featured_image: ""
---
![coming_soon](/sites/default/files/uploads/coming_soon-300x156.jpg "coming_soon")It’s been a while since we’ve posted about the work currently going into XBMC, so here’s a quick taste of what’s been added lately, what’s in the works, and what we’re dreaming of:

 
 * **DXVA2**: Elupus has already added the initial code for [gpu offloading in Windows](https://forum.kodi.tv/showthread.php?tid=69306) (Vista/7 only). Not to be confused with DSPlayer below.
 * **DSPlayer**: A new DirectShow based internal player from tiben (Windows only) that also provides GPU acceleration. See the [forum thread](https://forum.kodi.tv/showthread.php?tid=61355) for more info.
 * **CrystalHD**: Davilla is still hard at work on the [Broadcom hardware decoder](/article/broadcom-crystal-hd-its-magic). Watch the current status [here](https://forum.kodi.tv/showthread.php?tid=69384). For those who haven’t yet taken the plunge, [Logic Supply](https://www.onlogic.com/computers/?ls=1) is now offering $10 off to XBMC users, just use the code: “XBMC10″.
 * **AC3 Encoding**: An often requested feature. Thanks to gnif, realtime transcoding will soon be available.
 * **HTTP Server:** The crusty old web server is soon to be ripped out in favor of a much more interactive JSON-RPC one. Check out topfs2′s [informative post](https://forum.kodi.tv/showthread.php?tid=68263). Watch for a web-interface contest!
 * **Addons Manager**: Even better than it sounds. Will allow an easy way to manage addons, including among other things, PVR backends.
 * **PVR Frontend**: Probably the most requested feature for XBMC. This will provide a unified experience to your choice of PVR backends such as: [VDR](https://www.linuxtv.org/vdrwiki/index.php/Main_Page), [MythTV](https://www.mythtv.org/), [Tvheadend](http://www.com.org?not_found=lonelycoder.com.org), and [MediaPortal TVserver](https://www.team-mediaportal.com/).
 
 Some of the bigger features like the Addons Manager and PVR Frontend will introduce significant churn to the codebase. We’ll likely suspend nightly builds at these times and recommend that SVN users take a break.

 As usual, we’re working hard but can’t give any ETAs. The usual answer… “when it’s ready”.

 **Downtime Notice**: We will soon be moving the site and all services to new home at [WebHostingBuzz](https://www.webhostingbuzz.com/) to cope with the ever-increasing traffic. This means that the blog, forum, trac, and wiki will all be down during the transition. If all testing goes well we’ll make the switch on Mon. February 8th. I’ll update this page after the move (no sense updating a 404′d site, right?) with the status. **Update**: Done!

 Also be aware that all xbmc links will be changing, we’ll be moving all services to subdomains for easier management in the future. For example, <http://xbmc.org/forum> will move to <http://forum.xbmc.org>. You will be redirected automatically for a while, so don’t forget to update your bookmarks.

 