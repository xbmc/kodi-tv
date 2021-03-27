---
title: "Kodi 15.0 Isengard – Beta 2"
date: 2015-06-13T04:00:00Z
author: Martijn Kaijser
featured_image:
  src: /images/blog/shield-beta2-build.webp
  title: "shield-beta2-build"
  alt: "shield-beta2-build"
---

Here it is, the second beta build for Kodi 15.0; freshly baked and ready to be served! A little later than originally planned though, which we’ll explain later. Although we said that Kodi 15.0 a “clean-up” edition, we still managed to squeeze in a couple of really nice features. In total we had ~180 code change requests which were included since last beta release. All this sums up in a pretty big list of improvements and clean-up. As such we will only highlight some of the bigger changes.

## Database clean-up

This was the actual reason for the beta 2 delay. With each Kodi release we do several database changes and as such need to upgrade the structure a bit. During last beta 1 release a problem arose that had been present during the past years but never really showed up as a problem, until now. As you add your media to the Kodi library we gather related information about the movies and shows from several websites like TheMovieDB and TheTVdb. It became clear that this data wasn’t always in the format we expected it to be. Some examples are additional spaces, line ending codes or wrong characters before and after actors, directors and such. The result was that some of these values were added as duplicates into the database as they didn’t have a perfect match each time. With the changes done in the last months this became a bigger problem for each database upgrade we do. This was reason enough to tackle this problem properly and do a clean-up session on current database version and make sure that new data is properly formatted before adding in new added video content. This clean-up session is a one time action for each device or MySQL database for this 15.0 release.

**IMPORTANT:** Depending on the size of your current library and the devices you are currently using, it may take some time before this process is completed. Especially people using the Raspberry-Pi and/or using MySQL libraries. Please do not turn off the device during initial start after this upgrade and wait till it’s finished. It may take from one second to one or two minutes before the database is migrated. This is a one time migration.

## Refresh rate switching and 4K Playback on Android

One of the limitations of the Android platforms always was that it wasn’t capable of switching your screen to the same refresh-rate as the current playing video. This could cause a slight video stutter occasionally as video frames had to be duplicated to keep audio in sync. Since Android 5.0 there’s at least a way to set the preferred refresh-rate of the video output that could solve several of these problems. Do note that this feature is still in early stage and also needs proper firmware implementation of the device manufacturers. This could mean that your device only supports one mode while others support several. So this feature really depends on the combination of the Android devices and the connected display output. Do note that it’s “_preferred refresh-rate_” and not “_force refresh-rate_“. This means that we can only indicate what we would like and then it’s up to the device if it actually will do this. To make use of this feature you need to manually enable “Adjust display refresh rate” which can be found in settings -\> video -\> playback. You may need to to alter the settings level before this becomes visible.

[![TearsOfSteel4k](/sites/default/files/uploads/TearsOfSteel4k-800x450.webp)](/sites/default/files/uploads/TearsOfSteel4k.webp)

With the rise of all the new 4K content, playback devices and displays, having proper 4K playback on Android is becoming a more and more nice thing to have. Although true 4K implementation for applications like Kodi is only planned in Android M, one of our developer found a way to at least incorporate this for the Android 5.0 platform. With the help of the people from NVIDIA and their newly released [SHIELD Android TV](https://youtu.be/0MH73mhO0fM) we can now say Kodi will do it’s user interface and video playback in full [[email protected]](/cdn-cgi/l/email-protection)
