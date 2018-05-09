

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


// how to snap move arrays into place? define a custom function that takes a beginning and an end?
// Look into the scrollMagic docs maybe there's already a function for it
// easing?
// adding text as a scene.. 


// loop through triggers to bind events


for (var i=0; i < triggers.length ; i++) {
        console.log(i);
        // var target = sceneObjects[i];
        // console.log(target);
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
                let target;
                    switch (this.triggerElement().id) {
                      case 'trigger-0':
                        target = sceneObjects[0];
                        break;
                      case 'trigger-1':
                        target = sceneObjects[1];
                        break;
                      case 'trigger-2':
                        target = sceneObjects[2];
                        break;
                      case 'trigger-3':
                        target = sceneObjects[3];
                        break;
                      default:
                        console.log('not supposed to be here!');
                        break;
                    }
                    console.log('target: ', target);
                    moveArray(target, - (this.progress() * 600));
              })
              .addIndicators()
              .duration(dur)
              .addTo(controller);
}




// map e.progress to distance the objects must travel
// var progress = scene.progress();

// console.log(sceneObjects);
