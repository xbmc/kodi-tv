---
title: 'Kodi 19 with Python 3 Goes Live'
date: 2019-11-16T02:33:03Z
author: Team Kodi
featured_image:
  src: /images/blog/kplusp.png
  title: ''
  alt: ''
---
Kodi 19 with Python 3 Goes Live
-------------------------------

 Nearly two years ago, we announced that Kodi was migrating to use the Python 3 interpreter for its many addons (see [here](https://kodi.tv/article/attention-addon-developers-migration-python-3)) and we explained both why we were doing it and what would change. Since then we have been encouraging all add-on developers to work towards that goal. If you want to read more about how to make add-ons work with the new Python version, see [this page](https://kodi.wiki/view/Migration_to_Python_3) on our wiki.

 As Python 2 is imminently reaching end of life (1st January 2020)m we've needed to pull this forwards, so have just taken the next big step: the nightly builds for Kodi 19 "Matrix" are now using the Python 3 interpreter to run all Python-based add-ons

 This means that not only can add-on developers test their work using the most recent Kodi builds, but that early bird users of v19 also are able to use them. However, this migration is very much a breaking change for us, and there's a lot of work that needs to be done to get things fully functional again. This also needs to be done quickly, as we need to be complete before the end of life of Python 2 happens.

 The support of the wider community in this phase will be very welcome. For early users of Kodi v19 via the nightly builds, the obvious issue is that a large number of add-ons are non-functional. Problems with specific add-ons can best be reported on the forum thread for that add-on - read up if the author is already aware before posting. However, the developers of some older add-ons are no longer active, so anyone with Python skills and an interest in Kodi is encouraged to get involved with updating some of the now otherwise-unmaintained add-ons and scripts.

 There are also issues that need core developer knowledge to fix. Since moving to Python 3 there are some difficulties on all Windows platforms in particular. The version of Kodi for UWP (Xbox) does not compile at all, and needs someone to champion it. There are also issues with certain libraries e.g. Pillow, PyCryptodome, cTypes etc., being missing or incompatible versions, so those add-ons that depend on them don't run and can't be tested on Windows.

 Things will be a little raw at the edges until we can get these things fixed, so bear with us and if you have skills and can step up and contribute then please do.

 