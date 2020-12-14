---
title: 'Dear addon and skin developers!'
date: 2012-10-29T03:00:00Z
author: Team XBMC
featured_image: ""
---
![](http://xbmc.org/wp-content/uploads/2012/10/Skärmavbild-2012-10-30-kl.-11.27.36-300x145.png "strings.xml")As you might already know, XBMC has [moved](https://forum.kodi.tv/showthread.php?tid=141158) translations handling to a great web based translation system called [Transifex](https://www.transifex.com/projects/p/XBMC-Main-Frodo/) lately for the Frodo release. This turned out to work really awesome with the help of our regular and a lot of new translators.

 Translators would love to translate the addons and skins as well. Team XBMC would like to help the developement with providing and maintaining the same translation infrastructure, what we use for XBMC core, to YOUR addons and skins.

 With this system, handling of language files for your addon becomes much more simple, because you won’t have to deal with pulling translations to your upstream addon repository language-by-language, monitoring the mailing list anymore.

 All you have to do is provide some basic data of your upstream repository (where the fresh English language file resides) and you can easily pull in fresh translations from time to time, (or before bumping release) from XBMC’s official translations github repositories for [addons](https://github.com/xbmc/translations/tree/master/translations/xbmc-addons/merged-langfiles) and [skins](https://github.com/xbmc/translations/tree/master/translations/xbmc-skins/merged-langfiles).

 These repositories are always kept in sync with the translation work going on transifex.net. This work is done by Team-XBMC, just like we do it with [XBMC-core and internal addon](https://github.com/xbmc/translations/tree/master/translations/xbmc-main-frodo/merged-langfiles/addons) language files.

 Along with user friendliness, one really awesome thing about Transifex is that translators will be able to use the translation memory created with the core language file and the internal addons. So they can check how a special term was already translated.

  So how can you participate? It is really easy!  
 (If you don’t know how to get this data for your addon, just send an email to [alanwww1](/cdn-cgi/l/email-protection#4a2b262b243d3d3d7b0a322827296425382d) and he will help you.)

 What we need for getting things working, is an email for start (and when this data changes for some reason) on the [xbmc-addons](http://sourceforge.net/mailarchive/forum.php?forum_name=xbmc-addons) mailing list in the following form:

 Email Subject:  
 [lang][addon data] my cool addon

 Email Body  
 *addon – my.cool.addon  
 *httpurl - <http://some.where/master/>  
 *xbmc version – Dharma, Eden, Frodo is ALL supported (for Eden, Dharma we can create XML files)  
 *upstream langs – languages that might be updated upstream, along with the English file

 Where:  
 httpurl is the URL of which can be reached via http and points to your English file.  
 For example, the URL for internal addon visualization.milkdrop is [https://raw.github.com/xbmc/xbmc/master/…strings.po](https://raw.githubusercontent.com/xbmc/xbmc/master/addons/visualization.milkdrop/resources/language/English/strings.po)

 A few things to note:

 
 * The old XML file format language files will be kept for addons that need backward compatibility.
 * For the Frodo only addons, language files will be converted to gettext PO file format. Just pull in these files and you can delete the old xml ones right after that. We will introduce new possibilities (eg. plurals handling) to PO file format later after Frodo is out.
 * The English PO (XML) file MUST always be updated with any new strings. Any ID that is not in the English file will be DELETED from the other language files.
 * If you want OUR work to be a little easier, use Github for your project. It has a great API which our sync utility can use.
 * Please, with any questions write to [alanwww1](/cdn-cgi/l/email-protection#68090409061f1f1f5928100a050b46071a0f) instead the mailing list. This list should only receive the emails described above. Or just use the [translation forum](https://forum.kodi.tv/forumdisplay.php?fid=90) if the subject is of public interest.
 
 Waiting for your emails, thank you,  
 Team XBMC

 