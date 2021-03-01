---
title: 'Kodi Remote Access Security Recommendations'
date: 2020-07-29T17:00:00Z
author: Team Kodi
featured_image:
  src: /images/blog/password-2781614_1920.jpg
  title: 'Password combination lock image by Gino Crescoli from Pixabay.'
  alt: 'Password combination lock image by Gino Crescoli from Pixabay.'
---
Kodi includes a powerful web interface that can be used with any browser, but also sits behind the remote control application you use on your phone, or the web front end on your tablet - if you're using Kore, or Chorus, or one of the numerous alternatives, then you're using this interface. However, it has recently been brought to our attention that not all users follow security best practices when enabling this functionality, and are thus exposing themselves to danger. This is partially our fault, since we have not been completely clear about the implications of enabling external interfaces in Kodi. The next Kodi release, 19.x "Matrix", will provide more context when interfaces are enabled, and require a password for the web interface by default. This blog post will detail how you could be affected by an exposed interface at the moment, however, and what to do about it.

 **Recommendations**

 
 * **Do not use the Kodi web server without setting a reasonably-secure password.**
 * **Do not expose any Kodi external interface (web server, JSON-RPC, event server ...) directly to the Internet.**
 * **Do not enable any external interface in Kodi that you don't actually use.** This is especially true for the JSON-RPC service when exposed on all interfaces.
 
 **Explanation**

 The interfaces Kodi provides for external control are, by design, very powerful. It's possible to use the remote control functionality to execute arbitrary code on the box that Kodi runs on, just like you could do this using a traditional IR remote when sitting in front of the TV. In effect, this means that a machine can be completely taken over by an attacker that has access to the web or JSON-RPC interface.

 This is why you should **never** run the web server without authentication. It allows anyone with access to the server port to completely control your box. Even if you do not expose the web server to the Internet, other machines including your PC or laptop can do this. This is possible from a standard web browser (via JavaScript), so you might visit a malicious web page that does this in the background and not even realise that it's happening. While the next Kodi version will still allow you to disable the web server password, we strongly recommend to set one. If you already use the web server and do not have a password set, you can do so using the Kodi settings, after which you will also have to configure your remote control application to authenticate using that password.

 Also, keep in mind that neither JSON-RPC over TCP nor EventServer (enabled with the "*Allow remote control from applications*" setting in Kodi) offer any authentication, so they should usually be restricted to access solely from the box on which Kodi is running ("*Allow remote control from applications on this system*").

 We hope this clears some of the confusion and, as always, you can head to the forums if you have any questions.

 *With grateful thanks to Jacob Baines of Tenable, Inc., for highlighting this problem.*

 
