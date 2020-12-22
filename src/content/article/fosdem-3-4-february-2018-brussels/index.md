---
title: 'FOSDEM 3 &amp; 4 February 2018 - Brussels '
date: 2018-02-01T12:16:20Z
author: Martijn Kaijser
featured_image: /images/blog/fosdem2018-kodi.png
---
FOSDEM is a free event for software developers to meet, share ideas and collaborate.

 Every year, thousands of developers of free and open source software from all over the world gather at the event in Brussels.

 No registration necessary.

  FOSDEM 2018 - Presentations
---------------------------

 Below are the three presentations listed that our three Team Mebers will be holding on Saturday 3 February. Should you whish to attent better make sure you are on time to have a seat. Full is full!

  

 **3 February 2018: Wayland client basics - How to natively speak Wayland in your application, from the bottom up**

 Wayland, the next-generation display server protocol, is slowly but surely taking over the Linux desktop. Preexisting and new applications will have to adapt to this new environment that is fundamentally different from how things used to work on X11 for a long time. This talk gives you the basics of programming native Wayland clients in 2018: the Wayland architecture and protocol world including recent developments, what you can and cannot do, the steps to get something visible on the screen, and why you might not want to do a native application after all.

 The presentation is intended to give a conceptual overview of things that any Wayland client programmer will have to look at. The architecture and design of Wayland will be shown and compared to X11. However, rather than porting applications from X11 to Wayland, the focus here will be on building native Wayland programs from the ground up. The Wayland ecosystem and relevant compositors will be described and suggestions for testing will be given. Furthermore, the process of getting a surface to the compositor for drawing it on the screen will be explained and all basic protocols needed for this such as the global registry, shared memory, surfaces, and shell surfaces including xdgwmbase will be introduced.

 The talk will not go too deeply into programming specifics and the libwayland C API, but some common pitfalls and best practices will be mentioned.

 Speaker: Philipp Kerling  
Location: K.4.401  
Time: 18:05 - 18:30  
Event link: [click](https://archive.fosdem.org/2018/schedule/event/wayland_client/)

  

  **3 February 2018: Kodi v18 features and improvements - What we've been busy with**

 A short walk through of what we have been doing past year since v17 release and what we are still planning to do.

 During the time we worked towards the final release of v17 some of our developers already took a head start for v18. During past year developers in and outside of the Kodi Team have been steadily refactoring and working on new features that will be included in the upcoming V18. Various parts have already been published in articles on our website though we will also sum up some parts that are in the pipe line. In total will try to do a brief rundown on what we hope will be included.

 Speaker: Martijn Kaijser  
Location: H.1309  
Time: 12:30 - 12:55  
Event link: [click](https://archive.fosdem.org/2018/schedule/event/om_kodi/)

  

  **3 Februrary 2018: Kodi and Embedded Linux - Moving Towards Common Windowing and Video Acceleration**

 In a world where a new single board computer (SBC) comes out every month it has become impossible to maintain all the proprietary methods that are used with the boards. A movement towards a unified windowing method and unified decoding methods has started. For Kodi version 18 a Direct Rendering Manager / Kernel Mode Setting (DRM/KMS) windowing method has been implemented. This allows any device that has a Linux kernel DRM driver to run kodi. The next step is video decoding, where each SBC has it's own specific decoder and software to run it. The Linux kernel implements a Video4Linux2 (V4L2) subsystem where drivers can register a decoder to be used under a common API. Kodi needs to be able to use a zero-copy path in order to display these decoded frames on the screen. For this to happen we need to use DRM-PRIME buffer sharing and specific EGL extensions such as EGLEXTimagedmabuf\_import to present the frames. All this together will allow Kodi 18 to run on a vast variety of SBCs that have DRM driver and a V4L2 driver available.

 In order for Kodi to present decoded frames along with the GUI multiple planes have to be used. To use multiple planes an atomic DRM system has to be used. Atomic DRM allows control over each page flip and what is presented by each plane within one atomic commit. In Kodi this allows showing the Kodi GUI in the overlay plane and the decoded video frames in the primary plane. The decoded video frames exit the decoder in a semi-planar YUV format called NV12 (other formats may be possible as well). These NV12 frames can be presented directly in the primary plane and the DRM subsystem handles things like scaling and rotation.

 Presenting directly to a DRM plane has some downsides that need to be addressed. Depending on the DRM driver things like scaling and deinterlacing may not be supported. In these cases a separate rendering method has to be used. This other rendering method is entirely done in OpenGLES using the EGL extension EGLEXTimagedmabuf\_import. This method allows directly importing the NV12 video frame into OpenGLES and manipulation can be done from there via GLSL shaders. Kodi already implements shaders that do the YUV to RGB conversion needed to output the image to the display. These shaders also implement scaling via various methods (lanczos, spline36, etc) and deinterlacing via bobbing.

 All this together will allow SBCs such as NXP i.MX6, Allwinner H3, Rockchip 3288 and 3328, Qualcomm Dragonboard 410c, and many more to work with Kodi without implementing any new methods. This work is underway is largely merged into Kodi master already.

 Speaker: Lukas Rusak  
Location: K.4.401  
Time: 16:00 - 16:50  
Event link: [click](https://archive.fosdem.org/2018/schedule/event/kodi/)

  

  

 