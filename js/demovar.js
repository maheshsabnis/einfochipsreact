var x; // variable declartion w/o the initial value

x = 10;
console.log('Type of x = ' + typeof(x) + ' and value of x = ' + x);
x = 'xyz';
console.log('Type of x = ' + typeof(x) + ' and value of x = ' + x);
x = [10,20,30];
console.log('Type of x = ' + typeof(x) + ' and value of x = ' + x);
x = {num1:10};
console.log('Type of x = ' + typeof(x) + ' and value of x = ' + x.num1);
x = new Date(2021,2,1);
console.log('Type of x = ' + typeof(x) + ' and value of x = ' + x);
x = function(){};
console.log('Type of x = ' + typeof(x) + ' and value of x = ' + x);

for(var x1 =0; x1<5;x1++) {
    console.log('In loop x = ' + x1);
}
console.log('outside of loop x = ' + x1);
x1++;
console.log('outside of loop after increament x = ' + x1);
