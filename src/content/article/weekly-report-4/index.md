---
title: 'Weekly report 4'
date: 2010-06-20T04:00:00Z
author: Team XBMC
featured_image: ""
---
After discussion with my mentor we decided to not use the EVAS model suggested in my last weekly report. While it might have worked it would have taken to much time to realize which is a bad idea due to the limited time of GSoC. Hence I have started altering the guilib to do the actual event based and dirty region creation and actually with rather great results with little work!

 Status

 
 * Initial split of rendering methods in control to one processing stage and one rendering stage. Most controls seems to work except the containers which I am yet to fully understand ![:)](/sites/default/files/uploads/icon_smile.gif)
 * Initial calculation of dirty regions based on what skinners provide. See figure 1. Looking at the figure we can see that even the simple generation of render regions works reasonably well!
 * Controls mark a dirty region if their animation transformation has changed. This works surprisingly well on control groups but much more can change than just the animation transformation (moving in a list etc.)
 * Since the code for this is still crude I haven’t commited it. I have however added it to [ticket #﻿9448](http://trac.xbmc.org/ticket/9448) so it can be discussed.
 
 Plan

 
 * Fix up the processing stage in the containers
 * Allow controls to mark dirty regions based on other changes than animation
 * While processing is done separate from rendering its still done every frame. Create a process scheduling and rendering scheduling as a beginning to event based rendering / updating.
 * The generated dirty regions does not take fully confine rotated controls or controls with altered perspective. This must be done otherwise coverflow or other 3D type of effects cannot be used in skinning.
 
 Risks

 
 * Calculating dirty regions in lists seems to be hard, say just one item in the list changes without the entire list changing. I doubt it won’t be solvable and alternatively just marking the entire list should still be an ok workaround for now.
 
 ![Possible dirty regions in confluence settings screen](/sites/default/files/uploads/PossibleDirtyRegionSettings.png)  
 Figure 1 – Controls possible dirty regions*

 *)

 The colors reflect the type of the control, mainly to ease viewing.

 
 * Red overlay – Button controls
 * Blue overlay - Image controls
 * Green overlay - Labels
 * Light green overlay - Other
 
 