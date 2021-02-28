---
title: 'FLIRC - a new (old) way to control XBMC'
date: 2012-04-14T04:00:00Z
author: Nathan Betzen
---
*In a continuation of the series begun with our write-up of the [USB-CEC adapter](https://kodi.wiki/natethomas/2011/11/01/the-usb-cec-adapter-is-a-look-into-the-future/ "USB-CEC Adapter review"), we would like to take the time today to highlight another adapter out there that makes controlling XBMC dramatically easier. This week, I’d like to introduce Chris (psuedo7 in the forum), who will be telling us a bit about the project FLIRC. I’d also like to invite any other software writers or manufacturers to contact me in the forums at username natethomas, if you have come up with a new and unique method for improving the usability of XBMC and would like to share your project.* 

 *Take it away, Chris.*

 Hello XBMC.org Readers,

 My name is Chris (or pseudo7 on the forums). I’ve been an XBMC user for about 3 years, firstly using my mac then using a shuttle box running Openelec (so I didn’t have to keep connecting/ disconnecting my MacBook Pro). I love XBMC: the application, the project and everything it envelops.

 **(Disclaimer – whilst I am “staff” (Read: a forum moderator) on the FLIRC forums I am not employed by Flirc and do not benefit directly, financially or otherwise, from the project I am about to discuss.)**

 I have recently come across a product which has enhanced my XBMC experience, and I wanted to give back to the community and share my findings about Flirc.

 Much like the previous [Pulse-Eight article](https://kodi.wiki/natethomas/2011/11/01/the-usb-cec-adapter-is-a-look-into-the-future/ "Pulse-Eight CEC-USB Adapter review"), my intention is to highlight what I think is a great product that many users may not have heard about that dramatically simplifies the process of building an XBMC htpc.

 What is Flirc?
--------------

 Flirc allows you to pair your same television remote to your computer with easy one-time setup software.

 Flirc is a small USB infra-red (I.R.) adapter that receives I.R. commands from a remote control.

 [![the_flirc_adapter](/sites/default/files/uploads/the_flirc_adapter.jpg "the_flirc_adapter")](/sites/default/files/uploads/the_flirc_adapter.jpg)

 However, Flirc is different from other I.R. adapters. Conventionally, I.R. adapters require the computer to understand I.R. commands, which is what LIRC is for. However, methods like LIRC require extensive knowledge should your remote control not be supported, which can be more frequent than expected. LIRC is not meant for the novice. (I am not trying to bad mouth the hard work on remote support by LIRC devs – just stating my opinion and experience.)

 That’s where Flirc steps in. Flirc is detected as a USB keyboard, eliminating the need for XBMC special drivers. Any media center application that supports a keyboard as an input device supports Flirc out of the box.

 Programming Flirc is easy to do, but ironically rather hard to explain so I’ve made a video:

  (Bonus points if you guess what the video playing in XBMC is.)

 Flirc has also made a video explaining the steps to [program the Flirc device](https://vimeo.com/12542134 "Flirc programming video").

 Flirc + XBMC = Happiness
------------------------

 XBMC has many great functions, and not being able to control those functions can be a huge kick in the teeth. You can access every XBMC user function using keyboard presses (which is not always the case with a standard LIRC controlled remote), so if your remote could do keyboard presses you would have loads more control.

 Flirc takes the I.R. signals from your regular old remote and sends those signals to the computer as keyboard presses… perfect non?

 Flirc supports nearly every remote (see the section on current Flirc limitations below) and XBMC supports nearly every platform. So Flirc aims to make your remote work with your XBMC install on any computer that supports USB keyboards. Flirc is even supported on the Xbox 360 after previously being paired with a computer running Windows, Linux, or OSX.

 Flirc can store 160 keys. The possibilities are great. For example, the off button on a remote could be mapped to the key combination Alt+F4. Thereafter, when you press the off button on the remote, Flirc will always send ALT+F4 to the computer.

 Who Makes Flirc?
----------------

 Flirc was set up by Jason Kotzin and his wife Maggie. It is a small company of which Jason is the only coder. For more about Flirc visit [https://flirc.tv/about\_us](https://flirc.tv/about_us "Flirc - About Us") or if you are in Europe or otherwise outside the US, you can visit the list of [Flirc distributors](https://flirc.tv/distributors). 

 Current Flirc Limitations
-------------------------

 All young projects have their niggles, and Flirc is no different.

 Unfortunately, MCE remotes, which are quite prevalent amongst XBMC users, don’t work as well as they should and are best avoided at the moment. At a very basic level (which is my understanding of it) MCE remotes emit non-standard I.R. frequencies (about 56Khz), with standard frequencies being 38Khz. For more in-depth discussion on this issue please visit [the MCE topic on the Flirc forum](http://forum.flirc.tv/index.php?/topic/9-double-key-presses/page__view__findpost__p__514 "MCE Remote discussion in the Flirc forum"). This issue is still being worked on, but new features for existing remotes are being added first.

 Conversely, remotes such as the Logitech Harmony series work very well with Flirc. Best results have been achieved by programming remotes profiles intended for TV’s onto your Harmony remote using a different brand than the TV the users actually has, so the TV doesn’t recognize the command intended for the htpc.

 The Golden Lining
-----------------

 A portion of every sale goes to the USC Cancer Research center that Jason’s oncologists leads and where Jason underwent chemotherapy. Every sale of Flirc results in a [donation to the charity](https://flirc.tv/fundraising "Flirc Charity"). Jason would like to report back to XBMC users how much they have contributed to the charity, so please use discount code “XBMC” (without quotes) when you purchase to allow him to track down XBMC purchases. You will get the same discount as any other default codes.

 Conclusion
----------

 Hopefully this write-up will help those building either their first htpcs or those growing frustrated with other remote control options.

 If you have any questions about Flirc, there is a [forum dedicated to it](http://forum.flirc.tv "Flirc Forums"). Post any requests, problems, or thanks there for friendly help (i’m Chris! on the forums there).

 Finally I would like to say thank you to everyone at XBMC especially the developers (apps, skins, plugins and programs). You really are awesome.

 *Thanks for the report Chris! And once again, if you have an interesting project that you believe makes XBMC better, and you’d like to highlight it, don’t hesitate to contact me at natethomas in the forums.*

 