---
title: "Kodi Community - May 2015"
date: 2015-05-05T04:00:00Z
author: Nathan Betzen
featured_image:
  src: /images/blog/Screenshot_2015-05-07-21-04-46.webp
  title: "Screenshot_2015-05-07-21-04-46"
  alt: "Screenshot_2015-05-07-21-04-46"
---

Exciting Google Summer of Code projects, major developments in the codebase that need testing, and even a Kickstarter are just a few of the many items that have occurred since our last community roundup in January. Let’s get updating.

## Official Android Remote

With the last community update in January, we mentioned a desire for someone to step up and help maintain an official Kodi Remote for Android. Developer syncd has stepped forward and offered up Kore as an updated, open source option for users looking for Android remote control software, or even as a base for aspiring devs looking to make their own offering.

[![PlayStore_Kore](/images/blog/PlayStore_Kore.webp)](https://play.google.com/store/apps/details?id=org.xbmc.kore)

We are well aware that there are other closed source Android remotes out there. The goal of the Kore remote project is not to drive out or replace other devs and remotes, but rather to welcome new ones in by providing an open source base to work with.

## Google Summer of Code

This year was an incredibly difficult one for deciding which projects to choose. We had enough mentors for 6 projects, but were only provided with 4 slots. Many years, this works fine, and it’s easy to narrow everything down. This year, there were so many great submissions that we ultimately took until the very last day to decide on the final four. There was even a period where we considered asking users to crowdsource fund the other two projects, but we ultimately deemed it too uncertain as to whether such an idea would get funded or would even be acceptable to the students’ schools. We decided not to get anyone’s hopes up only to have them dashed, and instead focus on the four projects we thought had the best combination of exciting/useful idea and feasibility.

With all that said, here are the four projects we chose:

[**Cross-platform room correction for Kodi**](https://forum.kodi.tv/showthread.php?tid=219069): The only project submitted by a Kodi Team member that was accepted is one designed specifically for the audiophiles out there. While Kodi is currently able to bitstream to a hardware A/V Receiver that can often measure and deal with the ambiance of the room, team member Achim and others have been working to make the typical hardware AVR completely unnecessary. Significant work has already gone into integrating Digital Signal Processing features into ActiveAE, Kodi’s integrated audio engine. The next step in this process is… well, let’s let Achim explain it.

One focus of this proposal is to integrate external input sources into ActiveAE. With this new extension point it will be possible to connect a microphone to a Kodi capable device. This allows you to digitally optimize your listening experience while sitting on your favorite listening position e.g. your couch or your armchair, by compensating the influence of the interior room factors. This feature is widely known as digital room correction or digital room equalization.

For digital room correction, three other implementation components are required. One is the implementation of a convolution engine to combine and compute the audio signal with a calculated room correction filter. At the time of writing a first prototype addon adsp.xconvolver exists, this addon was written by me in order to evaluate the technical feasibility of this project. The addon is based on the highly optimized cross platform library LibXConvolver. The second and third component is the measurement signal and filter generation, which I want to implement in adsp.xconvoler during my GSoC coding time.

Put simply, with an integrated DSP and room correction, Kodi should be able to completely eliminate the need for most of the high end software found in most AVRs.

[**NVIDIA Gamestream**](https://forum.kodi.tv/showthread.php?tid=220965): As the code that should revolutionize [how Kodi handles inputs](https://forum.kodi.tv/showthread.php?tid=211138) finally makes it into core, one of the first projects to take advantage of it will hopefully be a Kodi-specific implementation of NVIDIA’s Gamestream tech. For those unaware of Gamestream, NVIDIA has created a solution for streaming content from a more powerful gaming PC with an NVIDIA graphics card to any of NVIDIA’s Shield devices.

[![gamestream-game-support](/images/blog/gamestream-game-support-800x446.webp)](/images/blog/gamestream-game-support.webp)

At least, that’s how it started. Since Gamestream was released, a dev going by cgutman created [Limelight](https://github.com/moonlight-stream/moonlight-pc/releases), an opensource library that makes it possible for any device or software to act as a Gamestream receiver. The goal of this GSOC project is to extend that capability to any instance of Kodi, so you could theoretically watch a show on your RaspberryPi2 running Kodi, then switch over to play some Assassin’s Creed Black Flag, and then listen to a little night music. There are some serious technical issues that will need to be resolved with this project, not the least of which is the potential for massive latency, but if it works, it should make for some really great experiences.

[**Better Profile Handling**](https://forum.kodi.tv/showthread.php?tid=222006): Honestly, this one is far more exciting to us developers than to users. The issue is that as we move towards a model that allows for headless server instances of Kodi, all the instances of Kodi in your house will likely be run by different individuals with different wants and needs, and the other instances on the network simply aren’t smart enough to deal with that at the moment. So one of the great underlying needs of Kodi right now is a vastly improved handling of individual profiles. While users may not see a ton of direct impact on their day to day usage, this project should indirectly touch almost everything we do while using Kodi.

[**On-The-Fly Transcoding**](https://forum.kodi.tv/showthread.php?tid=221503): It’s kind of the holy grail of UPnP server-client interaction and something Kodi doesn’t do at all. As such, this project is probably the most risky project, as it will effectively be an entirely new section of the Kodi code-base, but it may also be the most rewarding. Regardless, the entire team is excited (cautiously excited, in some cases) about this project, and we guess quite a lot of users will be too. As we move forward with it, we’ll keep you updated on its progress.

## DVR Kickstarter

We don’t often mention Kickstarters in our blog, but since at least one team member is helping with the project, we figured we’d point out Silicon Dust’s DVR. While the company has already met their goal, [their first stretch goal](https://www.kickstarter.com/projects/1275320038/hdhomerun-dvr-the-dvr-re-imagined/posts/1213051) is to make a DVR add-on for Kodi that essentially extends the already fairly brilliant HDHomeRun add-on we featured last month. As many of us would like to use this software, we’re definitely hoping they hit their goal, and as off this writing, they’re only about 5k away.

[![screenshot002](/images/blog/screenshot0021-800x451.webp)](/images/blog/screenshot0021.webp)

## Bitcoin Donations

Team Member Kib put in all the effort to make it possible for those of you who don’t like Paypal and don’t like banks to [donate using the newest, coolest currency: Bitcoin](/contribute/donate-bitcoin). Many of you demanded it as an option. We’re happy we are finally able to meet that demand.

## UPnP Library Integration

Yet another of the major requests we get on a regular basis is for a single library across all your devices without the need to use add-on workarounds or hacks or the AdvancedSettings.xml to make it happen. Team Member Montellese has been working on this task and is now ready for testers to start poking holes in his project: [Media Importing and Library Integration of UPnP](https://forum.kodi.tv/showthread.php?tid=224794). A quick overview video can be found below, but simply put, with Montellese’s test build you only need to scan your folders on your network once. Every other instance of Kodi can just scan and grab the library from whatever your main device is. Now any UPnP device on your network can act as a library source.

## Website Update

Finally, we’re beginning the process of updating the website to a new look that’s a bit more friendly for first time users. While we’ll talk more about that in the future, for now we’d just like to point out that most of the posts for the past 5 years or so have been categorized, as you should be able to see to the right. This means it’ll be much easier to find some of our favorite old posts, including all the old [Feature Fridays](/category/feature-friday), old [April Fools jokes](/category/april-fools-2), and more.
