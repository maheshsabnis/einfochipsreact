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