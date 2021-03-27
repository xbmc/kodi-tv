---
title: "XBMC 13 Gotham – September and October"
date: 2013-11-03T03:00:00Z
author: Martijn Kaijser
featured_image:
  src: /images/blog/xbmc-gotham-teaser2.webp
  title: "xbmc-gotham-teaser2"
  alt: "xbmc-gotham-teaser2"
---

Because of our Devcon 2013 meeting we were to busy to put up a decent monthly blog post. So let’s sum up the changes done so far after the September cyle.

### September cycle

ActiveAE – A Simpler Approach to Audio

With the September month’s alpha, we are also excited to introduce ActiveAE, an engine for audio that’s based off AudioEngine but designed to be faster, simpler, and lighter on the CPU. ActiveAE relies on FFmpeg for audio conversion and is available now on Windows, Linux, BSD, and Android. Very early work exists to get it working on OSX too, though no set date exists for its incorporation.

Features of ActiveAE include its being an event-based system; CPU load is significantly reduced, allowing for implementation on weaker systems like Android; Resampler quality can be chosen; gapless playback is now working; and E-AC3 is supported. In addition, quite a lot of little, difficult to narrow down bugs have been tracked down and fixed, including code that reaches all the way into SSE. This hopefully solves the issues we had in our Frodo release that a minority of the users experienced and improves the audio experience in general.

The list of individuals responsible for all this work is quite extensive with pieces touched by nearly the entire team, including wiso’s work on Windows and Voyager’s work debugging SSE and giving feedback, not to mention input from almost everyone on the Audio Settings rewrite. Special mention should go to both FernetMenta and fritsch, who led the charge. Finally, an extra special thanks to the many users who provided testing and feedback in the ActiveAE testing thread. This work couldn’t have been done without you.

As a heads up for next month, we have also refurbished the audio settings to make them easier to configure. You’ll be able to see that work now in nightlies or in next month’s alpha.

Of course there were more changes, but those changes mostly contained code re-factoring/improvement and bugfixing.

A complete change log for the interested can be found [here](https://github.com/xbmc/xbmc/compare/Gotham_alpha7...Gotham_alpha8)

### October Cycle

Actually for October there isn’t much to report for new features added. This months list contains a whole list of code re-factoring/improvement and bugfixing which we don’t want to bore you with.

_Android MediaCodec_:  
 This allows native use of the Android API for video playback on Android 4.1 (and up) devices

_Android x86 architecture support_:  
 We already provided Android build that run on ARM architecture devices however from this month on we will also provide x86 architecture builds.

_Ability to development on non-jailbroken devices_:  
 This allows developers who have an Apple developer account (so not for regular users!) to be able to run and development XBMC on non-jailbroken devices. This is however without and video HW acceleration support. So again, this is NOT for normal users, only for developers.

Complete change log for the interested can be found [here](https://github.com/xbmc/xbmc/compare/Gotham_alpha8...master).

## Dealing with OSX 10.9

As many of you may have experienced, 10.9 has caused a number of issues for our current releases. In addition to forcing us to prepare a 12.3 (coming soon), we’ve learned that 10.9 appears to have reset security settings. Now to install XBMC, you need to right click the application after it’s been installed and select “Open” from the list (this need only be done once).

Alternatively, you can go to System Preferences -\> Security & Privacy -\> General. From there, unlock the lock at the bottom of the window and “Allow apps downloaded from: Anywhere.” This second method is the preferred method, as you will no longer be bothered for future XBMC updates.

## Conclusion

So if you feel you are ready to try out a monthly build, it’s time to start downloading. Be aware though, that this is still alpha software which contains potentially several bugs. There is a good chance that this alpha will break on you.

- [Official XBMC downloads](https://kodi.wiki/download/)

**Note:** blog post image made by Schym Christian

### How to Contribute

If you use these builds, we encourage you to submit bugs in Trac, provide support in our [Forums](https://forum.kodi.tv/ "XBMC Forums") where you can, or [donate](https://kodi.wiki/contribute/donate/ "XBMC Foundation Donations") to the Foundation if you like. For a current FAQ on XBMC 13, visit our [Gotham FAQ](<https://kodi.wiki/view/XBMC_v13_(Gotham)_FAQ> "XBMC 13 FAQ").
