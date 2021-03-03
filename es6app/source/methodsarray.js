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