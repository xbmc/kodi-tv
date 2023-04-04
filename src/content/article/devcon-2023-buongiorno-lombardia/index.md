---
title: Devcon 2023 - Buongiorno Lombardia!
date: 2023-04-04T19:50:43.324Z
author: Prof Yaffle
tags:
  - DevCon
featured_image:
  src: /images/blog/lago-d-iseo.jpg
  title: Lago d'Iseo, Italia
  alt: A picture of a whart alongside Lago d'Iseo - Lake Iseo - in northern Italy.
    Clear blue water, mountains soaring in the background, a hint of snow atop
    them.
---
Welcome, everyone, to Kodi Devcon 2023, coming to you this year from halfway up an Italian mountain overlooking Lake Iseo. We're full of coffee, it's seven degrees outside, we don't have enough power outlets, and we're struggling to stream over dubious Internet connectivity (courtesy of Mr Musk). What could be better?

A slightly different format this year: we want to use the time together as productively as we can, so there'll be less discussion and more collaboration than previously. So, let's go...

**Finance**

We kicked off the day with an overview on our financial position: income, reserves, commitments, sponsorships. We're doing okay, but the combination of Covid and the global cost-of-living crisis is showing. If you're reading this, and would like to drop us a small donation or buy some merchandise, it really would be helpful.

**Team Kodi Internals**

A recap on all things internal to Team Kodi, for both old and new team members: how we use GitHub issues to track internal activities, how we're organised, where to find recordings of team meetings, and so on. We also rattled through a round of introductions and retrospectives on our involvement with Kodi, just to make some of us feel very old.

**Python**

A quick discussion on sunsetting Python 2 - when do we drop it completely, what would the implications be (specifically for anyone still using older Kodi versions), do we keep "legacy" components available for a period, are there any blockers or reasons not to, etc.

**Release Management**

A discussion on streamlining releases, specifically what can we script and automate around building, tagging and publishing dozens of addons. We already have some basic tools, so we can perhaps start with these.

**Hackathon**

As the previous topic is potentially something we can work on while we're together this weekend, this quickly segued in to a conversation about other potential "mini projects": resurrecting an abandoned radio addon, website improvements, Flatpak build, skins/UI, revisiting open PRs and issues, server/infrastructure stuff, some kind of semi-automated "this week in Kodi" to summarise current commits.

**Release Management II**

Back to the previous conversations - what else can we do to manage the systems permissions needed during release management? How can we improve control and auditability of any changes? How can we better manage and review PRs during a release cycle so we get things merged ready for any new release? How can we help people to contribute, what tips and best practice can we better publicise? What additional documentation could we provide?

**Timeshift for everyone**

A presentation about work that's been done to make the PVR "Timeshift" functionality more universally-applicable. By adding timeshift mode to `inputstream.ffmpegdirect` using a local circular buffer (so the user can set a maximum duration), timeshift can be used in any PVR add-on, video add-on or STRM file.

**PVR for Everyone**

Similar to the above, but using IPTVSimple as an integration point for anything in Kodi. Video add-ons can use aggregation add-ons to push their content to IPTVSimple, but this can be problematic as it usurps the original purpose of that add-on. PVR Recordings can now be used for VOD, this speeds up channels/EPG; multi-instance support in PVR helps with this - each add-on can have their own data - but support is still needed in the Python API to keep per-instance settings separate. We will still need some way to integrate the output into Kodi's Video Library.

**Github**

We've used Github for a long time to host our code and provide elements of workflow (PRs, issues, and others), but it could potentially offer more. This, then, was a conversation about what else it might be used for, particularly around project management using Kanban and Projects.

**Kodi v20 'Nexus' Recap**

General feedback is that the release went well, certainly from a process perspective. We continue to be slightly hampered by the inevitable different schedules on various platforms, especially via the curated app stores - there's not much we can do about this, however, beyond perhaps going to 100% availability more quickly. In terms of functionality and user experience, there was very little noise - nothing significant broke, and anything missed was quickly mopped up in 20.1 - with the possible exception of some Android specifics that are broadly outside of our control (permissions and API level).

**Kodi v21 'Omega' Plans** 

Our rough plan is to start Alpha releases very shortly, with regular updates through Alpha and Beta phases before targetting a final release around the end of 2023 or early 2024.

**Savestate Manager** 

A demonstration of new functionality that brings multiple savestate support to Retroplayer. Previously, you could only have one save per emulator, and you needed to manually copy this somewhere to avoid it being over-written by the next save. With this new feature, you can save multiple times, rename them, delete them, and generally switch around between different saves per emulator.

**OpenGL/ES Combined Builds**

We used to have separate builds for each windowing implementation on Linux - so, you needed to know in advance which version to build, ship or install. This was simplified into a single runtime-selectable build. The logical next step is now to do similar on the rendering systems, and effectively switch to a one-size-fits-all model. We have a current proposal that achieves this, but there's still some more work needed to see whether this is actually desirable - and, if so, whether this is the right approach (e.g. whether there's an existing abstraction/wrapper library we could use instead).

**Vulkan**

Vulkan is a cross-platform graphics API that aims to replace things like OpenGL and DirectX. This presentation was around an initial implementation of Vulkan support in Kodi - it doesn't cover all forms of rendering, and it's limited to Wayland only. More work is required - extension to other rendering forms, how we'd handle maturity of Vulkan on different GPU chipsets, co-existence with or replacement of OpenGL/ES and similar API libraries.

**Pipewire**

Pipewire is a low-level multimedia server subsystem for Linux. Basic Pipewire support - focused on audio - was built into Kodi v20, but significant new code is now in place for v21. These changes will give noticeable improvements in support for e.g. HD audio.

**Logging Uniformity and Styling**

Just because of the size, complexity and history of Kodi, we have very many inconsistencies in how we report and log messages. Ideally, we'd streamline all of this and introduce a much more common "language" for all messages. Unfortunately, you can't rely on a simple search-and-replace because of the nature of some of the messages, and so we've got many thousands of changes to make by some other means - which isn't something to be done by hand. So, various approaches were discussed to see if any of these couple help simplify the required changes.

**Textures**

Investigative work on how we render our UI and how we can improve it, particularly on low-end systems and single-board computers. At the moment, even basic skins can render multiple layers (background, fanart, and other overlays), many with transparency, and this can demand a heavy load on the GPU. We also have the potential to resize some graphics elements and textures beforehand, rather than scaling on the fly, which would also remove some of the GPU demand.

**Moderator Update**

Moderation is generally going well, with one notable exception - the rise of ChatGPT-generated posts, which are likely precursors to spammers. We’re in control, but always need more help, as we’ve struggled to get new lasting mods. We've also had a couple of issues with certain mods behaving as independent agents, so we maybe need to revisit our approach to retired/former members.

**Hackathon Update**

Lots of sideline projects - finishing outstanding tasks, starting some new ones, prototyping, ideas. Too much in too rough a state to report here (website updates and upgrades, new merges, prototype news roundup, addons, logging...), but you can expect many of the activities to find their way into production in due course. 

**Kodi and Apple Macs**

We've seen a growth in people using Macs for development, so we took some time to explain some features and quirks of this environment, specifically how to install and run portable apps. This not only allows multiple different versions of Kodi to coexist for test/development purposes, but also the different ARM and x86 architectures that modern Macs support. We also explored some specifics about building and cross-compiling both Kodi and addons on this platform, as it's much more Linux-like than perhaps the Windows platforms people had maybe used before.



![Team Kodi, 2023 - a photo of the Kodi team members who attended Devcon 2023. Mountains soar in the background behind this motley crew. One has his back turned to the camera, while people point to the logo on the back of his shirt - 20, signifying the 20th anniversary of XBMC/Kodi.](/images/blog/team-kodi-2023-italy-ceratello-lovere.jpg "Team Kodi, 2023 - Italy")

And that's it for Devcon 2023 - friendships made and rekindled, beer drunk, code written, plans made. Special thanks go out to Beppe at for hosting us at [Ai Ciar](https://www.airbnb.com/rooms/25868161), and to Alec and Michal from [RudeChefKitchen](https://www.rudechefkitchen.com) for keeping us fed throughout. 

Onwards towards Kodi v21!