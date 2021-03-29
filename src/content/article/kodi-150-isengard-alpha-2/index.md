---
title: "Kodi 15.0 Isengard - Alpha 2"
date: 2015-03-31T03:00:00Z
author: Martijn Kaijser
featured_image:
  src: /images/blog/screenshot001.webp
  title: "screenshot001"
  alt: "screenshot001"
---

In many ways, we could call Isengard the release that finally answers many of the oldest requests we have. With Alpha1 we introduced Skip Steps, which allow the user to more naturally and organically find the exact moment they are attempting to skip to in the show or movie, a request that’s existed since at least 2009. We also implemented external subtitle support over UPnP, another very old feature request. This month, we’ve added a few more.

### Chapter Selector Window

It’s gone by a bunch of names in the forum, but one of the [oldest requests we’ve had since porting away from the Xbox](https://forum.kodi.tv/showthread.php?tid=46071) was for the ability to browse and visually select from the chapters available included in mkv and other files that support chapters. With Isengard, that is finally very possible. When you first launch a movie and navigate to the Bookmarks icon in the Video GUI, Kodi will automatically populate all the necessary bookmarks with the name and a picture of each chapter.

[![screenshot000](/images/blog/screenshot000-800x441.webp)](/images/blog/screenshot000.webp)

This process currently benefits from having a faster CPU, as the chapter images are generated using software, so the first time you open bookmarks on a new video using something like the Raspberry Pi 1 you may experience some severe hiccups. For this reason, this setting is disabled by default on slower devices. To enable visual chapters on slower devices, visit System -\> Video -\> File lists and select Extract chapter thumbnails. For speedy HTPCs, this setting is enabled by default.

### Audio and Subtitle Lists

Many BluRay movies include a large number of audio and subtitle streams to choose from, including numerous director’s commentaries, alternative language tracks, etc. In the past, the user was forced to to slowly scroll through them, one item at a time, using something called a software spinner. Now, these streams are listed as one big list, so the user can easily find and select exactly the stream they are looking for.

[![screenshot001](/images/blog/screenshot001-800x441.webp)](/images/blog/screenshot001.webp)

### Language Add-ons and an Expansion of International Options

Another big improvement with Isengard will be a far more precise control over most of the International settings, including the ability to individually adjust how your date and time are set, whether your temperature is listed as Fahrenheit, Celsius, or even Kelvin, and how you want the speed of your wind measured in the weather add-on.

[![screenshot002](/images/blog/screenshot002-800x441.webp)](/images/blog/screenshot002.webp)

Additionally, languages are now installed on a just-in-time basis. Rather than shipping with every possible language and needing to wait between releases for language updates, languages in Kodi have been add-on-ified so that changes can be fixed and updated almost instantly. This does mean that if you want to set up a new install of Kodi with anything other than the default English language, you will need to have your machine connected to the internet, so Kodi can download your preferred language.

### Add-on Manager Improvements

Finally, work is being done presently to improve and simplify navigating the Add-on Manager. This will be an ongoing project, so please bear with us.

[![screenshot003](/images/blog/screenshot0033-800x441.webp)](/images/blog/screenshot0033.webp)

### Other Improvements

There were 241 fixes, features, and improvements for Alpha2. Beyond the highlighted ones, here is a list of a few other improvements made.

- - Tuxbox removal. Users of Enigma2 boxes can use the VUPlus PVR add-on
- - Split PVR add-ons into separate projects
- - Fix season art scraping on newly added seasons
- - Immediately fetch updates from repository after major upgrade
- - Improvement of installing new skins selection
- - Remove legacy code pre-Frodo 11.0
- - Add jump to first unwatched in TV section
- - Remove certain codecs from our core code and made add-ons out of them. Audio encoders/decoders
- - Removal of AFP filesystem support
- - Windows DXVA HEVC hardware decoding support if driver and hardware support exist

## The Kodi Villain Shirt

This release coincides with the release of our Kodi Villain shirt and hoodie. We’re pretty excited about both and hope you like them too.

[![kodivillainshirt](/images/blog/kodivillainshirt.webp)](https://teespring.com/kodi-villain-shirt)

## Conclusion

Should you want to download and install this alpha (monthly) build please visit our download page.

- - [Official Kodi 15.0 alpha and development downloads](/download)
- - Raspberry Pi versions can be found on the [forum](https://forum.kodi.tv/forumdisplay.php?fid=166)

###

### Get involved

Getting involved is quite easy. Simply take the plunge and start using these 15.0 Isengard builds. If you use these builds, we encourage you to report problems with these builds on our forum first and after that, if asked, submit bugs on Trac (following this guide: [How to submit a bug report](https://kodi.wiki/view/HOW-TO:Submit_a_bug_report)). Do note that we need detailed information so we can investigate the issue. We also appreciate providing support in our [Forums](https://forum.kodi.tv/ "Kodi Forums") where you can, or [donate](/contribute/donate "XBMC Foundation Donations") to the XBMC Foundation if you like. You can of course also follow or help promote Kodi on all available social networks. Read more on the [get involved](/get-involved) page.
