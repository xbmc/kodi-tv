---
title: 'Weekly report 1'
date: 2010-05-31T04:00:00Z
author: Team XBMC
featured_image: ""
---
Finally the GSoC have begun and while I have been plauged with exams this week I have made some accomplishments. It is sad but next week will also be filled with exams but hopefully I will find some time during the weekend. First of I planned to fix up and use Ångström but since I just recieved kernel panics and had significant problems with the g\_ether I decided to first do an ubuntu image as a test (I’m much more comfortable in Ubuntu) and when that worked I wanted to continue creating the Ångström image.

 Status

 
 * Have created an Ubuntu image which has all dependencies needed to build XBMC (except SGX for now). The most problematic part with ubuntu was that the usbnetwork did not want to work. Thanks to DanaG in #beagle I finally got it working by adding g\_ether.use\_eem=0 as a boot argument, not sure if Ångström needs this or if its just ubuntu related but I have added it to the beaglebeginners wiki.
 * Thanks to [maltanar](http://maltanar.blogspot.com/2010/05/angstrom-running-on-beagle.html) who discovered a cure for the kernel panics in Ångström I have atleast a running image I can continue to work on.
 * A very helpful person, Phaeodaria, in #xbmc-arm suggested a possible solution for the dirty region problem by the use of a stencil buffer﻿﻿. I think this is something we can use to relieve the CPU of the stress to generate the dirty regions and as an added bonus with stencil buffer we could probably get an even more exact image of whats needed to be rendered (less wasted cycles). Phaeodaria is currently testing how much cycles generating a stencil buffer will take.
 * Also Phaeodaria have found a very interesting flag in EGL called ﻿﻿EGL\_BUFFER\_PRESERVED which would relieve the stress of using a framebuffer object and instead assume the backbuffer holding the last render. The obvious backside with this is that the driver cannot do a simple flip of the buffers but instead need to copy it, however its unlikely that its slower than the framebuffer idea. Also a downside with this is that its EGL specific, thus nothing the desktop segment can use and they likely will have to do the framebuffer idea (or omit the dirty region rendering all together). Benefit with using a framebuffer is that we can manipulate it with shaders, making it possible to do post processing and effects like blur, saturation and any color alteration really. Ofcourse seeing as the devices not being able to use this due to no framebuffer are the devices which are unlikely to have the power to do the effect, its probably no downside.
 * Since XBMC uses a recursive build and configure the cross compilation to arm currently doesn’t work. And according to koen in #beagle scratchbox is alot of trouble for ångström. Thus I will probably build XBMC directly in Ånsgröm on the beagle board, however slow it might be. Thankfully most of the proposed solutions can probably be made for the desktop GL version, tested and with some adjustments implemented for GLES and finally compiled and tested on the beagleboard. This will allow for the bigger changes to be done with a fast workstation and a fast compile while when the rough parts are done it can be compiled and tried on the beagleboard. Hopefully this won’t make to serious impact on the development speed.
 
 Plan

 
 * Finalize the Ångström image.
 * Build XBMC on the BeagleBoard.
 * Read up on how the eventbased and dirty region solutions are done Android, EVAS and Java Swing (All of these are very portable and seems simple).
 * Try to create a proposition for an improved font rendering that will be faster (mostly due to being buffered).
 
 Risks

 
 * Meeting the dependencies for XBMC in Ångström might be hard, XBMC really is a big app with way to much dependencies with no easy way to scale it down. Solution would be to use Ubuntu to test and compile and continue to work on the Ångström image as much as possible.
 * If Ångström will be a problem Ubuntu might be used, then a risk for Ubuntu might be that SGX will be problematic to install. Atleast the latest version is said to not work in ubuntu.
 * Little gain from buffered font rendering. Before any implementation is done its vital to try and see if it will be beneficial, sandbox testing with alpha blended quads vs a fbo of same boxes yielded a significant FPS increase though.
 
 