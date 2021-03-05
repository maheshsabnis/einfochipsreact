// import the type
// physical Relative path for the file that is exporting the type
// so that node.js can understand it
import { array,oprtaions } from "./exportedtypes.js";

// use the imported type

array.print();

let str = "ES 6 Modules";
console.log(oprtaions.getLength(str));
console.log(oprtaions.upper(str));
