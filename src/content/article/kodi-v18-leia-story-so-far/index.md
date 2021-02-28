---
title: 'Kodi v18 Leia - The story so far'
date: 2018-02-10T04:00:35Z
author: Martijn Kaijser
featured_image:
  src: /images/blog/Kodi-Wallpaper-36A-1080p_samfisher-header.jpg
  title: ''
  alt: ''
---
 Around November 2016 the team decided that v17 Krypton was mature enough to start with the release steps and as such it was branched off from our main development tree. This basically means it received its own place in our development repository and would only receive bug fixes and small improvements. This is also the moment that frees up the possibility for several core developers to start another cleanup and improvement spree that was also done when just starting with v17. This usually entails to take a more evasive steps on cleaning up code and less taking in account that certain parts will be broken for a certain time. Having a good foundation to build on is key in anything and that also includes a software application.

 It’s hard to renovate a home while people are constantly using it and it’s easier to just move them to a neighbouring home while parts are being torn down and being rebuild.  
Maybe this is a simple analogy however it kinda fits. Another one is replacing the wheels and engine of a car while you’re doing 120km/h on the freeway. Better pull it aside and do it properly and give the driver a spare car that still works fine although it's not so fancy driving yet.

 In the past we mentioned doing RERO (Release Early Release Often) at times and to be honest we didn’t really got to that part so far. Only the bugfix versions of the final builds followed this to just make fixes available as soon as we saw fit. For a massive application like Kodi with many platforms and components a RERO approach is quite demanding on all people involved and perhaps it wouldn’t really make sense to do so in current state we are in. We do see this improving by the day so we are on the right track. At current time v17 is already a year old (with 17.6 bugfix past november) however it really just works fine across the board and should keep working for a long time. As we continued the work with current v18 Leia it kind of became apparent that the current workflow we are in works very very well. A healthy balance (at least that’s what i personally feel) is currently active between cleanup, features and fixing regressions. A lot of Team members and also regular users are running these nightlies builds and it’s getting rock solid to use. Of course you should still keep in mind that on any upgrade a small glitch could happen as we are still doing rework. Having a semi recent backup is certainly always a good idea.

  

 Currently included
------------------

 Now we got that part covered here’s what actually happened over the past year.

 To this point in time we’ve done

 
 * More than 5900 (code chunks changed)
 * More than 1830 pull-requests (collection of commits that were included in one go)
 * More than 7580 changed files
 * More than 350.000 code lines removed
 * More than 397.000 code lines added
 * Over 35 opensource developers
 * A lot of free time developing and testing these changes
 * Quite likely several cases of beer or wine
 
 So that’s quite a lot of work done by these volunteer developers and people these changes. Hopefully once you start upgrading the experience you have will be great and appreciate the work being done.

 Stability and usability is key
------------------------------

 In general the whole stability has been improved quite a lot. The times you still get glitches or occasional crashes haven been reduced due to just ripping out not so well coded parts and replaced with a more structured design and standard. Not that the old code was bad however over time new insights were gained and having newer code standards just make it better. Untangling all parts or components and make them behave better next to each other has been one of the biggest efforts done so far.

 **Music library**

 Music section also gained lots of improvement for those who cares a lot about having a clean music library. Going through the code and scanning options a better understanding was gained on the past intentions and redone in a more structured way. The same accounts in a smaller part for video library although that was in a better maintained state. What is new however in v18 is that similar to music we can now also use the embedded tags and fill the library based on that instead of using file names. For now this has been disabled by default as there’s simply a lack of really well defined standard and proper easy to use video tagging software. We hope with Kodi now gaining this ability a gained interest will make these available.

 **Live TV**

 Next part is the great feature of Kodi to use it as your Live TV and recording front-end. It’s one of the less well known features as it requires certain knowledge and thinkering to set this up however once it works you’ll love it. To be able to use this you’ll need some extra hardware like a USB tuner or a network tuner like HDHomerun to get the cable or ether signal converted to a video stream. This in combination with one of the PVR server software options like VNSI or TVHeadend (more options are available) you instantly gain a very pleasant TV experience. What has been done over time is improving the usability and stability of this component and trying to make it a great replacement for your normal cable/ether set top box. A starting guide can be found here: [Live TV and PVR/DVR Setup Guide](https://kodi.wiki/view/PVR)

 ![](https://kodi.tv/sites/default/files/v18-Livetv-improvements.png)

 **Windows and UWP**

 ![](https://kodi.tv/sites/default/files/distribution/logo/xbox.svg)For Windows specific several big things happened. First of all we got added as 32-bit Bridge application to Windows store which makes it easier for new users to install Kodi and receive updates. A simultaneous action was converting Kodi to a full 64-bit application which took quite some effort. A more detailed story can be read here: [Windows 64-bit is here](https://kodi.tv/article/kodi-v18-windows-64-bit-here)

 Now that was out of the way a long lived dream of quite a few became an option again. Getting Kodi running back on a XBOX like where it all started more than 15 years ago. Since 27 December 2017 we released Kodi once again for the XBOX (One) and is available from the Store. A more detailed story can be read here: [Kodi for XBOX One](https://kodi.tv/article/kodi-xbox-one)

  

 **Android**

 ![](https://kodi.tv/sites/default/files/Google-assistant-logo.png)Regarding Android we just continued to do what we started some years ago and that was stripping all custom written code and simply following the official Android standards. When XBMC back then became available for Android a lot of specific code was written to get it running on those low powered devices and we had more capabilities than any other application back then. Over time stock Android improved a lot and basically all what we had custom made was becoming readily available to be used. At that point we started dropping old stuff and just applied the standards which reduced support burden for the developers. Now all that was done we could start looking at new features and from that we gained the [Leanback search integration](https://kodi.tv/article/kodi-v18-android-leanback-suggestions-search-and-voice-typing) on Android TV that shows Kodi content on Android TV itself. We now also include Google Assistant out of the box so theoretically you don’t have to pick up the remote anymore. To be honest it’s still uncomfortable and weird talking to your TV giving it commands. For Android TV Oreo there’s a whole new interface which includes the option to fill so called Channels that shows specific content from your app. We can proudly say that Kodi is actually one of the first applications that actually has this integrated. With the great hidden Kodi feature called Smartplaylists you can now populate the Android TV screen with content you want. For the touch enabled devices we can also say this has improved quite a lot as well make it feel more natural.

   
**Linux**

 Linux gained some great things as well which might not mean a lot for regular users though. For our Google Summer of Code we had a project integrating [Wayland display server protocol](https://kodi.tv/article/gsoc-2017-update-wayland-support) (again) to our code base which is meant to be the successor of X11 Window System. Since Linux is also quite divided on display drivers we had quite a lot of code implementations getting Kodi running on the variety of devices out there. To reduce the maintenance burden of this code a general path was chosen and for GBM (Generic Buffer Manager) and V4L2 (Video for Linux). With this only a small part of the initial code is needed to get devices running and from this newer devices would just run out-of-the-box once the Linux kernel supports these.

 **Retroplayer and input manager**

 Retroplayer together with input manager makes controlling Kodi using various remotes or controllers much better and a plug and play experience. Not having to thinker finding the correct configurations is something that we all would like and hopefully this achieves this.

 **Video Player**

 Now comes on of the biggest changes over past year. The video playback which is of course where Kodi shines. Once designed for the old XBOX and old video standards there wasn’t really taken lot in account with future standards and the massive increasement of video resolution and new codecs. With future in mind work started to redesign this section and to split it from into its own component to not be hindered with whatever happens in the user interface or other parts. Making the sure video gets the highest CPU/GPU priority over anything else happening makes sure you don’t get stuttering video or audio when navigating. This sounds so obvious to do however this wasn’t done or even possible in the past. Parallel to that, parts are reworked to be a lot more efficient and need way less CPU while gaining quality. Higher resolutions like 4K and 8K are also kept in mind next to HDR and new video codecs once they become available.

 **DRM (Digital Rights Management)**

 With the work above being done in the video player a possibility came up to also allow something that opens Kodi up for using it in combination with DRM protected content. These days it’s quite common for content owners and providers to protect their content with encryption. With v18 we added the ability to also play this content as it was actually intended by the DRM system. Depending on the used hardware and included license you can now playback this content which usually also comes with a subscription service. Instead of the sometimes clunky apps a possibility would be to just use the trusted Kodi environment to watch what they have to offer. There are already several add-ons available from our repository that already use this capability and we certainly hope more will follow and that content providers will make their service available as official add-on.

  

 I’m sure there’s a lot more to mention however the list would become quite huge and maybe not that clear for the regular user. A more extensive overview can be found at [Kodi v18 (Leia) changelog](https://kodi.wiki/view/Kodi_v18_(Leia)_changelog) which is updated when changes are made. 

 The story continues
-------------------

 Although we don’t rely have a clear future plan or clear cut goals we would welcome any developer who wants to spend time on getting Kodi better in every way. Either improving the core code to newer standards, fixing bugs or implementing a new feature we haven’t thought of. Compared to years ago the code has become better to understand and follow for newcomers to get started. Once we get something written down of certain to reach goals we will certainly share them.

 **Release time**

 You might also wonder when we will actually release this as a final version? Currently we don't really have a set time however it should at least be somewhere this year so. There's still enough room left for improvements however we could change our minds at any point in time and just call it ready enough to start the release cycle. In short we can't say or promise anything.

 That’s about it for now and we’ll go back at improving this upcoming v18 release. Should you wish to give it a try a new version is readily available each day. We can certainly recommend trying it out however take in mind that it’s not fully production and living room ready yet (take a backup). So far a guestimate of several hundreds of thousands users already use it so it can’t be that bad can it. You can get it from the download page clicking on the platform of choice and hitting the “Development builds” tab. For [Android](https://kodi.tv/addon/scripts/kodi-android-installer) and [Windows](https://kodi.tv/addon/scripts/kodi-windows-installer) we have an easy to use download add-on which you can find in our repository.

 *Go to the [Official download page](https://kodi.tv/download)*  
 

 ***May the force be with you…..***

 