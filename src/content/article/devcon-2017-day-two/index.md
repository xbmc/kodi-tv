---
title: 'Devcon 2017 - Day Two'
date: 2017-05-05T22:35:24Z
author: Prof Yaffle
featured_image:
  src: /images/blog/wetek_play_front.jpg
  title: ''
  alt: ''
---
Day two dawns on what is a much better day in now-sunny Portugal. The team has emerged, blinking slowly in the unfamiliar daylight - copious amounts of espresso have been drunk to neutralise the effects of all those craft beers - and we're off once again. This is also probably an opportune time to publicly say thank you to **Wetek**, who joined us last night and whose generous sponsorship has helped to make this DevCon happen.

 **Razze** opened day two with a presentation of the **translation/internationalisation (i18n) process** in Kodi, specifically around the workflow required as strings move back and forth to Transifex. 

 We then moved on to one of our perennial topics: **piracy boxes** and how we can better distance ourselves from them. What you do with Kodi remains your business, but people will be well aware of the ongoing battle we have to defend our name, and break the popular link between Kodi, sub-standard hardware, and unlawful streaming.

 Next up was **Paxxi** with a presentation around the **core Kodi architecture** (form and function within the code) and how that could be improved. As examples, there are several areas in which code could be compartmentalised, or where platform abstraction could be made cleaner, as well as possible enhancements to inter-process messaging queuing. Taken together with other changes, these would give a much clearer model of "this code, this function, this way of talking to other threads". Paxxi also covered planned changes to how we handle threading within Kodi - particularly within the user interface - which would make the whole application feel much more responsive.

 We then moved on to **platform status** - where are we on the different operating systems we support.

 
 * First on was **Memphiz** with **all things Apple**. iOS - iTunes, jailbreaking, Cydia, Apple's end-of-support for 32-bit applications, TVOS; MacOS/OSX - hardware decoding, GPU support on older devices.  
 
 * **Koying** (our long-standing Android developer) then covered **Android**: decryption, OS release support (especially as we move to Leia).  
 
 * **Linux** was the next in line, with **Lrusak** taking the stage. Linux, by its nature, is a very fragmented platform in terms of hardware support, and that's a challenge for e.g. video decoding APIs; it's the same issue for compositors and window managers when it comes to the presentation layer. We need to simplify how we deal with all the different SoCs out there because of the complexity it's driving into our code. The other major change we're seeing is the acceptance of CEC into the Linux kernel, which will remove our dependency on libcec at some point in the future.  
 
 * **Paxxi** then rounded this section off with **Windows**: the desktop bridge/Windows Store version of Kodi, challenges around porting to UWP (it's effectively like a new OS), 64-bit (x86-64) support and the subsequent end-of-life of 32-bit.
 
 Next on, a discussion about **attitude and communications** within the team and with the community, courtesy of **Lrusak**. We're well aware that there's a fine line between "heated debate" and "abuse" sometimes, and the Internet can bring out the worst in people (*never read the bottom of the the Internet*, and all that). Similarly, people can be terse when quickly bashing in a quick response to something, especially on a mobile device; this can easily cause unintentional offence, which in turn reflects badly on everyone involved.

 What's meant as humour or sarcasm can easily be understood as a snide, unhelpful remark; too much of this, and you're well on your way to creating a hostile culture. Kodi is not a company with employees and HR rules that we can enforce, but is in no way the worst offender in the FOSS community when it comes to this behaviour. However, we also know that we're not the best either. We can and will improve.

 Changing gear a little back to more technical matters, **Chewitt** then took us through an **update on LibreELEC**: project principles, new relationships/contacts, active installation base, platforms in use, recent developments, future roadmap (especially security improvements and platform specifics, particularly how to deal with the increasing variations of ARM SoCs), project funding, project governance.

 **Kwiboo**  then took the stage to talk about ongoing work to implement LibreELEC on the **Tinker Board** - a Rockchip-based alternative to the Raspberry Pi that was recently launched by ASUS. By some measures, it's twice as fast as the Pi, but maintains the same form factor and GPIO layout. While it was launched as very much a "plaything" (hence the name), and lacks the out-of-the-box software of the Pi, the implementation of LibreELEC has gone a long way to make it a workable HTPC platform. The project has generated much platform-specific work on various application and library code which now need to be merged back upstream.

 **Phil65** talked about **skin development**, specifically the KodiDevKit plugin for Sublime Text 3 (ST3) and how this can be used to streamline the development process - live information in the editor regarding what state Kodi is in, or what images it has loaded and processed, for example.

 Nearing the end of the day, **Natethomas** gave an update on this year's **Google Summer of Code** (GSoC) process. We want to take part, and we want to "give back" by helping the students with their skills (as well as getting the benefit of their input, of course). However, it isn't necessarily a trival task, and we need our development team to be more active as mentors - both during the development process, and afterwards, as we mop up and document what was achieved. We have our projects identified, so let's embrace them.

 Finally, to close the day, **Keith** covered **Business Development and Conferences**. The Kodi team has become much more active on the conference circuit, and we've had people attend many events over the past year: CES, VideoLAN Dev Days, Open Source Leadership Summit, Embedded Linux Conference (both Europe and North America) - and we have a couple of people attending Microsoft Build later this week. They're very effective ways to make new contacts, interact with peers in the FOSS/multimedia community, and raise the project's profile. These events have given us access to folks like Amazon, who have made huge strides in taking down the "fully loaded" boxes; eBay is lagging, but we're making slow progress there as well. On the BusDev side, we're still really keen to get official content owners on board, but that is heavily predicated on being able to protect the content rights, so there remains much to do in this space.

 A long and productive day, followed by some more team building - this time, with the Wetek guys, did I mention them enough? :) - and then on to another local watering hole... 

 PS We also broke Jenkins. Badly. Oops. No nightlies for a few days while we \ restore. Sorry about that.

 