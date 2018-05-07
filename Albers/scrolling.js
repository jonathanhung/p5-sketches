// setting up the page

var totalScroll = 30000;
var scenelength = totalScroll / numScenes;
var numScenes = sceneObjects.length;
var initialDist = 600; // the amount to transform in order to get all elements off-canvas

// binding scroll event to move the object.

var controller = new ScrollMagic.Controller();

// define all divs as triggers

var triggers = document.querySelectorAll("div.spacer");

// loop through triggers to bind hello world function
// May 1, 2018 - try with one.

for (var i=0; i<triggers.length; i++) {
        new ScrollMagic.Scene({triggerElement: triggers[i] })
                .on("progress", function (e) {
                  console.log(e.progress.toFixed(3));
                })
                .addIndicators()
            // .on("enter leave", function(e) {
            //   console.log("Hello World!");
            // })
                .addTo(controller);
    }

// map e.progress to distance the objects must travel
// var progress = scene.progress();

// console.log(sceneObjects);
