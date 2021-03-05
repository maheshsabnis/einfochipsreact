class Base {
    constructor(v1,v2){
        this.p1 = v1;
        this.p2 = v2;
    }

    getLength(){
        return this.p1.length;
    }
    changeCase(c){
        if(c === "U" || c === "u")
         return this.p1.toUpperCase();
         if(c === "L" || c === "l")
         return this.p1.toLowerCase();

         return this.p1;
    }
}

// the derive class have access to all public members of the base class
// this members are accessed using 'this.' prefix
// if the derive class wite constructor then it must call the base
// class constructor using 'super()'
class Derive extends Base {
    constructor(a,b){
        // values will be passed to base class using super() with paraneters
        super(a,b);
    }
    concat(){
        return `${this.p1} ${this.p2}`;
    }
}

let o2 = new Derive("ES 6 is greate", 'Use it for React');
 
console.log(`Length of string ${o2.getLength()}`);
console.log(`Upper Case ${o2.changeCase("U")}`);
console.log(`Lower Case ${o2.changeCase("L")}`);
console.log(`Concat ${o2.concat()}`);

// can I access derive class functions using Base class instance
let o3 = new Base("value1", "Value2");
o3.concat(); // runtime error
// can we have type caseting
((Derive)o3).concat(); // runtime error

