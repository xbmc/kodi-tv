---
title: "Farewell to future Apple TV2 development"
date: 2015-01-27T03:00:00Z
tags:
  - Community
  - Developer
author: Memphiz
featured_image:
  src: /images/blog/Jailbreak-the-Apple-TV-2-With-Seas0nPass.webp
  title: "Jailbreak-the-Apple-TV-2-With-Seas0nPass"
  alt: "Jailbreak-the-Apple-TV-2-With-Seas0nPass"
---

Dear users,

As the current maintainer of the AppleTV2 platform for Kodi, I wanted you to know that I have decided to stop official support for it. I know that the fact that XBMC/Kodi runs on Apple’s black puck has been the main reason for buying one for many people, but it has become a dead end for Kodi.

If you are currently using an AppleTV2 for Kodi, you may already have realised how the quality of the XBMC/Kodi experience has degraded on the device since the release of Frodo. The HD playback is unstable and liable to crash the device, and the overall performance is beginning to fall behind other platforms which are based on more recent hardware. From a developer’s point of view the AppleTV2 is a major challenge because Apple never released any Software Development Kit for it. The fact that XBMC/Kodi has ever been able to run on it is a testament to the countless hours of hacking by Scott Davilla and Edgar Huceke. I want to personally give a big thanks to both of them for all they have done with the box. Without this work XBMC/Kodi would never have been able to support the iOS platform at all, and yet today it remains alive and well on numerous tablets and phones.

Maintaining the AppleTV2 for XBMC/Kodi became more and more demanding each time Apple decided to update the AppleTV2′s iOS Version. The big bang was iOS6 where I had to rewrite a substantial amount of the AppleTV2 specific code to do runtime hooking, an obscure means of adding functionality to iOS that Apple never intended iOS to have, because Apple made it even more obvious that they didn’t want 3rd party apps to be run on the black box by removing the private Framework which all our work previously relied upon. There are no tools to work for this platform – most of the work can only be done by trial and error and carefully watching log files. That’s not the way sane development works in 2015 anymore.

All in all I am sadly not able to restore the stability of Frodo in the current Kodi versions. The memory of the AppleTV2 is limited to 256MB and each time Apple decides to push a new app to it (like Netflix) there is less free memory for us. Also there is a lot of new code hitting our mainline tree daily and it’s almost impossible to keep an eye on its influences to this closed platform.

This virtual impossibility of maintaining stability while introducing new features and other refactors demanded by technological progress is why we will now stop building our code for this platform.

## The Final Apple TV 2 Release and the Future

The upcoming Kodi 14.1 will be one of the last official versions in which we will provide support for the AppleTV2. We will continue to provide support in the forum for the AppleTV2 (as long as it’s related to bad configurations or other things we can solve without code changes). The source code will stay in our tree until at least after the release of Kodi 15.0. At some point we may prune the code, but no official decisions have been made as to when. Users or other developers are, of course, welcome to fork the code and attempt to maintain it if they choose, much as XBMC4Xbox did for the original Xbox.

There are rumors that Apple wants to provide an SDK for the AppleTV3 at some point. If this happens, I will see if we can revive support for this platform in an official way (hopefully without the hacks, without the need of jailbreaking and with proper tools for development).

Thank you for using XBMC/Kodi on the AppleTV2 all these years,

Memphiz

Editors note: After release 14.1, a previously unplanned bugfix release came out. This version [Kodi 14.2](/article/kodi-142-helix-final-translation "Kodi 14.2 release announcement") also supported aTV2 and was the last official version.
