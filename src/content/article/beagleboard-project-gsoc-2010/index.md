---
title: "Beagleboard project for GSOC 2010"
date: 2010-05-23T04:00:00Z
tags:
  - Developer
author: Team XBMC
---

![](/images/blog/beagle-76x101.webp)I have been selected by the Beagleboard community and Google to work on Google Summer of Code 2010. My project will consist of optimizing the rendering of XBMC for the embedded market.

The Beagleboard is an arm based embedded device. Similar hardware can be found in the smart phone segment, for instance the first generation of Android based phones. The current version of the hardware will not be able to deliver 1080p but upcoming generations might. This opens up a wonderful possibility for XBMC.

The problem with XBMC is that it is just too heavy to render as is. Most of the time the interface sits close to static and while a user would perceive this as an idle state, XBMC is far from idle. Every frame the application renders the interface from the ground up and no matter if the interface is completely static this is done at 30-60 times a second! Because of this, the project will focus on moving to an event based rendering system. This will introduce a true idle state and will lower resource usage when the application is idle, however this in itself is not enough. Even if a window is static initially, a skinner can easily add non-static elements such as scrolling text or animated images, which means we again have to render at full frame rate. Thus lowering the actual rendering overhead is also necessary.

During the summer I will keep the community updated on this blog on a weekly basis. Since some of the content will be very technical it has been decided that only a part of the posts will be pushed to the front page of xbmc.org. If you are interested in getting all the updates regarding this project navigate to the full URL for [my blog](/author/topfs2) as it will contain the unfiltered posts as well. For those interesting in helping out I will be idling in both the standard XBMC and the beagle board IRC channels. I will be working in a branch in the normal XBMC svn (not created yet) but will be named gsoc-2010-beagleboard and anyone is free to check out the progress there.

I hope you have enjoyed this introduction and I will end by saying that this will be a great summer for the users of slower hardware and a grand summer for the possibility of a small, silent, affordable and low powered device capable of delivering the full XBMC experience!
