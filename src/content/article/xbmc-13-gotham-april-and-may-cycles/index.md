---
title: 'XBMC 13 - Gotham - April and May cycles'
date: 2013-06-10T04:00:00Z
author: Team XBMC
featured_image:
  src: /images/blog/new_settings.jpg
  title: 'new_settings'
  alt: 'new_settings'
---
With the release of XBMC 12.2 and GSoC, not to mention some behind the scenes work going on, an April cycle announcement was not published; however, thanks to a new process, both the April cycle and May cycle builds were built rapidly and efficiently (and on time). We have now switched from our old Billy the Buildbot to [Jenkins](https://en.wikipedia.org/wiki/Jenkins_(software) "Wikipedia article on Jenkins") for building our automated monthly alphas and nightly builds. Jenkins is quite a bit more intelligent and faster than our old buildbot, and we’re excited about the switch. In the future, for those who just can’t wait for a write-up about the newest alpha but tend to steer clear of the bleeding edge of nightlies, the new build should always be available on the 1st of the month at [mirrors.xbmc.org/snapshots](http://mirrors.xbmc.org:8989/snapshots/).

 With that said, we’ve now completed months #3 and #4 of our monthly development cycle, and there’s a lot to talk about.

 System-Wide – FFMPEG v1.2 and Settings Refactor
-----------------------------------------------

 Without a doubt, the two biggest developments over these past two months have been the bump to v1.2 of FFMPEG and the Settings Refactor performed by Montellese. The [list of changes for v1.2 of FFMPEG](https://github.com/xbmc/xbmc/blob/master/lib/ffmpeg/Changelog "FFMPEG git shortlog") is frankly enormous, so if you’d like to see the list, check it out at the link.

 The Settings Refactor is like-wise quite huge, but worth discussing in a bit more detail. Previously, settings were entirely dependent upon XBMC’s graphical user interface (GUI). If you didn’t manually change a setting in that interface, the setting could not be changed. Skinners had no access to the settings. Outside applications (like the official Android and iOS remotes) couldn’t interact with them. Any attempt by users to run XBMC as a server were hamstrung by the fact that you couldn’t actually control most of the server features without physically launching the XBMC GUI.

 This refactor separated settings from the GUI, so now all of those obstacles can easily be overcome. In addition, because settings are no longer dependent on the GUI, we can do a lot of interesting things that were not previously possible.

 [![new_settings](/sites/default/files/uploads/new_settings-300x168.jpg)](/sites/default/files/uploads/new_settings.jpg)  
 The Basic settings are, indeed, basic.

  For the first time, settings can now be reset to default, so everyone who discovers they’ve completely screwed up their audio settings finally have a fallback. The reset feature is fortunately quite narrow. It only applies to the window you are currently looking at. So, for example, if you reset your audio settings, you won’t accidentally reset your video settings too.

 The settings GUI also has now has “settings levels” including Basic, Standard (default), Advanced, and Expert. The default Standard shows fewer settings than the previous default, and Expert is still a work in progress, but is likely to house a number of the settings that used to exist solely as part of the advancedsettings.xml.

 Finally, with this separation, skins now have the power to show actual explanations of what each setting does, so users are no longer forced to puzzle over “Preferred Audio Language” or “Vertical blank sync.” Skinners can present a simple description that may easily explain the setting in non-developer speak.

 For more info, feel free to visit the [Settings System wiki page](https://kodi.wiki/view/Settings_System "XBMC Settings System wiki page"), which is still fairly new and incomplete, but which will ultimately be the main source of Settings info.

 System-Wide – Other
-------------------

 Multi-touch support is now available generically on touchscreens. Multi-touch gestures currently are limited to swipe backwards, two finger context menu, image rotation, and pinch to zoom. For a list of our touchscreen interactions, see our [touchscreen keymap](https://github.com/xbmc/xbmc/blob/master/system/keymaps/touchscreen.xml "XBMC Touchscreen Keymap").

 Airplay now includes volume control.

 Movie sets management has been made moderately easier, as users can now clear sets and add movies to sets from the context menu.

 The web interface remote can now send keystrokes from your physical keyboard to XBMC. So if you have the web inteface remote open on your laptop and you press up, the XBMC GUI selector on your HTPC will move up. If you press down, it will move down.

 UPnP now supports the tracking of file state, so watched status and resume from last watched points are updated instantly across machines.

 Conclusion
----------

 With the exception of a few fixes (keyboard presses in Android should work quite a bit better now, for example), most of the major changes for the past two months have not been platform specific. This means pretty much everyone should be able to play around with all these new features.

 And of course, as always, this is merely a very small sample of the many changes this cycle. For a full list of changes, visit our [April Merge Window](https://forum.kodi.tv/showthread.php?tid=161565 "April Merge Window") page and our [May Merge Window](https://forum.kodi.tv/showthread.php?tid=162128 "May Merge Window") page. You may notice that we’ve begun tracking the merging of new features into our public [Team Member forum discussion](https://forum.kodi.tv/forumdisplay.php?fid=183 "Team Member Discussion") area, rather than on Github. With luck, this should make it quite a bit easier for users to follow along with development.

 Now, if you are feeling a bit brave and a bit lucky, it’s time to start downloading. Be aware though, that this is very alpha software with potentially numerous bugs. There is a very good chance that this alpha will break on you.

 Should want to download and install XBMC, please visit our download page.

 
 * * [Official XBMC downloads](https://kodi.wiki/download/)
 
 ### How to Contribute

 If you use this cycle’s build, we encourage you to submit bugs in Trac, provide support in our [Forums](https://forum.kodi.tv/ "XBMC Forums") where you can, or [donate](https://kodi.wiki/contribute/donate/ "XBMC Foundation Donations") to the Foundation if you like.

 