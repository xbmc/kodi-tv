---
title: "A new webinterface called Chorus2"
date: 2016-12-03T03:00:00Z
author: Martijn Kaijser
featured_image:
  src: /images/blog/chorus2-artist.webp
  title: "chorus2-artist"
  alt: "chorus2-artist"
---

Kodi has many hidden secrets and even team members don’t know the full potential it packs. One of those features you might not know is that Kodi also has a web-interface from which you can browse your library and start playback directly on your Kodi device. It’s something we’ve never really promoted that it was available and I’m not really sure why. However the past few years not much was changed to to it and it kinda fell into decay with only minor fixes done to keep it kind of functional. For Kodi v17 this has been radically changed as we have packaged up a brand new default web-interface called Chorus2.

Back in 2014 or so a developer nicknamed jez500 (Jeremy Graham) appeared on the forum and showed a web interface Chorus he had been working on for some time. Compared to our plain and simply current web interface at that time it was miles ahead with great design and awesome features. From that moment we knew we had to bring him on board and asked if it was ok to make it the new default somewhere in the future and luckily he agreed. Over time work on the webinterface progressed and with everything learned from Chorus he started working on a next iteration which was simply called Chorus2. As we knew he was making an improved version we decided to skip v1 and take v2 when it was ready for daily use. With Kodi v17 also getting a new default skin getting the new webinterface added was the perfect timing. So let’s now do a brief sum up of it’s potential.

General overview  
 • Clean modern flat design with inspired by material design  
 • Responsive interface that adapts to screen size however it works best on larger screens/resolutions  
 • Multi language support – easy to add new languages  
 • Settings  
 • Customise web interface settings  
 • Customise menu items/links (add your favourite addon to the main menu)  
 • Enable disable Kodi Addons  
 • Configure Kodi application settings – great for headless setup  
 • Help section – encourage people to make it better  
 • File and addon browser to play media that is not in the Kodi media library (most, but not all addons will work via the browser)  
 • Remote control to navigate Kodi UI and control playback  
 • Volume, progress, repeat and random control  
 • Kodi Keyboard control  
 • Send text to Kodi  
 • Trigger scanning Audio/Video libraries  
 • Take a screenshot of Kodi  
 • PVR support

Playlists  
 • Easily add media to Kodi audio and video playing queue  
 • Create and manage unlimited audio and video playlists – these are stored in browser local storage  
 • Thumbs up audio and video – these are stored in browser local storage  
 • Saving current Kodi playlist to a browser playlist  
 • Load a saved playlist into Kodi playing queue  
 • Support for Kodi party mode playlists

Filtering, sorting and search  
 • Ability to do some advanced filtering and sorting on Artists, Albums, Movies and TV shows  
 • Eg. Show only movies with ‘Tom Cruise’ from ‘2015’ sorted by rating  
 • Search all Kodi libraries from a single search box

Movies and TV  
 • Detailed movie and episode pages showing loads of media metadata. Eg description, year, directors, cast, AV quality  
 • Click a cast member to see other media in your library they appear in  
 • Movie set information  
 • Progress indicator and resume support  
 • Watch the trailers for movies in the browser  
 • Stream video from your library in your browser – highly experimental – for best results use Chrome browser and video encoded as mp4/mkv with 2 channel audio. Support this to make video streaming more solid.  
 • Download video via the browser

Audio  
 • Detailed artist and album pages showing metadata. Eg. genre, mood, artist and album information  
 • Ability to lookup music videos for a song and play in the browser or Kodi (if youtube addon is installed)  
 • Download audio via the browser  
 • Stream audio to your browser, will play using a html5 player with a flash player as a fallback – currently only supports streaming mp3 audio  
 • Create a local streaming queue or import a saved playlist  
 • Ability to set default playback to be locally in the browser whenever Chorus is started

Under the hood  
 • Built using robust javascript frameworks: Backbone, Marionette, Lodash, jQuery  
 • Clean and organised languages: Coffeescript, SASS  
 • Very modular MVC structure with all aspects of the interface separated into logical concerns (modules) to ease support and addition of new functionality  
 • PubSub used for all communication between modules  
 • Grunt build and watch tasks making contributing and developing easier.

How to get it working

• “Kodi Settings \> Service settings \> Control  
 • “Allow remote control via HTTP”  
 • “Allow remote control from applications on other systems”  
 • Select “Web interface” then select “Kodi web interface – Chorus2” which should be default now  
 • Change the username to something you can remember  
 • Change the password to something you can remember. It is highly recommomended to **not** leave this empty.  
 • Note the port number (default is 8080)  
 • To access from the same computer: Open <http://localhost:8080> in a web browser  
 • To access from another computer: Get the IP address for the device running Kodi. Eg “Kodi settings \> System information” and note the IP address and open <http://your-ip-address:8080> in a web browser

    [![chorus2-tv](/sites/default/files/uploads/chorus2-tv-300x168.webp)](/sites/default/files/uploads/chorus2-tv.webp) [![chorus2-movie](/sites/default/files/uploads/chorus2-movie-300x168.webp)](/sites/default/files/uploads/chorus2-movie.webp)   [![chorus2-search](/sites/default/files/uploads/chorus2-search-300x168.webp)](/sites/default/files/uploads/chorus2-search.webp) [![chorus2-artists](/sites/default/files/uploads/chorus2-artists-300x168.webp)](/sites/default/files/uploads/chorus2-artists.webp)   [![chorus2-artist](/sites/default/files/uploads/chorus2-artist-300x168.webp)](/sites/default/files/uploads/chorus2-artist.webp) [![chorus2-settings](/sites/default/files/uploads/chorus2-settings-300x168.webp)](/sites/default/files/uploads/chorus2-settings.webp)   [![chorus2-addons](/sites/default/files/uploads/chorus2-addons-300x168.webp)](/sites/default/files/uploads/chorus2-addons.webp) [![chorus2-now-playing](/sites/default/files/uploads/chorus2-now-playing-300x168.webp)](/sites/default/files/uploads/chorus2-now-playing.webp)

If you have any programming skills or simply want to help get Chorus in your language you can: [contribute here](https://github.com/xbmc/chorus2).

Made with love by [Jeremy Graham](https://jez.me/)

How to get it?

Well quite simple. Just install the last available Kodi v17 version which is available through our download page or Windows store and you are all set to go.
