---
title: "Brief Weather Bulletin"
date: 2011-11-14T03:00:00Z
tags:
  - Developer
author: Nathan Betzen
---

[![happy cloud](/images/blog/happy_cloud.webp "happy cloud")](/images/blog/happy_cloud.webp)As a quick followup to the previous article, we are happy to say that XBMC Eden-Pre now has working weather once again, using an addon created by Amet that connects with World Weather Online. To turn weather on, one must install a nightly build of XBMC Eden-Pre no older than 2011, Nov 15, go to addons\>Weather, and download the World Weather Online addon. Then go to System\>Weather and select World Weather Online as the default. After that, just set your location in Weather Addon settings.

The way weather has been set to work now is by creating a space in XBMC core to interact with weather addons. This space then pushes out weather data to skins in exactly the same way it did prior to the weather breakdown. This method creates a convenient way for backend weather addons to do their work, while keeping weather display methods the same for our skilled skinners.

An immediate benefit to this method appears to be that a number of additional weather addons are already in development. None are officially released yet though, so we’ll hold off on mentioning them until they’ve been deployed.

It’s amazing what a few skilled programmers and some ingenuity can do in a very short period of time.

P.S. Good job, all of you who correctly caught the Game of Thrones reference. 10 points shall be awarded to your houses. Or something.

## Keeping Social

In unrelated news, we’ve now created a [Google Plus](https://plus.google.com/b/102926840947534443602/102926840947534443602/posts "XBMC on Google Plus") page, for those of you allergic to our [Twitter](https://twitter.com/ "XBMC on Twitter") and [Facebook](https://www.facebook.com/XBMC "XBMC on Facebook") accounts, but somehow not allergic to the idea of social networks generally. Feel free to circle us in Google, and we will continue to try to occasionally remember to sign back into Google Plus.
