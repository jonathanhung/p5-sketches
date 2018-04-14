
function preload() {
	img = loadImage('icecream.svg');
}

function pic(x,y) {
	this.x = x;
	this.y = y;

	this.display = function() {
		image(img, x, y);
	}
}

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
	var icecream = newpic(200,200);
	icecream.display();
}

function draw() {
  // put drawing code here



}
