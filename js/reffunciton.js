var myfunction = function(){
    function print(){
        console.log('Private Print');
    }
    this.add = function(a,b){
        print();
        return a+b;
    };
    this.mult = function(a,b){
        print();
        return a*b;
    };
};

var obj1 = new myfunction(); // call for the ref function aka constructor
console.log('Add = ' + obj1.add(10,20));
console.log('Mult = ' + obj1.mult(10,20));
 
// adding the extended operations in ref. function
myfunction.prototype.square = function (x) {
    return x*x;
};

console.log('Square = ' + obj1.square(100));


