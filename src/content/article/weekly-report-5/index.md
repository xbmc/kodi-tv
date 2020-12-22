---
title: 'Weekly report 5'
date: 2010-06-27T04:00:00Z
author: Team XBMC
featured_image: ""
---
Status

 
 * Finally XBMC runs on Angstrom, turns out it was optical code paths deadlocking while loading. Commited a –disable-optical-drive on the gsoc branch.
 * XBMC Runs on C4 at about 10-15 fps (15fps in 640×480 and 10 in 720p) but koen have tried it on the new BeagleBoard xM which does an amazing 38fps in 720p! <https://www.youtube.com/watch?v=80Uia6FkvnA>
 * Commited the initial playground patches for split of processing and rendering.
 
 Plan

 
 * Since C4 runs at 10-15 fps and 100% CPU we need to tripple performance and since CPU seems to be limiting here (unless buffer flip does busy wait) next stop will be limiting processing amount. First will be eventbased since this will allow a way to create a skin thats extremely light on processing resources.
 * Finding out what paths eat the most amount of CPU time (should be somewere in font according to other tests) and try to set up a proper plan on how to limit the CPU usage.
 * Fix up the window and list issues with the processing and rendering split.
 * Backport a few changes to trunk to allow building xbmc on angstrom on trunk.
 
 Risks

 
 * Given that it looks like CPU might be a limiting factor getting XBMC to lower resource use by a third might be hard without limiting the skin
 
 