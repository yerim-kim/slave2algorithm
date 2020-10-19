//playing with text
PFont didot;
float spin=0;

void setup(){
  size(500,500);
  background(255);
  fill(0);
  smooth(4);
  didot=loadFont("Didot-48.vlw");
  textAlign(CENTER, CENTER); //horizontal align, vertical align
  frameRate(33); //this sets the animation speed (frames per sec)
}
void draw(){
  fill(0);
  translate(width/2,height/2);
  spin+=.1;
  rotate(spin);
  textFont(didot);
  textSize(48);
  text("Slave 2 The Algorithm",0,0);
  fill(255,20);
  noStroke();
  rect(-width/2,-height/2,width,height);
}

void keyPressed(){
  background(255); //clears the background
}
