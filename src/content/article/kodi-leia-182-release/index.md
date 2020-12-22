---
title: 'Kodi "Leia" 18.2 Release'
date: 2019-04-22T03:02:55Z
author: Prof Yaffle
featured_image: /images/blog/56497556-ef88dd00-64f5-11e9-9924-6ecc6bbea17c.jpg
---
Just when you thought we were all having a rest for Easter, here's some surprise news for you: Kodi "Leia" 18.2 is ready to roll. The sun is shining and the sky is blue here in western Europe, and we're all tied to our keyboards to bring you the latest Kodi loveliness. We're kind like that.

 In keeping with the 18.x maintenance release cycle, this is a bug fix release, with no real new functionality. What's worth noting, however, is how we've identified and managed the bugs this time. We've always valued high-quality bug reports, and, for this reason, for 18.x we implemented an **issue template and an automated verification system** in the GitHub issue tracker. This makes the bug reports more complete, and gives the Kodi developers a better chance to pinpoint problems more accurately and fix them more quickly. The aim is to solve the problem of waiting for proper full debug logs, samples and suchlike, hopefully saving a lot of time and getting issues resolved more quickly. Hopefully, you can see the results of this new process in the 18.x bug fix releases.

 For this 18.2 release we are also grateful to have received many code contributions from outside Team Kodi. With this help we were able to fix performance and dependency regressions in our **GLES rendering path**. Similar fixes were contributed for the **AML platform**, which really hasn't received much love over the past years.

 **VAAPI on Intel** has gained some corrections for interlaced content that toggled interlaced flags during playback, and therefore caused stutter by reconfiguring the decoder.

 Amongst other things, work has continued on Kodi's **music experience**: database access speed has been optimised as well as improved import functionality. Similarly, there have been fixes and improvements across all aspects of **PVR**, with a couple of particularly nasty bugs sent on their way.

 You can also find a huge number of **improvements for the Android platform**. Because of the automated Google tests done in the Play store, we were able to track down and resolve a lot of issues revealed by those "drunken monkey" tests.

 Beside all the fixes, we have introduced a **Codec Factory** (Android only) where power users can configure HW-Decoder usage in a fine-grained way. Most box sellers only provide usable codecs for formats which they use to sell content. Other format support tends to be poor, and therefore a configurable heuristic-based codec and video dimensions was added. The settings can be configured by the user in human-readable and writable XML format. More information can be found in the related [pull request](https://github.com/xbmc/xbmc/pull/15744).

 We will continue to work on Leia: an 18.3 release will be drafted once we have important fixes for this release. In the meantime, **development on version 19 M*** **has begun**. We will officially announce its new codename shortly. A small spoiler: "May the force be with you - always". But this time we will switch universes (and here's another hint: you might find it on GitHub already if you know where to look...).

 The full v18.2 changelog can be found in our [GitHub milestone](https://github.com/xbmc/xbmc/compare/18.1-Leia...18.2-Leia). If you want to read back on what was actually changed in v18 itself, you can find the corresponding articles in the blog posts - [Kodi 18](https://kodi.tv/article/kodi-180), [Kodi 18.1](https://kodi.tv/article/kodi-v181-leia-rc1).

 