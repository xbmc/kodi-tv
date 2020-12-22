---
title: 'Broadcom Crystal HD, It`s Magic.'
date: 2009-12-28T03:00:00Z
author: Team XBMC
featured_image: ""
---
1080p HD content playback has always been the Holy Grail for any Media Center application but this has traditionally been difficult; playback using software decode alone requires a very hefty CPU and hardware decoding has only been made available recently using the nVidia’s VPDAU technology, available only on Linux. Windows has its own platform specific solutions and poor old OSX has no public APIs available at all. There really is nothing around with a common API that enables hardware accelerated 1080p HD content playback that can also be used under all three major platforms (OSX, Linux, and Windows). Well, that situation is about to change.

 Through hard work and the joint efforts of several TeamXBMC/Redhat developers and the Broadcom Media PC Group, cross-platform hardware decoding of mpeg2, h.264 and VC1 video content up to 1080p will be coming to XBMC on OSX, Linux, and Windows via the Broadcom Crystal HD Hardware Decoder (BCM970012). The Broadcom Crystal HD is available now in a mini-PCIE card with ExpressCard and 1X PCIE form factors to follow. This means that the AppleTV and all those lovely new netbooks, Eee Boxes and older Intel Mac Minis have exciting new potential.

 This solution has a common programming API, so many 3rd party developers and applications will be able to leverage hardware accelerated video content playback across OSX, Linux, and Windows platforms with minimal source code changes. Best of all, this is an open source solution with full source code for driver and library available for OSX and Linux under a GPL/LGPL license. Wow, this indeed is the Holy Grail and a major score for the open source community as this means no more tainted Linux kernels! Support has already been added to XBMC under the svn trunk. Our bleeding-edge users can expect to find the feature in the next nightly builds from our community builders, the more patient can wait until the next stable release. Other media projects such as FFmpeg, MythTV and Xine will soon follow as their developers add support.

 The Windows driver binary, as well as the Linux source code for the driver and library can be found at the [Broadcom web site](https://www.broadcom.com/support/download-search/?pg=Legacy+Broadcom&amp;pn=BCM70012;BCM70015). For OSX, the binaries and source code for the driver and library will be hosted at [google code](http://crystalhd-for-osx.googlecode.com). Users in the USA can purchase the Crystal HD mini PCIE card from [Logic Supply](https://www.onlogic.com/computers/?ls=1) for $69 at the time of this posting, and of course there’s always ebay for those outside the USA.

 