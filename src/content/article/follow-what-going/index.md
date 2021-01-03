---
title: 'Follow-Up: What’s going on?'
date: 2011-03-24T03:00:00Z
author: Team XBMC
featured_image: /images/blog/xbmc-gotham-13_1-beta.png
---
Thanks to everyone who commented on the [last post](/article/what-going). Apparently there’s enough interest to justify some technical ramblings every now and then. As promised, here is a follow-up to address the popular questions and comments. Next up after [SCALE](https://www.socallinuxexpo.org/scale9x/) will be a few words about add-on stats.

 
> I wonder if there are any work in progress for Spotify support, that is the most important thing missing in my setup
> 
>   This is not something that we are working on, but if someone develops an add-on that works well and doesn’t anger Spotify too much, we would certainly accept it.

 
> Any thought of porting this to Android, it is linux based. With all of the new tablets coming out, that’s something I’d be interested in.
> 
>   The simple answer is: most of us are lacking the hardware. As tablets and small-form-factor boxes flood the market, we will likely look into it.

 
> I have to ask, did you evaluate using Mercurial instead of Git? Why Git?
> 
>   Many of the developers were already using git-svn. It has become increasingly popular, and many of our upstream libraries use it as well. There wasn’t much of a “what vcs should we switch to” discussion, so much as a “how do we switch to git?”.

 
> Do have any updates to share regarding the Sigma port?
> 
>   This is still being discussed. More info as it unfolds.

 
> Any plans to update to Python 3.2 version of the scripting engine?
> 
>   As mentioned before, we are working to support an external Python, rather than building the antiquated 2.4 internally. We will still have to include a version for OSX/Windows. As far as I’m aware, no decision has been made regarding which version to ship. Though my guess is that it will be 2.x initially to ensure the most compatibility with existing add-ons.

 
> I truly recommend that the whole XBMC developers team read this from start to finish: <https://git-scm.com/book/en/v2>
> 
>   Thanks, I’ll certainly pass that along.

 
> Any more definitive ETA on packaging 10.1, that bug (and the VDADecoder issue) has been causing me a few headaches and I’d rather stick to official builds.
> 
>   I volunteered to handle the 10.1 build and I’m in LA for SCALE this weekend ([Come see us!](/article/scale-9x-and-xbmc-meetup-update)), but I hope to get it done quickly when I return.

 
> I am also interested in the Audio Engine branch given it’s supposed to support bitstreaming HD audio.
> 
>   Details on AE were sparse the last post, so I asked gnif to give a quick rundown of what it brings:

 
 * Audio is now processed in the highest possible resolution instead of conversion to S16
 * The sound device is now opened in float mode, or the next best thing that is supported.
 * SDLMixer has been removed and replaced with our own mixing code finally giving us consistent GUI Sound support.
 * Latency of the audio stream has been greatly improved meaning GUI sounds now play on time.
 * AC3 transcode has been moved into the audio engine, meaning that GUI sounds and PAPlayer can be transcoded too.
 * AC3 transcode of every sample rate is now supported instead of just 48 KHz.
 * No more loss of stream sync on amplifiers when bit streaming and on pause/resume of playback.
 * We can now take full advantage of PulseAudio, including its sound cache ability.
 * Changing audio settings are now applied instantly and do not require a player restart any more.
 * SSE conversion between formats has been added as well as extensive SSE optimizations to the software audio engine.
 
 
> I was wondering if your were planning on adding more flexibility to the menu structure? Right now we only have “Movies” and “TV Series” and no option of adding other entries/categories (Anime comes to mind), except for using custom skins. What would be great is if users were able to add menu entries themselves, defining what folders and which scrapers should be used for each entry.
> 
>   We are looking into several ways this might be handled without requiring XML hacking. These things bother us as well!

 