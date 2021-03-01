---
title: 'Jenkins, servers and mirrors'
date: 2013-11-13T03:00:00Z
author: Martijn Kaijser
featured_image:
  src: /images/blog/server_racks.jpg
  title: 'server_racks'
  alt: 'server_racks'
---
Usually we only post interesting facts about XBMC itself on our website like our monthly version or actual releases. Maybe it’s time to tell you a little about the infrastructure that goes behind all this. Without all this there wouldn’t really be much of a website, XBMC builds, add-on repo and the ease of installing them.

 ### 

 As already very briefly mentioned [earlier this year](https://kodi.wiki/xbmc-server-update-scale-and-other-notes/) we had to split up several things as they where all hosted on a single server. This was due to the increasing load of visitors on our website, forum, wiki pages and in parallel our increasing xbmc test building and downloads. This new server (*called “srv1″*) now hosts only our forum, trac and the wiki pages. Our other server (*called “Babylon”*) hosts our forum and our new [add-on web](http://addons.xbmc.org/) page about which we will tell you more soon.

  

 ![jenkins_logo](/sites/default/files/uploads/jenkins_logo-300x96.png)We also want to present to you “Jenkins”. So who is Jenkins? Jenkins is an application that monitors executions of repeated jobs, such as building a software project or jobs running timely builds. In the beginning of 2013 we started replacing our old “[Billy the Buildbot](https://kodi.wiki/xbmc-is-growing-up-gains-cool-new-services/)” who had served us for many years and is still used for building our Frodo releases (and can soon retire after a well deserved service). We chose to replace it with Jenkins as it more fit our needs due to it’s versatility. Since the start of this year it has been churning out our Gotham nightly builds for our Windows, OSX, iOS and Android platform and placing it automatically on our server for download.

 [![jenkins_job_list](/sites/default/files/uploads/jenkins_job_list-300x131.jpg)](/sites/default/files/uploads/jenkins_job_list.jpg)This for the purpose to notice if any of the code merged broke building on one of our platform and for actually testing out the added code. Later in the year we added a new feature (which has proven to pay off) that we could first build every pull request (request to merge new code). This to see if the new code would actually build on all platforms before adding this new code to XBMC (as you can see in the image on the left). In the past this has happened this happened quite often and we would only notice the next day and devs had to fix it again.

 [![jenkins_build_queu](/sites/default/files/uploads/jenkins_build_queu-118x300.jpg)](/sites/default/files/uploads/jenkins_build_queu.jpg)So how does it work? Well to put it simple, we have one master which controls several build slaves. These slaves are the actually workers that create the XBMC installs that you download, install and use. Well to put it in simple terms we tell the master to build a certain XBMC revision and it then send the appropriate information to the slaves who then go to work. When finished they put it up for download on our mirror system. In reality of course it’s not that simple but we don’t want to bore you with that. It does however require several servers and machines to pull this off. For this we have an array of different sponsors who offered their services through providing the needed equipment. [*Bytemark*](www.bytemark.co.uk/r/xbmc) who has been providing the server for our old buildbot and is in addition is also our main download server *(called “Atlantis”)* has been kind enough to provide us with a new beast of a server *(called “Camelot”)* to crunch out our Windows and Android builds. Then we have several slaves for OSX/iOS builds sponsored by [Mythic Beasts](https://www.mythic-beasts.com/) and [MacMiniVault](https://www.macminivault.com/).

  

 ### 

 ### Mirrors and Mirrorbrain

 [![](https://mirrorbrain.org/static/images/gehirn-181x100.png)](https://mirrorbrain.org/)The more interesting part for users is the mirror system that hosts these builds. We have several large and smaller mirrors across the globe who all have a copy of our XBMC builds. This is to make sure not everyone across the world only downloads from our single server but actually downloads it from the servers nearest by. For actually distributing the downloads and making sure you will download from the best server available we have been using [Mirrorbrain](https://mirrorbrain.org/), which has been operating since 2010 and so far hasn’t failed us yet. This is a great piece of software that constantly checks the status of the mirrors and dishes out files based on certain criteria, in an effort to ensure that downloads work as quickly and reliably as possible. Besides these builds it also hosts all the add-on which you can find in our official XBMC.org repository.

 [![mirrormap_nov2013](/sites/default/files/uploads/mirrormap_nov2013-300x154.png)](/sites/default/files/uploads/mirrormap_nov2013.png)

 A list of all our current mirrors is located [here](http://mirrors.xbmc.org/list.html). As you can see in the list (and image below) we have a reasonable coverage across the globe but of course we always welcome more mirrors that are hosted by institutions, universities or companies who have a high speed connection.

  

  

 Gratitude
---------

 So we as a team would like to express our sincere gratitude to all these the companies and other open source projects for providing us the means to make our lives easier . Either in providing us the needed hardware and internet connections or by giving us the tools to do so. Not to forget the list of [mirrors](http://mirrors.xbmc.org/list.html) that are currently distributing our builds and add-ons across the globe.

 ### Technical details

 So here are our hardware specs for those who are interested. Fun fact is that we have named the servers after the old release names of XBMC. Due to the age and the increase usage load of the server on which Jenkins, Mirrorbrain and several other services run, we will hopefully be replacing it shortly with a shiny new one.

  

   [![logo](/sites/default/files/uploads/logo.gif)](https://www.bytemark.co.uk/?utm_source=xbmc%2F)

  

 **Atlantis** (going on retirement):  
 - AMD phenom II x4

 **Camelot:**  
 - HP Premium Server  
 - 2x Intel Xeon 5660  
 - 48GB RAM  
 - 8x 146GB 15kRPM HHD in RAID10

 **Dharma** (future)**:**  
 - AMD 2x Opteron 3250 (4 cores at 2.5GHz)  
 - 8GB RAM  
 - 2 × 1TB 7.2kRPM SATA discs

   [![logo](/sites/default/files/uploads/logo-300x54.png)](https://www.webhostingbuzz.com/)

  

 **srv1:**- Quad Intel Xeon E5506 2.13Ghz  
 - 8Gb Ram  
 - 700Gb HDD

 **Babylon**:  
 - Quad Intel Xeon E1230 3.2Ghz  
 - 32Gb Ram  
 - 1Tb HDD

    