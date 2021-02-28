---
title: 'Kodi for the Xbox One'
date: 2017-12-28T23:42:53Z
author: Martijn Kaijser
featured_image:
  src: /images/blog/kodi-on-xbone.png
  title: ''
  alt: ''
---
Let us end the year 2017 with a blast including a nostalgic reference to the past. It has long been asked for by so many and now it finally happened. Kodi for Xbox One is available worldwide through Windows and Xbox Store and will only be released from Kodi v18 and onwards. Do note it's not finished yet and may contain missing features and bugs which will be mentioned later in this article.

 break #### The Past

 It was about 15 years ago that a group of like-minded developers released something that was called Xbox Media Player (full history can read be [here](https://en.wikipedia.org/wiki/Xbox_Media_Player)). Back then the Xbox was one of the most affordable devices that was based on the x86 architecture with TV-out, had an optical drive and relatively easy “hackable”. From there on it developed into the Xbox Media Center which was the baseline of what would become XBMC. At some point other platforms were added besides the Xbox and the project became larger and larger. The hardware scene continued to evolve and became cheaper and the once famous Xbox became kind of obsolete as the other platforms were easier to install XBMC on. As of 27 May 2010, it was announced by the XBMC developers that they would cease development for the original Xbox.

 It was thought by the team that getting Kodi (XBMC) running on newer Xbox versions would be wishful thinking and we would never see that happen anymore. As time passed by developers and users were happy running XBMC on their Linux, Windows, OSX, Raspberry-Pi and Android devices as such no one really looked back. Although jokingly for nostalgic reasons we talked about how fun it would be to get it running on the Xbox again. In the year 2014 we finally closed the door and renamed from XBMC to what we are now, Kodi.

 #### It started

 Suddenly (probably due to some strange cosmological alignment) Microsoft announced that it would start to align all devices towards a common Windows 10 platform. Our eyes started twitching and the team became anxious if that would mean the long-lived dream would become a reality again. Then we woke up again, shook our heads and convinced ourselves it was not going to happen as Kodi by that time was becoming too complex to port over. Even migrating the code over for regular Windows 10 devices to the so called Universal Windows Platform (UWP) was thought to be out of reach. Even the Desktop Bridge (Project Centennial) version for getting regular applications to the store was thought to be too difficult. On June 2016 we were proved wrong as we got contacted by developers who had succeeded with relative ease. With some minor adjustments we were able to get the 32-bit version of Kodi packaged and listed on Windows Store in September 2016. You can read more about that story here: [Kodi goes Windows Store](https://kodi.tv/article/kodi-goes-windows-store). With that milestone done we though that’s where the story ends.

 #### The long road ahead

 Until that time Kodi was still a 32-bit application and work slowly went on porting all needed parts to be 64-bit compliant. Now the UWP story really begins. While 64-bit work was being done, the dream of getting it as true UWP application did not fade away. In fact, with the help and guidance of Microsoft some of our developers started to work in top secret on getting this a reality. Only a select few of the team was informed that this was going on (same happened for the Android port) as we definitely would not get any hopes up in case it would fail. In December 2016 (yes you read that right) the initial reconnaissance was done on what it would take to get it done and it seemed plausible. Initial work that needed to be done was to convert most if not all external code libraries Kodi relies on and get these changes accepted by the original maintaining developer group(s). Once that work was started the current Windows specific code was picked apart piece by piece and slowly converted to be with the UWP specs. A really tedious job as part of the code still include “hacks” based on the first Xbox. As the work of the code libraries was nearing its end we could finally announce that the first 64-bit Kodi builds were available for windows. You can read more about that here: [64-bit Kodi for Windows](https://kodi.tv/article/kodi-v18-windows-64-bit-here).

 #### Let there be life

 Around July 2017 the first faint life signs became visible of starting Kodi as a UWP application on regular Windows 10. From there on work slowly progressed on getting all bits and pieces into place getting Kodi grown up and getting it ready for the Xbox. Somewhere around November 2017 the UWP code was merged into the master Kodi code base and final stages could begin. That also meant that the idea of Kodi running on the Xbox was full out in the open though somehow it remained under the radar. From there on we could easily create test builds that we could install on our Windows devices and continued to improve the UWP version to were we are today.

 #### How does it look?

 Well that’s the fun part about the Kodi environment. It actually looks all the same on any platform so the UWP version is no exception. Most bits and pieces, look and feel are there that you will find on any other platform. Sorry that we can not make it more exciting than that. It is what it is. Just another Kodi platform that looks exactly the same but only on a different device. So we will just redirect you to our about page here <https://kodi.tv/about>

 #### What are the current limits?

 What you should really understand and keep remembering is that it is still in early stages of development and has very rough edges, might not be as stable as the regular version and may even be missing some functions. Due to the nature of how UWP works our hands are tied in some areas. Some parts are not even finished yet and our developers are still working on getting it up to the regular standard. As of this writing there’s limited access to only what’s part of your Video and Music folders. Network support is limited to only NFS:// shares. No access to the Blu-ray drive to start the disc or even an attached storage drive (this one is now solved). There might still be problems with certain general python modules that are used by add-ons and we are finding and reporting them to the developers as testing progresses. I’m sure there’s more that might not work as intended yet as there are so many features it just will take a while to go over them. We cannot promise to what extend we can get every feature working as it all depends on what is available to us developers.

 #### Final words

 In short, we were aware from the beginning there would be limitations when the work started however that never kept us from realizing that dream of becoming once again available on the device that started it all. It almost feels like being reborn again. With this announcement and all the other work being done for the upcoming V18 release, the year 2018 is going to be amazing.

 We would certainly would like to thank the developers who helped and supported us through the entire process. First and foremost, afedchin who handled the UWP development from a certain point. Rechi and Paxxi for their assistance and support on getting the code libraries compiled and cleaned up as well their code reviews. Finally, the rest of Team Kodi and of course all you (forum) users who keep supporting us.

 #### Help and support

 For help and support you can visit the dedicated forum section for [Windows UWP](https://forum.kodi.tv/forumdisplay.php?fid=282). We have added some sticky threads with known issues and FAQ and will be updating those along the way.

  

  

 ##### Apparel, donations or getting involved

 Getting involved is quite easy. We encourage you to report problems with these builds on our forum first and after that, if asked, submit bugs on Trac (following this guide: [How to submit a bug report](https://kodi.wiki/view/HOW-TO:Submit_a_bug_report)). Do note that we need detailed information so we can investigate the issue. We also appreciate providing support in our [Forums](https://forum.kodi.tv/ "Kodi Forums") where you can. You can of course also follow or help promote Kodi on all available social networks. Read more on the [get involved](https://kodi.tv/get-involved) page. We are always happy to receive a [donation](https://kodi.tv/contribute/donate "Donate") by which you show your support and appreciation, and t-shirts and Raspberry Pi cases may still be found on the sidebar for purchase. All donations and other income goes towards the XBMC foundation and are typically used for travel to attend conferences, any necessary paperwork and legal fees, purchasing necessary hardware and licenses for developers and hopefully the yearly XBMC Foundation Developers Conference.

 