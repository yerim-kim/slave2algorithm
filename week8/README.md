# WEEK8

## Quick presentation 2/Individual Project Pseudocode/Paper Prototype 2/Project WIP

### Paper Prototype 2

My plan changed a little bit more from the last paper protype. I thought I was limting myself into a frame called 'a music box music sheet'. So, I changed my project direction to a website where users can upload their images then using applied algorithm to convert that images into a music box music only and ordering an actual physical music box as a side option.


![20200924_214049](https://user-images.githubusercontent.com/68723268/94145600-24048380-feb6-11ea-9862-d4866fa12864.gif)

##

### Remember U (Slave to the Algorithm Final Project)

Remember U

Image Sonification on User Interactive Web

Project deliverables: website and music box sound from an image

Backstory:
It is a project responding the current social problem, Corona, where it is spreading and infecting us physically but also our minds. I have strong belief that music has power of healing and therapuetic to anxiety and depression. Also I believe by using our good memories from before pandemic we can regain our self-esteem, our positive energy decreased significantly due to extended restrction and 'the state of disaster'.
I also want users to realise how much positive efforts we put into our lives before to be where we are now.
This project is addressed to me personally and others who are having similar mental struggle like me during the Covid 19.

### Starting project

Like any reality I faced the wall as soon as I started to research how to convert an image to numbers. When I searched 'How to convert an image to number' on Google only came up with things that I won't understand.

I also researched how to turn numbers to music. I got an idea from these websites.

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

So I decide to talk to Karen when I couldn't figure this out on my own. I got a reply that there is a easier method to extract numbers from images in Processing. I was like what was I doing the whole time hahaha.

## Theoritically thinking of the process of converting an image to numbers

I had a lot of decision makings to do. Like how many notes I want for the music box to play. My favourite options were 0 to 88 (piano notes) and 0 to 144 (musicbox notes)
I also need to consider that each pixel contains RGB of 0 - 255 and there is a lot of pixels in an one image.
More options to choose whether get get values of image hue, image brightness, image contrast ande much more to options to think about.
Logically thinking there will be millions of pixels reside in an one single good quality image so I need to pixelate into mosaic form (simple hues) and degrade the image quality in order to get the right amount of numbers that I require.


![Captuzzze](https://user-images.githubusercontent.com/68723268/94152072-83ff2800-febe-11ea-8bb7-5fcd3db4b06e.JPG)


And extract numbers that best suits the available music notes (whtether between 0-88 and 0-144). Still figuring out which method I need to use...
