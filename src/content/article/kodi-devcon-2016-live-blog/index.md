---
title: "Kodi DevCon 2016 Live Blog"
date: 2016-09-15T04:00:00Z
author: Nathan Betzen
featured_image:
  src: /images/blog/DevCon2016Teamfoto2.webp
  title: "DevCon2016Teamfoto2"
  alt: "DevCon2016Teamfoto2"
---

## Evening – Day 1

[![image](/sites/default/files/uploads/image-800x402.jpeg)](/sites/default/files/uploads/image.jpeg)

And that’s it for today. Tomorrow there should be les.webpm talk and more actual feature presen.webpns, so we look forward to seeing you all then!

## Afternoon Session – Day 1

## Trademark Talk

After lunch the subject of a number of different legal issues has been brought up. In particular, a conversation has started about adding a carrot to the stick that is currently the Kodi trademark policy. At present, the trademark policy is pretty conservative. People aren’t allowed to use the Kodi name in their website at all, which means the only people who do use it are people who are ignoring our trademark policy (i.e. add-on pirate people).

So now we’re going to try to set up a policy that allows fan groups to use the Kodi name as long as they fit within certain rules, specifically rules that are similar to the official forum rules.

## The Add-on website

Next on the list is the fact that nobody really likes the current way of submitting addons that aren’t through gitpulls. At present, to submit, you have to submit to a mailing list, and that doesn’t really work outside of skins. Github pulls work great, but for people who are comfortable with python but not with git, github pulls aren’t really ideal.

An alternative method was demonstrated wherein you could simply upload your addon zip and a quick xml check would show exactly what’s ok and what’s missing. The next step is getting it into Kodi’s website.

Additionally conversation happened regarding possibly making some exceptions to addons accepted. In particular, if an addon ships a dll, but that dll comes from a website that specifically allows dll distribution, and the hash matches, and various other checks are made, an exception MIGHT be made. At present, exceptions theoretically could be made, but never really are. Leniency is being considered.

## Conference and Dev Meetups

Just to reiterate from last year, if any devs want to go to any conference or meetup, the foundation is happy to pay for it. In particular, getting Kodi’s video devs together with some ffmpeg devs is high priority. Additionally, we’re discussing moving devcon from the fall to the spring for various reasons, but mainly because we want to make it easier for devs to go to both DevCon and VideoLan Dev Days.

## Morning Session – Day 1

Good morning everyone and welcome to the Kodi DevCon 2016 Liveblog. As many of you know, my name is Nate, and much like last year, I’ll be doing my best to update the blog with as much of the content we discuss over the next few days as my jet-lagged brain will allow.

[![IMG_0685](/sites/default/files/uploads/IMG_0685-800x600.webp)](/sites/default/files/uploads/IMG_0685.webp)

As always, DevCon begins with all the devs who are attending introducing themselves.

## Switching services over to hosted services, also a discussion of switching various services

At present Kodi hosts most of all its services on a few servers, including wordpress, trac, the forum, and the wiki. This results in an incredibly amount of overhead.

The biggest issue is switching from trac to hosted jira. The biggest problem with switching to an open source jira license is that jira has a hard 5000 user limit (that’s a problem because every person who reports a bug would count as a new user). The biggest reason to switch away from trac is that the git integration isn’t great and doesn’t scale.

Another thought is switching from Github to Gitlab. This is a major idea because it could allow us to drop the idea of using jira altogether. The biggest downside is user creation. Everyone would need a new gitlab user.

After some conversation, it’s been decided to first look at Gitlab before worrying about jira or buggenie or anything else.

Next, the main website is running on a really, really, really, really old server, running a really old wordpress version. It’s all so old that we can’t actually migrate to a hosted service. This weekend we’re going to try to do all the upgrades in one big jump. A major update was already done about 6 months ago by Piers, but hasn’t been made live. This weekend we’ll fix whatever missing broken things still exist and do the switch.
