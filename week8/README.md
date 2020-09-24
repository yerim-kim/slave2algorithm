# WEEK8

## Quick presentation 2/Individual Project Pseudocode/Paper Prototype 2/Project WIP

### Paper Prototype 2

My plan changed a little bit more from the last paper protype. I thought I was limting myself into a frame called 'a music box music sheet'. So, I changed my project direction to a website where users can upload their images then using algorithm to convert that images into a music box music only and ordering an actual physical music box as a side option.


![20200924_214049](https://user-images.githubusercontent.com/68723268/94145600-24048380-feb6-11ea-9862-d4866fa12864.gif)

##

### Starting project

Like any reality I faced the wall as soon as I started to research how to convert an image to numbers. When I searched 'How to convert an image to number' on Google only came up with things that I won't understand.

I also researched how to turn numbers to music. I got an idea from this website.

https://www.learnchordal.com/turning-numbers-into-music

http://musicalgorithms.org/4.1/app/#/home

#### Test /  Image to Number (PHP)

https://stackoverflow.com/questions/16994797/convert-image-in-to-numbers


It came up with numbers when I applied an image but it also had indications which array and which colours it was. Also another problem was I can only convert very small files.

Used image (Below)

![119885587_624730951769409_7588470395021440458_n](https://user-images.githubusercontent.com/68723268/94150168-28cc3600-febc-11ea-9052-0ba92aa87f43.jpg)


Used Code from the website by Marcelo Pascual (Below)

![Capture](https://user-images.githubusercontent.com/68723268/94150681-ccb5e180-febc-11ea-94b5-6ad3a408fd6c.JPG)

## Outcome

![ss](https://user-images.githubusercontent.com/68723268/94150888-0dadf600-febd-11ea-8815-01fd95189c34.JPG)

So I decide to talk to Karen when I couldn't figure this out on my own. But I got a reply that there is a easier way to extract numbers from image in Processing. I was like what was I doing the whole time hahaha.

## Theoritically thinking of the process of converting an image to numbers

Because there is only 88 notes on the piano but there can be also 144 on music box.
And we need to think that each pixel contain RGB 0 - 255 and there is a lot of pixel in an one image.
So we need to pixelate and degrade the image quality in order to get the right amount of numbers we want from the image.


![Captuzzze](https://user-images.githubusercontent.com/68723268/94152072-83ff2800-febe-11ea-8bb7-5fcd3db4b06e.JPG)


And extract variable that best suit to music notes. Still figuring out which method I need to use...
