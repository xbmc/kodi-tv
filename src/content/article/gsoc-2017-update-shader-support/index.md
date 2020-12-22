---
title: 'GSOC 2017 Update - Shader Support'
date: 2017-07-30T06:34:37Z
author: Nathan Betzen
featured_image: /images/blog/neighborscale.png
---
Now that we're 2/3rds finished with GSOC 2017, I've invited our intrepid student developers to spend some time writing about how their projects are going so far. For those of you out of the loop, the three projects this year are implementing shader support in Retroplayer, upgrading Kodi to Python3 for add-ons, and getting Kodi to natively support Wayland in Linuxland. 

 We'll start with Nick's update on Shader Support, and release the other updates throughout the week.

 Shader Support - Vel0cityX
--------------------------

 My initial proposal was about implementing shader support in RetroPlayer as well as a variety of default shaders to go with it.

 However, quite early on, it was [suggested to me](https://forum.kodi.tv/showthread.php?tid=310613&pid=2557678#pid2557678) that I try something more ambitious and implement the same [spec](https://github.com/libretro/common-shaders/blob/master/docs/README) that libretro shaders use. This spec essentially introduces shader "preset" files; configuration files which allow for multi-pass shader configurations to achieve advanced filtering, without manually copying and pasting shader code all over the place. They have other features too, but this is their core funtionality and reason of existance. The biggest advantage of implementing this would be that the are already [many](https://github.com/libretro/common-shaders/) [many](https://github.com/libretro/glsl-shaders/) shaders that support this format, both for OpenGL (ES), and Direct3D.

 So, I changed my [proposal](https://docs.google.com/document/d/1aGofLRhy6Kq5BMI8onStvpqrc0BjFkQwTWrarXj3Vd4/) accordingly and began research.

 To give a bit of background, it is important to mention that RetroPlayer doesn't have its own renderer; it never did. All of its rendering is entirely reliant on VideoPlayer (the backend and renderer used when playing any kind of *video*). Thus, it was clear since the beginning that I would need to get around this problem one way or the other.

 ### **June**

 The first month I was really busy with university exams, so unfortunately my time spent on this was less than I'd like.

 I had never worked on Kodi before, so initially my time was spent creating a development environment ready (I faced lots of problems on that front), as well as getting acquainted with some of the relevant parts of the codebase.

 At the start of June, I booted up RetroPlayer for the first time and instantly noticed something that I didn't quite like: the scaling. Apparently the Windows renderer didn't support nearest neighbor scaling, so, the first (productive) thing I did was implement [nearest neighbor video scaling](https://github.com/garbear/xbmc/pull/85) for Windows. Maybe not directrly related to my proposal, but it made me familiar with a part of the code base I would *really* need to know the ins and outs of, for the weeks to come.

 [gallery:1]

 Towards the middle of June and start of July, I started working on a [new renderer](https://github.com/garbear/xbmc/pull/84) for RetroPlayer, based on VideoPlayer.

 ### **July**

 After that, I needed to get shader presets to load and after a bit of discussion with Garrett, I decided to go with a [binary add-on](https://github.com/VelocityRa/game.shader.presets), which would use RetroArch's implementation of .cgp parsing.

 The start and middle of July was spent on diving in the crazy world of binary add-on development, making a new binary add-on type, building a basic API for it and getting it to work from inside Kodi. There's still work to be done on that front, but all the framework is setup now and it *works*.

 There are about 6 layers of abstraction between the add-on and what Kodi sees (!), so unfortunately changing the API is quite tedious (depending on how many layers change).

 It was needed though as RetroArch's parsing code wasn't compatible with Kodi's licence.

 After getting this to work, Fernet's changes to VideoPlayer upstream caused my renderer to be quite useless and in need of a rewrite.

 I wasn't gonna spend more time on this, since my proposal was already enough work as it is, so I decided to go with a different approach instead.

 Without getting too technical, with the new approach RetroPlayer is still dependent on VideoPlayer, but less so.

 Still, this won't be mergeable upstream, since people will want RetroPlayer to finally get its own renderer.

 Doing it in a better way (but still quite messy) would require me to remake the renderer by copying VP again, so I'd rather focus on getting a minimum viable product first before diving in to that.

 If there is time, I *will* work towards that, but getting an MVP is my top priority at the moment.

 ### **The Future**

 I have started working on the core part of my proposal since the past week or so.

 By "core" part, I mean getting shaders to actually renderer.

 This of course involved diving deep into graphics, Direct3D 11 in particular.

 The latest issue I faced had to do with the fact that all libretro shaders that I thought would compile happily with Direct3D, didn't.

 Without getting too much into the details, these shaders were written in a slightly different shader language (Cg) than the one D3D uses (HLSL).

 I could probably wrap up the backend and implement a bunch of pre-set shaders myself for users to use and call it a day, but I didn't want the whole shader preset thing to die, especially given its benefits and the effort I've already put into it.

 So, I emailed libretro's main developer and we discussed for a while, he then invited me to their IRC channel and we came to the following conclusions:

 
 2. Both projects would greatly benefit by porting these shaders to Direct3D. Cg is very much legacy software at this point and they would like to get rid of their Cg shader code.
 4. There are around 600 shaders that need porting, which are used in different combination by around 500 shader presets. That's a lot of work for me to do in a month, in addition to the actual rendering backend for D3D and OGL. So, they agreed to aid in with the porting of the shaders. This could only increase libretro's popularity after all, so both projects benefit.
 
 On the backend side, I'm making quick progress, but it's quite a lot of work, so I'm not sure how much of the spec I'll be able to implement in time, especially since, like I mentioned, D3D11 and OpenGL (ES) require different implementations.

 Thankfully many shaders don't use very advanced features of the spec, so they will be compatible. Of course, I will try to implement as much of it I can if not all of it, to make use of as many pre-existing shaders as possible.

 If I didn't face so many unexpected issues (and I hadn't lost almost a month due to exams) things might've been different, but what can you do; these things happen.

 All in all, I'm hopeful for August. No doubt it will get quite intense since it's the final stretch, but I'm ready for it!

 