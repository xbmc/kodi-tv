---
title: 'Pbuilder or How to Compile XBMC on a chroot system.'
date: 2008-09-30T04:00:00Z
author: Team XBMC
featured_image: ""
---
As a XBMC developer and as XBMC is now supported on multiple Ubuntu version (feisty, gutsy, hardy and Intrepid), you might sometimes want to compile on another system than the one you are running on. This article is to help you doing that without reinstalling your whole system.  
  
 For this you will use Pbuilder. You might want to follow the documentation on this website : <http://www.netfort.gr.jp/~dancer/software/pbuilder-doc/pbuilder-doc.html>

 Here I will not explain everything, I will tell you the command to use and the files to modify to be fast. All the steps described here are on an Ubuntu Hardy system.

 First you need to install **pbuilder** :

 sudo apt-get install pbuilder

 Edit the pbuilder configuration file (**/etc/pbuilderrc**). The file is documented. The most interesting vars are :

 BASETGZ BUILDRESULT BUILDPLACE MIRRORSITE COMPONENTS APTCACHECopy the script in **/usr/share/doc/pbuilder/examples/pbuilder-distribution.sh** to **/usr/local/bin/pbuilder-intrepid**  
  
sudo cp /usr/share/doc/pbuilder/examples/pbuilder-distribution.sh /usr/local/bin/pbuilder-intrepid

 Then open the pbuilder script you just copied :

 sudo editor /usr/local/bin/pbuilder-intrepid

 and set the following parameter to a path were you have enough space to host your chroot system :  
  
BASE\_DIR="/my/directory/pbuilder"

 Then create your system, pbuilder will download the packages and tar.gz them:

 pbuilder-intrepid create  


 That’s all, pbuilder is set up. To login in you chrooted system, use

 pbuilder-intrepid login

 To exit, use :

 exit

 