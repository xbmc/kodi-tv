---
title: 'OSX Gets H.264 Acceleration'
date: 2010-05-02T04:00:00Z
author: Team XBMC
---
[![](/sites/default/files/uploads/Apple-Logo-101x101.png "Apple Logo")](/davilla/2010/05/03/osx-gets-h-264-accelleration/apple-logo-2)Apple has long been known to be tapping the GPU for accelerated video decode under OSX with their private applications such as iTunes or QuickTime player. Even with the AppleTV, there are there hints of some sort of CPU/GPU decoding deep down inside the private OS frameworks. The release of Snow Leopard (10.6) showed even more usage of the GPU for video decode and this was seen directly by the large reduction in CPU usage when playing video content using Apple’s players. But this magic API remained hidden and private, available only to Apple’s own applications.

 Fast forward to about two weeks ago and the big news was the Apple vs Adobe verbal fight about Flash. Adobe Flash has always been a CPU sucker on OSX, even for SD Flash video content and Apple made that point very clear. Then something mysterious happened. Very quietly, with zero fanfare, Apple posts [Technical Note TN2267](https://developer.apple.com/library/archive/) carrying the title “Video Decode Acceleration Framework Reference”. Holy Cow, the elusive accelerated video decode API just popped into the open. This API is called VDADecoder and is available on Mac models equipped with the NVIDIA GeForce 9400M, GeForce 320M or GeForce GT 330M running OSX 10.6.3. Here’s a list of supported models:

 
 * MacBook (Aluminum) shipped between October, 2008 and June, 2009.
 * MacBooks shipped after January 21st, 2009.
 * Mac Minis shipped after March 3rd, 2009.
 * MacBook Pros shipped after October 14th, 2008.
 * iMacs which shipped after the first quarter of 2009.
 
 We are very happy to announce that Apple’s new API (VDADecoder) for exposing GPU accelerated H.264 decoding under OSX 10.6.3 is present and fully functional in svn (r29729 and above) trunk builds of XBMC for Mac, and will appear in the next stable version. Now, non-CrystalHD equipped XBMC for Mac users can enjoy the pure pleasure of accelerated H.264 decoding that was enjoyed by XBMC for Linux (VDPAU/VAAPI/CrystalHD) and XBMC for Windows (DXVA/CrystalHD) users. The VDADecoder API will handle all H.264 video content including that in m2ts containers. The last bit is very important as it means accelerated video decoding of decrypted Bluray m2ts files that are in H.264 format. Bluray can be one of three formats, VC1, MPEG-2 and H.264, with about 75 percent being in H.264 format. There is no word yet on accelerated VC1 decoding but since VDADecoder interfaces to low level Nvidia VP3 functions which can handle H.264 AND VC1/MPEG-2 content, we might see VC1/MPEG-2 support added to VDADecoder API at later date.

 Also, while performance is fantastic with VDADecoder, there is still room for improvement. Running XBMC for Mac under Shark (Apple’s profiler) shows that about half of the CPU usage is now due to copying and converting the video frame from UYVY422 (VDADecoder’s native format) to YUV420P (XBMC’s internal format). Future work on the XBMC rendering path will allow passing decoded frames directly up to our renderer and thus skipping the copy/convert step. Stay tuned ![:)](/sites/default/files/uploads/icon_smile.gif)

 