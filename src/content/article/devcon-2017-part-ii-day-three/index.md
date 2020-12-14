---
title: 'Devcon 2017 Part II - Day Three'
date: 2017-10-28T02:01:45Z
author: Prof Yaffle
featured_image: /images/blog/Image uploaded from iOS.jpg
---
The final day of Devcon - still lots to get through, although, for the sake of some team members, we might need to speak slowly and quietly...

 We started the day with a **Foundation financial overview** from **natethomas**. Even as a non-profit, volunteer-run organisation, keeping Kodi going is an expensive undertaking by the time you take into account events and conferences, hosting, legal, development hardware, and similar. This in turn led to a conversation about future logistics: we have a large team now, and it's getting increasingly challenging to get the team together to meet, discuss, work, and socialise while we continue to make your favourite media centre software. We also want to continue to attend and increase our engagement with FOSDEM, ELC, CES, VDD and other open source and multimedia events.

 Our next topic was **infrastructure** with **kib**. The Kodi systems respond to literally millions of requests per day for such things as downloads and addon updates, so we're looking after a significant infrastructure. We have multiple servers for the forum, wiki, main web site, build server and mirroring, all of which need to be managed, backed up, maintained, upgraded. Given our recent extended forum downtime, that was clearly part of the discussion as it's unacceptable in every respect. We need to look again at how we host our content, our architecture, and any weak points.

 We then moved onto a brief conversation about **addon security**. This is a big topic that will need to be progressed separately: addon sandboxing to protect the core code and operating system, for example, or signing and hashing to ensure code integrity.

 **Tooling** was our next topic, led by **razee** and **martijn**. Do we have all the tools that the developers need? Are there better ways and methods? How do we take work out of the system, perhaps through automation of some basic sanity checks? How do we make it easier for people to contribute code and get it accepted and merged?

 We then moved on to **forum moderation**, with a discussion led by **darrenhill**. All forum users should be aware that we do not allow forum conversations or support threads that touch on piracy, guided by a non-comprehensive list of banned addons on the wiki. However, new piracy addons appear all the time, so we need to consider how we better maintain and publicise this list, including making it clearer to new forum sign-ups: we still get too many people who sign up specifically to ask for help with an unsupported addon, for example. The conversation then moved on to log files, and users who edit these to deliberately try to hide addons/repositories. Finally, we moved on to the sanctions we take against users who repeatedly breach the forum rules, and the basis on which we take action while trying to remain fair and transparent.

 Moving on, we came back to a topic we covered earlier in the conference: whether an addon should ever be allowed to modify another addon, or whether an addon should be allowed to disable anything when it finds something that it's decided is somehow "undesirable". This is clearly a contentious issue. As a rule, nothing should ever break a working installation, either by changing core Kodi files or by altering some other part of a user's installation that was already there. The current issue with addons checking for the presence of others, however, is clearly more complex as there may be legitimate reasons for such behaviour, such as a compatibility check. Expect a more formal announcement on this subject in the forums in the near future. However, until we finalise our position, we will not be permitting forum support or repo hosting for (specifically) the Caretaker add-on. This also applies to any add-ons that use it.

 Our final conversation of the day, then - and the final one of the conference - was **alwinus** and the **addon subsystem**. He talked us through the current addon system, and some of the problems and limitations it presents: it's not easily extensible, there are limitations on interoperability between addons, SQL dependencies impacting performance, and there are some inherent instabilities in the addon handling code that can trigger a crash. Simply put, there is a series of improvements proposed that will address these issues: limit SQL dependencies, remove async thread handling, cache more information, move away from dependency on cpluff.

 And that's it for Devcon 2017: time for people to head out, to airports, train stations, wherever.

 Thank you to everyone for their attendance and contributions!

 