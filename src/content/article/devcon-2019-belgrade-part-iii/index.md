---
title: 'DevCon 2019 - Belgrade - Part III'
date: 2019-10-11T00:15:57Z
author: Prof Yaffle
featured_image:
  src: /images/blog/Church of Saint Sava
  title: 'Church of Saint Sava, Belgrade -  Creative Commons Attribution 2.0 Generic - https://commons.wikimedia.org/wiki/File:Church_of_Saint_Sava,_the_largest_Orthodox_church_in_the_world_(13810407793).jpg'
  alt: 'Church of Saint Sava, Belgrade -  Creative Commons Attribution 2.0 Generic - https://commons.wikimedia.org/wiki/File:Church_of_Saint_Sava,_the_largest_Orthodox_church_in_the_world_(13810407793).jpg'
---
So, here we are, the third and final day of DevCon 2019. It's likely to be a short list of topics this morning before some people head home while those who remain use the time together to write some fabulous code. So, let's get straight to business.

  

 We kicked off with **kwiboo** and **jernej** (from the LibreELEC team) talking about **HDR support on Linux**. This goes way beyond Kodi, as it's kernel-level work to improve GPU support; this then ripples through the operating system before finding its way to Kodi via V4L2 and ffmpeg. We've been working mostly with the Intel team to complete support for their chipset, but there's also basic work in place for Allwinner, Amlogic and Rockchip. This means that we're well on the way to having a common implementation across all major chipsets that are likely to be running Linux. The industry-wide, concerted focus on V4L2 (driven significantly by Google/ChromeOS) also means that we can finally strip away large chunks of proprietary, vendor-specific code as all of these chipsets move to a common, standardised API model. We've grudgingly tolerated these for a long time, but they make maintaining and updating functionality so much more difficult when you need to consider dozens of different code paths, so we'll be glad to see the back of them.

 A couple of topics that took some time but didn't really make it to the final sessions, so perhaps we'll come back to them later: **roles and responsibilities** within the Board, the overall **Kodi architecture** and how it could be improved, potential for **web browser support** in Kodi. Just headings for the moment, so don't get too excited.

 Following this, we spent a chunk of time on **introspective activities**: admin rights, system and application access, social media access, password lockers, two-factor authentication, and similar. We also talked about Team matters: new members, absent friends, acknowledgements. Maybe not really interesting to the outside world, but still stuff we need to worry about if we're to keep everything running smoothly.

 And now it's time for what a room full of developers (*"a segfault of programmers", perhaps?*) with laptops does naturally. All around me, I can see screens scrolling as code compiles, the brightly-coloured syntax highlighting of IDEs, the transient flash of windows and terminal prompts as people cycle between them. The mob is talking animatedly about CODECs, rendering planes, operating systems, APIs, kernel calls. In the distance, a heated debate begins about the relative merits of Linux distros. There's a constant murmur of noise, the combination of conversation, keyboard taps and error sounds. The mood for the rest of the day is set... let's hope no-one breaks anything important... ¯\\_(ツ)\_/¯

 So, that's it for this year. Thanks for listening, and I hope you've found these posts informative. More than that, though, thanks for continuing to support Kodi!

 All the best,

 Team Kodi.

 
