var s = new Snap('.albers');
Snap.load('alber.svg', function (response) {
    var alber = response;
    s.append(alber);
    });



function move(id, amount) {
   var target = document.getElementById(id);
   var shape = Snap(target);
   shape.transform( 't0,' + amount); // applying transform multiple times needs an addition function
   console.log(shape);
}

// create an expression that moves all objects in the array
function moveArray(targetArray, amount) {
  var arr = targetArray;
  arr.forEach(function(element) {
    move(element, amount);
  })
}
