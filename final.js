//Yerim Kim
//SLAVE TO THE ALGORITHM PROJECT
//[REMEMBER U] - IMAGE SONIFICATION

//[REFERENCE]
//I WILL WRITE THIS SOONNNN.....


var mode, pix, bright;
let pixSize = 70;
let logo,input, bground, img, pg, pgbdround;

//MUSIC LOOP PLAYER
let synth, soundLoop;
let intervalInSeconds = 0.2;

//I USED MUSIC NOTES FROM DONUT IMAGE
//HOPE I CAN GET NOTE DATA FROM UPLOADED IMAGES INSTEAD
let notePattern = [50,2,33,16,83,64,58,22,81,55,67,69,21,40,31,57,26,81,43,47,23,4,33,64,52,59,81,43,81,59,79,40,83,88,52,81,47,59,67,76,47,76,16,22,81,50,79,21,10,35,62,50,23,81,52,43,43,11,11,43,59,86,81,55,52,55,10,69,47,40,88,81,47,26,81,21,79,57,43,86,81,14,16,35,21,10,62,69,7];



function preload() {
  
  logo = loadImage('logo.png');
}



function setup() {
  mode = 0;
  createCanvas (windowWidth, windowHeight);
  bgcolour = color (26, 24, 89);
  
  input = createFileInput(handleFile, true);
  input.position(100,150);
  
  //SEPARATE CANVAS FOR sound PLAYER
  pg = createGraphics(100,100);
  pg.mousePressed(pgPressed);
  pgbdround = color (26, 24, 89);
  //colorMode(HSB);
  
  //Sound player 
  
  soundLoop = new p5.SoundLoop(onSoundLoop, intervalInSeconds);
  
  synth = new p5.MonoSynth();
  

}


function draw() {
 
  background(bgcolour);

  
  if (mode==0) {
    fill(142,121,216);
    button = rect (587,616,120,50);
    
    //MAINPAGE TEXTS
    fill(255);
    textSize(21);
    textFont('Courier New');
    maintext1 = text('"Imagine making your precious memories into a music"', 320,450);
    textSize(16);
    maintext2 = text('CLICK -start- TO HEAR YOUR MEMORIES',480,580);
    textFont('Berlin Sans FB');
    textSize(30);
    maintext3 = text('Remember U', 560,350);
    maintext4 = text('START',605,650);
    
    //LOGO ON MAINPAGE
    Logo = image(logo,530,70,233,248.5);
    
    //LANDING PAGE FILE UPLOADER
    input.hide();
    
    //TESTING
    pg.clear();
    
    
  }
  
   if (mode==1) {
    
    //MAINPAGE HIDE
    button = clear();
    
    maintext1 = clear();
    maintext2 = clear();
    maintext3 = clear();
    maintext4 = clear();
    
    Logo = clear();
    
    //LANDING PAGE UPLOADER SHOW
    input.show();
    
    background(255);
    
    //LANDING PAGE [HEADER TEXT]
    fill(26,24,89);
    textSize(21);
    textFont('Courier New');
    Title = text('Upload your image here...',90,100);
    textSize(16);
    textFont('Courier New');
    text('tap to start/stop', 100, 910);
    
   
     //testing
     pg.background(pgbdround);
     cnv =image(pg,100,800, 100,100);
    
    //IMAGE PIXELATION
    if (img) {
    image(img,0,0,img.width,img.height);
        for (var x = 0; x < img.width; x+=pixSize){
   for (var y = 0; y < img.height; y+=pixSize){
     pix = get(x,y);
     bright = brightness(pix);
    console.log(bright);
    fill(pix);
    noStroke();
    //ellipse(i,j,int(leaps*(bright)/255),int(leaps*(bright)/255));
    rect(x+1,y+1,pixSize-1,pixSize-1);
    }
   }
  }
   
 }
}

//FILE UPLOADER ON LANDING PAGE
function handleFile(file) {
  print(file);
  if (file.type ==='image') {
    img = createImg(file.data,'');
    image(img, 0,0, img.width, image.height);

    img.hide();
  } else {
    img = null;
  }
}


function mousePressed() {
  if (mouseIsPressed==true) {
    mode = 1;
  }
}

function pgPressed(){
  // ensure audio is enabled
  userStartAudio();
  
   if (soundLoop.isPlaying) {
    soundLoop.stop();
  } else {
    // start the loop
    soundLoop.start();
}
}

function onSoundLoop(timeFromNow) {
  let noteIndex = (soundLoop.iterations - 1) % notePattern.length;
  let note = midiToFreq(notePattern[noteIndex]);
  synth.play(note, 0.5, timeFromNow);
  
}
