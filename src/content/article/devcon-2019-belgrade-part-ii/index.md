---
title: 'DevCon 2019 - Belgrade - Part II'
date: 2019-10-11T00:11:48Z
author: Prof Yaffle
featured_image:
  src: /images/blog/belgrade-clouds-fortress-33562.jpg
  title: ''
  alt: ''
---
Morning, all. It's a beautiful day here, and we're just waiting for the last few latecomers to arrive before another day of DevCon...

  

 We kicked off with **Python 3**, following on from yesterday's conversation. The general consensus was to get this merged and live with any minor breakage - we need to get this done, and can't wait for absolutely every add-on to be updated before we merge. This shouldn't be a surprise to anyone, after all.

 The conversation then quickly shifted to **sarbes** talking about features that would make life much **easier from a Python developer's perspective**. These are really around how the core code handles items, lists and displays, and how this could be modified to improve the user experience (e.g. pagination of long lists). The obvious affect is on lists of Internet content, but it would also improve PVR/EPG display, searching, and others. Similarly, allowing add-ons to specify viewtypes or just know more about what views the user prefers would make things more consistent and usable. Other ideas included subtitle support for use within add-ons, and some kind of URI mechanism so an add-on could transfer a path from one Kodi instance to another - this would allow you to move playback from your 'phone to the TV, for example.

 Next up, **jimcaroll** stepped up to talk about **Codegenerator**, which is a core part of Kodi's Python (and, in theory, other scripting language) API, auto-generating the C++ API code as required. The main purpose of this is to reduce code size and improve maintainability, but it could potentially scale to give a more flexible, standardised approach to supporting multiple different types of external module. Only a concept, but that would open up huge possibilities for add-ons in C#, JavaScript, Groovy and many others, bringing very different functionality, security models, and scope.

 This was followed by an update on **tvOS** by **kambala** and **fuzzard**. Much of the Apple-specific code has been floating around for a while in various forks and branches, so this is a more concerted effort to bring it all back together, update and augment it to form a complete package for the Apple TV 4. Still a work in progress, but getting closer.

 Next up, **lrusak** took the stage to lead a session on how **platform specifics can block or delay overall development** - for example, when a pull request affects all platforms but there's some obscure issue on one particular operating system. Older versions of operating systems may come with different libraries or different development toolchains; different platforms might diverge totally or even miss out components that are business-as-usual on everything else; API calls can behave slightly differently even when they shouldn't.

 So, should we hold everything back because of one platform? Should we hold back all platforms because, say, an older but still maintained (e.g. LTS) OS release can't support some aspect of newer functionality? Should we merge a change if it compiles on all platforms except one, effectively breaking that platform until "later"? This isn't an easy issue: ultimately, we want to get new functions and fixes out there, and that may mean living with some dead code and platform-specific workarounds in the meantime; alternatively, we simply freeze older platforms at a previous Kodi release, and move on (as, indeed, many other application developers do). As always, though, if you're a developer who could help here, you know where to find us...

 After a break for lunch, **kib** and **keith** kicked off a conversation about **Foundation responsibilities and costs** - some activities are legal in nature, many of them administrative, all of them important. As a registered non-profit organisation, we're obliged to submit certain paperwork on an annual basis to keep that status along with US tax declarations. Forget this, or get it wrong, and we face losing our status and either incurring significant taxes or else paying lawyers to re-submit and regain it - neither scenario being something we want. As such, we have an ongoing task to better document what people do and highlight the imperative tasks within that list: even as a bunch of volunteers, there's a degree of professionalism required behind the scenes, and that means sometimes paying for help.

 Time to return to more technical matters: **jimcarroll** once again took the floor, this time to talk about **threading in Kodi**. Given the history of Kodi, there was a lot of platform-specific threading mechanisms. That creates complex code, with dependencies and checks that just get in the way - so, can we collapse it down into a more platform-independent model, or, at least, a minimal set of variations? It turns out that you can slim down to two main models: POSIX and Windows, and that's where the work has been heading. Some code will still need variations, though, although other code can be collapsed still further into newer, more standardised threading mechanisms that have been implemented on all platforms since the original code was written (e.g. as implemented in C++11).

 Bringing the afternoon to a close, then, **jimcarroll** stayed on his feet to talk about **DI - dependency injection**. This is a mechanism to move away from a monolithic *main()* routine that directs all other application activities, and instead having a suite of dynamic dependencies between modules that are resolved at runtime. In this instance, the code can declare a constructor that has a dependency on some other component without explicitly knowing about that other component when the code is written.

  

 And that's it for Day Two. A few more topics to roll over until tomorrow, along with a hackathon while everyone is together - but, until then, that's all for now.

 