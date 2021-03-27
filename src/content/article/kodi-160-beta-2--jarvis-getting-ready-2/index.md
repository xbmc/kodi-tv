---
title: "Kodi 16.0 beta 2 – Jarvis is getting ready #2"
date: 2015-11-21T03:00:00Z
author: Martijn Kaijser
featured_image:
  src: /images/blog/Kodi-Wallpaper-blue.webp
  title: "Kodi-Wallpaper-blue"
  alt: "Kodi-Wallpaper-blue"
---

Only a week ago we announced 16.0 beta 1 and with this announcement we are releasing beta 2. Why the rapid succession of these releases you might wonder? By doing more releases in the shorter period we reduce the amount of changes that are included in each one. Instead of a huge list of changes it now only has several which gives a better overview. The advantage of that is possible regressions get picked up way faster and that you as user also get the benefit of not having to wait a long time to get these fixes.

This Release Early Release Often (RERO) is what we as a team have decided to go forward with as we see the benefits of this approach. Our developers don’t have to wait a very long time before their features get included in a release and you a user will also get to try them out without having to wait many months. Enough about the RERO approach as we’ll soon devote a special review about this.

## New in this beta

Well not exactly new but certainly something that got overlooked a lot is getting your music scanned to library. For videos it’s quite obvious there’s a library where you can scan in all your movies and tv show from your local or remote storage. Setting this up is relatively straight forward because when you add a source it immediately asks if you want to add it to the library. For music this was anything but obvious. You add a new music source which contain all your music files and that was it. Although that was how it seemed. Somewhere hidden in the context menu _(which you pull up with right or using “C” key)_ there was an option _scan to library_. This magically started scanning your music files and reading all the tag data which contain artist, title, year and whatever more in a nicely organised library. Time to make it more obvious.

    [![Add music source](/sites/default/files/uploads/Kodi-v16-add_music_source-300x168.webp)](/sites/default/files/uploads/Kodi-v16-add_music_source.webp) [![Scan music to library](/sites/default/files/uploads/Kodi-v16-add_music_scan-300x168.webp)](/sites/default/files/uploads/Kodi-v16-add_music_scan.webp)    After you added a new music file source it will now ask you if you want to scan all the files in that folder using the tag data in those files and organise it for you.

### Caveates to music library:

- • Your music needs to be properly tagged. For example with ID3v1, ID3v2.3, ID3v2.4, Vorbis Comments or APE
- • If not properly tagged Kodi can’t properly organise it and things might be completely misplaced.
- • Properly tagging music files can be a tedious job however there are several tools for assisting on that: [MusicBrainz Picard](https://picard.musicbrainz.org/), [Mp3Tag](https://www.mp3tag.de/en/), [TagScanner](http://www.xdlab.ru/en/) and so on
- • Scanning these files could take quite a while before it’s finished depending on the amount

### Advantages to music library:

- • You will get an awesome looking library view just like for movies and tvshows
- • You can search your music files
- • Library splits up the music in sections: Genres, Artists, Albums, Singles, All songs, Years, Top 100 _(based on your playback)_, Recently added/played albums, Compilations
- • You can split everything up even further using [smartplaylists](https://kodi.wiki/view/Smart_playlists)
- • You can rate your music and filter based on that
- • Since Kodi also acts as UPnP server you can share them over you home-network if the clients support this
- • You can scan for additional information like artist biography or album review/synopsis _(right click or C key in album or artist library)_
- • This can be enabled by default in settings -\> music -\> library -\> “Fetch additional information during updates”
- • You can change the default language for online information by going to settings -\> addon-ons -\> my add-ons -\> Information providers -\> Album or artist information -\> open the universal album or artist scraper

Although music library is not yet at the same level as movies or tv shows, there is certainly work being done in this area to make it better. Stay tuned for next version.

Example of tagging your album with MusicBrainz Picard

## Fixes done in this beta 2:

- • Fixed: Library export now shows the correct dialogs
- • Fixed: Don’t include broken add-ons in the update panel which is accessed through add-on information
- • Fixed: Next recording widget for PVR
- • Fixed: Timer dialog fixes for PVR
- • Fixed: Ignore volume changes on corked sink for Pulse
- • Fixed: Don’t show repeating timers on PVR recording list
- • Fixed: Redact file name in log output for smb://

## An enormous list of improvements

A lot of changes went in Kodi 16. Removing old code, splitting up parts in more logical chunks and making it all more resilient to future changes. All these changes are part of a massive change list that only makes sense to developers actually knowing what the source code does. In short we will no bother you all with summing up the list. It’s just something that is worth mentioning that not all improvements have to be actual features and are visible to users. We prefer that the program actually works than adding bells and whistles.

## Known problems in this beta

As with all developments we sometimes hit problems that need a little more time. One of the problems was export library but as you read above that has now been fixed. One of the other known problems is using profiles. With the splitting of skin settings we hit a small regression that affects users who are using the profile feature. Switching will possible cause your profile to be reset so in case you use this feature we suggest to not upgrade to this version. The other is file manager with touch control. It will still work for remotes and keyboard but touch is currently not working in that specific section.

We will make sure try to resolve these issues before the final version.

## Improvements so far in version 16

More in depth information can be found through the following links about the 16 release.

- **• [Kodi 16.0 beta 1 announcement](/article/kodi-160-beta-1-jarvis-getting-ready)**

- • [Kodi 16.0 Alpha 1&2](/article/kodi-160-alpha-1-2-jarvis-your-service)
- • [Kodi 16.0 Alpha 3](/article/kodi-16-alpha-3)
- • [Kodi 16.0 Alpha 4](/article/kodi-160-alpha-4-jarvis-nearing-completion)

## Add-ons

**General:** So far in version 16 there are no add-on changes that would impact any add-ons except for PVR. Since our 12.x Frodo release there have been some gradual changes but in general all add-ons, even from that time should still work, of course there are some exceptions. If the add-ons worked in Gotham, Helix and Isengard then we are happy to say that all these add-ons should still work.

**Skins:** Sadly due to the amount of changes we’ll have to announce that skins will have certain parts non working. This beta will mark any version 15 skin as incompatible and will ask you to switch back to Confluence. This means that for you to continue using Kodi 16.0 you will have to switch back to Confluence or wait till the skin you use has been updated in our repository. Good new however is that a variety of skin have already start updating to latest changes.  
 The following skins are already updated for version 16 and will auto-update when you upgrade. We’re sure more will follow soon.

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

## At Kodi DevCon this year we spent a lot of time talking about how to better recognize our community, and this solution was proposed. We’re going to try featuring a new, different shirt every month designed by a community member. So this month, thanks to Sam Fisher for an awesome design! Sam was a major help in our logo search and makes most of that cool artwork you see on [Facebook](https://www.facebook.com/XBMC/photos/a.10150616705636641.378985.20916311640/10153158972611641/?type=3&theater). If you would like to be the featured artist next month, post your design in the[shirt forum thread](https://forum.kodi.tv/showthread.php?tid=246239)! Also, be sure to browse through the available options. There are multiple colors of shirts and – it being winter time – we’ve also made hoodie versions available. T-shirt is available up to 5XL and the hoodie to 2XL and shipping is worldwide at a very reasonable fee. This design is only available for a limited amount of time! **Only couple days left……** Conclusion

Should you want to download and install this alpha (monthly) build please visit our download page.

- - [Official Kodi 16.0 development downloads](/download)
- - Raspberry Pi versions can be found on the [forum](https://forum.kodi.tv/forumdisplay.php?fid=166)

Please report any problems on our forum <https://forum.kodi.tv/> and not on the release announcement.

### Donations or getting involved

Getting involved is quite easy. Simply take the plunge and start using these 16.0 Jarvis builds. If you use these builds, we encourage you to report problems with these builds on our forum first and after that, if asked, submit bugs on Trac (following this guide: [How to submit a bug report](https://kodi.wiki/view/HOW-TO:Submit_a_bug_report)). Do note that we need detailed information so we can investigate the issue. We also appreciate providing support in our [Forums](https://forum.kodi.tv/ "Kodi Forums") where you can. You can of course also follow or help promote Kodi on all available social networks. Read more on the [get involved](/get-involved) page.  
 We are always happy to receive a [donation](/contribute/donate "Donate") by which you show your support and appreciation. All donations go towards the XBMC foundation and are typically used for travel to attend conferences, any necessary paperwork and legal fees, purchase necessary hardware and licenses for developers and hopefully the yearly XBMC Foundation Developers Conference.
