 
describe('countRegNumbers function', function(){

  it('should return 3 registration numbers', function(){
    assert.equal(3, countRegNumber('ADS 458 GP, CA 123 123, CY 123 456'));
  });
  it('should return 2 if there are two registration numbers' , function(){
    assert.equal(2, countRegNumber('FTS 45876 L, XSD 458 MP'));
  });


});
