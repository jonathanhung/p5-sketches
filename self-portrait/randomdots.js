var selfie;
var Xc = 0;

var circle1 = {
	x: 0,
	y: 200,
	diameter: 50
}

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  selfie = loadImage("assets/selfie.jpg");
  image(selfie, 0,0, selfie.width/3, selfie.height/3);
  // background(0, 65, 2);
}

function draw() {
  // put drawing code here
  // ellipse, line, arc, point


  // make random circles
  stroke (0,0,0);
  fill (random(0,255),random(0,255),random(0,255),40);
  ellipse(random(width), random(height), circle1.diameter);


  // bouncing
  // circle1.x = circle1.x + 3;
  // ellipse(circle1.x, circle1.y, circle1.diameter);
  
}