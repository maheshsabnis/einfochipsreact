"use strict";

var names = ['james bomd', 'ethan hunt', 'jack reacher', 'indiana jones', 'jason bourn']; // simple iteration ES 3

for (var i = 0; i < names.length; i++) {
  console.log("Names at ".concat(i, "th position is = ").concat(names[i]));
} // simplification of for..loop in ES 3 to ES 5
// the 'in' operator reads data from array by iterating upto length of array


for (var _i in names) {
  console.log("Names at ".concat(_i, "th position is = ").concat(names[_i]));
} // ES6 iterations using for..of loop
// the 'of' operator loads iterator to read enrty at each index of the array  
// the entry at each index is read and it will be returned and counter moves to next index 


for (var _i2 = 0, _names = names; _i2 < _names.length; _i2++) {
  var n = _names[_i2];
  console.log("Names in array = ".concat(n));
}
