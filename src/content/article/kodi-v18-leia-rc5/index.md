---
title: "Kodi v18 Leia RC5"
date: 2019-01-11T12:11:18Z
tags:
  - Prerelease
author: Martijn Kaijser
featured_image:
  src: /images/blog/Kodi_Blog_Motherboard_2D_A_900x336.webp
  title: "Kodi Motherboard"
  alt: "Kodi Motherboard"
---

As mentioned in the RC4 release article, a final release was close on the horizon. To that end we hereby present you the last Release Candate (RC5) before we call it a wrap on v18.0. It will not be absolutely perfect but we have to go forward at some point. Don't worry as we will of course continue working on fixing any issue that might surface in the regeular v18 point releases afterwards.

## Changes in RC5

Most notable changes to mention in this Release Candidate:

- Correctly redact user/password in certain cases
- Fix window transparency on Android that might cause grey bars on HDR playback
- Prevent crash when resuming audiobook when there's no chapter present
- Fix crash&burn by ensuring that Abort of ScriptObserver waits for thread exit
- Fix regression from RC4 regarding "don't disable gui rendering when losing focus" on OSX
- Workaround double switching of refreshrate because we currently cannot reliably distinguish between 25p and 50i or 29.97p and 60i on playback start
- Fix missing All Albums item from music library
- Revert change that cause sorting of ANSII characters in library (proper fix will have to be done in v19)
- Fix crash on certain language characters when using PVR add-ons
- Fix crash on Windows with DVD playback after change in ffmpeg
- Fix compatibility with older MySQL databases

Of course there are several more changes which are listed on our github repository found here: [RC5 changes](https://github.com/xbmc/xbmc/milestone/120?closed=1).

## Currently included

The past [RC1](https://kodi.tv/article/kodi-v18-leia-rc1-new-hope) and [RC2](https://kodi.tv/article/kodi-v18-leia-rc2-new-hope) release articles include the most notable changes we have done in v18. There are of course many smaller changes and improvements that we can't even remember. I guess you will just have to try and find out eventually. For a more extensive list you can visit our wiki page [v18 (Leia) changelog](<https://kodi.wiki/view/Kodi_v18_(Leia)_changelog>) which will be update along the way. From now on all v18 releases will not contain any big new features as we are focussed on bug fixing or improvements only.

Make sure to also go through our **[news](https://kodi.tv/blog)** sections which contain all past announcements regarding the Leia release and some highlights of what it will contain.

####

#### The V18 Leia t-shirt

Inspired by the galaxy far, far away theme, our resident artist Sam went above and beyond and designed perhaps the coolest Kodi announce video of all time.

We loved his work so much that we're modelling the Kodi 18 shirt after it along with more art to come. Here it is, our [newest, coolest shirt: K-18L](https://teespring.com/stores/kodi-18-leia-store)  
(Available in several shirt **colours** and not just black or white)

[![Kodistore](/images/blog/Kodi18Store.webp)](https://teespring.com/stores/kodi-18-leia-store)

#### **Release time**

Since we now started the RC cycle a final release will be on the near horizon. When the final release will actually be is yet unknown as it all depends on the stability now more people will start using the v18 builds.

That’s about it for now and we’ll go back at improving this upcoming v18 release. Should you wish to give it a try a new version is readily available each day as well as nightly version. We can certainly recommend trying it out however take in mind that it’s not fully production and living room ready yet (take a backup). So far a guestimate of several tens of thousands users already use it so it can’t be that bad can it. You can get it from the download page clicking on the platform of choice and hitting the “pre release” tab. For [Android](https://kodi.tv/addon/scripts/kodi-android-installer) and [Windows](https://kodi.tv/addon/scripts/kodi-windows-installer) we have an easy to use download add-on which you can find in our repository.

_Go to the [Official download page](https://kodi.tv/download) and choose the platform of choice and you will find these builds under the pre release tab._

### Donations or getting involved

Getting involved is quite easy. Simply take the plunge and start using v18.0 Leia. If you use this version, we encourage you to report problems with these builds on our forum first and after that, if asked and the bug is confirmed, submit the issue on Github (following this guide: [How to submit a bug report](https://kodi.wiki/view/HOW-TO:Submit_a_bug_report)). Do note that we need detailed information so we can investigate the issue. We also appreciate providing support in our [Forums](https://forum.kodi.tv/ "Kodi Forums") where you can. You can of course also follow or help promote Kodi on all available social networks. Read more on the [get involved](https://kodi.tv/get-involved) page.  
**If you do appreciate our work feel free to give a small [donation](https://kodi.tv/contribute/donate) so we can continue our effort. Just find the big "Donate" button at the top of the website.** All donations go towards the XBMC foundation and are typically used for travel to attend conferences, any necessary paperwork and legal fees, purchase necessary hardware and licenses for developers and hopefully the yearly XBMC Foundation Developers Conference.

**_May the source be with you….._**

**_![](/images/blog/K-18L-Comic-Preview.webp)_**
