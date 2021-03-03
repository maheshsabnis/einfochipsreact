# JavaScript Programming

1. Features
   1. The 'var' is a varient to define a varibale in JavaSript
      1. No Scope
   2. The 'function' is used for
      1. Defining re-usable code-block
      2. Functions Objects aka classes
         1. Defining Ref Type Function Object (use by jQuery)
            1. Store the reference of the function in variant (var declaration)
            2. All functions inside ref. function those are prefixed by 'this' will be used as public function otherwise all function are private
            3. To use this function, it must be instantiated using 'new' nmoniker
            4. To extend this function (like inheritance) use 'prototype'
         2. Defining Close-Type Function Object
            1. They are function blocks those who returns the 'JSON object'
               1. JSON object --> {}
            2. This JSON object contains public function/properties those are accessible out of the function block 
            3. The JSON object is always singleton
   3. The 'array' is the only Data Structure
   4. Explicit Value-Parsing
      1. parseInt() / parseFloat()
      2. toString()
   5. Everthing is object
      1. Object
      2. Funciton
      3. var declaration
      4. Date
      5. {} aka JSON
   6. Collections
      1. Array
      2. String, array of characters
   7. Overloaded Operators
      1. +, numertic add and string concatination
      2. == The value equality
      3. === Deep Equal First Type Equal and then value  
   8. Iterations
      1. for..loop
      2. for..in loop

# ES 6 Programming Features

1. Scope definition for variable using 'let' keyword
2. Template String
   1. A mechanism of defining an immutable string(?)
3. Spread Operator
   1. Creating an immutable object by adding new porpoerties and behavior at runtime 
4. Arrow Operator
   1. =>
5. const
6. Array and String Enhancements by adding new methods
7. New Collections
   1. Set
   2. Map
8. Object Oriented Programming  
9. Modularity
   1.  Export
   2.  Import
10. Modern ES 6 Features
   3. Promises
   4. async / await
    
# Languages supporing ES 6

1. High-Level JavaScript aka Modern JavaScript
   1. Used by React.js, Vue.js, Ember.js, Node.js, and many ES 6 based libraries and frameworks

2. TypeScript
   1. By Microsoft, open source
   2. Used by Angular (Primary language)
   3. Other ES 6 Libraries
      1. React.js, and other ES 6 based libraries and Frameworks
3. Dart
   1. Language by google community
   2. Used by Angular
ES 6 --> Transpiler --> Browser Compatible JavaScript

# ES 6 Programming

1. Configure Babel Tranpiler
   1. create package.json
      1. npm init -y
      2. The 'dependencies' section
         1. USed during the Package / application  execution
            1. npm install --save <PACKAGE-NAME>
      3. The  'devDependencies' section
         1. The Package dependeicies used during  app development and testing
         2. npm install --save-dev <PACKAGE-NAME>
   2. Install Babel for Transpilation
      1. @bable/cli
         1. CLI tools for executing the bable transpilation
            1. install it in global scope
               1. npm install -g @bable/cli (from windows command prompt)
               2. sudo install -g @bable/cli (from linux and mac terminal)
            2. Use it for the application
               1. npm install --save-dev @bable/cli 
         2. @bable/core
            1. The actual bable transpiler object model
               1. npm install -g @bable.core
               2. npm install --save-dev @bable/core
         3. Bable ENvironment for Transpilation for ES 6 to ES 3/5
            1. npm install --save-dev @babel/polyfill @babel/preset-env @bable/preset-es2015 @babel/preset-stage-0
2. ES Standards and their libraries
   1. ES 2015 --> ES6
   2. ES 2016 --> ES7
   3. ES 2017 --> ES8
   4. ES 2018 --> ES9
   5. ES 2019/2020 -> ES 10 aka esnext


# ES 6 aka Modern JavaScript aka High-Level JavaScript Peogramming

- Command for transpilation of ES 6 into Browser Compatible JavaScript using babel
  - babel <SOURCE-FILE-PATH-NAME>.js -o <TARGET-FILE-PATH-NAME>.build.js
  - <SOURCE-FILE-PATH-NAME>.js, the ES 6 file
  - -o  is transpiled output
  - <TARGET-FILE-PATH-NAME>.build.js, transpiled output file generated

- add .jshintrc
  - The JavaScript Resource Configuration file, this is used by editor to manage the source-code warnings
- add .babelrc
  - Babel Trasnpiler rousource configiration file. This is used by babel transpiler to transpile the ES 6 into ES 5/3 based on the polyfills settings to generate moderate optimize code

1. scope definition using 'let'
   1. Used to define 'block-scope' for the dclarations
2. Template String
   1. New syntax for String Management for concatination (easy explanation)
   2. ES 6 mechanism for building 'immutable string object'
      1. immutable string object, means that, it accepts all strings as expressions and build single string object by concatinating it without pasring strings as independent object 
   
``` javascript
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
```

1. Arrays
   1. Data Structure to manage collection of data on JavaScript apps
``` javascript
let names = ['james bomd', 'ethan hunt', 'jack reacher', 'indiana jones', 'jason bourn'];
// simple iteration ES 3
for(let i=0;i<names.length;i++){
    console.log(`Names at ${i}th position is = ${names[i]}`);
}
// simplification of for..loop in ES 3 to ES 5
// the 'in' operator reads data from array by iterating upto length of array
for(let i in names){
    console.log(`Names at ${i}th position is = ${names[i]}`);
}
// ES6 iterations using for..of loop
// the 'of' operator loads iterator to read enrty at each index of the array  
// the entry at each index is read and it will be returned and counter moves to next index 
for(let n of names){
    console.log(`Names in array = ${n}`);
}
```

1. Array Methods
   1. These methods will be used to manipulate array
      1. push() / pop(), adding and removind element from array
      2. indexOf(), lastIndexOf(), chacking an existance of element in array
      3. shift(), unshift(), removing or adding element in array on the top
      4. sort() / reverse(), rearranging array, es6
      5. forEach() / map(), iterating array, es6
      6. filter(), return elements from array based on condition

``` javascript
let names = ['james bond', 'ethan hunt', 'jack reacher', 'indiana jones', 'jason bourn'];
// show all elements

function printValues(n,i){
    console.log(`name at ${i}the position is = ${n}`);
}
// explicit funciton callback
names.forEach(printValues);
console.log();
// implicit function callback
names.forEach(function(n,i){
    console.log(`name at ${i}the position is = ${n}`);
});
console.log();
// using 'arrow operator' in ES 6
// if a function is accepting 'callback function' as input operator then we can replace
// the callback using arrow operator
names.forEach((n,i)=> {
    console.log(`name at ${i}the position is = ${n}`);
});

// the filter function
// return elements from array based on condition into new array
// older code
let resultArray=[];
for(let i=0;i<names.length;i++){
    if(names[i].length >=12){
        resultArray.push(names[i]);
    }
}
console.log(resultArray);
// using ES6

let result = names.filter((n,i)=>{
    return n.length>=12;
});
console.log(result);
```
1. Foreach vs map

``` javascript
let myarray = [1,2,3,4,5];
// foreach cannot modify the array itself while iterating
let res1 = myarray.forEach((n,i)=>{
   return myarray[i] = n*2;
});

console.log(`Data in myarray with forEach ${myarray}`);
console.log(`Data in myarray with forEach ${res1}`);

let res = myarray.map((n,i)=>{
    // modify the array itself by doubling each record in array
    return myarray[i] = n*2;
});

console.log(`Data in myarray with map ${res}`);
console.log(`Data in myarray with map ${myarray}`);
```

# Hands-on lab
1. Create an array of strings and perform following operations (Immediate)
   1. Sort and Reverse the array  (sort and revrese functions) 
      1. Based on Length of string
      2. Based on the aplhabetic order
   2. Print all strings containing 'a' in it
3. create a string object with test data as follows (Offline)
   1. The James Bond series focuses on a fictional British Secret Service agent created in 1953 by writer Ian Fleming, who featured him in twelve novels and two short-story collections. Since Fleming's death in 1964, eight other authors have written authorised Bond novels or novelisations: Kingsley Amis, Christopher Wood, John Gardner, Raymond Benson, Sebastian Faulks, Jeffery Deaver, William Boyd and Anthony Horowitz. The latest novel is Forever and a Day by Anthony Horowitz, published in May 2018. Additionally Charlie Higson wrote a series on a young James Bond, and Kate Westbrook wrote three novels based on the diaries of a recurring series character, Moneypenny.

The character—also known by the code number 007 (pronounced "double-O-seven")—has also been adapted for television, radio, comic strip, video games and film. The films are the longest continually running film series of all time and have grossed over US$7.04 billion in total, making it the sixth-highest-grossing film series to date, which started in 1962 with Dr. No, starring Sean Connery as Bond. As of 2021, there have been twenty-four films in the Eon Productions series. The most recent Bond film, Spectre (2015), stars Daniel Craig in his fourth portrayal of Bond; he is the sixth actor to play Bond in the Eon series. There have also been two independent productions of Bond films: Casino Royale (a 1967 spoof starring David Niven) and Never Say Never Again (a 1983 remake of an earlier Eon-produced film, 1965's Thunderball, both starring Connery). In 2015 the series was estimated to be worth $19.9 billion,[1] making James Bond one of the highest-grossing media franchises of all time.

The Bond films are renowned for a number of features, including the musical accompaniment, with the theme songs having received Academy Award nominations on several occasions, and two wins. Other important elements which run through most of the films include Bond's cars, his guns, and the gadgets with which he is supplied by Q Branch. The films are also noted for Bond's relationships with various women, who are sometimes referred to as "Bond girls".

Perform following operations on it
   - FInd out number of words
   - find out how many times word 'in' ,'and', 'the' occures in the string
   - find out number of blank spaces in it
   - Change the string in Title case (first character of each word in Upper case)