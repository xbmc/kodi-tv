---
title: 'Weekly report 8'
date: 2010-07-17T04:00:00Z
author: Team XBMC
---
 Status

 
 * Understood how OMAP Overlay works and how it should be done, thanks to måns awesome application omapfbplay.
 * Implemented a VideoRenderer in XBMC which transforms from yuv420p to yuv422p via swscale. I might use the neon optimized from Måns at a later stage but for now I isolate the unknowns to only be OMAP Overlay.
 * Refit the overlay code from omapfbplay to fit into the video renderer I created, it starts the overlay but locks up somewhere.
 
 Plan

 
 * Fix the remaining issues and actually get video displayed using OMAP Overlay
 * Make the overlay scale and position correctly in the GUI and with respect of the window underneath.
 * Try to get SGX to render to the topmost frame buffer to get the OSD over the overlay. Not sure how this should be done code wise though, I guess open a new EGL Context or Surface is needed?
 * Get rid of the unneeded memcpy’s (might be out of scope since its not problematic for 480p)
 
 Risks

 
 * Won’t get SGX to render over the overlay.
 * While dvdplayer takes little resources it does do some unnecessary memcpy’s which might take away the possibility of 720p, and getting rid of those memcpy’s will require refactoring a large portion of the rendering of video.
 
  