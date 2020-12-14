---
title: 'Changes to paths: What it means for scripts and plugins'
date: 2009-02-09T03:00:00Z
author: Team XBMC
featured_image: ""
---
As a follow up to my [last post](/article/change-internal-path-structures "last post"), scripters and plugin writers should be aware of the best practises for accessing files under python:

 1. **Don’t use the old Q:, P:, T:, U:, Z: paths.** Replace these with their special:// counterparts below.

 2. **Use xbmc.translatePath()** to translate any path to it’s true path if/when you need to read or write from the filesystem.

 Note that xbmc.translatePath() will take care of number 1 for you in the meantime, but this functionality is not guaranteed to be available forever.

 So what should you use?

 1. Use **special://home/** if you need to read or write to the writeable version of the xbmc install folder.

 2. Use **special://profile/** if you need to read or write to the current users userdata folder.

 3. Use **special://temp/** if you need to read or write to a temporary location.

 If you absolutely have to, you can also:

 4. Use **special://xbmc/** to read from the xbmc install folder itself.

 5. Use **special://masterprofile/** to read from the master users’ userdata folder.

 These should not be needed by the majority of scripts, however, so if you find yourself needing to do either of 4 or 5, please contact me so that I know why, and can see whether there’s a better way to do things.

 