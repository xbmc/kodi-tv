---
title: "XBMC 11.0 - May Cycle (updated)"
date: 2012-06-04T04:00:00Z
tags:
  - Prerelease
author: Nathan Betzen
---

[![New Confluence](/images/blog/NewConfluence-300x170.webp "New Confluence")](/images/blog/NewConfluence.webp)As [mentioned previously](https://kodi.wiki/theuni/2012/04/25/update-grab-bag/ "XBMC April Grab Bag"), we have now moved into a monthly development cycle, in which we merge new features at the beginning of the month and then perform bug fixes through the rest of the month. This means, at the end of every month, developers, bug-reporters, and those willing to deal with potentially highly unstable builds can try a snapshot from the current development cycle, and the organization, in turn, will have a more stable and predictable development process. For those of you who would prefer a stable version of XBMC, we will always recommend the most recent stable release (XBMC 11.0), but for the brave, you are welcome to try the end of the month build. To give an idea of just how unstable/alpha these builds can be, there will almost certainly be months in which some platforms won’t actually have usable builds. As always, we recommend you backup your userdata folder before upgrading.

With that said, let’s review some of the more notable changes in the [May Changelog](https://github.com/xbmc/xbmc/issues?milestone=2&page=2&state=closed "XBMC May Changelog").

## AudioEngine

As many of you no doubt already know by now, the really big code update this cycle was the inclusion of AudioEngine, led by gnif, into XBMC proper. For more information on this massive code shift, visit [this post](https://kodi.wiki/dddamian/2012/05/30/xbmc-audio-goes-hd/ "AudioEngine") or check the [wiki](https://kodi.wiki/view/AudioEngine "AudioEngine Wiki").

## Hi10P

On an only slightly less frequently requested note, anime fans will be happy to learn that elupus has incorporated Hi10P playback into XBMC. A massive caveat to this development is that, in order to play back 1080p 10bit video, you are going to need an incredibly powerful machine with a very fast CPU (we’re talking desktop grade hardware). Users are reporting that 720p video appears to be at least workable on your lower level CPUs, but any expectations for silky smooth playback on something like the NVIDIA ION platform will almost certainly be met with disappointment. With that said, if you are currently running a fairly powerful machine, XBMC is finally ready to play your anime.

## BR & DVD

In the steady march toward full unecrypted Bluray playback, elupus has also incorporated a virtual directory for Bluray files. While XBMC is still only able to display and navigate native HDMV Bluray menus (and not the common BD-J menus), users will be able to view a list of video files that display the video duration in the folder and select whichever video he or she would like to watch.

For users who typically watch DVDs recorded in a non-native default language, developer Montellese has subtly altered the way XBMC picks the appropriate audio language from among multiple options. Rather than simply picking the audio that has been flagged as “default,” XBMC will attempt to match the language of the XBMC installation with the audio language. So if you are running XBMC in German, and you attempt to watch a movie that typically would default in English, but happens to have a German track, XBMC will attempt to recognize and then select that track for you.

In addition, after selecting the appropriate language, XBMC will now make its audio selection based on the “best” track, rather than the first track listed. So in the past, there may have been 3 German language tracks listed in the following order: DTS-HD, MP3, and Dolby Digital. If XBMC was unable to play the DTS-HD track, it would default down to the next track and pick MP3. Now it will pick the next best track, and default to Dolby Digital.

## Image Caching Improvements

One major area targeted for improvement for Frodo is the XBMC library. In particular, we are focused on making the library faster and smarter. The first step in this process, led by Jonathan Marshall, is a dramatic improvement in the way the library handles images. In the past, images would be cached in a local file and XBMC would have no knowledge of where that local file came from or what it was for. Now, XBMC will log where an art file comes from and where it is cached. In addition, XBMC will log what kind of file it is, whether it is a poster, a banner, clearart, or whatever. This means, as this framework is extended, skinners will be able to use locally cached art in numerous different views, regardless of whether the art type is banner, thumb, or other. Users will be able to change the art, simply by placing a new art file in the folder where the media is located and letting XBMC automatically note that the file has changed. And MySQL users will no longer have to worry about pathsubstitutions, as each client will maintain its own thumbnail cache that gets registered in the bigger database.

This means XBMC needs to recache all your lovely art, which will be done as you browse each item in your library. You’ll notice the first time you browse a listing the art will take a bit longer than usual to come in, but once recached, everything will be nice and snappy again. At the moment, only the smart links to your various image files are part of the May Cycle; however, as XBMC starts to take advantage of these improvements, libraries and skins should experience dramatic improvements in the months ahead.

## Confluence Updates

In the shift from Dharma to Eden, Jezz_X was tasked with making media more easily accessible from the home screen with Confluence. Now, as more devices like the Raspberry Pi become available, the goal is to make the default skin Confluence as streamlined and efficient as possible, while continuing to make the media quickly accessible. To that end, you’ll note a number of changes this cycle. First of all, throughout XBMC, users will be greeted with a single, uniform, clean background image that may be altered at the user’s preference (**Note**: the code to change the background image is not available in this snapshot, so keep an eye out for nightlies and the June cycle). The default font has been switched to Android’s Roboto font. Weather forecasts as well as the home screen “recently added” lists have been bumped up to 10 scrollable items, and the Music category has gotten “recently added” albums. Finally, a “global search” bar has been added to the home screen so that those who have a lot of media can go directly to whatever they are looking for. (At the time of this writing, however, the global search bar has been know to cause some issues, at least on the Windows side, so be careful when trying it out.) **Update:** At the time of this writing, in order to use global search, users must install it as an addon in Addons-\>Program Addons.

## Our first second 64bit platform

On the platform side, Davilla has drastically updated the build process for OSX. As of this cycle, XBMC for PPC is no longer available. On the upside however, XBMC is now a 64bit program in OSX and users may feel a measurable performance increase. Given how long XBMC4Xbox has lasted, PPC holdouts should probably not fear too much about this shift, as, if demand continues to exist, I have no doubt that a builder somewhere will continue to build XBMC for PPC. **Note**: while this transition has occurred in code, the automated alpha build available below is still only 32bit. Keep an eye out next month and in nightlies for the first build by our buildbot in 64bit. Update: It appears that 64bit Linux users have actually been enjoying 64bit XBMC since 2008, thereby making OSX our second 64bit platform. Apologies for the earlier misstatement.

## Conclusion

That covers some of the more notable and easily visible changes in this cycle. For a full list of all the May changes, feel free to take a look at our list of [May milestones](https://github.com/xbmc/xbmc/issues?milestone=2&page=2&state=closed "May Changelog"). Also, keep an eye out for the June Cycle. Or, if you are feeling a bit brave and a bit lucky, just start [downloading now](http://mirrors.xbmc.org/snapshots/ "XBMC 11.0 - May Snapshot download")! At the moment, builds available are on the Windows and OSX platforms. Given the additional complexities of distribution, builds for iOS and Linux are not yet available.
