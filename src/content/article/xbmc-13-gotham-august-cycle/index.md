---
title: "XBMC 13 - Gotham - August Cycle"
date: 2013-09-04T04:00:00Z
author: Nathan Betzen
featured_image:
  src: /images/blog/3D_in_2D.webp
  title: "3D_in_2D"
  alt: "3D_in_2D"
---

For those keeping track, we’ve just completed alpha #7 in the August cycle, which includes two absolutely massive new features: Stereoscopic 3D support and Android Hardware video decoding. As always, the monthly alpha build is available on our [Snapshots page](http://mirrors.xbmc.org/snapshots/ "XBMC Snapshots"), and the typical warning applies: this is alpha software; things are very likely to break. With that said, let’s look at what we’ve been working on.

## Android Hardware Decoding

It’s been a long time coming, but we are excited to announce that hardware decoding of video has finally made its way to the XBMC for Android platform. The most important caveat is that the implemented hardware decoding does not support AmLogic or Allwinner chipsets, and it does require Android 4.0 (“Ice Cream Sandwich”) or higher to run. With that said, the more popular tablets sold in the past year, such as the Nexus 7 and 10, should work quite well with this alpha, and users are welcome to discuss their experiences in the comments below. Kudos to Koying for his work on this project.

## Stereoscopic 3D Rendering

For you lovers of 3D out there, we are also pleased to say that we now support 3D movies encoded in the following formats: SBS, TAB, anaglyph, and interlaced (on supported platforms for passive TVs). Unfortunately, XBMC cannot yet support 3D blurays and cannot provide hardware acceleration for FullSBS/TAB movies (therefore limiting those videos to relatively high powered CPUs).

A useful feature that also comes with this alpha is a dedicated button to toggle 3D mode, which has two benefits: First, while XBMC should automatically recognize 3D-encoded movies, if it fails to recognize the format, users can force 3D mode. Second, users are now welcome to encode all their ripped blu-rays into 3D and skip making a second encode in 2D, because toggling off 3D mode on a 3D recognized movie will simply display the film in traditional 2D. This button requires an update to your skin of choice, so, if you are not using Confluence, feel free to point the feature out to your favorite Skilled Skinner.

[![Some of the newly available 3D Options](/images/blog/3D_in_2D-300x165.webp)](/images/blog/3D_in_2D.webp)
 Some of the newly available 3D Options

## Context Menu Clean-up

In addition to bigger features, if you’ve been following along, you know that we’ve been working for quite some time on making the entire user experience more friendly. To that end, this past month has been one of cleaning up the context menu. We’ve worked to clean it up in two ways. First, we’ve pulled items out that don’t actually make sense to be in a context menu. Second, we’ve moved some options that people rarely use into a second “Manage” dialog.

In your day-to-day experience, this means the Update Library option is now always available in the side-bar, as can be seen in the below picture. This is quite similar to how we’ve moved the different setting levels (Basic/Standard/Advanced/Expert) to the sidebar on the System Settings pages.

[![UpdateLibrary](/images/blog/UpdateLibrary-300x172.webp)](/images/blog/UpdateLibrary.webp)

And the context menu has a new option to explore the Manage menu…

[![ManageOption](/images/blog/ManageOption-300x282.webp)](/images/blog/ManageOption.webp)
 Manage… option

[![Manage... menu for TV shows](/images/blog/ManageMenu-300x179.webp)](/images/blog/ManageMenu.webp)
 Manage… menu for TV shows

## Goodbye Windows XP

We are happy to announce that we will be joining Microsoft in dropping support for Windows XP in 2014 by dropping support for XP with XBMC 13. At present, there are certain features that are being held back by our continuing support of the XP platform, and the best path forward is to halt support on the roughly 12 year old OS. Vista, 7, and 8 will all continue to be supported from this point forward.

[![Hasta la XP, baby.](/images/blog/hastalaxp-300x171.webp)](/images/blog/hastalaxp.webp)
 Hasta la XP, baby.

## Bug List and Other Changes

A change that certainly couldn’t be called a feature involves Weather Underground. Unfortunately, WU is currently being hit with far more XBMC traffic than even a full sponsorship could pay for. To resolve this, at least in the short term, XBMC 13 will now ship without a default weather app. Users who are upgrading will not see a change, and new users are welcome to re-download the addon if they choose.

Finally, below are some notable bugs fixed with this month’s update

- EPG no longer crashes when there is no EPG data
- Music Database fixes
- font processing fixes
- Fixed non-trivial dirty rectangle modes
- Fix gain for MP3 files (vs FLAC and other audio files)
- Fix file parse bugs (results in speedier file parsing)
- Numerous Raspberry Pi fixes

## Conclusion

Of course, as always, this is merely a very small sample of the many changes in this cycle. If you are feeling a bit brave and a bit lucky, it’s time to start downloading. Be aware though, that this is very alpha software with potentially numerous bugs. There is a good chance that this alpha will break on you.

Should want to download and install XBMC, please visit our download page.

- - [Official XBMC downloads](https://kodi.wiki/download/)

### How to Contribute

If you use this cycle’s build, we encourage you to submit bugs in Trac, provide support in our [Forums](https://forum.kodi.tv/ "XBMC Forums") where you can, or [donate](https://kodi.wiki/contribute/donate/ "XBMC Foundation Donations") to the Foundation if you like. For a current FAQ on XBMC 13, visit our [Gotham FAQ](<https://kodi.wiki/view/XBMC_v13_(Gotham)_FAQ> "XBMC 13 FAQ").
