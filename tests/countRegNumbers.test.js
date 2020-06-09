 
describe('countRegNumbers function', function(){

  it('should count  all  registration numbers', function(){
    assert.equal(3, countRegNumber('ADS 458 GP, CA 123 123, CY 123 456'));
  });
  it('should return all  registration numbers', function(){
    assert.equal(2, countRegNumber('FTS 45876 L, XSD 458 MP'));
  });


});
