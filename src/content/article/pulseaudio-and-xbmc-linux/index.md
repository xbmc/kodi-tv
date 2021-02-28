---
title: 'PulseAudio and XBMC for linux'
date: 2009-01-08T03:00:00Z
author: Team XBMC
---
Since the release of Atlantis we have had dozens of new users, and a few noted one of our weaknesses, which was PulseAudio, [link to thread](https://forum.kodi.tv/showthread.php?tid=40249). People usually experienced video that ran in great speed, this was because ALSA couldn´t create a stream. And the only way of making XBMC run like it should on Ubuntu was to kill PulseAudio, this is ok if you are only using the computer as a HTPC but will quickly take away the fun of having XBMC just as a media player along with the rest of the desktop, as without PulseAudio most of the other applications won´t work properly.

 Anyway, the days of having to kill PulseAudio is now gone! in SVN we have added full native support for PulseAudio, this works in both DVDPlayer and PAPlayer. This is also a runtime drop in replacement for ALSA so if PulseAudio crashed or got killed XBMC would fallback and use ALSA. We also added a gui notification when XBMC failed to open either ALSA or PulseAudio so the user this time knows that there actually was an error without hitting the log. So if you see this please check your audiosettings and if nothing seems wrong provide a log on the forum

 [![](/sites/default/files/uploads/xbmcnullaudio-300x174.png)](/topfs2/files/2009/01/xbmcnullaudio.png)

 A feature of PulseAudio is that it´s network transparent, and as such you can connect to a remote computer and have it play the audio. And of course we added this to XBMC, just create an advancedsettings.xml as this:

 \

 \

 \PulseAudio Server IP\

 \

 \

 And it should connect to the other computer.

 Known issues:

 
 * Navigational sounds is still dependent on SDL, export SDL\_AUDIODRIVER=esd before entering XBMC might help.
 
 