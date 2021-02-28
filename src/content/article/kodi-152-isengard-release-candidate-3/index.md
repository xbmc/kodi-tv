---
title: 'Kodi 15.2 Isengard - Release Candidate 3'
date: 2015-10-03T04:00:00Z
author: Martijn Kaijser
featured_image:
  src: /images/blog/Kodi-Wallpaper-11A-1080p_samfisher.jpg
  title: ''
  alt: ''
---
Once a ‘final’ version is released some new bugs and/or problems usually appear out of nowhere, and last release was no exception. Even though tens of thousands of users were already testing the 15.0 version before release and we try very hard to prevent them, as soon as million started using it, some problems we either did not think of or which we did not notice popped up. To counter some of these new issues, we’re bringing you this second maintenance release candidate called 15.2 RC3 which has some additional fixes on top of the 15.0 and 15.1 release.

 This is still a release candidate; once enough users have verified that these improvements work out well, and we did not introduce any major regressions, we’ll be releasing it as final 15.2 version. To be safe just backup your [userdata (online manual)](https://kodi.wiki/view/Userdata) first.

 It should be ok to just install this on top of your current Kodi 15.0 or 15.1 version. For the MySQL users out there; we never bump the database versions in our bugfix or maintenance releases – you can safely keep using it within your network.

 Most important fix done
-----------------------

 Over time the Android version has travelled some bumpy roads. This is due to the fact there are tens of thousands of different devices out there with each it’s own Android version and each a slightly different firmware and hardware. Firmware is the part where the manufacturer of the device has to make sure the everything works as it should like audio and video output. This time after the 15.0 release it became clear that for several devices using an Amlogic chipset there was a change in firmware that caused Kodi to not function properly and only show a zoomed in or only used part of the screen. Devices that came from manufacturers that had properly updated their firmware did not have this problem. However for some this never happened and caused all the problems you might have experienced. One method was to put special build firmware on the device which fixes the problem and Kodi would just work fine again. Sadly this is a quite technical process and could brick your device if not done properly. Luckily a community developer invested a lot of time in tracking down the problem and together with our main Android developer came to a solution for fixing this.

 In short, we’ve solved the problems for the users that had the zoomed in or partial screen using Kodi in Android. As such we included these changes into the 15.2 RC build for every one to test and hopefully get their device working again.

 Secondly some playback problem popped up for many Android users where they lost video after fast-forward playback. This should now have been correct as well (if you had not yet got the extra Play Store update for 15.1).

 Should you still experience problems with this build please provide feedback on our forum or in this 15.2 specific test thread: [link](https://forum.kodi.tv/showthread.php?tid=233293) Be sure to provide sufficient information.

 ### Fixes done in this RC 3 version

 
 * • Fix non DVB subtitles
 * • Fix incompatible MySQL queries
 * • Improvements on PulseAudio for Linux
 * • Fix multi images in grouplists/layouts
 * • Updated PVR add-ons: Tvheadend HTSP and MythTV
 * • Fix refresh-rate switching on Android. This should improve on most devices like Nexus Player and NVIDIA SHIELD TV and others which use the Android API
 
  #### **Fixes done in this RC 2 version**

 
 * • Fix file time used in scanning library which may speed up scanning times on 32bit platforms
 * • Fix video rewind on Windows. May still leave artifacts for some seconds.
 * • Fix continues check on system partitions on Android
 * • Fix MicroDVD subtitles
 * • Fix subtitles positioning below video
 * • Fix memory leak on opening Bluray menu for stream selection
 * • Fix default sorting for songs over UPnP
 
 ### Fixes done in this RC 1 version

 
 * • Updated taglib that fixes a crash when playing flac files
 * • Fix volume adjustment for XBOX controllers
 * • Fixes side flyout appearing when using touch
 * • Fixes freeze on win32 on away mode
 * • Fix crash on osx 10.7 when trying to resolve hdd names
 * • Fix Amlogic zoom problems on Android
 * • Set default screen region for dvb subs (wrong placed subtitles)
 * • Fix missing lyrics from tag when playing from musicdb url
 * • Properly set the time format when setting/changing regions
 * • Fix playback problems on AMLogic after ffwd or skip
 * • Fix fallback for nb\_no language
 * • Fix empty LatestAlbum.Artist
 * • Fix watched flag in Confluence media info 3 view
 
 The complete technical list can be found on our Github [milestones](https://github.com/xbmc/xbmc/issues?q=milestone%3A%22Isengard+15.2%22+is%3Aclosed).

 ### Improvements so far in version 15

 More in depth information can be found through the following links about the 15 release.

 
 * • [Kodi 15.0 Alpha 1](/article/kodi-150-alpha-1-road-isengard)
 * • [Kodi 15.0 Alpha 2](/article/kodi-150-isengard-alpha-2)
 * • [Kodi 15.0 Beta 1](/article/kodi-150-isengard-beta-1 "Kodi 15.0 Isengard – Beta 1")
 * • [Kodi 15.0 Beta 2](/article/kodi-150-isengard--beta-2 "Kodi 15.0 Isengard – Beta 2")
 * • [Kodi 15.0 RC1](/article/kodi-150-isengard-rc-1)
 * • [Kodi 15.0 RC2](/article/kodi-150-isengard--rc-2)
 * • [Kodi 15.0](/article/kodi-150-isengard-one-release-rule-them-all)
 * • [Kodi 15.1 RC1](/article/kodi-151-isengard-release-candidate)
 * • [Kodi 15.1](/article/kodi-151-isengard-maintenance-release)
 * • [Kodi 15.2 RC](/article/kodi-152-isengard-release-candidate)1
 * • [Kodi 15.2 RC2](/article/kodi-152-isengard-release-candidate-2)
 
 Add-ons
-------

 **General:** So far in version 15 there are no add-on changes that would impact any add-ons except for PVR. Since our 12.x Frodo release there have been some gradual changes but in general all add-ons, even from that time should still work, of course there are some exceptions. If the add-ons worked in Gotham and in Helix then we are happy to say that all these add-ons should still work.

 **Skins:** As of this moment, all skins that worked in 14.x *Helix* should still work in 15 *Isengard*. In the PVR sections there are certain changes that might be noticeable and need specific skin changes. These changes are minimal and shouldn’t cause any major problems in usability. There still might be some options still missing which you relied upon first. We’re sure that most skin creators will be updating the skins in due time. Before that happens you should be able to enjoy this beta build without any problems.

 ### Windows 10 problems

 Users who have installed Windows 10 should make sure that they have the correct video card drivers installed. We see a lot of problems that have to do with this reported on the forum. It’s not something we as team can do anything about. Make sure you have updated all drivers according to the manufacturers website in case you are experiencing problems. Windows 10 has just been released and as such is still in active development. Another thing that might be helpful is installing the special Kodi version 15 DirectX11 build which is mentioned a bit further down.

 ###  DirectX 11 upgrade (not included in 15.0 or 15.1)

 [![DX11](/sites/default/files/uploads/DX11.png)](/sites/default/files/uploads/DX11.png)Although this release post is all about the 15.0 version, mentioning the DX11 upgrade for next version is very important. Since switching from OpenGL in 2009, Kodi (and XBMC in the past) has used the DirectX 9 implementation for various tasks of rendering the user interface and media playback. This almost dates back to the XBOX days. With the hardware industry moving and focussing more on the newer DX11 with their drivers, more people have problems with running our outdated DX 9 version. This could range from simply not starting, crashing just after loading, playing videos or having problems with hardware acceleration. One of our developers *afedchin* took on this task and completely revised our DirectX 9 implementation and upgraded it to the more current standard of DirectX 11. Don’t worry if you still have an older card, we only use low level features so you don’t need to run to the shop for new gear. If you are having problems on Windows you can head to our forum where you can find the most recent build available which is currently based on our 15.0 release. We appreciate all the feedback we can get. Read more: [here on our forum.](https://forum.kodi.tv/showthread.php?tid=218274) Again this will not be part of our 15.x releases. It has already been successfully merged into our future 16.0 release.

 Conclusion
----------

 Should you want to download and install this build please visit our download page.

 
 * * [Official Kodi 15 downloads](/download) (scroll down for Release Candidate 15.2)
 * * [v15 upgrade FAQ](https://kodi.wiki/view/Isengard_FAQ)
 
 ### Other Software

 In addition to creating Kodi, the members of Team Kodi have created official remotes to be installed on your tablet or phone.

    **Kore™ (Android)** **Official Kodi Remote (iOS)**   [![](https://developer.android.com/images/brand/en_generic_rgb_wo_45.png)](https://play.google.com/store/apps/details?id=org.xbmc.kore) [![](https://devimages.apple.com.edgekey.net/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg)](https://itunes.apple.com/en/app/official-xbmc-remote/id520480364)   [![org.xbmc.kore](/sites/default/files/uploads/org.xbmc_.kore_.png)](https://play.google.com/store/apps/details?id=org.xbmc.kore) [![Official Kodi Remote (iOS)](/sites/default/files/uploads/qrcode.png)](https://itunes.apple.com/en/app/official-xbmc-remote/id520480364)    Like Kodi™ itself, both official remotes are free and open source software.

 ### Get involved

 Getting involved is quite easy. Simply take the plunge and start using these 15.0 Isengard builds. If you use these builds, we encourage you to report problems with these builds on our forum first and after that, if asked, submit bugs on Trac (following this guide: [How to submit a bug report](https://kodi.wiki/view/HOW-TO:Submit_a_bug_report)). Do note that we need detailed information so we can investigate the issue. We also appreciate providing support to other users in our [Forums](https://forum.kodi.tv/ "Kodi Forums") where you can, or [donate](/contribute/donate "XBMC Foundation Donations") to the XBMC Foundation if you like. You can of course also follow or help promote Kodi on all available social networks. Read more on the [get involved](/get-involved) page.

  

 