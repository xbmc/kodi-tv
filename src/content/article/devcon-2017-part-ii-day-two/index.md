---
title: "Devcon 2017 Part II - Day Two"
date: 2017-10-27T04:21:54Z
tags:
  - DevCon
  - Conferences
author: Prof Yaffle
featured_image:
  src: /images/blog/20171027_184546_HDR-2.webp
  title: "20171027_184546_HDR-2"
  alt: "20171027_184546_HDR-2"
---

Day Two dawns... most people are bright-eyed and ready for another day, although, if I'm honest, some people may be here more in body than in spirit...

[![LibreELEC Logo](https://wp.flash-jet.com/wp-content/uploads/2017/04/n6blkmxg.webp)](https://libreelec.tv/)

First on today, **chewitt** from LibreELEC gave us an update: the installed base continues to grow, with the Raspberry Pi in different forms easily remains the dominant platform, although this is slowly declining in favour of SoC (Android stock) devices. Given the appliance nature of LE - operating system and applications - a large part of the presentation was given over to security, including automated updates and the overall integrity of the process.

![GSoC Logo](https://developers.google.com/open-source/gsoc/images/gsoc2016-sun-373x373.webp)

Next up, a series of sessions led by our newest team members - our Google Summer of Code students (or maybe "graduates" now, given their contributions!).

**Vel0city** presented his work on multi-pass shaders - programs that run on the GPU to manipulate an image frame at a pixel level between decoding and display - so, blur, enhance, scale, and so on. These are particularly useful for improving image quality when perhaps the display technology has advanced significantly beyond what the source material was created for (resolution, colour depth, frame rate, etc.).

Next, **yol** took us through his work on touch and Wayland (vs X11) integration. While we'd had some Wayland implementation previously, this work brought it right up-to-date with native support within Kodi on Linux.

And finally, **arpitn30** talked about his project to port over to Python 3 (Python 2.x goes end of life in 2020). As would be expected, this involved changed library calls, removal of deprecated syntax, and updated dependencies and versions. There are significant differences between Python 2 and 3 - they're almost different languages - which give rise to real challenges in a cross-platform, multi-version environment. Of course, the shift to Python 3 will require rework in all Python addons, so this is a long-term migration across many different packages. **If you're an addon author, keep an eye out for further information on this topic in the coming weeks and months, as it's not negotiable.**

To close off GSoC 2017, then, **razze** led a conversation about GSoC 2018 - a call for more mentors, for more developers to get involved. We can bring in students, we can offer project ideas, but we need the experience of the existing developers to be successful: to help orientate people to the code and guide them through the best way to get code accepted into Kodi for release.

After a brief but passionate conversation about trademarks, licensing and similar, the sessions moved on to **usability**, and the "out-of-the-box" appeal of piracy addons versus "raw" Kodi. While we don't provide any content, we could maybe make it easier for people to catalogue their media, perhaps with more pre-defined skin nodes or similar. We also covered **interaction between addons and skins**, and what the implications are of some modules either demanding or objecting to the presence of other modules, and what this means for the user experience.

Following this - in a deja vu moment for many people - the discussion moved to what we can realistically do to support **DRM-protected** content. People have an understandable desire to watch their legitimate, paid-for content, so we continue to explore what can be done in this area. This is likely to be a conversation that will run for some time, however.

Next up, **Martijn** talked about our next major release. We've just launched the latest point release of Krypton 17.x, so it's time to be looking towards Leia 18.x; the code is broadly ready and stable, so it's now a process of locking down features, freezing code, building alphas, and so on. As always, this is a major piece of logistics, so it needs to be planned and timed properly.

![Linux (Tux) Logo](https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.webp) ![Windows Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Windows_logo_-_2012.svg/768px-Windows_logo_-_2012.svg.webp) ![Apple Logo](/images/blog/giant-apple-logo-bw.webp) ![Android Logo](https://cdn.worldvectorlogo.com/logos/android.svg)

As the day started to lurch towards the finishing line, the sessions moved on to platform specifics.

Fresh from the Embedded Linux Conference Europe, **lrusak** covered Kodi on **embedded Linux** - specifically, where we are with Kodi now, and where we want to be as the SoC/embedded market continues to develop. The plethora of boards has caused immense fragmentation, and this is becoming impossible to maintain because of different approaches to windowing, rendering, and so on. There are technologies to address this, however: Linux kernel support for Atomic DRM (Direct Rendering Manager) starts to simplify the problem; V4L2 augments this further. These are not implemented on all platforms, though, so it's sadly not that simple. The level of support, and dependency on specific kernel versions or proprietary blobs, varies between Broadcom, Amlogic, Allwinner, Rockchip, Qualcomm, and Freescale. There's thus more work from the vendors while software packages develop in parallel: improved V4L2 in FFmpeg, Kodi changes, kernel work.

Most **Windows**-specific activity revolves around Kodi under UWP, which we've covered before. There were no major updates to report on **Apple** or **Android** platforms.

Final thoughts before we tail away... further conversations about the migration to Python 3 and how that might be phased/implemented, and anything else needed in the 17.x branch for a further point release.

And that's it for Day Two - a few attendees are going to leave early today (or maybe we'll just leave them in a bar somewhere), but there'll still be more Devcon tomorrow.
