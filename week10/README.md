## WEEK10

### Pixelating image with Processing - Further experimenting from week 9
After milestone I found more ways to pixelate my images. This code was made by [Jeff Thompson](https://github.com/yerim-kim/slave2algorithm/blob/master/week10/pixelating.pde)
"After an afternoon of working on a Processing project with Alex Myers, I created a Processing sketch that [pixelates and posterizes](https://www.jeffreythompson.org/blog/2012/02/18/pixelate-and-posterize-in-processing/) an image.  Next step (and definitely the hardest) will be to find the weighted center of the pixel areas (not each pixel block but areas of the same color).

From his web blog I have read and understood that he was also working on code to find the value of the image pixels (of similar colours). This proves that my method so far is the right path to convert an image to array of numbers.

![PixelatedAndPosterized_donut](https://user-images.githubusercontent.com/68723268/94733483-2cbff280-03ab-11eb-89bb-736ef36bc95c.jpg)
##

### Building Website using P5.js
From last week I got really started on exploring and learning code in p5.js, so I could build an interactive web platform to take my next step of "[image > pixelation > number > music] move to working web". I employed p5.js online version synced with my Github account because I find it easy to get the fast response to the code results and experiment with code using multiple editors open. 
I mainly explored things that make up the website such as button and transition to a landing page from main page. When I was building these codes I referred to the Youtube tutorial ["p5.js How to display text menu before game starts"](https://www.youtube.com/watch?v=TgHhEzKlLb4) by Magic Monk.
##

![mouswe pressed](https://user-images.githubusercontent.com/68723268/96772113-60cc8780-142e-11eb-8d4a-86bfb03ca065.JPG)

// Inserting Remember U Logo using 'Preload' function

// Smoothly moving from main page to landing page using 'mousepressed' function but going to review again so it works when I press the rectangle 'START' button I made
##

![fixfged](https://user-images.githubusercontent.com/68723268/96772347-bb65e380-142e-11eb-924f-9d37e752bb1c.JPG)

// Put an uploading button for users to upload their image onto the website > 'createFileInput()' inside function set up

### Things I still need to figure out

* How to pixelate user uploaded images on p5.js
* Extract brightness pixel value from the pixelate image
* Play sound from the converted numbers

##

### More Inspiration I found
[Impression, Sunrise (Monet) - Sonification](https://www.youtube.com/watch?v=3vxewNEzh98) by Harry Morley on Youtube

Harry converted an image to an unique sound by simplifying the original image pixel values into an array of larger pixels. He gave each possible image values such as the hue, saturation and brightness a task to control note values.
"base note, which is controlled by the hue value, and the secondary note which is determined by the brightness value. The brightness value is also inversely mapped to the delay time until the next note is triggered. Saturation determines the velocity of the note."

![xx](https://user-images.githubusercontent.com/68723268/96775034-a428f500-1432-11eb-9b3f-261ee0dde347.JPG)



