---
title: 'XBMC is growing up. Gains cool new services.'
date: 2010-01-07T03:00:00Z
author: Team XBMC
featured_image: ""
---
Remember a few weeks back when we announced our [new Bytemark server](/article/welcome-bytemark-hosting-sponsor)? Well, we’ve already put it to very good use. In addition to setting up the [buildbot](http://buildbot.net/) mentioned previously, we’ve also created an extremely versatile file repository for XBMC use. Over the past few months, we’ve worked with several university and ISP link admins to create an extensive mirror system all over the world — one that can be used for xbmc releases, nightly builds, skins, plugins… the list goes on.

 Before going any further, on behalf of the XBMC team and community, I would like to give my sincere thanks to all of the mirrors that have agreed to host us. At the moment, we’re up to 13 and still growing. I’m especially grateful to Neil Bright and Georgia Tech who have offered to be our master mirror. See the link at the end of this post for a full list.

   
[![](http://trac.buildbot.net/chrome/site/header-text-transparent.png)](http://buildbot.net/)  
 On to the good stuff! Firstly, I’d like to introduce Billy (our oh-so-clever nickname for the buildbot). You can check it out [here](http://buildbot.xbmc.org/), though it’s probably not of much interest to most users. The system consists of a master server that dishes out build instructions, and a series of slaves to carry them out. We are currently building standard configurations of XBMC for Linux, Windows, and OSX (x86 and ppc) on a nightly basis, though we also have the ability to kick off a build for any configuration and OS at any time. What a timesaver for us! The Linux ppas are still being hosted on launchpad, though this may change in the future. If you would like to contribute a buildslave, [drop us a line](https://kodi.wiki/about/contact/).

 [![](https://mirrorbrain.org/static/images/gehirn-181x100.png)](https://mirrorbrain.org/)The more interesting part for users is the mirror system that hosts these builds. For that we chose [Mirrorbrain](https://mirrorbrain.org/), which has been a delight to work with. Another big thank-you to Peter Poeml from the Mirrorbrain project, who is probably the most helpful developer I’ve ever encountered. This is a great piece of software that constantly checks the status of the mirrors and dishes out files based on certain criteria, in an effort to ensure that downloads work as quickly and reliably as possible. It also generates [Metalinks](http://www.metalinker.org/) which allow you to download from several mirrors at once!

 So where to find the new goodies? Head over to the new [mirrors page](http://mirrors.xbmc.org). Currently you’ll find official nightly builds. That’s right, for our bleeding-edge users and testers there is no longer any need to scour the forums for nightlies, now you can get them at blazing speeds directly from the source!

 By now you might be wondering if we plan to host addons here, and the answer is an unequivocal ‘yes’. I’ve already sent out messages to all of our skinners offering to host for them. This should eliminate the need for rapidshare and the other (annoying yet helpful) free file hosting sites. The mirror system is slated to be the backend for the official XBMC addon installer that is in the works though at this time there is no ETA for that, I’ll be sure to share when there’s something to show off.

 Thanks again to all the mirror admins and their respective universities and companies, you can see them below. A current list of the mirrors will always be available [here](http://mirrors.xbmc.org/list.html). Please [get in touch](https://kodi.wiki/about/contact/) with us if you would like to become an official mirror.

 
> Georgia Tech, HostEurope, NetCologne, SoftList.de, University of Mannheim, University of Granada, University of Seville, Institut Pierre Simon Laplace, The Computer Society at LU & LTH, Swedish University Computer Network, Oregon State University, Secsup.org, University of Idaho, AussieHQ, Optus, Rotterdam University
> 
>   Please be patient with us in the beginning. The new features are a work in progress and we’ll be adding to them often. There are bound to be a few kinks to work out now that the mirrors are public, so feel free to report any major issues in the [forum](https://forum.kodi.tv/forumdisplay.php?fid=35) and we’ll take a look as quickly as possible.

 Enjoy!

 **Update:** Dutch mirror added: Rotterdam University

 