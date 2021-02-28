---
title: 'Devcon 2018 - Sofia - Part III'
date: 2018-09-29T22:21:58Z
author: Prof Yaffle
featured_image:
  src: /images/blog/kodi-logo-2.jpg
  title: ''
  alt: ''
---
One more day, with enough content to warrant a separate blog post - partly because people are still here for the most part, partly because of new stuff that's been added to the agenda as we've gone along, and partly because of the topics that, despite our best efforts, managed to escape from previous days.

 We began the day with a broad **retrospective** of the past year: for each person, what went well in the past twelve months, what could have been improved. As you might expect, we covered far too many topics to cover here, spanning as they did nearly every aspect of people, process and technology. However, it was a useful conversation that gave time to both be proud of the positive while reflecting on where we still need to focus more effort. We'll work through and digest everything that was said and perhaps come back to it as a separate, future post, as the conversation will help shape where we go next.

 Next up, **lrusak** took us through his experiences and presentation at both **FOSDEM (Brussels)** and **Linaro Connect (Vancouver)** this year. His talk was mainly aimed at shifting from vendor-specific or closed code (kernel and blob dependencies) to more universal, open source methods, specifically around windowing and rendering on embedded Linux (SoC) platforms such as Allwinner, Broadcom and Qualcomm. As well as simplifying our core code and removing the need for maintenance and use of platform-specific patches, this also has the potential to deliver performance advantages and broader platform coverage. Overall, there are some real benefits once we can tap into specific libraries via standardised kernel calls rather than depend on userspace code that's in turn reliant on monolithic, all-purpose blobs that may include a whole load of code that simply isn't needed for Kodi.

 We discussed **Kodi "remixes"** - forks, feature branches, JeOS distributions, and similar variations - and how they link back to our trademark policy and support overheads: what's allowed, what can we tolerate, what can we manage, how does it appear to our users. This is an area full of opinion and interpretation, rapidly wandering into genuine legal implications. While this is something we really don't want to have to worry about, it's something we must keep aware of, as historical experience has demonstrated. As such, we'll be revisiting aspects of our practices to ensure that we protect Kodi while, at the same time, embracing the broader community where we can see that there's positive intent and genuine common benefit.

 **lrusak** then returned to the stage to give an **update on LibreELEC**. That team continues to streamline everything, reducing the maintenance overhead, slimming down the underlying OS overhead, and aligning the user experience more and more closely with core Kodi. He discussed some potential architectural changes that flow out of this goal: future platform support, what libraries could be removed and why (no longer supported or just not needed), what could perhaps be moved upstream so that it becomes part of Kodi and thus not some separate facet of LibreELEC.

 And that's it for day three. Thanks to everyone for their participation, and thanks to the entire community for making Kodi what it is.

 One final comment as we close: we really need to offer very many thanks to **Roza Zdravkova**, who's been invaluable as our local eyes throughout this DevCon. From helping with transport to pointing out where to go and what to do, she was fundamental to the event's success. So, "thank you" from the team!

 So... that's it for DevCon 2018. Time to turn to a bit of hacking and development before all going our separate ways once more.

 