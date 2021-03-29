---
title: 'Weekly report 12'
date: 2010-08-15T04:00:00Z
author: Team XBMC
---
 This is the last weekly report and I would like to thank google and the beagleboard community for the fun summer! It have been a wonderful opportunity and I’ve learned heaps and gotten extremely interested in embedded development.

 Status

 
 * Done further investigation regarding finding the performance bottleneck and is reasonably sure its not shaders any more, which is good. I have noticed that it seems likely that many skins suffer from texture cache issues which is due to textures being to large and making SGX having to do unnecessary work to handle the presentation. I’ve verified this by splitting up a texture in 4 pieces and received 50% performance increase. It seems it doesn’t depend on the size of the rendering area but the texture size. This is of course only true if the USSE isn’t running at maximum capacity since then larger render area would make it slower. And on most skins it is running at full capacity which is were dirty region is useful.
 * ﻿﻿Since much of the performance increase is done by skinners and hard to fix magically by code I’ve written up a documentation with what I’ve learned which could be used by skinners who wants to make a lightweight skin. Documentation can be found at elinux wiki ([https://elinux.org/BeagleBoard/GSoC/2010\_Projects/XBMC](https://elinux.org/BeagleBoard/GSoC/2010_Projects/XBMC))
 * Added a background to the beagleskin which makes it look rather close to confluence while still running at 30fps in 720p on the BeagleBoard C4.
 
 Plan

 
 * Need to google abit for rebase in git so I can upload the patches done during gsoc to google. Or just use format-patch, not sure which is the best.
 * Take a few weeks off before going back to school ![:)](/images/blog/icon_smile.gif)
 * Need to find a suitable something to hook up the beagleboard to when arriving to Canada so I can continue to play with it ![:)](/images/blog/icon_smile.gif)
 * Continue with the lightweight skin, I very much like to use it despite it being far from finished.
 
  