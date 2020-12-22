---
title: 'State of the addons'
date: 2010-04-26T04:00:00Z
author: Team XBMC
featured_image: ""
---
It’s been a while since we’ve updated our readers on the status of things, so I wanted to give a quick preview of how the addons are shaping up. Many nightly users are itching for new builds, and those that have compiled their own have been greeted by broken plugins, scrapers, etc. This is by design, as the entire framework has changed to make it easier for users to acquire addons and stay up to date. Here’s a quick preview of the current state of things:

 ![](/sites/default/files/uploads/screenshot014.png "Addons")  
 Current state of the Addons Manager

  Right away you’ll notice that scrapers are now addons, which initially may seem strange. The reasoning behind the change is that scrapers change often, yet we only do roughly two stable releases of XBMC each year. With a full-fledged addon manager in place (think firefox), you’ll be able to stay up to date without ever touching a keyboard. Obviously plugins, scripts, and skins will work the same way.

 We have introduced an official XBMC repository where addons will be hosted. These will be tested for stability and should allow us to keep an eye out for broken or outdated addons. We are fortunate to be able to take advantage of the new [mirror system](../theuni/2010/01/08/xbmc-is-growing-up-gains-cool-new-services/), so the experience will be blazing fast and redundant. And for those who wish to venture outside of the official repository, you will be able to add 3rd party repos as well. In fact, repos themselves are just addons. How cool is that?

 For now the XBMC repo is in private testing so don’t expect to see the functionality of the above screenshot just yet. There is still quite a bit of work to be done, but it’s nice to be able to show off as things take form. To answer a popular (and valid) question: for the most part old addons will continue to work, but they will need to be accompanied by a new description file. We have not released the schema details yet because they are still in flux, but rest assured that the info is coming soon.

 We’ll make an announcement when the bits have been committed that will allow bleeding-edge users to begin testing the new features.

 