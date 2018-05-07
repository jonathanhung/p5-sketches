
let bubbles = [];
let moveVal = 10;

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  for (i = 0; i <= 20; i++) {
      let b = new Bubble(300, 300, random(10,100));
      bubbles.push(b);
  }

  newguy = createButton("Who's the new guy?");
  newguy.mousePressed(function() {newBub(500, 500)});

  apple1 = createButton("Take one Apple.");
  apple1.mousePressed(rmBub);

  setInterval(grow, 4000)

}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function newBub(x, y) {
  let b = new Bubble(x, y, random(10,100))
  bubbles.push(b);
}

function grow() {
  numApples = getRndInteger(1,5);
  for (i = 0; i < numApples; i++) {
    newBub(100,100);
    console.log(bubbles);
  }

}

function rmBub() {
  let m = (bubbles.length - 1);
  let victim = getRndInteger(0, m);
  console.log(victim);
  bubbles.splice(victim, 1);
  // update state in database
}



function draw() {
  background(240);

  for (let i = 0; i < bubbles.length ; i++) {

      var distance = dist(mouseX, mouseY, bubbles[i].x, bubbles[i].y);

      if (distance < bubbles[i].r) {
        bubbles[i].hovered = true;
      } else {
        bubbles[i].hovered = false;
      }

      bubbles[i].show();
  }

}



function mousePressed() {
  for (let i = 0; i < bubbles.length ; i++) {
      bubbles[i].clicked(mouseX, mouseY);
  }
}

/// will replace with "cherry object" that has natural "sway"

class Bubble{
  constructor(tx, ty, tradius) {
    this.x = tx;
    this.y = ty;
    this.r = tradius;
    this.fillColor = 255;
    this.set = true;
    this.hovered = false;
    this.highlight = color(0,0,0);
  }

// replace move with sway function

  move() {
    this.x = this.x + random((moveVal * -1), moveVal);
    this.y = this.y + random((moveVal * -1), moveVal);
  }


  clicked(px, py) {
      let d = dist (px, py, this.x, this.y);
      if (this.hovered && this.set) {
        this.fillColor = 100;
        this.set = false;
      } else if (this.hovered) {
        this.fillColor = 255;
        this.set = true;
      }
  }

  yell() {
    console.log("blah!");
  }


  show() {
    fill(this.fillColor);
    stroke(this.highlight);
    ellipse(this.x, this.y, this.r);
  }


}
