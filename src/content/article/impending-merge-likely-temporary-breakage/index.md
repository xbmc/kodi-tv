---
title: 'Impending merge: Likely temporary breakage'
date: 2009-08-26T04:00:00Z
tags:
  - Developer
author: Team XBMC
---
All of our loyal self-compilers and nightly-build users please take note:

 Yuvalt and elisemory (from boxee) have been hard at work abstracting a few of XBMC’s subsystems (rendering, windowing, input) in order to improve performance on all platforms and make the code easier to work with.

 So far work has taken place in a separate branch but in the coming days/weeks the changes will be merged into the main branch. This may mean significant breakage for a little while both in compiling and in running, so don’t be alarmed, and please PLEASE be patient. There’s no need to report build or runtime errors due to this merge. Keep in mind, if it doesn’t build, or if the core functionality is broken, we already know. For those of you who do nightly builds, please take a break for a few days after the merge.

 It may take a few days or weeks to settle down, but when the dust settles we’ll have a much simplified codebase that opens the door to fun things in the future.

 