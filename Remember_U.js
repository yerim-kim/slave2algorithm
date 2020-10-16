//Yerim Kim / S3657507
//SLAVE TO THE ALGORITHM PROJECT
//[REMEMBER U] - IMAGE SONIFICATION

// [CODE REFERENCES]
// "Shifting shapes and changing colors" by pbay [https://editor.p5js.org/pbay/sketches/ryMUDIVZN]
// "p5. SoundLoop" from p5.js Reference page [https://p5js.org/reference/#/p5.SoundLoop]
// "p5.js How to display text menu before game starts" by Magic Monk [https://www.youtube.com/watch?v=TgHhEzKlLb4]
// "Pixelate with processing" by Rodrigo Trevino Saenz [https://byrodrigo.wordpress.com/2010/09/24/pixelate-with-processing/]
// "p5.js Pixelation and pixelated image into sound" help from Karen
// "Colorz every second" by Allison Parrish [https://editor.p5js.org/allison.parrish/sketches/H1__vQxiW]
// "Audio Viz -Starter" by Mike Brondbjerg [https://www.openprocessing.org/sketch/695618]
// [https://genekogan.com/code/p5js-perlin-noise/]
// ======================================================================================


var mode, pix, bright,button;
var backgroundColor, isOverRectangle;

//testing
var t;

let pixSize = 70;
let logo,input, bground, img, buttonish, rounding,font;
let circleColor = 0;

//MUSIC LOOP PLAYER
let synth, soundLoop;
let intervalInSeconds = 0.2;

//SOUND VISUALISATION TESTING
let song;
let amp;


function preload() {
  
  logo = loadImage('logo.png');
  //font = loadFont('BerlinSansFB-Reg-40.vlw');
}


function setup() {
  mode = 0;
  createCanvas (windowWidth, windowHeight);
  bgcolour = color (26, 24, 89);
  //testing
  t=0;
  
  input = createFileInput(handleFile, true);
  input.position(100,150);
  
  //SEPARATE CANVAS FOR sound PLAYER
  button = createButton('PLAY');
  button.position(100,200);
  button.size(60,30);
  button.mousePressed(togglePlaying);
  
  //Sound player 
  soundLoop = new p5.SoundLoop(onSoundLoop, intervalInSeconds);
  synth = new p5.MonoSynth();
  amp =new p5.Amplitude();
 
}


function draw() {
 
  background(26, 24, 89,180);
  
  //FOR RECTANGLE BUTTON TO FIT IN THE RECTANGLE AREA
  if (mouseX >= width*0.5-60 && mouseX <= width*0.5+60 && mouseY >= 618 && mouseY <= 618+50) {
    isOverRectangle = true;
  } else {
    isOverRectangle = false;
  }

  
  // "REMEMBER U" MAIN PAGE
  if (mode==0) {
    
    //testing
     var x = width * noise(t);
     var y = height * noise(t+5);
     var r = 255 * noise(t+10);
     var g = 255 * noise(t+15);
     var b = 255 * noise(t+20);
     noStroke();
     fill(r,g,b);
     ellipse(x,y,120,120);
     t = t + 0.01;
     
     var a = width * noise(t+15);
     var A = height * noise(t+8);
     triangle(a, A, 58, 20, 86, 75);
    
    //RECTANGLE "start" BUTTON AND TO SWITCH COLOR WHEN THE MOUSE IS OVER THE RECTANGLE
    rectMode(CENTER);
    noStroke();
    if(isOverRectangle == true) {
      fill(176,187,217);
       cursor(HAND);
    } else {
      fill(142,121,216);
       cursor(ARROW); 
  }
    //MAIN PAGE RECTANGULAR BUTTON
    buttonish = rect (width*0.5,641,120,50);
    
    
    //MAINPAGE TEXTS
    fill(255);
    textSize(21);
    textFont('Courier New');
    textAlign(CENTER,CENTER);
    maintext1 = text('"Imagine making your precious memories into a music"', width*0.5,450);
    textSize(16);
    maintext2 = text('CLICK -start- TO HEAR YOUR MEMORIES',width*0.5,580);
    textFont('Trebuchet MS');
    textSize(30);
    maintext3 = text('Remember U', width*0.5,350);
    maintext4 = text('START',width*0.5,642);
    textSize(12);
    fill(r,g,b);
    maintext5 = text('SLAVE TO THE ALGORITHM / YERIM KIM', width*0.75, 60);
  

    
    //LOGO ON MAINPAGE
    imageMode(CENTER);
    Logo = image(logo,width*0.5012,210,233,248.5);
    
    //LANDING PAGE HIDE
    input.hide();
    button.hide();
}
  
  
   //LANDING PAGE
   if (mode==1) {
    cursor(ARROW);
     
     
    //MAINPAGE HIDE
    buttonish = clear();
    
    maintext1 = clear();
    maintext2 = clear();
    maintext3 = clear();
    maintext4 = clear();
    
    Logo = clear();
    
    //LANDING PAGE SHOW
    input.show();
    button.show();
    background(255);
    
    //LANDING PAGE [HEADER TEXT]
    fill(26,24,89);
    textSize(21);
    textAlign(LEFT);
    textFont('Courier New');
    Title = text('Upload your image here...Then press "PLAY" :)',95,100);
    
    
    //IMAGE PIXELATION+PIXEL SONIFICATION
    if (img) {
    notePattern=[];
    imageMode(CORNER);
    image(img,0,0,img.width+50,img.height+50);
        for (var x = 0; x < img.width; x+=pixSize){
    for (var y = 0; y < img.height; y+=pixSize){
    pix = get(int(x+pixSize/2),int(y+pixSize/2));
    bright = brightness(pix);
    rounding = ceil(bright*0.88);
     
    fill(pix);
    strokeWeight(1);
    stroke(pix);
    rectMode(CORNER);
    rect(x,y,pixSize,pixSize);
    
    notePattern.push(int(rounding));
    }
   }
  }
  
  //SOUND VISUALISATION
  var vol = amp.getLevel();
  var diam = map(vol,0,0.8,10,200);
   
   noStroke();
   fill(circleColor);
   var myEllipseSize = 2 * diam;
   ellipse(mouseX,mouseY,myEllipseSize,myEllipseSize);
     if (frameCount % 60 == 0) {
          circleColor = color(random(255), random(255), random(255), 200);
    }
 }
}


//FILE UPLOADER ON LANDING PAGE
function handleFile(file) {
  print(file);
  if (file.type ==='image') {
    img = createImg(file.data,'');
    img.hide();
  } else {
    img = null;
  }
}

//MOUSE FUNCTION FOR MOVING TO LANDING PAGE
function mousePressed() {
    if (isOverRectangle == true) {
        mode = 1;
  }
}

//SOUND PLAYER BUTTON
function togglePlaying(){
  console.log(notePattern);
  // ensure audio is enabled
  userStartAudio();
  if (soundLoop.isPlaying) {
    soundLoop.stop();
    button.html("PLAY");
   
  } else {
    // start the loop
    soundLoop.start();
    button.html("STOP");
     soundLoop.setVolume();
}
}

function onSoundLoop(timeFromNow) {
  let noteIndex = (soundLoop.iterations - 1) % notePattern.length;
  let note = midiToFreq(notePattern[noteIndex]);
  synth.play(note, 0.8, timeFromNow);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

}
