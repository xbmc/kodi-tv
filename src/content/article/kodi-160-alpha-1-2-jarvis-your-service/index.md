---
title: "Kodi 16.0 Alpha 1 &amp; 2 - Jarvis at your service"
date: 2015-09-02T04:00:00Z
author: Martijn Kaijser
featured_image:
  src: /images/blog/kodi16.0-jarvis-alpha.webp
  title: "kodi16.0-jarvis-alpha"
  alt: "kodi16.0-jarvis-alpha"
---

While we are still working on improving the Kodi 15 release by adding numerous fixes, developers have been working on new features and new fixes for Kodi 16, codenamed Jarvis, for quite some time now. Let’s take a look at a few of those features and fixes that have made it into alphas 1 and 2 of Kodi 16.

## DirectX 11 upgrade

[![DX11](/images/blog/DX11.webp)](/images/blog/DX11.webp)One of our developers _afedchin_ took on this task and completely revised our DirectX 9 implementation and upgraded it to the more current standard of DirectX 11. Don’t worry if you still have an older card, we only use low level features so you don’t need to run to the shop for new gear. So why is this so important? The old DirectX 9 implementation we were still using was done in a way that it could fail for newer videocard drivers. By updating it to DX11 proper support is assured for the newer video cards as well of a whole lot of other improvements across the board.

[![screenshot001](/images/blog/screenshot0011-800x456.webp)](/images/blog/screenshot0011.webp)

## 4:3 Non-linear Stretch

It’s perhaps a bit late in coming, but Kodi finally supports stretching 4:3 content to 16:9 in a way that doesn’t warp the content that’s occurring in the center of the screen. Finally, you’ll be able to watch Friends, Seinfeld, Cheers, and Duck Tales in full screen without the awkward screen stretching from the past.

[![screenshot000](/images/blog/screenshot0001-800x449.webp)](/images/blog/screenshot0001.webp)

## Event logging

Have you ever added your folder of movies to Kodi and then discovered, sometimes weeks later, that a movie never made it in? A solution for issues like that is finally starting to take shape.

Event logging is an option that tracks some events and shows these in a chronological order in system settings -\> logging. By the time of the final release of Kodi 16, we will have refined what will actually be shown in that list as it currently only adds the basic “notifications”. Ultimately, we think this may become an incredibly useful feature, as you’ll finally be able to see all of the things Kodi is doing and, in some cases, failing to do.

    [![EventLogging01](/images/blog/EventLogging01-300x168.webp)](/images/blog/EventLogging01.webp) [![EventLogging02](/images/blog/EventLogging02-300x168.webp)](/images/blog/EventLogging02.webp)    Split up skin settings

---

One long awaited change is splitting up skin settings from the core Kodi settings. In the past all skin settings and Kodi settings were saved in one big file. What’s the problem you might ask? Well fact is that the more skins you installed and tried out the bigger the file grew all loading it takes a tiny bit of time. Additionally it wasn’t easy to start fresh with Kodi settings without also losing all you skin customisations. Now all is split up like we already had done for all other add-ons, you can now easily remove Kodi settings and keep the skins settings intact. Additionally you can also just copy the skin/add-on settings to any other Kodi installation and they would instantly have the same settings as you had given the fact you also have installed them there. On upgrade from any previous Kodi or XBMC version to 16.0 we will process and convert the file without you even noticing. All will be done automatically.

More information: <https://kodi.wiki/view/Userdata> -\> _“user_data”_

## Image resource add-ons

Although not of real importance to end-users, it’s really convenient for our skin developers. Before each skin had to include all the images it wanted to show. For example most skins show the studio or recordlabel when browsing library. Each skin would have to include these images for it work and as such each skin would have to update the included images. On average this came down to about ~20Mb of files that were shipped with each skin. By putting that into separate add-ons all skins can now make use of the same resource add-ons if they wish without needing to care for updating the images any more. This cuts down download size of skins on install/update and the image add-ons can be updated separate from the skins itself. This makes handling skins much easier and less resource intensive.

## Other Important Changes:

- - Start of integration of ADSP handling (no add-ons shipped yet)
- - Improve image resizing and caching algorithm to improve image quality of images
- - Added support for the musicbrainz “ARTISTS” tag in id3v2, ape, xiph.
- - Add date added to music library and use it for sorting
- - Support saving skin settings as add-on data instead of in guisettings.xml
- - Image resource add-ons which provides common image libraries than can be used by several skins and add-ons.
- - Don’t mess with the long and short date formats defined in the language files
- - Win32: Proper 24.0/60.0 Hz refresh rate in fake fullscreen mode
- - Add sort method for albums “artist / year”. This will sort the albums chronological per artist.
- - Moved some add-on categories to “look and feel” in add-on manager
- - Series recording added for PVR
- - Add a “none” option for preferred subtitles

## An enormous list of improvements

Besides the list above there has been a lot of work done in all areas in our source code. Removing old code, splitting up parts in more logical chunks and making it all more resilient to future changes. All these changes are part of a massive change list that only makes sense to developers actually knowing what the source code does. In short we will no bother you all with summing up the list. It’s just something that is worth mentioning that not all improvements have to be actual features and are visible to users. We prefer that the program actually works than adding bells and whistles.

## Conclusion

Should you want to download and install this alpha (monthly) build please visit our download page.

- - [Official Kodi 16.0 alpha and development downloads](/download)
- - Raspberry Pi versions can be found on the [forum](https://forum.kodi.tv/forumdisplay.php?fid=166)

### Get involved

Getting involved is quite easy. Simply take the plunge and start using these 16.0 Jarvis builds. If you use these builds, we encourage you to report problems with these builds on our forum first and after that, if asked, submit bugs on Trac (following this guide: [How to submit a bug report](https://kodi.wiki/view/HOW-TO:Submit_a_bug_report)). Do note that we need detailed information so we can investigate the issue. We also appreciate providing support in our [Forums](https://forum.kodi.tv/ "Kodi Forums") where you can, or [donate](/contribute/donate "XBMC Foundation Donations") to the XBMC Foundation if you like. You can of course also follow or help promote Kodi on all available social networks. Read more on the [get involved](/get-involved) page.
