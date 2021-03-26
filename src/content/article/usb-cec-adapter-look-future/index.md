---
title: "The USB-CEC Adapter is a look into the Future"
date: 2011-10-31T03:00:00Z
author: Team XBMC
---

Sometime around 2006 or 2007, I modded my first Xbox. I admit it, I’m practically a n00b in the realm of XBMC hacking. I didn’t even know what YAMP or Xbox Media Player were until I researched them! I bring this up because since that amazing day I haven’t felt the complete astonishment of a perfect merge of hardware and software until this past weekend, when I connected my TV to my pc via the [Pulse Eight USB-CEC Adapter](https://www.pulse-eight.com/store/products/104-usb-hdmi-cec-adapter.aspx "USB HDMI CEC Adapter by Pulse Eight").

[![The HDMI CEC adapter](/sites/default/files/uploads/cec_adapter-300x243.webp "The HDMI CEC adapter")](/sites/default/files/uploads/cec_adapter.webp)  
 Here we can see the tiny adapter connected on both sides to HDMI cables and a mini-USB cable attached on the end. Those aren't over-sized HDMI cables either. The adapter is REALLY tiny.

First, a bit of back story: Often, people don’t understand why the Team so excitedly awaits the coming of Binary Addons. To put it simply (and probably factually inaccurately), binary addons mark the step in which much of XBMC becomes self-updating.

Since XBMC Atlantis and Babylon, the team has slowly been trying make XBMC more and more modular, so that pieces of XBMC could be updated without the need for a complete reinstall of the system. A highly successful example is our scrapers, which were once built into the system, and are now easily and often updated.

Unfortunately, many pieces of XBMC are simply too integrated to ever fully get pulled out or added onto without the use of an independent program. Likewise, a great deal of functionality can never be added using the simple python addons we rely on today. Thus, the necessity for independent, binary addon programs becomes clear.

With binary addons XBMC could add an entirely new video player (possibly even one that actually plays DRM content). It could add independent Live TV and PVR software. Practically every individual component of XBMC could be updated without needing a new release. And, particularly relevant to this article, the binary addon system could add new libraries that interact with specific pieces of totally unanticipated hardware.

XBMC and Siri, XBMC and Kinect? Sure, all with a simple (at least, simple for the user) addon, without the need of additional helper software like EventGhost.

First out of the gate of exciting new ways to control your entertainment system is the USB-CEC Adapter. While the USB-CEC Adapter’s library is not a binary addon itself, it does act as a demonstration of how XBMC will be able to act with peripheral devices. The USB CEC Adapter doesn’t require lirc, a change to the Windows registry, or a default OSX remote. It operates entirely independently via a separate software library. When binary addons become a reality, any user could add (and update) a software library that allows a completely new piece of hardware to interact more closely with XBMC.

So what does this adapter do?

Simply put, the USB-CEC adapter lets your computer, your TV, and any other CEC compatible hardware “talk” to each other via HDMI cables. In one fell swoop, this adapter has the potential of making Harmony remotes entirely pointless.

For example, I have a Samsung TV that uses AnyNet+, the Samsung-branded version of CEC, to communicate with other devices. Once I set up the adapter, I was able to use my television remote to navigate the XBMC menus, play, pause, and stop video, switch between pictures, videos, and music menus using my colored buttons, and, of course, select various options.

The USB-CEC Adapter is sold by Pulse Eight, but was pretty well entirely developed by a subset of Team XBMC members. Bob van Loosen, maker of the boblight, known in the forums as bobo1on1, did a first schematic cut. The board was layed out by Pulse Eight and then tested externally by [Newbury Electronics](http://www.newburyelectronics.co.uk/ "Newbury Electronics"). Bob then finished the firmware and built a test lib (i.e. a software library of commands that help software and hardware interact). Lars Op den Kamp, known as dushmaniac around here, then developed the official [libCEC](http://libcec.pulse-eight.com/ "libCEC Main Page") library based on Bob’s original work.

Once the adapter is plugged in, XBMC and libCEC work together to delegate which buttons control which aspects of your system. In XBMC, you can alter these controls by visiting system -\> input -\> peripherals -\> CEC adapter. In addition, because the CEC adapter allows XBMC and your computer to control your TV and other peripherals as much as it allows your TV to control XBMC, you are given a host of thoughtful (and power-saving) commands that a Harmony remote could not hope to replicate. For example, when XBMC turns on its grayed-out screensaver, it can turn off your television. And when you turn off your television, XBMC will be able to recognize the change in state and go into sleep mode itself. For a video on some of the simpler functions, check out the bottom of [this page](https://www.pulse-eight.com/store/products/104-usb-hdmi-cec-adapter.aspx "Pulse Eight CEC Page").

[![CEC Adapter settings page](/sites/default/files/uploads/cecadaptersettings.webp "CEC Adapter settings page")](/sites/default/files/uploads/cecadaptersettings.webp)

The CEC Adapter is currently compatible only with the most recent nightly versions of XBMC Pre-Eden. As always, when using pre-release software like Pre-Eden, users may run into odd quirks that can vary from night to night. Once the adapter is installed and working though, everything should be smooth sailing… with one major exception.

It is possible that your peripheral devices (but most importantly, your TV) may not have support for CEC. This lack of support can range from entirely being unable to interact with other devices to mild, device-specific quirks. For example, my Samsung had no problem recognizing and connecting with XBMC, but its firmware separates “receivers” from “players.” So if I want to interact with XBMC using my TV’s remote, I can, but I can’t control the audio in XBMC. This is actually a known issue that is being worked on by the Pulse Eight development team. In fact, the development team has been incredibly helpful and is actively seeking out additional hardware to support. If you have any problems with your specific devices, you are welcome to list the issues in the [Pulse Eight forums](http://forums.pulse-eight.com/default.aspx?g=topics&f=10 "Pulse Eight Forum"), and the team should move fairly quickly to add support. I presume that most recent name brand televisions should all work relatively well over CEC, but looking through the manual of your television would probably not hurt, nor would asking on the Pulse Eight forums. Odds are, your device will use an alternative naming scheme for CEC. For example, Samsung uses Anynet+. See [here](https://en.wikipedia.org/wiki/HDMI "HDMI CEC alternative branding") for a list of alternative trade names.

In the end, I’m sold on the USB-CEC adapter. It really is an awesome device and a great deal cheaper than the equivalent Harmony remote. But more important than that, I’m excited about the future of XBMC and what the CEC adapter and devices like it mean for that future.

With binary addons now slated for Frodo (the release after Eden), we look forward to more and more hardware vendors integrating their devices with XBMC and providing new and innovative methods for creating a more connected home theater system. Until then, feel free to have a go at the USB-CEC adapter and keep an eye out as we bring you additional interesting developments.
