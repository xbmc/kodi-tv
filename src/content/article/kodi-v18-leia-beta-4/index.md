---
title: "Kodi v18 Leia - Beta 4"
date: 2018-10-22T23:15:35Z
author: Martijn Kaijser
featured_image:
  src: /images/blog/Kodi-Wallpaper-35C-1080p_samfisher.webp
  title: "Kodi-Wallpaper-35C-1080p_samfisher"
  alt: "Kodi-Wallpaper-35C-1080p_samfisher"
---

We hereby present you the fourth Beta build of Kodi v18 as we are heading towards the final release. Since we are now in Beta stage our focus will be on solving bugs and possible usability problems. So far it has been proven to be quite solid to use as a daily driver for those who were brave enough to try it out. Of course you should still keep in mind it's not a final release yet and that on any upgrade a small glitch could happen as we are still doing rework. Once you decide to give it a try it is highly recommended that you create a backup first.

## Currently included

A full changelog is nearly impossible to create and in this release article we will only cover the basics. For a more extensive list you can visit our wiki page [v18 (Leia) changelog](<https://kodi.wiki/view/Kodi_v18_(Leia)_changelog>) which will be update along the way. From now on all v18 releases will not contain any big new features as we are focussed on bug fixing only.

Most notable changes to mention in Beta 4:

- Finally implemented binary repository for Android, OSX and Windows
- Further improve controller handling
- Fix playback of files in playlists that have mixed content of audio and video
- Fix possible crash on exit
- Bump NFS library to 3.0
- Various other code improvements and cleanups

Of course there are several more changes which are listed on our github repository found here: [Beta4 changes](https://github.com/xbmc/xbmc/milestone/113?closed=1).

Make sure to also go through our **[news](https://kodi.tv/blog)** sections which contain all past announcements regarding the Leia release and some highlights of what it will contain.

## Stability and usability is key

In general the whole stability has been improved quite a lot. The times you still get glitches or occasional crashes haven been reduced due to just ripping out not so well coded parts and replaced with a more structured design and standard. Not that the old code was bad however over time new insights were gained and having newer code standards just make it better. Untangling all parts or components and make them behave better next to each other has been one of the biggest efforts done so far.

**Current available skins**

Due to changes in how Kodi works skins need to be updated for each release. As of this moment we have the following ones have been update by their developers and are readily available from our repository.

[Adnoic](https://kodi.tv/addon/skins/adonic), [Aeon Nox 5](https://kodi.tv/addon/skins/aeon-nox), [Andromeda](https://kodi.tv/addon/skins/andromeda), [Black Glass Nova](https://kodi.tv/addon/skins/black-glass-nova), [Chroma](https://kodi.tv/addon/skins/chroma), [Confluence](https://kodi.tv/addon/skins/confluence), [fTV](https://kodi.tv/addon/skins/ftv), [Grid](https://kodi.tv/addon/skins/grid), [Mimic](https://kodi.tv/addon/skins/mimic), [Nebula](https://kodi.tv/addon/skins/nebula), [Omni](https://kodi.tv/addon/skins/omni), [Rapier](https://kodi.tv/addon/skins/rapier), [Sio2](https://kodi.tv/addon/skins/sio2), [Xperience1080](https://kodi.tv/addon/skins/xperience1080)

More will follow at a later point in time when we approach final release.

## Python 2 & 3 compatibility will be enforced

Currently, Kodi includes the Python 2.7 interpreter to run addons written in [Python](https://www.python.org/) programming language. However, Python 3 was released almost 10 years ago and the matter of implementing the Python 3 interpreter in Kodi has been brought up on the Kodi forum several times. Now, thanks to a successful [GSOC 2017 project](https://kodi.tv/article/gsoc-2017-update-python3-update), we have a working Python 3.6 interpreter for Kodi, and on the latest [DevCon 2017 in Prague](https://kodi.tv/article/devcon-2017-part-ii-day-two) Team Kodi decided that it’s time to move on and migrate Python addon subsystem to Python 3. ![<--break->](/sites/all/modules/wysiwyg/plugins/break/images/spacer.gif "<--break-->")There are several reasons for that:

- [Python 2 End of Life is planned for 2020](https://pythonclock.org/).

- Python 3 is mature enough and more and more Python libraries either convert their codebase to Python 3-compatible or drop Python 2 support completely ([Django](https://www.djangoproject.com/) is the most notable example).

- Most current Python books, tutorials and courses are focused on Python 3.

- Python 2 is not actively developed. It receives only security patches while Python 3 gets all the cool new features with every minor version.

However, Python 3 is not backward-compatible with the 2nd version so some transition process is required. Currently the plan is the following:

- Kodi 19 (M\*) will be released with Python 3 interpreter for running Python-based addons.

- After the release of Kodi 18 (Leia) only addons that are compatible with both Python 2 and 3 will be accepted to the official addon repository. Also, Python 3-only addons will be accepted to the repositories for Kodi 19 (M\*) and above.

- Addon developers are highly encouraged to convert their addons to Python 2/3-compatible so that after the release of Kodi 19 (M\*) we will have enough addons that work with the new version.

- Test builds based on Kodi 18 with the Python 3 interpreter will be provided continuously so addon developers can test their addons for compatibility with Python 3. Test builds for Windows are already available for downloading from [here](http://mirrors.xbmc.org/test-builds/windows/win32/) and test builds for Ubuntu can be obtained from [this PPA](https://launchpad.net/~wsnipex/+archive/ubuntu/kodi-python3/).

- One the v18 version has been branched off for final release the nightlies will become Python 3 only while the release builds will still be Python 2.

Writing Python code that is compatible with both 2 and 3 versions is totally possible and the “big” Python world has been doing it for years since the release of Python 3.0. There are a number of tools and best practices developed to simplify this process. Please read [this Kodi Wiki article](https://kodi.wiki/view/General_information_about_migration_to_Python_3) for more information and technical details about the migration process. Also [a special Wiki section has been created](https://kodi.wiki/view/Migration_to_Python_3) that will be updated with new information. You can post questions about converting your addon code to Python 3-compatible or share your experience in “[Python 3 migration](https://forum.kodi.tv/forumdisplay.php?fid=281)” subforum on the official Kodi forum.

## Binary repository

We can now finally say binary repostory has been finalised for Android, OSX and Windows and are happy to say we can finally split off the binary add-ons from our main Kodi installer which reduces it to half the normal size. For users this means that as already mentioned the installer is much smaller and the Kodi version they get is just enough to get started. Once they decide to get extra functionality like a using PVR they simply go to the repository and only install what they need unlike now where we preinstall them all. Next is the fact that for example a PVR add-on received some fixes you don't have to wait till we release a new Kodi version. Just like Python and Skin add-ons you will just received the updated PVR add-on and can enjoy the improvement straight away.

Read more here _[Kodi v18 - Binary add-ons repository](https://kodi.tv/article/kodi-v18-binary-add-ons-repository)_

## The story continues

Although we don’t really have a clear future plan or clear cut goals (except making a great media center) we would welcome any developer who wants to spend time on getting Kodi better in every way. Either improving the core code to newer standards, fixing bugs or implementing a new feature we haven’t thought of. Compared to years ago the code has become better to understand and follow for newcomers to get started. Once we get something written down of certain to reach goals we will certainly share them.

A great improvement has been made on the documentation that explains how to compile and work on the core code for Kodi. We highly recommend to read the article [Kodi's GitHub codebase new face and better documentation](https://kodi.tv/article/kodis-github-codebase-new-face-and-better-documentation).

**Release time**

Since we now started the Beta cycle a final release will be on the near horizon. When the final release will actually be is yet unknown as it all depends on the stability now more people will start using the v18 builds.

That’s about it for now and we’ll go back at improving this upcoming v18 release. Should you wish to give it a try a new version is readily available each day as well as nightly version. We can certainly recommend trying it out however take in mind that it’s not fully production and living room ready yet (take a backup). So far a guestimate of several tens of thousands users already use it so it can’t be that bad can it. You can get it from the download page clicking on the platform of choice and hitting the “pre release” tab. For [Android](https://kodi.tv/addon/scripts/kodi-android-installer) and [Windows](https://kodi.tv/addon/scripts/kodi-windows-installer) we have an easy to use download add-on which you can find in our repository.

_Go to the [Official download page](https://kodi.tv/download) and choose the platform of choice and you will find these builds under the pre release tab._

**If you do appreciate our work feel free to give a small donation so we can continue our effort. Just find the big "Donate" button at the top of the website.**

**_May the force be with you….._**

**_![](/images/blog/K-18L-Comic-Preview.webp)_**
