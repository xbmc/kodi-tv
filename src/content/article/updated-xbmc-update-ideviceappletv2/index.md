---
title: "Updated: XBMC update for iDevice/AppleTV2"
date: 2011-02-05T03:00:00Z
author: Cory
---

![](/sites/default/files/uploads/apple-pinwheel-smaller.webp "apple-pinwheel-smaller")We expected a good amount of interest from the last post, but the response was overwhelming.

As a result, we have been hard at work fixing bugs and adding missing features from the first release. So here it is, v2 of XBMC for your AppleTV2/iDevices.

**Update:** A last-minute build-bug caused the SMB+Live Essentials fix to be left out. This is fixed now, users still experiencing this bug should update to get the fix.

**Changelog:**

> - GUI speedup
> - Webserver enabled
> - RTMP support
> - AC3/DTS Audio Dialogs
> - Rotating for the iPhone and iPad
> - Black and Dim screensavers working
> - [Bluetooth Support](https://forum.kodi.tv/showthread.php?pid=706047%23pid706047)
> - SMB shares with Windows Live Essentials should work.
> - Sleep timer works
> - Add-on updates now working
> - Decrypted ISO playback works
> - Thumbnail creation fixed
>
> This question of 1080p display has come up very often, so here’s the answer: XBMC can decode 1080p video but for now the ATV2 is limited to display 720p output. Its still unknown whether this is a hardware or software restriction.

For more FAQ see [this page](https://kodi.wiki/view/XBMC_for_iOS_specific_FAQ).

### Update Instructions:

AppleTV2: Connect via SSH in and run “apt-get update && apt-get install org.xbmc.xbmc-atv2′”

iOS: Upgrade through Cydia.

The XBMC developers are hard at work on non-apple related features as well, expect a post in the next day or two outline what else we’ve been doing.
