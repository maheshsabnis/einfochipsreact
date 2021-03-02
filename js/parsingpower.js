var v1 = "123xyz";
var v2 = parseInt(v1); // only parse value of  v1 from left-to-right as numeric till the character not found
console.log(v2);

var v3 = "23.90hjg";
var v4 = parseFloat(v3);
console.log(v4);
console.log(parseInt(v3));

var v5 = v4.toString();
console.log('type of v5 = ' + typeof(v5));