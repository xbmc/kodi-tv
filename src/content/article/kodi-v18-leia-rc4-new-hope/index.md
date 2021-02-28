---
title: 'Kodi v18 Leia RC4 - A new hope'
date: 2018-12-28T23:26:28Z
author: Martijn Kaijser
featured_image:
  src: /images/blog/Kodi_Xmas.jpg
  title: ''
  alt: ''
---
 It's the days between Christmas and New Years eve, and some of our developers found the time do squash down some know issues. We hereby present you v18 RC4 that include several fixes we did past two weeks. There's not really anything more to say than wish you all a great new year. As you might have guessed by now v18 will not be released in 2018. There are several reason for this, however we feel we shouldn't rush a release just for the sake of releasing. There's good hope it will be released very early 2019 once we ironed out the remaining issues we feel should be fixed.

 To this point the current v18 version has been proven to be quite solid to use as a daily driver for those who were brave enough to try it out. Of course you should still keep in mind it's not a final release yet and that on any upgrade a small glitch could happen as we are still doing rework. Once you decide to give it a try it is highly recommended that you create a backup first.

 Changes in RC4 (and RC3)
------------------------

 Most notable changes to mention in this Release Candidate:

 
 * Update documentation regarding Python and Skin develoment: [Kodi Doxygen](https://codedocs.xyz/xbmc/xbmc/) 
 * Fix crash on certain music files that contain ID3v2 UFID frame
 * Do not list non-repo add-ons as "unavailable" in info dialog (the by default included ones)
 * Fix some interface info labels regarding music
 * Fix none responsive when minimising on Mac OSX
 * Fix path for looking up external subtitles
 * Replace vc140 redis with vc141 which fixes crashes on Windows (user should at least install this once)
 * Windows DXVA - fixed color values
 * Fix GUI Notifications rendering
 * Fix watched items in plugins (contains database upgrade)
 
 Of course there are several more changes which are listed on our github repository found here: [RC4 changes](https://github.com/xbmc/xbmc/milestone/119).

 
 * Fix crashes by pressing 'x' to stop DVD .iso image when "Player Process Info" is displayed
 * Screenshot: simplify logic and bail out if no folder is set
 * Android: remove mpeg4 HD restriction / use dts for unknown pts for mpeg4 (there might be some playback regressions that will be fixed along the way)
 * Change resolution (if required) on application starts (fixes XBXO resolution issues)
 * Android: Reset calibrations if GUI limit changes
 * Android: fix subtitle position problems
 * Fix resolution whitelist issues on Windows
 * Extend option to hide spoilers like text or images from the library view
 * Add support for new iOS devices
 
 Of course there are several more changes which are listed on our github repository found here: [RC3 changes](https://github.com/xbmc/xbmc/milestone/118).

 Currently included
------------------

 The past RC1 and RC2 release articles include the most notable changes we have done in v18. There are of course many smaller changes and improvements that we can't even remember. I guess you will just have to try and find out eventually. For a more extensive list you can visit our wiki page [v18 (Leia) changelog](https://kodi.wiki/view/Kodi_v18_(Leia)_changelog) which will be update along the way. From now on all v18 releases will not contain any big new features as we are focussed on bug fixing or improvements only.

 Make sure to also go through our **[news](https://kodi.tv/blog)** sections which contain all past announcements regarding the Leia release and some highlights of what it will contain.

 #### 

 #### The V18 Leia t-shirt

 Inspired by the galaxy far, far away theme, our resident artist Sam went above and beyond and designed perhaps the coolest Kodi announce video of all time.

  

  We loved his work so much that we're modelling the Kodi 18 shirt after it along with more art to come. Here it is, our [newest, coolest shirt: K-18L](https://teespring.com/stores/kodi-18-leia-store)  
(Available in several shirt **colours** and not just black or white)

 [![Kodistore](/images/blog/Kodi18Store.PNG)](https://teespring.com/stores/kodi-18-leia-store)

  #### **Release time**

 Since we now started the RC cycle a final release will be on the near horizon. When the final release will actually be is yet unknown as it all depends on the stability now more people will start using the v18 builds.

 That’s about it for now and we’ll go back at improving this upcoming v18 release. Should you wish to give it a try a new version is readily available each day as well as nightly version. We can certainly recommend trying it out however take in mind that it’s not fully production and living room ready yet (take a backup). So far a guestimate of several tens of thousands users already use it so it can’t be that bad can it. You can get it from the download page clicking on the platform of choice and hitting the “pre release” tab. For [Android](https://kodi.tv/addon/scripts/kodi-android-installer) and [Windows](https://kodi.tv/addon/scripts/kodi-windows-installer) we have an easy to use download add-on which you can find in our repository.

 *Go to the [Official download page](https://kodi.tv/download) and choose the platform of choice and you will find these builds under the pre release tab.*  
 

 ### Donations or getting involved

 Getting involved is quite easy. Simply take the plunge and start using v18.0 Leia. If you use this version, we encourage you to report problems with these builds on our forum first and after that, if asked and the bug is confirmed, submit the issue on Github (following this guide: [How to submit a bug report](https://kodi.wiki/view/HOW-TO:Submit_a_bug_report)). Do note that we need detailed information so we can investigate the issue. We also appreciate providing support in our [Forums](https://forum.kodi.tv/ "Kodi Forums") where you can. You can of course also follow or help promote Kodi on all available social networks. Read more on the [get involved](https://kodi.tv/get-involved) page.  
**If you do appreciate our work feel free to give a small [donation](https://kodi.tv/contribute/donate) so we can continue our effort. Just find the big "Donate" button at the top of the website.** All donations go towards the XBMC foundation and are typically used for travel to attend conferences, any necessary paperwork and legal fees, purchase necessary hardware and licenses for developers and hopefully the yearly XBMC Foundation Developers Conference.

  

 ***May the source be with you…..***

 ***![](https://kodi.tv/sites/default/files/K-18L-Comic-Preview.jpg)***

 