var eye = {
	width: 58,
  height: 27
}

var iris = {
  width: 32,
  height: 15
}

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  // background(0, 65, 2);
}

function draw() {
  // put drawing code here
  // ellipse, line, arc, point


  // head
  ellipseMode(CORNER);
  fill(240,224,175);
  ellipse(310, 225, 183, 183);
 
  // eyes
  fill(255);
  ellipse(339, 290, eye.width, eye.height);
  ellipse(418, 290, eye.width, eye.height); 

  fill(97);
  ellipse(360, 288, iris.width, iris.height);
  ellipse(440, 288, iris.width, iris.height); 
}