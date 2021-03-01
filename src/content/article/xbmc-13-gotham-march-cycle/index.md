---
title: 'XBMC 13 - Gotham - March Cycle'
date: 2013-04-02T03:00:00Z
author: Nathan Betzen
featured_image:
  src: /images/blog/pop_up_notification.jpg
  title: 'pop_up_notification'
  alt: 'pop_up_notification'
---
We are now finished with month #2 of our [monthly development cycle](https://kodi.wiki/view/Development_builds "XBMC Development Builds") for XBMC 13 – Gotham. This month we see new features for iOS, Android, and PVR, as well as a new notification system, a new method for sorting images, and much more.

 ### iOS

 [![](/sites/default/files/uploads/multi_task_screen2-200x300.jpg "XBMC on the multi-task screen")](/sites/default/files/uploads/multi_task_screen2.jpg)Dev ulion has added a boatload of new items to XBMC for iOS this month, including speed and stability fixes, along with a few major new features. XBMC is now able to continue playing audio in the background on iOS, with support for the native media controller bar as well as headphone controls on the lock screen and multi-task bar. In order to continue playing music, the user will need to press play again in the multi-task bar or lock screen or with the headphone controls.

 Music will also resume after an interruption such as a phone call. Additionally, thumbnail art and other info about the audio currently playing will be available on the lock screen, though this feature requires iOS 5+. Keeping video running in the background is not yet supported.

 This provides for yet another means of controlling media around the house. Now, you can send the media from XBMC on your iOS device to other uPnP devices with Play Using and actually control that media from your iOS device while XBMC is running in the background. While video running in the background is not controllable on your iOS device, video IS controllable in the background if it has been sent to other devices using Play Using.

 ### Android

 While very few features visible to the user have been included this cycle, a number of major under-the-hood features have been included by TheUni which will allow XBMC to better communicate with Android and other Android applications in the future. The specific future actions this will allow remain to be seen. Additionally, starting XBMC as the launcher should no longer result in a crashes and black screens.

 ### PVR

 In PVR news, there an Electronic Program Guide (or EPG) button has been added to the Home Screen as a submenu item for Live TV, so that users can now have easy access to a list of all upcoming content. Additionally, when tuning a channel that isn’t currently working, XBMC will now be able to show what channel you’ve landed on.

 ### System-wide

 [![](/sites/default/files/uploads/pop_up_notification-300x186.jpg "pop_up_notification")](/sites/default/files/uploads/pop_up_notification.jpg)Many users turn off their RSS feed in XBMC and rarely visit the front page of XBMC.org, which means they may find themselves unaware that a major release has just occurred. With this cycle a pop-up has now been incorporated by Martijn that will occasionally check to see if a new version of XBMC is available. If it is, the user will be prompted to visit XBMC.org and download. The pop-up can be easily dismissed. Upon the release of XBMC 13, the pop-up will only show for final releases and bug fixes.

 This pop-up is especially noteworthy at it is one of the first issues posted in our [public Team Member discussion area](https://forum.kodi.tv/forumdisplay.php?fid=183 "Public Team Member discussion area") in the forum that’s been resolved. With luck, that will become more and more useful as an area for open, public discussion.

 The bug that was causing all the crashing early last month, due to two conflicting addons, has been resolve. The issue at the time was that both addons depended on each other, creating an ugly infinite loop. That particular infinite loop is no longer possible.

 User rubpa has added a new sort method for images. Now, users can sort by the date the pictures were taken, data that is stored in the EXIF timestamps of every image.

 Finally, theuni and Montellese are working on two projects that seek to unify things.

 Theuni has unified dependencies. This massive project has provided the Team and other developers a much cleaner, simpler, faster, and easier building process. From this point forward, there should be significantly fewer problems as we release each monthly development cycle alpha.

 Montellese, meanwhile, is unifying the touch input system. Theoretically, this should make a single change to the touch input system result in correct solutions across all the touch platforms, as well as making it much easier to add touch input to additional platforms as they arrise. At present, Android and iOS have been included with this cycle. Soon, Windows and Linux touch input systems should also be included.

 ### Conclusion

 As always, this is merely a sample of the many changes this cycle. For a full list of all the March changes, feel free to take a look at our list of March [milestones](https://github.com/xbmc/xbmc/issues?milestone=17&state=closed "March Changelog"). It’s quite a long list this month. Also, keep an eye out for both the April Cycle and other stories on the blog. Or, if you are feeling a bit brave and a bit lucky, just start downloading. Be aware though, that this is very alpha software with potentially numerous bugs. There is a very good chance that this alpha will break on you.

 Should want to download and install XBMC, please visit our download page.

 
 * * [Official XBMC downloads](https://kodi.wiki/download/)
 
 ### How to Contribute

 If you use this cycle’s build, we encourage you to submit bugs in Trac, provide support in our [Forums](https://forum.kodi.tv/ "XBMC Forums") where you can, or [donate](https://kodi.wiki/contribute/donate/ "XBMC Foundation Donations") to the Foundation if you like.

 For those of you who are tracking and submitting bugs: You may notice that Github has an “Issues” section. The Team would very much appreciate it if you did not submit bug reports through that section, but rather continued to use the forums and Trac. At the moment, the Team is using Issues as a concise means of grouping and identifying particular bugs that they gather from the forum and Trac sources. Thanks for your help!

 