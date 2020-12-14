---
title: 'GSOC 2017 Update - Wayland Support '
date: 2017-08-13T21:34:23Z
author: Nathan Betzen
featured_image: /images/blog/Wayland_demo_2.png
---
Finally, we turn to Philipp, who is working to upgrade the Kodi windowing system in Linux from X11 to Wayland. As a PR is already posted, we are extremely excited about this project!

 Wayland Support - yol
---------------------

 My main goal was quite simply to get Kodi to natively support Wayland again, if possible as well as it currently supports X11. The Wayland protocol is slowly but steadily gaining traction in the Linux world as successor to the X11 display server and is generally seen to replace it in the long term, which is why it is essential for Kodi to support it if it wants to continue to deliver a good user experience on Linux. As some may know, Kodi did already have a Wayland windowing implementation originally written by Sam Spilsbury during GSoC 2013, but it got removed from master for unsolved infrastructure reasons some time ago and was never on-par with the X11 implementation feature-wise.

 June
----

 I subdivided the main goal into a number of sub-goals/features in my initial proposal categorized as "basic" (i.e. necessary so you can reasonably use it at all), "additional", and "possible extension". In the first month, I dealt with all basic and some of the additional features. I had planned to salvage as much of the previous code as possible, but different design choices I made ultimately meant that I ended up writing most of it from scratch. Still, I was frequently checking the prior implementation to see which parts of Kodi I have to touch and how I can go about solving some specific aspects.  
  
To get a bit more concrete here, where the approach differs most is how the Wayland protocol objects are used in object-oriented C++. Previously a home-grown approach was used, probably because there were no C++ bindings for libwayland-client at the time. The resulting wrapper code is quite tedious to write and maintain, which is why I decided to use the C++ waylandpp library as base. Even though it is not quite mature yet, I figured that my time would be better spent improving waylandpp than trying to come up with something new on my own. It is of course possible to use the C API of libwayland-client directly without any wrappers, but this is not a very nice solution since the Wayland protocol is really made out to be used in an object- oriented fashion if the language allows for it. Much to my delight, the author of waylandpp was very responsive and supporting, which means that all improvements and feature additions I made to waylandpp at this point are already merged upstream.  
  
Unfortunately, it soon became clear that the aging windowing infrastructure of Kodi is not a good match for Wayland which does some things in a very different way. Wayland is designed such that clients have minimal control over the desktop for security reasons. This for example means that, unlike on X11, Windows, and most other windowing systems, applications cannot just set arbitrary video modes. They can only tell what their preference would be to the compositor, which then decides and in turn tells the applications what size they get. I do think that this is a good design decision since it solves a lot of problems that XRandR has like leaving the desktop in a bad resolution when a program crashes, but it does mean that a lot of things have to be done differently. The Kodi code assumes the traditional procedure of fetching a list of valid resolutions and then being able to switch to any resolution immediately and basically without failure. Changing this in a satisfying way would require quite a lot of refactoring that would have to touch all of the current windowing implementations, too. This is a lot of work, requires coordination with all platform maintainers, and is not realistic to be completed within the GSoC timeframe, so I have put this off for now and instead tried to make minimal adjustments to the Kodi resolution switching code that allow the Wayland implementation to work without impacting any other windowing system. The downside to this is that the Wayland code is not as clean as it could or should be and that there is an increased risk of weird stuff happening.

 ![](http://xbmcfoundation.prod.dd:8083/sites/default/files/wysiwyg/uploads/waylandfunnythings.png) July
----

 After getting most of the basic stuff out of the way in June and the first week of July, I focused on the two big remaining issues: Support for the wp\_presentation Wayland protocol extension and windowed mode, the first of which was just merged this week. Put simply, Kodi now has a reliable way of determining how much time it takes from rendering a video frame until it appears on screen and does not have to resort to guesswork, improving AV sync. Also, it can be used as source for the video reference clock so that slight mismatches of the video fps with the screen refresh rate can be corrected by resampling the audio.  
  
I worked on windowed mode support for the remainder of the month. I guess that it would not usually be expected to be a complicated issue, but most Wayland compositors require applications to draw and handle window decorations themselves (called client-side decorations) if they want to have any. I discussed with my mentor how to go about this and we decided to once again keep things local to the Wayland implementation and draw the decorations there as none of the other windowing systems currently requires this. The other option would have been to somehow integrate the decorations into the Kodi skinning system. This is of course nicer, but far more complicated and probably not worth the trouble. As media center, most users will use Kodi in full screen mode which is also the default, so window decorations that don't look that nice will not be a big problem.  
  
During the past two months I also had to learn that Wayland is still quite new to the scene and that a lot of bugs still lurk in the various components. I had to report and sometimes fix bugs in compositors and other third-party components such as mutter, weston, and libva. Finding these bugs and determining whose fault it is that something did not work as expected took more time than I had initially anticipated. I would like to thank the #wayland IRC community and specifically pq and SardemFF7 for their time and advice that helped me move forward several times.

 August
------

 In the last few weeks I finished windowed mode, investigated some outstanding issues not directly related to Wayland such as touch screen handling, and am now trying to get my work merged mainline. I do hope that no big issues pop up that could prevent the merge, but I'm optimistic - the pull request is already live [<https://github.com/xbmc/xbmc/pull/12664>]. Apart from fixing the outstanding review comments, I plan to look at identifying possible memory leaks and multi-threading races with valgrind and ThreadSanitizer.

 