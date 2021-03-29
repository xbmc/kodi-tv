---
title: "Kodi goes Windows Store"
date: 2016-09-19T04:00:00Z
author: Martijn Kaijser
featured_image:
  src: /images/blog/Kodi-Windows-Store-Blog.webp
  title: "Kodi-Windows-Store-Blog"
  alt: "Kodi-Windows-Store-Blog"
---

With the release of Windows 10 Anniversary update, Microsoft announced its Desktop Bridge _(Project Centennial)_ feature which in theory should allow regular desktop applications to be converted to UWP-like store app without any real code changes. With the Desktop Bridge developers would gain easy access to the Windows Store, leading to easy distribution and several other bonuses such as access to the UWP APIs which could open up future improvements such as Live Notes and Tiles. Team Kodi looked at the development with a little disbelief. Due to Kodi’s code-complexity and the fact that we use hardware-acceleration for both audio and video playback we did not believe it would work for Kodi.

Not long after Microsoft made their announcement, a representative contacted us asking us if we were willing to be part of the Windows Store. They told us they had tried the Desktop Bridge converter with Kodi and had successfully converted the application. We were quite shocked that converting Kodi was this easy, and of course gladly accepted the cooperation Microsoft offered to get it done.

#### The process

We actively worked together with the Microsoft developers to further improve their Desktop App Converter and the process of using it. These improvements should make it easier for other developers to convert their applications in the future. We are very thankful for their help and are looking forward to a continued collaboration in the future.

The initial version Microsoft had converted was Kodi v16 and this worked straight out of the box. However, with development of v16 already almost stopped and v17 coming, we really wanted Kodi v17 to be the first version of Kodi to be available in the store. At first, we encountered several issues attempting to use the Desktop Bridge with Kodi v17. Desktop Bridge has some minor restrictions and with our big code cleanup we hit one of them. With the help of one of the Microsoft representatives and some Microsoft developers we were able to identify the problem and a few code changes later on our side, we were back in business again. When we later ran into an issue that we could not immediately solve, but Microsoft developers stepped in and gave us some helpful pointers.

All we had to do now was wait for the final launch date when this could made available for the wider public.

Note that converting an app with Desktop Bridge does not create a full UWP app. It will not be possible to run Kodi on anything else but a Windows 10 desktop computer or Surface. Getting Kodi running as a true UWP app would allow installation on other devices. This is currently still a dream as it requires quite a few changes before it would become a possibility.

Releasing Kodi on the Windows Store for desktop can be considered a first step in the right direction, and we will certainly try to get there eventually… making the circle back to the XBOX would complete our journey where it all started.

#### The benefits

What does it mean to have the app in the Windows Store? It is still the same Kodi version you are used to use, without any limitations. Although it is still possible (and always will be) to download and install Kodi from our website, it is now also possible for Windows 10 users to download and install Kodi from the Windows Store. This brings a few benefits, such as automatic updating. The Windows Store application uses the same _userdata_ as the version from our website so you can switch between the two versions without issues.  
 NOTE: This also means that if you are currently running Kodi v16 and want to try out the Windows Store version, your Kodi databases and add-ons will be upgraded to the v17 versions. You might want to make a backup of the userdata before!

For the Kodi developers the added benefit of the Windows Store version is that it will be possible for us to get some crash logs statistics from the Windows Store. This enables us to see what kind of crashes our users are experiencing, making it possible to correlate errors and focus our development effort.

#### How to get it

Well obviously in the Windows Store and search for Kodi! Or you can click this [link](https://www.microsoft.com/p/kodi/9nblggh4t892?cid=koditvlink) and go straight to the store page itself. Yes it’s still **free** as we will never ask for money.

[![Kodi Windows Store page](/images/blog/Kodi-v17-Windows-store-page-800x433.webp)](/images/blog/Kodi-v17-Windows-store-page.webp)

For now we have added our **Kodi v17 beta 2** to the store and will continue updating it till the final release comes. Afterwards we will just stick to final releases so you don’t need to worry about getting potential unstable builds afterwards. For those who don’t use the store you can still download the Windows version of Kodi from our official [download page](/download).

Don’t forget we also have some official tablet/phone remote controls for both Android and iOS which you can use to control every Kodi version in your home. You can find the links to them on the [download page](/download).

### Donations or getting involved

Getting involved is quite easy. Simply take the plunge and start using these 17.0 Krypton builds. If you use these builds, we encourage you to report problems with these builds on our forum first and after that, if asked, submit bugs on Trac (following this guide: [How to submit a bug report](https://kodi.wiki/view/HOW-TO:Submit_a_bug_report)). Do note that we need detailed information so we can investigate the issue. We also appreciate providing support in our [Forums](https://forum.kodi.tv/ "Kodi Forums") where you can. You can of course also follow or help promote Kodi on all available social networks. Read more on the [get involved](/get-involved) page.

We are always happy to receive a [donation](/contribute/donate "Donate") by which you show your support and appreciation, and t-shirts and Raspberry Pi cases may still be found on the sidebar for purchase. All donations and other income goes towards the XBMC foundation and are typically used for travel to attend conferences, any necessary paperwork and legal fees, purchasing necessary hardware and licenses for developers and hopefully the yearly XBMC Foundation Developers Conference.
