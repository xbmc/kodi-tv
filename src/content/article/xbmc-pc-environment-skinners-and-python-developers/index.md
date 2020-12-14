---
title: 'XBMC PC environment for skinners and python developers'
date: 2006-11-16T03:00:00Z
author: Team XBMC
featured_image: ""
---
A little over a month ago, I was away from home without the xbox and still wanted to get some development done. To solve this problem, I decided to port parts of XBMC to the PC.

 Now, before everyone starts getting too excited, let’s make some things clear:

 1. **It’s not a full port, nor is it planned to be a full port**. We are not planning on abandoning the xbox anytime soon.

 2. With that said, most stuff works – at least stuff useful for the target audience.

 3. It’s designed primarily for skinners and python developers who can test out their skins and scripts without having to transfer everything to the xbox.

 Okay, so with that out of the way, what is it?

 Basically, it’s a simple port of the majority of XBMC. This includes the entire gui system, file listing, some of the filesystem code (eg local, database files, zip + rar etc.), very simple audio playback, slideshows, python scripts and so on. Video playback is not supported, nor are screensavers or visualisations (basically anything that was relying on the xbox version of directx).

 The source code is available in SVN and requires the directx sdk (I use the Summer 2004 version) installed to build the executable. You do not require the XDK. The executable that it produces may be distributed freely – it contains no XDK code whatsoever.

 To run it, you basically just grab a full build of the usual xbox version of XBMC, place it somewhere on your PC, and replace the .xbe with XBMC\_PC.exe. Note that you’ll need a DirectX 8 compatible machine. Most graphics cards nowadays should be fine, but some older chipsets may have issues.

 You then have to mount some drives so that the executable knows where to find stuff. You use the subst command under DOS to do so. I use the following .bat file:

 [CODE]  
 subst q: c:\xbmc\_pc  
 subst t: q:\userdata  
 subst p: q:\userdata  
 subst z: c:\xbmc\_pc\cache  
 [/CODE]

 Obviously you just change the location of q: and z: to reflect wherever you want them. Note that p: is the “profile” directory, and should point to your profile folder if you are not the master user.

 That’s about it. It logs exactly the same as XBMC does, so if you get errors, it’s likely logged about them.

 **We’re not supporting general users running this** to play their mp3′s or whatever – but we’ll be happy to help get skinners and python devs up and running, as that is the target audience.

 Ofcourse, others may feel free to have a play all they like. If there’s any Win32 developers listening in, then you are free to download the source from SVN and help extend it in anyway you like. One immediate improvement would be to have the executable auto-mount the drives it needs.

 [Discuss this news item here](https://forum.kodi.tv/showthread.php?pid=115893%23pid115893)

 