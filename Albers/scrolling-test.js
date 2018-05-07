

/// initializing object variables
var sceneObjects = [
    ["side-a", "side-b", "core"],
    ["roof-a", "roof-b"],
    ["floor-a", "floor-b"],
    ["wall-a", "wall-b"]
  ]

// setting up the page

var totalScroll = 30000;
var sceneLength = totalScroll / numScenes;
var numScenes = sceneObjects.length;
var initialDist = 600; // the amount to transform in order to get all elements off-canvas

// dynamically set the height CSS based on initialization params
// var sceneDivs = document.getElementsByClassName("scene");



// binding scroll event to move the object.

var controller = new ScrollMagic.Controller();

// get all spacers

var triggers = document.querySelectorAll("div.scene");

// setting duration to equal height.

var dur = 1600;

// var debug1 =
//       new ScrollMagic.Scene({
//                   triggerElement: "#trigger-1"
//                 })
//               .on("enter", function (e) {
//                 console.log("I am entering");
//               })
//               .on("leave", function (e) {
//                 console.log("I am leaving");
//               })
//               .on("end", function (e) {
//                 console.log("I am ending");
//               })
//               .on("progress", function(e) {
//                 console.log("current progress: " + this.progress());
//                 move('side-a', (this.progress() * 600));
//               })
//               .addIndicators()
//               .duration(dur)
//               .addTo(controller);


// loop through triggers to bind hello world function
var count = 0;

for (var i=0; i < triggers.length ; i++) {
        console.log(i);
        var target = sceneObjects[count];
        new ScrollMagic.Scene({
                  triggerElement: triggers[i]
                })
              .on("enter", function (e) {
                console.log("I am entering");
              })
              .on("leave", function (e) {
                console.log("I am leaving");
              })
              .on("end", function (e) {
                console.log("I am ending");
              })
              .on("progress", function(e) {
                console.log("current progress: " + this.progress());
                moveArray(target, (this.progress() * 600));
              })
              .addIndicators()
              .duration(dur)
              .addTo(controller);
        count++;
}

          // new ScrollMagic.Scene({
          //           triggerElement: triggers[1]
          //         })
          //       .on("enter", function (e) {
          //         console.log("I am entering region " + 1);
          //       })
          //       .on("leave", function (e) {
          //         console.log("I am leaving");
          //       })
          //       .on("end", function (e) {
          //         console.log("I am ending");
          //       })
          //       .addIndicators()
          //       .duration(dur)
          //       .addTo(controller);






// map e.progress to distance the objects must travel
// var progress = scene.progress();

// console.log(sceneObjects);
