export const array = {
    print: function(){
        let arr = ["A","B","C"];
        arr.forEach((v,i)=>{
            console.log(`Record at ${i}th position is = ${v}`);
        });
    }
};

export const oprtaions  = {
    getLength:function(str){
        return str.length;
    },
    upper:function(str){
        return str.toUpperCase();
    }
};