---
title: 'Kodi 19.x "Matrix" - Beta 1'
date: 2020-11-22T00:41:28Z
author: Prof Yaffle
featured_image: /images/blog/Kodi_Splash_v19.0_Matrix_Beta_1080p.jpg
---
Lights! Camera! Action!

 ... nearly. It's Beta time for Kodi 19.x "Matrix", so let's take another step towards the Great Unveiling.

 As we now move into Beta, this release is much more about fixes than features: while there will be the odd new functionality, we're concentrating very much more on getting everything working properly from this point.

 To recap, then, one of the main objectives of 19.x "Matrix" is to release a production version of Kodi with Python 3 addons as early in 2021 as we can. That can only happen with enthusiastic community support, lots of good humour and willingness to see the best in others - well, that and coffee/beer (delete as applicable), of course!

 Why Python 3? Simply, because Python 2 went end-of-life in January 2020, so the whole IT industry is lurching over to the new platform. It's generally taking a long time, but it's necessary if you want active support, bugfixes, the latest third-party libraries, security patches, and the like. You can see some of Kodi's announcements about this change [in previous blog posts](https://kodi.tv/blog?keyword=python&tag=All).

 Beyond that, though, here's a quick recap of the major new features in 19.x "Matrix" - as well, of course, as many fixes and code changes that won't be as obvious:

 **Audio/Music**

 
 * Improvements covering multi-disc CD sets and box sets; metadata improvements such as better handling of album release dates, album durations, etc.; new fullscreen/visualisation settings; new Matrix-inspired visualisation; support for file tags over http(s).
 
 **Music Videos**

 
 * Improved links with the music library to e.g. fetch related album/artist information, display both videos and albums when searching, display more linked information in info dialogs, etc.; improvements around grouping of all music videos by artist (vs album only); enhanced .nfo handling for multiple performers.
 
 **Skin/Look-and-Feel**

 
 * Multiple improvements to Estuary, particularly around music and music videos, including: a redesign of the fullscreen/visualisation music window; additional metadata display; new “Now Playing” view; chapter information for music videos; enhanced “now playing” and “next item” views; a generally improved “out of the box” behaviour with regard to music and video library artwork.
 
 **Games**

 
 * Improved game controller support on iOS; improvements to image quality in Pixel Art games.
 
 **Playback**

 
 * Software decoding of AV1;subtitle improvements with new dark grey colour and selectable opacity; ability to provide a subtitle URI (URL, local file, etc.); static HDR10 and dynamic Dolby Vision HDR support (*platform- and client-dependent*). 
 
 **PVR**

 
 * A host of improvements, including PVR reminders; TV/Radio channel groups, home screen widgets and dynamic PVR categories for Estuary; enhancements to the Group and Channel manager; navigation/usability improvements such as context menus, selection persistence, and EPG controls; info dialog enhancements; improvements to PVR handling via the API.
 
 **Security**

 
 * Various improvements to user information, e.g. the security implications of enabling external interfaces or a prompt when enabling a broken/deprecated addon; a requirement for a web interface password by default; new origin enforcement for addons and dependencies, so third-party addons can’t overwrite code of other, unrelated addons.
 
 **Information Providers/Scrapers**

 
 * New Python scrapers for music, TV and movies (linked to the Python 3 move).
 
 ... plus many code and platform-specific fixes and improvements that might be less visible to most users, but are still significant, such as the move to a single Linux binary for multiple windowing systems (X11, Wayland, and GBM).  
 

 After 18 months of hard work by the team and community, we now feel that Kodi v19.x "Matrix" is stable enough to enter beta phase of the release cycle and start to be used "in anger". As above, our focus is now entirely on testing and fixes, moving in steps to a final release as soon as we practically can. This release should be pretty reliable for most users - if you do choose to install it, make sure you know how to roll back, just in case, but you should be safe. We need your help to find and isolate the remaining bugs (including, of course, any regressions), so, please: install, test, and give us clear feedback on any issues you uncover. We can then aim to get these resolved in upcoming releases.

 You can get Beta 1 from [here](https://mirrors.kodi.tv/releases/). If you're on Android, you can [enrol](https://play.google.com/apps/testing/org.xbmc.kodi) in our Beta programme and get updates directly from Google Play.

 As usual, you can also see changes since Alpha 3 [here](https://github.com/xbmc/xbmc/compare/19.0a3-Matrix...19.0b1-Matrix) or browse the merged PRs [here](https://github.com/xbmc/xbmc/pulls?q=is%3Apr+sort%3Aupdated-desc+milestone%3A%22Matrix+19.0-beta+1%22+is%3Aclosed).

 