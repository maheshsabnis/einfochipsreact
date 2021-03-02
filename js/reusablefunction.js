// reusable utility function
function changeCase(str, c) {
    if(c == 'L')
        return str.toLowerCase();
    if(c == "U")
        return str.toUpperCase();
    return str;        
}

var str = "JaavScript Application Development.";

console.log('Upper Case of ' + str + ' is = ' + changeCase(str, "U"));
console.log('Lower Case of ' + str + ' is = ' + changeCase(str, "L"));