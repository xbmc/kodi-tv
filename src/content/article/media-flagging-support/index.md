---
title: 'Media Flagging Support'
date: 2009-06-14T04:00:00Z
author: Team XBMC
---
With commit r21076, Media Flagging was added to XBMC’s main codebase. Full history and discussion can be seen [here](https://forum.kodi.tv/showthread.php?tid=30419). Information for skinners is available [here](https://forum.kodi.tv/showthread.php?pid=347704%23pid347704). Everyone be sure to thank CapnBry for his hard work.

 What does this bring to the table? When turned on (Video settings -\> Extract media metadata information) the following bits of info are now natively extracted from the files themselves. Skin tricks involving file/folder names are a thing of the past.

 
 * Resolution
 * Aspect Ratio
 * Audio Codec
 * Video Codec
 * Audio Channels
 * Audio Languages
 * Subtitle Languages
 
 You should also know that none of the current skins (mods excluded) support this yet. It may be a little while until your favorite skin is ready. Also, it’s up to the skinner to decide whish fields to include and in what way. Please remember be courteous when discussing implementations with our talented skinners.

 This is a brand new feature, so expect some initial kinks. **Remember to include a debug log if reporting an issue in the forums or TRAC**. Please note if if you’re brave enough to try it out, your video database won’t work if you revert back to an older version. So if it’s worth it to you, backing up your old db isn’t a bad idea. As always, you won’t find Media Flagging in the current release, you’ll have to compile from svn or use a new 3rd party build.

 Expect a new post soon featuring screenshots of some skins showing off this exciting new feature as they’re updated.

 