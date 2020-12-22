---
title: 'Kodi "Leia" 18.4 Release'
date: 2019-09-01T10:59:24Z
author: Prof Yaffle
featured_image: /images/blog/splash.jpg
---
Another couple of months have passed since we last pushed out a release, and so, in our ongoing efforts to produce the best media software in the world, it's time to squash another few of those more irritating bugs. Usual rules apply: don't expect any new features, don't think that this will change your life, it won't make you richer or more attractive, but it will hopefully be more stable and usable for people who've been victims of any of these bugs.

 So, what have we done? Well, you can find a full summary of closed pull requests [here](https://github.com/xbmc/xbmc/pulls?page=1&q=is%3Apr+sort%3Aupdated-desc+milestone%3A%22Leia+18.4%22+label%3A%22v18+Leia%22), but the summary would be...

 **Interface**

 
 * Fix Missing text when sorting from inside addon
 * Clear/save focus-history when leaving window with focus on parent folder item
 * Picture slideshow fixes (Estuary)
 * Subscribe to controller install events (games)
 * Fix radio button text length (Estuary)
 * Fix season/episode formatting for video addons (video)
 * Don't consider display mode ids constant (Android)
 
 **Playback/Display**

 
 * Fix PlayMedia builtin for playlists (.strm) and "artists" smart playlists (music)
 * Fix PlayMedia builtin for smart playlists and playlists (music)
 * FFmpeg: Bump to 4.0.4-Leia-18.4
 * Load program from stream property without using streaminfo (video)
 * Fix initialization of AVD3D11VAContext structure (video, Windows)
 * Fix TS resume point, related to PR16314 (video)
 * Fixed memory leak, fixed segfault (video, Linux)
 * Fix PAPlayer to handle passthrough for TrueHD (audio)
 
 **PVR**

 
 * Fix component dependencies
 * PVRRecordings: Prevent concurrent calls to video database
 
 **Other/General fixes**

 
 * Use first protocol from add-on in add network dialog
 * Use exact matching for protocol in file+dir factories
 * Use of absolute paths in combination with hosts in URLs
 * Fix file times for vfs addons
 * Fix + sign HTTP folder
 * Corrections to filesystem CircularCache initialization and termination
 * Controller fixes
 * Delete stream details when video info is refreshed
 * Do not attempt to further resolve plugin paths for failing entries
 * Revert "fixed: We should always update stream details from player..."
 
 Many - indeed, most - of these fixes are hidden deep inside Kodi and really shouldn't be obvious to most people; unless you're doing something that regularly hits one of them, you'll really never notice. That said, they're all real bugs, and real fixes, so thanks as always to all who found a bug, took the time to report it and, in some cases, provided a fix.

 The full v18.4 changelog can be found in our GitHub [milestone](https://github.com/xbmc/xbmc/compare/18.3-Leia...18.4-Leia). If you want to read back on what was actually changed in v18 itself, you can find the corresponding articles in the blog posts - [Kodi 18](https://kodi.tv/article/kodi-180), [Kodi 18.1](https://kodi.tv/article/kodi-v181-leia-rc1), [Kodi 18.2](https://kodi.tv/article/kodi-leia-182-release), and [Kodi 18.3](https://kodi.tv/article/kodi-leia-183-release).

 As usual, Kodi roll out on different platforms (notably, Google Play and the Microsoft Store) varies due to circumstances outside of our control. It may thus take a few more days, so just stay tuned.

 