---
title: 'Kodi 15.0 alpha 1 - The road to Isengard'
date: 2015-02-27T03:00:00Z
author: Martijn Kaijser
featured_image:
  src: /images/blog/kodi-splash-Isengard-alpha.png
  title: ''
  alt: ''
---
Last year we shocked the community and the world with the announcement of our name change. Now some months later we are happy to see that a lot of people have adopted this change and embraced what is now know as Kodi. The best media center in the world… We promised that we would stick true to our goal of improving it as media center and we will.

 [![](/sites/default/files/uploads/da-anda_hobbiton-200x300.jpg "da-anda visiting Hobbiton ")](/sites/default/files/uploads/da-anda_hobbiton.jpg)With this first public alpha release we will look back at the changes we have been doing for the past two months since the 14.0 release. We would certainly like to thank users who were already using our nightly builds to reach this stage.

 As most will already know, with a new big version comes a new release code name following the alphabet. After a team vote and da-anda (our artwork guru) actually visited Middle Earth we chose to go for *Isengard.* At times you will find this as reference for the actual version number which will be 15.x

 On the road to Isengard our developers will continue to focus on removing old legacy code, as well as improving both usability and user friendliness.

 We’ve had about 400 pull-request for code merges, 1322 commits and thousands of code lines changed. Almost all sums up into the promised clean-up and stability. However because of the vast amount of changes it’s kinda hard to filter out specific problems that have been fixed. You can browse through the full change log: [15.0 alpha1](https://github.com/xbmc/xbmc/issues?q=milestone%3A%22I%2A%2A%2A%2A%2A%2A%2A+15.0-alpha1%22+is%3Aclosed) Otherwise we will sum up the most notable changes in the list below.

 Important changes:
------------------

 
 * * Added adaptive seeking through audio and video playback, also know as “skip steps”  

 * * Android HEVC H.265 support for some chipsets
 * * Improve webserver caching control
 * * External subtitles over UPnP
 * * Allow scanning of new sources and marking as watched during other library operations such as “update library”
 * * Allow different sort orders for different sort methods
 * * Start of integration binary add-ons and changing the build system around it
 * * Improved CC (Closed Captions) support for Live TV
 * * ffmpeg 2.5.4 update
 * * Remove remaining SDL code
 * * Minimal Mac OSX 10.7 Lion required
 * * Only OSX 64-bit builds provided by us, so no more 32bit builds
 * * Minimal iOS 5.1 required
 * * iOS 8.1 SDK & MacOSX 10.10 SDK
 * * Minimum Android 4.2 Jelly Bean MR1 required
 * * Android API 17 as minimum with SDK 14 and NDK 10e
 * * Removed the need for root/SU on Android
 * * Android PIL packaging fixed  

 * * Changed code to C++11
 * * Variety of memleaks, segfaults, crashes and minor issues fixed
 * * General improvements regarding code stability and performance in all areas
 * * General code clean-up in all areas to simplify adding future features
 
  Skip steps (Step Forward & Back improvement)
---------------------------------------------

 [![Adaptive seek in action](/sites/default/files/uploads/addaptive_seek_inaction-300x187.png)](/sites/default/files/uploads/addaptive_seek_inaction.png)The Step Forward, Step Back and Small Step Back actions are now forwarded to a new seeking function that is configurable in the GUI via the Skip steps and Skip delay settings. It allows single skip steps backwards and forwards with the left and right cursor keys as before, however a new feature is that by pressing the left and right keys multiple times you can skip with increasingly larger steps. Another feature of this new seeking function is that music files can also now can make use of skip steps. For more on this see [https://kodi.wiki/view/Skip\_Steps](https://kodi.wiki/view/Skip_Steps)

 Apple devices
-------------

 **ATV2:** As we announced in January, we have stopped the support and building for the ATV2 device. As our main iOS/OSX developer had stated, to keep supporting this device would cost a lot of effort, trial and error and it was getting outdated for what we demanded of the device. You can read the announcement on saying goodbye here: [link](/article/farewell-future-apple-tv2-development)

 **iOS:** With the demise of the ATV2 and the push to change our code to be C++11 compliant (which solved various problems), our developer had to bump the used SDK for iOS to 8.1 With that, the minimum version Kodi can run on will now be iOS 5.1 (and higher).

 **OSX:** In addition to the SDK bump on iOS, we also had to bump the used SDK for Mac OSX operating system to version SDK10.10 This means that you Mac needs at least Mac OSX10.7 *“Lion”* running to operate Kodi 15.0 Since all devices that run OSX 10.7 *“Lion”* also have 64bit compliant hardware, we will also stopped building the 32bit version from now on.

 *note: These changes do not apply to Kodi 14.x so you can keep enjoying that version without problems.*

 Android
-------

 ![Android_jelly_bean](/sites/default/files/uploads/Android_jelly_bean-201x300.png)Sadly at some point we have to say goodbye to certain things to not hold us back. The release of 15.0 will mean that your Android device will need at least have Android 4.2 “Jelly Bean MR1″. Since the Android platform wasn’t as mature at the time we added it to our platform list, we had to incorporate certain workarounds to keep functioning. With the introduction of Android 5.0 platform and Android TV it was felt this was the time to release us from these workarounds of older Android versions.

 So what does this mean for 15.0 and up?

 
 * * We now use Android SDK API level 17 as minimum and NDK 10d
 * * Android 4.2 “Jelly Bean MR1″ is required to be able to install and run
 * * You will get the message “*there was a problem parsing the package*” if your Android version is not sufficient.
 * * Android TV platform should now be fully supported. As of this time you will still have to “side load” it onto your device.
 * * Various devices will simply not be able to install Kodi any more. We will not provide a list because there are simply to many out there. Check the Android version you have installed on your device.
 * * Removed superuser/root access requests which can cause problems on certain devices that relied on this.
 * * Devices that don’t have their firmware in order will cause various problems: not starting or crashing at start-up, black screen and perhaps more. Please contact your device reseller for further support regarding firmware problems.
 * * These changes do not apply to Kodi 14.x so you can keep enjoying that release without problems (except in some cases).
 
  Add-ons
--------

 **General:** So far 15.0 there are no add-on changes that would impact any add-ons except for PVR. Since our 12.x Frodo release there have been some gradual changes but in general all add-ons, even from that time should still work, of course there are some exceptions. If the add-ons worked in Gotham and in Helix then we are happy to say that all these add-ons should still work.

 **Skins:** As of this moment, all skins that worked in Helix should still work in *Isengard*. Though in PVR there are certain changes that might be noticeable and need specific skin changes. These changes are minimal and shouldn’t cause any major problems in usability. Overall you should be able to enjoy this alpha build without any problems in this area.

 Sum up
------

 As you have read, we’ve had to drop quite some legacy devices for this release. We feel your pain however this is the only way we could keep evolving towards stability, code clean-up and future features. The good news is that so far there will be no significant changes on the horizon that could have serious effect on the add-ons and skin(s) you are using. All the code changes have happened “under the hood” and you should notice little to nothing of the hard work that has been done., apart from better stability and performance.

 Curious about the history and future of Kodi (formerly know as XBMC)? Check out the links below:

 
 * * [FOSDEM 15](/article/kodi-attending-fosdem-2015) Including two video presentations we did
 * * [Community Updates 2015](/article/some-new-year-community-updates-2015)
 * * [Community Updates 2015 (part 2)](/article/some-new-year-community-updates-2015-part-2)
 * * [Google Summer of Code 2015](/article/google-summer-code-2015)
 
 Should you come up with some great desktop backgrounds regarding Kodi in combination with our code name(s). Feel free to share them on our forum.

 Conclusion
----------

 Should want to download and install this alpha (monthly) build please visit our download page.

 
 * * [Official Kodi 15.0 alpha and development downloads](/download)
 * * Raspberry Pi versions can be found on the [forum](https://forum.kodi.tv/forumdisplay.php?fid=166)
 
 ### 

 ### Get involved

 Getting involved is quite easy. Simply take the plunge and start using these 15.0 Isengard builds. If you use these builds, we encourage you to report problems with these builds on our forum first and after that, if asked, submit bugs on Trac (following this guide: [How to submit a bug report](https://kodi.wiki/view/HOW-TO:Submit_a_bug_report)). Do note that we need detailed information so we can investigate the issue. We also appreciate providing support in our [Forums](https://forum.kodi.tv/ "Kodi Forums") where you can, or [donate](/contribute/donate "XBMC Foundation Donations") to the XBMC Foundation if you like. You can of course also follow or help promote Kodi on all available social networks. Read more on the [get involved](/get-involved) page.

 