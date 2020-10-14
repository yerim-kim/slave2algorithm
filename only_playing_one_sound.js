//Yerim Kim
//SLAVE TO THE ALGORITHM PROJECT
//[REMEMBER U] - IMAGE SONIFICATION

//[REFERENCE]
// "Shifting shapes and changing colors" by pbay [https://editor.p5js.org/pbay/sketches/ryMUDIVZN]
// "p5. SoundLoop" from p5.js Reference page [https://p5js.org/reference/#/p5.SoundLoop]
// "p5.js How to displat text menu before game starts" by Magic Monk [https://www.youtube.com/watch?v=TgHhEzKlLb4]
// "Pixelate with processing" by Rodrigo Trevino Saenz [https://byrodrigo.wordpress.com/2010/09/24/pixelate-with-processing/]
// "p5.js Pixelation and pixelated image into sound" help from Karen


var mode, pix, bright,button;
var backgroundColor, isOverRectangle;

let pixSize = 70;
let logo,input, bground, img;

//MUSIC LOOP PLAYER
let synth, soundLoop;
let intervalInSeconds = 0.2;



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
  button = createButton('PLAY');
  button.position(100,200);
  button.size(60,30);
  button.mousePressed(togglePlaying);
  
  //Sound player 
  soundLoop = new p5.SoundLoop(onSoundLoop, intervalInSeconds);
  
  synth = new p5.MonoSynth();
  
}


function draw() {
 
  background(bgcolour);
  
  //FOR RECTANGLE BUTTON
  if (mouseX >= 587 && mouseX <= 587+120 && mouseY >= 616 && mouseY <= 616+50) {
    isOverRectangle = true;
  } else {
    isOverRectangle = false;
  }

  
  // "REMEMBER U" MAIN PAGE
  if (mode==0) {
    
    //RECTANGLE "start" BUTTON
    rectMode(CORNER);
    noStroke();
    if(isOverRectangle == true) {
      fill(176,187,217);
       cursor(HAND);
    } else {
      fill(142,121,216);
       cursor(ARROW); 
  }
    buttonish = rect (587,616,120,50);
    
    
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
    button.hide();
}
  
  
   //LANDING PAGE
   if (mode==1) {
    
    //MAINPAGE HIDE
    buttonish = clear();
    
    maintext1 = clear();
    maintext2 = clear();
    maintext3 = clear();
    maintext4 = clear();
    
    Logo = clear();
    
    //LANDING PAGE UPLOADER SHOW
    input.show();
    
    button.show();
    
    background(255);
    
    //LANDING PAGE [HEADER TEXT]
    fill(26,24,89);
    textSize(21);
    textFont('Courier New');
    Title = text('Upload your image here...Then press "PLAY" :)',90,100);
    
   
     //testing
     //pg.background(pgbground);
     //cnv =image(pg,100,800, 100,100);
    
    //IMAGE PIXELATION+PIXEL SOUND
    if (img) {
          notePattern=[];
    image(img,0,0,img.width,img.height);
        for (var x = 0; x < img.width; x+=pixSize){
    for (var y = 0; y < img.height; y+=pixSize){

     pix = get(x,y);

     //pix = get(int(x+pixSize/2),int(y+pixSize/2));

     //console.log('pix:'+pix);
     bright = brightness(pix);
    //console.log ('bright:'+bright);
    fill(pix);
    strokeWeight(1);
    stroke(pix);
    rect(x+1,y+1,pixSize-1,pixSize-1);


    notePattern.push(int(pix));

  //notePattern=[];
    //notePattern.push(pix);

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
    image(img, 0,0, img.width, img.height);

    img.hide();
  } else {
    img = null;
  }
}


function mousePressed() {
    if (isOverRectangle == true) {
        mode = 1;
  }
  console.log(notes);
}

//SOUND PLAYER BUTTON
function togglePlaying(){
  console.log(notePattern);
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
