---
title: Kodi 19.0 "Matrix" - Release
date: 2021-02-19T20:49:22.165Z
author: Prof Yaffle
tags:
  - Release
featured_image:
  src: /images/blog/kodi_splash_v19.0_matrix_final_1080p.webp
  title: Kodi 19 Matrix splash screen
  alt: Kodi 19 Matrix splash screen
---

... yes, it's here! After several iterations of alpha, beta and RC, Team Kodi is pleased to announce that Kodi 19.0 "Matrix" has just been formally released on all supported platforms. Dare you take the red pill, and find out how deep the rabbit-hole goes?

By the numbers, then, this version is the product of:

- Nearly 50 individual open source developers contributed code
- About 5,000 commits in over 1,500 pull requests since the first release of 18.x "Leia"
- Over 5,500 changed files, with some 600,000 lines of code added, changed or removed
- Countless hours of dedicated free time conceiving, designing, developing and testing (including all the infrastructure you see around them, including this web site)
- ... and, of course,very little travelling, obviously - that's not good at the moment!

The broad list of new features is below, but - before we get to that - I'd just like to take a moment to say "thank you" to the huge amounts of work put in by the broadest team behind this release. Whether you submitted a few lines of code or a major new feature; whether you worked on video, audio, gaming, or a skin; whether you tested in pre-release and helped identify a problem, debugged an issue or updated a translation; whether you fixed some documentation, looked after the various systems that keep kodi.tv running, or helped to moderate the forum - thank you, one and all. Kodi is a community, and, without all of you, we would all lose something.

So, onward - what have we got. If you've been following the release cycle, you'll have seen these already, but for people who only take final releases... hold on, it's a long list!

##### **Kodi 19 "Matrix" Features**

**Playback**

For audio and music lovers, there are significant improvements across the board to metadata handling: library improvements, new tags, new displays, improvements to how Kodi handles release dates, album durations, multi-disc sets, and more. There's a new, Matrix-inspired visualisation, there are improvements to display when fetching files from a web server, and several changes to how audio decoder addons can pass information through to the Kodi player.

For video, most of the changes are more technical, and may depend on your hardware: AV1 software decoding, HLG HDR and static HDR10 playback on Windows 10, static HDR10 and dynamic Dolby Vision HDR support on Android, and more OpenGL bicubic scalers.

For those who combine the two, and have libraries of music videos, you get some goodies as well: database and metadata display improvements mean that Kodi will now fetch and display related album and artist information from the music library, where appropriate. There are also new features around grouping videos by artist (not just album), support for .NFO files that list all performers instead of just the main artist, plus better search links to return related albums and videos by the same director director.

And, finally, if your definition of "play" is more game-related, we've implemented integer scaling to improve the viewing quality of Pixel Art games across the board, while iOS get support for Xbox, PlayStation and other supported Bluetooth game controllers.

**Skin/Look-and-Feel**

For many people, the interface is Kodi - it's how you find your way around, it's how you interact with the application and your media. As such, it's always getting some attention, and this release is no different: screen redesign, especially for music; new metadata displays; changes to playlist views; a new "now playing" view; artwork and image file improvements; both new and updated GUI controls. Some changes may be subtle, but all are designed to improve your experience.

**Subtitles**

An often-overlooked feature, but immensely useful to so many people, subtitles get some attention in this release: timestamp overlays get fixed, plus you can now select a dark grey colour and set an opacity for the captions (particularly useful in HDR - protect your eyes, kids, you'll miss them when they're gone).

**Addons and Scrapers**

Python comes in for some major changes in Kodi 19. Because the old Python 2.7 has gone out of support, we've finally made the wholesale move to [Python 3](https://kodi.tv/article/kodi-19-python-3-goes-live) and ported our addons across. Much of the community has come with us, so, hopefully, your favourite addons will still function, but we're at the mercy of third-party contributors to update their work.

Kodi 19 replaces the old XML metadata scrapers with new default Python for movies and TV shows; there are also new Python scrapers for music, Generic Album Scraper and Generic Artist Scraper. Binary addons in general get improvements to system documentation, cleaned up settings dialogs, and better help text.

**PVR and Live Television**

Another significant part of Kodi that's had a lot of attention in this release. Most new features here revolve around usability: PVR reminders, home screen widgets, group/channel manager enhancements, navigation and dialog controls, context menus, New/Live/Finale/Premiere tags, channel numbering and sorting, performance improvements, API improvements.

**Security**

There are a few new security features implemented now in Kodi, to help keep you safe from intentional or unintentional problems. Kodi will now enforce the origin of installed addons and their dependencies, which prevents third-party repositories from overwriting code of unrelated add-ons; broken or deprecated add-ons are now highlighted in the add-on list, so you have to actively agree to activate one; the binary addon system now has higher security around data exchange between Kodi and an addons. In addition, we've added a default requirement to password-protect Kodi's web interface, plus give better information around the security implications of enabling external interfaces if you do choose to enable them.

**Platform Specifics**

As a cross-platform application, we try our very best to keep all platforms feature equivalent where we can. However, there are inevitably platform differences, and we also have to make room by dropping old platforms as technology moves on.

The big platform change with this release is new support for tvOS, but this means waving goodbye to [iOS 32-bit](https://kodi.tv/article/kodi-19-welcomes-tvos-says-goodbye-ios-32bit). Beyond that, there are specific tweaks such as specific TopShelf support and fixes on AppleTV, better logging and notch support on iOS, and a move to a single Linux binary for multiple windowing systems (X11, Wayland, and GBM) versus the previous three. That last one will make a big difference to both users and package maintainers, since you'll no longer have to select a different binary based on the target environment.

**Behind the Scenes**

Probably too hidden for many users, but there are inevitably changes and improvements that you can't see, but might give more scope for new features later on: API changes to feed subtitle URIs to the player; multiple updates to various core modules; improvements to API calls and actions, and many more. They may not be important to you, but they took real work and I mention them for completeness.

##### **Kodi V19 "Matrix" Gear**

Why not show your support with a Kodi 19 "Matrix" [shirt or hoodie](https://teespring.com/kodi-matrix)? Or maybe a [pillow](https://teespring.com/kodi-matrix?pid=650) to lounge on while you enjoy your favourite media? As well as just making you look utterly, fabulously, unquestionably cool, all purchases will make a small donation to the Foundation, and help keep everything running the way we all like it. All are available in a series of achingly-fashionable colours.

[![Kodi 19.x "Matrix" T-shirt](/images/blog/Matrix%20T-shirt.webp)](https://teespring.com/kodi-matrix)[![Kodi 19.x "Matrix" Cushion](/images/blog/Matrix%20Cushion.webp)](https://teespring.com/kodi-matrix?pid=650)

##### **Changelog**

For the terminally-curious, you can view the [merged pull requests on GitHub](https://github.com/xbmc/xbmc/pulls?page=1&q=label%3A%22v19+Matrix%22+is%3Aclosed). If you want to read back on the full history of v19 itself, or of previous versions, you can find the corresponding articles in the relevant [blog posts](https://kodi.tv/tags/release-announcements).

##### **Help Wanted!**

If you experience any issues or find any remaining bugs, please post in the [General Support](https://forum.kodi.tv/forumdisplay.php?fid=111) section of our forum. If you have fixes for issues please submit a pull request with your changes to our [master branch on GitHub](https://github.com/xbmc/xbmc). We also welcome users who want to help answer questions in the forum or write articles for the wiki.

##### **Donate**

To show support and appreciation for Kodi, please consider [making a donation](/donate) or [purchasing merchandise](/store) such as a T-shirt or Raspberry Pi case. Your donations help us operate, covering operating expenses, hardware and software licences for developers, and legal fees, as well as paying for team members to attend industry/FLOSS events and our annual conference.

##### **Availability**

Kodi 19.0 "Matrix" is being pushed to the usual channels right now, so should be with your devices shortly. The exception is the Windows Store build for Xbox: this will, unfortunately, be delayed, and may even be subject to a future point release. x64 and x86 builds are going ahead, however, and will appear once they get through the store certification and deployment processes.

And, on that note, please remember that deployment on different platforms - especially curated "app stores", as above - can vary wildly due to circumstances outside of our control. It may thus take a few more days to appear everywhere, so just hang on until it gets to you.

Enjoy!
