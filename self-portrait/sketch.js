var selfie;
var Xc = 0;



function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  // background(0, 65, 2);
}

function draw() {
  // put drawing code here
  // ellipse, line, arc, point

  rectMode(CENTER);
  fill(255,0,0);
  rect (width/2, height/2, 200, 200);


  if (mouseX > 200) {
    background(255,255,4);
  }

  // bouncing
  // circle1.x = circle1.x + 3;
  // ellipse(circle1.x, circle1.y, circle1.diameter);
  
}