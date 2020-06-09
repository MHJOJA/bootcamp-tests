
describe('isFromlimpopo function', function(){

  it('should return all L registration numbers', function(){
      assert.equal(true, isFromLimpopo('SXA 125 L, L '));
  });
  it('should fail if registration numbers do not end with L', function(){
    assert.equal(false, isFromLimpopo('SAD 235 MP, GP '));
});


});
