---
title: 'Kodi 14.0 "Helix" nearing beta release'
date: 2014-10-17T03:00:00Z
author: Martijn Kaijser
featured_image:
  src: /images/blog/kodi-splash.png
  title: 'kodi-splash'
  alt: 'kodi-splash'
---
As we already mention in last [alpha4](/article/kodi-140-helix-alpha-4) release post, the first beta release is nearing pretty fast. At this moment we are only waiting for one more final change to happen and then we are good to go. We are only talking a week or two at most. About three weeks have past since but, yet we haven’t sat still. The list of changes and improvements continues to grow.  
 Although we also said feature freeze was in affect, we still found some things that were worth including in the upcoming release. These changes had little impact on stability or have been tested quite thoroughly

 **Localised keyboard support**  
 Although the changes are small the effects for user can be quite big as they can now use a localized keyboard. Thanks to several non team members the list of available keyboard keeps growing. Due to the growing list we now also list them alphabetical using the English language names.

 **DXVA-HQ scaling for videos (Windows)**  
 Since this feature might cause some issues for certain video cards, it was decided that users who actually want to use this feature, you will have to enable this through the [advancedsettings.xml](https://kodi.wiki/view/Advancedsettings.xml) file. Of course this is for the more advanced users to worry about. Though it’s worth mentioning this changes as it could affect some of you.

 **Faster channel switching for PVR**  
 For those that use the PVR capabilities have experienced that channel switching not always is as fast as you want it to be. This should now be some what improved and will switch channels a bit faster. Although there is likely still some gain to be made for the future.

 **Raspberry Pi audio resampling**  
 The Pi’s GPU supports high quality re-sampling, format conversion and up/down mixing.  
 This PR creates a factory for different re-sample implementations, moves the current one into ResampleFFMPEG, and adds a ResamplePi GPU accelerated implementation.

 **Add MMAL decoder and MMAL renderer for Raspberry Pi**  
 DVDs with menus do not work well with omxplayer (the main R-Pi internal player). For this the R-Pi uses the normal internal player from Kodi which offers better support for software decode for SD codecs like divx3, msmpeg, sorenson spark etc. Also omxplayer doesn’t support alsa, so can’t be used with USB and I2S sound cards. Internal dvdplayer may behave better with dodgy timestamps and packet loss, e.g. with live TV. So for this support was added to dvdplayer using the MMAL api. This offers hardware acceleration, saves the processing cost of YUV-\>RGB conversion, saves the memory cost of the RGB textures for video frames and allows high quality (cubic) scaling.

 **iOS 8 runtime fixes**

 Due to the release of iOS 8 some new problems showed up up the new Apple OS. Some of these issue are listed below and have been fixed

 
 2. Orientation of our layer is borked when compiled against ios8 sdk and running on ios8 runtime (apple finally fixed the 90° based coordinates)
 4. Because of 1 orientation on external screen is messed up too when compiling against ios8 sdk and running on ios8 runtime
 6. On ios 8 runtime (independent of used SDK) the textfield above the native keyboard is hidden
 8. On ios 8 runtime (independent of used SDK) VTB HW decoder crashes on seek
 10. Several fixes concerning Airplay. It might still be possible that not all function like you want it to. Please know that our main developer for this part tries his best. Hopefully you understand that we are limited in both manpower and capabilities due to Apple constraints.
 
 **Update Windows power management functions**  
 Our code still contained some functions that dated back to the Windows XP release. Now that we have dropped support for that OS a while ago it was also time to update the function. It is most likely most of you won’t notice it on normal usage. Due to these changes the support for the newer Windows version has improved a bit. One extra function has been added. When you have pending Windows updates that requires a reboot, it now gives you the possibility to install them if you reboot from within Kodi. Do note it will not force install any updates that you haven’t enabled.

 **Improvement in file handling system**  
 This is really under the hood code changes that has greatly improved the code handling for several of the file systems we handle. Mainly stability and possible error handling.

 **Dolby Atmos surround sound**  
 For the users who own the Transformers – Age of Extension Bluray (to name one), would have noticed that TrueHD playback didn’t work. This is caused because the Bluray includes the new [Dolby Atmos](https://www.dolby.com/technologies/dolby-atmos/) sound for the TrueHD track. Our devs backported a fix from FFMPEG to at least retrieve the normal audio channels for playback. The actual Dolby Atmos functionality is of yet not supported.

 **Extending JSON-RPC even more**  
 JSON-RPC is a remote procedure call protocol encoded in JSON. It allows any program to communicate to Kodi by sending certain commands and possibly retrieve data back. This is the main method that remotes like our official iOS remote uses to connect to Kodi. With these additions, these remotes become even more capable of controlling your favourite in house media center.

 **Several other fixes done:**

 
 * * Fixed T9/SMS text input
 * * Updated several PVR add-ons to include fixes done
 * * SSA Subtitle fixes
 * * Added settings for preferred Bluray playback method. “play main movie”, “show disc menu” or “show simplified menu”
 * * Fix non loading of external subtitles for ISO files and Bluray directories
 * * Fix for importing some add-on modules that depended on other modules
 * * A lot more small fixes and tweaks.
 
 **Past changes since Gotham 13.x**

 For a brief list of other features and improvements you can read the following: [alpha2](https://kodi.wiki/kodi-14-0-helix-alpha-2/), [alpha3](https://kodi.wiki/kodi-14-0-helix-alpha-3/), [alpha4](https://kodi.wiki/kodi-14-0-helix-alpha-4/)

 Add-ons
-------

 As for this Helix release, so far there have only been small things changed in regards to add-ons. So we are happy to say that almost all add-ons that worked in Gotham, will also work in Helix. There are of course some exceptions, however this should be only be a minimal amount.

 Skins
-----

 Helix compatible skins in our repository at the moment are: Aeon Nox 5, Transparency!, Conq, Nebula and Black Glass Nova.  
 As of this release all other skins that have not been updated, will become incompatible. We hope that our dedicated skin developers will find the time to update these when we near final release. A big thank you them all for their continues effort.

 Conclusion
----------

 Due to the fact that we are nearing the beta release, we have stopped publishing new alpha release. However it is still possible to try out the latest changes and fixes we have mention over the past months. Through the entire year we daily build a bleeding edge version for users and developers to download and try. These so called “nightly builds” should normally considered somewhat unstable and not recommended for daily use. However since we are nearing beta they are actually the most stable version you can find for the upcoming 14.0 version. Should want to download and install the most recent build, please visit our download page as mentioned below. You will notice that you can still see “XBMC” in certain areas as we are still in transition to the new name, which takes time and needs to be done carefully. Enjoy.

 
 * * [Official Kodi 14.0 development downloads](https://kodi.wiki/download/)
 * * Raspberry Pi versions can be found on the [forum](https://forum.kodi.tv/forumdisplay.php?fid=166)
 
 ### Get involved to the community

 Getting involved is quite easy. Simply take the plunge and start using these 14.0 Helix builds. If you use these builds, we encourage you to report problems with these builds on our forum first and after if asked submit bugs on Trac (following this guide: [How to submit a bug report](https://kodi.wiki/view/HOW-TO:Submit_a_bug_report)). Do note that we need detailed information so we can investigate the issue. We also appreciate providing support in our [Forums](https://forum.kodi.tv/ "XBMC Forums") where you can, or [donate](https://kodi.wiki/contribute/donate/ "XBMC Foundation Donations") to the XBMC Foundation if you like. For a current FAQ on Kodi 14, visit our [Helix FAQ](https://kodi.wiki/view/Kodi_v14_(Helix)_FAQ). You can of course also foll0w or help promote Kodi on all available social networks. Read more on the [get involved](/get-involved) page.

 **Disclaimer:**

 [https://kodi.wiki/view/Main\_Page](https://kodi.wiki/view/Main_Page) is the only official place anything XBMC/Kodi related. This includes news, announcements, information or XBMC/Kodi downloads. There are of course manufacturers who also provide support with customized XBMC/Kodi versions, tailored for their devices. Should you have purchased from them it would be wise to first check, if it’s a known issue with that specific version. Any other third-party websites, offering you XBMC/Kodi installations, or people offering you pre-installed devices, are not officially supported by Team XBMC and may contain unwanted and unsupported additions, changes and add-ons. Installing these versions is at your own risk. XBMC/Kodi does not provide any media content on it’s own and comes with no add-ons installed regarding this. Should you have problems please contact the correct add-on developer or website should you experience any issues.

 <https://kodi.wiki/get-involved/>

 