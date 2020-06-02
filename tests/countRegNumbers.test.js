 
describe('countRegNumbers function', function(){

  it('should return all  registration numbers', function(){
    assert.equal(2, countRegNumber('ADS 458 GP, G'));
  });
  it('should return all  registration numbers', function(){
    assert.equal(2, countRegNumber('FTS 45876 L, '));
  });


});
