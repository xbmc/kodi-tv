---
title: 'Multi-Content Addons - a Note for Addon Writers'
date: 2012-08-12T04:00:00Z
author: Team XBMC
featured_image: ""
---
This is just a quick note for addon developers. A [recent change](https://github.com/xbmc/xbmc/pull/1265 "multi-content plugins/scripts update with set content_type parameter") to the codebase from the August cycle has added a new “content\_type” parameter. With this parameter, addons that provide access to content that includes both audio and video (like the [Internet Archive](https://archive.org "The Internet Archive")) can now be limited to only one content type, depending on where it is called from. So if the addon is called from Video Addons it will only list videos, and if it is called from Audio Addons it will only list audio tracks.

 This change has the potential to cause addon breakage, so it is recommended that you check your addon against the current code base to make sure everything is still in working order.

 