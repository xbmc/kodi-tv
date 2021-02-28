---
title: 'XBMC 11.0 - April Cycle'
date: 2012-05-01T04:00:00Z
author: Nathan Betzen
---
As [mentioned previously](https://kodi.wiki/theuni/2012/04/25/update-grab-bag/ "XBMC April Grab Bag"), we have now moved into a monthly development cycle, in which we merge new features at the beginning of the month and then perform bug fixes through the rest of the month. This means, at the end of every month, developers, bug-reporters, and those willing to deal with potentially highly unstable builds can try a snapshot from the current development cycle, and the organization will have a more stable and predictable development cycle. For those of you who would prefer a stable version of XBMC, we will always recommend the most recent stable release (XBMC 11.0), but for the brave, you are welcome to try the end of the month build. To give an idea of just how unstable/alpha these builds can be, there will almost certainly be months in which some platforms won’t actually have usable builds. For example, the iOS build will not be available this round. As always, we recommend you backup your userdata folder before upgrading.

 With that said, let’s review some of the more notable changes in the [April Changelog](https://github.com/xbmc/xbmc/issues?milestone=1&page=1&state=closed "XBMC April 2012 Closed Milestones").

 First on the list is a major reshuffle of XBMC settings. In the past, many of the controls for allowing XBMC to interact with your network were found on the Network page. Because the Network group was primarily being used for interacting with various external services, the Network page has been entirely replaced with a Services page. The “Internet Access” setting, which was the only other purpose of the Network page, has been moved to the System page.

 [![Confluence_Service_Settings](/sites/default/files/uploads/Confluence_Service_Settings-300x170.jpg "Confluence_Service_Settings")](/sites/default/files/uploads/Confluence_Service_Settings.jpg)  
 XBMC has quite a lot of services to deal with these days!

  Next, extending XBMC’s default ability to scrape sets, we’ve now added a new “Sets” submenu item.

 [![Eden_sets](/sites/default/files/uploads/Eden_sets-300x168.jpg "Eden_sets")](/sites/default/files/uploads/Eden_sets.jpg)

 For all you iOS users out there, we have an even more exciting announcement. Those of you with iPads, recent iPod Touches, and recent iPhones that are running XBMC will now be able to switch your screen from the local screen to your TV using one of the available TV Out cords provided by Apple. Then, you can use your local screen as a remote control. Or, to put it more succinctly, **mirroring for XBMC** is now enabled. For a video on how this works, see below. (Note: as already mentioned, the lack of an iOS build for April means this feature will not actually be available until iOS nightly builds start back up again. Keep an eye on our [social](https://www.facebook.com/XBMC "XBMC on Facebook") [network](https://twitter.com/#!/xbmc "XBMC on Twitter") [pages](https://plus.google.com/b/102926840947534443602/ "XBMC on Google+"), as those will likely be the first places with news on the builds.)

  On the library front, in addition to Names, Year, Runtime, and many others, a new Date Added sort field has been enabled. This field works slightly differently than the old “Recently Added” sorting. Rather than sorting the files by how recently they’ve been added to XBMC, the files are now sorted by when they were added to your local computer or server. This way, when refreshing an old show, that show won’t suddenly take up all the spaces in your Recently Added field. Instead, Recently Added really will only show items that you have recently added to your collection.

 Finally, Addon, Remote Control, and Skin Developers will be happy to hear that yet more json-rpc controls and websocket support have been added, along with PictureInfo tags.

 Conclusion
----------

 For a full list of all the April changes, feel free to take a look at our list of closed [April milestones](https://github.com/xbmc/xbmc/issues?milestone=1&page=1&sort=updated&state=closed "April Changelog"). Also, keep an eye out for the May Cycle. Our developers are working extra hard to hopefully include one of the most requested feature additions of the past two years. Feel free to make some guesses as to which feature that is in the comments. Or, if you are feeling a bit brave and a bit lucky, just start [downloading now](http://mirrors.xbmc.org/snapshots/ "XBMC 11.0 - April Release download")!

 