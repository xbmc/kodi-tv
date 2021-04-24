---
title: "Updated: XBMC Moves to Git"
date: 2011-01-01T03:00:00Z
tags:
  - Developer
author: Cory
---

![](/images/blog/git.webp "git")As we discussed in a [recent post](/article/improving-our-development-process), XBMC is finally moving to a current [SCM](https://en.wikipedia.org/wiki/Source_Code_Management). Many of us have been using git-svn for quite a while anyway, but the burden of doing a real migration has kept us from making the switch. Today the migration begins.

We have picked [GitHub](https://github.com/xbmc/xbmc) as our host due to their great features like pull requests and the commenting system, as well as their lightning-fast speed compared to some of the others. We will push clones to [gitorious](http://gitorious.org/), [sourceforge](https://sourceforge.net/), [repo.or.cz](https://repo.or.cz/), and anywhere else that makes sense (ah, the beauty of a distributed scm!). We’re very excited about git as it should allow for much more efficient development. For those who would like to read up on git, some great propaganda is available [here](http://whygitisbetterthanx.com/).

The transition may be a bit bumpy, and some of our services may be down for a day or two during the transition (trac being the biggest concern). Many projects experience a few headaches in such a transition, so we are prepared to think on our toes.

Now for the unfortunate part. We have had a clone of svn on github and gitorious for quite a while. Those of you who have used it know that it’s huge.. almost 1gb. We have decided to do a one-time filter on the repo to get the size down to nearly 250mb. This means that when the final repo is ready (link coming soon) everyone with an existing clone will need to grab a new one. We think this is a necessary one-time pain that will make life much easier in the long-run.

The final svn commit was r35744. Everyone who builds from source will need to use git from this point on. We’ll do our best to answer any questions in the comments, but let’s avoid a SCM flamewar, ok?

**Update**: Done! The move to [our new repo](https://github.com/xbmc/xbmc) is done and we have resumed committing. Some services like Trac still need to be updated, and we will need to get clones migrated to the other sites, but we’re well on our way.
