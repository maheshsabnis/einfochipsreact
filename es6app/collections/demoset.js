let data = new Set();

// add data
data.add(10);
data.add(20);
data.add(30);
data.add(40);
data.add(50);
data.add(50);
console.log(`Length of Set is = ${data.size}`);
data.forEach((v,i)=>{
    console.log(`Data at ${i}the position is = ${v}`);
});
// check if the record is avalaible
console.log(data.has(50));
console.log(data.has(60));
console.log(data.delete(50));
data.forEach((v,i)=>{
    console.log(`Data at ${i}the position is = ${v}`);
});