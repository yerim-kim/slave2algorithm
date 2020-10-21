# WEEK6
## Project Discussion/ Paper Prototyping/ Processing Class Acitivity

We were divided into a similar project group to help each other and give feedback of our projects. Here I was still unsure what my project will change into so I continued to talk about Game Data Art and also share that I'm thinking of changing my project to something else. I went around the different group to hear and get inspired for my new project. I was strongly gravitate towards the sonification room but their projects were a little different from what I thought sonification was. I thought it would be composing music algorithmically.

Back to the project, I got a feedback and suggestion from Luka and Andy. Luka suggested me about [Artist Simon Weckert](http://simonweckert.com/googlemapshacks.html), who outsmarted Google Maps by using a handcart full of smartphones to trick the app's algorithm into creating a virtual traffic jam. Luka suggested this when I was talking ping and travelling information. The artist's approach was interesting and his intention was to make changes in the physical world by using digital means.

<img width="707" alt="Screen Shot 2020-10-19 at 10 15 02 pm" src="https://user-images.githubusercontent.com/68723268/96443588-961f7c80-1258-11eb-8cd6-b59990b7609f.png">

Andy also shared his opinions in ping. He suggested me about the installation art where we can view informations travelling in the real time by hearing bell ringing when the information arrives.

### Retro Game Paper Prototyping - Andy

Andy taught us about communicating our ideas to industry that we shouldn't just write about how our project is going to be but it is better to communicate our idea through a (paper) protyping, a something tangible to present how my project potentially looks like and work.
So, in this exercise we were asked to make 2D paper prototype of our choosen retro games to show how it work. I think it's really good way to understand how our project going to work in real life and understanding the possible problems. Or even less presure to start the project this way than going into the code first thing.

-Brick Breaker Game-

![20200828_123517](https://user-images.githubusercontent.com/68723268/96445546-cd435d00-125b-11eb-89ff-d25491cea73e.gif)

### Data Sonification Research

After the Karen's lecture I started researching deeply into data sonification. 

1. [Data Sonata by julien levesque](http://www.julienlevesque.net/Data_Sonata/index-en.html)

Julien Levesque, an artist and a designer who enjoys utilising generative codes into his design process. Data Sonata constitutes a series of algorithmic compositions that take the form of vinyl records and music scores. This unqiue classical music outcome was proccessed using individual people's history of geographical positions as recorded by Google over the past year, a musical composition tailor-made according to their recorded activity. The sonata lasts around 10 minutes—equivalent to one year of individual users activity.
"What if we could listen to our data?"
I was inspired by this particular work by Julien because he raised same question when I was thinking of data sonification.(It is probably common thought by people who want to turn data into sound but actually seeing the question in the project proposal I felt the familiarity and finding a trail/lead to my final project. His choosen project outcomes were music sheet and materialized and engraved on a transparent 33” vinyl record which also made me think of way for me store those data into something tangible and solid for users to keep such as CD or a music box.

2. [Quotidian Record (2012) Brian House](https://brianhouse.net/works/quotidian_record/)

Same project approach of data sonification into a music record was done by Brian House. Quotidian Record is a limited edition vinyl recording that interprets a continuous year of my location-tracking data. But for his project it became a lot more personal to him rather than the data made up of other users history. His intention was also a lot more clear compare to Julien; "connecting the value of data today with music culture. It provides an expressive, embodied, and even nostalgic alternative to the narratives of classification and control typical of state and corporate data infrastructure."
I loved his exploration of connecting modern data and music culture to create musical narrative that tells his journey.

I want to incorporate his idea of connecting our life and data sonification where it's just more than a project data into music but creating something with impact and meaningful to whom the data belongs to.

### Uploading Sound in p5.js

![image](https://user-images.githubusercontent.com/68723268/96550736-f405a000-12fc-11eb-953f-c4e6b68b0e0e.png)

I was so excited from coding class because it was closely relate to what I was researching for my final project, data sonification. 
Like with any coding it started of confusing because we moved away from java to p5.js where we can publish our code into a web amd we had to learn program language that suits the p5.js. When we actually got into the code I have noticed it is more of data viusalisation since we are uploading music (data) and using amplitude fucntion we could see the music visually through the vibrant movement of the red circle. Circle was triggered to move by volume of the music when we clicked the canvas.

I still learnt a lot of useful codes such as:
loading music file: loadSound()
new p5.Amplitude(): calculating volume from p5.js sound library

Most useful one my future project was where we can control the music play,stop and loop.
Additional to that we can make a condition by saying if and else to the code.
(https://github.com/yerim-kim/slave2algorithm/blob/master/week6/sound.js)
