---
title: "Kodi 16.0 beta 4 – Jarvis is getting ready #4"
date: 2015-12-12T03:00:00Z
author: Martijn Kaijser
featured_image:
  src: /images/blog/Kodi-Wallpaper-blue.webp
  title: "Kodi-Wallpaper-blue"
  alt: "Kodi-Wallpaper-blue"
---

With this announcement we are releasing beta 4. Why the rapid succession of these releases you might wonder? By doing more releases in the shorter period we reduce the amount of changes that are included in each one. Instead of a huge list of changes it now only has several which gives a better overview. The advantage of that is possible regressions get picked up way faster and that you as user also get the benefit of not having to wait a long time to get these fixes.

This Release Early Release Often (RERO) is what we as a team have decided to go forward with as we see the benefits of this approach. Our developers don’t have to wait a very long time before their features get included in a release and you a user will also get to try them out without having to wait many months. Enough about the RERO approach as we’ll soon devote a special review about this.

This we only have a small list of fixes that made it into this beta.

## Fixes done in this beta 4:

- • Fixed: several credentials leaking in the debuglog
- • Fixed: fix enabled status for audio DSP add-ons
- • Fixed: stop scraping album overriding tags when override tags Disabled
- • Fixed: Custom Music Node/Playlist Rule Based Queries
- • Fixed: Input.Select for PVR fullscreen windows with JSON-RPC
- • Fixed: ghost timers in EPG window
- • Fixed: sidemenu now playing buttons in Confluence
- • Fixed: mouse handling regression on Android
- • Fixed: don’t use cached results for dir checks in our Python API
- • Fixed: missing header label on clean EPG progress dialog
- • Fixed: [configure] make sure the top kodi src dir is always in INCLUDES

_Visit the other announcements listed below for previous beta fixes._

A lot of changes went in Kodi 16. Removing old code, splitting up parts in more logical chunks and making it all more resilient to future changes. All these changes are part of a massive change list that only makes sense to developers actually knowing what the source code does. In short we will no bother you all with summing up the list. It’s just something that is worth mentioning that not all improvements have to be actual features and are visible to users. We prefer that the program actually works than adding bells and whistles.

## Known problems in this beta

As with all developments we sometimes hit problems that need a little more time. One of the known problems is using profiles. With the splitting of skin settings we hit a small regression that affects users who are using the profile feature. Switching will possible cause your profile to be reset so in case you use this feature we suggest to not upgrade to this version. There is currently a fix pending for this but we could use some help testing. If you have problem regarding the profile switching not keeping your skin settings you can get a test build here: [LINK](https://forum.kodi.tv/showthread.php?tid=250820). Please comment in that forum thread if you still encounter problems or if it has been fixed. Please limit comments to only this particular problem.

## Improvements so far in version 16

More in depth information can be found through the following links about the 16 release.

- **• [Kodi 16.0 beta 3 announcement](/article/kodi-160-beta-3--jarvis-getting-ready-3)**
- **• [Kodi 16.0 beta 2 announcement](/article/kodi-160-beta-2--jarvis-getting-ready-2)**
- **• [Kodi 16.0 beta 1 announcement](/article/kodi-160-beta-1-jarvis-getting-ready)**

- • [Kodi 16.0 Alpha 1&2](/article/kodi-160-alpha-1-2-jarvis-your-service)
- • [Kodi 16.0 Alpha 3](/article/kodi-16-alpha-3)
- • [Kodi 16.0 Alpha 4](/article/kodi-160-alpha-4-jarvis-nearing-completion)

## Add-ons

**General:** So far in version 16 there are no add-on changes that would impact any add-ons except for PVR. Since our 12.x Frodo release there have been some gradual changes but in general all add-ons, even from that time should still work, of course there are some exceptions. If the add-ons worked in Gotham, Helix and Isengard then we are happy to say that all these add-ons should still work.

**Skins:** Sadly due to the amount of changes we’ll have to announce that skins will have certain parts non working. This beta will mark any version 15 skin as incompatible and will ask you to switch back to Confluence. This means that for you to continue using Kodi 16.0 you will have to switch back to Confluence or wait till the skin you use has been updated in our repository. Good new however is that a variety of skin have already start updating to latest changes.  
 The following skins are already updated for version 16 and will auto-update when you upgrade. We’re sure more will follow soon.

- • AppTV (added this week)
- • Black Glass Nova
- • Chroma
- • Confluence
- • Eunique
- • Mimic
- • Nebula
- • Rapier
- • re-Touched
- • Titan
- • Transparency!

## Community Designed Kodi Shirt and Hoodie

[![](/sites/default/files/uploads/kodi-graffiti-6-1446613526868.webp)](https://teespring.com/kodi-graffiti-6?kodi_site=beta1)

## At Kodi DevCon this year we spent a lot of time talking about how to better recognize our community, and this solution was proposed. We’re going to try featuring a new, different shirt every month designed by a community member. So this month, thanks to Sam Fisher for an awesome design! Sam was a major help in our logo search and makes most of that cool artwork you see on [Facebook](https://www.facebook.com/XBMC/photos/a.10150616705636641.378985.20916311640/10153158972611641/?type=3&theater). If you would like to be the featured artist next month, post your design in the[shirt forum thread](https://forum.kodi.tv/showthread.php?tid=246239)! Also, be sure to browse through the available options. There are multiple colors of shirts and – it being winter time – we’ve also made hoodie versions available. T-shirt is available up to 5XL and the hoodie to 2XL and shipping is worldwide at a very reasonable fee. This design is only available for a limited amount of time! Conclusion

Should you want to download and install this build please visit our download page.

- - [Official Kodi 16.0 development downloads](/download)
- - Raspberry Pi versions can be found on the [forum](https://forum.kodi.tv/forumdisplay.php?fid=166)

Please report any problems on our forum <https://forum.kodi.tv/> and not on the release announcement.

### Donations or getting involved

Getting involved is quite easy. Simply take the plunge and start using these 16.0 Jarvis builds. If you use these builds, we encourage you to report problems with these builds on our forum first and after that, if asked, submit bugs on Trac (following this guide: [How to submit a bug report](https://kodi.wiki/view/HOW-TO:Submit_a_bug_report)). Do note that we need detailed information so we can investigate the issue. We also appreciate providing support in our [Forums](https://forum.kodi.tv/ "Kodi Forums") where you can. You can of course also follow or help promote Kodi on all available social networks. Read more on the [get involved](/get-involved) page.  
 We are always happy to receive a [donation](/contribute/donate "Donate") by which you show your support and appreciation. All donations go towards the XBMC foundation and are typically used for travel to attend conferences, any necessary paperwork and legal fees, purchase necessary hardware and licenses for developers and hopefully the yearly XBMC Foundation Developers Conference.
