---
title: 'Easier to adjust audio and video settings'
date: 2009-05-10T04:00:00Z
author: Team XBMC
featured_image: ""
---
Just thought I’d comment on a nice recently added feature. ubikdood did up [a nice patch](http://trac.xbmc.org/ticket/6393 "Patch") that gave a popup slider dialog, similar to the seek bar and volume bar, when the audio and subtitle delays were adjusted, to give nice, visual feedback as you adjust these settings directly via a keypress.

 [![](/sites/default/files/uploads/screenshot003.jpg)](/sites/default/files/uploads/screenshot003.jpg)

 After discussions with Jezz\_X, we thought it’d be nice to extend this feature to the other slider based settings in the Audio and Video OSDs. The Audio and Video OSDs currently tend to take up a lot of space on screen, which makes some adjustments difficult. If the audio and video sync is out, it’s hard enough trying to fix it without having a bunch of stuff covering up the video!

 [![](/sites/default/files/uploads/screenshot000.jpg)](/sites/default/files/uploads/screenshot000.jpg)

 Now, when you click on “Zoom amount” from the video settings, the dialogs fade away and the slider bar pops up, allowing you to adjust the setting while in full view of the video file. Now fine tuning of video settings is much easier.

 [![](/sites/default/files/uploads/screenshot004.jpg)](/sites/default/files/uploads/screenshot004.jpg)

 It’s a nice touch that I’m hoping all skins take on board. For the skinners, just add a DialogSlider.xml file based on the PM3.HD one, and modify the OSDs to animate out of the way when it pops up.

 We’ve also added two new actions “AudioDelay” and “SubtitleDelay” which popup the slider allowing you to change these settings directly – a bit more remote friendly than having two buttons (one for plus and one for minus) for each feature.

 