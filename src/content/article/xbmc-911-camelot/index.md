---
title: "XBMC 9.11: Camelot"
date: 2009-12-23T03:00:00Z
author: Team XBMC
---

![camelot](/sites/default/files/uploads/logo.webp "camelot")It’s been quite a while in the making (and maybe a bit late), but Camelot has arrived for Windows, OSX, Linux, and XBMC Live, and just in time for the holidays. Noteworthy changes include a revamped user interface via the new default skin “[Confluence](/skins/confluence)“, DirectX support by default for the Windows platform, a complete reorganization of the settings menus, automatic video information extraction, and smoother video playback. In addition, all scrapers have been updated, new remotes are supported out of the box, and codecs have been updated for more reliable playback. For a full changelog, see the end of this post.

Look to the [download page](https://kodi.wiki/download/) for the good stuff. We wish to thank our community for helping to make XBMC what it is. Several new [skins](/slideshow/skins) and [plugins](https://forum.kodi.tv/forumdisplay.php?fid=26) have been created since Babylon, be sure to check them out as well.

For the developers, this is where the fun starts. To quote the great Linus Torvalds, “A release is not so much of a birth of a new version, it’s more of a laying-to-rest of an old one. It’s also an end to a fairly quiet period.” It’s now open-season for us to start looking forward and begin merging in all those new features that have been brewing. Enjoy our latest offering as we get back to work!

As a brief aside, we’re looking to recruit a talented web developer as well as a graphics designer for a few future endeavors. If you’re interested in more detail and have serious skills (no weekend warriors please), [drop us a line](https://kodi.wiki/about/contact/).

**Update**: It looks like there’s a problem with the live installer causing installation to fail. Please hold tight while we look into it.

**Update #2:** Turns out the live issue was brought on by a last-minute upstream change. We’ll get this fixed ASAP, though due to the holidays, we ask for your patience.

**Update #3\*\***:\*\* Download links updated for 9.11 repack. Installer should now work correctly.

Read on for the condensed changelog:

> GUI:
>
> Improved XBMC GUI Skinning Framework making it even more flexible and powerful  
>  Powerbutton follows “shutdown function” in settings/system/power saving  
>  Updated translations for most languages (help is always wanted with translation)  
>  Skinnable Weather Plugin API enabling third-party Weather Plugins (Python Scripts)  
>  Edit button for RSS feeds in settings, (needs RssTicker script installed, see SCRIPTS section below)  
>  New screensaver option to turn off the screen (using VESA DPMS)  
>  Always On Top option to advancedsettings.xml when XBMC runs in Windowed Mode  
>  Better support for multi-monitor setups  
>  Settings have been re-organized and cleaned up to sync with new features
>
> Playback:
>
> High Definition, Surround Sound, and Subtitle Flagging and Filtering in Video Library  
>  Added support for SingStar and UltraStar Karaoke Lyrics Format  
>  Updated FFmpeg (libavformat and libavcodec) audio/video codec and demux library  
>  Speed up RAW image loading and handle more file extensions  
>  Implemented better WAV/PCM handling on 64-bit operating-systems  
>  Added support for additional tags in CUE sheets (Genre/Year)  
>  Added support for MPL2 (Blu-ray) subtitles format  
>  Added support forVPlayer subtitles format (which unfortunately is still in use)  
>  Added support for RTMP (Flash) live video streams, plus skip, pause, and resume feature  
>  Added proper MMS/MMSH streaming client (libmms) support  
>  Added audio and subtitle delay pop-up to the GUI (similar to volume control)  
>  Improved Commercial Skipping, EDL (Edit Decision List), and SceneMarker support  
>  Options for smoother video playback (syncing the video to the refresh rate of the display)  
>  Smart Playlists support for video resolution, aspect-ratio, codec, audio, and subtitles  
>  Extension of ExternalPlayer enabling multiple external players based on file-extension  
>  Added overlay renderer for dvd/vobsub/xsub
>
> Library:
>
> Performance improvements to SQLite (database) queries (help is always wanted here)  
>  Support for movie sets and a sortorder tag in the Video Library  
>  UPnP MediaServer compliant with DLNA (Digital Living Network Alliance) standards  
>  Ability to view pictures over UPnP in XBMC, also loads of fixes to the UPnP library  
>  Added scan for new content command to HTTP API, extended XBMC.updatelibrary call  
>  Reorganized MythTV directory structure to separate TV Shows from Movies  
>  Support importing MythTV movies into the Movies Library (including scraping)  
>  Added support local actor thumbnails (store as actor_name.tbn under .actors directory)  
>  Scrape studio info for TV Show/Season/Episode, info is available via studio field item  
>  Changed handling in Scrapers and NFO replacing «thumbs» with multiple «thumb»  
>  Added library update on resume if we are coming from suspend/hibernate  
>  Ability to scrape and scan TV Shows into the video library by air-date via TheTVDB.com
>
> Scrapers:
>
> TheMovieDB.org (TMDB) movie scraper upgraded to version 2.1  
>  Added Movie Trailer scraping from dtrailer.com to TheMovieDB.org scraper  
>  TheTVDB.com TV Shows scraper scraper improvements and enhancements  
>  MTV (Music Videos) scraper improvements and enhancements  
>  New freebase music scraper (with Artist FanArt support via htbackdrops.com)  
>  New Polish music scraper combining allmusic.com,merlin.pl, and lastfm.pl  
>  New mymovies.dk (Multilanguage) movie scraper (\*commercial)  
>  New fdb.pl (Polish) movie scraper  
>  New cinefacts.de (German) movie scraper  
>  New filmdelta.se (Swedish) movie scraper  
>  New world-art.ru (Russian) movie scraper  
>  Updated imdb.cn (Chinese) movie scraper  
>  New cine-passion (French/English) movie scraper  
>  Fixes and additions for the mymovies.xml scraper
>
> Skins:
>
> Confluence is the new default  
>  PM3.HD set to secondary  
>  Removed legacy PM III (farewell old friend)
>
> Windows-Specific:
>
> Changed from Open GL to DirectX for GUI and video rendering.  
>  Added Crash Dump for Windows  
>  Support Milkdrop visualizations
>
> Linux-Specific:
>
> Added support for Debian building and packaging to the XBMC SVN  
>  External libraries options when compiling XBMC for Linux making it more distro agnostic  
>  Support for PPC (PowerPC) processors in XBMC for Linux (OpenGL support required)  
>  Avahi Zeroconf (Zero Configuration Networking) for XBMC webserver  
>  Added DeviceKit.Disks integration  
>  Added DeviceKit.Power and ConsoleKit.Manager integration
>
> OS X Specific:
>
> Logitech Harmony Universal Remote support  
>  Added support for CoreAudio API and removed the PortAudio API code  
>  AC3 and DTS digital audio pass-through to SP/DIF on Apple TV (thanks to CoreAudio)  
>  Support for running external Applescripts  
>  Support for command-tab application switching  
>  support for OS X Spaces (virtual desktops)
>
> Live-Specific:
>
> New installer with disk partitioning support, network setup and language selection  
>  Uses Beatzeps08′s variation of duduke’s great “spinner black” usplash theme! Thanks Beatzeps08!!  
>  Based on Ubuntu Karmic  
>  NVIDIA drivers: 190.53 (VDPAU included on supported GPUs)  
>  ATI/AMD drivers: Catalyst 9.11  
>  Includes the magic tvheadend package, which brings live TV in XBMCLive  
>  The plugin “SVN Repo Installer” is also included, thus installing new scripts/plugins/skins will be easier
