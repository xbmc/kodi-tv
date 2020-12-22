---
title: 'Kodi v17 "Krypton" Beta 6'
date: 2016-11-29T03:00:00Z
author: Martijn Kaijser
featured_image: /images/blog/Kodi-Wallpaper-32A-1080p_samfisher.jpg
---
Kodi 17 features a huge amount of work in areas like video playback, live TV and PVR/DVR, the music library, skinning and more. It features a new default skin, as well as a new default touchscreen skin, named Estuary and Estouchy, respectively. With all this work done over the months some bugs might slip through and were hoping to quickly squash the coming beta releases. The changes for this sixth beta are the result of the continuous effort from the developers, either from inside the team or outside to get v17 into final release shape. and any outside. We sure would like to thank every one involved with either development, testing or simply helping out others with question.

 Fixes done in this Beta 6:
--------------------------

 • Show select dialog for director button in the information panel if there’s more than one director  
 • Fix video stall on Android during skipping of video or when opening the player controls  
 • Fix potential memory leak in image handling  
 • Fix several problems in the cmake build system  
 • Redact username and password from the log if user has advancedsettings.xml  
 • Fix creating temp folder when handling add-on updates on Windows which fixes the problem from Beta 4  
 • Fix possible crash on handling certain fonts  
 • Fix possible EPG lock up  
 • Fix ASS subtitles on Windows  
 • Fix memory leak with ASS and certain regular subtitles on all platforms  
 • Revert change that broke RTL (right to left) language subtitles  
 • Force re scan of music file tags to makes use of the newest available library structure  
 • Fix not updating the favourites menu item after changes had been made  
 • Add privacy policy screen in *system information  
 •* Remember last used subtitle service when searching again  
 • Fix hash checking in add-on installer which caused certain add-on not downloading when multiple repositories were installed  
 • Fix conversion of POPM music tag values to the new 0 to 10 rating  
 • Fix several issues to further improve controller support  
 • Update CEC library with additional fixes  
 • Fix some tag reading issues from music files

 A full list of changes can be found [here](https://github.com/xbmc/xbmc/milestone/93?closed=1)

 • Microsoft has rolled out a fix for users of the Kodi UWP version in combination with AMD videocard that had BSOD. For more information see: [Blue screen with error code 0×139](https://docs.microsoft.com/windows/msix/desktop/desktop-to-uwp-known-issues)

 #### Known problems

 • Upgrading the skin you are currently using fails on Windows. Temporary solution is switch back to the default Estuary skin and let the other skin update and then switch back.

 We are trying to find the cause solve these problems. Of course there are some more however these are the most noticeable ones. Remember this is still Beta software so please be patient.

  

 What’s new?
-----------

 Privacy policy

 Your privacy is an important factor that the XBMC Foundation and Team Kodi considers in the development of all of our software and services. We are committed to being transparent and open. This Privacy Policy explains generally how we receive information about you, and what we do with that information once we have it. As such we have added this [privacy policy](/kodi-privacy-policy) to our website and also made it available from within Kodi itself to read.

 [![v17-privacy-policy](/sites/default/files/uploads/v17-privacy-policy-800x450.jpg)](/sites/default/files/uploads/v17-privacy-policy.jpg)

 WARNING: This of course does not mean your privacy is totally protected. In the end you are still responsible yourself for whatever you install or share. For the official Kodi repository we have a set of strict rules in place for any add-on that is added or updated and strive towards protecting the users from any harm that might come from using them. However once you decide to install any other repository or add-ons from outside our official repository you must make sure you are informed of any consequences. Do not blindly install any add-on but make sure to read up on what it does and what it might share with others. If you are not sure then take the safe route and don’t install it.

 You might want to read this: [Be aware what additional add-ons you install](/article/warning-be-aware-what-additional-add-ons-you-install)

 Force music tag re-scan

 With Kodi v17 a lot has changed in regards to the music library and part of this has been better tag scanning and usage. For this to work to it’s full potential it’s mandatory for your music files to be re-scanned and the available tags to be extracted. After you upgrade and enter the music library a choice will be giving to re-scan now or later. As this re-scan can take up quite some time and resources you can answer NO and continue browsing your library. Once you exit library and re-enter you will be prompted again asking to re-scan. Once you answer YES Kodi will start scanning all your music files and extract the tag data they contain to a certain degree. As mentioned this process takes quite some time depending on the size. During this time Kodi might be somewhat slower than normal. Do note that this will not reset your library to a new state or that you will loose data. It will simply update what is available and will leave all play counts and the rest as they were.

 [![v17-music-rescan](/sites/default/files/uploads/v17-music-rescan-800x450.jpg)](/sites/default/files/uploads/v17-music-rescan.jpg)

  

 Estuary and Estouchy: next generation

 Past March we announced that v17 would feature a brand new default skin called Estuary and since then it has been included in every build we have released. During this period our developers kept improving on how it looked, behaved and made use of the latest features that got included from what is shaping up to be the final release of v17. Since more and more users also started to use these development builds we started to receive a lot of feedback, where most was positive there was also some negative or at least constructive comments. As we are not deaf to these comments and try to create the best experience, our skin developer *phil65* went back to the drawing board and rethought on how to incorporate this feedback into wat should become the final skin. With some help from *ryanmah* for the mockups, *ichabod-fletchman* for helping out this didn’t resulted in a total rewrite but simply reworking some parts of how the skin looks and behaves. The underlying skin code still remains the same for a very large part except for the parts where a smarter way of doing this magic was found. The visual top layer what you will see should still feel quite familiar if you have used any past v17 builds as not everything was redone.

 At same time the touch skin Estouchy also got matched by our senior skin developer ronie to match the Estuary look.

 For some screenshot you can visit the release announcement here: [Default skin: Next Gen](/article/kodi-v17-krypton-default-skin-next-gen). Regardless you’ll see when you install this new update.

  

 Conclusion
----------

 As previously noted, this is only a small summary of all the improvements in Kodi 17. For more, see the [Alpha 2](/article/kodi-v17-krypton-alpha-2 "Kodi v17 “Krypton” Alpha 2") and [Alpha 3](/article/kodi-v17-krypton-alpha-3 "Kodi v17 “Krypton” Alpha 3") posts. Should you want to download and install this build please visit our download page. You can install these build just on top of your current Kodi installation.

 • [Official Kodi 17.0 development downloads](/download) (near the bottom of the page)  
 • [LibreELEC](https://libreelec.tv/downloads/) Raspberry Pi / x86 versions can be found [here](https://libreelec.tv/downloads/)

 ### Bug reports

 Please report any problems on our forum [http://forum.kodi.tv](https://forum.kodi.tv/) and not on the release announcement as it is not a reporting or help section. Don’t forget we also have some official tablet/phone remote controls for both Android and iOS. You can find the links to them on the download page.

 ### Donations or getting involved

 Getting involved is quite easy. Simply take the plunge and start using these 17.0 Krypton builds. If you use these builds, we encourage you to report problems with these builds on our forum first and after that, if asked, submit bugs on Trac (following this guide: [How to submit a bug report](https://kodi.wiki/view/HOW-TO:Submit_a_bug_report)). Do note that we need detailed information so we can investigate the issue. We also appreciate providing support in our [Forums](https://forum.kodi.tv/ "Kodi Forums") where you can. You can of course also follow or help promote Kodi on all available social networks. Read more on the [get involved](/get-involved) page. We are always happy to receive a [donation](/contribute/donate "Donate") by which you show your support and appreciation, and t-shirts and Raspberry Pi cases may still be found on the sidebar for purchase. All donations and other income goes towards the XBMC foundation and are typically used for travel to attend conferences, any necessary paperwork and legal fees, purchasing necessary hardware and licenses for developers and hopefully the yearly XBMC Foundation Developers Conference.

 