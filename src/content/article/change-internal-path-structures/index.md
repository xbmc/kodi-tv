---
title: 'Change in the internal path structures'
date: 2009-02-09T03:00:00Z
author: Team XBMC
---
Hi – long time since my last blog – I’ve been too busy with real life stuff, not to mention XBMC related activities! This post is to detail the rather boring, but very important path cleanup work that WiSo and I have just completed.

 As a remnant from the xbox days, XBMC used 5 internal DOS based drives as base paths in order to find files and store settings and so on. These were Q: (the location of the xbmc executeable), Z: (a temporary cache), P: (the current profiles userdata folder), U: (a writeable version of Q:), and T: (the master users userdata folder). References to these littered the code, and caused many a headache with the initial port to Linux, where essentially it was decided to wrap the win32 filesystem layer that we had in place, and, in addition, provide a path translation routine (CUtil::TranslatePath, macro’d to \_P()) to translate from the virtual path to the real path.

 On win32 we didn’t have to bother with this, but we did have to (internally) map those drives to the appropriate directories. This, ofcourse, caused problems for anyone who wanted to use those drive letters for removable storage or network drives.

 The main problem with all this is that the magic \_P() macro was treated as a “cure-all” for any path related problems. If you had a problem with paths, just throw a splattering of \_P() calls all over the show, and eventually one of them would catch it and “fix” the problem. Not a particularly good fix, but it did the trick in most cases, so that xbmc could find textures, fonts and skin files and the like. The problem, ofcourse, is that the majority of the \_P() splatterings should not have been there, and this has caused nightmares in more recent times.

 A quick example: We have a tokenize routine which is mainly used for tokenizing paths. Someone had decided to throw a \_P() in that so that we were ensured that we were looking for the correct directory separator. This is all well and good, until you realize that the routine is also used for tokenizing other strings. For instance, it’s used to split multi-line text up into single lines, so that the fribidi stuff can do it’s magic to convert logical Hebrew and Arabic text to it’s visual counterpart. Low and behold, this was causing the direction of the slash to change! Me, being not of Hebrew or Arabic persuasion, was rather perplexed by all this. Was it the intended behaviour? After all, the routine was supposed to flip the text! Needless to say, it took a wee while to track it down to the errant \_P() in the tokenize routine!

 Of late, many more examples have been found. The solution was obvious: Go through the code and account for every single path translation and ensure that it absolutely \_has\_ to be there. Basically: No path translation should occur \_ever\_ unless we need to hit the filesystem directly. There were more than 500 instances of \_P() to be removed. Fun and games!

 At the same time, we changed things from using DOS based paths to other paths, so that win32 users could claim back their drive letters, and reused one of the protocols we already had. We now have:

 **special://xbmc** (where the executable resides)  
**special://home** (a writable version of special://xbmc)  
**special://masterprofile** (the “master” userdata folder, usually special://home/userdata)  
**special://profile** (the current profiles’ userdata folder, usually special://masterprofile/profiles/\)  
**special://temp** (a temporary cache folder, such as /tmp/xbmc on *nix)

 So that’s it pretty much. Lots of changes required to fix up what was on the face of it not a particularly bad implementation to get stuff running on Linux, that over time grew into a monster.

 