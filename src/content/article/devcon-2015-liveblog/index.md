---
title: 'DevCon 2015 LiveBlog'
date: 2015-10-08T03:00:00Z
author: Nathan Betzen
featured_image:
  src: /images/blog/KodiTeam2-copy.jpg
  title: ''
  alt: ''
---
2:20
----

 Keith is now talking BizDev. Last year several of us went to CES somewhat randomly to talk to a smaller cable operator, and as a result we started talking to a number of pretty cool companies. One of the bigger results of that trip was the current work with Silicon Dust’s HD Homerun to make a dedicated addon and to make Kodi a significant part of HD Homerun’s DVR development.

 The goal of further work in bizdev this way is to expand the abilities of Kodi with these kinds of contacts.

 FullSizeRender 19
-----------------

 12:00
-----

 Follow-up discussion about how to make Razze’s talk work. Github won’t work as a ticket tracker for various reasons. Jira and Bug Genie appear to both be possible options, but they need to be tested out.

 11:00
-----

 Razze, a new dev, starts out today with a talk about his his experience and how he thinks we might go about improving helping new devs get involved in Kodi. The way he got started was working on an existing addon for python, and then looking at the feature request forum and picking a feature that should be relatively easy to work on.

 One big fear was that he was never sure if somebody else was already working on a project or that it’d be rejected because another way of handling the issue was preferred and just hadn’t been worked on. PRing early is definitely appreciated by devs not on the team.

 Another issue is that it’s not always clear who is in charge of what and who to ask what.

 How it should be:

 
 * • Non-team dev decides he wants to work on something
 * • Checks if somebody is already working on it
 * • If somebody is working on it, the dev might decide to help the dev, pick up a dropped project, or just move on
 * • If nobody is working on it, the non-team dev could write down what they plan to do and get a quick sign off from whatever necessary team members so they know the PR is more likely to be accepted
 * • A way to reach out when you get stuck
 * • Finally, document code and other work
 
 [![FullSizeRender 18](/sites/default/files/uploads/FullSizeRender-18-800x347.jpg)](/sites/default/files/uploads/FullSizeRender-18.jpg)

 9:00
----

 Today is the day we tend to break down into smaller groups to work on projects face to face. We do have a few more discussions and talks for later today, which we’ll talk about as we get there.

  

 End of Day 2
------------

 KodiTeam2015DevCon
------------------

 Top: alwinus, jjd-uk, keith, razze, ksoo, zag

 Middle: ruuk, koying, montellese, mkortstiege, , phil65, martijn

 Bottom: natethomas, paxxi, garbear, ansii, wisler, negge, hitcher, bignoid, fkoch, kib

 not pictured: nedscott

 2:20
----

 Kai (ksooo) talks PVR. New in PVR on Jarvis is timers with many very cool features worth checking out. Also, now you can scan through the other channels while watching TV and you won’t switch over to another channel until you actually hit OK/Enter.

 FullSizeRender 16
-----------------

 12:40
-----

 Zag talks about Kodi MetaData Sites

 An obvious reminder that all the metadata in your library comes from metadata websites. Not Kodi. So donations for those sites is always welcome.

 12:00
-----

 Now we’re answering your [questions that you posted in the forum](https://forum.kodi.tv/showthread.php?tid=241654)!

 [![FullSizeRender 15](/sites/default/files/uploads/FullSizeRender-15-800x354.jpg)](/sites/default/files/uploads/FullSizeRender-15.jpg)

 11:00
-----

 GSOC Projects -

 Montellese talks about Mark’s transcoding project. Mark used FFMPEG’s instructions to create a transcoder class that converts from original to h264/aac. The file then can break up the file for skipping and implement ways of transferring such as http streaming. Unfortunately, it’s pretty slow right now and needs better architecture to really make it work well and mergeable.

 Garrett talks about Anthony’s gamestream project. The project is a binary addon that appears to successfully be working, built into the Retroplayer framework. At the moment it’s pretty hard coded, which means it’ll take a while to truly integrate it into Kodi. Additionally the encryption means we need to better look into moonlight to see how game listings are handled there.

 Achim is talking about his own cross-platform room correction project. He created an addon casked adsp.xconvolver, which depends on a signal processing library. The software sends out a signal from speakers, which are then recorded using a microphone in the room. Then the library measures each audio channel to correct for the room. For the future additional python addons should be able to use this library to add additional neat features.

 Alwin and Achim have worked together on AudioDSP for Kodi that allows for basically professional audio signal processing. For example, for those who are into fine control, you can have a separate equalizer for every speaker.

 [![FullSizeRender 14](/sites/default/files/uploads/FullSizeRender-14-800x432.jpg)](/sites/default/files/uploads/FullSizeRender-14.jpg)

  9:30 AM
-------

 It’s a bit of a slow start today, so we’ve begun by having Garbear demo some of the new features of retroplayer, including 2 player support.

 [![FullSizeRender 12](/sites/default/files/uploads/FullSizeRender-12-800x521.jpg)](/sites/default/files/uploads/FullSizeRender-12.jpg)

  

  End of Day 1
------------

 2:15
----

 Settings refactor – jjd-uk is pushing forward a new task-oriented way to organize settings to make them slightly easier to navigate through.

 Aside from coming up with category names, much of the discussion revolved around the idea of trying to get rid of the Weather settings altogether.

 [![FullSizeRender 11](/sites/default/files/uploads/FullSizeRender-11-800x413.jpg)](/sites/default/files/uploads/FullSizeRender-11.jpg)

  12:50
-----

 There are some major platform refactors planned for the future centered around video players and other things. We need to get the critical devs together in person for conversations where a really big change with multiple devs would benefit. The team agrees that the Foundation should absolutely be able to pay for that.

 [![FullSizeRender 9](/sites/default/files/uploads/FullSizeRender-9-800x600.jpg)](/sites/default/files/uploads/FullSizeRender-9.jpg)

 12:30
-----

 We have a lot of installs on Android that quickly get uninstalled. The theory is that this is because totally vanilla Kodi is empty and in English, meaning that users have to figure out how to add content, and if they aren’t native English speakers, they have to figure out how to change the language.

 Solutions include having Kodi auto-figure out what language is default on the OS, and ask if the user wants to keep that language on first install. Solutions for making adding content easier initially were also discussed.

  12:00
-----

 We review stats of Android users, testers, etc. Talk about ways of possibly making it easier for people to install alphas from Google Play without needing to sideload.

 11:30 AM
--------

 Things going into Kodi 17 Alpha 1: Montellese’s content imports and Garbear’s new Input work. After Input is debugged a bit, the rest of retroplayer will start being merged.

 10:30 AM
--------

 ### Moving forward with side projects

 We have three major problems that need work. Distributing new binary addons. Merging Montellese’s content import work. And merging garbear’s Retroplayer work.

 Retroplayer has a lot of basis in binary addons. So the first conversation is about distributing binary addons. Binary addon distribution requires building for each platform, and requires figuring how to install in each platform, which may be a limitation of Android and possibly other platforms. And it also requires figuring out how to distribute binary addons without killing our server.

 Sidenote: We’ve switched from Mirrorbrainz to Mirrorbits, which is much faster, but we’re also rapidly increasing number of users, which means we need to be REALLY careful about changes so they don’t crash the server.

  

 9:30 AM Prague
--------------

 Good morning everyone, and welcome to another Kodi DevCon Live Blog! This year I hope to regale you all with many interesting and exciting stories, decisions, and developments. And failing that, I hope to record those things for posterity. We should be getting rolling soon. Feel free to ask your questions or leave comments below.

 [![IMG_0802](/sites/default/files/uploads/IMG_0802-800x533.jpg)](/sites/default/files/uploads/IMG_0802.jpg)

 