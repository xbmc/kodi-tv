---
title: 'XBMC For Android'
date: 2012-07-12T04:00:00Z
author: Cory
featured_image: ""
---
![](/sites/default/files/uploads/zappy-android-scaled.png "zappy-android-scaled")We have been keeping a little secret.. the kind that is so much fun to share when the time comes.

 Today we announce XBMC for Android. Not a remote, not a thin client; the real deal. No root or jailbreak required. XBMC can be launched as an application on your set-top-box, tablet, phone, or wherever else Android may be found.

 The feature-set on Android is the same that you have come to expect from XBMC, no different from its cousin on the desktop. Running your favorite media-center software on small, cheap, embedded hardware is about to become a hassle-free reality. And as Android-based set-top-boxes are becoming more and more ubiquitous, it couldn’t be a better time. In fact, primary development was done on a [Pivos](https://www.pivosgroup.com/) XIOS DS set-top-box. And that is no coincidence, you will notice that [Pivos](https://www.pivosgroup.com/) is now listed as an official sponsor (more on that later). XBMC is stable and works great there, as well as on various tablets and phones. Though with Android, as many of you probably know, that is only the beginning of the story.

 Enjoy the stereotypical dev-shot low-quality demo video. More video, including phone/tablet usage in the next post.

  

  So what’s the catch? None… in time. Currently, for most devices only software decode of audio and video is hooked up. We considered waiting until universal hardware decode was ready before making our announcement, but in the end decided that in the spirit of keeping things open and working with our ever-expanding community, it made sense to open up sooner rather than later. We are confident that an OpenMax-based player (similar to the one used for the Raspberry Pi) will spring up very quickly. That said, software playback of most media plays quite well already.

 Though, there is one exception. As Pivos sponsored a large portion of the port, we were able to work with their vendors to achieve buttery-smooth hardware-accelerated playback on the XIOS DS. It remains to be seen if such hardware-specific features will make it into XBMC mainline or exist as patches for vendors to integrate.

 While, as you can see in the video, the port is fully usable and lots of fun to play with, it’s not quite ready for prime-time. We will begin releasing apks for interested beta testers in the coming weeks. But for those who are up to the task, as you would expect from XBMC, the [source code](https://github.com/xbmc/android) is available. We have decided not to push to Google Play until we are satisfied that users with all kinds of devices get the same great XBMC experience. We ask that our users stay on the lookout for evil-doers trying to cash in on XBMC’s popularity. If you see anyone masquerading as XBMC, please be sure to let us and Google know about it.

 There is also the issue of having a proper UI for small-screen devices. Typically, XBMC skins have been designed for use on a TV, so use on a small phone can be clunky. But there is nothing keeping skinners from creating more functional touch-oriented skins, like the included “Touched” skin from Jezz\_X. With the community’s help, we’re sure to have a more refined version available for inclusion by the time we release a stable version.

 There are still many details left to iron out, mainly related to the wide variety of Android devices in the wild. We have not yet decided what minimum requirements will be set, due simply to the lack of extensive testing on exotic devices.

 As for taking advantage of Android itself, we haven’t even scratched the surface. There are so many interesting features that we could take advantage of: launching apps, location awareness, speech recognition, on and on. Once the core port is finished up, you can bet we’ll be exploring many new avenues.

 I could write for days about how the port started, how it was accomplished technically, what tricks were used, etc, but I will save that for a (somewhat more personal) follow-up post. There is much to say about the process that would likely bore most readers, but I will try to answer the questions that come up in the comments as much as possible in that post. The port was a big effort with many contributors, many thanks to Davilla, Memphiz, Phaeodaria, Montellese, Topfs2, and everyone else who was involved.

 Full disclosure: I have been working for Pivos for the last few months, where I suggested the port-work and XBMC sponsorship. I hope our users join me in a thanking them for supporting XBMC and allowing me to work on the port (among other things) during the day. Be sure to check out the [Pivos forums](http://www.pivosforums.com/), where discussions and unofficial builds are bound to spring up quickly.

 