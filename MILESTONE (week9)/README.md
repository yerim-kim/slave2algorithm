# MILESTONE (WEEK9)

## Project Continue

![image](https://user-images.githubusercontent.com/68723268/94731108-96d69880-03a7-11eb-9d5d-5c4bb1fbcb58.png)

//sketch by Rodrigo Treviño Sáenz
import processing.pdf.*;
PImage a;
//Chage pixSize to change pixel Size
int pixSize = 75;
void setup()
{
//Load image from data folder
a = loadImage("donut.JPG");
//set window size to picture size
size(900,600);
noStroke();
background(255);
smooth();
}
void draw()
{
//Specify your pdf’s name.
beginRecord(PDF, "donut.JPG");
for (int i = 0; i < a.width; i+=pixSize){
for (int j = 0; j < a.height; j+=pixSize){
color pix = a.get(i, j);
float bright = brightness(pix);
println(bright);
fill(pix);
noStroke();
//ellipse(i,j,int(leaps*(bright)/255),int(leaps*(bright)/255));
rect(i+1,j+1,pixSize-2,pixSize-2);
}
}
noLoop();
endRecord();
}


![image](https://user-images.githubusercontent.com/68723268/94731270-d9987080-03a7-11eb-859a-b4c3a57eeca6.png)
