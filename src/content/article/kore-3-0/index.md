---
title: Kore 3.0
date: 2022-10-15T09:55:58.778Z
author: SyncedSynapse
tags:
  - Release
featured_image:
  src: /images/blog/Kore_Artwork_1024x500_samfisher.webp
  title: Kodi "Kore" Remote Logo
  alt: Kodi "Kore" Remote Logo
---
Is Web 3.0 here? We don't know, but Kore 3.0 certainly is! Shiny, decentralized and software-based, it's ready to take over your old, centralized, atom-based remote.

As a major release there are lots of changes, too many in fact to list here, but the main ones are:

### Migration to Google's Material 3 UI guidelines, which include:

* Complete review of themes and colors, adding support for light and dark modes based on the device's settings, and for dynamic colors, which change the UI colors depending on the current wallpaper (only available on Android 12 and up);
* Update of buttons, text boxes, icons, images, etc. to the latest UI standards;
* Review of transitions between sections and within sections;

### Redesign of most of Kore's screens, namely:

* The *Remote* screen, adding the current playback state, and better media controls, allowing for direct control of what's playing;
* The *Now Playing* panel, adding the current playback state and media control buttons;
* The *Movies*, *TV Shows*, *Music* and *Addons* screens, which went through a redesign, particularly on the actions section. All the previously available actions are still there, they just got moved around (well, except for the IMDb link, which was seldom broken, and therefore was replaced with a generic Google search). Note that the "Play locally" function is now called "Stream", which is more appropriate and concise;
* The *Artist* details screen, to show the artist albums beneath its general information instead of on a separate tab;
* The connection status indication (*connecting*, *not connected* or *connected*) has been improved and made explicit on the various screens;
* The top app bar is collapsible where appropriate, and the remote section allows the background image to use up all the screen;

### Redesign of the notifications

* Integrating them with Android's media notifications, which allows for better control of what's playing when Kore is not in the foreground. Note that, if the media notification disappears after a few minutes even though something is playing on Kodi, that's caused by aggressive battery optimization settings which forcefully stop the notification. This happens with some manufacturers that don't follow Android's guidelines, in a futile and artificial attempt to extend the battery life, and the solution is to check the device's battery settings applied to Kore (the way to do it depends on the specific device, more info can be obtained at <https://dontkillmyapp.com/> );

... and lots and lots of code cleaning and generic bug fixing (like for instance, fixing the access to media storage in the local files section).

Given the level of changes, there certainly are bugs lurking around. If you find one, please let us know at the [forum](https://forum.kodi.tv/showthread.php?tid=369711) or on [GitHub](https://github.com/xbmc/Kore) so we can make Kore a better remote.

Hope you like it.