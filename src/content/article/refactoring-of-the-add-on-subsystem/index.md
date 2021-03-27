---
title: Refactoring of the Add-on Subsystem
date: 2021-01-03T00:52:00.000Z
author: Frank H.
tags:
  - Developer
featured_image:
  src: /images/blog/olav-ahrens-rotne-jvBXiynINGE-unsplash.webp
  title: "Rubik's Cube: Photo by Olav Ahrens Røtne on Unsplash"
  alt: "Rubik's Cube: Photo by Olav Ahrens Røtne on Unsplash"
---

Hey everybody,

In June 2020 some suggestions on improvements to our add-on system were suggested by Matt Huisman and some minor changes were implemented. Who knew at the time but this turned into much more work both cleaning up the current add-on system and adding numerous new features. The main goal of this became to improve the add-on user experience and add security features in order to prevent add-ons and repositories from being misused by bad actors.

The main problems were founded in the initial design of the add-on system, which doesn't distinguish between official and third-party repositories. This allows a mixup of installing and updating add-ons based only on their version information, regardless of their origin.

In order to tackle these issues and make the add-on system more robust as a whole, the following cornerstone changes were implemented to the add-on subsystem:

- The official Kodi add-on repository and its origin - kodi.tv-mirrors - are now defined as such. This repository contains all add-ons approved by Team Kodi.
- Proper update rule restrictions were set up, which means official versions will be preferred during update over non official. Additionally add-ons are now bound to their origin to stop cross-updating and mixing of official and third-party add-ons.
- Add-ons now stick to their origin for automated updates - this means the end user still has the freedom to choose between official or third-party add-on, they'd like to use, but updates will no longer switch from official to third-party and vice versa based solely on the highest version number.
- Add-ons that do not originate from a repository (e.g. zip- or manually installed) will no longer receive updates. I.e. they will be pinned (Add-ons from an official repo are an exception to this rule).
- General improvement of pinning mechanisms. Add-ons downgraded to a lower version within their origin don't get auto updated until they're switched back to their latest version.
- Improved migration process - add-ons marked as incompatible during migration can be auto updated on the next Kodi startup.

The subsystem work allowed the following GUI changes to be implemented:

- You can now see the origin of add-ons and their pinning status (especially use in the All Repositories view).
- You can see whether or not an add-on was (or will be) installed from a repo (and if that repo was official) in all views.
- You can see if an add-on was installed from zip or is a system add-on in all views.
- Many other UI consistency fixes around add-ons.

Lastly there were many, so many long time bugs and inconsistencies that came to the surface while doing this work, and all these that we know about so far have been fixed. In the end, the user experience of the add-on system shouldn't change too much, but should be a more enjoyable overall.

Here are some of the things we would like to tackle in V20:

- Signing of add-ons: the ability to identify an author across multiple repos. This enables things like trusted beta repos etc. Call for volunteers on this one, we don’t have any in team experience on cross platform signing!
- Sandboxing of binary add-ons: Prevent binary add-ons from crashing Kodi
- Navigating add-ons: Better tagging, and searching of add-ons.

Cheers,

phunkyfish & frank (howie)
