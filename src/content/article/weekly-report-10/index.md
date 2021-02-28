---
title: 'Weekly report 10'
date: 2010-08-03T04:00:00Z
author: Team XBMC
---
Status

 
 * Overlay is scaled and positioned according to how the skin wants it.
 * Overlay playback is tearing free and rather fast. Runs bunny 480p almost perfect while before it was about 5fps.
 * Finally got crosscompile working. Thanks again koen for all your help providing me with builds up to this point
 
 Plan

 
 * Still need to get overlay under some of the GUI controls. I have tried rendering SGX with alpha bits on but haven’t gotten it to work, possibly set the blending mode of the overlay improperly.
 * Find a low resource skin and limit it down as a start of a beagle skin.
 * Investigate what the performance hog is in videoplayback using oprofile, the memcpy should be gone but its still far behind omapfbplay.
 
 Risks

 
 * My temporary apartment seems to lie in a wireless deadzone so my internet is incredibly slow. I will still be able to work (thanks git!) but my time on irc will be less and i will probably group commits more.
 * A skin may hide the videoplayback temporarily, need to find a way to temporarily hide the overlay and possibly discard doing yuv transforms during this time. Not sure if its possible without reconfiguration (on hide and on visible) of the overlay.
 
 