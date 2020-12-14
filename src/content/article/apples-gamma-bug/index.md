---
title: 'Apples Gamma Bug'
date: 2008-09-04T04:00:00Z
author: Team XBMC
featured_image: ""
---
I was recently looking into the fade effect on OS X which happens when you switch from windowed mode to full screen and vice versa. I thought it’d be better if it only faded the effected display, so I started looking into a great [example](https://developer.apple.com/documentation/GraphicsImaging/Conceptual/QuartzDisplayServicesConceptual/Articles/FadeEffects.html) from Apple. There was an issue though. After retrieving the current gamma value, and subsequently setting the value (to the value just retrieved!) the display would get brighter. Odd, that should only happen if I turn the gamma down. Well, as it turns out, the CGGetDisplayTransferByFormula function doesn’t actually calculate the current gamma correctly. If you toss the values retrieved from CGGetDisplayTransferByTable into excel and have it calculate the value for you, you’ll see that it doesn’t match up. The solution was to just throw out the value and calculate it in code. Thanks Apple, you just wasted my week.

 For those interested (pay attention Apple!), the following code will do the trick. Note that M\_LN2 is the natural log of 2, defined in math.h.  
 

  CGGetDisplayTransferByFormula(display, &redMin, &redMax, &redGamma, &greenMin, &greenMax, &greenGamma, &blueMin, &blueMax, &blueGamma); CGGetDisplayTransferByTable(display, 3, redTable, greenTable, blueTable, &sampleCount); redGamma = (CGGammaValue)(log(redTable[2] / redTable[1]) / M\_LN2); greenGamma = (CGGammaValue)(log(greenTable[2] / greenTable[1]) / M\_LN2); blueGamma = (CGGammaValue)(log(blueTable[2] / blueTable[1]) / M\_LN2);   