---
title: Forum Data Breach - Lessons Learned, Actions Taken
date: 2023-04-30T13:22:49.973Z
author: Prof Yaffle
tags:
  - Community
featured_image:
  src: /images/blog/pexels-lecture-theatre.webp
  title: Lecture theatre - photo by Pixabay.
  alt: "An image of an empty lecture theatre, taken from the back - whiteboards
    across the front wall, long wooden tables running in rows across the room,
    seats lined up ready to take students. "
---
As you may have seen on other posts, we're broadly back on line now, with the forum, Wiki and paste sites all operational. It's been a huge effort by several key team members - I won't name names, but you know who you are - and we're all immensely grateful for their work.

So, without putting on a hair shirt...in the interests of transparency and minimising the chances of anything like this happening again, we've really had to dig into this to see what we can learn.

First of all - **what happened?**

This is probably the most important question, and actually one of the hardest to definitively answer.

We've been open about the attack vector being an old administrative account. What we can't wholly conclude is how this was used to gain access.

* Access logs from the period in question are not available any more, so we can't see who accessed what, how, or when.
* A 'brute force' attack on an account is unlikely given that MyBB locks accounts quickly if there are too many login attempts.
* The version of MyBB we were using didn't have any publicised security issues that would permit an unauthorised admin login.
* We've had limited background from the owner of the account, but we've no reason to believe they were complicit in any way.
* It's most likely that login data from another breach was used - depending on how often this person changed their password (and, given they were inactive, it's likely to be some time ago), this may well have been years ago.
* It's possible that their browser was compromised, but we're not aware of any other credentials being stolen.
* Similarly, it's possible that a current session was hijacked, but these should have long-since timed out and disconnected, so there shouldn't have been an active session to open up.
* And, finally, some XSS vulnerability in the forum might have been used (these did exist) to hijack the session of an administrator.

All difficult to prove, and it's very much bolting stable doors after the horse has bolted and long since run away. We will continue to look, though.

So, next up - **what have we done?**

Given that we can't categorically say what the cause was, all we can do is take as many actions as possible to eliminate as many likely vectors as possible - which is good practice, anyway. Actions we've taken, then, include:

* The hosting server(s) have all been rebuilt from scratch, with latest OS and application patches and further hardening wherever we thought it appropriate.
* Server software (MyBB for the forum) has been reinstalled from scratch - again, latest software versions, latest plugin versions.
* Where we haven't simply started again, we've checked configuration files to ensure there are no obvious unauthorised changes or vulnerabilities.
* Unmaintained or deprecated forum plugins have been removed (which may impact functionality in some instances, but we'll have to live with this).
* Password hashing has been updated, so we're using a more modern algorithm instead of the older MD5 mechanism.
* We've followed and implemented MyBB's recommendations and best practices.

In addition, we initially disabled new user registration for a few days to keep things calm and testable. For existing users, we've reset all passwords and made sure every active session is logged out - you'll need to use the "lost password" function to your registered email address to regain access.

We've also gone through a host of non-forum actions, including:

* We've reported the security breach to the overseeing information authorities and to the national police in whose jurisdiction the "theft" occurred.
* We've audited admin rights and made sure we've no other inactive-but-privileged accounts.
* We've taken the opportunity to reduce the number of privileged accounts wherever we can.
* We've improved our "ageing out" process for inactive members. This is an ongoing challenge given the revolving door nature of open source contributors, but we need to manage this better.
* We've implemented MFA on all admin-level accounts where practical.
* We've shared all affected email addresses with [haveibeenpwned.com](https://haveibeenpwned.com/) (interestingly, the majority of addresses were already in their database from previous breaches on other sites - a lesson to all of us to change our passwords regularly).

We think we're most of the way there, but there will inevitably be further tweaks, adjustments, and general bug-fixes as we get things back to an acceptable standard on the new infrastructure. Please, expect further downtime and hiccoughs in the coming days as we iron out any remaining problems - we'll open and maintain a pinned post of known issues, so please check this and let us know if you see anything.