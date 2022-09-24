---
title: "GSoC 2022 @ Kodi : Final Evaluation"
date: 2022-09-22T17:09:19.549Z
author: Mohd. Shaheer
---
Hi, everyone! I am Mohd. Shaheer, Computer Science undergrad in freshman year. I am a GSoC contributor working on the project “Finish the web interface” for Kodi. I have been working on this project for the past 3 months. This blog post contains my experience through phase 2 (Final evaluation) of GSoC and an overview of my work during that period.

In my previous blog, I wrote about my work up until the mid-evaluation of GSoC. You can find it [here](https://medium.com/@mshaheer2003/gsoc-2022-kodi-mid-term-evaluation-bb0167390d21).

**Phase 2 (July 25th — September 5)**

This phase turned out to be more challenging than the previous one.
During this phase, the first functionality I worked on was “Implementing the Video playback” which involved working on the following pages — Music Video, Movies, Tv Show, Seasons, and Episode.

I started with the **videoid_int** page, which contains information about a music video. Before that, I noticed that we didn’t have a working Music video page (previously implemented). There were some inconsistencies with its routing, with the json-rpc calls which fetched the metadata and with elm json decoders. So, I fixed these issues first.

I worked on the front end and created its UI from scratch which included rework of the music-video card UI. The basic approach in order to implement video playback functionality was by using JSON-RPC **Files.PreparedDownload** method, we can get a `PreparedDownload` path for the file which we want to play by making a request in this manner :

`{"jsonrpc":"2.0", "id":1, "method":"Files.PrepareDownload", "params":{ "path": "/home/xyz/Videos/test.mp4" }}`

We can expect the returned `PreparedDownload` path to be something like - `"vfs/%2fhome%2fxyz%2fVideos%2ftest.mp4"` which we can be fed into the src of the html5 video player
`(“http://localhost:8080/vfs/%2fhome%2fxyz%2fVideos%2ftest.mp4”)`

An issue arose when we tried to do so — [CORS Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS). Since we were sending an HTTP request to fetch the JSON data from the Kodi RPC server, we were facing issues with it. Therefore to work on it during development, I suggested using an extension in a browser that allows CORS. Web sockets, which were used to retrieve json data, could have made things much simpler, but during development, things don’t always go according to plan :).

![Animated image demonstrating how Kodi will show a sample of the selected video](/images/blog/mohdshaheer1-720x350.webp "Videoid_int page")

*Videoid_int page* 

In Chorus 2, the video playback was done through a pop-up window that had an HTML5 Player. To make the user experience better, I implemented a modal for it.

In a similar manner, I implemented the video playback functionality for the **movideid_int** page where I implemented the page’s UI from scratch, worked on its routing, modified json decoders, and created new ones from scratch.

![Animated image demonstrating how Kodi will show a sample of the selected video](/images/blog/mohdshaheer2-600x320.gif "Movideid_int Page")

*movideid_int page*

Tvshow pages required more time and effort than others. I implemented its UI, front-end, and backend from scratch. I also had to create two new pages from scratch — The seasons and the Episode page. I created new objects and decoders for each of them and wrote JSON RPC calls to fetch data for them.

![Screenshot of Tvshowid_int Page](/images/blog/mohdshaheer3-720x355.png "Tvshowid_int Page")

*Tvshowid_int page*

![Screenshot of Season Page](/images/blog/mohdshaheer4-720x350.png "Season Page")

*Season page*

![Animated screenshot of Episode Page](/images/blog/mohdshaheer5-600x287.gif "Episode Page")

*Episode page*

Another functionality that I worked on was “Filter functionality” for all the pages. I created a fully working front-end and wrote filter methods that would filter the objects based on particular fields such as genre, artist, album, etc.

![Screenshot of Filter functionality and reworked Movie card UI](/images/blog/mohdshaheer6-720x350.png "Filter functionality and reworked Movie card UI")

*Filter functionality + reworked Movie card UI*

While working on the functionalities, I also reworked the UI of previously implemented cards and pages. For example:

**Top Music Page**

![Top Music Page - before UI rework](/images/blog/mohdshaheer7-720x350.png "Top Music Page - before UI rework")

*Before*

![Top Music Page - after UI rework](/images/blog/mohdshaheer8-720x350.png "Top Music Page - after UI rework")

*After*

**Album page**

![Album Page - before UI rework](/images/blog/mohdshaheer9-720x350.png "Album Page - before UI rework")

*Before*

![Album Page - after UI rework](/images/blog/mohdshaheer10-720x354.png "Album Page - after UI rework")

*After*

On September 5th, the official coding phase of GSoC ended. It was a great learning experience and my first internship in freshman year. I learned a lot and would love to keep contributing to Kodi on this project and help in any way possible.

Again I would like to thank my mentor — Razze 😄 and Kodi Community for being so supportive, and helpful, and for making sure to give positive feedback about my work which kept me motivated.

*T﻿his post was originally published on [Medium](https://medium.com/@mshaheer2003/gsoc-2022-kodi-final-evaluation-43ff20a51f17).*