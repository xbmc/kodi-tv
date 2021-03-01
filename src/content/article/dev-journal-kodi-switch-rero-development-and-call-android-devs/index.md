---
title: 'Dev Journal: Kodi’s Switch to RERO Development And A Call For Android Devs'
date: 2016-04-27T04:00:00Z
author: Nathan Betzen
featured_image:
  src: /images/blog/early_often.jpeg
  title: 'early_often'
  alt: 'early_often'
---
*Editor’s note: Kodi 17 is a big, big release, and we’ve decided to break down blog posts about it into smaller pieces. We’re starting with an explanation of the new release philosophy we’ve been using for Kodi 15, 16, and 17.*

 Release Early, Release Often
----------------------------

 A number of users have noticed that Kodi seems to be putting out releases much more frequently these days. We just released Kodi 16.1 and now we’re releasing Kodi 17 Alpha 1? Aren’t we getting ahead of ourselves? Why aren’t we letting things settle in first?

 The answer to this question boils down to a pretty simple release philosophy that we’ve adopted called Release Early, Release Often (or RERO).

 RERO is a release philosophy in which we try to wait only a few months between releases. The main purpose of this is to make devs feel less rushed. In the past, devs would know that if a feature didn’t make it in by the deadline, then there was a chance that the project they’d been working on wouldn’t be seen by the community for as many as 18 months, when our next release was finally ready. So they’d occasionally push a project into mainline Kodi that was maybe only half baked and in need of serious polishing. This, combined with huge 18 month development cycles with tons of new features, meant that the beta release process would get absurdly long, because there would be hundreds of bugs across all platforms that had to be dealt with before we could consider releasing to the public.

 With RERO, almost all those problems go away. Each release has fewer conflicting features. Nobody rushes a feature in, because they know there will be another release in about six months. There are still major, show-stopping bugs to deal with with each release, but there are far fewer. Meanwhile, users get the benefit of seeing new features much faster than they otherwise might have, and we get much more feedback from users than we would if these features were hidden away in betas for 10 months at a time.

 In fact, RERO has removed nearly all the bigger release-related problems Kodi faces, while introducing only two minor ones. With so many releases, the community is far more interested in platforms that auto-update, like Android and Linux. And on feature-light releases, writing a blog about those features isn’t quite so exciting.

 A Call for Android Devs (and Windows and iOS)
---------------------------------------------

 As many of you know, we are a bit shorthanded in the Android development department. While there are actually two projects SPMC and MrMC that have Android devs committing code, the upstream project Kodi has no one at the moment. If you are familiar with C++ and Android development (particularly recent Android TV development) and would like to help, feel free to speak up in our forums. The devs of SPMC and MrMC are very nice people and would likely be happy to mentor you. In addition, much of the early work you’d need to do would be to simply port the work done on SPMC and MrMC into Kodi, so the learning curve shouldn’t be as steep it otherwise might be.

 And we can’t stress this enough, if we don’t get an Android dev soon, Kodi for Android could very well die out. This is a significant future problem.

 FAQ About the RERO Experience So Far
------------------------------------

 **With such short time between releases, is it harder to catch bugs and is each release buggier?**

 - No. In fact, because there tend to be fewer bugs when a feature is pulled in, it’s actually easier to catch the remaining bugs. Some users have felt like the *.0 releases have been buggy, but *.0 releases are always buggier, on all platforms for all software. That’s just how software works, and it’s been true for Kodi since at least 2009. Lots of users love 14.2, but they forget that 14.0 was a nightmare.

 **I’m on version X, and I like it and see no reason to upgrade. Do I need to upgrade?**

 - No. While Kodi doesn’t officially support old versions of our software, major releases are feature releases, while point releases are bug-fix releases. So while we do recommend that you go to the highest point version of Kodi you are running, you only need to upgrade to the newest release if you want the features in it. In other words, we recommend that you upgrade to Kodi 16.1 from Kodi 16.0, but only upgrade from Kodi 15.2 to Kodi 16.1 if you want the new features (or if you just want to upgrade to the newest and best).

 **If you’re doing all these releases, why don’t you make it possible to auto-update or more easily update?**

 Kodi actually can be updated quite easily and automatically on several platforms. In particular, Android devices with Google Play, OpenELEC/LibreELEC, and OSMC allow for auto-updating. Regular Linux platforms allow you to run a quick line of code to update. iOS is currently having some problems with Cydia, but in general can update. That primarily only leaves Windows, OSX, and Kodi on the Fire TV.

 Our hands are tied, a bit, on the Fire TV. As long as we are not allowed in Amazon’s store, we can’t easily push updates to that system. For Windows and OSX, there is actually a PR that exists that would enable auto-updating. It’s just not quite ready for release. Whether it ever becomes ready will depend on a dev polishing it up.

 Those are the most frequent questions we’ve seen. If you have any others about this shift to RERO, feel free to write in the comments below. We may update this FAQ as time goes on.

 