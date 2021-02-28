---
title: 'Kodi 16.0 - Jarvis - Mark XVI'
date: 2016-02-20T03:00:00Z
author: Nathan Betzen
featured_image:
  src: /images/blog/SplashKodi16.png
  title: ''
  alt: ''
---
We are proud to announce the release of Kodi 16.0. Kodi 16 is a heavy under-the-hood improvements release, but let’s review some of the more prominent features coming out.

 Event Logging
-------------

 The first big step in making Kodi better at communicating with you, the user, is the addition of event logging. With this feature you always have a constantly updating list of all the most important things Kodi has done recently, along with little issues you can fix. For example, when you scan in a library for the first time, the Event Logger will provide you with a list of videos that didn’t quite make it into the library, each one of which is clickable, so you can go straight to the offending video and fix it personally.

 [![Event logging](/sites/default/files/uploads/EventLogging02-800x450.png)](/sites/default/files/uploads/EventLogging02.png)

 You’ll also get a constant list of all recently updated add-ons, so if a recent update breaks, you’ll know the update happened and can then easily rollback.

 Long Press
----------

 More and more hardware companies are coming out with remote controls with a very limited button set. In particular, all current Android TVs are lacking a dedicated context menu button altogether. To deal with this, we’ve taken a page from the touchscreen UX and added a long press feature to remote controls. Now, if you press and hold the OK/Enter button for a few seconds, you will pull up the context menu. In the future, long press may be extended for additional functionality. For a better view of what this means, see the following video.

  4:3 Non-linear Stretch
----------------------

 It’s perhaps a bit late in coming, but Kodi finally supports stretching 4:3 content to 16:9 in a way that doesn’t warp the content that’s occurring in the center of the screen. Finally, you’ll be able to watch Friends, Seinfeld, Cheers, and Duck Tales in full screen without the awkward screen stretching from the past.

 [![screenshot000](/sites/default/files/uploads/screenshot0001-800x449.png)](/sites/default/files/uploads/screenshot0001.png)

 Add-on Manager Changes
----------------------

 In the ongoing quest to improve our our add-on manager several changes were done in the overall handling of each add-on. These changes include the following:

 
 * • The roll-back button on add-on info panel has been replaced by *Update*
 * • The Update button now opens a list of available versions of the add-on. Should you have several repositories installed that offer different version of this add-on you can now choose which to install.
 * • You can now disable auto-update per add-on through the info panel individual from others.
 
 The add-on info panel can either be reached through the add-on manager or selecting the add-on in any section by either right click, use context menu (“C” key or long-press OK) and choose info or use the “I” key to directly open the panel.

  Music Library Improvements
--------------------------

 The music library has rarely received the same support as Kodi’s video library, and this release begins to change that. In the past, adding music to Kodi’s library required extra steps after simply pointing Kodi to the music folders. Now Kodi will attempt to automatically scan the music files into the Kodi music library. For music files to be scanned correctly, they will need to be properly tagged. To read more, visit the [Kodi Beta3 blogpost](/article/kodi-160-beta-3--jarvis-getting-ready-3 "Kodi 16.0 beta 3 – Jarvis is getting ready #3").

 Platform Specific Changes
-------------------------

 ### **DirectX 11 upgrade**

 [![DX11](/sites/default/files/uploads/DX11.png)](/sites/default/files/uploads/DX11.png)Developer afedchin has gone through the long and arduous process of updating Kodi to DirectX 11, which brings with it support for modern tools and modern graphics cards, while maintaining backwards compatibility with old DirectX 9 cards. This major shift will help Kodi for Windows stay up to date for a long time to come.

 ### **Android Surface Rendering**

 Some newer devices that can do UHD or 4K playback lack the power to also create the Kodi interface at a 4K resolution, and this creates a problem. We have been forced either to downscale the video to a lower resolution to make sure the interface was snappy, or show full size video but the device might not be able handle the high resolution interface. We’ve now altered the way we display Kodi on Android. The video is always displayed on one Android surface while the UI is displayed on a second Android surface. This allows Kodi to display its skin at its native resolution (typically 720p), while simultaneously displaying 4K video on the same screen.

 It is important to mention is that this doesn’t apply to AMLogic devices with proper permissions as these will still use amcodec. Any other Android device that is not able to do “android surface rendering” has not implemented the standard Android MediaCodec API in the proper way and will need to be upgraded on the Android-side to support the new feature.

 Other Important Changes:
------------------------

 
 * • Start of integration of ADSP (*Audio Digital Signal Processing*) handling (no add-ons shipped yet)
 * • Improve image resizing and caching algorithm to improve image quality of images
 * • Added support for the musicbrainz “ARTISTS” tag in id3v2, ape, xiph.
 * • Add date added to music library and use it for sorting
 * • Support saving skin settings as add-on data instead of in guisettings.xml
 * • Image resource add-ons which provides common image libraries than can be used by several skins and add-ons.
 * • Don’t mess with the long and short date formats defined in the language files
 * • Win32: Proper 24.0/60.0 Hz refresh rate in fake fullscreen mode
 * • Add sort method for albums “artist / year”. This will sort the albums chronological per artist.
 * • Moved some add-on categories to “look and feel” in add-on manager
 * • Series recording added for PVR
 * • Add a “none” option for preferred subtitles
 * • Properly handle wired or bluetooth headsets on Android and only use PCM output
 * • Fix playback of VP9 and VC1 video codecs on Android
 * • Use best possible icons from other Android apps while browsing these in Kodi
 * • Enable true 1920×1080 output on AMLogic device without up-scaling
 * • Add Korean, Chinese and Czech keyboards
 * • Add multi-touch support for Linux platform
 * • Improve touch-screen keymapping
 * • The item that you had previously chosen will now be selected in the selection list instead of just starting at the top of the list
 * • Decouple Kodi and system volume on Android which removes the double audio volume slider
 * • Karaoke support has been completely removed as it wasn’t functional
 * • Further improve DX11 implementation in Windows
 * • iOS9 support
 * • Various PVR fixes and improvements
 * • Various improvements to the music section
 * • Three finger touchpad mapping in iOS to make room for new tablet gestures which will be available in Alpha 4 to complement [existing tablet gestures](https://kodi.wiki/view/Touch_controls).
 * • Kodi now [supports being compiled with Xcode 7](https://github.com/xbmc/xbmc/blob/master/docs/README.ios)
 * • The Kodi GUI now supports a new stereoscopic depth effect for users of Kodi on 3D TVs or VR headsets
 * • Add stereoscopic depth for Confluence skin
 * • Extended support for browsing movies by country and through UPnP as well as user-ratings which we be added in future versions.
 
 An enormous list of improvements
--------------------------------

 Besides the list above there has been a lot of work done in all areas in our source code. Removing old code, splitting up parts in more logical chunks and making it all more resilient to future changes. All these changes are part of a massive change list that only makes sense to developers actually knowing what the source code does. In short we will no bother you all with summing up the list. It’s just something that is worth mentioning that not all improvements have to be actual features and are visible to users. We prefer that the program actually works than adding bells and whistles.

 Download
--------

 To upgrade from any previous build, just install on top of your current version. If you have installed Kodi from Google Play, you should be receiving an automatic update notification in the next day or two.

 
 * * [Official Kodi 16.0 downloads](/download)
 
 Call out for developers
-----------------------

 As you may or may not know is that Kodi is maintained by a group of volunteers since its first inception dating back to the original XBOX days. Over the years many volunteers have spent countless days if not months on every aspects of what makes Kodi great. This consist of writing and maintaining the code base of Kodi, expanding to new platforms, maintaining the forum, wiki, website and download server and more……

 So why do we need you? Well the fact is that over the years the core team of Kodi has remained about the same size while the amount of users went from couple of thousand to many, many millions. Not forgetting the fact that it went from only a XBOX application to what is now running on Linux, Windows, iOS, OSX, Android. All this still with the same amount of people. Now comes the time that we will actually start calling out for some help. To put it simple we want to ensure that Kodi remains alive on all platforms while at the same time lowering the support burden each developer now faces these days. Each of the core developers has his own specialty and since Kodi is quite big you quickly run out of developers that know enough of certain sections. Add to that the changes needed for each operating system upgrade that happens and all the problems that arise with that.

 To put it in perspective we basically have only 1 developer for each section or even complete platform. As already mentioned the entire team consists of volunteers which means everything is done in their spare time next to having an actual day time job and a personal life. This results in having only a few hours at most to spend on what they see as their hobby which i can say they are passionate about. Over the years the team consisted of many different developers who gave all they could but due to whatever reason had to change priorities which resulted in not spending time in Kodi anymore.

 So in short what we are looking for are C/C++ developers who are willing to put in some of their spare time in maintaining and improving our core code. This can either be doing some minor bugfixing, reviewing existing pull requests for code contributions or even creating some of their own code refactoring or feature additions. It really doesn’t matter if you are just a student just starting out on C/C++ or are already a senior programmer. We would welcome anyone who is willing to do their part on any improvement that is needed. A fair warning is that our codebase isn’t for the faint hearted as it’s quite massive and we are quite strict regarding code review before we merge anything. However don’t let this frighten you off as our current (or outside developers) will certainly give you pointers on improvements to get it included.

 What we currently need most are developers with knowledge of the following components to improve current implementations:

 
 * • Windows DirectX11 / audio / video
 * • Android NDK / audio / video
 * • iOS & OSX / audio / video
 * • General knowledge of C/C++ and willing to do some coding in areas of their interest.
 
 Any bugfix can be send to our main github code repository for review straight away. If you are not sure or want to take on a bigger task or change feel free to open up a thread on our forum where you write down your proposal to get some initial feedback.

 Wiki pages to get you started: <https://kodi.wiki/view/Development>Forum: [Developer sucbsection](https://forum.kodi.tv/forumdisplay.php?fid=93)Code on Github: <https://github.com/xbmc/xbmc>

 How to Contribute
-----------------

 If you use Kodi, we encourage you to report problems with it on our forum first and after – if asked – submit bugs on Trac (following this guide: [How to submit a bug report](https://kodi.wiki/view/HOW-TO:Submit_a_bug_report)). Do note that we need detailed information so we can investigate the issue. We also appreciate providing support in our [Forums](https://forum.kodi.tv/ "XBMC Forums") where you can and [donating](https://kodi.wiki/contribute/donate/ "XBMC Foundation Donations") to the Foundation, or [buying a shirt from the Kodi Store](https://teespring.com/stores/kodi-t-shirt-store "Kodi T-Shirt Store") if you like. For a current FAQ on Kodi 16, visit our [Jarvis FAQ](https://kodi.wiki/view/Kodi_v16_(Jarvis)_FAQ). You can of course also follow or help promote Kodi on any or all of our listed social networks.

 Previous Reading
----------------

 To read about even more of the features of Kodi 16, feel free to check out the past Beta and RC blogposts.

 
 * [Beta 1](/article/kodi-160-beta-1-jarvis-getting-ready "Kodi 16.0 beta 1 – Jarvis is getting ready")
 * [Beta 2](/article/kodi-160-beta-2--jarvis-getting-ready-2 "Kodi 16.0 beta 2 – Jarvis is getting ready #2")
 * [Beta 3](/article/kodi-160-beta-3--jarvis-getting-ready-3 "Kodi 16.0 beta 3 – Jarvis is getting ready #3")
 * [Beta 4](/article/kodi-160-beta-4--jarvis-getting-ready-4 "Kodi 16.0 beta 4 – Jarvis is getting ready #4")
 * [RC1](/article/kodi-160-jarvis-release-candidate-1 "Kodi 16.0 “Jarvis” – Release Candidate 1")
 * [RC2](/article/kodi-160-jarvis-release-candidate-2 "Kodi 16.0 “Jarvis” – Release Candidate 2")
 * [RC3](/article/kodi-160-jarvis-release-candidate-3 "Kodi 16.0 “Jarvis” – Release Candidate 3")
 
 