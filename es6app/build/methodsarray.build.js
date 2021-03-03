"use strict";

var names = ['james bond', 'ethan hunt', 'jack reacher', 'indiana jones', 'jason bourn']; // show all elements

function printValues(n, i) {
  console.log("name at ".concat(i, "the position is = ").concat(n));
} // explicit funciton callback


names.forEach(printValues);
console.log(); // implicit function callback

names.forEach(function (n, i) {
  console.log("name at ".concat(i, "the position is = ").concat(n));
});
console.log(); // using 'arrow operator' in ES 6
// if a function is accepting 'callback function' as input operator then we can replace
// the callback using arrow operator

names.forEach(function (n, i) {
  console.log("name at ".concat(i, "the position is = ").concat(n));
}); // the filter function
// return elements from array based on condition into new array
// older code

var resultArray = [];

for (var i = 0; i < names.length; i++) {
  if (names[i].length >= 12) {
    resultArray.push(names[i]);
  }
}

console.log(resultArray); // using ES6

var result = names.filter(function (n, i) {
  return n.length >= 12;
});
console.log(result);
