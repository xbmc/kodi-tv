---
title: 'AC3 5.1 pass-through'
date: 2003-10-24T04:00:00Z
author: Team XBMC
---
After a looooong search monkeyh0 and i finally discovered how we can output encoded ac3.51 directly to the digital output of the xbox. this means great audio quality for ac3 5.1 encoded movies. currently ac3 5.1 streams get decoded by xbmc/xbmp and the 6 raw lpcm streams are given to the xbox hardware. the xbox hardware encodes this back to ac3 5.1 and outputs them on the digital output. the decoding/encoding process means quality is lost. with our new way we can transmit the encoded ac3 5.1 stream directly to the xbox digital output. no decoding/encoding is needed resulting in much better audio quality

 although things are highly experimental right (and thus buggy) right now, we wanted to share this information. you can try it yourself using the latest xbmc. make sure to enable ac3 passthru in settings-\>music and to enable dts/dd in the msdashboard, then select a movie with ac3 5.1 sound and …. voila

 frodo

 