---
title: "Kodi v18 Leia RC2 - A new hope"
date: 2018-12-03T07:43:41Z
author: Martijn Kaijser
featured_image:
  src: /images/blog/K-18L-Comic-Preview.webp
  title: "K-18L-Comic-Preview"
  alt: "K-18L-Comic-Preview"
---

After two years of hard work by all volunteers, either part of the team or of our great community we can finally say the last steps towards Kodi v18 are being made. In past years many things have changed, either visually or code wise and to be honest i can't even recall most. We as team would certainly like to thank every developer and user who spent time helping us get this far.

To this point the current v18 version has been proven to be quite solid to use as a daily driver for those who were brave enough to try it out. Of course you should still keep in mind it's not a final release yet and that on any upgrade a small glitch could happen as we are still doing rework. Once you decide to give it a try it is highly recommended that you create a backup first.

## Changes in RC2

Most notable changes to mention in this Release Candidate:

- Update documentation regarding Python and Skin develoment: [Kodi Doxygen](https://codedocs.xyz/xbmc/xbmc/)
- Linux powermanagement: change logind detection to also use Dbus
- Android: Fix playback for some PVR add-ons
- Fix performance issue in PVR recording sub menu by reducing number of resume point update requests
- Android: Assign joysticks in order of MRU (last activation)
- Fix crash when an add-on did not define a version number
- VideoPlayer: fix state of a/v players after switching refresh rate
- Add new setting that allows to hide "spoiler" text for TV shows or movies

Of course there are several more changes which are listed on our github repository found here: [RC1 changes](https://github.com/xbmc/xbmc/milestone/115?closed=1).

## Currently included

To this point in time we’ve done

- More than 9386 commits (code chunks changed)
- More than 3000 pull-requests (collection of commits that were included in one go)
- More than 8638 changed files
- More than 503.000 code lines removed
- More than 427.000 code lines added
- Over 36 open source developers
- A lot of free time developing and testing these changes
- Quite likely several cases of beer or wine

A full changelog is nearly impossible to create looking back. As such this release article will only cover the biggest changes. For a more extensive list you can visit our wiki page [v18 (Leia) changelog](<https://kodi.wiki/view/Kodi_v18_(Leia)_changelog>) which will be update along the way. From now on all v18 releases will not contain any big new features as we are focussed on bug fixing or improvements only.

Make sure to also go through our **[news](https://kodi.tv/blog)** sections which contain all past announcements regarding the Leia release and some highlights of what it will contain.

#### **Current available skins**

Due to changes in how Kodi works, all skins need to be updated for each release. As of this moment the following skins have been update by their developers and are readily available from our repository.

[Confluence](https://kodi.tv/addon/skins/confluence), [Pellucid](https://kodi.tv/addon/skins/pellucid-0), [Rapier](https://kodi.tv/addon/skins/rapier), [Transparency](https://kodi.tv/addon/skins/transparency-0), [xperience1080](https://kodi.tv/addon/skins/xperience1080-0)

More will follow at a later point in time when we approach final release.

#### Kodi's GitHub codebase new face and better documentation

Starting with Kodi v18 Leia, our **[build guides](https://github.com/xbmc/xbmc/blob/master/docs/README.md)** are kept up-to-date against the current code base. Hopefully, up-to-date against a single pull request or code commit. This might seem of little importance but consider this: if, in two years time, you decide that you want to compile Kodi Leia for whatever reason, you won't need to dig through the Wiki, forum guides, old HOW-TOs, etc, to achieve what should be a simple task. The correct build instructions are right there, alongside the code. Of course, there are things we can't control and in two years a lot can change. Your shiny new OS or hardware might not be compatible with an older Kodi version. That's not our fault, by the way. ;)

Read more here _[Kodi's GitHub codebase new face and better documentation](https://kodi.tv/article/kodis-github-codebase-new-face-and-better-documentation)_

#### The wiki pages

Next to our forum, some of the best sources for finding answers are the Kodi [wiki pages](https://kodi.wiki/view/Main_Page). With each release certain aspects of the software change and this of course needs to be reflected on the official wiki pages. Several team members and regular users spend quite some time updating and tweaking these pages to become a helpful one stop place for all information.

[![](/images/blog/kodi_wiki_main.webp)](https://kodi.wiki/view/Main_Page)

#### DRM (Digital Rights Management)

With the work above being done in the video player a possibility came up to also allow something that opens Kodi up for using it in combination with DRM protected content. These days it’s quite common for content owners and providers to protect their content with encryption. With v18 we added the ability to also play this content as it was actually intended by the DRM system. Depending on the used hardware and included license you can now playback this content which usually also comes with a subscription service. Instead of the sometimes clunky apps a possibility would be to just use the trusted Kodi environment to watch what they have to offer. There are already several add-ons available from our repository that already use this capability and we certainly hope more will follow and that content providers will make their service available as official add-on.

Read more here _[Kodi and DRM](https://kodi.tv/article/dev-journal-kodi-and-drm)_

#### Estuary interface and settings

Throughout the user interface we have added tiny changes and improvements. Some might not be noticeable however it should improve the general usability. Additionally the settings section underwent some modification as well. We would like to advise to go through all the setting sections and adjust them to your liking. At the bottom of the interface there’s a small extended description on what each setting does.

#### **Music library**

Music section also gained lots of improvement for those who cares a lot about having a clean music library. Going through the code and scanning options a better understanding was gained on the past intentions and redone in a more structured way. The same accounts in a smaller part for video library although that was in a better maintained state. What is new however in v18 is that similar to music we can now also use the embedded tags instead of the file names to fill the library. For now this has been disabled by default as there’s simply a lack of really well defined standard and proper easy to use video tagging software. We hope with Kodi now gaining this ability a gained interest will make these available.

#### **Live TV**

Next part is the great feature of Kodi to use it as your Live TV and recording front-end. It’s one of the less well known features as it requires certain knowledge and tinkering to set this up however once it works you’ll love it. To be able to use this you’ll need some extra hardware like a USB tuner or a network tuner like HDHomerun to get the cable or ether signal converted to a video stream. This in combination with one of the PVR server software options like VNSI or TVHeadend (more options are available) you instantly gain a very pleasant TV experience. What has been done over time is improving the usability and stability of this component and trying to make it a great replacement for your normal cable/ether set top box. A starting guide can be found here: [Live TV and PVR/DVR Setup Guide](https://kodi.wiki/view/PVR)

![](https://kodi.tv/sites/default/files/v18-Livetv-improvements.webp)

#### Python 2 & 3 compatibility will be enforced

Currently, Kodi includes the Python 2.7 interpreter to run add-ons written in [Python](https://www.python.org/) programming language. However, Python 3 was released almost 10 years ago and the matter of implementing the Python 3 interpreter in Kodi has been brought up on the Kodi forum several times. Now, thanks to a successful [GSOC 2017 project](https://kodi.tv/article/gsoc-2017-update-python3-update), we have a working Python 3.6 interpreter for Kodi, and on the latest [DevCon 2017 in Prague](https://kodi.tv/article/devcon-2017-part-ii-day-two) Team Kodi decided that it’s time to move on and migrate Python add-on subsystem to Python 3. ![<--break->](/sites/all/modules/wysiwyg/plugins/break/images/spacer.gif "<--break-->")There are several reasons for that:

- [Python 2 End of Life is planned for 2020](https://pythonclock.org/).

- Python 3 is mature enough and more and more Python libraries either convert their codebase to Python 3-compatible or drop Python 2 support completely ([Django](https://www.djangoproject.com/) is the most notable example).

- Most current Python books, tutorials and courses are focused on Python 3.

- Python 2 is not actively developed. It receives only security patches while Python 3 gets all the cool new features with every minor version.

However, Python 3 is not backward-compatible with the 2nd version so some transition process is required. Currently the plan is the following:

- Kodi 19 (M\*) will be released with Python 3 interpreter for running Python-based add-ons.

- After the release of Kodi 18 (Leia) only add-ons that are compatible with both Python 2 and 3 will be accepted to the official add-on repository. Also, Python 3-only add-ons will be accepted to the repositories for Kodi 19 (M\*) and above.

- Add-on developers are highly encouraged to convert their add-ons to Python 2/3-compatible so that after the release of Kodi 19 (M\*) we will have enough add-ons that work with the new version.

- Test builds based on Kodi 18 with the Python 3 interpreter will be provided continuously so add-on developers can test their add-ons for compatibility with Python 3. Test builds for Windows are already available for downloading from [here](http://mirrors.xbmc.org/test-builds/windows/win32/) and test builds for Ubuntu can be obtained from [this PPA](https://launchpad.net/~wsnipex/+archive/ubuntu/kodi-python3/).

- One the v18 version has been branched off for final release the nightlies will become Python 3 only while the release builds will still be Python 2.

Writing Python code that is compatible with both 2 and 3 versions is totally possible and the “big” Python world has been doing it for years since the release of Python 3.0. There are a number of tools and best practices developed to simplify this process. Please read [this Kodi Wiki article](https://kodi.wiki/view/General_information_about_migration_to_Python_3) for more information and technical details about the migration process. Also [a special Wiki section has been created](https://kodi.wiki/view/Migration_to_Python_3) that will be updated with new information. You can post questions about converting your add-on code to Python 3-compatible or share your experience in “[Python 3 migration](https://forum.kodi.tv/forumdisplay.php?fid=281)” subforum on the official Kodi forum.

#### Binary repository

We can now finally say binary repostory has been finalised for Android, OSX and Windows and are happy to say we can finally split off the binary add-ons from our main Kodi installer which reduces it to half the normal size. For users this means that as already mentioned the installer is much smaller and the Kodi version they get is just enough to get started. Once they decide to get extra functionality like a using PVR they simply go to the repository and only install what they need unlike now where we preinstall them all. Next is the fact that for example a PVR add-on received some fixes you don't have to wait till we release a new Kodi version. Just like Python and Skin add-ons you will just received the updated PVR add-on and can enjoy the improvement straight away.

Read more here _[Kodi v18 - Binary add-ons repository](https://kodi.tv/article/kodi-v18-binary-add-ons-repository)_

#### Android, Android TV Leanback suggestions, search and voice typing

![](https://kodi.tv/sites/default/files/Google-assistant-logo.webp)Regarding Android we just continued to do what we started some years ago and that was stripping all custom written code and simply following the official Android standards. When XBMC back then became available for Android a lot of specific code was written to get it running on those low powered devices and we had more capabilities than any other application back then. Over time stock Android improved a lot and basically all what we had custom made was becoming readily available to be used. At that point we started dropping old stuff and just applied the standards which reduced support burden for the developers. Now all that was done we could start looking at new features and from that we gained the [Leanback search integration](https://kodi.tv/article/kodi-v18-android-leanback-suggestions-search-and-voice-typing) on Android TV that shows Kodi content on Android TV itself. We now also include Google Assistant out of the box so theoretically you don’t have to pick up the remote anymore. To be honest it’s still uncomfortable and weird talking to your TV giving it commands. For Android TV Oreo there’s a whole new interface which includes the option to fill so called Channels that shows specific content from your app. We can proudly say that Kodi is actually one of the first applications that actually has this integrated. With the great hidden Kodi feature called Smartplaylists you can now populate the Android TV screen with content you want. For the touch enabled devices we can also say this has improved quite a lot as well make it feel more natural.

Read more here _[Kodi v18 - Android Leanback suggestions, search and voice typing](https://kodi.tv/article/kodi-v18-android-leanback-suggestions-search-and-voice-typing)_

#### **Linux**

Linux gained some great things as well which might not mean a lot for regular users though. For our Google Summer of Code we had a project integrating [Wayland display server protocol](https://kodi.tv/article/gsoc-2017-update-wayland-support) (again) to our code base which is meant to be the successor of X11 Window System. Since Linux is also quite divided on display drivers we had quite a lot of code implementations getting Kodi running on the variety of devices out there. To reduce the maintenance burden of this code a general path was chosen and for GBM (Generic Buffer Manager) and V4L2 (Video for Linux). With this only a small part of the initial code is needed to get devices running and from this newer devices would just run out-of-the-box once the Linux kernel supports these.

#### **Retroplayer and input manager**

Retroplayer together with input manager makes controlling Kodi using various remotes or controllers much better and a plug and play experience. Not having to thinker to get the correct configurations is something that we all would like and hopefully this achieves this. Kodi’s history is rooted in video games. When we were known as XBMC on the original Xbox, games were a first-class medium. They could be browsed within XBMC, and launching a game was as easy as playing a movie. In particular, retro games held a magic appeal for me. Because they were so accessible, they were able to bring together many diverse people in my life. Gaming history fascinates me, and through XBMC I was able to explore and learn about games I would otherwise never be able to experience.

Today I’m excited to announce that Kodi is bringing the ability of playing retro games to Kodi users. I believe there exists a “technical divide”, where those who haven’t been exposed to emulation can’t use it. My vision is to bridge this divide by hiding emulation entirely, truly democratizing access to gaming history. Any why stop at accessibility? I call the project “RetroPlayer” — being able to play a game using movie paradigms. Live gameplay can be paused. Leaving and returning later will persist where you left off. Fast-forwarding requires some zany reflexes. And my favourite: gameplay can be rewound in real time. Initially, we’re including two simple, recognizable games. I purposefully left some manual configuration and rough edges in our Beta 3 release to reduce the immense scope of the project. With the help of the awesome emulation community, I’m sure we can tackle the hard problems left between us and zero-configuration bliss. Accessible emulation is a monumental effort that could never be done without the dedication of our team and the countless testers we’ve had over the last 6 years. Our project is built on libretro, an API from the RetroArch team. We owe this milestone in emulation to their hard work porting over 100 emulators and games. Thank you!

Written by developer: **Garbear**

For support questions go here: _[Game support](https://forum.kodi.tv/forumdisplay.php?fid=292)_

#### Windows 64-bit is here

After years of work we can finally announce that Kodi v18 will be available as full 64-bit Windows application. This means we run 64-bit on all capable platforms which is quite the achievement. We recommend every user to upgrade to this 64-bit version if you also run 64-bit Windows. You can find this under system information in Windows itself.

Read more here _[Kodi v18 - Windows 64-bit is here](https://kodi.tv/article/kodi-v18-windows-64-bit-here)_

#### **Windows UWP and** Xbox One

![](https://kodi.tv/sites/default/files/distribution/logo/xbox.svg)For Windows specific several big things happened. First of all we got added as 32-bit Bridge application to Windows store which makes it easier for new users to install Kodi and receive updates. A simultaneous action was converting Kodi to a full 64-bit application which took quite some effort. A more detailed story can be read here: [Windows 64-bit is here](https://kodi.tv/article/kodi-v18-windows-64-bit-here)

Now that was out of the way a long lived dream of quite a few became an option again. Getting Kodi running back on a XBOX like where it all started more than 15 years ago. Since 27 December 2017 we released Kodi once again for the XBOX (One) and is available from the Store.

**Important note: For the moment the UWP/XBOX version will remain in Beta stage until several issues are resolved.**

Read more here [_Kodi v18 - Xbox One_](https://kodi.tv/article/kodi-xbox-one)

#### Goodbye Windows Vista

Development on Kodi also includes making sure it keeps working on all current and older operating systems. However at some point we also have to say goodbye and end support.  
In the past we already had to say goodbye to the first [XBOX](https://kodi.tv/article/farewell-xbox), [Windows XP](https://kodi.tv/article/end-windows-xp), [Apple TV2](https://kodi.tv/article/farewell-future-apple-tv2-development), Ubuntu 12.04, anything lower than OSX 10.8 and all versions lower than Android 5 (Lollipop).

Read more here _[Kodi v18 - Goodbye Windows Vista](https://kodi.tv/article/kodi-v18-goodbye-windows-vista)_

#### The V18 Leia t-shirt

Inspired by the galaxy far, far away theme, our resident artist Sam went above and beyond and designed perhaps the coolest Kodi announce video of all time.

We loved his work so much that we're modelling the Kodi 18 shirt after it along with more art to come. Here it is, our [newest, coolest shirt: K-18L](https://teespring.com/stores/kodi-18-leia-store)  
(Available in several shirt **colours** and not just black or white)

[![Kodistore](/images/blog/Kodi18Store.webp)](https://teespring.com/stores/kodi-18-leia-store)

#### **Release time**

Since we now started the RC cycle a final release will be on the near horizon. When the final release will actually be is yet unknown as it all depends on the stability now more people will start using the v18 builds.

That’s about it for now and we’ll go back at improving this upcoming v18 release. Should you wish to give it a try a new version is readily available each day as well as nightly version. We can certainly recommend trying it out however take in mind that it’s not fully production and living room ready yet (take a backup). So far a guestimate of several tens of thousands users already use it so it can’t be that bad can it. You can get it from the download page clicking on the platform of choice and hitting the “pre release” tab. For [Android](https://kodi.tv/addon/scripts/kodi-android-installer) and [Windows](https://kodi.tv/addon/scripts/kodi-windows-installer) we have an easy to use download add-on which you can find in our repository.

_Go to the [Official download page](https://kodi.tv/download) and choose the platform of choice and you will find these builds under the pre release tab._

### Donations or getting involved

Getting involved is quite easy. Simply take the plunge and start using v18.0 Leia. If you use this version, we encourage you to report problems with these builds on our forum first and after that, if asked and the bug is confirmed, submit the issue on Github (following this guide: [How to submit a bug report](https://kodi.wiki/view/HOW-TO:Submit_a_bug_report)). Do note that we need detailed information so we can investigate the issue. We also appreciate providing support in our [Forums](https://forum.kodi.tv/ "Kodi Forums") where you can. You can of course also follow or help promote Kodi on all available social networks. Read more on the [get involved](https://kodi.tv/get-involved) page.  
**If you do appreciate our work feel free to give a small [donation](https://kodi.tv/contribute/donate) so we can continue our effort. Just find the big "Donate" button at the top of the website.** All donations go towards the XBMC foundation and are typically used for travel to attend conferences, any necessary paperwork and legal fees, purchase necessary hardware and licenses for developers and hopefully the yearly XBMC Foundation Developers Conference.

**_May the source be with you….._**

**_![](https://kodi.tv/sites/default/files/K-18L-Comic-Preview.webp)_**
