---
title: Kodi "Matrix" 19.3 Release
date: 2021-10-25T08:00:00.000Z
author: Prof Yaffle
tags:
  - Release
featured_image:
  src: /images/blog/kodi19.3.jpg
  title: Kodi 19.3 "Matrix" Splash Screen
  alt: Kodi 19.3 "Matrix" Splash Screen
---
Okay, we know that we've only just released 19.2, and some of you are probably even still waiting for that, but that's a big part of the reason we need to push out a new build. We still had some challenges with the Xbox release, and some other issues came to light that we didn't want to ignore - so, rather than get into platform-specific point releases, we thought we'd just nudge up to 19.3 and go for it.

As with other point releases, don't go looking for new features, as that isn't really the purpose here. Full details are on [GitHub](https://github.com/xbmc/xbmc/compare/19.2-Matrix...19.3-Matrix), but here's the short form...

* We've had some challenges getting the Xbox version released because of some specific platform requirements needed for 4k/HEVC playback. With the help of @CelesAtXbox (thanks so much!) we think we've now genuinely got those covered to Microsoft's satisfaction, and can finally get this into the Windows Store.
* There's also an issue with an expired certificate for 18.9 on Xbox, which effectively takes that version off that platform for new installations, so timing is opportune to fix that.
* There's been a long-standing Atmos audio issue on all platforms that support TrueHD passthrough - we know that this this has been irritating people for some time, and we've now been able to fix this.
* We unintentionally introduced a bug in 19.2 that broke Airplay, so we've fixed that one. 
* A couple of gaming-related fixes, notably a controller fix and some shader issues on Retroplayer.
* We've fixed a bug that affected thumbnails for watched episodes when hiding episode spoilers.
* We've much improved the metadata shown in Linux app stores.

Thanks, as always, to everyone who has helped by reporting, isolating or fixing issues.

You should be fine to install this straight over the top of your existing Kodi version - indeed, this will happen automatically on many platforms - but, if you've any doubts, back up your userdata beforehand. Similarly, this is a minor version bump, so there's no change to database versions or anything similar on the vast majority of platforms; the exception here is obviously if you're getting your first taste of a major upgrade (i.e. 18.x to 19.x).

If you're interested, you can read the merged PRs [here](https://github.com/xbmc/xbmc/pulls?q=is%3Apr+sort%3Aupdated-desc+milestone%3A%22Matrix+19.3%22+label%3A%22v19+Matrix%22+). If you want to read back on the full history of v19 itself, or of previous versions, you can find the corresponding articles in the relevant [blog posts](https://kodi.tv/blog/tag/release).

Application deployment on different platforms (notably, Google Play and the Microsoft Store) can vary considerably due to circumstances outside of our control, so just be patient, and the update will inevitably find its way through.