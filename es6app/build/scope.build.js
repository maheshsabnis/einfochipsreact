"use strict";

function doWork(x) {
  if (x) {
    var _y = 10;
    console.log('in side if y = ' + _y);
  }

  y++;
  console.log('out side if y = ' + y);
}

doWork(true);
doWork(false);
