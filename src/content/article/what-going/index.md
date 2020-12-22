---
title: 'What’s going on?'
date: 2011-02-20T03:00:00Z
author: Cory
featured_image: ""
---
I promised an update a few weeks ago and here it is. Better late than never! There’s lots to discuss about what’s going on with XBMC development work. So how about this.. I’ll provide an overview as to what’s in the works, then respond to any questions/comments in a follow-up post. This information is aimed at our more technical users interested in the bleeding edge, so if you’re not interested in development, you may want to sit this one out. This is also a test-run for future posts. In the past, I have avoided writing technically as much as possible because it may not interest many of our readers. If there is a demand for more, we’ll make it a regular thing.  


 ### Git

 First up is our move to [git](https://en.wikipedia.org/wiki/Git_%28software%29). We said goodbye to SVN a few months ago and have experienced the pros and cons of a distributed vcs. Git can be challenging even for seasoned developers, but it brings many benefits. Here’s what we’ve seen so far:

 Pros

 
 * Distributed. We can work as we travel. Everyone has a clone, so it’s much easier to say “try my code!”
 * Branching/Merging. These are obvious to any git user.
 * [Github](https://github.com/xbmc/xbmc). The [pull requests](https://github.com/xbmc/xbmc/pulls) have proven to be excellent for discussing new features before merging them into mainline.
 * Code quality. Due to the above, we have been working hard to keep the master branch compiling on all platforms for each revision. Though git is a great tool, not magic..
 * git-svn. This provided many of us with a bridge to git.
 
 Cons

 
 * Git is hard. It has proven to be a big change for several of our developers, and has made us quite cranky at times. We’ve even decided that the committer who makes the biggest git-related oops will be presented with the first-annual “git-wtf” award at the next DevCon.
 * The distributed nature means that it can be difficult to get a quick overview of what’s happening. We each maintain repos and branches, then merge them in upon feature completion. As a result, there may be zero activity in the main repository for a few days, followed by large feature-complete merges.
 * Rebasing can be voodoo to inexperienced git users.
 * Not related to git specifically, but switching our VCS has been a big hassle. We have had to fixup our buildsystem on all platforms, trac, mailing lists, irc bots, buildbot, etc.
 
 ### Nightly Builds

 [Nightly builds](http://mirrors.xbmc.org/nightlies/) were a big hit during the Dharma development phase, and proved to be very helpful for debugging. The move to git has slowed us down, but nightly builds started back up last night. Windows and OSX are up and running, our Ubuntu PPA will be up soon.

 ### Restructuring

 As with each major version, we’ve taken the opportunity to clean up old code, refactor for easier development, and abstract away as much as possible. The first big move was a “code reshuffle” by cptspiff, and it was a huge step towards cleaning things up. As a result, the classes and includes have undergone a major cleaning, and files have been moved to sane locations. One of the main goals was to separate our code from that of upstream libs, which had become tangled into a nasty mess over the years. This should help us move towards inclusion into Linux repositories, among other things.

 OSX and Windows have undergone similar restructuring. The goal for these platforms has been to get away from keeping pre-built binaries in our repository, and to build them natively instead. This can be tricky, especially for unixy libraries in windows. Kudos to WiSo, CrystalP, and the others for getting ffmpeg built as part of the XBMC compile.

 Jcarroll has recently been working to clean up some of our global variables. This is pretty transparent to users, though some Linux users may notice that the annoying “Critical Section” messages are no longer spamming their consoles. In addition, he is working to make external python default for all platforms so that we can finally stop building the ancient 2.4 with each compile!

 ### New Stuff

 Anssi has bumped FFmpeg to a more recent snapshot. For the most part, this means playback bugfixes and new format support, but in this case we were also able to trim a few dependencies: liba52, libdts, and libmms are no longer with us.

 FneuFneu has submitted a pull request that provides FreeBSD support. This will surely undergo a few rounds of review, but should be merged in soon enough. This should make XBMC appeal to yet another audience.

 Jmarshall has several projects going. With the iPad announcement, we have a new audience of touchscreen users. He’s working to make the experience better by providing skinners with a new set of touchscreen tools. The first bit was committed last night, it adds a touch-friendly slider during movie playback.

 In addition, he has a “files-in-library” branch going that will lead us an overdue refresh of how the library works. Suffice it to say, the goal is to unify the File/Library views so that navigating is much more intuitive. From the work done so far, it is shaping up to be incredible. I hesitate to mention it here because it is likely to cause plenty of confusion, but we’ll discuss it more as there is more to see.

 Gnif continues his development on his new AudioEngine, a complete rewrite of our audio system that solves many problems at once. This is mainly waiting on the OSX portion and testing.

 Dushmaniac and several others continue their work on the PVR interface while the other piece of the puzzle, cptspiff’s binary add-on work, continues as well.

 ### iDevice/aTV2

 Davilla, Amet, Gimli, and others continue to work tirelessly on these ports. A quick update (10.0-7) was released on Feb 19 featuring:

 
 * Faster picture loads
 * Improved rendering speed
 * Remote thumbnail fixes
 * More flexible h.264 playback
 * Disabled portrait mode (while this is a cool feature, it was more annoying than anything)
 * Enabled ZeroConf
 * Updated Samba
 
 A special thanks for Memphiz for working out several bugs lately.

 This will be the last release for a while. They will now focus on integrating the port into mainline code.

 ### Dharma 10.1

 We have been working on a bugfix release for Dharma, due out very soon. The main reason for this release is a bug that keeps us from updating skins on the official repository. In Windows, if a new version for the current skin is released and automatic updates are on (default), XBMC will fail to load the update, leaving users in skin-limbo. Ouch. This has since been fixed. You can follow the merge request [here](https://github.com/xbmc/xbmc/pull/41). Only packaging is holding up this release.

 ### Statistics

 We’ve begun tallying add-on statistics so that we can display download counts, popularity, etc in XBMC. The numbers are VERY impressive. Next up is a post with some details.

 