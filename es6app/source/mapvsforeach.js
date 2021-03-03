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