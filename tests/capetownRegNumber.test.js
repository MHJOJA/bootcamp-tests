
describe('isFromCapeTown function', function(){

  it('should return all CA registration numbers', function(){
    assert.equal(true, isFromCapeTown('CA 123 254, CA'));
  });
  it('should return all CA registration numbers', function(){
    assert.equal(true, isFromCapeTown('CA 158 277, CA'));
  });


});
