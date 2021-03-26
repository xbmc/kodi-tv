---
title: 'Kodi "Leia" 18.9 Release'
date: 2020-10-23T03:00:00Z
author: Prof Yaffle
featured_image:
  src: /images/blog/Kodi_Splash_v18.9_Leia_Final_1080p.webp
  title: "Kodi 18.9 Splash Screen"
  alt: "Kodi 18.9 Splash Screen"
---

_Mutter, mutter... "18.8 will be the last", they said... "all efforts will go into 19.x now", they said... famous last words..._

Okay, one more roll of the "Leia" die, although this one is really driven by circumstances beyond our control. Technical changes by Cloudflare caused significant issues with HTTP access to any site using them - metadata sources, for example - and we need to put in a quick workaround before everyone gets too upset; while 19.x "Matrix" is close, it's not close enough to leave these issues unaddressed. So, as we're building that new code, we thought that we might as well fix a couple of other regressions while we're here.

With no further fanfare, then, here's what you've got in this release:

- Work around third-party changes to HTTP2 and SSL/encryption that impacted internet access from Kodi by scrapers, streaming addons, etc.
- Fix memory leaks in TexturePacker
- Fix event server unable to send raw key strikes
- Fix issues around directory navigation and incorrectly-set start directories
- Fix MediaCodec OES/EGL rendering

The full changelog can be found in our GitHub [milestone](https://github.com/xbmc/xbmc/compare/18.8-Leia...18.9-Leia) or you can read the merged PRs [here](https://github.com/xbmc/xbmc/pulls?q=is%3Apr+sort%3Aupdated-desc+milestone%3A%22Leia+18.9%22). If you want to read back on the full history of v18 itself, or of previous versions, you can find the corresponding articles in the relevant [blog posts](https://kodi.tv/tags/release-announcements).

Application deployment on different platforms - especially curated "app stores" - varies due to circumstances outside of our control. It may thus take a few more days to appear everywhere, so just hang on until it gets to you.
