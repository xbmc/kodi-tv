---
title: "Kodi v18: Windows 64-bit is here"
date: 2017-06-03T00:11:30Z
author: Martijn Kaijser
featured_image:
  src: /images/blog/Kodi-Wallpaper-35C-1080p_samfisher.webp
  title: "Kodi-Wallpaper-35C-1080p_samfisher"
  alt: "Kodi-Wallpaper-35C-1080p_samfisher"
---

**UPDATE: 27 December 2017**  
 The 64-bit Kodi version for Windows is now feature complete and on same level as 32-bit. From now on the 32-bit installer will include a warning to ask you to install the 64-bit instead. This upgrade from 32-bit to 64-bit version is seamless and you just need to install on top of the old version. Below is the original article.

After years of work we can finally announce that Kodi v18 will be available as full 64-bit Windows application. This means we run 64-bit on all capable platforms which is quite the achievement.

#### What took you so long?

You have to understand that Kodi is a very complicated piece of software and there wasn’t a simple switch to say give me 64-bit. Since 2012 users have been asking for a 64-bit version as it was supposed to be a lot better. Over the years there has been no obvious proof that switching to 64-bit actually had any benefits for the Kodi application. In the meantime other platforms like Linux, OSX and even Android did move onward and received a 64-bit version. Only the past year or two we have slowly been seeing benefits with all the new video formats coming out and the increased development support for FFmpeg which is at the core of our audio and video playback. So then what hold you guys back so long is what you might ask? This answer is actually quite complicated and has to do with things like how we compile the code and the external code libraries available.

#### The work needed

Since we originated on the XBOX we had a lot of legacy code related to Windows which wasn’t there for other platforms. Code was scattered everywhere and tied together in the most impossible ways. Slowly we started to clean up our build system and the core code that would make it possible to have a 64-bit version. Over time other platforms did add 64-bit support as the way we build them is totally different. Their main advantage point was how the external libraries that were used were built as it was almost as easy as just set compile to 64-bit. On Windows however we had to rely on the external library teams to provide such 64-bit versions and sadly almost none were available.

During past years several of our team tried to improve this situation and started to work getting those libraries updated to be 64-bit compilable and compilable. This is a huge undertaking as some were simple never intended to be anything else than 32-bit. Slowly but steadily the work progressed and after currently having ported **31** !!! external libraries to 64-bit we are finally in a state that Kodi is usable and near feature complete. There are still some missing packages and add-ons but we hope that those get done quite soon to have it on par with Kodi as you already know.

To start using this Windows 64-bit version is nothing more than downloading the 64-bit installer and install it on top of your current Kodi version.

We would like to thank karlson2k who started this work and Paxxi and Rechi who finished the job and got Windows 64-bit a reality. Of course let’s not forget everyone else who helped getting this a reality or contributed to development.

#### What about UWP

You might wonder where the UWP version is that a lot of you are longing for so they can run it on their XBOX One? All we can say is that it is being worked on and work is slowly progressing. Getting Kodi running as 64-bit is actually a big step towards UWP because it involved the same external libraries issue that needed to be solved and compiled. However on top of that we have to change or remove over 800 function calls that are not permitted or unavailable and those need to be solved for having a functional application. So for now there's no UWP yet. Should this change we will be the first to let you know.

#### Where can I download Kodi?

As alway you can find the official builds on our [download page](https://kodi.tv/download). Then click on the platform of choice and choose _development build_. You can install these builds just on top of your current Kodi installation without doing a reinstall or cleanup as we do a full migration if needed. Be carefull though because it is still early in development and some unwanted side affects might come up. Some examples are incompatible skins or certain add-ons will not work properly.

#### Bug reports

Please report any problems on our forum [http://forum.kodi.tv](https://forum.kodi.tv/) in the appropriate support section. Don’t forget we also have some official tablet/phone remote controls for both Android and iOS. You can find the links to them on the download page.

##### Apparel, donations or getting involved

[![](/images/blog/kodi-black-on-black.webp)](https://teespring.com/stores/kodi-t-shirt-store)With Kodi 18 having a galaxy far away theme to it, we decided to take inspiration from the baddest of baddies with this shirt. Vader pioneered black on black. We figured we'd follow his lead. You of course also order other shirt in our [shop](https://kodi.tv/store).

Getting involved is quite easy. We encourage you to report problems with these builds on our forum first and after that, if asked, submit bugs on Trac (following this guide: [How to submit a bug report](https://kodi.wiki/view/HOW-TO:Submit_a_bug_report)). Do note that we need detailed information so we can investigate the issue. We also appreciate providing support in our [Forums](https://forum.kodi.tv/ "Kodi Forums") where you can. You can of course also follow or help promote Kodi on all available social networks. Read more on the [get involved](https://kodi.tv/get-involved) page. We are always happy to receive a [donation](https://kodi.tv/contribute/donate "Donate") by which you show your support and appreciation, and t-shirts and Raspberry Pi cases may still be found on the sidebar for purchase. All donations and other income goes towards the XBMC foundation and are typically used for travel to attend conferences, any necessary paperwork and legal fees, purchasing necessary hardware and licenses for developers and hopefully the yearly XBMC Foundation Developers Conference.
