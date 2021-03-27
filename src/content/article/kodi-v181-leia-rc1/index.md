---
title: "Kodi v18.1 Leia RC1"
date: 2019-02-10T20:50:42Z
author: Martijn Kaijser
featured_image:
  src: /images/blog/Pi_Case_v2_Kodi_gen2.webp
  title: "Kodi Pi Case v2"
  alt: "Kodi Pi Case v2"
---

###### Upcoming bug fix release...

Two weeks have passed since the official release of v18.0 - hopefully, you all like it as much as we do. A final release always comes with some unexpected bugs, however, so the months to come will bring regular v18 updates with further fixes and improvements. As the first of these, then, the 18.1 release candidate includes the following changes:

- Speed up Player and Playlists operations with JSON-RPC
- Define a senseful default value for advanced settings "updateemptytagsinterval"
- Revert edge case crash fix that caused DVDs to be not recognised on Mac OS
- Remove "dxvaallowhqscaling" advanced setting to prepare for DXVA improvements in v18.2 for Windows
- Linux X11: fix usage of required configuration values
- Add date to the log records
- Don't react on DPI change event on Win10 \>= FCU
- Fix Android MediaCodec freeze on early disposal of a stream
- Flush streamplayers if abort is requested which solves waiting too long (on skipping DVD intros, for example)
- Fix ListitemAbsolute and ListItemPosition in GUI engine
- Ignore very first "server not reachable" notification for PVR servers
- Use extended result codes for SQLite
- Fix invalid PTS decoder value which should inprove MPEG2 playback on Android devices
- update SSL CA trust store
- Handle empty vertex buffers in GUIFontTTFGL which caused a hard crash
- Reintroduce setting "Close channel OSD after switching channels" for PVR
- Fix thread logging on Android which causes e.g. frozen DVD/Bluray playback
- Avoid attempt to load music info for smartplaylists
- Fix Top 100 Albums regression
- RenderCapture: Only query Occlusion if GL lower 1.5
- Check current mode if whitelist doesn't match and take correct action
- Check if app intent is valid on Android. This fixes a hard crash when trying to open Kodi again
- Fix PVR input stream creation for pvr file items only containing a path and no recording/channel tag.
- Fix playing VP9 streams using inputstream addon. It failed because codec extradata is non-existent for this stream codec.
- Catch an exception while reading or writing a file
- Fix logical "or" operation in GUI engine
- Check the system capabilities to support sleep states S1/S2/S3/S4 before reporting them as available
- Fix crash in PCSX ReARMed with BIOS
- Several Estuary cosmetic fixes

The full v18.1 RC1 changelog can be found in our [GitHub milestone](https://github.com/xbmc/xbmc/milestone/121?closed=1).

If you want to read back on what was actually changed in v18 itself, you can find the corresponding articles in the [blog posts](https://kodi.tv/blog?keyword=v18&tag=All) list.

## The v18 "Leia" T-shirt

Inspired by the "galaxy far, far away" theme, our resident artist Sam went above and beyond and designed perhaps the coolest Kodi announcement video of all time.

We loved his work so much that we're modelling the Kodi 18 shirt after it, along with more art to come. Here it is, our [newest, coolest shirt: K-18L](https://teespring.com/stores/kodi-18-leia-store) - available in several shirt colours and not just black or white.

## Thanks

As always, this is a huge team effort, and our collective thanks go out to all the developers who submitted code, whether that was thousands of lines of a core new feature or a couple of lines to fix a skin bug. Thanks go out to the ecosystem of add-on and skin developers who updated or created add-ons to use new functionality in Kodi 18.0. Likewise, we're indebted to the many beta and release candidate testers who took time to explore the pre-release application, file bug reports, test fixes and assist the team with resolving issues. And finally... special thanks go out to our tireless team of forum moderators and all those who spend time in our forum and enjoy being part of our community to share tips and tricks and help others. Without all of you, this project would be nothing.

## Help!

If you experience any issues or find any remaining bugs, please post in the [General Support section](https://forum.kodi.tv/forumdisplay.php?fid=111 "General support") of our forum (please be mindful of our [forum rules](https://kodi.wiki/view/Official:Forum_rules) when posting!). If you have fixes for issues, please submit a pull request with your changes to our [master branch on GitHub](https://github.com/xbmc/xbmc). We also welcome users who want to help answer questions in the forum or write articles for the wiki.

## Donate

To show support and appreciation for Kodi, please consider [making a donation](/contribute/donate "Donate to Kodi") or purchasing merchandise such as a T-shirt or Raspberry Pi case. All donations or profits go to the XBMC Foundation and are typically used for team travel costs when attending conferences, operating expenses, hardware and software licences for developers, legal fees, and the annual developer conference.

## **Download and install**

Since this is a continuation of the v18 series, you can simply install these builds on top of your existing installation.

_Go to the [official download page](https://kodi.tv/download) and choose your platform. You will then find the builds under the pre-release tab._
