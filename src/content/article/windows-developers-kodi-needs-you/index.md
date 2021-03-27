---
title: "Windows Developers - Kodi Needs You!"
date: 2019-11-20T02:57:13Z
author: Team Kodi
featured_image:
  src: /images/blog/WinHelpWanted.webp
  title: "Windows Devs, We Need You!"
  alt: "Windows Devs, We Need You!"
---

## Windows Developers - Kodi Needs You!

It will probably come as a surprise to many of you that the active team of Kodi developers is tiny - millions of users and yet only a handful of volunteers spending their spare time to do all the technical stuff at the heart of Kodi. In turn, there is another handful of valuable people providing user support, forum moderation, supervision of the addon repo, and so on. Sometimes, we have a need for specific skills that the team does not currently have. Well, that's what has happened.

You can read all about the switch to Python3 [here](https://kodi.tv/article/kodi-19-python-3-goes-live), an essential upgrade to one of the underlying tools which Kodi uses. This is a breaking change for us, and there is a lot of work that needs to be done to get things functional again. In turn, this has brought the lack of experience of (or even interest in) developing on the Windows platforms in the team to a crisis.

We are currently very short of active developers with in-depth, practical knowledge of developing and deploying C++ applications on Windows platforms, for both the desktop and UWP versions of Kodi. We especially need people:

- who know and understand CMake, to bring packaging of Windows dependencies into line with those of our other actively-developed platforms.
- with knowledge of the UWP API, and an interest in implementing Kodi as a UWP app running on Xbox, etc.

We cannot hold up releases of Kodi just for one or two platforms, no matter how large or active they may be or how many users they have. So there is a real risk that if new blood does not join the team, at least UWP (XBox) will have to be dropped for Kodi v20 and probably even Matrix v19.

Put bluntly, we need Windows developers. If that is you, and you'd be willing and interested to work on a project like Kodi, then we'd love to hear from you. We really want to say that our existing developers would be able to mentor as much as required, and we will certainly assist as much as we can, but in reality you need to be self-reliant and sufficiently experienced to be able to hold your own. Kodi is not a starter project, more a serious mountain that few conquer; it's complex, but very rewarding too. A sense of adventure and enjoyment of unravelling mysteries and puzzles would help a lot.

Bottom line, without developer interest, the likelihood of there being a UWP release for v19 is slim, and v20 would be zero.

**_Your Kodi needs you!_**

**\*Footnote**: for those who may be interested, Team member Rechi has provided the following technical notes.\*

_The current dependency system is mandatory for compilation on Android, iOS, macOS and tvOS. It can be also used for Linux, but we usually use system libraries (provided by the distribution). The process compiles all libraries needed for Kodi ([link](https://github.com/xbmc/xbmc/tree/master/tools/depends/target)) from source, along with some required tools ([link](https://github.com/xbmc/xbmc/tree/master/tools/depends/native))._

*For Windows, however, pre-compiled libraries (except FFmpeg and libdvd) and executables are downloaded (*download-dependencies.bat*) and then used to build Kodi. Because some libs depend on other libs, one has to recompile all reverse dependencies to be sure everything is still working. If an issue then shows up within a library, that one has to be compiled again (and maybe also, in turn, its reverse dependencies), packaged and re-uploaded, instead of simply fixing the issue in source code.*

_Where we're trying to get to with Windows, then, is to have all necessary libraries compiled from source, as an integrated part of the build process, and thus replace the_ download-dependencies.bat*,* download-msys2.bat _and_ make-mingwlibs.bat _scripts._

_The main changes for this can be found here as detailed in this pull request ([link](https://github.com/xbmc/xbmc/pull/16850)). It switches from downloading pre-compiled native executables to building them from source. Target libraries are only switched to compiling from source for_ x86-windows*,* arm-windowsstore*,* x86-windowsstore _and_ x86_64-windowsstore*, because it currently contains only required dependencies. This means those platforms will lose some functionality until the libs are added. This can be done one by one and I can guide anyone who is interested. Once all optional libraries are added,* x86_64-windows _platform can also be switched to this dependency system._
