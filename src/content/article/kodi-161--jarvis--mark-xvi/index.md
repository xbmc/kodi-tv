---
title: "Kodi 16.1 – Jarvis – Mark XVI"
date: 2016-04-23T04:00:00Z
author: Martijn Kaijser
featured_image:
  src: /images/blog/Kodi-Wallpaper-blue.webp
  title: "Kodi-Wallpaper-blue"
  alt: "Kodi-Wallpaper-blue"
---

Once a ‘final’ version is released some new bugs and/or problems usually appear out of nowhere, and this release is no exception. Even though tens of thousands of users were already testing the 16.0 version before release and we as team trying very hard to prevent any problems, as soon as millions start using the released version some problems we either did not think of or which we did not notice before pop up. To counter some of these new issues, we’re bringing you this maintenance release called 16.1 which has some additional fixes on top of the 16.0

It should be ok to just install this on top of your current Kodi 16.0 version without uninstalling previous version. For the MySQL users out there; we never bump the database versions in our bugfix or maintenance releases – you can safely keep using it within your network.

## Fixes done in 16.1

- • Never cache addons directories
- • Fix typo when calculating forced ratio size
- • AndroidStorageProvider: Ignore /mnt/runtime and don’t call Exists all the way every some 500 ms as this will affect performance
- • Set of fixes for DirectX rendering
- • Fixed crash under JSON-RPC on iOS/OSX
- • 20% performance gain on opening EPG guide window
- • Add missing libgif.so to the Android package
- • Fix Kodi freezing if no ADSP add-on is present
- • EventServer security fix by only allowing localhost
- • Fix possible lockup when entering EPG grid
- • Fix possible problems with rendering on Windows
- • Fix possible non working key presses after a key long press
- • Don’t do a video chapter skip if there’s only one chapter
- • Fix possible lock up by increasing timeout to let screensavers properly exit
- • Fix render capture (bookmark images) on certain hardware with DXVA on Windows
- • Fix problem in ZeroConfBrowser that could cause problems on exit
- • Fix crash one OSX 10.7 when trying to resolve HDD names
- • Fix possible crashes when using VAAPI and DXVA video rendering
- • Fix song reported on playback of songs from cuesheet

The complete technical list can be found on our Github [milestones](https://github.com/xbmc/xbmc/milestones?direction=desc&sort=due_date&state=closed).

## Improvements so far in version 16

More in depth information can be found through the following links about the 16 release. _Visit the other announcements listed below for previous beta fixes._

- • [Kodi 16.0 Final release](/article/kodi-160-jarvis-mark-xvi)
- • [Kodi 16.0 Release Candidate 3](/article/kodi-160-jarvis-release-candidate-3)
- • [Kodi 16.0 Release Candidate 2](/article/kodi-160-jarvis-release-candidate-2)
- • [Kodi 16.0 Release Candidate 1](/article/kodi-160-jarvis-release-candidate-1)
- • [Kodi 16.0 beta 5 announcement](/article/kodi-160-beta-5--last-jarvis-beta)
- • [Kodi 16.0 beta 4 announcement](/article/kodi-160-beta-4--jarvis-getting-ready-4)
- • [Kodi 16.0 beta 3 announcement](/article/kodi-160-beta-3--jarvis-getting-ready-3)
- • [Kodi 16.0 beta 2 announcement](/article/kodi-160-beta-2--jarvis-getting-ready-2)
- • [Kodi 16.0 beta 1 announcement](/article/kodi-160-beta-1-jarvis-getting-ready)

- • [Kodi 16.0 Alpha 1&2](/article/kodi-160-alpha-1-2-jarvis-your-service)
- • [Kodi 16.0 Alpha 3](/article/kodi-16-alpha-3)
- • [Kodi 16.0 Alpha 4](/article/kodi-160-alpha-4-jarvis-nearing-completion)

## Add-ons

**General:** So far in version 16 there are no add-on changes that would impact any add-ons except for PVR. Since our 12.x Frodo release there have been some gradual changes but in general all add-ons, even from that time should still work, of course there are some exceptions. If the add-ons worked in Gotham, Helix and Isengard then we are happy to say that all these add-ons should still work.

**Skins:** Sadly due to the amount of changes we’ll have to announce that skins will have certain parts non working. This release will mark any version 15 skin (or earlier) as incompatible and will ask you to switch back to Confluence. This means that for you to continue using Kodi 16.0 you will have to switch back to Confluence or wait till the skin you use has been updated in our repository. Good new however is that a variety of skin have already start updating to latest changes.  
**Available skins:** The following skins are already updated for version 16 and will auto-update when you upgrade. We’re sure more will follow soon.

- • Aeon Nox 5
- • Amber
- • AppTV
- • Black Glass Nova
- • Box
- • Chroma
- • Cirrus Extended
- • Confluence
- • Eunique
- • KOver
- • Metropolis
- • Mimic
- • Nebula
- • Phenomenal
- • Rapier
- • Revolve
- • re-Touched
- • Titan
- • Transparency!
- • Unity
- • Xperience1080

## Call out for developers

As you may or may not know is that Kodi is maintained by a group of volunteers since its first inception dating back to the original XBOX days. Over the years many volunteers have spent countless days if not months on every aspects of what makes Kodi great. This consist of writing and maintaining the code base of Kodi, expanding to new platforms, maintaining the forum, wiki, website and download server and more……

So why do we need you? Well the fact is that over the years the core team of Kodi has remained about the same size while the amount of users went from couple of thousand to many, many millions. Not forgetting the fact that it went from only a XBOX application to what is now running on Linux, Windows, iOS, OSX, Android. All this still with the same amount of people. Now comes the time that we will actually start calling out for some help. To put it simple we want to ensure that Kodi remains alive on all platforms while at the same time lowering the support burden each developer now faces these days. Each of the core developers has his own specialty and since Kodi is quite big you quickly run out of developers that know enough of certain sections. Add to that the changes needed for each operating system upgrade that happens and all the problems that arise with that.

To put it in perspective we basically have only 1 developer for each section or even complete platform. As already mentioned the entire team consists of volunteers which means everything is done in their spare time next to having an actual day time job and a personal life. This results in having only a few hours at most to spend on what they see as their hobby which i can say they are passionate about. Over the years the team consisted of many different developers who gave all they could but due to whatever reason had to change priorities which resulted in not spending time in Kodi anymore.

So in short what we are looking for are C/C++ developers who are willing to put in some of their spare time in maintaining and improving our core code. This can either be doing some minor bugfixing, reviewing existing pull requests for code contributions or even creating some of their own code refactoring or feature additions. It really doesn’t matter if you are just a student just starting out on C/C++ or are already a senior programmer. We would welcome anyone who is willing to do their part on any improvement that is needed. A fair warning is that our codebase isn’t for the faint hearted as it’s quite massive and we are quite strict regarding code review before we merge anything. However don’t let this frighten you off as our current (or outside developers) will certainly give you pointers on improvements to get it included.

What we currently need most are developers with knowledge of the following components to improve current implementations:

- • Windows DirectX11 / audio / video
- • Android NDK / audio / video
- • iOS & OSX / audio / video
- • General knowledge of C/C++ and willing to do some coding in areas of their interest.

Any bugfix can be send to our main github code repository for review straight away. If you are not sure or want to take on a bigger task or change feel free to open up a thread on our forum where you write down your proposal to get some initial feedback.

Wiki pages to get you started: <https://kodi.wiki/view/Development>Forum: [Developer sucbsection](https://forum.kodi.tv/forumdisplay.php?fid=93)Code on Github: <https://github.com/xbmc/xbmc>

## Conclusion

Should you want to download and install this build please visit our download page.

- • [Official Kodi 16.1](/download)

Please report any problems on our forum [http://forum.kodi.tv](https://forum.kodi.tv/forumdisplay.php?fid=111) and not on the release announcement.

## Official remotes

In addition to creating Kodi, the members of Team Kodi have created official remotes to be installed on your tablet or phone. These can take control of your Kodi installation from where you browse your movies, tvshows, PVR/DVR, start add-ons and navigate through the interface.

    **Kore™ (Android)** **Official Kodi Remote (iOS)**   [![Google-play-store-icon](/images/blog/Google-play-store-icon-300x112.webp)](https://play.google.com/store/apps/details?id=org.xbmc.kore) [![](https://devimages.apple.com.edgekey.net/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg)](https://itunes.apple.com/en/app/official-xbmc-remote/id520480364)    [![Official Kodi Remote (iOS)](/images/blog/qrcode.webp)](https://itunes.apple.com/en/app/official-xbmc-remote/id520480364)    Like Kodi itself, both official remotes are free and open source software.

### Donations or getting involved

Getting involved is quite easy. Simply take the plunge and start using these 16.0 Jarvis builds. If you use these builds, we encourage you to report problems with these builds on our forum first and after that, if asked, submit bugs on Trac (following this guide: [How to submit a bug report](https://kodi.wiki/view/HOW-TO:Submit_a_bug_report)). Do note that we need detailed information so we can investigate the issue. We also appreciate providing support in our [Forums](https://forum.kodi.tv/ "Kodi Forums") where you can. You can of course also follow or help promote Kodi on all available social networks. Read more on the [get involved](/get-involved) page.  
 We are always happy to receive a [donation](/contribute/donate "Donate") by which you show your support and appreciation. All donations go towards the XBMC foundation and are typically used for travel to attend conferences, any necessary paperwork and legal fees, purchase necessary hardware and licenses for developers and hopefully the yearly XBMC Foundation Developers Conference.
