---
title: '"Kodi Broke My Addons!"'
date: 2021-03-05T14:06:46.369Z
author: Team Kodi
featured_image:
  src: /images/blog/python_code-johnson_martin_pixabay.png
  title: "Image of Python code, credit: Johnson Martin from Pixabay"
  alt: "Image of Python code, credit: Johnson Martin from Pixabay"
---
Since we released 19.0 "Matrix", we've been hearing a lot of noise about how people's addons have stopped working, and why we're all Really Bad People for doing this. We thought it would be worth helping people understand what's happening here - mostly, because our fingers are getting tired from trying to explain, and it'll save an awful lot of typing in the forum, or on Facebook, or wherever.

### From Ancient History ...

Kodi's addons traditionally ran in Python 2, which was first released in [October 2000](https://web.archive.org/web/20091214142515/http://www.amk.ca/python/2.0). Some years after release - in the distant days of 2008, when both Amy Winehouse and Michael Jackson were still releasing albums, and The Dark Knight and Indiana Jones were still huge in the cinema - it was announced that Python 2 was scheduled to go end-of-life in 2015. A bit later, because people were slow to make the switch, the Python team decided in 2014 to extend this EOL date to 1st January 2020. You can read all about that [here](https://www.python.org/doc/sunset-python-2/).

So, aware that the clock was ticking loudly - and that we were already behind the curve - we announced in January 2018 that we'd drop Python 2 support from Kodi [in version 19](https://kodi.tv/article/attention-addon-developers-migration-python-3). Given that we were on 17.x "Krypton" at the time, and we hadn't made any breaking changes to Python since shifting to Python 2 in 2013, this seemed fair. Remember, as well, that 18 "Leia" didn't see the light of day as a final release until January 2019, so Kodi 19 wasn't exactly going to leap out suddenly at anyone - so we felt that this was adequate notice for developers and users to prepare for the change. This is, after all, not just our issue: the whole software industry had to make this switch, so you'll have seen, for example, Canonical making the switch to pure Python 3 on Ubuntu with their [18.04 release](https://wiki.ubuntu.com/Python).

Kodi 19 Alpha builds first started appearing in August of last year. That means, two and a half years after saying we were making the switch, the first test builds of a pure Python 3 Kodi became available, saving anyone from building it themselves from github.

### ... to Today

And yet... and yet... the move seems to have taken people by surprise. Operating systems have dropped support for Python 2; it's a huge security risk, as it (and its libraries) are unmaintained; you shouldn't be using it unless you really, really have to. And yet...

To really rub salt into the wound, it's not really **our** addons that are causing grief. Some justifiable complaints are around skins, and we understand that: if you have a favourite skin that isn't compatible with the new release, or has fallen out of fashion, then it's a jolt to have to change - but the skin developers are entitled to maintain or not maintain their work, that's entirely up to them. It's not just skins, though: there are very many third-party addons out there that are having problems, and that's where we're getting a lot of flak.

It's arguable that you really shouldn't be using these if they require you to use an unmaintained platform, but that's your choice. We've genuinely done our best, and we simply have no influence or control over these addons, however useful they may be, whatever you use them for. There is a simple reality that major version bumps nearly always leave some platform or component behind, plus there's a truth that addons often simply wither and die - if the author doesn't want to maintain them, eventually, they rot.

### Options, Options, Options

So, whinge over. What can you do if you're caught in this trap.

* Well, if you really want to, you can stick on Python 2 with whatever addons you choose - stay on 18.x "Leia" and never update your operating system, as a future patch or wholesale upgrade is likely to remove Python 2.

  * If you're one of the users on Android who've had a forced update, then you should be aware that "auto update" is enabled by default on applications from the Play Store. Switch this off, and you'll stick with whatever version you have installed. You *may* be able to do this on a per-application basis as well, but that varies by Android platform.
  * If you're on Linux, be careful of *apt update* or similar, as repositories are likely to automatically shift you to the next release (our PPA definitely will). Likewise, an OS update is likely to pick up different versions of all pre-installed applications, including Kodi, if it's from a distro-maintained repository.
  * If you're on a JeOS "bundled" platform, be sure to switch off auto-update in *Settings* - or keep a beady eye on it, anyway. LibreELEC is probably the most common platform here, and that has no auto-update between major versions ("channels") anyway, but other platforms exist, or you may have updated manually.
  * Windows, it depends on how you installed it. If you've downloaded from our web site, simply don't upgrade it; if you're using the UWP version from the Windows Store, then you'll need to disable "Update apps automatically" for all applications.
  * Apple devices are typically user-installed (e.g. sideloaded), so just don't install something new. The exception is if you're using a repo on a jailbroken device (e.g. Cydia) - in which case, you're in the same boat as Linux repo users.
* If you've already updated, you can normally go back. This can be tricky on some platforms (e.g. Android), where you'll need to be careful to uninstall the application *but not the data*, and then re-install the app alone. Similarly, on a JeOS distro, you're likely to have to export your library and addon settings where you can, re-install, and then re-import everything. To explain for every platform is outside of the scope of this blog post, so perhaps turn to the forum for help here.
* Be aware that *every* major version bump in Kodi upgrades your database. Downgrading should immediately revert to the previous version in whatever state it was (e.g. watched status) when you upgraded, but there are implications if you use a shared database across multiple client versions.
* You can lobby your addon authors to get their collective fingers out and make the shift to Python 3 - as said above, this is hardly new news to anyone. Other than addons we write and provide, we have absolutely no control or influence over whether they get ported to Python 3, or whether they stay on 2 (and thus you can't go past Kodi 18 "Leia").
* Or you could use Kodi as it's intended, and don't use these addons at all: more reputable addons either have already been updated, or are likely to be in the near future.

You have choices - but, please, don't have a go at us or leave us lousy reviews when we've really tried our best here, and yet something well outside of our control (your platform, your settings, third-party addons, maybe even third-party repositories) has broken something.

`</grump>`