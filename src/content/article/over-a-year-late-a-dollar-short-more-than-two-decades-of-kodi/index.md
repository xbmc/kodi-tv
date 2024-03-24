---
title: Over a Year Late, A Dollar Short - More Than Two Decades of Kodi!
date: 2024-03-24T11:45:55.334Z
author: Keith Herrington
tags:
  - Community
featured_image:
  src: /images/blog/xbmc-2003-1080p.webp
  title: XBOX Media Player Home Screen, 2003
  alt: Image of the original XBMP home screen and menu
---
Hi, everyone - I'm Keith, and while I now find myself President of the Kodi Foundation, my initial involvement with Kodi goes way back, as a humble user. Since our 20th anniversary came and went, I've been meaning to write a bit of a look back on how we got here - how *I* got here. This is the story of my journey.

**In the Beginning...**

In 2002, a couple guys saw the potential of being able to watch media on their own terms, through what was a new type of device: a "connected" TV device. They wanted to bring many things you'd traditionally need a computer for to the living room, operating it from the couch without needing a keyboard or mouse, controlling events through what they called a *10 foot interface* because, well, it was an interface you could sit 10 feet away from.

While special-purpose devices already existed, they usually were things like DVD players, and they weren't ‘connected’ to anything else or even had the ability to hook up to a network. Indeed, even the TiVo, one of the most impressive devices of the time, lacked an Ethernet port. One of the creators of Samba, an open source interoperability application to share files between Linux and Windows, eventually figured out how to add a network port to a TiVo; however, even though it was the first mass marketed consumer Linux-based appliance, it was still very much a closed, walled garden.

The Xbox changed all that. In 2001, Microsoft released their first console, leveraging their work on x86 platforms to build out a version of Windows specialized for running games. The familiarity allowed game developers to easily port to the new gaming console; the fact that Microsoft sold them at a loss, knowing they would make it back in game sales, ensured rapid consumer adoption. Luckily for the hackers out there, it was more similar to than different from something the majority were familiar with: the standard personal computer running Windows. Very quickly, folks like Bunnie figured out ways around the security, achieving the holy grail in record time for a console: the ability to run untrusted code.

Long before we had the Raspberry Pi, OpenWrt routers and other tinkerer's dream "open" environments, Xbox hacking quickly became the fastest route to general-purpose, connected computing. The availability of powerful, affordable, standardized hardware enabled an entire community of hackers wanting to break out of Microsoft’s walled garden and run whatever code they wanted on their Xbox. Emulation, or the ability to trick old games such as NES and Sega Genesis into believing the Xbox is the same hardware, was one of the first big use cases, since we now had something powerful enough that hooked up to a regular TV and offered a standard controller.

**XBMC is Born**

While many folk worked on getting Linux and various other things running, the project that attracted me the most was Xbox Media Player. This brought the ability to play compressed media to the Xbox: up until this point, only a computer could play these files, and if you were one of the those super early adopters who had network cables strung across your house, you could now even stream it over the network or the Internet (which was definitely not fast enough for video… yet!).

[XBMP](https://sourceforge.net/projects/xbplayer/) came out in 2002 as the convergence of two separate closed source apps natively written with the Microsoft Xbox Development Kit by **d7o3g4q** (a.k.a. duo) and **RUNTiME**. As many at the time pointed out, since it was leveraging GPL code, it likely needed to be open source. At the same time, another developer - **Frodo** - had created [YAMP](https://sourceforge.net/projects/xbyamp/) as ‘Yet Another Media Player’; when this project also converged at the end of 2002,[ Xbox Media Center](https://sourceforge.net/projects/xbmc/), or XBMC, was born. While the initial beta was closed source, the developers quickly open sourced it and it’s been open source ever since.

![XBMC Home Screen, 2007](/images/blog/xbmc-2007-1080p.webp "Image of the 2007 XBMC home screen and menu")

(You can even have a read of the [original manual](https://kodi.tv/images/xbmp2.4manual.english.pdf) if you like!)

I was a dedicated Xbox user at the time, for everything besides gaming. I diligently connected to #xbins on EFnet to find the new binary release and watched in awe the quick iteration these folks were doing, adding so many incredible features, even supporting things like CD+G for Karaoke. You have to realise how groundbreaking a library mode was, allowing you to peruse your stored media collection while everyone else - even Netflix - was still renting DVDs by post or picking them up in strip mall stores. 

The developers themselves deserve a ton of recognition: their tireless pursuit of the best media experience, one that was infinitely customizable and powerful and something they were proud of. While most have moved on to other things, a few, like **spiff**, remain around since those early days, and are still here to let others know why certain things are why they are and even to still occasionally contribute code.

**Success Has Many Parents**

But these folks did not do this in a vacuum: as the saying goes, "it takes a village". [FFmpeg](https://ffmpeg.org), for example, being the Internet’s Swiss Army knife for video, handles so much of the core rendering and playback. In developer parlance, we call these ‘dependencies’ but I prefer to think of these types of library as the backbone. Without the ability to stand on the shoulder of these mammoth libraries , XBMC devs would never have been able to focus so much on the skinning and user experience. While XBMC was initially heavily based on [mplayer](http://www.mplayerhq.hu), which is now known as [mpv](https://mpv.io), it has evolved into being closely tied to FFmpeg. 

![XBMC Home Screen, 2009](/images/blog/xbmc-2009-1080p.webp "Image of the 2009 XBMC home screen and menu")

There are also countless other contributors - to the code, artwork, forum, and beyond - who absolutely have to be acknowledged. Today's Kodi wouldn't be what it is without the add-on ecosystem, translators, community moderators, volunteer artists, system admins, database admins, and many more.

And while devs have came and gone, the project has lived on, continuing to expand to every major platform it possibly can, even to a couple of smart TV ones now. Highly unusual - maybe unique - as an open source application that started on a Microsoft product before spreading further to so many other, disparate platforms, Kodi has now even come full circle to be back in the [Xbox Store](https://apps.microsoft.com/detail/9NBLGGH4T892?hl=en-US&gl=US) (although, somewhat ironically, Microsoft platforms have become increasingly challenging for us because we lack current developer knowledge). We still try to bring all the functionality we can to every platform we can: you've got a weird mod file, from your demoscene days? Still got a pile of FLVs? We got you. What about wanting to stream Widevine-enabled Internet content with an open source project? Yeah, we see you and we care.

**So, Here We Are**

One of the parts that some don’t realize is since our initial development, we’ve always been a monolithic application, meaning the entire codebase must be ported to the desired platform. I’ve said we’re the ‘largest open source multimedia project’ for years, half jokingly, but I mean this by literal lines of code that takes to run it.

![XBMC Home Screen, 2012](/images/blog/xbmc-2012-1080p.webp "Image of the 2012 XBMC home screen and menu")

And we’ve stayed volunteer. As a consumer-oriented open source project, no company has ever sponsored more than a port or a feature; indeed, since the nonprofit foundation behind it isn’t setup to be engaged, at worst companies have simply given some money to an individual to work on a feature. Even this is definitely not the norm: 99.9% of Kodi has been built out of passion and love for multimedia and the desire to have an open source platform for which people can decide the look and feel and customize to their liking, in both hardware and software terms. 

I do have to call out our longest and biggest sponsor/partner has been [Flirc](https://flirc.tv), their support with this project has been unwavering since the initial case.

This is truly software on your own terms, and to me, is the essence of open source.

**Wrapping it All Up**

Sorry this became so wordy, but I’ve been wanting to write a ’20 year blog post’ for so long, and it’s now been nearly 22 years since XBMP binaries first became available. Time flies. I hope this blog helped you stop for a moment and marvel at how far we’ve came, even if you’re only been a user since we’ve been called Kodi: the developers see themselves in you and you're the reason why they've kept hacking on this project for so long.

So, let’s raise our glasses for over 20 years, and, yes, we still have MANY lines of original, first generation code! We have to thank everyone who’s been involved and supported us: everyone who submitted a pull request or posted a message on the forum, all the devs who have tirelessly worked on the ‘dependency’ libraries that mean so much to us, and especially the official Team XBMC and Kodi Foundation developers. You folks, who continue to iterate, tweak and build the future of this platform, enable millions to consume media without having to care about how it works and why.

![Kodi Home Screen, 2014](/images/blog/kodi-2014-1080p.webp "Image of the 2014 Kodi home screen and menu")

And while you’re here, we made a T-shirt to commemorate this moment! It (hopefully) has every team member on it. As we said, we’re volunteers, and the only money our nonprofit receives is thru donations, merchandise and the only licensed product we’ve ever been a part of, Flirc’s Kodi Raspberry Pi case.

Take your pick from:

* [T-shirt dark](https://kodi-t-shirt-store.creator-spring.com/listing/kodi-nexus-dark?product=46&variation=2752)
* [T-shirt light](https://kodi-t-shirt-store.creator-spring.com/listing/kodi-nexus-light?product=46&variation=2750)
* [Pillow](https://kodi-t-shirt-store.creator-spring.com/listing/kodi-nexus-light?product=585)

.. or the whole store: https://kodi-t-shirt-store.creator-spring.com/

Please, purchase something, and help us to keep thriving for the next 20 years; I personally plan our Devcons, and we might not be able to get together in 2025 without help from viewers like you, so anything you can do to help, we appreciate you.

Oh, and while I'm asking: if anyone knows any non profit open source lawyers that are prepared to help us, send them our way! Legal-at-kodi dot tv.

Thanks again. I have no idea what the next 20 years will bring, or whether I will personally still be involved, but, for as long as this project is still needed, I know we'll all try our best to support it.

Keith Herrington
President, Kodi Foundation

*(There's some further history [here](https://kodi.wiki/view/History_of_Kodi) and [here](https://kodi.tv/article/10-years-xbmc/), if you're interested).*