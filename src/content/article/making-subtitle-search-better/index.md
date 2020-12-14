---
title: 'Making Subtitle Search Better'
date: 2013-11-14T03:00:00Z
author: Nathan Betzen
featured_image: ""
---
We’d like to take a minute to quickly announce that we’ve dramatically changed the way subtitle search works under the hood in XBMC. In XBMC 12.2, all subtitle search services are part of a single piece of code that comes in the form of the XBMC Subtitles addon that is released by Team XBMC. This means every subtitle search developer must go through an XBMC Team gatekeeper if they want to make a fix, either big or small.

 With the update scheduled to be a part of Gotham, subtitle search services have been broken into individual addons, so something like OpenSubtitles (a frequently used service) would be a separate addon from any other subtitle search service out there. More importantly, OpenSubtitles would be releasable by the actual developer of the service without having to go through Team XBMC.

 This change should give addon developers in this area a great deal more latitude for implementing changes and fixes without needing to wait for other addon devs to submit similar fixes, all to the benefit of the user experience.

 From the user perspective, the only significant change will be in the way a subtitle search service is downloaded. Right now, it is already available and merely needs enabling, as there is only a single addon. In the future, the user will need to select and download their preferred addon before starting a movie and searching for subtitles.

 In the end, this is a fairly minor change that will make XBMC just a bit better from our perspective as users, but a major improvement from the perspective of the developers working for us all on a daily basis. For everyone, that makes it a win-win.

 Update: It should be noted that if you depend on subtitle downloading on a daily basis, you should avoid nightlies and probably the upcoming alpha, as it will take some time for addon devs to update to the new system.

 