---
title: 'Kodi v17 "Krypton" Beta 3'
date: 2016-10-04T03:00:00Z
author: Martijn Kaijser
featured_image:
  src: /images/blog/Kodi-physical-ms-store-1080p.jpg
  title: 'Kodi-physical-ms-store-1080p'
  alt: 'Kodi-physical-ms-store-1080p'
---
Kodi 17 features a huge amount of work in areas like video playback, live TV and PVR/DVR, the music library, skinning and more. It features a new default skin, as well as a new default touchscreen skin, named Estuary and Estouchy, respectively. With all this work done over the months some bugs might slip through and were hoping to quickly squash the coming beta releases. The changes for this third beta are the result of the continuous effort from the developers, either from inside the team or outside to get v17 into final release shape. and any outside. We sure would like to thank every one involved with either development, testing or simply helping out others with question. Below is a condensed list of fixes and changes done in this beta 3 release.

 Fixes done in this Beta 3:
--------------------------

 • Fix album rating which should show as 0-10 compared to 0-5 before  
 • Add ability to JSON-RPC to return user ratings  
 • Fix mouse focus offset on buttons in EPG window  
 • Check on selected fanart pack in Estuary  
 • Fix WAV playback on Windows  
 • Add proper screen scale for latest iOS devices  
 • Add time button on PVR information dialog  
 • Fix certain bugs and improve RenderCpature which is use for Boblight  
 • Fix unloading of EPG data on exiting the application  
 • Fix on handling CUE sheet  
 • Add some additional music roles in the Music sections  
 • Fix possible deadlock on using PVR as startup window  
 • Don’t use hyphens in front of temperature as they might make it seem as negative temperature  
 • Exclude singles in recently played albums  
 • Show text during migrations tasks like database and add-ons upgrade  
 • Fix PVR not working after using the login screen  
 • Improve handling of event where displayed changed on Windows which could cause a crash  
 • Add possibility to get information from both .nfo and scraper  
 • Fix packaging of binary add-ons on Android builds  
 • Fix video playback on older Mac Mini devices  
 • Workaround amlogic passthrough on devices running Android 5  
 • Fix fontsetting on switching skins  
 • Fix ghost timers on certain PVR clients  
 • Fix DVD menu playback and audio  
 • Fix crashing on OSX with playing DVDs  
 • Require a click on slider before you can change it. Click again to accept the change and continue navigation  
 • Variety of fixes to video playback  
 • Various skin fixes and changes

 A full list can be found [here](https://github.com/xbmc/xbmc/pulls?q=is%3Apr+milestone%3A%22Krypton+17.0-beta3%22+is%3Aclosed)

 What’s new?
-----------

 Next to the list of fixes we also added some features we thought would certainly help along the usability of Kodi. With this beta a long awaited feature was added since the early days of Eden (v11) or even earlier. As most of you know on each new Kodi version there are certain database changes which happen on the first start of Kodi after you upgraded. On some devices this might be over quite fast however for some slower devices this might seem like Kodi has frozen while it was actually finishing the database upgrade. We did acknowledge this problem and have always wanted to add a some message on the Kodi splash screen telling users what is actually happening. We with this v17 beta version we finally had the ability to add this feature given the fact enough pre-work had been done making this possible. Additionally what now happens is that on the first upgrade our add-on manager will fetch the latest available add-ons for that specific versions and will process these before going to Kodi home screen itself. One of the most noticeable problems before was when you had a non default skin installed, after upgrade the screen went black and it started installing the new skin version. Now all this happens during the first start and you’ll see a nice message saying it’s processing the upgrade. Depending on the amount of installed skins, add-ons and internet connection speed this could take a while. So please, don’t turn of your device during this initial startup period.

 [![v17-addonmigration](/sites/default/files/uploads/v17-addonmigration-800x450.jpg)](/sites/default/files/uploads/v17-addonmigration.jpg)

  Next notable change is the way the settings sliders work. I’m sure we all came across them one way or another in the Kodi setting screen or in some add-ons and struggled navigating around them. You tried to go to the left or right but then you accidentally changed the slider setting and had to set it back again. From now on you don’t have this problem any more because you will first need to highlight the slider, click on it and then you can adjust it’s settings. Once satisfied just click again and you can navigate freely to the next control on the window. If the slider has two nibbles on it that control the setting then the process is the same but you first move to the next nibble and then you accept it. Although this a small change it was one of those annoyances that made navigation in Kodi not always easy.

 [![v17-slider-controls](/sites/default/files/uploads/v17-slider-controls-800x450.jpg)](/sites/default/files/uploads/v17-slider-controls.jpg)

  

 Windows Store

 [![KODI_BLOG_WIN_300x300_C](/sites/default/files/uploads/KODI_BLOG_WIN_300x300_C-160x160.png)](href=https://www.microsoft.com/store/apps/kodi/9nblggh4t892?cid=koditvlin)In case you missed the big news some time ago, Kodi got added to the Windows Store as a Desktop Bridge UWP app. It is still the same Kodi version you are used to use, without any limitations. Although it is still possible (and always will be) to download and install Kodi from our website, it is now also possible for Windows 10 users to download and install Kodi from the Windows Store. This brings a few benefits, such as automatic updating. The Windows Store application uses the same *userdata* as the version from our website so you can switch between the two versions without issues. NOTE: This also means that if you are currently running Kodi v16 and want to try out the Windows Store version, your Kodi databases and add-ons will be upgraded to the v17 versions. You might want to make a backup of the userdata before! You can read the full announcement here: [Kodi goes Windows Store](/article/kodi-goes-windows-store)

 **NOTE**: Since it takes a bit of time to publish in Windows Store you might need to wait a bit till the update is available.

  

  

  

 All in all this Beta 3 might not seem very excited but that’s how it’s supposed to be. We’re simply focusing more on stability and working out the details than keep adding bells and whistles.

  Conclusion
----------

 As previously noted, this is only a small summary of all the improvements in Kodi 17. For more, see the [Alpha 2](/article/kodi-v17-krypton-alpha-2 "Kodi v17 “Krypton” Alpha 2") and [Alpha 3](/article/kodi-v17-krypton-alpha-3 "Kodi v17 “Krypton” Alpha 3") posts. Should you want to download and install this build please visit our download page. You can install these build just on top of your current Kodi installation.

 • [Official Kodi 17.0 development downloads](/download) (near the bottom of the page)  
 • [LibreELEC](https://libreelec.tv/downloads/) Raspberry Pi / x86 versions can be found [here](https://libreelec.tv/downloads/)

 Please report any problems on our forum [http://forum.kodi.tv](https://forum.kodi.tv/) and not on the release announcement. Don’t forget we also have some official tablet/phone remote controls for both Android and iOS. You can find the links to them on the download page.

 ### Donations or getting involved

 Getting involved is quite easy. Simply take the plunge and start using these 17.0 Krypton builds. If you use these builds, we encourage you to report problems with these builds on our forum first and after that, if asked, submit bugs on Trac (following this guide: [How to submit a bug report](https://kodi.wiki/view/HOW-TO:Submit_a_bug_report)). Do note that we need detailed information so we can investigate the issue. We also appreciate providing support in our [Forums](https://forum.kodi.tv/ "Kodi Forums") where you can. You can of course also follow or help promote Kodi on all available social networks. Read more on the [get involved](/get-involved) page. We are always happy to receive a [donation](/contribute/donate "Donate") by which you show your support and appreciation, and t-shirts and Raspberry Pi cases may still be found on the sidebar for purchase. All donations and other income goes towards the XBMC foundation and are typically used for travel to attend conferences, any necessary paperwork and legal fees, purchasing necessary hardware and licenses for developers and hopefully the yearly XBMC Foundation Developers Conference.

 