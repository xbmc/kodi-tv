---
title: "XBMC Accepted into Debian"
date: 2012-04-09T04:00:00Z
tags:
  - Release
  - Community
author: Team XBMC
---

[![](/images/blog/debian_4-241x300.webp "debian_4")](http://www.debian.org/)Linux users rejoice! Thanks primarily to the hard work of Andres Mejia, XBMC has been accepted into the [official Debian distribution](https://packages.qa.debian.org/x/xbmc.html)! In the past we have been unable to make it into Debian as the sheer size and complexity of XBMC made the review process so difficult, so Andres, an XBMC developer who was working to become a Debian Developer already, volunteered to maintain it himself. Yesterday, his Eden packages were accepted. For those unclear about what this means, Debian unstable users will now be able to install XBMC without using any third-party repositories.

We have already been included in several major Linux distributions, but Debian is a big target because of the size of the community around it. As most Linux users are probably aware, other major distros such as Ubuntu and Mint derive (or derive indirectly) from Debian, and sync their packages regularly. Andres succeeded in requesting a sync to Ubuntu in time to hit [Precise Pangolin](https://wiki.ubuntu.com/PrecisePangolin/TechnicalOverview/Beta2), so users of this next [LTS release](https://wiki.ubuntu.com/LTS) will be able to install XBMC with just a few clicks (or an apt-get). We hope this will lower the barrier to entry for many users who are not familiar with PPAs.

There are a few notable differences between the packaged Debian/Ubuntu versions and the ones from our ppa or XBMCBuntu:

- decss support (encrypted dvd playback) is disabled unless [libdvdcss2 has been installed](https://help.ubuntu.com/community/RestrictedFormats/PlayingDVDs) from a third-party repo.
- libav is used rather than ffmpeg, as Debian unstable has gone this direction.
- AFP (Apple File Protocol) support is currently disabled due to packaging issues.
- rar support is disabled due to Debian policy, which we hope to resolve soon by switching to [libarchive](http://libarchive.github.io/), which Andres is personally working on as well. The guy is a unstoppable!

Now there’s one less step to get to the XBMC goodness…
