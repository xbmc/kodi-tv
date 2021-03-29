---
title: 'Kodi 14.0 "Helix" alpha 2'
date: 2014-08-10T04:00:00Z
author: Martijn Kaijser
featured_image:
  src: /images/blog/kodi-splash.webp
  title: "kodi-splash"
  alt: "kodi-splash"
---

Kodi 14, which we gave the codename “_Helix_“, is shaping up to be what is often called a “stability” release. In software development, many projects operate on a sort of tick-tock release schedule. The “tick” often introduces new features, dramatically alters the UI, and can likely dramatically alter the underlying framework of the software. The “tock” on the other hand, goes back and cleans up the code, fixing old incompatibilities, eliminating UI inconsistencies, and often preparing the groundwork for the next major tick. Where Gotham was quite definitely a “tick,” Helix is shaping up to be a “tock.”

With that said, several features, fixes, and updates have been included so far that are definitely worth discussing.

## The Next Generation of Video Codecs

![ffmpeg-logo](/images/blog/ffmpeg-logo-300x75.webp)To begin, Kodi has been updated to use FFmpeg 2.2.4. For users, this means Kodi will now be capable of playing back h.265 (also known as HEVC) and VP9 video codecs. This could result in dramatically smaller video files sizes with exactly the same level of quality. A 40 GB file could be compressed to 20 GB. A 1 GB file could be compressed to 500 MB without any loss in perceivable quality. Users with particularly large libraries or interest in 4K video may be especially likely to appreciate this update.

The caveat to this update is that it is entirely software based. This means most low power systems, such as those operating Android or iOS, may struggle compared to the heftier HTPCs or Intel NUCs and ZOTAC ZBOXes that are running desktop and laptop processors.

## Library Improvements

The Kodi Library is getting improvements both coming in and going out. On the input side, library scanning is receiving a massive speed boost, which should make the initial scan on Android and iOS devices quite a bit more spritely.

On the output side, work continues, slowly but surely, on UPnP. Kodi is now significantly more compatible with servers like PlayOn and MediaBrowser, as client-related bugs have been dealt with. Further, communication between Kodi UPnP clients and Kodi UPnP servers continues to improve with proper or additional support for categories like date added, ratings, votes, and artwork, along with sorting for those new categories. UPnP search functions are also slowly working their way into Kodi.

## Android and iOS

On the Android side, hardware playback improvements continue, including more and better support for various chipsets, improved fast forward and rewind capability, as well as 4K support for the AMLogic s802 chipset. On the iOS side, Airplay, which was fairly substantially broken by the update to iOS 7, appears to be almost entirely fixed on every platform save Android, which lacks certain software support, making Airplay playback only partially fixed on that platform.

## Windows, OSX, and Linux

All three platforms continue to see improvements in audio playback and a reduction of many audio-related bugs that have been plaguing the platforms for a long time.

Other Changes

The changelog for Kodi 14 is 12 pages long and contains 333 changes so far. Needless to say, they can’t all be summarized here, but a few additional items worth noting include:

- - Update PVR add-ons
- - Start of redesigning the PVR windows
- - Various improvements to the Audio Engine, with the OSX platform as great beneficiary.
- - Improvements to the GUI skinning engine
- - Extended JSON-RPC interface
- - Countless smaller and larger bug-fixes throughout the program and vast improvements in every area. This should improve memory usage, stability, speed and user friendliness.
- - Add-ons are still compatible up to the Frodo versions.
- - Skins are partially still compatible, however to fully function they will need to be updated to latest changes. Expect breakage here.

## Add-ons

As for this Helix release, so far there have only been small things changed in regards to add-ons. So we are happy to say that almost all add-ons that worked in Gotham, will also work in Helix. There are of course some exceptions, however this should be only be a minimal amount.

## Skins

Creating a skins for Kodi takes many months of designing, coding, testing, tweaking and a lot of patience to get it just right. However with every major Kodi (past XBMC) release there is the problem of skins becoming incompatible due to various code changes. So for every release people who put a lot of effort creating these skins, need to adapt it for the next Kodi version. This could mean that your favourite skin doesn’t work in the next Kodi version. We are very glad to say, that thanks to a group of skin developers, there are already 2 Helix compatible skins available in our repository. From memory this has never happened before, that within the alpha stage there are already skins available for you to enjoy using. On our forum there are several more skins being worked on, to get these into shape for people to use. So hopefully by the time of final release, there will be several more available. So let’s all thank the developers for their hard work they do for the community.

Helix compatible skins in our repository at the moment are: Aeon Nox 5, Transparency!  
 Other are still included however they may lack the functionality you have been used to in some areas.

## The Last XBMC Shirt Ever

[![xbmclastshirt](/images/blog/xbmclastshirt.webp)](https://teespring.com/lastxbmcshirt1)Because of your generosity in t-shirt sales, straight-up donations, and word-of-mouth evangelizing, this project has lasted for 12 years and through four different names, and with your help, we all believe it can last twice that long again. So we figured we’d offer a t-shirt to commemorate the name change.

There’s only one thing. The image at the top of this article is not the final logo. We are working with [doghousemedia](https://doghouse.agency/ "doghousemedia") to truly realize an awesome logo, and we aren’t quite there yet.

So instead of offering a bit of swag with the new name, we figured we’d offer the exact opposite. [This is it](https://teespring.com/lastxbmcshirt1 "The Last XBMC Shirt"). The last XBMC shirt or related piece of merchandise we’re ever going to sell.

## Conclusion

Should want to download and install this alpha (monthly) build please visit our download page. You will notice that you can still see “XBMC” in certain areas as we are still in transition to the new name, which takes time.

- - [Official Kodi 14.0 alpha2 downloads](https://kodi.wiki/download/)
- - Raspberry Pi versions can be found on the [forum](https://forum.kodi.tv/forumdisplay.php?fid=166)

### How to Contribute

If you use these builds, we encourage you to report problems with these builds on our forum first and after if asked submit bugs on Trac (following this guide: [How to submit a bug report](https://kodi.wiki/view/HOW-TO:Submit_a_bug_report)). Do note that we need detailed information so we can investigate the issue. We also appreciate providing support in our [Forums](https://forum.kodi.tv/ "XBMC Forums") where you can, or [donate](https://kodi.wiki/contribute/donate/ "XBMC Foundation Donations") to the XBMC Foundation if you like. For a current FAQ on Kodi 14, visit our [Helix FAQ](<https://kodi.wiki/view/Kodi_v14_(Helix)_FAQ>). You can of course also foll0w or help promote Kodi on all available social networks.

**Important:**

[https://kodi.wiki/view/Main_Page](https://kodi.wiki/view/Main_Page) is the only official place anything XBMC/Kodi related. This includes news, announcements, information or XBMC/Kodi downloads. There are of course manufacturers who also provide support with customized XBMC/Kodi versions, tailored for their devices. Should you have purchased from them it would be wise to first check, if it’s a known issue with that specific version. Any other third-party websites, offering you XBMC/Kodi installations, or people offering you pre-installed devices, are not officially supported by Team XBMC and may contain unwanted and unsupported additions, changes and add-ons. Installing these versions is at your own risk. XBMC/Kodi does not provide any media content on it’s own and comes with no add-ons installed regarding this. Should you have problems please contact the correct add-on developer or website should you experience any issues.
