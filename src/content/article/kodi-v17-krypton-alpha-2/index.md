---
title: 'Kodi v17 "Krypton" Alpha 2'
date: 2016-07-01T04:00:00Z
author: Martijn Kaijser
---
Yes it’s finally here……

 The name Krypton
----------------

 Since the dawn of time, or at least since 2008 each released version has received a code name next to the version number. Giving each development iteration a code name in a certain category is kind of a tradition that is not only applicable for software but also for hardware. Google does so for Android, Intel and NVIDIA also names their chips. Who are we to break this tradition and as such we follow in their steps with a theme that started out with mythical places or names. For our v17 release we actually let the public chose the name and with an overwhelming majority they chose the name “Krypton”.

 Looking back so far at what our small team of developers has done to the code, the name Krypton certainly gives a certain emphasis to it that fits. As you may have noticed it took quite some time before we came out with our first Kodi v17 alpha 2 (sorry that we skipped alpha 1) and we have some very good reasons for that. Several years ago we set a path that we wanted to improve our code base instead of just slapping on new features and this release will certainly be no exception to that goal. Certain parts of our code underwent a complete overhaul or in some cases even went through a blender to be almost rebuild from the ground up.

 The improvements so far
-----------------------

 The expression *don’t judge the book by it’s cover* is certainly something that holds to this release. Sure we have an awesome new default skin however the vast improvements are deep in the bowels of Kodi core code. Since Kodi v16 there were 1179 pull-request (code change requests) which hold 3735 commits (code chunk changes) spread over 6679 files done by 39 different developers. As you imagine we can’t possible list all changes, improvements and whatever more we have done during the past months. Instead we’ll just list the most important or at least understandable changes for non developers. Should you which to see the full and extensive code change you can see them [here](https://github.com/xbmc/xbmc/issues?q=milestone%3A%22Krypton+17.0-alpha1%22) and [here](https://github.com/xbmc/xbmc/issues?q=milestone%3A%22Krypton+17.0-alpha2%22).

 Estuary and Estouchy
--------------------

 Past March we announced that we had replaced the aging Confluence skin which did it’s job since 2009 as default skin. V17 will mark the new arrival of Estuary and Estouchy (touch enabled) skin as the new default skins. Many months have been put in getting these skins build from the ground up and utilise all of the new features Kodi has to offer. During this period we also rethought on what was actually needed for skins and with this we also added features we only came up with by rebuilding this skin as we wondered why it never was able to do it in the first place. The home screen has been revamped and now utilises a smartplaylists implementation to automatically show you what probably interests you the most. We suggest you just give it a try and see for yourself. If you still prefer Confluence skin then you don’t need to worry as it’s still available from the official Kodi repository.

    [![Estuary: Movies](/sites/default/files/uploads/Estuary-001-300x168.jpg)](/sites/default/files/uploads/Estuary-001.jpg) [![Estuary: TV Shows](/sites/default/files/uploads/Estuary-010-300x168.jpg)](/sites/default/files/uploads/Estuary-010.jpg)   [![Estuary: Movies](/sites/default/files/uploads/Estuary-008-300x168.jpg)](/sites/default/files/uploads/Estuary-008.jpg) [![Estuary: Albums](/sites/default/files/uploads/Estuary-013-300x168.jpg)](/sites/default/files/uploads/Estuary-013.jpg)   [![Estuary: Albums](/sites/default/files/uploads/Estuary-003-300x168.jpg)](/sites/default/files/uploads/Estuary-003.jpg) [![Estuary: Video sources](/sites/default/files/uploads/Estuary-006-300x168.jpg)](/sites/default/files/uploads/Estuary-006.jpg)    For a more extensive initial review you can read: [A brand new look for future Kodi versions](/article/brand-new-look-future-kodi-versions)

 For support you can visit the [Estuary](https://forum.kodi.tv/forumdisplay.php?fid=260) or [Estouchy](https://forum.kodi.tv/forumdisplay.php?fid=261) forum section.

 As many of you already know is that each version we also do a lot of changes to how a skin works which sadly also means not all skin will keep working in the new versions. Some of you then say we shouldn’t do this however I can tell you it’s all backed up by the people who create these skins as often they request it their selves. These changes make future skin version easier to code and more feature rich. We are happy to say that already several skins are Krypton ready: *Aeon Nox 5, Amber, Confluence, Mimic, Rapier, Titan, Transparency* will auto update once you install and switch to v17. We’re sure more skins will become available once we near beta, release candidate and final.

 Video Player
------------

 Since the beginning of XBMC back in the days while it was running on the XBOX there was something like DVDPlayer. As the name probably implies it was used to playback DVD discs/files. During the years this DVDPlayer was improved and patched up to stay within modern day standards of video playback expectancy. However it became clear that for the future a major overhaul and rewrite was needed to keep up and be future proof. As such the developers who did the [AudioEngine](/article/xbmc-120-frodo) in v12 picked up this job and have now transformed it into VideoPlayer. Together with some platform developers they ripped out the old DVDPlayer code, chopped it in pieces, put it in the blender, picked the needed pieces and put it back in without breaking the rest of Kodi (hopefully). This certainly wasn’t an easy job as DVDPlayer was like the bottom block of Jenga tower that needed to be replaced while still being entangled throughout the whole tower. It had it’s tentacles in parts of the code where it shouldn’t have been in the first place. Probably over a year ago work started on getting this untangled and made ready to be replaced by the new implementation.

 Well now you might wonder what does this all mean? Well a whole lot and it will probably not be as clear when using Kodi as a normal user. From a developers side it means a lot as the code is now more contained in it’s own section which makes maintenance a whole lot easier. As for the users here are some things they will notice already or in the future.

 ### First wave of changes include:

 • DVDplayer was very interwoven with other components, that only allowed a single instance of it. One important goal of VideoPlayer is to allow multiple instances, i.e. using VideoPlayer infrastructure for transcoding. Instead of rendering to audio device and display, it would render to an encoder which could be a file or outputted as stream to another Kodi instance. Don’t get your hopes up yet as this just makes it possible but not yet available.  
 • Rework of videorendering, including many fixes and minor improvements for all platforms. OpenGL got new features like dithering (reduces banding when transforming from limited to full range colour space) and first round of 3dlut (look up tables stored in OpenGL units for fast access used for colour profile calibration) which has been added for next months.  
 • Almost complete rewrite of audio/video syncing and make it more robust and accurate  
 • Hardware acceleration for DVD playback

 • VideoPlayer can switch resolution without any noticeable effect. (provided decoder support it)  
 • Multi source demuxers of i.e. external audio files  
 • Improve playback of live streams: PVR and streams that can be identified as live. Live streams won’t fill internal buffers after playback was started. Sooner or laters buffers will overflow or stream stalls if no special treatment is applied.

 ### Video stream selection

 You might already know of the possibility where you can select the audio track of a movie like different languages or quality. With video stream selection you are now able to select a different video stream should that be available. Although not widely used concert DVDs are certainly a good example where you are able to select a different camera angle for watching the concert. Although this sounds like a niche feature it’s certainly important for the next feature we will bring up.

 ### Input stream add-ons

 The work done with VideoPlayer has already gained one of the most exciting new features we can think of which is Input Stream add-ons. This enables possibility of native written add-ons can now handle part of the video playback selection and just hand over the video stream to Kodi. A perfect example of this is [DASH (Dynamic Adaptive STreaming over HTTP)](https://en.wikipedia.org/wiki/Dynamic_Adaptive_Streaming_over_HTTP)  which is something YouTube uses to give you the different video qualities depending on network speed. With Input Stream add-ons we can now have this capability as separate add-on instead of having this in the Kodi core. Here comes the video stream selection into play as you might want to select a different quality or language if made available. We’re happy to say that by default we ship the MPD add-on that handles the DASH audio/video stream selection standard and hands over the results to Kodi. The available YouTube add-on in Kodi repository doesn’t handle this feature as of yet however I’m sure it will be updated somewhere in the future.

 More features will come from this complete VideoPlayer rework and we will be sure to inform you once they have been added. For now we will try to make current features work to their fullest potential.

 PVR made easier and better
--------------------------

 With v17 the way we handle PVR add-ons has been given a makeover as well. With these changes we hope that the threshold of getting PVR running inside Kodi has been greatly reduced. Once you configured and enabled the PVR add-on you are ready. No more additional options to enable to get going. Of course you will still need to set up a PVR backend/server first however that is outside of our scope of work. Additionally a lof work has been done to improve stability and usability to this section. Switching channels, EPG (electronic program guide) as well as setting and changing recording timers have all been greatly improved. From the user interface little has changed besides the new default skin and some settings that are moved or are now a bit more clear what they do.

    [![Estuary: Live TV](/sites/default/files/uploads/Estuary-016-300x168.jpg)](/sites/default/files/uploads/Estuary-016.jpg)    ### Android HD Audio and more

 ### HD awesomeness

 As you may have read several times is that the Android part of Kodi is currently low on development. It’s the platform with the largest user base but somehow there don’t seem to be a lot of developers around that can work on Kodi for that platform. Since Kodi isn’t the standard JAVA app like the million other out there working on it is certainly a challenge. Regardless for this release we still have some big improvements lined up. The most important one is probably what most of you have been waiting for and that is HD audio passthrough capabilities. Although we had a proof of concept for v16 it wasn’t in a state where the team was comfortable adding it that late in release cycle. However for v17 we can now tell you that passthrough for DTS, DTS-HD, DTS-X, Dolby TrueHD and Dolby ATMOS should all be working if your device supports this. The NVIDIA SHIELD TV is certainly one of the best supported devices that use the standard Android audio methods.

 ### Android 5.0 Lollipop (or later) as minimum

 Over the years the Android platform started to mature and catch up to the other platforms regarding capabilities. This also means that we can drop all the custom code we had to add in the beginning to get Kodi running at all as that’s now becoming obsolete. One of those from back in the days was libStageFright which we dropped in a previous release and was replaced by the standard MediaCodec from Android. With v17 we have started to clean up all the old implementations which sadly also means we had to set the minimum Android version to at least 5.0 Lollipop. It’s uncertain at this time if we even hove to go higher and set minimum to Android 6.0 Marshmallow as this contains certain features we need to improve Kodi. For now you are safe if you at least have Android 5.0 Don’t worry you can keep using Kodi v16 on all previous Android versions however you just can upgrade to a newer Kodi version.

 ### Welcome to Android MediaCodec standards and goodbye AMLogic specific code

 One other custom implementation is AMLogic code which is were it all started with Kodi on Android and we used this to acces certain hardware parts which Android couldn’t yet. As already mentioned Android improved a lot over the years and it now also means the custom AMLogic code can now be turned of and removed. Sadly AMLogic doesn’t follow the standard Android and releases firmware which is just a tiny bit different. This could mean that some devices might loose some capabilities as the firmware does things a bit different than we expect. This is all on the manufacturers side of these chipsets and they have to fix it. Sadly we can’t keep supporting this deviation from the standard API as we are low enough on developers already. We sure hope AMLogic will see this and start to follow the Android standard that has been set since Android 5.0 With dropping all these custom code we hope we can keep moving forward with Kodi on Android and make it much easier to maintain for the future. For Android 7 Nougat we even had a lot of help from a great guy at Google who implemented some features for us and we are looking forward on using that. This absolutely does **not** mean that Kodi will not work on AMLogic chipset devices anymore.

 *Note: You can auto receive latest alpha test builds by subscribing [here](https://play.google.com/apps/testing/org.xbmc.kodi). Remember this link as you need to unsubscribe as well. Warning: this will auto update all Kodi instances registered to that account.*

 Add-on manager changes and features
-----------------------------------

 Since v10 the add-on repository has been an integral part of Kodi and has made it a breeze for expanding the capabilities and receiving updates for these add-ons and skins. Together with the skin changes we did in Estuary we certainly hope to make the experience a bit better.

    [![v17-addon-navigation](/sites/default/files/uploads/v17-addon-navigation-300x168.png)](/sites/default/files/uploads/v17-addon-navigation.png) [![v17-addon-check-updates](/sites/default/files/uploads/v17-addon-check-updates-300x168.png)](/sites/default/files/uploads/v17-addon-check-updates.png)   [![v17-addon-repo](/sites/default/files/uploads/v17-addon-repo-300x168.png)](/sites/default/files/uploads/v17-addon-repo.png) [![v17-addon-repo-skin](/sites/default/files/uploads/v17-addon-repo-skin-300x168.png)](/sites/default/files/uploads/v17-addon-repo-skin.png)    ###  Unknown sources….

 First of all we added an option to warn new users that installing add-ons outside of Kodi repository could potentially bring harmful add-ons to their system. A more extensive write up ([read here](/article/warning-be-aware-what-additional-add-ons-you-install)) explains these hazards they might get their selves into. Of course this doesn’t mean all are bad however we do feel that users should at least be warned. From now on if a user wants to install any add-on from .zip they need to acknowledge they understood the risk and enable the option to allow installation. This is a **one time** warning so you do not need to do this each time.

    [![v17-addons-settings](/sites/default/files/uploads/v17-addons-settings-300x168.png)](/sites/default/files/uploads/v17-addons-settings.png) [![v17-addon-unknown-source-warning](/sites/default/files/uploads/v17-addon-unknown-source-warning-300x168.png)](/sites/default/files/uploads/v17-addon-unknown-source-warning.png)     

 ### Recently installed or update

 From now on you are able to see which add-ons recently updated. It might come in handy should some problems arise as you not always noticed the popup telling you an update was installed. At least now you are able to track down which one(s).

    [![v17-addons-recently-updated](/sites/default/files/uploads/v17-addons-recently-updated-300x168.png)](/sites/default/files/uploads/v17-addons-recently-updated.png)    Setting section has been more clear
-----------------------------------

 One of the things probably most of us hate the most is going through settings and see what they do. Often are not clear what they do or just not obvious. We felt the same and we have now made a big shuffle of certain settings to group them in a better way and improve the text and help description. I’m sure it’s not perfect and things still need changing however it’s already a big step forward. Additionally we’ve put a central button in settings screen for adding new media sources that you can add to your library. To make a long story short here are some screenshots to give you an idea on how it looks. Other than that I guess you’ll just have to try for yourself.

    [![v17-settings-1](/sites/default/files/uploads/v17-settings-1-300x168.png)](/sites/default/files/uploads/v17-settings-1.png) [![v17-settings-2](/sites/default/files/uploads/v17-settings-2-300x168.png)](/sites/default/files/uploads/v17-settings-2.png)   [![v17-settings-3](/sites/default/files/uploads/v17-settings-3-300x168.png)](/sites/default/files/uploads/v17-settings-3.png) [![v17-settings-4](/sites/default/files/uploads/v17-settings-4-300x168.png)](/sites/default/files/uploads/v17-settings-4.png)    Music library
-------------

 Over the years our music library handling wasn’t always the best and luckily a while ago some developers stepped up and started improving the lacking functionality and added new features. Some improvements are better tag reading and scraping. Handling of albums and artist has also been improved with the addition of adding artist role handling for music (composer, conductor, djmixer). Certain files or websites also support mood and this has now also been added so you can now select music based on certain type of mood instead of genre.

 Mention worthy changes
----------------------

 • 10bit/HEVC hardware enabled playback on INtel or NVIDIA GPU that have the capabilities (see hardware specs)  
 • Refactor of scrapers  
 • Fix possible high CPU usage with GUI rendering  
 • Playback improvement on all platforms  
 • Support for multiple external ratings and userrating from GUI and smartplaylists  
 • Audio and subtitle filter added to smartplaylists  
 • Use ffmpeg for loading certain types of images and drop external libraries  
 • Added PVR to eventlog feature  
 • Various database optimisations  
 • Unify behaviour of context menu  
 • Improvements on binary add-on handling  
 • Rework of rendercapture which is used by boblight or ambilight implementations  
 • Removes SAP streams support  
 • Added MVC, framepack and 3D switching support on Raspberri-Pi  
 • Change certain settings from spinners to a list  
 • Further improvements on DirectX implementation  
 • Further unify certain skin windows to make it easier to make new skins without duplicating same code  
 • Music mood scanning  
 • Game controller add-ons  
 • Improved tag reading from music files  
 • Improvement on Kodi rendering system which should reduce CPU load and pave the way to headless some day  
 • Add InProgress node for TV Shows  
 • Fix CPU count on Android  
 • Various changes to Kodi python API. Please check documentation  
 • Save skin settings on early exit which should fix problems with loosing settings after restart  
 • Improved binary add-on API  
 • Improvements to internal webserver  
 • Use number separators from the selected GUI language (example 1.000,4 / 1,000.4) and also apply this to ratings  
 • Update to FFmpeg 3.0 which brings improved playback, stability and security fixes  
 • Security and stability improvement by updating to: Python 2.7.12 / mDNSResponder to 625.41.2 / libxslt 1.1.29 / libmicrohttpd to 0.9.50 / gettext 0.19.8 / libzip 1.1.2 / libjpeg-turbo 1.4.2 / libpng 1.6.21 / lzo 2.09 / sqlite 3120200 / openssl 1.0.2h / taglib 1.11  
 • Enable IPv6 for CURL  
 • Added CMake building on all platforms. Still work in progress  
 • Switch to Visual Studio 2015 building  
 • Remove boost, CXimage, jpgIO, libsquish dependencies as they are obsolete  
 • Auto create code documentation with Doxygen including a to-do list (link: <https://codedocs.xyz/xbmc/xbmc/>)  
 • Moved old PyDocs of the Kodi API to Doxygen  
 • Added skinning API to Doxygen  
 • Removed dead and obsolete core code  
 • Fixed memory leaks  
 • Fixed possible code deadlocks  
 • Fixed possible security flaws  
 • Fixed possible crashes  
 • Fixed code flaws found by various analyses tools

  Conclusion
----------

 Should you want to download and install this build please visit our download page.

 
 * * [Official Kodi 17.0 development downloads](/download) (near the bottom of the page)
 * * [LibreELEC](https://libreelec.tv/) Raspberry Pi / x86 versions can be found [here](https://libreelec.tv/downloads/preview/)
 
 Please report any problems on our forum <https://forum.kodi.tv/> and not on the release announcement.

 ### Donations or getting involved

 Getting involved is quite easy. Simply take the plunge and start using these 16.0 Jarvis builds. If you use these builds, we encourage you to report problems with these builds on our forum first and after that, if asked, submit bugs on Trac (following this guide: [How to submit a bug report](https://kodi.wiki/view/HOW-TO:Submit_a_bug_report)). Do note that we need detailed information so we can investigate the issue. We also appreciate providing support in our [Forums](https://forum.kodi.tv/ "Kodi Forums") where you can. You can of course also follow or help promote Kodi on all available social networks. Read more on the [get involved](/get-involved) page.  
 We are always happy to receive a [donation](/contribute/donate "Donate") by which you show your support and appreciation. All donations go towards the XBMC foundation and are typically used for travel to attend conferences, any necessary paperwork and legal fees, purchase necessary hardware and licenses for developers and hopefully the yearly XBMC Foundation Developers Conference.

 Currently you also sponsor us and donate to charity by buying the [The Official Kodi Edition Raspberry Pi Case](/article/official-kodi-edition-raspberry-pi-case).

 The Kodi Edition Raspberry Pi case is a limited edition product. Additional units might be available in the future if there is strong user demand, but for now, get them while you can!

 [![GetCaseButtonUKEU](/sites/default/files/uploads/GetCaseButtonUKEU.png)](https://thepihut.com/products/kodi-edition-raspberry-pi-case)  
 [Buy UK/EU](https://thepihut.com/products/kodi-edition-raspberry-pi-case)

  [![Buy US](/sites/default/files/uploads/GetCaseButtonUS.png)](https://flirc.tv/more/raspberry-pi-case-ke)  
 [Buy US](https://flirc.tv/more/raspberry-pi-case-ke)

  