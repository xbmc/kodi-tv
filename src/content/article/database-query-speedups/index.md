---
title: 'Database query speedups'
date: 2008-08-23T04:00:00Z
author: Team XBMC
---
I was testing some [smartplaylists](https://kodi.wiki/view/Playlists) out from some [bug reports](http://trac.xbmc.org), and found that the same query was performed significantly faster in [SQLiteSpy](https://www.yunqa.de/delphi/products/sqlitespy/) than in XBMC on the same machine. The performance was an order of magnitude slower in XBMC than it was in SQLiteSpy, and we actually use a newer version of SQLite than is in the version of SQLiteSpy I was testing.

 Turns out that we’re using a “wrapper” around the lib, which uses sqlite3\_exec() and a callback routine to grab the per-row data. This isn’t too much of a problem (see below) and is certainly an easy way to go about things. The slow downs were caused by the way the callback was implemented.

 The main issue was due to allocation + deep copying. For each row of data, the callback gets called, and we copied the data into a row\_type = std::map\, where field\_value was basically a string. The row is then pushed into a std::map\. This, ofcourse, results in numerous allocation + deallocation as the maps are copied + moved around in memory, in order to optimize the map lookup. The use of map here is the first obvious problem: It’s indexed by the row number, so why not use a vector? Furthermore, if we use a vector\ then it’ll save constantly copying data whenever we have to resize the vector.

 The second problem isn’t quite as bad, but is inherent to the way sqlite3\_exec() is handled. Each field in each row is converted to a string to be passed to the callback, and we must then go and convert it back to the appropriate type for actual use. We can skip this step by breaking the sqlite3\_exec() down into what it does behind the scenes (sqlite\_prepare/step/column/finalize) and just copy the appropriate datatype straight away, ensuring that no conversion needs to be performed.

 Result: The old version took 1760+19862 ms (query + retrieval), whereas the new version takes just 324+1370 ms. Not bad for an hours effort.

 