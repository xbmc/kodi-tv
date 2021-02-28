---
title: 'Kodi 14.0 Helix - Release candidate arrives'
date: 2014-11-29T03:00:00Z
author: Martijn Kaijser
featured_image:
  src: /images/blog/Splash1.png
  title: ''
  alt: ''
---
The last few months have certainly been rough-and-tumble, but we are pleased to announce the release candidate cycle for Kodi 14.0 Helix.

 This 14.0 release brings many updates and changes, not the least of which is the change to the software’s name and logo. The release candidate cycle will also be the first to include the official logo of Kodi! The ins and outs about the logo can be read [here](/article/introducing-kodi-logo) in case you are interested.

 A detailed changelog can be found under [milestones](https://github.com/xbmc/xbmc/milestones?state=closed) on our code repository, should you be interested. With that said, let’s take a look at some of the features that come with the 14.0 release candidate.

 The Next Generation of Video Codecs
-----------------------------------

 ![ffmpeg-logo](/sites/default/files/uploads/ffmpeg-logo-300x75.png)To begin, Kodi has been updated to use FFmpeg 2.4.3 For users, this means Kodi will now be capable of playing back h.265 (also known as HEVC) and VP9 video codecs. This could result in dramatically smaller video files sizes with exactly the same level of quality. A 40 GB file could be compressed to 20 GB. A 1 GB file could be compressed to 500 MB without any loss in perceivable quality. Users with particularly large libraries or interest in 4K video may be especially likely to appreciate this update. Software support for the VP9 video codec is also included.

 The caveat to this update is that the decoding of h.265 is entirely software based. This means most low power systems, such as those operating Android or iOS, may struggle compared to the heftier HTPCs or Intel NUCs and ZOTAC ZBOXes that are running desktop and laptop processors.

 Library Improvements
--------------------

 The Kodi Library is getting improvements both coming in and going out. On the input side, library scanning is receiving a massive speed boost, which should make the initial scan on Android and iOS devices quite a bit more spiritedly.

 On the output side, work continues, slowly but surely, on UPnP. Kodi is now significantly more compatible with servers like PlayOn and MediaBrowser, as client-related bugs have been dealt with. Further, communication between Kodi UPnP clients and Kodi UPnP servers continues to improve with proper or additional support for categories like date added, ratings, votes, and artwork, along with sorting for those new categories. UPnP search functions are also slowly working their way into Kodi.

 More User Control Over Kodi
---------------------------

 Two new features have been introduced with Kodi that should give users even more control over how the software works. First, users can now prevent add-ons from updating without a forced update, prevent add-on update notifications, or simply continue to work with add-ons auto-updating as they do today. To change add-on update settings, visit the Add-ons folder in System Settings, if you are using Confluence, click left with your keyboard or remote to open the side panel, where a number of options exist, including the option to hide any add-ons that aren’t expected to work in your region.

 Second, in the past the virtual keyboard on the screen that users of tablets and remote controls are forced to deal with has always been set to the western standard QWERTY style. It is now possible to change the layout to a variety of other language options. To do so, visit the International section of the Appearance folder in System Settings and select Keyboard layouts. (**Pro-tip**: If you are an English speaker living in the US, Australia, or New Zealand, you can also select a version of English that better suits your spelling style from the Language portion of the International section.)

 Android, iOS, and embedded
--------------------------

 [![retouched](/sites/default/files/uploads/retouched.png)](/sites/default/files/uploads/retouched.png)On the Android side, hardware playback improvements continue, including more and better support for various chipsets, improved fast forward and rewind capability, as well as 4K support for the AMLogic s802 chipset. On the iOS side, Airplay, which was fairly substantially broken by the update to iOS 7, appears to be almost entirely fixed on every platform save Android, which lacks certain software support, making Airplay playback only partially fixed on that platform. Additionally, support for the Freescale i.MX6 SystemOnChip has been added.

 Furthermore, for you tablet users we’ve now replaced the ageing Touched skin with the improved Re-Touched skin, which includes a number of tweaks to bring it more in line with the features Kodi has to offer.

 Windows, OSX, and Linux
-----------------------

 All three platforms continue to see improvements in audio playback and a reduction of many audio-related bugs that have been plaguing the platforms for a long time. Windows also sees improvement in DXVA video playback.

 PVR
---

 American PVR users will be happy to learn that Kodi 14 introduces support for ATSC sub-channels. All users of PVR may be happy to learn that all PVR windows have been rebuilt to be better and more efficient.

 A Few Warnings and Notices
--------------------------

 This release marks the switch to the new name Kodi. When you install this release candidate, your library and add-ons will be moved to Kodi, making reverting back to 13.2 fairly difficult. As such, it is recommended that you [back up your library](https://kodi.wiki/view/HOW-TO:Backup_the_library "How to backup the library") [as well as your settings](https://kodi.wiki/view/Backing_up_XBMC) before installing Kodi.

 Also, as Kodi is an unsigned application on OSX, you may need to go through a slightly different process to start it the first time. After you have copied Kodi to the Applications folder, you will need to “right click” or “two finger click” Kodi from within the Applications folder and select “Open” and then accept the warning. You should only need to do this the first time you run Kodi.

  Download
--------

 To download, please visit our download page. Over the next few days/weeks, we anticipate putting out additional release candidates fairly rapidly. As we don’t expect very many changes to features and fairly limited fixes, we will likely not put out blog posts for every release candidate. Instead, keep and eye on our social networks for updates, and Kodi itself will keep you updated when a new release candidate is ready. If fairly significant changes occur, we will write a blog post on the topic.

 
 * * [Official Kodi 14.0 downloads](https://kodi.wiki/download/)
 
 The first ever Kodi T-Shirt
---------------------------

 [![](/sites/default/files/uploads/kodishirt.png)](https://teespring.com/kodiheroshirt2014)Because of your generosity in t-shirt sales, straight-up donations, and word-of-mouth evangelizing, this project has lasted for 12 years and through four different names, and with your help, we all believe it can last twice that long again. This is the very first t-shirt sale we’re doing with the new Kodi logo design. We’re mostly doing this sale because our developers wanted a cool new shirt, but we figured we probably weren’t the only ones. So if you’d like the very first official Kodi shirt, have at it. Just follow the [link](https://teespring.com/kodiheroshirt2014) to get it.

 ### 

 ### 

 ### 

 ### How to Contribute

 If you use these builds, we encourage you to report problems with these builds on our forum first and after if asked submit bugs on Trac (following this guide: [How to submit a bug report](https://kodi.wiki/view/HOW-TO:Submit_a_bug_report)). Do note that we need detailed information so we can investigate the issue. We also appreciate providing support in our [Forums](https://forum.kodi.tv/ "XBMC Forums") where you can, or [donate](https://kodi.wiki/contribute/donate/ "XBMC Foundation Donations") to the XBMC Foundation if you like. For a current FAQ on Kodi 14, visit our [Helix FAQ](https://kodi.wiki/view/Kodi_v14_(Helix)_FAQ). You can of course also follow or help promote Kodi on all available social networks.

 