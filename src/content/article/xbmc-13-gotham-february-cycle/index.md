---
title: 'XBMC 13 - Gotham - February Cycle'
date: 2013-03-13T03:00:00Z
author: Nathan Betzen
---
Before we get started with the Cycle release notes, we are going to let the cat out of the bag. Team XBMC has voted and determined that the development code name for XBMC 13 will be Gotham. Those of you with art skills are welcome to start putting together awesome XBMC 13 Gotham images now, if you like.

 With XBMC 12 – Frodo released, we are now returning to our monthly development cycle, where the first portion of the month is dedicated to feature additions and the second portion is devoted to bug fixes for those and other features. This means, at the end of every month, developers, bug-reporters, and those willing to deal with potentially highly unstable builds can try a snapshot from the current development cycle, and the organization, in turn, will have a more stable and predictable development process. For those of you who would prefer a stable version of XBMC, we will always recommend the most recent stable release (XBMC 12.0), but for the brave, you are welcome to try the end of the month build. To give an idea of just how unstable/alpha these builds can be, there will almost certainly be months in which some platforms won’t actually have usable builds. As always, we recommend you backup your userdata folder before upgrading.

 With that said, let’s review some of the more notable changes from the [February Changelog](https://github.com/xbmc/xbmc/issues?milestone=8&state=closed "XBMC 13 - alpha 1 changelog").

 ### Play Using…

 As many of you know, one of the bigger pushes for the XBMC project over the past year has been a dramatic improvement in UPnP support. In continuing that trend, developer elupus has implemented a new UPnP Play Using… feature, which allows the current XBMC machine you are interacting with to push video or audio to any UPnP compatible device that supports the file-type.

 For those familiar with AirPlay for video and audio, this is quite similar, except now you don’t need to be using an iOS device to push your content. You just need to check the box to turn on your UPnP server in XBMC under System-\>Services-\>UPnP and you can send your media anywhere that supports it.

 Once UPnP is enabled, simply highlight some piece of media, open the context menu, and select “Play using.” A list of your UPnP compatible devices will pop up, including any other instances of XBMC that you’ve allowed to be controlled by UPnP (also a setting in System-\>Services).

 At the moment, Play Using cannot be used mid-playback, though that is slated to be introduced. Also, as you can see in the above image, the controls on the device that is serving up the media are limited in the default skin Confluence, but are the full playback controls in the mobile skin Touched. Playback itself is already nearly flawless. Also, at present Play Using only works for local media and does not yet support video and audio streaming addons.

 ### Android Improvements

 This first cycle includes a slew of Android improvements. For starters, XBMC now controls native Android audio, so users don’t have to close XBMC, turn the volume up, re-open XBMC, and finally listen to whatever they were listening to. Instead, the audio is controlled like any other Android app (thanks to mcrosson). Second, XBMC for Android is no longer stuck facing one direction. If you flip your Android device 180 degrees, XBMC will flip with it (thanks to montellese).

 ### iOS Improvements

 The local iOS keyboard is already the default keyboard for XBMC, but now it has even more utility. It can accept any text from any iOS language, and it also supports the iOS clipboard copy and paste feature (thanks to ulion).

 ### Other Improvements

 Dev Montellese continues his breakneck work of improving the XBMC library. With this cycle, he has added tags for tv shows and musicvideos, and he has also made it possible for those individuals who like to pick and choose each piece of media art individually to add alternative artwork (landscape, banner, etc.) without needing to use an addon like the automated Artwork Downloader. To use this feature, click “Choose art” on a piece of media’s info screen, and then select “Add art” at the bottom.

 ### Conclusion

 As always, this is merely a sample of the many changes this cycle. For a full list of all the February changes, feel free to take a look at our list of February [milestones](https://github.com/xbmc/xbmc/issues?milestone=8&state=closed "February Changelog"). It’s quite a long list this month. Also, keep an eye out for both the March Cycle and other stories on the blog. Or, if you are feeling a bit brave and a bit lucky, just start downloading.

 Should want to download and install XBMC, please visit our download page.

 
 * * [Official XBMC downloads](https://kodi.wiki/download/)
 
 ### How to Contribute

 If you use this cycle’s build, we encourage you to submit bugs in Trac, provide support in our [Forums](https://forum.kodi.tv/ "XBMC Forums") where you can, or [donate](https://kodi.wiki/contribute/donate/ "XBMC Foundation Donations") to the Foundation if you like.

 For those of you who are tracking and submitting bugs: You may notice that Github has an “Issues” section. The Team would very much appreciate it if you did not submit bug reports through that section, but rather continued to use the forums and Trac. At the moment, the Team is using Issues as a concise means of grouping and identifying particular bugs that they gather from the forum and Trac sources. Thanks for your help!

 