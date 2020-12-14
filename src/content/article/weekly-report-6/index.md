---
title: 'Weekly report 6'
date: 2010-07-04T04:00:00Z
author: Team XBMC
featured_image: ""
---
Last week have been a busy week indeed and I have focused on getting the dirty region based rendering to work. I am glad I followed my mentor’s advice and did dirty region before moving to an event based rendering, especially considering that when dirty region rendering works we have gotten an event based rendering, but not a an event based processing. So while CPU could be limited further this should show if its worth doing.

 Status

 
 * Many of the more common controls works and produce fully workable dirty regions, amongst these are MultiImage, Image, Label, Button, Groups (Windows and Dialogs). There are a lot of other controls that work somewhat with some artifacts. [Here](https://www.youtube.com/watch?v=cO0vzNGz8vc) is a video of the working controls and there respective dirty regions.
 * As can be seen in this [video](https://www.youtube.com/watch?v=KjhjFTUjthk) were I have enabled and only render what changes on screen on my workstation, Confluence is almost fully usable. Note that my workstation thankfully copy backbuffer to frontbuffer and as such I can assume the backbuffer to be defined after the flip, sadly this is nonstandard and why I have no video from the beagle board yet.
 * Experimented with a more scalable algorithm for handling the dirty regions after they have been generated [here](/what-to-do-when-you-have-the-dirty-regions).
 
 Plan

 
 * Continue to fixup controls to create workable dirty regions.
 * While the dirty regions are created and the clipping works I need to make the backbuffer defined on the BeagleBoard to have it working without flicker. This is a vital goal for this week. We have 3 options, either define the backbuffer via EGL\_BUFFER\_PRESERVE. Second option is to render the entire interface to a framebuffer object then before flip we render the framebuffer object to the backbuffer. Third option is to render as usual to the backbuffer and before flip we copy the content of the backbuffer to a texture and on the start of the scene we render that texture to the backbuffer. The first option is preferable and I have added code for it and egl seems to state it should be preserved my initial tests on the beagleboard indicates it not being preserved. Second option is probably the most useful on non-embedded since it limits the needed fragment operations more but bump the required GL driver abit (not of concern in GSoC). For this to be an option on the BeagleBoard I need to make sure its ok to create 720p framebuffer objects but I would assume so since max texture size is 2048×2048. The third is more of a fallback as its a bit wasteful but is useful on older graphics driver in the desktop segment, although I would guess copy the frontbuffer to the backbuffer without the need of an intermediate texture through glCopy is more proper.
 
 Risks

 
 * The biggest problem for next week will be getting a defined backbuffer and is essential for the success of the project.
 * A risk worth mentioning is that the dirty regions might not be as beneficial for the beagleboard as anticipated, this is doubtful however since SGX seems to have software fallbacks on certain rendering stages. So any limitation of the area should bring down CPU usage. My workstation had a significant lighter CPU load with dirty region rendering enabled, on average it was around half. Note that since not all controls are working, as an example RSS control, these numbers should be taken lightly.
 
 