---
title: 'Frodo Feature Freeze! - And the October Cycle'
date: 2012-11-02T03:00:00Z
author: Nathan Betzen
featured_image: ""
---
The rumors are true. As you may have noticed if you avidly watch XBMC development on Github, we have now entered Feature Freeze for the upcoming release of XBMC 12: Frodo.

 For the average user, this means a couple things. First, you should begin to see XBMC Beta releases coming out very shortly. Second, given our fairly well documented open development cycle, there should be very few surprises from now until the release of Frodo. By definition, the features you see now are the same features you will see when Frodo is released with the possible exception of some smaller updates in the default skin Confluence. So if you’d like to see what XBMC 12 is going to look like, feel free to install the October alpha at the bottom of this post. As always, it’s important to remember that the alphas are definitely alpha software that you use at your own risk.

 ### Release Manager

 Much as development for Frodo was dramatically different than development for Eden, so too will the upcoming Beta process be different. This year we’ve created the new position of Release Manager, who is in complete control of the Frodo branch from the time we entered feature freeze until the time XBMC has been released. The Release Manager will determine when a new Beta is released, when XBMC is ready to switch to release candidates and Gold status, and whether code changes are fixes (OK) or features (not OK). Needless to say, it is a thankless job and a job that requires a person who is both extremely well versed in the code of XBMC and not afraid to make people angry to get the job done.

 Which is why we are excited to say that we’ve selected grumpy developer extraordinaire Spiff to be our Release Manager for XBMC 12. We are convinced that Spiff will do a truly fantastic job in the role, even if he does get a few white hairs in the process!

 ### October Cycle

 The current goal is to release the first Beta of XBMC 12 at some time mid-November. At that time, we will review all the many features that have been added since the release of Eden. Likewise, during the Beta cycle, we’d like to continue to highlight the work done by our Google Summer of Code students in one or two posts.

 For now, we will simply review the new features submitted during the last dev cycle before feature freeze.

 #### UPnP Update

 Just as we hit the feature freeze wire, a significant portion of one of the remaining most frequently requested features was added to XBMC. alcoheca’s GSOC project, a massive update of UPnP to make XBMC a truly capable UPnP server is now part of mainline. While transcoding is not part of the update, all metadata, images, and library functions including watched and unwatched status are now available depending on your client – naturally, an XBMC client is best, though efforts are ongoing to work with the numerous alternative clients that all use slightly different specs from one another.

 Unfortunately, using XBMC as a UPnP server is still not the preferred method for an XBMC client. For one thing, Confluence and all current skins are designed to expect only a local database or a MySQL database masquerading as a local database, which means one would theoretically need to re-scrape the UPnP server into your local library for the TV shows link to show up in the home screen, which immediately cuts out much of the benefit of a dedicated UPnP server.* For another, at present while the server can tell the client what has and has not been watched, a major bug exists in that the client cannot tell the server the same thing. This means, if you mark Big Buck Bunny as watched on your XBMC client, the watched status on the server won’t be updated. For that matter, since you are using the server library, Big Buck Bunny won’t be marked as watched on your client either.

 **For early testers, we highly recommend that you NOT Set Content, if that is still an option for you, as it will likely cause problems in the system.*

 As such, for now continuing to use SMB or NFS shares on your XBMC clients is still the recommended route, but we will keep you updated on the progress of UPnP, including any bug fixes throughout the Beta process. Additionally, skilled skinners, we are excited to see if and how you incorporate UPnP nodes into your design. To see an ongoing discussion of how UPnP will be improved now and in the future, feel free to visit [alcoheca’s GSoC forum thread](https://forum.kodi.tv/showthread.php?tid=127949 "Improving UPnP for GSoC").

 #### Advanced Filtering

 If you have been reading the monthly cycle updates, you know that Montellese has been working on major improvements to the underlying XBMC library. A significant culmination of that work has been added this month in the form of the newly updated Filter.

 Now those of you with an extensive library will be able to filter your library by any number of new, simple methods, including title, rating, year, actor, whether the series is ongoing, etc., and you can of course combine as many of those methods as you like for laser focus. Additionally, this filtering will occur in realtime, so the moment you narrow the span of years, your library will immediately narrow to meet the specification without any need of hitting the “OK” button.

 #### Many More

 Needless to say, because October was feature freeze month, numerous additional features have been added, including…

 
 * numerous JSON-RPC updates, including PVR support, optimizations, better conflict handling, and better webserver support by Montellese
 * PVR timeshift support (if the backend supports timeshift) – hat tip to non-team member Margo for this one
 * improvements to the OMXplayer, the media player of Raspberry Pi by gimli
 * Additionally, OMXplayer can now play back DVD ISOs if users have gotten the MPEG2 codec license thanks to user epideme
 * the CD ripper now works in the background thanks to Spiff
 * panoramic photo panning support by Montellese
 * Dirty Region support is now on by default by TheUni
 * Further improved image handling in the database, allowing one to select fanart, poster, banner, and thumb, rather than forcing the choice between downloading posters and downloading banners – kudos to Jonathan Marshall and Montellese for this work.
 
 As always, this is a mere selection of numerous changes from this month. For a full list, feel free to check out the [GitHub changelog](https://github.com/xbmc/xbmc/issues?milestone=7&page=1&state=closed "Github Milestones for October 2012"). Or, if you are feeling a bit brave and a bit lucky, just start downloading.

 
 * [Windows and OSX](http://mirrors.xbmc.org/snapshots/ "XBMC snapshots for Windows and OSX")
 * [Apple TV](https://kodi.wiki/view/HOW-TO:Install_XBMC_on_Apple_TV_2 "Apple TV instuctions") and [iOS](https://kodi.wiki/view/HOW-TO:Install_XBMC_on_iPad/iPhone/iPod_touch "iOS installation instructions") installation instructions
 * Given the additional complexities of distribution, builds for Linux are not currently available at XBMC.org. A number of developers are currently hard at work on the problem however. With luck, we should finally have a Linux PPA available by the time the Betas begin rolling out.
 
 