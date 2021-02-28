---
title: 'Kodi 15.0 Isengard - Beta 1'
date: 2015-04-30T04:00:00Z
author: Martijn Kaijser
featured_image:
  src: /images/blog/Kodi-installing-skin.png
  title: ''
  alt: ''
---
Here it is, the first beta build for Kodi 15.0; freshly baked and ready to be served! We could call Kodi 15.0 a “clean-up” edition due to the lack of any prominent features and due to the massive spring cleaning we have been doing during the past months. Although some nice new features have been added, the majority of work was done cleaning up the vast complexity of code that was built up over the years. We still have a long way to go.

 Some of you might feel that we are releasing the new beta quite soon after the 14.x stable releases, however this is part of our plan. We intend to release more often with smaller features. This way the changes are more manageable and we can quicker squash any bugs that get left behind into next release.

 Let’s talk about what we’ve done.

 ### Improvements so far

 There were about 780 requests that contained multiple fixes, features, and improvements that went into the current 15.0 beta release. All these changes should sum up in an even better user experience while using Kodi. We could start summing up all the changes but there’s really no point in doing so. Instead we will make a quick selection of the most important changes done during past months.

 
 * * Reworked add-on manger that should give a better overview
 * * Chapter selection window that shows thumbs on where to skip to in the video
 * * Easier to navigate audio and subtitle selection list
 * * Addition of language add-ons which allow us to update the User-Interface text outside of regular releases
 * * Expansion of international options like time and date format, temperature and speed units.
 * * Skip steps (step forward & backwards) improvements.
 * * Tuxbox removal. Users of Enigma2 boxes can use the VUPlus PVR add-on
 * * Split PVR add-ons into separate projects which should allow updates through repo in the future
 * * Fix season art scraping on newly added seasons
 * * Immediately fetch updates from repository after Kodi version upgrade
 * * Improvement of installing new skins selection
 * * Remove legacy code pre-Frodo 11.0
 * * Add jump to first unwatched in TV section
 * * Remove certain codecs from our core code and made add-ons out of them. Audio encoders/decoders
 * * Removal of AFP filesystem support
 * * Windows DXVA HEVC hardware decoding support if driver and hardware support exist
 * * Added adaptive seeking through audio and video playback, also know as “skip steps”
 * * Android HEVC H.265 support for some chipsets
 * * Improve webserver caching control
 * * External subtitles over UPnP can be enabled through the settings section
 * * Allow scanning of new sources and marking as watched during other library operations such as “update library”
 * * Allow different sort orders for different sort methods
 * * Start of integration binary add-ons and changing the build system around it
 * * Improved CC (Closed Captions) support for Live TV
 * * ffmpeg 2.6.2 update
 * * Removal remaining SDL code which was used in some areas.
 * * Changed code to C++11
 * * Variety of memleaks, segfaults, crashes and minor issues fixed
 * * Rescrape season art for newly added seasons
 * * Upgrade included webserver which should fix issues with remotes loosing connections
 * * On Android the system now handles the volume
 * * General improvements regarding code stability and performance in all areas
 * * General code clean-up in all areas to simplify adding future features
 
 
 * * Mac OSX 
	 + - Minimal 10.7 Lion required
	 + - Only OSX 64-bit builds provided by us, so no more 32bit builds
	 + - Minimal MacOSX 10.10 SDK 
 * * iOS 
	 + - Minimal iOS 5.1 required
	 + - Minimal iOS 8.1 SDK
	 + - No more ATV2 builds 
 * * Android 
	 + - Minimum Android 4.2 Jelly Bean MR1 required
	 + - Android API 17 as minimum with SDK 14 and NDK 10e
	 + - Removed the need for root/SU on Android. Some hardware/firmware might not like that. Please contact your hardware supplier
	 + - Android PIL packaging fixed 
 
 and much more…

 For some more in depth views on some of the features you can read the following blogs we wrote concerning the Alpha releases:

 
 * * A[lpha 1](/article/kodi-150-alpha-1-road-isengard) 
 * * [Alpha 2](/article/kodi-150-isengard-alpha-2)
 
  Add-ons
--------

 **General:** So far in 15.0 there are no add-on changes that would impact any add-ons except for PVR. Since our 12.x Frodo release there have been some gradual changes but in general all add-ons, even from that time should still work, of course there are some exceptions. If the add-ons worked in Gotham and in Helix then we are happy to say that all these add-ons should still work. It could be that not all PVR add-ons are fully adjusted and updated, though the developers will do their best to be ready for final release.

 **Skins:** As of this moment, all skins that worked in Helix should still work in 15.0 *Isengard*. In the PVR sections there are certain changes that might be noticeable and need specific skin changes. These changes are minimal and shouldn’t cause any major problems in usability. We’re sure that most skin creators will be updating the skins in due time. Before that happens you should be able to enjoy this beta build without any problems.

 We need your help
-----------------

 With every release there comes a point where we as a team think we’re ready enough to call it “beta” and work our way to make it a final release. From this point on we need you, the users to help test the builds we publish and report any problems you may encounter. As we are only a limited group of people who also use Kodi in their spare time, we are limited in the ways we can use and test Kodi to the full extent. We are grateful to the devoted users who have already helped us testing the alpha builds on day to day basis. Having many thousands more running and testing this beta we can hopefully work out some of the remaining issues that lie within our power.

 Conclusion
----------

 Should you want to download and install this beta build please visit our download page.

 
 * * [Official Kodi 15.0 beta and development downloads](/download)
 * * Raspberry Pi versions can be found on the [forum](https://forum.kodi.tv/forumdisplay.php?fid=166)
 
 After the beta release you can also install the nightly versions we build each day.

 ### Other Software

 In addition to creating Kodi, the members of Team Kodi have created official remotes to be installed on your tablet or phone.

    **Kore™ (Android)** **Official Kodi Remote (iOS)**   [![](https://developer.android.com/images/brand/en_generic_rgb_wo_45.png)](https://play.google.com/store/apps/details?id=org.xbmc.kore) [![](https://devimages.apple.com.edgekey.net/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg)](https://itunes.apple.com/en/app/official-xbmc-remote/id520480364)   [![org.xbmc.kore](/sites/default/files/uploads/org.xbmc_.kore_.png)](https://play.google.com/store/apps/details?id=org.xbmc.kore) [![Official Kodi Remote (iOS)](/sites/default/files/uploads/qrcode.png)](https://itunes.apple.com/en/app/official-xbmc-remote/id520480364)    Like Kodi™ itself, both official remotes are free and open source software.

 ### Get involved

 Getting involved is quite easy. Simply take the plunge and start using these 15.0 Isengard builds. If you use these builds, we encourage you to report problems with these builds on our forum first and after that, if asked, submit bugs on Trac (following this guide: [How to submit a bug report](https://kodi.wiki/view/HOW-TO:Submit_a_bug_report)). Do note that we need detailed information so we can investigate the issue. We also appreciate providing support to other users in our [Forums](https://forum.kodi.tv/ "Kodi Forums") where you can, or [donate](/contribute/donate "XBMC Foundation Donations") to the XBMC Foundation if you like. You can of course also follow or help promote Kodi on all available social networks. Read more on the [get involved](/get-involved) page.

  