---
title: 'GSoC 2012 Statistics gathering'
date: 2012-06-19T04:00:00Z
tags:
  - Developer
author: Team XBMC
---
Hi everyone!

 As you all may or may not know I’ve been tasked to clean up parts of the scraping process in my GSoC project. A first step to this is to gather some information so that we statistically can say what formats your media is formatted in: do you usually have dots instead of spaces, do most add year to the folder name of a movie, etc. Many of you might alter this to fit xbmc so we want to somehow catch those we do not handle so we can try and find some pattern in those formats as well!

 To do this, we’ve created a script that you can find in the Program Addons folder of your XBMC install called “Statistics gathering for scraping GSoC 2012.” What the script will gather is the bare essential metadata if scanned into the library, title, year, runtime, tvshow, episode number and season number etc. The file path is also stored as it is what generates this data and of great importance to know, saying that I want to note that we will NOT store any username or password information in any part of these URLs, this script is not meant to track the users and it cannot track you! The data is uploaded to a server which we on the team can view and no data about your system except the metadata and file urls are uploaded, no binary data from the files of any kind!

 Even with these assurances, we know that not everyone will be willing to send in that limited information, so we’ve made this addon “opt in.” In order to participate in the study, you have to install the addon from the Program Addons folder in XBMC. I urge anyone, those displeased with how our scraper handles their media and those where it works perfectly, to install this addon if you want to help do your part to make XBMC even more awesome. The more information we have, the better our scrapers will be.

 Once again, the addon is called “Statistics gathering for scraping GSoC 2012,” and it may be found in the Program Addons section.

 Cheers, Tobias

 **Update:** There’s a (known) bug in the current version of the addon which makes it fail on start. It will be fixed ASAP. We are sorry for the inconvenience.

 **Update 2:** The bug has been fixed and the updated addon is now available from the official repository. Before you install it, make sure it’s version **0.0.4**. If not you can either force refresh XBMC’s official repository (using the context menu) or wait a few hours until it happens automatically. Once again, we are sorry for the inconvenience.

 **Update 3:** The server is brought down while I go through and backup the data. You all might be interested to know that you almost took down the server with all the data ![:)](/images/blog/icon_smile.gif) So thank you all so much, you have given me more than I ever hoped for! I will post updates ASAP!

 