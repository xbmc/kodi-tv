---
title: 'XBMC DevCon 2010 Summary'
date: 2010-12-05T03:00:00Z
author: Team XBMC
---
It has been a few weeks since the annual XBMC Developers Conference (DevCon) took place and we thought it was about time that we gave you some feedback about what took place. What follows is a rundown of what happened at DevCon, who the sponsors for the event were, a brief discussion about sponsors, and a list of ideas and thoughts that were discussed at length during the course of our time together.

 This year we were fortunate enough to be hosted by [at-visions](https://www.at-visions.com/) at [Hotel Fabrik](https://www.hotel-fabrik.at/de-de/) in Vienna, Austria. at-visions where truly wonderful hosts and did everything they could to make this a great weekend for everyone that attended. I think I can safely say that everyone from XBMC thanks them for their hospitality and we wish them well with everything they are doing.

 This year’s DevCon was possibly the largest to date with a total of 24 people attending over the weekend – a true reflection of how the project has grown over the years.

 Team XBMC and our hosts
-----------------------

  

  

  

  

  ![](/sites/default/files/uploads/XBMC-DevCon-2010-Attendees-resized.png)  
 Hover over faces to see names

    

 **This year’s DevCon host: at-visions**
---------------------------------------

 For those of you who don’t know, at-visions is a sponsor of XBMC and have developed a bespoke hospitality environment that utilizes XBMC as the front-end in hotel rooms. I think everyone who saw the demo of it over the weekend was incredibly impressed and is looking forward to seeing it in action in more hotels in the future! *(jmarshall even had it in his hotel room – presidential perks!)*

 Whilst on the subject of corporate sponsors, I know this is something that comes up occasionally in the forums and there is a great deal of misleading information being passed around.

 We are often criticized for not being more open about the XBMC Foundation. We have nothing to hide; this project is run by all of us in our free time and, as such, things can take longer than planned to get out. However, we do plan on addressing this apparent lack of openness. Watch for a series of follow-up posts over the next week or two. A primary topic that will be covered in great detail is the XBMC Foundation: what it is, who the members are, and why we need it.

 Communication
-------------

 We want to try and improve our communication with the user base. With this website we have an ideal platform for conveying information more frequently. We intend to start putting up a “This week in XBMC” type post every week or so. This post should give an insight into what is happening among Team XBMC and will be the first place learned of new things to look out for.

 This is a very big commitment for us; so if there are any users that would like to work with us on this, then please get in touch. Additionally, if there is a topic you would like to see covered in a future article, let us know. It can be easy for us to overlook topics, being so close to the coding process.

 Dharma Release
--------------

 The release of Dharma hasn’t quite gone to plan and has run on far longer than originally planned*.* It was decided during the DevCon that the current code was in a suitable state to be a release candidate. RC1/RC2 have been pushed out since. Providing there are no major issues as users work their way through RC2, the Dharma finalshould be imminent*.*

 Usability
---------

 We want to make XBMC more user-friendly. We acknowledge at times there can be aspects of XBMC that aren’t completely user friendly and this needs to be improved. In all honesty, this will probably always need to be improved. Perfect usability is an ultimate goal that every team strives for. We only hope that our users remain impressed with the steps we take to push XBMC to be the most user friendly AND the prettiest Media Center available in the world today.

 A major area we will be looking into is pushing the Home interface to be more easily customizable and standardizing this customizability across all skins. For example, we want a simple way for users to select add-ons, playlists or just about any item they want and have it placed on the Home screen. At present, favorites work this way to some small extent, but we’d like to ensure an even better integration with the main menu.

 The Library and Scraping
------------------------

 Staying on the usability theme, it has been agreed (again!) that scraping and setting up the library is far too difficult for many users. We know we need to make this easier and are looking at how we can make what is arguably one of the most important features of XBMC easier to use for the average user.

 One quick and simple improvement that should make it into Dharma *(Ed: and has made it into RC1),* is that, when adding a video source, the user is immediately prompted to set content on that source, rather than allowing the user to guess there is a second step.

 Another idea that has been passed around was making scraper selection simpler. Rather than users specifying a specific scraper, we could perhaps just have them set their main language. From that selection we could then automatically select the best scraper. Ideally, we would like to be able to combine information from multiple sources. No promises any of this will be implemented, just some of the ideas that we have considered to make this process easier.

  

  

 Next Release – Eden
-------------------

 Given that the Dharma release cycle hasn’t been what we wanted, we want to learn from this process and improve for future releases. Our release cycle is too long and rather than things improving over the long release cycle, things get committed that shouldn’t be, causing issues, which in turn lead to even longer release periods. This is not good for anyone and we need to improve upon this pattern.

 We want to get stable releases out more often so users can *see progress* more often*.* Rather than “big” feature releases, we plan to start putting out stable releases every few months. These releases may only have one new feature or a collection of fixes, but as a whole we think this will give a greatly improved user experience.

 For Eden, the main focus is binary add-ons. Once this is complete it will be released.

 PVR Support
-----------

 It was suggested at one point that PVR support would make it into Dharma. That is not happening. It was then suggested it would make it into Eden. In truth this is also very unlikely to happen. We are not ignoring PVR; there is a lot of work going on in the PVR branches but they are not ready for inclusion into core XBMC at this point. Rather than including a half-baked PVR implementation too quickly, we need to ensure the proper steps are taken, so PVR support is rock solid.

 PVR support requires that binary addons are ready to go, so the first priority for Eden is to get that finalized. Of course, this is not ideal for those waiting for PVR, but we felt it necessary to be as open as we can on this matter.

 XBMC Appliance
--------------

 openelec.tv is an embedded Linux release that is entirely focused on XBMC and similar to XBMCLive. It is a very stripped down version of Linux that creates an XBMC appliance / set top box with minimal user input required. It is incredibly easy to install and removes a lot of the difficulties that new users experience with XBMCLive. openelec.tv has been developed by a forum user called sraue, who has now joined the XBMC team. To duly acknowledge the value of openelec.tv, we’ve decided to give it it’s own full release name. While we haven’t decided on that name, the working title is XBMC Appliance .

 XBMC Appliance is seen to be a complementary product, rather than a replacement for XBMCLive. XBMCLive is great for those that would like to tweak things, add new software, have some flexibility, but the downside of this flexibility is that setup and maintenance is much more difficult. XBMC Appliance is for those that want to create a dedicated XBMC media player. It has releases for specific hardware platforms and can have users up and running in less than 15 minutes.

 Exactly what we’ll call “XBMC Appliance” (and if we’ll call it that at all) is still being discussed.

 DSPlayer
--------

 After somewhat lengthy discussions on the pros and cons of what the DSPlayer branch offers, it was decided that it isn’t a priority for inclusion in core XBMC at this time. Unfortunately this is unlikely to change, even more so given that XP’s usage is on the decline.

 However all is not lost, there may be some hope of it becoming an add-on in the future. Development, without a doubt, is not halting on DSPlayer.

 In Summary
----------

 I hope that this gives you all an insight into what took place at this year’s DevCon and some insight into what developments may take place in the future. If anyone has any questions or would like to know more, just ask and we will try and answer if we can.

 To summarize, I think we can sum up our continued and future vision for XBMC as:

 
 * **XBMC will run on as many hardware and software platforms as it can.**
 * **XBMC will continue to be completely free and open.**
 * **XBMC will be easy to use and setup for the average user.**
 
 As always we appreciate our users feedback and welcome your comments on everything. The team will be monitoring this post for the next week or so and will try and answer all the questions we can.

 I hope this has given you a bit of a insight into what took place at this year’s DevCon and watch out for my upcoming posts – we have lots more exciting news and information to share with you over the coming weeks!

 