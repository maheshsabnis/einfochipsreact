function doWork(x){
    if(x){
        let y=10;
        console.log('in side if y = ' + y);
    }
    y++;
    console.log('out side if y = ' + y);
}

doWork(true);
doWork(false);