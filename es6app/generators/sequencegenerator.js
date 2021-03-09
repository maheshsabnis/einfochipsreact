// in ES 6 function* is symbol for self-iteration
// this means that the function will read collection and
// produce each record (means yield) from collection and the funciton 
// will return
// each record first and then move to next record
function* makeRangeIteratorGenerator(start=0, end=100, step=1){
    let iterationCount = 0;
    for(let i=start; i<= end; i+=step){
        iterationCount++;
        yield i; // return and proceed to next record
    }
    return iterationCount; // the value will be set by the yield
}
const iterator = makeRangeIteratorGenerator(1,20,1);
// the 'next()' is a Generator function of ES6
// set the counter for the first record in the collection or sequence
// and start generating values from it and yield it
let result = iterator.next();
while(!result.done){
    console.log(result.value);
    result =  iterator.next();
}