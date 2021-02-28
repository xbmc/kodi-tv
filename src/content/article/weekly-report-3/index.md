---
title: 'Weekly report 3'
date: 2010-06-13T04:00:00Z
author: Team XBMC
---
Since I’ve been without computer the last week the status update will be slim.

 Status

 
 * Committed the initial patches to get XBMC on Ångström building
 * Decided on an abstracted rendering model which works like EVAS. Basically guilib will add drawable elements to the render system. When an animation occurs or the control get hidden the guilib will manipulate the needed elements and the rendering system will handle any needed rendering. This differs in a small way how its done currently were each control is actually rendering its needed elements were the new solution will make this happen outside control space. This is beneficial because it leaves any optimization outside XBMC, and moves it in the new abstracted rendering system. Since there are roughly 20 controls its much simpler to leave the optimizations out of them and move it inside the minimal amount, 5 or so, of fundamental elements needed for the guilib to be rendered. Also it will be trivial to introduce a new element that controls could use if the old ones does not provide optimizations enough. One example of this is the fading between two images, this can be done much faster if you blend using a shader between the two images and then blend created fragment to the back buffer instead of blending the two images separately into the back buffer.
 
 Plan

 
 * Finalize at the higher hierarchy of the new rendering system, thus finalizing the API that will be used by XBMC’s guilib
 * Post the API somewhere for discussion
 * Move some of the current code of rendering into the new rendering system
 
 Risks

 
 * Moving to the new rendering system might bump some of the needed requirements to render the gui, but this is more of a risk after GSoC and outside embedded since it has the needed requirements.
 * Moving the current code might be harder than thought
 
 