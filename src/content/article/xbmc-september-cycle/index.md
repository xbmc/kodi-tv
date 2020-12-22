---
title: 'XBMC September Cycle'
date: 2012-10-10T03:00:00Z
author: Nathan Betzen
featured_image: ""
---
As [mentioned previously](https://kodi.wiki/theuni/2012/04/25/update-grab-bag/ "XBMC April Grab Bag"), we have now moved into a monthly development cycle, in which we merge new features at the beginning of the month and then perform bug fixes through the rest of the month. This means, at the end of every month, developers, bug-reporters, and those willing to deal with potentially highly unstable builds can try a snapshot from the current development cycle, and the organization, in turn, will have a more stable and predictable development process. For those of you who would prefer a stable version of XBMC, we will always recommend the most recent stable release (XBMC 11.0), but for the brave, you are welcome to try the end of the month build. To give an idea of just how unstable/alpha these builds can be, there will almost certainly be months in which some platforms won’t actually have usable builds. As always, we recommend you backup your userdata folder before upgrading.

 With that said, let’s review some of the more notable changes in the  [September Changelog](https://github.com/xbmc/xbmc/issues?milestone=6&state=closed "XBMC September Changelog").

 Before we do though, we should note that this month will be slightly different than previous months. As we are beginning to gear up for Frodo, a significant number of new, big features that touch numerous portions of the whole program are being added. With all of these new features added, there is a very good chance that this month’s snapshot will be even less stable than normal.

 ### Personal Video Recorder (PVR) support

 It is, without a doubt, one of the single most requested features for XBMC, and we are happy to announce that PVR support has been added to mainline XBMC, which will allow users with a TV tuner to watch live TV, listen to radio, view an EPG, schedule recordings, and more.

 XBMC’s approach to PVR support is somewhat unlike its approach to other features. Rather than supplying our own PVR software, a task that likely would have taken much, much more time, particularly if we had wanted any hope of making it work across all platforms, we have determined that there are already numerous PVR software platforms available and ready to serve up TV to XBMC. So we made it possible for XBMC to speak with these other applications through PVR addons. For those familiar with the terminology, XBMC acts as the frontend and the software that tunes and records television acts as the backend.

 At present, PVR support remains very much a work in progress. The PVR addons required to get XBMC speaking with your chosen backend still need to be [compiled by hand](https://github.com/opdenkamp/xbmc-pvr-addons/blob/master/README#L1 "PVR Addon compiling read me"). There is no combination of hardware and backend software that is more highly recommended than any other combination.

 The Team does not recommend that you attempt running PVR now, unless you are pretty comfortable working with the guts of XBMC and don’t mind getting your hands dirty. In the coming months, documentation and PVR addon support should become much more user friendly.

 For more on PVR, feel free to visit our [Wiki section](https://kodi.wiki/view/PVR "XBMC PVR Wiki page") and our [PVR Help forum](https://forum.kodi.tv/forumdisplay.php?fid=167 "PVR Help in the XBMC Forums"). And check out our list of [frequently asked questions](https://kodi.wiki/view/PVR/FAQ "PVR FAQ"). For more images of PVR in action, scroll to the end of this post. Thanks to Lars Op Den Kamp for being the primary dev of the project for the past few years and alcoheca for starting it up, all the way back at XBMC’s last GSOC.

 ### Raspberry Pi Support

 As many of you are aware, XBMC has already been available on the Raspberry Pi for quite some time. However, until now, that support has not been a part of mainline XBMC. With this change, OMXPlayer (the player used to playback 1080p video on the ARM powered Pi) enters mainline XBMC as do many under the hood features for ARM and RaspberryPi support. Thanks to Edgar Hucek for heading up this project.

 ### So Many Others

 Additional features this month include:

 
 * The Test Suite developed by amejia for Google Summer of Code, designed to make testing various parts of XBMC easier and faster
 * A code generated scripting engine that comes from Jim Carroll that performs two separate tasks. First, it makes it much easier for XBMC developers to open up the XBMC API to addon writers. Second, it opens up the possibility of more easily writing addons in the future in code other than python.
 * Improved [picture zooming and rotating](https://github.com/xbmc/xbmc/pull/1268 "Improved picture manipulation on touchscreens") on touchscreen devices
 * [Tagging support](https://github.com/xbmc/xbmc/pull/1400 "Tagging support for tv shows and music videos ") for tv shows and music videos so that they match the tagging support [already available in movies](https://kodi.wiki/natethomas/2012/08/14/xbmc-11-0-july-cycle/ "XBMC July Cycle Movie tagging support")
 * Improvements in [slideshow movement](https://github.com/xbmc/xbmc/pull/1373 "allow moving between images even when zoomed, under certain conditions").
 * Additional [GUI speedups](https://github.com/xbmc/xbmc/pull/1283 "Keep GUIControls alive") for low power devices
 
 ### Conclusion

 As always, this is merely a sample of the many changes this cycle. For a full list of all the September changes, feel free to take a look at our list of September [milestones](https://github.com/xbmc/xbmc/issues?milestone=6&state=closed "September Changelog"). Or, if you are feeling a bit brave and a bit lucky, just start downloading.

 
 * [Windows and OSX](http://mirrors.xbmc.org/snapshots/ "XBMC snapshots for Windows and OSX")
 * [Apple TV](https://kodi.wiki/view/HOW-TO:Install_XBMC_on_Apple_TV_2 "Apple TV instuctions") and [iOS](https://kodi.wiki/view/HOW-TO:Install_XBMC_on_iPad/iPhone/iPod_touch "iOS installation instructions") installation instructions
 * Given the additional complexities of distribution, builds for Linux are not currently available at XBMC.org.
 
 Finally, a note for those of you who are tracking and submitting bugs. You may notice that Github has an “Issues” section. The Team would very much appreciate it if you did not submit bug reports through that section, but rather continued to use the forums and Trac. At the moment, the Team is using Issues as a concise means of grouping and identifying particular bugs that they gather from the forum and Trac sources.

 Also, as we move closer to Frodo, we would like to remind all of our dedicated translators that we’ve now moved to Transifex, which should make the entire process much easier. For a [step by step walk through](https://kodi.wiki/view/Translation_System "The Transifex Guide") of Transifex, feel free to visit our [wiki page](https://kodi.wiki/view/Translation_System "The Transifex Guide") on the subject.

 Thanks for your help!

 