---
title: 'Kodi 14.0 "Helix" alpha 4'
date: 2014-10-02T04:00:00Z
tags:
  - Prerelease
author: Martijn Kaijser
featured_image:
  src: /images/blog/kodi-splash.webp
  title: "kodi-splash"
  alt: "kodi-splash"
---

Kodi 14, which we gave the codename “_Helix_“, is slowly heading towards beta status. In this possibly last alpha release, we continue to focus on stability and user friendliness. Around [117 pull-request (code changes)](https://github.com/xbmc/xbmc/issues?page=3&q=milestone%3A%22Helix+14.0-alpha4%22+is%3Aclosed) have been added past month in a variety of areas. There aren’t many additions that could be picked out as a real “features’. However we will highlight some of the main visual changes so far.

## Replace Touch skin with re-Touched

This change only really affects iOS and Android enabled devices. re-Touched isn’t really a brand new skin as it has been available in Gotham repo as well. re-Touched is actually a slightly redesigned Touch skin with a different home screen layout and various tweaks in some areas. However we felt like we had to replace it with a more fresh and easier skin. PVR is still not included, as such you will need a different skin should you wish to use it.

## Moving userdata for Windows users

As a result of the name change, we are also forced to make some code changes. This has resulted in the fact that you personal userdata folder will be moved to a new location. This will either be done at install time or initial run. This just means the location of the files that hold your library and settings will be moved. No data will be lost during this transition. After you have installed Kodi and run it, you shouldn’t even notice a thing and you can continue using it as always. For now only the Windows platforms has this incorporated with the following steps

_If User installs into a dir were kodi is already installed ask if he wants to overwrite it._  
 _a. if user says “yes” – un-install former installation and install new_  
 _b. if user says “no” – he stays at the folder selection page and can re-decide_

_If user installs into a different directory_  
 _a. He said no on 1.b – kodi will just be installed in the different directory_  
 _b. He selected the new directory initally without hitting the question in 1. – check if there is a kodi installation in another directory – if so – ask user if he wants us to un-install it. If no – kodi will be installed side by side_

_At the end of installation check for an old XBMC installation_  
 _a. if found – ask if the user wants us to un-install it_  
 _a1 if user said “yes” – un-install old XBMC installation and move the userdata – inform the user about the moved data_  
 _a2 if user said “no” – keep the old XBMC installation and DON’T move the userdata – inform the user about the fact that kodi will use the default profile data._

_portable data is not touched at all_

Other platforms still need further testing to make this transition as smooth as possible. We will of course keep you up to date when this happens.

### Other changes in this release

- - support for sub-channels in PVR
- - update sqlite which brings some improved library speed
- - add support for DSD audio
- - add mouse support in Bluray menus
- - add support for EGL/GLESv2 when using X11
- - 4K playback on Android using AMLcodec
- - support for the Freescale i.MX6 SystemOnChip
- - improvements for DXVA video playback on Windows platform

## Add-ons

As for this Helix release, so far there have only been small things changed in regards to add-ons. So we are happy to say that almost all add-ons that worked in Gotham, will also work in Helix. There are of course some exceptions, however this should be only be a minimal amount.

## Skins

Creating a skins for Kodi takes many months of designing, coding, testing, tweaking and a lot of patience to get it just right. However with every major Kodi (past XBMC) release there is the problem of skins becoming incompatible due to various code changes. So for every release people who put a lot of effort creating these skins, need to adapt it for the next Kodi version. This could mean that your favourite skin doesn’t work in the next Kodi version. We are very glad to say, that thanks to a group of skin developers, there are already 2 Helix compatible skins available in our repository. From memory this has never happened before, that within the alpha stage there are already skins available for you to enjoy using. On our forum there are several more skins being worked on, to get these into shape for people to use. So hopefully by the time of final release, there will be several more available. So let’s all thank the developers for their hard work they do for the community.

Helix compatible skins in our repository at the moment are: Aeon Nox 5, Transparency!, Conq, Nebula, Black Glass Nova.  
 As of this release all other skins that have not been updated, will become incompatible.

## Conclusion

Should want to download and install this alpha (monthly) build please visit our download page. You will notice that you can still see “XBMC” in certain areas as we are still in transition to the new name, which takes time.

- - [Official Kodi 14.0 development downloads](https://kodi.wiki/download/)
- - Raspberry Pi versions can be found on the [forum](https://forum.kodi.tv/forumdisplay.php?fid=166)

### Get involved

Getting involved is quite easy. Simply take the plunge and start using these 14.0 Helix builds. If you use these builds, we encourage you to report problems with these builds on our forum first and after if asked submit bugs on Trac (following this guide: [How to submit a bug report](https://kodi.wiki/view/HOW-TO:Submit_a_bug_report)). Do note that we need detailed information so we can investigate the issue. We also appreciate providing support in our [Forums](https://forum.kodi.tv/ "XBMC Forums") where you can, or [donate](https://kodi.wiki/contribute/donate/ "XBMC Foundation Donations") to the XBMC Foundation if you like. For a current FAQ on Kodi 14, visit our [Helix FAQ](<https://kodi.wiki/view/Kodi_v14_(Helix)_FAQ>). You can of course also foll0w or help promote Kodi on all available social networks. Read more on the [get involved](/get-involved) page.

**Disclaimer:**

[https://kodi.wiki/view/Main_Page](https://kodi.wiki/view/Main_Page) is the only official place anything XBMC/Kodi related. This includes news, announcements, information or XBMC/Kodi downloads. There are of course manufacturers who also provide support with customized XBMC/Kodi versions, tailored for their devices. Should you have purchased from them it would be wise to first check, if it’s a known issue with that specific version. Any other third-party websites, offering you XBMC/Kodi installations, or people offering you pre-installed devices, are not officially supported by Team XBMC and may contain unwanted and unsupported additions, changes and add-ons. Installing these versions is at your own risk. XBMC/Kodi does not provide any media content on it’s own and comes with no add-ons installed regarding this. Should you have problems please contact the correct add-on developer or website should you experience any issues.

<http://xbmc.org/get-involved/>
