---
title: 'Notice: SVN Path Change'
date: 2009-09-21T04:00:00Z
author: Team XBMC
---
If you’ve been watching svn lately, you might have noticed that lots of cleaning, pruning, and reorganizing has been taking place. While everything else was churned up, it seemed like a good time to move the main development code to trunk. The linuxport branch has been removed. She was a good ship!

 **Builders, packagers, maintainers take note** 

 **The main development path has changed to: <https://xbmc.svn.sourceforge.net/svnroot/xbmc/trunk/>**

 If you already have xbmc checked out it’s easy to switch.

 Using the svn cli: ‘svn switch <https://xbmc.svn.sourceforge.net/svnroot/xbmc/trunk>’

 Using TortoiseSVN: TortoiseSVN -\> Switch -\> update the url

 If you manage to wreck your repo, just do a fresh checkout and you’ll be building again in no time.

 XBOX development will now take place in its own branch. To grab it, checkout: <https://xbmc.svn.sourceforge.net/svnroot/xbmc/branches/xbox>

 