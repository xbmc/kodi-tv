---
title: "IMPORTANT: Kodi Forum - Data Breach"
date: 2023-04-08T20:12:00.671Z
author: Team Kodi
tags:
  - Community
featured_image:
  src: /images/blog/hacker.jpg
  title: '"Hacker" Image by Gerd Altmann from Pixabay'
  alt: An anonymous, hooded figure stares out from the screen, his face hidden in
    darkness. Zeroes and ones - binary - flood everywhere.
---
Well, this is an unpleasant thing to have to write, but we owe it to our users to be  as transparent as we can, and help you protect yourselves, so write it we will.

It recently became apparent that someone - a former team member, now inactive - had seemingly taken backups of the Kodi forum. Investigation suggested that it wasn't him doing this, so we had to assume that it was a compromised account. We don't know what was taken, and what data might have been compromised, but, as a precaution, we're asking all users to change their passwords and be aware of what information might have leaked (e.g. if you've included system information in PMs). For information, we use MyBB on the forum, so passwords are hashed and salted. If other information has been taken, it may not have been encrypted.

From what we can now gather, it was genuinely a breach of the forum, and the data is now known to be in circulation in the darker corners of the Internet. **We will be forcing a logout and password change on the forum. If you've used the same credentials anywhere else, change them there immediately.**

Given the attack vector, we have no reason to believe that anything else was compromised (e.g. code injection into the forum, or attacks on any part of GitHub or our build infrastructure). It appears that the compromised admin account was solely used to access the forum, and then someone manually used the MyBB tools to take and download a backup. However, common sense suggests that all users should take suitable precautions: please, **check if you used your forum password anywhere else**, and **check if you've ever given out sensitive information via direct message** (e.g. login credentials, IP addresses, and similar). You may need to take further action accordingly.

Obviously, this is deeply troubling for everyone concerned. We're revisiting access rights, processes, and similar in an attempt to ensure this does not happen again; we're auditing all privileged access and have removed any elevated rights beyond the minimum necessary to perform certain tasks; we've made sure that anyone with admin access has 2FA enabled; we're checking files and configs against known-good backups and will replace them if at all in doubt. While we work through this, we can only offer our genuine apologies to anybody impacted.

To enable this work, with immediate effect, we will be taking the forum offline until we have checked everything and know that it's secure. This is likely to take other systems offline at the same time, including the Wiki and paste sites. Again, we will be enforcing a forum-wide logout and password reset, so expect that when we come back. This could obviously take a few days; as and when we learn more, we will, of course, keep everyone informed of anything pertinent that we're able to share.

Team Kodi