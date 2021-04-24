---
title: Kodi's GitHub codebase new face and better documentation
date: 2018-07-27T13:28:01Z
tags:
  - Developer
author: Cris Silva (h.udo)
featured_image:
  src: /images/blog/matrix.webp
  title: "matrix"
  alt: "matrix"
---

### The problem

Every software developer knows that keeping code documentation up-to-date is difficult and time consuming, specially if code in need of said documentation is changing fast. Like, Flash fast. Among code documentation, the process of compiling the code is probably the poorest of cousins. After all, developers do know how to compile the software they write and writing documentation is not as glamorous as writing code. Given a choice, developers will always choose the latter over the former.

Though that was not Kodi's case, for years our build guides were spread between **[Kodi's Wiki](https://kodi.wiki/view/Main_Page)** and **[GitHub](https://github.com/xbmc/xbmc/)**, generating confusion. To make matters worse, guides were often contradicting, not kept up-to-date and generally lacking in detail. To solve this predicament, we decided that **Kodi's build guides should be kept alongside the code**, where developers can easily update them when code changes.

### The solution

Writing build guides might seem simple. It isn't. On one hand, people writing the guides are usually very comfortable with the process and tend to forget small but crucial steps. On the other hand, guides must be written taking the average user into account, not the seasoned developer. Let's not forget that the word "compiling" intimidates a lot of users, novice and seasoned alike and, as with many things in life, they seem utterly scary until you try. Once you know how to do them, they become an extremely easy and fun process. Most times, anyway.

That led to a conclusion: guides must not contain any ambiguity or room for interpretation. Plain spoon-fed copy and paste was the target. The result is a bunch of **[build guides](https://github.com/xbmc/xbmc/blob/master/docs/README.md)** for most common platforms and OSes **Kodi runs on**. Those include **Android, FreeBSD, iOS, macOS, RaspberryPi, Windows and a general Linux guide**. Popular Linux distributions among Kodi users, like Fedora, Ubuntu and openSUSE also have **dedicated guides**.

Starting with Kodi v18 Leia, our **[build guides](https://github.com/xbmc/xbmc/blob/master/docs/README.md)** are kept up-to-date against the current code base. Hopefully, up-to-date against a single pull request or code commit. This might seem of little importance but consider this: if, in two years time, you decide that you want to compile Kodi Leia for whatever reason, you won't need to dig through the Wiki, forum guides, old HOW-TOs, etc, to achieve what should be a simple task. The correct build instructions are right there, alongside the code. Of course, there are things we can't control and in two years a lot can change. Your shiny new OS or hardware might not be compatible with an older Kodi version. That's not our fault, by the way. ;)

#### And much, much more

Producing nice build guides wasn't the only thing we did. We also decided to overhaul Kodi's **[GitHub face](https://github.com/xbmc/xbmc/blob/master/README.md)**, making it a little nicer to look at and a bit more informative about the project. It now links to Kodi's most important resources (downloads, site, forum, wiki, etc.), and has a section dedicated to those wanting to **[contribute to Kodi](https://github.com/xbmc/xbmc#how-to-contribute)**.

Since GitHub is a developer space, we couldn't complete the task without providing a few guides for code contributors. This includes a **[contributing guide](https://github.com/xbmc/xbmc/blob/master/docs/CONTRIBUTING.md)**, **[code guidelines](https://github.com/xbmc/xbmc/blob/master/docs/CODE_GUIDELINES.md)**, and a simple **[git-fu reference guide](https://github.com/xbmc/xbmc/blob/master/docs/GIT-FU.md)** for those not familiar with git.

The full list of new documents and guides can be seen **[here](https://github.com/xbmc/xbmc/tree/master/docs)**. We hope you like them and help us improve them and Kodi.
