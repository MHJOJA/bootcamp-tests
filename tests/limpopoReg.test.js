
describe('isFromlimpopo function', function(){

  it('should return all L registration numbers', function(){
      assert.equal(false, isFromLimpopo('SXA 125 L, L '));
  });
  it('should return all L registration numbers', function(){
    assert.equal(false, isFromLimpopo('SAD 235 L, L '));
});


});
