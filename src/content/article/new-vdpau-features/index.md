---
title: 'New VDPAU Features'
date: 2009-09-04T04:00:00Z
author: Team XBMC
featured_image: ""
---
![Nvidia](https://docs.nvidia.com/cuda/index.html "Nvidia")Today Nvidia [announced](http://www.nvnews.net/vbulletin/showthread.php?p=2079643) a new set of beta drivers that add several new features to VDPAU in linux. For those somehow still in the dark about VDPAU read about it from [here](http://www.nvnews.net/vbulletin/showpost.php?p=1844996&postcount=1) and [here](https://en.wikipedia.org/wiki/VDPAU). Yes, it’s linux only.

 New features include improved video upscaling and hardware acceleration for MPEG-4 Part 2, DivX 4, and DivX 5 video. The obvious pitfall in the announcement is the new hardware requirement, as most of our users already taking advantage of VDPAU (and devs as well) are undoubtedly using 8xxx or 9xxx series chipsets. The new features will require hardware with ‘Feature Set C’. The current list includes: GeForce GT 230M, GeForce GT 240M, GeForce G210M, GeForce GTS 260M, GeForce GTS 250M.

 As always, the XBMC team is working hard to support the latest and greatest features available. In fact, motd2k has been working with Nvidia since before the drivers were publicly released, so support should be forthcoming. He says that the upscaling changes should be minimal, though the new codec support will depend on ffmpeg developers, who are known to be very strict when it comes to adding new code. Though without the necessary hardware for development it’s understandably tough for him, so remember to [donate](/contribute/donate) if you’d like to help out.

 