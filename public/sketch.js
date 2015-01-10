/*
  CODE HEDGEHOG
  Keyboard drum kit with P5.js
  @author Stephen Monslow
*/
var img;

var kick;
var snare;
var ride;

var backgroundColour = 0;

function setup() {
    createCanvas(displayWidth, displayHeight);

    img =  loadImage('assets/images/drum-kit.png');

    kick  = loadSound('assets/sounds/kick.wav');
    snare = loadSound('assets/sounds/snare.wav');
    ride  = loadSound('assets/sounds/ride-1.wav');

    ride.setVolume(0.18);
}

function draw() {
    background(backgroundColour);
    image(img, 0,0, displayWidth/2, displayHeight/2);
}

function keyPressed() {
  var hit = true;

	if(key == 'A') {
	  kick.play();
	} else if (key == 'T') {
	  ride.play();
	} else if (key == 'S') {
    snare.play();
  } else {
    hit = false;
  }

  if(hit === true) {
      backgroundColour = color(255, 0, 0);
  }
}

function keyReleased() {
  backgroundColour = color(0);
}