// module.exports ={sayHello : function(){
//     return 'Hello'
// },
// addNumbers : function(value1,value2){
//     return value1 + value2;
// }};
 
const assert  = require('assert')
console.log(typeof [1,2,3])

function add(args) {
    console.log(typeof args)
    return args.reduce((prev, curr) => prev + curr);
  }
console.log(add([1,2]))