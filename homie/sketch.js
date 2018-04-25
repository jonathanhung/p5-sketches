
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

function showart(roommate) {
  alert("Zlatan!");
}


function draw() {
  background(0);
  if (houseData) {
    for (var i = 0; i < houseData.length; i++) {
      var numDays = 7;
      dateFrom = houseData[i].date;

      // bind the date into an array [m, d, yyyy]
      d1 = dateFrom.split("/");

      //
      // new Date(year, month [, day [, hours [, minutes [, seconds [, milliseconds]]]]]);

      var from = new Date(d1[2], parseInt(d1[0] - 1), d1[1]);
      var to = new Date(from.getTime()+ ((1000*60*60*24) * numDays));
      var current = new Date();


      // console.log("from date is:" + from);
      // console.log("year: " + d1[2] + ", month: " + d1[0] + );

      if (current < to && current > from) {
        var currentWeek = houseData[i];
        if (currentWeek["AB"] == "x") {
          alert("Ashley!");
        } else if (currentWeek["ZK"] == "x") {
          showart(zlatan);
        } else if (currentWeek["JM"] == "x") {
          alert("Justin!");
        } else if (currentWeek["JH"] == "x") {
          alert("Jonathan!");
        } else if (currentWeek["JE"] == "x") {
          alert("Jaylinn!");
        }
        // for (var n = 0; n < currentWeek.length; n++) {
        //     console.log("hello!");
        //       if (currentWeek[n]) {
            //   console.log("it is the chore of the person in position: " + n);
            // }
        //   }

        // check for Not undefined?
        // check if property exists JSON. Key:value:

      }


    }

    remove();

  }
}



// from date is:Sun Mar 18 2018 00:00:00 GMT-0700 (PDT).. to date is:Thu Apr 19 2018 21:53:36 GMT-0700 (PDT)
// sketch.js:36 from date is:Sun Mar 25 2018 00:00:00 GMT-0700 (PDT).. to date is:Thu Apr 26 2018 21:53:36 GMT-0700 (PDT)
// sketch.js:36 from date is:Sun Apr 01 2018 00:00:00 GMT-0700 (PDT).. to date is:Mon Apr 02 2018 21:53:36 GMT-0700 (PDT)
// sketch.js:36 from date is:Sun Apr 08 2018 00:00:00 GMT-0700 (PDT).. to date is:Mon Apr 09 2018 21:53:36 GMT-0700 (PDT)
// sketch.js:36 from date is:Sun Apr 15 2018 00:00:00 GMT-0700 (PDT).. to date is:Mon Apr 16 2018 21:53:36 GMT-0700 (PDT)
// sketch.js:36 from date is:Sun Apr 22 2018 00:00:00 GMT-0700 (PDT).. to date is:Mon Apr 23 2018 21:53:36 GMT-0700 (PDT)
// sketch.js:36 from date is:Sun Apr 29 2018 00:00:00 GMT-0700 (PDT).. to date is:Mon Apr 30 2018 21:53:36 GMT-0700 (PDT)
// sketch.js:36 from date is:Sun May 06 2018 00:00:00 GMT-0700 (PDT).. to date is:Sat Apr 07 2018 21:53:36 GMT-0700 (PDT)
// sketch.js:36 from date is:Sun May 13 2018 00:00:00 GMT-0700 (PDT).. to date is:Sat Apr 14 2018 21:53:36 GMT-0700 (PDT)
// sketch.js:36 from date is:Sun May 20 2018 00:00:00 GMT-0700 (PDT).. to date is:Sat Apr 21 2018 21:53:36 GMT-0700 (PDT)
