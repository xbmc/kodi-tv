---
title: 'Kodi DevCon 2014 Live Blog'
date: 2014-10-09T03:00:00Z
author: Nathan Betzen
featured_image:
  src: /images/blog/IMG_0439.jpg
  title: 'IMG_0439'
  alt: 'IMG_0439'
---
Friday, 10th of October, 2014
-----------------------------

 Good morning everyone. As with last year, we’re going to try to keep a running update of useful info that comes from this year’s devcon. To begin, we’re having a number of developers and support members give various presentations, so we’ll start with that.

  

 Nedscott’s Wiki Update
----------------------

 [![IMG_0440](/sites/default/files/uploads/IMG_0440-800x600.jpg)](/sites/default/files/uploads/IMG_0440.jpg)For anyone who sees something missing in the wiki, adding a new page and linking it has never been easier. Now if you have some new advice, like a How-To on adding videos to the video library, you have a really easy way to add that now.

 First, do a search for the content. When the page isn’t found, go to the bottom of the search screen and a link will appear saying, “Do you want to create a new page?” You say yes, and the page is created.

 Then you can simply add categories to the page. At present, you do so by typing for example [[category: video category]].

 In the future there will be dropdown categories. And in the very near future, as we update mediawiki, there should be upcoming WYSIWYG updating.

 Helix Release
-------------

 Topfs2, one of the two Release Managers, is giving a talk about the Kodi 14 Helix release. These days one of the biggest problems from the past has become far less of an issue. Adding a patch designed to tweak one of the platforms, like adding an Android-specific patch, tends not to break the other platforms thanks to some great coding in the past few years as well as the ability to immediately build using Jenkins to ensure that everything builds right.

 We expect that, thanks to the stability, Helix should be out before the end of the year.

 Forum Testing Threads
---------------------

 Keith first got involved with XBMC by creating a testing thread for the Apple TV 2. The purpose of the thread was just to provide new builds and provide a place for people exclusively to talk about testing those builds. Providing similar places in the forum for testing on other builds would be really nice. A point should also be made to more quickly elevate regular users to forum mod status, potentially with the idea of actually buying hardware for those forum mods to better act as testers and moderators.

 The Kodi Server System
----------------------

 Our server is going to be physically moved on the 14th of October (Tuesday). This will result in all our mirrors being offline for several hours. This will disable the downloading of addons and Kodi/XBMC. A bigger post will be made about this.

 The important thing to know is that if you are using Frodo still, if you visit addons while the mirrors are down, your system may be locked. Addons will simply not be visible on Gotham and later.

 Substantial improvements have been made and are still being made to improve server speed. Trac bugs have been fixed that are resulting in significant improvements in speed on xbmc.org and wiki.xbmc.org. Improvements have also been made to the way we communicate with our mirrors to speed up the distribution of addons and other downloads and reduce the amount of unnecessary data crossing the pipes.

 In the future we’re planning on updating MyBB, the forum software, which should result a new theme in the future. We’re also contemplating switching from a MirrorBrainz server system to a traditional CDN server system.

 Binary Addons (The Endless Discussion)
--------------------------------------

 We use CMake to build binary addons to build addons. The benefit of using Cmake for this is building is virtually identical for all platforms.

 We build libraries as dynamic libraries. Currently only using them for audio encoder addons. Dependencies for the addon are built as static libraries.

 At the moment, we need an OSX dev to help with this.

 As far as Chromium goes, building the addon wouldn’t necessarily be difficult. The difficult part is figuring out how to integrate it into Kodi. That’s less clear.

 Media Importing
---------------

 The goals: import movies, tvs, whatever. From: hard disks, network shares, plugins (like youtube), and most importantly other Kodi instances (whether all items or items of a specific type)

 Ideally we want to synchronize across all devices. So if we change a poster on the computer, it should change on the RPi as well.

 Should be easy to set up. Should be able to enrich the content with additional metadata.

 The source: Media provider has a list of media items. Should support filtering by media type. Might support announcing changes. Might support updating media items.

 **Current state:** The work is entirely generic. The Importer currently uses UPnP, but can add many other media providers. Can configure and import specific media types.

 **What is missing**?: parallel database writing. Importing items from a media provider while running a library update doesn’t work. It crashes. Ideally, the library update will ultimately just act as another media provider. Only a UPnP importer is available. Music library support doesn’t exist yet. 2 way synch doesn’t really exist, save for playback related info.

 **To do**: notifications from media providers for changes. Handling of multiple (identical) items. Profiles support. Scraping integration.

 Kodi Server Discussion
----------------------

 Discussion followed from media importing to the idea of running Kodi as a headless server. At present Kodi lacks the ability to add new sources using json, otherwise it should mostly be capable of running as a headless server right now.

 Kodi Logo Vote Update (sidenote)
--------------------------------

 Just FYI, as of right now, there have been 4532 votes for the Kodi logo. Awesome work everyone!

 [![DevCon2014](/sites/default/files/uploads/DevCon2014-800x526.jpg)](/sites/default/files/uploads/DevCon2014.jpg)

 