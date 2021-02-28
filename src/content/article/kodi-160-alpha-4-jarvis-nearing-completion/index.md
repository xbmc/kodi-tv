---
title: 'Kodi 16.0 Alpha 4 - Jarvis nearing completion'
date: 2015-10-31T03:00:00Z
author: Martijn Kaijser
featured_image:
  src: /images/blog/kodi16.0-jarvis-alpha.png
  title: 'kodi16.0-jarvis-alpha'
  alt: 'kodi16.0-jarvis-alpha'
---
Only two weeks ago we announced 15.2 which is the last release of the Kodi version 15 range and now we’re announcing the last alpha of version 16. What does this means for users? That after four months of alpha versions we are gearing up for changing to the beta stage and working towards a final Kodi 16 release. The past four months the developers worked hard behind the scenes on further improving what is already a great piece of software. Lot’s of code clean-up and improving stability, with a dash of features added here and there. To not bore every one with all the technical changes we’ll dive into some of the most noticeable newly added features.

 Android Surface Rendering
-------------------------

 The Android platform has always been a bit special as it’s still maturing and this change shows that. Some newer devices that can do UHD or 4K playback really well lack the power to also create the Kodi interface at that resolution, and this creates kind of a problem. The end result was that the we either had to downscale the video to a lower resolution to make sure the interface was snappy, or show full size video but the device might not be able handle the high resolution interface. This change allows us to create the Kodi user-interface in a different resolution than the resolution we do video playback, so what happens now is that the interface is displayed at 1080p, and the video will actually be output at the 4K resolution if the device supports it as we let the chip-set do the work instead of the processor.

 Important to mention is that this doesn’t apply to AMLogic devices with proper permissions as these will still use amcodec. Any other Android device that is not able to do “android surface rendering” has not implemented the standard Android MediaCodec API in the proper way. Sadly we have to take this route because the Android eco-system has become too big of a maze to support and we will only implement what we feel is the way forward, this means that we will only follow the official Android platform methods, and we will no longer implement any hacks or workarounds. If the device you have is not compatible, then we strongly advise that you ask your device manufacturer to properly implement these functions in the device’s firmware, it may be harsh but we as Team Kodi are not responsible for incomplete firmware created by these device manufacturers.

 Removal of libstagefright
-------------------------

 With the Android platform becoming more mature regarding audio/video with the MediaCodec implementation it was time to say goodbye to libstagefright. The old implementation for audio and video is called libstagefright and has been in the media several times this year, this method has become very outdated and the implementation wasn’t the best, as such we have removed the support for this and will fully focus on MediaCodec. This means that for certain devices this will be a step back for Kodi usage, or perhaps Kodi might even become unusable if they have firmware which doesn’t make proper use MediaCodec. We’re sorry that this is happening but keeping support for libstagefright is hurting further progress, stability and puts a too large support burden on the our Android developer, so we hope you will all understand this decision.

 Add-on manager changes
----------------------

 In the ongoing quest to improve our our add-on manager several changes where done in the overall handling of each add-on. These changes include the following:

 
 * • Roll-back button on add-on info panel has been replaced by *Update*
 * • The Update button now opens a list of available versions of the add-on. Should you have several repositories installed that offer different version of this add-on you can now choose which to install.
 * • You can now disable auto-update per add-on through the info panel individual from others.
 
 The add-on info panel can either be reached through the add-on manger or selecting the add-on in any section by either right click, use context menu (“C” key) and choose info or use the “I” key to directly open the panel.

  Goodbye karaoke
---------------

 Sadly we had to say goodbye to the karaoke feature that was hidden in Kodi. None of the team did really know how it worked, if it still worked and how it was integrated into Kodi. Because it was still part of Kodi every skin also had to support this feature which takes quite some work. As such we decided to remove it as whole. It may reappear back in the future because there are now better ways of integrating it back as an add-on. It would only take a developer some interest in getting this done.

 Additional Fixes/Changes
------------------------

 Here’s a quick look at a few other notable fixes and features.

 
 * • Properly handle wired or bluetooth headsets on Android and only use PCM output
 * • Fix playback of VP9 and VC1 video codecs on Android
 * • Use best possible icons from other Android apps while browsing these in Kodi
 * • Enable true 1920×1080 output on AMLogic device without up-scaling
 * • Add Korean, Chinese and Chech keyboards
 * • Add multi-touch support for Linux platform
 * • Improve touch-screen keymapping
 * • Add stereoscopic depth for Confluence skin
 * • The item that you had previously chosen will now be selected in the selection list instead of just starting at the top of the list
 * • Decouple Kodi and system volume on Android which removes the double audio volume slider
 * • Karaoke support has been completely removed as it wasn’t functional
 * • Further improve DX11 implementation in Windows
 * • iOS9 support
 * • Various PVR fixes and improvements
 * • Various improvements to the music section
 
 Needless to say, this is not the entire list of fixes and features for Alpha 4, but that list is quite long and tends to focus on under-the-hood items that are mostly of interest to other devs, skinners, and add-on writers. As these under-the-hood changes begin to work their way up to the user experience, we’ll do our best to detail them here.

 ### Improvements so far in version 15

 More in depth information can be found through the following links about the 15 release.

 
 * • [Kodi 16.0 Alpha 1&2](/article/kodi-160-alpha-1-2-jarvis-your-service)
 * • [Kodi 16.0 Alpha 3](/article/kodi-16-alpha-3)
 
 Add-ons
-------

 **General:** So far in version 16 there are no add-on changes that would impact any add-ons except for PVR. Since our 12.x Frodo release there have been some gradual changes but in general all add-ons, even from that time should still work, of course there are some exceptions. If the add-ons worked in Gotham, Helix and Isengard then we are happy to say that all these add-ons should still work.

 **Skins:** Sadly due to the amount of changes we’ll have to announce that skins will have certain parts non working. This alpha will still mark any version 15 skin as compatible and you can still use Kodi as you normally do. However starting from first Beta release which will be released soon all these will be marked “incompatible” unless they are updated. This means that for you to continue using Kodi 16.0 you will have to switch back to Confluence or wait till the skin you use has been updated in our repository.  
 The following skins are already updated for version 16 and will auto-update when you upgrade. We’re sure more will follow soon.

 
 * • Black Glass Nova
 * • Chroma
 * • Confluence
 * • Mimic
 * • Nebula
 * • Rapier
 * • re-Touched
 * • Transparency!
 
 Conclusion
----------

 Should you want to download and install this alpha (monthly) build please visit our download page.

 
 * * [Official Kodi 16.0 alpha and development downloads](/download)
 * * Raspberry Pi versions can be found on the [forum](https://forum.kodi.tv/forumdisplay.php?fid=166)
 
 Please report any problems on our fourm <http://forum.kodi.tv> and not on the release announcement.

 ### Donations or getting involved

 Getting involved is quite easy. Simply take the plunge and start using these 16.0 Jarvis builds. If you use these builds, we encourage you to report problems with these builds on our forum first and after that, if asked, submit bugs on Trac (following this guide: [How to submit a bug report](https://kodi.wiki/view/HOW-TO:Submit_a_bug_report)). Do note that we need detailed information so we can investigate the issue. We also appreciate providing support in our [Forums](https://forum.kodi.tv/ "Kodi Forums") where you can. You can of course also follow or help promote Kodi on all available social networks. Read more on the [get involved](/get-involved) page.  
 We are always happy to receive a [donation](/contribute/donate "Donate") by which you show your support and appreciation. All donations go towards the XBMC foundation and are typically used for travel to attend conferences, any necessary paperwork and legal fees, purchase necessary hardware and licenses for developers and hopefully the yearly XBMC Foundation Developers Conference.

  