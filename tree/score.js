
var scores = [1, 2, 3, 4]

function setup() {
  // put setup code here
  createCanvas(800, 600);


  button1 = createButton("player 1");
  button1.mousePressed(function() {increaseScore(1, 1)});

  button2 = createButton("player 2");
  button2.mousePressed(function() {increaseScore(2, 1)});


  // button3 = createButton("player 3");
  // button3.mousePressed(increaseScore(3, 1));

}

function increaseScore(player, val) {
  var currentScore = scores[player - 1];
  scores[player - 1] = currentScore + val;
}


function draw() {
  background(240);
  textAlign(CENTER);
  text(scores[0], 200 , 200);
  text(scores[1], 600 , 200);
  text(scores[2], 200 , 600);
  text(scores[3], 600 , 600);

  // for (i = 0; i < scores.length; i++) {
  //     text(scores[i], 200 + (400* (i % 2)), 200 + (400 * (i %2)));
  //   }

// Vehicle stuff

  var v = new Vehicle(800/2, 600/2);
  var mouse = new PVector(mouseX, mouseY);

  // Draw an ellipse at the mouse position
  fill(200);
  stroke(0);
  strokeWeight(2);
  ellipse(mouse.x, mouse.y, 48, 48);

  // Call the appropriate steering behaviors for our agents
  v.seek(mouse);
  v.update();
  v.display();

}





/// will replace with "cherry object" that has natural "sway"
