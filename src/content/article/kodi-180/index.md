---
title: "Kodi 18.0"
date: 2019-01-28T23:49:48Z
tags:
  - Release
author: Prof Yaffle
featured_image:
  src: /images/blog/kodi_blog_k-18l_c_900x336.webp
  title: 'Kodi v18 "Leia" robot'
  alt: 'Kodi v18 "Leia" robot'
---

## **Kodi 18 is here!**

\<_drum roll_\> ... after another long gestation... the Kodi team is very pleased to announce the immediate availability of Kodi 18.0 "Leia" for all supported platforms (UWP for Windows Store and Xbox is working its way through the system as I type, so will be available shortly...). While we were planning to move more to a "release early, release often" model, this has some significant changes that really needed to be tested and bedded in before we launched it, so it did take a little longer than we'd hoped. It was, though, a worthwhile wait :)

To put it in some kind of context, this version includes:

- Approaching 10,000 commits (code chunks changed)
- More than 3000 pull-requests (collection of commits that were included in one go)
- Nearly 9,000 changed files
- Nearly half a million line of code added, and much the same number removed
- Over 36 open source developers
- A lot of dedicated free time conceiving, designing, developing and testing these changes (and all the infrastructure you see around them, including this web site)
- Quite literally many, many cases of beer and wine

We've covered many of the detailed changes in this release in previous [blog posts](https://kodi.tv/blog?keyword=v18&tag=All), but here's a quick summary of what you'll find in this new release:

##### **Retroplayer gaming and associated game control support**

One of the big features of this release: support for gaming emulators, ROMs and controls. This is a significant topic in its own right, so look out for future posts on this, but suffice it to say at this time that you now have a whole world of retro gaming at your fingertips, all from the same interface as your movies, music and TV shows. For the genuine experience as well, we've also introduced support for joysticks, gamepads, and other platform-specific controls, so the games will work just as was intended.

##### **Digital Rights Management decryption support**

Early days in many ways, but this opens a whole new world of content for Kodi. Depending on your hardware and licensing, Kodi can now access external DRM handlers and then play subscription content just like any other local media. This is significant in a time when so many people are switching to protected streaming content; there are already several add-ons available that make use of this functionality, and we genuinely hope that we'll see support from other content providers in the future.

##### **Music Library – new ways to explore and enjoy your music collection**

Significant improvements including better filtering (media source, artist gender, type etc.); artist sort name; enhanced artwork; faster API access (particularly useful if you're controlling Kodi by remote with the TV off). Creating and using the music library is even smoother than before. If you have never bothered to use the music library, or maybe never even used Kodi as a music player, then we encourage you to try this feature in Leia!

##### **Live TV improvements, including support for new back-ends**

Support for RDS (Radio Data System), automatic selection on startup ("boot to live TV/radio", if you like), improved OSD and PVR information, enhanced EPG and PVR actions, and many more. Back end support has been updated across the board, with new support for Zattoo, Teleboy, and Sledovanitv.cz .

##### **Binary addon support and the binary addon repository**

While we've actually been using platform-specific binary addons for some time - think PVR addons and screensavers - there's been a lot of work to expand this functionality and move to a more modular architecture as a result. This has effectively halved the main Kodi installer in size, as you now have the option to install some of these functions as you need them instead of them coming pre-bundled. The architecture also now opens the door for other types of pre-compiled binaries, perhaps to provide access to different media sources. The binary repository is currently available for Android, OSX and Windows; Linux users will still have to use the PPA, while iOS and UWP will continue to include the binary add-ons in the installer because of platform limitations.

##### **Android Leanback and voice control**

Kodi can now show its library contents on the main Android TV interface, with full voice functionality: unwatched random movies and unlistened-to albums, binge watch suggestions, and more. Voice integration allows you to search for content with Google Assistant, using the same feature for "voice typing" wherever you see the traditional Kodi on-screen keyboard.

##### **Playback improvements (audio and video), including improved Blu-ray support**

The video player is core to so much of what Kodi does, and some significant changes have been made to the architecture to ensure we're better able to cope with 4K, 8K, HDR and similar, as well as keeping up with the variety of CODECs out there. Changes have been made to priority, to ensure that video gets the most attention from the CPU/GPU for smoothest-possible playback. Elements have been moved out into binary addons, so components can potentially be updated outside of the main Kodi code base.

We've also improved Blu-ray support in terms of disc detection and metadata, BD-J menu support (subject to Java support on the device), there are updated external interfaces for e.g. MPEG DASH and RTMP input, and there are improvements to 3d playback (including in 2D mode) and various changes to specific CODECs.

On the audio side, there's a wealth of improvements and new support for all types of playback system: ALSA, PulseAudio, OSS, Pi Audio, DirectSound, WASAPI, Darwin, SndIO

##### **"Estuary" skin modifications and changes to the GUI/skinning engine**

Many of the other changes listed here have an obvious ripple effect on the Kodi interface, so we've made change to support these: the gaming modules and associated libraries and the PVR changes, for example. We've also updated keyboard layouts for more languages, updated image resources, changed API calls, improved response times with optimisations for e.g. scaling and redrawing.

##### **Revised codebase and build guides**

Starting with this release, our [build guides](https://github.com/xbmc/xbmc/blob/master/docs/README.md) are kept up-to-date against the current code base - current, as in (hopefully!) up-to-date against a single pull request or code commit. That means that we no longer need to maintain How-Tos and standalone guides, and you will be able to reliably find a build guide for any point in time, even retrospectively.

##### **Platform Specifics**

As a multi-platform application, Kodi inevitably has to be updated in different ways for different operating systems, whether that's simply to keep up or whether it's to unlock new functionality. Android gets API bumps, speech-to-text, SD card support, among other things; BSD gets all-round improved support, especially on the video (VAAPI/VDPAU) side; Linux gets DRM, Mir/Wayland support, numerous video improvements, and build system changes; iOS gets support for iOS 10, improved VTB decoder support, and general improvements on arm64; and Windows finally gets 64-bit binaries, along with improved UWP compilation, enhancements to image rendering, and another slew of general platform-specific improvements to how we handle libraries and APIs.

##### **... And Other Things**

Of course, there have also been a huge number of other changes, some of which will be invisible to very many users. Bluetooth support, CMake build system, visualisations and screensavers, improvements to the JSON-RPC API, improved code stability, performance. and security (as well as general code clean-up in many core areas), remote control changes, web interface changes, logging changes, dependency changes... the list goes on. Do take a look at the change log and detailed commit history (below) if you're really interested in looking behind the curtain!

## The V18 "Leia" T-shirt

Inspired by the "galaxy far, far away" theme, our resident artist Sam went above and beyond and designed perhaps the coolest Kodi announcement video of all time.

We loved his work so much that we're modelling the Kodi 18 shirt after it, along with more art to come. Here it is, our [newest, coolest shirt: K-18L](https://teespring.com/stores/kodi-18-leia-store) - available in several shirt colours and not just black or white.

[![Kodistore](/images/blog/Kodi18Store.webp)](https://teespring.com/stores/kodi-18-leia-store)

## Changelog

The [Kodi 18 changelog](<https://kodi.wiki/view/Kodi_v18_(Leia)_changelog> "Kodi 17 changelog") wiki page gives a list of changes for this release; those seeking a more technical listing can view the [merged pull requests](https://github.com/xbmc/xbmc/pulls?page=1&q=label%3A%22v18+Leia%22+is%3Aclosed "merged pull requests") on GitHub.

## Thanks

As always, this is a huge team effort, and our collective thanks go out to all the developers who submitted code, whether that was thousands of lines of a core new feature or a couple of lines to fix a skin bug. Thanks go out to the ecosystem of add-on and skin developers who updated or created new add-ons to use new functionality in Kodi 18.0. Likewise, we're indebted to the many beta and release candidate testers who took time to explore the pre-release application, file bug reports, test fixes and assist the team with resolving issues. And finally ... special thanks go our to our tireless team of forum moderators, and all those who spend time in our forum and enjoy being part of our community to share tips and tricks and help others. Without all of you, this project would be nothing.

## Help!

If you experience any issues or find any remaining bugs, please post in the [General Support section](https://forum.kodi.tv/forumdisplay.php?fid=111 "General support") of our forum (please be mindful of our [forum rules](https://kodi.wiki/view/Official:Forum_rules) when posting!). If you have fixes for issues please submit a pull request with your changes to our [master branch on GitHub](https://github.com/xbmc/xbmc). We also welcome users who want to help answer questions in the forum or write articles for the wiki.

## Donate

To show support and appreciation for Kodi, please consider [making a donation](/contribute/donate "Donate to Kodi") or purchasing merchandise such as a T-shirt or Raspberry Pi case. All donations or profits go to the XBMC Foundation and are typically used for team travel to attend conferences, operating expenses, hardware and software licences for developers, legal fees, and the annual developer conference.
