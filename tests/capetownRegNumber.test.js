
describe('isFromCapeTown function', function(){

  it('should return all CA registration numbers', function(){
    assert.equal(true, isFromCapeTown('CA 123 254'));
  });
  it('should fail if registration numbers dont start with CA', function(){
    assert.equal(false, isFromCapeTown('CJ 158 277'));
  });


});
