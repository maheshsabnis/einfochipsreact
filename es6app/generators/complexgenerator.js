const data = [
    10,[20], [
        [1,[2,3,4]]
    ]
];

// a traverser generator
function* nestedTraverserGenerator(collection){
    if(!collection) {return;} // if no records

    for(let counter=0; counter < collection.length; counter++){
        let entry = collection[counter]; // reading an entry

        // if an element in array is collection
        if(entry instanceof Array) {
            // self iteration
            yield* nestedTraverserGenerator(entry);
        } else {
            yield entry; // produce the enrty and move next
        }
    }
}

const generator = nestedTraverserGenerator(data);
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log();

const readGenerator = generator.next();

// while(!readGenerator.done) {
//     console.log(readGenerator.value);
//     generator.next();
// }