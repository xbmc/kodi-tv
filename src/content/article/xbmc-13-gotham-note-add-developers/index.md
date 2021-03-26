---
title: "XBMC 13 - Gotham: Note to Add-on developers"
date: 2013-11-19T03:00:00Z
author: Martijn Kaijser
featured_image:
  src: /images/blog/gotham_repo.webp
  title: "gotham_repo"
  alt: "gotham_repo"
---

As we now have reached feature freeze as you have read [here,](https://kodi.wiki/gotham-13-0-feature-freeze/) it’s safe to say that there will be no more fundamental changes done that would greatly influence the work that developers need to do to get ready for Gotham. This doesn’t mean changes are excluded but they should be minimal.

### Skins

Skins will undergo the most changes because of the difference in Gotham compared to Frodo. This due to changes in code handling, appearance, varying improvements and features.

Due to these changes we have set the GUI API version to 5.0.0 which is a mayor version bump compared to Frodo. This means that Frodo skins will need to be adapted to match the Gotham changes for them to fully work again. For now the GUI version will still be backwards compatible however this might change as we will near the Betas or Release-Candidates versions.

Due to the rather long list of changes I will not mention them specific.

- various new infolabels and infobools
- extend aspect-ratio and resolution flags
- 3D (stereoscopic) support
- change for the videodb:// and musicdb:// paths
- different settings levels
- context menu changes
- label positioning changes
- subtitle add-ons have been split up
- and more…

Hopefully these changes will not be to much work for skin developers to adapt to and we will see the number of true Gotham compatible skins rising before the final release of Gotham.

You can read up the complete list of changes in a dedicated forum thread that can be found here: [Changes to the skinning engine for XBMC Gotham](https://forum.kodi.tv/showthread.php?tid=158812)

### Python Add-ons

For python Add-ons also known better as scripts and plugins there will actually be very little change which I’m sure you will all welcome very much. So the good news is that if your Add-on work in Frodo it will most likely also work in Gotham. The only big changes are actually adding new features to the python API that can be used in several ways.

List of newly added features:

- extend Monitor() class with: onDatabaseScanStarted, onNotification
- add missing sort methods
- removing item from ControlList
- autoclose option for yes/no dialog
- background progress dialog as used by the library scan progress dialog
- notification dialog
- xbmcvfs.exists to support check if directory exists
- convertLanguage for converting between ISO 639-1, ISO 639-2 and normal language name i.e. Englisch
- add keyboard to dialog class
- removal of _$LOCALIZE[SCRIPTXXX]_ in global skinning engine.

Due to these changes we have set the minimum python API version to 2.1.0 which has to be set in addon.xml. Since this version was already available in Frodo it won’t affect your Add-on in any way. Any Add-on that still has a lower API version set will still work in Frodo but will be marked broken in Gotham.

You can read up the complete list of changes in a dedicated forum thread that can be found here: [Changes to the python API for XBMC Gotham](https://forum.kodi.tv/showthread.php?tid=173943). There’s also a thread with some minor tips that might prove useful [here](https://forum.kodi.tv/showthread.php?tid=173887).

The fully updated python API documentation can be found at: [XBMC PyDocs](http://mirrors.xbmc.org/docs/python-docs/)

### JSON-RPC

JSON-RPC which is used for requesting/sending data and controlling XBMC has also undergone little changes compared to Frodo. They mainly consist of several bug fixes and addition of new features.

List of most important newly added features:

- limits to Files.GetDirectory
- recursive parameter to Playlist.Item directories
- change for the videodb:// and audiodb:// paths as also mentioned for skins
- media parameter to Playlist.Item directory type
- favourites namespace
- profiles namespace
- and more…

The minimum API version for JSON-RPC is still set at 6.0.0 which only has effect for Add-ons. Any outside application needs to query the JSON-RPC introspect to see what version is available.

You can read up the complete list of changes in a dedicated forum thread that can be found here: [Changes to the JSON-RPC API for XBMC Gotham](https://forum.kodi.tv/showthread.php?tid=98551&amp;pid=1358657)

### Media information Scrapers

Well this will be the shortest section. Nothing has changed so far and any Frodo scraper should be fully compatible with Gotham.

### Add-on repository

[![gotham_repo2](/sites/default/files/uploads/gotham_repo2-300x186.webp)](/sites/default/files/uploads/gotham_repo2.webp)The main benefit of Gotham will be that it will use the same repository as Frodo. The main advantage is that it will save developers time and effort making separate versions for each XBMC version. If the Add-on works in Frodo it should also work in Gotham. However we would still like to ask to test this thoroughly if this is the case. Another advantage is on our side as it requires less time checking and pushing the Add-ons to the public. If your Add-on user API functions that are only available in Gotham you will need to request it to be added to Gotham only which will only make it available for Gotham users.

For skins however we will still require separate versions as there are to many changes in the skin engine between Frodo and Gotham. We understand this is a burden on developers scarce time but alas this is part of the continuing development we are doing. Especially for skin developers we have a special “Skin development repo” in which they can provide so called beta versions of their skins to users who are wiling to help test it out before releasing it to the larger audience. This repo has more relaxed rules compared to the official repository to help in providing a stepping stone to the final version. Read more in this dedicated [forum thread](https://forum.kodi.tv/showthread.php?tid=159372).

For more information about [Add-on development](https://kodi.wiki/view/Development) you can visit our wiki page about “[development](https://kodi.wiki/view/Development)” or visit our forum if you have specific questions.

If you feel ready to include you Add-on to our repository and make it public to our vast amount of users please read the following wiki page explaining the process: [Official Add-on repository](https://kodi.wiki/view/Official_add-on_repository). This page contains several rules and guidelines which need to be followed before we will allow it to be added. They may sound strict however they are there for several reasons to protect XBMC or the users. Of course our Add-on repository isn’t limited to English Add-ons only. We allow them for every region across the world as long as they follow our guidelines.

### Developer courtesy

At times some add-ons, either being it plug-ins or programs or the most beautiful skins become abandoned due the the developer loosing interest, high maintenance or more common and most important that his real life has a higher priority. As most if not all the add-ons are developed as open-source, any one is free to pick up the work where he left and take over support and development to continue the work. However before doing so please take the courtesy to take a few steps as courtesy.

- Try to contact the original developer through either the forum, his development repo or e-mailing him if possible.
- Most if not all devs appreciated fellow devs sending fixes to them to ease the development.
- Allow some time before actually taking over (few months). So the dev isn’t in for a surprise if he came back from holiday i.e.

If you are not sure feel free to ask around on steps to take. There are some great add-ons out there and it would be a shame if they were lost due to lack of time. So try to help out fellow developers out and I know for sure they will appreciate the effort taken.

## Conclusion

If you are an Add-on developer and would like to start working on either Frodo or Gotham Add-ons please visit our [download](https://kodi.wiki/download/) page to acquire the appropriate build of your needs and start coding.

which is of course not limited to English onl
