---
title: 'New multiimage control code allows background loading'
date: 2009-05-13T04:00:00Z
author: Team XBMC
---
With the nice new [background loading textures](/article/some-texture-tweaks-better-background-loading "better background loading"), complete with their own crossfading and so on, it made sense to rewrite the multiimage control to make use of this. Previously the multiimage control generated however many image controls it needed and did all the fading, texture loading and sizing itself.

 Now it just utilizes a single image control with \ set, and just sets the new filename when necessary. Obviously it supports background=”true” (on the \ tag) to allow the images to load in the background.

 Combined with the recently added support for static content updates, you can now do most of the background changing on different states that skins normally do with a single multiimage control, rather than having a separate control (or multiple separate controls) for each state. Examples would be the various [Aeon](http://www.aeonproject.com/ "Aeon") incarnations, [Mediastream](https://www.seventech.org "Mediastream"), or even PM3.HD’s homescreen.

 Steps involve:

 
 2. Fill your container (wraplist or list) with static content.
 4. Set the \ tag to point to the “normal” background image you want displayed for that item (image should be outside of Textures.xpr).
 6. Set the \ tag to a skin settable background images (or path of background images, or to something like Weather.Fanart etc.)
 8. Create a single multiimage control for the backdrop, using \ListItem.Icon\.
 
 Due to the “fallback” functionality of ListItem.Icon, if there is a custom background image or folder set, it’ll use it, else it’ll use the normal backdrop for that item.

 As the user moves through the items in the list, the multiimage control will update the path to the current image, and you’ll get seamless transistions between the different backdrops, with no stutter due to all the image loading being done in the background.

 Nicer effects and smoother navigation with far less code – what could be better!

 