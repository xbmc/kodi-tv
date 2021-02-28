---
title: 'Upgrade System from XBMC Live?'
date: 2009-03-02T03:00:00Z
author: Team XBMC
---
Have you ever wanted to upgrade your system from your couch, not being forced to SSH in on your XBMC Live and do the long whinded sudo apt-get update && sudo apt-get upgrade process?  
 I have, and finally after some troublesome python learning I finally made a script that does just this!

 Basically you choose the script ‘[Aptitude](https://en.wikipedia.org/wiki/Aptitude)‘ from the script section and it will download, install and configure your system. The magic of aptitude in Ubuntu is a wonderfull thing.  
 Even if most people that have used Ubuntu for a while might know what Im talking about but the newer users of XBMC Live might not be familiar with this.

 Basically Aptitude is the packagemanager of the OS we use in XBMC Live, it can look like the Windows Update on a fast lookover but aptitude is so much more. It handles all applications and you never need to go out and hunt your applications latest versions of the installers. In aptitude you don´t even need to go out and install the different helper libraries you sometimes have to do with windows, ever needed to download dotNet?

 Aptitude will download, install and configure this for you. It will even tell you when a new version is out! We haven´t had this feature in XBMC live and the users have been forced to drop to terminal to do this maintenence, even though its somewhat doable it is still not even close to the feeling of a home appliance.

 For those of you that want to install the script its located in the xbmc-additions, but its not that easy to install as of yet.  
 Basically as aptitude needs root privileges you need to allow this script (install.py) to be executed without asking for password. Hopefully XBMC we will add support for a script to call down the password dialog and then we could ask for the password making this script super easy to install.  
 EDIT: This is now fixed and latest svn of the script can do this

 When all the small issues are bug bashed (with help from users) this script will find its way into next XBMC Live release, and then users won´t need to think about how to install it.

 