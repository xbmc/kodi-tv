---
title: "XBMC 9.11: Alpha1 ready for testing"
date: 2009-11-03T03:00:00Z
tags:
  - Prerelease
author: Team XBMC
---

![](/images/blog/logo.webp)Today we are pleased to announce the first official testing release of 9.11, Codename: Camelot. It’s been quite a while since Babylon, so we’re very excited to begin the release cycle and work towards a new release.

Please keep in mind that this is an early alpha build, and it should be treated as such. While it’s not likely to burn your house down or eat your pets, it’s likely that testers will run into a few bugs. If this happens, please search TRAC to see if someone else has already reported it. If not, you may submit a [QUALITY bug report](https://kodi.wiki/view/HOW-TO_submit_a_proper_Bug_Report). Keep in mind that the reason for releasing alphas/betas is so that we can get a better feel for what bugs are out there. If you don’t report them, we can’t fix them.

We are also still working hard to clean up the settings. Many useless ones have been removed, but there’s still quite a bit of rearranging to do.

There are a host of new features in this release, far too many to list here. The highlights are:

- DirectX has replaced OpenGL for Windows
- Numerous skinning engine updates which allow for use of some fancy new [skins](/slideshow/skins)
- Many improvements to the video player which allow for much smoother playback
- Switch to Core Audio on OSX
- Many VDPAU improvements under linux
- Many platform-specific customizations
- Much Much more. We will be showcasing the new features here on xbmc.org as the final release approaches.

### Known Issues

- Windows: [DirectX](http://www.microsoft.com/downloads/details.aspx?FamilyID=2DA43D38-DB71-4C1B-BC6A-9B6652CD92A3) runtime and Visual C++ 2008 runtime([x86](http://www.microsoft.com/downloads/details.aspx?FamilyID=9b2da534-3e03-4391-8a4d-074b9f2bc1bf)/[x64](http://www.microsoft.com/downloads/details.aspx?familyid=BA9257CA-337F-4B40-8C14-157CFDFFEE4E)) are required. The installer will be updated to check for these.
- Windows: ‘Windowed’ shortcut opens in full screen
- Windows: Non-functional brightness/contrast
- Windows: Discs inserted before XBMC is launched may not appear correctly
- Windows: Some videos may not play back as smoothly as on other platforms
- Linux: VDPAU de-interlacing is known to be broken
  **Note**: Many of these problems have already been fixed since the alpha1 tag and should be resolved in the next testing release.

### Download

If you like living on the edge and would like to try the alpha, head over to our [download](https://kodi.wiki/download/) page. You will always find the most current official builds there. AppleTV users may update via launcher’s downloads.

**Update: The Ubuntu PPA and XBMC Live are now up.**
