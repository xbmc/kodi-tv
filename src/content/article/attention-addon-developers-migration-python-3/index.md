---
title: 'Attention to Addon Developers: Migration to Python 3!'
date: 2018-01-25T23:55:34Z
author: Roman Miroshnychenko
featured_image:
  src: /images/blog/kplusp.png
  title: ''
  alt: ''
---
Currently, Kodi includes the Python 2.7 interpreter to run addons written in [Python](https://www.python.org/) programming language. However, Python 3 was released almost 10 years ago and the matter of implementing the Python 3 interpreter in Kodi has been brought up on the Kodi forum several times. Now, thanks to a successful [GSOC 2017 project](https://kodi.tv/article/gsoc-2017-update-python3-update), we have a working Python 3.6 interpreter for Kodi, and on the latest [DevCon 2017 in Prague](https://kodi.tv/article/devcon-2017-part-ii-day-two) Team Kodi decided that it’s time to move on and migrate Python addon subsystem to Python 3. 

 breakThere are several reasons for that:

 
 *  [Python 2 End of Life is planned for 2020](https://pythonclock.org/).

 
 *  Python 3 is mature enough and more and more Python libraries either convert their codebase to Python 3-compatible or drop Python 2 support completely ([Django](https://www.djangoproject.com/) is the most notable example).

 
 *  Most current Python books, tutorials and courses are focused on Python 3.

 
 *  Python 2 is not actively developed. It receives only security patches while Python 3 gets all the cool new features with every minor version.

 
 
 However, Python 3 is not backward-compatible with the 2nd version so some transition process is required. Currently the plan is the following:

 
 *  Kodi 19 (M*) will be released with Python 3 interpreter for running Python-based addons.

 
 *  After the release of Kodi 18 (Leia) only addons that are compatible with both Python 2 and 3 will be accepted to the official addon repository. Also, Python 3-only addons will be accepted to the repositories for Kodi 19 (M*) and above.

 
 *  Addon developers are encouraged to convert their addons to Python 2/3-compatible so that after the release of Kodi 19 (M*) we will have enough addons that work with the new version.

 
 *  Test builds based on Kodi 18 with the Python 3 interpreter will be provided so addon developers can test their addons for compatibility with Python 3. Test builds for Windows are already available for downloading from [here](http://mirrors.xbmc.org/test-builds/windows/win32/) and test builds for Ubuntu can be obtained from [this PPA](https://launchpad.net/~wsnipex/+archive/ubuntu/kodi-python3/).

 
 
 This is the preliminary plan that may be changed depending on various circumstances.

 Writing Python code that is compatible with both 2 and 3 versions is totally possible and the “big” Python world has been doing it for years since the release of Python 3.0. There are a number of tools and best practices developed to simplify this process. Please read [this Kodi Wiki article](https://kodi.wiki/view/General_information_about_migration_to_Python_3) for more information and technical details about the migration process. Also [a special Wiki section has been created](https://kodi.wiki/view/Migration_to_Python_3) that will be updated with new information. You can post questions about converting your addon code to Python 3-compatible or share your experience in “[Python 3 migration](https://forum.kodi.tv/forumdisplay.php?fid=281)” subforum on the official Kodi forum.

 