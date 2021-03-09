let map = new Map();
map.set(1, {id:101, name:'Tejas'});
map.set(2, {id:102, name:'Mahesh'});
map.set(3, {id:103, name:'Ramesh'});
map.set(4, {id:104, name:'Ram'});
map.set(5, {id:105, name:'Sabnis'});
map.set(5, {id:105, name:'Sabnis'});// key must be unique so will be omitted

map.forEach((val,key)=>{
    console.log(`Key = ${key} and value = ${JSON.stringify(val)}`);
});

// read record for specific key
console.log(`Entry  = ${JSON.stringify(map.get(4))}`);

console.log(`Entry  = ${map.has(5)}`);
console.log(`Entry  = ${map.has(6)}`);
console.log(`Delete  = ${map.delete(5)}`);
map.forEach((val,key)=>{
    console.log(`Key = ${key} and value = ${JSON.stringify(val)}`);
});
