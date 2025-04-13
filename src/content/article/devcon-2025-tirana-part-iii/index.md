---
title: DevCon 2025 - Tirana - Part III
date: 2025-04-13T11:48:54.683Z
author: Prof Yaffle
tags:
  - DevCon
featured_image:
  src: /images/blog/skanderbeg-i̇skender-bey-.webp
  title: Gjergj Kastrioti - Skanderbeg/İskender Bey - legendary 15th century
    revolutionary hero of Albania and beyond.
  alt: A bronze statue of a man in mediaeval armour, sitting astride a horse. His
    sword is drawn and pointing at the sky; the horse has one fore leg and one
    hind leg raised.
---
Day Three dawns. We have a compressed schedule today before we break for individual workshops/breakouts - plus some people will be leaving us early in order to get home - so let's get to work.

**neo1973** opened the day with a discussion about merge policies, specifically around reviews and self-merging your own PRs. There's a reality that, when you've been deep in a certain area of the code, you may well be the subject matter expert - for the moment, at least - so there's nobody to necessarily critique the *what* of your code. As such, there's an element of "publish and be damned". There is, though, also the *how*: does the code itself stand up to inspection? We already use tools to sanity check the code, check for null pointers and undestroyed variables, and similar, so the quality side is already covered to a certain extent. That said, AI tools are falling into place and improving quickly, so there's more that we can do here, and more to investigate.

Onwards into a conversation initiated by **yol** around some of our hosted infrastructure and some specific issues we have there. That in turn led into a more general conversation around hardware, usage, I/O and capacity, and similar: important to us, but probably less so to the general public.

Next up, **chewitt** with an update on LibreELEC: user numbers, current platform trends and future plans, dependency/kernel versioning, CI/build, upstreaming fixes, drivers, chipsets, hosting, finances, collaborations, architecture. For what should be obvious reasons, **samnazarko** weighed in where appropriate with an OSMC perspective. 

Finally, **lrusak** gave an update on a long-desired feature: headless Kodi. It basically exists, it works, but it needs a good chunk of tidying up to make 100% certain that nothing tries to create or access a GUI on a non-existent window manager (e.g. popping up a notification toast). There are headless implementations - such as Docker images - already available from other sources, so this is really just about bringing this into the official release. 

And, with that, the main conference comes to an end. Time to huddle together, fire up laptops, and do some coding.

- - -

So, that's it for DevCon 2025. Genuine thanks to Tirana for the hospitality, and to everyone who's helped to look after us this year - and thanks to you for reading.

Until the next time ... *lamtumirë, dhe faleminderit*.

![](/images/blog/team-kodi-tirana-2025.webp "Team Kodi 2025, Tirana")

*Team Kodi 2025, Tirana*