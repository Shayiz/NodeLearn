var assert = require('assert')
//const assert = require('chai').assert;

describe.skip('Array',function(){
    describe('£indexoF()',function(){
        it('sholud return -1 when the value is not present',function(){
            assert.equal([1,2,3].indexOf(4),-1);
        })
    })
})



describe.skip('Double Done',function(){
    it('doubleDone',function(done){
        setImmediate(done);
        //setImmediate(done);
    })
})


describe.skip('User',function(){
    describe('£save()',function(){
        it('Should save without error',function(done)
        {
            var user = new User('Luna');
            user.save(done);
            })
        })
    })



describe.skip('Array', function () {
    describe('#indexOf()', function () {
      it('should return -1 when the value is not present', function () {
        [1, 2, 3].indexOf(5).should.equal(-1);
        [1, 2, 3].indexOf(6).should.equal(-1);
      });
    });
  });




  describe.skip('Array', function () {
    describe('#indexOf()', function () {
      // pending test below
      it('should return -1 when the value is not present');
    });
  });

//dynamic 
  function add(args){
    return args.reduce((prev,cur)=>prev + cur,0);

  }
describe('add()',function(){
    const tests = [
        {args:[1,2],expected:3},
        {args:[2,2,3,4],expected:11},
        {args:[5,2,-1],expected:6},
        

    ];
    tests.forEach(({args,expected}) => {
        it('correctly adds' + args.length,function(){
            const res = add(args);
            assert.strictEqual(res,expected);
        })
    })

})
