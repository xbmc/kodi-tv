---
title: TheTVDB
date: 2022-08-15T07:23:36.379Z
author: Scott
tags:
  - Community
  - Developer
featured_image:
  src: /images/blog/tvdb.svg
  title: TheTVDB Logo
  alt: TheTVDB Logo
---
Hello Kodi community. This is Scott, the founder of TheTVDB. There has been some confusion related to the availability of our API and the various Kodi scrapers for TheTVDB. Hopefully I can provide some clarity.

TheTVDB was originally written in a weekend in 2004, with features and data slowly expanding with varying degrees of thoughtfulness. Inevitably, some mistakes were made and the industry has changed considerably in the years since. Through a complete restructuring of data a few years ago, we attempted to not only correct past mistakes, but also become more flexible in how we accommodate edge cases and non-traditional series.

This rewrite forced us to create a new API that correctly represented the new data structure and was built using more scalable technology. We included a transformation layer that continued to allow the old legacy APIs to function using the new data structure, but it takes a lot of time and money to run so we can't leave it up forever. In the two years since, we tried easing the transition away from the legacy APIs:

* We announced that we would eventually be shutting down the legacy APIs, but stated that we would provide enough time for developers to update their code.
* We reached out to key systems that rely on our API, like Kodi, to ensure a smooth transition.
* We contracted an experienced Kodi developer to write updated TV and movie scrapers that work off our new API and the latest versions of Kodi. Kodi's board graciously offered feedback throughout this process.
* We've restructured our moderator and support tools and teams to make sure we can support developers and users switching to the new API.

Note that as before, our API remains entirely free for end users of the Kodi TheTVDb library scraper (and, indeed, for other projects). We do have a subscription service for anyone wishing to support our site, but it is entirely optional and not required to use the scraper.

Our current plan is to turn off our legacy APIs at the end of 2022. All Kodi users should switch to our [official TV scraper](https://kodi.tv/addons/matrix/metadata.tvdb.com.python) by that time, as all other TheTVDB scrapers will cease to function. Anyone that wants to try out our [movie scraper](https://kodi.tv/addons/matrix/metadata.movies.thetvdb.com.v4.python) as well is welcome to do so, but the scrapers are entirely separate and do not require each other to function. Note that this conversation is very much about scrapers, but the API change may well impact other addons which use the legacy model. We don't want to adversely impact any users, so please get in touch if you're a developer who might be affected.

I hope everyone can understand how we got to where we are and why we need to take these next steps. We're available for support within the scraper threads ([TV](https://forum.kodi.tv/showthread.php?tid=368272), [movies](https://forum.kodi.tv/showthread.php?tid=368273)), but prefer issues to be reported directly on the github repos ([TV](https://github.com/thetvdb/tvdb-v4-python), [movies](https://github.com/thetvdb/metadata.movies.thetvdb.com.v4.python)). Detailed information about configuration is available on the wiki ([TV](https://kodi.wiki/view/Add-on:The_TVDB_v4), [movies](https://kodi.wiki/view/Add-on:The_TVDB_v4_(Movies))).

Thank you all so much for your ongoing support of TheTVDB through the years.