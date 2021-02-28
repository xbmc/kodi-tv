---
title: 'Kodi "Leia" 18.7 Release'
date: 2020-05-20T04:00:00Z
author: Prof Yaffle
featured_image:
  src: /images/blog/Kodi_Splash_v18.7_Leia_Final_1080p.jpg
  title: 'Kodi_Splash_v18.7_Leia_Final_1080p'
  alt: 'Kodi_Splash_v18.7_Leia_Final_1080p'
---
You may have noticed that we've adopted a RERO approach to Kodi - release early, release often. Our aim is to fix problems more quickly, and then get those fixes out into the wild equally as quickly. This might mean some issues escape alongside the bug fixes, but, overall, it should mean better software, sooner, and without the disruption of a major version bump.

 So, with no further fanfare: another release in the Kodi 18.x "Leia" cycle. The usual rules apply: bug fixes, not new features or functionality; most will be invisible, but will be much-appreciated if you're been suffering from a problem we've managed to address.

 You can find full details of closed pull requests [on GitHub](https://github.com/xbmc/xbmc/pulls?page=1&q=is%3Apr+sort%3Aupdated-desc+milestone%3A%22Leia+18.7%22+label%3A%22v18+Leia%22), so explore that if you want the details, but TL;DR...

  

 **Audio**

 
 * Fix to not reset user-set volume (Android)
 * Fixes around multi-channel audio track support
 
 **Playback/Display**

 
 * Fixes to Bluray subtitle language recognition
 * Fix playback of bus-encrypted bluray discs
 * Improved library handing for plugins if media source is removed
 * Use JNI instead of NDK for MediaCodec (Android)
 * Further work on maximum width and height/vertical-shift (Android)
 * Fixes around realtime handling of TS streams
 
 **Interface/Look-and-feel**

 
 * Fix for watch icons not showing when content type is not set (Estouchy)
 * Fix navigation in skinsettings (Estuary)
 * Fix crash in favourites dialog
 * Apply safe area insets to Kodi GUI (iOS)
 * Fixes around focus after touch action
 * Improvements around dialog/toast handling
 * Fixed behaviour when accessing locked media sources
 
 **Music**

 
 * Fixes around library handling of "isalbumartist" field
 * Fixes around expansion of .ISO images to avoid GUI freezes
 * Ensure album artist isn't blanked out when scraping
 
 **Build System**

 
 * Fix downloading dependencies from mirrors (Windows)
 * Library updates - bump gnutls (3.6.11.1) and nettle(3.5.1)
 
 **PVR**

 
 * Fix EPG corruption when new channels are added during startup
 
 **Network**

 
 * Improvements around handling of proxy credentials
 * Fix for proxy empty fields (proxy, username, password)
 
 **Addons**

 
 * Fix crash if an incompatible VFS addon is present
 * Fix display of title for compressed package directories
 * Fixes around addon settings folder naming
 
 **Subtitles**

 
 * Fixes around decoding of HTML escape characters
 * Fix around SMI (SAMI) subtitles and quoted start tags
 
 **Profiles**

 
 * Fixes for issues related to switching profile
 * Fixes to saving of lock preferences (master lock, lock video windows, etc.)
 
 **Other/General**

 
 * Add "Swiss German" and "Portuguese (Brazil)" to language codes
 * Fix to guard against assert in tinyxml
 * Fix stack overflow when trying to find NFO files in a RAR file
 * Implement range checking in URIUtils::resolvePath
 * Implement support for extended local headers in ZIP files used by some scrapers
 
  

 Thanks as ever to all who found a bug, reported it, helped isolate it and, in some cases, provided a fix.

 The full Kodi 18.7 changelog can be found in our GitHub [milestone](https://github.com/xbmc/xbmc/compare/18.6-Leia...18.7-Leia). If you want to read back on what was actually changed in v18 itself, or in previous versions, you can find the corresponding articles in the relevant [blog posts](https://kodi.tv/tags/release-announcements).

 Application deployment on different platforms (notably, Google Play and the Microsoft Store) varies due to circumstances outside of our control. It may thus take a few more days to appear everywhere, so just stay tuned.

 ***Update**: because of the current global situation, and the resultant adjusted work schedules in many organisations, please be aware that we're currently experiencing longer than usual review times before acceptance/publication. This is likely to delay full availability on curated app stores by seven days or more.*

 