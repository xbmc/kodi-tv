---
title: 'Kodi 16.0 "Jarvis" - Release Candidate 1'
date: 2016-01-20T03:00:00Z
author: Martijn Kaijser
featured_image:
  src: /images/blog/Kodi16-rc.webp
  title: "Kodi16-rc"
  alt: "Kodi16-rc"
---

The time has come to bring you all Release Candidate 1 for Kodi v16. It took a bit longer than we anticipated due to some problems along the way though they should be under control now. This release consists of some nice features but more importantly the continues effort on making the underlying code more mature and future proof which should result in a more stable Kodi in general.

Some of you commented on several occasion that we should first fix the “known problems” in our previous versions before jumping to the next one. The fact is that fixing those problems correctly is such an undertaking that we simply can’t keep working on the previous one. Our team vision is to keep moving forward and along the way release version for users to use and enjoy that are considered stable enough. We don’t force people to upgrade so if you like an older Kodi version for some reason just keep using it. This vision is known as Release Early Release Often (RERO) on which we’ll make a more in depth review soon.

With that said lets focus on some things that have been changed and added which are noticeable for the end users.

What did change in Kodi 16:

- • Implement the more future proof DirectX11 for Windows which still works for DirectX9 video cards;
- • Event logging which among others shows which video files didn’t got added to your library;
- • Skin settings are now stored as separate files like any other add-on which makes migrating settings a lot easier;
- • Image resource add-ons which provide a single point of entry for skins to share common used images like movie studio icons and record labels which saves quite a lot of space and bandwidth;
- • Audio DSP (_Digital Signal Processing_) add-on integration and are already included which could make things possible like equalizers, sound processing, fake surround and more
- • PVR/DVR section has been extended and improved massively which now also handles series recording
- • Music library improvements which includes asking to scan to library when adding locations and also better tag scanning
- • Button long-press which extends the functionality of a single button to handle two functions which is great for button deprived remotes
- • User interface now supports a new stereoscopic depth effect for 3D TVs or VR headsets
- • Extend the UPnP server/client integration between Kodi installations
- • Android now support a Surface Rendering which keeps the interface at normal HD resolution while allows playback of 4K on supported devices
- • Removal of the infamous libstagefright on Android which served us for the past years while the Android platform matured to a fully fetaured MediaCodec
- • Add-on manager underwent heavy changes which includes slightly different structure, per add-on auto-update on/off switch, better update/rollback support to choose from repos,
- • Extend the included keyboard layouts which includes Korean and Chinese
- • Improved multi-touch support which now also works on Linux
- • Gives skin developers a more reliable platform to work from and reduce amount of work for adapting to new Kodi versions
- • Greatly improved audio and video playback in general

  [![Event logging](/sites/default/files/uploads/EventLogging02-300x168.webp)](/sites/default/files/uploads/EventLogging02.webp) [![Scan music to library](/sites/default/files/uploads/Kodi-v16-add_music_scan-300x168.webp)](/sites/default/files/uploads/Kodi-v16-add_music_scan.webp) [![EPG](/sites/default/files/uploads/v16-epg-300x168.webp)](/sites/default/files/uploads/v16-epg.webp) [![v16-recordings](/sites/default/files/uploads/v16-recordings-300x168.webp)](/sites/default/files/uploads/v16-recordings.webp) [![ADSP manager](/sites/default/files/uploads/v16-adsp-manager-300x168.webp)](/sites/default/files/uploads/v16-adsp-manager.webp) [![ADSP Equalizer](/sites/default/files/uploads/v16-adsp-eq-300x168.webp)](/sites/default/files/uploads/v16-adsp-eq.webp) [![v16-addon auto update](/sites/default/files/uploads/v16-addon-auto-update-300x168.webp)](/sites/default/files/uploads/v16-addon-auto-update.webp) [![v16-keyboards](/sites/default/files/uploads/v16-keyboards-300x168.webp)](/sites/default/files/uploads/v16-keyboards.webp)

With the list above we only highlighted some of the more noticeable features. The complete list is huge which could fill several pages. A lot of changes went in Kodi 16 like removing old code, splitting up parts in more logical chunks and making it all more resilient to future changes. All these changes are part of a massive change list that only makes sense to developers actually knowing what the source code does. In short we will not bother you with summing up that list. It’s just something that is worth mentioning that not all improvements have to be actual features and are visible to users. We prefer that the program actually works than adding new bells and whistles. Most of the times new features are just a side effect of cleaning up our code.

## Improvements so far in version 16

More in depth information can be found through the following links about the 16 release. _Visit the other announcements listed below for previous beta fixes._

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

**Skins:** Sadly due to the amount of changes we’ll have to announce that skins will have certain parts non working. This beta will mark any version 15 skin as incompatible and will ask you to switch back to Confluence. This means that for you to continue using Kodi 16.0 you will have to switch back to Confluence or wait till the skin you use has been updated in our repository. Good new however is that a variety of skin have already start updating to latest changes.  
**Available skins:** The following skins are already updated for version 16 and will auto-update when you upgrade. We’re sure more will follow soon.

- • Aeon Nox 5
- • Amber
- • AppTV
- • Black Glass Nova
- • Chroma
- • Confluence
- • Eunique
- • KOver
- • Mimic
- • Nebula
- • Rapier
- • re-Touched
- • Titan
- • Transparency!

## Conclusion

Should you want to download and install this build please visit our download page.

- - [Official Kodi 16.0 development downloads](/download)

Please report any problems on our forum [http://forum.kodi.tv](https://forum.kodi.tv/forumdisplay.php?fid=111) and not on the release announcement.

## Official remotes

In addition to creating Kodi, the members of Team Kodi have created official remotes to be installed on your tablet or phone. These can take control of your Kodi installation from where you browse your movies, tvshows, PVR/DVR, start add-ons and navigate through the interface.

    **Kore™ (Android)** **Official Kodi Remote (iOS)**   [![](https://developer.android.com/images/brand/en_generic_rgb_wo_45.webp)](https://play.google.com/store/apps/details?id=org.xbmc.kore) [![](https://devimages.apple.com.edgekey.net/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg)](https://itunes.apple.com/en/app/official-xbmc-remote/id520480364)   [![org.xbmc.kore](/sites/default/files/uploads/org.xbmc_.kore_.webp)](https://play.google.com/store/apps/details?id=org.xbmc.kore) [![Official Kodi Remote (iOS)](/sites/default/files/uploads/qrcode.webp)](https://itunes.apple.com/en/app/official-xbmc-remote/id520480364)    Like Kodi itself, both official remotes are free and open source software.

### Donations or getting involved

Getting involved is quite easy. Simply take the plunge and start using these 16.0 Jarvis builds. If you use these builds, we encourage you to report problems with these builds on our forum first and after that, if asked, submit bugs on Trac (following this guide: [How to submit a bug report](https://kodi.wiki/view/HOW-TO:Submit_a_bug_report)). Do note that we need detailed information so we can investigate the issue. We also appreciate providing support in our [Forums](https://forum.kodi.tv/ "Kodi Forums") where you can. You can of course also follow or help promote Kodi on all available social networks. Read more on the [get involved](/get-involved) page.  
 We are always happy to receive a [donation](/contribute/donate "Donate") by which you show your support and appreciation. All donations go towards the XBMC foundation and are typically used for travel to attend conferences, any necessary paperwork and legal fees, purchase necessary hardware and licenses for developers and hopefully the yearly XBMC Foundation Developers Conference.
