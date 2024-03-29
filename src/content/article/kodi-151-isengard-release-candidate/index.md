---
title: Kodi 15.1 Isengard - Release Candidate
date: 2015-08-09T04:00:00.000Z
author: Martijn Kaijser
tags:
  - Prerelease
featured_image:
  src: /images/blog/Kodi-Wallpaper-3A-1080p_samfisher.webp
  title: Kodi-Wallpaper-3A-1080p_samfisher
  alt: Kodi-Wallpaper-3A-1080p_samfisher
---
Once a ‘final’ version is released some new bugs and/or problems usually appear out of nowhere, and last release was no exception. Even though tens of thousands of users were already testing the 15.0 version before release, as soon as millions started using it, some problems we either did not think of or which we did not notice popped up. To counter some of these new issues, we’re bringing you this maintenance release candidate called 15.1 RC1 which has some additional fixes on top of the 15.0 release.

This is still a release candidate; once enough users have verified that these improvements work out well, and we did not introduce any major regressions, we’ll be releasing it as a final 15.1 version. To be safe just backup your [userdata (online manual)](https://kodi.wiki/view/Userdata) first.

It should be okay to just install this on top of your current Kodi 15.0 version. For the MySQL users out there, we never bump the database versions in our bugfix or maintenance releases – you can safely keep using it within your network.

We will continue to solve some remaining issues and release it as a next point release in the 15.x range.

### Fixes done in this RC 1 version

* • Flush renderbuffers when flushing video player
* • Fix broken network.bandwidth setting
* • \[pvr] fix stuttering introduced
* • Unsigned apps are not working on jailbroken iOS5.1 devices
* • Add installed languages to the list of possible stream languages
* • Ensure that file descriptor for logfile is NULL’ed
* • \[pvr] fix holding lock while querying backend
* • Fixes a crash when trying do delete a file in filemanager
* • Reimplement Cocoa_GetVolumeNameFromMountPoint
* • \[guilib] update label color for sliderex controls
* • CProgressJob: fix crash in DoModal
* • \[pvr] fix missing return in CGUIWindowPVRBase::OnBack
* • FFmpeg: Bump to 2.6.4
* • Handle startup splash as regular window
* • \[ios] – fix linkage for VTB framework for ios < 6 – fixes vtb on ios
* • \[ios] – fix broken native keyboard on ios 5.1.1 devices
* • fix wrong navigation in SmartPlaylistEditor.xml

The complete technical list can be found on our Github [milestones](https://github.com/xbmc/xbmc/milestones?direction=desc&sort=due_date&state=closed).

### Improvements so far in 15.0

More in depth information can be found through the following links about the 15.0 release.

* [Kodi 15.0 Alpha 1](/article/kodi-150-alpha-1-road-isengard)
* [Kodi 15.0 Alpha 2](/article/kodi-150-isengard-alpha-2)
* [Kodi 15.0 Beta 1](/article/kodi-150-isengard-beta-1 "Kodi 15.0 Isengard – Beta 1")
* [Kodi 15.0 Beta 2](/article/kodi-150-isengard--beta-2 "Kodi 15.0 Isengard – Beta 2")
* [Kodi 15.0 RC1](/article/kodi-150-isengard-rc-1)
* [Kodi 15.0 RC2](/article/kodi-150-isengard--rc-2)
* [Kodi 15.0 final](/article/kodi-150-isengard-one-release-rule-them-all)

## Add-ons

**General:** So far in 15.0 there are no add-on changes that would impact any add-ons except for PVR. Since our 12.x Frodo release there have been some gradual changes but in general all add-ons, even from that time should still work, of course there are some exceptions. If the add-ons worked in Gotham and in Helix then we are happy to say that all these add-ons should still work.

**Skins:** As of this moment, all skins that worked in 14.x *Helix* should still work in 15.0 *Isengard*. In the PVR sections there are certain changes that might be noticeable and need specific skin changes. These changes are minimal and shouldn’t cause any major problems in usability. There still might be some options still missing which you relied upon first. We’re sure that most skin creators will be updating the skins in due time. Before that happens you should be able to enjoy this beta build without any problems.

### Windows 10

Users who have installed Windows 10 should make sure that they have the correct video card drivers installed. We see a lot of problems that have to do with this reported on the forum. It’s not something we as team can do anything about. Make sure you have updated all drivers according to the manufacturer's website in case you are experiencing problems. Windows 10 has just been released and as such is still in active development. Another thing that might be helpful is installing the special Kodi 15.1 DirectX11 build which is mentioned a bit further down.

### DirectX 11 upgrade (not included in 15.0 or 15.1)

[![DX11](/images/blog/DX11.webp)](/images/blog/DX11.webp)Although this release post is all about the 15.0 version, mentioning the DX11 upgrade for next version is very important. Since switching from OpenGL in 2009, Kodi (and XBMC in the past) has used the DirectX 9 implementation for various tasks of rendering the user interface and media playback. This almost dates back to the XBOX days. With the hardware industry moving and focussing more on the newer DX11 with their drivers, more people have problems with running our outdated DX 9 version. This could range from simply not starting, crashing just after loading, playing videos or having problems with hardware acceleration. One of our developers *afedchin* took on this task and completely revised our DirectX 9 implementation and upgraded it to the more current standard of DirectX 11. Don’t worry if you still have an older card, we only use low level features so you don’t need to run to the shop for new gear. If you are having problems on Windows you can head to our forum where you can find the most recent build available which is currently based on our 15.0 release. We appreciate all the feedback we can get. Read more: [here on our forum.](https://forum.kodi.tv/showthread.php?tid=218274) Again this will not be part of our 15.x releases. It has already been successfully merged into our future 16.0 release.

## Conclusion

Should you want to download and install this build please visit our download page.

* [Official Kodi 15.1 downloads](/download)
* [v15 upgrade FAQ](https://kodi.wiki/view/Isengard_FAQ)

### Other Software

In addition to creating Kodi, the members of Team Kodi have created official remotes to be installed on your tablet or phone.

**Kore™ (Android)**

[![](https://developer.android.com/images/brand/en_generic_rgb_wo_45.png)](https://play.google.com/store/apps/details?id=org.xbmc.kore)

[![org.xbmc.kore](/images/blog/org.xbmc_.kore_.webp)](https://play.google.com/store/apps/details?id=org.xbmc.kore)

**Official Kodi Remote (iOS)**

[![](https://developer.apple.com/app-store/marketing/guidelines/images/badge-example-preferred.png)](https://itunes.apple.com/en/app/official-xbmc-remote/id520480364)

[![Official Kodi Remote (iOS)](/images/blog/qrcode.webp)](https://itunes.apple.com/en/app/official-xbmc-remote/id520480364)

Like Kodi™ itself, both official remotes are free and open source software.

### Get involved

Getting involved is quite easy. Simply take the plunge and start using these 15.0 Isengard builds. If you use these builds, we encourage you to report problems with these builds on our forum first and after that, if asked, submit bugs on Trac (following this guide: [How to submit a bug report](https://kodi.wiki/view/HOW-TO:Submit_a_bug_report)). Do note that we need detailed information so we can investigate the issue. We also appreciate providing support to other users in our [Forums](https://forum.kodi.tv/ "Kodi Forums") where you can, or [donate](/contribute/donate "XBMC Foundation Donations") to the XBMC Foundation if you like. You can of course also follow or help promote Kodi on all available social networks. Read more on the [get involved](/get-involved) page.