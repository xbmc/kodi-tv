---
title: Kodi Nexus RC 2
date: 2022-12-19T17:59:57.536Z
author: Team Kodi
tags:
  - Developer
  - Prerelease
featured_image:
  src: /images/blog/nexus-rc-splash.jpg
  title: Kodi 20.x "Nexus" RC Splash Screen
  alt: A blue Kodi logo sits in a circle, atop white text - "Kodi". Clock
    artefacts surround it all - a background of computer noise. At the bottom, a
    solitary purple section of the circle, "Kodi Nexus Release Candidate".
---
So... here we have a second Release Candidate for Kodi v20 "Nexus". While we have a fairly small number of fixes, they are fairly major.

As always, thanks go out to all contributors for their work. We are nearing 4,000 commits since v19 "Matrix" was first released on February 19th 2021. For everyone that has contributed, both those in Team Kodi and all other devs that choose to roll up their sleeves and fix an issue. Everyone appreciates you for making Kodi better.

We also want to thank all those users who provide endless support on the forums, we appreciate you, and all the support anyone provides to our users.

### **Android Users**

A note for any users who are running Kodi on Android 11+. Android has had a number of large permission changes that we, and all apps released on the Google Play Store, have had to adhere to. The major change is permissions to locally attached storage (i.e. USB disks). If you use USB storage for your media on these versions of Android, after first run do the following to allow Kodi access to these disks:

Nvidia Shield - <https://nvidia.custhelp.com/app/answers/detail/a_id/5303/kw/permission>

1. Go to Android *Settings*
2. *Apps* and then "*See all apps*" (or just straight to *Kodi* if it's in *Recently Opened*)
3. Tap on *Kodi*
4. Go to *Permissions*
5. *Files and media,* and change to *Allow all the time*

### **Add-on Devs**

There was an API break after Beta 1 was released. The details can be seen on the forums (and of course discussed if any assistance is required) at <https://forum.kodi.tv/showthread.php?tid=370707>.

Essentially, if you use either the Python `InfoTagVideo` or `VideoStreamDetail` APIs, some functions had their variable names changed to bring consistency to the new set of APIs introduced earlier in Nexus.

We strongly advise users to always update to the latest test releases if you are on the bleeding edge, however if you are on older releases (e.g. Alphas or Beta 1), you may want to block updates on your add-ons as dev's update their add-ons to target RC and the final V20 release.

### **Release notes**

**Database**

* A couple of fixes have gone in to resolve database migration issues from v19.
* The first of these is the EPG database migration. This fixes the problem with the EPG loading and then disappearing. Thanks **@ksooo** for the prompt fix.
* A second DB migration issue that only occurred on the Microsoft UWP platform (Xbox and UWP desktop) has been fixed by **@thexai** . This was an odd one, as the code that dealt with the failure was old code (6+ years). It was traced to an odd race condition that only manifested on the UWP platforms, however the root cause potentially could happen on any other platform.

**General**

* A fix for playlist detection for both Audio and Video was made by **@ksooo** - <https://github.com/xbmc/xbmc/pull/22270>

**Platform Specific**

* **Linux**

  * **@popcornmix** has fixed an issue for DRMPrime on Linux. This allows hardware formats like Broadcom 8-bit (SAND128) and 10-bit (P030) can now be correctly rendered with the latest Mesa.
* **macOS**

  * A fix to allow Kodi to execute on MacOS 10.13 has been made. We would still strongly suggest users use a newer version (10.14+), however this allows users still on 10.13 to run Kodi.
  * A regression for MacOS reading actual disks was resolved by **@enen92** . As part of this, the `libcdio` driver was also fixed to enable disk usage on Apple Silicon native builds.
* **Windows**

  * A fix to a crash that only occurred on Windows Debug builds has been resolved. This didn't affect users of the actual RC1 release, but Windows devs who would attempt to execute Kodi as a Debug build were quickly halted.

**PVR**

* An issue around multiple resume dialogs has been fixed by **@emveepee** - <https://github.com/xbmc/xbmc/pull/22247>

**Teletext**

* Another Teletext issue has been resolved by **@repojohnray**. **@repojohnray** has contributed a number of fixes for v20 to help increase the reliability and safety of Kodi.

Although this was only a small number of fixes, they all help make the final release of "Nexus" better. Thanks to users who have provided issues and logs to assist with the resolution of these issues.

As always, and we are quite confident in its stability - however, always backup your configs before testing, and please let us know of any regressions or issues you find.

If you want to take the plunge, you can get RC 2 from [here](https://kodi.tv/download). Select your platform of choice, and look in the "Prerelease" section. 

If you wish you can see all the gory details of what's changed between v20 RC 2 and RC 1 [here](https://github.com/xbmc/xbmc/compare/20.0b1-Nexus...20.0rc1-Nexus).
For further information on changes for the entire Nexus release so far, we have highlighted most of the major features/changes in the previous Alpha/Beta blogs, go to our website to catch up on them [here](https://kodi.tv/blog)