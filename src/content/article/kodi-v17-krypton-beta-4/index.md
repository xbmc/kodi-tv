---
title: 'Kodi v17 "Krypton" Beta 4'
date: 2016-10-21T03:00:00Z
author: Martijn Kaijser
featured_image:
  src: /images/blog/Kodi-Wallpaper-31C-1080p_samfisher.webp
  title: "Kodi-Wallpaper-31C-1080p_samfisher"
  alt: "Kodi-Wallpaper-31C-1080p_samfisher"
---

Kodi 17 features a huge amount of work in areas like video playback, live TV and PVR/DVR, the music library, skinning and more. It features a new default skin, as well as a new default touchscreen skin, named Estuary and Estouchy, respectively. With all this work done over the months some bugs might slip through and were hoping to quickly squash the coming beta releases. The changes for this fourth beta are the result of the continuous effort from the developers, either from inside the team or outside to get v17 into final release shape. and any outside. We sure would like to thank every one involved with either development, testing or simply helping out others with question. Below is a condensed list of fixes and changes done in this beta 4 release.

## Fixes done in this Beta 4:

• Fix certain types of 16bit encoded passthrough streams on OSX  
 • Fix activate/deactivate on read only timers  
 • Fix reading interlaced modes from defaultsettings when set to none  
 • Fix compilation albums, last played rules and fix missing sort order rules in smartplaylists  
 • Fix relative seeks on video playback  
 • Fix info dialog for recordings on home screen  
 • Don’t load inputstreams on startup if they are disabled  
 • Fix subsequent seeks with video playback  
 • Explicitly check for DTS capability for making settings visible  
 • Add ARMv8A 64bit builds for Android  
 • Add GetLastModifiedDate to the webserver  
 • Fix playback of DVD ISO files  
 • Fix focus of list items in media windows (like plugins)  
 • Change spinners options in smartplaylist editors to a select menu  
 • Add workaround for AMD/ATI cards regarding interlaced content  
 • Fix gapless playback for music  
 • Fix controller on NVIDIA Shield TV not working after it when to sleep  
 • Fix video playback when skipping beyond end of file on mp4 videos  
 • Improve crashlog reporting for UWP app in Windows Store  
 • Export max ratings to NFO files by default  
 • Fix hardware decoding on some mpeg2 files and DVDs for AMD/ATI cards as their drivers aren’t that good  
 • Fix aspect ratio calculation for 3D modes  
 • Fix video playback in image slideshows  
 • Fix channel group change in PVR  
 • Fix several memory leaks

A full list can be found [here](https://github.com/xbmc/xbmc/pulls?q=is%3Apr+milestone%3A%22Krypton+17.0-beta3%22+is%3Aclosed)

#### Known problems

• Upgrading the skin you are currently using fails on Windows.  
 • PVR and other binary addons fail load on Windows.  
 • Possible video freezes on Raspberry Pi and Android.

We are trying to find the cause solve these problems. Of course there are some more however these are the most noticeable ones.

## What’s new?

This round we didn’t really add new features as the focus was to further improve our code and solving possible bugs. We do have some more improvements lined up for next beta so stay tuned…….

Windows Store

[![KODI_BLOG_WIN_300x300_C](/sites/default/files/uploads/KODI_BLOG_WIN_300x300_C-160x160.webp)](/article/kodi-goes-windows-store)In case you missed the big news some time ago, Kodi got added to the Windows Store as a Desktop Bridge UWP app. It is still the same Kodi version you are used to use, without any limitations. Although it is still possible (and always will be) to download and install Kodi from our website, it is now also possible for Windows 10 users to download and install Kodi from the Windows Store. This brings a few benefits, such as automatic updating. The Windows Store application uses the same _userdata_ as the version from our website so you can switch between the two versions without issues. NOTE: This also means that if you are currently running Kodi v16 and want to try out the Windows Store version, your Kodi databases and add-ons will be upgraded to the v17 versions. You might want to make a backup of the userdata before! You can read the full announcement here: [Kodi goes Windows Store](/article/kodi-goes-windows-store)

**NOTE**: Since it takes a bit of time to publish in Windows Store you might need to wait a bit till the update is available.

All in all this Beta 4 might not seem very excited but that’s how it’s supposed to be. We’re simply focusing more on stability and working out the details than keep adding bells and whistles.

## Conclusion

As previously noted, this is only a small summary of all the improvements in Kodi 17. For more, see the [Alpha 2](/article/kodi-v17-krypton-alpha-2 "Kodi v17 “Krypton” Alpha 2") and [Alpha 3](/article/kodi-v17-krypton-alpha-3 "Kodi v17 “Krypton” Alpha 3") posts. Should you want to download and install this build please visit our download page. You can install these build just on top of your current Kodi installation.

• [Official Kodi 17.0 development downloads](/download) (near the bottom of the page)  
 • [LibreELEC](https://libreelec.tv/downloads/) Raspberry Pi / x86 versions can be found [here](https://libreelec.tv/downloads/)

Please report any problems on our forum [http://forum.kodi.tv](https://forum.kodi.tv/) and not on the release announcement. Don’t forget we also have some official tablet/phone remote controls for both Android and iOS. You can find the links to them on the download page.

### Donations or getting involved

Getting involved is quite easy. Simply take the plunge and start using these 17.0 Krypton builds. If you use these builds, we encourage you to report problems with these builds on our forum first and after that, if asked, submit bugs on Trac (following this guide: [How to submit a bug report](https://kodi.wiki/view/HOW-TO:Submit_a_bug_report)). Do note that we need detailed information so we can investigate the issue. We also appreciate providing support in our [Forums](https://forum.kodi.tv/ "Kodi Forums") where you can. You can of course also follow or help promote Kodi on all available social networks. Read more on the [get involved](/get-involved) page. We are always happy to receive a [donation](/contribute/donate "Donate") by which you show your support and appreciation, and t-shirts and Raspberry Pi cases may still be found on the sidebar for purchase. All donations and other income goes towards the XBMC foundation and are typically used for travel to attend conferences, any necessary paperwork and legal fees, purchasing necessary hardware and licenses for developers and hopefully the yearly XBMC Foundation Developers Conference.
