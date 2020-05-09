function countRegNumber(num) {
  console.log(num);
   var isGood = num.split(",");
   return isGood.length;
 
 }
 
describe('countRegNumbers function', function(){

  it('should return all  registration numbers', function(){
    assert.equal(1, countRegNumber('registration'));
  });

});
