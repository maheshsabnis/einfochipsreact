// the JSON object with predefined schema
var obj1= {
    id:101,
    name: 'ABC'
};

console.log(obj1.id + '  ' + obj1.name);

// assigning obj1 to other object e.g. obj2
var obj2 = obj1;
console.log(obj2.id + '  ' + obj2.name);
// update the obj2
obj2.name = "ABCDEFG";
console.log('After update in obj2.name  obj2.name = ' + obj2.name + ' \n and obj1.name = ' + obj1.name);

console.log(obj1 === obj2); // deep equality