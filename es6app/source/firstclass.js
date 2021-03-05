class MyClass {

    // parameterized constructor (ctor)
    constructor(x,y){
        this.num1 = x;
        this.num2 = y;
        this.val = 0;
    }  
    sum(){
       return this.num1 + this.num2; 
    }

    // properties
    set Val(v){
        this.val = v;
    }
    get Val(){
        return this.val;
    }

    additon(...value){
        let sum = 0;
        if(value.length > 0) {
            value.forEach((v,i)=>{
                sum+=v;
            });
        }
        return sum;
    }
}

let o1=new MyClass(10,20);
console.log(`Sum = ${o1.sum()}`);
o1.Val = 100;
console.log(`val = ${o1.Val}`);

console.log(`Add 2 ${o1.additon(2,3)}`); // arguments with 2 parameters
console.log(`Add 3 ${o1.additon(2,3,4)}`);// arguments with 3 parameters
console.log(`Add 4 ${o1.additon(2,3,4,5)}`);// arguments with 4 parameters
console.log(`Add 5 ${o1.additon(2,3,4,5,6)}`);// arguments with 5 parameters

let arr = [10,20];
console.log(arr);
let newarr = [...arr,30,40,50,60]; // deep copy or speard of arr with additional values into newarr object

console.log(`New Array after spread into arr ${newarr}`);
arr = [...arr,100,200,300,400];
console.log(`Same arr after apread ${arr}`);

 
