---
title: 'Kodi 14.1 - Helix Bugfix Release'
date: 2015-02-01T03:00:00Z
author: Martijn Kaijser
featured_image:
  src: /images/blog/kodi-helix-14.1.png
  title: 'kodi-helix-14.1'
  alt: 'kodi-helix-14.1'
---
### EDIT: Please see our Kodi 14.2 beta release

 We are proud to announce the release of Kodi 14.1, which comes with a new name, a new logo, and a wide variety of new features, but underneath the new coat of paint remains the same software we all love. This is the first small bugfix release in the Helix range. As we have mention in our Kodi 14.0 [release announcement,](/article/kodi-140-helix-unwinds) we will be releasing these to squash down any issues left after the first final release. Below you will find a list of fixes so far.

 Fixes so far
------------

 
 * * Fix: incorrect video screensize on Android AML devices
 * * Fix: potential segfault when silencing audio
 * * Fix: do not skip streaminfo if format is not know.
 * * Fix: DXVA flickering on AMD
 * * Fix: prevent possible over-flow in ALSA
 * * Fix: possible sorting problems in library
 * * Fix: possible problem in library navigation
 * * Fix: don’t scroll text when it’s set to not do it
 * * Fix: scroll text if it’s too long on spinner controls
 * * Fix: don’t overlap PVR search labels
 * * Fix: bug in DLNA client string on iOS
 * * Fix: updated several PVR add-ons
 * * Fix: remember played state of video when started from recently added
 * * Fix: correct vsync on OSX
 * * Fix: broken keyboard input
 * * Fix: prevent crash on circular dependencies of add-ons
 * * Fix: large file support on Android
 * * Fix: random exiting on Android x86 builds (Nexus Player for example)
 
 Re-touched skin
---------------

 As of now the standard touch skin which is called re-touched, now also includes a PVR section.

 Windows
-------

 Finally, there remain a few known bugs in Kodi 14.1 for Windows. However this should affect only a tiny portion of the users. In very rare cases Windows users may experience a Kodi crash. In such cases please disable the webserver in settings. The developers are working on finding the underlying cause of this and hope is on the horizon. However because this is quite a deeply buried problem we are unlikely to be able to fix it for the 14.x series. We will make certain it will be fixed for 15.0. For more information and test-builds regarding this issue visit this [forum thread](https://forum.kodi.tv/showthread.php?tid=216275). Your input and help resolving this problem is much appreciated.

 Rasberry Pi 2
-------------

 The new and faster model [Raspberry Pi 2](https://www.raspberrypi.org/blog/raspberry-pi-2-on-sale/) was just announced and we receive a lot of questions if Kodi will run on it. So yes of course Kodi will run on it. OpenELEC has released a special version for the new model based on Kodi 14.1 which will have full support for it out of the box.

 A Few Warnings and Notices
--------------------------

 This release marks the switch to the new name Kodi. When you install this releases , your library and add-ons will be moved to Kodi, making reverting back to 13.2 fairly difficult. As such, it is recommended that you [back up your library](https://kodi.wiki/view/HOW-TO:Backup_the_library "How to backup the library") [as well as your settings](https://kodi.wiki/view/Backing_up_XBMC) before installing Kodi.

 If you are using a skin other than the default Confluence, it is possible that you may find the software keyboard blank as a result of the previously mentioned keyboard layout upgrade. If so, you need to either switch to a new skin, or see if your skin has a Helix update. While Kodi automatically checks for addon and skin updates, you can speed up this process by visiting the addons browser from the settings menu and selecting “Check for updates.”

 Also, as Kodi is an unsigned application on OSX, you may need to go through a slightly different process to start it the first time. After you have copied Kodi to the Applications folder, you will need to “right click” or “two finger click” Kodi from within the Applications folder and select “Open” and then accept the warning. You should only need to do this the first time you run Kodi.

 Finally, there remain a few known bugs in Kodi 14.0 that should affect only a tiny portion of the population. In very rare cases Windows users may experience a Kodi crash. In such cases please disable the webserver in settings. We hope to have these issues resolved by the inevitable Kodi 14.1 release.

 Download
--------

 To download, please visit our download page. To upgrade from any previous build, just install on top of your current version.

 
 * * [Official Kodi 14.1 downloads](https://kodi.wiki/download/)
 
 ### How to Contribute

 If you use Kodi, we encourage you to report problems with it on our forum first and after – if asked – submit bugs on Trac (following this guide: [How to submit a bug report](https://kodi.wiki/view/HOW-TO:Submit_a_bug_report)). Do note that we need detailed information so we can investigate the issue. We also appreciate providing support in our [Forums](https://forum.kodi.tv/ "XBMC Forums") where you can and [donating](https://kodi.wiki/contribute/donate/ "XBMC Foundation Donations") to the XBMC Foundation if you like. For a current FAQ on Kodi 14, visit our [Helix FAQ](https://kodi.wiki/view/Kodi_v14_(Helix)_FAQ). You can of course also follow or help promote Kodi on any or all of our listed social networks.

 