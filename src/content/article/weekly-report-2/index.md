---
title: 'Weekly report 2'
date: 2010-06-06T04:00:00Z
tags:
  - Developer
author: Team XBMC
---
While I had exams last week there were some major work done with getting Ångström working as a development environment for XBMC, much thanks to the extremely helpful people over at #beagle!.

 The plans for next weeks will consist mostly of reading up on already created technologies as I won’t be near my development machine.

 Status

 
 * Thanks to, amongst many, koen from #beagle I finally got the Ångström distribution up and running and compiled XBMC. [Koen](https://dominion.thruhere.net/koen/cms/building-xbmc-natively-on-the-beagleboard) has provided a few patches necessary to get XBMC compilable and have added a few missing libraries to the repository.
 * [Narcissus](http://www.angstrom-distribution.org/narcissus/) image creator for Ångström have gotten a “Beagleboard GSoC 2010 XBMC build dependencies” as a development option to help others to easily create an image that can build XBMC. Its still missing some libraries which will get updated along the way.
 * While I have focused on Ångström for now since more mentors use it and is more supported Ubuntu seems to be working with the latest SGX which make it a viable fallback once again!
 * Branch created gsoc-2010-beagleboard
 
 Plan

 
 * Commit the patches needed to build XBMC on Ångström.
 * Read up on already created graphical libraries like EVAS how they solve buffered font and event based rendering.
 * Sketch up a proposal of buffered font.
 * Finalize the event based rendering proposal.
 
 Risks

 
 * No development environment will make it harder to create proposals.
 * The proposed event driven rendering will alter much of the internals of XBMC (more of a long term risk)
 * While buffering text seems viable we generally use text quite differently hence a one fit all solution might be hard to find. Examples of uses 
	 + “Streaming” text in inputfields and subtitles
	 + Small text labels
	 + Large scrolling text which might stretch beyond a texture limit. While it may not change much with the exception of scrolling, generate the text might take a significant time and would use a lot of memory. This might introduce lagg to the GUI or just take up to much memory. 
 
 