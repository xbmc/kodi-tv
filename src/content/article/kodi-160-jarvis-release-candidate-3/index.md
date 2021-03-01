---
title: 'Kodi 16.0 "Jarvis" - Release Candidate 3'
date: 2016-02-03T03:00:00Z
author: Martijn Kaijser
featured_image:
  src: /images/blog/Kodi16-rc.png
  title: 'Kodi16-rc'
  alt: 'Kodi16-rc'
---
It’s time for the third Release Candidate for Kodi v16. With this release candidate we added a small number of fixes that users brought to our attention. Since we only have a small team and we can’t test it all we must rely on users reporting potential problems on our forum and we try to fix them within our limited spare time. All in all this release is looking like it’s quite solid so far.

 Some of you commented on several occasion that we should first fix the “known problems” in our previous versions before jumping to the next one. The fact is that fixing those problems correctly is such an undertaking that we simply can’t keep working on the previous one. Our team vision is to keep moving forward and along the way release version for users to use and enjoy that are considered stable enough. We don’t force people to upgrade so if you like an older Kodi version for some reason just keep using it. This vision is known as Release Early Release Often (RERO) on which we’ll make a more in depth review soon.

 Fixes done in Release Candidate 3:

 
 * • Fix some possible DVD menu problems
 * • Fix selection of stacked multiple ISO files (movie.disc1.iso, movie.disc2.iso, movie.disc3.iso etc)
 * • Fix navigation in EPG grid when there’s channels have no EPG data available
 * • Add missing MOOD tag scanning for FLAC/Ogg/Xiph/Vorbis, ASF and MP4/iTunes like other file format
 * • Use local icon stored icon instead of downloading a new one when for the add-on update notification
 * • Fix CPU feature check on Android for newer kernels
 * • Fix not correctly selecting items in a list when list is updated or going to next page
 * • Fix “renderloop” crashes on Windows
 * • Fix accidental repeated button presses with long-press feature
 * • Added French AZERTY keyboard
 
 Fixes done in Release Candidate 2:

 
 * • Additional fixes done on saving setting when switching between different profiles
 * • Increase time-out when searching for audio devices on Windows which solves some cases of Kodi not starting
 * • Fix crash when unplugging USB devices
 * • Fix crash when choosing Add Timer in EPG window
 
 Please report any problems on our forum [http://forum.kodi.tv](https://forum.kodi.tv/forumdisplay.php?fid=111) and not on the release announcement.

 With that said lets focus on some things that have been changed and added which are noticeable for the end users.

 What did change in Kodi 16:

 
 * • Implement the more future proof DirectX11 for Windows which still works for DirectX9 video cards;
 * • Event logging which among others shows which video files didn’t got added to your library;
 * • Skin settings are now stored as separate files like any other add-on which makes migrating settings a lot easier;
 * • Image resource add-ons which provide a single point of entry for skins to share common used images like movie studio icons and record labels which saves quite a lot of space and bandwidth;
 * • Audio DSP (*Digital Signal Processing*) add-on integration and are already included which could make things possible like equalizers, sound processing, fake surround and more
 * • PVR/DVR section has been extended and improved massively which now also handles series recording
 * • Music library improvements which includes asking to scan to library when adding locations and also better tag scanning
 * • Button long-press which extends the functionality of a single button to handle two functions which is great for button deprived remotes
 * • User interface now supports a new stereoscopic depth effect for 3D TVs or VR headsets
 * • Extend the UPnP server/client integration between Kodi installations
 * • Android now support a Surface Rendering which keeps the interface at normal HD resolution while allows playback of 4K on supported devices
 * • Removal of the infamous libstagefright on Android which served us for the past years while the Android platform matured to a fully fetaured MediaCodec
 * • Add-on manager underwent heavy changes which includes slightly different structure, per add-on auto-update on/off switch, better update/rollback support to choose from repos,
 * • Extend the included keyboard layouts which includes Korean and Chinese
 * • Improved multi-touch support which now also works on Linux
 * • Gives skin developers a more reliable platform to work from and reduce amount of work for adapting to new Kodi versions
 * • Greatly improved audio and video playback in general
 
    [![Event logging](/sites/default/files/uploads/EventLogging02-300x168.png)](/sites/default/files/uploads/EventLogging02.png) [![Scan music to library](/sites/default/files/uploads/Kodi-v16-add_music_scan-300x168.png)](/sites/default/files/uploads/Kodi-v16-add_music_scan.png)   [![EPG](/sites/default/files/uploads/v16-epg-300x168.png)](/sites/default/files/uploads/v16-epg.png) [![v16-recordings](/sites/default/files/uploads/v16-recordings-300x168.png)](/sites/default/files/uploads/v16-recordings.png)   [![ADSP manager](/sites/default/files/uploads/v16-adsp-manager-300x168.png)](/sites/default/files/uploads/v16-adsp-manager.png) [![ADSP Equalizer](/sites/default/files/uploads/v16-adsp-eq-300x168.png)](/sites/default/files/uploads/v16-adsp-eq.png)   [![v16-addon auto update](/sites/default/files/uploads/v16-addon-auto-update-300x168.png)](/sites/default/files/uploads/v16-addon-auto-update.png) [![v16-keyboards](/sites/default/files/uploads/v16-keyboards-300x168.png)](/sites/default/files/uploads/v16-keyboards.png)     

 With the list above we only highlighted some of the more noticeable features. The complete list is huge which could fill several pages. A lot of changes went in Kodi 16 like removing old code, splitting up parts in more logical chunks and making it all more resilient to future changes. All these changes are part of a massive change list that only makes sense to developers actually knowing what the source code does. In short we will not bother you with summing up that list. It’s just something that is worth mentioning that not all improvements have to be actual features and are visible to users. We prefer that the program actually works than adding new bells and whistles. Most of the times new features are just a side effect of cleaning up our code.

 Improvements so far in version 16
---------------------------------

 More in depth information can be found through the following links about the 16 release. *Visit the other announcements listed below for previous beta fixes.*

 
 * • [Kodi 16.0 beta 5 announcement](/article/kodi-160-beta-5--last-jarvis-beta)
 * • [Kodi 16.0 beta 4 announcement](/article/kodi-160-beta-4--jarvis-getting-ready-4)
 * • [Kodi 16.0 beta 3 announcement](/article/kodi-160-beta-3--jarvis-getting-ready-3)
 * • [Kodi 16.0 beta 2 announcement](/article/kodi-160-beta-2--jarvis-getting-ready-2)
 * • [Kodi 16.0 beta 1 announcement](/article/kodi-160-beta-1-jarvis-getting-ready)
 
 
 * • [Kodi 16.0 Alpha 1&2](/article/kodi-160-alpha-1-2-jarvis-your-service)
 * • [Kodi 16.0 Alpha 3](/article/kodi-16-alpha-3)
 * • [Kodi 16.0 Alpha 4](/article/kodi-160-alpha-4-jarvis-nearing-completion)
 
 Add-ons
-------

 **General:** So far in version 16 there are no add-on changes that would impact any add-ons except for PVR. Since our 12.x Frodo release there have been some gradual changes but in general all add-ons, even from that time should still work, of course there are some exceptions. If the add-ons worked in Gotham, Helix and Isengard then we are happy to say that all these add-ons should still work.

 **Skins:** Sadly due to the amount of changes we’ll have to announce that skins will have certain parts non working. This beta will mark any version 15 skin as incompatible and will ask you to switch back to Confluence. This means that for you to continue using Kodi 16.0 you will have to switch back to Confluence or wait till the skin you use has been updated in our repository. Good new however is that a variety of skin have already start updating to latest changes.  
**Available skins:** The following skins are already updated for version 16 and will auto-update when you upgrade. We’re sure more will follow soon.

 
 * • Aeon Nox 5
 * • Amber
 * • AppTV
 * • Black Glass Nova
 * • Chroma
 * • Cirrus Extended
 * • Confluence
 * • Eunique
 * • KOver
 * • Mimic
 * • Nebula
 * • Rapier
 * • re-Touched
 * • Titan
 * • Transparency!
 
 Conclusion
----------

 Should you want to download and install this build please visit our download page.

 
 * * [Official Kodi 16.0 development downloads](/download)
 
 Please report any problems on our forum [http://forum.kodi.tv](https://forum.kodi.tv/forumdisplay.php?fid=111) and not on the release announcement.

 Official remotes
----------------

 In addition to creating Kodi, the members of Team Kodi have created official remotes to be installed on your tablet or phone. These can take control of your Kodi installation from where you browse your movies, tvshows, PVR/DVR, start add-ons and navigate through the interface.

    **Kore™ (Android)** **Official Kodi Remote (iOS)**   [![Google-play-store-icon](/sites/default/files/uploads/Google-play-store-icon-300x112.png)](/sites/default/files/uploads/Google-play-store-icon.png) [![](https://devimages.apple.com.edgekey.net/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg)](https://itunes.apple.com/en/app/official-xbmc-remote/id520480364)   [![org.xbmc.kore](/sites/default/files/uploads/org.xbmc_.kore_.png)](https://play.google.com/store/apps/details?id=org.xbmc.kore) [![Official Kodi Remote (iOS)](/sites/default/files/uploads/qrcode.png)](https://itunes.apple.com/en/app/official-xbmc-remote/id520480364)    Like Kodi itself, both official remotes are free and open source software.

 ### Donations or getting involved

 Getting involved is quite easy. Simply take the plunge and start using these 16.0 Jarvis builds. If you use these builds, we encourage you to report problems with these builds on our forum first and after that, if asked, submit bugs on Trac (following this guide: [How to submit a bug report](https://kodi.wiki/view/HOW-TO:Submit_a_bug_report)). Do note that we need detailed information so we can investigate the issue. We also appreciate providing support in our [Forums](https://forum.kodi.tv/ "Kodi Forums") where you can. You can of course also follow or help promote Kodi on all available social networks. Read more on the [get involved](/get-involved) page.  
 We are always happy to receive a [donation](/contribute/donate "Donate") by which you show your support and appreciation. All donations go towards the XBMC foundation and are typically used for travel to attend conferences, any necessary paperwork and legal fees, purchase necessary hardware and licenses for developers and hopefully the yearly XBMC Foundation Developers Conference.

  