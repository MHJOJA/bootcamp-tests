
function isFromCapeTown(registration){
  if (registration.startsWith("CA")){
    return true;
  }
  return false;
}

describe('isFromCapeTown function', function(){

  it('should return all CA registration numbers', function(){
    assert.equal(false, isFromCapeTown('CA 123 254, CA'));
  });

});
