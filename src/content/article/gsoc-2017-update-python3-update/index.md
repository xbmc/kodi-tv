---
title: 'GSOC 2017 Update - Python3 Update'
date: 2017-08-01T09:46:48Z
author: Nathan Betzen
featured_image:
  src: /images/blog/digital-388075_1280.jpg
  title: ''
  alt: ''
---
Next we have Arpit's work upgrading Kodi's add-on backend from Python2 to Python3

 Python3 Support - arpitn30
--------------------------

 My initial proposal was to support both Python2 and Python3 in Kodi by maintaining two versions of the same libraries and calling the required one depending upon the meta information in the XML files of the add-ons.

 JUNE
----

 During the first week of June, I was mostly understanding how everything was being built and what needs to be changed. I initially thought of updating the input to swig so that it can output python3, but I realised that Swig only changed the code to generic ML code which was given as an input to Groovy which with the help of Python Templates outputs Python code. So I cloned the Python templates directory and in the later weeks, I started to study and gradually change the python templates to that of Python3.  
  
Aside from the major unicode string change, Python 3 changed a lot of things at the base level that drastically affected the Python-C API which was used to build the templates. So I went through each and every function and decided if it should return a unicode object or a byte object. I changed all the Python API function names, the module initialization, the Py\_TPFLAGS, and changed the char data type in C to wchar data type. I also looked at all the data type which were being converted from C to Python and Python to C and inspected if any changes to data types in Python 3 like 'map' returning and iterable instead of lists and also changed the PyInt type which was no longer being used in Python3 API.

 During the mid of June, when I started working to support both versions of Python, I was told to test if my code supported was even working with Python3 or not. So I forked my current working branch into 2 branches, one to test if my Python3 templates work correctly (testpy3) and the other to support both Python 2 and 3 (build2n3) and was working on them simultaneously. I also updated the HttpNetworkHandlers to Python3.

 In Build2n3 branch, I changed paths of the Python libraries to the new Python3 directory, updated the Cmake files to download dependencies for both and keep them seperate.

 In testpy3 branch, my main focus was to run the environment with as minimal changes as possible. So I removed 2 python template directories and made python3 the main directory. I had to change all the cmake files though to the updated dependency structure. After all the kinks had been removed Kodi was able to run with Python3 at the end of Phase 1 but the add-ons weren't working yet.

 JULY
----

 The first thing I needed to do after the end of Phase 1 was to get the Python3 version of Kodi working, so that I could know if my code was working or not. The major trouble was that there wasn't any way to know the error except the for only Log Entry of PythonModules not found. I skimmed through each and every documentation to figure out the changes which were made and the difference between them.  
  
I found that the threads and GIL in Python3 are implemented differently than Python2. The acquirelock and releaselock functions are now deprecated and had to be changed with acquirethread which needed to have a saved state beforehand.

 But the problem about the threads was still not solved. After a lot of testing and help from Paxxi and Rechi, we were able to identify the problem which was due to the duplication of state of \_PyThreadState\_current by Kodi and Python Bindings which resulted in the thread state being lost mid execution and we solved the problem by changing the cmake file in templates and adding the python binding directly to the xbmc core library.

 After that, I started working on Build2n3 branch to apply the changes which were done in testpy3 branch and to figure out if it was possible to create two versions of libraries with the different implementation of threads even though it meant building Kodi twice while I was still looking into the ModuleNotFound error in the other branch which was still not resolved.

 So I started working on Build2n3 branch. The problem I was having was with the env variables like PythonLibs and Python\_include\_dirs which can be only set to one of the versions at a time so we had to unset the variables after they were used and set them to the python3 directory. 

 The main point now was if it was practical to go for a version that supports both Python 2 and 3 or skip a version and release just a python3 version whle giving the developers time to port. Changing a major amount of code just to support Python 2 and 3 only to revert it back to the current code one or two versions later seemed impractical if not impossible due to changing the implementation of handling of threads. Taking in account the time it took, just to find the bug and get just the Python3 version right, Razze asked me to focus on just Python3 version for now.

 So going back to testpy3 branch, after searching for several days, we found out that the function which initialized the modules did not add it to the built-in modules in Python3 which wasn't mentioned in most of the Python3 Porting guides. So we added statements to explicitly add it to built-in modules. And finally the ModuleNotFound error was gone.

 After fixing a few bugs like correcting the charset conversion to wchar, updating the execution script, Python 3 Kodi was finally working with the built-on Kodi libraries being perfectly imported. 

 In the next week, I checked the best way to make Kodi add-ons compatible with both versions of Python either by using \_\_future\_\_ packages or by using sys.major\_version condition and I decided to go with the latter. I also made the versioncheck addon compatible with Python3 and added a pr to it. The addon was working perfectly with current version of Kodi as well as the Python3 version of Kodi.

 Lastly, I decided to update the Python3 branch with the changes which were later made in the templates while working to support just Python3. So if we decide to go for a version to support both Python2 and 3, we can just fork from there. 

 I also added the PyFile function into Kodi itself thus removing the dependency on Py3c fileshim.h.

 I also tested the debug and release versions of Python3 Kodi on Windows 64 bit and it worked without any problems.

 **The Future**
--------------

 I've tested my code with Ubuntu using the natively installed packages and it seems to work. And after a few days, I've been able to build the master branch in Linux using the target packages only. I intend to finish updating the files for target version for Posix systems by the end of next week. I will port some of the add-ons to Python3 later on, and I need some time to clean up the code as well. Although I removed the commented code which I left behind from Python2, I still have to give it a final review before submitting my code. 

 