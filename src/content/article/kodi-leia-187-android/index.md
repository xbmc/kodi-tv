---
title: 'Kodi "Leia" 18.7 on Android'
date: 2020-06-08T15:30:00Z
author: Prof Yaffle
featured_image:
  src: /images/blog/Android_Robot.png
  title: ''
  alt: ''
---
When we launched 18.7 across all platforms a couple of weeks ago, it became apparent that there were some problems on Android that wouldn't wait until a future point release to be fixed. These issues - regressions, specifically around micro-stutter and discontinuities on multi-chapter streams - came about because we'd re-introduced MediaCodec JNI over MediaCodec NDK to address scaling/aspect ratio issues that people were seeing on AFTV devices.

 As such, we immediately paused deployment through Google Play while we sorted things out. We fixed those in an 18.7.1 interim release, which we rolled out through the Android Play beta channel. However, this immediately revealed new problems: automatic feedback showed program exceptions when playing DRM-protected streams on incapable devices (due to the devices' DRM security level).

 To avoid segfaults, and thus Kodi termination, we again halted the beta rollout, and went back to work. We've now updated the code to handle exceptions identically to the previous NDK, but we've also fixed the aspect ratio issues we were seeing on AFTV - hopefully, the best of both worlds.

 So, with that done, we can start the roll-out once more with a new version of Kodi 18.7 just for Android (internally marked as 18.7.200). This will initially be rolled out on the Play store beta channel, and then - assuming no other glitches trip us up - it will then become the official, final "mass market" 18.7 for Android. It has no impact on other platforms.

 The beta APK is rolling out now, so should be pushed to registered beta testers. All going well, we'll then release it to a broader audience in due course with a general Play update, and it will, of course, also be available for download directly from the Kodi website.

 If you're interested in helping us to make the best media centre software there is, you can sign up to the beta programme [here](https://play.google.com/apps/testing/org.xbmc.kodi/).

 