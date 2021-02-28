---
title: 'iTunes and iPhoto Integration in XBMC'
date: 2008-09-17T04:00:00Z
author: Team XBMC
---
XBMC for Mac – Atlantis Beta 1, includes two new plugins that allow users to access their organized media in iTunes and iPhoto from within XBMC. (*Both released under GPL, see update at the end of this post*)

 ### **iTunes**

 
 * The iTunes plugin is in the **Music** section.  
![](/sites/default/files/uploads/screenshot000_small.jpg)
 * To start using it, you need to first import your iTunes library. You can do that by selecting the \<\<Import My iTunes Library\>\> entry. A library with about 15,000 songs takes a little under 20 seconds on initial import. YMMV. (Note that importing the library doesn’t involve copying the media into different locations, so you don’t have to worry about duplicating the actual files.)  
![](/sites/default/files/uploads/screenshot001_small.jpg)
 * Once your library has been imported you’ll be able to access its playlists, ratings etc. Since the media is made available in the file system layer, you can perform common tasks like queuing up your *Top 25 Most Played* followed by all *5 star rated tracks*. You can even create new playlists by combining one or more of your iTunes playlists using XBMC’s playlist editor.  
![](/sites/default/files/uploads/screenshot003_small.jpg)![](/sites/default/files/uploads/screenshot002_small.jpg)
 
 ### **iPhoto**

 
 * The iPhoto plugin is in the **Pictures** section. Similar to the iTunes plugin, you need to import your iPhoto Library into XBMC first. The process is fairly quick but again depends on the number of photographs in your library.  
![](/sites/default/files/uploads/screenshot005_small.jpg)
 * Once imported, you will be able to browse your photos by Albums, Events and Ratings.  
![](/sites/default/files/uploads/screenshot004_small.jpg)
 
 ### **A Few Tips**

 
 * **iPhoto Screensaver:** You can assign a particular event or album as XBMC’s [Slideshow](https://kodi.wiki/view/Appearance_Settings "XBMC Slideshow Screensaver") screensaver’s folder (under Settings, Appearance, Screensaver) and XBMC will play a slideshow of the selected album when it switches to screensaver mode.
 * **iTunes Mix and Match:** Since the iTunes library is exposed as a bunch of directories, you can create new playlists in XBMC that contain a combination of tracks from your iTunes library and your XBMC library. *Note that this doesn’t apply to [smart playlists](https://kodi.wiki/view/Playlists)*.
 * **iTunes Videos and Movies:** Even though the iTunes library is exposed under Music, you will still be able to access videos in any of your iTunes playlists that are supported by XBMC. For example, if you have any TV shows (unprotected) in your TV Shows playlist, you will be able to play them directly from XBMC.
 
 ### **Known Limitations**

 
 * **iTunes**: Playing back protected content is not yet supported.
 * **iTunes**: Accessing shared iTunes libraries from other computers is not supported.
 * **iTunes**: Playlist order is not always properly respected.
 * **iTunes**: Album art from the iTunes library is not used. In other words, only embedded album art will be shown.
 * **iTunes and iPhoto**: The libraries currently need to be re-imported if new media is added to them.
 * **iPhoto**: Keyword search is not yet implemented.
 
 ### **The Future**

 We hope to improve the integration between media on the Mac and XBMC and make it as seamless as possible, since that is inherently what XBMC is about. Areas of improvement include automatic syncing of libraries, using available artwork from iTunes, importing smart playlists as XBMC’s smart playlists etc.

 ### **Feedback**

 If you have any suggestions, feature requests or bug reports, feel free to post them as comments here, or if you want more eyes on it, on the [forums](https://forum.kodi.tv/). Feedback is always welcome.

 ***Update***: [Forum thread](https://forum.kodi.tv/showthread.php?tid=37313) on the subject.

 ***Update regarding License***: Both these plugins are released under GPL and their code can be checked out from our [XBMC addons repository](https://code.google.com/archive/p/xbmc-addons). Unfortunately, our Beta 1 release ended up with the restrictive license I was using for testing. Apologies for that, it was my mistake.

 