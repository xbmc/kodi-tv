---
title: 'XBMC Statistics'
date: 2011-06-01T04:00:00Z
author: Team XBMC
featured_image: ""
---
As a group, Team XBMC has been curious for quite some time about how popular the website and XBMC actually are with the general population. I know many users have also asked similar questions. This post is intended answer a lot of those questions. My apologies if that makes it run fairly long. We’ve got a lot of ground to cover!

 The Website
-----------

 As of December 21st, 2010, XBMC.org has been visited 4,709,000 times. Those visitors have viewed 11,218,000 pages. Hats off to [WebHostingBuzz](https://www.webhostingbuzz.com/ "Web Hosting Buzz"), our website host. That’s a LOT of data being fed through the pipes.

 The vast majority of our users (for the curious) use Firefox and Chrome as their browsers of choice. IE was a very distant third, essentially tied with Safari.

 XBMC.org has had three spikes in visitors in that time. The first was the release of Dharma, which happened just as we began implementing Google Analytics, so we don’t have totally accurate numbers from that time. The second was on Friday, January 21st, when we release XBMC for iOS. On that one single day, we had 105,000 visitors. We average about 24,000 visitors a day, so that was quite a spike. Finally, near the end of May, Lifehacker featured a small piece on one of our users who made an interesting arrangement of his PS3 cords that brought the visits up by an additional 10,000 a day.

 Our most popular pages in that time have been the main page, the downloads page, and the skins page, which is probably as it should be.

 The Forum
---------

 Our forums are visited by approximately 35,000 people each day, making them actually more popular than our main page. And those visitors view nearly five pages per trip. We only have Forum data from the end of January, but in that time, we’ve had 4,296,000 visitors who have viewed over 21 million pages. We have 77,000 registered members, which means there are approximately 55 lurkers for every registered member. If you reduce the numbers by only counting visitors who are absolutely unique according to Google Analytics and reduce registered members to those who are actually active, there are 120 lurkers for every active forum member.

 Congrats, active forum members, you are ALL famous.

 The Facebook Fanpage
--------------------

 Our [fanpage](https://www.facebook.com/XBMC "XBMC Fanpage") and posts on our fanpage have been viewed 1,718,284 times since the beginning of the year. Since January 1st, our monthly active users have grown from a little over 6,000 people to a little over 11,000 people today. In total, XBMC has a bit over 12,000 facebook fans and, in a totally not shocking twist, 95% of those fans are male. The most represented nation for fans is the United States. The most represented city, interestingly enough, is Stockholm, followed by London and then Madrid. The most represented U.S. city is Seattle, which is the 7th most represented city worldwide.

 Anybody in Stockholm, London, or Madrid feel like having a party?

 Perhaps more important than the Facebook stats have been the Facebook contributions. The fanpage has become a useful place for users to show pictures, share links, and talk very broadly about XBMC. It was the original source of several Feature Fridays and will, with luck, continue to be a social place to discuss the less technical things (while the forum remains the domain for all technical writing).

 The Software
------------

 One of the big (non-coding related) questions people ask Team XBMC is, “Exactly how popular is XBMC? How many people use it? How many people download it? Is it, or is it not, cool to like?”

 Obviously, the correct response to that last question is, “Yes, you are much more awesome if you like XBMC. You’ll probably get really good seats at restaurants now.” The answers to those former questions, though, have evaded the team for quite some time. Certainly, we could track downloads, but that doesn’t really tell us much. XBMC is free software; a single person could download it 100 times a day, and we’d have no idea that only one person was downloading it, rather than 100.

 Luckily for us, with the implementation of our addon system, we’ve actually figured out a real method for determining approximately how many active instances of XBMC exist and are in use around the world. Just like you, we believe your privacy is important, so XBMC doesn’t track installs or any such thing. However, given that we have an awesome and robust addons system, we can count addon downloads.

 The addon system gives us the opportunity to measure the popularity of addons, measure user base, estimate the frequency that people update their systems, and even, ultimately, help users find the more popular addons. As the list of available addons grows on a regular basis, it’s going to be necessary, fairly soon, to be able to highlight particularly popular addons.

 Most interestingly, for the purposes of this post, is that we can get a pretty good picture of how many active XBMC installs there are without having to track what each individual user does. To accomplish this, we start with an addon that gets shipped, standard, with XBMC, like the TVDB scraper or the skin Confluence. When we update that addon, analytics tells us two things. First, that the update has been downloaded. Second, which revision of the addon is being replaced.

 So, for example, if Dharma ships with the TVDB 1.0 addon, and we update to 1.1, it will tell us how many people updated. If we then update to 1.2, analytics will tell us how many people were using 1.1 at the time of the 1.2 update (existing users who have been keeping up with auto updates) and how many people were using 1.0 at the time of the 1.2 update (likely new installs, because TVDB 1.0 is the addon that ships with Dharma). In this way, we can separate out existing installs and new installs.

 Of course, all these numbers are pretty hazy. People can turn auto-updates off. People can stay disconnected from the internet. People can fail to use XBMC for a month or more at a time. People can, and do, perform complete uninstalls and re-installs. There’s really no way of knowing if one install equals one user, or if, like me, a user has 5 instances of XBMC sitting around his house (and on various different partitions of his computer), each of which counts for our numbers. Additionally, various beta builds and random other builds pre-XBMC 10.1 don’t totally register correctly in Analytics, so we have no real idea whether they are new or old.

 As such, instead of saying we have X number of users, I’m going to talk about X number of installs (or instances). Additionally, I’m going to make a few presumptions that are likely not completely accurate, but are the best we have at the moment.

 Now, let’s get to the stats.

 For the purposes of this test, we selected a random addon that was shipped with Dharma and updated on April 18th, approximately six weeks ago. This addon had been updated one time before, which made it perfect for figuring out how many installs were already on computers and how many new installs occurred after the update.

 As of April 18th, this addon had at least 210,000 existing installs around the world. Since April 18th, there have been 350,000 new installs around the world. Additionally, there have been 225,000 installs that we cannot definitively identify as new or old, but because they can only come from pre-XBMC 10.1, we can at least guess that they are existing user updates, since it’s not especially easy to find a pre-10.1 revision floating around.

 Thus, prior to April 18th, there were roughly 435,000 active XBMC instances around the globe. After April 18th until today, we added roughly 349,659 more.

 In total, this means approximately 789,000 instances of XBMC have been active, globally, in the last 6 weeks. With any luck, by the time XBMC Eden finally rolls out, we might even pass the 1 million install barrier.

 **A final note on the topic of software**: Our skins are obviously the most bandwidth intensive addons we serve up. To give you an idea of the enormity of bandwidth those skins (and the entire XBMC experience) are consuming, various skins have been downloaded about 435,000 times in the month of May alone. If you assume that each skin is about 5 to 100 megabytes in size, while the most popular ones averaging about 50 mb, then our mirrors have served up over 21,000 gigabytes (or 21 terabytes) of data in skins alone in the month of May.

 **Conclusion**

 To make an extremely long story short, XBMC appears to be doing fairly well for itself. We owe a lot of that to our dedicated developers who work for, typically, zero pay. We owe a lot to our hosts, including [WebHostingBuzz](https://www.webhostingbuzz.com/ "Web Hosting Buzz"), [Bytemark](https://www.bytemark.co.uk/), and our various [download mirrors](http://mirrors.xbmc.org/list.html) around the world. If we tried to host over 21 terabytes of data on our own each month, we’d be in some serious financial pain. And, of course, we owe the most to you, our users. You are the reason we work. Every single member of Team XBMC started out as a user, just like you, and remains one to this day.

 