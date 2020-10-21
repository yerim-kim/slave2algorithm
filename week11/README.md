# WEEK11

### After Consultation

Being honest about where I was stuck in the was what I needed to go to image pixelation step. During the consultation Karen helped me out so much so I can get my code working to get an pixel image. She also make sure to explain what is happening with the code so I can understand and follow along. A below result is from image pixels converted into larger common brightness pixel value in a rectangle form according to pixel size of 70.

I still need to work out the positioning of the rectangles.

![placedddmzzzzzent](https://user-images.githubusercontent.com/68723268/96776633-0256d780-1435-11eb-9d06-60a28699642f.JPG)

##
### Where to from here...

After Friday class I was still struggling to extract pixel brightness values out from the image and convert them into sound. I thought in order to move on from a no progress situation to at least trying something else. I try to code a section by section, dividing the code into different p5.js files. So as a result I ended up with 4 different a mixture of p5.js file and java files.

FILE(1)![musssssice](https://user-images.githubusercontent.com/68723268/96778471-7abe9800-1437-11eb-89aa-6da7ba10cb38.JPG) File(2)![Capturess](https://user-images.githubusercontent.com/68723268/96778872-fcaec100-1437-11eb-9e8b-d1e0377de088.JPG)

* File (1): [Playing sound from numbers code](https://github.com/yerim-kim/slave2algorithm/blob/master/week11/sketch(music))
* File (2): [Pixel brightness (rgb) value extracted](https://github.com/yerim-kim/slave2algorithm/blob/master/week11/Pixel%20Brightness%20value)
* File (3): [Website](https://github.com/yerim-kim/slave2algorithm/blob/master/week11/sketch(website))
* File (4): [Image pixelation code](https://github.com/yerim-kim/slave2algorithm/blob/master/week11/sketch(pixelating%20image))

Soon I realised I was going no where with these separate codes I had to email Karen for help to realign myself. I think I did not understand the concept of 'Uploaded File', not preloaded. My understanding of converting things were stuck in 'Preloaded' image and music. I couldn't figure it out how to convert things from 'createFileInput' and input being 'image'.

##

![USING PG TESTING](https://user-images.githubusercontent.com/68723268/96784979-e275e280-1439-11eb-984d-afad4670aa9e.JPG)

#### Combined the music and web code after taking a feedback from Karen.

* during this process I experimented with 'createGraphic' Function. Because after combining the code I notice the music will play whenever I click the canvas so I thought I could solve this by adding an extra canvas

Karen then helped me with the code that play sound from the imported image's pixel brightness value.

![Capture](https://user-images.githubusercontent.com/68723268/96786696-603aed80-143c-11eb-9af5-5494b1e0eabb.JPG)

### More Trial and Error

* The code only playing one note continuously.

![Capturssdsdsdsde](https://user-images.githubusercontent.com/68723268/96788853-dee55a00-143f-11eb-8b16-d40063438f81.JPG)

* Error: Brightness value was in a decimal format when I checked the consol.log(brightness) that was why it was only playing one note of sound.
  * Solved: So I decide to experiment a bit with rounding, used 'round' first then changed to 'ceil' wso it gives a higher whole number from any decimal numbers.
* Small problem: I noticed now it was giving me muscial array of numbers between 1 to 100 and it was too high pitched for people to hear.
  * Solve: Times 0.88 to bright when rounding with ceil.
  
![Capturzxzxzxzxzxzxe](https://user-images.githubusercontent.com/68723268/96789932-b6f6f600-1441-11eb-8259-651b10b60a48.JPG)

