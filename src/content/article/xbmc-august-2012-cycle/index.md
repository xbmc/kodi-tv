---
title: "XBMC August 2012 Cycle"
date: 2012-09-05T04:00:00Z
author: Nathan Betzen
---

[![](/sites/default/files/uploads/xbmc_native_keyboard-300x200.webp "xbmc_native_keyboard")](/sites/default/files/uploads/xbmc_native_keyboard.webp)As [mentioned previously](https://kodi.wiki/theuni/2012/04/25/update-grab-bag/ "XBMC April Grab Bag"), we have now moved into a monthly development cycle, in which we merge new features at the beginning of the month and then perform bug fixes through the rest of the month. This means, at the end of every month, developers, bug-reporters, and those willing to deal with potentially highly unstable builds can try a snapshot from the current development cycle, and the organization, in turn, will have a more stable and predictable development process. For those of you who would prefer a stable version of XBMC, we will always recommend the most recent stable release (XBMC 11.0), but for the brave, you are welcome to try the end of the month build. To give an idea of just how unstable/alpha these builds can be, there will almost certainly be months in which some platforms won’t actually have usable builds. As always, we recommend you backup your userdata folder before upgrading.

With that said, let’s review some of the more notable changes in the [August Changelog](https://github.com/xbmc/xbmc/issues?milestone=5&state=closed "XBMC August Changelog").

### Touchscreen Keyboard Optimization

With the push into tablets and the continued support of iOS devices, it’s becoming increasingly critical that XBMC provide a better user experience for touchscreen input. As such, the first feature of this month’s Cycle is a refactor of our GUI Keyboard to allow for [native onscreen keyboards](https://github.com/xbmc/xbmc/pull/1194 "Native Touchscreen Keyboard refactor"). This means the keyboard that you see while using other software on iOS will be the same keyboard you see while using XBMC.

### Artist-based Smartplaylists

For those who are not aware, XBMC Smartplaylists are a sort of filter that should not be confused with something like an iTunes Auto Playlist, as they behave differently. An iTunes playlist is typically a list of songs meant to be played in order or randomly, one right after another. An XBMC Smartplaylist is merely a filtered list from which one can pick an individual song or video, and once the song or video has ended, the user will be returned to the list to select another item.

The vast majority of dev Montellese’s GSoC work this summer has been dedicated to speeding up and refining Smartplaylists so that searching and filtering your content is faster and easier than ever before, and all done in real time. This month, he added [Artist-based Smartplaylists](https://github.com/xbmc/xbmc/pull/1249 "Artist-based Smartplaylists"), so that users can sort and filter their music by topics such as artist, genre, moods, styles, born, bandformed, disbanded, died, biography, and instruments, with the potential of adding even greater filtering support in the future.

### Conclusion

As always, this is merely a sample of the many changes this cycle. For a full list of all the August changes, feel free to take a look at our list of August [milestones](https://github.com/xbmc/xbmc/issues?milestone=5&state=closed "August Changelog"). Also, keep an eye out for both the September Cycle and regular stories on the blog, as we’ve quite a bit of upcoming news. Or, if you are feeling a bit brave and a bit lucky, just start downloading.

- [Windows and OSX](http://mirrors.xbmc.org/snapshots/ "XBMC snapshots for Windows and OSX") (64bit OSX will be available in the morning US time)
- [Apple TV](https://kodi.wiki/view/HOW-TO:Install_XBMC_on_Apple_TV_2 "Apple TV instuctions") and [iOS](https://kodi.wiki/view/HOW-TO:Install_XBMC_on_iPad/iPhone/iPod_touch "iOS installation instructions") installation instructions (also available in the morning US time).
- Given the additional complexities of distribution, builds for Linux are not currently available at XBMC.org.

Finally, a note for those of you who are tracking and submitting bugs. You may notice that Github has an “Issues” section. The Team would very much appreciate it if you did not submit bug reports through that section, but rather continued to use the forums and Trac. At the moment, the Team is using Issues as a concise means of grouping and identifying particular bugs that they gather from the forum and Trac sources. Thanks for your help!
