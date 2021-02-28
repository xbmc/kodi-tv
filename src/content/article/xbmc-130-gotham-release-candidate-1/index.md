---
title: 'XBMC 13.0 Gotham - Release Candidate 1'
date: 2014-04-27T04:00:00Z
author: Nathan Betzen
featured_image:
  src: /images/blog/Splash.png
  title: 'Splash'
  alt: 'Splash'
---
We hope you are as excited about this as we are. After a year of hard work, improvements and testing since the release of version 12.0, we are delighted to announce the first release candidate of the upcoming XBMC 13.0, codenamed *“Gotham”*. The past year we have kept you informed with our monthly [blog posts](https://kodi.wiki/tag/gotham/) of all the exciting new features added to this upcoming release. Now, let’s review a few of those features we’re particularly excited about.

 The features
------------

 **Android Hardware Decoding** ![DL_Icons_Android-new](/sites/default/files/uploads/DL_Icons_Android-new.png)

 Since 2012 July 12, the single most requested feature has been hardware decoding in Android, and with XBMC 13 we are finally able to make that feature a reality. XBMC should run on Android 4.0 and higher and is offered now in two separate builds, namely ARM and x86, which are the hardware architectures of the device. You would need to consult your device specifications before you download XBMC for Android, though the vast majority of Android devices run on ARM hardware.

 **Raspberry Pi and Android speed improvements ![DL_Icons_RaspberryPi-new](/sites/default/files/uploads/DL_Icons_RaspberryPi-new.png)**

 Since the release of Frodoa lot of effort has been put into getting XBMC to run smoother on lower powered platform like the famous Raspberry Pi and of course Android. All this effort has paid off and the experience of using these devices has become much more polished and satisfying than ever before. In particular, opening your libraries, browsing through them, loading images and starting videos have all seen dramatic speed increases.

 **Stereoscopic 3D Rendering**

 [![Some of the newly available 3D Options](/sites/default/files/uploads/3D_in_2D-300x165.jpg)](/sites/default/files/uploads/3D_in_2D.jpg)

 For you lovers of 3D out there, we are also pleased to say that we now support 3D movies encoded in the following formats: SBS, TAB, anaglyph, and interlaced (on supported platforms for passive TVs). Unfortunately, XBMC cannot yet support 3D blurays and cannot provide hardware acceleration for FullSBS/TAB movies (therefore limiting those videos to relatively high powered CPUs).

 **Improved Touchscreen Support**

 XBMC on touchscreens now supports gesture controls during video playback, as well as supporting swiping controls in navigation.

 **Improved UPnP capabilities**

 [![gotham-upnp_play_using](/sites/default/files/uploads/gotham-upnp_play_using-300x187.png "Gotham 13.0 - UPnP Play Using...")](/sites/default/files/uploads/gotham-upnp_play_using.png)Instances of XBMC throughout the house can now “speak” with each other and with other UPnP devices. Support now includes more advanced library browsing as well as “[Play using…](https://www.youtube.com/watch?v=0D3JkUzUi-k "Play Using and XBMC")” functions, allowing XBMC to tell another device on the network to play a certain media file.

 So you can browse the UPnP library on your tablet and send a video from that library straight to you main XBMC HTPC, similar to Apple’s Airplay and Google’s casting features.

 Additionally when watching videos from the XBMC UPnP server, watch status will be updated so you don’t have to remember what shows you’ve already watched.

 **Dramatic Audio Engine Improvements**

 The Audio Engine introduced with XBMC 12.0 *“Frodo”* has been reworked to be simpler, faster, with better quality and less likelihood of breaking in XBMC 13 across all platforms. You may also notice that some users will need to reconfigure their audio settings. This is caused by the audio improvements and restructuring of the settings systems. However this should be more intuitive and user friendly than it was in XBMC 12 thanks to improvements in Settings.

 On Linux there is additional good news for Desktop users who don’t use XBMC as a standalone HTPC through OpenELEC or XBMCbuntu. XBMC will now cooperate nicely with the pulseaudio server and will provide real pulseaudio support. This is a behavior change, make sure to read the [PulseAudio XBMC wiki page](https://kodi.wiki/view/PulseAudio "PulseAudio support in XBMC") to learn more.

 **Settings Improvements**

 From the user perspective, three major changes will be introduced that should dramatically improve usability in XBMC settings.

 First, settings have been broken down into levels starting at beginner and going all the way up the scale to expert level. The typical XBMC user should never need to go very far past the Standard settings. If installing XBMC for friends or family, it is highly encouraged that you move the settings down to Beginner level. And if a setting has disappeared that you typically expect to see, definitely browse through the settings levels, as it likely has been hidden on a more advanced level.

 Second, every setting now includes a description, which may be found at the bottom of the settings page on the default Confluence skin. If a setting title is odd or is otherwise confusing, this description is intended to clear up the purpose of the setting and the result of changing it.

 Third, every setting page now includes a Reset to Default option so that if you find yourself completely unable to return to a useable state in XBMC, you can always start fresh without having to perform a complete reinstall. Importantly, resetting one group of settings to default does not affect any others. So if you have video settings just right, but audio is screwed up, you can reset audio without affecting video.

 **Making Subtitle Search Better**

 [![Gotham 13.0 Improved subtitle search](/sites/default/files/uploads/gotham-subtitle_search-300x187.png)](/sites/default/files/uploads/gotham-subtitle_search.png)

 This change should give subtitle addon developers a great deal more latitude for implementing changes and fixes without needing to wait for other addon devs to submit similar fixes, all to the benefit of the user experience. From the user perspective, the only significant change will be in the way a subtitle search service is downloaded. The user will need to select and download their preferred subtitle addon before starting a movie and searching for subtitles. At present there are 19 to choose from.

 **An Extended Python and JSON-RPC API for developers**

 While this feature may not be as immediately noticeable upon install, it could ultimately be one of the most important changes of XBMC 13. With the extension of the API, users should soon be able to control virtually every aspect of XBMC without once touching the XBMC UI. Developers will now have unprecedented opportunity to make even more powerful remote control apps, web GUIs, and XBMC add-ons. For example, with the Official XBMC Remote for iOS users can now configure every single setting in XBMC without once opening the settings window in XBMC itself.

 We look forward to the community taking advantage of this extended API and creating some extraordinary features in the future.

 **Yet More Features**

 
 * - Update to FFMPEG v1.2 which we use for audio/video playback
 * - Stereo audio can now be upmixed to 5.1 and sent through optical/SPDIF devices
 * - Various visual changes throughout the skin which should improve usability and logic.
 * - Improve the handling of subtitle downloading and selection
 * - Extend and improve the User-interface Engine which developers use to create a variety of skins to be used.
 * - Drop of support for Windows XP. Due to upgrades in the way we build XBMC, it is no longer possible to install XBMC onto Windows XP. For current XP users we can suggest installing OpenELEC or XBMCbuntu as a free way to use XBMC 13 as a pure media centre.
 * - When initiating a library cleaning, XBMC will send a wake-on-lan request to any sleeping servers first, before cleaning the library, to ensure that content isn’t unnecessarily cleaned
 * - Numerous PVR fixes and updates with additional new features updated on a per-platform basis. For more info, check out our [PVR wiki page](https://kodi.wiki/view/PVR "PVR for XBMC wiki page")
 * - Copy/paste support on Windows, OSX, and iOS to match copy/paste support elsewhere
 * - Movie sets are now user editable
 * - Episodic bookmarks – If episodes are not broken into individual parts (e.g. Friends episode 1 and 2 are in the same video file), a bookmark can be set that will cause launching episode 2 from the UI to go directly to the bookmark in the video file
 
 For a brief change log visit our wiki page: [Gotham Changelog](https://kodi.wiki/view/XBMC_v13_%28Gotham%29_changelog)

 **Skins**

 Not all skins from Frodo are guaranteed to work on Gotham. The following is a list of skins that have been checked for 13.0 compatibility and are currently in the XBMC skin repo.

 [Ace](https://kodi.wiki/view/Add-on:Ace "Add-on:Ace"), [Aeon MQ 5](https://kodi.wiki/view/Add-on:Aeon_MQ_5 "Add-on:Aeon MQ 5"), [Amber](https://kodi.wiki/view/Add-on:Amber "Add-on:Amber"), [Black Glass Nova](https://kodi.wiki/view/Add-on:Black_Glass_Nova "Add-on:Black Glass Nova"), Cirrus Extended, [Confluence](https://kodi.wiki/view/Add-on:Confluence "Add-on:Confluence"), [Hybrid](https://kodi.wiki/view/Add-on:Hybrid "Add-on:Hybrid"), [Metropolis](https://kodi.wiki/view/Add-on:Metropolis "Add-on:Metropolis"), [Quartz](https://kodi.wiki/view/Add-on:Quartz "Add-on:Quartz"), [Re-Touched](https://kodi.wiki/view/Add-on:Re-Touched "Add-on:Re-Touched"),[Transparency!](https://kodi.wiki/view/Add-on:Transparency%21 "Add-on:Transparency!")

 **Official XBMC Remote for iOS**

 [![iOS Simulator Screen shot 28 Apr, 2014 20.04.53](/sites/default/files/uploads/iOS-Simulator-Screen-shot-28-Apr-2014-20.04.53-800x600.png)](/sites/default/files/uploads/iOS-Simulator-Screen-shot-28-Apr-2014-20.04.53.png)

 We are also pleased to announce v1.5 of the Official XBMC Remote app for iOS. In addition to all past features, v1.5 now supports controlling LiveTV, along with access to the EPG, PVR recordings, and PVR timers. Users can now also change and update all XBMC settings from directly within the remote app by hitting the gears button on the Remote Control tab and selecting “…more.” For a complete changelog, visit the the [Official Remote page](https://apps.apple.com/us/app/official-xbmc-remote/id520480364 "Official XBMC Remote for iOS") in the Appstore.

 The fixes
---------

 The list of fixes is too vast to even being listing here. Some improvements and fixes came in with the features mentioned above and some came in separately. For all this we want to thank our passionate group of Team XBMC developers and the hundreds of third-party developers who contributed to XBMC with patches and improvements. For the curious people who do want to know every change, you can find the full list on our [github development repo](https://github.com/xbmc/xbmc/compare/Gotham...Frodo), although it’s quite technical to read through.

 After upgrade
-------------

 After you have updated from Frodo or any earlier alpha or beta it may be beneficial to force refresh the XBMC.org repository. This will ensure the most recent repository list is loaded and needed updates become available. Here’s a quick how-to from our wiki: [Force refresh](https://kodi.wiki/view/Add-on_manager)

 Important notice
----------------

 **Linux users** Ubuntu 12.10 and 13.10 have been deprecated by canonical/ubuntu. This means there will be no more XBMC builds available for those version. You will have to upgrade you Ubuntu to a newer version to receive XBMC updates again.

 **Backup your data** Before upgrading we would recommend you create a backup of your current userdata folder which contains all your current settings and database files. In the unlikely case that something went wrong during your upgrade, a backup will ensure that you are still able to go back to the previous state. Where the userdata folder is located on your system can be found on our [userdata](https://kodi.wiki/view/Userdata) wiki page. Do note that when first upgrading from Frodo 12.x it may take some time until you see the familiar homescreen as several internal upgrades need to be performed.

 **Add-ons** As mentioned in previous blog posts, due to changes related to our add-on system and skin improvement, certain plugins, scripts and skins may become incompatible when upgrading from Frodo to Gotham. Sadly this is part of the continuing process of development and improvement. We hope the impact of these changes will be limited but we feel a warning would be beneficial. If there are any addons you particularly depend on, we advise that you visit the forum thread of that addon to see if the author has ensured support in XBMC 13.

 **Installing on OSX** As XBMC is an unsigned application on OSX, you may need to go through a slightly different process to start it the first time. After you have copied XBMC to the Applications folder, you will need to “right click” or “two finger click” XBMC from within the Applications folder and select “Open” and then accept the warning. You should only need to do this the first time you run XBMC.

 **Code base** Since we have branched the XBMC core code for Gotham off from our main development master branch on Github it is important that you also build from the correct Github branch: <https://github.com/xbmc/xbmc/tree/Gotham>

 Conclusion
----------

 Should want to download and install XBMC, please visit our download page.

 * [Official XBMC downloads](https://kodi.wiki/download/)

  

 ### How to Contribute

 If you use these builds, we encourage you to submit bugs in Trac (following this guide: [How to submit a bug report](https://kodi.wiki/view/HOW-TO:Submit_a_bug_report)), provide support in our [Forums](https://forum.kodi.tv/ "XBMC Forums") where you can, or [donate](https://kodi.wiki/contribute/donate/ "XBMC Foundation Donations") to the Foundation if you like. For a current FAQ on XBMC 13, visit our [Gotham FAQ](https://kodi.wiki/view/XBMC_v13_(Gotham)_FAQ "XBMC 13 FAQ").

 