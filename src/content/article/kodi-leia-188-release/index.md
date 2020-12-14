---
title: 'Kodi "Leia" 18.8 Release'
date: 2020-07-28T18:00:00Z
author: Prof Yaffle
featured_image: /images/blog/Kodi_Splash_v18.8_Leia_Final_1080p.jpg
---
So, here we are again. Those of you with eagle eyes may already have seen this rolling out, but just to make everyone else aware - 18.8 is here. In our ongoing quest to make your lives as simple and fulfilling as possible, we're proud to present what is likely to be the final release in the 18.x "Leia" series, before all effort now shifts to 19.x "Matrix".

 As usual, this is a bug fix release, so don't go looking for new features. Full details are on [GitHub](https://github.com/xbmc/xbmc/pulls?page=1&q=is%3Apr+sort%3Aupdated-desc+milestone%3A%22Leia+18.8%22+label%3A%22v18+Leia%22), but here's the short form... as you'd expect this late in the 18.x development cycle, this isn't a huge release, but it does include some things we thought were necessary to keep us going until the next major release emerges. In summary, this version:

 
 * Fixes a severe security issue in gnutls
 * Other significant library/compatibility updates
 * Gets client/server on MariaDB 10.5.4 working for Android
 * Fixes video database access for Ubuntu 20.4 and other distros using earlier libfmt versions (search and other filtering failed)
 * Fixes subtitle handling from archives
 * Fixes CDDB access
 * Makes minor improvements to logging and memory reporting/display
 * Fixes EDLs where skip points are at the very start of a file
 * Contains code improvements to fix specific events, e.g. race conditions in the EPG or "pause" on end of streams on Android
 * Enables alpha blending for the video player (Windows)
 * Better handles specific exceptions (Android, mostly)  
 
 
 Thanks to everyone who has helped by reporting, isolating or fixing issues here.

 The full changelog can be found in our GitHub [milestone](https://github.com/xbmc/xbmc/compare/18.7-Leia...18.8-Leia) or you can read the merged PRs [here](https://github.com/xbmc/xbmc/pulls?q=is%3Apr+sort%3Aupdated-desc+milestone%3A%22Leia+18.8%22+label%3A%22v18+Leia%22+). If you want to read back on the full history of v18 itself, or of previous versions, you can find the corresponding articles in the relevant [blog posts](https://kodi.tv/tags/release-announcements).

 Application deployment on different platforms (notably, Google Play and the Microsoft Store) varies due to circumstances outside of our control. It may thus take a few more days to appear everywhere, so just stay tuned; this is particularly the case in curated stores, where ongoing issues with staffing may mean a further delay before the application is accepted and published. All we can say is to keep looking.

 