let objectSet = new Set();

// directly adding objects as JSON in Set
objectSet.add({id:1,name:'A'});
objectSet.add({id:2,name:'B'});
objectSet.add({id:3,name:'C'});
objectSet.add({id:4,name:'D'});
objectSet.add({id:1,name:'A'}); // though similar values the object will be different so accept by set

console.log(`Size of Set is = ${objectSet.size}`); // 5

let o1 = {id:1,name:'A'};
let o2 = {id:2,name:'B'};
let o3 = {id:3,name:'C'};
let o4 = {id:4,name:'D'};

let newObjectSet = new Set();
newObjectSet.add(o1); 
newObjectSet.add(o2); 
newObjectSet.add(o3); 
newObjectSet.add(o4); 
newObjectSet.add(o1);  // o1 is repeating so will be rejected by set
console.log(`Size of Set is = ${newObjectSet.size}`); // 4

newObjectSet.forEach((v)=>{
    console.log(`Records in newOnjectSet is = ${JSON.stringify(v)}`);
});


let modifiedObjectSet = new Set();
modifiedObjectSet.add(o1); 
modifiedObjectSet.add(o2); 
modifiedObjectSet.add(o3); 
modifiedObjectSet.add(o4); 
o1.name = 'E';
modifiedObjectSet.add(o1);  // o1 is repeating so will be rejected by set
console.log(`Size of Set is = ${modifiedObjectSet.size}`);

modifiedObjectSet.forEach((v)=>{
    console.log(`Records in modifiedObjectSet is = ${JSON.stringify(v)}`);
});

