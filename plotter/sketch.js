
let bubbles = [];
let moveVal = 5;

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  for (i = 0; i <= 20; i++) { 
      let b = new Bubble(300, 300, random(10,100));
      bubbles.push(b);
  }

  newguy = createButton("Who's the new guy?");
  newguy.mousePressed(newBub);

  faster = createButton("move faster");
  faster.mousePressed(incMoveVal);
}

function incMoveVal() {
  moveVal = moveVal + 3;
}

function newBub() {
  let b = new Bubble(500, 500, random(10,100))
  bubbles.push(b);
}

// function mousePressed() {
//   for (i = 0; i <= 5; i++) { 
//     bubbles[i].click(mouseX, mouseY);
//   }
// }

// Creates bubbles on mousePress
// function mousePressed() {
//   let rand = random(10,100);
//   let b = new Bubble(mouseX, mouseY, rand)
//   bubbles.push(b);
// }

function draw() {
  background(240);
  
  for (let i = 0; i < bubbles.length ; i++) { 

      var distance = dist(mouseX, mouseY, bubbles[i].x, bubbles[i].y);

      if (distance < bubbles[i].r) {
        bubbles[i].hovered = true;
      } else {
        bubbles[i].hovered = false;
      }

      if (bubbles[i].hovered) {
        bubbles[i].shine();
      } else {
        bubbles[i].dull();
      }

      // console.log(bubbles[i].hovered);

      // make + moving bubbles
      bubbles[i].move();
      bubbles[i].show();
  }
  // circle1.x = circle1.x + 3;
  // ellipse(circle1.x, circle1.y, circle1.diameter);
  
}



function mousePressed() {
  for (let i = 0; i < bubbles.length ; i++) { 
      bubbles[i].clicked(mouseX, mouseY);
  }    
}


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

  shine() {
    this.highlight = color(0, 15, 200);
    strokeWeight(3);
  }

  dull() {
    this.highlight = color(0, 0, 0); 
    strokeWeight(1);
  }

  // hover(tx, ty) {
  //     let d = dist (tx, ty, this.x, this.y);

  //     if (d < this.r) {
  //       this.fillColor = 100;
  //       this.hovered = true;
  //     } else {
  //       this.fillColor = 255;
  //       this.hovered = true;
  //     }
  // }

  show() {
    fill(this.fillColor);
    stroke(this.highlight);
    ellipse(this.x, this.y, this.r);
  }

  // click(tx, ty) {
  //   // use dist function to determine whether the mouseclick is within the object's x and y.
  //   let d = dist (tx, ty, this.x, this.y);
  //   if (d < this.r) {
  //     this.filled(random(0,255))
  //   }
  //  }
}
