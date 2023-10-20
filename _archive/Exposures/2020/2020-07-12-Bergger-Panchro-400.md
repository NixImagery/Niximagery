---
date: 12 07 2020
tags:
   - Fuji GW690ii
   - Bergger Panchro
   # - Rodinal R09
   # - Development
hide:
  - tags
---
# Bergger Panchro 400
![](/img/img20200716_02.jpg)
**Achmevlich beach** The figure in the grass is Kara. Fuji GW690ii f/11 at 1/30s. Toning in Capture One

In the camera from 11th-12th July 2020. £5.50 from Analog Wonderland.

Brand|Type|ISO|Format|Exposures|Camera|Lens
:----|:---|:--|:-----|:--------|:-----|:----
Bergger|Panchro|400|120|8|Fuji GW 690 ii|Fixed Fuji 90mm

Frame|Image|Aperture|Shutter|Comment
----:|:----|:------:|:-----:|:-----
1.|Achmelvich beach|f/11|1/15s|tripod, yellow filter, 11 July
2.|Achmelvich beach|f/11|1/30s|Header image
3.|Achmelvich beach|f/16|1/8s|rocks
4.|Stac Pollaidh, Suilven, Canisp|f/32|1/15s
5.|Stac Pollaidh, Suilven, Canisp|f/16|1/60s
6.|Stac Pollaidh, Suilven, Canisp|f/11|1/125s
7.|Stac Pollaidh|f/16|1/60s|from beach
8.|Stac Pollaidh|f/32|1/15s|

## Development

I decided to "semi-stand" develop this film in Rodinal[^which] at 1+99 (in English, 1% solution by volume) for an hour. Stand development means no agitation: solutions must therefore be gently poured into the Paterson tank, to avoid bubbles of air being trapped between the film surfaces. This process is called semi-stand because of the turn half-way through. I followed the recipe kindly posted by [Gerald Greenwood](https://geraldo.me.uk/stand-development-with-rodinal-a-guide-based-on-my-own-experience/). That post is well worth a read and made me laugh out loud. Gerald seems to be a man after my own heart: bored with manly men acting like boys comparing toys, and just wanting good, consistent results.

[^which]: R09 One Shot.

Step|Details|Comment
----|-------|--------
Prep clean water|About 2 litres at 20°C|
**Load film**|Load film onto spool, place in tank|In Paterson bag
Mix developer|Pour 495ml water onto 5ml solution|-
**Pre-rinse**|Soak the film in water|1 minute, pour out
**Develop**|Pour developer into tank, agitate for 30 seconds, tap tank|Start timer
30 minutes turn|Gently turn twice and tap|Removes "halo" in full stand development
60 minutes|Pour out and rinse thoroughly under a tap.|No stop bath needed.
Mix fixer|Use 1+4 (20%) dilution: 100ml + 400ml|
**Fix**|Pour in fixer solution|Bergger say 6 minutes
Agitate|Once per minute for 10 seconds|
Keep the fixer|Pour into a bottle|Reusable, 8-10 rolls of 120
**Wash**|2 or 3 times, with agitation|Water
**Rinse**|Lots (40) of agitation|Water & drop of washing up liquid 
**Dry**|Hang, squeegee|

## Scanning

Scanning this on an Epson Perfection V600 produces tif images with a Gray (sic) colour space that image processing software can't understand, because they require files to be in RGB colour space. Conversion is easy enough, using [ImageMagick](https://imagemagick.org/):

`$ magick img20200716_02.tif -set colorspace RGB -type truecolor img20200716_02.tiff`

This tends to significantly lighten the image, yet the detail is retained in highlights and shadows, and can be adjusted in Capture One.