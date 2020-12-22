---
title: 'XBoxMediaCenter moves support to Freenode and switches to Subversion'
date: 2006-11-15T03:00:00Z
author: Team XBMC
featured_image: ""
---
Team XBMC is in the process of moving our support channel (#XBMC on EFnet) across to the [Freenode IRC network](http://freenode.net). This is to bring us in line with other similar applications (such as MediaPortal) and also because it’s lower maintenance for the ops.

 Everyone is encouraged to move to Freenode (#XBMC) as soon as possible. Those unfamiliar with Freenode should be aware of a few differences, the main one being that on Freenode you are encouraged to register your nickname.  [See here for more details.](http://freenode.net/using_the_network.shtml).

 The old channel (#XBMC on EFnet) will be maintained for a week or two until everyone has moved over, whereby it will cease to exist.

 Due to the superiority of using Subversion (SVN) over CVS, Team XBMC has also decided to move to SVN. This allows better management of the development of XBMC.

 In the last few days, we have finished the migration to SVN, and now CVS will no longer be updated. This means everyone who checked out XBMC sources and wishes to continue to do so, will have to install another client and do a complete recheckout.

 We recommend using [TortoiseSVN](http://tortoisesvn.tigris.org/). TortoiseSVN is very easy to configure. After it is installed, simply:

 1) Rightclick the folder where you want XBMC source folders & files to be downloaded.  
 2) Choose: ‘SVN Checkout’.  
 3) Enter ‘<https://svn.sourceforge.net/svnroot/xbmc/trunk/XBMC>’ as “URL of repository”.  
 4) Hit OK.

 To update in future just use ‘SVN Update’.

 Note that the main trunk of SVN, where the main development work is done should be considered pre-2.1. The 2.0.1 source tree is tagged in SVN and no more development work will be done in it as we move forward towards 2.1.

 Please don’t ask about release dates for 2.1 – we are currently in full feature addition mode. Expect more announcements shortly of a few of the changes ![:)](/sites/default/files/uploads/icon_smile.gif)

 