---
title: "Kodi 16.0 beta 1 - Jarvis is getting ready"
date: 2015-11-14T03:00:00Z
author: Martijn Kaijser
featured_image:
  src: /images/blog/Kodi-Wallpaper-blue.webp
  title: "Kodi-Wallpaper-blue"
  alt: "Kodi-Wallpaper-blue"
---

Only three weeks ago we announced 15.2 which is the last release of the Kodi version 15 range and now we’re announcing the first beta of version 16. What does this means for users? That after four months of alpha versions we have changed to the beta stage and working towards a final Kodi 16 release. The past four months the developers worked hard behind the scenes on further improving what is already a great piece of software. Lot’s of code clean-up and improving stability, with a dash of features added here and there. To not bore every one with all the technical changes we’ll dive into some of the most noticeable newly added features.

## DirectX 11 upgrade

[![DX11](/images/blog/DX11.webp)](/images/blog/DX11.webp)One of our developers _afedchin_ took on this task and completely revised our DirectX 9 implementation and upgraded it to the more current standard of DirectX 11. Don’t worry if you still have an older card, we only use low level features so you don’t need to run to the shop for new gear. So why is this so important? The old DirectX 9 implementation we were still using was done in a way that it could fail for newer videocard drivers. By updating it to DX11 proper support is assured for the newer video cards as well of a whole lot of other improvements across the board. These few lines written here don’t even do the work done on this justice but let me assure you it was of great importance for the existence of Kodi on the Windows platform.

[![screenshot001](/images/blog/screenshot0011-800x456.webp)](/images/blog/screenshot0011.webp)

## 4:3 Non-linear Stretch

It’s perhaps a bit late in coming, but Kodi finally supports stretching 4:3 content to 16:9 in a way that doesn’t warp the content that’s occurring in the center of the screen. Finally, you’ll be able to watch Friends, Seinfeld, Cheers, and Duck Tales in full screen without the awkward screen stretching from the past.

[![screenshot000](/images/blog/screenshot0001-800x449.webp)](/images/blog/screenshot0001.webp)

## Event logging

Have you ever added your folder of movies to Kodi and then discovered, sometimes weeks later, that a movie never made it in? A solution for issues like that is finally starting to take shape.

Event logging is an option that tracks some events and shows these in a chronological order in system settings -\> logging. By the time of the final release of Kodi 16, we will still have not refined what will actually be shown in that list as it currently only adds the basic “notifications”. Ultimately, we think this may become an incredibly useful feature, as you’ll finally be able to see all of the things Kodi is doing and, in some cases, failing to do. More to follow on this feature in Kodi version 17.

    [![EventLogging01](/images/blog/EventLogging01-300x168.webp)](/images/blog/EventLogging01.webp) [![EventLogging02](/images/blog/EventLogging02-300x168.webp)](/images/blog/EventLogging02.webp)    Split up skin settings

---

One long awaited change is splitting up skin settings from the core Kodi settings. In the past all skin settings and Kodi settings were saved in one big file. What’s the problem you might ask? Well fact is that the more skins you installed and tried out the bigger the file grew all loading it takes a tiny bit of time. Additionally it wasn’t easy to start fresh with Kodi settings without also losing all you skin customisations. Now all is split up like we already had done for all other add-ons, you can now easily remove Kodi settings and keep the skins settings intact. Additionally you can also just copy the skin/add-on settings to any other Kodi installation and they would instantly have the same settings as you had given the fact you also have installed them there. On upgrade from any previous Kodi or XBMC version to 16.0 we will process and convert the file without you even noticing. All will be done automatically.

More information: <https://kodi.wiki/view/Userdata> -\> _“user_data”_

## Image resource add-ons

Although not of real importance to end-users, it’s really convenient for our skin developers. Before each skin had to include all the images it wanted to show. For example most skins show the studio or recordlabel when browsing library. Each skin would have to include these images for it work and as such each skin would have to update the included images. On average this came down to about ~20Mb of files that were shipped with each skin. By putting that into separate add-ons all skins can now make use of the same resource add-ons if they wish without needing to care for updating the images any more. This cuts down download size of skins on install/update and the image add-ons can be updated separate from the skins itself. This makes handling skins much easier and less resource intensive.

## Long Press

More and more hardware companies are coming out with remote controls with a very limited button set. In particular, all current Android TVs are lacking a dedicated context menu button altogether. To deal with this, we’ve taken a page from the touchscreen UX and added a long press feature to remote controls. Now, if you press and hold the OK/Enter button for a few seconds, you will pull up the context menu. In the future, long press may be extended for additional functionality. For a better view of what this means, see the following video.

## Android Surface Rendering

The Android platform has always been a bit special as it’s still maturing and this change shows that. Some newer devices that can do UHD or 4K playback really well lack the power to also create the Kodi interface at that resolution, and this creates kind of a problem. The end result was that the we either had to downscale the video to a lower resolution to make sure the interface was snappy, or show full size video but the device might not be able handle the high resolution interface. This change allows us to create the Kodi user-interface in a different resolution than the resolution we do video playback, so what happens now is that the interface is displayed at 1080p, and the video will actually be output at the 4K resolution if the device supports it as we let the chip-set do the work instead of the processor.

Important to mention is that this doesn’t apply to AMLogic devices with proper permissions as these will still use amcodec. Any other Android device that is not able to do “android surface rendering” has not implemented the standard Android MediaCodec API in the proper way. Sadly we have to take this route because the Android eco-system has become too big of a maze to support and we will only implement what we feel is the way forward, this means that we will only follow the official Android platform methods, and we will no longer implement any hacks or workarounds. If the device you have is not compatible, then we strongly advise that you ask your device manufacturer to properly implement these functions in the device’s firmware, it may be harsh but we as Team Kodi are not responsible for incomplete firmware created by these device manufacturers.

## Removal of libstagefright

With the Android platform becoming more mature regarding audio/video with the MediaCodec implementation it was time to say goodbye to libstagefright. The old implementation for audio and video is called libstagefright and has been in the media several times this year, this method has become very outdated and the implementation wasn’t the best, as such we have removed the support for this and will fully focus on MediaCodec. This means that for certain devices this will be a step back for Kodi usage, or perhaps Kodi might even become unusable if they have firmware which doesn’t make proper use MediaCodec. We’re sorry that this is happening but keeping support for libstagefright is hurting further progress, stability and puts a too large support burden on the our Android developer, so we hope you will all understand this decision.

## Add-on manager changes

In the ongoing quest to improve our our add-on manager several changes where done in the overall handling of each add-on. These changes include the following:

- • Roll-back button on add-on info panel has been replaced by _Update_
- • The Update button now opens a list of available versions of the add-on. Should you have several repositories installed that offer different version of this add-on you can now choose which to install.
- • You can now disable auto-update per add-on through the info panel individual from others.

The add-on info panel can either be reached through the add-on manger or selecting the add-on in any section by either right click, use context menu (“C” key) and choose info or use the “I” key to directly open the panel.

## Goodbye karaoke

Sadly we had to say goodbye to the karaoke feature that was hidden in Kodi. None of the team did really know how it worked, if it still worked and how it was integrated into Kodi. Because it was still part of Kodi every skin also had to support this feature which takes quite some work. As such we decided to remove it as whole. It may reappear back in the future because there are now better ways of integrating it back as an add-on. It would only take a developer some interest in getting this done.

## Other Important Changes:

- • Start of integration of ADSP (_Audio Digital Signal Processing_) handling (no add-ons shipped yet)
- • Improve image resizing and caching algorithm to improve image quality of images
- • Added support for the musicbrainz “ARTISTS” tag in id3v2, ape, xiph.
- • Add date added to music library and use it for sorting
- • Support saving skin settings as add-on data instead of in guisettings.xml
- • Image resource add-ons which provides common image libraries than can be used by several skins and add-ons.
- • Don’t mess with the long and short date formats defined in the language files
- • Win32: Proper 24.0/60.0 Hz refresh rate in fake fullscreen mode
- • Add sort method for albums “artist / year”. This will sort the albums chronological per artist.
- • Moved some add-on categories to “look and feel” in add-on manager
- • Series recording added for PVR
- • Add a “none” option for preferred subtitles
- • Properly handle wired or bluetooth headsets on Android and only use PCM output
- • Fix playback of VP9 and VC1 video codecs on Android
- • Use best possible icons from other Android apps while browsing these in Kodi
- • Enable true 1920×1080 output on AMLogic device without up-scaling
- • Add Korean, Chinese and Czech keyboards
- • Add multi-touch support for Linux platform
- • Improve touch-screen keymapping
- • Add stereoscopic depth for Confluence skin
- • The item that you had previously chosen will now be selected in the selection list instead of just starting at the top of the list
- • Decouple Kodi and system volume on Android which removes the double audio volume slider
- • Karaoke support has been completely removed as it wasn’t functional
- • Further improve DX11 implementation in Windows
- • iOS9 support
- • Various PVR fixes and improvements
- • Various improvements to the music section
- • Three finger touchpad mapping in iOS to make room for new tablet gestures which will be available in Alpha 4 to complement [existing tablet gestures](https://kodi.wiki/view/Touch_controls).
- • Kodi now [supports being compiled with Xcode 7](https://github.com/xbmc/xbmc/blob/master/docs/README.ios)
- • The Kodi GUI now supports a new stereoscopic depth effect for users of Kodi on 3D TVs or VR headsets
- • The Music Library and Files View for music have now been unified, similar to how video files and library are unified
- • Extended support for browsing movies by country and through UPnP as well as user-ratings which we be added in future versions.

## An enormous list of improvements

Besides the list above there has been a lot of work done in all areas in our source code. Removing old code, splitting up parts in more logical chunks and making it all more resilient to future changes. All these changes are part of a massive change list that only makes sense to developers actually knowing what the source code does. In short we will no bother you all with summing up the list. It’s just something that is worth mentioning that not all improvements have to be actual features and are visible to users. We prefer that the program actually works than adding bells and whistles.

## Known problems in this beta

As with all developments we sometimes hit problems that need a little more time. One of the is the library export feature which currently isn’t working as it should. We have a fix pending but it needs some more work before we can include it. The other known problems is using profiles. With the splitting of skin settings we hit a small regression that affects users who are using the profile feature. Switching will possible cause your profile to be reset so in case you use this feature we suggest to not upgrade to this version.

We will make sure these issues are resolved by the release of final version.

## Improvements so far in version 16

More in depth information can be found through the following links about the 16 release.

- • [Kodi 16.0 Alpha 1&2](/article/kodi-160-alpha-1-2-jarvis-your-service)
- • [Kodi 16.0 Alpha 3](/article/kodi-16-alpha-3)
- • [Kodi 16.0 Alpha 4](/article/kodi-160-alpha-4-jarvis-nearing-completion)

## Add-ons

**General:** So far in version 16 there are no add-on changes that would impact any add-ons except for PVR. Since our 12.x Frodo release there have been some gradual changes but in general all add-ons, even from that time should still work, of course there are some exceptions. If the add-ons worked in Gotham, Helix and Isengard then we are happy to say that all these add-ons should still work.

**Skins:** Sadly due to the amount of changes we’ll have to announce that skins will have certain parts non working. This beta will mark any version 15 skin as incompatible and will ask you to switch back to Confluence. This means that for you to continue using Kodi 16.0 you will have to switch back to Confluence or wait till the skin you use has been updated in our repository. Good new however is that a variety of skin have already start updating to latest changes.  
 The following skins are already updated for version 16 and will auto-update when you upgrade. We’re sure more will follow soon.

- • Black Glass Nova
- • Chroma
- • Confluence
- • Eunique
- • Mimic
- • Nebula
- • Rapier
- • re-Touched
- • Titan
- • Transparency!

## Community Designed Kodi Shirt and Hoodie

[![](/images/blog/kodi-graffiti-6-1446613526868.webp)](https://teespring.com/kodi-graffiti-6?kodi_site=beta1)

At Kodi DevCon this year we spent a lot of time talking about how to better recognize our community, and this solution was proposed. We’re going to try featuring a new, different shirt every month designed by a community member. So this month, thanks to Sam Fisher for an awesome design! Sam was a major help in our logo search and makes most of that cool artwork you see on [Facebook](https://www.facebook.com/XBMC/photos/a.10150616705636641.378985.20916311640/10153158972611641/?type=3&theater). If you would like to be the featured artist next month, post your design in the[shirt forum thread](https://forum.kodi.tv/showthread.php?tid=246239)! Also, be sure to browse through the available options. There are multiple colors of shirts and – it being winter time – we’ve also made hoodie versions available. T-shirt is available up to 5XL and the hoodie to 2XL and shipping is worldwide at a very reasonable fee. This design is only available for a limited amount of time!

## Conclusion

Should you want to download and install this alpha (monthly) build please visit our download page.

- - [Official Kodi 16.0 development downloads](/download)
- - Raspberry Pi versions can be found on the [forum](https://forum.kodi.tv/forumdisplay.php?fid=166)

Please report any problems on our forum <https://forum.kodi.tv/> and not on the release announcement.

### Donations or getting involved

Getting involved is quite easy. Simply take the plunge and start using these 16.0 Jarvis builds. If you use these builds, we encourage you to report problems with these builds on our forum first and after that, if asked, submit bugs on Trac (following this guide: [How to submit a bug report](https://kodi.wiki/view/HOW-TO:Submit_a_bug_report)). Do note that we need detailed information so we can investigate the issue. We also appreciate providing support in our [Forums](https://forum.kodi.tv/ "Kodi Forums") where you can. You can of course also follow or help promote Kodi on all available social networks. Read more on the [get involved](/get-involved) page.  
 We are always happy to receive a [donation](/contribute/donate "Donate") by which you show your support and appreciation. All donations go towards the XBMC foundation and are typically used for travel to attend conferences, any necessary paperwork and legal fees, purchase necessary hardware and licenses for developers and hopefully the yearly XBMC Foundation Developers Conference.
