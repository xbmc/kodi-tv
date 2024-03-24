---
title: DevCon 2024 - Budapest - Part II
date: 2024-03-24T00:55:04.089Z
author: Prof Yaffle
tags:
  - DevCon
featured_image:
  src: /images/blog/halászbástya-fisherman-s-bastion-by-tobias-reich.webp
  title: Halászbástya - Fisherman's Bastion - by Tobias Reich on Unsplash.
  alt: A medieval-style castle, with grand views over the Danube, glows orange in
    the light of the setting sun.
---
Good morning, dear reader (okay, "readers" - I'll be generous, and assume there's more than one of you!). It's a beautiful day, the skies are an endless sea of blue, the forecast is a congenial 20℃ spring day - and we're back in a sealed room, and ready to get going with Day Two of this year's DevCon. 

First up, **romanvm**, with a talk on **computer text encoding** - not necessarily Kodi-specific, but something that affects so many applications, particularly when using non-Latin scripts. Fundamentally, all text is abstract, and we simply need an agreed way to represent some symbols in a binary form so they can be stored, manipulated, and retrieved as needed - from 7-bit ASCII to 8-bit national extensions to today's 16- and 32-bit Unicode with UTF-8 providing variable-length encoding. This presents specific challenges for specific languages, as you need to know the size (number of bytes) for some languages and how e.g. concatenation would work in others.

Next, **fuzzard** led a discussion about **our next release**, version 22, Kodi P*: finalise a name, artwork, timescales, and similar. This segued into a broader conversation, co-led by **martijn**, about our approach to **release management** and **versioning** in general: when to merge stuff (do it earlier), the overall process (documentation, ownership, participants, responsibilities), schedules, impact on our users, what even constitutes a new version.  Should we offer a stable release monthly, quarterly, annually? How do other projects do it, and what can we learn? Given that we're *not* other projects, though, what are the implications for skins, databases, addons, users? And, anyway, could we *require* volunteers to work in their spare time to rigid deadlines: who wants to volunteer to be managed that tightly, when it's supposed to be fun?

We then moved to some quick, impromptu, more free-format discussions: **yol** with **infrastructure** - what's physical, what's hosted, what's cloud-based, AWS vs Azure vs OSUOSL vs stuff-under-a-desk; **keithah** with the ongoing implications of **content protection**; **yol** again about **mirrors** and approaches we've had from different potential non-standard hosts.

Continuing the quick-fire round, **Prof Yaffle** took a turn to stir a conversation about **futures** and how we respond to the ever-changing landscape - the art of the possible. What could we consider: streaming to Kodi, transcoding, content aggregation, Chromecast/Airplay support, headless Kodi (still!), thin client player, Ambilight...

Similarly, **phunkyfish** and **fuzzard** kicked off a discussion about increased **automation of branching and building** of binary add-ons, particularly when building a new major release (which links back to our approach to release management and versioning, above).

After a break for lunch (and a team photo), we continued with the short topics with multiple participants: **release manager permissions**; **guidelines on team membership, permission, expiration, etc**.; **sponsorship levels**. We then moved to a more in-depth conversation kicked off by **Prof Yaffle** about **distributing Kodi on Linux**, and the industry move more towards containers instead of repositories (e.g. PPAs): the implications for addons, documentation, user experience, configuration, and so on.

**sundermann** took the microphone next to talk about the current **state of the webOS port**: implications of having a limited set of addons built and bundled, webOS store status and submission challenges, remaining playback issues, SSL certification, installation process. 

Next to take the floor, **chewitt**, with an update on **LibreELEC**. Overall user numbers have declined since the original separation from OpenELEC - an artefact of people moving to different platforms over time, perhaps, such as Chromecasts and Fire Sticks, which are good enough for very many uses - although there's still a large, active installed base of mostly Pi (mostly 3, 4 and even 5) systems, with some platforms still growing. He explored the status of different platforms - Pi, generic, various legacy platforms, GPU variations (and thus driver challenges) that are out in the wild. Financially, LibreELEC remains solvent with donations via Open Collective, and he talked a little about their experience of that platform versus PayPal and similar. Finally, a quick update on hosting - what's where, mirrors, status, plans - and some improvements that have been made to e.g. CI/CD tools.

Without pausing for breath, **chewitt** then moved on to **Tvheadend**, as a part of the LibreELEC/Kodi "ecosystem" that needed some assistance: it's a very-widely used PVR backend for Kodi users, and it had fallen into disrepair as maintainers had come and gone. So, working alongside our special guest at this DevCon, **Flole998** (who became the *de facto* maintainer of the project after a "field promotion"), **Prof Yaffle** (artisan blogger of this parish) and some genuinely-keen new contributors (you know who you are), he's been working to refresh the forum and website and work towards getting a new release, updated documentation, and generally-invigorated life signs.

A quick dash for dinner, and we're back to finish up for today, starting the last tranche of topics with **phunkyfish** to talk about **catchup and timeshift for video add-ons**. This is all about bringing consistency to how you can pause and navigate various video feeds: local, streaming/IPTV, or even OTA via a PVR add-on. In effect, we can bring all sources into a consistent "channel list", with subtle differences based on what's available (e.g. previous/next) but as much common look, feel and behaviour as possible (OSD, pause, stop, what else is on/EPG): local media is fully navigable, streaming might have a 7- or 21-day catchup, dependent on provider, and true live TV simply appears in the traditional linear fashion.

Bringing the day to a close, then, we moved to **sports features in Kodi**, led by **zag** (who, incidentally, runs TheAudioDB and TheSportsDB websites): Sports view, metadata for events from TheSportsDB site via a new Python scraper (thumbnail, artwork, description - just as you'd expect). Future concepts include timestamps for significant events (yellow cards/penalties, scoring events, and similar), team lineups (aka the "cast" of the programme), event databases; outside the core concept, we have the possibility of screensavers with scores or schedules, or perhaps Kodi notifications when, say, your team scores while you're strong-armed into watching something else.  

And that's it for Day Two. A few more topics to roll over until tomorrow, along with some spontaneous coding while everyone is together - but, until then, that's it for now.

PS it rained later, just as we went out. Boo.