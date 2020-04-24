
function isFromLimpopo(registration){
  if (registration.endsWith("L")){
    return true;
  }
  return false;
};

describe('isFromlimpopo function', function(){

  it('should return all L registration numbers', function(){
      assert.equal(false, isFromLimpopo('registration'));
  });

});
