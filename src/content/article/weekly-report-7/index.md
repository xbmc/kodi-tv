---
title: 'Weekly report 7'
date: 2010-07-11T04:00:00Z
author: Team XBMC
---
Status

 
 * Finally gotten the dirty region based rendering solution to work on the Beagle Board. During the week I’ve tried rendering to a framebuffer and render this buffer to the backbuffer but it was incredibly slow but Måns Rullgård (mru) pointed me to track dirty regions from 2 frames back, i.e. what is undefined for 2 frames. This works since normally a graphics just flip the pointers between front and back buffers and as such if we know what we have rendered on both we can know what we need to render to have a perfectly defined backbuffer. While confluence uses lots of fullscreen animations its now getting to the point were its possible to create a snappy low resource skin, and when the old PM3 skin gets updated with the addon changes it might just be the perfect candidate.
 * While many controls are working and marks dirty regions properly there is still a couple of vital ones left, most notably the lists.
 * Tracked down why XBMC in Angstrom used up the entire CPU time thanks to some the wonderful program oprofile and help from Måns. It seems like SDL Audio (which we use for GUI Sounds) constantly poked the audio device, I would take a guess that this is coupled with the problem elupus found with SDL Audio constantly feeding the audio device null data when unused instead of closing the device. For now I have thus disabled GUI sounds on Angstrom in my branch and this dropped CPU from 100% to 10-20%.
 * I have profiled video playback and it seems that while playing 480p content (Big Buck Bunny) we spend most of the time just idleing, thus the decoding is not CPU bound. Some more testing showed that the yuv to rgb transform seems to make the presentation slow and this is because this transform is done in shader. If we disable the yuv to rgb in the shaders presentation is almost whatchable in terms of frames per second. And as my mentor (Michael Zucchi) and Måns have suggested it seems like OMAP overlay (which can do the yuv to rgb transform in hardware) will help alot.
 
 Plan

 
 * Continue making controls mark their dirty regions. Most importantly make lists mark their region.
 * Make the marking handle the 3D case were controls are rotated.
 * Buffer control groups using frame buffer objects.
 
 Risks

 
 * Making controls mark their regions is a daunting task, takes quite a while for each control. Lists will be a nightmare and might take lots of time.
 * Buffer control groups using frame buffer objects might not save all to much, need to do some testing regarding this but should hopefully be just a question of moving the code I created for using framebuffer for the entire dirty region solution to the control groups (as a test, need to be better abstracted later).
 * Using OMAP Overlays might be hard in xbmc? Probably low risk and Måns have a sample app called omapfbplay which code could be taken from.
 
 