---
title: 'XBMC Audio goes HD'
date: 2012-05-29T04:00:00Z
author: Nathan Betzen
featured_image: /images/blog/hd-audio-announce.jpg
---
It’s been long-awaited, oft-discussed and it’s finally here – AudioEngine for XBMC!

 What is AudioEngine? A complete re-write of the core audio sub-system of XBMC, and a two-year project comprising some 22,000 lines of code.

 Spear-headed by lead-developer gnif, with contributions from many other team developers (dddamian, gimli, fneufneu, anssi, memphiz and others!), AudioEngine brings high-definition audio to the already amazing XBMC. No matter the audio source, AE handles the decoding, resampling, transcoding, encoding and streaming of your media, including for the first time DTS-MA, TrueHD and 24-bit audio. XBMC has never sounded better!

 With full floating-point audio pipes, even mp3’s sound audibly better, with dithering built-in to further reduce quantization noise.

 After a herculean effort and many lost evenings, the team is happy to announce that AudioEngine has been merged with the master branch as of May 15th 2012. As such, it is now possible for the team as a whole to participate in it’s further development and for users to enjoy via the nightlies or your own builds.

 **Features of AE include:**

 - *support for DTS-MA / Dolby TrueHD Bluray formats (OSX pending)*  
 - *support for 24-bit and floating-point audio at up to 384,000hz*  
 - *mixing of all streams including GUI sounds even when transcoding audio*  
 - *start-up enumeration of hardware audio devices and their capablities with log output*  
 - *bitstreaming support in PAPlayer (XBMC’s music player)*  
 - *upmixing of stereo to full channel layout*  
 - *tighter syncing of A/V streams*  
 - *floating-point processing of audio*  
 - *24-bit and floating-point decoding/handling of mp3*  
 - *full support for ReplayGain*  
 - *built-in sample-rate conversion and transcoding*

 **Planned Features for upcoming AE releases:**

 - *rules-based decisions for output formats based on hardware capabilites*  
 - *a range of DSP’s (digital signal processors) including headphone head-related transfer function processing, DRC (dynamic range compression), low-pass filtering for subs and an equalizer function*  
 - *custom channel-mixing/mapping for up and downmixing*

 It’s still early days for AE. Bugs will be found, and new and exciting features added. It’s stability and feature-set will develop as it matures and grows in the amazing open-source environment of XBMC. We’d especially like to thank all the testers who helped make it possible to bring this merge about.

 If you want to give it a try just grab one of the [nightly versions](https://kodi.wiki/view/Nightly_build) on one of XBMC’s mirrors. For further details and support links please visit the [AudioEngine page in our Wiki](https://kodi.wiki/view/AudioEngine) where you will also find links to the support threads in our forum, if you have additional questions. From the development team, enjoy!

 