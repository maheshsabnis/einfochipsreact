function MyObject(){
    return {
        add:function(a,b){
            return a + b;
        },
        mult:function(a,b){
            return a * b;
        }
    };
}

var obj1  = new MyObject(); // constructor
console.log(obj1.add(10,20));
console.log(obj1.mult(10,20));