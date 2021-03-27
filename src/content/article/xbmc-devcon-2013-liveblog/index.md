---
title: "XBMC DevCon 2013 LiveBlog"
date: 2013-10-10T03:00:00Z
author: Nathan Betzen
featured_image:
  src: /images/blog/photo.webp
  title: "photo"
  alt: "photo"
---

Good morning, Germany!

This live blog is intended to keep users up to date with DevCon conversations. I’ll likely update roughly once at the change of each hour, so there’s no real reason to constantly hit refresh. If you don’t see an update on the hour, I’ll hold back up updating until the next hour.

## Day 2

## 16.00 (4PM) – Short Presentations Continued

## Binary Addons

Already exist in the form of screensavers and PVR addons.

The goal is to allow things like PVR addons to have their own release cycles. And we’d like to extend the concept to audio codecs and other things. To make this happen we need something that can handle numerous tasks. This thing can be Cmake.

Cmake is cross platform, can download, build, and extract, can bootstrap a source tree, can generate all existing buildsystems, can handle installation, and can handle zip (or tgz) packaging. However, it’s pretty new to almost all of us.

For now, everything needs to be expanded to fit all platforms, so dev volunteers are needed.

## 5.00 (3PM) – Short presentations Continued

## Addon Frontend – Zag

An addon frontend is a central location for 3rd party addons or apps (sometimes called a Portal or an Appstore or whatever)

The purpose of the frontend is to provide a place for users to explore and interact with the add-on. And a place for creators to market their addons. It also acts as a place to centralize addon metadata, and a place to to link to addons.

A frontend has been developed, but needs several things:

Easy example addon, more complex example addon. Wiki integration. Source Code availability. Forum mentors.

## 4.00 (2PM) – Short presentations Continued

## Heimdall – Topfs2

Plan is to split Heimdall into core + optional modules, then push core and modules into addon repo, then have a python scraper to call Heimdall.

What to fix before inclusion:

- Have a way to handle API keys
- Differentiate between errors and warnings (e.g. when site gives 404, warning)
- Decide what to do about ontologies
- finalize task api

A [brief explanation of how Heimdall works](https://forum.kodi.tv/showthread.php?tid=134012&pid=1387163 "How Heimdall works").

## Retroplayer – Garbear

**Vision**: Zero configuration multi-system emulator where you just show XBMC where a game is and launch it. To make this possible, we need Heimdall (uses as many scrapers as necessary) + PyRomInfo (sniffs magic words to resolve gaming platform without guesswork). It’s similar to how videos work in XBMC. It doesn’t matter what codec a video uses. XBMC just plays the video. Retroplayer should do exactly the same thing.

In addition, Public domain ROMs (which include things like Pac-Man clones, etc.) should be automatically accessible free (and legally) to users.

**Current Status**:

- Games window
- just-in-time emulator installation

**Issues**

- Joystick API needs a rewrite
- settings.xml is hacky
- emulators are fairly buggy
- Controller counts are wacky

**Next**

- Display RGB w/o converting YUV422
- Fixes to libretro
- Heimdall
- PyRomInfo
- Scrapers (e.g. [TheGamesDB.net](https://thegamesdb.net/ "The Games DB"))
- Games Library
- Python app for per-controller configuration (so your controller works perfectly with each system)
- Expose info (current level, number of lives, number of coins earned, etc.) to GUI/Savestate manager
- Hook up something like [Retrode](https://www.retrode.com/ "Retrode"), which would be pretty cool

  12.00 (Noon) – Short presentations

---

## ActiveAE – Fernet Menta

PAPlayer was straining quite a bit in the past. ActiveAE was designed to make everything faster, easier, and more efficient. The Active Object Model used by ActiveAE is similar to message queues in DVDPlayer. It handles messages based on the state of the object.

## Jenkins – Martijn

Martijn shows us how building with Jenkins works and how it integrates with Github.

## 11.00 (11AM) – Sponsor Talks

## at-visions

at-visions is a company that provides XBMC inside various luxury hotels around the world, including Europe, Dubai, and, I believe, even possibly Las Vegas.

The presentation started with a review of some of their hotels and skins where they run XBMC. One hotel is a mere 800 EUR a night to stay!

at-visions has also created a pure python game that’s vaguely similar to Space Invaders. They intend ultimately on open sourcing it and making it available to the XBMC community. So cool.

Much of the remainder of at-vision time was discussion between various developers from both XBMC and at-visions about potential improvements to the system.

## Pivos

Pivos is working on all kinds of cool things. New hardware, updated software. Exciting times ahead.

## 10.00 (10AM) – Project Management

Two issues. PRs and Release Manager

PRs: Right now it’s very difficult to know who to ping when you want your PR reviewed. Or in some cases, it’s easy to know the first person to ping, but after that there’s a blank. First solution, create a spreadsheet that actually lists the people who are knowledgeable about all the various components.

Selecting a release manager for XBMC 13 was put off for later.

## End of Day 1

## 16.00 (4PM) – XBMC 14: What’s next?

This year, we’re going to have a race for version 14. Whichever of the following three features is finished first will be the one to signal feature freeze for 14 and will be the main feature for 14.

- Retroplayer/ Game Library
- UPnP Multi-Client
- Bump ffmpeg 2.x.y (bluray mvc support)

  14.00 (2PM) – XBMC 13: Gotham Release

---

What features do we still want to push into XBMC 13 before we freeze?

Gotham: What will be in?

- 3d Support
- Audio settings
- ActiveAE
- Wayland

Feature Freeze November 10th

Nice to have:

- Settings refactor (JSON/python)
- Pulse Audio sink
- SDL (Either 2.0 or drop it)
- ActiveAE CA sink
- bump ffmpeg 2.0

Freeze: If these are going to be in, they need to be in the 10th of December, PR has to be in by the 1st.

No (For 14 or beyond):

- Heimdall
- Retroplayer
- UPnP Multi-client
- Google Play Store (size and licensing issues)
- Binary Addons

  13.00 (1PM)

---

## Multi-Client XBMC – Jonathan Marshall

What we want:

- Each client has a local library
- Each shares that library over UPnP
- Each client then adds what it picks up over UPnP to its own library, flagging as remote
- Thus, each client has access to everything

Necessary ingredients:

- local libraries
- UPnP server/client to share those libraries
- flagging of local content

Missing bits: duplicate handling

- More than one path to the same content is probably going to happen
- multi-formats
- Several ways to handle duplicates

  12.00 PM

---

## Updated Settings System – Presentation by Montellese

In the past, settings were directly connected with the GUI. Which means the only way to change the setting was to make the change in the GUI. The new settings are defined in settings.xml and are completely decoupled from the GUI. In the future, this will allow settings will be manipulatable by addons and other outside systems, allowing for things like settings optimization addons.

Settings can also be manipulated on a platform or appliance level, so Pivos could add pivos-specific settings without needing to touch any of the original settings. So it will be possible now to add new settings sections, categories, groups, etc. Also possible to overwrite any value.

Global elements:

- visible – useful for assigning specific elements to specific platforms
- requirements – makes it so a setting is only visible when a requirement is met. For example, if zeroconf is available and turned on, other settings can appear
- parent -
- levels – basic, standard, advanced, expert, internal (never visible, should never be changed)
- default – it is now possible to reset values back to “factory” default
- control – spinner, list, text input, defines how to input setting in gui
- constraints
- dependencies – Setting is only visible/enabled/etc. when other setting is enabled

  11.00 AM

---

## Statistics/ Public Relations

[![Year over year user growth](/sites/default/files/uploads/Screen-Shot-2013-10-08-at-6.35.37-AM-278x300.webp)](/sites/default/files/uploads/Screen-Shot-2013-10-08-at-6.35.37-AM.webp)First topic of the day was stats. As noted on the [Raspberry Pi blog](https://www.raspberrypi.org/blog/xbmc-performance-demo/ "XBMC on the Raspberry Pi"), there are quite a lot of R-Pi users these days. It appears all that growth in Raspberry Pi and now Android appears to have fairly dramatically increased the number of XBMC users from last August to this August. The number is even higher in September.

A couple suggestions for the future. First, we should increase the number of blog posts so that we talk about already existing features in depth. Second, we should seriously consider making semi-official statements about hardware to give users better guidance.

Broadly speaking, more info is better.

Also, this t-shirt sale is going awesomely. With 3 days left, we’ve already sold between 3 and 4 times the minimum.

## Development Cycle

Is our commit window too short in our development cycle? At the moment, the first 10 days of every month are open for new features and changes. The remainder of the month is set aside for fixes and stability. Is this too short? Too long?

The primary problem is reviewing. What happens if everything is fine on the 9th or 10th day, except for one or two things that only got pinged on review on the very last day? Do we have to wait until next month to merge?

Generally speaking, the agreement appears to be that the window is fine. The change ought to be that the coder and reviewer agree that maybe you enter the PR on the 10th, and then apply the minor fixes over the next few days.

Second, we need better info on who to ping for reviews. Perhaps actually creating a wiki page with reviewer names and project areas where they have knowledge/are experts in.

Jenkins, and the Jenkins test build system, is working really well.

Trac is something we’re all rapidly paying less attention to, which is honestly too bad, as bug reports are finally becoming manageable and verified. Later today, we’re going to review all the ~ 50 bugs that Martijn assigned to 13.0.
