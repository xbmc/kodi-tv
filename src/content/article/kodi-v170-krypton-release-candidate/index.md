---
title: 'Kodi v17.0 "Krypton" Release Candidate'
date: 2016-12-28T03:00:00Z
author: Martijn Kaijser
featured_image:
  src: /images/blog/kodi-splash-17.0-RC.webp
  title: "kodi-splash-17.0-RC"
  alt: "kodi-splash-17.0-RC"
---

**UPDATE**: Due to some packaging problems for Android and initial response we had to do quick bump to RC2 to solve this. If you had downloaded and installed RC1 before 31 December (available from system information) please upgrade to the newer version.

We want to close the year 2016 with a blast and as such we are happy to announce this Release Candidate of Kodi v17.0 Krypton. This final Kodi v17.0 will be action packed with a lot of features, changes and bug fixes and we left no stone unturned. Nearly every section had at least some maintenance done to make Kodi better than it already was.

First and foremost we sure would like to thank every one involved with either development, testing or simply helping out others with answering their questions. Now that is done lets look at the biggest changes that were done.

# What’s new?

### Estuary and Estouchy: next generation

Past March we announced that we had replaced the aging Confluence skin which did it’s job since 2009 as default skin. V17 will mark the new arrival of Estuary and Estouchy (touch enabled) skin as the new default skins. Many months have been put in getting these skins build from the ground up by _phil65_ and utilise all of the new features Kodi has to offer. During this period we also rethought on what was actually needed for skins and with this we also added features we only came up with by rebuilding this skin as we wondered why it never was able to do it in the first place. The home screen has been revamped and now utilises a smartplaylists implementation to automatically show you what probably interests you the most. We suggest you just give it a try and see for yourself. If you still prefer Confluence skin then you don’t need to worry as it’s still available from the official Kodi repository. With some help from _ryanmah_ for the mockups, _ichabod-fletchman_ for helping out this final version of Estuary.

    [![Home screen](/images/blog/v17-rc_000-300x168.webp)](/images/blog/v17-rc_000.webp) [![Movie library](/images/blog/v17-rc_006-300x168.webp)](/images/blog/v17-rc_006.webp)    At same time the touch skin Estouchy also got matched by our senior skin developer ronie to match the Estuary look.

For some more screenshots you can visit the release announcement here: [Default skin: Next Gen](/article/kodi-v17-krypton-default-skin-next-gen). Regardless you’ll see when you install this new update.

### Setting section has been more clear

One of the things probably most of us hate the most is going through settings and see what they do. Often are not clear what they do or just not obvious. We felt the same and we have now made a big shuffle of certain settings to group them in a better way and improve the text and help description. I’m sure it’s not perfect and things still need changing however it’s already a big step forward. Additionally we’ve put a central button in settings screen for adding new media sources that you can add to your library. To make a long story short here are some screenshots to give you an idea on how it looks. Other than that I guess you’ll just have to try for yourself. Remember to look at the bottom of the screen as that often contains hints on what a settings actually does.

    [![Settings](/images/blog/v17-rc_029-300x168.webp)](/images/blog/v17-rc_029.webp) [![Sources](/images/blog/v17-rc_033-300x168.webp)](/images/blog/v17-rc_033.webp)    ###  PVR made easier and better

With v17 the way we handle PVR add-ons has been given a makeover as well. With these changes we hope that the threshold of getting PVR running inside Kodi has been greatly reduced. Once you configured and enabled the PVR add-on you are ready. No more additional options to enable to get going. Of course you will still need to set up a PVR backend/server first however that is outside of our scope of work. Additionally a lof work has been done to improve stability and usability to this section. Switching channels, EPG (electronic program guide) as well as setting and changing recording timers have all been greatly improved. From the user interface little has changed besides the new default skin and some settings that are moved or are now a bit more clear what they do.

    [![Channel list](/images/blog/v17-rc_013-300x168.webp)](/images/blog/v17-rc_013.webp) [![EPG](/images/blog/v17-rc_017-300x168.webp)](/images/blog/v17-rc_017.webp)

### Privacy policy

Your privacy is an important factor that the XBMC Foundation and Team Kodi considers in the development of all of our software and services. We are committed to being transparent and open. This Privacy Policy explains generally how we receive information about you, and what we do with that information once we have it. As such we have added this [privacy policy](/kodi-privacy-policy) to our website and also made it available from within Kodi itself to read.

[![Privacy policy](/images/blog/v17-rc_030-300x168.webp)](/images/blog/v17-rc_030.webp)

WARNING: This of course does not mean your privacy is totally protected. In the end you are still responsible yourself for whatever you install or share. For the official Kodi repository we have a set of strict rules in place for any add-on that is added or updated and strive towards protecting the users from any harm that might come from using them. However once you decide to install any other repository or add-ons from outside our official repository you must make sure you are informed of any consequences. Do not blindly install any add-on but make sure to read up on what it does and what it might share with others. If you are not sure then take the safe route and don’t install it.

You might want to read this: [Be aware what additional add-ons you install](/article/warning-be-aware-what-additional-add-ons-you-install)

### Add-on manager changes and features

Since v10 the add-on repository has been an integral part of Kodi and has made it a breeze for expanding the capabilities and receiving updates for these add-ons and skins. Together with the skin changes we did in Estuary we certainly hope to make the experience a bit better.

**Unknown sources….**

First of all we added an option to warn new users that installing add-ons outside of Kodi repository could potentially bring harmful add-ons to their system. A more extensive write up ([read here](/article/warning-be-aware-what-additional-add-ons-you-install)) explains these hazards they might get their selves into. Of course this doesn’t mean all are bad however we do feel that users should at least be warned. From now on if a user wants to install any add-on from .zip they need to acknowledge they understood the risk and enable the option to allow installation. This is a **one time** warning so you do not need to do this each time.

**Recently installed or update**

From now on you are able to see which add-ons recently updated. It might come in handy should some problems arise as you not always noticed the popup telling you an update was installed. At least now you are able to track down which one(s).

    [![Recently updated](/images/blog/v17-rc_032-300x168.webp)](/images/blog/v17-rc_032.webp) [![Unknown sources](/images/blog/v17-rc_031-300x168.webp)](/images/blog/v17-rc_031.webp)

### Music library

Over the years our music library handling wasn’t always the best and luckily a while ago some developers stepped up and started improving the lacking functionality and added new features. Some improvements are better tag reading and scraping. Handling of albums and artist has also been improved with the addition of adding artist role handling for music (composer, conductor, djmixer). Certain files or websites also support mood and this has now also been added so you can now select music based on certain type of mood instead of genre. With all these changes in regards to the music library and part and better tag scanning and usage a mandatory music files re-scan has to be done to extract all this information. After you upgrade and enter the music library a choice will be giving to re-scan now or later. As this re-scan can take up quite some time and resources you can answer NO and continue browsing your library. Once you exit library and re-enter you will be prompted again asking to re-scan. Once you answer YES Kodi will start scanning all your music files and extract the tag data they contain to a certain degree. As mentioned this process takes quite some time depending on the size. During this time Kodi might be somewhat slower than normal. Do note that this will not reset your library to a new state or that you will loose data. It will simply update what is available and will leave all play counts and the rest as they were.

    [![Music library](/images/blog/v17-rc_021-300x168.webp)](/images/blog/v17-rc_021.webp) [![Music library](/images/blog/v17-rc_022-300x168.webp)](/images/blog/v17-rc_022.webp)

### Video Player

Since the beginning of XBMC back in the days while it was running on the XBOX there was something like DVDPlayer. As the name probably implies it was used to playback DVD discs/files. During the years this DVDPlayer was improved and patched up to stay within modern day standards of video playback expectancy. However it became clear that for the future a major overhaul and rewrite was needed to keep up and be future proof. As such the developers who did the [AudioEngine](/article/xbmc-120-frodo) in v12 picked up this job and have now transformed it into VideoPlayer. Together with some platform developers they ripped out the old DVDPlayer code, chopped it in pieces, put it in the blender, picked the needed pieces and put it back in without breaking the rest of Kodi (hopefully). This certainly wasn’t an easy job as DVDPlayer was like the bottom block of Jenga tower that needed to be replaced while still being entangled throughout the whole tower. It had it’s tentacles in parts of the code where it shouldn’t have been in the first place. Probably over a year ago work started on getting this untangled and made ready to be replaced by the new implementation.

Well now you might wonder what does this all mean? Well a whole lot and it will probably not be as clear when using Kodi as a normal user. From a developers side it means a lot as the code is now more contained in it’s own section which makes maintenance a whole lot easier. As for the users here are some things they will notice already or in the future.

**Video stream selection**

You might already know of the possibility where you can select the audio track of a movie like different languages or quality. With video stream selection you are now able to select a different video stream should that be available. Although not widely used concert DVDs are certainly a good example where you are able to select a different camera angle for watching the concert. Although this sounds like a niche feature it’s certainly important for the next feature we will bring up.

**Input stream add-ons**

The work done with VideoPlayer has already gained one of the most exciting new features we can think of which is Input Stream add-ons. This enables possibility of native written add-ons can now handle part of the video playback selection and just hand over the video stream to Kodi. A perfect example of this is [DASH (Dynamic Adaptive STreaming over HTTP)](https://en.wikipedia.org/wiki/Dynamic_Adaptive_Streaming_over_HTTP) which is something YouTube uses to give you the different video qualities depending on network speed. With Input Stream add-ons we can now have this capability as separate add-on instead of having this in the Kodi core. Here comes the video stream selection into play as you might want to select a different quality or language if made available. We’re happy to say that by default we ship the MPD add-on that handles the DASH audio/video stream selection standard and hands over the results to Kodi. The available YouTube add-on in Kodi repository doesn’t handle this feature as of yet however I’m sure it will be updated somewhere in the future.

More features will come from this complete VideoPlayer rework and we will be sure to inform you once they have been added. For now we will try to make current features work to their fullest potential.

### Android

**Android 5.0 Lollipop (or later) as minimum**

Over the years the Android platform started to mature and catch up to the other platforms regarding capabilities. This also means that we can drop all the custom code we had to add in the beginning to get Kodi running at all as that’s now becoming obsolete. One of those from back in the days was libStageFright which we dropped in a previous release and was replaced by the standard MediaCodec from Android. With v17 we have started to clean up all the old implementations which sadly also means we had to set the minimum Android version to at least 5.0 Lollipop. Don’t worry you can keep using Kodi v16 on all previous Android versions however you just can upgrade to a newer Kodi version. Certain devices will now also support switching the Kodi interface resolution itself so you could potentially set Kodi in 4K skin resolution.

**Improved audio support**

As you may have read several times is that the Android part of Kodi is currently low on development. It’s the platform with the largest user base but somehow there don’t seem to be a lot of developers around that can work on Kodi for that platform. Since Kodi isn’t the standard JAVA app like the million other out there working on it is certainly a challenge. One of the improvements we did manage to get added is what most of you have been waiting for and that is HD audio passthrough capabilities. Although we had a proof of concept for v16 it wasn’t in a state where the team was comfortable adding it that late in release cycle. However for v17 we can now tell you that passthrough for DTS, DTS-HD, DTS-X, Dolby TrueHD and Dolby ATMOS should all be working if your device and attached TV/AVR supports this. During the past months however we did find some limitations in the way Google had implemented audio passthrough. After contacting Google and explaining the problems we worked together towards a good alternative which was adding IEC61937 as passthrough option. This standard is something we already used on other platforms like Windows, Linux, OSX and iOS and has proven to be exactly what was needed for good audio support. As such we are happy to say that starting with Android Nougat we will fully use this standard. Devices running Lollipop or Marshmallow will use the older standard method.

**Welcome to Android MediaCodec standards only**

One of the last custom implementation we had was Amlogic related code which was the device were it all started with Kodi on Android. We had to resolve to this custom implementation back then to acces certain hardware parts which Android officially couldn’t yet. Due to this legacy and how we had things implemented we couldn’t switch this off just yet in past releases. Over the past months with the help of MINIX we have been working closely with the Amlogic to get everything in order and we can say Android Marshmallow and onward will have the best experience possible for devices containing these chipsets. Amlogic even went as far as adding the IEC61937 audio passthrough back into Android Marshmallow which normally is only available since Android Nougat. We would certainly like to thank Amlogic and MINIX for going to this extend of cooperation making the experience and support of Kodi on Android a bit better. Now Amlogic has done their part on proving a good bases it’s up to manufacturers and vendors to supply updates for their devices over coming months. We are certain that manufacturers with good support will send out these updates as soon as they are ready. What does this mean for you regular users? Mostly we kept the proper support for devices running Android 5 Lollipop and you shouldn’t notice any real difference. Should your device receive the newer Android 6 Marshmallow you will gain these improvements mentioned above. For devices using other chipsets we don’t really know but we are hoping they will follow.

### Windows Store

[![KODI_BLOG_WIN_300x300_C](/images/blog/KODI_BLOG_WIN_300x300_C-160x160.webp)](https://www.microsoft.com/p/kodi/9nblggh4t892?cid=koditvlinkRC)In case you missed the big news some time ago, Kodi got added to the Windows Store as a Desktop Bridge UWP app. It is still the same Kodi version you are used to use, without any limitations. Although it is still possible (and always will be) to download and install Kodi from our website, it is now also possible for Windows 10 users to download and install Kodi from the Windows Store. This brings a few benefits, such as automatic updating. The Windows Store application uses the same _userdata_ as the version from our website so you can switch between the two versions without issues.

NOTE: This also means that if you are currently running Kodi v16 and want to try out the Windows Store version, your Kodi databases and add-ons will be upgraded to the v17 versions. You might want to make a backup of the userdata before! You can read the full announcement here: [Kodi goes Windows Store](/article/kodi-goes-windows-store)

### Game controller add-on

In the past it has always been a pain to configure game controllers within Kodi. There were some XML files people could download and copy to a certain location. This has now been solved by making them add-ons (like almost everything else) which you can install with a click of a button. This rework of the controllers was needed for retro gaming feature which may land somewhere in the future. No sadly that doesn’t mean retro gaming will be available in v17 but we keep our hopes up for the future.

### 3dlut and simple ICC linking support for color correction

Developer _laurimyllari_ added a ColorManager class that supports loading madVR 3DLUT files, and loading ICC display profiles, creating source profiles and linking them. Users can use this to correct their display response with a 3DLUT file, or emulate other displays (with whitepoint, primaries and gamma selectable at runtime) with an ICC profile of their own display. The ICC profile linking is still work in progress, but is functional and shows what can be done with it.

### A new default web interface called Chorus2

Kodi has many hidden secrets and even team members don’t know the full potential it packs. One of those features you might not know is that Kodi also has a web-interface from which you can browse your library and start playback directly on your Kodi device. It’s something we’ve never really promoted that it was available and I’m not really sure why. However the past few years not much was changed to to it and it kinda fell into decay with only minor fixes done to keep it kind of functional. For Kodi v17 this has been radically changed as we have packaged up a brand new default web-interface called Chorus2.

[![chorus2-artist](/images/blog/chorus2-artist-800x450.webp)](/images/blog/chorus2-artist.webp)

For some screenshot you can visit the release announcement here: [A new webinterface called Chorus2](/article/new-webinterface-called-chorus2). Regardless you’ll see when you install this new update.

## Krypton nightly builds

As you may have noticed we only release a new release candidate once in a while that includes a list of fixes that were done since previous release. Additionally we also create these so called _nightly builds_ specifically for Krypton that include the latest fixes that our developers have included and will end up in the next release candidate, final release or possible bug fix releases. By providing these builds we hope that users who install these will help us confirm the problem was fixed or identify if we accidentally created a regression from previous builds made. These nightlies are safe to install on top of any Kodi v17 you already have installed on your device and can be found on the download page. Be sure to get these builds from the **_Krypton_** folder and not from any other.

## Conclusion

As previously noted, this is only a small summary of all the improvements in Kodi 17. For more, see the [Alpha 2](/article/kodi-v17-krypton-alpha-2 "Kodi v17 “Krypton” Alpha 2") and [Alpha 3](/article/kodi-v17-krypton-alpha-3 "Kodi v17 “Krypton” Alpha 3") posts. Should you want to download and install this build please visit our download page. You can install these build just on top of your current Kodi installation without doing a reinstall or cleanup as we do a full migration if needed.

• [Official Kodi 17.0 development downloads](/download)

Of course we have also updated Windows Store with this latest version.  
[![Get it on Windows 10](https://assets.windowsphone.com/f2f77ec7-9ba9-4850-9ebe-77e366d08adc/English_Get_it_Win_10_InvariantCulture_Default.webp)](https://www.microsoft.com/p/kodi/9nblggh4t892?cid=koditvlinkbadgeRC)

### Bug reports

Please report any problems on our forum [http://forum.kodi.tv](https://forum.kodi.tv/) and not on the release announcement as it is not a reporting or help section. Don’t forget we also have some official tablet/phone remote controls for both Android and iOS. You can find the links to them on the download page.

### Donations or getting involved

Getting involved is quite easy. Simply take the plunge and start using these 17.0 Krypton builds. If you use these builds, we encourage you to report problems with these builds on our forum first and after that, if asked, submit bugs on Trac (following this guide: [How to submit a bug report](https://kodi.wiki/view/HOW-TO:Submit_a_bug_report)). Do note that we need detailed information so we can investigate the issue. We also appreciate providing support in our [Forums](https://forum.kodi.tv/ "Kodi Forums") where you can. You can of course also follow or help promote Kodi on all available social networks. Read more on the [get involved](/get-involved) page. We are always happy to receive a [donation](/contribute/donate "Donate") by which you show your support and appreciation, and t-shirts and Raspberry Pi cases may still be found on the sidebar for purchase. All donations and other income goes towards the XBMC foundation and are typically used for travel to attend conferences, any necessary paperwork and legal fees, purchasing necessary hardware and licenses for developers and hopefully the yearly XBMC Foundation Developers Conference.
