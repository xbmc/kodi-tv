---
title: The Sun Sets on Python 2
date: 2024-04-25T17:56:40.586Z
author: Team Kodi
tags:
  - Developer
  - Community
featured_image:
  src: /images/blog/python_logo.webp
  title: Python logo
  alt: The blu and yellow Python logo, seemingly two interlocking snakes (probably
    pythons, now I think about it)
---
Recently, Team Kodi proudly released Kodi v21 "Omega", the latest major release of our popular media centre software.

Our longevity and popularity means that Kodi is installed on literally millions of devices worldwide. For a range of reasons, not all of them are capable of supporting the newer releases; we do, however, try to maintain as much support as we can for the older releases, with our target being support for the previous two versions before the current one. The release of Omega thus moves Kodi Leia out of active support.

The final version of Kodi Leia (v18.9) was released in October 2020. Leia was also noteworthy as being the final version which made use of the Python 2 language, with Kodi Matrix and beyond using the newer Python 3. That move was made due to Python 2 being marked as end-of-life on 1st January 2020 by its authors, who now no longer support it and so it does not receive any updates or security patches. Python 3 is fully supported and updated, but Python 3 code is not directly compatible with Python 2.

This means that, as Kodi Leia moves out of support, so does Python 2 for Kodi. As a result, we will no longer be accepting any updates for Python 2 addons into our repository, and the Leia repo will be frozen. Any Leia installation will still be able to access the repo, but addon updates will only be accepted in Python 3, with the effect that they can only be run on Kodi Matrix or later. This will free up the Team Kodi volunteers who review addon submissions to focus entirely on Python 3 addons, making reviews simpler and faster and so minimising the delays between submission and release of acceptable addons into the repo.

This also means that older scrapers written in XML or Python 2 will not get any updates, so any changes made on the source database sites which break them will render them permanently broken. Most of these scrapers are long unsupported anyway, but as Leia and older versions are now end-of-life then the only solution will be to update to a newer version of Kodi using the supported Python 3 scrapers.

We thus bid a grateful farewell to Python 2, and put our focus now on updating and improving Kodi for the future.