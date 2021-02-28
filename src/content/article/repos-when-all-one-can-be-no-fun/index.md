---
title: 'Repos: When All-in-One Can Be No Fun.'
date: 2019-05-17T23:47:28Z
author: DarrenHill
featured_image:
  src: /images/blog/analogue-art-chest-366791.jpg
  title: ''
  alt: ''
---
**Repos: When All-in-one Can Be No Fun.**
-----------------------------------------

 For better or worse, one of the most powerful features of Kodi is the ability to extend its capabilities via addons. Key components in this are the repositories, or "repos" as they're more commonly known. They allow for quick and simple installation and upgrade of addons, but as with the whole topic they too have a darker and riskier side that many users do not consider. 

 Before we go into details of those risks, let's first set the background by considering what a repo actually is and what it enables. 

 As most users know, there are two main ways of expanding Kodi's functionality with addons - *install from zip* and *install from repo*. *Install from zip* does exactly what it says on the tin: it installs a given addon into Kodi using a zip file package that contains the addon code. That zip file may be either downloaded from the internet and transferred onto the device where Kodi is running, or it can be accessed directly over the internet via an added source (most commonly through the Kodi file manager). This route is mainly intended for addon development purposes, prior to release and inclusion in a repo.

 There are two main issues with this approach. The first problem is that the installation is then static. If the addon is updated or modified, Kodi won't know this and any updates will need to be manually installed by the user. The second issue, however, is the one most commonly encountered by users, in that any other addons or code that the original addon depends on (that it uses or references, and requires to be installed for it to run) will **not** be automatically installed. Thus, for the original addon to operate and not just generate log errors or crash, **all** of its dependencies, both the correct packages and the correct versions, need to be manually located and installed separately.

 ### **So, What's a Better Way?**

 Using a repo can solve both of these issues. A Kodi repo contains links to the current (and, commonly, also older) versions of the addon *plus* any required dependencies. So it acts as a "one stop shop" to install the given addon, with the bonus that it can be done via the Kodi GUI using the *Install from repo* option. With the exception of the official Kodi repo (which comes built into the Kodi core code), the only install from zip that is required is the original one to install the repo itself.

 The real power of the repo, though, is that when the addon author updates their addon and pushes that new version to the repo (whether the official one or their own third-party one which the user has installed), then Kodi will see that the update is available and can either offer the update or just update it automatically, depending on configuration. So, with minimal or even no user effort, addons can be quickly and easily maintained, and distributed, keeping all user devices up to date.

 ### **Sounds Great - What's the Catch?**

 That update functionality is where the potential risks come into play, however, especially for the common third party "all-in-one" repos (containing addons from multiple authors) that can be obtained from various internet sites and sources. Currently, if a newer version (with a higher version number) of a given addon is pushed to an installed repo, then the addon can be updated **regardless of which repo the addon originally came from**. Hence, if a malicious programmer pushes a new version of an addon (which may or may not be their own) to an installed repo, then **anyone** who had the original version will get the poisoned version installed onto their device instead. This is a obviously a very undesirable outcome and would lead to widespread issues if a popular addon were to be subverted.

 Another big issue with third-party repos is the fact the domain name might be abandoned and expire while users still have the repository installed. This could enable an attacker to later register that expired domain, effectively taking it over. They could then replace the existing addon content with malicious code. This exact scenario is a significant enough risk to have been covered in several security conferences last year, for example [this one](https://www.youtube.com/watch?v=c3RcJiZAigw).

 ### **If Only Someone Could *Do* Something...**

 There have been internal Team Kodi discussions on how to manage this risk, ranging from disallowing third-party repos completely, through to only allowing addons to update from their original repo, and on to the official stance of leaving things as they are as all of this should be the user's responsibility anyway. Another issue is that there are cases which complicate any such restrictions, such as the use of testing "beta" repos for unstable versions of addons either under construction or for adding new features. This most commonly applies to skins, but also when addon authors make early or "bleeding edge" versions of new or existing addons available for public testing using this method.

 In the case of the built-in official repo, each and every addon submitted to it is thoroughly reviewed, examined and tested by the repo maintainers (all Team Kodi members) to ensure it poses no risk to our user base. There are also limitations placed on addons - such as containing no pre-compiled, obfuscated or executable code ("binary blobs") - all to try and stop our addon update system becoming a distribution path for malware. For third-party repos though, no such checks are, of course, performed by the team. So for each repo to be installed, the user - that means you! - should consider where it has come from, and whether they trust the author or organisation that has supplied it. Ask yourself whether they maintain such diligence over what is included in the repos they provide.

 For cases such as the well-known individual addon author and their beta repos containing only their own work, the risks are often minimal. The "all-in-one" style repos, though, obviously offer a significantly higher risk of problems, especially for those that just seem to scrape any and all repos that they can access on the net, often without author agreement or consent. This is why many such repos are included on the Team Kodi [banned addons](https://kodi.wiki/view/Official:Forum_rules/Banned_add-ons) list, although their common inclusion of banned piracy addons would place them on the list anyway. It's also why Team Kodi offers no support for "builds" which pre-install addons or repos, as this is another common gateway to malware problems. And for those who may be under the illusion that this is just a hypothetical scenario, the stark reality is that such hijacking cases, "code flame wars" and distribution of malware-infected code have all actually occurred in the past using these exact methods. It is a genuine and real risk.

 Team Kodi and its members are working towards improving the addon/repository infrastructure. A lot of tools have been developed in the last few years. Some examples of this include:

 
 * [Kodi-addon-generator](https://github.com/xbmc/generator-kodi-addon) by [Razzeee](https://github.com/Razzeee) - simplified creation of new addons based around a standard requirements template.
 * [Kodistubs](https://github.com/romanvm/Kodistubs) by [romanvm](https://github.com/romanvm) - stubs for the Kodi Python API.
 * [Kodi-addon-submitter](https://github.com/xbmc/kodi-addon-submitter) also by [romanvm](https://github.com/romanvm) - simplify addon submissions to the repository via Travis.
 * [Addon-check](https://github.com/xbmc/addon-check) (initiated/mentored by [Razzeee](https://github.com/Razzeee) and implemented as a [GSOC 2018](https://summerofcode.withgoogle.com/archive/2018/projects/5036628556906496/) project) - check addons for known problems and deprecations.
 
 In conclusion, then: before you install any third-party addon, repo or build onto your Kodi device, pause and consider whether you really trust the source you're getting it from and any repercussions that may result from that install.

 