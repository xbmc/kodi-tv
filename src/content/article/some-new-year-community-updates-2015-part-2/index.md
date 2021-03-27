---
title: "Some New Year Community Updates 2015 (part 2)"
date: 2015-01-25T03:00:00Z
author: Martijn Kaijser
featured_image:
  src: /images/blog/adsp_02.webp
  title: "adsp_02"
  alt: "adsp_02"
---

Because we have so much great things lined up which we want to share, it’s time for a follow up on our previous [community update](/article/some-new-year-community-updates-2015). Don’t worry, we will do continues effort to further improve stability over just adding new features. We have a continues system running for building and detecting possible problem. Together with the builds we create each day, we hope that this effort will pay off and create the most seamless, powerful and easiest media center solution out there. Due to all the changes and improvements, possible problems may surface which were just dormant before. With your help and feedback on our nightly builds we can spot these in time before we start the path towards our next a final release.

For now let’s go through some of the things we have lined up so far without any possible promise when this will be available.

## Audio DSP processing system

One of the developers is working towards integrating ADSP (Audio Digital Signal Processing) into our Audio Engine. Like many of you might know, a lot of effort was put in getting our audio system towards one of the best out there and so far that worked out pretty well. Adding Audio DSP will open new doors and I’m sure high quality audio enthusiast will be thrilled.

Basically the audio data will undergo the following steps:

- 1.  Input processing – Unmodified input stream and is send to all enabled add-ons for detection and error correction
- 2.  Input re-sample – Re sample of the input signal for the master processing, only one add-on is allowed for it.
- 3.  Pre processing – Used for any steps before master processing. All enabled add-ons functions are called to make this.
- 4.  Master processing – The main processing like, surround up mix or sound modification processes. Only one from user over menu selectable mode is allowed. Add-ons can pass multiple selectable modes to Kodi. If input channel alignment on it is higher as requested output and the master mode does not perform a down mix it becomes handled from ffmpeg re sample after return of master function.
- 5.  Post processing – Used for any other steps like, volume correction, equalizer and much more. All enabled add-ons functions are called to make this.
- 6.  Output re-sample – Re sampling of the processing signal to KODI audio output processing.

This sounds all technical so let’s put this into some example screenshots to give you a better idea.

    [![adsp_01](/sites/default/files/uploads/adsp_01-300x157.webp)](/sites/default/files/uploads/adsp_01.webp) [![adsp_02](/sites/default/files/uploads/adsp_02-300x157.webp)](/sites/default/files/uploads/adsp_02.webp)   [![adsp_03](/sites/default/files/uploads/adsp_03-300x157.webp)](/sites/default/files/uploads/adsp_03.webp) [![adsp_04](/sites/default/files/uploads/adsp_04-300x157.webp)](/sites/default/files/uploads/adsp_04.webp)   [![adsp_05](/sites/default/files/uploads/adsp_05-300x157.webp)](/sites/default/files/uploads/adsp_05.webp) [![adsp_06](/sites/default/files/uploads/adsp_06-300x171.webp)](/sites/default/files/uploads/adsp_06.webp)    As you can see from the screenshot, this can give you some powerful option regarding audio processing and it will lift Kodi to a new level in the audio world. Currently we are not near the end stage yet and only a few add-ons are currently in the works. Never the less this sure looks promising.

## Radio RDS support

PVR currently supports listening to radio stations with tuning to the channel you want. With RDS (Radio Data System) it’s possible for PVR add-ons to extract the RDS data feed from the signal and integrate this into the Kodi user interface. Radio Data System (RDS) is a communications protocol standard for embedding small amounts of digital information in conventional FM radio broadcasts. RDS standardizes several types of information transmitted, including time, station identification and program information.

    [![rds_01](/sites/default/files/uploads/rds_01-300x168.webp)](/sites/default/files/uploads/rds_01.webp) [![rds_02](/sites/default/files/uploads/rds_02-300x168.webp)](/sites/default/files/uploads/rds_02.webp)   [![rsd_03](/sites/default/files/uploads/rsd_03-300x168.webp)](/sites/default/files/uploads/rsd_03.webp) [![rds_04](/sites/default/files/uploads/rds_04-300x168.webp)](/sites/default/files/uploads/rds_04.webp)    Headless mode

---

A headless system is a computer that operates without a monitor, graphical user interface (GUI) or peripheral devices, such as keyboard and mouse. We are all used to starting Kodi as you normally do and you get the normal interface, through which you can browse your library and watch a movie or listen to music. With headless mode you can start Kodi as a server in the background and let several other Kodi clients connect to it. This is of course already possible with our UPnP implementation. The exciting new part will be that you won’ t need a monitor to set this all up. All you would have to do is to install it on any supported device, use a web-interface to configure Kodi and ” never” look back. This would make Kodi a perfect candidate for installing it on any NAS, server, computer or device and let it act as your central storage and media library. This is still early work in progress as Kodi (past XBMC) was never designed to run like that and needs quite some changes for this to happen. If you are a experienced developer and want to help out on getting this into shape, feel free to visit the [forum thread](https://forum.kodi.tv/showthread.php?tid=212061).

# **Conclusion**

As you can see, we have lots of innovations in the pipeline and the majority come from user requests, ideas or user code submissions. So get involved on our [community forums](https://forum.kodi.tv/) and see how you can contribute to the future of the Kodi software! None of these features are integrated into Kodi yet. We do hope that we can start integrating these features in the very near future. However all this works relies on a small group and we are always short on C/C++ developers. Since we are fully Open Source and multi-platform, any one who wants can start coding and hopefully submit their work for integration.
