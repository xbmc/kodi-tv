---
title: 'Kodi v17 “Krypton” Alpha 3'
date: 2016-07-31T04:00:00Z
author: Martijn Kaijser
featured_image: /images/blog/splash-krypton-alpha-cutout.png
---
With this announcement we’re happy to release v17 alpha 3. This v17 release which the users have named *Krypton* features a huge amount of rework in various areas like video playback, live TV & PVR, music library, skinning and more. All these areas underwent heavy changes which are now coming to an end and ready for the masses. This means this will be the last alpha and we’ll soon be pumping out beta builds at a steady rate so the broader audience can give Kodi v17 a try. However let’s first focus on what changed this past month.

  Skin features
--------------

 As you have noticed we included two new default skins. Estuary for regular use and Estouchy for touchscreen devices. At the same time we made sure some limitations we had to deal with in the past are now solved or at least improved. One of those was that the context menu (right click) didn’t work on any media items that were displayed on the home screen. Well now you can call up the menu like in library view.

    [![v17 homescreen context movies](/sites/default/files/uploads/v17-homescreen-context-movie-300x168.jpg)](/sites/default/files/uploads/v17-homescreen-context-movie.jpg) [![v17 homescreen context add-on](/sites/default/files/uploads/v17-homescreen-context-addon-300x168.jpg)](/sites/default/files/uploads/v17-homescreen-context-addon.jpg)    Add-ons can now include screenshots which will be visible within Kodi itself to give you an idea how they will look.

    [![v17-addon-screenshots](/sites/default/files/uploads/v17-addon-screenshots-300x168.jpg)](/sites/default/files/uploads/v17-addon-screenshots.jpg)     

 More more changes were done in different areas however we’ll let discover those yourself.

 Music library
-------------

 This section received a lot of love during the past year to get it up to speed again and it’s certainly catching up to the video section. Some of the improvements include better tag scanning, browsing speed ups and a lot more tag fields to be used and shown. You music enthousiast will certainly be happy with these changes so we encourage you to try it out and leave you feedback on our Kodi forum.

 Live TV and PVR (Personal Video Recorder)
-----------------------------------------

 To make it easy i just copied the list from one of our developers on the changes that happened in this section.  
 • Extend Kodi eventlog with PVR events, namely ‘create/delete timers and timer rules’ and ‘start/stop recordings’.  
 • Guide window: Allow timer creation for EPG in recent past.  
 • Timer window: Add option to hide disabled timers.  
 • Separate windows for “Timer Rules” and “Timers”.  
 • Guide & Search window: Add ‘Edit timer’/'Edit timer rule’ to context menu.  
 • Timer rules window: Echo up important Status info to Timer Rules.  
 • Guide window: Use timer logos depending on its state (needs skin support).  
 • Added enhancement and improvements to the PVR add-on API (connection state change handling, asynchronous EPG updates, and more – needs support from the different PVR add-ons!).  
 • Channels window: Add support for sorting channels by ‘last played’.  
 • Recordings window: Separate TV and Radio recordings.  
 • Guide window: performance improvements, especially on first open.  
 • Guide & Search window: Add ‘Delete timer rule’ to context menu.  
 • Add “ShowTimerRule” builtin, so one for instance can map a key to open the “add timer” dialog which is pre-filled to create a epg-based timer rule.  
 • Rework PVRManager: add-ons are now owned by add-on system.  
 • Make instant recording behavior configurable (fixed-time vs. current show vs. interactive).  
 • Timers: Allow to change timer type for existing timers. Makes it possible to for example ‘transform’ a timer for one episode of a show to a series recording (timer rule) for that show.  
 • Recordings window: make ‘group items’ setting persistent.  
 • JSON-RPC api: Sync pvr types fields with current implementation.  
 • Lots of bug fixes in all areas.

 Game controller add-on
----------------------

 In the past it has always been a pain to configure game controllers within Kodi. There were some XML files people could download and copy to a certain location. This has now been solved by making them add-ons (like almost everything else) which you can install with a click of a button. This rework of the controllers was needed for retro gaming feature which may land somewhere in the future. No sadly that doesn’t mean retro gaming will be available in v17 but we keep our hopes up for the future. Adventurous users can grab a build from our forum though [here](https://forum.kodi.tv/forumdisplay.php?fid=194).

    ![v17 game controlles](/sites/default/files/uploads/v17-game-controlles-300x168.jpg)    3dlut and simple ICC linking support for color correction
---------------------------------------------------------

 Developer *laurimyllari* added a ColorManager class that supports loading madVR 3DLUT files, and loading ICC display profiles, creating source profiles and linking them. Users can use this to correct their display response with a 3DLUT file, or emulate other displays (with whitepoint, primaries and gamma selectable at runtime) with an ICC profile of their own display. The ICC profile linking is still work in progress, but is functional and shows what can be done with it.

  

 Other improvements
------------------

 Well as always we did the usual round of bugfixes and stability improvements that happen during the entire cycle so let’s not bore you with those. Though here are some mention worthy improvements form that list.

 • Added “Copy to Kodi” functionality on iOS which adds the option to the iOS share sheet of apps to “Open In” Kodi  
 • Bump a variety of external libraries which Kodi uses to function which includes ffmpeg 3.1  
 • On Windows all the external libraries were rebuild with Visual Studio 2015 and received some DLL loading cleanup which hopefully solve some startup problems on some installations  
 • Video playback got further improvements in the wake of the big change from DVDplayer to VideoPlayer

 Should you wish to see the entire changelog then you find it [here](https://github.com/xbmc/xbmc/milestone/86?closed=1)

 Conclusion
----------

 Should you want to download and install this build please visit our download page. You can install these build just on top of your current Kodi installation.

 
 * * [Official Kodi 17.0 development downloads](/download) (near the bottom of the page)
 * * [LibreELEC](https://libreelec.tv/) Raspberry Pi / x86 versions can be found [here](https://libreelec.tv/downloads/preview/)
 
 Please report any problems on our forum <https://forum.kodi.tv/> and not on the release announcement.

 Don’t forget we also have some official tablet/phone remote controls for both Android and iOS. You can find the links to them on the download page.

 ### Donations or getting involved

 Getting involved is quite easy. Simply take the plunge and start using these 16.0 Jarvis builds. If you use these builds, we encourage you to report problems with these builds on our forum first and after that, if asked, submit bugs on Trac (following this guide: [How to submit a bug report](https://kodi.wiki/view/HOW-TO:Submit_a_bug_report)). Do note that we need detailed information so we can investigate the issue. We also appreciate providing support in our [Forums](https://forum.kodi.tv/ "Kodi Forums") where you can. You can of course also follow or help promote Kodi on all available social networks. Read more on the [get involved](/get-involved) page.  
 We are always happy to receive a [donation](/contribute/donate "Donate") by which you show your support and appreciation. All donations go towards the XBMC foundation and are typically used for travel to attend conferences, any necessary paperwork and legal fees, purchase necessary hardware and licenses for developers and hopefully the yearly XBMC Foundation Developers Conference.

 