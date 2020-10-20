var song; //
var analyzer;
function preload(){
  song = loadSound('Joseph Vincent & Jules Aurora - Rewrite The Stars.mp3');
}
function setup() {
 createCanvas(windowWidth,windowHeight);
 background(0);
 fill(0,255,0);
 //song.loop();
 
 analyzer= new p5.Amplitude();
 analyzer.setInput(song);
 stroke(255);
}


function draw() {
 background(0,50);
 var volume=analyzer.getLevel();
 volume=(volume*windowWidth)+60;
 ellipse(windowWidth/2, windowHeight/2, volume,volume);
}

function mousePressed(){
  if (song.isPlaying()) {
    song.stop();
    song.noloop();
    fill(0,255,0);
  } 
  
  else{
  fill(255,0,0);
  song.play();
  song.loop();
}
}
