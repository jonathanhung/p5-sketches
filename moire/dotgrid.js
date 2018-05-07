
let dotgrid1 = [];

function setup() {
  // put setup code here
  createCanvas(1200, 800);

}

function generateDotGrid(numRow, numColumn, space) {
   for (let col = 0; col < numColumn; j++) {
     elipse((col * space), 100, 5);
   }
}


function draw() {
  background(240);
  generateDotGrid(10, 10, 6);


}
