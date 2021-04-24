---
title: "What’s Going On: Solstice Edition"
date: 2011-06-21T04:00:00Z
tags:
  - Community
author: Nathan Betzen
---

As it’s been a little while since the Team’s taken a look around the community, it seems high time to do just that.

[![TV Logos](/images/blog/screenshot006-300x181.webp "TV Logos")](/images/blog/screenshot006.webp)  
 TV Logos (extra credit if you can name all 5 shows on the screen in the comments)

First off, chances are, if you’ve used a modern skin that isn’t Confluence, you’ve had the opportunity to check out some really interesting alternative methods for presenting your tv shows and music. An incredible [number of skins](https://kodi.wiki/view/Comparison_of_skin_features "Skin Comparison Chart")\* make it possible to view TV show logos, clearart, cdart, and several other features not present in the version of Confluence found in stock XBMC 10.1.

\*_The linked comparison page in the wiki is both incomplete and out of date. Still, it gives a fair indication of the breadth to which skinners are willing to move beyond the stock install to beautify the XBMC experience._

These additional features would be dramatically less useful if not for [fanart.tv](https://fanart.tv/ "fanart.tv"). Fanart.tv is a crowd-sourced website, much like [thetvdb](https://www.thetvdb.com/ "thetvdb.com") and [TMDb](https://www.themoviedb.org/ "The Movie Database"), designed to provide all the additional little features that we each would have to spend hours amassing on our own. Kode, the fanart.tv developer, is always appreciative of additional art or art requests, and asks only that you follow the rules that may be found [here](https://forum.kodi.tv/showthread.php?tid=87577 "Fanart.TV rules").

Next, from now until the release of XBMC Eden (no, we don’t have any definite release plans), we are likely to talk about a number of new features that are only available in [nightly builds](http://mirrors.xbmc.org/nightlies/ "Download Nightly Builds"). This means they should ONLY be installed by the brave and the willing, and the expectation after installing these builds should always be that something or other is going to break. The Team only officially supports XBMC 10.1 (aka Dharma), so you may be out of luck, though we always appreciate testers who do a good job [reporting problems](https://forum.kodi.tv/showthread.php?tid=34655 "How to report a problem in a useful way").

With that said, one of the more interesting community contributions to the XBMC code base comes from HarryMuscle, who has provided code to add Slingbox support to XBMC. This code has been merged since the beginning of June and supports all Slingboxes up to, but not including, the Slingbox Pro-HD (which still has encryption problems that have not been overcome). For those brave and eager enough to give it a whirl, the instructions may be found [here](https://kodi.wiki/view/Slingbox_Client "Slingbox Install Instructions"). A word of warning to the brave: the Sling protocol has not been added to the Network Location dialog box yet, so you’ll have to enter the entire thing manually. If you don’t know how to do that, I suggest waiting a while until Sling support is a little more refined.

Of major interest to non-Windows users (and particularly iOS users), [NFS](<https://en.wikipedia.org/wiki/Network_File_System_(protocol)> "Network File System protocol") is now [baked in](https://github.com/xbmc/xbmc/pull/192 "NFS support in XBMC") to XBMC, meaning XBMC can access folders shared through the NFS protocol without the need of mounting the shares from the underlying OS (iOS, for example, can’t mount NFS files natively). Put simply, now users can use NFS rather than SMB or uPnP for network sharing.\* This addition is the first commit of Memphiz, the newest XBMC dev. It’s “an excellent first commit,” according to Davilla, Memphiz’s sponsor. All of you iOS users are more than welcome to thank Memphiz in the comments.

\*_At the moment, NFS is not an option for Windows users. You are still stuck with SMB._

Finally, this week we’d like to feature Aeon Nox.

[![Aeon Nox](/images/blog/screenshot007-300x181.webp "Aeon Nox")](/images/blog/screenshot007.webp)  
 Aeon Nox

Aeon Nox has the distinction of being the first modification of Aeon to be based on Confluence, rather than the underlying Aeon code. It supports all those goodies mentioned above, plus TV Tunes, Cinema Experience, Weather+, the TV Schedule, and many other skin enhancements, and it can be downloaded right now from our skins repository, so get it while it’s hot.

That’s it for this edition of What’s Going On. If you’ve got tips, don’t be afraid to send them on to natethomas at xbmc dot org, or just natethomas in the forum. And please continue sending along your Feature Friday setups. We’re always eager to see the nifty new workings of all our incredible users.
