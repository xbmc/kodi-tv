---
title: "Update Grab-bag"
date: 2012-04-24T04:00:00Z
author: Nathan Betzen
---

There is lots going on in XBMC-land, so now seems like a good time for an update on all fronts. I’d like to touch quickly on several areas, there are sure to be some follow-ups coming soon.

### We’ve been busy

This was mentioned a few weeks ago on the forum but was never brought up here: In a recent presentation to the Linux Foundation, XBMC was listed in the top 50 live projects (gleaned from [Openhub’s](https://www.openhub.net/) statistics). It is truly an honor to be among the others [in that list](/sites/default/files/uploads/opensource_top50.webp)!

### Releases

We have struggled in the past to put out timely releases, because it’s hard to get everyone to quit adding new features long enough to freeze for testing and go through the release motions. To counter that we have borrowed a page from the Linux kernel’s development flow, and added our own touches. We consider this an experiment and we’re not sure if this will be what we settle on going forward, but it’s certainly a start in the right direction. Here’s how it works:

For each major release, we will have monthly merge windows. For roughly a week we will furiously merge in the approved features that have been queued up in the form of pull requests at [Github](https://github.com/xbmc/xbmc). That leaves the rest of the month for testing and bug-fixing. Then we’re back to a fun new merge window. After a few of these cycles, we will do a hard freeze and enter the Beta/RC stage, followed by release. The hope is that we can move away from a model of constant code-churn to one broken into chunks of stable/unstable periods.

So there it is in its theoretical glory. There are still lots of details to work out, but so far it has been working well. Having features queued up gives us a more clear way to discuss what is going in, and for users to know what to expect. For now, we are using [issues](https://github.com/xbmc/xbmc/issues) at github to manage milestones as it provides a nice interface for discussion (and even a shiny green ‘merge’ button). It will take a few of these merge windows for us to get a feel for things, and from there we’ll begin charting out the Frodo release schedule.

### Nightlies

As the April merge window is closed and things have settled down, nightly builds have resumed. It remains to be seen if it will make sense to host nightly builds during the chaotic merge windows.

A few things are up in the air for the Ubuntu PPA, since we have now been accepted into the official repositories. We want to be sure that nightly users have seamless transitions to official releases if they choose, so unstable PPA builds are still on hold. Also, due to some issues with iOS5, ios/atv2 nightly builds are on hold as well.

### GSOC

We have 4 students participating in GSOC this year! Congratulations (and thanks) to Tobias Arrskog, Sascha Montellese, Andres Mejia, and Alasdair Campbell. We’ll certainly dedicate a post in the next few days to their projects, for now their proposals can be seen on the clunky [GSOC Page](https://www.google-melange.com/archive/gsoc/2012).
