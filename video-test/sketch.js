var capture;

function setup() {
  background(205);
  createCanvas(585, 360);
  capture = createCapture(VIDEO);
  capture.size(585, 360);
  // capture.hide();


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAqUc17wtqYpI2ncX0MtEN8Xkg6cLY2xug",
    authDomain: "creativecode-brush.firebaseapp.com",
    databaseURL: "https://creativecode-brush.firebaseio.com",
    projectId: "creativecode-brush",
    storageBucket: "creativecode-brush.appspot.com",
    messagingSenderId: "1576541708"
  };
  firebase.initializeApp(config);


  // add buttons that do stuff
  add = createButton("Add pixels to DB");
  add.mousePressed(addPixels);

  button2 = createButton("snap Latest pixels");
  button2.mousePressed(snapPixels);


}

var currentPixels = [];

var imgHistory = [];

function addPixels() {
  var data = {
    id: 1,
    pixels: currentPixels,
  }

  var database = firebase.database();
  var ref = database.ref('layers');

  ref.push(data);
}


function snapPixels() {

  // create an image to add to canvas based on capture
  let img = capture.get();
  img.loadPixels();

  // draw
  image(img, 0, 0);

  imgHistory.push(img);
  console.log(imgHistory);


  // weird that it images dont have pixels array filled. Needs to be drawn in order to fill it out?
}

function draw() {


  // process and load image
  loadPixels();
  pixelDensity(0.1);
  updatePixels();

  // this code didn't work like i thought it would... hoping that you could store the pixels in the image object..
  // l = imgHistory.length - 1;
  // imgHistory[l][0].pixels = pixels;



  // update current pixels array
  currentPixels = pixels;

  // console.log(currentPixels);


  // filter('INVERT');
}
