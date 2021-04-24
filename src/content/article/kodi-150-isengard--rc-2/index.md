---
title: "Kodi 15.0 Isengard – RC 2"
date: 2015-07-10T04:00:00Z
tags:
  - Prerelease
author: Martijn Kaijser
featured_image:
  src: /images/blog/kodi-system-15.webp
  title: "kodi-system-15"
  alt: "kodi-system-15"
---

Here it is, the second Release Candidate (RC) built for Kodi 15.0; freshly baked and ready to be served! Although we said that Kodi 15.0 is a “clean-up” edition, we still managed to squeeze in a couple of really nice features. So far we had around 1080 code change requests which were included since Kodi 14.2. This vast amount sums up in a pretty big list of improvements and clean-up being done by various developers for which we should show our everlasting gratitude. As such we will only highlight some of the bigger changes further on. Download link is also provided at the bottom.

## Google Play

Without a doubt the biggest news this year has been that Kodi is now [available in Google Play](https://play.google.com/store/apps/details?id=org.xbmc.kodi). You can download it at the previous link or using the following QR code.

[![](https://developer.android.com/images/brand/en_generic_rgb_wo_45.webp)](https://play.google.com/store/apps/details?id=org.xbmc.kodi)

[![](https://chart.googleapis.com/chart?cht=qr&chs=100x100&choe=UTF-8&chld=H|0&chl=https://goo.gl/gvJKBI)](https://play.google.com/store/apps/details?id=org.xbmc.kodi)

The benefits of installing the Google Play version of Kodi are fairly simple. You always get the most recent stable release without needing to mess with finding, downloading, and sideloading apks. With that said, we will continue to publish apks on our site, so if you’d rather sideload, or if your Android device doesn’t have Google Play, we’ve still got you covered. You should be able to install the Play Store version on top of your current Kodi install without any problems.

### Fixes done since RC 1 version

- • Fix endless loop in PVR section which causes high CPU load
- • Fix crash on opening conext menu item
- • Fix sorting by episodes
- • Don’t try to use hardware decoding for h264/10bit video files (don’t confuse with h265/10bit)
- • Fix playback of certain HEVC files
- • Avoid freezing/deadlock in peripheralmanager
- • Fix genres in smartplaylists
- • Fix grouping by artists in smartplaylists
- • Fix video calibration for Android
- • Make sure to download the OBB file when Play Store doesn’t
- • Some other technical changes….

### Biggest changes in 15.0 so far

Let’s continue with some of the changes that have been done since last stable release. As already mentioned, this is only a very tiny part of the list.

- • Minimal 10.7 Lion 64-bit required on Mac OSX
- • Minimal iOS 5.1 required and no more ATV2
- • Minimum Android 4.2 Jelly Bean MR1 required on Android
- • Various improvements in PVR section. This includes skin support and new PVR add-ons
- • Complete video database clean-up session on stored data (no data will be lost). This may take some time on first run
- • ffmpeg 2.6.2 update which bring better codec compatibility and playback
- • Improved CC (Closed Captions) support for Live TV
- • Fix the queuing of music videos
- • Improvement of FF/RW (fast-forward / rewinding) of videos
- • Improved logic to make PVR, audio encoders and audio decoders optional
- • Fix of grouping movie sets when navigating in smartplaylists
- • External subtitles over UPnP can be enabled through the settings section
- • Allow scanning of new sources and marking as watched during other library operations such as “update library”
- • Allow different sort orders for different sort methods
- • [Skip steps](https://www.youtube.com/watch?v=2QrhphxMJCQ) (step forward & backwards) improvements for videos and music
- • Add jump to first unwatched in TV section
- • Fix subtitles showing on top of each other in certain cases
- • Reworked add-on manager that should give a better overview
- • [Chapter selection window](https://www.youtube.com/watch?v=5wn4KIJcHNI) that shows thumbs on where to skip to in the video
- • Easier to navigate audio and subtitle selection list
- • Show progress for add-on repository update
- • Addition of language add-ons which allow us to update the User-Interface text outside of regular Kodi releases
- • Immediately fetch updates from repository after Kodi version upgrade to prevent delay in getting better compatible add-ons or skins
- • Expansion of international options like time and date format, temperature and speed units.
- • Improvement of installing new skins selection
- • Upgrade included webserver which should fix issues with iOS or Android remotes loosing connections
- • Fix season art scraping on newly added seasons
- • On Android the system now handles the volume instead of Kodi
- • Android HEVC H.265 support for some chipsets
- • Refreshrate switching on Android 5.0 opr higher (your device must have the proper implementation of these features to support it)
- • [[email protected]](/cdn-cgi/l/email-protection)
