---
title: 'Some texture tweaks for better background loading'
date: 2009-05-11T04:00:00Z
author: Team XBMC
---
Another couple of nice changes have hit SVN for you skinners. There’s been a bug fixed in the large texture manager (that handles background loading of images) – it used to wait up to a second between loading images, which meant you couldn’t really use them in situations where you needed a lot of textures loaded all at once. This has been remedied.

 I’ve also added an attribute background=”true” to all texture related tags. This forces the image to be loaded via the large texture manager *except for textures in Textures.xpr*.

 Jezz\_X also suggested a slight tweak to info images with \ set. Now, if the first texture to load in a window is already in memory (due to being used in a previous window) it will load instantly, and thus forgo the usual fade in.

 All these changes mean:

 
 * You can use the background texture loader for images within containers – this means your wall thumbs can be loaded in the background, giving silky smooth scrolling, at the expense of a slight delay in loading the image (you can mask this by using a loading image for instance).
 * You can use the background texture loader for background images that persist across window transitions – there’s no fade in due to the new window being opened.
 
 With judicious use of background=”true” you can have texture-rich skins whilst still having nice, smooth scrolling.

 