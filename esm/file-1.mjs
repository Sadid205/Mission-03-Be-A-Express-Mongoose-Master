// const var1 = require('./file-2');
import {a,b} from "./file-2.mjs"
import ADD from "./file-2.mjs"
// const {a : a3,add : add3,b : b3} = require('./file-3')
import {a as A3,b as B3,add as ADD3} from "./file-3.mjs"
console.log(a);
console.log(b);
console.log(ADD(2,3));
// console.log(A3);
// console.log(ADD3(2,3,4));
// console.log(B3);