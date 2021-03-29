---
title: "Working with dirty regions"
date: 2011-06-18T04:00:00Z
author: Cory
---

![](/images/blog/soap-300x251.webp "soap")Some of you may remember that back in 2010, Tobias (topfs2) began working on a [GSOC](https://en.wikipedia.org/wiki/Google_Summer_of_Code) project to improve XBMC performance on the [BeagleBoard](https://en.wikipedia.org/wiki/BeagleBoard). Many optimizations came out of this project, but the most ambitious feature was dirty region rendering.

The short of it is that a major chunk of dirty-region rendering has finally been merged into XBMC’s bleeding-edge code, though it is disabled by default while we continue polishing the rough edges. The change produces impressive performance gains on low-powered hardware, and is the groundwork for many changes to come that will further reduce CPU and GPU consumption for all XBMC users.

For those interested in a more detailed explanation, read on.

As you may remember, XBMC started as a project for the original XBOX where things were very different. After the move to desktops and embedded environments, many of the legacy procedures remained. One of these procedures, and a long-time thorn in XBMC’s side has long been its rendering model in which where every frame is rendered by the GPU in its entirety, typically at 60fps. As you can imagine, this is incredibly intensive and very unfriendly to low-power platforms. This is where dirty-region rendering comes in. Thanks to the work of Tobias and Jonathan (jmarshall), XBMC now has the ability to only render what has changed.

### Marking the dirty regions

So how is this accomplished? Let’s use an example.

![](/images/blog/dirty-region-tracking.webp "dirty-region-tracking")

In this screen, the user has moved from the Browse button to Add. Previously, XBMC’s renderer would’ve happily uploaded the entire screen to the GPU for each frame (remember that almost every movement in XBMC comes with an animation, so there’s rarely a single-frame change). So in this example, assuming we’re running at 1080p, we have uploaded an entire 1920×1080 scene 30 times just to change the selection. In addition, each pixel is likely rendered more than once due to the layering of dialogs and blending of translucent textures – in the above case each pixel is rendered around 4 times. That’s roughly 1GB of data sent to the GPU for a half-second animation! But not only that, even after the animation is finished, data continues flowing at the same rate – even if nothing on screen is changing at all!

The obvious solution is to send only the data that have changed, and this is exactly how dirty-regions work. With each pass of the rendering loop, we now have the ability to mark controls as dirty. In the example above, the current and next buttons are marked dirty for the length of their animation. We then create a rectangle that contains all dirty controls and send it out for display. During this animation, the data transfer drops to just 16MB. When the animation is complete, nothing is dirty so nothing is uploaded at all.

Clearly the savings here are massive.

### The impact

For those of you running XBMC on a desktop, other than knowing that your GPU is working much less, you also may notice a drop in CPU usage. For those on low-power x86 machines like IONs, it is quite possible that there will be some speed-ups along with the drop in CPU usage. The most impact, however, will be seen on low-power embedded devices; hardware like the beagle/panda boards is now much more interesting. Additionally, the atv2 and iPad ports should see a nice benefit from this, though there is currently a bug that prevents correct rendering when dirty-region rendering is enabled.

Because we now know which controls are dirty, in the future there are several changes that will come in that reduce CPU usage further. We hope that we can finally reduce XBMC’s idle CPU and GPU utilization to where they should be, especially when it is minimized or has lost focus.

### Try it out

Obviously you will need a [bleeding-edge build](http://mirrors.xbmc.org/nightlies/) to see the new functionality, and the same caveats apply that always do when running unstable builds. Currently there are a few bugs that are blocking dirty-region being enabled by default, so for now you’ll need to explicitly enable it in advancedsettings.xml. See [here](https://kodi.wiki/view/Advancedsettings.xml) for the settings.

If you are interested in seeing what is going on behind the scenes, you can enable the visualizer (used in the example above) that paints a rectangle over marked regions. Use the \ setting from the wiki link to enable.
