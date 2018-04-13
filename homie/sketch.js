
  var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1GW9Y74h-HaiVV18s7uTgyI6mVNWDEM6BugmLfrAGM18/edit?usp=sharing';

  function init() {
      Tabletop.init( { key: publicSpreadsheetUrl,
                       callback: showInfo,
                       simpleSheet: true,
                       debug:true } )
    }

  var houseData;

  function showInfo(data, tabletop) {
      houseData = data;
    }
  window.addEventListener('DOMContentLoaded', init)


function setup() {
  createCanvas(windowWidth, windowHeight);
}


function draw() {
  background(0);
  if (houseData) {
    for (var i = 0; i < houseData.length; i++) {
      dateFrom = houseData[i].date;
      d1 = dateFrom.split("/");

      var from = new Date(d1[2], parseInt(d1[0])-1, d1[1]); 
      var to = new Date();
      to.setDate(from.getDate() + 7);
      var current = new Date();

      if (current < to && current > from) {
        console.log("from date is:" + from + ".. to date is:" + to);
      }

      // console.log(houseData[i].date);
      // fill(255);
      // ellipse(random(width), random(height), 20, 20);

      // cmd + shift + P to show
    }
  }
}

// new Date(year, month [, day [, hours [, minutes [, seconds [, milliseconds]]]]]);

// Sun Apr 08 2018 00:00:00 GMT-0700 (PDT)
// Sun Mar 18 2018 00:00:00 GMT-0700 (PDT)
// Sun Mar 25 2018 00:00:00 GMT-0700 (PDT)

// sketch.js:37 from date is:Sun Mar 18 2018 00:00:00 GMT-0700 (PDT).. to date is:Wed Apr 25 2018 07:21:03 GMT-0700 (PDT)
// sketch.js:37 from date is:Sun Mar 25 2018 00:00:00 GMT-0700 (PDT).. to date is:Wed May 02 2018 07:21:03 GMT-0700 (PDT)
// sketch.js:37 from date is:Sun Apr 08 2018 00:00:00 GMT-0700 (PDT).. to date is:Sun Apr 15 2018 07:21:03 GMT-0700 (PDT)
// sketch.js:37 from date is:Sun Mar 18 2018 00:00:00 GMT-0700 (PDT).. to date is:Wed Apr 25 2018 07:21:04 GMT-0700 (PDT)
// sketch.js:37 from date is:Sun Mar 25 2018 00:00:00 GMT-0700 (PDT).. to date is:Wed May 02 2018 07:21:04 GMT-0700 (PDT)
// sketch.js:37 from date is:Sun Apr 08 2018 00:00:00 GMT-0700 (PDT).. to date is:Sun Apr 15 2018 07:21:04 GMT-0700 (PDT