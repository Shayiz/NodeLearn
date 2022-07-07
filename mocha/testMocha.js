const assert = require('chai').assert;
const sayHello = require('../app').sayHello;
const addNumbers = require('../app').addNumbers;

describe('App',function(){
    describe('SayHello',function(){

        it('App should return hello',function(){
            assert.equal(sayHello(),'Hello');
        });
        it('SayHello should return type string',function(){
            let result = sayHello();
            assert.typeOf(result,'string');
        });
    });

    describe('Number',function(){

        it('Add numbers should be abpve 5',function(){
            assert.isAbove(addNumbers(5,5),5);
        })
    });
})

