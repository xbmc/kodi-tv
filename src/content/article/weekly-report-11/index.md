---
title: 'Weekly Report 11'
date: 2010-08-08T04:00:00Z
author: Team XBMC
---
Before we go into the actual status report I would like to be abit nostalgic, this is the last week of feature addition after all.

 Before GSoC XBMC didn’t even compile on angstrom and now I just finished watching a SD video which ran without the BeagleBoard breaking much of a sweat! I have had much help from the extremely talented beagleboard community and it would have never been possible without them, now its almost possible to have a fully capable SD box made from the BeagleBoard with XBMC.

 While not all of the original ideas made it into XBMC we have still come a long way and XBMC have went from not running to becoming rather usable on the BeagleBoard, still room left for more improvement ofcourse but still great progress IMO. Since the YUV transform is done by NEON and the hardware overlay videos actually run good, before GSOC it couldn’t even present the lowest resolution video at anything beyond 10fps.

 It has been made clear what is slowing down GUI rendering and much lies in the skinners hands, which is what the next weeks documentation will be about. I have commited a minimal but still useable skin which might just hit 100fps ![;)](/sites/default/files/uploads/icon_wink.gif) . If we add backgrounds and make it static but close to looking as ordinary skins that number goes down to about 20fps, with the addition of the dirty region rendering this number actually gets to about 30fps, which was my goal for 720p!

 Status

 
 * Finally got the overlay to be under the controls which needs it.
 * Created a minimal skin which actually hit vsync when rendering.
 * Refactored the rendering passes and dirty region tracker to support N-buffering. Also added the new cost reduction algorithm, the cost reduction algorithm is using static costs now but could probably calculate dynamic costs if it got timing data back regarding its choices. I guess linear regression would work if we don’t use to old data points?
 
 Plan

 
 * Polish and add more dialogs and such to the minimal skin to make it a viable skin for day to day usage.
 * Document what a skinner can do to make a skin which runs fast on BeagleBoard
 
 Risks

 
 * Can’t think of anything …
 
 