var assert = require('assert')

//Test1
//assert(5-5,'error')

//deepEquel
// var x = { a : { n: 0 } };
// var y = { a : { n: 0 } };
// var z = { a : { n: 1 } };
// assert.deepEqual(x, y,'Error'); //OK
// assert.deepEqual(x, z,'Terror');



//deepStrictEquel
// var x = { a : { n: 0 } };
// var y = { a : { n: 0 } };
// var z = { a : { n: '0' } };
// assert.deepStrictEqual(x, y); //OK
// assert.deepStrictEqual(x, z);


//equel
// assert.equal(50, 50); //OK
// assert.equal(50, "50"); //OK
// assert.equal(50, 70);

//check if a value is true
// assert.ok(50 > 70)


