// Yerim's Slave to the Algorithm Project(Remember U)


// REFERENCES
// menu page by Magic Monk from YouTube (youtube.com/watch?v=TgHhEzKlLb4)
// Uploading media file Tutorial by The Coding Train from YouTube (youtube.com/watch?v=rO6M5hj0V-o)

var mode, pix, bright;
let pixSize = 70;
let logo, input, bground, img;

function preload() {
  
  //logo
  logo = loadImage('logo.png');
}


function setup() {
  
  mode = 0; //the main page
  createCanvas(windowWidth, windowHeight);
  bgcolour = color(26,24,89);
  
  
  //Image Uploader
  input = createFileInput(handleFile,true);
  input.position(100,150);
  
  
  //start button
  //button = createButton('START');
  //button.position(30, 600);
  //button.size(100,50);
  //button.mousePressed();
}



function draw() {
  background(bgcolour);
  
  
  // Main Page
  if (mode==0) {
    
    //box
    fill(142,121,216);
    button = rect(587,616,120,50);
    
    
    //TEXTS
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
    
    //logo
    Logo = image(logo,530,70,233,248.5);
    
    //For Uploading Page
    input.hide();  
  }
  //Uploading Page
  if (mode == 1) {
    
    canvas =clear();
    
    button = clear();
    
    maintext1 = clear();
    maintext2 = clear();
    maintext3 = clear();
    maintext4 = clear();
    
    Logo = clear();
    
    //For Uploading Page
    input.show();
    
    background(255);
    
    //Title Text
    fill(26,24,89);
    textSize(21);
    textFont('Courier New');
    Title = text('Upload your image here...',90,100);
    
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
    
    var index =(x+y*img.width)*4;
    var r = img.pixels[index + 0];
            var g = img.pixels[index + 1];
            var b = img.pixels[index + 2];

            brightness += (r + g + b) / 3;
            inc ++;
            console.log(inc, r , g, b);
    
}
}
gotBright = true;
      brightness = brightnesss/inc;
  } 
  
  }   
}

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
  if (mouseIsPressed == true) {
    mode = 1;
  }
}
