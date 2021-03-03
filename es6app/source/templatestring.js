let fname = "Mahesh";
let lname = "Sabnis";

// traditional concatination
// 3 string objects concatinated into single string object
// we need to use the 'new line operator' for creating multiline string
let fullname = fname + ' \n ' + lname; 

console.log(fullname);


// using template string
// string objects are used as expressions like ${fname} ${lname}
// template string maintains the scope of strings across multiple lines
// template strings as parsed as HTML template sand will be executed
let fullname1 = `Full name is = 

${fname} ${lname}`;
console.log(fullname1);