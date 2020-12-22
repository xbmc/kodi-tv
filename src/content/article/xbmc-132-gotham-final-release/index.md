---
title: 'XBMC 13.2 - Gotham final release'
date: 2014-08-17T04:00:00Z
author: Martijn Kaijser
featured_image: /images/blog/xbmc-gotham-13.2-splash.png
---
Here it is. One of the last versions ever that will be using the XBMC name, as we are renaming XBMC to Kodi. All our future releases will be using the Kodi name. You can read about that [here](https://kodi.wiki/introducing-kodi-14/). However lets focus on this release. After three beta releases and a release candidate, we are happy to announce the final **13.2** release. This follows a couple of months after the 13.1 release, and is considered a small bug fix release. Unfortunately we cannot fix all things reported. Below you will find a list of most important fixes included in this release.

 Do note that this release only contains fixes and no new features. So it should be safe to install on top of any of the current 13.x releases. Please read the *important notice* at the bottom as well. Should you find any problems, you can find how to report these at the bottom of this announcement.

 Fixes

 Fixes done in **13.2**

 
 * * Fix audio problems with pass-through on OSX
 * * Crash in Android if an app is favourite, then uninstalled from system.
 * * Fix crash in Android when entering programs menu in some skins
 * * Bitstream conversion fix for some BD mkv iso rips
 * * Fix labelcontrols with autowidth set were always marked as dirty (re-render)
 * * Update included PVR add-on
 * * Set “remote as keyboard” default to true for Android
 * * Fix FTP TLS not working
 * * Fix some disappearing characters on Mac OSX
 * * Fix onplaybackstarted event for external players
 * * Don’t show OSD menu DVD menu with mouse/touch
 * * GetText and delete sound option for add-on developers
 * * Fix wrong sample-rate selection on OSX
 * * Fix optical usb devices with \> 2 channels on OSX
 * * Fix firewall popups in OSX on start-up
 * * Make the fake full-screen option only visible when running OSX snowleopard
 * * Fix overlapping subtitles
 * * Fix accented letters. Example: “VARIéS” rather than “VARIÉS”
 * * Prompt for master pin in case the add-on manager is locked
 * * Update GUI translations
 * * Update included add-ons
 * * Fixed several bugs and memory leaks
 
  

 Important notice
----------------

 **Linux users** Ubuntu 12.10 and 13.10 have been deprecated by canonical/ubuntu. This means there will be no more XBMC builds available for those version. You will have to upgrade you Ubuntu to a newer version to receive XBMC updates again.

 **Backup your data** Before upgrading we would recommend you create a backup of your current userdata folder which contains all your current settings and database files. In the unlikely case that something went wrong during your upgrade, a backup will ensure that you are still able to go back to the previous state. Where the userdata folder is located on your system can be found on our [userdata](https://kodi.wiki/view/Userdata) wiki page. Do note that when first upgrading from Frodo 12.x it may take some time until you see the familiar homescreen as several internal upgrades need to be performed.

 **Add-ons** As mentioned in previous blog posts, due to changes related to our add-on system and skin improvement, certain plugins, scripts and skins may become incompatible when upgrading from Frodo to Gotham. Sadly this is part of the continuing process of development and improvement. We hope the impact of these changes will be limited but we feel a warning would be beneficial. If there are any addons you particularly depend on, we advise that you visit the forum thread of that addon to see if the author has ensured support in XBMC 13.

 **Installing on OSX** As XBMC is an unsigned application on OSX, you may need to go through a slightly different process to start it the first time. After you have copied XBMC to the Applications folder, you will need to “right click” or “two finger click” XBMC from within the Applications folder and select “Open” and then accept the warning. You should only need to do this the first time you run XBMC.

 **Code base** Since we have branched the XBMC core code for Gotham off from our main development master branch on Github it is important that you also build from the correct Github branch: <https://github.com/xbmc/xbmc/tree/Gotham>

 Conclusion
----------

 Should want to download and install this Release Candidate, please visit our download page

 
 * * [Official XBMC 13.2 release downloads](https://kodi.wiki/download/)
 * * For [OpenELEC](https://openelec.tv/) releases visit their website
 
  

 The Last XBMC Shirt Ever
------------------------

 [![xbmclastshirt](/sites/default/files/uploads/xbmclastshirt.jpg)](https://teespring.com/lastxbmcshirt1)Because of your generosity in t-shirt sales, straight-up donations, and word-of-mouth evangelizing, this project has lasted for 12 years and through four different names, and with your help, we all believe it can last twice that long again. So we figured we’d offer a t-shirt to commemorate the name change.

 There’s only one thing. The image at the top of this article is not the final logo. We are working with [doghousemedia](https://doghouse.agency/ "doghousemedia") to truly realize an awesome logo, and we aren’t quite there yet.

 So instead of offering a bit of swag with the new name, we figured we’d offer the exact opposite. [This is it](https://teespring.com/lastxbmcshirt1 "The Last XBMC Shirt"). The last XBMC shirt or related piece of merchandise we’re ever going to sell.

  

   How to Contribute
-----------------

 If you use these builds, we encourage you to submit bugs in Trac with sufficient information (following this guide: [How to submit a bug report](https://kodi.wiki/view/HOW-TO:Submit_a_bug_report)), provide support in our [Forums](https://forum.kodi.tv/ "XBMC Forums") where you can, or [donate](https://kodi.wiki/contribute/donate/ "XBMC Foundation Donations") to the Foundation if you like. For a current FAQ on XBMC 13, visit our [Gotham FAQ](https://kodi.wiki/view/XBMC_v13_(Gotham)_FAQ "XBMC 13 FAQ").

 