---
title: 'Kodi v17 "Krypton" Beta 2'
date: 2016-09-17T04:00:00Z
author: Martijn Kaijser
featured_image:
  src: /images/blog/Splash-Kodi17B1.png
  title: 'Splash-Kodi17B1'
  alt: 'Splash-Kodi17B1'
---
Kodi 17 features a huge amount of work in areas like video playback, live TV and PVR/DVR, the music library, skinning and more. It features a new default skin, as well as a new default touchscreen skinned, named Estuary and Estouchy, respectively. With all this work done over the months some bugs might slip through and were hoping to quickly squash the coming beta releases.

 The changes between Alpha 3 and Beta 2 are mainly limited to [minor fixes and under the hood improvements](https://github.com/xbmc/xbmc/pulls?utf8=%E2%9C%93&q=milestone%3A%22Krypton%2017.0-beta1%22%20), so for this second beta, we’ll instead take some time to review a few of the really visible changes in Kodi 17.

 Fixes done in this Beta 2:
--------------------------

 • Any game controller was non function due to recent refactoring. This has now been fixed with the added bonus of deadzone settings for joypads.  
 • PVR section got a variety of fixed ranging from usability to possible crashing  
 • Fix possible issue if internet stream used a redirect  
 • Fix “could not connect to repository” popup  
 • No longer handle data migrations from pre-Kodi v14 versions.  
 • Add fallback path to Kodi settings if the skin you use hasn’t received an update yet  
 • Several fixes done to passthrough audio handling  
 • Fix possible crash on loading context menu add-ons  
 • Add Android Nougat new passthrough audio API which special thanks to Google developers for adding this.  
 • De-interlacing setting underwent some changes recently and some problems came to light.  
 • Skin and add-on updating doesn’t check for dependencies if they are not in a repository. From now on on any upgrade Kodi we will go through all available updates and install them before starting Kodi.  
 • Fix DPI unawareness on Windows where it would start in the zoomed in if it wasn’t set to 100% Thanks to Microsoft for giving us the correct way of solving it.

 A full list can be found [here](https://github.com/xbmc/xbmc/milestone/88?closed=1)

 Known problem are

 • No PVR add-ons packed on Android. Should hopefully get fixed in next update  
 • Some controllers problems if controllers get’s disconnected when Kodi is running

 What’s new?
-----------

 Below are some of the notable changes for in v17 although they are just the tip of the iceberg. We suggest you just read further and follow the links to the past release announcements to get an overview.

 Estuary and Estouchy
--------------------

 Without question, the biggest visual change from Kodi 16 to 17 is the new default skin Estuary. This skin pulls a dramatic amount of content to the homescreen, including much from your music and video libraries, commonly used add-ons, and links to adding new video/music sources and installing new add-ons. It also enables color and theme changes within the skin, and overall pulls Kodi into the present day of UI design. For a full review of Estuary (and its touchscreen counterpart Estouchy), see the [Estuary blogpost](/article/brand-new-look-future-kodi-versions "A brand new look for future Kodi versions"). Or for just a quick look, check out the Estuary trailer.

  It should be noted that this is only the default skin. You are, of course, welcome to continue using whatever skin you might prefer, including the previous default skin Confluence.

 A Cleaner, Clearer Settings Section
-----------------------------------

 The Kodi settings area has always seemed to require some sort of advanced degree (or a similar amount of related experience) to navigate effectively. With that in mind, we have spent the better part of a year cleaning up and reorganizing Settings with the ultimate goal of making the section, if not friendly, then at least clearer for new and journeymen Kodi users. We’ve also made it possible to point Kodi to new media sources from the settings menu, a requested feature for many years.

 [![v17-settings-1](/sites/default/files/uploads/v17-settings-1-800x450.png)](/sites/default/files/uploads/v17-settings-1.png)

 An Improved Music Library
-------------------------

 Many would argue that the Kodi music library has not seen the same degree of development and support as the video library over the past few years. With Kodi 17, that has changed. The improved music library now supports better tag reading and scraping, better handling of albums and artists with the addition of adding artist role (such as composer, conductor, DJ, etc.). Additionally, certain files and websites support musical “mood,” which means you can now select your music based on mood, rather than artist or genre.

 Live TV and PVR/DVR Improvements
--------------------------------

 For a full list, see the Kodi [Alpha 3 write-up](/article/kodi-v17-krypton-alpha-3 "Kodi v17 “Krypton” Alpha 3"), but the Live TV and PVR/DVR component of Kodi has seen just as much improvement with Krypton as the music library. **Channels can now be organized by last played**, so if you really only watch 5 or 6 of your 300 channels, those can always be at the top of the list. Timers and Timer Rules are now clearer and better organized and timers are much smarter now. For example, if you set a Timer to record one episode of a show, you can transform it so that it records an entire series. And that’s really only the cream on top. Check the alpha 3 blogpost for more.

 [![Finally, only the channels you actually watch need be listed at the top](/sites/default/files/uploads/screenshot0002-800x451.png)](/sites/default/files/uploads/screenshot0002.png)  
 Finally, only the channels you actually watch need be listed at the top

   VideoPlayer
------------

 While the average user might not notice this massive under-the-hood improvement, we feel remiss in not mentioning it. The switch from Kodi’s old DVDPlayer to the new, modern VideoPlayer may be one of the most massive re-writes in Kodi’s long history. A longer, and more detailed discussion of the changes in VideoPlayer may be found in the [Alpha 2 write-up](/article/kodi-v17-krypton-alpha-2 "Kodi v17 “Krypton” Alpha 2"), but the important take-away is that this rewrite likely won’t affect users much right now, but should vastly improve the Kodi experience over the next few years.

 With that said, there are some improvements you may see right away. In particular, DVD playback finally has hardware acceleration. A/V syncing has improved. Video streams can now be selected, just like different language audio streams or subtitles, useful for things like concert DVDs, where you can now select the various different camera angles, but perhaps more importantly useful for switching between different bitrates in Youtube and other online streaming sources using the DASH protocol. At present, the Youtube add-on in the Kodi repo has not yet been updated to handle this new support, but we hope to see that update in the near future.

 Conclusion
----------

 As previously noted, this is only a small summary of all the improvements in Kodi 17. For more, see the [Alpha 2](/article/kodi-v17-krypton-alpha-2 "Kodi v17 “Krypton” Alpha 2") and [Alpha 3](/article/kodi-v17-krypton-alpha-3 "Kodi v17 “Krypton” Alpha 3") posts.

 Should you want to download and install this build please visit our download page. You can install these build just on top of your current Kodi installation.

 
 * * [Official Kodi 17.0 development downloads](/download) (near the bottom of the page)
 * * [LibreELEC](https://libreelec.tv/downloads/) Raspberry Pi / x86 versions can be found [here](https://libreelec.tv/downloads/preview/)
 
 Please report any problems on our forum [http://forum.kodi.tv](https://forum.kodi.tv/) and not on the release announcement.

 Don’t forget we also have some official tablet/phone remote controls for both Android and iOS. You can find the links to them on the download page.

 ### Donations or getting involved

 Getting involved is quite easy. Simply take the plunge and start using these 17.0 Krypton builds. If you use these builds, we encourage you to report problems with these builds on our forum first and after that, if asked, submit bugs on Trac (following this guide: [How to submit a bug report](https://kodi.wiki/view/HOW-TO:Submit_a_bug_report)). Do note that we need detailed information so we can investigate the issue. We also appreciate providing support in our [Forums](https://forum.kodi.tv/ "Kodi Forums") where you can. You can of course also follow or help promote Kodi on all available social networks. Read more on the [get involved](/get-involved) page.

 We are always happy to receive a [donation](/contribute/donate "Donate") by which you show your support and appreciation, and t-shirts and Raspberry Pi cases may still be found on the sidebar for purchase. All donations and other income goes towards the XBMC foundation and are typically used for travel to attend conferences, any necessary paperwork and legal fees, purchasing necessary hardware and licenses for developers and hopefully the yearly XBMC Foundation Developers Conference.

  

 