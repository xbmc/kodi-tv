---
title: "Kodi 14.0 - Helix Unwinds"
date: 2014-12-22T03:00:00Z
tags:
  - Release
author: Nathan Betzen
featured_image:
  src: /images/blog/Kodi_Xmas.webp
  title: "Kodi_Xmas"
  alt: "Kodi_Xmas"
---

Merry Christmas and happy holidays, everyone! We are proud to announce the release of Kodi 14.0, which comes with a new name, a new logo, and a wide variety of new features, but underneath the new coat of paint remains the same software we all love.

A detailed changelog for Kodi 14 can be found under [milestones](https://github.com/xbmc/xbmc/milestones?state=closed) on our code repository, should you be interested. With that said, let’s take a look at some of the features that come with Kodi 14.0.

## The Next Generation of Video Codecs

![ffmpeg-logo](/images/blog/ffmpeg-logo-300x75.webp)To begin, Kodi has been updated to use FFmpeg 2.4.4. For users, this means Kodi will now be capable of playing back h.265 (also known as HEVC) and VP9 video codecs. The use of HEVC and VP9 could result in dramatically smaller video files sizes with exactly the same level of quality. A 40 GB file could be compressed to 20 GB. Users with particularly large libraries or interest in 4K video may be especially likely to appreciate this update. Software support for the VP9 video codec is also included.

The caveat to this update is that the decoding of h.265 is entirely software based. This means most low power systems, such as those operating Android or iOS, may struggle compared to the heftier HTPCs or Intel NUCs and ZOTAC ZBOXes that are running desktop and laptop processors.

## Library Improvements

The Kodi Library is getting improvements both coming in and going out. On the input side, library scanning is receiving a massive speed boost, which should make the initial scan on Android and iOS devices quite a bit more spritely.

On the output side, work continues, slowly but surely, on UPnP. Kodi is now significantly more compatible with servers like PlayOn and MediaBrowser, as client-related bugs have been dealt with. Further, communication between Kodi UPnP clients and Kodi UPnP servers continues to improve with proper or additional support for categories like date added, ratings, votes, and artwork, along with sorting for those new categories. UPnP search functions are also slowly working their way into Kodi.

## More User Control Over Kodi

Two new features have been introduced with Kodi that should give users even more control over how the software works. First, users can now prevent add-ons from updating without a forced update, prevent add-on update notifications, or simply continue to work with add-ons auto-updating as they do today. To change add-on update settings, visit the Add-ons folder in System Settings; then, if you are using Confluence, open the side panel by clicking the left button or arrow on your keyboard or remote. The Add-ons side panel includes a number of options in addition to update settings, such as the option to hide any add-ons that aren’t expected to work in your region.

Second, in the past the virtual keyboard on the screen that users of tablets and remote controls are forced to deal with has always been set to the western standard QWERTY style. It is now possible to change the layout to a variety of other language options. To do so, visit the International section of the Appearance folder in System Settings and select Keyboard layouts. (**Pro-tip**: If you are an English speaker living in the US, Australia, or New Zealand, you can also select a version of English that better suits your spelling style from the Language portion of the International section.)

## Android, iOS, and embedded

![retouched](/images/blog/retouched.webp)On the Android side, hardware playback improvements continue, including more and better support for various chipsets, improved fast forward and rewind capability, as well as 4K support for the AMLogic s802 chipset. On the iOS side, Airplay, which was fairly substantially broken by the update to iOS 7, appears to be almost entirely fixed on every platform save Android, which lacks certain software support, making Airplay playback only partially fixed on that platform. Additionally, support for the Freescale i.MX6 SystemOnChip has been added.

Furthermore, for you tablet users we’ve now replaced the ageing Touched skin with the improved Re-Touched skin, which includes a number of tweaks to bring it more in line with the features Kodi has to offer.

## Windows, OSX, and Linux

All three platforms continue to see improvements in audio playback and a reduction of many audio-related bugs that have been plaguing the platforms for a long time. Windows also sees improvement in DXVA video playback.

On the Linux side, we’re excited to give our thanks to the team at Intel and particularly Chris Wilson at Intel who helped solve a Linux firmware bug that was causing crashes for Kodi after a certain period of time. Additionally, users of Kodi for Linux on Intel devices such as the NUC and Chromebox will now have hardware deinterlacing of Live TV and other interlaced content thanks to Kodi’s new implementation of VAAPI video post processing for Intel graphics. See [this thread](https://forum.kodi.tv/showthread.php?tid=165707 "VAAPI Kodi forum thread") for more info.

## PVR

PVR windows in Kodi have been rebuilt to be better and more efficient. Also, American PVR users, specifically, may be happy to learn that Kodi 14 finally introduces support for ATSC sub-channels.

## A Few Warnings and Notices

This release marks the switch to the new name Kodi. When you install this releases , your library and add-ons will be moved to Kodi, making reverting back to 13.2 fairly difficult. As such, it is recommended that you [back up your library](https://kodi.wiki/view/HOW-TO:Backup_the_library "How to backup the library") [as well as your settings](https://kodi.wiki/view/Backing_up_XBMC) before installing Kodi.

If you are using a skin other than the default Confluence, it is possible that you may find the software keyboard blank as a result of the previously mentioned keyboard layout upgrade. If so, you need to either switch to a new skin, or see if your skin has a Helix update. While Kodi automatically checks for addon and skin updates, you can speed up this process by visiting the addons browser from the settings menu and selecting “Check for updates.”

Also, as Kodi is an unsigned application on OSX, you may need to go through a slightly different process to start it the first time. After you have copied Kodi to the Applications folder, you will need to “right click” or “two finger click” Kodi from within the Applications folder and select “Open” and then accept the warning. You should only need to do this the first time you run Kodi.

Finally, there remain a few known bugs in Kodi 14.0 that should affect only a tiny portion of the population. In very rare cases Windows users may experience a Kodi crash. In such cases please disable the webserver in settings. We hope to have these issues resolved by the inevitable Kodi 14.1 release.

## Download

To download, please visit our download page.

- - [Official Kodi 14.0 downloads](https://kodi.wiki/download/)

### How to Contribute

If you use Kodi, we encourage you to report problems with it on our forum first and after – if asked – submit bugs on Trac (following this guide: [How to submit a bug report](https://kodi.wiki/view/HOW-TO:Submit_a_bug_report)). Do note that we need detailed information so we can investigate the issue. We also appreciate providing support in our [Forums](https://forum.kodi.tv/ "XBMC Forums") where you can and [donating](https://kodi.wiki/contribute/donate/ "XBMC Foundation Donations") to the XBMC Foundation if you like. For a current FAQ on Kodi 14, visit our [Helix FAQ](<https://kodi.wiki/view/Kodi_v14_(Helix)_FAQ>). You can of course also follow or help promote Kodi on any or all of our listed social networks.
