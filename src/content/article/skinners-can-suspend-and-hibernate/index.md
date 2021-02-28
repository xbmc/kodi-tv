---
title: 'Skinners can suspend and hibernate!'
date: 2008-09-22T04:00:00Z
author: Team XBMC
---
Just wanted to make it aware to skinners (and people wanting to tweak keymap.xml) that it is possible since beta1 to controll power management through actions.  
 The usefull commands are:

 XBMC.Shutdown() – Will trigger your default behaviour (setup in settings -\> system)  
 XBMC.Quit() – Will quit XBMC  
 XBMC.Powerdown() – Will shutdown the system  
 XBMC.Suspend() – will suspend the system  
 XBMC.Hibernate() – Will hibernate the system

 So all the skinners out there, now go and make your skins suspend and hibernate compatible!

 disclaimer:

 On Xbox the XBMC.Shutdown() is not choosable and will always powerdown the system.

 On Xbox the XBMC.Quit() will do the same as XBMC.Dashboard() and both work the same throughout the plattforms.

 On Xbox neither of XBMC.Suspend() and XBMC.Hibernate() will work due to hardware limitations, although they are perfectly safe to use (just won’t happen anything).

 On the roadmap for atlantis+1 I will hopefully add XBMC.CanSuspend() XBMC.CanHibernate() and XBMC.CanPowerdown() so skinners don’t have to know which plattform can do what. Also to make it safe because it’s not a certain thing that all computer IRL can hibernate as it relies on HDD Space available.

 