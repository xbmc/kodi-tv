---
title: 'Weekly report 9'
date: 2010-07-25T04:00:00Z
author: Team XBMC
featured_image: ""
---
Status

 
 * OMAP Overlay is hooked up to XBMC and works rather well (for a few seconds)
 * Switched the yuv transformation from swscale to the NEON method created by mru.
 * Have created a hack that should get rid of the memcpy, needs major redesign though to get it into trunk though but probably ok to use for beagleboard and possibly tegra to gain some speed while decoding video.
 
 Plan

 
 * Get to the bottom of the deadlock which makes playback stop after a few seconds
 * Position the overlay properly according to skinning specifications (rotation will not be possible but nearly no skin uses that on video control so no real biggie).
 * Get stuff rendering ontop of the overlay is still needed, so plan is to read through the documentation about the blending modes and how to setup so SGX shines through as supposed to.
 
 Risks

 
 * Time…. next week will be my final moving week and I need to clear out the entire apartment. Hence I suspect the following week will be hard to get much work done in. Weeks after this I’ll be setup and free in a new apartment so I’ll take care of the time lost then.
 
 