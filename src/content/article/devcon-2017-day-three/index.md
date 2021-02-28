---
title: 'Devcon 2017 - Day Three'
date: 2017-05-06T22:12:27Z
author: Prof Yaffle
featured_image:
  src: /images/blog/teamkodi-porto-2017.JPG
  title: 'teamkodi-porto-2017'
  alt: 'teamkodi-porto-2017'
---
So - we've got to Day Three already, which means the final day of this DevCon. As the church bells rang in the day on this cloudless Sunday morning, the team was looking jaundiced. You can see the strains showing: long days of intense concentration are taking their toll on people. Perhaps it's the relentless quest to make your favourite media centre software even better. Maybe it's the stress of trying to repair Jenkins over dodgy hotel WiFi. Or could it be that it's just the effects of beer and late nights. I'm no judge, so I'll leave you to decide for yourself on that one...

 Anyway, it is the final day, so here we go.

 **Keith** began the day with some thoughts on where mutimedia software is headed: aggregation, consistency, commonality. We've seen commercial companies beginning to consolidate to try to get to "one interface to rule them all"; Kodi clearly isn't in the acquisition business, but we do have a significant advantage in our common code base, feature set, and look-and-feel across all of the platforms we support.

 After a quick trip down memory lane to remind ourselves of how far we've come since the first XBMC port to the Raspberry Pi - demoed at SCALE just over five years ago, when the Pi was still barely more than a myth to most people! - **Paxxi** took the stage to talk about how we could maybe make it easier for **new people to get involved** with Kodi development. Some of this might be improved or updated documentation - where to get started, how to set up a build system - but there's also potential for a "beginners' development blog", for example, or perhaps some pointers around relatively straightfoward things that need to be fixed in the code.

 **Martijn** then talked about **v18, "Leia"**, and the journey we now need to begin towards our next release. We need to lock down features that we're going to include, code that we need to ringfence, major omissions or deficiencies we can address. We're still working towards more of a RERO approach - *Release Early, Release Often* - but that still needs care if you're touching some core code that has implications for primary functionality. No-one will thank us for breaking the video playback subsystem, for example - but we also can't freeze the code forever. Any larger-scale shift towards binary addons also raises implications for how we build and distribute them, which in turn gives us infrastructure implications. And, finally, our whole aproach to nightlies, alphs, betas, and release candidates perhaps needs review: how do we get new code into people's hands for feedback and testing, without making it too easy for ordinary users to unknowingly break their systems.

 **Daveblake** then triggered a conversation on **code reviews and merging**. We need to balance keeping code sane and spotting any obvious flaws with quickly merging in new features so they can be tested and debugged. Kodi is an open-source application, using public tools to host the code - so anyone can come in and comment, and we'd welcome that. What we don't want to do is to have code languish while it's either ignored or debated to death, however. As a general rule, we don't want people to work alone, so we need people to tag other developers - but we also need to time-box pull requests so that they get merged by default if there are no good objections.

 **Martijn and Keith** then covered **KodiOS** - do we need some successor to Kodibuntu, or is this LibreELEC's space? It's true that LIbreELEC has wider applicability as a more general-purpose embedded system, but the same can be said of any other OS we support. At this stage, then, the conclusion is that most users would see LibreELEC as the default Kodi appliance, and there's no good reason to really challenge that. However - and this applies to other, similar Kodi distributions as well - we could certainly work in more of of a collaborative, "closed loop" manner. Some of those behaviours come naturally from simply working together in a more common, consistent manner - shared vision, better communication.

 As our final speaker, **Alwinus** then took the podium to talk about the **addon rework** he's been doing. This will allow addons to be extensible, or to be grouped together in more of a hierarchical manner (e.g. PVR). It will also move us towards a more common way of performing equivalent actions in different addons - at the moment, six developers will just implement things the way they want to, which causes a fair amount of wheel reinvention if nothing else.

  

 And that's it for this DevCon. Time to wrap up, say farewell to people catching earlier flights, and generally start the journey back home.

 Thanks to everyone for making the journey, thanks to our sponsors and guests, our local hosts who helped arrange things - and, to you, our users, for helping to make Kodi what it is.

 