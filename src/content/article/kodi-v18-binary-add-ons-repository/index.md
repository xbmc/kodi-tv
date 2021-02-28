---
title: 'Kodi v18 - Binary add-ons repository'
date: 2018-10-21T23:18:30Z
author: Martijn Kaijser
featured_image:
  src: /images/blog/Kodi_Blog_Blueprint_Leia_900x336.jpg
  title: ''
  alt: ''
---
The problem
-----------

 For many years our developers have been working getting the Kodi code in component specific parts. In that effort some components have been split off in such a way they are actually separate from Kodi itself, and can be installed at any point in time. We have already been using such components for years and we call these add-ons. The ones using Python programming language have been inside a repository for quite some time. Also the skins you can install to give Kodi a different looks and feel are add-ons. Now the big difference is that the Python and Skin add-ons usually don't really care what operating system they run and install on as they are platform agnostic. With the binary add-ons however one of the biggest problems is we have to pre compile these for a specific operating system and some cases also the OS version. They usually consist of C++ code and you cannot simply compile it for one platform and use it on another platform. Added to the fact is that they are tied to a specific Kodi version because of certain functions used as well which make it quite the logistical nightmare how to distribute them for each Kodi version per platform.

 The work
--------

 For the past years you of course have already been using them as most screensavers and visualizations and all PVR clients are in fact binary add-ons. To not halt the work on splitting them off from our code because we simply compiled them and then put them in the same installer package as Kodi itself. The logistic part something we put on hold would worry about in the future however was always considered to when work progressed. For the past years this was not an issue cause the ones we included were quite small in size and there was no real pressure to get the logistic part working. However with Kodi v18 a completely new feature was finally merged after years of work that made the binary repository a high priority. For RetroPlayer which is a feature that lets you play old gameroms using emulators the size of the installer package would grow considerably and double in size.

 To play a gamerom you need emulators and each game console has one if not multiple emulators. Counting them up there would be more than 80 emulators to compile each time we created an installer package and that takes quite some compile time for something that might not always change. Now again add the fact that say these 80 emulators (plus the 70 or so we already had) need to be compiled for all the platforms we support and then for each Kodi version you can imagine this needs some clever thinking to prevent clashes and prevent the add-on to be installed on the wrong platform. We always had a certain idea how we should solve this but it never really was time to get that done until now. Not only the compiling had to be sorted however there's also the part of putting them on our server(s) and letting each Kodi client know there's a new version available for that specific platform it is installed on.

 It works
--------

 We can now finally say all this has been finalised and are happy to say we can finally split off the binary add-ons from our main Kodi installer which reduces it to half the normal size. For users this means that as already mentioned the installer is much smaller and the Kodi version they get is just enough to get started. Once they decide to get extra functionality like a using PVR they simply go to the repository and only install what they need unlike now where we preinstall them all. Next is the fact that for example a PVR add-on received some fixes you don't have to wait till we release a new Kodi version. Just like Python and Skin add-ons you will just received the updated PVR add-on and can enjoy the improvement straight away.

 Binary repositort is currently available for Android, OSX and Windows. For Linux you still have to use the PPA and iOS and UWP will continue to include the binary add-ons in the installer because of platform limitations and for now nothing changes.

 ![](https://kodi.tv/sites/default/files/v18_binary_repo.png)

 ![](https://kodi.tv/sites/default/files/v18_binary_repo_installed.png)

  

 **Installing**

 Should you wish to give it a try a new version is readily available each day as well as nightly version. We can certainly recommend trying it out however take in mind that it’s not fully production and living room ready yet (take a backup). So far a guestimate of several tens of thousands users already use it so it can’t be that bad can it. You can get it from the download page clicking on the platform of choice and hitting the “pre release” tab. For [Android](https://kodi.tv/addon/scripts/kodi-android-installer) and [Windows](https://kodi.tv/addon/scripts/kodi-windows-installer) we have an easy to use download add-on which you can find in our repository.

 *Go to the [Official download page](https://kodi.tv/download) and choose the platform of choice and you will find these builds under the pre release tab.*  
  
**If you do appreciate our work feel free to give a small donation so we can continue our effort. Just find the big "Donate" button at the top of the website.**

 