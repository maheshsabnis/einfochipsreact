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


