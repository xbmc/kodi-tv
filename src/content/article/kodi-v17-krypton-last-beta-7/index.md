---
title: "Kodi v17 “Krypton” The last Beta 7"
date: 2016-12-18T03:00:00Z
author: Martijn Kaijser
featured_image:
  src: /images/blog/Kodi_Xmas.webp
  title: "Kodi_Xmas"
  alt: "Kodi_Xmas"
---

It’s almost Christmas and as such we wanted to bring you the last Beta version of Kodi 17. This means we have good hopes we have squashed the biggest and known issues and up next we will go to _Release Candidates_ which in the end will result in the final release. However let’s not get ahead of ourselves and first gather some more feedback on testing this Beta 7 version. The changes for this seventh an last beta are the result of the continuous effort from the developers, either from inside the team or outside to get v17 into final release shape. We sure would like to thank every one involved with either development, testing or simply helping out others with answering their questions.

## Fixes done in this Beta 7:

• Update Estuary and Estouchy skin with some bugfixes  
 • Enable IEC61937 audio passthrough support on Android for DTS-HD, TrueHD, DTS:X and ATMOS in case the Android version supports this  
 • Fix PVR channel OSD display conditions  
 • Fix possible crash in PVR EPG  
 • Fix multiple selection in file browser  
 • Fix duplicate context menu for PVR recordings  
 • Fix wrong window size on OSX  
 • Fix problem on Windows that currently in use skins couldn’t be updated  
 • Further improvement of cmake build system  
 • Various other improvements and fixes

A full list can be found [here](https://github.com/xbmc/xbmc/milestone/94?closed=1)

## What’s new?

In general nothing really as this was just about bugfixing and further finalising our new buildsystem.

Estuary and Estouchy: next generation

Past March we announced that v17 would feature a brand new default skin called Estuary and since then it has been included in every build we have released. During this period our developers kept improving on how it looked, behaved and made use of the latest features that got included from what is shaping up to be the final release of v17. Since more and more users also started to use these development builds we started to receive a lot of feedback, where most was positive there was also some negative or at least constructive comments. As we are not deaf to these comments and try to create the best experience, our skin developer _phil65_ went back to the drawing board and rethought on how to incorporate this feedback into wat should become the final skin. With some help from _ryanmah_ for the mockups, _ichabod-fletchman_ for helping out this didn’t resulted in a total rewrite but simply reworking some parts of how the skin looks and behaves. The underlying skin code still remains the same for a very large part except for the parts where a smarter way of doing this magic was found. The visual top layer what you will see should still feel quite familiar if you have used any past v17 builds as not everything was redone.

At same time the touch skin Estouchy also got matched by our senior skin developer ronie to match the Estuary look.

For some screenshot you can visit the release announcement here: [Default skin: Next Gen](/article/kodi-v17-krypton-default-skin-next-gen). Regardless you’ll see when you install this new update.

A new default web interface called Chorus2

Kodi has many hidden secrets and even team members don’t know the full potential it packs. One of those features you might not know is that Kodi also has a web-interface from which you can browse your library and start playback directly on your Kodi device. It’s something we’ve never really promoted that it was available and I’m not really sure why. However the past few years not much was changed to to it and it kinda fell into decay with only minor fixes done to keep it kind of functional. For Kodi v17 this has been radically changed as we have packaged up a brand new default web-interface called Chorus2.

[![chorus2-artist](/sites/default/files/uploads/chorus2-artist-800x450.webp)](/sites/default/files/uploads/chorus2-artist.webp)

For some screenshot you can visit the release announcement here: [A new webinterface called Chorus2](/article/new-webinterface-called-chorus2). Regardless you’ll see when you install this new update.

## Krypton nightly builds

As you may have noticed we only release a new beta or release candidate once in a while that includes a list of fixes that were done since previous release. Additionally we also create these so called _nightly builds_ specifically for Krypton that include the latest fixes that our developers have included and will end up in the next beta, release candidate or final release. By providing these builds we hope that users who install these will help us confirm the problem was fixed or identify if we accidentally created a regression from previous builds made. These nightlies are safe to install on top of the Kodi v17 you already have installed on your device and can be found on the download page. Be sure to get these builds from the **_Krypton_** folder and not from any other.

## Conclusion

As previously noted, this is only a small summary of all the improvements in Kodi 17. For more, see the [Alpha 2](/article/kodi-v17-krypton-alpha-2 "Kodi v17 “Krypton” Alpha 2") and [Alpha 3](/article/kodi-v17-krypton-alpha-3 "Kodi v17 “Krypton” Alpha 3") posts. Should you want to download and install this build please visit our download page. You can install these build just on top of your current Kodi installation without doing a reinstall or cleanup as we do a full migration if needed.

• [Official Kodi 17.0 development downloads](/download)

Of course we have also updated Windows Store with this latest version.  
[![Get it on Windows 10](https://assets.windowsphone.com/f2f77ec7-9ba9-4850-9ebe-77e366d08adc/English_Get_it_Win_10_InvariantCulture_Default.webp)](https://www.microsoft.com/p/kodi/9nblggh4t892?cid=koditvlinkbadge)

### Bug reports

Please report any problems on our forum [http://forum.kodi.tv](https://forum.kodi.tv/) and not on the release announcement as it is not a reporting or help section. Don’t forget we also have some official tablet/phone remote controls for both Android and iOS. You can find the links to them on the download page.

### Donations or getting involved

Getting involved is quite easy. Simply take the plunge and start using these 17.0 Krypton builds. If you use these builds, we encourage you to report problems with these builds on our forum first and after that, if asked, submit bugs on Trac (following this guide: [How to submit a bug report](https://kodi.wiki/view/HOW-TO:Submit_a_bug_report)). Do note that we need detailed information so we can investigate the issue. We also appreciate providing support in our [Forums](https://forum.kodi.tv/ "Kodi Forums") where you can. You can of course also follow or help promote Kodi on all available social networks. Read more on the [get involved](/get-involved) page. We are always happy to receive a [donation](/contribute/donate "Donate") by which you show your support and appreciation, and t-shirts and Raspberry Pi cases may still be found on the sidebar for purchase. All donations and other income goes towards the XBMC foundation and are typically used for travel to attend conferences, any necessary paperwork and legal fees, purchasing necessary hardware and licenses for developers and hopefully the yearly XBMC Foundation Developers Conference.
