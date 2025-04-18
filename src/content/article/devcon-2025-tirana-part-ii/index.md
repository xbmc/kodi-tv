---
title: DevCon 2025 - Tirana - Part II
date: 2025-04-12T21:17:34.588Z
author: Prof Yaffle
tags:
  - DevCon
featured_image:
  src: /images/blog/tirana-street-scene.webp
  title: Tirana street scene (Bulevardi Dëshmorët e Kombit) in spring. Image
    copyright Ian Harper, used with permission.
  alt: A grand building, probably 19th century, on a street corner. The sun is
    shining, the sky is blue. A line of neatly-trimmed trees sits just in front
    of it.
---
... and we're back! The skies are blue, the sun is shining, we're fed and refreshed, yet we're locked in a darkened, overly-warm, windowless room for today's session. The privations we suffer for our art; you really have no idea.

Let's get to it, then - welcome to DevCon Day Two!

We kicked off the session with a bit of administrative insight from **keithah** - how the Board operates, our bank account structure, what we use for 2FA and virtual postal addresses, interaction with tax authorities for our non-profit status, and similar. Nothing of interest to the outside world, but an insight for our team members on some more of the internal moving parts.

While going through some of our open issues, one triggered a conversation (as these things do) about `advancedsettings.xml` versus GUI windows, and what, if anything, should be "promoted" from the former to the latter. Kodi is a complex application, and the GUI settings are already overwhelming for many, but asking advanced users to edit text files is a little old school (as well as being clearly inconsistent or just plain annoying on some platforms). A good example of this is the use of MySQL: very many people use it, but putting it into the GUI might simply give more people the opportunity to completely ruin their system because of LAN latency or a simple mistyped IP address. No specific conclusions, but it's clearly a conversation that will continue to run as new features are introduced, tested, and, ultimately, mainstreamed. There's room for improvement, however.

Next up, **garbear** came back on to talk about shaders - specifically, work that's been underway for several years now to implement them in Retroplayer. For those who don't know, a shader is a computer graphics technique (program, piece of code) that controls the appearance of 3D graphics elements - colour, lighting, texture, reflectivity, and so on. To have these obviously has a significant impact on how a game looks, from 8-bit blockiness to smooth realtime rendering (although they obviously can't work miracles). There's a major pull request that's nearing completion, but there remain some final issues on OpenGL/OpenGL ES targets before it's all ready.

As we finished that topic, well, once again, we went off on a tangent: the mere mention of GL/GLES sent us off down a whole different conversation, with **lrusak**, **sarbes**, **chewitt** and **samnazarko** weighing in - but one that's far too granular to summarise here. Broadly, OpenGL ES is targeted at embedded systems, so offers a subset of functions compared to OpenGL, but that means a disparity in features and thus compatibility. However, OpenGL ES enjoys wider platform support, so standardising on one or the other has a lot of appeal (or, indeed, on Vulkan, but that's an entirely different conversation).

The next topic was a long one, involved very many people, and came in multiple parts: a broad fly-past of open internal issues (we use GitHub issues to capture and track issues across multiple external and internal topic areas: bug tracking, for general attention of the Team, for the Board, for blog topics, for this conference, and so on). So, discussions in varying depth around (variously) auto-closure of stale issues and PRs; managing permission groups and access rights (enforcing least privilege in a maintainable way); cleaning out old/unsupported add-ons; cleanup of repositories and GitHub organisations; policies and processes around inactive (and, ultimately, retired) team members; how best to use AWS and Azure credit versus what we run on existing servers; potential to move to an open-source messaging platform; the global regulatory landscape.

And that's just about a wrap for Day Two. There's a little bit of both physical and virtual tidying up to do, but that's very much an "us" problem. We have a series of breakouts scheduled (and, inevitably, spontaneously spawning) for tomorrow, so we'll update you on those as and if relevant - so, maybe see you then!